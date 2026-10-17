// ============================================================================
// miliconfig v3.2 - اسکنر داخلی آی‌پی (معادل cfnew) + تبدیل دامنه به آی‌پی ثابت
// ----------------------------------------------------------------------------
// چرا فقط TCP کافی نیست؟
//   بسیاری از آی‌پی‌های رنج رسمی کلودفلر پورت ۴۴۳ را باز می‌کنند اما TLS با SNI
//   مقصد را پاسخ نمی‌دهند (نود مرده). بنابراین اسکنر یک ClientHello واقعی با SNI
//   ارسال می‌کند و فقط آی‌پی‌هایی قبول می‌شوند که ServerHello برمی‌گردانند.
//   همین منطق در scripts/cf-scan.js و پنل مدیریت استفاده می‌شود.
// ============================================================================

import {
  CF_IPV4_RANGES,
  CF_IPV6_RANGES,
  CLEAN_EDGE_IPV4,
  CLEAN_EDGE_IPV6
} from '../config/locations.js';
import { isEnabledValue } from '../config/defaults.js';
import { isValidIpAddress } from '../core/utils.js';

const MAX_SCAN_COUNT = 60;
const DEFAULT_TIMEOUT_MS = 2500;
const DEFAULT_CONCURRENCY = 4;
const DEFAULT_PROBE_SNI = 'www.cloudflare.com';

function getConnector() {
  // در باندل Worker، cfConnect از 'cloudflare:sockets' بالای فایل قرار می‌گیرد.
  // در Node/CLI، اسکریپت cf-scan.js یک connector سازگار تزریق می‌کند.
  return typeof cfConnect === 'function' ? cfConnect : null;
}

function ipToBigInt(ip) {
  if (!isValidIpAddress(ip) || ip.includes(':')) return null;
  const parts = ip.split('.').map(n => BigInt(parseInt(n, 10)));
  return (parts[0] << 24n) | (parts[1] << 16n) | (parts[2] << 8n) | parts[3];
}

function bigIntToIp(value) {
  const n = BigInt(value);
  return [24n, 16n, 8n, 0n].map(shift => Number((n >> shift) & 255n)).join('.');
}

function parseCidrV4(cidr) {
  const [base, bitsRaw] = String(cidr || '').split('/');
  const bits = parseInt(bitsRaw, 10);
  const start = ipToBigInt(base);
  if (start === null || !Number.isFinite(bits)) return null;
  const size = 1n << BigInt(32 - bits);
  return { start, size };
}

function parseCidrV6(cidr) {
  const [base, bitsRaw] = String(cidr || '').split('/');
  const bits = parseInt(bitsRaw, 10);
  if (!base || !base.includes(':') || !Number.isFinite(bits)) return null;
  return { base, bits };
}

function randomV6InRange(prefix, bits, rand = Math.random) {
  const groups = prefix.split(':').map(g => (g === '' ? '0' : g));
  while (groups.length < 8) groups.push('0');
  const fixedGroups = Math.max(0, Math.min(8, Math.floor(bits / 16)));
  for (let i = fixedGroups; i < 8; i++) {
    groups[i] = Math.floor(rand() * 0xffff).toString(16);
  }
  return groups.join(':');
}

// ساخت کاندیدهای واقعی از رنج رسمی کلودفلر (بدون هیچ دامنه)
export function generateCandidateIps({ count = 20, ipv6 = false, seedIps = [], rand = Math.random } = {}) {
  const total = Math.max(1, Math.min(MAX_SCAN_COUNT, parseInt(count, 10) || 20));
  const out = [];
  const seen = new Set();
  const push = ip => {
    const clean = String(ip || '').trim();
    if (!clean || seen.has(clean) || !isValidIpAddress(clean)) return;
    seen.add(clean);
    out.push(clean);
  };

  for (const ip of seedIps) push(ip);
  for (const ip of ipv6 ? CLEAN_EDGE_IPV6 : CLEAN_EDGE_IPV4) push(ip);

  if (ipv6) {
    const parsed = (CF_IPV6_RANGES || []).map(parseCidrV6).filter(Boolean);
    let guard = 0;
    while (out.length < total && guard < total * 12) {
      guard += 1;
      const range = parsed[Math.floor(rand() * parsed.length)];
      if (!range) break;
      push(randomV6InRange(range.base, range.bits, rand));
    }
    return out.slice(0, total);
  }

  const ranges = (CF_IPV4_RANGES || []).map(parseCidrV4).filter(Boolean);
  let guard = 0;
  while (out.length < total && guard < total * 20) {
    guard += 1;
    const range = ranges[Math.floor(rand() * ranges.length)];
    if (!range) break;
    const offset = BigInt(Math.floor(rand() * Number(range.size)));
    push(bigIntToIp(range.start + offset));
  }
  return out.slice(0, total);
}

