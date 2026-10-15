import { connect as cfConnect } from 'cloudflare:sockets';

// --- MODULE: src/config/defaults.js ---
// ============================================================================
// miliconfig v3.1 - تنظیمات پیش‌فرض پایه (منطبق با کد اصلی CFnew v3.1)
// ============================================================================

const BRAND_NAME = 'miliconfig';
const BRAND_UPPER = 'MILICONFIG';
const VERSION = 'v3.1';
const DEFAULT_ADMIN_UUID = '351c9981-04b6-4103-aa4b-864aa9c91469';

// ----------------------------------------------------------------------------
// کانال پشتیبانی رسمی: تنها منبع حقیقت (Single Source of Truth) برای لینک پشتیبانی
// در پنل مدیریت، صفحه وضعیت کاربر و صفحه ورود استفاده می‌شود.
// برای تغییر، فقط همین دو مقدار را ویرایش کنید.
// ----------------------------------------------------------------------------
const SUPPORT_CHANNEL_HANDLE = '@miliconfig';
const SUPPORT_CHANNEL_URL = 'https://t.me/miliconfig';
const SUPPORT_CHANNEL_LABEL = `کانال پشتیبانی ${SUPPORT_CHANNEL_HANDLE}`;

// تمام ۳۱ تنظیم پیش‌فرض کد اصلی + تنظیمات پایه کاربر (تعداد نود در ساب و فرمت نام‌گذاری)
const CONFIG_DEFAULTS = {
  wk: '',
  ev: 'yes',
  et: 'no',
  ex: 'no',
  ech: 'no',
  tp: '',
  customDNS: 'https://223.5.5.5/dns-query',
  customECHDomain: 'cloudflare-ech.com',
  alpn: '',
  d: '',
  p: '',
  yx: '',
  yxURL: '',
  s: '',
  homepage: '',
  scu: 'https://url.v1.mk/sub',
  ena: 'no',
  epd: 'yes',
  epi: 'yes',
  egi: 'yes',
  ae: '',
  rm: '',
  qj: '',
  dkby: 'no',
  yxby: '',
  ipv4: 'yes',
  ipv6: 'yes',
  ispMobile: 'yes',
  ispUnicom: 'yes',
  ispTelecom: 'yes',
  jk: 'no',
  subNodeCount: 50,
  brand: BRAND_NAME
};

const BOOLEAN_CONFIG_KEYS = [
  'ev', 'et', 'ex', 'ech', 'ena', 'epd', 'epi', 'egi',
  'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom', 'jk'
];

const ENV_KEY_MAPPING = {
  wk: ['wk', 'WK'],
  ev: ['ev', 'EV'],
  et: ['et', 'ET'],
  ex: ['ex', 'EX'],
  ech: ['ech', 'ECH'],
  tp: ['tp', 'TP'],
  customDNS: ['customDNS', 'CUSTOMDNS', 'CUSTOM_DNS'],
  customECHDomain: ['customECHDomain', 'CUSTOMECHDOMAIN', 'CUSTOM_ECH_DOMAIN'],
  alpn: ['alpn', 'ALPN'],
  d: ['d', 'D'],
  p: ['p', 'P'],
  yx: ['yx', 'YX'],
  yxURL: ['yxURL', 'YXURL', 'YX_URL'],
  s: ['s', 'S'],
  homepage: ['homepage', 'HOMEPAGE'],
  scu: ['scu', 'SCU'],
  ena: ['ena', 'ENA'],
  epd: ['epd', 'EPD'],
  epi: ['epi', 'EPI'],
  egi: ['egi', 'EGI'],
  ae: ['ae', 'AE'],
  rm: ['rm', 'RM'],
  qj: ['qj', 'QJ'],
  dkby: ['dkby', 'DKBY'],
  yxby: ['yxby', 'YXBY'],
  ipv4: ['ipv4', 'IPV4'],
  ipv6: ['ipv6', 'IPV6'],
  ispMobile: ['ispMobile', 'ISPMOBILE', 'ISP_MOBILE'],
  ispUnicom: ['ispUnicom', 'ISPUNICOM', 'ISP_UNICOM'],
  ispTelecom: ['ispTelecom', 'ISPTELECOM', 'ISP_TELECOM'],
  jk: ['jk', 'JK'],
  subNodeCount: ['subNodeCount', 'SUB_NODE_COUNT', 'nodeCount', 'NODE_COUNT']
};

const REGION_MAP = {
  CF: ['🌐 مستقیم رسمی CF', 'CF', 'Cloudflare Direct'],
  HK: ['🇭🇰 هنگ‌کنگ', 'HK', 'Hong Kong'],
  US: ['🇺🇸 آمریکا', 'US', 'United States'],
  SG: ['🇸🇬 سنگاپور', 'SG', 'Singapore'],
  JP: ['🇯🇵 ژاپن', 'JP', 'Japan'],
  KR: ['🇰🇷 کره‌جنوبی', 'KR', 'South Korea'],
  DE: ['🇩🇪 آلمان', 'DE', 'Germany'],
  SE: ['🇸🇪 سوئد', 'SE', 'Sweden'],
  NL: ['🇳🇱 هلند', 'NL', 'Netherlands'],
  FI: ['🇫🇮 فنلاند', 'FI', 'Finland'],
  GB: ['🇬🇧 بریتانیا', 'GB', 'United Kingdom'],
  Oracle: ['☁️ Oracle', 'Oracle'],
  DigitalOcean: ['🌊 DigitalOcean', 'DigitalOcean'],
  Vultr: ['⚡ Vultr', 'Vultr'],
  Multacom: ['🏢 Multacom', 'Multacom']
};

const OFFICIAL_DIRECT_IPS = [
  '172.71.218.190',
  '162.158.228.87',
  '162.158.189.134',
  '162.158.26.63',
  '162.158.25.86',
  '162.158.29.216',
  '162.158.218.160',
  '162.158.227.214',
  '172.69.118.198',
  '172.69.119.150'
];

const FALLBACK_PROXY_IPS = [
  { domain: 'ProxyIP.HK.CMLiussss.net', region: 'HK', regionCode: 'HK', port: 443 },
  { domain: 'ProxyIP.US.CMLiussss.net', region: 'US', regionCode: 'US', port: 443 },
  { domain: 'ProxyIP.SG.CMLiussss.net', region: 'SG', regionCode: 'SG', port: 443 },
  { domain: 'ProxyIP.JP.CMLiussss.net', region: 'JP', regionCode: 'JP', port: 443 },
  { domain: 'ProxyIP.KR.CMLiussss.net', region: 'KR', regionCode: 'KR', port: 443 },
  { domain: 'ProxyIP.DE.CMLiussss.net', region: 'DE', regionCode: 'DE', port: 443 },
  { domain: 'ProxyIP.SE.CMLiussss.net', region: 'SE', regionCode: 'SE', port: 443 },
  { domain: 'ProxyIP.NL.CMLiussss.net', region: 'NL', regionCode: 'NL', port: 443 },
  { domain: 'ProxyIP.FI.CMLiussss.net', region: 'FI', regionCode: 'FI', port: 443 },
  { domain: 'ProxyIP.GB.CMLiussss.net', region: 'GB', regionCode: 'GB', port: 443 },
  { domain: 'ProxyIP.Oracle.cmliussss.net', region: 'Oracle', regionCode: 'Oracle', port: 443 },
  { domain: 'ProxyIP.DigitalOcean.CMLiussss.net', region: 'DigitalOcean', regionCode: 'DigitalOcean', port: 443 },
  { domain: 'ProxyIP.Vultr.CMLiussss.net', region: 'Vultr', regionCode: 'Vultr', port: 443 },
  { domain: 'ProxyIP.Multacom.CMLiussss.net', region: 'Multacom', regionCode: 'Multacom', port: 443 }
];

const DIRECT_DOMAINS = [
  { name: 'cloudflare.182682.xyz', domain: 'cloudflare.182682.xyz' },
  { name: 'speed.marisalnc.com', domain: 'speed.marisalnc.com' },
  { domain: 'freeyx.cloudflare88.eu.org' },
  { domain: 'bestcf.top' },
  { domain: 'cdn.2020111.xyz' },
  { domain: 'cfip.cfcdn.vip' },
  { domain: 'cf.0sm.com' },
  { domain: 'cf.090227.xyz' },
  { domain: 'cf.zhetengsha.eu.org' },
  { domain: 'cloudflare.9jy.cc' },
  { domain: 'cf.zerone-cdn.pp.ua' },
  { domain: 'cfip.1323123.xyz' },
  { domain: 'cnamefuckxxs.yuchen.icu' },
  { domain: 'cloudflare-ip.mofashi.ltd' },
  { domain: '115155.xyz' },
  { domain: 'cname.xirancdn.us' },
  { domain: 'f3058171cad.002404.xyz' },
  { domain: '8.889288.xyz' },
  { domain: 'cdn.tzpro.xyz' },
  { domain: 'cf.877771.xyz' },
  { domain: 'xn--b6gac.eu.org' }
];

const CF_HTTP_PORTS = [80, 8080, 8880, 2052, 2082, 2086, 2095];
const CF_HTTPS_PORTS = [443, 2053, 2083, 2087, 2096, 8443];
const ALLOWED_ALPN = ['', 'h3', 'h2', 'http/1.1', 'h3,h2', 'h2,http/1.1', 'h3,h2,http/1.1'];
const REMOTE_CONFIG_URL = 'https://raw.githubusercontent.com/byJoey/test/refs/heads/main/tist.ini';

function isEnabledValue(val, defaultEnabled = false) {
  if (val === undefined || val === null || val === '') return defaultEnabled;
  if (val === true || val === false) return val;
  const text = String(val).trim().toLowerCase();
  if (text === 'yes' || text === 'true' || text === '1' || text === 'on') return true;
  if (text === 'no' || text === 'false' || text === '0' || text === 'off') return false;
  return defaultEnabled;
}

function normalizeSwitch(val, defaultEnabled = false) {
  return isEnabledValue(val, defaultEnabled) ? 'yes' : 'no';
}

function normalizeAlpn(val) {
  const s = String(val || '').trim();
  return ALLOWED_ALPN.includes(s) ? s : '';
}

function normalizeEffectiveConfig(rawConfig = {}) {
  const snap = {
    ...CONFIG_DEFAULTS,
    ...(rawConfig || {})
  };
  for (const key of BOOLEAN_CONFIG_KEYS) {
    snap[key] = normalizeSwitch(snap[key], isEnabledValue(CONFIG_DEFAULTS[key]));
  }
  if (snap.ev === 'no' && snap.et === 'no' && snap.ex === 'no') {
    snap.ev = 'yes';
  }
  if (snap.ech === 'yes') {
    snap.dkby = 'yes';
  }
  snap.alpn = normalizeAlpn(snap.alpn);
  const parsedCount = parseInt(snap.subNodeCount, 10);
  snap.subNodeCount = Number.isFinite(parsedCount) && parsedCount >= 0 ? parsedCount : 50;
  snap.brand = BRAND_NAME;
  return snap;
}

function readEnvConfigValue(env, ...names) {
  if (!env) return undefined;
  for (const name of names) {
    if (env[name] !== undefined && env[name] !== null && env[name] !== '' && typeof env[name] !== 'object') {
      return env[name];
    }
  }
  return undefined;
}

function getEnvConfigSnapshot(env = {}) {
  const snap = {};
  for (const [key, names] of Object.entries(ENV_KEY_MAPPING)) {
    const val = readEnvConfigValue(env, ...names);
    if (val !== undefined) snap[key] = val;
  }
  return snap;
}


// --- MODULE: src/config/presets.js ---
// ============================================================================
// miliconfig v3.1 - پریست‌های ساخت سریع کاربر (مطابق رابط کاربری تصویر ارسالی)
// ============================================================================


const USER_PRESETS = {
  'iran-fast': {
    id: 'iran-fast',
    title: 'ایران — پرسرعت (پیشنهادی)',
    subtitle: 'همراه اول · ایرانسل · مخابرات',
    badges: ['فرگمنت 100-200 با فاصله 10-20', 'fingerprint chrome', 'بلاک تبلیغات'],
    recommended: true,
    nodeScope: 'all',
    subNodeCount: 50,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 50,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      et: 'no',
      ex: 'no',
      epd: 'yes',
      epi: 'yes',
      egi: 'yes',
      ena: 'no',
      ipv4: 'yes',
      ipv6: 'yes'
    }
  },
  'iran-heavy': {
    id: 'iran-heavy',
    title: 'ایران — مصرف سنگین (نامحدود)',
    subtitle: 'استریم · بازی · دانلود',
    badges: ['حجم نامحدود', 'فرگمنت 100-200', '۲ دستگاه همزمان'],
    recommended: false,
    nodeScope: 'all',
    subNodeCount: 60,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 2,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      et: 'yes',
      ex: 'no',
      epd: 'yes',
      epi: 'yes',
      egi: 'yes'
    }
  },
  'international': {
    id: 'international',
    title: 'بین‌المللی — بدون فرگمنت',
    subtitle: 'اینترنت بدون محدودیت · سرعت حداکثری',
    badges: ['بدون فرگمنت', 'بدون محدودیت حجم', '۵ دستگاه همزمان'],
    recommended: false,
    nodeScope: 'all',
    subNodeCount: 50,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 5,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      et: 'no',
      ex: 'no',
      dkby: 'yes',
      alpn: 'h2,http/1.1'
    }
  },
  'multi-location': {
    id: 'multi-location',
    title: 'چند لوکیشن — فقط نودهای لبه',
    subtitle: 'می‌خواهند فقط لوکیشن‌های CDN را ببینند',
    badges: ['فقط نودهای مولتی‌لوکیشن', 'نام‌گذاری number+miliconfig', 'فرگمنت فعال'],
    recommended: false,
    nodeScope: 'edge',
    subNodeCount: 40,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 50,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      epd: 'yes',
      epi: 'yes',
      egi: 'yes',
      ena: 'no'
    }
  },
  'direct-only': {
    id: 'direct-only',
    title: 'فقط سرور اصلی (بدون CDN)',
    subtitle: 'وقتی مسیر CDN مشکل دارد یا تست خود سرور',
    badges: ['فقط نود سرور اصلی', 'بدون لوکیشن', 'بدون فرگمنت'],
    recommended: false,
    nodeScope: 'origin',
    subNodeCount: 10,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 50,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      ena: 'yes',
      epd: 'no',
      epi: 'no',
      egi: 'no',
      yxby: 'yes'
    }
  }
};

function buildUserDefaultConfig(basePanelConfig = {}, presetId = 'iran-fast', customOverrides = {}) {
  const preset = USER_PRESETS[presetId] || USER_PRESETS['iran-fast'];
  return normalizeEffectiveConfig({
    ...CONFIG_DEFAULTS,
    ...(basePanelConfig || {}),
    ...(preset.configOverrides || {}),
    subNodeCount: customOverrides.subNodeCount ?? basePanelConfig?.subNodeCount ?? preset.subNodeCount ?? 50,
    ...(customOverrides || {})
  });
}


// --- MODULE: src/core/utils.js ---
// ============================================================================
// miliconfig v3.1 - ابزارهای هسته، نام‌گذاری نودها (number+miliconfig) و رمزنگاری
// ============================================================================


const base64TextDecoder = new TextDecoder();
const sharedDecoder = new TextDecoder();

function decodeBase64Utf8(b64) {
  try {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return base64TextDecoder.decode(bytes);
  } catch (_e) {
    return '';
  }
}

function encodeBase64Utf8(str) {
  try {
    const bytes = new TextEncoder().encode(String(str ?? ''));
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  } catch (_e) {
    return btoa(unescape(encodeURIComponent(String(str ?? ''))));
  }
}

function isValidUuid(str) {
  if (!str || typeof str !== 'string') return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str.trim());
}

function generateUuidV4() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID().toLowerCase();
  }
  const bytes = new Uint8Array(16);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

function generateShortId(prefix = 'mili') {
  const bytes = new Uint8Array(3);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 3; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${prefix}-${hex}`;
}

function isValidIpAddress(addr) {
  if (!addr || typeof addr !== 'string') return false;
  const s = addr.trim().replace(/^\[([^\]]+)\]$/, '$1');
  const v4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (v4.test(s)) return true;
  const v6 = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (v6.test(s)) return true;
  const v6Compressed = /^::1$|^::$|^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/;
  return v6Compressed.test(s);
}

function isValidDomain(domain) {
  if (!domain || typeof domain !== 'string') return false;
  return /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(domain.trim());
}

function normalizeNodeHost(host) {
  return String(host || '').trim().replace(/^\[([^\]]+)\]$/, '$1');
}

function parseAddressAndPort(input) {
  const raw = String(input || '').trim();
  if (!raw) return { address: '', port: null };
  if (raw.includes('[') && raw.includes(']')) {
    const m = raw.match(/^\[([^\]]+)\](?::(\d+))?$/);
    if (m) {
      return {
        address: m[1],
        port: m[2] ? parseInt(m[2], 10) : null
      };
    }
  }
  const lastColon = raw.lastIndexOf(':');
  if (lastColon > 0) {
    const addr = raw.substring(0, lastColon);
    const portStr = raw.substring(lastColon + 1);
    const port = parseInt(portStr, 10);
    if (!addr.includes(':') && !Number.isNaN(port) && port > 0 && port <= 65535) {
      return { address: addr, port };
    }
  }
  return { address: raw, port: null };
}

// ============================================================================
// نام‌گذار اختصاصی نودهای خروجی با فرمت دقیق number+miliconfig
// (مثلاً: 1+miliconfig, 2+miliconfig, 3+miliconfig ...)
// ============================================================================
function createMiliNodeNamer(brand = BRAND_NAME) {
  let counter = 0;
  const cleanBrand = String(brand || BRAND_NAME).trim() || BRAND_NAME;
  return function nameNode(_item) {
    counter += 1;
    return `${counter}+${cleanBrand}`;
  };
}

// بازشماری و اعمال محدودیت تعداد نودهای ساب‌لینک کاربر با فرمت دقیق number+miliconfig
function finalizeMiliSubscriptionLinks(links = [], subNodeCount = 0, brand = BRAND_NAME) {
  if (!Array.isArray(links) || links.length === 0) return [];
  const cleanBrand = String(brand || BRAND_NAME).trim() || BRAND_NAME;
  const limit = parseInt(subNodeCount, 10);
  const sliced = Number.isFinite(limit) && limit > 0 ? links.slice(0, limit) : links.slice();
  return sliced.map((link, idx) => {
    const nodeName = `${idx + 1}+${cleanBrand}`;
    const hashIdx = link.indexOf('#');
    const base = hashIdx > -1 ? link.substring(0, hashIdx) : link;
    return `${base}#${encodeURIComponent(nodeName)}`;
  });
}

// ============================================================================
// Pure-JS MD5 (بدون وابستگی به WebCrypto MD5 جهت جلوگیری از خطای ۱۱۰۱ در تمام نسخه‌های کلودفلر)
// ============================================================================
async function md5Hex(text) {
  try {
    if (typeof crypto !== 'undefined' && crypto.subtle && typeof crypto.subtle.digest === 'function') {
      const buf = await crypto.subtle.digest('MD5', new TextEncoder().encode(String(text)));
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (_e) {
    // Fallback to pure JS MD5 below
  }
  return pureJsMd5(String(text));
}

function pureJsMd5(str) {
  const bytes = new TextEncoder().encode(str);
  const k = new Uint32Array([
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
    0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
    0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
    0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
    0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
    0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
  ]);
  const s = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
  ];
  const origLenBits = bytes.length * 8;
  const withOne = bytes.length + 1;
  const padLen = ((56 - (withOne % 64)) + 64) % 64;
  const totalLen = withOne + padLen + 8;
  const buf = new Uint8Array(totalLen);
  buf.set(bytes);
  buf[bytes.length] = 0x80;
  const dv = new DataView(buf.buffer);
  dv.setUint32(totalLen - 8, origLenBits >>> 0, true);
  dv.setUint32(totalLen - 4, Math.floor(origLenBits / 0x100000000), true);

  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;

  for (let offset = 0; offset < totalLen; offset += 64) {
    let A = a0, B = b0, C = c0, D = d0;
    for (let i = 0; i < 64; i++) {
      let F, g;
      if (i < 16) {
        F = (B & C) | (~B & D);
        g = i;
      } else if (i < 32) {
        F = (D & B) | (~D & C);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        F = B ^ C ^ D;
        g = (3 * i + 5) % 16;
      } else {
        F = C ^ (B | ~D);
        g = (7 * i) % 16;
      }
      const word = dv.getUint32(offset + g * 4, true);
      F = (F + A + k[i] + word) >>> 0;
      A = D;
      D = C;
      C = B;
      const rot = (F << s[i]) | (F >>> (32 - s[i]));
      B = (B + rot) >>> 0;
    }
    a0 = (a0 + A) >>> 0;
    b0 = (b0 + B) >>> 0;
    c0 = (c0 + C) >>> 0;
    d0 = (d0 + D) >>> 0;
  }

  const out = new Uint8Array(16);
  const outDv = new DataView(out.buffer);
  outDv.setUint32(0, a0, true);
  outDv.setUint32(4, b0, true);
  outDv.setUint32(8, c0, true);
  outDv.setUint32(12, d0, true);
  return Array.from(out, b => b.toString(16).padStart(2, '0')).join('');
}

// ============================================================================
// Pure-JS SHA-224 (برای پروتکل Trojan)
// ============================================================================
function rotr32(val, bits) {
  return (val >>> bits) | (val << (32 - bits));
}

async function sha224Hex(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(String(text || ''));
  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  const H = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
  const msgLen = data.length;
  const bitLen = msgLen * 8;
  const paddedLen = Math.ceil((msgLen + 9) / 64) * 64;
  const buf = new Uint8Array(paddedLen);
  buf.set(data);
  buf[msgLen] = 0x80;
  const view = new DataView(buf.buffer);
  view.setUint32(paddedLen - 4, bitLen, false);
  for (let chunk = 0; chunk < paddedLen; chunk += 64) {
    const W = new Uint32Array(64);
    for (let i = 0; i < 16; i++) {
      W[i] = view.getUint32(chunk + i * 4, false);
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotr32(W[i - 15], 7) ^ rotr32(W[i - 15], 18) ^ (W[i - 15] >>> 3);
      const s1 = rotr32(W[i - 2], 17) ^ rotr32(W[i - 2], 19) ^ (W[i - 2] >>> 10);
      W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr32(e, 6) ^ rotr32(e, 11) ^ rotr32(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + K[i] + W[i]) >>> 0;
      const S0 = rotr32(a, 2) ^ rotr32(a, 13) ^ rotr32(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }
    H[0] = (H[0] + a) >>> 0;
    H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0;
    H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0;
    H[5] = (H[5] + f) >>> 0;
    H[6] = (H[6] + g) >>> 0;
    H[7] = (H[7] + h) >>> 0;
  }
  const out = [];
  for (let i = 0; i < 7; i++) {
    out.push(
      ((H[i] >>> 24) & 0xff).toString(16).padStart(2, '0'),
      ((H[i] >>> 16) & 0xff).toString(16).padStart(2, '0'),
      ((H[i] >>> 8) & 0xff).toString(16).padStart(2, '0'),
      (H[i] & 0xff).toString(16).padStart(2, '0')
    );
  }
  return out.join('');
}

function formatBytes(bytes = 0) {
  const b = Number(bytes) || 0;
  if (b <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(b) / Math.log(1024)));
  const val = b / Math.pow(1024, i);
  return `${val >= 100 || i === 0 ? Math.round(val) : val.toFixed(2)} ${units[i]}`;
}


// --- MODULE: src/ui/icons.js ---
// ============================================================================
// miliconfig v3.1 - آیکون‌های گرافیکی نئونی (مطابق تصاویر ارسالی 1000050056 و 1000050169)
// ============================================================================

const SHIELD_LOGO_SVG = `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="mili-shield-svg">
  <circle cx="32" cy="32" r="30" fill="#0d170d" stroke="#65a30d" stroke-width="1.5" stroke-opacity="0.65"/>
  <circle cx="32" cy="32" r="24" fill="#102014"/>
  <path d="M32 16L44 21.2V30.8C44 39.4 38.88 46.84 32 49.5C25.12 46.84 20 39.4 20 30.8V21.2L32 16Z" stroke="#b5ff4d" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const CLOUD_LOGO_SVG = `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="mili-cloud-svg">
  <rect x="4" y="4" width="56" height="56" rx="18" fill="#0a0f09" stroke="#3f6212" stroke-width="1.6"/>
  <path d="M25.5 42H40.5C44.6421 42 48 38.6421 48 34.5C48 30.491 44.8544 27.2165 40.8926 27.0104C39.2471 21.7876 34.3652 18 28.6 18C21.4203 18 15.6 23.8203 15.6 31C15.6 37.0751 20.1249 42 25.5 42Z" stroke="#b5ff4d" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const FAVICON_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#0b140b" stroke="#a3e635" stroke-width="3"/><path d="M32 15L45 20.5V30.8C45 39.8 39.5 47.5 32 50.5C24.5 47.5 19 39.8 19 30.8V20.5L32 15Z" fill="none" stroke="#b5ff4d" stroke-width="4" stroke-linejoin="round"/></svg>`
)}`;


// --- MODULE: src/ui/baseCss.js ---
// ============================================================================
// miliconfig v3.1 - لایه پایه مشترک رابط کاربری (موبایل + ویندوز)
// این ماژول در انتهای <style> هر سه صفحه تزریق می‌شود تا:
//   ۱. کنترل‌های بومی مرورگر (select/scrollbar/checkbox) در ویندوز و اندروید تیره شوند.
//   ۲. روی موبایل، فونت ورودی‌ها ۱۶px (ضد زوم خودکار iOS)، هدف لمس ۴۴px و
//      Safe-Area آیفون (ناچ) رعایت شود.
//   ۳. متن‌های طولانی (UUID و لینک ساب) در صفحات باریک سرریز نکنند.
// ============================================================================

const VIEWPORT_META = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
const THEME_COLOR_META = '#060b06';

const BASE_UI_CSS = `
    /* ================= miliconfig base: موبایل + ویندوز ================= */
    html {
      color-scheme: dark;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
      scrollbar-color: rgba(163, 230, 53, 0.35) rgba(4, 8, 4, 0.7);
    }
    * { -webkit-tap-highlight-color: transparent; }
    *:focus-visible {
      outline: 2px solid var(--neon);
      outline-offset: 2px;
    }
    /* اسکرول‌بار تیره در کروم/اج ویندوز */
    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track { background: rgba(4, 8, 4, 0.7); }
    ::-webkit-scrollbar-thumb {
      background: rgba(163, 230, 53, 0.32);
      border: 2px solid transparent;
      background-clip: padding-box;
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(163, 230, 53, 0.5);
      background-clip: padding-box;
    }
    /*
      کنترل‌های بومی مرورگر (منوی کشویی select، اسکرول‌بار، پیکر تاریخ و ...)
      با color-scheme تیره می‌شوند. رنگ/فونت خودِ option را دستی عوض نمی‌کنیم تا
      منوی کشویی روی اندروید/iOS هم بومی و سالم باز شود و متن آن ناپدید نشود.
    */
    button, input, select, textarea, option { color-scheme: dark; }
    input::placeholder, textarea::placeholder { color: rgba(143, 166, 134, 0.75); }
    /* متن‌های طولانی (UUID / لینک ساب) نباید چیدمان را بشکنند */
    .kv-val, .url-text, .uc-uuid, .node-tag, .hero-heading, .sb-brand-title, .clock-time {
      overflow-wrap: anywhere;
    }
    .kv-val, .url-text, .uc-uuid, .uc-stats, .field-box { min-width: 0; }
    /* Safe-Area آیفون برای نوار پایین موبایل و دکمه شناور */
    .mobile-bottom-nav { bottom: calc(10px + env(safe-area-inset-bottom, 0px)); }
    .fab-refresh {
      bottom: calc(22px + env(safe-area-inset-bottom, 0px));
      left: calc(22px + env(safe-area-inset-left, 0px));
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    @media (hover: none) {
      /* جلوگیری از گیر کردن حالت hover بعد از لمس روی موبایل */
      .btn-neon:hover, .btn-ghost:hover, .copy-btn:hover, .sb-btn:hover,
      .dl-btn:hover, .fab-refresh:hover, .sb-item:hover {
        transform: none;
      }
    }
    /* ================= miliconfig mobile ================= */
    @media (max-width: 900px) {
      /* فونت ۱۶px ورودی‌ها => جلوگیری از زوم خودکار iOS */
      .mili-input, .mili-select, .mili-textarea, .token-input,
      input[type="text"], input[type="number"], input[type="search"], textarea, select {
        font-size: 16px;
      }
      /* هدف لمس استاندارد ۴۴ پیکسل */
      .btn-neon, .btn-ghost, .copy-btn, .dl-btn, .top-pill, .sb-btn, .mob-nav-btn {
        min-height: 44px;
      }
      .btn-neon, .btn-ghost { padding: 12px 16px; }
      .copy-btn { padding: 11px 14px; }
      .mob-nav-btn { padding: 8px 2px; font-size: 0.68rem; }
      .mobile-bottom-nav { padding: 8px 6px; }
      .toast-box, .toast { top: calc(12px + env(safe-area-inset-top, 0px)); max-width: calc(100% - 24px); }
      /* روی صفحه‌های لمسی نیازی به فاصله اضافه فوکوس نیست */
      *:focus-visible { outline-offset: 0; }
    }
`;


// --- MODULE: src/db/d1.js ---
// ============================================================================
// miliconfig v3.1 - لایه دیتابیس Cloudflare D1 با تشخیص خودکار، Auto-Migration
// و Fallback هوشمند بدون خطا در استقرار دستی یا اتصال مستقیم گیت‌هاب
// ============================================================================


// حافظه کش داخلی هر Isolate جهت حداکثر سرعت و کارکرد بدون وقفه حتی بدون اتصال D1
const memoryStore = {
  initialized: false,
  d1SchemaReady: false,
  bootTime: Date.now(),
  globalConfig: {},
  users: new Map(),
  auditLogs: [],
  trafficHourly: new Map(),
  lastSyncAt: 0
};

// ۱. تشخیص هوشمند اتصال دیتابیس D1 با هر نام متغیری (DB, D1, miliconfig_db و غیره)
function detectD1Binding(env) {
  if (!env || typeof env !== 'object') return null;
  const priorityNames = ['DB', 'D1', 'db', 'd1', 'MILICONFIG_DB', 'miliconfig_db', 'DATABASE', 'database'];
  for (const name of priorityNames) {
    const candidate = env[name];
    if (candidate && typeof candidate === 'object' && typeof candidate.prepare === 'function') {
      return { db: candidate, bindingName: name };
    }
  }
  for (const [key, val] of Object.entries(env)) {
    if (val && typeof val === 'object' && typeof val.prepare === 'function') {
      return { db: val, bindingName: key };
    }
  }
  return null;
}

// ۲. تشخیص هوشمند اتصال فضای نام KV با هر نام متغیری (C, KV و غیره)
function detectKvBinding(env) {
  if (!env || typeof env !== 'object') return null;
  const priorityNames = ['C', 'c', 'KV', 'kv', 'MILICONFIG_KV'];
  for (const name of priorityNames) {
    const candidate = env[name];
    if (
      candidate &&
      typeof candidate === 'object' &&
      typeof candidate.get === 'function' &&
      typeof candidate.put === 'function' &&
      typeof candidate.prepare !== 'function'
    ) {
      return { kv: candidate, bindingName: name };
    }
  }
  for (const [key, val] of Object.entries(env)) {
    if (
      val &&
      typeof val === 'object' &&
      typeof val.get === 'function' &&
      typeof val.put === 'function' &&
      typeof val.prepare !== 'function'
    ) {
      return { kv: val, bindingName: key };
    }
  }
  return null;
}

// جلوگیری از خطای D1_TYPE_ERROR در کلودفلر (تبدیل undefined به null یا مقدار پیش‌فرض)
function safeBind(stmt, ...params) {
  const sanitized = params.map(p => {
    if (p === undefined) return null;
    if (typeof p === 'number' && !Number.isFinite(p)) return 0;
    if (typeof p === 'boolean') return p ? 1 : 0;
    return p;
  });
  return stmt.bind(...sanitized);
}

// دریافت توکن/UUID ادمین اصلی از متغیر محیطی u یا مقدار پیش‌فرض
function getAdminUuid(env = {}) {
  const raw = env?.u || env?.U || env?.UUID || env?.uuid || DEFAULT_ADMIN_UUID;
  return String(raw).trim().toLowerCase();
}

// ۳. ساخت خودکار جداول D1 بدون استفاده از db.exec چندخطی (ضد خطای استقرار دستی D1)
async function ensureD1Schema(env = {}, force = false) {
  const detected = detectD1Binding(env);
  if (!detected) {
    ensureMemorySeeded(env);
    return { d1Enabled: false, bindingName: null, migrated: false };
  }
  const { db, bindingName } = detected;
  if (memoryStore.d1SchemaReady && !force) {
    return { d1Enabled: true, bindingName, migrated: true };
  }

  const ddlStatements = [
    `CREATE TABLE IF NOT EXISTS system_config (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at INTEGER NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      uuid TEXT NOT NULL UNIQUE,
      sub_node_count INTEGER NOT NULL DEFAULT 50,
      status TEXT NOT NULL DEFAULT 'active',
      enabled INTEGER NOT NULL DEFAULT 1,
      data_limit_gb REAL NOT NULL DEFAULT 0,
      used_bytes INTEGER NOT NULL DEFAULT 0,
      lifetime_bytes INTEGER NOT NULL DEFAULT 0,
      request_count INTEGER NOT NULL DEFAULT 0,
      expire_days INTEGER NOT NULL DEFAULT 0,
      expire_at INTEGER NOT NULL DEFAULT 0,
      start_on_first_use INTEGER NOT NULL DEFAULT 1,
      first_connected_at INTEGER NOT NULL DEFAULT 0,
      ip_limit INTEGER NOT NULL DEFAULT 50,
      node_scope TEXT NOT NULL DEFAULT 'all',
      preset TEXT NOT NULL DEFAULT 'iran-fast',
      note TEXT DEFAULT '',
      config_json TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS preferred_nodes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT NOT NULL,
      port INTEGER NOT NULL DEFAULT 443,
      name TEXT NOT NULL,
      colo TEXT DEFAULT '',
      latency INTEGER DEFAULT 0,
      source TEXT DEFAULT 'manual',
      created_at INTEGER NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS audit_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      action TEXT NOT NULL,
      detail TEXT NOT NULL,
      ip TEXT DEFAULT '',
      created_at INTEGER NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS traffic_hourly (
      hour_key TEXT PRIMARY KEY,
      bytes INTEGER NOT NULL DEFAULT 0,
      requests INTEGER NOT NULL DEFAULT 0
    )`
  ];

  try {
    for (const sql of ddlStatements) {
      await db.prepare(sql).run();
    }
    memoryStore.d1SchemaReady = true;

    // بررسی وجود کاربر اولیه؛ در صورت خالی بودن جدول users یک کاربر پیش‌فرض می‌سازیم
    const countRow = await db.prepare(`SELECT COUNT(*) as cnt FROM users`).first();
    const totalUsers = Number(countRow?.cnt || 0);
    if (totalUsers === 0) {
      const adminUuid = getAdminUuid(env);
      const envSnap = getEnvConfigSnapshot(env);
      const defaultUserConfig = buildUserDefaultConfig(envSnap, 'iran-fast', {
        subNodeCount: 50
      });
      const now = Date.now();
      const firstId = generateShortId('mili');
      await safeBind(
        db.prepare(
          `INSERT OR IGNORE INTO users (
            id, username, uuid, sub_node_count, status, enabled,
            data_limit_gb, used_bytes, lifetime_bytes, request_count,
            expire_days, expire_at, start_on_first_use, first_connected_at,
            ip_limit, node_scope, preset, note, config_json, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ),
        firstId,
        firstId,
        adminUuid,
        50,
        'active',
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        50,
        'all',
        'iran-fast',
        'کاربر پیش‌فرض اولیه سیستم miliconfig',
        JSON.stringify(defaultUserConfig),
        now,
        now
      ).run();

      await addAuditLog(env, 'ساخت خودکار دیتابیس D1', `${firstId} · iran-fast`, 'system');
    }

    return { d1Enabled: true, bindingName, migrated: true };
  } catch (err) {
    ensureMemorySeeded(env);
    return {
      d1Enabled: false,
      bindingName,
      migrated: false,
      error: err?.message || String(err)
    };
  }
}

function ensureMemorySeeded(env = {}) {
  if (memoryStore.initialized) return;
  memoryStore.initialized = true;
  const adminUuid = getAdminUuid(env);
  const envSnap = getEnvConfigSnapshot(env);
  memoryStore.globalConfig = { ...envSnap };

  if (memoryStore.users.size === 0) {
    const now = Date.now();
    const firstId = 'mili-default';
    const cfg = buildUserDefaultConfig(envSnap, 'iran-fast', { subNodeCount: 50 });
    memoryStore.users.set(firstId, {
      id: firstId,
      username: firstId,
      uuid: adminUuid,
      subNodeCount: 50,
      status: 'active',
      enabled: true,
      dataLimitGb: 0,
      usedBytes: 0,
      lifetimeBytes: 0,
      requestCount: 0,
      expireDays: 0,
      expireAt: 0,
      startOnFirstUse: true,
      firstConnectedAt: 0,
      ipLimit: 50,
      nodeScope: 'all',
      preset: 'iran-fast',
      note: 'کاربر پیش‌فرض اولیه miliconfig',
      config: cfg,
      createdAt: now,
      updatedAt: now
    });
    memoryStore.auditLogs.unshift({
      id: 1,
      action: 'راه‌اندازی اولیه سیستم',
      detail: `${firstId} · iran-fast`,
      ip: '127.0.0.1',
      createdAt: now
    });
  }
}

