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
  const idxs = new Set();
  const rand = typeof seed === 'function' ? seed : Math.random;
  // اگر لیست بزرگ‌تر از n است، نمونه‌گیری بدون تکرار
  let guard = 0;
  while (idxs.size < n && guard++ < n * 40) idxs.add(Math.floor(rand() * list.length));
  const out = [];
  for (const i of idxs) {
    const rec = String(list[i] || '');
    const parts = rec.split('|');
    if (parts.length < 3) continue;
    const [host, portStr, kind] = parts;
    const port = parseInt(portStr, 10);
    if (!host || !Number.isFinite(port) || port <= 0 || port > 65535) continue;
    const addr = host.includes(':') ? `[${host}]` : host;
    out.push({
      s: `${kind === 'h' ? 'http' : 'socks5'}://${addr}:${port}`,
      pingMs: parseInt(parts[3], 10) || 0
    });
  }
  return out;
}

// توزیع متعادل N پروکسی بین چند کشور (حداقل یکی برای هر کشور، باقی رندوم)
export function pickProxiesAcrossCountries(codes = [], total = 50, seed = Math.random) {
  const uniq = [...new Set((codes || []).map(c => String(c).toUpperCase()).filter(Boolean))]
    .filter(hasProxyForCountry);
  if (uniq.length === 0) return [];
  const rand = typeof seed === 'function' ? seed : Math.random;
  const targets = new Map();
  let remaining = Math.max(0, parseInt(total, 10) || 0);
  for (const cc of uniq) targets.set(cc, 1);
  remaining -= uniq.length;
  let guard = 0;
  while (remaining > 0 && guard++ < remaining * 20 + 100) {
    const cc = uniq[Math.floor(rand() * uniq.length)];
    const cap = (PROXY_POOL.countries[cc] || []).length;
    if ((targets.get(cc) || 0) < cap) {
      targets.set(cc, (targets.get(cc) || 0) + 1);
      remaining--;
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
