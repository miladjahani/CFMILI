// ============================================================================
// miliconfig v3.4 - سنجش واقعی پروکسی خروجی (s)
// ----------------------------------------------------------------------------
// فقط TCP باز بودن کافی نیست؛ پروکسی باید واقعاً تونل بدهد. این ماژول:
//   • socks5://user:pass@host:port  → greeting + CONNECT به مقصد آزمایشی
//   • http(s)://user:pass@host:port → CONNECT و انتظار پاسخ 2xx
// را انجام می‌دهد و تاخیر واقعی (ms) را برمی‌گرداند.
// اتصال از طریق connector تزریق‌شود تا هم در Worker و هم در تست Node قابل اجرا باشد.
// ============================================================================

export const PROBE_DEFAULT_TIMEOUT_MS = 3000;
export const PROBE_DEFAULT_TARGET = 'example.com';
export const PROBE_DEFAULT_TARGET_PORT = 443;

const SOCKS5_REPLY_MESSAGES = {
  1: 'خطای عمومی پروکسی',
  2: 'اتصال توسط قوانین پروکسی رد شد',
  3: 'شبکه غیرقابل دسترس',
  4: 'میزبان غیرقابل دسترس',
  5: 'اتصال رد شد',
  6: 'TTL منقضی شد',
  7: 'دستور پشتیبانی نمی‌شود',
  8: 'نوع آدرس پشتیبانی نمی‌شود'
};

// --------------------------------------------------------------- URL codec
function stripBrackets(host = '') {
  const text = String(host || '').trim();
  return text.startsWith('[') && text.endsWith(']') ? text.slice(1, -1) : text;
}

export function buildProxyUrl({ kind = 'socks5', host, port, username = '', password = '' } = {}) {
  const auth = username ? `${username}${password ? `:${password}` : ''}@` : '';
  const clean = stripBrackets(host);
  const addr = clean.includes(':') ? `[${clean}]` : clean;
  return `${kind}://${auth}${addr}:${port}`;
}

// پارس آدرس پروکسی؛ خروجی همیشه یک URL نرمال‌شده دارد
export function parseProxyUrl(raw) {
  let text = String(raw || '').trim();
  if (!text) return null;
  let kind = 'socks5';
  const schemeMatch = text.match(/^([a-z0-9+.-]+):\/\//i);
  if (schemeMatch) {
    const scheme = schemeMatch[1].toLowerCase();
    text = text.slice(schemeMatch[0].length);
    if (scheme === 'http') kind = 'http';
    else if (scheme === 'https') kind = 'https';
    else if (scheme === 'socks' || scheme === 'socks5' || scheme === 'socks5h') kind = 'socks5';
    else return null;
  }
  text = text.split('/')[0].split('?')[0];
  let credentials = '';
  const at = text.lastIndexOf('@');
  if (at > -1) {
    credentials = text.slice(0, at);
    text = text.slice(at + 1);
  }
  let host = '';
  let port = 0;
  if (text.startsWith('[')) {
    const end = text.indexOf(']');
    if (end < 0) return null;
    host = text.slice(1, end);
    const rest = text.slice(end + 1);
    if (!rest.startsWith(':')) return null;
    port = parseInt(rest.slice(1), 10);
  } else {
    const idx = text.lastIndexOf(':');
    if (idx <= 0) return null;
    host = text.slice(0, idx);
    port = parseInt(text.slice(idx + 1), 10);
  }
  host = stripBrackets(host);
  if (!host || !Number.isFinite(port) || port <= 0 || port > 65535) return null;
  let username = '';
  let password = '';
  if (credentials) {
    const sep = credentials.indexOf(':');
    if (sep < 0) username = credentials;
    else {
      username = credentials.slice(0, sep);
      password = credentials.slice(sep + 1);
    }
  }
  return { url: buildProxyUrl({ kind, host, port, username, password }), kind, host, port, username, password };
}

// --------------------------------------------------------------- helpers
// نام‌ها با پیشوند probe_ نگه داشته شده‌اند تا در باندل یکپارچه Worker با
// ماژول‌های دیگر (scanner.js) تضاد اعلان ایجاد نشود.
function probeTimeout(promise, ms, message) {
  let timer = null;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), Math.max(300, Math.min(15000, ms)));
  });
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