export function parseTrace(text) {
  const info = { ip: '', colo: '', loc: '', tls: '', warp: '', http: '', sni: '' };
  for (const line of String(text || '').split('\n')) {
    const idx = line.indexOf('=');
    if (idx < 1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key in info) info[key] = value;
  }
  return info;
}

function u16(n) {
  return [(n >> 8) & 0xff, n & 0xff];
}

function u24(n) {
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

// ساخت ClientHello واقعی TLS 1.2/1.3 با SNI (بدون وابستگی به کتابخانه)
export function buildClientHello(hostname = DEFAULT_PROBE_SNI, rand = Math.random) {
  const nameBytes = Array.from(new TextEncoder().encode(String(hostname || DEFAULT_PROBE_SNI)));
  const randomBytes = Array.from({ length: 32 }, () => Math.floor(rand() * 256));

  const sniList = [...u16(nameBytes.length + 3), 0x00, ...u16(nameBytes.length), ...nameBytes];
  const sniExt = [...u16(0x0000), ...u16(sniList.length), ...sniList];

  const groups = [0x00, 0x1d, 0x00, 0x17, 0x00, 0x18];
  const groupsExt = [...u16(0x000a), ...u16(groups.length + 2), ...u16(groups.length), ...groups];

  const sigAlgs = [0x04, 0x03, 0x08, 0x04, 0x04, 0x01, 0x05, 0x03, 0x08, 0x05, 0x05, 0x01, 0x02, 0x01];
  const sigExt = [...u16(0x000d), ...u16(sigAlgs.length + 2), ...u16(sigAlgs.length), ...sigAlgs];

  const ecFormats = [0x01, 0x00];
  const ecExt = [...u16(0x000b), ...u16(ecFormats.length + 1), ecFormats.length, ...ecFormats];

  // عمداً فقط TLS 1.2 اعلام می‌شود؛ بدون key_share نمی‌توان TLS 1.3 را پیشنهاد داد
  const extensions = [...sniExt, ...groupsExt, ...sigExt, ...ecExt];

  const ciphers = [
    0xc0, 0x2f, 0xc0, 0x2b, 0xc0, 0x30, 0xc0, 0x2c,
    0xc0, 0x13, 0xc0, 0x09, 0xc0, 0x14, 0xc0, 0x0a, 0x00, 0x9c, 0x00, 0x9d,
    0x00, 0x2f, 0x00, 0x35, 0x00, 0x0a
  ];

  const body = [
    0x03, 0x03,
    ...randomBytes,
    0x00,
    ...u16(ciphers.length), ...ciphers,
    0x01, 0x00,
    ...u16(extensions.length), ...extensions
  ];
  const handshake = [0x01, ...u24(body.length), ...body];
  return new Uint8Array([0x16, 0x03, 0x01, ...u16(handshake.length), ...handshake]);
}

function withTimeout(promise, ms, message = 'timeout') {
  let timer = null;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), Math.max(300, Math.min(10000, ms)));
  });
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

// تست واقعی: اتصال TCP + ارسال ClientHello با SNI مقصد و انتظار ServerHello
export async function probeIpTls(ip, { port = 443, timeoutMs = DEFAULT_TIMEOUT_MS, sni = DEFAULT_PROBE_SNI, connector = null } = {}) {
  const addr = String(ip || '').trim().replace(/^\[|\]$/g, '');
  if (!isValidIpAddress(addr)) {
    return { ip: addr, ok: false, latency: 0, error: 'آدرس IP نامعتبر است', checkedAt: Date.now() };
  }
  const connectFn = typeof connector === 'function' ? connector : getConnector();
  if (!connectFn) {
    return { ip: addr, ok: false, latency: 0, error: 'سوکت TCP در این محیط در دسترس نیست', checkedAt: Date.now() };
  }

  const started = Date.now();
  let socket = null;
  let reader = null;
  let writer = null;
  try {
    socket = await withTimeout(connectFn({ hostname: addr, port }), timeoutMs, 'timeout');
    const hello = buildClientHello(sni);
    writer = socket.writable.getWriter();
    await withTimeout(writer.write(hello), timeoutMs, 'write timeout');
    reader = socket.readable.getReader();
    const chunk = await withTimeout(reader.read(), timeoutMs, 'tls timeout');
    const bytes = chunk?.value || new Uint8Array();
    const latency = Date.now() - started;
    const isServerHello = bytes.length >= 5 && bytes[0] === 0x16 && bytes[1] === 0x03;
    if (!isServerHello) {
      return {
        ip: addr,
        ok: false,
        latency,
        port,
        error: 'پاسخ TLS معتبر نبود (نود مرده)',
        checkedAt: Date.now()
      };
    }
    return { ip: addr, ok: true, latency, port, sni, checkedAt: Date.now() };
  } catch (err) {
    return {
      ip: addr,
      ok: false,
      latency: Date.now() - started,
      port,
      error: err?.message || String(err),
      checkedAt: Date.now()
    };
  } finally {
    try { reader?.releaseLock(); } catch (_e) {}
    try { writer?.releaseLock(); } catch (_e) {}
    if (socket) {
      try { socket.close(); } catch (_e) {}
    }
  }
}

