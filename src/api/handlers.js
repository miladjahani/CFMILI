// ============================================================================
// miliconfig v3.1 - هندلرهای REST API (مدیریت کاربران D1، تنظیمات، نودهای ترجیحی، وضعیت سیستم)
// ============================================================================

import {
  BRAND_NAME,
  CONFIG_DEFAULTS,
  DIRECT_DOMAINS,
  OFFICIAL_DIRECT_IPS
} from '../config/defaults.js';
import { USER_PRESETS } from '../config/presets.js';
import {
  CF_IPV4_RANGES,
  CF_IPV6_RANGES,
  CLEAN_EDGE_IPV4,
  CLEAN_EDGE_IPV6,
  LOCATIONS,
  SANCTION_FREE_CODES
} from '../config/locations.js';
import {
  SCANNER_LIMITS,
  normalizeScanInput,
  resolveHostsToFixedIps,
  scanIpPool,
  summarizeScanResults
} from '../core/scanner.js';
import { isValidDomain, isValidIpAddress, parseAddressAndPort } from '../core/utils.js';
import {
  addAuditLog,
  createUser,
  deleteUser,
  ensureD1Schema,
  getStorageDiagnostics,
  getUserByIdOrToken,
  listUsers,
  loadGlobalConfig,
  resetGlobalConfig,
  resetUserStats,
  saveGlobalConfig,
  updateUser
} from '../db/d1.js';
import { generateUserNodesList } from '../subscription/generator.js';
import { getSocketConnector } from '../core/runtime.js';
import { probeProxyList } from '../core/proxyProbe.js';
import {
  PROXY_POOL,
  listCountryProxies,
  pickProxiesAcrossCountries,
  proxyPoolCountries,
  proxyPoolStats
} from '../config/proxyPool.js';

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
}

function parseYxArray(yxStr = '') {
  if (!yxStr || !String(yxStr).trim()) return [];
  const items = String(yxStr)
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
  const res = [];
  for (const item of items) {
    let name = '';
    let addrPart = item;
    if (item.includes('#')) {
      const parts = item.split('#');
      addrPart = parts[0].trim();
      name = parts.slice(1).join('#').trim();
    }
    const { address, port } = parseAddressAndPort(addrPart);
    if (!address) continue;
    if (!name) name = `${address}:${port || 443}`;
    res.push({
      ip: address,
      port: port || 443,
      name,
      addedAt: new Date().toISOString()
    });
  }
  return res;
}

function serializeYxArray(arr = []) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr.map(item => `${item.ip}:${item.port || 443}#${item.name || item.ip}`).join(',');
}

// ۱. مدیریت تنظیمات سراسری پنل (/api/config)
export async function handleConfigApi(request, env) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1';

  if (request.method === 'GET') {
    const cfg = await loadGlobalConfig(env);
    const diag = await getStorageDiagnostics(env);
    return jsonResponse({
      ...cfg,
      kvEnabled: true,
      d1Enabled: diag.d1Enabled,
      d1BindingName: diag.d1BindingName,
      storageMode: diag.d1Enabled ? 'D1' : diag.kvEnabled ? 'KV' : 'Memory'
    });
  }

  if (request.method === 'POST') {
    try {
      const body = await request.json();
      if (body && body._reset === true) {
        const cfg = await resetGlobalConfig(env);
        await addAuditLog(env, 'بازنشانی تنظیمات پنل', 'Reset to defaults', clientIp);
        return jsonResponse({
          success: true,
          message: 'تمام تنظیمات به مقادیر پیش‌فرض بازنشانی شد',
          config: cfg
        });
      }
      const updated = await saveGlobalConfig(env, body || {});
      await addAuditLog(env, 'ذخیره تنظیمات پنل', 'بروزرسانی پیکربندی سراسری', clientIp);
      return jsonResponse({
        success: true,
        message: 'تنظیمات با موفقیت در دیتابیس ذخیره شد',
        config: updated
      });
    } catch (err) {
      return jsonResponse({
        success: false,
        message: 'خطا در ذخیره تنظیمات: ' + (err?.message || String(err))
      }, 500);
    }
  }

  return jsonResponse({ error: 'Method not allowed' }, 405);
}