function createProbeReader(reader) {
  let buffer = new Uint8Array(0);
  return {
    async readExact(count, timeoutMs, message) {
      while (buffer.byteLength < count) {
        const { value, done } = await probeTimeout(reader.read(), timeoutMs, message);
        if (done || !value) throw new Error(message);
        const next = new Uint8Array(buffer.byteLength + value.byteLength);
        next.set(buffer, 0);
        next.set(value, buffer.byteLength);
        buffer = next;
      }
      const out = buffer.slice(0, count);
      buffer = buffer.slice(count);
      return out;
    },
    take() {
      const out = buffer;
      buffer = new Uint8Array(0);
      return out;
    }
  };
}

function probeU16(value) {
  return new Uint8Array([(value >> 8) & 0xff, value & 0xff]);
}

// --------------------------------------------------------------- socks5
// تبدیل IPv6 به ۱۶ بایت برای ATYP=4
function ipv6ToBytes(ip = '') {
  const clean = stripBrackets(String(ip || '').trim());
  if (!clean.includes(':')) return null;
  const halves = clean.split('::');
  const left = halves[0] ? halves[0].split(':').filter(Boolean) : [];
  const right = halves.length > 1 && halves[1] ? halves[1].split(':').filter(Boolean) : [];
  const missing = 8 - (left.length + right.length);
  if (missing < 0) return null;
  const groups = [...left, ...Array(missing).fill('0'), ...right];
  if (groups.length !== 8) return null;
  const bytes = new Uint8Array(16);
  for (let i = 0; i < 8; i++) {
    const value = parseInt(groups[i] || '0', 16);
    if (!Number.isFinite(value)) return null;
    bytes[i * 2] = (value >> 8) & 0xff;
    bytes[i * 2 + 1] = value & 0xff;
  }
  return bytes;
}

// درخواست CONNECT پروتکل SOCKS5 با نوع آدرس درست
// (۱ = IPv4، ۳ = دامنه، ۴ = IPv6) تا IPv6 نیز از پروکسی خروجی عبور کند.
export function buildSocks5ConnectRequest(targetHost, targetPort) {
  const clean = stripBrackets(String(targetHost || '').trim());
  const portBytes = probeU16(targetPort);
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(clean)) {
    const octets = clean.split('.').map(n => parseInt(n, 10) & 0xff);
    return new Uint8Array([5, 1, 0, 1, ...octets, ...portBytes]);
  }
  const v6 = ipv6ToBytes(clean);
  if (v6) return new Uint8Array([5, 1, 0, 4, ...v6, ...portBytes]);
  const hostBytes = new TextEncoder().encode(clean);
  return new Uint8Array([5, 1, 0, 3, hostBytes.length, ...hostBytes, ...portBytes]);
}