function mapUserRow(row) {
  if (!row) return null;
  let parsedConfig = {};
  try {
    parsedConfig = typeof row.config_json === 'string' ? JSON.parse(row.config_json) : (row.config_json || row.config || {});
  } catch (_e) {
    parsedConfig = {};
  }
  const subNodeCount = Number.isFinite(Number(row.sub_node_count ?? row.subNodeCount))
    ? Number(row.sub_node_count ?? row.subNodeCount)
    : Number(parsedConfig.subNodeCount ?? 50);
  const effectiveConfig = normalizeEffectiveConfig({
    ...CONFIG_DEFAULTS,
    ...parsedConfig,
    subNodeCount
  });
  return {
    id: String(row.id),
    username: String(row.username || row.id),
    uuid: String(row.uuid || '').toLowerCase(),
    subNodeCount,
    status: String(row.status || 'active'),
    enabled: Boolean(row.enabled === undefined ? true : Number(row.enabled) !== 0),
    dataLimitGb: Number(row.data_limit_gb ?? row.dataLimitGb ?? 0),
    usedBytes: Number(row.used_bytes ?? row.usedBytes ?? 0),
    lifetimeBytes: Number(row.lifetime_bytes ?? row.lifetimeBytes ?? 0),
    requestCount: Number(row.request_count ?? row.requestCount ?? 0),
    expireDays: Number(row.expire_days ?? row.expireDays ?? 0),
    expireAt: Number(row.expire_at ?? row.expireAt ?? 0),
    startOnFirstUse: Boolean(row.start_on_first_use === undefined ? (row.startOnFirstUse ?? true) : Number(row.start_on_first_use) !== 0),
    firstConnectedAt: Number(row.first_connected_at ?? row.firstConnectedAt ?? 0),
    ipLimit: Number(row.ip_limit ?? row.ipLimit ?? 50),
    nodeScope: String(row.node_scope || row.nodeScope || 'all'),
    preset: String(row.preset || 'iran-fast'),
    note: String(row.note || ''),
    config: effectiveConfig,
    createdAt: Number(row.created_at ?? row.createdAt ?? Date.now()),
    updatedAt: Number(row.updated_at ?? row.updatedAt ?? Date.now())
  };
}

// ۴. مدیریت تنظیمات سراسری پنل (با پشتیبانی همزمان از D1 + KV + Env)
async function loadGlobalConfig(env = {}, force = false) {
  await ensureD1Schema(env);
  const envSnap = getEnvConfigSnapshot(env);
  const detectedD1 = detectD1Binding(env);
  const detectedKv = detectKvBinding(env);

  if (!force && memoryStore.lastSyncAt > 0 && Date.now() - memoryStore.lastSyncAt < 15000) {
    return normalizeEffectiveConfig({
      ...CONFIG_DEFAULTS,
      ...envSnap,
      ...memoryStore.globalConfig
    });
  }

  let stored = {};
  if (detectedKv) {
    try {
      const kvRaw = await detectedKv.kv.get('c');
      if (kvRaw) stored = { ...stored, ...JSON.parse(kvRaw) };
    } catch (_e) {}
  }

  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      const res = await detectedD1.db.prepare(`SELECT key, value FROM system_config`).all();
      const rows = res?.results || [];
      for (const r of rows) {
        if (r && r.key) {
          stored[r.key] = r.value;
        }
      }
    } catch (_e) {}
  }

  memoryStore.globalConfig = { ...memoryStore.globalConfig, ...stored };
  memoryStore.lastSyncAt = Date.now();
  return normalizeEffectiveConfig({
    ...CONFIG_DEFAULTS,
    ...envSnap,
    ...memoryStore.globalConfig
  });
}

async function saveGlobalConfig(env = {}, newValues = {}) {
  await ensureD1Schema(env);
  const detectedD1 = detectD1Binding(env);
  const detectedKv = detectKvBinding(env);
  const now = Date.now();

  for (const [k, v] of Object.entries(newValues || {})) {
    if (v === '' || v === null || v === undefined) {
      delete memoryStore.globalConfig[k];
    } else {
      memoryStore.globalConfig[k] = String(v);
    }
  }

  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      for (const [k, v] of Object.entries(newValues || {})) {
        if (v === '' || v === null || v === undefined) {
          await safeBind(detectedD1.db.prepare(`DELETE FROM system_config WHERE key = ?`), k).run();
        } else {
          await safeBind(
            detectedD1.db.prepare(
              `INSERT INTO system_config (key, value, updated_at) VALUES (?, ?, ?)
               ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`
            ),
            k,
            String(v),
            now
          ).run();
        }
      }
    } catch (_e) {}
  }

  if (detectedKv) {
    try {
      await detectedKv.kv.put('c', JSON.stringify(memoryStore.globalConfig));
      await detectedKv.kv.put('c_ver', String(now));
    } catch (_e) {}
  }

  memoryStore.lastSyncAt = now;
  return await loadGlobalConfig(env, true);
}

async function resetGlobalConfig(env = {}) {
  await ensureD1Schema(env);
  const detectedD1 = detectD1Binding(env);
  const detectedKv = detectKvBinding(env);
  memoryStore.globalConfig = {};

  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await detectedD1.db.prepare(`DELETE FROM system_config`).run();
    } catch (_e) {}
  }
  if (detectedKv) {
    try {
      await detectedKv.kv.put('c', JSON.stringify({}));
      await detectedKv.kv.put('c_ver', String(Date.now()));
    } catch (_e) {}
  }
  memoryStore.lastSyncAt = Date.now();
  return await loadGlobalConfig(env, true);
}

// ۵. عملیات کامل مدیریت کاربران (ایجاد، لیست، ویرایش، حذف، ریست ترافیک، جستجوی سریع)
async function listUsers(env = {}) {
  await ensureD1Schema(env);
  const detectedD1 = detectD1Binding(env);

  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      const res = await detectedD1.db.prepare(`SELECT * FROM users ORDER BY created_at DESC`).all();
      const users = (res?.results || []).map(mapUserRow).filter(Boolean);
      memoryStore.users.clear();
      for (const u of users) memoryStore.users.set(u.id, u);
      return users;
    } catch (_e) {}
  }

  ensureMemorySeeded(env);
  return Array.from(memoryStore.users.values()).sort((a, b) => b.createdAt - a.createdAt);
}

async function getUserByIdOrToken(env = {}, token = '') {
  if (!token) return null;
  const clean = String(token).trim();
  const cleanLower = clean.toLowerCase().replace(/^\/+|\/+$/g, '');
  const users = await listUsers(env);
  for (const u of users) {
    if (
      u.id.toLowerCase() === cleanLower ||
      u.uuid.toLowerCase() === cleanLower ||
      u.username.toLowerCase() === cleanLower ||
      (u.config?.d && u.config.d.trim().replace(/^\/+|\/+$/g, '').toLowerCase() === cleanLower)
    ) {
      return u;
    }
  }
  return null;
}