// ۲. مدیریت کامل کاربران در دیتابیس D1 (/api/users)
export async function handleUsersApi(request, env) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1';
  const url = new URL(request.url);

  if (request.method === 'GET') {
    const users = await listUsers(env);
    const globalCfg = await loadGlobalConfig(env);
    return jsonResponse({
      success: true,
      brand: BRAND_NAME,
      defaults: {
        ...CONFIG_DEFAULTS,
        ...globalCfg
      },
      presets: USER_PRESETS,
      count: users.length,
      users
    });
  }

  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const created = await createUser(env, body || {}, clientIp);
      return jsonResponse({
        success: true,
        message: `کاربر «${created.username}» با موفقیت ساخته شد`,
        user: created
      });
    } catch (err) {
      return jsonResponse({
        success: false,
        message: 'خطا در ساخت کاربر: ' + (err?.message || String(err))
      }, 500);
    }
  }

  if (request.method === 'PUT') {
    try {
      const body = await request.json();
      const targetId = body.id || url.searchParams.get('id');
      if (!targetId) {
        return jsonResponse({ success: false, message: 'شناسه کاربر الزامی است' }, 400);
      }
      if (body.action === 'reset') {
        const resetObj = await resetUserStats(env, targetId, clientIp);
        if (!resetObj) return jsonResponse({ success: false, message: 'کاربر یافت نشد' }, 404);
        return jsonResponse({
          success: true,
          message: `مصرف کاربر «${resetObj.username}» صفر شد`,
          user: resetObj
        });
      }
      const updated = await updateUser(env, targetId, body, clientIp);
      if (!updated) {
        return jsonResponse({ success: false, message: 'کاربر مورد نظر یافت نشد' }, 404);
      }
      return jsonResponse({
        success: true,
        message: `تنظیمات کاربر «${updated.username}» بروزرسانی شد`,
        user: updated
      });
    } catch (err) {
      return jsonResponse({
        success: false,
        message: 'خطا در ویرایش کاربر: ' + (err?.message || String(err))
      }, 500);
    }
  }

  if (request.method === 'DELETE') {
    try {
      let targetId = url.searchParams.get('id');
      if (!targetId) {
        try {
          const body = await request.json();
          targetId = body?.id;
        } catch (_e) {}
      }
      if (!targetId) {
        return jsonResponse({ success: false, message: 'شناسه کاربر الزامی است' }, 400);
      }
      const ok = await deleteUser(env, targetId, clientIp);
      if (!ok) {
        return jsonResponse({ success: false, message: 'کاربر یافت نشد' }, 404);
      }
      return jsonResponse({
        success: true,
        message: 'کاربر با موفقیت حذف شد'
      });
    } catch (err) {
      return jsonResponse({
        success: false,
        message: 'خطا در حذف کاربر: ' + (err?.message || String(err))
      }, 500);
    }
  }

  return jsonResponse({ error: 'Method not allowed' }, 405);
}

// ۳. مدیریت لیست IP ترجیحی (/api/preferred-ips) - سازگار با yx-tools و پنل گرافیکی
export async function handlePreferredIpsApi(request, env, bypassAeCheck = false) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const cfg = await loadGlobalConfig(env);
  if (!bypassAeCheck && cfg.ae !== 'yes' && request.headers.get('X-Mili-Admin') !== '1') {
    return jsonResponse({
      success: false,
      error: 'API غیرفعال است',
      message: 'برای استفاده از API خارجی، گزینه «اجازه مدیریت API (ae)» را در تنظیمات فعال کنید.'
    }, 403);
  }

  try {
    if (request.method === 'GET') {
      const list = parseYxArray(cfg.yx || '');
      return jsonResponse({
        success: true,
        count: list.length,
        data: list
      });
    }

    if (request.method === 'POST') {
      const body = await request.json();
      const itemsToAdd = Array.isArray(body) ? body : [body];
      if (!itemsToAdd.length) {
        return jsonResponse({ success: false, message: 'لیست IP ارسالی خالی است' }, 400);
      }
      const currentList = parseYxArray(cfg.yx || '');
      const added = [];
      const skipped = [];
      const errors = [];

      for (const item of itemsToAdd) {
        const rawIp = String(item?.ip || item?.domain || '').trim();
        if (!rawIp) {
          errors.push({ ip: 'نامشخص', reason: 'آدرس IP یا دامنه الزامی است' });
          continue;
        }
        const port = parseInt(item.port || 443, 10) || 443;
        const name = String(item.name || `${rawIp}:${port}`).trim();
        if (!isValidIpAddress(rawIp) && !isValidDomain(rawIp)) {
          errors.push({ ip: rawIp, reason: 'فرمت IP یا دامنه نامعتبر است' });
          continue;
        }
        if (currentList.some(x => x.ip === rawIp && x.port === port)) {
          skipped.push({ ip: rawIp, port, reason: 'قبلاً ثبت شده است' });
          continue;
        }
        const entry = { ip: rawIp, port, name, addedAt: new Date().toISOString() };
        currentList.push(entry);
        added.push(entry);
      }

      if (added.length > 0) {
        await saveGlobalConfig(env, { yx: serializeYxArray(currentList) });
      }

      return jsonResponse({
        success: added.length > 0,
        message: `${added.length} نود ترجیحی با موفقیت اضافه شد`,
        added: added.length,
        skipped: skipped.length,
        errors: errors.length,
        data: { addedIPs: added, skippedIPs: skipped, errors }
      });
    }

    if (request.method === 'DELETE') {
      const body = await request.json();
      if (body?.all === true) {
        const currentList = parseYxArray(cfg.yx || '');
        await saveGlobalConfig(env, { yx: '' });
        return jsonResponse({
          success: true,
          message: `تمام ${currentList.length} نود ترجیحی پاک شدند`,
          deletedCount: currentList.length
        });
      }
      if (!body?.ip) {
        return jsonResponse({ success: false, message: 'فیلد ip برای حذف الزامی است' }, 400);
      }
      const port = parseInt(body.port || 443, 10) || 443;
      const currentList = parseYxArray(cfg.yx || '');
      const nextList = currentList.filter(x => !(x.ip === body.ip && x.port === port));
      await saveGlobalConfig(env, { yx: serializeYxArray(nextList) });
      return jsonResponse({
        success: true,
        message: 'نود ترجیحی حذف شد',
        deleted: { ip: body.ip, port }
      });
    }

    return jsonResponse({ error: 'Method not allowed' }, 405);
  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'خطا در پردازش درخواست',
      message: err?.message || String(err)
    }, 500);
  }
}