async function probeSocks5(sock, cfg, { targetHost, targetPort, timeoutMs }) {
  const writer = sock.writable.getWriter();
  const reader = sock.readable.getReader();
  const bytes = createProbeReader(reader);
  try {
    const hasAuth = Boolean(cfg.username);
    await probeTimeout(
      writer.write(new Uint8Array(hasAuth ? [5, 2, 0, 2] : [5, 1, 0])),
      timeoutMs,
      'پاسخی از پروکسی دریافت نشد'
    );
    const head = await bytes.readExact(2, timeoutMs, 'پاسخی از پروکسی دریافت نشد');
    if (head[0] !== 5) throw new Error('پاسخ SOCKS5 نامعتبر');
    if (head[1] === 0xff) throw new Error('روش احراز هویت پذیرفته نشد');
    if (head[1] === 2) {
      if (!hasAuth) throw new Error('پروکسی به یوزر/پسورد نیاز دارد');
      const enc = new TextEncoder();
      const user = enc.encode(cfg.username);
      const pass = enc.encode(cfg.password || '');
      if (user.byteLength > 255 || pass.byteLength > 255) throw new Error('اطلاعات ورود بیش از حد بلند');
      await probeTimeout(
        writer.write(new Uint8Array([1, user.byteLength, ...user, pass.byteLength, ...pass])),
        timeoutMs,
        'ارسال احراز هویت ناموفق'
      );
      const authReply = await bytes.readExact(2, timeoutMs, 'احراز هویت پروکسی پاسخ نداد');
      if (authReply[0] !== 1 || authReply[1] !== 0) throw new Error('یوزر/پسورد پروکسی اشتباه است');
    } else if (head[1] !== 0) {
      throw new Error('روش احراز هویت SOCKS5 پشتیبانی نمی‌شود');
    }

    await probeTimeout(
      writer.write(buildSocks5ConnectRequest(targetHost, targetPort)),
      timeoutMs,
      'ارسال درخواست CONNECT ناموفق'
    );
    const reply = await bytes.readExact(4, timeoutMs, 'پروکسی به CONNECT پاسخ نداد');
    if (reply[0] !== 5) throw new Error('پاسخ CONNECT نامعتبر');
    if (reply[1] !== 0) throw new Error(SOCKS5_REPLY_MESSAGES[reply[1]] || `خطای پروکسی (${reply[1]})`);
    const atyp = reply[3];
    if (atyp === 1) await bytes.readExact(4 + 2, timeoutMs, 'پاسخ CONNECT ناقص');
    else if (atyp === 4) await bytes.readExact(16 + 2, timeoutMs, 'پاسخ CONNECT ناقص');
    else if (atyp === 3) {
      const len = (await bytes.readExact(1, timeoutMs, 'پاسخ CONNECT ناقص'))[0];
      await bytes.readExact(len + 2, timeoutMs, 'پاسخ CONNECT ناقص');
    } else {
      throw new Error('نوع آدرس در پاسخ CONNECT نامعتبر است');
    }
    return true;
  } finally {
    try { writer.releaseLock(); } catch (_e) {}
    try { reader.releaseLock(); } catch (_e) {}
  }
}