// اسکن دسته‌ای با محدودیت هم‌زمانی (سقف سوکت‌های Worker = ۶)
export async function scanIpPool(ips = [], {
  port = 443,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  concurrency = DEFAULT_CONCURRENCY,
  connector = null,
  sni = DEFAULT_PROBE_SNI
} = {}) {
  const list = (Array.isArray(ips) ? ips : []).filter(ip => isValidIpAddress(String(ip || '').trim().replace(/^\[|\]$/g, '')));
  const limit = Math.max(1, Math.min(6, parseInt(concurrency, 10) || DEFAULT_CONCURRENCY));
  const results = [];
  let cursor = 0;

  async function worker() {
    for (;;) {
      const idx = cursor;
      cursor += 1;
      if (idx >= list.length) return;
      results.push(await probeIpTls(list[idx], { port, timeoutMs, connector, sni }));
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, Math.max(1, list.length)) }, worker));
  return results;
}

export function summarizeScanResults(results = []) {
  const list = Array.isArray(results) ? results : [];
  const healthy = list.filter(r => r && r.ok);
  const best = healthy.slice().sort((a, b) => (a.latency || 0) - (b.latency || 0));
  return {
    total: list.length,
    healthy: healthy.length,
    failed: list.length - healthy.length,
    bestLatency: best[0]?.latency ?? null,
    bestIp: best[0]?.ip || '',
    healthyIps: best.map(r => r.ip),
    averageLatency: healthy.length
      ? Math.round(healthy.reduce((sum, r) => sum + (r.latency || 0), 0) / healthy.length)
      : null
  };
}

// تبدیل دامنه به آی‌پی ثابت با DNS-over-HTTPS (بدون وابستگی به DNS محلی)
export async function resolveHostToFixedIps(host, { timeoutMs = 4000, type = 'A' } = {}) {
  const name = String(host || '').trim();
  if (!name) return [];
  if (isValidIpAddress(name)) return [name.replace(/^\[|\]$/g, '')];
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), Math.max(800, Math.min(10000, timeoutMs)));
  try {
    const resp = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
      { headers: { accept: 'application/dns-json' }, signal: controller.signal }
    );
    if (!resp.ok) return [];
    const data = await resp.json();
    const answers = Array.isArray(data?.Answer) ? data.Answer : [];
    return Array.from(new Set(
      answers
        .filter(a => (a.type === 1 && type === 'A') || (a.type === 28 && type === 'AAAA'))
        .map(a => String(a.data || '').trim())
        .filter(ip => isValidIpAddress(ip))
    ));
  } catch (_e) {
    return [];
  } finally {
    clearTimeout(timer);
  }
}

export async function resolveHostsToFixedIps(hosts = [], { timeoutMs = 4000 } = {}) {
  const list = (Array.isArray(hosts) ? hosts : [])
    .map(h => String(h || '').trim())
    .filter(Boolean)
    .slice(0, 40);
  const out = [];
  await Promise.allSettled(
    list.map(async host => {
      const v4 = await resolveHostToFixedIps(host, { timeoutMs, type: 'A' });
      const v6 = await resolveHostToFixedIps(host, { timeoutMs, type: 'AAAA' });
      out.push({ host, ipv4: v4, ipv6: v6, fixedIp: v4[0] || v6[0] || '' });
    })
  );
  return out.sort((a, b) => (a.host > b.host ? 1 : -1));
}

// پاک‌سازی ورودی اسکن: فقط IP مجاز است (جلوگیری از اسکن میزبان دلخواه)
export function normalizeScanInput(rawIps = [], { ipv6 = false, count = 20, rand = Math.random } = {}) {
  const explicit = (Array.isArray(rawIps) ? rawIps : String(rawIps || '').split(/[\s,]+/))
    .map(ip => String(ip || '').trim().replace(/^\[|\]$/g, ''))
    .filter(ip => isValidIpAddress(ip))
    .slice(0, MAX_SCAN_COUNT);
  if (explicit.length > 0) return explicit;
  return generateCandidateIps({
    count,
    ipv6: isEnabledValue(ipv6, false),
    rand
  });
}

export const SCANNER_LIMITS = {
  maxCount: MAX_SCAN_COUNT,
  defaultPort: 443,
  defaultTimeoutMs: DEFAULT_TIMEOUT_MS,
  defaultConcurrency: DEFAULT_CONCURRENCY,
  defaultSni: DEFAULT_PROBE_SNI
};