// ۳.۵ اسکنر داخلی آی‌پی (معادل cfnew) و تبدیل دامنه به آی‌پی ثابت (/api/scanner)
export async function handleScannerApi(request, env, bypassAeCheck = false) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1';
  const cfg = await loadGlobalConfig(env);
  if (!bypassAeCheck && cfg.ae !== 'yes' && request.headers.get('X-Mili-Admin') !== '1') {
    return jsonResponse({ success: false, error: 'API غیرفعال است' }, 403);
  }

  if (request.method === 'GET') {
    return jsonResponse({
      success: true,
      engine: 'mili-cfnew-scanner',
      locations: LOCATIONS.map(l => ({
        code: l.code,
        flag: l.flag,
        name: l.name,
        colo: l.colo,
        egressIp: l.egress,
        sanctionFree: SANCTION_FREE_CODES.includes(l.code)
      })),
      edgeIps: { ipv4: CLEAN_EDGE_IPV4, ipv6: CLEAN_EDGE_IPV6 },
      ranges: { ipv4: CF_IPV4_RANGES, ipv6: CF_IPV6_RANGES },
      limits: SCANNER_LIMITS
    });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ success: false, error: 'Method not allowed' }, 405);
  }

  let body = {};
  try {
    body = await request.json();
  } catch (_e) {
    return jsonResponse({ success: false, error: 'بدنه درخواست JSON نامعتبر است' }, 400);
  }

  const action = String(body.action || 'scan').toLowerCase();
  const port = Math.max(1, Math.min(65535, parseInt(body.port, 10) || SCANNER_LIMITS.defaultPort));
  const timeoutMs = Math.max(500, Math.min(10000, parseInt(body.timeoutMs, 10) || SCANNER_LIMITS.defaultTimeoutMs));
  const concurrency = Math.max(1, Math.min(6, parseInt(body.concurrency, 10) || SCANNER_LIMITS.defaultConcurrency));

  try {
    if (action === 'scan') {
      const targets = normalizeScanInput(body.ips || [], {
        ipv6: Boolean(body.ipv6),
        count: body.count
      });
      if (!targets.length) {
        return jsonResponse({ success: false, error: 'هیچ آی‌پی معتبری برای اسکن یافت نشد' }, 400);
      }
      const sni = String(body.sni || '').trim();
      const results = await scanIpPool(targets, {
        port,
        timeoutMs,
        concurrency,
        connector: getSocketConnector(),
        ...(sni ? { sni } : {})
      });
      const summary = summarizeScanResults(results);

      if (body.save === true && summary.healthyIps.length > 0) {
        const currentList = parseYxArray(cfg.yx || '');
        let added = 0;
        for (const ip of summary.healthyIps.slice(0, 10)) {
          if (currentList.some(x => x.ip === ip && x.port === port)) continue;
          currentList.push({ ip, port, name: `CF-${ip}`, addedAt: new Date().toISOString() });
          added += 1;
        }
        if (added > 0) {
          // آی‌پی‌های اسکن‌شده باید در تولید ساب‌لینک هم استفاده شوند
          await saveGlobalConfig(env, { yx: serializeYxArray(currentList), epi: 'yes' });
          await addAuditLog(env, 'اسکن داخلی آی‌پی', `${added} آی‌پی سالم ذخیره شد · پورت ${port}`, clientIp);
        }
        summary.saved = added;
      }

      return jsonResponse({ success: true, action, port, results, summary });
    }

    if (action === 'resolve') {
      const hosts = Array.isArray(body.hosts)
        ? body.hosts
        : String(body.hosts || '').split(/[\s,]+/).filter(Boolean);
      const cleanHosts = hosts
        .map(h => String(h || '').trim())
        .filter(h => isValidDomain(h) || isValidIpAddress(h))
        .slice(0, 40);
      if (!cleanHosts.length) {
        return jsonResponse({ success: false, error: 'هیچ دامنه معتبری ارسال نشده است' }, 400);
      }
      const resolved = await resolveHostsToFixedIps(cleanHosts, { timeoutMs });
      const fixedIps = resolved.map(r => r.fixedIp).filter(Boolean);

      if (body.save === true && fixedIps.length > 0) {
        const currentList = parseYxArray(cfg.yx || '');
        let added = 0;
        for (const entry of resolved) {
          if (!entry.fixedIp) continue;
          if (currentList.some(x => x.ip === entry.fixedIp)) continue;
          currentList.push({ ip: entry.fixedIp, port, name: `CF-${entry.host}`, addedAt: new Date().toISOString() });
          added += 1;
        }
        if (added > 0) {
          await saveGlobalConfig(env, { yx: serializeYxArray(currentList), epi: 'yes' });
          await addAuditLog(env, 'تبدیل دامنه به آی‌پی ثابت', `${added} آی‌پی ثابت ذخیره شد`, clientIp);
        }
      }

      return jsonResponse({ success: true, action, resolved, fixedIps });
    }

    return jsonResponse({ success: false, error: 'action نامعتبر است (scan | resolve)' }, 400);
  } catch (err) {
    return jsonResponse({ success: false, error: 'خطا در اجرای اسکنر', message: err?.message || String(err) }, 500);
  }
}