// --------------------------------------------------------------- http tunnel
async function probeHttpTunnel(sock, cfg, { targetHost, targetPort, timeoutMs }) {
  const writer = sock.writable.getWriter();
  const reader = sock.readable.getReader();
  try {
    const formattedHost = targetHost.includes(':') ? `[${targetHost}]` : targetHost;
    const authority = `${formattedHost}:${targetPort}`;
    let request =
      `CONNECT ${authority} HTTP/1.1\r\n` +
      `Host: ${authority}\r\n` +
      'User-Agent: Mozilla/5.0\r\n' +
      'Proxy-Connection: Keep-Alive\r\n';
    if (cfg.username) {
      const token = btoa(`${cfg.username}:${cfg.password || ''}`);
      request += `Proxy-Authorization: Basic ${token}\r\n`;
    }
    request += '\r\n';
    await probeTimeout(writer.write(new TextEncoder().encode(request)), timeoutMs, 'ارسال درخواست به پروکسی ناموفق');

    let buffer = new Uint8Array(0);
    let headerEnd = -1;
    const decoder = new TextDecoder();
    while (headerEnd < 0) {
      const { value, done } = await probeTimeout(reader.read(), timeoutMs, 'پروکسی به CONNECT پاسخ نداد');
      if (done || !value) throw new Error('اتصال پروکسی بسته شد');
      const next = new Uint8Array(buffer.byteLength + value.byteLength);
      next.set(buffer, 0);
      next.set(value, buffer.byteLength);
      buffer = next;
      for (let i = 0; i + 3 < buffer.byteLength; i++) {
        if (buffer[i] === 13 && buffer[i + 1] === 10 && buffer[i + 2] === 13 && buffer[i + 3] === 10) {
          headerEnd = i + 4;
          break;
        }
      }
      if (headerEnd < 0 && buffer.byteLength > 8192) throw new Error('پاسخ پروکسی نامعتبر');
    }
    const statusLine = decoder.decode(buffer.slice(0, Math.min(headerEnd, 128)));
    if (!/^HTTP\//i.test(statusLine)) throw new Error('پاسخ پروکسی نامعتبر');
    const code = Number(statusLine.split(' ')[1]);
    if (code === 407) throw new Error('پروکسی به یوزر/پسورد نیاز دارد');
    if (!(code >= 200 && code < 300)) throw new Error(`پروکسی CONNECT را رد کرد (${code})`);
    return true;
  } finally {
    try { writer.releaseLock(); } catch (_e) {}
    try { reader.releaseLock(); } catch (_e) {}
  }
}

// --------------------------------------------------------------- public API
export async function probeProxy(rawOrUrl, {
  timeoutMs = PROBE_DEFAULT_TIMEOUT_MS,
  connector = null,
  targetHost = PROBE_DEFAULT_TARGET,
  targetPort = PROBE_DEFAULT_TARGET_PORT,
  url = ''
} = {}) {
  const cfg = typeof rawOrUrl === 'object' && rawOrUrl ? rawOrUrl : parseProxyUrl(rawOrUrl);
  const displayUrl = url || cfg?.url || String(rawOrUrl || '');
  if (!cfg) {
    return { url: displayUrl, ok: false, ms: 0, error: 'آدرس پروکسی نامعتبر است' };
  }
  if (typeof connector !== 'function') {
    return { url: cfg.url, ok: false, ms: 0, error: 'سوکت TCP در این محیط در دسترس نیست' };
  }

  const started = Date.now();
  let sock = null;
  try {
    const options = cfg.kind === 'https' ? { secureTransport: 'on', allowHalfOpen: false } : undefined;
    sock = await probeTimeout(
      connector({ hostname: cfg.host, port: cfg.port }, options),
      timeoutMs,
      'اتصال به پروکسی برقرار نشد'
    );
    if (sock?.opened) await probeTimeout(sock.opened, timeoutMs, 'اتصال به پروکسی برقرار نشد');
    if (cfg.kind === 'socks5') await probeSocks5(sock, cfg, { targetHost, targetPort, timeoutMs });
    else await probeHttpTunnel(sock, cfg, { targetHost, targetPort, timeoutMs });
    return { url: cfg.url, ok: true, ms: Date.now() - started, kind: cfg.kind };
  } catch (err) {
    return { url: cfg.url, ok: false, ms: Date.now() - started, kind: cfg.kind, error: err?.message || String(err) };
  } finally {
    if (sock) {
      try { sock.close(); } catch (_e) {}
    }
  }
}

// سنجش دسته‌ای با محدودیت هم‌زمانی (سقف سوکت‌های Worker = ۶)
export async function probeProxyList(proxies = [], {
  limit = 8,
  timeoutMs = PROBE_DEFAULT_TIMEOUT_MS,
  concurrency = 3,
  connector = null,
  targetHost = PROBE_DEFAULT_TARGET,
  targetPort = PROBE_DEFAULT_TARGET_PORT
} = {}) {
  const list = (Array.isArray(proxies) ? proxies : []).slice(0, Math.max(1, Math.min(12, parseInt(limit, 10) || 8)));
  const workers = Math.max(1, Math.min(4, parseInt(concurrency, 10) || 3));
  const results = new Array(list.length);
  let cursor = 0;

  async function run() {
    for (;;) {
      const idx = cursor++;
      if (idx >= list.length) return;
      const item = list[idx];
      const raw = typeof item === 'string' ? item : item?.s || item?.url || '';
      results[idx] = await probeProxy(raw, { timeoutMs, connector, targetHost, targetPort, url: raw });
    }
  }

  await Promise.all(Array.from({ length: Math.min(workers, list.length) }, run));
  return results.filter(Boolean);
}