async function createUser(env = {}, payload = {}, clientIp = '') {
  await ensureD1Schema(env);
  const globalCfg = await loadGlobalConfig(env);
  const now = Date.now();

  const presetId = payload.preset || 'iran-fast';
  const rawName = String(payload.username || payload.name || '').trim();
  const id = payload.id && String(payload.id).trim() ? String(payload.id).trim() : generateShortId('mili');
  const username = rawName || id;
  const uuid = isValidUuid(payload.uuid) ? String(payload.uuid).trim().toLowerCase() : generateUuidV4();

  const subNodeCountRaw = parseInt(payload.subNodeCount ?? payload.config?.subNodeCount ?? globalCfg.subNodeCount ?? 50, 10);
  const subNodeCount = Number.isFinite(subNodeCountRaw) && subNodeCountRaw >= 0 ? subNodeCountRaw : 50;

  // ادغام تمام ۳۱ تنظیم پیش‌فرض کد پایه + تنظیمات پنل + تنظیمات اختصاصی کاربر جدید
  const mergedUserConfig = buildUserDefaultConfig(
    payload.usePanelDefaults !== false ? globalCfg : CONFIG_DEFAULTS,
    presetId,
    {
      ...(payload.config || {}),
      wk: payload.wk ?? payload.config?.wk ?? globalCfg.wk ?? CONFIG_DEFAULTS.wk,
      ev: payload.ev ?? payload.config?.ev ?? globalCfg.ev ?? CONFIG_DEFAULTS.ev,
      et: payload.et ?? payload.config?.et ?? globalCfg.et ?? CONFIG_DEFAULTS.et,
      ex: payload.ex ?? payload.config?.ex ?? globalCfg.ex ?? CONFIG_DEFAULTS.ex,
      ech: payload.ech ?? payload.config?.ech ?? globalCfg.ech ?? CONFIG_DEFAULTS.ech,
      tp: payload.tp ?? payload.config?.tp ?? globalCfg.tp ?? CONFIG_DEFAULTS.tp,
      customDNS: payload.customDNS ?? payload.config?.customDNS ?? globalCfg.customDNS ?? CONFIG_DEFAULTS.customDNS,
      customECHDomain: payload.customECHDomain ?? payload.config?.customECHDomain ?? globalCfg.customECHDomain ?? CONFIG_DEFAULTS.customECHDomain,
      alpn: payload.alpn ?? payload.config?.alpn ?? globalCfg.alpn ?? CONFIG_DEFAULTS.alpn,
      d: payload.d ?? payload.config?.d ?? '',
      p: payload.p ?? payload.config?.p ?? globalCfg.p ?? CONFIG_DEFAULTS.p,
      yx: payload.yx ?? payload.config?.yx ?? globalCfg.yx ?? CONFIG_DEFAULTS.yx,
      yxURL: payload.yxURL ?? payload.config?.yxURL ?? globalCfg.yxURL ?? CONFIG_DEFAULTS.yxURL,
      s: payload.s ?? payload.config?.s ?? globalCfg.s ?? CONFIG_DEFAULTS.s,
      homepage: payload.homepage ?? payload.config?.homepage ?? globalCfg.homepage ?? CONFIG_DEFAULTS.homepage,
      scu: payload.scu ?? payload.config?.scu ?? globalCfg.scu ?? CONFIG_DEFAULTS.scu,
      ena: payload.ena ?? payload.config?.ena ?? globalCfg.ena ?? CONFIG_DEFAULTS.ena,
      epd: payload.epd ?? payload.config?.epd ?? globalCfg.epd ?? CONFIG_DEFAULTS.epd,
      epi: payload.epi ?? payload.config?.epi ?? globalCfg.epi ?? CONFIG_DEFAULTS.epi,
      egi: payload.egi ?? payload.config?.egi ?? globalCfg.egi ?? CONFIG_DEFAULTS.egi,
      ae: payload.ae ?? payload.config?.ae ?? globalCfg.ae ?? CONFIG_DEFAULTS.ae,
      rm: payload.rm ?? payload.config?.rm ?? globalCfg.rm ?? CONFIG_DEFAULTS.rm,
      qj: payload.qj ?? payload.config?.qj ?? globalCfg.qj ?? CONFIG_DEFAULTS.qj,
      dkby: payload.dkby ?? payload.config?.dkby ?? globalCfg.dkby ?? CONFIG_DEFAULTS.dkby,
      yxby: payload.yxby ?? payload.config?.yxby ?? globalCfg.yxby ?? CONFIG_DEFAULTS.yxby,
      ipv4: payload.ipv4 ?? payload.config?.ipv4 ?? globalCfg.ipv4 ?? CONFIG_DEFAULTS.ipv4,
      ipv6: payload.ipv6 ?? payload.config?.ipv6 ?? globalCfg.ipv6 ?? CONFIG_DEFAULTS.ipv6,
      ispMobile: payload.ispMobile ?? payload.config?.ispMobile ?? globalCfg.ispMobile ?? CONFIG_DEFAULTS.ispMobile,
      ispUnicom: payload.ispUnicom ?? payload.config?.ispUnicom ?? globalCfg.ispUnicom ?? CONFIG_DEFAULTS.ispUnicom,
      ispTelecom: payload.ispTelecom ?? payload.config?.ispTelecom ?? globalCfg.ispTelecom ?? CONFIG_DEFAULTS.ispTelecom,
      jk: payload.jk ?? payload.config?.jk ?? globalCfg.jk ?? CONFIG_DEFAULTS.jk,
      subNodeCount
    }
  );

  const dataLimitGb = Math.max(0, Number(payload.dataLimitGb ?? 0) || 0);
  const expireDays = Math.max(0, parseInt(payload.expireDays ?? 0, 10) || 0);
  const startOnFirstUse = payload.startOnFirstUse !== undefined ? Boolean(payload.startOnFirstUse) : true;
  const expireAt = !startOnFirstUse && expireDays > 0 ? now + expireDays * 86400 * 1000 : 0;
  const ipLimit = Math.max(1, parseInt(payload.ipLimit ?? 50, 10) || 50);
  const nodeScope = String(payload.nodeScope || 'all');
  const enabled = payload.enabled !== undefined ? Boolean(payload.enabled) : true;
  const note = String(payload.note || '');

  const userObj = {
    id,
    username,
    uuid,
    subNodeCount,
    status: enabled ? 'active' : 'disabled',
    enabled,
    dataLimitGb,
    usedBytes: 0,
    lifetimeBytes: 0,
    requestCount: 0,
    expireDays,
    expireAt,
    startOnFirstUse,
    firstConnectedAt: 0,
    ipLimit,
    nodeScope,
    preset: presetId,
    note,
    config: mergedUserConfig,
    createdAt: now,
    updatedAt: now
  };

  memoryStore.users.set(id, userObj);

  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await safeBind(
        detectedD1.db.prepare(
          `INSERT INTO users (
            id, username, uuid, sub_node_count, status, enabled,
            data_limit_gb, used_bytes, lifetime_bytes, request_count,
            expire_days, expire_at, start_on_first_use, first_connected_at,
            ip_limit, node_scope, preset, note, config_json, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ),
        userObj.id,
        userObj.username,
        userObj.uuid,
        userObj.subNodeCount,
        userObj.status,
        userObj.enabled ? 1 : 0,
        userObj.dataLimitGb,
        0,
        0,
        0,
        userObj.expireDays,
        userObj.expireAt,
        userObj.startOnFirstUse ? 1 : 0,
        0,
        userObj.ipLimit,
        userObj.nodeScope,
        userObj.preset,
        userObj.note,
        JSON.stringify(userObj.config),
        now,
        now
      ).run();
    } catch (_e) {}
  }

  await addAuditLog(env, 'ساخت سریع کاربر', `${userObj.username} · ${presetId}`, clientIp);
  return userObj;
}

async function updateUser(env = {}, userId, payload = {}, clientIp = '') {
  const existing = await getUserByIdOrToken(env, userId);
  if (!existing) return null;
  const now = Date.now();

  const subNodeCountRaw = parseInt(
    payload.subNodeCount ?? payload.config?.subNodeCount ?? existing.subNodeCount ?? 50,
    10
  );
  const subNodeCount = Number.isFinite(subNodeCountRaw) && subNodeCountRaw >= 0 ? subNodeCountRaw : existing.subNodeCount;

  const updatedConfig = normalizeEffectiveConfig({
    ...existing.config,
    ...(payload.config || {}),
    ...(payload.wk !== undefined ? { wk: payload.wk } : {}),
    ...(payload.ev !== undefined ? { ev: payload.ev } : {}),
    ...(payload.et !== undefined ? { et: payload.et } : {}),
    ...(payload.ex !== undefined ? { ex: payload.ex } : {}),
    ...(payload.ech !== undefined ? { ech: payload.ech } : {}),
    ...(payload.tp !== undefined ? { tp: payload.tp } : {}),
    ...(payload.customDNS !== undefined ? { customDNS: payload.customDNS } : {}),
    ...(payload.customECHDomain !== undefined ? { customECHDomain: payload.customECHDomain } : {}),
    ...(payload.alpn !== undefined ? { alpn: payload.alpn } : {}),
    ...(payload.d !== undefined ? { d: payload.d } : {}),
    ...(payload.p !== undefined ? { p: payload.p } : {}),
    ...(payload.yx !== undefined ? { yx: payload.yx } : {}),
    ...(payload.yxURL !== undefined ? { yxURL: payload.yxURL } : {}),
    ...(payload.s !== undefined ? { s: payload.s } : {}),
    ...(payload.homepage !== undefined ? { homepage: payload.homepage } : {}),
    ...(payload.scu !== undefined ? { scu: payload.scu } : {}),
    ...(payload.ena !== undefined ? { ena: payload.ena } : {}),
    ...(payload.epd !== undefined ? { epd: payload.epd } : {}),
    ...(payload.epi !== undefined ? { epi: payload.epi } : {}),
    ...(payload.egi !== undefined ? { egi: payload.egi } : {}),
    ...(payload.ae !== undefined ? { ae: payload.ae } : {}),
    ...(payload.rm !== undefined ? { rm: payload.rm } : {}),
    ...(payload.qj !== undefined ? { qj: payload.qj } : {}),
    ...(payload.dkby !== undefined ? { dkby: payload.dkby } : {}),
    ...(payload.yxby !== undefined ? { yxby: payload.yxby } : {}),
    ...(payload.ipv4 !== undefined ? { ipv4: payload.ipv4 } : {}),
    ...(payload.ipv6 !== undefined ? { ipv6: payload.ipv6 } : {}),
    ...(payload.ispMobile !== undefined ? { ispMobile: payload.ispMobile } : {}),
    ...(payload.ispUnicom !== undefined ? { ispUnicom: payload.ispUnicom } : {}),
    ...(payload.ispTelecom !== undefined ? { ispTelecom: payload.ispTelecom } : {}),
    ...(payload.jk !== undefined ? { jk: payload.jk } : {}),
    subNodeCount
  });

  const enabled = payload.enabled !== undefined ? Boolean(payload.enabled) : existing.enabled;
  const expireDays = payload.expireDays !== undefined ? Math.max(0, parseInt(payload.expireDays, 10) || 0) : existing.expireDays;
  const startOnFirstUse = payload.startOnFirstUse !== undefined ? Boolean(payload.startOnFirstUse) : existing.startOnFirstUse;
  let expireAt = existing.expireAt;
  if (payload.expireDays !== undefined) {
    expireAt = !startOnFirstUse && expireDays > 0 ? now + expireDays * 86400 * 1000 : 0;
  }

  const updated = {
    ...existing,
    username: payload.username !== undefined && String(payload.username).trim() ? String(payload.username).trim() : existing.username,
    uuid: payload.uuid && isValidUuid(payload.uuid) ? String(payload.uuid).trim().toLowerCase() : existing.uuid,
    subNodeCount,
    enabled,
    status: enabled ? 'active' : 'disabled',
    dataLimitGb: payload.dataLimitGb !== undefined ? Math.max(0, Number(payload.dataLimitGb) || 0) : existing.dataLimitGb,
    expireDays,
    expireAt,
    startOnFirstUse,
    ipLimit: payload.ipLimit !== undefined ? Math.max(1, parseInt(payload.ipLimit, 10) || 50) : existing.ipLimit,
    nodeScope: payload.nodeScope !== undefined ? String(payload.nodeScope) : existing.nodeScope,
    preset: payload.preset !== undefined ? String(payload.preset) : existing.preset,
    note: payload.note !== undefined ? String(payload.note) : existing.note,
    config: updatedConfig,
    updatedAt: now
  };

  memoryStore.users.set(existing.id, updated);

  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await safeBind(
        detectedD1.db.prepare(
          `UPDATE users SET
            username = ?, uuid = ?, sub_node_count = ?, status = ?, enabled = ?,
            data_limit_gb = ?, expire_days = ?, expire_at = ?, start_on_first_use = ?,
            ip_limit = ?, node_scope = ?, preset = ?, note = ?, config_json = ?, updated_at = ?
           WHERE id = ?`
        ),
        updated.username,
        updated.uuid,
        updated.subNodeCount,
        updated.status,
        updated.enabled ? 1 : 0,
        updated.dataLimitGb,
        updated.expireDays,
        updated.expireAt,
        updated.startOnFirstUse ? 1 : 0,
        updated.ipLimit,
        updated.nodeScope,
        updated.preset,
        updated.note,
        JSON.stringify(updated.config),
        now,
        existing.id
      ).run();
    } catch (_e) {}
  }

  await addAuditLog(env, 'ویرایش کاربر', `${updated.username}`, clientIp);
  return updated;
}

async function resetUserStats(env = {}, userId, clientIp = '') {
  const existing = await getUserByIdOrToken(env, userId);
  if (!existing) return null;
  const now = Date.now();
  const updated = {
    ...existing,
    usedBytes: 0,
    requestCount: 0,
    firstConnectedAt: 0,
    expireAt: !existing.startOnFirstUse && existing.expireDays > 0 ? now + existing.expireDays * 86400 * 1000 : 0,
    updatedAt: now
  };
  memoryStore.users.set(existing.id, updated);

  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await safeBind(
        detectedD1.db.prepare(
          `UPDATE users SET used_bytes = 0, request_count = 0, first_connected_at = 0, expire_at = ?, updated_at = ? WHERE id = ?`
        ),
        updated.expireAt,
        now,
        existing.id
      ).run();
    } catch (_e) {}
  }
  await addAuditLog(env, 'صفر کردن مصرف کاربر', `${existing.username}`, clientIp);
  return updated;
}

async function deleteUser(env = {}, userId, clientIp = '') {
  const existing = await getUserByIdOrToken(env, userId);
  if (!existing) return false;
  memoryStore.users.delete(existing.id);

  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await safeBind(detectedD1.db.prepare(`DELETE FROM users WHERE id = ?`), existing.id).run();
    } catch (_e) {}
  }
  await addAuditLog(env, 'حذف کاربر', `${existing.username}`, clientIp);
  return true;
}

async function recordUserActivity(env = {}, userId, bytesDelta = 0, reqDelta = 1) {
  if (!userId) return;
  const now = Date.now();
  const hourKey = new Date(now).toISOString().slice(0, 13);
  const prevHour = memoryStore.trafficHourly.get(hourKey) || { bytes: 0, requests: 0 };
  prevHour.bytes += Math.max(0, Number(bytesDelta) || 0);
  prevHour.requests += Math.max(0, Number(reqDelta) || 0);
  memoryStore.trafficHourly.set(hourKey, prevHour);

  const u = memoryStore.users.get(userId);
  if (u) {
    u.usedBytes = (u.usedBytes || 0) + Math.max(0, Number(bytesDelta) || 0);
    u.lifetimeBytes = (u.lifetimeBytes || 0) + Math.max(0, Number(bytesDelta) || 0);
    u.requestCount = (u.requestCount || 0) + Math.max(0, Number(reqDelta) || 0);
    if (!u.firstConnectedAt) {
      u.firstConnectedAt = now;
      if (u.startOnFirstUse && u.expireDays > 0 && !u.expireAt) {
        u.expireAt = now + u.expireDays * 86400 * 1000;
      }
    }
    u.updatedAt = now;
  }

  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await safeBind(
        detectedD1.db.prepare(
          `UPDATE users SET
            used_bytes = used_bytes + ?,
            lifetime_bytes = lifetime_bytes + ?,
            request_count = request_count + ?,
            first_connected_at = CASE WHEN first_connected_at = 0 THEN ? ELSE first_connected_at END,
            expire_at = CASE WHEN start_on_first_use = 1 AND expire_days > 0 AND expire_at = 0 THEN ? + (expire_days * 86400000) ELSE expire_at END,
            updated_at = ?
           WHERE id = ?`
        ),
        Math.max(0, Number(bytesDelta) || 0),
        Math.max(0, Number(bytesDelta) || 0),
        Math.max(0, Number(reqDelta) || 0),
        now,
        now,
        now,
        userId
      ).run();
    } catch (_e) {}
  }
}

async function addAuditLog(env = {}, action, detail = '', ip = '') {
  const now = Date.now();
  memoryStore.auditLogs.unshift({
    id: memoryStore.auditLogs.length + 1,
    action: String(action || ''),
    detail: String(detail || ''),
    ip: String(ip || ''),
    createdAt: now
  });
  if (memoryStore.auditLogs.length > 50) {
    memoryStore.auditLogs.length = 50;
  }
  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      await safeBind(
        detectedD1.db.prepare(`INSERT INTO audit_logs (action, detail, ip, created_at) VALUES (?, ?, ?, ?)`),
        String(action || ''),
        String(detail || ''),
        String(ip || ''),
        now
      ).run();
    } catch (_e) {}
  }
}

async function getAuditLogs(env = {}, limit = 15) {
  await ensureD1Schema(env);
  const detectedD1 = detectD1Binding(env);
  if (detectedD1 && memoryStore.d1SchemaReady) {
    try {
      const res = await safeBind(
        detectedD1.db.prepare(`SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT ?`),
        limit
      ).all();
      if (res?.results?.length) {
        return res.results.map(r => ({
          id: r.id,
          action: r.action,
          detail: r.detail,
          ip: r.ip,
          createdAt: r.created_at
        }));
      }
    } catch (_e) {}
  }
  return memoryStore.auditLogs.slice(0, limit);
}

async function getStorageDiagnostics(env = {}) {
  const d1State = await ensureD1Schema(env);
  const kvDetected = detectKvBinding(env);
  const users = await listUsers(env);
  const logs = await getAuditLogs(env, 12);
  let totalUsedBytes = 0;
  let totalLifetimeBytes = 0;
  let totalRequests = 0;
  let activeUsers = 0;
  for (const u of users) {
    totalUsedBytes += u.usedBytes || 0;
    totalLifetimeBytes += u.lifetimeBytes || 0;
    totalRequests += u.requestCount || 0;
    if (u.enabled) activeUsers += 1;
  }

  return {
    d1Enabled: d1State.d1Enabled,
    d1BindingName: d1State.bindingName || 'DB',
    d1Migrated: d1State.migrated,
    d1Error: d1State.error || null,
    kvEnabled: Boolean(kvDetected),
    kvBindingName: kvDetected?.bindingName || 'C',
    uptimeMs: Date.now() - memoryStore.bootTime,
    bootTime: memoryStore.bootTime,
    totalUsers: users.length,
    activeUsers,
    disabledUsers: Math.max(0, users.length - activeUsers),
    totalUsedBytes,
    totalLifetimeBytes,
    totalRequests,
    recentLogs: logs
  };
}


// --- MODULE: src/subscription/converters.js ---
// ============================================================================
// miliconfig v3.1 - مبدل‌های داخلی اشتراک (Clash, Sing-box, Surge, Loon, QuanX, Residential Chain)
// منطبق ۱۰۰٪ با منطق کد اصلی CFnew v3.1 + نام‌گذاری number+miliconfig
// ============================================================================


function quoteYaml(val) {
  if (val == null) return '""';
  const s = String(val);
  return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

function normalizeHost(hostname) {
  if (!hostname) return hostname;
  const s = String(hostname);
  if (s.startsWith('[') && s.endsWith(']')) return s.slice(1, -1);
  return s;
}

function buildClashGroupProxies(names, opts = {}) {
  const { directFirst = false, extraGroups = [] } = opts;
  const nodeLines = names.length ? names.map(n => `      - ${quoteYaml(n)}`).join('\n') : '      - DIRECT';
  const lines = [];
  if (directFirst) {
    lines.push('      - "🎯 全球直连"', '      - "🚀 节点选择"');
  } else {
    lines.push('      - "🚀 节点选择"', '      - "🎯 全球直连"');
  }
  for (const g of extraGroups) lines.push(`      - ${quoteYaml(g)}`);
  lines.push(nodeLines);
  return lines.join('\n');
}

function buildIniGroupProxies(names, opts = {}) {
  const { directFirst = false, extraGroups = [], compact = false } = opts;
  const sep = compact ? ',' : ', ';
  const listStr = names.length ? names.join(sep) : 'DIRECT';
  const parts = [];
  if (directFirst) parts.push('🎯 全球直连', '🚀 节点选择');
  else parts.push('🚀 节点选择', '🎯 全球直连');
  parts.push(...extraGroups);
  if (names.length) parts.push(listStr);
  return parts.join(sep);
}

function parseShareLink(link) {
  try {
    if (link.startsWith('vless://')) {
      const url = new URL(link);
      const params = new URLSearchParams(url.search);
      return {
        proto: 'vless',
        name: decodeURIComponent(url.hash.substring(1)) || `${url.hostname}:${url.port}`,
        uuid: url.username,
        server: normalizeHost(url.hostname),
        port: parseInt(url.port, 10) || 443,
        tls: params.get('security') === 'tls' || params.get('security') === 'reality',
        network: params.get('type') || 'ws',
        path: params.get('path') || '/?ed=2048',
        host: normalizeHost(params.get('host') || url.hostname),
        sni: normalizeHost(params.get('sni') || params.get('host') || url.hostname),
        alpn: (params.get('alpn') || '').split(',').map(s => s.trim()).filter(Boolean),
        fp: params.get('fp') || 'chrome',
        flow: params.get('flow') || '',
        encryption: params.get('encryption') || 'none',
        mode: params.get('mode') || '',
        ech: params.get('ech') || ''
      };
    }
    if (link.startsWith('trojan://')) {
      const url = new URL(link);
      const params = new URLSearchParams(url.search);
      return {
        proto: 'trojan',
        name: decodeURIComponent(url.hash.substring(1)) || `${url.hostname}:${url.port}`,
        password: decodeURIComponent(url.username),
        server: normalizeHost(url.hostname),
        port: parseInt(url.port, 10) || 443,
        tls: params.get('security') !== 'none',
        network: params.get('type') || 'ws',
        path: params.get('path') || '/?ed=2048',
        host: normalizeHost(params.get('host') || url.hostname),
        sni: normalizeHost(params.get('sni') || params.get('host') || url.hostname),
        alpn: (params.get('alpn') || '').split(',').map(s => s.trim()).filter(Boolean),
        fp: params.get('fp') || 'chrome',
        ech: params.get('ech') || ''
      };
    }
  } catch (_e) {}
  return null;
}

function buildClashNodeYaml(node, customECHDomain = 'cloudflare-ech.com') {
  const lines = [];
  const srv = normalizeHost(node.server);
  const host = normalizeHost(node.host) || srv;
  const sni = normalizeHost(node.sni) || host;
  lines.push(`  - name: ${quoteYaml(node.name)}`);
  lines.push(`    type: ${node.proto}`);
  lines.push(`    server: ${quoteYaml(srv)}`);
  lines.push(`    port: ${node.port}`);
  if (node.proto === 'vless') {
    lines.push(`    uuid: ${node.uuid}`);
    lines.push(`    udp: true`);
    lines.push(`    tls: ${node.tls ? 'true' : 'false'}`);
    if (node.flow) lines.push(`    flow: ${quoteYaml(node.flow)}`);
    lines.push(`    client-fingerprint: ${quoteYaml(node.fp || 'chrome')}`);
  } else if (node.proto === 'trojan') {
    lines.push(`    password: ${quoteYaml(node.password)}`);
    lines.push(`    udp: true`);
    lines.push(`    client-fingerprint: ${quoteYaml(node.fp || 'chrome')}`);
  }
  if (node.tls) {
    lines.push(`    servername: ${quoteYaml(sni)}`);
    if (node.alpn && node.alpn.length) {
      lines.push(`    alpn: [${node.alpn.map(a => quoteYaml(a)).join(', ')}]`);
    }
    lines.push(`    skip-cert-verify: false`);
  }
  if (node.network === 'ws' || node.network === 'xhttp') {
    lines.push(`    network: ws`);
    lines.push(`    ws-opts:`);
    lines.push(`      path: ${quoteYaml(node.path)}`);
    lines.push(`      headers:`);
    lines.push(`        Host: ${quoteYaml(host)}`);
  } else if (node.network === 'grpc') {
    lines.push(`    network: grpc`);
    lines.push(`    grpc-opts:`);
    lines.push(`      grpc-service-name: ${quoteYaml(node.path)}`);
  }
  if (node.ech) {
    const echDomain = customECHDomain || 'cloudflare-ech.com';
    lines.push(`    ech-opts:`);
    lines.push(`      enable: true`);
    lines.push(`      query-server-name: ${quoteYaml(echDomain)}`);
  }
  return lines.join('\n');
}

function generateClashConfig(links, options = {}) {
  const customDNS = options.customDNS || 'https://223.5.5.5/dns-query';
  const customECHDomain = options.customECHDomain || 'cloudflare-ech.com';
  const nodes = links.map(parseShareLink).filter(n => n && (n.proto === 'vless' || n.proto === 'trojan'));
  const names = nodes.map(n => n.name);

  const header = [
    '# miliconfig v3.1 - Clash / Mihomo Subscription',
    'mixed-port: 7890',
    'allow-lan: true',
    'mode: rule',
    'log-level: info',
    'ipv6: true',
    'external-controller: 127.0.0.1:9090',
    'unified-delay: true',
    'tcp-concurrent: true',
    'geodata-mode: true',
    'geo-auto-update: true',
    'geo-update-interval: 24',
    'geox-url:',
    '  geoip: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat"',
    '  geosite: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat"',
    '  mmdb: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb"',
    '  asn: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb"',
    'sniffer:',
    '  enable: true',
    '  force-dns-mapping: true',
    '  parse-pure-ip: true',
    '  sniff:',
    '    HTTP:',
    '      ports: [80, 8080-8880]',
    '      override-destination: true',
    '    TLS:',
    '      ports: [443, 8443]',
    '    QUIC:',
    '      ports: [443, 8443]',
    'dns:',
    '  enable: true',
    '  listen: 0.0.0.0:1053',
    '  ipv6: true',
    '  enhanced-mode: fake-ip',
    '  fake-ip-range: 198.18.0.1/16',
    '  fake-ip-filter:',
    '    - "*.lan"',
    '    - "+.local"',
    '    - "+.market.xiaomi.com"',
    '    - "+.msftconnecttest.com"',
    '    - "+.msftncsi.com"',
    '    - "localhost.ptlogin2.qq.com"',
    '    - "+.srv.nintendo.net"',
    '    - "+.stun.playstation.net"',
    '    - "+.xboxlive.com"',
    '  default-nameserver:',
    '    - 223.5.5.5',
    '    - 119.29.29.29',
    '  nameserver:',
    `    - ${customDNS}`,
    '    - https://119.29.29.29/dns-query',
    '  fallback:',
    '    - https://1.1.1.1/dns-query',
    '    - https://8.8.8.8/dns-query',
    '  fallback-filter:',
    '    geoip: true',
    '    geoip-code: CN',
    '    ipcidr:',
    '      - 240.0.0.0/4',
    ''
  ];

  const proxiesSection = ['proxies:'];
  for (const n of nodes) proxiesSection.push(buildClashNodeYaml(n, customECHDomain));

  const nodesOnly = names.length ? names.map(n => `      - ${quoteYaml(n)}`).join('\n') : '      - DIRECT';
  const groupsSection = [
    'proxy-groups:',
    '  - name: "🚀 节点选择"',
    '    type: select',
    '    proxies:',
    '      - "🎯 全球直连"',
    nodesOnly,
    '  - name: "🌍 国外媒体"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names),
    '  - name: "📺 哔哩哔哩"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names, { directFirst: true }),
    '  - name: "📹 油管视频"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names, { extraGroups: ['🌍 国外媒体'] }),
    '  - name: "🎬 奈飞视频"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names, { extraGroups: ['🌍 国外媒体'] }),
    '  - name: "📲 电报信息"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names),
    '  - name: "🌐 谷歌服务"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names),
    '  - name: "🤖 OpenAI"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names),
    '  - name: "Ⓜ️ 微软服务"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names, { directFirst: true }),
    '  - name: "🍎 苹果服务"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names, { directFirst: true }),
    '  - name: "🎯 全球直连"',
    '    type: select',
    '    proxies:',
    '      - DIRECT',
    '  - name: "🛑 全球拦截"',
    '    type: select',
    '    proxies:',
    '      - REJECT',
    '      - DIRECT',
    '  - name: "🍃 应用净化"',
    '    type: select',
    '    proxies:',
    '      - REJECT',
    '      - DIRECT',
    '  - name: "🐟 漏网之鱼"',
    '    type: select',
    '    proxies:',
    buildClashGroupProxies(names),
    ''
  ];

  const ruleBase = 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release';
  const provider = (name, behavior) => [
    `  ${name}:`,
    `    type: http`,
    `    behavior: ${behavior}`,
    `    url: "${ruleBase}/${name}.txt"`,
    `    path: ./rulesets/loyalsoldier/${name}.txt`,
    `    interval: 86400`
  ].join('\n');

  const ruleProviders = [
    'rule-providers:',
    provider('reject', 'domain'),
    provider('icloud', 'domain'),
    provider('apple', 'domain'),
    provider('google', 'domain'),
    provider('proxy', 'domain'),
    provider('direct', 'domain'),
    provider('private', 'domain'),
    provider('gfw', 'domain'),
    provider('greatfire', 'domain'),
    provider('tld-not-cn', 'domain'),
    provider('telegramcidr', 'ipcidr'),
    provider('cncidr', 'ipcidr'),
    provider('lancidr', 'ipcidr'),
    provider('applications', 'classical'),
    ''
  ];

  const rules = [
    'rules:',
    '  - DOMAIN-SUFFIX,acl4.ssr,🎯 全球直连',
    '  - DOMAIN-SUFFIX,local,🎯 全球直连',
    '  - DOMAIN,clash.razord.top,🎯 全球直连',
    '  - DOMAIN,yacd.haishan.me,🎯 全球直连',
    '  - DOMAIN,yacd.metacubex.one,🎯 全球直连',
    '  - DOMAIN,d.metacubex.one,🎯 全球直连',
    '  - DOMAIN-SUFFIX,googleapis.cn,🌐 谷歌服务',
    '  - DOMAIN-SUFFIX,gstatic.com,🌐 谷歌服务',
    '  - DOMAIN-SUFFIX,xn--ngstr-lra8j.com,🌐 谷歌服务',
    '  - DOMAIN-SUFFIX,googlevideo.com,📹 油管视频',
    '  - DOMAIN-SUFFIX,googleusercontent.com,🌐 谷歌服务',
    '  - DOMAIN-KEYWORD,youtube,📹 油管视频',
    '  - DOMAIN-SUFFIX,youtube.com,📹 油管视频',
    '  - DOMAIN-SUFFIX,youtu.be,📹 油管视频',
    '  - DOMAIN-KEYWORD,netflix,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflxext.com,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflxso.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflxvideo.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflximg.com,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflximg.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,netflix.com,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,netflix.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,bilibili.com,📺 哔哩哔哩',
    '  - DOMAIN-SUFFIX,bilivideo.com,📺 哔哩哔哩',
    '  - DOMAIN-SUFFIX,hdslb.com,📺 哔哩哔哩',
    '  - DOMAIN-KEYWORD,openai,🤖 OpenAI',
    '  - DOMAIN-KEYWORD,chatgpt,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,openai.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,chatgpt.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,oaistatic.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,anthropic.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,claude.ai,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,perplexity.ai,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,gemini.google.com,🤖 OpenAI',
    '  - RULE-SET,applications,🎯 全球直连',
    '  - RULE-SET,private,🎯 全球直连',
    '  - RULE-SET,reject,🛑 全球拦截',
    '  - RULE-SET,icloud,🍎 苹果服务',
    '  - RULE-SET,apple,🍎 苹果服务',
    '  - RULE-SET,google,🌐 谷歌服务',
    '  - RULE-SET,proxy,🚀 节点选择',
    '  - RULE-SET,gfw,🚀 节点选择',
    '  - RULE-SET,greatfire,🚀 节点选择',
    '  - RULE-SET,tld-not-cn,🚀 节点选择',
    '  - RULE-SET,direct,🎯 全球直连',
    '  - RULE-SET,lancidr,🎯 全球直连,no-resolve',
    '  - RULE-SET,cncidr,🎯 全球直连,no-resolve',
    '  - RULE-SET,telegramcidr,📲 电报信息,no-resolve',
    '  - GEOIP,LAN,🎯 全球直连,no-resolve',
    '  - GEOIP,CN,🎯 全球直连,no-resolve',
    '  - MATCH,🐟 漏网之鱼'
  ];

  return [header.join('\n'), proxiesSection.join('\n'), '', groupsSection.join('\n'), ruleProviders.join('\n'), rules.join('\n'), ''].join('\n');
}

function splitDnsAddress(addr) {
  const text = String(addr || '').trim();
  try {
    const url = new URL(text);
    const proto = url.protocol.replace(':', '').toLowerCase();
    if (proto === 'https' || proto === 'http3' || proto === 'h3') {
      const out = { type: 'https', server: url.hostname };
      if (url.port) out.server_port = Number(url.port);
      if (url.pathname && url.pathname !== '/' && url.pathname !== '/dns-query') out.path = url.pathname;
      return out;
    }
    if (proto === 'tls') return { type: 'tls', server: url.hostname };
    if (proto === 'quic') return { type: 'quic', server: url.hostname };
    if (proto === 'udp' || proto === 'dns') return { type: 'udp', server: url.hostname };
  } catch (_e) {}
  return { type: 'udp', server: text.replace(/^[a-z0-9]+:\/\//i, '').split('/')[0] || '223.5.5.5' };
}

function generateSingboxConfig(links, options = {}) {
  const customDNS = options.customDNS || 'https://223.5.5.5/dns-query';
  const nodes = links.map(parseShareLink).filter(n => n && (n.proto === 'vless' || n.proto === 'trojan'));
  const outboundTags = nodes.map(n => n.name);

  function buildOutbound(n) {
    const out = {
      type: n.proto,
      tag: n.name,
      server: normalizeHost(n.server),
      server_port: n.port
    };
    if (n.proto === 'vless') {
      out.uuid = n.uuid;
      if (n.flow) out.flow = n.flow;
    } else {
      out.password = n.password;
    }
    if (n.tls) {
      out.tls = {
        enabled: true,
        server_name: n.sni,
        insecure: false,
        utls: {
          enabled: true,
          fingerprint: n.fp || 'chrome'
        }
      };
      if (n.alpn && n.alpn.length) out.tls.alpn = n.alpn;
      if (n.ech) {
        out.tls.ech = {
          enabled: true,
          pq_signature_schemes_enabled: false,
          dynamic_record_sizing_disabled: false
        };
      }
    }
    if (n.network === 'ws' || n.network === 'xhttp') {
      out.transport = {
        type: 'ws',
        path: n.path,
        headers: { Host: n.host },
        max_early_data: 2048,
        early_data_header_name: 'Sec-WebSocket-Protocol'
      };
    } else if (n.network === 'grpc') {
      out.transport = {
        type: 'grpc',
        service_name: n.path
      };
    }
    return out;
  }

  const geositeBase = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite';
  const geoipBase = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip';
  const geositeRule = name => ({
    tag: `geosite-${name}`,
    type: 'remote',
    format: 'binary',
    url: `${geositeBase}/${name}.srs`,
    download_detour: 'direct'
  });
  const geoipRule = name => ({
    tag: `geoip-${name}`,
    type: 'remote',
    format: 'binary',
    url: `${geoipBase}/${name}.srs`,
    download_detour: 'direct'
  });

  const config = {
    log: { level: 'info', timestamp: true },
    dns: {
      servers: [
        { ...splitDnsAddress(customDNS), tag: 'remote', detour: 'select' },
        { type: 'udp', tag: 'local', server: '223.5.5.5', detour: 'direct' },
        { type: 'fakeip', tag: 'fakeip', inet4_range: '198.18.0.0/15', inet6_range: 'fc00::/18' }
      ],
      rules: [
        { rule_set: 'geosite-category-ads-all', action: 'reject' },
        { rule_set: 'geosite-cn', server: 'local' },
        { query_type: ['A', 'AAAA'], server: 'fakeip' }
      ],
      strategy: 'ipv4_only'
    },
    inbounds: [
      { type: 'mixed', tag: 'mixed-in', listen: '127.0.0.1', listen_port: 2080 },
      {
        type: 'tun',
        tag: 'tun-in',
        interface_name: 'sing-box',
        address: ['172.19.0.1/30', 'fdfe:dcba:9876::1/126'],
        mtu: 9000,
        auto_route: true,
        strict_route: true,
        stack: 'mixed'
      }
    ],
    outbounds: [
      { type: 'selector', tag: 'select', outbounds: ['direct', ...outboundTags], default: outboundTags[0] || 'direct' },
      { type: 'selector', tag: '🌍 国外媒体', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: '📲 电报信息', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🌐 谷歌服务', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🤖 OpenAI', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: 'Ⓜ️ 微软服务', outbounds: ['direct', 'select', ...outboundTags] },
      { type: 'selector', tag: '🍎 苹果服务', outbounds: ['direct', 'select', ...outboundTags] },
      { type: 'selector', tag: '📺 哔哩哔哩', outbounds: ['direct', 'select', ...outboundTags] },
      { type: 'selector', tag: '📹 油管视频', outbounds: ['select', '🌍 国外媒体', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🎬 奈飞视频', outbounds: ['select', '🌍 国外媒体', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🎯 全球直连', outbounds: ['direct'] },
      { type: 'selector', tag: '🐟 漏网之鱼', outbounds: ['select', 'direct', ...outboundTags] },
      ...nodes.map(buildOutbound),
      { type: 'direct', tag: 'direct' }
    ],
    route: {
      rule_set: [
        geositeRule('cn'), geositeRule('private'), geositeRule('apple'), geositeRule('apple-cn'),
        geositeRule('microsoft'), geositeRule('microsoft@cn'), geositeRule('google'), geositeRule('telegram'),
        geositeRule('openai'), geositeRule('anthropic'), geositeRule('youtube'), geositeRule('netflix'),
        geositeRule('disney'), geositeRule('spotify'), geositeRule('tiktok'), geositeRule('twitter'),
        geositeRule('facebook'), geositeRule('github'), geositeRule('geolocation-!cn'),
        geositeRule('category-ads-all'), geoipRule('cn'), geoipRule('private'), geoipRule('telegram')
      ],
      rules: [
        { action: 'sniff' },
        { protocol: 'dns', action: 'hijack-dns' },
        { ip_is_private: true, outbound: 'direct' },
        { rule_set: 'geosite-category-ads-all', action: 'reject' },
        { rule_set: 'geosite-private', outbound: 'direct' },
        { rule_set: 'geosite-apple-cn', outbound: 'direct' },
        { rule_set: 'geosite-microsoft@cn', outbound: 'direct' },
        { rule_set: 'geosite-apple', outbound: '🍎 苹果服务' },
        { rule_set: 'geosite-microsoft', outbound: 'Ⓜ️ 微软服务' },
        { rule_set: 'geosite-openai', outbound: '🤖 OpenAI' },
        { rule_set: 'geosite-anthropic', outbound: '🤖 OpenAI' },
        { rule_set: 'geosite-telegram', outbound: '📲 电报信息' },
        { rule_set: 'geoip-telegram', outbound: '📲 电报信息' },
        { rule_set: 'geosite-google', outbound: '🌐 谷歌服务' },
        { rule_set: 'geosite-youtube', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-netflix', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-disney', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-spotify', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-tiktok', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-twitter', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-facebook', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-github', outbound: 'select' },
        { rule_set: 'geosite-geolocation-!cn', outbound: 'select' },
        { rule_set: 'geosite-cn', outbound: 'direct' },
        { rule_set: 'geoip-cn', outbound: 'direct' },
        { ip_is_private: true, outbound: 'direct' }
      ],
      final: '🐟 漏网之鱼',
      default_domain_resolver: { server: 'local' },
      auto_detect_interface: true
    },
    experimental: {
      cache_file: { enabled: true, store_fakeip: true },
      clash_api: { external_controller: '127.0.0.1:9090' }
    }
  };

  return JSON.stringify(config, null, 2);
}

const aclRuleBase = 'https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash';
const aclRule = name => `${aclRuleBase}/${name}.list`;

function generateSurgeConfig(links, options = {}) {
  const customDNS = options.customDNS || '223.5.5.5';
  const nodes = links.map(parseShareLink).filter(n => n && n.proto === 'trojan');
  const names = nodes.map(n => n.name);
  const lines = [
    '[General]',
    'loglevel = notify',
    'internet-test-url = http://www.apple.com/library/test/success.html',
    'proxy-test-url = http://www.gstatic.com/generate_204',
    'test-timeout = 3',
    `dns-server = ${customDNS.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}, 119.29.29.29, system`,
    'encrypted-dns-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query',
    'ipv6 = true',
    'allow-wifi-access = false',
    'wifi-access-http-port = 6152',
    'wifi-access-socks5-port = 6153',
    'skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, captive.apple.com',
    'exclude-simple-hostnames = true',
    'show-error-page-for-reject = true',
    '',
    '[Proxy]'
  ];
  for (const n of nodes) {
    lines.push(`${n.name} = trojan, ${n.server}, ${n.port}, password=${n.password}, sni=${n.sni}, ws=true, ws-path=${n.path}, ws-headers=Host:${n.host}, skip-cert-verify=false, tfo=true`);
  }
  if (!nodes.length) {
    lines.push('Direct = direct');
  }
  lines.push('', '[Proxy Group]');
  const listStr = names.length ? names.join(', ') : 'DIRECT';
  lines.push(`🚀 节点选择 = select, 🎯 全球直连, ${listStr}`);
  lines.push(`🌍 国外媒体 = select, ${buildIniGroupProxies(names)}`);
  lines.push(`📺 哔哩哔哩 = select, ${buildIniGroupProxies(names, { directFirst: true })}`);
  lines.push(`📹 油管视频 = select, ${buildIniGroupProxies(names, { extraGroups: ['🌍 国外媒体'] })}`);
  lines.push(`🎬 奈飞视频 = select, ${buildIniGroupProxies(names, { extraGroups: ['🌍 国外媒体'] })}`);
  lines.push(`📲 电报信息 = select, ${buildIniGroupProxies(names)}`);
  lines.push(`🌐 谷歌服务 = select, ${buildIniGroupProxies(names)}`);
  lines.push(`🤖 OpenAI = select, ${buildIniGroupProxies(names)}`);
  lines.push(`Ⓜ️ 微软服务 = select, ${buildIniGroupProxies(names, { directFirst: true })}`);
  lines.push(`🍎 苹果服务 = select, ${buildIniGroupProxies(names, { directFirst: true })}`);
  lines.push(`🎯 全球直连 = select, DIRECT`);
  lines.push(`🛑 全球拦截 = select, REJECT, DIRECT`);
  lines.push(`🐟 漏网之鱼 = select, ${buildIniGroupProxies(names)}`);
  lines.push('', '[Rule]');
  lines.push(`RULE-SET,${aclRule('LocalAreaNetwork')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('UnBan')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('BanAD')},🛑 全球拦截`);
  lines.push(`RULE-SET,${aclRule('BanProgramAD')},🛑 全球拦截`);
  lines.push(`RULE-SET,${aclRule('GoogleFCM')},🌐 谷歌服务`);
  lines.push(`RULE-SET,${aclRule('GoogleCN')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('SteamCN')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('Microsoft')},Ⓜ️ 微软服务`);
  lines.push(`RULE-SET,${aclRule('Apple')},🍎 苹果服务`);
  lines.push(`RULE-SET,${aclRule('Telegram')},📲 电报信息`);
  lines.push(`RULE-SET,${aclRule('OpenAi')},🤖 OpenAI`);
  lines.push(`RULE-SET,${aclRule('Claude')},🤖 OpenAI`);
  lines.push(`RULE-SET,${aclRule('Copilot')},🤖 OpenAI`);
  lines.push(`RULE-SET,${aclRule('Netflix')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('YouTube')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('Disney')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('Spotify')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('TikTok')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('BiliBili')},📺 哔哩哔哩`);
  lines.push(`RULE-SET,${aclRule('ProxyMedia')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('ProxyGFWlist')},🚀 节点选择`);
  lines.push(`RULE-SET,${aclRule('ChinaDomain')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('ChinaCompanyIp')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('ChinaIp')},🎯 全球直连`);
  lines.push('GEOIP,CN,🎯 全球直连');
  lines.push('FINAL,🐟 漏网之鱼,dns-failed');
  return lines.join('\n');
}

function generateLoonConfig(links, options = {}) {
  const customDNS = options.customDNS || '223.5.5.5';
  const nodes = links.map(parseShareLink).filter(n => n && (n.proto === 'vless' || n.proto === 'trojan'));
  const names = nodes.map(n => n.name);
  const lines = [
    '[General]',
    'ip-mode = dual',
    `dns-server = ${customDNS.replace(/^https?:\/\//, '').replace(/\/.*$/, '')},119.29.29.29,system`,
    'doh-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query',
    'allow-udp-proxy = true',
    'allow-wifi-access = false',
    'sni-sniffing = true',
    'skip-proxy = 127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost,*.local,captive.apple.com',
    'bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32',
    '',
    '[Proxy]'
  ];
  for (const n of nodes) {
    if (n.proto === 'vless') {
      const parts = [`${n.server}`, `${n.port}`, `udp=true`, `username=${n.uuid}`, `transport=ws`, `path=${n.path}`, `host=${n.host}`, `over-tls=${n.tls ? 'true' : 'false'}`];
      if (n.tls) {
        parts.push(`tls-name=${n.sni}`);
        if (n.alpn && n.alpn.length) parts.push(`alpn=${n.alpn.join(':')}`);
        parts.push(`skip-cert-verify=false`);
      }
      lines.push(`${n.name} = vless,${parts.join(',')}`);
    } else {
      const parts = [`${n.server}`, `${n.port}`, `password=${n.password}`, `transport=ws`, `path=${n.path}`, `host=${n.host}`, `over-tls=true`, `tls-name=${n.sni}`];
      if (n.alpn && n.alpn.length) parts.push(`alpn=${n.alpn.join(':')}`);
      parts.push(`skip-cert-verify=false`);
      lines.push(`${n.name} = trojan,${parts.join(',')}`);
    }
  }
  lines.push('', '[Proxy Group]');
  const listStr = names.length ? names.join(',') : 'DIRECT';
  lines.push(`🚀 节点选择 = select,🎯 全球直连,${listStr}`);
  lines.push(`🌍 国外媒体 = select,${buildIniGroupProxies(names, { compact: true })}`);
  lines.push(`📺 哔哩哔哩 = select,${buildIniGroupProxies(names, { directFirst: true, compact: true })}`);
  lines.push(`📹 油管视频 = select,${buildIniGroupProxies(names, { extraGroups: ['🌍 国外媒体'], compact: true })}`);
  lines.push(`🎬 奈飞视频 = select,${buildIniGroupProxies(names, { extraGroups: ['🌍 国外媒体'], compact: true })}`);
  lines.push(`📲 电报信息 = select,${buildIniGroupProxies(names, { compact: true })}`);
  lines.push(`🌐 谷歌服务 = select,${buildIniGroupProxies(names, { compact: true })}`);
  lines.push(`🤖 OpenAI = select,${buildIniGroupProxies(names, { compact: true })}`);
  lines.push(`Ⓜ️ 微软服务 = select,${buildIniGroupProxies(names, { directFirst: true, compact: true })}`);
  lines.push(`🍎 苹果服务 = select,${buildIniGroupProxies(names, { directFirst: true, compact: true })}`);
  lines.push(`🎯 全球直连 = select,DIRECT`);
  lines.push(`🛑 全球拦截 = select,REJECT,DIRECT`);
  lines.push(`🐟 漏网之鱼 = select,${buildIniGroupProxies(names, { compact: true })}`);
  lines.push('', '[Remote Rule]');
  lines.push(`${aclRule('LocalAreaNetwork')}, policy=🎯 全球直连, tag=局域网, enabled=true`);
  lines.push(`${aclRule('BanAD')}, policy=🛑 全球拦截, tag=广告拦截, enabled=true`);
  lines.push(`${aclRule('BanProgramAD')}, policy=🛑 全球拦截, tag=应用广告, enabled=true`);
  lines.push(`${aclRule('GoogleCN')}, policy=🎯 全球直连, tag=GoogleCN, enabled=true`);
  lines.push(`${aclRule('SteamCN')}, policy=🎯 全球直连, tag=SteamCN, enabled=true`);
  lines.push(`${aclRule('Microsoft')}, policy=Ⓜ️ 微软服务, tag=微软, enabled=true`);
  lines.push(`${aclRule('Apple')}, policy=🍎 苹果服务, tag=苹果, enabled=true`);
  lines.push(`${aclRule('Telegram')}, policy=📲 电报信息, tag=电报, enabled=true`);
  lines.push(`${aclRule('OpenAi')}, policy=🤖 OpenAI, tag=OpenAI, enabled=true`);
  lines.push(`${aclRule('Netflix')}, policy=🌍 国外媒体, tag=Netflix, enabled=true`);
  lines.push(`${aclRule('YouTube')}, policy=🌍 国外媒体, tag=YouTube, enabled=true`);
  lines.push(`${aclRule('Disney')}, policy=🌍 国外媒体, tag=Disney, enabled=true`);
  lines.push(`${aclRule('Spotify')}, policy=🌍 国外媒体, tag=Spotify, enabled=true`);
  lines.push(`${aclRule('TikTok')}, policy=🌍 国外媒体, tag=TikTok, enabled=true`);
  lines.push(`${aclRule('BiliBili')}, policy=📺 哔哩哔哩, tag=哔哩哔哩, enabled=true`);
  lines.push(`${aclRule('ProxyMedia')}, policy=🌍 国外媒体, tag=代理媒体, enabled=true`);
  lines.push(`${aclRule('ProxyGFWlist')}, policy=🚀 节点选择, tag=代理列表, enabled=true`);
  lines.push(`${aclRule('ChinaDomain')}, policy=🎯 全球直连, tag=中国域名, enabled=true`);
  lines.push(`${aclRule('ChinaIp')}, policy=🎯 全球直连, tag=中国IP, enabled=true`);
  lines.push('', '[Rule]', 'GEOIP,CN,🎯 全球直连', 'FINAL,🐟 漏网之鱼');
  return lines.join('\n');
}

function generateQuanxConfig(links, options = {}) {
  const customDNS = options.customDNS || '223.5.5.5';
  const nodes = links.map(parseShareLink).filter(n => n && (n.proto === 'vless' || n.proto === 'trojan'));
  const names = nodes.map(n => n.name);
  const qxBase = 'https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/QuantumultX';
  const lines = [
    '[general]',
    'network_check_url=http://www.gstatic.com/generate_204',
    'server_check_url=http://www.gstatic.com/generate_204',
    'dns_exclusion_list=*.cmpassport.com, *.jegotrip.com.cn, *.icloud.com, *.icloud.com.cn, *.apple.com, *.weibo.com, *.qq.com',
    'running_mode_trigger=filter',
    '',
    '[dns]',
    `server=${customDNS.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}`,
    'server=119.29.29.29',
    'server=https://223.5.5.5/dns-query',
    'server=https://1.12.12.12/dns-query',
    '',
    '[server_local]'
  ];
  for (const n of nodes) {
    if (n.proto === 'vless') {
      const parts = [`${n.server}:${n.port}`, `method=none`, `password=${n.uuid}`, `obfs=${n.tls ? 'wss' : 'ws'}`, `obfs-host=${n.host}`, `obfs-uri=${n.path}`];
      if (n.tls) parts.push(`tls-verification=true`, `tls13=true`);
      parts.push(`tag=${n.name}`);
      lines.push(`vless=${parts.join(', ')}`);
    } else {
      const parts = [`${n.server}:${n.port}`, `password=${n.password}`, `over-tls=true`, `tls-host=${n.sni}`, `obfs=wss`, `obfs-host=${n.host}`, `obfs-uri=${n.path}`, `tls-verification=true`, `tag=${n.name}`];
      lines.push(`trojan=${parts.join(', ')}`);
    }
  }
  lines.push('', '[policy]');
  const listStr = names.length ? names.join(', ') : 'direct';
  lines.push(`static=🚀 节点选择, ${listStr}, direct`);
  lines.push(`static=🌍 国外媒体, ${buildIniGroupProxies(names)}`);
  lines.push(`static=📺 哔哩哔哩, ${buildIniGroupProxies(names, { directFirst: true })}`);
  lines.push(`static=📹 油管视频, ${buildIniGroupProxies(names, { extraGroups: ['🌍 国外媒体'] })}`);
  lines.push(`static=🎬 奈飞视频, ${buildIniGroupProxies(names, { extraGroups: ['🌍 国外媒体'] })}`);
  lines.push(`static=📲 电报信息, ${buildIniGroupProxies(names)}`);
  lines.push(`static=🌐 谷歌服务, ${buildIniGroupProxies(names)}`);
  lines.push(`static=🤖 OpenAI, ${buildIniGroupProxies(names)}`);
  lines.push(`static=Ⓜ️ 微软服务, ${buildIniGroupProxies(names, { directFirst: true })}`);
  lines.push(`static=🍎 苹果服务, ${buildIniGroupProxies(names, { directFirst: true })}`);
  lines.push(`static=🎯 全球直连, direct`);
  lines.push(`static=🛑 全球拦截, reject, direct`);
  lines.push(`static=🐟 漏网之鱼, ${buildIniGroupProxies(names)}`);
  lines.push('', '[filter_remote]');
  lines.push(`${qxBase}/Lan/Lan.list, tag=局域网, force-policy=🎯 全球直连, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Advertising/Advertising.list, tag=广告拦截, force-policy=🛑 全球拦截, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Microsoft/Microsoft.list, tag=微软, force-policy=Ⓜ️ 微软服务, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Apple/Apple.list, tag=苹果, force-policy=🍎 苹果服务, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Telegram/Telegram.list, tag=电报, force-policy=📲 电报信息, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Google/Google.list, tag=谷歌, force-policy=🌐 谷歌服务, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/OpenAI/OpenAI.list, tag=OpenAI, force-policy=🤖 OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Claude/Claude.list, tag=Claude, force-policy=🤖 OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/YouTube/YouTube.list, tag=YouTube, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Netflix/Netflix.list, tag=Netflix, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Disney/Disney.list, tag=Disney, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Spotify/Spotify.list, tag=Spotify, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/TikTok/TikTok.list, tag=TikTok, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/BiliBili/BiliBili.list, tag=哔哩哔哩, force-policy=📺 哔哩哔哩, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Global/Global.list, tag=全球加速, force-policy=🚀 节点选择, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/ChinaMax/ChinaMax.list, tag=中国直连, force-policy=🎯 全球直连, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push('', '[filter_local]', 'geoip, cn, 🎯 全球直连', 'final, 🐟 漏网之鱼');
  return lines.join('\n');
}

// ============================================================================
// زنجیره اینترنت خانگی (Residential Chain - ?target=vg / jk)
// ============================================================================
const JK_SOURCE = 'https://www.vpngate.net/api/iphone/';
const JK_CACHE_TTL = 30 * 60 * 1000;
let jkCache = null;
let jkCacheTime = 0;
const jkDirectiveRegex = {};

function getJkDirective(text, name) {
  if (!jkDirectiveRegex[name]) jkDirectiveRegex[name] = new RegExp('^[ \\t]*' + name + '[ \\t]+(.+?)[ \\t]*$', 'm');
  const m = text.match(jkDirectiveRegex[name]);
  return m ? m[1].trim() : '';
}

function getJkInlineBlock(text, tag) {
  const m = text.match(new RegExp('<' + tag + '>([\\s\\S]*?)<\\/' + tag + '>'));
  return m ? m[1].trim() : '';
}

function indentCert(text, pad) {
  return text.split('\n').map(l => l.trim()).filter(Boolean).map(l => pad + l).join('\n');
}

function decodeJkConfig(b64, full = false) {
  const clean = b64.replace(/\s/g, '');
  if (full || clean.length <= 6000) return decodeBase64Utf8(clean);
  return decodeBase64Utf8(clean.slice(0, 6000));
}

function parseJkList(raw) {
  const candidates = [];
  for (const rawLine of raw.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.charAt(0) === '*' || line.charAt(0) === '#') continue;
    const fields = line.split(',');
    if (fields.length < 15) continue;
    if ((fields[0] || '').indexOf('public-vpn') === 0) continue;
    if ((fields[1] || '').indexOf('219.100.37.') === 0) continue;
    const b64 = fields[fields.length - 1];
    if (!b64 || b64.length < 100) continue;
    candidates.push({
      country: (fields[6] || '').toUpperCase() || 'XX',
      speed: parseInt(fields[4], 10) || 0,
      b64
    });
  }
  candidates.sort((a, b) => b.speed - a.speed);
  const nodes = [];
  let cert = null;
  for (const item of candidates) {
    let text = '';
    try {
      text = decodeJkConfig(item.b64);
      if (!getJkDirective(text, 'remote')) text = decodeJkConfig(item.b64, true);
    } catch (_e) {
      continue;
    }
    if ((getJkDirective(text, 'proto') || 'tcp').toLowerCase() !== 'tcp') continue;
    const remote = getJkDirective(text, 'remote').split(/\s+/);
    if (!remote[0]) continue;
    if (!cert) {
      try {
        const fullText = decodeJkConfig(item.b64, true);
        const c = {
          ca: getJkInlineBlock(fullText, 'ca'),
          cert: getJkInlineBlock(fullText, 'cert'),
          key: getJkInlineBlock(fullText, 'key')
        };
        if (c.ca && c.cert && c.key) cert = c;
      } catch (_e) {}
      if (!cert) continue;
    }
    nodes.push({
      country: item.country,
      address: remote[0],
      port: parseInt(remote[1], 10) || 443,
      cipher: getJkDirective(text, 'cipher') || 'AES-128-CBC',
      auth: getJkDirective(text, 'auth') || 'SHA1'
    });
  }
  return { nodes, cert };
}

async function fetchJkNodes() {
  const now = Date.now();
  if (jkCache && now - jkCacheTime < JK_CACHE_TTL) return jkCache;
  let raw = '';
  let lastErr = null;
  for (const src of [JK_SOURCE, JK_SOURCE.replace(/^https:/, 'http:')]) {
    try {
      const resp = await fetch(src, {
        headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'text/plain' }
      });
      if (!resp.ok) {
        lastErr = new Error('Status ' + resp.status);
        continue;
      }
      raw = await resp.text();
      break;
    } catch (e) {
      lastErr = e;
    }
  }
  if (!raw) throw lastErr || new Error('Empty JK response');
  const parsed = parseJkList(raw);
  if (!parsed.nodes.length || !parsed.cert) throw new Error('No valid JK residential nodes');
  jkCache = parsed;
  jkCacheTime = now;
  return parsed;
}

async function generateResidentialChainConfig(links, options = {}) {
  const customDNS = options.customDNS || 'https://223.5.5.5/dns-query';
  const customECHDomain = options.customECHDomain || 'cloudflare-ech.com';
  const subNodeCount = parseInt(options.subNodeCount ?? 50, 10) || 0;
  const frontGroupName = '⚡ CF前置';
  const jkAuto = '🏠 家宽自动';
  const jkSelect = '🏠 家宽节点';
  const mainSelect = '🚀 节点选择';

  const allFront = links
    .map(parseShareLink)
    .filter(n => n && (n.proto === 'vless' || n.proto === 'trojan'));
  const tlsFront = allFront.filter(n => n.tls);
  const frontNodes = (tlsFront.length ? tlsFront : allFront).map((n, idx) => ({
    ...n,
    name: `${idx + 1}+${BRAND_NAME}`
  }));
  const frontNames = frontNodes.map(n => n.name);

  const { nodes, cert } = await fetchJkNodes();
  const slicedJk = subNodeCount > 0 ? nodes.slice(0, subNodeCount) : nodes;
  const jkItems = slicedJk.map((n, idx) => ({
    ...n,
    name: `${frontNodes.length + idx + 1}+${BRAND_NAME}`
  }));

  const header = [
    '# miliconfig 家宽订阅：CF 节点带路，落地是住宅宽带',
    'mixed-port: 7890',
    'allow-lan: false',
    'mode: rule',
    'log-level: info',
    'ipv6: false',
    'unified-delay: true',
    'tcp-concurrent: true',
    'external-controller: 127.0.0.1:9090',
    'dns:',
    '  enable: true',
    '  ipv6: false',
    '  enhanced-mode: fake-ip',
    '  fake-ip-range: 198.18.0.1/16',
    '  nameserver:',
    '    - ' + customDNS,
    '    - https://1.1.1.1/dns-query',
    ''
  ];

  const proxySection = ['proxies:'];
  for (const n of frontNodes) proxySection.push(buildClashNodeYaml(n, customECHDomain));
  jkItems.forEach((n, idx) => {
    const row = [
      '  - name: "' + n.name + '"',
      '    type: openvpn',
      '    server: ' + n.address,
      '    port: ' + n.port,
      '    proto: tcp',
      '    username: vpn',
      '    password: vpn',
      '    cipher: ' + n.cipher,
      '    auth: ' + n.auth,
      '    udp: false',
      '    handshake-timeout: 30',
      '    remote-dns-resolve: true',
      '    dns: [ 8.8.8.8, 1.1.1.1 ]'
    ];
    if (frontNames.length) row.push('    dialer-proxy: "' + frontGroupName + '"');
    if (idx === 0) {
      row.push('    ca: &jkca |-', indentCert(cert.ca, '      '));
      row.push('    cert: &jkcert |-', indentCert(cert.cert, '      '));
      row.push('    key: &jkkey |-', indentCert(cert.key, '      '));
    } else {
      row.push('    ca: *jkca', '    cert: *jkcert', '    key: *jkkey');
    }
    proxySection.push(row.join('\n'));
  });

  const listFmt = arr => arr.map(x => '      - "' + x + '"').join('\n');
  const jkNames = jkItems.map(x => x.name);
  const groupSection = ['proxy-groups:'];
  if (frontNames.length) {
    groupSection.push(
      '  - name: "' + frontGroupName + '"',
      '    type: url-test',
      '    url: https://www.gstatic.com/generate_204',
      '    interval: 300',
      '    tolerance: 50',
      '    proxies:',
      listFmt(frontNames)
    );
  }
  groupSection.push(
    '  - name: "' + jkAuto + '"',
    '    type: fallback',
    '    url: https://www.gstatic.com/generate_204',
    '    interval: 1800',
    '    lazy: true',
    '    proxies:',
    listFmt(jkNames)
  );
  groupSection.push('  - name: "' + jkSelect + '"', '    type: select', '    proxies:', listFmt(jkNames));
  const mainList = ['      - "' + jkAuto + '"', '      - "' + jkSelect + '"'];
  if (frontNames.length) mainList.push('      - "' + frontGroupName + '"');
  mainList.push('      - DIRECT');
  groupSection.push('  - name: "' + mainSelect + '"', '    type: select', '    proxies:', mainList.join('\n'));

  const rules = [
    'rules:',
    '  - GEOIP,LAN,DIRECT,no-resolve',
    '  - GEOIP,CN,DIRECT,no-resolve',
    '  - MATCH,' + mainSelect
  ];

  return header.concat(proxySection, [''], groupSection, [''], rules, ['']).join('\n');
}


// --- MODULE: src/subscription/generator.js ---
// ============================================================================
// miliconfig v3.1 - تولیدکننده ساب‌لینک چندکاربره با نام‌گذاری number+miliconfig
// و اعمال دقیق تنظیمات هر کاربر + محدودیت تعداد نودها در ساب (subNodeCount)
// ============================================================================


function getOfficialDirectAddress() {
  const hit = OFFICIAL_DIRECT_IPS[Math.floor(Math.random() * OFFICIAL_DIRECT_IPS.length)];
  return {
    domain: hit,
    region: 'CF',
    regionCode: 'CF',
    port: 443
  };
}

function getNeighborRegions(region) {
  const map = {
    US: ['SG', 'JP', 'KR'],
    SG: ['JP', 'KR', 'US'],
    JP: ['SG', 'KR', 'US'],
    KR: ['JP', 'SG', 'US'],
    DE: ['NL', 'GB', 'SE', 'FI'],
    SE: ['DE', 'NL', 'FI', 'GB'],
    NL: ['DE', 'GB', 'SE', 'FI'],
    FI: ['SE', 'DE', 'NL', 'GB'],
    GB: ['DE', 'NL', 'SE', 'FI']
  };
  return map[region] || [];
}

function getOrderedRegions(region) {
  const neighbors = getNeighborRegions(region);
  const all = ['US', 'SG', 'JP', 'KR', 'DE', 'SE', 'NL', 'FI', 'GB'];
  return [region, ...neighbors, ...all.filter(r => r !== region && !neighbors.includes(r))];
}

async function selectFallbackProxyAddress(workerRegion = '', enableRegionMatch = true) {
  if (!workerRegion || workerRegion === 'CF') {
    return getOfficialDirectAddress();
  }
  if (FALLBACK_PROXY_IPS.length === 0) {
    return getOfficialDirectAddress();
  }
  if (enableRegionMatch && workerRegion) {
    const ordered = getOrderedRegions(workerRegion);
    for (const r of ordered) {
      const found = FALLBACK_PROXY_IPS.find(item => item.regionCode === r);
      if (found) return found;
    }
  }
  return FALLBACK_PROXY_IPS[0];
}

function getXhttpPaddingMeta(uuidStr) {
  const s = String(uuidStr || '');
  return {
    header: s.slice(1, 7) || 'x-mili',
    key: '_' + (s.slice(25, 31) || 'pad001')
  };
}

function parseCustomPreferredString(yxStr = '') {
  const ipList = [];
  const domainList = [];
  if (!yxStr || !String(yxStr).trim()) {
    return { ipList, domainList };
  }
  const items = String(yxStr)
    .split(',')
    .map(x => x.trim())
    .filter(Boolean);
  for (const item of items) {
    let nodeName = '';
    let addrPart = item;
    if (item.includes('#')) {
      const parts = item.split('#');
      addrPart = parts[0].trim();
      nodeName = parts.slice(1).join('#').trim();
    }
    const { address, port } = parseAddressAndPort(addrPart);
    if (!address) continue;
    if (!nodeName) {
      nodeName = `${address}${port ? ':' + port : ''}`;
    }
    if (isValidIpAddress(address)) {
      ipList.push({ ip: address, port: port || 443, isp: nodeName, name: nodeName });
    } else if (isValidDomain(address) || address.includes('.')) {
      domainList.push({ domain: address, port: port || 443, name: nodeName });
    }
  }
  return { ipList, domainList };
}

async function fetchUouinPreferredIps(cfg = {}) {
  const lineMap = {
    ctcc: '电信',
    cucc: '联通',
    cmcc: '移动',
    bgp: '多线',
    ipv6: 'IPv6'
  };
  const v4Enabled = cfg.ipv4 !== 'no';
  const v6Enabled = cfg.ipv6 !== 'no';
  const mobileEnabled = cfg.ispMobile !== 'no';
  const unicomEnabled = cfg.ispUnicom !== 'no';
  const telecomEnabled = cfg.ispTelecom !== 'no';

  try {
    const ts = String(Date.now());
    const innerHash = await md5Hex('DdlTxtN0sUOu');
    const keyHash = await md5Hex(innerHash + '70cloudflareapikey' + ts);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3200);
    const resp = await fetch(`https://api.uouin.com/index.php/index/Cloudflare?key=${keyHash}&time=${ts}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!resp.ok) return [];
    const data = await resp.json();
    const groups = data && data.data;
    if (!groups) return [];
    const results = [];
    for (const groupKey of Object.keys(lineMap)) {
      const isV6 = groupKey === 'ipv6';
      if (isV6 && !v6Enabled) continue;
      if (!isV6 && !v4Enabled) continue;
      const lineName = lineMap[groupKey];
      if (lineName === '移动' && !mobileEnabled) continue;
      if (lineName === '联通' && !unicomEnabled) continue;
      if (lineName === '电信' && !telecomEnabled) continue;
      const groupObj = groups[groupKey];
      const infoList = groupObj && Array.isArray(groupObj.info) ? groupObj.info : [];
      for (const entry of infoList) {
        const ip = normalizeNodeHost(entry && entry.ip);
        if (!ip) continue;
        results.push({ isp: lineName, ip, port: 443, colo: entry?.colo || '' });
      }
    }
    return results;
  } catch (_e) {
    return [];
  }
}

async function fetchPreferredFromUrls(urlListStr = '', defaultPort = '443', timeout = 3000) {
  if (!urlListStr || !String(urlListStr).trim()) return [];
  const urls = String(urlListStr)
    .split(',')
    .map(u => u.trim())
    .filter(Boolean);
  if (!urls.length) return [];

  const outSet = new Set();
  await Promise.allSettled(
    urls.map(async url => {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);
        const resp = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        if (!resp.ok) return;
        const text = await resp.text();
        if (!text || !text.trim()) return;
        const lines = text.trim().split('\n').map(l => l.trim()).filter(Boolean);
        const isCsv = lines.length > 1 && lines[0].includes(',');
        const v6Pattern = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
        if (!isCsv) {
          for (const line of lines) {
            const hashIdx = line.indexOf('#');
            const [hostPart, remark] = hashIdx > -1 ? [line.substring(0, hashIdx), line.substring(hashIdx)] : [line, ''];
            let hasPort = false;
            if (hostPart.startsWith('[')) {
              hasPort = /\]:(\d+)$/.test(hostPart);
            } else {
              const colonIdx = hostPart.lastIndexOf(':');
              hasPort = colonIdx > -1 && /^\d+$/.test(hostPart.substring(colonIdx + 1));
            }
            const port = new URL(url).searchParams.get('port') || defaultPort;
            outSet.add(hasPort ? line : `${hostPart}:${port}${remark}`);
          }
        } else {
          const headers = lines[0].split(',').map(h => h.trim());
          const dataRows = lines.slice(1);
          if (headers.includes('IP地址') && headers.includes('端口')) {
            const ipIdx = headers.indexOf('IP地址');
            const portIdx = headers.indexOf('端口');
            const tlsIdx = headers.indexOf('TLS');
            for (const row of dataRows) {
              const cols = row.split(',').map(c => c.trim());
              if (tlsIdx !== -1 && cols[tlsIdx]?.toLowerCase() !== 'true') continue;
              const wrapped = v6Pattern.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
              outSet.add(`${wrapped}:${cols[portIdx]}#CF`);
            }
          }
        }
      } catch (_e) {}
    })
  );

  const parsed = [];
  const regex = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
  for (const item of outSet) {
    const m = item.match(regex);
    if (m) {
      parsed.push({
        ip: normalizeNodeHost(m[1]),
        port: parseInt(m[2] || '443', 10),
        name: m[3]?.trim() || m[1]
      });
    }
  }
  return parsed;
}