// ۳.۶ استخر پروکسی‌های سالم تفکیک‌شده بر اساس کشور (/api/proxy-pool)
// GET  ?country=DE&limit=40  → لیست پروکسی‌های همان کشور (مرتب بر اساس تاخیر سلامت‌سنجی)
// POST { action: 'ping', country|proxies } → تونل واقعی SOCKS5/HTTP + تاخیر و ✓/✗
// POST { action: 'random', countries, count } → انتخاب رندوم چندکشوری برای نودها
export async function handleProxyPoolApi(request, env, bypassAeCheck = false) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const cfg = await loadGlobalConfig(env);
  if (!bypassAeCheck && cfg.ae !== 'yes' && request.headers.get('X-Mili-Admin') !== '1') {
    return jsonResponse({ success: false, error: 'API غیرفعال است' }, 403);
  }

  const url = new URL(request.url);
  const stats = proxyPoolStats();

  if (request.method === 'GET') {
    const code = String(url.searchParams.get('country') || '').trim().toUpperCase();
    if (!code) {
      return jsonResponse({
        success: true,
        generatedAt: stats.generatedAt,
        total: stats.totalAlive,
        countryCount: stats.countryCount,
        countries: proxyPoolCountries(),
        limits: { maxPing: 12, maxList: 100 }
      });
    }
    const limit = Math.max(1, Math.min(100, parseInt(url.searchParams.get('limit'), 10) || 40));
    const proxies = listCountryProxies(code, limit);
    return jsonResponse({
      success: true,
      country: code,
      total: stats.perCountry[code] || 0,
      count: proxies.length,
      proxies
    });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ success: false, error: 'Method not allowed' }, 405);
  }

  let body = {};
  try {
    body = await request.json();
  } catch (_e) {
    return jsonResponse({ success: false, error: 'بدنه درخواست JSON نامعتبر است' }, 400);
  }

  const action = String(body.action || 'ping').toLowerCase();

  if (action === 'random') {
    const raw = body.countries;
    const requested = (Array.isArray(raw) ? raw : String(raw || 'all').split(/[,\s|]+/))
      .map(c => String(c || '').trim().toUpperCase())
      .filter(Boolean);
    const codes = requested.length && requested[0] !== 'ALL'
      ? requested
      : Object.keys(PROXY_POOL.countries || {});
    const total = Math.max(1, Math.min(60, parseInt(body.count, 10) || 12));
    const picks = pickProxiesAcrossCountries(codes, total, Math.random);
    return jsonResponse({
      success: true,
      count: picks.length,
      countries: [...new Set(picks.map(p => p.country))],
      proxies: picks
    });
  }

  if (action === 'ping') {
    const code = String(body.country || '').trim().toUpperCase();
    const explicit = Array.isArray(body.proxies) ? body.proxies : [];
    const maxProbe = stats.totalAlive > 0 ? 12 : 0;
    let list = [];
    if (explicit.length) {
      list = explicit.slice(0, 12).map(p => (typeof p === 'string' ? p : (p?.s || p?.url || ''))).filter(Boolean);
    } else if (code) {
      list = listCountryProxies(code, Math.min(12, parseInt(body.limit, 10) || 8)).map(p => p.s);
    }
    if (!list.length) {
      return jsonResponse({ success: false, error: 'پروکسی‌ای برای سنجش ارسال نشد' }, 400);
    }
    const timeoutMs = Math.max(800, Math.min(6000, parseInt(body.timeoutMs, 10) || 3000));
    const results = await probeProxyList(list, {
      limit: Math.min(maxProbe || 12, list.length),
      timeoutMs,
      concurrency: 3,
      connector: getSocketConnector()
    });
    return jsonResponse({
      success: true,
      country: code || null,
      total: results.length,
      healthy: results.filter(r => r.ok).length,
      results
    });
  }

  return jsonResponse({ success: false, error: 'action نامعتبر است (ping | random)' }, 400);
}

