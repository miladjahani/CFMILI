// ============================================================================
// miliconfig v3.3 - جمع‌کننده لیست پروکسی (proxy-list aggregator)
// ----------------------------------------------------------------------------
// این اسکریپت تمام مرجع‌های (source) لیست پروکسی ثبت‌شده در
// config/proxy_sources.json را بازدید (fetch) می‌کند، خطوط نامعتبر/تکراری را
// حذف کرده و خروجی یکدست می‌سازد:
//
//   data/raw/<category>/<basename>          -> خامِ هر منبع (برای باگ‌یابی)
//   data/socks5.txt                         -> SOCKS5 واحد و بدون تکرار
//   data/http.txt                           -> HTTP/HTTPS واحد و بدون تکرار
//   data/all.txt                            -> همه با پیشوند پروتکل (socks5:// / http://)
//   data/report.json                        -> آمار fetch، سالم/مرده، تعداد خط
//
// اجرا:
//   npm run fetch:proxies
//   npm run fetch:proxies -- --category socks5 --timeout 8000 --max-lines 5000
//   npm run fetch:proxies -- --check-only      (فقط بررسی زنده بودن منابع، بدون نوشتن)
//
// نکته: فایل‌هایی که در config/proxy_sources.json با «verified: false»
// علامت‌گذاری شده‌اند (404 در آخرین بررسی) به‌صورت پیش‌فرض skip می‌شوند؛
// با فلگ --include-unverified دوباره تلاش می‌شود.
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCES_FILE = path.join(ROOT, 'config', 'proxy_sources.json');
const DATA_DIR = path.join(ROOT, 'data');
const RAW_DIR = path.join(DATA_DIR, 'raw');

const UA = 'Mozilla/5.0 (X11; Linux x86_64) miliconfig-proxy-fetcher/1.0';
const PROTOCOL_PREFIX_RE = /^(socks5h|socks5|socks4|socks4a|socks|http|https):\/\//i;

function parseArgs(argv = []) {
  const args = {
    category: '',
    timeout: 12000,
    concurrency: 8,
    maxLinesPerSource: 0,
    includeUnverified: false,
    checkOnly: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--category') args.category = (argv[++i] || '').trim();
    else if (a === '--timeout') args.timeout = parseInt(argv[++i], 10) || 12000;
    else if (a === '--concurrency') args.concurrency = Math.max(1, parseInt(argv[++i], 10) || 8);
    else if (a === '--max-lines') args.maxLinesPerSource = parseInt(argv[++i], 10) || 0;
    else if (a === '--include-unverified') args.includeUnverified = true;
    else if (a === '--check-only') args.checkOnly = true;
  }
  return args;
}

function loadSources() {
  if (!fs.existsSync(SOURCES_FILE)) {
    throw new Error(`فایل منابع یافت نشد: ${SOURCES_FILE}`);
  }
  const json = JSON.parse(fs.readFileSync(SOURCES_FILE, 'utf8'));
  const categories = json.categories || {};
  const out = [];
  for (const [name, items] of Object.entries(categories)) {
    for (const item of items) {
      if (typeof item === 'string') {
        out.push({ category: name, url: item, verified: true });
      } else if (item && item.url) {
        out.push({ category: name, url: item.url, verified: item.verified !== false });
      }
    }
  }
  return out;
}