function buildVlessLinks(list, userUuid, workerHost, cfg, namer, wkOverride = '') {
  const disableNonTls = cfg.dkby === 'yes' || cfg.ech === 'yes';
  const defaultHttps = [443];
  const defaultHttp = disableNonTls ? [] : [80];
  const links = [];
  const wsPath = wkOverride ? `/?ed=2048&wk=${encodeURIComponent(wkOverride)}` : '/?ed=2048';
  const alpn = normalizeAlpn(cfg.alpn);
  const enableEch = cfg.ech === 'yes';
  const dnsVal = cfg.customDNS || CONFIG_DEFAULTS.customDNS;
  const echDomain = cfg.customECHDomain || CONFIG_DEFAULTS.customECHDomain;

  for (const item of list) {
    const rawHost = normalizeNodeHost(item.ip || item.domain);
    if (!rawHost) continue;
    const safeAddr = rawHost.includes(':') ? `[${rawHost}]` : rawHost;
    const portsToGen = [];
    if (item.port) {
      const p = Number(item.port);
      if (CF_HTTPS_PORTS.includes(p)) {
        portsToGen.push({ port: p, tls: true });
      } else if (CF_HTTP_PORTS.includes(p)) {
        if (!disableNonTls) portsToGen.push({ port: p, tls: false });
      } else {
        portsToGen.push({ port: p, tls: true });
      }
    } else {
      defaultHttps.forEach(p => portsToGen.push({ port: p, tls: true }));
      defaultHttp.forEach(p => portsToGen.push({ port: p, tls: false }));
    }

    for (const { port, tls } of portsToGen) {
      const nodeName = namer(item);
      if (tls) {
        const params = new URLSearchParams({
          encryption: 'none',
          security: 'tls',
          sni: workerHost,
          fp: 'chrome',
          type: 'ws',
          host: workerHost,
          path: wsPath
        });
        if (alpn) params.set('alpn', alpn);
        if (enableEch) params.set('ech', `${echDomain}+${dnsVal}`);
        links.push(`vless://${userUuid}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      } else {
        const params = new URLSearchParams({
          encryption: 'none',
          security: 'none',
          type: 'ws',
          host: workerHost,
          path: wsPath
        });
        links.push(`vless://${userUuid}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      }
    }
  }
  return links;
}

function buildTrojanLinks(list, userUuid, workerHost, cfg, namer, wkOverride = '') {
  const disableNonTls = cfg.dkby === 'yes' || cfg.ech === 'yes';
  const defaultHttps = [443];
  const defaultHttp = disableNonTls ? [] : [80];
  const links = [];
  const wsPath = wkOverride ? `/?ed=2048&wk=${encodeURIComponent(wkOverride)}` : '/?ed=2048';
  const password = (cfg.tp && String(cfg.tp).trim()) || userUuid;
  const alpn = normalizeAlpn(cfg.alpn);
  const enableEch = cfg.ech === 'yes';
  const dnsVal = cfg.customDNS || CONFIG_DEFAULTS.customDNS;
  const echDomain = cfg.customECHDomain || CONFIG_DEFAULTS.customECHDomain;

  for (const item of list) {
    const rawHost = normalizeNodeHost(item.ip || item.domain);
    if (!rawHost) continue;
    const safeAddr = rawHost.includes(':') ? `[${rawHost}]` : rawHost;
    const portsToGen = [];
    if (item.port) {
      const p = Number(item.port);
      if (CF_HTTPS_PORTS.includes(p)) {
        portsToGen.push({ port: p, tls: true });
      } else if (CF_HTTP_PORTS.includes(p)) {
        if (!disableNonTls) portsToGen.push({ port: p, tls: false });
      } else {
        portsToGen.push({ port: p, tls: true });
      }
    } else {
      defaultHttps.forEach(p => portsToGen.push({ port: p, tls: true }));
      defaultHttp.forEach(p => portsToGen.push({ port: p, tls: false }));
    }

    for (const { port, tls } of portsToGen) {
      const nodeName = namer(item);
      if (tls) {
        const params = new URLSearchParams({
          security: 'tls',
          sni: workerHost,
          fp: 'chrome',
          type: 'ws',
          host: workerHost,
          path: wsPath
        });
        if (alpn) params.set('alpn', alpn);
        if (enableEch) params.set('ech', `${echDomain}+${dnsVal}`);
        links.push(`trojan://${encodeURIComponent(password)}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      } else {
        const params = new URLSearchParams({
          security: 'none',
          type: 'ws',
          host: workerHost,
          path: wsPath
        });
        links.push(`trojan://${encodeURIComponent(password)}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      }
    }
  }
  return links;
}

function buildXhttpLinks(list, userUuid, workerHost, cfg, namer) {
  const links = [];
  const shortPath = String(userUuid || '').substring(0, 8);
  const alpn = normalizeAlpn(cfg.alpn);
  const enableEch = cfg.ech === 'yes';
  const dnsVal = cfg.customDNS || CONFIG_DEFAULTS.customDNS;
  const echDomain = cfg.customECHDomain || CONFIG_DEFAULTS.customECHDomain;
  const { header: xPadHeader, key: xPadKey } = getXhttpPaddingMeta(userUuid);

  for (const item of list) {
    const rawHost = normalizeNodeHost(item.ip || item.domain);
    if (!rawHost) continue;
    const safeAddr = rawHost.includes(':') ? `[${rawHost}]` : rawHost;
    const port = item.port || 443;
    const nodeName = namer(item);
    const params = new URLSearchParams({
      encryption: 'none',
      security: 'tls',
      sni: workerHost,
      fp: 'chrome',
      type: 'xhttp',
      host: workerHost,
      path: `/${shortPath}`,
      mode: 'stream-one'
    });
    params.set(
      'extra',
      JSON.stringify({
        xPaddingObfsMode: true,
        xPaddingMethod: 'tokenish',
        xPaddingPlacement: 'queryInHeader',
        xPaddingHeader: xPadHeader,
        xPaddingKey: xPadKey
      })
    );
    if (alpn) params.set('alpn', alpn);
    if (enableEch) params.set('ech', `${echDomain}+${dnsVal}`);
    links.push(`vless://${userUuid}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
  }
  return links;
}

// تولید لیست کامل لینک‌های نود برای کاربر با نام‌گذاری دقیق number+miliconfig و رعایت سقف تعداد نود در ساب
async function generateUserNodesList(userOrConfig, workerHost, queryOverrides = {}) {
  const rawCfg = userOrConfig?.config ? userOrConfig.config : (userOrConfig || {});
  const cfg = normalizeEffectiveConfig(rawCfg);
  const userUuid = String(userOrConfig?.uuid || queryOverrides.uuid || '351c9981-04b6-4103-aa4b-864aa9c91469').toLowerCase();
  const nodeScope = queryOverrides.scope || userOrConfig?.nodeScope || 'all';
  const wkOverride = (queryOverrides.wk || cfg.wk || '').trim().toUpperCase();
  const protoFilter = (queryOverrides.proto || '').trim().toLowerCase();

  const evEnabled = protoFilter ? protoFilter === 'vless' : isEnabledValue(cfg.ev, true);
  const etEnabled = protoFilter ? protoFilter === 'trojan' : isEnabledValue(cfg.et, false);
  const exEnabled = protoFilter ? protoFilter === 'xhttp' : isEnabledValue(cfg.ex, false);

  const namer = createMiliNodeNamer(BRAND_NAME);
  const rawLinks = [];

  function appendFromSource(sourceList) {
    if (!Array.isArray(sourceList) || sourceList.length === 0) return;
    if (evEnabled) rawLinks.push(...buildVlessLinks(sourceList, userUuid, workerHost, cfg, namer, wkOverride));
    if (etEnabled) rawLinks.push(...buildTrojanLinks(sourceList, userUuid, workerHost, cfg, namer, wkOverride));
    if (exEnabled) rawLinks.push(...buildXhttpLinks(sourceList, userUuid, workerHost, cfg, namer));
  }

  const disablePreferred = cfg.yxby === 'yes' || nodeScope === 'origin';
  const enableNative = cfg.ena === 'yes' || nodeScope === 'origin';

  if (enableNative && nodeScope !== 'edge') {
    appendFromSource([{ ip: workerHost, isp: 'Origin' }]);
  }

  const { ipList: customIps, domainList: customDomains } = parseCustomPreferredString(cfg.yx);
  const hasCustomPreferred = customIps.length > 0 || customDomains.length > 0;

  if (!disablePreferred) {
    if (hasCustomPreferred) {
      if (customIps.length > 0 && cfg.epi === 'yes') {
        appendFromSource(customIps);
      }
      if (customDomains.length > 0 && cfg.epd === 'yes') {
        appendFromSource(customDomains.map(d => ({ ip: d.domain, port: d.port, isp: d.name || d.domain })));
      }
    } else {
      if (cfg.epd === 'yes') {
        appendFromSource(DIRECT_DOMAINS.map(d => ({ ip: d.domain, isp: d.name || d.domain })));
      }
      if (cfg.epi === 'yes' && !cfg.yxURL) {
        const uouinList = await fetchUouinPreferredIps(cfg);
        if (uouinList.length > 0) {
          appendFromSource(uouinList);
        }
      }
      if (cfg.egi === 'yes' && cfg.yxURL) {
        const urlList = await fetchPreferredFromUrls(cfg.yxURL);
        if (urlList.length > 0) {
          appendFromSource(urlList);
        }
      }
      // اگر لیست خارجی در دسترس نبود، از استخر IPهای مستقیم رسمی CF اضافه می‌کنیم تا همیشه تعداد کافی نود سالم تولید شود
      if (rawLinks.length < 15 && cfg.epi === 'yes') {
        appendFromSource(OFFICIAL_DIRECT_IPS.map(ip => ({ ip, port: 443, isp: 'CF-Direct' })));
      }
    }
  }

  if (rawLinks.length === 0) {
    appendFromSource([{ ip: workerHost, port: 443, isp: 'Origin' }]);
  }

  const subNodeCount = queryOverrides.limit !== undefined
    ? parseInt(queryOverrides.limit, 10)
    : Number(userOrConfig?.subNodeCount ?? cfg.subNodeCount ?? 50);

  // اعمال دقیق نام‌گذاری number+miliconfig و سقف تعداد نودهای ساب‌لینک کاربر
  return finalizeMiliSubscriptionLinks(rawLinks, subNodeCount, BRAND_NAME);
}

// تشخیص خودکار کلاینت از User-Agent در صورت عدم ارسال پارامتر target
function detectTargetFromRequest(request, url) {
  const explicit = url.searchParams.get('target');
  if (explicit && explicit.trim()) return explicit.trim().toLowerCase();
  const ua = (request.headers.get('User-Agent') || '').toLowerCase();
  if (ua.includes('clash') || ua.includes('mihomo') || ua.includes('flclash') || ua.includes('stash') || ua.includes('verge')) {
    return 'clash';
  }
  if (ua.includes('sing-box') || ua.includes('singbox') || ua.includes('hiddify') || ua.includes('sfa') || ua.includes('sfm') || ua.includes('karing')) {
    return 'singbox';
  }
  if (ua.includes('surge')) return 'surge';
  if (ua.includes('quantumult')) return 'quanx';
  if (ua.includes('loon')) return 'loon';
  return 'base64';
}

async function handleSubscriptionResponse(request, userOrConfig, url = null) {
  if (!url) url = new URL(request.url);
  const workerHost = url.hostname;
  const rawCfg = userOrConfig?.config ? userOrConfig.config : (userOrConfig || {});
  const cfg = normalizeEffectiveConfig(rawCfg);

  // بررسی وضعیت فعال بودن، حجم و انقضای کاربر
  if (userOrConfig && userOrConfig.enabled === false) {
    const disabledNode = `vless://00000000-0000-0000-0000-000000000000@127.0.0.1:443?encryption=none&security=tls&type=ws#${encodeURIComponent('1+' + BRAND_NAME)}`;
    return new Response(btoa(disabledNode), {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
    });
  }

  const target = detectTargetFromRequest(request, url);
  const isJkTarget = ['vg', 'jk', 'jiakuan'].includes(target);
  if (isJkTarget && cfg.jk !== 'yes') {
    return new Response('زنجیره اینترنت خانگی فعال نیست. در پنل مدیریت miliconfig گزینه «فعال‌سازی زنجیره اینترنت خانگی (jk)» را روشن کنید.', {
      status: 403,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
    });
  }

  const queryOverrides = {
    wk: url.searchParams.get('wk') || '',
    proto: url.searchParams.get('proto') || '',
    scope: url.searchParams.get('scope') || userOrConfig?.nodeScope || 'all',
    limit: url.searchParams.get('limit') !== null ? url.searchParams.get('limit') : undefined
  };

  const finalLinks = await generateUserNodesList(userOrConfig, workerHost, queryOverrides);

  let bodyContent = '';
  let contentType = 'text/plain; charset=utf-8';

  switch (target) {
    case 'clash':
    case 'clashr':
    case 'stash':
    case 'meta':
    case 'clashmeta':
      bodyContent = generateClashConfig(finalLinks, cfg);
      contentType = 'text/yaml; charset=utf-8';
      break;
    case 'vg':
    case 'jk':
    case 'jiakuan':
      try {
        bodyContent = await generateResidentialChainConfig(finalLinks, {
          ...cfg,
          subNodeCount: userOrConfig?.subNodeCount ?? cfg.subNodeCount ?? 50
        });
        contentType = 'text/yaml; charset=utf-8';
      } catch (err) {
        return new Response('گره‌های اینترنت خانگی موقتاً در دسترس نیستند: ' + (err?.message || err), {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
        });
      }
      break;
    case 'singbox':
    case 'sing-box':
      bodyContent = generateSingboxConfig(finalLinks, cfg);
      contentType = 'application/json; charset=utf-8';
      break;
    case 'surge':
    case 'surge2':
    case 'surge3':
    case 'surge4':
      bodyContent = generateSurgeConfig(finalLinks, cfg);
      contentType = 'text/plain; charset=utf-8';
      break;
    case 'quantumult':
    case 'quanx':
      bodyContent = generateQuanxConfig(finalLinks, cfg);
      contentType = 'text/plain; charset=utf-8';
      break;
    case 'loon':
      bodyContent = generateLoonConfig(finalLinks, cfg);
      contentType = 'text/plain; charset=utf-8';
      break;
    case 'raw':
    case 'plain':
      bodyContent = finalLinks.join('\n');
      contentType = 'text/plain; charset=utf-8';
      break;
    default:
      bodyContent = btoa(finalLinks.join('\n'));
      contentType = 'text/plain; charset=utf-8';
      break;
  }

  const totalBytes = userOrConfig?.dataLimitGb > 0 ? Math.floor(userOrConfig.dataLimitGb * 1073741824) : 0;
  const usedBytes = Number(userOrConfig?.usedBytes || 0);
  const expireSec = userOrConfig?.expireAt > 0 ? Math.floor(userOrConfig.expireAt / 1000) : 0;
  const profileTitle = userOrConfig?.username ? `${BRAND_NAME} - ${userOrConfig.username}` : BRAND_NAME;

  const headers = {
    'Content-Type': contentType,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    'Access-Control-Allow-Origin': '*',
    'Profile-Title': `base64:${encodeBase64Utf8(profileTitle)}`,
    'Profile-Update-Interval': '12',
    'Subscription-Userinfo': `upload=0; download=${usedBytes}; total=${totalBytes}; expire=${expireSec}`
  };

  if (cfg.ech === 'yes') {
    headers['X-ECH-Status'] = 'ENABLED';
  }

  return new Response(bodyContent, { headers });
}


// --- MODULE: src/core/runtime.js ---
// ============================================================================
// miliconfig v3.1 - موتور هسته پروکسی (VLESS + Trojan + xhttp + SOCKS5/HTTP + GrainTCP)
// منطبق ۱۰۰٪ با کد اصلی CFnew v3.1 + احراز هویت چندکاربره D1 و ثبت ترافیک
// ============================================================================


const ADDR_TYPE_IPV4 = 1;
const ADDR_TYPE_DOMAIN = 2;
const ADDR_TYPE_IPV6 = 3;

const PROXY_KIND_SOCKS5 = 'p5';
const PROXY_KIND_HTTP = 'pt';
const PROXY_KIND_HTTPS = 'pts';

const CHUNK_SIZE = 64 * 1024;
const DOWNLOAD_PACKET_SIZE = 32 * 1024;
const DOWNLOAD_TAIL = 512;
const DOWNLOAD_DELAY = 0;
const UPLOAD_PACKET_SIZE = 16 * 1024;
const UPLOAD_QUEUE_LIMIT = 256 * 1024;
const CONNECT_RACE_COUNT = 2;
const FIRST_BYTE_TIMEOUT = 3500;

const HEX_TABLE = Array.from({ length: 256 }, (_v, i) => (i + 256).toString(16).slice(1));

function bytesToUuid(bytes, offset = 0) {
  const s = (
    HEX_TABLE[bytes[offset]] +
    HEX_TABLE[bytes[offset + 1]] +
    HEX_TABLE[bytes[offset + 2]] +
    HEX_TABLE[bytes[offset + 3]] +
    '-' +
    HEX_TABLE[bytes[offset + 4]] +
    HEX_TABLE[bytes[offset + 5]] +
    '-' +
    HEX_TABLE[bytes[offset + 6]] +
    HEX_TABLE[bytes[offset + 7]] +
    '-' +
    HEX_TABLE[bytes[offset + 8]] +
    HEX_TABLE[bytes[offset + 9]] +
    '-' +
    HEX_TABLE[bytes[offset + 10]] +
    HEX_TABLE[bytes[offset + 11]] +
    HEX_TABLE[bytes[offset + 12]] +
    HEX_TABLE[bytes[offset + 13]] +
    HEX_TABLE[bytes[offset + 14]] +
    HEX_TABLE[bytes[offset + 15]]
  ).toLowerCase();
  return isValidUuid(s) ? s : '';
}

function toUint8Array(chunk) {
  if (chunk instanceof Uint8Array) return chunk;
  if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
  if (ArrayBuffer.isView(chunk)) return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  return new Uint8Array(chunk || 0);
}

function concatUint8Arrays(head, body) {
  const a = toUint8Array(head);
  const b = toUint8Array(body);
  const out = new Uint8Array(a.byteLength + b.byteLength);
  out.set(a);
  out.set(b, a.byteLength);
  return out;
}

function closeSocketSafe(ws) {
  try {
    if (ws && (ws.readyState === 1 || ws.readyState === 2)) ws.close();
  } catch (_e) {}
}

function parseBase64EarlyData(b64Str) {
  if (!b64Str) return { earlyData: null, error: null };
  try {
    const clean = b64Str.replace(/-/g, '+').replace(/_/g, '/');
    return {
      earlyData: Uint8Array.from(atob(clean), c => c.charCodeAt(0)).buffer,
      error: null
    };
  } catch (error) {
    return { earlyData: null, error };
  }
}

function parseOutboundProxyConfig(rawAddr) {
  let rem = String(rawAddr || '').trim();
  if (!rem) return null;
  let kind = PROXY_KIND_SOCKS5;
  const lower = rem.toLowerCase();
  if (lower.startsWith('https://')) {
    kind = PROXY_KIND_HTTPS;
    rem = rem.slice(8);
  } else if (lower.startsWith('http://')) {
    kind = PROXY_KIND_HTTP;
    rem = rem.slice(7);
  } else if (lower.startsWith('socks5://')) {
    rem = rem.slice(9);
  } else if (lower.startsWith('socks://')) {
    rem = rem.slice(8);
  }
  const slashIdx = rem.indexOf('/');
  if (slashIdx >= 0) rem = rem.slice(0, slashIdx);
  if (!rem) throw new Error('Invalid proxy address');
  const [hostPart, authPart] = rem.split('@').reverse();
  let username, password, hostname, socksPort;
  if (authPart) {
    const parts = authPart.split(':');
    if (parts.length !== 2) throw new Error('Invalid proxy auth format');
    [username, password] = parts;
  }
  const hostSegments = hostPart.split(':');
  const lastSeg = hostSegments.pop();
  socksPort = Number(lastSeg);
  if (Number.isNaN(socksPort)) {
    if (kind === PROXY_KIND_SOCKS5) throw new Error('Invalid proxy port');
    hostSegments.push(lastSeg);
    socksPort = kind === PROXY_KIND_HTTPS ? 443 : 80;
  }
  hostname = hostSegments.join(':');
  if (!hostname) throw new Error('Empty proxy hostname');
  return { username, password, hostname, socksPort, kind };
}

function createChunkQueue(packetSize, maxBytes = packetSize, maxItems = Math.max(1, maxBytes >> 8)) {
  let queue = [];
  let head = 0;
  let queuedBytes = 0;
  let mergeBuf = null;

  function compact() {
    if (head > 32 && head * 2 >= queue.length) {
      queue = queue.slice(head);
      head = 0;
    }
  }

  function shiftOne() {
    if (head >= queue.length) return null;
    const item = queue[head];
    queue[head++] = undefined;
    queuedBytes -= item.byteLength;
    compact();
    return item;
  }

  return {
    get empty() {
      return head >= queue.length;
    },
    clear() {
      queue = [];
      head = 0;
      queuedBytes = 0;
    },
    sow(data) {
      const len = data?.byteLength || 0;
      if (!len) return true;
      if (queuedBytes + len > maxBytes || queue.length - head >= maxItems) return false;
      queue.push(data);
      queuedBytes += len;
      return true;
    },
    bundle(first = null) {
      first ||= shiftOne();
      if (!first || head >= queue.length || first.byteLength >= packetSize) return [first, false];
      let total = first.byteLength;
      let end = head;
      while (end < queue.length) {
        const next = queue[end];
        const nextTotal = total + next.byteLength;
        if (nextTotal > packetSize) break;
        total = nextTotal;
        end++;
      }
      if (end === head) return [first, false];
      const out = (mergeBuf ||= new Uint8Array(packetSize));
      out.set(first);
      let offset = first.byteLength;
      while (head < end) {
        const item = queue[head];
        queue[head++] = undefined;
        queuedBytes -= item.byteLength;
        out.set(item, offset);
        offset += item.byteLength;
      }
      compact();
      return [out.subarray(0, total), true];
    }
  };
}

function createDownloadCoalescer(ws, onBytesSent = null) {
  const maxPacket = DOWNLOAD_PACKET_SIZE;
  const tail = DOWNLOAD_TAIL;
  const minThreshold = Math.max(4096, tail << 3);
  let buf = new Uint8Array(maxPacket);
  let offset = 0;
  let timer = 0;
  let microScheduled = false;
  let pushSeq = 0;
  let snapSeq = 0;
  let deferCount = 0;

  function flush() {
    if (timer) clearTimeout(timer);
    timer = 0;
    microScheduled = false;
    if (!offset) return;
    if (ws.readyState === 1) {
      ws.send(buf.subarray(0, offset).slice());
      if (onBytesSent) onBytesSent(offset);
    }
    buf = new Uint8Array(maxPacket);
    offset = 0;
    deferCount = 0;
  }

  function schedule() {
    if (timer || microScheduled) return;
    microScheduled = true;
    snapSeq = pushSeq;
    queueMicrotask(() => {
      microScheduled = false;
      if (!offset || timer) return;
      if (maxPacket - offset < tail) return flush();
      timer = setTimeout(() => {
        timer = 0;
        if (!offset) return;
        if (maxPacket - offset < tail) return flush();
        if (deferCount < 2 && (pushSeq !== snapSeq || offset < minThreshold)) {
          deferCount++;
          snapSeq = pushSeq;
          return schedule();
        }
        flush();
      }, Math.max(DOWNLOAD_DELAY, 1));
    });
  }

  return {
    send(chunk) {
      const data = toUint8Array(chunk);
      let pos = 0;
      const len = data.byteLength;
      if (!len) return;
      while (pos < len) {
        if (!offset && len - pos >= maxPacket) {
          const sz = Math.min(maxPacket, len - pos);
          if (ws.readyState === 1) {
            ws.send(pos || sz !== len ? data.subarray(pos, pos + sz) : data);
            if (onBytesSent) onBytesSent(sz);
          }
          pos += sz;
          continue;
        }
        const sz = Math.min(maxPacket - offset, len - pos);
        buf.set(data.subarray(pos, pos + sz), offset);
        offset += sz;
        pos += sz;
        pushSeq++;
        if (offset === maxPacket || maxPacket - offset < tail) flush();
        else schedule();
      }
    },
    flush
  };
}

function openRawSocket(address, port, fetcher = null, options = undefined) {
  const target = { hostname: address, port };
  if (fetcher && typeof fetcher.connect === 'function') {
    return options === undefined ? fetcher.connect(target) : fetcher.connect(target, options);
  }
  return options === undefined ? cfConnect(target) : cfConnect(target, options);
}

async function openVerifiedSocket(address, port, fetcher = null) {
  try {
    const sock = openRawSocket(address, port, fetcher);
    if (sock?.opened) await sock.opened;
    return sock;
  } catch (err) {
    if (!fetcher) throw err;
    const sock = cfConnect({ hostname: address, port });
    if (sock?.opened) await sock.opened;
    return sock;
  }
}

async function connectRacedSocket(address, port, fetcher = null, raceCount = 1) {
  const count = Math.max(1, raceCount | 0);
  if (count <= 1) return openVerifiedSocket(address, port, fetcher);
  const tasks = Array.from({ length: count }, () => openVerifiedSocket(address, port, fetcher));
  const winner = await Promise.any(tasks);
  tasks.forEach(p => {
    p.then(sock => {
      if (sock !== winner) {
        try {
          sock.close();
        } catch (_e) {}
      }
    }, () => {});
  });
  return winner;
}

function wrapResidualSocket(sock, residualData) {
  let upstreamReader = null;
  const readable = new ReadableStream({
    start(controller) {
      controller.enqueue(residualData);
      upstreamReader = sock.readable.getReader();
    },
    async pull(controller) {
      const { value, done } = await upstreamReader.read();
      if (done) {
        controller.close();
        return;
      }
      controller.enqueue(value);
    },
    cancel(reason) {
      try {
        upstreamReader?.cancel(reason);
      } catch (_e) {}
    }
  });
  return {
    readable,
    writable: sock.writable,
    closed: sock.closed,
    opened: sock.opened,
    close: () => sock.close()
  };
}

async function connectHttpTunnel(targetHost, targetPort, proxyCfg, fetcher = null, firstPacket = null) {
  const { username, password, hostname, socksPort, kind } = proxyCfg;
  const opts = kind === PROXY_KIND_HTTPS ? { secureTransport: 'on', allowHalfOpen: false } : undefined;
  const sock = openRawSocket(hostname, socksPort, fetcher, opts);
  if (sock?.opened) await sock.opened;
  const formattedHost = targetHost.includes(':') && !/^\[.*\]$/.test(targetHost) ? `[${targetHost}]` : targetHost;
  const authority = `${formattedHost}:${targetPort}`;
  let reqHeaders =
    `CONNECT ${authority} HTTP/1.1\r\n` +
    `Host: ${authority}\r\n` +
    `User-Agent: Mozilla/5.0\r\n` +
    `Proxy-Connection: Keep-Alive\r\n`;
  if (username) {
    reqHeaders += `Proxy-Authorization: Basic ${btoa(`${username}:${password || ''}`)}\r\n`;
  }
  reqHeaders += '\r\n';

  const writer = sock.writable.getWriter();
  const reader = sock.readable.getReader();
  try {
    await writer.write(new TextEncoder().encode(reqHeaders));
    let buf = new Uint8Array(0);
    let headerEnd = -1;
    while (headerEnd < 0) {
      const { value, done } = await reader.read();
      if (done || !value) throw new Error('Failed to open HTTP proxy tunnel');
      buf = concatUint8Arrays(buf, value);
      for (let i = 0; i + 3 < buf.length; i++) {
        if (buf[i] === 13 && buf[i + 1] === 10 && buf[i + 2] === 13 && buf[i + 3] === 10) {
          headerEnd = i + 4;
          break;
        }
      }
      if (headerEnd < 0 && buf.length > 8192) throw new Error('Invalid proxy response');
    }
    const statusLine = sharedDecoder.decode(buf.subarray(0, Math.min(headerEnd, 128)));
    if (!statusLine.startsWith('HTTP/')) throw new Error('Invalid proxy response');
    const code = Number(statusLine.split(' ')[1]);
    if (!(code >= 200 && code < 300)) throw new Error('Proxy tunnel rejected');
    const residual = buf.subarray(headerEnd);
    if (firstPacket && firstPacket.byteLength) await writer.write(firstPacket);
    writer.releaseLock();
    reader.releaseLock();
    if (residual.byteLength) return wrapResidualSocket(sock, residual);
    return sock;
  } catch (err) {
    try { writer.releaseLock(); } catch (_e) {}
    try { reader.releaseLock(); } catch (_e) {}
    try { sock.close(); } catch (_e) {}
    throw err;
  }
}

async function connectViaOutboundProxy(_addrType, targetHost, targetPort, proxyCfg, fetcher = null, firstPacket = null) {
  if (proxyCfg && (proxyCfg.kind === PROXY_KIND_HTTP || proxyCfg.kind === PROXY_KIND_HTTPS)) {
    return connectHttpTunnel(targetHost, targetPort, proxyCfg, fetcher, firstPacket);
  }
  const { username, password, hostname, socksPort } = proxyCfg;
  const sock = openRawSocket(hostname, socksPort, fetcher);
  const writer = sock.writable.getWriter();
  await writer.write(new Uint8Array(username ? [5, 2, 0, 2] : [5, 1, 0]));
  const reader = sock.readable.getReader();
  let residual = new Uint8Array(0);

  async function readExact(needed) {
    while (residual.length < needed) {
      const { value, done } = await reader.read();
      if (done || !value) throw new Error('Failed to open SOCKS5 connection');
      residual = concatUint8Arrays(residual, value);
    }
    return residual;
  }
  function consume(n) {
    const res = residual.subarray(0, n);
    residual = residual.subarray(n);
    return res;
  }

  let head = await readExact(2);
  if (head[0] !== 5 || head[1] === 255) throw new Error('No acceptable SOCKS5 auth method');
  const method = head[1];
  consume(2);
  if (method === 2) {
    if (!username || !password) throw new Error('SOCKS5 server requires auth');
    const enc = new TextEncoder();
    const uBytes = enc.encode(username);
    const pBytes = enc.encode(password);
    await writer.write(new Uint8Array([1, uBytes.length, ...uBytes, pBytes.length, ...pBytes]));
    head = await readExact(2);
    if (head[0] !== 1 || head[1] !== 0) throw new Error('SOCKS5 auth failed');
    consume(2);
  }
  const cleanHost = /^\[.*\]$/.test(String(targetHost)) ? String(targetHost).slice(1, -1) : String(targetHost);
  const hostBytes = new TextEncoder().encode(cleanHost);
  await writer.write(new Uint8Array([5, 1, 0, 3, hostBytes.length, ...hostBytes, targetPort >> 8, targetPort & 255]));
  head = await readExact(4);
  if (head[1] !== 0) throw new Error('SOCKS5 connect failed');
  const bindType = head[3];
  let replyLen = 10;
  if (bindType === 1) replyLen = 10;
  else if (bindType === 4) replyLen = 22;
  else if (bindType === 3) replyLen = 7 + (await readExact(5))[4];
  else throw new Error('Invalid SOCKS5 reply');
  await readExact(replyLen);
  consume(replyLen);
  if (firstPacket && firstPacket.byteLength) await writer.write(firstPacket);
  writer.releaseLock();
  reader.releaseLock();
  if (residual.length) return wrapResidualSocket(sock, residual);
  return sock;
}

// پارس هدر VLESS با پشتیبانی از چندکاربره (دریافت کالبک resolveUserByUuid)
function parseVlessHeader(chunk, resolveUserFn) {
  const bytes = toUint8Array(chunk);
  if (bytes.byteLength < 24) return { hasError: true, message: 'invalid data' };
  const version = bytes.subarray(0, 1);
  const incomingUuid = bytesToUuid(bytes, 1);
  const matchedUser = incomingUuid ? resolveUserFn(incomingUuid) : null;
  if (!matchedUser) {
    return { hasError: true, message: 'invalid user' };
  }
  const optLen = bytes[17];
  const cmdIndex = 18 + optLen;
  if (bytes.byteLength < cmdIndex + 5) return { hasError: true, message: 'invalid data' };
  const cmd = bytes[cmdIndex];
  let isUDP = false;
  if (cmd === 1) {
    isUDP = false;
  } else if (cmd === 2) {
    isUDP = true;
  } else {
    return { hasError: true, message: 'command is not supported' };
  }
  const portIndex = 19 + optLen;
  const port = (bytes[portIndex] << 8) | bytes[portIndex + 1];
  let addrIndex = portIndex + 2;
  let addrLen = 0;
  let addrValIndex = addrIndex + 1;
  let hostname = '';
  const addressType = bytes[addrIndex];
  switch (addressType) {
    case ADDR_TYPE_IPV4:
      addrLen = 4;
      if (bytes.byteLength < addrValIndex + addrLen) return { hasError: true, message: 'invalid data' };
      hostname = `${bytes[addrValIndex]}.${bytes[addrValIndex + 1]}.${bytes[addrValIndex + 2]}.${bytes[addrValIndex + 3]}`;
      break;
    case ADDR_TYPE_DOMAIN:
      if (bytes.byteLength < addrValIndex + 1) return { hasError: true, message: 'invalid data' };
      addrLen = bytes[addrValIndex++];
      if (bytes.byteLength < addrValIndex + addrLen) return { hasError: true, message: 'invalid data' };
      hostname = sharedDecoder.decode(bytes.subarray(addrValIndex, addrValIndex + addrLen));
      break;
    case ADDR_TYPE_IPV6: {
      addrLen = 16;
      if (bytes.byteLength < addrValIndex + addrLen) return { hasError: true, message: 'invalid data' };
      const parts = [];
      const dv = new DataView(bytes.buffer, bytes.byteOffset + addrValIndex, addrLen);
      for (let i = 0; i < 8; i++) parts.push(dv.getUint16(i * 2).toString(16));
      hostname = parts.join(':');
      break;
    }
    default:
      return { hasError: true, message: `invalid addressType: ${addressType}` };
  }
  if (!hostname) return { hasError: true, message: 'addressValue is empty' };
  return {
    hasError: false,
    addressType,
    port,
    hostname,
    isUDP,
    rawIndex: addrValIndex + addrLen,
    version,
    matchedUser
  };
}

// پارس هدر Trojan با پشتیبانی از چندکاربره
async function parseTrojanHeader(buffer, resolveTrojanUserFn) {
  const bytes = toUint8Array(buffer);
  if (bytes.byteLength < 58) {
    return { hasError: true, message: 'invalid trojan data - too short' };
  }
  if (bytes[56] !== 0x0d || bytes[57] !== 0x0a) {
    return { hasError: true, message: 'invalid trojan header format' };
  }
  const incomingHash = sharedDecoder.decode(bytes.subarray(0, 56));
  const matchedUser = await resolveTrojanUserFn(incomingHash);
  if (!matchedUser) {
    return { hasError: true, message: 'invalid trojan password' };
  }
  const socksBuf = bytes.subarray(58);
  if (socksBuf.byteLength < 6) {
    return { hasError: true, message: 'invalid SOCKS5 request data' };
  }
  const view = new DataView(socksBuf.buffer, socksBuf.byteOffset, socksBuf.byteLength);
  const cmd = view.getUint8(0);
  if (cmd !== 1) {
    return { hasError: true, message: 'unsupported command, only TCP is allowed' };
  }
  const atyp = view.getUint8(1);
  let addrLen = 0;
  let addrIdx = 2;
  let hostname = '';
  switch (atyp) {
    case 1:
      addrLen = 4;
      hostname = socksBuf.subarray(addrIdx, addrIdx + addrLen).join('.');
      break;
    case 3:
      addrLen = socksBuf[addrIdx];
      addrIdx += 1;
      hostname = sharedDecoder.decode(socksBuf.subarray(addrIdx, addrIdx + addrLen));
      break;
    case 4: {
      addrLen = 16;
      const dv = new DataView(socksBuf.buffer, socksBuf.byteOffset + addrIdx, addrLen);
      const parts = [];
      for (let i = 0; i < 8; i++) parts.push(dv.getUint16(i * 2).toString(16));
      hostname = parts.join(':');
      break;
    }
    default:
      return { hasError: true, message: `invalid addressType ${atyp}` };
  }
  if (!hostname) return { hasError: true, message: 'address is empty' };
  const portIdx = addrIdx + addrLen;
  const port = new DataView(socksBuf.buffer, socksBuf.byteOffset + portIdx, 2).getUint16(0);
  return {
    hasError: false,
    addressType: atyp,
    port,
    hostname,
    rawClientData: socksBuf.subarray(portIdx + 4),
    matchedUser
  };
}

function makeWebSocketReadableStream(ws, earlyDataHeader) {
  let cancelled = false;
  return new ReadableStream({
    start(controller) {
      ws.addEventListener('message', event => {
        if (!cancelled) controller.enqueue(toUint8Array(event.data));
      });
      ws.addEventListener('close', () => {
        if (!cancelled) {
          closeSocketSafe(ws);
          try { controller.close(); } catch (_e) {}
        }
      });
      ws.addEventListener('error', err => {
        try { controller.error(err); } catch (_e) {}
      });
      const { earlyData, error } = parseBase64EarlyData(earlyDataHeader);
      if (error) controller.error(error);
      else if (earlyData) controller.enqueue(toUint8Array(earlyData));
    },
    cancel() {
      cancelled = true;
      closeSocketSafe(ws);
    }
  });
}

async function pipeRemoteToWebSocket(remoteSocket, ws, vlessHeader, retryCallback, onBytesTransferred = null) {
  let header = vlessHeader;
  let hasData = false;
  let retried = false;
  let firstByteTimer = null;

  if (retryCallback) {
    firstByteTimer = setTimeout(() => {
      if (!hasData && !retried) {
        retried = true;
        try { remoteSocket.close && remoteSocket.close(); } catch (_e) {}
        retryCallback();
      }
    }, FIRST_BYTE_TIMEOUT);
  }

  const coalescer = createDownloadCoalescer(ws, onBytesTransferred);
  let reader = null;
  let useByob = true;
  let buffer = new ArrayBuffer(CHUNK_SIZE);

  try {
    try {
      reader = remoteSocket.readable.getReader({ mode: 'byob' });
    } catch (_e) {
      useByob = false;
      reader = remoteSocket.readable.getReader();
    }
    for (;;) {
      const res = useByob ? await reader.read(new Uint8Array(buffer, 0, CHUNK_SIZE)) : await reader.read();
      if (res.done) break;
      const val = res.value;
      let chunk = toUint8Array(val);
      const nextBuf =
        useByob && val?.buffer instanceof ArrayBuffer && val.buffer.byteLength >= CHUNK_SIZE
          ? val.buffer
          : new ArrayBuffer(CHUNK_SIZE);
      if (!chunk.byteLength) continue;
      if (!hasData) {
        hasData = true;
        if (firstByteTimer) {
          clearTimeout(firstByteTimer);
          firstByteTimer = null;
        }
      }
      if (ws.readyState !== 1) throw new Error('WebSocket is not open');
      if (header) {
        chunk = concatUint8Arrays(header, chunk);
        header = null;
      }
      if (chunk.byteLength >= CHUNK_SIZE >> 1) {
        coalescer.flush();
        ws.send(chunk);
        if (onBytesTransferred) onBytesTransferred(chunk.byteLength);
        if (useByob) buffer = new ArrayBuffer(CHUNK_SIZE);
      } else {
        coalescer.send(chunk.slice());
        if (useByob) buffer = nextBuf;
      }
    }
    coalescer.flush();
  } catch (_e) {
    if (!retried) closeSocketSafe(ws);
  } finally {
    try { coalescer.flush(); } catch (_e) {}
    try { reader?.releaseLock(); } catch (_e) {}
  }

  if (firstByteTimer) clearTimeout(firstByteTimer);
  if (!hasData && !retried && retryCallback) retryCallback();
}

async function handleUdpDns(udpChunk, ws, vlessHeader, fetcher = null) {
  try {
    const sock = await connectRacedSocket('8.8.4.4', 53, fetcher, 1);
    const writer = sock.writable.getWriter();
    await writer.write(udpChunk);
    writer.releaseLock();
    await pipeRemoteToWebSocket(sock, ws, vlessHeader, null);
  } catch (_e) {}
}

async function establishOutboundAndPipe(
  addressType,
  host,
  port,
  rawClientData,
  ws,
  vlessRespHeader,
  remoteState,
  effectiveCfg,
  fetcher = null,
  onBytesTransferred = null
) {
  const fallbackAddr = (effectiveCfg.p || '').trim();
  const workerRegion = (effectiveCfg.wk || 'CF').trim().toUpperCase();
  const enableRegionMatch = (effectiveCfg.rm || '').toLowerCase() !== 'no';
  const qjMode = (effectiveCfg.qj || '').toLowerCase();
  const downgradeEnabled = qjMode === 'no';
  const proxyOnly = qjMode === 'only';

  let parsedProxy = null;
  let proxyEnabled = false;
  if (effectiveCfg.s && String(effectiveCfg.s).trim()) {
    try {
      parsedProxy = parseOutboundProxyConfig(effectiveCfg.s);
      proxyEnabled = Boolean(parsedProxy);
    } catch (_e) {
      proxyEnabled = false;
    }
  }

  const firstPacket = toUint8Array(rawClientData);
  if (firstPacket.byteLength && onBytesTransferred) {
    onBytesTransferred(firstPacket.byteLength);
  }

  async function connectAndSend(targetHost, targetPort, useProxy = false) {
    const remoteSock = useProxy
      ? await connectViaOutboundProxy(addressType, targetHost, targetPort, parsedProxy, fetcher, firstPacket)
      : await connectRacedSocket(targetHost, targetPort, fetcher, CONNECT_RACE_COUNT);
    const writer = remoteSock.writable.getWriter();
    if (!useProxy && firstPacket.byteLength) await writer.write(firstPacket);
    return { remoteSock, writer };
  }

  function detachIfCurrent(sock, writer) {
    if (remoteState.socket !== sock) return;
    try { writer?.releaseLock(); } catch (_e) {}
    remoteState.socket = null;
    remoteState.writer = null;
  }

  function bindRemote(sock, writer, retryCb) {
    try {
      if (remoteState.writer && remoteState.writer !== writer) {
        remoteState.writer.releaseLock();
      }
    } catch (_e) {}
    remoteState.socket = sock;
    remoteState.writer = writer;
    remoteState.drainUpload?.();
    sock.closed.catch(() => {}).finally(() => {
      if (remoteState.socket === sock) closeSocketSafe(ws);
    });
    pipeRemoteToWebSocket(sock, ws, vlessRespHeader, retryCb, onBytesTransferred).finally(() => {
      if (remoteState.socket === sock) {
        try { writer.releaseLock(); } catch (_e) {}
        remoteState.writer = null;
      }
    });
  }

  async function retryConnect() {
    if (proxyOnly && proxyEnabled) {
      closeSocketSafe(ws);
      return;
    }
    if (downgradeEnabled && proxyEnabled) {
      try {
        const { remoteSock, writer } = await connectAndSend(host, port, true);
        bindRemote(remoteSock, writer, null);
        return;
      } catch (_proxyErr) {
        let fbHost, fbPort;
        if (fallbackAddr) {
          const parsed = parseAddressAndPort(fallbackAddr);
          fbHost = parsed.address;
          fbPort = parsed.port || port;
        } else {
          const fb = await selectFallbackProxyAddress(workerRegion, enableRegionMatch);
          fbHost = fb ? fb.domain : host;
          fbPort = fb ? fb.port : port;
        }
        try {
          const { remoteSock, writer } = await connectAndSend(fbHost, fbPort, false);
          bindRemote(remoteSock, writer, null);
        } catch (_fbErr) {
          closeSocketSafe(ws);
        }
      }
    } else {
      let fbHost, fbPort;
      if (fallbackAddr) {
        const parsed = parseAddressAndPort(fallbackAddr);
        fbHost = parsed.address;
        fbPort = parsed.port || port;
      } else {
        const fb = await selectFallbackProxyAddress(workerRegion, enableRegionMatch);
        fbHost = fb ? fb.domain : host;
        fbPort = fb ? fb.port : port;
      }
      try {
        const { remoteSock, writer } = await connectAndSend(fbHost, fbPort, proxyEnabled);
        bindRemote(remoteSock, writer, null);
      } catch (_fbErr) {
        closeSocketSafe(ws);
      }
    }
  }

  try {
    const firstHopProxy = proxyOnly && proxyEnabled ? true : downgradeEnabled ? false : proxyEnabled;
    const { remoteSock, writer } = await connectAndSend(host, port, firstHopProxy);
    bindRemote(remoteSock, writer, () => {
      detachIfCurrent(remoteSock, writer);
      retryConnect();
    });
  } catch (_err) {
    await retryConnect();
  }
}

async function handleWebSocketUpgrade(request, env, ctx, globalCfg, allUsers, adminUuid) {
  const reqUrl = new URL(request.url);
  const queryP = reqUrl.searchParams.get('p') || '';
  const queryWk = (reqUrl.searchParams.get('wk') || '').toUpperCase();
  const queryRm = reqUrl.searchParams.get('rm') || '';
  const queryS = reqUrl.searchParams.get('s') || '';

  // تابع تشخیص کاربر بر اساس UUID در VLESS
  function resolveVlessUser(incomingUuid) {
    const lower = String(incomingUuid || '').toLowerCase();
    for (const u of allUsers) {
      if (u.uuid.toLowerCase() === lower) {
        if (!u.enabled) return null;
        if (u.dataLimitGb > 0 && u.usedBytes >= u.dataLimitGb * 1073741824) return null;
        if (u.expireAt > 0 && Date.now() > u.expireAt) return null;
        return u;
      }
    }
    if (lower === adminUuid.toLowerCase()) {
      return { id: null, username: 'admin', uuid: adminUuid, config: globalCfg };
    }
    return null;
  }

  // تابع تشخیص کاربر بر اساس هش SHA-224 رمز عبور در Trojan
  async function resolveTrojanUser(incomingHash) {
    for (const u of allUsers) {
      const pass = (u.config?.tp && String(u.config.tp).trim()) || u.uuid;
      const hash = await sha224Hex(pass);
      if (hash === incomingHash) {
        if (!u.enabled) return null;
        if (u.dataLimitGb > 0 && u.usedBytes >= u.dataLimitGb * 1073741824) return null;
        if (u.expireAt > 0 && Date.now() > u.expireAt) return null;
        return u;
      }
    }
    const adminPass = (globalCfg.tp && String(globalCfg.tp).trim()) || adminUuid;
    const adminHash = await sha224Hex(adminPass);
    if (adminHash === incomingHash) {
      return { id: null, username: 'admin', uuid: adminUuid, config: globalCfg };
    }
    return null;
  }

  const pair = new WebSocketPair();
  const [clientWs, serverWs] = Object.values(pair);
  serverWs.accept();
  serverWs.binaryType = 'arraybuffer';

  let remoteState = { socket: null, writer: null, drainUpload: null };
  let isDnsSession = false;
  let detectedProto = null;
  let matchedUserObj = null;
  let sessionBytes = 0;
  let draining = false;
  let closed = false;
  const uploadQueue = createChunkQueue(UPLOAD_PACKET_SIZE, UPLOAD_QUEUE_LIMIT, UPLOAD_QUEUE_LIMIT >> 8);
  const fetcher = request.fetcher;

  function addTransferredBytes(n) {
    sessionBytes += Number(n) || 0;
  }

  function flushSessionTraffic() {
    if (matchedUserObj?.id && sessionBytes > 0) {
      const bytesToRecord = sessionBytes;
      sessionBytes = 0;
      const p = recordUserActivity(env, matchedUserObj.id, bytesToRecord, 1).catch(() => {});
      if (ctx && typeof ctx.waitUntil === 'function') ctx.waitUntil(p);
    }
  }

  function closeTransport() {
    if (closed) return;
    closed = true;
    uploadQueue.clear();
    try { remoteState.writer?.releaseLock(); } catch (_e) {}
    remoteState.writer = null;
    try { remoteState.socket?.close(); } catch (_e) {}
    closeSocketSafe(serverWs);
    flushSessionTraffic();
  }

  function enqueueUpload(chunk) {
    const data = toUint8Array(chunk);
    if (!data.byteLength) return true;
    addTransferredBytes(data.byteLength);
    if (!uploadQueue.sow(data)) {
      closeTransport();
      return false;
    }
    remoteState.drainUpload?.();
    return true;
  }

  async function drainUploadQueue() {
    if (draining || closed || !remoteState.writer) return;
    draining = true;
    try {
      for (;;) {
        if (closed || !remoteState.writer) break;
        const [bundled] = uploadQueue.bundle();
        if (!bundled) break;
        await remoteState.writer.write(bundled);
      }
    } catch (_e) {
      closeTransport();
    } finally {
      draining = false;
      if (!uploadQueue.empty && !closed && remoteState.writer) queueMicrotask(drainUploadQueue);
    }
  }

  remoteState.drainUpload = () => {
    if (!draining && !uploadQueue.empty && remoteState.writer) queueMicrotask(drainUploadQueue);
  };

  const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';
  const wsReadable = makeWebSocketReadableStream(serverWs, earlyDataHeader);

  wsReadable
    .pipeTo(
      new WritableStream({
        async write(chunk) {
          if (closed) return;
          const data = toUint8Array(chunk);
          if (isDnsSession) return await handleUdpDns(data, serverWs, null, fetcher);
          if (remoteState.socket && remoteState.writer) {
            if (!enqueueUpload(data)) throw new Error('upload queue overflow');
            return;
          }
          if (detectedProto) {
            if (!enqueueUpload(data)) throw new Error('upload queue overflow');
            return;
          }

          // تلاش برای VLESS
          if (data.byteLength >= 24) {
            const vlessRes = parseVlessHeader(data, resolveVlessUser);
            if (!vlessRes.hasError) {
              detectedProto = 'vless';
              matchedUserObj = vlessRes.matchedUser;
              const userCfg = {
                ...globalCfg,
                ...(matchedUserObj?.config || {}),
                ...(queryP ? { p: queryP } : {}),
                ...(queryWk ? { wk: queryWk } : {}),
                ...(queryRm ? { rm: queryRm } : {}),
                ...(queryS ? { s: queryS } : {})
              };
              if (vlessRes.isUDP) {
                if (vlessRes.port === 53) isDnsSession = true;
                else throw new Error('UDP proxy only enabled for DNS port 53');
              }
              const respHeader = new Uint8Array([vlessRes.version[0], 0]);
              const rawPayload = data.subarray(vlessRes.rawIndex);
              if (isDnsSession) return handleUdpDns(rawPayload, serverWs, respHeader, fetcher);
              await establishOutboundAndPipe(
                vlessRes.addressType,
                vlessRes.hostname,
                vlessRes.port,
                rawPayload,
                serverWs,
                respHeader,
                remoteState,
                userCfg,
                fetcher,
                addTransferredBytes
              );
              return;
            }
          }

          // تلاش برای Trojan
          if (data.byteLength >= 58) {
            const trojanRes = await parseTrojanHeader(data, resolveTrojanUser);
            if (!trojanRes.hasError) {
              detectedProto = 'trojan';
              matchedUserObj = trojanRes.matchedUser;
              const userCfg = {
                ...globalCfg,
                ...(matchedUserObj?.config || {}),
                ...(queryP ? { p: queryP } : {}),
                ...(queryWk ? { wk: queryWk } : {}),
                ...(queryRm ? { rm: queryRm } : {}),
                ...(queryS ? { s: queryS } : {})
              };
              await establishOutboundAndPipe(
                trojanRes.addressType,
                trojanRes.hostname,
                trojanRes.port,
                trojanRes.rawClientData,
                serverWs,
                null,
                remoteState,
                userCfg,
                fetcher,
                addTransferredBytes
              );
              return;
            }
          }

          throw new Error('Invalid protocol or authentication failed');
        }
      })
    )
    .catch(() => {
      closeTransport();
    });

  return new Response(null, { status: 101, webSocket: clientWs });
}

// ============================================================================
// پروتکل xhttp (HTTP POST Streaming) با پشتیبانی از چندکاربره
// ============================================================================
const XHTTP_HUFFMAN_LEN = [
  13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28,
  28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28,
  6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6,
  5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10,
  13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6,
  15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5,
  6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28,
  20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23,
  24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24,
  22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23,
  21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23,
  26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25,
  19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27,
  20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23,
  26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26,
  30
];

const XHTTP_PAD_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generateXhttpPaddingString(len) {
  let out = '';
  for (let i = 0; i < len; i++) {
    out += XHTTP_PAD_CHARS[Math.floor(Math.random() * XHTTP_PAD_CHARS.length)];
  }
  return out;
}

function calcHuffmanByteLen(str) {
  const bytes = new TextEncoder().encode(str);
  let bits = 0;
  for (let i = 0; i < bytes.length; i++) bits += XHTTP_HUFFMAN_LEN[bytes[i]];
  return Math.ceil(bits / 8);
}

function validateXhttpPadding(request, padHeader, padKey) {
  let padVal = '';
  const hVal = request.headers.get(padHeader);
  if (hVal) {
    try {
      const parsed = new URL(hVal, 'https://x.invalid');
      padVal = parsed.searchParams.get(padKey) || hVal;
    } catch (_e) {
      padVal = hVal;
    }
  } else {
    try {
      padVal = new URL(request.url).searchParams.get(padKey) || '';
    } catch (_e) {
      padVal = '';
    }
  }
  if (!padVal) return true;
  const len = calcHuffmanByteLen(padVal);
  return len >= 98 && len <= 1002;
}

async function readXhttpHeader(readableStream, resolveUserFn) {
  const reader = readableStream.getReader({ mode: 'byob' });
  try {
    let res = await reader.readAtLeast(18, new Uint8Array(new ArrayBuffer(128 * 1024)));
    let totalRead = res.value.length;
    let buf = res.value;
    const version = buf[0];
    const incomingUuid = bytesToUuid(buf, 1);
    const matchedUser = incomingUuid ? resolveUserFn(incomingUuid) : null;
    if (!matchedUser) {
      try { reader.releaseLock(); } catch (_e) {}
      return null;
    }
    const optLen = buf[17];
    const addrOffset = 18 + optLen + 1 + 2 + 1;
    if (addrOffset + 1 > totalRead) {
      if (res.done) return null;
      const needed = addrOffset + 1 - totalRead;
      res = await reader.readAtLeast(needed, new Uint8Array(new ArrayBuffer(128 * 1024)));
      totalRead += res.value.length;
      buf = concatUint8Arrays(buf, res.value);
    }
    const cmd = buf[18 + optLen];
    if (cmd !== 1) return null;
    const port = (buf[addrOffset - 3] << 8) + buf[addrOffset - 2];
    const atyp = buf[addrOffset - 1];
    let headerLen = -1;
    if (atyp === ADDR_TYPE_IPV4) headerLen = addrOffset + 4;
    else if (atyp === ADDR_TYPE_IPV6) headerLen = addrOffset + 16;
    else if (atyp === ADDR_TYPE_DOMAIN) headerLen = addrOffset + 1 + buf[addrOffset];
    if (headerLen < 0) return null;
    const rem = headerLen - totalRead;
    if (rem > 0) {
      if (res.done) return null;
      res = await reader.readAtLeast(rem, new Uint8Array(new ArrayBuffer(128 * 1024)));
      totalRead += res.value.length;
      buf = concatUint8Arrays(buf, res.value);
    }
    let hostname = '';
    if (atyp === ADDR_TYPE_IPV4) {
      hostname = buf.slice(addrOffset, addrOffset + 4).join('.');
    } else if (atyp === ADDR_TYPE_DOMAIN) {
      hostname = sharedDecoder.decode(buf.slice(addrOffset + 1, addrOffset + 1 + buf[addrOffset]));
    } else if (atyp === ADDR_TYPE_IPV6) {
      hostname = buf
        .slice(addrOffset, addrOffset + 16)
        .reduce((acc, v, i, arr) => (i % 2 ? acc.concat(((arr[i - 1] << 8) + v).toString(16)) : acc), [])
        .join(':');
    }
    if (!hostname) return null;
    return {
      hostname,
      port,
      data: buf.slice(headerLen),
      resp: new Uint8Array([version, 0]),
      reader,
      done: res.done,
      matchedUser
    };
  } catch (_e) {
    try { reader.releaseLock(); } catch (_ig) {}
    return null;
  }
}

async function handleXhttpPostRequest(request, env, ctx, globalCfg, allUsers, adminUuid) {
  if (!request.body) return new Response('Bad Request', { status: 400 });

  function resolveUserFn(incomingUuid) {
    const lower = String(incomingUuid || '').toLowerCase();
    for (const u of allUsers) {
      if (u.uuid.toLowerCase() === lower && u.enabled) return u;
    }
    if (lower === adminUuid.toLowerCase()) {
      return { id: null, username: 'admin', uuid: adminUuid, config: globalCfg };
    }
    return null;
  }

  const parsedHeader = await readXhttpHeader(request.body, resolveUserFn);
  if (!parsedHeader) {
    return new Response('Bad Request', { status: 400 });
  }

  const matchedUser = parsedHeader.matchedUser;
  const userUuid = matchedUser.uuid || adminUuid;
  const { header: xPadHeader, key: xPadKey } = getXhttpPaddingMeta(userUuid);
  if (!validateXhttpPadding(request, xPadHeader, xPadKey)) {
    return new Response('Bad Request', { status: 400 });
  }

  let remoteSocket = null;
  try {
    remoteSocket = await connectRacedSocket(parsedHeader.hostname, parsedHeader.port, request.fetcher, CONNECT_RACE_COUNT);
  } catch (_e) {
    const fb = await selectFallbackProxyAddress(globalCfg.wk || 'CF', true);
    if (!fb) return new Response('Gateway Timeout', { status: 504 });
    try {
      remoteSocket = await connectRacedSocket(fb.domain, fb.port || parsedHeader.port, request.fetcher, 1);
    } catch (_e2) {
      return new Response('Bad Gateway', { status: 502 });
    }
  }

  let totalBytes = 0;
  const upPromise = (async () => {
    const writer = remoteSocket.writable.getWriter();
    try {
      if (parsedHeader.data && parsedHeader.data.length) {
        totalBytes += parsedHeader.data.length;
        await writer.write(parsedHeader.data);
      }
      while (!parsedHeader.done) {
        const r = await parsedHeader.reader.read(new Uint8Array(new ArrayBuffer(64 * 1024)));
        if (r.done) break;
        if (r.value && r.value.length) {
          totalBytes += r.value.length;
          await writer.write(r.value);
        }
      }
    } catch (_e) {} finally {
      try { await writer.close(); } catch (_e) {}
      try { parsedHeader.reader.releaseLock(); } catch (_e) {}
    }
  })();

  const { readable, writable } = new TransformStream();
  const downPromise = (async () => {
    const writer = writable.getWriter();
    const reader = remoteSocket.readable.getReader();
    try {
      await writer.write(parsedHeader.resp);
      for (;;) {
        const r = await reader.read();
        if (r.done) break;
        if (r.value && r.value.length) {
          totalBytes += r.value.length;
          await writer.write(r.value);
        }
      }
      await writer.close();
    } catch (_e) {} finally {
      try { reader.releaseLock(); } catch (_e) {}
      try { writer.releaseLock(); } catch (_e) {}
    }
  })();

  const closedPromise = Promise.allSettled([upPromise, downPromise]).finally(() => {
    try { remoteSocket.close(); } catch (_e) {}
    if (matchedUser?.id && totalBytes > 0) {
      recordUserActivity(env, matchedUser.id, totalBytes, 1).catch(() => {});
    }
  });

  if (ctx && typeof ctx.waitUntil === 'function') {
    ctx.waitUntil(closedPromise);
  }

  const respHeaders = {
    'X-Accel-Buffering': 'no',
    'Cache-Control': 'no-store',
    Connection: 'keep-alive',
    'User-Agent': 'Go-http-client/2.0',
    'Content-Type': 'application/grpc'
  };
  try {
    const padUrl = new URL('https://x.invalid/');
    padUrl.searchParams.set(xPadKey, generateXhttpPaddingString(100 + Math.floor(Math.random() * 901)));
    respHeaders[xPadHeader] = padUrl.toString();
  } catch (_e) {}

  return new Response(readable, { headers: respHeaders });
}


// --- MODULE: src/api/handlers.js ---
// ============================================================================
// miliconfig v3.1 - هندلرهای REST API (مدیریت کاربران D1، تنظیمات، نودهای ترجیحی، وضعیت سیستم)
// ============================================================================


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
async function handleConfigApi(request, env) {
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
async function handleUsersApi(request, env) {
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
async function handlePreferredIpsApi(request, env, bypassAeCheck = false) {
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

// ۴. وضعیت زنده داشبورد و دیتابیس D1 (/api/stats & /api/d1)
async function handleDashboardStatsApi(request, env) {
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
async function handlePublicUserStatusApi(request, env, token) {
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


// --- MODULE: src/ui/loginHtml.js ---
// ============================================================================
// miliconfig v3.1 - صفحه درگاه ورود و ترمینال امنیتی (تم سبز نئونی miliconfig)
// ============================================================================


function renderLoginGatewayHtml(options = {}) {
  const hasCustomPath = Boolean(options.customPath && String(options.customPath).trim());
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="${VIEWPORT_META}">
  <meta name="theme-color" content="${THEME_COLOR_META}">
  <title>${BRAND_UPPER} ${VERSION} — مرکز کنترل و درگاه اشتراک</title>
  <link rel="icon" href="${FAVICON_DATA_URI}">
  <style>
    :root {
      --bg-deep: #060b06;
      --bg-card: rgba(13, 23, 13, 0.88);
      --bg-input: rgba(8, 14, 8, 0.92);
      --border-soft: rgba(163, 230, 53, 0.22);
      --border-strong: rgba(181, 255, 77, 0.55);
      --neon: #b5ff4d;
      --neon-2: #84cc16;
      --text-main: #f2f8ef;
      --text-muted: #93a889;
      --danger: #f87171;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      min-height: 100dvh;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Vazirmatn", Tahoma, sans-serif;
      background:
        radial-gradient(circle at 18% 20%, rgba(163, 230, 53, 0.14) 0%, transparent 42%),
        radial-gradient(circle at 82% 80%, rgba(101, 163, 13, 0.12) 0%, transparent 45%),
        var(--bg-deep);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: relative;
      overflow-x: hidden;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(163, 230, 53, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(163, 230, 53, 0.05) 1px, transparent 1px);
      background-size: 38px 38px;
      pointer-events: none;
      z-index: 0;
    }
    .gateway-card {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 520px;
      background: var(--bg-card);
      border: 1px solid var(--border-soft);
      border-radius: 24px;
      padding: 32px 28px;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.75), 0 0 40px rgba(163, 230, 53, 0.08);
      backdrop-filter: blur(16px);
    }
    .brand-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .brand-info {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .brand-logo {
      width: 54px;
      height: 54px;
      flex-shrink: 0;
    }
    .brand-logo svg { width: 100%; height: 100%; }
    .brand-title {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      color: var(--text-main);
    }
    .brand-sub {
      font-size: 0.78rem;
      color: var(--neon);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-top: 3px;
    }
    .live-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(163, 230, 53, 0.12);
      border: 1px solid rgba(163, 230, 53, 0.35);
      font-size: 0.78rem;
      color: var(--neon);
      font-weight: 600;
    }
    .live-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--neon);
      box-shadow: 0 0 8px var(--neon);
    }
    .desc-text {
      color: var(--text-muted);
      font-size: 0.92rem;
      line-height: 1.75;
      margin-bottom: 22px;
    }
    .input-group {
      margin-bottom: 16px;
    }
    .input-label {
      display: block;
      font-size: 0.84rem;
      color: var(--text-muted);
      margin-bottom: 8px;
    }
    .token-input {
      width: 100%;
      padding: 14px 16px;
      border-radius: 14px;
      background: var(--bg-input);
      border: 1px solid var(--border-soft);
      color: var(--text-main);
      font-size: 0.95rem;
      font-family: "JetBrains Mono", monospace;
      direction: ltr;
      text-align: left;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .token-input:focus {
      border-color: var(--neon);
      box-shadow: 0 0 0 3px rgba(181, 255, 77, 0.15);
    }
    .btn-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 10px;
    }
    .btn {
      padding: 13px 16px;
      border-radius: 14px;
      font-size: 0.92rem;
      font-weight: 700;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .btn-primary {
      background: linear-gradient(135deg, #c6ff66 0%, #84cc16 100%);
      color: #071204;
      box-shadow: 0 6px 22px rgba(163, 230, 53, 0.28);
    }
    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 26px rgba(163, 230, 53, 0.4);
    }
    .btn-secondary {
      background: rgba(163, 230, 53, 0.08);
      border-color: var(--border-soft);
      color: var(--text-main);
    }
    .btn-secondary:hover {
      border-color: var(--neon);
      color: var(--neon);
    }
    .msg-box {
      margin-top: 14px;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.85rem;
      display: none;
    }
    .msg-error {
      display: block;
      background: rgba(248, 113, 113, 0.12);
      border: 1px solid rgba(248, 113, 113, 0.35);
      color: var(--danger);
    }
    .terminal-mini {
      margin-top: 22px;
      padding: 14px 16px;
      border-radius: 14px;
      background: rgba(5, 9, 5, 0.88);
      border: 1px solid rgba(163, 230, 53, 0.14);
      font-family: "JetBrains Mono", monospace;
      font-size: 0.78rem;
      color: var(--text-muted);
      direction: ltr;
      line-height: 1.65;
    }
    .terminal-mini span { color: var(--neon); }

    /* ==================
       بهینه‌سازی رابط برای گوشی همراه و ویندوز
       ================== */
    /* چیدمان امن در ارتفاع‌های کم (کیبورد موبایل / پنجره کوچک ویندوز) */
    body { align-items: flex-start; }
    .gateway-card { margin: auto 0; }
    .support-line {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid var(--border-soft);
      font-size: 0.8rem;
      color: var(--text-muted);
      text-align: center;
      line-height: 2;
      overflow-wrap: anywhere;
    }
    .support-line a {
      color: var(--neon);
      font-weight: 800;
      text-decoration: none;
    }
    .support-line a:hover { text-decoration: underline; }
    @media (max-width: 480px) {
      body { padding: 14px 12px calc(16px + env(safe-area-inset-bottom, 0px)); }
      .gateway-card { padding: 22px 16px; border-radius: 20px; }
      .brand-title { font-size: 1.15rem; }
      .btn-row { grid-template-columns: 1fr; }
      .btn { min-height: 46px; padding: 13px 14px; }
      .terminal-mini { font-size: 0.72rem; padding: 12px; }
      .desc-text { font-size: 0.86rem; }
    }
    @media (max-width: 400px) {
      .brand-row { flex-wrap: wrap; gap: 10px; }
      .live-pill { font-size: 0.72rem; padding: 5px 10px; }
    }
${BASE_UI_CSS}
  </style>
</head>
<body>
  <div class="gateway-card">
    <div class="brand-row">
      <div class="brand-info">
        <div class="brand-logo">${SHIELD_LOGO_SVG}</div>
        <div>
          <div class="brand-title">${BRAND_UPPER}</div>
          <div class="brand-sub">CLOUDFLARE D1 CONTROL ${VERSION}</div>
        </div>
      </div>
      <div class="live-pill">
        <span class="live-dot"></span>
        <span>آنلاین</span>
      </div>
    </div>

    <p class="desc-text">
      برای ورود به <strong>مرکز کنترل مدیریت ${BRAND_NAME}</strong> کلید مدیر (${hasCustomPath ? 'مسیر سفارشی D' : 'UUID یا مسیر سفارشی'}) را وارد کنید، یا برای مشاهده <strong>صفحه وضعیت اشتراک</strong>، شناسه کاربری خود را وارد نمایید.
    </p>

    <div class="input-group">
      <label class="input-label" for="uuidInput">شناسه دسترسی (UUID مدیر / مسیر سفارشی / شناسه کاربر):</label>
      <input type="text" id="uuidInput" class="token-input" placeholder="e.g. 351c9981-04b6-4103-aa4b-864aa9c91469" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" autofocus>
    </div>

    <div class="btn-row">
      <button type="button" class="btn btn-primary" onclick="enterAdmin()">
        <span>⚡ ورود به پنل مدیریت</span>
      </button>
      <button type="button" class="btn btn-secondary" onclick="enterStatus()">
        <span>👁 صفحه وضعیت کاربر</span>
      </button>
    </div>

    <div id="msgBox" class="msg-box"></div>

    <div class="terminal-mini">
      <div><span>root@${BRAND_NAME}:~$</span> status --engine=cloudflare-d1</div>
      <div><span>✓</span> Protocols: VLESS-WS / Trojan-WS / xhttp / ECH</div>
      <div><span>✓</span> Naming: <span>1+${BRAND_NAME}, 2+${BRAND_NAME} ...</span></div>
    </div>

    <div class="support-line">
      ❓ راهنمایی نیاز دارید؟ به ${SUPPORT_CHANNEL_LABEL} سر بزنید:
      <a href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">${SUPPORT_CHANNEL_URL}</a>
    </div>
  </div>

  <script>
    function getCleanToken() {
      var el = document.getElementById('uuidInput');
      var val = (el ? el.value : '').trim().replace(/^\\/+|\\/+$/g, '');
      if (!val) {
        var box = document.getElementById('msgBox');
        box.className = 'msg-box msg-error';
        box.textContent = 'لطفاً شناسه دسترسی یا UUID را وارد کنید.';
        return '';
      }
      return val;
    }
    function enterAdmin() {
      var t = getCleanToken();
      if (!t) return;
      window.location.href = '/' + t;
    }
    function enterStatus() {
      var t = getCleanToken();
      if (!t) return;
      window.location.href = '/status/' + encodeURIComponent(t);
    }
    document.getElementById('uuidInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') enterAdmin();
    });
  </script>
</body>
</html>`;
}


// --- MODULE: src/ui/statusHtml.js ---
// ============================================================================
// miliconfig v3.1 - صفحه وضعیت و اشتراک اختصاصی کاربر (ارسالی به کاربر)
// طراحی ۱۰۰٪ مطابق تصاویر 1000050224.jpg و 1000050225.jpg با برند miliconfig
// ============================================================================


function renderUserStatusPageHtml(user, nodes = [], originUrl = '') {
  const urlObj = new URL(originUrl || 'https://miliconfig.workers.dev');
  const baseUrl = `${urlObj.protocol}//${urlObj.host}`;
  const userToken = user.config?.d && String(user.config.d).trim()
    ? String(user.config.d).trim().replace(/^\/+|\/+$/g, '')
    : user.uuid;

  const baseSubUrl = `${baseUrl}/${userToken}/sub`;
  const statusUrl = `${baseUrl}/status/${encodeURIComponent(user.id || userToken)}`;
  const totalNodes = nodes.length;

  const usedBytes = Number(user.usedBytes || 0);
  const lifetimeBytes = Number(user.lifetimeBytes || 0);
  const limitGb = Number(user.dataLimitGb || 0);
  const limitBytes = limitGb > 0 ? limitGb * 1073741824 : 0;
  const usagePercent = limitBytes > 0 ? Math.min(100, Math.round((usedBytes / limitBytes) * 100)) : 0;

  let expireLabel = 'بدون انقضا';
  if (user.expireAt > 0) {
    const diffDays = Math.ceil((user.expireAt - Date.now()) / 86400000);
    expireLabel = diffDays > 0 ? `${diffDays} روز باقی‌مانده` : 'منقضی شده';
  } else if (user.startOnFirstUse && user.expireDays > 0) {
    expireLabel = `${user.expireDays} روز (شروع با اولین اتصال)`;
  }

  const locationsList = Object.entries(REGION_MAP)
    .filter(([code]) => ['CF', 'HK', 'US', 'SG', 'JP', 'KR', 'DE', 'SE', 'NL', 'FI', 'GB'].includes(code))
    .map(([code, labels]) => ({
      code,
      title: labels[0],
      url: `${baseSubUrl}?wk=${code}`
    }));

  const protoCombos = [
    { title: 'اتصال هوشمند (همه نودها × همه پروتکل‌ها)', badge: 'Base64', url: baseSubUrl },
    { title: 'فقط پروتکل VLESS (WebSocket + TLS)', badge: 'VLESS', url: `${baseSubUrl}?proto=vless` },
    { title: 'فقط پروتکل Trojan (WebSocket + TLS)', badge: 'Trojan', url: `${baseSubUrl}?proto=trojan` },
    { title: 'فقط پروتکل xhttp (ضد فیلتر پیشرفته)', badge: 'xhttp', url: `${baseSubUrl}?proto=xhttp` },
    { title: 'فقط نودهای لبه CDN (Multi-Location)', badge: 'Edge', url: `${baseSubUrl}?scope=edge` },
    { title: 'فقط سرور اصلی (بدون CDN)', badge: 'Origin', url: `${baseSubUrl}?scope=origin` },
    { title: 'کانفیگ اختصاصی Clash Meta / Mihomo', badge: 'YAML', url: `${baseSubUrl}?target=clash` },
    { title: 'کانفیگ اختصاصی Sing-box / Hiddify', badge: 'JSON', url: `${baseSubUrl}?target=singbox` },
    { title: 'کانفیگ اختصاصی Surge', badge: 'INI', url: `${baseSubUrl}?target=surge` },
    { title: 'کانفیگ اختصاصی Quantumult X', badge: 'QuanX', url: `${baseSubUrl}?target=quanx` },
    { title: 'کانفیگ اختصاصی Loon', badge: 'Loon', url: `${baseSubUrl}?target=loon` },
    { title: 'متن خام لینک‌ها (Raw Plaintext)', badge: 'RAW', url: `${baseSubUrl}?target=raw` }
  ];

  const safeNodesJson = JSON.stringify(nodes).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="${VIEWPORT_META}">
  <meta name="theme-color" content="${THEME_COLOR_META}">
  <title>وضعیت اشتراک ${user.username} — ${BRAND_UPPER}</title>
  <link rel="icon" href="${FAVICON_DATA_URI}">
  <style>
    :root {
      --bg-0: #070d07;
      --bg-1: #0c160c;
      --card: rgba(15, 26, 15, 0.90);
      --card-inner: rgba(9, 16, 9, 0.92);
      --border: rgba(163, 230, 53, 0.18);
      --border-hi: rgba(181, 255, 77, 0.48);
      --neon: #b5ff4d;
      --neon-dim: rgba(181, 255, 77, 0.14);
      --text: #f3f8f1;
      --muted: #93a88a;
      --danger: #f87171;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      min-height: 100dvh;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Vazirmatn", Tahoma, sans-serif;
      background:
        radial-gradient(circle at 20% 0%, rgba(132, 204, 22, 0.18) 0%, transparent 48%),
        radial-gradient(circle at 85% 90%, rgba(101, 163, 13, 0.14) 0%, transparent 45%),
        var(--bg-0);
      color: var(--text);
      padding: 18px 14px calc(96px + env(safe-area-inset-bottom, 0px));
      line-height: 1.6;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(163, 230, 53, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(163, 230, 53, 0.04) 1px, transparent 1px);
      background-size: 36px 36px;
      pointer-events: none;
      z-index: 0;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 680px;
      margin: 0 auto;
    }
    .status-hero {
      background: var(--card);
      border: 1px solid var(--border-hi);
      border-radius: 22px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 16px 44px rgba(0, 0, 0, 0.6);
    }
    .hero-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .hero-user {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .hero-logo {
      width: 48px;
      height: 48px;
      flex-shrink: 0;
    }
    .hero-logo svg { width: 100%; height: 100%; }
    .hero-name {
      font-size: 1.2rem;
      font-weight: 800;
      color: var(--text);
    }
    .hero-brand {
      font-size: 0.76rem;
      color: var(--neon);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      background: var(--neon-dim);
      border: 1px solid var(--border-hi);
      color: var(--neon);
    }
    .pill-off {
      background: rgba(248, 113, 113, 0.14);
      border-color: rgba(248, 113, 113, 0.4);
      color: var(--danger);
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }
    @media (min-width: 520px) {
      .stats-grid { grid-template-columns: repeat(4, 1fr); }
    }
    .stat-box {
      background: var(--card-inner);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 11px 12px;
    }
    .stat-label {
      font-size: 0.75rem;
      color: var(--muted);
      margin-bottom: 4px;
    }
    .stat-val {
      font-size: 0.96rem;
      font-weight: 800;
      color: var(--text);
    }
    .url-copy-box {
      background: #060b06;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 10px;
    }
    .url-text {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.8rem;
      color: #d7e8cf;
      direction: ltr;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }
    .copy-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 12px;
      padding: 9px 16px;
      cursor: pointer;
      font-size: 0.84rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.18s;
      flex-shrink: 0;
    }
    .copy-btn:hover {
      border-color: var(--neon);
      color: var(--neon);
      background: var(--neon-dim);
    }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 22px 4px 10px;
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--text);
    }
    .section-head .sub-meta {
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--muted);
    }
    .acc-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      margin-bottom: 12px;
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .acc-card.open {
      border-color: var(--border-hi);
    }
    .acc-header {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--text);
      padding: 16px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-family: inherit;
      text-align: right;
    }
    .acc-title-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .acc-title {
      font-size: 0.96rem;
      font-weight: 800;
    }
    .acc-count {
      font-size: 0.78rem;
      color: var(--muted);
    }
    .acc-arrow {
      font-size: 0.9rem;
      color: var(--muted);
      transition: transform 0.22s;
    }
    .acc-card.open .acc-arrow {
      transform: rotate(180deg);
      color: var(--neon);
    }
    .acc-body {
      display: none;
      padding: 0 18px 18px;
      border-top: 1px solid rgba(163, 230, 53, 0.1);
    }
    .acc-card.open .acc-body {
      display: block;
    }
    .client-desc {
      font-size: 0.82rem;
      color: var(--muted);
      margin: 12px 0 14px;
      line-height: 1.65;
    }
    .client-item {
      padding: 14px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .client-item:first-of-type { border-top: none; }
    .client-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    .client-name-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .client-name {
      font-size: 0.98rem;
      font-weight: 800;
      color: #fff;
    }
    .client-os {
      font-size: 0.76rem;
      color: var(--muted);
    }
    .tag-green {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--neon);
      background: rgba(163, 230, 53, 0.12);
      border: 1px solid rgba(163, 230, 53, 0.35);
    }
    .dl-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 11px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text);
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 600;
      transition: all 0.2s;
    }
    .dl-btn:hover {
      border-color: var(--neon);
      color: var(--neon);
    }
    .node-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 12px;
      background: var(--card-inner);
      border: 1px solid var(--border);
      margin-top: 8px;
    }
    .node-tag {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.86rem;
      font-weight: 700;
      color: var(--neon);
      direction: ltr;
    }
    .node-proto {
      font-size: 0.74rem;
      color: var(--muted);
    }
    .fab-refresh {
      position: fixed;
      bottom: 22px;
      left: 22px;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: #060a06;
      border: 1px solid var(--border-hi);
      color: var(--text);
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
      transition: all 0.2s;
    }
    .fab-refresh:hover {
      color: var(--neon);
      transform: rotate(90deg);
    }
    .toast {
      position: fixed;
      top: 18px;
      left: 50%;
      transform: translateX(-50%);
      background: #112211;
      border: 1px solid var(--neon);
      color: var(--neon);
      padding: 10px 20px;
      border-radius: 999px;
      font-size: 0.86rem;
      font-weight: 700;
      z-index: 100;
      display: none;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }

    /* ==================
       بهینه‌سازی رابط برای گوشی همراه و ویندوز
       ================== */
    .page-foot {
      position: relative;
      z-index: 1;
      max-width: 680px;
      margin: 18px auto 0;
      padding: 14px 16px;
      border-radius: 16px;
      background: var(--card);
      border: 1px dashed var(--border-hi);
      font-size: 0.82rem;
      color: var(--muted);
      text-align: center;
      line-height: 2;
      overflow-wrap: anywhere;
    }
    .page-foot a {
      color: var(--neon);
      font-weight: 800;
      text-decoration: none;
    }
    .page-foot a:hover { text-decoration: underline; }
    @media (max-width: 620px) {
      body { padding: 12px 10px calc(92px + env(safe-area-inset-bottom, 0px)); }
      .status-hero { padding: 16px; border-radius: 18px; }
      .hero-name { font-size: 1.05rem; }
      .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .acc-header { padding: 14px; }
      .acc-body { padding: 0 14px 16px; }
      .url-copy-box { flex-wrap: wrap; }
      .url-text {
        flex: 1 1 100%;
        white-space: normal;
        text-overflow: clip;
        overflow-wrap: anywhere;
        font-size: 0.74rem;
      }
      .url-copy-box .copy-btn { flex: 1 1 100%; justify-content: center; }
      .client-top { align-items: flex-start; }
      .node-row { flex-wrap: wrap; }
      .node-row .copy-btn { flex: 1 1 100%; justify-content: center; }
      .fab-refresh { width: 48px; height: 48px; font-size: 1.05rem; }
    }