// ۴. وضعیت زنده داشبورد و دیتابیس D1 (/api/stats & /api/d1)
export async function handleDashboardStatsApi(request, env) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const url = new URL(request.url);

  if (request.method === 'POST' && url.pathname.endsWith('/d1-init')) {
    const res = await ensureD1Schema(env, true);
    const diag = await getStorageDiagnostics(env);
    return jsonResponse({
      success: true,
      message: res.d1Enabled
        ? `جداول دیتابیس D1 (${res.bindingName}) با موفقیت بررسی و آماده شدند.`
        : 'اتصال D1 در تنظیمات Worker/Pages یافت نشد؛ سیستم بدون خطا در حالت حافظه پشتیبان فعال است.',
      d1: res,
      diagnostics: diag
    });
  }

  const globalCfg = await loadGlobalConfig(env);
  const diag = await getStorageDiagnostics(env);
  const users = await listUsers(env);
  const customNodes = parseYxArray(globalCfg.yx || '');
  const totalHealthyIps = customNodes.length + DIRECT_DOMAINS.length + OFFICIAL_DIRECT_IPS.length;

  return jsonResponse({
    success: true,
    brand: BRAND_NAME,
    timestamp: new Date().toISOString(),
    config: globalCfg,
    diagnostics: {
      ...diag,
      healthyCfIps: totalHealthyIps,
      customPreferredCount: customNodes.length,
      builtinDomainCount: DIRECT_DOMAINS.length,
      officialDirectCount: OFFICIAL_DIRECT_IPS.length
    },
    users
  });
}

// ۵. اطلاعات عمومی وضعیت یک کاربر برای صفحه وضعیت (/api/status/:token)
export async function handlePublicUserStatusApi(request, env, token) {
  if (request.method === 'OPTIONS') return jsonResponse({ ok: true });
  const url = new URL(request.url);
  const user = await getUserByIdOrToken(env, token);
  if (!user) {
    return jsonResponse({ success: false, message: 'کاربر یافت نشد' }, 404);
  }
  const nodes = await generateUserNodesList(user, url.hostname, {
    limit: user.subNodeCount
  });
  return jsonResponse({
    success: true,
    brand: BRAND_NAME,
    user: {
      id: user.id,
      username: user.username,
      uuid: user.uuid,
      subNodeCount: user.subNodeCount,
      enabled: user.enabled,
      status: user.status,
      dataLimitGb: user.dataLimitGb,
      usedBytes: user.usedBytes,
      lifetimeBytes: user.lifetimeBytes,
      requestCount: user.requestCount,
      expireDays: user.expireDays,
      expireAt: user.expireAt,
      startOnFirstUse: user.startOnFirstUse,
      ipLimit: user.ipLimit,
      nodeScope: user.nodeScope,
      preset: user.preset,
      protocols: {
        vless: user.config?.ev === 'yes',
        trojan: user.config?.et === 'yes',
        xhttp: user.config?.ex === 'yes',
        ech: user.config?.ech === 'yes',
        jk: user.config?.jk === 'yes'
      }
    },
    nodeCount: nodes.length,
    nodes
  });
}