// تبدیل یک خط از هر فرمت رایج به { canonical, withProtocol, kind }
// پشتیبانی از: ip:port | user:pass@ip:port | socks5://... | http://... | [ipv6]:port
export function normalizeProxyLine(line) {
  let raw = String(line || '').trim();
  if (!raw || raw.startsWith('#') || raw.startsWith('//')) return null;
  // حذف کامنت انتهایی مثل "1.2.3.4:8080 # comment"
  const spaceHash = raw.indexOf(' #');
  if (spaceHash > -1) raw = raw.slice(0, spaceHash).trim();

  let kind = '';
  const protoMatch = raw.match(PROTOCOL_PREFIX_RE);
  if (protoMatch) {
    const p = protoMatch[0].toLowerCase().replace(/:\/\//, '');
    kind = p.startsWith('socks') ? 'socks5' : (p === 'https' ? 'https' : 'http');
    raw = raw.slice(protoMatch[0].length);
  }

  // جدا کردن remark بعد از #
  const hashIdx = raw.indexOf('#');
  let remark = '';
  if (hashIdx > -1) {
    remark = raw.slice(hashIdx + 1).trim();
    raw = raw.slice(0, hashIdx).trim();
  }
  if (!raw) return null;

  // user[:pass]@host:port
  let auth = '';
  const atIdx = raw.lastIndexOf('@');
  if (atIdx > -1) {
    auth = raw.slice(0, atIdx);
    raw = raw.slice(atIdx + 1);
  }

  let host = '';
  let port = '';
  if (raw.startsWith('[')) {
    const close = raw.indexOf(']');
    if (close < 0) return null;
    host = raw.slice(0, close + 1);
    const rest = raw.slice(close + 1);
    if (!rest.startsWith(':')) return null;
    port = rest.slice(1);
  } else {
    const colonIdx = raw.lastIndexOf(':');
    if (colonIdx < 0) return null;
    host = raw.slice(0, colonIdx);
    port = raw.slice(colonIdx + 1);
  }
  if (!/^\d+$/.test(port)) return null;
  const portNum = Number(port);
  if (portNum < 1 || portNum > 65535) return null;
  if (!host || /\s/.test(host)) return null;
  // هاست باید ipv4/ipv6/domain باشد
  const hostBody = host.startsWith('[') ? host.slice(1, -1) : host;
  const isV4 = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostBody);
  const isV6 = /^[0-9a-fA-F:]+$/.test(hostBody) && hostBody.includes(':');
  const isDomain = /^[a-zA-Z0-9._-]+$/.test(hostBody) && hostBody.includes('.');
  if (!isV4 && !isV6 && !isDomain) return null;
  if (isV6 && !host.startsWith('[')) host = `[${host}]`;

  const core = auth ? `${auth}@${host}:${port}` : `${host}:${port}`;
  const inferredKind = kind || 'socks5';
  const prefix = inferredKind === 'socks5' ? 'socks5://' : `${inferredKind}://`;
  return {
    canonical: core,
    withProtocol: prefix + core,
    kind: inferredKind,
    remark,
  };
}