${BASE_UI_CSS}
  </style>
</head>
<body>
  <div id="toast" class="toast"></div>

  <div class="container">
    <!-- کارت اصلی وضعیت کاربر -->
    <div class="status-hero">
      <div class="hero-top">
        <div class="hero-user">
          <div class="hero-logo">${SHIELD_LOGO_SVG}</div>
          <div>
            <div class="hero-name">${user.username}</div>
            <div class="hero-brand">${BRAND_UPPER} SUBSCRIPTION PORTAL</div>
          </div>
        </div>
        <span class="pill ${user.enabled ? '' : 'pill-off'}">
          ● ${user.enabled ? (user.startOnFirstUse && !user.firstConnectedAt ? 'شروع با اولین اتصال' : 'فعال و آنلاین') : 'غیرفعال'}
        </span>
      </div>

      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-label">مصرف فعلی</div>
          <div class="stat-val">${formatBytes(usedBytes)}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">سهمیه حجم</div>
          <div class="stat-val">${limitGb > 0 ? `${limitGb} GB (${usagePercent}%)` : '∞ نامحدود'}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">تعداد نود در ساب</div>
          <div class="stat-val">${totalNodes} نود (${BRAND_NAME})</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">وضعیت انقضا</div>
          <div class="stat-val">${expireLabel}</div>
        </div>
      </div>

      <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px;">لینک مستقیم صفحه وضعیت و اشتراک شما:</div>
      <div class="url-copy-box">
        <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک اشتراک هوشمند کپی شد')">📋 کپی ساب‌لینک</button>
        <div class="url-text">${baseSubUrl}</div>
      </div>
    </div>

    <!-- محدوده نودها -->
    <div class="section-head">
      <span>🌐 محدودهٔ نودها</span>
      <span class="sub-meta">همه نودها (${totalNodes} نود با فرمت number+${BRAND_NAME})</span>
    </div>
    <div class="acc-card" id="accScope">
      <button type="button" class="acc-header" onclick="toggleAcc('accScope')">
        <div class="acc-title-wrap">
          <span class="acc-title">فقط بخشی از نودها را می‌خواهید؟</span>
          <span class="acc-count">4 گزینه · ${totalNodes} نود در کل</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">می‌توانید تعداد نودهای خروجی یا محدوده نودها را در لینک اشتراک خود فیلتر کنید:</p>
        <div class="client-item">
          <div class="client-top">
            <span class="client-name">همه نودهای کاربر (${totalNodes} نود)</span>
            <span class="tag-green">پیش‌فرض کاربر</span>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
        </div>
        <div class="client-item">
          <div class="client-top">
            <span class="client-name">۱۰ نود اول (1+${BRAND_NAME} تا 10+${BRAND_NAME})</span>
            <span class="tag-green">سبک و سریع</span>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?limit=10', 'کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?limit=10</div>
          </div>
        </div>
        <div class="client-item">
          <div class="client-top">
            <span class="client-name">فقط نودهای لبه CDN</span>
            <span class="tag-green">Multi-Location</span>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?scope=edge', 'کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?scope=edge</div>
          </div>
        </div>
        <div class="client-item">
          <div class="client-top">
            <span class="client-name">فقط سرور اصلی (بدون CDN)</span>
            <span class="tag-green">Direct Origin</span>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?scope=origin', 'کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?scope=origin</div>
          </div>
        </div>
      </div>
    </div>

    <!-- لوکیشن‌ها -->
    <div class="section-head">
      <span>🌐 لوکیشن‌ها</span>
      <span class="sub-meta">هر کشور یک سابلینک جدا</span>
    </div>
    <div class="acc-card" id="accLocations">
      <button type="button" class="acc-header" onclick="toggleAcc('accLocations')">
        <div class="acc-title-wrap">
          <span class="acc-title">سابلینک لوکیشن‌محور</span>
          <span class="acc-count">${locationsList.length} لوکیشن</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">با استفاده از هر لینک، مسیر خروجی روی همان منطقه تنظیم می‌شود:</p>
        ${locationsList
          .map(
            loc => `
          <div class="client-item">
            <div class="client-top">
              <span class="client-name">${loc.title}</span>
              <span class="tag-green">${loc.code}</span>
            </div>
            <div class="url-copy-box">
              <button type="button" class="copy-btn" onclick="copyText('${loc.url}', 'لینک لوکیشن ${loc.code} کپی شد')">📋</button>
              <div class="url-text">${loc.url}</div>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>

    <!-- سابلینک اختصاصی هر کلاینت -->
    <div class="section-head">
      <span>🛡️ سابلینک اختصاصی هر کلاینت</span>
      <span class="sub-meta">16 کلاینت در 5 خانواده</span>
    </div>

    <!-- شروع سریع -->
    <div class="acc-card open" id="accQuickStart">
      <button type="button" class="acc-header" onclick="toggleAcc('accQuickStart')">
        <div class="acc-title-wrap">
          <span class="acc-title">شروع سریع</span>
          <span class="acc-count">1 کلاینت</span>
          <span class="tag-green">پیشنهادی</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">یک لینک برای همه‌چیز؛ سریع‌ترین نود بر اساس پینگ، مناسب هر کلاینتی.</p>
        <div class="client-top">
          <div class="client-name-row">
            <span class="client-name">اتصال هوشمند</span>
            <span class="client-os">همه پلتفرم‌ها</span>
          </div>
          <span class="tag-green">اتصال هوشمند (همه نودها × همه پروتکل‌ها)</span>
        </div>
        <div class="url-copy-box">
          <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'سابلینک هوشمند کپی شد')">📋</button>
          <div class="url-text">${baseSubUrl}</div>
        </div>
        <div style="font-size:0.78rem;color:var(--muted);margin-top:8px;">سریع‌ترین نود بر اساس پینگ واقعی؛ مناسب شروع سریع.</div>
      </div>
    </div>

    <!-- خانواده 1: Xray / Base64 -->
    <div class="acc-card open" id="accXray">
      <button type="button" class="acc-header" onclick="toggleAcc('accXray')">
        <div class="acc-title-wrap">
          <span class="acc-title">خانواده Xray / متن ساده — Base64</span>
          <span class="acc-count">7 کلاینت</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">v2rayNG، Exclusive، Amnezia، Streisand، Shadowrocket، V2Box و FoXray سابلینک Base64 (یا متن ساده) می‌خوانند.</p>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">v2rayNG</span>
              <span class="client-os">Android</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://github.com/2dust/v2rayNG/releases" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک v2rayNG کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
          <div style="font-size:0.78rem;color:var(--muted);margin-top:6px;">پرکاربردترین کلاینت اندروید؛ فرگمنت، sni و vless را کامل پشتیبانی می‌کند.</div>
        </div>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">Exclusive</span>
              <span class="client-os">Android</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://github.com/GFW-knocker/MahsaNG/releases" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک Exclusive کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
          <div style="font-size:0.78rem;color:var(--muted);margin-top:6px;">کلاینت اندروید؛ از سابلینک استاندارد Base64 استفاده می‌کند.</div>
        </div>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">Amnezia VPN</span>
              <span class="client-os">Android · iOS · دسکتاپ</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://amnezia.org/en/downloads" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک Amnezia کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
        </div>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">Streisand</span>
              <span class="client-os">iOS · macOS</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://apps.apple.com/app/streisand/id6450534064" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک Streisand کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
        </div>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">Shadowrocket</span>
              <span class="client-os">iOS</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://apps.apple.com/app/shadowrocket/id932747118" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک Shadowrocket کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
        </div>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">V2Box</span>
              <span class="client-os">Android · iOS</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://apps.apple.com/app/v2box-v2ray-client/id6446814690" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک V2Box کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
        </div>

        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">v2rayN / Nekoray</span>
              <span class="client-os">Windows · Linux · macOS</span>
              <span class="tag-green">Base64 (V2Ray)</span>
            </div>
            <a class="dl-btn" href="https://github.com/2dust/v2rayN/releases" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}', 'لینک v2rayN کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- خانواده 2: sing-box — JSON -->
    <div class="acc-card" id="accSingbox">
      <button type="button" class="acc-header" onclick="toggleAcc('accSingbox')">
        <div class="acc-title-wrap">
          <span class="acc-title">خانواده sing-box — JSON</span>
          <span class="acc-count">5 کلاینت</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">مناسب Hiddify، Sing-box (نسخه 1.12 به بالا)، Karing، NekoBox و Exclave:</p>
        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">Hiddify / Sing-box</span>
              <span class="client-os">همه پلتفرم‌ها</span>
              <span class="tag-green">JSON (Sing-box)</span>
            </div>
            <a class="dl-btn" href="https://github.com/hiddify/hiddify-app/releases" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?target=singbox', 'لینک Sing-box کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?target=singbox</div>
          </div>
        </div>
      </div>
    </div>

    <!-- خانواده 3: Clash / Mihomo — فقط YAML -->
    <div class="acc-card" id="accClash">
      <button type="button" class="acc-header" onclick="toggleAcc('accClash')">
        <div class="acc-title-wrap">
          <span class="acc-title">خانواده Clash / Mihomo — فقط YAML</span>
          <span class="acc-count">2 کلاینت</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">مناسب Clash Meta for Android (CMFA)، Clash Verge Rev، FlClash و Stash:</p>
        <div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">Clash Meta / Verge / FlClash</span>
              <span class="client-os">Android · Windows · macOS</span>
              <span class="tag-green">YAML (Mihomo)</span>
            </div>
            <a class="dl-btn" href="https://github.com/MetaCubeX/ClashMetaForAndroid/releases" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?target=clash', 'لینک Clash کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?target=clash</div>
          </div>
        </div>
        ${
          user.config?.jk === 'yes'
            ? `<div class="client-item">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">CLASH زنجیره اینترنت خانگی</span>
              <span class="client-os">Mihomo 1.19.25+</span>
              <span class="tag-green">Residential IP</span>
            </div>
          </div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?target=vg', 'لینک CLASH خانگی کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?target=vg</div>
          </div>
        </div>`
            : ''
        }
      </div>
    </div>

    <!-- خانواده 4: هسته‌ها و ابزارها -->
    <div class="acc-card" id="accTools">
      <button type="button" class="acc-header" onclick="toggleAcc('accTools')">
        <div class="acc-title-wrap">
          <span class="acc-title">هسته‌ها و ابزارها (Surge / QuanX / Loon)</span>
          <span class="acc-count">3 کلاینت</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <div class="client-item">
          <div class="client-top"><span class="client-name">Surge</span><span class="tag-green">INI</span></div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?target=surge', 'لینک Surge کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?target=surge</div>
          </div>
        </div>
        <div class="client-item">
          <div class="client-top"><span class="client-name">Quantumult X</span><span class="tag-green">QuanX</span></div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?target=quanx', 'لینک Quantumult X کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?target=quanx</div>
          </div>
        </div>
        <div class="client-item">
          <div class="client-top"><span class="client-name">Loon</span><span class="tag-green">Loon</span></div>
          <div class="url-copy-box">
            <button type="button" class="copy-btn" onclick="copyText('${baseSubUrl}?target=loon', 'لینک Loon کپی شد')">📋</button>
            <div class="url-text">${baseSubUrl}?target=loon</div>
          </div>
        </div>
      </div>
    </div>

    <!-- سابلینک به تفکیک پروتکل و ترنسپورت -->
    <div class="section-head">
      <span>🔗 سابلینک به تفکیک پروتکل و ترنسپورت</span>
      <span class="sub-meta">${protoCombos.length} ترکیب</span>
    </div>
    <div class="acc-card" id="accCombos">
      <button type="button" class="acc-header" onclick="toggleAcc('accCombos')">
        <div class="acc-title-wrap">
          <span class="acc-title">لیست ترکیب‌های نود × پروتکل</span>
          <span class="acc-count">${protoCombos.length} لینک</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        ${protoCombos
          .map(
            c => `
          <div class="client-item">
            <div class="client-top">
              <span class="client-name">${c.title}</span>
              <span class="tag-green">${c.badge}</span>
            </div>
            <div class="url-copy-box">
              <button type="button" class="copy-btn" onclick="copyText('${c.url}', 'کپی شد')">📋</button>
              <div class="url-text">${c.url}</div>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>

    <!-- لیست تکی نودهای خروجی با فرمت number+miliconfig -->
    <div class="section-head">
      <span>⚡ نودها</span>
      <span class="sub-meta">${totalNodes} از ${totalNodes} آنلاین · نام‌گذاری number+${BRAND_NAME}</span>
    </div>
    <div class="acc-card open" id="accNodes">
      <button type="button" class="acc-header" onclick="toggleAcc('accNodes')">
        <div class="acc-title-wrap">
          <span class="acc-title">لیست کانفیگ‌های خروجی (1+${BRAND_NAME} تا ${totalNodes}+${BRAND_NAME})</span>
          <span class="acc-count">${totalNodes} کانفیگ</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <div style="margin:12px 0;">
          <button type="button" class="copy-btn" style="width:100%;justify-content:center;" onclick="copyAllNodes()">
            📋 کپی یکجای همه ${totalNodes} کانفیگ (1+${BRAND_NAME} تا ${totalNodes}+${BRAND_NAME})
          </button>
        </div>
        <div id="nodesContainer"></div>
      </div>
    </div>
  </div>

  <div class="page-foot">
    ❓ سؤال یا مشکلی دارید؟ پشتیبانی ${BRAND_NAME} در ${SUPPORT_CHANNEL_LABEL} پاسخگوی شماست:
    <a href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">${SUPPORT_CHANNEL_URL}</a>
  </div>

  <button type="button" class="fab-refresh" onclick="window.location.reload()" title="بروزرسانی وضعیت">⇄</button>

  <script>
    var ALL_NODES = ${safeNodesJson};

    function showToast(msg) {
      var t = document.getElementById('toast');
      if (!t) return;
      t.textContent = msg;
      t.style.display = 'block';
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(function() {
        t.style.display = 'none';
      }, 2500);
    }

    function copyText(text, msg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
          showToast(msg || 'کپی شد');
        });
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(msg || 'کپی شد');
      }
    }

    function copyAllNodes() {
      copyText(ALL_NODES.join('\\n'), 'همه کانفیگ‌ها کپی شدند');
    }

    function toggleAcc(id) {
      var el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    }

    function renderNodes() {
      var container = document.getElementById('nodesContainer');
      if (!container) return;
      var html = '';
      for (var i = 0; i < ALL_NODES.length; i++) {
        var link = ALL_NODES[i];
        var hashIdx = link.indexOf('#');
        var name = hashIdx > -1 ? decodeURIComponent(link.substring(hashIdx + 1)) : ((i + 1) + '+${BRAND_NAME}');
        var proto = link.split('://')[0].toUpperCase();
        html += '<div class="node-row">' +
          '<div><div class="node-tag">' + name + '</div><div class="node-proto">' + proto + ' · Cloudflare Edge</div></div>' +
          '<button type="button" class="copy-btn" onclick="copyNodeByIndex(' + i + ')">📋 کپی کانفیگ</button>' +
          '</div>';
      }
      container.innerHTML = html;
    }

    function copyNodeByIndex(idx) {
      var link = ALL_NODES[idx];
      if (!link) return;
      copyText(link, 'کانفیگ ' + (idx + 1) + '+${BRAND_NAME} کپی شد');
    }

    renderNodes();
  </script>
