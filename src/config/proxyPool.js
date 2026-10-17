// ============================================================================
// miliconfig v3.4 - استخر پروکسی‌های سالم تفکیک‌شده بر اساس کشور
// ----------------------------------------------------------------------------
// ورودی: data/by-country/pool.json که با «npm run proxy:pipeline» ساخته می‌شود
//        (fetch-proxies.js → proxy-health.py: پینگ + سلامت + تفکیک کشور)
// خروجی این ماژول: لیست s اختصاصی هر نود مولتی‌لوکیشن (سالم‌ترین پروکسی‌ها، رندوم)
//
// فرمت رکورد در pool.json:  "IP|PORT|k|ping"   k = s (socks5) یا h (http)
// ============================================================================

import { PROXY_POOL_JSON } from './proxyPoolData.js';
import { countryFlag, countryName } from './countries.js';

export const PROXY_POOL = (() => {
  try {
    const parsed = JSON.parse(PROXY_POOL_JSON);
    return parsed && typeof parsed.countries === 'object' ? parsed : { v: 1, countries: {} };
  } catch (_e) {
    return { v: 1, generatedAt: '', countries: {} };
  }
})();

export function proxyPoolStats() {
  const countries = PROXY_POOL.countries || {};
  let total = 0;
  const perCountry = {};
  for (const cc of Object.keys(countries)) {
    perCountry[cc] = countries[cc].length;
    total += countries[cc].length;
  }
  return {
    generatedAt: PROXY_POOL.generatedAt || '',
    countryCount: Object.keys(perCountry).length,
    totalAlive: total,
    perCountry
  };
}

// رکورد خام "IP|PORT|k|ping" را به آبجکت قابل‌استفاده در پنل/ساب تبدیل می‌کند
function parseProxyRecord(rec) {
  const parts = String(rec || '').split('|');
  if (parts.length < 3) return null;
  const [host, portStr, kind] = parts;
  const port = parseInt(portStr, 10);
  if (!host || !Number.isFinite(port) || port <= 0 || port > 65535) return null;
  const addr = host.includes(':') ? `[${host}]` : host;
  return {
    host,
    port,
    kind: kind === 'h' ? 'http' : 'socks5',
    pingMs: parseInt(parts[3], 10) || 0,
    s: `${kind === 'h' ? 'http' : 'socks5'}://${addr}:${port}`
  };
}

// فهرست کشورهای استخر با نام/پرچم و تعداد پروکسی سالم (نزولی)
export function proxyPoolCountries() {
  const countries = PROXY_POOL.countries || {};
  return Object.keys(countries)
    .map(code => ({
      code,
      count: Array.isArray(countries[code]) ? countries[code].length : 0,
      name: countryName(code),
      flag: countryFlag(code)
    }))
    .filter(c => c.count > 0)
    .sort((a, b) => b.count - a.count || a.code.localeCompare(b.code));
}

// بهترین پروکسی‌های یک کشور (کمترین تاخیر سلامت‌سنجی) برای نمایش در پنل
export function listCountryProxies(code = '', limit = 40) {
  const list = (PROXY_POOL.countries || {})[String(code).toUpperCase()];
  if (!Array.isArray(list) || list.length === 0) return [];
  const max = Math.max(1, Math.min(200, parseInt(limit, 10) || 40));
  return list
    .map(parseProxyRecord)
    .filter(Boolean)
    .sort((a, b) => (a.pingMs || 99999) - (b.pingMs || 99999))
    .slice(0, max);
}

export function hasProxyForCountry(code = '') {
  const list = (PROXY_POOL.countries || {})[String(code).toUpperCase()];
  return Array.isArray(list) && list.length > 0;
}

// انتخاب تصادفی n پروکسی سالم از یک کشور (بدون تکرار؛ اگر n بیشتر از موجود باشد همه را می‌دهد)
export function pickProxiesForCountry(code = '', count = 1, seed = Math.random) {
  const list = (PROXY_POOL.countries || {})[String(code).toUpperCase()];
  if (!Array.isArray(list) || list.length === 0) return [];
  const n = Math.max(0, Math.min(parseInt(count, 10) || 0, list.length));
  if (n === 0) return [];
  const rand = typeof seed === 'function' ? seed : Math.random;
  // نمونه‌گیری بدون تکرار با Fisher-Yates جزئی (تعداد خروجی دقیقاً n است)
  const idxs = Array.from({ length: list.length }, (_, i) => i);
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(rand() * (list.length - i));
    const tmp = idxs[i];
    idxs[i] = idxs[j];
    idxs[j] = tmp;
  }
  const out = [];
  for (let i = 0; i < n; i++) {
    const parsed = parseProxyRecord(list[idxs[i]]);
    if (!parsed) continue;
    out.push({ s: parsed.s, host: parsed.host, port: parsed.port, kind: parsed.kind, pingMs: parsed.pingMs });
  }
  return out;
}

// توزیع متعادل N پروکسی بین چند کشور (حداقل یکی برای هر کشور، باقی رندوم)
export function pickProxiesAcrossCountries(codes = [], total = 50, seed = Math.random) {
  const uniq = [...new Set((codes || []).map(c => String(c).toUpperCase()).filter(Boolean))]
    .filter(hasProxyForCountry);
  if (uniq.length === 0) return [];
  const rand = typeof seed === 'function' ? seed : Math.random;
  const want = Math.max(1, parseInt(total, 10) || 0);
  const targets = new Map();

  if (want <= uniq.length) {
    // تعداد نود کمتر از تعداد کشورهاست: فقط want کشور تصادفی، هر کدام یک پروکسی
    const shuffled = uniq.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }
    for (const cc of shuffled.slice(0, want)) targets.set(cc, 1);
  } else {
    // حداقل یک نود برای هر کشور، باقی به‌صورت رندوم تا سقف ظرفیت هر کشور
    for (const cc of uniq) targets.set(cc, 1);
    let remaining = want - uniq.length;
    let guard = 0;
    while (remaining > 0 && guard++ < remaining * 20 + 100) {
      const cc = uniq[Math.floor(rand() * uniq.length)];
      const cap = (PROXY_POOL.countries[cc] || []).length;
      if ((targets.get(cc) || 0) < cap) {
        targets.set(cc, (targets.get(cc) || 0) + 1);
        remaining--;
      }
    }
  }
  const out = [];
  for (const [cc, n] of targets) {
    for (const p of pickProxiesForCountry(cc, n, rand)) {
      out.push({ ...p, country: cc });
    }
  }
  // مخلوط کردن ترتیب نهایی تا نودهای یک کشور پشت‌سرهم نیفتند
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