async function fetchText(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept': 'text/plain,application/json;q=0.9,*/*;q=0.5' },
      signal: controller.signal,
      redirect: 'follow',
    });
    if (!resp.ok) return { ok: false, status: resp.status, text: '' };
    return { ok: true, status: resp.status, text: await resp.text() };
  } catch (err) {
    return { ok: false, status: 0, text: '', error: err?.message || String(err) };
  } finally {
    clearTimeout(timer);
  }
}

// all.json (ProxyGenerator) ساختار JSON آرایه‌ای دارد: [{ip, port, protocol/scheme, ...}]
function extractFromJsonArray(text) {
  try {
    const arr = JSON.parse(text);
    if (!Array.isArray(arr)) return [];
    const lines = [];
    for (const it of arr) {
      if (!it || !it.ip || !it.port) continue;
      const proto = String(it.protocol || it.scheme || it.type || 'http').toLowerCase();
      const kind = proto.includes('socks') ? 'socks5' : (proto === 'https' ? 'https' : 'http');
      const auth = it.username ? `${it.username}${it.password ? ':' + it.password : ''}@` : '';
      const host = /:/.test(String(it.ip)) ? `[${it.ip}]` : it.ip;
      lines.push(`${kind}://${auth}${host}:${it.port}`);
    }
    return lines;
  } catch (_e) {
    return [];
  }
}

async function runPool(items, size, worker) {
  const results = [];
  let idx = 0;
  async function lane() {
    while (true) {
      const i = idx++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, lane));
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sources = loadSources().filter(s => !args.category || s.category === args.category);
  if (!sources.length) {
    console.error(`❌ منبعی برای دسته «${args.category || 'همه'}» پیدا نشد.`);
    process.exit(1);
  }

  if (!args.checkOnly) {
    fs.mkdirSync(RAW_DIR, { recursive: true });
  }

  const report = { startedAt: new Date().toISOString(), category: args.category || 'all', sources: [] };
  const buckets = { socks5: new Set(), http: new Set(), https: new Set() };
  let okCount = 0, failCount = 0, skippedCount = 0, totalLines = 0;

  const jobs = sources.map(s => ({ ...s, enabled: args.includeUnverified || s.verified }));
  const enabled = jobs.filter(j => j.enabled);
  skippedCount = jobs.length - enabled.length;

  await runPool(enabled, args.concurrency, async (job) => {
    const res = await fetchText(job.url, args.timeout);
    const entry = {
      category: job.category,
      url: job.url,
      verified: job.verified,
      ok: res.ok,
      status: res.status,
      lines: 0,
      parsed: 0,
      error: res.error || '',
    };
    report.sources.push(entry);
    if (!res.ok) {
      failCount++;
      console.warn(`  ✗ [${entry.status || 'ERR'}] ${job.category}: ${job.url}${entry.error ? ' — ' + entry.error : ''}`);
      return;
    }
    okCount++;

    if (!args.checkOnly) {
      const rawDir = path.join(RAW_DIR, job.category);
      fs.mkdirSync(rawDir, { recursive: true });
      const fname = job.url.replace(/^https?:\/\//, '').replace(/[/?%&]+/g, '_');
      fs.writeFileSync(path.join(rawDir, fname), res.text, 'utf8');
    }

    let lines = res.text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    entry.lines = lines.length;
    if (job.url.endsWith('.json')) {
      lines = extractFromJsonArray(res.text);
    }
    if (args.maxLinesPerSource > 0) lines = lines.slice(0, args.maxLinesPerSource);

    for (const line of lines) {
      const norm = normalizeProxyLine(line);
      if (!norm) continue;
      if (args.checkOnly) { entry.parsed++; continue; }
      const target = buckets[norm.kind] || buckets.socks5;
      if (!target.has(norm.canonical)) {
        target.add(norm.canonical);
        entry.parsed++;
        totalLines++;
      }
    }
  });

  report.finishedAt = new Date().toISOString();
  report.summary = {
    totalSources: jobs.length,
    fetchedOk: okCount,
    failed: failCount,
    skippedUnverified: skippedCount,
    uniqueProxies: {
      socks5: buckets.socks5.size,
      http: buckets.http.size,
      https: buckets.https.size,
      total: buckets.socks5.size + buckets.http.size + buckets.https.size,
    },
  };

  if (!args.checkOnly) {
    fs.writeFileSync(path.join(DATA_DIR, 'socks5.txt'), [...buckets.socks5].sort().join('\n') + '\n', 'utf8');
    const httpAll = [...buckets.http, ...buckets.https].sort();
    fs.writeFileSync(path.join(DATA_DIR, 'http.txt'), httpAll.join('\n') + '\n', 'utf8');
    const allOut = [
      ...[...buckets.socks5].map(x => `socks5://${x}`),
      ...[...buckets.http].map(x => `http://${x}`),
      ...[...buckets.https].map(x => `https://${x}`),
    ].sort();
    fs.writeFileSync(path.join(DATA_DIR, 'all.txt'), allOut.join('\n') + '\n', 'utf8');
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, 'report.json'), JSON.stringify(report, null, 2), 'utf8');

  console.log('\n📊 خلاصه:', JSON.stringify(report.summary, null, 2));
  if (!args.checkOnly) {
    console.log('✅ خروجی‌ها در پوشه data/ نوشته شد (socks5.txt, http.txt, all.txt, report.json, raw/)');
  } else {
    console.log('🔎 فقط بررسی زنده‌بودن منابع انجام شد (بدون نوشتن فایل پروکسی).');
  }
}

// اجرای خودکار فقط وقتی این فایل مستقیم اجرا شود (نه وقتی import شود)
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(err => {
    console.error('❌ خطا در fetch:', err?.message || err);
    process.exit(1);
  });
}