</body>
</html>`;
}


// --- MODULE: src/ui/adminHtml.js ---
// ============================================================================
// miliconfig v3.1 - مرکز کنترل مدیریت (Admin Control Center)
// طراحی ۱۰۰٪ مطابق تصاویر 1000050097.png، 1000050085.jpg و 1000050137.jpg
// ============================================================================


function renderAdminDashboardHtml(initialData = {}) {
  const safeInitialJson = JSON.stringify({
    brand: BRAND_NAME,
    version: VERSION,
    defaults: CONFIG_DEFAULTS,
    presets: USER_PRESETS,
    config: initialData.config || CONFIG_DEFAULTS,
    users: initialData.users || [],
    diagnostics: initialData.diagnostics || {},
    adminPath: initialData.adminPath || ''
  }).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="${VIEWPORT_META}">
  <meta name="theme-color" content="${THEME_COLOR_META}">
  <title>داشبورد مدیریت — ${BRAND_UPPER} CONTROL CENTER</title>
  <link rel="icon" href="${FAVICON_DATA_URI}">
  <style>
    :root {
      --bg-0: #060b06;
      --bg-1: #0b140b;
      --card: rgba(14, 24, 14, 0.88);
      --card-2: rgba(10, 18, 10, 0.92);
      --card-hover: rgba(20, 35, 20, 0.94);
      --border: rgba(163, 230, 53, 0.16);
      --border-hi: rgba(181, 255, 77, 0.45);
      --neon: #b5ff4d;
      --neon-2: #84cc16;
      --neon-soft: rgba(181, 255, 77, 0.13);
      --text: #f3f8f0;
      --muted: #8fa686;
      --danger: #f87171;
      --warn: #fbbf24;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      min-height: 100dvh;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Vazirmatn", Tahoma, sans-serif;
      background:
        radial-gradient(circle at 12% 25%, rgba(132, 204, 22, 0.16) 0%, transparent 40%),
        radial-gradient(circle at 88% 10%, rgba(101, 163, 13, 0.12) 0%, transparent 40%),
        var(--bg-0);
      color: var(--text);
      overflow-x: hidden;
      line-height: 1.55;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(163, 230, 53, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(163, 230, 53, 0.035) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: 0;
    }
    .app-shell {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 270px 1fr;
      gap: 16px;
      max-width: 1600px;
      margin: 0 auto;
      padding: 14px;
      min-height: 100vh;
      min-height: 100dvh;
    }
    @media (max-width: 1024px) {
      .app-shell {
        grid-template-columns: 1fr;
        padding-bottom: 92px;
      }
      .sidebar {
        display: none;
      }
      .mobile-bottom-nav {
        display: flex !important;
      }
    }

    /* سایدبار راست مطابق تصویر 1000050097.png */
    .sidebar {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 22px;
      padding: 18px 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 28px);
      height: calc(100dvh - 28px);
      position: sticky;
      top: 14px;
      backdrop-filter: blur(16px);
    }
    .sb-brand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 8px 16px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 12px;
    }
    .sb-brand-text {
      text-align: left;
      direction: ltr;
    }
    .sb-brand-title {
      font-size: 1.15rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      color: var(--text);
    }
    .sb-brand-sub {
      font-size: 0.68rem;
      color: var(--neon);
      letter-spacing: 0.14em;
    }
    .sb-logo {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
    }
    .sb-logo svg { width: 100%; height: 100%; }

    .sb-group-title {
      font-size: 0.75rem;
      color: var(--muted);
      padding: 10px 10px 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sb-item {
      width: 100%;
      background: transparent;
      border: 1px solid transparent;
      color: var(--text);
      padding: 10px 12px;
      border-radius: 13px;
      font-family: inherit;
      font-size: 0.88rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
      transition: all 0.18s;
      text-align: right;
    }
    .sb-item:hover {
      background: rgba(163, 230, 53, 0.08);
      border-color: var(--border);
    }
    .sb-item.active {
      background: linear-gradient(90deg, rgba(163, 230, 53, 0.16), rgba(163, 230, 53, 0.28));
      border-color: var(--border-hi);
      color: var(--neon);
      box-shadow: inset -3px 0 0 var(--neon);
    }
    .sb-badge {
      background: rgba(163, 230, 53, 0.16);
      border: 1px solid var(--border-hi);
      color: var(--neon);
      border-radius: 999px;
      padding: 1px 8px;
      font-size: 0.73rem;
      font-weight: 800;
    }

    .sb-footer {
      border-top: 1px solid var(--border);
      padding-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .clock-card {
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 10px;
      text-align: center;
    }
    .clock-time {
      font-family: "JetBrains Mono", monospace;
      font-size: 1.28rem;
      font-weight: 800;
      color: var(--text);
      letter-spacing: 0.06em;
    }
    .clock-date {
      font-size: 0.72rem;
      color: var(--muted);
      margin-top: 2px;
    }
    .sb-status-pill {
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 11px;
      padding: 8px 12px;
      font-size: 0.78rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      color: var(--text);
    }
    .dot-online {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--neon);
      box-shadow: 0 0 8px var(--neon);
    }
    .sb-btn {
      width: 100%;
      padding: 8px 12px;
      border-radius: 11px;
      background: rgba(163, 230, 53, 0.1);
      border: 1px solid var(--border);
      color: var(--neon);
      font-family: inherit;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      transition: all 0.18s;
    }
    .sb-btn:hover { border-color: var(--neon); background: rgba(163, 230, 53, 0.18); }
    .sb-btn-logout {
      background: var(--card-2);
      color: var(--muted);
    }

    /* نوار ناوبری پایین موبایل مطابق تصویر 1000050085.jpg */
    .mobile-bottom-nav {
      display: none;
      position: fixed;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background: rgba(10, 18, 10, 0.96);
      border: 1px solid var(--border-hi);
      border-radius: 20px;
      padding: 6px;
      z-index: 90;
      justify-content: space-around;
      backdrop-filter: blur(16px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8);
    }
    .mob-nav-btn {
      flex: 1;
      background: transparent;
      border: none;
      color: var(--muted);
      padding: 8px 4px;
      border-radius: 14px;
      font-family: inherit;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }
    .mob-nav-btn.active {
      background: rgba(163, 230, 53, 0.18);
      color: var(--neon);
      border: 1px solid var(--border-hi);
    }

    /* محتوای اصلی */
    .main-area {
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-width: 0;
    }
    .topbar {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    .topbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .page-title {
      font-size: 1.15rem;
      font-weight: 900;
    }
    .topbar-left {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .top-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 999px;
      background: var(--card-2);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
    }
    .top-pill.live {
      background: rgba(163, 230, 53, 0.13);
      border-color: var(--border-hi);
      color: var(--neon);
    }

    /* بنر هیرو داشبورد مطابق تصویر 1000050097.png */
    .hero-card {
      background: linear-gradient(135deg, rgba(16, 30, 16, 0.94) 0%, rgba(10, 18, 10, 0.94) 100%);
      border: 1px solid var(--border-hi);
      border-radius: 22px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      position: relative;
      overflow: hidden;
    }
    .hero-content {
      flex: 1;
      min-width: min(260px, 100%);
    }
    .hero-eyebrow {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      color: var(--muted);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .hero-heading {
      font-size: 1.45rem;
      font-weight: 900;
      color: #fff;
      margin-bottom: 8px;
    }
    .hero-sub {
      font-size: 0.86rem;
      color: var(--muted);
      max-width: 780px;
      margin-bottom: 16px;
    }
    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 13px;
      border-radius: 999px;
      background: rgba(8, 15, 8, 0.85);
      border: 1px solid var(--border);
      font-size: 0.78rem;
      color: #d9ecd0;
    }
    .hero-emblem {
      width: 78px;
      height: 78px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #d9ff80 0%, #9ef01a 55%, #4d7c0f 100%);
      box-shadow: 0 0 36px rgba(181, 255, 77, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.9rem;
      font-weight: 900;
      color: #071204;
      flex-shrink: 0;
    }

    /* ۶ کارت متریک بالا */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
    }
    @media (max-width: 1280px) {
      .metrics-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 640px) {
      .metrics-grid { grid-template-columns: repeat(2, 1fr); }
    }
    .metric-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 118px;
    }
    .metric-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .metric-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text);
    }
    .metric-icon {
      width: 30px;
      height: 30px;
      border-radius: 9px;
      background: rgba(163, 230, 53, 0.12);
      border: 1px solid var(--border);
      color: var(--neon);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
    }
    .metric-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: #fff;
      margin: 10px 0 4px;
    }
    .metric-foot {
      font-size: 0.73rem;
      color: var(--muted);
    }

    /* گریدهای میانی و پایینی داشبورد */
    .dash-row-2 {
      display: grid;
      grid-template-columns: 1.8fr 1fr;
      gap: 14px;
    }
    .dash-row-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .dash-row-bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    @media (max-width: 960px) {
      .dash-row-2, .dash-row-3, .dash-row-bottom {
        grid-template-columns: 1fr;
      }
    }
    .panel-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 18px;
    }
    .panel-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }
    .panel-title {
      font-size: 1rem;
      font-weight: 800;
      color: #fff;
    }
    .panel-sub {
      font-size: 0.76rem;
      color: var(--muted);
      margin-top: 2px;
    }
    .kv-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .kv-row {
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 9px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 0.8rem;
    }
    .kv-key { color: var(--muted); }
    .kv-val {
      font-family: "JetBrains Mono", monospace;
      color: var(--text);
      direction: ltr;
      text-align: left;
    }
    .donut-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 14px 0;
    }
    .donut-ring {
      width: 142px;
      height: 142px;
      border-radius: 50%;
      border: 14px solid var(--neon);
      box-shadow: 0 0 28px rgba(181, 255, 77, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* بخش کاربران مطابق تصویر 1000050137.jpg */
    .preset-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin: 14px 0;
    }
    @media (max-width: 820px) {
      .preset-grid { grid-template-columns: 1fr; }
    }
    .preset-card {
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 14px;
      cursor: pointer;
      transition: all 0.18s;
    }
    .preset-card.selected {
      background: rgba(163, 230, 53, 0.12);
      border-color: var(--neon);
      box-shadow: 0 0 22px rgba(181, 255, 77, 0.12);
    }
    .preset-title {
      font-size: 0.92rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 4px;
    }
    .preset-sub {
      font-size: 0.76rem;
      color: var(--muted);
      margin-bottom: 10px;
    }
    .preset-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .preset-tag {
      font-size: 0.7rem;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: #d6e8ce;
    }

    .quick-bar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }
    .mili-input, .mili-select, .mili-textarea {
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 10px 13px;
      color: var(--text);
      font-family: inherit;
      font-size: 0.86rem;
      outline: none;
      transition: border-color 0.18s;
    }
    .mili-input:focus, .mili-select:focus, .mili-textarea:focus {
      border-color: var(--neon);
    }
    .btn-neon {
      background: linear-gradient(135deg, #c8ff6b 0%, #84cc16 100%);
      color: #071204;
      border: none;
      border-radius: 13px;
      padding: 10px 18px;
      font-family: inherit;
      font-size: 0.88rem;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      box-shadow: 0 6px 20px rgba(163, 230, 53, 0.28);
      transition: all 0.18s;
    }
    .btn-neon:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 26px rgba(163, 230, 53, 0.42);
    }
    .btn-ghost {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 12px;
      padding: 8px 13px;
      font-family: inherit;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.18s;
    }
    .btn-ghost:hover {
      border-color: var(--neon);
      color: var(--neon);
    }
    .btn-danger {
      background: rgba(248, 113, 113, 0.1);
      border: 1px solid rgba(248, 113, 113, 0.35);
      color: var(--danger);
    }

    /* کارت‌های کاربران مطابق تصویر 1000050137.jpg */
    .users-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(288px, 100%), 1fr));
      gap: 14px;
      margin-top: 14px;
    }
    .user-card {
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: border-color 0.2s;
    }
    .user-card:hover { border-color: var(--border-hi); }
    .uc-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .uc-id-box {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .uc-avatar {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: rgba(163, 230, 53, 0.15);
      border: 1px solid var(--border-hi);
      color: var(--neon);
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .uc-name {
      font-size: 0.96rem;
      font-weight: 800;
      color: #fff;
    }
    .uc-uuid {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.7rem;
      color: var(--muted);
      direction: ltr;
    }
    .uc-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .uc-stats {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 0.78rem;
    }
    .uc-stat-line {
      display: flex;
      justify-content: space-between;
      color: var(--muted);
    }
    .uc-stat-line strong { color: var(--text); }
    .uc-gauge {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      border: 5px solid rgba(163, 230, 53, 0.25);
      border-top-color: var(--neon);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 0.72rem;
      color: var(--neon);
      flex-shrink: 0;
    }
    .uc-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 10px;
    }

    /* فرم تنظیمات و مودال کاربر جدید با تمام ۳۱ تنظیم پیش‌فرض کد */
    .form-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .form-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    @media (max-width: 720px) {
      .form-grid-2, .form-grid-3 { grid-template-columns: 1fr; }
    }
    .field-box {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .field-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: #d7e8cf;
    }
    .field-hint {
      font-size: 0.72rem;
      color: var(--muted);
    }
    .check-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 10px;
      background: var(--card-2);
      border: 1px solid var(--border);
      border-radius: 12px;
    }
    .check-label {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 0.84rem;
      cursor: pointer;
    }
    .check-label input {
      width: 17px;
      height: 17px;
      accent-color: var(--neon);
    }

    /* مودال ساخت/ویرایش کاربر */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(3, 7, 3, 0.82);
      backdrop-filter: blur(8px);
      z-index: 120;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .modal-backdrop.open { display: flex; }
    .modal-box {
      background: #0b140b;
      border: 1px solid var(--border-hi);
      border-radius: 22px;
      width: 100%;
      max-width: 880px;
      max-height: 90vh;
      max-height: 90dvh;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding: 22px;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85);
    }
    .modal-sec-title {
      font-size: 0.9rem;
      font-weight: 800;
      color: var(--neon);
      margin: 18px 0 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--border);
    }

    .view-section { display: none; }
    .view-section.active { display: flex; flex-direction: column; gap: 14px; }

    .toast-box {
      position: fixed;
      top: 18px;
      left: 50%;
      transform: translateX(-50%);
      background: #102110;
      border: 1px solid var(--neon);
      color: var(--neon);
      padding: 10px 22px;
      border-radius: 999px;
      font-size: 0.86rem;
      font-weight: 800;
      z-index: 200;
      display: none;
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.75);
    }

    /* ==================
       بهینه‌سازی رابط برای گوشی همراه و ویندوز
       ================== */
    .topbar-brand {
      font-size: 0.74rem;
      color: var(--muted);
      letter-spacing: 0.12em;
    }
    .modal-actions {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    /* منوی کشویی موبایل: دکمه همبرگری + پرده پشت منو */
    .menu-toggle { display: none; }
    .drawer-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(3, 7, 3, 0.72);
      backdrop-filter: blur(4px);
      z-index: 125;
    }
    @media (max-width: 1024px) {
      .app-shell {
        padding: 10px;
        gap: 12px;
        padding-bottom: calc(106px + env(safe-area-inset-bottom, 0px));
      }
      .topbar-brand { display: none; }
      /*
        این قاعده باید بعد از قاعده پایه .sidebar بیاید تا واقعاً اعمال شود؛
        در غیر این صورت (ترتیب قدیمی فایل) سایدبار روی موبایل هیچ‌وقت بسته نمی‌شد
        و مثل یک منوی فریزشده روی محتوا و تنظیمات می‌ماند.
        حالا سایدبار فقط به شکل کشویی (Drawer) و با دکمه «☰ منو» باز و بسته می‌شود.
      */
      .sidebar {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(300px, 88vw);
        height: 100dvh;
        border-radius: 22px 0 0 22px;
        padding: 16px 14px calc(16px + env(safe-area-inset-bottom, 0px));
        overflow-y: auto;
        overscroll-behavior: contain;
        z-index: 130;
        box-shadow: -18px 0 48px rgba(0, 0, 0, 0.7);
      }
      .sidebar.drawer-open { display: flex; }
      .drawer-backdrop.open { display: block; }
      .menu-toggle { display: inline-flex; }
      .hero-card { padding: 18px 16px; }
      .hero-heading { font-size: 1.18rem; }
      .hero-sub { font-size: 0.82rem; }
      .panel-card, .metric-card { padding: 14px; }
      .modal-backdrop { padding: 10px; align-items: flex-start; }
      .modal-box {
        padding: 16px;
        border-radius: 18px;
        max-height: calc(100dvh - 20px);
      }
      .users-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .metrics-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .metric-card { min-height: 0; }
      .metric-value { font-size: 1.2rem; }
      .top-pill { font-size: 0.75rem; padding: 8px 11px; }
      .hero-emblem { width: 56px; height: 56px; font-size: 1.35rem; }
      .donut-ring { width: 118px; height: 118px; border-width: 12px; }
      .kv-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
      }
      .uc-body { gap: 10px; }
      .check-grid { gap: 6px 14px; }
      .modal-actions { flex-direction: column-reverse; }
      .modal-actions > button { width: 100%; justify-content: center; }
    }
${BASE_UI_CSS}
  </style>
</head>
<body>
  <div id="toastBox" class="toast-box"></div>

  <div class="app-shell">
    <!-- سایدبار سمت راست دسکتاپ -->
    <aside class="sidebar">
      <div>
        <div class="sb-brand">
          <div class="sb-brand-text">
            <div class="sb-brand-title">${BRAND_UPPER}</div>
            <div class="sb-brand-sub">CLOUDFLARE D1 CONTROL</div>
          </div>
          <div class="sb-logo">${SHIELD_LOGO_SVG}</div>
        </div>

        <div class="sb-group-title"><span>نمای کلی</span><span>۱</span></div>
        <button type="button" class="sb-item active" data-view="dashboard" onclick="switchView('dashboard')">
          <span>⊞ داشبورد</span>
        </button>

        <div class="sb-group-title"><span>کاربران و نودها</span><span>۲</span></div>
        <button type="button" class="sb-item" data-view="users" onclick="switchView('users')">
          <span>👥 کاربران</span>
          <span class="sb-badge" id="sbUserCount">0</span>
        </button>
        <button type="button" class="sb-item" data-view="nodes" onclick="switchView('nodes')">
          <span>⚡ نودها و تست تاخیر</span>
          <span class="sb-badge" id="sbNodeCount">0</span>
        </button>

        <div class="sb-group-title"><span>شبکه و لبه</span><span>۱</span></div>
        <button type="button" class="sb-item" data-view="network" onclick="switchView('network')">
          <span>☁️ پروتکل‌ها و مسیریابی</span>
        </button>

        <div class="sb-group-title"><span>پنل و ظاهر</span><span>۱</span></div>
        <button type="button" class="sb-item" data-view="panel" onclick="switchView('panel')">
          <span>✎ مسیر و تبدیل اشتراک</span>
        </button>

        <div class="sb-group-title"><span>سیستم</span><span>۱</span></div>
        <button type="button" class="sb-item" data-view="system" onclick="switchView('system')">
          <span>⚙️ تنظیمات و دیتابیس D1</span>
        </button>
      </div>

      <div class="sb-footer">
        <div class="clock-card">
          <div class="clock-time" id="liveClock">00:00:00</div>
          <div class="clock-date" id="liveDate">در حال بارگذاری...</div>
        </div>
        <div class="sb-status-pill">
          <span class="dot-online"></span>
          <span id="sbD1StatusText">سیستم آنلاین است</span>
        </div>
        <a class="sb-btn" href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">🔗 ${SUPPORT_CHANNEL_LABEL}</a>
        <button type="button" class="sb-btn sb-btn-logout" onclick="window.location.href='/'">خروج از حساب</button>
      </div>
    </aside>

    <!-- ناحیه اصلی -->
    <main class="main-area">
      <!-- نوار بالا -->
      <header class="topbar">
        <div class="topbar-right">
          <button type="button" class="top-pill menu-toggle" onclick="toggleSidebarDrawer()" aria-label="باز و بسته کردن منو">☰ منو</button>
          <h1 class="page-title" id="topPageTitle">داشبورد</h1>
        </div>
        <div class="topbar-left">
          <span class="topbar-brand">${BRAND_UPPER} CONTROL CENTER</span>
          <span class="top-pill live"><span class="dot-online"></span> زنده</span>
          <button type="button" class="top-pill" onclick="switchView('users'); openUserModal(null);">+ کاربر جدید</button>
          <button type="button" class="top-pill" onclick="initD1Database()">🛡️ بررسی D1</button>
          <button type="button" class="top-pill" onclick="refreshAllData()" title="بروزرسانی">↻</button>
        </div>
      </header>

      <!-- ==================== ۱. نمای داشبورد ==================== -->
      <section id="view-dashboard" class="view-section active">
        <div class="hero-card">
          <div class="hero-content">
            <div class="hero-eyebrow">REAL-TIME NETWORK CONTROL</div>
            <div class="hero-heading">مرکز کنترل زیرساخت پروکسی ${BRAND_NAME} روی Cloudflare</div>
            <p class="hero-sub">
              کاربران دیتابیس D1، نودهای Cloudflare، هسته VLESS / Trojan / xhttp و سابلینک‌ها را با نام‌گذاری اختصاصی <strong>number+${BRAND_NAME}</strong> زنده و از یک‌جا مدیریت کنید.
            </p>
            <div class="hero-badges">
              <span class="hero-badge" id="hbUsers">👥 0 کاربر · 0 فعال</span>
              <span class="hero-badge" id="hbNodes">📦 نودهای خروجی: number+${BRAND_NAME}</span>
              <span class="hero-badge" id="hbReqs">⚡ 0 درخواست ثبت‌شده</span>
              <span class="hero-badge" id="hbD1">🛡️ دیتابیس D1 آماده</span>
              <span class="hero-badge" id="hbUptime">🕒 آپ‌تایم 1 دقیقه</span>
            </div>
          </div>
          <div class="hero-emblem">M</div>
        </div>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-top"><span class="metric-label">کل کاربران</span><span class="metric-icon">👥</span></div>
            <div class="metric-value" id="mTotalUsers">0</div>
            <div class="metric-foot" id="mUsersSub">0 فعال · 0 غیرفعال</div>
          </div>
          <div class="metric-card">
            <div class="metric-top"><span class="metric-label">مصرف کل</span><span class="metric-icon">📈</span></div>
            <div class="metric-value" id="mTotalTraffic">0 B</div>
            <div class="metric-foot" id="mLifetimeTraffic">مجموع عمر: 0 B</div>
          </div>
          <div class="metric-card">
            <div class="metric-top"><span class="metric-label">نودهای فعال</span><span class="metric-icon">📦</span></div>
            <div class="metric-value" id="mActiveNodes">31</div>
            <div class="metric-foot">فرمت خروجی: 1+${BRAND_NAME}</div>
          </div>
          <div class="metric-card">
            <div class="metric-top"><span class="metric-label">IP سالم Cloudflare</span><span class="metric-icon">🌐</span></div>
            <div class="metric-value" id="mHealthyIps">31</div>
            <div class="metric-foot">دامنه ترجیحی + استخر مستقیم CF</div>
          </div>
          <div class="metric-card">
            <div class="metric-top"><span class="metric-label">درخواست‌ها</span><span class="metric-icon">⚡</span></div>
            <div class="metric-value" id="mTotalReqs">0</div>
            <div class="metric-foot">ثبت‌شده در دیتابیس D1</div>
          </div>
          <div class="metric-card">
            <div class="metric-top"><span class="metric-label">آپ‌تایم سرویس</span><span class="metric-icon">🕒</span></div>
            <div class="metric-value" id="mUptime">آنلاین</div>
            <div class="metric-foot">Cloudflare Edge Global</div>
          </div>
        </div>

        <div class="dash-row-2">
          <div class="panel-card">
            <div class="panel-head">
              <div>
                <div class="panel-title">ترافیک شبکه و وضعیت کاربران</div>
                <div class="panel-sub">حجم عبوری و سابلینک‌های فعال روی لبه کلودفلر</div>
              </div>
              <span class="top-pill live">۲۴ ساعت</span>
            </div>
            <div id="dashTrafficSummary" style="padding:26px 12px;text-align:center;color:var(--muted);font-size:0.86rem;">
              آمار زنده کاربران و درخواست‌ها به صورت خودکار از دیتابیس D1 همگام‌سازی می‌شود.
            </div>
          </div>

          <div class="panel-card">
            <div class="panel-head">
              <div>
                <div class="panel-title">ترکیب زیرساخت</div>
                <div class="panel-sub">پروتکل کاربران و نوع نودها</div>
              </div>
            </div>
            <div class="donut-wrap">
              <div class="donut-ring">
                <div style="font-size:1.3rem;font-weight:900;color:#fff;" id="donutCenterCount">31</div>
                <div style="font-size:0.72rem;color:var(--muted);">نود در کاتالوگ</div>
              </div>
              <div style="font-size:0.78rem;color:var(--neon);margin-top:10px;">● نام‌گذاری: number+${BRAND_NAME}</div>
            </div>
          </div>
        </div>

        <div class="dash-row-3">
          <div class="panel-card">
            <div class="panel-head">
              <div><div class="panel-title">هسته پروکسی</div><div class="panel-sub">Cloudflare Worker + D1</div></div>
              <span class="top-pill live">● در حال اجرا</span>
            </div>
            <div class="kv-list">
              <div class="kv-row"><span class="kv-key">وضعیت هسته</span><span class="kv-val">Running (Zero Error 1101)</span></div>
              <div class="kv-row"><span class="kv-key">پروتکل‌ها</span><span class="kv-val" id="coreProtosVal">VLESS / TROJAN / XHTTP</span></div>
              <div class="kv-row"><span class="kv-key">ترنسپورت</span><span class="kv-val">WebSocket + xhttp + ECH</span></div>
              <div class="kv-row"><span class="kv-key">فرمت نودها</span><span class="kv-val">1+${BRAND_NAME}, 2+${BRAND_NAME}...</span></div>
              <div class="kv-row"><span class="kv-key">دیتابیس</span><span class="kv-val" id="coreDbMode">Cloudflare D1</span></div>
            </div>
          </div>

          <div class="panel-card">
            <div class="panel-head">
              <div><div class="panel-title">پرمصرف‌ترین کاربران</div><div class="panel-sub">بر اساس حجم مصرفی</div></div>
            </div>
            <div id="topUsersList" class="kv-list"></div>
          </div>

          <div class="panel-card">
            <div class="panel-head">
              <div><div class="panel-title">وضعیت Cloudflare و D1</div><div class="panel-sub">Worker و IPهای سالم</div></div>
            </div>
            <div class="kv-list">
              <div class="kv-row"><span class="kv-key">منطقه لبه (wk)</span><span class="kv-val" id="cfEdgeRegion">CF Direct</span></div>
              <div class="kv-row"><span class="kv-key">آدرس Worker</span><span class="kv-val" id="cfWorkerHost">-</span></div>
              <div class="kv-row"><span class="kv-key">وضعیت D1</span><span class="kv-val" id="cfD1Status">متصل و آماده</span></div>
              <div class="kv-row"><span class="kv-key">پروکسی خروجی (s)</span><span class="kv-val" id="cfOutboundProxy">مستقیم</span></div>
            </div>
          </div>
        </div>

        <div class="dash-row-bottom">
          <div class="panel-card">
            <div class="panel-head">
              <div><div class="panel-title">آخرین رویدادها</div><div class="panel-sub">گزارش مدیریتی D1</div></div>
            </div>
            <div id="auditLogsList" class="kv-list"></div>
          </div>
          <div class="panel-card">
            <div class="panel-head">
              <div><div class="panel-title">دسترسی سریع مدیر</div><div class="panel-sub">مدیریت کاربران و سابلینک اصلی</div></div>
            </div>
            <div class="kv-list">
              <button type="button" class="btn-neon" style="width:100%;justify-content:center;" onclick="switchView('users'); openUserModal(null);">
                + ساخت کاربر جدید (با تمام تنظیمات پیش‌فرض کد + نام کاربر)
              </button>
              <button type="button" class="btn-ghost" style="width:100%;justify-content:center;" onclick="copyMainAdminSub()">
                📋 کپی ساب‌لینک اصلی مدیر (1+${BRAND_NAME} ...)
              </button>
              <a class="btn-ghost" style="width:100%;justify-content:center;" href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">
                🔗 ${SUPPORT_CHANNEL_LABEL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== ۲. نمای کاربران (مطابق 1000050137.jpg) ==================== -->
      <section id="view-users" class="view-section">
        <div class="panel-card">
          <div class="panel-head">
            <div>
              <div class="panel-title">کاربران</div>
              <div class="panel-sub">ساخت پیشرفته، مصرف، سهمیه، تعداد نود در ساب و صفحه وضعیت اختصاصی هر کاربر</div>
            </div>
            <button type="button" class="btn-neon" onclick="openUserModal(null)">+ کاربر جدید (پیشرفته)</button>
          </div>

          <!-- ساخت سریع کاربر مطابق تصویر 1000050137.jpg -->
          <div style="border-top:1px solid var(--border);padding-top:14px;margin-top:8px;">
            <div style="font-size:0.92rem;font-weight:800;color:#fff;">ساخت سریع کاربر — حالت را انتخاب کنید</div>
            <div style="font-size:0.76rem;color:var(--muted);margin-bottom:12px;">
              هر کارت یک پریست واقعی + تمام تنظیمات پیش‌فرض کد پایه است؛ صفحه وضعیت و لینک همه کلاینت‌ها با نام‌گذاری <strong>number+${BRAND_NAME}</strong> همان لحظه ساخته می‌شود.
            </div>

            <div class="quick-bar">
              <input type="text" id="quickUsername" class="mili-input" placeholder="نام کاربری (مثلاً ali یا خالی = خودکار)" style="flex:1 1 200px;min-width:0;" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
              <div style="display:flex;align-items:center;gap:6px;">
                <label style="font-size:0.78rem;color:var(--muted);">تعداد نود در ساب:</label>
                <input type="number" id="quickSubNodeCount" class="mili-input" value="50" min="0" max="500" style="width:88px;text-align:center;">
              </div>
              <label class="check-label" style="background:var(--card-2);padding:8px 12px;border-radius:12px;border:1px solid var(--border);">
                <input type="checkbox" id="quickUsePanelDefaults" checked>
                <span>پیش‌فرض پنل</span>
              </label>
              <button type="button" class="btn-neon" onclick="quickCreateUser()">✦ ساخت همین حالت</button>
            </div>

            <div class="preset-grid" id="presetCardsContainer"></div>
          </div>

          <!-- فیلتر و جستجوی کاربران -->
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:14px;padding-top:12px;border-top:1px solid var(--border);">
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <button type="button" class="btn-ghost active" onclick="setFilterStatus('all')">همه</button>
              <button type="button" class="btn-ghost" onclick="setFilterStatus('active')">فعال</button>
              <button type="button" class="btn-ghost" onclick="setFilterStatus('disabled')">غیرفعال</button>
            </div>
            <input type="text" id="userSearchInput" class="mili-input" placeholder="🔍 جستجوی نام کاربر یا UUID..." oninput="renderUsersGrid()" style="flex:1 1 220px;min-width:0;" autocomplete="off" autocapitalize="off" spellcheck="false">
          </div>

          <!-- لیست کارت‌های کاربران -->
          <div class="users-grid" id="usersGridContainer"></div>
        </div>
      </section>

      <!-- ==================== ۳. نمای نودها و تست تاخیر ==================== -->
      <section id="view-nodes" class="view-section">
        <div class="panel-card">
          <div class="panel-head">
            <div>
              <div class="panel-title">مدیریت نودهای ترجیحی و تست تاخیر داخلی</div>
              <div class="panel-sub">تمامی نودها در خروجی کلاینت‌ها به صورت خودکار با نام 1+${BRAND_NAME}، 2+${BRAND_NAME} و ... نام‌گذاری می‌شوند</div>
            </div>
          </div>

          <div class="form-grid-2">
            <div class="field-box">
              <label class="field-label">لیست IP / دامنه ترجیحی سفارشی (yx):</label>
              <textarea id="cfg_yx" class="mili-textarea" rows="4" placeholder="1.1.1.1:443#Node1,162.158.228.87:443#Node2" style="direction:ltr;"></textarea>
              <span class="field-hint">فرمت: IP:Port#Name با کاما جدا شوند. در خروجی ساب با فرمت number+${BRAND_NAME} شماره‌گذاری می‌شوند.</span>
            </div>
            <div class="field-box">
              <label class="field-label">آدرس URL منبع IP ترجیحی (yxURL):</label>
              <input type="text" id="cfg_yxURL" class="mili-input" placeholder="https://example.com/ips.txt" style="direction:ltr;">
              <label class="field-label" style="margin-top:8px;">تعداد پیش‌فرض نودها در ساب‌لینک (subNodeCount):</label>
              <input type="number" id="cfg_subNodeCount" class="mili-input" value="50" min="0" max="500">
            </div>
          </div>

          <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
            <button type="button" class="btn-neon" onclick="savePanelSettings()">▣ ذخیره تنظیمات نودها</button>
            <button type="button" class="btn-ghost" onclick="generateRandomCfIps()">🎲 تولید ۱۰ آی‌پی تصادفی Cloudflare و تست پینگ</button>
          </div>

          <div id="pingResultsBox" class="kv-list" style="margin-top:14px;"></div>
        </div>
      </section>

      <!-- ==================== ۴. نمای شبکه و لبه ==================== -->
      <section id="view-network" class="view-section">
        <div class="panel-card">
          <div class="panel-head">
            <div>
              <div class="panel-title">پیکربندی پروتکل‌ها، منطقه، پروکسی خروجی و ECH</div>
              <div class="panel-sub">تمامی تنظیمات پیش‌فرض کد اصلی CFnew v3.1 (اعمال فوری بدون نیاز به استقرار مجدد)</div>
            </div>
            <button type="button" class="btn-neon" onclick="savePanelSettings()">▣ ذخیره تنظیمات شبکه</button>
          </div>

          <div class="modal-sec-title">۱. انتخاب پروتکل‌های فعال</div>
          <div class="check-grid">
            <label class="check-label"><input type="checkbox" id="cfg_ev" checked> <span>فعال‌سازی VLESS (ev)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_et"> <span>فعال‌سازی Trojan (et)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ex"> <span>فعال‌سازی xhttp (ex)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ech"> <span>فعال‌سازی ECH (ech)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_jk"> <span>زنجیره اینترنت خانگی (jk)</span></label>
          </div>

          <div class="modal-sec-title">۲. تنظیمات منطقه، ProxyIP و پروکسی خروجی (SOCKS5 / HTTP / HTTPS)</div>
          <div class="form-grid-3">
            <div class="field-box">
              <label class="field-label">تعیین منطقه (wk):</label>
              <select id="cfg_wk" class="mili-select">
                <option value="">🌐 اتصال مستقیم رسمی (پیش‌فرض)</option>
                <option value="HK">🇭🇰 هنگ‌کنگ (HK)</option>
                <option value="SG">🇸🇬 سنگاپور (SG)</option>
                <option value="JP">🇯🇵 ژاپن (JP)</option>
                <option value="US">🇺🇸 آمریکا (US)</option>
                <option value="KR">🇰🇷 کره‌جنوبی (KR)</option>
                <option value="DE">🇩🇪 آلمان (DE)</option>
                <option value="SE">🇸🇪 سوئد (SE)</option>
                <option value="NL">🇳🇱 هلند (NL)</option>
                <option value="FI">🇫🇮 فنلاند (FI)</option>
                <option value="GB">🇬🇧 بریتانیا (GB)</option>
              </select>
            </div>
            <div class="field-box">
              <label class="field-label">ProxyIP سفارشی (p):</label>
              <input type="text" id="cfg_p" class="mili-input" placeholder="ProxyIP.DE.CMLiussss.net:443" style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">پروکسی خروجی SOCKS5/HTTP (s):</label>
              <input type="text" id="cfg_s" class="mili-input" placeholder="user:pass@host:port یا http://..." style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">روش خروج (qj):</label>
              <select id="cfg_qj" class="mili-select">
                <option value="">اولویت با پروکسی (پیش‌فرض)</option>
                <option value="no">اولویت با اتصال مستقیم، در صورت خطا پروکسی (no)</option>
                <option value="only">فقط پروکسی، بدون بازگشت به مستقیم (only)</option>
              </select>
            </div>
            <div class="field-box">
              <label class="field-label">رمز عبور سفارشی Trojan (tp):</label>
              <input type="text" id="cfg_tp" class="mili-input" placeholder="خالی = استفاده از UUID" style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">TLS ALPN (alpn):</label>
              <select id="cfg_alpn" class="mili-select">
                <option value="">پیش‌فرض (خالی)</option>
                <option value="h3">h3</option>
                <option value="h2">h2</option>
                <option value="http/1.1">http/1.1</option>
                <option value="h3,h2">h3,h2</option>
                <option value="h2,http/1.1">h2,http/1.1</option>
                <option value="h3,h2,http/1.1">h3,h2,http/1.1</option>
              </select>
            </div>
            <div class="field-box">
              <label class="field-label">سرور DNS سفارشی (customDNS):</label>
              <input type="text" id="cfg_customDNS" class="mili-input" value="https://223.5.5.5/dns-query" style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">دامنه ECH سفارشی (customECHDomain):</label>
              <input type="text" id="cfg_customECHDomain" class="mili-input" value="cloudflare-ech.com" style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">کنترل TLS (dkby):</label>
              <select id="cfg_dkby" class="mili-select">
                <option value="no">پیش‌فرض (حفظ همه گره‌ها)</option>
                <option value="yes">فقط گره‌های TLS (yes)</option>
              </select>
            </div>
            <div class="field-box">
              <label class="field-label">تطبیق هوشمند منطقه (rm):</label>
              <select id="cfg_rm" class="mili-select">
                <option value="">فعال (پیش‌فرض)</option>
                <option value="no">غیرفعال (no)</option>
              </select>
            </div>
            <div class="field-box">
              <label class="field-label">کنترل ترجیحی (yxby):</label>
              <select id="cfg_yxby" class="mili-select">
                <option value="">فعال (پیش‌فرض)</option>
                <option value="yes">بستن همه ترجیحات (yes)</option>
              </select>
            </div>
          </div>

          <div class="modal-sec-title">۳. منابع نود ترجیحی داخلی و فیلتر اپراتور</div>
          <div class="check-grid">
            <label class="check-label"><input type="checkbox" id="cfg_epd" checked> <span>فعال‌سازی دامنه ترجیحی (epd)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_epi" checked> <span>فعال‌سازی IP ترجیحی (epi)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_egi" checked> <span>فعال‌سازی ترجیح سفارشی (egi)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ena"> <span>فعال‌سازی آدرس اصلی (ena)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ipv4" checked> <span>IPv4</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ipv6" checked> <span>IPv6</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ispMobile" checked> <span>همراه (ispMobile)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ispUnicom" checked> <span>Unicom (ispUnicom)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ispTelecom" checked> <span>مخابرات/Telecom (ispTelecom)</span></label>
          </div>
        </div>
      </section>

      <!-- ==================== ۵. نمای پنل و ظاهر ==================== -->
      <section id="view-panel" class="view-section">
        <div class="panel-card">
          <div class="panel-head">
            <div>
              <div class="panel-title">تنظیمات مسیر سفارشی، صفحه اصلی و مبدل اشتراک</div>
              <div class="panel-sub">مدیریت آدرس پنل و ظاهر درگاه</div>
            </div>
            <button type="button" class="btn-neon" onclick="savePanelSettings()">▣ ذخیره تنظیمات پنل</button>
          </div>
          <div class="form-grid-2">
            <div class="field-box">
              <label class="field-label">مسیر سفارشی مدیر (d):</label>
              <input type="text" id="cfg_d" class="mili-input" placeholder="/mypath" style="direction:ltr;">
              <span class="field-hint">در صورت تنظیم، دسترسی به پنل از طریق /{مسیر سفارشی} انجام می‌شود.</span>
            </div>
            <div class="field-box">
              <label class="field-label">آدرس صفحه اصلی سفارشی جهت استتار (homepage):</label>
              <input type="text" id="cfg_homepage" class="mili-input" placeholder="https://example.com" style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">آدرس تبدیل اشتراک (scu):</label>
              <input type="text" id="cfg_scu" class="mili-input" value="https://url.v1.mk/sub" style="direction:ltr;">
            </div>
            <div class="field-box">
              <label class="field-label">اجازه مدیریت API خارجی (ae):</label>
              <select id="cfg_ae" class="mili-select">
                <option value="">غیرفعال (پیش‌فرض)</option>
                <option value="yes">فعال (yes)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== ۶. نمای سیستم و دیتابیس D1 ==================== -->
      <section id="view-system" class="view-section">
        <div class="panel-card">
          <div class="panel-head">
            <div>
              <div class="panel-title">وضعیت دیتابیس Cloudflare D1 و مدیریت سیستم</div>
              <div class="panel-sub">مجهز به Auto-Migration خودکار و محافظ ضد خطای 1101 در استقرار دستی و گیت‌هاب</div>
            </div>
          </div>
          <div class="kv-list" style="margin-bottom:16px;">
            <div class="kv-row"><span class="kv-key">وضعیت دیتابیس D1</span><span class="kv-val" id="sysD1State">در حال بررسی...</span></div>
            <div class="kv-row"><span class="kv-key">نام متغیر اتصال D1</span><span class="kv-val" id="sysD1Binding">DB (تشخیص خودکار هر نامی)</span></div>
            <div class="kv-row"><span class="kv-key">وضعیت فضای KV</span><span class="kv-val" id="sysKvState">-</span></div>
            <div class="kv-row"><span class="kv-key">فرمت نام‌گذاری نودهای کلاینت</span><span class="kv-val">number+${BRAND_NAME} (1+${BRAND_NAME}, 2+${BRAND_NAME}...)</span></div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button type="button" class="btn-neon" onclick="initD1Database()">🛠️ ساخت و بررسی خودکار جداول D1</button>
            <button type="button" class="btn-ghost btn-danger" onclick="resetAllPanelSettings()">⌫ بازنشانی همه تنظیمات به پیش‌فرض</button>
          </div>
        </div>
      </section>
    </main>
  </div>

  <!-- نوار پایین موبایل -->
  <nav class="mobile-bottom-nav">
    <button type="button" class="mob-nav-btn active" data-mob="dashboard" onclick="switchView('dashboard')"><span>⊞</span><span>داشبورد</span></button>
    <button type="button" class="mob-nav-btn" data-mob="users" onclick="switchView('users')"><span>👥</span><span>کاربران</span></button>
    <button type="button" class="mob-nav-btn" data-mob="nodes" onclick="switchView('nodes')"><span>⚡</span><span>نودها</span></button>
    <button type="button" class="mob-nav-btn" data-mob="network" onclick="switchView('network')"><span>☁️</span><span>شبکه</span></button>
    <button type="button" class="mob-nav-btn" data-mob="panel" onclick="switchView('panel')"><span>✎</span><span>پنل</span></button>
    <button type="button" class="mob-nav-btn" data-mob="system" onclick="switchView('system')"><span>⚙️</span><span>سیستم</span></button>
  </nav>

  <div id="drawerBackdrop" class="drawer-backdrop" onclick="closeSidebarDrawer()"></div>

  <!-- ==================== مودال ساخت / ویرایش کاربر (شامل نام کاربر + تعداد نود در ساب + تمام ۳۱ تنظیم پیش‌فرض کد) ==================== -->
  <div id="userModalBackdrop" class="modal-backdrop">
    <div class="modal-box">
      <div class="panel-head">
        <div>
          <div class="panel-title" id="userModalTitle">ساخت کاربر جدید (${BRAND_NAME})</div>
          <div class="panel-sub">شامل نام کاربر، تعداد نودها در ساب و تمام ۳۱ تنظیم پیش‌فرض کد پایه</div>
        </div>
        <button type="button" class="btn-ghost" onclick="closeUserModal()">✕ بستن</button>
      </div>

      <input type="hidden" id="um_id" value="">

      <div class="modal-sec-title">۱. مشخصات کاربر، سهمیه و تعداد نودها در ساب</div>
      <div class="form-grid-3">
        <div class="field-box">
          <label class="field-label">نام کاربر (Username):</label>
          <input type="text" id="um_username" class="mili-input" placeholder="مثلاً ali-mili">
        </div>
        <div class="field-box">
          <label class="field-label">تعداد نودها در ساب (Sub Node Count):</label>
          <input type="number" id="um_subNodeCount" class="mili-input" value="50" min="0" max="500">
          <span class="field-hint">خروجی: 1+${BRAND_NAME} تا N+${BRAND_NAME} (0 = همه نودها)</span>
        </div>
        <div class="field-box">
          <label class="field-label">شناسه یکتا (UUID):</label>
          <div style="display:flex;gap:6px;">
            <input type="text" id="um_uuid" class="mili-input" style="flex:1;min-width:0;direction:ltr;" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
            <button type="button" class="btn-ghost" onclick="regenModalUuid()" title="تولید UUID جدید">🎲</button>
          </div>
        </div>
        <div class="field-box">
          <label class="field-label">حجم مجاز به گیگابایت (0 = نامحدود):</label>
          <input type="number" id="um_dataLimitGb" class="mili-input" value="0" min="0" step="0.5">
        </div>
        <div class="field-box">
          <label class="field-label">مدت اعتبار به روز (0 = بدون انقضا):</label>
          <input type="number" id="um_expireDays" class="mili-input" value="0" min="0">
        </div>
        <div class="field-box">
          <label class="field-label">سقف دستگاه / IP همزمان:</label>
          <input type="number" id="um_ipLimit" class="mili-input" value="50" min="1">
        </div>
        <div class="field-box">
          <label class="field-label">پریست پایه:</label>
          <select id="um_preset" class="mili-select">
            <option value="iran-fast">ایران — پرسرعت (پیشنهادی)</option>
            <option value="iran-heavy">ایران — مصرف سنگین (نامحدود)</option>
            <option value="international">بین‌المللی — بدون فرگمنت</option>
            <option value="multi-location">چند لوکیشن — فقط نودهای لبه</option>
            <option value="direct-only">فقط سرور اصلی (بدون CDN)</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">محدوده نودها:</label>
          <select id="um_nodeScope" class="mili-select">
            <option value="all">همه نودها</option>
            <option value="edge">فقط نودهای لبه CDN</option>
            <option value="origin">فقط سرور اصلی</option>
          </select>
        </div>
        <div class="field-box" style="justify-content:center;">
          <label class="check-label"><input type="checkbox" id="um_enabled" checked> <span>حساب کاربری فعال باشد</span></label>
          <label class="check-label"><input type="checkbox" id="um_startOnFirstUse" checked> <span>شروع انقضا با اولین اتصال</span></label>
        </div>
      </div>

      <div class="modal-sec-title">۲. تنظیمات پروتکل و امنیت کاربر (پیش‌فرض‌های کد پایه)</div>
      <div class="check-grid">
        <label class="check-label"><input type="checkbox" id="um_ev" checked> <span>پروتکل VLESS (ev)</span></label>
        <label class="check-label"><input type="checkbox" id="um_et"> <span>پروتکل Trojan (et)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ex"> <span>پروتکل xhttp (ex)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ech"> <span>فعال‌سازی ECH (ech)</span></label>
        <label class="check-label"><input type="checkbox" id="um_jk"> <span>زنجیره اینترنت خانگی (jk)</span></label>
      </div>

      <div class="modal-sec-title">۳. تنظیمات شبکه، منطقه، پروکسی و ترجیحات کاربر (تمام متغیرهای کد پایه)</div>
      <div class="form-grid-3">
        <div class="field-box">
          <label class="field-label">منطقه Worker (wk):</label>
          <select id="um_wk" class="mili-select">
            <option value="">اتصال مستقیم رسمی (پیش‌فرض)</option>
            <option value="HK">🇭🇰 هنگ‌کنگ (HK)</option>
            <option value="SG">🇸🇬 سنگاپور (SG)</option>
            <option value="JP">🇯🇵 ژاپن (JP)</option>
            <option value="US">🇺🇸 آمریکا (US)</option>
            <option value="KR">🇰🇷 کره‌جنوبی (KR)</option>
            <option value="DE">🇩🇪 آلمان (DE)</option>
            <option value="SE">🇸🇪 سوئد (SE)</option>
            <option value="NL">🇳🇱 هلند (NL)</option>
            <option value="FI">🇫🇮 فنلاند (FI)</option>
            <option value="GB">🇬🇧 بریتانیا (GB)</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">آدرس ProxyIP سفارشی (p):</label>
          <input type="text" id="um_p" class="mili-input" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">پروکسی SOCKS5/HTTP (s):</label>
          <input type="text" id="um_s" class="mili-input" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">روش خروج (qj):</label>
          <select id="um_qj" class="mili-select">
            <option value="">اولویت با پروکسی (پیش‌فرض)</option>
            <option value="no">اولویت با اتصال مستقیم (no)</option>
            <option value="only">فقط پروکسی (only)</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">رمز عبور سفارشی Trojan (tp):</label>
          <input type="text" id="um_tp" class="mili-input" placeholder="خالی = UUID" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">TLS ALPN (alpn):</label>
          <select id="um_alpn" class="mili-select">
            <option value="">پیش‌فرض (خالی)</option>
            <option value="h3">h3</option>
            <option value="h2">h2</option>
            <option value="http/1.1">http/1.1</option>
            <option value="h3,h2">h3,h2</option>
            <option value="h2,http/1.1">h2,http/1.1</option>
            <option value="h3,h2,http/1.1">h3,h2,http/1.1</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">مسیر سفارشی اختصاصی کاربر (d):</label>
          <input type="text" id="um_d" class="mili-input" placeholder="اختیاری" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">سرور DNS سفارشی (customDNS):</label>
          <input type="text" id="um_customDNS" class="mili-input" value="https://223.5.5.5/dns-query" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">دامنه ECH سفارشی (customECHDomain):</label>
          <input type="text" id="um_customECHDomain" class="mili-input" value="cloudflare-ech.com" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">لیست IP/دامنه ترجیحی کاربر (yx):</label>
          <input type="text" id="um_yx" class="mili-input" placeholder="خالی = استفاده از لیست پنل" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">URL منبع IP ترجیحی (yxURL):</label>
          <input type="text" id="um_yxURL" class="mili-input" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">آدرس تبدیل اشتراک (scu):</label>
          <input type="text" id="um_scu" class="mili-input" value="https://url.v1.mk/sub" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">کنترل TLS (dkby):</label>
          <select id="um_dkby" class="mili-select">
            <option value="no">حفظ همه گره‌ها (no)</option>
            <option value="yes">فقط گره‌های TLS (yes)</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">تطبیق منطقه (rm):</label>
          <select id="um_rm" class="mili-select">
            <option value="">فعال (پیش‌فرض)</option>
            <option value="no">غیرفعال (no)</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">کنترل ترجیحی (yxby):</label>
          <select id="um_yxby" class="mili-select">
            <option value="">فعال (پیش‌فرض)</option>
            <option value="yes">بستن ترجیح (yes)</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">صفحه اصلی سفارشی (homepage):</label>
          <input type="text" id="um_homepage" class="mili-input" style="direction:ltr;">
        </div>
        <div class="field-box">
          <label class="field-label">اجازه مدیریت API (ae):</label>
          <select id="um_ae" class="mili-select">
            <option value="">غیرفعال</option>
            <option value="yes">فعال (yes)</option>
          </select>
        </div>
      </div>

      <div class="check-grid" style="margin-top:12px;">
        <label class="check-label"><input type="checkbox" id="um_epd" checked> <span>دامنه ترجیحی (epd)</span></label>
        <label class="check-label"><input type="checkbox" id="um_epi" checked> <span>IP ترجیحی (epi)</span></label>
        <label class="check-label"><input type="checkbox" id="um_egi" checked> <span>ترجیح سفارشی (egi)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ena"> <span>آدرس اصلی (ena)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ipv4" checked> <span>IPv4</span></label>
        <label class="check-label"><input type="checkbox" id="um_ipv6" checked> <span>IPv6</span></label>
        <label class="check-label"><input type="checkbox" id="um_ispMobile" checked> <span>همراه (ispMobile)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ispUnicom" checked> <span>Unicom (ispUnicom)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ispTelecom" checked> <span>مخابرات (ispTelecom)</span></label>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn-ghost" onclick="closeUserModal()">انصراف</button>
        <button type="button" class="btn-neon" onclick="submitUserModal()">✦ ذخیره کاربر در دیتابیس D1</button>
      </div>
    </div>
  </div>

  <script>
    var STATE = ${safeInitialJson};
    var SELECTED_PRESET = 'iran-fast';
    var USER_FILTER_STATUS = 'all';

    function getApiBase() {
      var p = window.location.pathname.replace(/\\/+$/g, '');
      return p || '';
    }

    function showToast(msg) {
      var box = document.getElementById('toastBox');
      if (!box) return;
      box.textContent = msg;
      box.style.display = 'block';
      clearTimeout(window._tTimer);
      window._tTimer = setTimeout(function() {
        box.style.display = 'none';
      }, 2800);
    }

    function formatBytesJs(bytes) {
      var b = Number(bytes) || 0;
      if (b <= 0) return '0 B';
      var u = ['B', 'KB', 'MB', 'GB', 'TB'];
      var i = Math.min(u.length - 1, Math.floor(Math.log(b) / Math.log(1024)));
      var v = b / Math.pow(1024, i);
      return (v >= 100 || i === 0 ? Math.round(v) : v.toFixed(2)) + ' ' + u[i];
    }

    function randomUuidV4() {
      if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    function toggleSidebarDrawer(force) {
      var sidebar = document.querySelector('.sidebar');
      var backdrop = document.getElementById('drawerBackdrop');
      if (!sidebar || !backdrop) return;
      var willOpen = typeof force === 'boolean' ? force : !sidebar.classList.contains('drawer-open');
      sidebar.classList.toggle('drawer-open', willOpen);
      backdrop.classList.toggle('open', willOpen);
      document.body.style.overflow = willOpen ? 'hidden' : '';
    }

    function closeSidebarDrawer() {
      toggleSidebarDrawer(false);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSidebarDrawer();
    });

    function switchView(viewName) {
      var titles = {
        dashboard: 'داشبورد',
        users: 'کاربران',
        nodes: 'نودها و تست تاخیر',
        network: 'شبکه و لبه',
        panel: 'پنل و ظاهر',
        system: 'تنظیمات و دیتابیس D1'
      };
      document.getElementById('topPageTitle').textContent = titles[viewName] || 'داشبورد';
      document.querySelectorAll('.view-section').forEach(function(s) {
        s.classList.toggle('active', s.id === 'view-' + viewName);
      });
      document.querySelectorAll('.sb-item').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-view') === viewName);
      });
      document.querySelectorAll('.mob-nav-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-mob') === viewName);
      });
      closeSidebarDrawer();
    }

    function renderPresets() {
      var container = document.getElementById('presetCardsContainer');
      if (!container) return;
      var html = '';
      Object.values(STATE.presets || {}).forEach(function(p) {
        var sel = p.id === SELECTED_PRESET ? 'selected' : '';
        var tags = (p.badges || []).map(function(t) { return '<span class="preset-tag">' + t + '</span>'; }).join('');
        html += '<div class="preset-card ' + sel + '" onclick="selectPreset(\\'' + p.id + '\\')">' +
          '<div class="preset-title">✦ ' + p.title + '</div>' +
          '<div class="preset-sub">' + p.subtitle + '</div>' +
          '<div class="preset-tags">' + tags + '</div>' +
          '</div>';
      });
      container.innerHTML = html;
    }

    function selectPreset(id) {
      SELECTED_PRESET = id;
      var p = (STATE.presets || {})[id];
      if (p && p.subNodeCount) {
        document.getElementById('quickSubNodeCount').value = p.subNodeCount;
      }
      renderPresets();
    }

    function setFilterStatus(st) {
      USER_FILTER_STATUS = st;
      renderUsersGrid();
    }

    function renderUsersGrid() {
      var container = document.getElementById('usersGridContainer');
      if (!container) return;
      var q = (document.getElementById('userSearchInput')?.value || '').trim().toLowerCase();
      var list = (STATE.users || []).filter(function(u) {
        if (USER_FILTER_STATUS === 'active' && !u.enabled) return false;
        if (USER_FILTER_STATUS === 'disabled' && u.enabled) return false;
        if (q && !u.username.toLowerCase().includes(q) && !u.uuid.toLowerCase().includes(q)) return false;
        return true;
      });

      document.getElementById('sbUserCount').textContent = String((STATE.users || []).length);

      if (list.length === 0) {
        container.innerHTML = '<div style="padding:24px;color:var(--muted);">هیچ کاربری با این فیلتر یافت نشد.</div>';
        return;
      }

      var baseOrigin = window.location.origin;
      var html = '';
      list.forEach(function(u) {
        var statusUrl = baseOrigin + '/status/' + encodeURIComponent(u.id);
        var subToken = (u.config && u.config.d && u.config.d.trim()) ? u.config.d.trim().replace(/^\\/+|\\/+$/g, '') : u.uuid;
        var subUrl = baseOrigin + '/' + subToken + '/sub';
        var nodeCount = u.subNodeCount || (u.config && u.config.subNodeCount) || 50;
        var gaugeText = u.dataLimitGb > 0 ? (u.dataLimitGb + ' GB') : '∞ بی‌نهایت';
        var expText = u.expireDays > 0 ? (u.expireDays + ' روز') : 'بدون انقضا';

        html += '<div class="user-card">' +
          '<div class="uc-top">' +
            '<span class="top-pill ' + (u.enabled ? 'live' : '') + '">' + (u.enabled ? 'شروع با اولین اتصال' : 'غیرفعال') + '</span>' +
            '<div class="uc-id-box">' +
              '<div style="text-align:left;"><div class="uc-name">' + u.username + '</div><div class="uc-uuid">' + u.uuid.slice(0, 18) + '...</div></div>' +
              '<div class="uc-avatar">M</div>' +
            '</div>' +
          '</div>' +
          '<div class="uc-body">' +
            '<div class="uc-stats">' +
              '<div class="uc-stat-line"><span>مصرف</span><strong>' + formatBytesJs(u.usedBytes) + '</strong></div>' +
              '<div class="uc-stat-line"><span>عمر کل</span><strong>' + formatBytesJs(u.lifetimeBytes) + '</strong></div>' +
              '<div class="uc-stat-line"><span>درخواست‌ها</span><strong>' + (u.requestCount || 0) + '</strong></div>' +
              '<div class="uc-stat-line"><span>انقضا</span><strong>' + expText + '</strong></div>' +
              '<div class="uc-stat-line"><span>تعداد نود در ساب</span><strong>' + nodeCount + ' نود (' + STATE.brand + ')</strong></div>' +
            '</div>' +
            '<div class="uc-gauge"><strong>' + gaugeText + '</strong></div>' +
          '</div>' +
          '<div class="uc-actions">' +
            '<button type="button" class="btn-ghost" onclick="toggleUserEnabled(\\'' + u.id + '\\', ' + (!u.enabled) + ')">⏻ ' + (u.enabled ? 'فعال' : 'غیرفعال') + '</button>' +
            '<button type="button" class="btn-ghost" style="border-color:var(--border-hi);color:var(--neon);" onclick="window.open(\\'' + statusUrl + '\\', \\'_blank\\')">👁 پنجره وضعیت</button>' +
            '<button type="button" class="btn-ghost" onclick="copyText(\\'' + statusUrl + '\\', \\'لینک صفحه وضعیت کاربر کپی شد\\')">🔗 کپی وضعیت</button>' +
            '<button type="button" class="btn-ghost" onclick="copyText(\\'' + subUrl + '\\', \\'ساب‌لینک کاربر کپی شد\\')">📋 ساب‌لینک</button>' +
            '<button type="button" class="btn-ghost" onclick="openUserModal(\\'' + u.id + '\\')">✎ ویرایش</button>' +
            '<button type="button" class="btn-ghost" onclick="resetUserTraffic(\\'' + u.id + '\\')">↻ صفر کردن</button>' +
            '<button type="button" class="btn-ghost btn-danger" onclick="removeUser(\\'' + u.id + '\\')">🗑</button>' +
          '</div>' +
        '</div>';
      });
      container.innerHTML = html;
    }

    function applyConfigToForm(cfg) {
      if (!cfg) return;
      var textFields = ['yx', 'yxURL', 'subNodeCount', 'wk', 'p', 's', 'qj', 'tp', 'alpn', 'customDNS', 'customECHDomain', 'dkby', 'rm', 'yxby', 'd', 'homepage', 'scu', 'ae'];
      textFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el && cfg[k] !== undefined) el.value = cfg[k];
      });
      var boolFields = ['ev', 'et', 'ex', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el) el.checked = cfg[k] === 'yes' || cfg[k] === true;
      });
    }

    function collectFormConfig() {
      var out = {};
      var textFields = ['yx', 'yxURL', 'subNodeCount', 'wk', 'p', 's', 'qj', 'tp', 'alpn', 'customDNS', 'customECHDomain', 'dkby', 'rm', 'yxby', 'd', 'homepage', 'scu', 'ae'];
      textFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el) out[k] = el.value;
      });
      var boolFields = ['ev', 'et', 'ex', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el) out[k] = el.checked ? 'yes' : 'no';
      });
      return out;
    }

    function updateDashboardWidgets() {
      var users = STATE.users || [];
      var diag = STATE.diagnostics || {};
      var cfg = STATE.config || {};
      var activeCount = users.filter(function(u) { return u.enabled; }).length;
      var disCount = users.length - activeCount;

      document.getElementById('mTotalUsers').textContent = String(users.length);
      document.getElementById('mUsersSub').textContent = activeCount + ' فعال · ' + disCount + ' غیرفعال';
      document.getElementById('mTotalTraffic').textContent = formatBytesJs(diag.totalUsedBytes || 0);
      document.getElementById('mLifetimeTraffic').textContent = 'مجموع عمر: ' + formatBytesJs(diag.totalLifetimeBytes || 0);
      document.getElementById('mActiveNodes').textContent = String(diag.healthyCfIps || 31);
      document.getElementById('mHealthyIps').textContent = String(diag.healthyCfIps || 31);
      document.getElementById('mTotalReqs').textContent = String(diag.totalRequests || 0);
      document.getElementById('sbNodeCount').textContent = String(diag.healthyCfIps || 31);
      document.getElementById('donutCenterCount').textContent = String(diag.healthyCfIps || 31);

      var upMin = Math.max(1, Math.floor((diag.uptimeMs || 60000) / 60000));
      document.getElementById('hbUsers').textContent = '👥 ' + users.length + ' کاربر · ' + activeCount + ' فعال';
      document.getElementById('hbReqs').textContent = '⚡ ' + (diag.totalRequests || 0) + ' درخواست ثبت‌شده';
      document.getElementById('hbUptime').textContent = '🕒 آپ‌تایم ' + upMin + ' دقیقه';
      document.getElementById('hbD1').textContent = diag.d1Enabled ? ('🛡️ دیتابیس D1 متصل (' + diag.d1BindingName + ')') : '🛡️ ذخیره‌ساز پشتیبان فعال (بدون خطای D1)';

      document.getElementById('cfEdgeRegion').textContent = cfg.wk || 'CF Direct';
      document.getElementById('cfWorkerHost').textContent = window.location.host;
      document.getElementById('cfD1Status').textContent = diag.d1Enabled ? ('D1 (' + diag.d1BindingName + ') متصل') : 'حالت هوشمند بدون خطا (آماده اتصال D1)';
      document.getElementById('cfOutboundProxy').textContent = cfg.s ? 'فعال' : 'اتصال مستقیم';
      document.getElementById('sysD1State').textContent = diag.d1Enabled ? '✅ متصل و جداول آماده هستند' : '⚡ آماده اتصال (بدون خطای استقرار دستی)';
      document.getElementById('sysKvState').textContent = diag.kvEnabled ? ('✅ متصل (' + diag.kvBindingName + ')') : 'اختیاری (غیرمتصل)';

      // پرمصرف‌ترین کاربران
      var topBox = document.getElementById('topUsersList');
      if (topBox) {
        var sorted = users.slice().sort(function(a, b) { return (b.usedBytes || 0) - (a.usedBytes || 0); }).slice(0, 4);
        topBox.innerHTML = sorted.map(function(u) {
          return '<div class="kv-row"><span class="kv-key">' + u.username + ' (' + (u.subNodeCount || 50) + ' نود)</span><span class="kv-val">' + formatBytesJs(u.usedBytes || 0) + '</span></div>';
        }).join('') || '<div style="color:var(--muted);font-size:0.8rem;">هنوز کاربری ثبت نشده است</div>';
      }

      // رویدادها
      var logBox = document.getElementById('auditLogsList');
      if (logBox) {
        var logs = diag.recentLogs || [];
        logBox.innerHTML = logs.slice(0, 5).map(function(l) {
          return '<div class="kv-row"><span class="kv-key">' + l.action + '</span><span class="kv-val">' + l.detail + '</span></div>';
        }).join('') || '<div style="color:var(--muted);font-size:0.8rem;">رویدادی ثبت نشده است</div>';
      }
    }

    async function refreshAllData() {
      try {
        var res = await fetch(getApiBase() + '/api/stats');
        var data = await res.json();
        if (data && data.success) {
          STATE.config = data.config || STATE.config;
          STATE.users = data.users || STATE.users;
          STATE.diagnostics = data.diagnostics || STATE.diagnostics;
          applyConfigToForm(STATE.config);
          renderUsersGrid();
          updateDashboardWidgets();
        }
      } catch (_e) {}
    }

    async function quickCreateUser() {
      var username = document.getElementById('quickUsername').value.trim();
      var subNodeCount = parseInt(document.getElementById('quickSubNodeCount').value, 10) || 50;
      var usePanelDefaults = document.getElementById('quickUsePanelDefaults').checked;
      try {
        var res = await fetch(getApiBase() + '/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username,
            preset: SELECTED_PRESET,
            subNodeCount: subNodeCount,
            usePanelDefaults: usePanelDefaults
          })
        });
        var data = await res.json();
        if (data.success) {
          document.getElementById('quickUsername').value = '';
          showToast(data.message || 'کاربر جدید ساخته شد');
          await refreshAllData();
        } else {
          showToast(data.message || 'خطا در ساخت کاربر');
        }
      } catch (e) {
        showToast('خطا در ارتباط با سرور');
      }
    }

    function regenModalUuid() {
      document.getElementById('um_uuid').value = randomUuidV4();
    }

    function openUserModal(userId) {
      var modal = document.getElementById('userModalBackdrop');
      var baseCfg = Object.assign({}, STATE.defaults || {}, STATE.config || {});
      var existing = null;
      if (userId) {
        existing = (STATE.users || []).find(function(u) { return u.id === userId; });
      }

      document.getElementById('userModalTitle').textContent = existing
        ? ('ویرایش کاربر «' + existing.username + '»')
        : 'ساخت کاربر جدید (با تمام تنظیمات پیش‌فرض کد پایه + نام کاربر)';

      document.getElementById('um_id').value = existing ? existing.id : '';
      document.getElementById('um_username').value = existing ? existing.username : '';
      document.getElementById('um_subNodeCount').value = existing ? (existing.subNodeCount ?? 50) : (baseCfg.subNodeCount ?? 50);
      document.getElementById('um_uuid').value = existing ? existing.uuid : randomUuidV4();
      document.getElementById('um_dataLimitGb').value = existing ? (existing.dataLimitGb ?? 0) : 0;
      document.getElementById('um_expireDays').value = existing ? (existing.expireDays ?? 0) : 0;
      document.getElementById('um_ipLimit').value = existing ? (existing.ipLimit ?? 50) : 50;
      document.getElementById('um_preset').value = existing ? (existing.preset || 'iran-fast') : SELECTED_PRESET;
      document.getElementById('um_nodeScope').value = existing ? (existing.nodeScope || 'all') : 'all';
      document.getElementById('um_enabled').checked = existing ? Boolean(existing.enabled) : true;
      document.getElementById('um_startOnFirstUse').checked = existing ? Boolean(existing.startOnFirstUse) : true;

      var uCfg = existing && existing.config ? Object.assign({}, baseCfg, existing.config) : baseCfg;
      var textKeys = ['wk', 'p', 's', 'qj', 'tp', 'alpn', 'd', 'customDNS', 'customECHDomain', 'yx', 'yxURL', 'scu', 'dkby', 'rm', 'yxby', 'homepage', 'ae'];
      textKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) el.value = uCfg[k] !== undefined ? uCfg[k] : '';
      });
      var boolKeys = ['ev', 'et', 'ex', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) el.checked = uCfg[k] === 'yes' || uCfg[k] === true;
      });

      modal.classList.add('open');
    }

    function closeUserModal() {
      document.getElementById('userModalBackdrop').classList.remove('open');
    }

    async function submitUserModal() {
      var id = document.getElementById('um_id').value.trim();
      var payload = {
        id: id || undefined,
        username: document.getElementById('um_username').value.trim(),
        subNodeCount: parseInt(document.getElementById('um_subNodeCount').value, 10) || 50,
        uuid: document.getElementById('um_uuid').value.trim(),
        dataLimitGb: parseFloat(document.getElementById('um_dataLimitGb').value) || 0,
        expireDays: parseInt(document.getElementById('um_expireDays').value, 10) || 0,
        ipLimit: parseInt(document.getElementById('um_ipLimit').value, 10) || 50,
        preset: document.getElementById('um_preset').value,
        nodeScope: document.getElementById('um_nodeScope').value,
        enabled: document.getElementById('um_enabled').checked,
        startOnFirstUse: document.getElementById('um_startOnFirstUse').checked,
        config: {}
      };
      var textKeys = ['wk', 'p', 's', 'qj', 'tp', 'alpn', 'd', 'customDNS', 'customECHDomain', 'yx', 'yxURL', 'scu', 'dkby', 'rm', 'yxby', 'homepage', 'ae'];
      textKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) payload.config[k] = el.value;
      });
      var boolKeys = ['ev', 'et', 'ex', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) payload.config[k] = el.checked ? 'yes' : 'no';
      });
      payload.config.subNodeCount = payload.subNodeCount;

      var method = id ? 'PUT' : 'POST';
      var res = await fetch(getApiBase() + '/api/users', {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      var data = await res.json();
      if (data.success) {
        closeUserModal();
        showToast(data.message || 'ذخیره شد');
        await refreshAllData();
      } else {
        showToast(data.message || 'خطا در ذخیره کاربر');
      }
    }

    async function toggleUserEnabled(id, nextState) {
      await fetch(getApiBase() + '/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, enabled: nextState })
      });
      showToast('وضعیت کاربر تغییر کرد');
      await refreshAllData();
    }

    async function resetUserTraffic(id) {
      await fetch(getApiBase() + '/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, action: 'reset' })
      });
      showToast('مصرف کاربر صفر شد');
      await refreshAllData();
    }

    async function removeUser(id) {
      await fetch(getApiBase() + '/api/users?id=' + encodeURIComponent(id), {
        method: 'DELETE'
      });
      showToast('کاربر حذف شد');
      await refreshAllData();
    }

    async function savePanelSettings() {
      var cfg = collectFormConfig();
      var res = await fetch(getApiBase() + '/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cfg)
      });
      var data = await res.json();
      if (data.success) {
        showToast(data.message || 'تنظیمات پنل ذخیره شد');
        await refreshAllData();
      } else {
        showToast(data.message || 'خطا در ذخیره تنظیمات');
      }
    }

    async function resetAllPanelSettings() {
      var res = await fetch(getApiBase() + '/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _reset: true })
      });
      var data = await res.json();
      if (data.success) {
        showToast(data.message);
        await refreshAllData();
      }
    }

    async function initD1Database() {
      var res = await fetch(getApiBase() + '/api/d1-init', { method: 'POST' });
      var data = await res.json();
      showToast(data.message || 'بررسی D1 انجام شد');
      await refreshAllData();
    }

    function copyText(text, msg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() { showToast(msg || 'کپی شد'); });
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(msg || 'کپی شد');
      }
    }

    function copyMainAdminSub() {
      var url = window.location.origin + getApiBase() + '/sub';
      copyText(url, 'ساب‌لینک اصلی کپی شد');
    }

    function generateRandomCfIps() {
      var cidrs = ['104.16.0.0/20', '104.24.0.0/20', '172.67.0.0/20', '162.159.0.0/20'];
      var box = document.getElementById('pingResultsBox');
      var generated = [];
      for (var i = 0; i < 10; i++) {
        var c = cidrs[i % cidrs.length].split('/')[0].split('.');
        var ip = c[0] + '.' + c[1] + '.' + (Math.floor(Math.random() * 15)) + '.' + (Math.floor(Math.random() * 250) + 2);
        generated.push(ip + ':443#CF-Fast-' + (i + 1));
      }
      box.innerHTML = '<div class="kv-row"><span class="kv-key">۱۰ آی‌پی پیشنهادی تولید شد</span><button type="button" class="btn-ghost" onclick="appendGeneratedIps(\\'' + generated.join(',') + '\\')">+ افزودن به لیست ترجیحی (yx)</button></div>';
    }

    function appendGeneratedIps(str) {
      var el = document.getElementById('cfg_yx');
      el.value = el.value.trim() ? (el.value.trim() + ',' + str) : str;
      savePanelSettings();
    }

    // ساعت زنده سایدبار
    function tickClock() {
      var now = new Date();
      var hh = String(now.getHours()).padStart(2, '0');
      var mm = String(now.getMinutes()).padStart(2, '0');
      var ss = String(now.getSeconds()).padStart(2, '0');
      var clk = document.getElementById('liveClock');
      if (clk) clk.textContent = hh + ':' + mm + ':' + ss;
      var dt = document.getElementById('liveDate');
      if (dt) {
        try {
          dt.textContent = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(now);
        } catch (_e) {
          dt.textContent = now.toISOString().slice(0, 10);
        }
      }
    }
    setInterval(tickClock, 1000);
    tickClock();

    // میانبر Ctrl+S برای ذخیره تنظیمات
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        savePanelSettings();
      }
    });

    // مقداردهی اولیه
    renderPresets();
    applyConfigToForm(STATE.config);
    renderUsersGrid();
    updateDashboardWidgets();
  </script>
</body>
</html>`;
}


// --- MODULE: src/index.js ---
// ============================================================================
// miliconfig v3.1 - نقطه ورود اصلی Cloudflare Workers & Pages
// مجهز به لایه دیتابیس D1، مدیریت چندکاربره، نام‌گذاری number+miliconfig و محافظ ضد خطای 1101
// ============================================================================


function normalizeCleanPath(p = '') {
  return String(p || '').trim().replace(/^\/+|\/+$/g, '').toLowerCase();
}

function isAdminAuthorizedPath(prefixPath, adminUuid, customPath) {
  const cleanPrefix = normalizeCleanPath(prefixPath);
  if (!cleanPrefix) return false;
  const cleanAdmin = normalizeCleanPath(adminUuid);
  const cleanCustom = normalizeCleanPath(customPath);
  if (cleanCustom) {
    return cleanPrefix === cleanCustom || cleanPrefix === cleanAdmin;
  }
  return cleanPrefix === cleanAdmin;
}

export default {
  async fetch(request, env = {}, ctx = {}) {
    try {
      const url = new URL(request.url);
      const upgradeHeader = (request.headers.get('Upgrade') || '').toLowerCase();
      const isWebSocket = upgradeHeader === 'websocket';

      // اطمینان از آماده بودن اسکیمای D1 یا حافظه پشتیبان بدون هیچ خطایی
      await ensureD1Schema(env);
      const adminUuid = getAdminUuid(env);
      const globalCfg = await loadGlobalConfig(env);
      const allUsers = await listUsers(env);

      // ۱. هندل کردن ترافیک پروکسی WebSocket (VLESS + Trojan + UDP DNS)
      if (isWebSocket) {
        return await handleWebSocketUpgrade(request, env, ctx, globalCfg, allUsers, adminUuid);
      }

      const pathParts = url.pathname.split('/').filter(Boolean);

      // ۲. هندل کردن APIهای مدیریتی و عمومی
      if (url.pathname.includes('/api/')) {
        const apiIdx = pathParts.indexOf('api');
        const prefix = pathParts.slice(0, apiIdx).join('/');
        const apiSubPath = pathParts.slice(apiIdx + 1).join('/');

        // API عمومی صفحه وضعیت کاربر
        if (apiSubPath.startsWith('status/')) {
          const token = decodeURIComponent(apiSubPath.slice('status/'.length));
          return await handlePublicUserStatusApi(request, env, token);
        }

        // بررسی دسترسی مدیر برای APIهای مدیریتی
        if (!isAdminAuthorizedPath(prefix, adminUuid, globalCfg.d)) {
          return new Response(JSON.stringify({ error: 'دسترسی غیرمجاز (مسیر مدیریت نامعتبر است)' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
          });
        }

        if (apiSubPath === 'config') {
          return await handleConfigApi(request, env);
        }
        if (apiSubPath === 'users') {
          return await handleUsersApi(request, env);
        }
        if (apiSubPath === 'preferred-ips') {
          return await handlePreferredIpsApi(request, env, true);
        }
        if (apiSubPath === 'stats' || apiSubPath === 'd1-init') {
          return await handleDashboardStatsApi(request, env);
        }

        return new Response(JSON.stringify({ error: 'مسیر API یافت نشد' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
      }

      // ۳. هندل کردن پروتکل xhttp (درخواست‌های POST غیر API)
      if (request.method === 'POST') {
        return await handleXhttpPostRequest(request, env, ctx, globalCfg, allUsers, adminUuid);
      }

      // ۴. هندل کردن درخواست‌های GET
      if (request.method === 'GET' || request.method === 'HEAD') {
        // ۴-الف: صفحه اصلی /
        if (url.pathname === '/' || pathParts.length === 0) {
          if (globalCfg.homepage && String(globalCfg.homepage).trim()) {
            try {
              const camouflageResp = await fetch(String(globalCfg.homepage).trim(), {
                method: 'GET',
                headers: {
                  'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0',
                  Accept: request.headers.get('Accept') || '*/*'
                },
                redirect: 'follow'
              });
              if (camouflageResp.ok) {
                return new Response(await camouflageResp.text(), {
                  status: camouflageResp.status,
                  headers: {
                    'Content-Type': camouflageResp.headers.get('Content-Type') || 'text/html; charset=utf-8',
                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                  }
                });
              }
            } catch (_e) {}
          }
          return new Response(renderLoginGatewayHtml({ customPath: globalCfg.d }), {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        }

        // ۴-ب: مسیرهای سازگار با کد پایه /{prefix}/region و /{prefix}/test-api
        if (pathParts.length === 2 && (pathParts[1] === 'region' || pathParts[1] === 'test-api')) {
          const prefix = pathParts[0];
          if (!isAdminAuthorizedPath(prefix, adminUuid, globalCfg.d)) {
            return new Response(JSON.stringify({ error: 'Access Denied' }), {
              status: 403,
              headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
          }
          if (pathParts[1] === 'region') {
            return new Response(
              JSON.stringify({
                region: globalCfg.wk ? globalCfg.wk.toUpperCase() : globalCfg.p ? 'CUSTOM' : 'CF',
                detectionMethod: globalCfg.wk ? 'تعیین دستی منطقه' : globalCfg.p ? 'ProxyIP سفارشی' : 'اتصال مستقیم رسمی CF',
                timestamp: new Date().toISOString()
              }),
              { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
            );
          }
          return new Response(
            JSON.stringify({
              detectedRegion: 'CF',
              message: 'API تست با موفقیت انجام شد',
              timestamp: new Date().toISOString()
            }),
            { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
          );
        }

        // ۴-ج: صفحه وضعیت اختصاصی برای ارسال به کاربر (/status/{token} یا /{token}/status)
        if (
          (pathParts[0] === 'status' && pathParts[1]) ||
          (pathParts.length === 2 && pathParts[1] === 'status')
        ) {
          const token = decodeURIComponent(pathParts[0] === 'status' ? pathParts[1] : pathParts[0]);
          let userObj = await getUserByIdOrToken(env, token);
          if (!userObj && isAdminAuthorizedPath(token, adminUuid, globalCfg.d)) {
            userObj = allUsers[0] || {
              id: 'mili-admin',
              username: 'Admin',
              uuid: adminUuid,
              subNodeCount: globalCfg.subNodeCount || 50,
              enabled: true,
              status: 'active',
              dataLimitGb: 0,
              usedBytes: 0,
              lifetimeBytes: 0,
              requestCount: 0,
              expireDays: 0,
              expireAt: 0,
              startOnFirstUse: true,
              ipLimit: 50,
              nodeScope: 'all',
              config: globalCfg
            };
          }
          if (!userObj) {
            return new Response('کاربر مورد نظر یافت نشد', {
              status: 404,
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
          }
          const nodes = await generateUserNodesList(userObj, url.hostname, {
            limit: userObj.subNodeCount
          });
          return new Response(renderUserStatusPageHtml(userObj, nodes, request.url), {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-store'
            }
          });
        }

        // ۴-د: لینک اشتراک کلاینت‌ها (/{token}/sub یا /sub/{token})
        if (
          (pathParts.length >= 2 && pathParts[pathParts.length - 1] === 'sub') ||
          (pathParts[0] === 'sub' && pathParts[1])
        ) {
          const token = pathParts[0] === 'sub'
            ? decodeURIComponent(pathParts.slice(1).join('/'))
            : decodeURIComponent(pathParts.slice(0, -1).join('/'));

          let targetUser = await getUserByIdOrToken(env, token);
          if (!targetUser && isAdminAuthorizedPath(token, adminUuid, globalCfg.d)) {
            targetUser = {
              id: allUsers[0]?.id || null,
              username: BRAND_NAME,
              uuid: adminUuid,
              subNodeCount: globalCfg.subNodeCount || 50,
              enabled: true,
              dataLimitGb: 0,
              usedBytes: 0,
              expireAt: 0,
              nodeScope: 'all',
              config: globalCfg
            };
          }
          if (!targetUser) {
            return new Response(JSON.stringify({ error: 'شناسه اشتراک نامعتبر است' }), {
              status: 403,
              headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
          }
          if (targetUser.id) {
            const p = recordUserActivity(env, targetUser.id, 0, 1).catch(() => {});
            if (ctx && typeof ctx.waitUntil === 'function') ctx.waitUntil(p);
          }
          return await handleSubscriptionResponse(request, targetUser, url);
        }

        // ۴-هـ: دسترسی به پنل مدیریت ادمین یا صفحه وضعیت کاربر با /{token}
        const fullCleanPath = normalizeCleanPath(url.pathname);
        if (isAdminAuthorizedPath(fullCleanPath, adminUuid, globalCfg.d)) {
          if (url.searchParams.get('view') === 'status') {
            const adminUser = allUsers[0] || {
              id: 'mili-admin',
              username: BRAND_NAME,
              uuid: adminUuid,
              subNodeCount: globalCfg.subNodeCount || 50,
              enabled: true,
              config: globalCfg
            };
            const nodes = await generateUserNodesList(adminUser, url.hostname, {
              limit: adminUser.subNodeCount
            });
            return new Response(renderUserStatusPageHtml(adminUser, nodes, request.url), {
              status: 200,
              headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });
          }

          const diag = await getStorageDiagnostics(env);
          const customYxCount = (globalCfg.yx || '').split(',').filter(Boolean).length;
          return new Response(
            renderAdminDashboardHtml({
              config: globalCfg,
              users: allUsers,
              diagnostics: {
                ...diag,
                healthyCfIps: customYxCount + DIRECT_DOMAINS.length + OFFICIAL_DIRECT_IPS.length
              },
              adminPath: fullCleanPath
            }),
            {
              status: 200,
              headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-store'
              }
            }
          );
        }

        // اگر توکن متعلق به یکی از کاربران ثبت‌شده در D1 باشد، صفحه وضعیت اختصاصی همان کاربر نمایش داده می‌شود
        const matchedUser = await getUserByIdOrToken(env, fullCleanPath);
        if (matchedUser) {
          const nodes = await generateUserNodesList(matchedUser, url.hostname, {
            limit: matchedUser.subNodeCount
          });
          return new Response(renderUserStatusPageHtml(matchedUser, nodes, request.url), {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-store'
            }
          });
        }
      }

      return new Response(JSON.stringify({ error: 'Not Found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    } catch (err) {
      // محافظ سطح بالا جهت جلوگیری ۱۰۰٪ از بروز خطای Cloudflare Error 1101
      return new Response(
        JSON.stringify({
          status: 'recovered',
          brand: BRAND_NAME,
          message: err?.message || String(err)
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
      );
    }
  }
};

