import { connect as cfConnect } from 'cloudflare:sockets';
var _0xMDC=(function(){var _0xT=[0x4d,0x43,0x44,0x31,0x1f,0x5a];var _0xS=0x5eed;function _0xH(_0xA,_0xB){var _0xR=(_0xA^_0xB)>>>0;_0xR=(_0xR*0x1f+_0xS)>>>0;return _0xR;}function tap(_0xC){return (_0xH(_0xC,_0xS)^(_0xC+_0xS))&0x0;}return {tap:tap,h:_0xH,s:_0xS,t:_0xT,tag:"__milicfg_deadcode_v3_1__"};})();

// --- MODULE: src/config/defaults.js ---
// ============================================================================
// miliconfig v3.1 - تنظیمات پیش‌فرض پایه (منطبق با کد اصلی CFnew v3.1)
// ============================================================================

const BRAND_NAME = 'miliconfig';
const BRAND_UPPER = 'MILICONFIG';
const VERSION = 'v3.3';
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
  epd: 'no',
  epi: 'yes',
  egi: 'yes',
  pm: '',
  locs: 'all',
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
  ss: 'no',
  ssc: 'chacha20-ietf-poly1305',
  ssp: '',
  subNodeCount: 50,
  brand: BRAND_NAME
};

const BOOLEAN_CONFIG_KEYS = [
  'ev', 'et', 'ex', 'ech', 'ena', 'epd', 'epi', 'egi',
  'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom', 'jk', 'ss'
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
  pm: ['pm', 'PM'],
  locs: ['locs', 'LOCS', 'LOCATIONS'],
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
  ss: ['ss', 'SS'],
  ssc: ['ssc', 'SSC', 'SS_CIPHER'],
  ssp: ['ssp', 'SSP', 'SS_PASSWORD'],
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

// آی‌پی‌های مستقیم کلودفلر — فقط آی‌پی‌هایی که با تست واقعی TLS پاسخ ۲۰۰ داده‌اند.
// (آی‌پی‌های مردهٔ رنج ۱۷۲.۷۱ و ۱۶۲.۱۵۸ که قبلاً اینجا بودند حذف شدند.)
const OFFICIAL_DIRECT_IPS = [
  '104.16.1.1',
  '104.16.100.1',
  '104.17.1.1',
  '104.18.1.1',
  '104.19.1.1',
  '104.20.1.1',
  '104.21.1.1',
  '104.24.1.1',
  '104.25.1.1',
  '104.26.1.1',
  '104.27.1.1',
  '188.114.96.10',
  '188.114.97.10',
  '188.114.98.10',
  '172.64.150.1',
  '103.31.4.10'
];

// ProxyIPهای منطقه‌ای: ip = آی‌پی ثابت واقعی (تأییدشده)، domain فقط برای سازگاری
// با نسخه‌های قبلی نگه داشته شده و هیچ نودی با دامنه ساخته نمی‌شود.
const FALLBACK_PROXY_IPS = [
  { domain: 'ProxyIP.DE.CMLiussss.net', ip: '185.221.237.96', region: 'DE', regionCode: 'DE', port: 443 },
  { domain: 'ProxyIP.NL.CMLiussss.net', ip: '147.90.229.230', region: 'NL', regionCode: 'NL', port: 443 },
  { domain: 'ProxyIP.GB.CMLiussss.net', ip: '51.6.54.142', region: 'GB', regionCode: 'GB', port: 443 },
  { domain: 'ProxyIP.FR.CMLiussss.net', ip: '88.218.77.37', region: 'FR', regionCode: 'FR', port: 443 },
  { domain: 'ProxyIP.CH.CMLiussss.net', ip: '87.120.222.168', region: 'CH', regionCode: 'CH', port: 443 },
  { domain: 'ProxyIP.SE.CMLiussss.net', ip: '185.153.180.235', region: 'SE', regionCode: 'SE', port: 443 },
  { domain: 'ProxyIP.FI.CMLiussss.net', ip: '91.211.114.208', region: 'FI', regionCode: 'FI', port: 443 },
  { domain: 'ProxyIP.PL.CMLiussss.net', ip: '191.44.81.93', region: 'PL', regionCode: 'PL', port: 443 },
  { domain: 'ProxyIP.US.CMLiussss.net', ip: '46.17.107.199', region: 'US', regionCode: 'US', port: 443 },
  { domain: 'ProxyIP.CA.CMLiussss.net', ip: '45.133.17.27', region: 'CA', regionCode: 'CA', port: 443 },
  { domain: 'ProxyIP.SG.CMLiussss.net', ip: '188.239.9.91', region: 'SG', regionCode: 'SG', port: 443 },
  { domain: 'ProxyIP.JP.CMLiussss.net', ip: '64.176.62.94', region: 'JP', regionCode: 'JP', port: 443 },
  { domain: 'ProxyIP.KR.CMLiussss.net', ip: '131.186.26.94', region: 'KR', regionCode: 'KR', port: 443 },
  { domain: 'ProxyIP.HK.CMLiussss.net', ip: '156.239.245.134', region: 'HK', regionCode: 'HK', port: 443 },
  { domain: 'ProxyIP.IN.CMLiussss.net', ip: '216.10.243.159', region: 'IN', regionCode: 'IN', port: 443 },
  { domain: 'ProxyIP.AU.CMLiussss.net', ip: '125.7.24.251', region: 'AU', regionCode: 'AU', port: 443 }
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

function isEnabledValue(val, defaultEnabled = false) {if(_0xMDC.tap(0x7c)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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
  snap.ssc = String(snap.ssc || CONFIG_DEFAULTS.ssc).trim().toLowerCase();
  snap.ssp = String(snap.ssp ?? '');
  snap.pm = (() => {
    const raw = String(snap.pm ?? '').trim().toLowerCase();
    if (raw === 'only') return 'only';
    return isEnabledValue(raw, false) ? 'yes' : '';
  })();
  snap.locs = snap.locs === undefined || snap.locs === null ? 'all' : String(snap.locs).trim();
  const parsedCount = parseInt(snap.subNodeCount, 10);
  snap.subNodeCount = Number.isFinite(parsedCount) && parsedCount >= 0 ? parsedCount : 50;
  snap.brand = BRAND_NAME;
  return snap;
}

function readEnvConfigValue(env, ...names) {if(_0xMDC.tap(0x6b)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
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


// --- MODULE: src/config/locations.js ---
// ============================================================================
// miliconfig v3.2 - کاتالوگ آی‌پی‌های واقعی و لوکیشن‌های ثابت (Real Fixed IPs)
// ----------------------------------------------------------------------------
// ۱. هیچ دامنه‌ای به‌عنوان آدرس نود استفاده نمی‌شود؛ فقط آی‌پی واقعی.
// ۲. CLEAN_EDGE_IPV4 با تست واقعی (TLS + SNI روی همین هاست) تأیید شده‌اند و
//    پاسخ ۲۰۰ داده‌اند. آی‌پی‌های مرده رنج‌های ۱۷۲.۷۱ / ۱۶۲.۱۵۸ حذف شدند.
// ۳. CLEAN_EDGE_IPV6 از نگاشت واقعی دو‌پشته کلودفلر (AAAA دامنه‌های CF) ساخته
//    می‌شود: 104.16.133.229 -> 2606:4700::6810:85e5
// ۴. هر لوکیشن یک آی‌پی خروجی ثابت (egress) دارد که با اتصال واقعی تأیید شده
//    است: درخواست به مقصدهای میزبانی‌شده روی کلودفلر (مثل discord.com) از
//    همان IP عبور کرد و loc/ip واقعی هر منطقه از /cdn-cgi/trace خوانده شد.
//    توجه: این خروجی فقط برای مقاصد میزبانی‌شده روی کلودفلر کار می‌کند؛
//    برای Gemini/OpenAI (خارج از کلودفلر) باید پروکسی خروجی s تنظیم شود.
// ============================================================================

const CF_IPV4_RANGES = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22'
];

const CF_IPV6_RANGES = [
  '2400:cb00::/32',
  '2606:4700::/32',
  '2803:f800::/32',
  '2405:b500::/32',
  '2405:8100::/32',
  '2a06:98c0::/29',
  '2c0f:f248::/32'
];

// آی‌پی‌های لبه (edge) کلودفلر که واقعاً به اتصال مشتری پاسخ می‌دهند.
// تأیید شده با: curl --resolve <host>:443:<ip> https://<host>/  => 200
const CLEAN_EDGE_IPV4 = [
  '104.16.1.1',
  '104.16.100.1',
  '104.17.1.1',
  '104.18.1.1',
  '104.19.1.1',
  '104.20.1.1',
  '104.21.1.1',
  '104.24.1.1',
  '104.25.1.1',
  '104.26.1.1',
  '104.27.1.1',
  '188.114.96.10',
  '188.114.97.10',
  '188.114.98.10',
  '172.64.150.1',
  '103.31.4.10'
];

// نگاشت رسمی دوپشته کلودفلر: چهار اوکتت IPv4 -> دو گروه آخر IPv6
// مثال واقعی: 104.16.133.229 = 2606:4700::6810:85e5 و 104.18.12.15 = 2606:4700::6812:c0f
function ipv4ToCloudflareV6(ip) {
  const parts = String(ip || '').trim().split('.').map(n => parseInt(n, 10));
  if (parts.length !== 4 || parts.some(n => !Number.isFinite(n) || n < 0 || n > 255)) return '';
  const hex = n => n.toString(16);
  const g1 = `${hex(parts[0])}${hex(parts[1])}`;
  const g2 = `${hex(parts[2])}${hex(parts[3]).padStart(2, '0')}`;
  return `2606:4700::${g1}:${g2}`;
}

// آی‌پی‌های ثابت IPv6 (مشتق از آی‌پی‌های تأییدشده + AAAA واقعی صفحات کلودفلر)
const CLEAN_EDGE_IPV6 = [
  '2606:4700::6810:101',
  '2606:4700::6810:6401',
  '2606:4700::6811:101',
  '2606:4700::6812:101',
  '2606:4700::6813:101',
  '2606:4700::6814:101',
  '2606:4700::6815:101',
  '2606:4700::6818:101',
  '2606:4700::6819:101',
  '2606:4700::681a:101',
  '2606:4700::681b:101',
  '2606:4700:310c::ac42:2f17'
];

// لوکیشن‌های واقعی: آی‌پی خروجی ثابت + colo واقعی خوانده‌شده از مسیر همان خروجی.
// ترتیب = نزدیک‌ترین/پایدارترین برای کاربران ایران.
const LOCATIONS = [
  { code: 'DE', flag: '🇩🇪', city: 'FRA', name: 'آلمان · فرانکفورت', host: 'ProxyIP.DE.CMLiussss.net', egress: '185.221.237.96', colo: 'FRA' },
  { code: 'NL', flag: '🇳🇱', city: 'AMS', name: 'هلند · آمستردام', host: 'ProxyIP.NL.CMLiussss.net', egress: '147.90.229.230', colo: 'AMS' },
  { code: 'GB', flag: '🇬🇧', city: 'LHR', name: 'بریتانیا · لندن', host: 'ProxyIP.GB.CMLiussss.net', egress: '51.6.54.142', colo: 'LHR' },
  { code: 'FR', flag: '🇫🇷', city: 'FRA', name: 'فرانسه · پاریس', host: 'ProxyIP.FR.CMLiussss.net', egress: '88.218.77.37', colo: 'FRA' },
  { code: 'CH', flag: '🇨🇭', city: 'ZRH', name: 'سوئیس · زوریخ', host: 'ProxyIP.CH.CMLiussss.net', egress: '87.120.222.168', colo: 'ZRH' },
  { code: 'SE', flag: '🇸🇪', city: 'ARN', name: 'سوئد · استکهلم', host: 'ProxyIP.SE.CMLiussss.net', egress: '185.153.180.235', colo: 'ARN' },
  { code: 'FI', flag: '🇫🇮', city: 'HEL', name: 'فنلاند · هلسینکی', host: 'ProxyIP.FI.CMLiussss.net', egress: '91.211.114.208', colo: 'ARN' },
  { code: 'PL', flag: '🇵🇱', city: 'WAW', name: 'لهستان · ورشو', host: 'ProxyIP.PL.CMLiussss.net', egress: '191.44.81.93', colo: 'WAW' },
  { code: 'US', flag: '🇺🇸', city: 'EWR', name: 'آمریکا · نیویورک', host: 'ProxyIP.US.CMLiussss.net', egress: '46.17.107.199', colo: 'EWR' },
  { code: 'CA', flag: '🇨🇦', city: 'YUL', name: 'کانادا · مونترال', host: 'ProxyIP.CA.CMLiussss.net', egress: '45.133.17.27', colo: 'YUL' },
  { code: 'SG', flag: '🇸🇬', city: 'SIN', name: 'سنگاپور', host: 'ProxyIP.SG.CMLiussss.net', egress: '188.239.9.91', colo: 'SIN' },
  { code: 'JP', flag: '🇯🇵', city: 'KIX', name: 'ژاپن · اوزاکا', host: 'ProxyIP.JP.CMLiussss.net', egress: '64.176.62.94', colo: 'KIX' },
  { code: 'KR', flag: '🇰🇷', city: 'ICN', name: 'کره جنوبی · سئول', host: 'ProxyIP.KR.CMLiussss.net', egress: '131.186.26.94', colo: 'ICN' },
  { code: 'HK', flag: '🇭🇰', city: 'HKG', name: 'هنگ‌کنگ', host: 'ProxyIP.HK.CMLiussss.net', egress: '156.239.245.134', colo: 'HKG' },
  { code: 'IN', flag: '🇮🇳', city: 'BOM', name: 'هند · بمبئی', host: 'ProxyIP.IN.CMLiussss.net', egress: '216.10.243.159', colo: 'BOM' },
  { code: 'AU', flag: '🇦🇺', city: 'SYD', name: 'استرالیا · سیدنی', host: 'ProxyIP.AU.CMLiussss.net', egress: '125.7.24.251', colo: 'SYD' }
];

// لوکیشن‌هایی که برای دسترسی به سرویس‌های تحریم‌محور (Gemini، YouTube Premium،
// OpenAI، Spotify و ...) خروجی تمیز و غیر‌تحریمی دارند.
const SANCTION_FREE_CODES = ['DE', 'NL', 'GB', 'FR', 'CH', 'SE', 'US', 'CA'];

function getLocation(code) {
  return LOCATIONS.find(l => l.code === String(code || '').toUpperCase()) || null;
}

// فیلتر locs: '' یا 'all' = همه، 'no' = هیچ‌کدام، در غیر این صورت لیست کدها با کاما
function parseLocationFilter(value = '') {
  const raw = String(value ?? '').trim().toLowerCase();
  if (raw === '' || raw === 'all' || raw === '*') return LOCATIONS.slice();
  if (raw === 'no' || raw === 'off' || raw === '0' || raw === 'none') return [];
  const wanted = raw.split(/[,\s|]+/).filter(Boolean);
  const picked = LOCATIONS.filter(l => wanted.includes(l.code.toLowerCase()));
  return picked;
}

function getSanctionFreeLocations() {if(_0xMDC.tap(0x5a)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
  return LOCATIONS.filter(l => SANCTION_FREE_CODES.includes(l.code));
}

// انتخاب چرخشی آی‌پی لبه برای هر لوکیشن تا هیچ دو نودی آدرس یکسان نگیرند
function edgeIpForIndex(index = 0, ipv6 = false) {
  const pool = ipv6 ? CLEAN_EDGE_IPV6 : CLEAN_EDGE_IPV4;
  const i = Math.abs(parseInt(index, 10) || 0) % pool.length;
  return pool[i];
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
      epd: 'no',
      epi: 'yes',
      egi: 'yes',
      ena: 'no',
      ipv4: 'yes',
      ipv6: 'yes',
      locs: 'DE,NL,GB,FR,CH,SE,FI,PL'
    }
  },
  'mci-ipv6': {
    id: 'mci-ipv6',
    title: 'همراه اول ایران — IPv6 ثابت',
    subtitle: 'همراه اول · ایرانسل · IPv6 فقط',
    badges: ['آی‌پی ثابت IPv6', 'مناسب شبکه همراه اول', 'بدون دامنه'],
    recommended: false,
    nodeScope: 'all',
    subNodeCount: 30,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 50,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      et: 'no',
      ex: 'no',
      epd: 'no',
      epi: 'no',
      egi: 'no',
      ipv4: 'no',
      ipv6: 'yes',
      locs: 'no',
      alpn: 'h2,http/1.1'
    }
  },
  'shadowsocks': {
    id: 'shadowsocks',
    title: 'Shadowsocks — چند رمزنگاری',
    subtitle: 'chacha20-ietf-poly1305 · aes-256-gcm · aes-128-gcm',
    badges: ['AEAD چندگانه', 'SIP002 + v2ray-plugin', 'همراه با VLESS'],
    recommended: false,
    nodeScope: 'all',
    subNodeCount: 30,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 50,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      ss: 'yes',
      ssc: 'all',
      et: 'no',
      ex: 'no',
      epd: 'no',
      epi: 'yes',
      egi: 'yes',
      locs: 'DE,NL,GB,FR,US'
    }
  },
  'sanction-gemini': {
    id: 'sanction-gemini',
    title: 'تحریم‌شکن — خروجی ثابت + پروکسی s',
    subtitle: 'لوکیشن ثابت DE/NL/FR/GB/US + مسیر خروجی وسایل تحریم‌شده',
    badges: ['خروجی ثابت CF (Discord و ...)', 'نیازمند تنظیم پروکسی خروجی s', 'بدون دامنه'],
    recommended: false,
    nodeScope: 'edge',
    subNodeCount: 30,
    dataLimitGb: 0,
    expireDays: 0,
    ipLimit: 5,
    startOnFirstUse: true,
    configOverrides: {
      ev: 'yes',
      et: 'no',
      ex: 'no',
      epd: 'no',
      epi: 'no',
      egi: 'no',
      ena: 'no',
      pm: 'yes',
      qj: 'only',
      locs: 'DE,NL,FR,CH,GB,SE,US,CA',
      alpn: 'h2,http/1.1'
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
      epd: 'no',
      epi: 'yes',
      egi: 'yes',
      locs: 'DE,NL,GB,FR,US,CA,SG,JP,KR,HK'
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
      alpn: 'h2,http/1.1',
      locs: 'all'
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
      epd: 'no',
      epi: 'yes',
      egi: 'yes',
      ena: 'no',
      locs: 'all'
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
      locs: 'no',
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

function isValidUuid(str) {if(_0xMDC.tap(0x49)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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

function normalizeNodeHost(host) {if(_0xMDC.tap(0x38)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
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
    const hashIdx = link.indexOf('#');
    const base = hashIdx > -1 ? link.substring(0, hashIdx) : link;
    let tag = '';
    if (hashIdx > -1) {
      try {
        tag = decodeURIComponent(link.substring(hashIdx + 1));
      } catch (_e) {
        tag = link.substring(hashIdx + 1);
      }
    }
    // نشانگر لوکیشن نود (مثلاً __loc_DE-FRA__) به نام نهایی اضافه می‌شود
    const locMatch = tag.match(/__loc_([A-Za-z0-9-]+)__/);
    const suffix = locMatch ? ` ${locMatch[1]}` : '';
    const nodeName = `${idx + 1}+${cleanBrand}${suffix}`;
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

function formatBytes(bytes = 0) {if(_0xMDC.tap(0x77)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
  const b = Number(bytes) || 0;
  if (b <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(b) / Math.log(1024)));
  const val = b / Math.pow(1024, i);
  return `${val >= 100 || i === 0 ? Math.round(val) : val.toFixed(2)} ${units[i]}`;
}

// ============================================================================
// امن‌سازی خروجی: جلوگیری از تزریق HTML/JS توسط نام کاربری، شناسه‌ها و لینک‌ها
// (قبلاً نام کاربری مستقیماً داخل HTML قرار می‌گرفت و امکان XSS داشت)
// ============================================================================
function escapeHtml(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// امن‌سازی مقدار برای قرار گرفتن داخل رشته جاوااسکریپت درون HTML (مثل onclick="...")
function escapeJsString(value) {
  return escapeHtml(
    String(value === undefined || value === null ? '' : value)
      .replace(/\\/g, '\\\\')
      .replace(/\r?\n/g, '\\n')
      .replace(/'/g, "\\'")
      .replace(/"/g, '\\"')
  );
}

// امن‌سازی داده JSON جهت درج داخل <script> بدون بستن تگ یا اجرای کد
function safeJsonForScript(value) {
  return JSON.stringify(value === undefined ? null : value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}


// --- MODULE: src/core/shadowsocks.js ---
// ============================================================================
// miliconfig v3.3 - موتور Shadowsocks AEAD روی WebSocket
// ----------------------------------------------------------------------------
// پشتیبانی از چند رمزنگاری (بدون وابستگی خارجی):
//   • aes-128-gcm
//   • aes-256-gcm
//   • chacha20-ietf-poly1305  (پیاده‌سازی کامل RFC 8439)
//   • none (سازگاری قدیمی، فقط برای تست)
//
// پروتکل: Shadowsocks AEAD 2017
//   master key = EVP_BytesToKey(password, keyLen) با MD5 و count=1
//   subkey     = HKDF-SHA1(masterKey, salt, "ss-subkey", keyLen)
//   nonce      = شمارنده ۱۲ بایتی little-endian (هر پیام یک واحد)
//   chunk      = [len(2) + tag(16)] + [payload + tag(16)]
// ============================================================================


const SS_CIPHERS = {
  'aes-128-gcm': { name: 'aes-128-gcm', keyLen: 16, saltLen: 16, tagLen: 16, kind: 'aes-gcm' },
  'aes-256-gcm': { name: 'aes-256-gcm', keyLen: 32, saltLen: 32, tagLen: 16, kind: 'aes-gcm' },
  'chacha20-ietf-poly1305': { name: 'chacha20-ietf-poly1305', keyLen: 32, saltLen: 32, tagLen: 16, kind: 'chacha20-poly1305' },
  none: { name: 'none', keyLen: 0, saltLen: 0, tagLen: 0, kind: 'none' }
};

const SS_CIPHER_NAMES = ['aes-128-gcm', 'aes-256-gcm', 'chacha20-ietf-poly1305', 'none'];
const SS_DEFAULT_CIPHER = 'chacha20-ietf-poly1305';
const SS_MAX_CHUNK = 0x3fff;

const SS_INFO = new TextEncoder().encode('ss-subkey');

// ---------------------------------------------------------------- utilities
function hexToBytes(hex = '') {
  const clean = String(hex || '').replace(/[^0-9a-fA-F]/g, '');
  const out = new Uint8Array(Math.floor(clean.length / 2));
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
  return out;
}

function concatBytes(...arrays) {if(_0xMDC.tap(0x66)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
  let total = 0;
  for (const a of arrays) total += a?.byteLength || 0;
  const out = new Uint8Array(total);
  let offset = 0;
  for (const a of arrays) {
    if (!a || !a.byteLength) continue;
    out.set(a, offset);
    offset += a.byteLength;
  }
  return out;
}

function utf8(text) {
  return new TextEncoder().encode(String(text ?? ''));
}

function randomBytes(len = 32) {
  const out = new Uint8Array(len);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(out);
  } else {
    for (let i = 0; i < len; i++) out[i] = Math.floor(Math.random() * 256);
  }
  return out;
}

// ---------------------------------------------------------------- key derive
// EVP_BytesToKey با MD5 و count=1 (همان روش Shadowsocks کلاسیک)
async function evpBytesToKey(password, keyLen = 32) {
  if (!keyLen) return new Uint8Array(0);
  const pass = utf8(password);
  const blocks = [];
  let prev = new Uint8Array(0);
  let produced = 0;
  while (produced < keyLen) {
    prev = hexToBytes(await md5Hex(concatBytes(prev, pass)));
    blocks.push(prev);
    produced += prev.byteLength;
  }
  return concatBytes(...blocks).slice(0, keyLen);
}

async function hkdfSha1(masterKey, salt, keyLen = 32) {
  if (!keyLen) return new Uint8Array(0);
  const base = await crypto.subtle.importKey('raw', masterKey, 'HKDF', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'HKDF', hash: 'SHA-1', salt, info: SS_INFO },
    base,
    keyLen * 8
  );
  return new Uint8Array(bits);
}

async function deriveSubkey(masterKey, salt, keyLen) {if(_0xMDC.tap(0x55)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
  return hkdfSha1(masterKey, salt, keyLen);
}

function incrementNonce(nonce) {
  for (let i = 0; i < nonce.length; i++) {
    nonce[i] = (nonce[i] + 1) & 0xff;
    if (nonce[i] !== 0) break;
  }
  return nonce;
}

// ------------------------------------------------------- ChaCha20 (RFC 8439)
function rotl32(v, n) {
  return ((v << n) | (v >>> (32 - n))) >>> 0;
}

function quarterRound(s, a, b, c, d) {
  s[a] = (s[a] + s[b]) >>> 0; s[d] = rotl32(s[d] ^ s[a], 16);
  s[c] = (s[c] + s[d]) >>> 0; s[b] = rotl32(s[b] ^ s[c], 12);
  s[a] = (s[a] + s[b]) >>> 0; s[d] = rotl32(s[d] ^ s[a], 8);
  s[c] = (s[c] + s[d]) >>> 0; s[b] = rotl32(s[b] ^ s[c], 7);
}

function readU32LE(bytes, offset = 0) {
  return (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24)) >>> 0;
}

function writeU32LE(out, offset, value) {
  out[offset] = value & 0xff;
  out[offset + 1] = (value >>> 8) & 0xff;
  out[offset + 2] = (value >>> 16) & 0xff;
  out[offset + 3] = (value >>> 24) & 0xff;
}

// یک بلوک ۶۴ بایتی ChaCha20
function chacha20Block(key, counter, nonce) {
  const state = new Uint32Array(16);
  state[0] = 0x61707865;
  state[1] = 0x3320646e;
  state[2] = 0x79622d32;
  state[3] = 0x6b206574;
  for (let i = 0; i < 8; i++) state[4 + i] = readU32LE(key, i * 4);
  state[12] = counter >>> 0;
  state[13] = readU32LE(nonce, 0);
  state[14] = readU32LE(nonce, 4);
  state[15] = readU32LE(nonce, 8);

  const working = state.slice();
  for (let i = 0; i < 10; i++) {
    quarterRound(working, 0, 4, 8, 12);
    quarterRound(working, 1, 5, 9, 13);
    quarterRound(working, 2, 6, 10, 14);
    quarterRound(working, 3, 7, 11, 15);
    quarterRound(working, 0, 5, 10, 15);
    quarterRound(working, 1, 6, 11, 12);
    quarterRound(working, 2, 7, 8, 13);
    quarterRound(working, 3, 4, 9, 14);
  }

  const out = new Uint8Array(64);
  for (let i = 0; i < 16; i++) writeU32LE(out, i * 4, (working[i] + state[i]) >>> 0);
  return out;
}

function chacha20Xor(key, nonce, counter, input) {
  const out = new Uint8Array(input.byteLength);
  let blockCounter = counter >>> 0;
  for (let offset = 0; offset < input.byteLength; offset += 64) {
    const block = chacha20Block(key, blockCounter, nonce);
    blockCounter = (blockCounter + 1) >>> 0;
    const end = Math.min(offset + 64, input.byteLength);
    for (let i = offset; i < end; i++) out[i] = input[i] ^ block[i - offset];
  }
  return out;
}

// ------------------------------------------------------ Poly1305 (BigInt)
function leBytesToBigInt(bytes) {
  let value = 0n;
  for (let i = bytes.byteLength - 1; i >= 0; i--) value = (value << 8n) | BigInt(bytes[i]);
  return value;
}

function bigIntToLeBytes(value, len) {
  const out = new Uint8Array(len);
  let v = BigInt(value);
  for (let i = 0; i < len; i++) {
    out[i] = Number(v & 0xffn);
    v >>= 8n;
  }
  return out;
}

function poly1305(msg, key32) {
  const r = leBytesToBigInt(key32.slice(0, 16)) & 0x0ffffffc0ffffffc0ffffffc0fffffffn;
  const s = leBytesToBigInt(key32.slice(16, 32));
  const p = (1n << 130n) - 5n;
  let acc = 0n;
  for (let offset = 0; offset < msg.byteLength; offset += 16) {
    const block = msg.slice(offset, Math.min(offset + 16, msg.byteLength));
    const n = leBytesToBigInt(block) + (1n << BigInt(8 * block.byteLength));
    acc = ((acc + n) * r) % p;
  }
  return bigIntToLeBytes(acc + s, 16);
}

function pad16(bytes) {
  const rem = bytes.byteLength % 16;
  return rem === 0 ? new Uint8Array(0) : new Uint8Array(16 - rem);
}

function u64le(value) {
  return bigIntToLeBytes(BigInt(value), 8);
}

function chacha20Poly1305Seal(key, nonce, plaintext, aad = new Uint8Array(0)) {
  const otk = chacha20Block(key, 0, nonce).slice(0, 32);
  const ciphertext = chacha20Xor(key, nonce, 1, plaintext);
  const macData = concatBytes(
    aad,
    pad16(aad),
    ciphertext,
    pad16(ciphertext),
    u64le(aad.byteLength),
    u64le(ciphertext.byteLength)
  );
  const tag = poly1305(macData, otk);
  return concatBytes(ciphertext, tag);
}

function chacha20Poly1305Open(key, nonce, sealed, aad = new Uint8Array(0)) {
  if (sealed.byteLength < 16) throw new Error('ciphertext too short');
  const ciphertext = sealed.slice(0, sealed.byteLength - 16);
  const tag = sealed.slice(sealed.byteLength - 16);
  const otk = chacha20Block(key, 0, nonce).slice(0, 32);
  const macData = concatBytes(
    aad,
    pad16(aad),
    ciphertext,
    pad16(ciphertext),
    u64le(aad.byteLength),
    u64le(ciphertext.byteLength)
  );
  const expected = poly1305(macData, otk);
  let diff = 0;
  for (let i = 0; i < 16; i++) diff |= expected[i] ^ tag[i];
  if (diff !== 0) throw new Error('authentication failed');
  return chacha20Xor(key, nonce, 1, ciphertext);
}

// ------------------------------------------------------------- AEAD wrapper
async function importAesKey(rawKey) {if(_0xMDC.tap(0x44)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
  return crypto.subtle.importKey('raw', rawKey, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
}

async function aeadSeal(cipher, key, nonce, plaintext) {
  const spec = SS_CIPHERS[cipher] || SS_CIPHERS[SS_DEFAULT_CIPHER];
  if (spec.kind === 'none') return plaintext.slice();
  if (spec.kind === 'chacha20-poly1305') return chacha20Poly1305Seal(key, nonce, plaintext);
  const aesKey = await importAesKey(key);
  const buf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce, tagLength: 128 }, aesKey, plaintext);
  return new Uint8Array(buf);
}

async function aeadOpen(cipher, key, nonce, sealed) {
  const spec = SS_CIPHERS[cipher] || SS_CIPHERS[SS_DEFAULT_CIPHER];
  if (spec.kind === 'none') return sealed.slice();
  if (spec.kind === 'chacha20-poly1305') return chacha20Poly1305Open(key, nonce, sealed);
  const aesKey = await importAesKey(key);
  const buf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce, tagLength: 128 }, aesKey, sealed);
  return new Uint8Array(buf);
}

// ------------------------------------------------------------- chunk framing
async function writeChunk(encoderState, payload) {
  const spec = encoderState.spec;
  let offset = 0;
  const parts = [];
  while (offset < payload.byteLength) {
    const slice = payload.slice(offset, Math.min(offset + SS_MAX_CHUNK, payload.byteLength));
    offset += slice.byteLength;
    const lenBuf = new Uint8Array([(slice.byteLength >> 8) & 0xff, slice.byteLength & 0xff]);
    const sealedLen = await aeadSeal(spec.name, encoderState.key, encoderState.nonce, lenBuf);
    incrementNonce(encoderState.nonce);
    const sealedPayload = await aeadSeal(spec.name, encoderState.key, encoderState.nonce, slice);
    incrementNonce(encoderState.nonce);
    parts.push(sealedLen, sealedPayload);
  }
  return parts.length ? concatBytes(...parts) : new Uint8Array(0);
}

// وضعیت رمزگشایی سمت سرور (کلاینت -> سرور) یا سمت کلاینت
function createDecoder({ cipher, masterKey, salt = null }) {
  const spec = SS_CIPHERS[cipher];
  return {
    spec,
    cipher: spec.name,
    masterKey,
    key: null,
    nonce: new Uint8Array(12),
    buffer: new Uint8Array(0),
    pendingLength: null,
    salt,
    ready: false,
    async init(saltBytes) {if(_0xMDC.tap(0x33)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
      this.salt = saltBytes || this.salt || randomBytes(spec.saltLen);
      this.key = await deriveSubkey(masterKey, this.salt, spec.keyLen);
      this.ready = true;
    },
    // دریافت بایت خام (در اولین فراخوانی، salt) و برگرداندن payloadهای کامل
    async push(bytes) {
      this.buffer = concatBytes(this.buffer, bytes);
      if (!this.ready) {
        if (this.buffer.byteLength < spec.saltLen) return [];
        if (spec.saltLen === 0) {
          await this.init(new Uint8Array(0));
        } else {
          await this.init(this.buffer.slice(0, spec.saltLen));
          this.buffer = this.buffer.slice(spec.saltLen);
        }
      }
      const out = [];
      for (;;) {
        // طول هر chunk فقط یک‌بار رمزگشایی و از بافر حذف می‌شود تا در فریم‌های
        // ناقص، nonce دوباره مصرف نشود.
        if (this.pendingLength === null || this.pendingLength === undefined) {
          if (this.buffer.byteLength < 2 + spec.tagLen) break;
          let lenBytes;
          try {
            lenBytes = await aeadOpen(this.cipher, this.key, this.nonce, this.buffer.slice(0, 2 + spec.tagLen));
          } catch (_e) {
            throw new Error('ss-length-auth-failed');
          }
          incrementNonce(this.nonce);
          this.buffer = this.buffer.slice(2 + spec.tagLen);
          const length = (lenBytes[0] << 8) | lenBytes[1];
          if (length <= 0 || length > SS_MAX_CHUNK) throw new Error('ss-invalid-length');
          this.pendingLength = length;
        }
        const length = this.pendingLength;
        if (this.buffer.byteLength < length + spec.tagLen) break;
        const sealed = this.buffer.slice(0, length + spec.tagLen);
        let payload;
        try {
          payload = await aeadOpen(this.cipher, this.key, this.nonce, sealed);
        } catch (_e) {
          throw new Error('ss-payload-auth-failed');
        }
        incrementNonce(this.nonce);
        this.buffer = this.buffer.slice(length + spec.tagLen);
        this.pendingLength = null;
        out.push(payload);
      }
      return out;
    }
  };
}

// وضعیت رمزنگاری سمت سرور (سرور -> کلاینت) با salt تصادفی جدید
async function createEncoder({ cipher, masterKey }) {
  const spec = SS_CIPHERS[cipher];
  const salt = randomBytes(spec.saltLen);
  const key = await deriveSubkey(masterKey, salt, spec.keyLen);
  let saltSent = false;
  return {
    spec,
    cipher: spec.name,
    salt,
    key,
    nonce: new Uint8Array(12),
    // اولین خروجی باید با salt همان جهت شروع شود (پروتکل SS AEAD)
    async encode(payload) {
      const body = await writeChunk(this, payload);
      if (!saltSent && spec.saltLen > 0) {
        saltSent = true;
        return concatBytes(salt, body);
      }
      saltSent = true;
      return body;
    }
  };
}

// ------------------------------------------------------------ address codec
// انواع آدرس در Shadowsocks همان ATYP پروتکل SOCKS5 است:
//   0x01 = IPv4، 0x03 = دامنه (len + name)، 0x04 = IPv6
// (استفاده از ۲ برای دامنه یا ۳ برای IPv6 باعث می‌شود کلاینت‌های واقعی مقصد را اشتباه بخوانند.)
const SS_ATYP_IPV4 = 1;
const SS_ATYP_DOMAIN = 3;
const SS_ATYP_IPV6 = 4;

function encodeSsAddress(host, port, addressType = null) {
  const clean = String(host || '').trim().replace(/^\[|\]$/g, '');
  const portBuf = new Uint8Array([(port >> 8) & 0xff, port & 0xff]);
  const type = addressType || (
    clean.includes(':')
      ? SS_ATYP_IPV6
      : /^\d{1,3}(\.\d{1,3}){3}$/.test(clean)
        ? SS_ATYP_IPV4
        : SS_ATYP_DOMAIN
  );
  if (type === SS_ATYP_IPV4) {
    const octets = clean.split('.').map(n => parseInt(n, 10) & 0xff);
    return concatBytes(new Uint8Array([SS_ATYP_IPV4, ...octets]), portBuf);
  }
  if (type === SS_ATYP_IPV6) {
    const groups = expandIpv6(clean);
    const bytes = new Uint8Array(16);
    groups.forEach((g, i) => {if(_0xMDC.tap(0x72)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
      bytes[i * 2] = (g >> 8) & 0xff;
      bytes[i * 2 + 1] = g & 0xff;
    });
    return concatBytes(new Uint8Array([SS_ATYP_IPV6]), bytes, portBuf);
  }
  const name = utf8(clean).slice(0, 255);
  return concatBytes(new Uint8Array([SS_ATYP_DOMAIN, name.byteLength]), name, portBuf);
}

function expandIpv6(ip) {
  const clean = String(ip || '').trim();
  const halves = clean.split('::');
  const left = halves[0] ? halves[0].split(':').filter(Boolean) : [];
  const right = halves[1] ? halves[1].split(':').filter(Boolean) : [];
  const missing = 8 - (left.length + right.length);
  const groups = [...left, ...Array(Math.max(0, missing)).fill('0'), ...right];
  return groups.slice(0, 8).map(g => parseInt(g || '0', 16) & 0xffff);
}

function parseSsAddress(bytes) {
  if (!bytes || bytes.byteLength < 1) return null;
  const atyp = bytes[0];
  let offset = 1;
  let host = '';
  if (atyp === SS_ATYP_IPV4) {
    if (bytes.byteLength < offset + 4 + 2) return null;
    host = Array.from(bytes.slice(offset, offset + 4)).join('.');
    offset += 4;
  } else if (atyp === SS_ATYP_IPV6) {
    if (bytes.byteLength < offset + 16 + 2) return null;
    const groups = [];
    for (let i = 0; i < 8; i++) {
      groups.push(((bytes[offset + i * 2] << 8) | bytes[offset + i * 2 + 1]).toString(16));
    }
    host = groups.join(':');
    offset += 16;
  } else if (atyp === SS_ATYP_DOMAIN) {
    if (bytes.byteLength < offset + 1) return null;
    const len = bytes[offset];
    offset += 1;
    if (!len || bytes.byteLength < offset + len + 2) return null;
    host = new TextDecoder().decode(bytes.slice(offset, offset + len));
    offset += len;
  } else {
    return null;
  }
  const port = (bytes[offset] << 8) | bytes[offset + 1];
  offset += 2;
  if (!host || !port) return null;
  return {
    host,
    port,
    addressType: atyp,
    headLength: offset,
    payload: bytes.slice(offset)
  };
}

// ------------------------------------------------------------ config helpers
function normalizeSsCipherName(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (raw === 'chacha20-poly1305') return 'chacha20-ietf-poly1305';
  if (raw === 'chacha20') return 'chacha20-ietf-poly1305';
  if (raw === 'plain' || raw === 'none') return 'none';
  return SS_CIPHERS[raw] ? raw : '';
}

// ssc می‌تواند یک نام، لیست کاما‌دار یا all باشد
function resolveSsCiphers(value) {
  const raw = String(value ?? '').trim().toLowerCase();
  if (raw === 'all' || raw === '*') return ['aes-128-gcm', 'aes-256-gcm', 'chacha20-ietf-poly1305'];
  if (!raw) return [SS_DEFAULT_CIPHER];
  const list = raw
    .split(/[,\s|]+/)
    .map(normalizeSsCipherName)
    .filter(Boolean);
  return list.length ? Array.from(new Set(list)) : [SS_DEFAULT_CIPHER];
}

function pickPrimarySsCipher(value) {if(_0xMDC.tap(0x61)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
  return resolveSsCiphers(value)[0] || SS_DEFAULT_CIPHER;
}

// دیتای همراه آدرس در همان اولین chunk (مثلاً ClientHello در TLS) باید بلافاصله
// به مقصد فرستاده شود؛ در غیر این صورت دست‌دهی کلاینت معطل می‌ماند.
function collectSsUploadPayloads({ target, payloads } = {}) {
  const out = [];
  if (target?.payload?.byteLength) out.push(target.payload);
  for (const payload of (payloads || []).slice(1)) {
    if (payload?.byteLength) out.push(payload);
  }
  return out;
}

// ------------------------------------------------------------- auth attempt
// تلاش برای باز کردن اولین فریم کلاینت با رمز کاربر؛ در صورت موفقیت،
// payload اول (شامل آدرس مقصد) و decoder آماده برمی‌گردد.
async function tryOpenShadowsocks(firstFrame, password, ciphers = [SS_DEFAULT_CIPHER]) {
  const candidates = (ciphers.length ? ciphers : [SS_DEFAULT_CIPHER]).filter(c => SS_CIPHERS[c]);
  for (const cipher of candidates) {
    const spec = SS_CIPHERS[cipher];
    try {
      const masterKey = await evpBytesToKey(password, spec.keyLen);
      const decoder = createDecoder({ cipher, masterKey });
      const payloads = await decoder.push(firstFrame);
      if (!payloads.length) continue;
      const target = parseSsAddress(payloads[0]);
      if (!target) continue;
      return { cipher, decoder, masterKey, target, payloads };
    } catch (_e) {
      // رمز/رمزنگاری بعدی
    }
  }
  return null;
}


// --- MODULE: src/core/scanner.js ---
// ============================================================================
// miliconfig v3.2 - اسکنر داخلی آی‌پی (معادل cfnew) + تبدیل دامنه به آی‌پی ثابت
// ----------------------------------------------------------------------------
// چرا فقط TCP کافی نیست؟
//   بسیاری از آی‌پی‌های رنج رسمی کلودفلر پورت ۴۴۳ را باز می‌کنند اما TLS با SNI
//   مقصد را پاسخ نمی‌دهند (نود مرده). بنابراین اسکنر یک ClientHello واقعی با SNI
//   ارسال می‌کند و فقط آی‌پی‌هایی قبول می‌شوند که ServerHello برمی‌گردانند.
//   همین منطق در scripts/cf-scan.js و پنل مدیریت استفاده می‌شود.
// ============================================================================


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

function bigIntToIp(value) {if(_0xMDC.tap(0x50)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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
function generateCandidateIps({ count = 20, ipv6 = false, seedIps = [], rand = Math.random } = {}) {
  const total = Math.max(1, Math.min(MAX_SCAN_COUNT, parseInt(count, 10) || 20));
  const out = [];
  const seen = new Set();
  const push = ip => {if(_0xMDC.tap(0x3f)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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

function parseTrace(text) {
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
function buildClientHello(hostname = DEFAULT_PROBE_SNI, rand = Math.random) {
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

function withTimeout(promise, ms, message = 'timeout') {if(_0xMDC.tap(0x2e)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
  let timer = null;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), Math.max(300, Math.min(10000, ms)));
  });
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

// تست واقعی: اتصال TCP + ارسال ClientHello با SNI مقصد و انتظار ServerHello
async function probeIpTls(ip, { port = 443, timeoutMs = DEFAULT_TIMEOUT_MS, sni = DEFAULT_PROBE_SNI, connector = null } = {}) {
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
async function scanIpPool(ips = [], {
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

  async function worker() {if(_0xMDC.tap(0x6d)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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

function summarizeScanResults(results = []) {
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
async function resolveHostToFixedIps(host, { timeoutMs = 4000, type = 'A' } = {}) {
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

async function resolveHostsToFixedIps(hosts = [], { timeoutMs = 4000 } = {}) {
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
function normalizeScanInput(rawIps = [], { ipv6 = false, count = 20, rand = Math.random } = {}) {if(_0xMDC.tap(0x5c)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
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

const SCANNER_LIMITS = {
  maxCount: MAX_SCAN_COUNT,
  defaultPort: 443,
  defaultTimeoutMs: DEFAULT_TIMEOUT_MS,
  defaultConcurrency: DEFAULT_CONCURRENCY,
  defaultSni: DEFAULT_PROBE_SNI
};


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
    /* Safe-Area آیفون برای دکمه شناور */
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
      .btn-neon, .btn-ghost, .copy-btn, .dl-btn, .top-pill, .sb-btn, .menu-toggle, .sb-close {
        min-height: 44px;
      }
      .btn-neon, .btn-ghost { padding: 12px 16px; }
      .copy-btn { padding: 11px 14px; }
      .toast-box, .toast { top: calc(12px + env(safe-area-inset-top, 0px)); max-width: calc(100% - 24px); }
      /* روی صفحه‌های لمسی نیازی به فاصله اضافه فوکوس نیست */
      *:focus-visible { outline-offset: 0; }
    }
`;


// --- MODULE: src/ui/fx.js ---
// ============================================================================
// miliconfig v3.1 - لایه مشترک جلوه‌های بصری (FX) برای هر سه صفحه رابط کاربری
// ----------------------------------------------------------------------------
// این ماژول سه چیز را به همه صفحات تزریق می‌کند:
//   ۱. FX_CSS      : استایل‌های انیمیشن (پس‌زمینه زنده، ورود نرم، هاور، مودال، توست، اسکلتون)
//   ۲. FX_MARKUP   : لایه پس‌زمینه (اورورا + گرید متحرک + بوم ذرات + اسکن‌لاین + وینیت)
//   ۳. FX_RUNTIME_JS: موتور انیمیشن (Canvas ذرات، شمارنده‌ها، Reveal، Ripple، توست، کپی)
// همه جلوه‌ها به prefers-reduced-motion احترام می‌گذارند و روی موبایل سبک‌تر اجرا می‌شوند.
// ============================================================================

const FX_CSS = `
    /* ================= miliconfig FX: پس‌زمینه زنده و انیمیشن‌ها ================= */
    .fx-bg {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
      contain: strict;
      background: transparent;
    }
    .fx-aurora {
      position: absolute;
      inset: -18% -12%;
      filter: blur(58px);
      opacity: 0.62;
    }
    .fx-blob {
      position: absolute;
      border-radius: 50%;
      will-change: transform, opacity;
    }
    .fx-blob-1 {
      width: 46vmax;
      height: 46vmax;
      top: -14vmax;
      right: -10vmax;
      background: radial-gradient(circle, rgba(163, 230, 53, 0.5) 0%, rgba(132, 204, 22, 0.14) 48%, transparent 70%);
      animation: fxDriftA 26s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
    }
    .fx-blob-2 {
      width: 40vmax;
      height: 40vmax;
      bottom: -16vmax;
      left: -12vmax;
      background: radial-gradient(circle, rgba(34, 197, 94, 0.42) 0%, rgba(21, 128, 61, 0.12) 50%, transparent 72%);
      animation: fxDriftB 32s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
    }
    .fx-blob-3 {
      width: 30vmax;
      height: 30vmax;
      top: 42%;
      left: 46%;
      background: radial-gradient(circle, rgba(181, 255, 77, 0.32) 0%, transparent 68%);
      animation: fxDriftC 38s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
    }
    @keyframes fxDriftA {
      0%   { transform: translate3d(0, 0, 0) scale(1); opacity: 0.9; }
      50%  { transform: translate3d(-6vmax, 4vmax, 0) scale(1.12); opacity: 0.7; }
      100% { transform: translate3d(4vmax, -3vmax, 0) scale(0.96); opacity: 0.85; }
    }
    @keyframes fxDriftB {
      0%   { transform: translate3d(0, 0, 0) scale(1.04); opacity: 0.8; }
      50%  { transform: translate3d(7vmax, -5vmax, 0) scale(0.94); opacity: 0.95; }
      100% { transform: translate3d(-4vmax, 3vmax, 0) scale(1.1); opacity: 0.72; }
    }
    @keyframes fxDriftC {
      0%   { transform: translate3d(-6vmax, 2vmax, 0) scale(0.9); opacity: 0.55; }
      100% { transform: translate3d(6vmax, -4vmax, 0) scale(1.16); opacity: 0.8; }
    }
    .fx-grid {
      position: absolute;
      inset: -60px;
      background-image:
        linear-gradient(rgba(163, 230, 53, 0.055) 1px, transparent 1px),
        linear-gradient(90deg, rgba(163, 230, 53, 0.055) 1px, transparent 1px);
      background-size: 46px 46px;
      mask-image: radial-gradient(circle at 50% 34%, #000 0%, rgba(0, 0, 0, 0.55) 46%, transparent 78%);
      -webkit-mask-image: radial-gradient(circle at 50% 34%, #000 0%, rgba(0, 0, 0, 0.55) 46%, transparent 78%);
      animation: fxGridPan 34s linear infinite;
    }
    @keyframes fxGridPan {
      0%   { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(46px, 46px, 0); }
    }
    .fx-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
    .fx-spot {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        520px circle at var(--fx-mx, 50%) var(--fx-my, 20%),
        rgba(181, 255, 77, 0.09),
        rgba(132, 204, 22, 0.035) 42%,
        transparent 66%
      );
      transition: opacity 0.5s ease;
    }
    .fx-scan {
      position: absolute;
      left: 0;
      right: 0;
      height: 38vh;
      background: linear-gradient(180deg, transparent, rgba(181, 255, 77, 0.055), transparent);
      animation: fxScan 9.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes fxScan {
      0%   { transform: translate3d(0, -42vh, 0); opacity: 0; }
      12%  { opacity: 1; }
      88%  { opacity: 1; }
      100% { transform: translate3d(0, 104vh, 0); opacity: 0; }
    }
    .fx-vignette {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 50% 0%, transparent 42%, rgba(0, 0, 0, 0.55) 100%);
    }

    /* نوار پیشرفت اسکرول */
    .fx-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      z-index: 90;
      background: transparent;
      pointer-events: none;
    }
    .fx-progress-bar > i {
      display: block;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, rgba(132, 204, 22, 0.6), #b5ff4d 60%, #eaffb0);
      box-shadow: 0 0 12px rgba(181, 255, 77, 0.6);
      transition: width 0.12s linear;
    }

    /* ================= ورود نرم عناصر (Reveal) ================= */
    .fx-reveal {
      opacity: 0;
      transform: translate3d(0, 16px, 0) scale(0.995);
      transition:
        opacity 0.62s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.72s cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: calc(var(--fx-i, 0) * 55ms);
      will-change: opacity, transform;
    }
    .fx-reveal.fx-in {
      opacity: 1;
      transform: none;
    }
    .fx-fade {
      animation: fxFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
      animation-delay: calc(var(--fx-i, 0) * 60ms);
    }
    @keyframes fxFadeUp {
      from { opacity: 0; transform: translate3d(0, 18px, 0); }
      to   { opacity: 1; transform: none; }
    }

    /* ================= کارت‌ها: هاور نرم و درخشش ================= */
    .fx-card {
      position: relative;
      transition:
        transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        border-color 0.42s ease,
        box-shadow 0.42s ease,
        background-color 0.42s ease;
    }
    .fx-card::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: radial-gradient(
        340px circle at var(--fx-cx, 50%) var(--fx-cy, 0%),
        rgba(181, 255, 77, 0.11),
        transparent 62%
      );
      opacity: 0;
      transition: opacity 0.45s ease;
      pointer-events: none;
    }
    .fx-card:hover { transform: translate3d(0, -4px, 0); }
    .fx-card:hover::after { opacity: 1; }
    .fx-card:active { transform: translate3d(0, -1px, 0) scale(0.995); }

    /* خط نور بالای کارت‌ها */
    .fx-shine {
      position: relative;
      overflow: hidden;
    }
    .fx-shine::before {
      content: "";
      position: absolute;
      top: 0;
      left: -40%;
      width: 180%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(181, 255, 77, 0.75), transparent);
      opacity: 0.55;
      animation: fxShine 5.5s ease-in-out infinite;
    }
    @keyframes fxShine {
      0%, 100% { transform: translate3d(-22%, 0, 0); opacity: 0.25; }
      50%      { transform: translate3d(22%, 0, 0); opacity: 0.8; }
    }

    /* ================= دکمه‌ها: ریپل + درخشش ================= */
    .fx-ripple {
      position: relative;
      overflow: hidden;
      isolation: isolate;
    }
    .fx-ripple > .fx-ripple-ink {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      background: radial-gradient(circle, rgba(181, 255, 77, 0.45), transparent 70%);
      animation: fxRipple 0.62s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      pointer-events: none;
      z-index: 0;
    }
    @keyframes fxRipple {
      to { transform: scale(2.6); opacity: 0; }
    }

    /* ================= توست با انیمیشن روان ================= */
    .fx-toast-host {
      position: fixed;
      top: calc(14px + env(safe-area-inset-top, 0px));
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: min(92vw, 460px);
      pointer-events: none;
    }
    .fx-toast {
      width: 100%;
      text-align: center;
      padding: 11px 18px;
      border-radius: 999px;
      font-size: 0.86rem;
      font-weight: 800;
      background: rgba(12, 24, 12, 0.94);
      border: 1px solid rgba(181, 255, 77, 0.5);
      color: #d9ff9b;
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.66), 0 0 20px rgba(163, 230, 53, 0.14);
      backdrop-filter: blur(12px);
      animation: fxToastIn 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    .fx-toast.fx-toast-out { animation: fxToastOut 0.34s ease both; }
    .fx-toast.fx-toast-error {
      border-color: rgba(248, 113, 113, 0.6);
      color: #ffc9c9;
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.66), 0 0 20px rgba(248, 113, 113, 0.16);
    }
    .fx-toast.fx-toast-info {
      border-color: rgba(163, 230, 53, 0.4);
      color: #e6f7d2;
    }
    @keyframes fxToastIn {
      from { opacity: 0; transform: translate3d(0, -18px, 0) scale(0.96); }
      to   { opacity: 1; transform: none; }
    }
    @keyframes fxToastOut {
      from { opacity: 1; transform: none; }
      to   { opacity: 0; transform: translate3d(0, -12px, 0) scale(0.97); }
    }

    /* ================= اسکلتون بارگذاری ================= */
    .fx-skeleton {
      position: relative;
      overflow: hidden;
      background: rgba(163, 230, 53, 0.06);
      border-radius: 12px;
      min-height: 52px;
    }
    .fx-skeleton::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(181, 255, 77, 0.14), transparent);
      animation: fxSkel 1.25s linear infinite;
    }
    @keyframes fxSkel {
      from { transform: translate3d(-100%, 0, 0); }
      to   { transform: translate3d(100%, 0, 0); }
    }

    /* ================= مودال نرم ================= */
    .fx-modal-anim {
      transition: opacity 0.3s ease;
    }
    .fx-modal-anim > * {
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.42s ease;
    }
    .fx-modal-anim.open > * {
      transform: none;
      opacity: 1;
    }

    /* ================= حلقه مصرف (Usage Ring) ================= */
    .fx-ring {
      --fx-p: 0;
      position: relative;
      border-radius: 50%;
      background:
        conic-gradient(
          from -90deg,
          #b5ff4d 0turn,
          #84cc16 calc(var(--fx-p) * 1turn),
          rgba(163, 230, 53, 0.14) calc(var(--fx-p) * 1turn),
          rgba(163, 230, 53, 0.14) 1turn
        );
      transition: none;
    }
    .fx-ring::before {
      content: "";
      position: absolute;
      inset: 9px;
      border-radius: 50%;
      background: #080f08;
      border: 1px solid rgba(163, 230, 53, 0.16);
    }
    .fx-ring > .fx-ring-inner {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1px;
      text-align: center;
      z-index: 1;
    }
    .fx-ring-pulse {
      animation: fxRingPulse 3.6s ease-in-out infinite;
    }
    @keyframes fxRingPulse {
      0%, 100% { filter: drop-shadow(0 0 6px rgba(181, 255, 77, 0.28)); }
      50%      { filter: drop-shadow(0 0 18px rgba(181, 255, 77, 0.55)); }
    }

    /* ================= تایپ ترمینال دکوراتیو ================= */
    .fx-caret::after {
      content: "▌";
      color: #b5ff4d;
      animation: fxCaret 1.05s steps(2, start) infinite;
    }
    @keyframes fxCaret {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    .fx-typing {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      vertical-align: bottom;
      max-width: 100%;
      animation: fxTyping 3.6s steps(46, end) infinite alternate;
    }
    @keyframes fxTyping {
      from { width: 0; }
      to   { width: 100%; }
    }

    /* ================= برچسب‌های زنده (نقطه تپنده) ================= */
    .fx-live-dot {
      animation: fxLive 1.9s ease-in-out infinite;
    }
    @keyframes fxLive {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%      { transform: scale(1.45); opacity: 0.55; }
    }
    .fx-float { animation: fxFloat 6.5s ease-in-out infinite; }
    @keyframes fxFloat {
      0%, 100% { transform: translate3d(0, 0, 0); }
      50%      { transform: translate3d(0, -7px, 0); }
    }
    .fx-spin-slow { animation: fxSpin 22s linear infinite; }
    @keyframes fxSpin { to { transform: rotate(360deg); } }

    /* احترام کامل به تنظیم کاهش حرکت کاربر */
    @media (prefers-reduced-motion: reduce) {
      .fx-blob, .fx-grid, .fx-scan, .fx-shine::before, .fx-typing,
      .fx-live-dot, .fx-float, .fx-spin-slow, .fx-ring-pulse {
        animation: none !important;
      }
      .fx-reveal { opacity: 1 !important; transform: none !important; }
      .fx-canvas { display: none; }
    }
    /* روی موبایل جلوه‌های سنگین سبک‌تر می‌شوند */
    @media (max-width: 760px) {
      .fx-aurora { filter: blur(42px); opacity: 0.5; }
      .fx-grid { background-size: 34px 34px; }
      .fx-scan { display: none; }
    }
`;

const FX_MARKUP = `<div class="fx-bg" aria-hidden="true">
    <div class="fx-aurora">
      <span class="fx-blob fx-blob-1"></span>
      <span class="fx-blob fx-blob-2"></span>
      <span class="fx-blob fx-blob-3"></span>
    </div>
    <canvas class="fx-canvas" id="fxCanvas"></canvas>
    <div class="fx-grid"></div>
    <div class="fx-spot"></div>
    <div class="fx-scan"></div>
    <div class="fx-vignette"></div>
  </div>
  <div class="fx-progress-bar" aria-hidden="true"><i id="fxProgressFill"></i></div>
  <div class="fx-toast-host" id="fxToastHost" role="status" aria-live="polite"></div>`;

const FX_RUNTIME_JS = `
    // ================= miliconfig FX runtime (انیمیشن‌های روان) =================
    (function () {
      var reduceMotion = false;
      try {
        reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      } catch (_e) {}

      var host = document.getElementById('fxToastHost');

      function esc(str) {
        return String(str === undefined || str === null ? '' : str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      function jsStr(str) {
        // امن‌سازی مقدار برای قرار گرفتن داخل onclick="..." یا رشته جاوااسکریپت
        return esc(String(str === undefined || str === null ? '' : str).replace(/\\\\/g, '\\\\\\\\').replace(/'/g, "\\\\'"));
      }

      function kindOf(msg) {
        var m = String(msg || '');
        if (/خطا|ناموفق|نا موفق|غیرمجاز|مشکل|error|failed/i.test(m)) return 'error';
        if (/کپی شد|ذخیره|ساخته شد|موفق|فعال شد|انجام شد|بروزرسانی/i.test(m)) return 'success';
        return 'info';
      }

      function toast(msg, kind) {
        var text = String(msg || '');
        if (!host) {
          try { window.console && console.log('[miliconfig]', text); } catch (_e) {}
          return;
        }
        var el = document.createElement('div');
        el.className = 'fx-toast fx-toast-' + (kind || kindOf(text));
        el.textContent = text;
        host.appendChild(el);
        while (host.children.length > 3) host.removeChild(host.firstChild);
        window.setTimeout(function () {
          el.classList.add('fx-toast-out');
          window.setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
          }, 340);
        }, 2600);
      }

      // ---------- بوم ذرات پس‌زمینه (سبک، با احترام به باتری و DPR) ----------
      function initCanvas() {
        var canvas = document.getElementById('fxCanvas');
        if (!canvas || !canvas.getContext) return;
        if (reduceMotion) { canvas.style.display = 'none'; return; }
        var ctx = canvas.getContext('2d');
        if (!ctx) return;

        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var width = 0;
        var height = 0;
        var particles = [];
        var running = true;
        var last = 0;
        var rafId = 0;
        var pointerX = -9999;
        var pointerY = -9999;

        function resize() {
          width = canvas.clientWidth || window.innerWidth;
          height = canvas.clientHeight || window.innerHeight;
          canvas.width = Math.max(1, Math.floor(width * dpr));
          canvas.height = Math.max(1, Math.floor(height * dpr));
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          build();
        }

        function build() {
          var budget = Math.max(24, Math.min(88, Math.floor((width * height) / 23000)));
          particles = [];
          for (var i = 0; i < budget; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.22,
              vy: (Math.random() - 0.5) * 0.22,
              r: Math.random() * 1.7 + 0.6,
              a: Math.random() * 0.5 + 0.28
            });
          }
        }

        function step(ts) {
          if (!running) return;
          var dt = last ? Math.min(48, ts - last) : 16;
          last = ts;
          ctx.clearRect(0, 0, width, height);

          for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx * (dt / 16);
            p.y += p.vy * (dt / 16);
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;
            if (p.y < -20) p.y = height + 20;
            if (p.y > height + 20) p.y = -20;

            // تعامل نرم با اشاره‌گر
            var dxm = p.x - pointerX;
            var dym = p.y - pointerY;
            var dm = Math.sqrt(dxm * dxm + dym * dym);
            if (dm < 130) {
              p.x += (dxm / (dm || 1)) * 0.5;
              p.y += (dym / (dm || 1)) * 0.5;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(181, 255, 77, ' + p.a.toFixed(2) + ')';
            ctx.fill();
          }

          for (var a = 0; a < particles.length; a++) {
            for (var b = a + 1; b < particles.length; b++) {
              var pa = particles[a];
              var pb = particles[b];
              var dx = pa.x - pb.x;
              var dy = pa.y - pb.y;
              var dist2 = dx * dx + dy * dy;
              if (dist2 < 20000) {
                var alpha = (1 - dist2 / 20000) * 0.22;
                ctx.strokeStyle = 'rgba(132, 204, 22, ' + alpha.toFixed(3) + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(pa.x, pa.y);
                ctx.lineTo(pb.x, pb.y);
                ctx.stroke();
              }
            }
          }

          rafId = window.requestAnimationFrame(step);
        }

        function start() {
          if (running && !rafId) {
            running = true;
            last = 0;
            rafId = window.requestAnimationFrame(step);
          }
        }

        function stop() {
          running = false;
          if (rafId) window.cancelAnimationFrame(rafId);
          rafId = 0;
        }

        window.addEventListener('resize', function () {
          window.clearTimeout(window.__fxResizeTimer);
          window.__fxResizeTimer = window.setTimeout(resize, 180);
        }, { passive: true });

        window.addEventListener('pointermove', function (e) {
          pointerX = e.clientX || 0;
          pointerY = e.clientY || 0;
        }, { passive: true });

        document.addEventListener('visibilitychange', function () {
          if (document.hidden) stop();
          else start();
        });

        resize();
        start();
      }

      // ---------- نوار پیشرفت اسکرول + نور اشاره‌گر روی کارت‌ها ----------
      function initScrollFx() {
        var fill = document.getElementById('fxProgressFill');
        var spot = document.querySelector('.fx-spot');
        var ticking = false;

        function frame() {
          ticking = false;
          if (fill) {
            var doc = document.documentElement;
            var max = (doc.scrollHeight || 0) - (window.innerHeight || 0);
            var pct = max > 24 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
            fill.style.width = pct.toFixed(2) + '%';
          }
          if (spot) {
            spot.style.setProperty('--fx-mx', (window.__fxMx || 50) + '%');
            spot.style.setProperty('--fx-my', (window.__fxMy || 20) + '%');
          }
        }

        function request() {
          if (ticking) return;
          ticking = true;
          window.requestAnimationFrame(frame);
        }

        window.addEventListener('scroll', request, { passive: true });
        window.addEventListener('pointermove', function (e) {
          if (!spot) return;
          window.__fxMx = ((e.clientX / Math.max(1, window.innerWidth)) * 100).toFixed(2);
          window.__fxMy = ((e.clientY / Math.max(1, window.innerHeight)) * 100).toFixed(2);
          request();
        }, { passive: true });
        frame();
      }

      // ---------- نمایش نرم عناصر با ورود پله‌ای ----------
      function reveal(root) {
        var scope = root || document;
        var nodes = scope.querySelectorAll('.fx-reveal:not(.fx-in)');
        if (reduceMotion || !('IntersectionObserver' in window)) {
          for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('fx-in');
          return;
        }
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('fx-in');
              io.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
        for (var j = 0; j < nodes.length; j++) io.observe(nodes[j]);
      }

      // ---------- شمارنده نرم اعداد ----------
      function countUp(el, to, formatter) {
        if (!el) return;
        var target = Number(to) || 0;
        var fmt = typeof formatter === 'function' ? formatter : function (v) { return String(Math.round(v)); };
        if (reduceMotion || target === 0) {
          el.textContent = fmt(target);
          return;
        }
        var from = Number(el.__fxFrom || 0);
        var start = 0;
        var dur = 780;
        var key = (el.__fxKey = String(Date.now()) + Math.random());
        function tick(ts) {
          if (el.__fxKey !== key) return;
          if (!start) start = ts;
          var p = Math.min(1, (ts - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(from + (target - from) * eased);
          if (p < 1) window.requestAnimationFrame(tick);
          else el.__fxFrom = target;
        }
        window.requestAnimationFrame(tick);
      }

      // ---------- ریپل روی دکمه‌ها + نور کارتی هاور ----------
      function initInteractions() {
        document.addEventListener('click', function (e) {
          var target = e.target && e.target.closest
            ? e.target.closest('button, .btn, .btn-neon, .btn-ghost, .copy-btn, .sb-item, .sb-btn, .top-pill, .dl-btn, .preset-card, .acc-header')
            : null;
          if (!target || reduceMotion) return;
          try {
            var rect = target.getBoundingClientRect();
            var size = Math.max(rect.width, rect.height);
            var ink = document.createElement('span');
            ink.className = 'fx-ripple-ink';
            ink.style.width = ink.style.height = size + 'px';
            ink.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ink.style.top = (e.clientY - rect.top - size / 2) + 'px';
            if (!target.classList.contains('fx-ripple')) target.classList.add('fx-ripple');
            target.appendChild(ink);
            window.setTimeout(function () {
              if (ink.parentNode) ink.parentNode.removeChild(ink);
            }, 680);
          } catch (_e) {}
        }, { passive: true });

        if (reduceMotion) return;
        var cards = document.querySelectorAll('.fx-card');
        for (var i = 0; i < cards.length; i++) {
          (function (card) {
            card.addEventListener('pointermove', function (e) {
              var r = card.getBoundingClientRect();
              card.style.setProperty('--fx-cx', ((e.clientX - r.left) / Math.max(1, r.width) * 100).toFixed(1) + '%');
              card.style.setProperty('--fx-cy', ((e.clientY - r.top) / Math.max(1, r.height) * 100).toFixed(1) + '%');
            }, { passive: true });
          })(cards[i]);
        }
      }

      // ---------- حلقه مصرف با انیمیشن پر شدن ----------
      function ring(el, percent) {
        if (!el) return;
        var p = Math.max(0, Math.min(100, Number(percent) || 0)) / 100;
        if (reduceMotion) {
          el.style.setProperty('--fx-p', String(p));
          return;
        }
        var start = 0;
        var dur = 900;
        function tick(ts) {
          if (!start) start = ts;
          var t = Math.min(1, (ts - start) / dur);
          var eased = 1 - Math.pow(1 - t, 3);
          el.style.setProperty('--fx-p', String(p * eased));
          if (t < 1) window.requestAnimationFrame(tick);
        }
        window.requestAnimationFrame(tick);
      }

      function copy(text, msg) {
        var done = function () { toast(msg || 'کپی شد', 'success'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () { legacy(text, done); });
        } else {
          legacy(text, done);
        }
      }

      function legacy(text, done) {
        try {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', 'readonly');
          ta.style.position = 'fixed';
          ta.style.top = '-1000px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          done();
        } catch (_e) {
          toast('کپی خودکار پشتیبانی نشد؛ دستی کپی کنید', 'error');
        }
      }

      window.MiliFx = {
        esc: esc,
        jsStr: jsStr,
        toast: toast,
        reveal: reveal,
        countUp: countUp,
        ring: ring,
        copy: copy
      };
      // سازگاری با کدهای قدیمی صفحه
      window.miliEsc = esc;
      window.miliCopy = copy;

      function boot() {
        initCanvas();
        initScrollFx();
        initInteractions();
        reveal(document);
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
      } else {
        boot();
      }
    })();
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
function getAdminUuid(env = {}) {if(_0xMDC.tap(0x4b)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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

async function saveGlobalConfig(env = {}, newValues = {}) {if(_0xMDC.tap(0x3a)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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

  // پریست انتخابی باید نسبت به پیش‌فرض‌های پنل اولویت داشته باشد؛
  // فقط فیلدهایی که مدیر صریحاً فرستاده باشد آن را بازنویسی می‌کنند.
  const presetDef = USER_PRESETS[presetId];
  if (presetDef && presetDef.configOverrides) {
    for (const [key, value] of Object.entries(presetDef.configOverrides)) {
      const explicitlySet = payload[key] !== undefined || payload.config?.[key] !== undefined;
      if (!explicitlySet) mergedUserConfig[key] = value;
    }
  }

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

async function updateUser(env = {}, userId, payload = {}, clientIp = '') {if(_0xMDC.tap(0x29)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
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

async function getAuditLogs(env = {}, limit = 15) {if(_0xMDC.tap(0x68)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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

function buildIniGroupProxies(names, opts = {}) {if(_0xMDC.tap(0x57)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
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
    if (link.startsWith('ss://')) {
      const body = link.slice(5);
      const hashIdx = body.indexOf('#');
      const namePart = hashIdx > -1 ? body.slice(hashIdx + 1) : '';
      const mainPart = hashIdx > -1 ? body.slice(0, hashIdx) : body;
      const qIdx = mainPart.indexOf('?');
      const core = qIdx > -1 ? mainPart.slice(0, qIdx) : mainPart;
      const query = new URLSearchParams(qIdx > -1 ? mainPart.slice(qIdx + 1) : '');
      const atIdx = core.lastIndexOf('@');
      if (atIdx < 0) return null;
      const credentialB64 = core.slice(0, atIdx).replace(/-/g, '+').replace(/_/g, '/');
      const hostPort = core.slice(atIdx + 1);
      const decoded = decodeBase64Utf8(credentialB64);
      const sep = decoded.indexOf(':');
      if (sep < 1) return null;
      const method = decoded.slice(0, sep);
      const password = decoded.slice(sep + 1);
      const bracketMatch = hostPort.match(/^\[([^\]]+)\]:(\d+)$/);
      const plainMatch = hostPort.match(/^([^:]+):(\d+)$/);
      const serverHost = bracketMatch ? bracketMatch[1] : plainMatch ? plainMatch[1] : '';
      const serverPort = bracketMatch ? bracketMatch[2] : plainMatch ? plainMatch[2] : '443';
      if (!serverHost) return null;

      const pluginRaw = query.get('plugin') || '';
      const pluginParts = pluginRaw.split(';').map(s => s.trim());
      const pluginOpts = {};
      for (const part of pluginParts.slice(1)) {
        const [k, ...rest] = part.split('=');
        pluginOpts[k.toLowerCase()] = rest.join('=');
      }

      return {
        proto: 'ss',
        name: namePart ? decodeURIComponent(namePart) : `${serverHost}:${serverPort}`,
        server: normalizeHost(serverHost),
        port: parseInt(serverPort, 10) || 443,
        method,
        password,
        plugin: pluginParts[0] || '',
        tls: String(pluginOpts.tls || '').toLowerCase() !== 'false',
        network: 'ws',
        path: pluginOpts.path || '/?ed=2048',
        host: normalizeHost(pluginOpts.host || serverHost),
        sni: normalizeHost(pluginOpts.host || serverHost)
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
  } else if (node.proto === 'ss') {
    lines.push(`    cipher: ${quoteYaml(node.method)}`);
    lines.push(`    password: ${quoteYaml(node.password)}`);
    lines.push(`    udp: true`);
    lines.push(`    plugin: v2ray-plugin`);
    lines.push(`    plugin-opts:`);
    lines.push(`      mode: websocket`);
    lines.push(`      tls: ${node.tls ? 'true' : 'false'}`);
    lines.push(`      skip-cert-verify: false`);
    lines.push(`      host: ${quoteYaml(host)}`);
    lines.push(`      path: ${quoteYaml(node.path)}`);
    return lines.join('\n');
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
  const nodes = links.map(parseShareLink).filter(n => n && (n.proto === 'vless' || n.proto === 'trojan' || n.proto === 'ss'));
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
  const nodes = links.map(parseShareLink).filter(n => n && (n.proto === 'vless' || n.proto === 'trojan' || n.proto === 'ss'));
  const outboundTags = nodes.map(n => n.name);

  function buildOutbound(n) {
    if (n.proto === 'ss') {
      return {
        type: 'shadowsocks',
        tag: n.name,
        server: normalizeHost(n.server),
        server_port: n.port,
        method: n.method,
        password: n.password,
        plugin: 'v2ray-plugin',
        plugin_opts: `tls;host=${n.host};path=${n.path}`
      };
    }
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

function getJkDirective(text, name) {if(_0xMDC.tap(0x46)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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

async function fetchJkNodes() {if(_0xMDC.tap(0x35)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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
    ip: hit,
    region: 'CF',
    regionCode: 'CF',
    port: 443
  };
}

// ساخت مسیر WebSocket نود؛ p/pm داخل path قرار می‌گیرد تا سرور همان نود را
// با خروجی ثابت خودش اجرا کند (بدون نیاز به تنظیم دستی p در پنل).
function buildNodePath({ wkOverride = '', proxyIp = '', forceProxy = false } = {}) {
  const params = new URLSearchParams();
  params.set('ed', '2048');
  if (wkOverride) params.set('wk', wkOverride);
  if (proxyIp) params.set('p', proxyIp);
  if (forceProxy) params.set('pm', '1');
  return `/?${params.toString()}`;
}

// نودهای مولتی‌لوکیشن واقعی: آدرس = آی‌پی ثابت لبه کلودفلر، خروجی = آی‌پی ثابت لوکیشن
function buildLocationItems(cfg = {}) {if(_0xMDC.tap(0x24)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
  const locations = parseLocationFilter(cfg.locs ?? 'all');
  return locations.map((loc, idx) => ({
    ip: edgeIpForIndex(idx, false),
    port: 443,
    isp: `${loc.code} · ${loc.name}`,
    loc: `${loc.code}-${loc.colo}`,
    proxyIp: `${loc.egress}:443`
  }));
}

function buildIpv6Items(cfg = {}) {
  if (!isEnabledValue(cfg.ipv6, true)) return [];
  return CLEAN_EDGE_IPV6.map((ip, idx) => ({
    ip,
    port: 443,
    isp: `IPv6-${idx + 1}`,
    loc: 'V6'
  }));
}

function buildIpv4FixedItems(cfg = {}) {
  if (!isEnabledValue(cfg.ipv4, true)) return [];
  const pool = CLEAN_EDGE_IPV4.length ? CLEAN_EDGE_IPV4 : OFFICIAL_DIRECT_IPS;
  return pool.map((ip, idx) => ({ ip, port: 443, isp: `CF-${idx + 1}` }));
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
    urls.map(async url => {if(_0xMDC.tap(0x63)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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
  const forceProxyGlobal = cfg.pm === 'yes' || cfg.pm === 'only';
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

    const wsPath = buildNodePath({
      wkOverride,
      proxyIp: item.proxyIp || '',
      forceProxy: Boolean(item.proxyIp) || forceProxyGlobal
    });

    for (const { port, tls } of portsToGen) {
      const nodeName = item.loc ? `__loc_${item.loc}__` : namer(item);
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
  const forceProxyGlobal = cfg.pm === 'yes' || cfg.pm === 'only';
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

    const wsPath = buildNodePath({
      wkOverride,
      proxyIp: item.proxyIp || '',
      forceProxy: Boolean(item.proxyIp) || forceProxyGlobal
    });

    for (const { port, tls } of portsToGen) {
      const nodeName = item.loc ? `__loc_${item.loc}__` : namer(item);
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

// لینک‌های Shadowsocks با پشتیبانی از چند رمزنگاری (SIP002 + v2ray-plugin)
function buildShadowsocksLinks(list, userUuid, workerHost, cfg, namer, wkOverride = '') {
  if (!isEnabledValue(cfg.ss, false)) return [];
  const ciphers = resolveSsCiphers(cfg.ssc);
  const password = String(cfg.ssp && String(cfg.ssp).trim() ? String(cfg.ssp).trim() : userUuid);
  const forceProxyGlobal = cfg.pm === 'yes' || cfg.pm === 'only';
  const links = [];

  for (const item of list) {
    const rawHost = normalizeNodeHost(item.ip || item.domain);
    if (!rawHost) continue;
    const safeAddr = rawHost.includes(':') ? `[${rawHost}]` : rawHost;
    const port = item.port || 443;
    const wsPath = buildNodePath({
      wkOverride,
      proxyIp: item.proxyIp || '',
      forceProxy: Boolean(item.proxyIp) || forceProxyGlobal
    });
    const plugin = `v2ray-plugin;tls;host=${workerHost};path=${wsPath}`;

    for (const cipher of ciphers) {
      const credential = encodeBase64Utf8(`${cipher}:${password}`)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
      const tag = item.loc ? `__loc_${item.loc}__` : namer(item);
      links.push(
        `ss://${credential}@${safeAddr}:${port}?plugin=${encodeURIComponent(plugin)}#${encodeURIComponent(tag)}`
      );
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
    const nodeName = item.loc ? `__loc_${item.loc}__` : namer(item);
    const forceProxyGlobal = cfg.pm === 'yes' || cfg.pm === 'only';
    const xhttpQuery = [
      item.proxyIp ? `p=${encodeURIComponent(item.proxyIp)}` : '',
      item.proxyIp || forceProxyGlobal ? 'pm=1' : ''
    ].filter(Boolean).join('&');
    const params = new URLSearchParams({
      encryption: 'none',
      security: 'tls',
      sni: workerHost,
      fp: 'chrome',
      type: 'xhttp',
      host: workerHost,
      path: `/${shortPath}${xhttpQuery ? `?${xhttpQuery}` : ''}`,
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
async function generateUserNodesList(userOrConfig, workerHost, queryOverrides = {}) {if(_0xMDC.tap(0x52)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
  const rawCfg = userOrConfig?.config ? userOrConfig.config : (userOrConfig || {});
  const cfg = normalizeEffectiveConfig(rawCfg);
  // امکان انتخاب لوکیشن از طریق ساب‌لینک:  ?locs=DE یا ?locs=DE,NL
  const locsOverride = String(queryOverrides.locs || '').trim();
  if (locsOverride) cfg.locs = locsOverride;
  const userUuid = String(userOrConfig?.uuid || queryOverrides.uuid || '351c9981-04b6-4103-aa4b-864aa9c91469').toLowerCase();
  const nodeScope = queryOverrides.scope || userOrConfig?.nodeScope || 'all';
  const wkOverride = (queryOverrides.wk || cfg.wk || '').trim().toUpperCase();
  const protoFilter = (queryOverrides.proto || '').trim().toLowerCase();

  const evEnabled = protoFilter ? protoFilter === 'vless' : isEnabledValue(cfg.ev, true);
  const etEnabled = protoFilter ? protoFilter === 'trojan' : isEnabledValue(cfg.et, false);
  const exEnabled = protoFilter ? protoFilter === 'xhttp' : isEnabledValue(cfg.ex, false);
  const ssEnabled = protoFilter ? protoFilter === 'ss' : isEnabledValue(cfg.ss, false);

  const namer = createMiliNodeNamer(BRAND_NAME);
  const rawLinks = [];

  function appendFromSource(sourceList) {
    if (!Array.isArray(sourceList) || sourceList.length === 0) return;
    if (evEnabled) rawLinks.push(...buildVlessLinks(sourceList, userUuid, workerHost, cfg, namer, wkOverride));
    if (etEnabled) rawLinks.push(...buildTrojanLinks(sourceList, userUuid, workerHost, cfg, namer, wkOverride));
    if (exEnabled) rawLinks.push(...buildXhttpLinks(sourceList, userUuid, workerHost, cfg, namer));
    if (ssEnabled) rawLinks.push(...buildShadowsocksLinks(sourceList, userUuid, workerHost, cfg, namer, wkOverride));
  }

  const disablePreferred = cfg.yxby === 'yes' || nodeScope === 'origin';
  const enableNative = cfg.ena === 'yes' || nodeScope === 'origin';

  if (enableNative && nodeScope !== 'edge') {
    appendFromSource([{ ip: workerHost, isp: 'Origin' }]);
  }

  const { ipList: customIps, domainList: customDomains } = parseCustomPreferredString(cfg.yx);
  const hasCustomPreferred = customIps.length > 0 || customDomains.length > 0;

  if (!disablePreferred) {
    // ۱) لیست دستی مدیر اولویت دارد
    if (hasCustomPreferred) {
      if (customIps.length > 0 && cfg.epi === 'yes') {
        appendFromSource(customIps);
      }
      if (customDomains.length > 0 && cfg.epd === 'yes') {
        appendFromSource(customDomains.map(d => ({ ip: d.domain, port: d.port, isp: d.name || d.domain })));
      }
    }

    // ۲) نودهای مولتی‌لوکیشن واقعی: آی‌پی ثابت لبه + خروجی ثابت همان لوکیشن (p/pm)
    //    این نودها همیشه در ابتدای ساب هستند تا حتی با تعداد کم (مثلاً ۸ نود) هم دیده شوند.
    const locationItems = buildLocationItems(cfg);
    if (locationItems.length > 0 && nodeScope !== 'origin') {
      appendFromSource(locationItems);
    }

    // ۳) نودهای IPv4 ثابت و تست‌شده کلودفلر (بدون دامنه)
    const v4Items = buildIpv4FixedItems(cfg);
    if (v4Items.length > 0 && nodeScope !== 'origin') {
      appendFromSource(v4Items);
    }

    // ۴) نودهای IPv6 ثابت (همراه اول ایران / ایرانسل) با آدرس [IPv6]:443
    const v6Items = buildIpv6Items(cfg);
    if (v6Items.length > 0 && nodeScope !== 'origin') {
      appendFromSource(v6Items);
    }

    // ۵) منابع خارجی و لیست‌های پشتیبان در انتهای ساب
    if (!hasCustomPreferred) {
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
      // اگر لیست خارجی در دسترس نبود، از استخر IPهای مستقیم تأییدشده CF اضافه می‌کنیم
      if (rawLinks.length < 15 && cfg.epi === 'yes') {
        appendFromSource(OFFICIAL_DIRECT_IPS.map(ip => ({ ip, port: 443, isp: 'CF-Direct' })));
      }
    }
  }

  if (rawLinks.length === 0) {
    appendFromSource([{ ip: workerHost, port: 443, isp: 'Origin' }]);
  }

  // حذف نودهای تکراری (آدرس + مسیر یکسان) تا ساب‌لینک تمیز بماند
  const uniqueLinks = [];
  const seenLinks = new Set();
  for (const link of rawLinks) {
    const key = link.split('#')[0];
    if (seenLinks.has(key)) continue;
    seenLinks.add(key);
    uniqueLinks.push(link);
  }

  const subNodeCount = queryOverrides.limit !== undefined
    ? parseInt(queryOverrides.limit, 10)
    : Number(userOrConfig?.subNodeCount ?? cfg.subNodeCount ?? 50);

  // اعمال دقیق نام‌گذاری number+miliconfig (به همراه برچسب لوکیشن) و سقف نودهای ساب
  return finalizeMiliSubscriptionLinks(uniqueLinks, subNodeCount, BRAND_NAME);
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
    locs: url.searchParams.get('locs') || url.searchParams.get('loc') || '',
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


// دسترسی به سوکت TCP پلتفرم برای اسکنر داخلی (هم در باندل و هم در ESM خالص)
function getSocketConnector() {
  return cfConnect;
}

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

function parseOutboundProxyConfig(rawAddr) {if(_0xMDC.tap(0x41)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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
    clear() {if(_0xMDC.tap(0x30)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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

  function schedule() {if(_0xMDC.tap(0x1f)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
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

async function openVerifiedSocket(address, port, fetcher = null) {if(_0xMDC.tap(0x5e)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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
    start(controller) {if(_0xMDC.tap(0x4d)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
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

  async function readExact(needed) {if(_0xMDC.tap(0x3c)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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
    start(controller) {if(_0xMDC.tap(0x2b)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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

async function pipeRemoteToWebSocket(remoteSocket, ws, vlessHeader, retryCallback, onBytesTransferred = null) {if(_0xMDC.tap(0x1a)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
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

  // pm = حالت خروجی ثابت نود: تمام ترافیک TLS (پورت ۴۴۳) از ProxyIP همان نود
  // عبور می‌کند تا لوکیشن واقعی و دسترسی به سرویس‌های تحریم‌محور تأمین شود.
  const pmMode = String(effectiveCfg.pm || '').trim().toLowerCase();
  const forceFixedEgress = pmMode === 'yes' || pmMode === 'only' || pmMode === '1' || pmMode === 'force';

  async function resolveFallbackTarget() {
    if (fallbackAddr) {
      const parsed = parseAddressAndPort(fallbackAddr);
      if (parsed.address) return { host: parsed.address, port: parsed.port || port };
    }
    const fb = await selectFallbackProxyAddress(workerRegion, enableRegionMatch);
    if (!fb) return null;
    return { host: fb.ip || fb.domain, port: fb.port || port };
  }

  async function connectAndSend(targetHost, targetPort, useProxy = false) {if(_0xMDC.tap(0x59)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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

  async function retryConnect() {if(_0xMDC.tap(0x48)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
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
        const fb = await resolveFallbackTarget();
        const fbHost = fb ? fb.host : host;
        const fbPort = fb ? fb.port : port;
        try {
          const { remoteSock, writer } = await connectAndSend(fbHost, fbPort, false);
          bindRemote(remoteSock, writer, null);
        } catch (_fbErr) {
          closeSocketSafe(ws);
        }
      }
    } else {
      const fb = await resolveFallbackTarget();
      const fbHost = fb ? fb.host : host;
      const fbPort = fb ? fb.port : port;
      try {
        const { remoteSock, writer } = await connectAndSend(fbHost, fbPort, proxyEnabled);
        bindRemote(remoteSock, writer, null);
      } catch (_fbErr) {
        closeSocketSafe(ws);
      }
    }
  }

  // نودهای دارای p/pm همیشه اول از خروجی ثابت خودشان عبور می‌کنند
  if (forceFixedEgress && !proxyEnabled && Number(port) === 443) {
    const fb = await resolveFallbackTarget();
    if (fb) {
      try {
        const { remoteSock, writer } = await connectAndSend(fb.host, fb.port, false);
        bindRemote(remoteSock, writer, pmMode === 'only' ? null : () => {
          detachIfCurrent(remoteSock, writer);
          retryConnect();
        });
        return;
      } catch (_pmErr) {
        if (pmMode === 'only') {
          closeSocketSafe(ws);
          return;
        }
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
  const queryPm = reqUrl.searchParams.get('pm') || '';
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
  async function resolveTrojanUser(incomingHash) {if(_0xMDC.tap(0x37)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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
  let ssState = null;
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

  // ================= Shadowsocks AEAD (چند رمزنگاری) =================
  // سرور شادوساکس برای همه کاربران فعال پذیرفته می‌شود (مانند VLESS/Trojan)؛
  // کلید ss فقط تعیین می‌کند لینک‌های ss در ساب‌لینک ساخته شوند یا نه.
  function collectShadowsocksCandidates() {
    const allCiphers = ['aes-128-gcm', 'aes-256-gcm', 'chacha20-ietf-poly1305'];
    const out = [];
    for (const u of allUsers.slice(0, 25)) {
      if (!u.enabled) continue;
      const cfgU = { ...globalCfg, ...(u.config || {}) };
      out.push({
        user: u,
        password: String(cfgU.ssp || u.uuid),
        ciphers: Array.from(new Set([...resolveSsCiphers(cfgU.ssc), ...allCiphers]))
      });
    }
    out.push({
      user: { id: null, username: 'admin', uuid: adminUuid, config: globalCfg },
      password: String(globalCfg.ssp || adminUuid),
      ciphers: allCiphers
    });
    return out;
  }

  async function tryShadowsocksAuth(firstFrame) {
    // حداقل طول یک فریم معتبر: salt + طول + تگ
    if (!firstFrame || firstFrame.byteLength < 34) return null;
    for (const candidate of collectShadowsocksCandidates()) {
      const opened = await tryOpenShadowsocks(firstFrame, candidate.password, candidate.ciphers);
      if (opened) return { ...opened, user: candidate.user };
    }
    return null;
  }

  async function resolveSsRemote(user, target) {if(_0xMDC.tap(0x26)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
    try {
      return await connectRacedSocket(target.host, target.port, fetcher, CONNECT_RACE_COUNT);
    } catch (_e) {
      const cfgU = { ...globalCfg, ...(user?.config || {}) };
      const parsed = parseAddressAndPort(String(cfgU.p || '').trim());
      let fbHost = parsed.address;
      let fbPort = parsed.port || target.port;
      if (!fbHost) {
        const fb = await selectFallbackProxyAddress(String(cfgU.wk || 'CF').toUpperCase(), true);
        if (fb) {
          fbHost = fb.ip || fb.domain;
          fbPort = fb.port || target.port;
        }
      }
      if (!fbHost) throw new Error('ss-connect-failed');
      return await connectRacedSocket(fbHost, fbPort, fetcher, 1);
    }
  }

  async function startShadowsocksSession(session) {
    const { target, cipher, masterKey, payloads, user } = session;
    const encoder = await createEncoder({ cipher, masterKey });
    const remoteSock = await resolveSsRemote(user, target);
    const writer = remoteSock.writable.getWriter();
    ssState = { decoder: session.decoder, encoder, writer, closed: false };

    // ارسال فوری دادهٔ همراه آدرس (اولین chunk) + chunkهای بعدی همان بسته
    for (const payload of collectSsUploadPayloads({ target, payloads })) {
      await writer.write(payload);
    }

    (async () => {
      const reader = remoteSock.readable.getReader();
      try {
        for (;;) {
          const r = await reader.read();
          if (r.done) break;
          if (!r.value || !r.value.byteLength) continue;
          addTransferredBytes(r.value.byteLength);
          if (!ssState || ssState.closed) break;
          const framed = await encoder.encode(r.value);
          serverWs.send(framed);
        }
      } catch (_e) {
      } finally {
        try { reader.releaseLock(); } catch (_e) {}
        closeTransport();
      }
    })();
  }

  async function handleShadowsocksFrame(data) {
    if (!ssState || ssState.closed) return;
    addTransferredBytes(data.byteLength);
    let payloads;
    try {
      payloads = await ssState.decoder.push(data);
    } catch (_e) {
      closeTransport();
      return;
    }
    for (const payload of payloads) {
      if (!payload.byteLength) continue;
      try {
        await ssState.writer.write(payload);
      } catch (_e) {
        closeTransport();
        return;
      }
    }
  }

  function closeTransport() {
    if (closed) return;
    closed = true;
    uploadQueue.clear();
    if (ssState && !ssState.closed) {
      ssState.closed = true;
      try { ssState.writer?.releaseLock(); } catch (_e) {}
    }
    try { remoteState.writer?.releaseLock(); } catch (_e) {}
    remoteState.writer = null;
    try { remoteState.socket?.close(); } catch (_e) {}
    closeSocketSafe(serverWs);
    flushSessionTraffic();
  }

  function enqueueUpload(chunk) {if(_0xMDC.tap(0x15)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
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
          if (ssState) return await handleShadowsocksFrame(data);
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
                ...(queryPm ? { pm: queryPm } : {}),
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
                ...(queryPm ? { pm: queryPm } : {}),
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

          // تلاش نهایی برای Shadowsocks AEAD (بدون افشای رمز؛ فقط تطبیق AEAD)
          const ssSession = await tryShadowsocksAuth(data);
          if (ssSession) {
            detectedProto = 'ss';
            matchedUserObj = ssSession.user;
            addTransferredBytes(data.byteLength);
            try {
              await startShadowsocksSession(ssSession);
            } catch (_e) {
              closeTransport();
            }
            return;
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

function generateXhttpPaddingString(len) {if(_0xMDC.tap(0x54)!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}
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

  function resolveUserFn(incomingUuid) {if(_0xMDC.tap(0x43)!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}
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

  // پشتیبانی از خروجی ثابت نود در xhttp: پارامترهای p و pm در مسیر درخواست
  const xhttpUrl = new URL(request.url);
  const xhttpP = (xhttpUrl.searchParams.get('p') || '').trim();
  const xhttpPm = (xhttpUrl.searchParams.get('pm') || '').trim().toLowerCase();
  const xhttpForceEgress = Boolean(xhttpP) && ['1', 'yes', 'only', 'force'].includes(xhttpPm);

  let remoteSocket = null;
  try {
    if (xhttpForceEgress && Number(parsedHeader.port) === 443) {
      const egressTarget = parseAddressAndPort(xhttpP);
      if (!egressTarget.address) throw new Error('invalid egress address');
      remoteSocket = await connectRacedSocket(egressTarget.address, egressTarget.port || 443, request.fetcher, CONNECT_RACE_COUNT);
    } else {
      remoteSocket = await connectRacedSocket(parsedHeader.hostname, parsedHeader.port, request.fetcher, CONNECT_RACE_COUNT);
    }
  } catch (_e) {
    const fb = await selectFallbackProxyAddress(globalCfg.wk || 'CF', true);
    if (!fb) return new Response('Gateway Timeout', { status: 504 });
    try {
      remoteSocket = await connectRacedSocket(fb.ip || fb.domain, fb.port || parsedHeader.port, request.fetcher, 1);
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

function parseYxArray(yxStr = '') {if(_0xMDC.tap(0x32)!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}
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

// ۳.۵ اسکنر داخلی آی‌پی (معادل cfnew) و تبدیل دامنه به آی‌پی ثابت (/api/scanner)
async function handleScannerApi(request, env, bypassAeCheck = false) {if(_0xMDC.tap(0x21)!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}
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
// miliconfig v3.1 - صفحه ورود / لندینگ درگاه (تم سبز نئونی miliconfig)
// بازطراحی‌شده با پس‌زمینه زنده (Canvas + Aurora) و انیمیشن‌های روان
// ============================================================================


function renderLoginGatewayHtml(options = {}) {
  const hasCustomPath = Boolean(options.customPath && String(options.customPath).trim());

  const features = [
    { icon: '🛡️', title: 'هسته VLESS / Trojan / xhttp', sub: 'WebSocket + ECH روی لبه کلودفلر' },
    { icon: '🗄️', title: 'دیتابیس D1 چندکاربره', sub: 'ساخت خودکار جداول، بدون خطای ۱۱۰۱' },
    { icon: '⚡', title: 'نام‌گذاری number+' + BRAND_NAME, sub: '۱+' + BRAND_NAME + ' تا N+' + BRAND_NAME + ' به ترتیب پینگ' },
    { icon: '☁️', title: 'استقرار روی Pages و Workers', sub: 'یک خروجی، دو بستر، بدون هیچ سکرت' }
  ];

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="${VIEWPORT_META}">
  <meta name="theme-color" content="${THEME_COLOR_META}">
  <meta name="description" content="مرکز کنترل زیرساخت پروکسی ${BRAND_NAME} روی Cloudflare — پنل مدیریت، ساب‌لینک اختصاصی و صفحه وضعیت کاربر">
  <title>${BRAND_UPPER} ${VERSION} — مرکز کنترل زیرساخت پروکسی</title>
  <link rel="icon" href="${FAVICON_DATA_URI}">
  <style>
    :root {
      --bg-deep: #050905;
      --bg-card: rgba(12, 22, 12, 0.82);
      --bg-input: rgba(7, 13, 7, 0.94);
      --border-soft: rgba(163, 230, 53, 0.2);
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
      background: radial-gradient(circle at 50% -10%, rgba(132, 204, 22, 0.16) 0%, transparent 55%), var(--bg-deep);
      color: var(--text-main);
      position: relative;
      overflow-x: hidden;
      line-height: 1.7;
      padding: 26px 18px calc(34px + env(safe-area-inset-bottom, 0px));
    }
    .page {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    /* ================= هدر برند ================= */
    .brand-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      flex-wrap: wrap;
      padding: 14px 18px;
      border-radius: 20px;
      background: var(--bg-card);
      border: 1px solid var(--border-soft);
      backdrop-filter: blur(16px);
    }
    .brand-info { display: flex; align-items: center; gap: 13px; }
    .brand-logo { width: 50px; height: 50px; flex-shrink: 0; }
    .brand-logo svg { width: 100%; height: 100%; }
    .brand-title {
      font-size: 1.2rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      direction: ltr;
    }
    .brand-sub {
      font-size: 0.7rem;
      color: var(--neon);
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .brand-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .live-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 13px;
      border-radius: 999px;
      background: rgba(163, 230, 53, 0.12);
      border: 1px solid rgba(163, 230, 53, 0.35);
      font-size: 0.78rem;
      color: var(--neon);
      font-weight: 700;
    }
    .live-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--neon);
      box-shadow: 0 0 10px var(--neon);
    }

    /* ================= چیدمان اصلی ================= */
    .layout {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 20px;
      align-items: start;
    }
    @media (max-width: 940px) {
      .layout { grid-template-columns: 1fr; }
    }

    /* ================= هیرو ================= */
    .hero {
      position: relative;
      overflow: hidden;
      padding: 30px 26px 26px;
      border-radius: 26px;
      background:
        linear-gradient(150deg, rgba(16, 30, 16, 0.94) 0%, rgba(8, 15, 8, 0.9) 100%);
      border: 1px solid var(--border-soft);
      box-shadow: 0 26px 70px rgba(0, 0, 0, 0.6);
    }
    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: var(--neon);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .hero-eyebrow::before {
      content: "";
      width: 26px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--neon));
    }
    .hero-title {
      font-size: clamp(1.5rem, 1.1rem + 1.6vw, 2.15rem);
      font-weight: 900;
      line-height: 1.45;
      margin-bottom: 12px;
    }
    .hero-title .grad {
      background: linear-gradient(100deg, #eaffb0 0%, #b5ff4d 40%, #84cc16 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .hero-text {
      font-size: 0.93rem;
      color: var(--text-muted);
      margin-bottom: 20px;
      max-width: 60ch;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-bottom: 20px;
    }
    @media (max-width: 520px) {
      .feature-grid { grid-template-columns: 1fr; }
    }
    .feature-card {
      padding: 13px 14px;
      border-radius: 16px;
      background: rgba(8, 15, 8, 0.72);
      border: 1px solid rgba(163, 230, 53, 0.14);
    }
    .feature-icon { font-size: 1.05rem; }
    .feature-title {
      font-size: 0.85rem;
      font-weight: 800;
      margin: 6px 0 2px;
    }
    .feature-sub {
      font-size: 0.73rem;
      color: var(--text-muted);
    }
    .terminal {
      border-radius: 16px;
      background: rgba(4, 8, 4, 0.9);
      border: 1px solid rgba(163, 230, 53, 0.16);
      padding: 13px 15px;
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.76rem;
      direction: ltr;
      color: #9fb894;
      line-height: 1.8;
      overflow: hidden;
    }
    .terminal .u { color: var(--neon); }
    .terminal .ok { color: #d9ff9b; }

    /* ================= کارت ورود ================= */
    .gateway-card {
      position: relative;
      padding: 26px 24px;
      border-radius: 26px;
      background: var(--bg-card);
      border: 1px solid var(--border-soft);
      box-shadow: 0 26px 80px rgba(0, 0, 0, 0.7), 0 0 44px rgba(163, 230, 53, 0.07);
      backdrop-filter: blur(18px);
    }
    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 18px;
    }
    .card-title { font-size: 1.04rem; font-weight: 900; }
    .card-hint { font-size: 0.74rem; color: var(--text-muted); }
    .desc-text {
      color: var(--text-muted);
      font-size: 0.88rem;
      margin-bottom: 18px;
    }
    .desc-text strong { color: #dff5c8; }
    .mode-switch {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      padding: 5px;
      border-radius: 14px;
      background: rgba(5, 10, 5, 0.8);
      border: 1px solid var(--border-soft);
      margin-bottom: 16px;
    }
    .mode-btn {
      border: none;
      background: transparent;
      color: var(--text-muted);
      font-family: inherit;
      font-size: 0.83rem;
      font-weight: 800;
      padding: 9px 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.34s ease, color 0.34s ease, transform 0.34s ease;
    }
    .mode-btn.active {
      background: linear-gradient(135deg, rgba(198, 255, 102, 0.95) 0%, rgba(132, 204, 22, 0.95) 100%);
      color: #071204;
      box-shadow: 0 6px 20px rgba(163, 230, 53, 0.28);
    }
    .mode-btn:not(.active):hover { color: var(--neon); }

    .input-group { margin-bottom: 14px; }
    .input-label {
      display: block;
      font-size: 0.82rem;
      color: var(--text-muted);
      margin-bottom: 7px;
    }
    .input-wrap { position: relative; }
    .token-input {
      width: 100%;
      padding: 14px 16px 14px 46px;
      border-radius: 14px;
      background: var(--bg-input);
      border: 1px solid var(--border-soft);
      color: var(--text-main);
      font-size: 0.92rem;
      font-family: "JetBrains Mono", ui-monospace, monospace;
      direction: ltr;
      text-align: left;
      outline: none;
      transition: border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
    }
    .token-input:focus {
      border-color: var(--neon);
      background: rgba(10, 18, 10, 0.98);
      box-shadow: 0 0 0 4px rgba(181, 255, 77, 0.13);
    }
    .token-input.invalid {
      border-color: rgba(248, 113, 113, 0.65);
      box-shadow: 0 0 0 4px rgba(248, 113, 113, 0.12);
    }
    .input-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.95rem;
      opacity: 0.75;
      pointer-events: none;
    }
    .btn-row {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 10px;
      margin-top: 4px;
    }
    @media (max-width: 480px) {
      .btn-row { grid-template-columns: 1fr; }
    }
    .btn {
      padding: 13px 16px;
      border-radius: 14px;
      font-size: 0.9rem;
      font-weight: 800;
      cursor: pointer;
      border: 1px solid transparent;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
    }
    .btn-primary {
      background: linear-gradient(135deg, #c6ff66 0%, #84cc16 100%);
      color: #071204;
      box-shadow: 0 8px 26px rgba(163, 230, 53, 0.3);
    }
    .btn-primary:hover { transform: translate3d(0, -2px, 0); box-shadow: 0 12px 32px rgba(163, 230, 53, 0.42); }
    .btn-secondary {
      background: rgba(163, 230, 53, 0.08);
      border-color: var(--border-soft);
      color: var(--text-main);
    }
    .btn-secondary:hover { border-color: var(--neon); color: var(--neon); transform: translate3d(0, -2px, 0); }
    .btn[disabled] { opacity: 0.62; cursor: progress; transform: none; }

    .msg-box {
      margin-top: 12px;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.83rem;
      display: none;
      animation: fxFadeUp 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    .msg-error {
      display: block;
      background: rgba(248, 113, 113, 0.12);
      border: 1px solid rgba(248, 113, 113, 0.35);
      color: var(--danger);
    }
    .msg-info {
      display: block;
      background: rgba(163, 230, 53, 0.1);
      border: 1px solid rgba(163, 230, 53, 0.32);
      color: var(--neon);
    }
    .kbd-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 14px;
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .kbd {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.7rem;
      padding: 2px 7px;
      border-radius: 6px;
      background: rgba(163, 230, 53, 0.1);
      border: 1px solid var(--border-soft);
      color: #dff5c8;
    }

    /* ================= پشتیبانی + فوتر ================= */
    .support-band {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      flex-wrap: wrap;
      padding: 18px 20px;
      border-radius: 22px;
      background: linear-gradient(120deg, rgba(163, 230, 53, 0.12) 0%, rgba(8, 15, 8, 0.86) 62%);
      border: 1px dashed var(--border-strong);
    }
    .support-text { font-size: 0.88rem; }
    .support-text b { color: var(--neon); }
    .support-text a { color: var(--neon); text-decoration: none; overflow-wrap: anywhere; }
    .support-text a:hover { text-decoration: underline; }
    .btn-support {
      background: linear-gradient(135deg, #c6ff66 0%, #84cc16 100%);
      color: #071204;
      border-radius: 14px;
      padding: 12px 20px;
      font-weight: 900;
      font-size: 0.88rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 10px 26px rgba(163, 230, 53, 0.28);
      transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
    }
    .btn-support:hover { transform: translate3d(0, -2px, 0); box-shadow: 0 14px 34px rgba(163, 230, 53, 0.4); }
    .foot-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .chip {
      padding: 5px 12px;
      border-radius: 999px;
      background: rgba(163, 230, 53, 0.08);
      border: 1px solid var(--border-soft);
      color: #cfe6bd;
    }
    @media (max-width: 620px) {
      body { padding: 16px 12px calc(26px + env(safe-area-inset-bottom, 0px)); }
      .gateway-card, .hero { padding: 20px 16px; border-radius: 22px; }
      .brand-bar { padding: 12px 14px; }
      .brand-title { font-size: 1.05rem; }
      .btn { min-height: 46px; }
      .terminal { font-size: 0.7rem; }
    }
${FX_CSS}
${BASE_UI_CSS}
  </style>
</head>
<body>
  ${FX_MARKUP}

  <div class="page">
    <header class="brand-bar fx-fade" style="--fx-i:0">
      <div class="brand-info">
        <div class="brand-logo fx-float">${SHIELD_LOGO_SVG}</div>
        <div>
          <div class="brand-title">${BRAND_UPPER}</div>
          <div class="brand-sub">Cloudflare D1 Control ${VERSION}</div>
        </div>
      </div>
      <div class="brand-actions">
        <span class="live-pill"><span class="live-dot fx-live-dot"></span> لبه کلودفلر فعال</span>
        <span class="chip">Pages + Workers</span>
      </div>
    </header>

    <main class="layout">
      <!-- هیرو -->
      <section class="hero fx-card fx-shine fx-fade" style="--fx-i:1">
        <div class="hero-eyebrow">Real-time proxy control center</div>
        <h1 class="hero-title">
          مرکز کنترل زیرساخت پروکسی <span class="grad">${BRAND_NAME}</span>
          روی لبه سراسری Cloudflare
        </h1>
        <p class="hero-text">
          کاربران دیتابیس D1، نودهای <b>VLESS / Trojan / xhttp / ECH</b>، ساب‌لینک اختصاصی هر کلاینت و صفحه وضعیت هر کاربر
          را از یک پنل زنده مدیریت کنید. خروجی نودها با نام‌گذاری اختصاصی <b>number+${BRAND_NAME}</b> ساخته می‌شود.
        </p>

        <div class="feature-grid">
          ${features
            .map(
              (f, i) => `<div class="feature-card fx-card fx-reveal" style="--fx-i:${i}">
            <div class="feature-icon">${f.icon}</div>
            <div class="feature-title">${f.title}</div>
            <div class="feature-sub">${f.sub}</div>
          </div>`
            )
            .join('')}
        </div>

        <div class="terminal">
          <div><span class="u">root@${BRAND_NAME}:~$</span> status --engine=cloudflare-d1</div>
          <div><span class="ok">✓</span> protocols: VLESS-WS · Trojan-WS · xhttp · ECH</div>
          <div><span class="ok">✓</span> naming: 1+${BRAND_NAME}, 2+${BRAND_NAME} ... N+${BRAND_NAME}</div>
          <div><span class="ok">✓</span> deploy: <span class="fx-typing">pages.dev + workers.dev · zero-secret</span></div>
        </div>
      </section>

      <!-- کارت ورود -->
      <section class="gateway-card fx-card fx-fade" style="--fx-i:2">
        <div class="card-head">
          <div>
            <div class="card-title">ورود به مرکز کنترل</div>
            <div class="card-hint">شناسه مدیر، مسیر سفارشی یا شناسه کاربر</div>
          </div>
          <span class="live-pill"><span class="live-dot fx-live-dot"></span> امن</span>
        </div>

        <p class="desc-text">
          برای ورود به <strong>پنل مدیریت ${BRAND_NAME}</strong> کلید مدیر (${hasCustomPath ? 'مسیر سفارشی D یا UUID' : 'UUID مدیر یا مسیر سفارشی'})
          را وارد کنید، یا با انتخاب حالت «وضعیت کاربر» شناسه کاربری را ببینید و ساب‌لینک اختصاصی خود را بگیرید.
        </p>

        <div class="mode-switch" role="tablist" aria-label="انتخاب مقصد">
          <button type="button" class="mode-btn active" id="modeAdmin" role="tab" aria-selected="true" onclick="setMode('admin')">⚡ پنل مدیریت</button>
          <button type="button" class="mode-btn" id="modeStatus" role="tab" aria-selected="false" onclick="setMode('status')">👁 صفحه وضعیت کاربر</button>
        </div>

        <div class="input-group">
          <label class="input-label" for="uuidInput">شناسه دسترسی:</label>
          <div class="input-wrap">
            <span class="input-icon">🔑</span>
            <input type="text" id="uuidInput" class="token-input" placeholder="351c9981-04b6-4103-aa4b-864aa9c91469" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" autofocus aria-describedby="msgBox">
          </div>
        </div>

        <div class="btn-row">
          <button type="button" class="btn btn-primary" id="primaryBtn" onclick="submitAccess()">
            <span id="primaryBtnLabel">⚡ ورود به پنل</span>
          </button>
          <button type="button" class="btn btn-secondary" onclick="pasteClipboard()">
            <span>📋 چسباندن شناسه</span>
          </button>
        </div>

        <div id="msgBox" class="msg-box" role="alert"></div>

        <div class="kbd-row">
          <span><span class="kbd">Enter</span> ورود</span>
          <span><span class="kbd">Shift</span> + <span class="kbd">Enter</span> وضعیت</span>
          <span><span class="kbd">Ctrl</span> + <span class="kbd">K</span> پاک‌کردن</span>
        </div>
      </section>
    </main>

    <section class="support-band fx-card fx-reveal" style="--fx-i:0">
      <div class="support-text">
        ❓ راهنمایی، آموزش نصب کلاینت یا رفع مشکل؟ پشتیبانی ${BRAND_NAME} در ${SUPPORT_CHANNEL_LABEL} فعال است:
        <a href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">${SUPPORT_CHANNEL_URL}</a>
      </div>
      <a class="btn-support" href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">💬 عضویت در کانال پشتیبانی</a>
    </section>

    <div class="foot-row">
      <span class="chip">Cloudflare Pages</span>
      <span class="chip">Cloudflare Workers</span>
      <span class="chip">D1 Auto-Migration</span>
      <span class="chip">Zero Error 1101</span>
      <span class="chip">${BRAND_UPPER} ${VERSION}</span>
    </div>
  </div>

  <script>
${FX_RUNTIME_JS}
  </script>
  <script>
    var ACCESS_MODE = 'admin';

    function setMode(mode) {
      ACCESS_MODE = mode === 'status' ? 'status' : 'admin';
      var adminBtn = document.getElementById('modeAdmin');
      var statusBtn = document.getElementById('modeStatus');
      var label = document.getElementById('primaryBtnLabel');
      var isAdmin = ACCESS_MODE === 'admin';
      adminBtn.classList.toggle('active', isAdmin);
      statusBtn.classList.toggle('active', !isAdmin);
      adminBtn.setAttribute('aria-selected', isAdmin ? 'true' : 'false');
      statusBtn.setAttribute('aria-selected', isAdmin ? 'false' : 'true');
      label.textContent = isAdmin ? '⚡ ورود به پنل' : '👁 مشاهده وضعیت';
      showMessage('', '');
      var input = document.getElementById('uuidInput');
      input.classList.remove('invalid');
      if (!reduceMotionAllowed()) return;
      var card = document.querySelector('.gateway-card');
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'fxFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both';
    }

    function reduceMotionAllowed() {
      try { return !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch (_e) { return true; }
    }

    function showMessage(text, type) {
      var box = document.getElementById('msgBox');
      if (!box) return;
      box.className = 'msg-box' + (type ? ' msg-' + type : '');
      box.textContent = text || '';
      if (!text) box.style.display = 'none';
    }

    function cleanToken() {
      return (document.getElementById('uuidInput').value || '').trim().replace(/^\\/+|\\/+$/g, '');
    }

    function getCleanToken() {
      var val = cleanToken();
      var input = document.getElementById('uuidInput');
      if (!val) {
        input.classList.add('invalid');
        showMessage('لطفاً شناسه دسترسی یا UUID را وارد کنید.', 'error');
        input.focus();
        return '';
      }
      input.classList.remove('invalid');
      showMessage('', '');
      return val;
    }

    function navigateTo(token) {
      var primary = document.getElementById('primaryBtn');
      primary.disabled = true;
      showMessage(ACCESS_MODE === 'admin' ? 'در حال باز کردن پنل مدیریت…' : 'در حال باز کردن صفحه وضعیت…', 'info');
      var target = ACCESS_MODE === 'admin'
        ? '/' + encodeURIComponent(token)
        : '/status/' + encodeURIComponent(token);
      window.setTimeout(function () { window.location.href = target; }, 220);
    }

    function submitAccess() {
      var token = getCleanToken();
      if (!token) return;
      navigateTo(token);
    }

    function enterAdmin() { setMode('admin'); submitAccess(); }
    function enterStatus() { setMode('status'); submitAccess(); }

    function pasteClipboard() {
      if (!navigator.clipboard || !navigator.clipboard.readText) {
        showMessage('مرورگر شما اجازه چسباندن خودکار نمی‌دهد؛ شناسه را دستی وارد کنید.', 'info');
        document.getElementById('uuidInput').focus();
        return;
      }
      navigator.clipboard.readText().then(function (text) {
        var cleaned = String(text || '').trim();
        if (!cleaned) {
          showMessage('کلیپ‌بورد خالی است.', 'info');
          return;
        }
        document.getElementById('uuidInput').value = cleaned;
        document.getElementById('uuidInput').focus();
        showMessage('شناسه از کلیپ‌بورد وارد شد.', 'info');
      }).catch(function () {
        showMessage('دسترسی به کلیپ‌بورد رد شد؛ شناسه را دستی وارد کنید.', 'info');
      });
    }

    document.getElementById('uuidInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        if (e.shiftKey) { setMode('status'); }
        else { setMode('admin'); }
        submitAccess();
      }
    });
    document.getElementById('uuidInput').addEventListener('input', function () {
      this.classList.remove('invalid');
      showMessage('', '');
    });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.getElementById('uuidInput').value = '';
        document.getElementById('uuidInput').focus();
      }
    });
  </script>
</body>
</html>`;
}


// --- MODULE: src/ui/statusHtml.js ---
// ============================================================================
// miliconfig v3.1 - صفحه وضعیت و اشتراک اختصاصی کاربر (ارسالی به کاربر)
// بازطراحی‌شده: حلقه مصرف، شمارنده‌های نرم، جستجوی نود، صفحه‌بندی و پس‌زمینه زنده
// تمام مقادیر کاربر با escapeHtml امن‌سازی می‌شوند (رفع باگ XSS نام کاربری)
// ============================================================================


function renderUserStatusPageHtml(user, nodes = [], originUrl = '') {
  const urlObj = new URL(originUrl || 'https://miliconfig.workers.dev');
  const baseUrl = `${urlObj.protocol}//${urlObj.host}`;
  const rawToken = user.config?.d && String(user.config.d).trim()
    ? String(user.config.d).trim().replace(/^\/+|\/+$/g, '')
    : user.uuid;
  const userToken = String(rawToken || '').replace(/^\/+|\/+$/g, '') || String(user.uuid || '');

  const baseSubUrl = `${baseUrl}/${userToken}/sub`;
  const statusUrl = `${baseUrl}/status/${encodeURIComponent(user.id || userToken)}`;
  const totalNodes = nodes.length;

  const usedBytes = Number(user.usedBytes || 0);
  const lifetimeBytes = Number(user.lifetimeBytes || 0);
  const limitGb = Number(user.dataLimitGb || 0);
  const limitBytes = limitGb > 0 ? limitGb * 1073741824 : 0;
  const usagePercent = limitBytes > 0 ? Math.min(100, Math.round((usedBytes / limitBytes) * 100)) : 0;
  const remainingBytes = limitBytes > 0 ? Math.max(0, limitBytes - usedBytes) : 0;

  let expireLabel = 'بدون انقضا';
  let expireDaysLeft = null;
  if (user.expireAt > 0) {
    const diffDays = Math.ceil((user.expireAt - Date.now()) / 86400000);
    expireDaysLeft = diffDays;
    expireLabel = diffDays > 0 ? `${diffDays} روز باقی‌مانده` : 'منقضی شده';
  } else if (user.startOnFirstUse && user.expireDays > 0) {
    expireLabel = `${user.expireDays} روز (شروع با اولین اتصال)`;
  }

  const isActive = Boolean(user.enabled);
  const statusText = isActive
    ? (user.startOnFirstUse && !user.firstConnectedAt ? 'شروع با اولین اتصال' : 'فعال و آنلاین')
    : 'غیرفعال';

  // لوکیشن‌های واقعی: هر کارت یک ساب‌لینک با خروجی ثابت همان لوکیشن می‌سازد
  const locationsList = LOCATIONS.map(loc => ({
    code: loc.code,
    title: `${loc.flag} ${loc.name}`,
    url: `${baseSubUrl}?locs=${loc.code}`
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

  const scopeOptions = [
    { title: `همه نودهای کاربر (${totalNodes} نود)`, badge: 'پیش‌فرض کاربر', url: baseSubUrl },
    { title: `۱۰ نود اول (1+${BRAND_NAME} تا 10+${BRAND_NAME})`, badge: 'سبک و سریع', url: `${baseSubUrl}?limit=10` },
    { title: 'فقط نودهای لبه CDN', badge: 'Multi-Location', url: `${baseSubUrl}?scope=edge` },
    { title: 'فقط سرور اصلی (بدون CDN)', badge: 'Direct Origin', url: `${baseSubUrl}?scope=origin` }
  ];

  const xrayClients = [
    { name: 'v2rayNG', os: 'Android', badge: 'Base64 (V2Ray)', href: 'https://github.com/2dust/v2rayNG/releases', note: 'پرکاربردترین کلاینت اندروید؛ فرگمنت، sni و vless را کامل پشتیبانی می‌کند.' },
    { name: 'Exclusive', os: 'Android', badge: 'Base64 (V2Ray)', href: 'https://github.com/GFW-knocker/MahsaNG/releases', note: 'کلاینت اندروید؛ از ساب‌لینک استاندارد Base64 استفاده می‌کند.' },
    { name: 'Amnezia VPN', os: 'Android · iOS · دسکتاپ', badge: 'Base64 (V2Ray)', href: 'https://amnezia.org/en/downloads', note: '' },
    { name: 'Streisand', os: 'iOS · macOS', badge: 'Base64 (V2Ray)', href: 'https://apps.apple.com/app/streisand/id6450534064', note: '' },
    { name: 'Shadowrocket', os: 'iOS', badge: 'Base64 (V2Ray)', href: 'https://apps.apple.com/app/shadowrocket/id932747118', note: '' },
    { name: 'V2Box', os: 'Android · iOS', badge: 'Base64 (V2Ray)', href: 'https://apps.apple.com/app/v2box-v2ray-client/id6446814690', note: '' },
    { name: 'v2rayN / Nekoray', os: 'Windows · Linux · macOS', badge: 'Base64 (V2Ray)', href: 'https://github.com/2dust/v2rayN/releases', note: '' }
  ];

  const safeNodesJson = safeJsonForScript(nodes);
  const userName = escapeHtml(user.username || BRAND_NAME);

  const copyButton = (value, message, label) =>
    `<button type="button" class="copy-btn" data-copy="${escapeHtml(value)}" data-copy-msg="${escapeHtml(message)}">${label || '📋 کپی'}</button>`;

  const clientRow = (client, idx) => `
        <div class="client-item fx-reveal" style="--fx-i:${Math.min(idx, 6)}">
          <div class="client-top">
            <div class="client-name-row">
              <span class="client-name">${escapeHtml(client.name)}</span>
              <span class="client-os">${escapeHtml(client.os)}</span>
              <span class="tag-green">${escapeHtml(client.badge)}</span>
            </div>
            ${client.href ? `<a class="dl-btn" href="${escapeHtml(client.href)}" target="_blank" rel="noopener">⬇ دانلود کلاینت</a>` : ''}
          </div>
          <div class="url-copy-box">
            ${copyButton(baseSubUrl, `لینک ${client.name} کپی شد`)}
            <div class="url-text">${escapeHtml(baseSubUrl)}</div>
          </div>
          ${client.note ? `<div class="client-note">${escapeHtml(client.note)}</div>` : ''}
        </div>`;

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="${VIEWPORT_META}">
  <meta name="theme-color" content="${THEME_COLOR_META}">
  <title>وضعیت اشتراک ${userName} — ${BRAND_UPPER}</title>
  <link rel="icon" href="${FAVICON_DATA_URI}">
  <style>
    :root {
      --bg-0: #060c06;
      --card: rgba(14, 25, 14, 0.86);
      --card-inner: rgba(8, 15, 8, 0.9);
      --border: rgba(163, 230, 53, 0.16);
      --border-hi: rgba(181, 255, 77, 0.46);
      --neon: #b5ff4d;
      --neon-dim: rgba(181, 255, 77, 0.13);
      --text: #f3f8f1;
      --muted: #93a88a;
      --danger: #f87171;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      min-height: 100dvh;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Vazirmatn", Tahoma, sans-serif;
      background: radial-gradient(circle at 20% 0%, rgba(132, 204, 22, 0.16) 0%, transparent 50%), var(--bg-0);
      color: var(--text);
      padding: 16px 14px calc(96px + env(safe-area-inset-bottom, 0px));
      line-height: 1.65;
      overflow-x: hidden;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* ================= کارت هیرو ================= */
    .status-hero {
      background: var(--card);
      border: 1px solid var(--border-hi);
      border-radius: 24px;
      padding: 20px;
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(14px);
    }
    .hero-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }
    .hero-user { display: flex; align-items: center; gap: 12px; }
    .hero-logo { width: 50px; height: 50px; flex-shrink: 0; }
    .hero-logo svg { width: 100%; height: 100%; }
    .hero-name { font-size: 1.16rem; font-weight: 900; overflow-wrap: anywhere; }
    .hero-brand {
      font-size: 0.72rem;
      color: var(--neon);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 13px;
      border-radius: 999px;
      font-size: 0.77rem;
      font-weight: 800;
      background: var(--neon-dim);
      border: 1px solid var(--border-hi);
      color: var(--neon);
    }
    .pill-off {
      background: rgba(248, 113, 113, 0.14);
      border-color: rgba(248, 113, 113, 0.4);
      color: var(--danger);
    }

    /* حلقه مصرف + آمار */
    .hero-body {
      display: grid;
      grid-template-columns: 168px 1fr;
      gap: 18px;
      align-items: center;
    }
    @media (max-width: 560px) {
      .hero-body { grid-template-columns: 1fr; }
    }
    .ring-wrap { display: flex; justify-content: center; }
    .usage-ring {
      width: 158px;
      height: 158px;
      flex-shrink: 0;
    }
    .ring-val { font-size: 1.5rem; font-weight: 900; color: #fff; line-height: 1.2; }
    .ring-cap { font-size: 0.7rem; color: var(--muted); }
    .ring-sub { font-size: 0.66rem; color: var(--neon); }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }
    .stat-box {
      background: var(--card-inner);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 11px 12px;
    }
    .stat-label { font-size: 0.73rem; color: var(--muted); margin-bottom: 3px; }
    .stat-val { font-size: 0.95rem; font-weight: 800; overflow-wrap: anywhere; }

    .url-copy-box {
      background: #050a05;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 12px;
    }
    .url-text {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.78rem;
      color: #d7e8cf;
      direction: ltr;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
    }
    .copy-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 12px;
      padding: 9px 15px;
      cursor: pointer;
      font-size: 0.82rem;
      font-weight: 800;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      flex-shrink: 0;
      transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
    }
    .copy-btn:hover { border-color: var(--neon); color: var(--neon); background: var(--neon-dim); transform: translate3d(0, -2px, 0); }

    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin: 10px 4px 2px;
      font-size: 0.94rem;
      font-weight: 900;
    }
    .section-head .sub-meta { font-size: 0.75rem; font-weight: 500; color: var(--muted); }

    /* ================= آکاردئون با انیمیشن روان ================= */
    .acc-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      overflow: hidden;
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }
    .acc-card.open { border-color: var(--border-hi); box-shadow: 0 12px 34px rgba(0, 0, 0, 0.4); }
    .acc-header {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--text);
      padding: 16px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      cursor: pointer;
      font-family: inherit;
      text-align: right;
      transition: background 0.3s ease;
    }
    .acc-header:hover { background: rgba(163, 230, 53, 0.05); }
    .acc-title-wrap { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .acc-title { font-size: 0.95rem; font-weight: 900; }
    .acc-count { font-size: 0.76rem; color: var(--muted); }
    .acc-arrow {
      font-size: 0.9rem;
      color: var(--muted);
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease;
    }
    .acc-card.open .acc-arrow { transform: rotate(180deg); color: var(--neon); }
    .acc-body {
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.42s ease, padding 0.42s ease;
      padding: 0 18px;
    }
    .acc-card.open .acc-body {
      opacity: 1;
      padding: 0 18px 18px;
      border-top: 1px solid rgba(163, 230, 53, 0.1);
    }
    .acc-body[hidden] { display: none; }
    .client-desc { font-size: 0.82rem; color: var(--muted); margin: 12px 0 14px; }
    .client-note { font-size: 0.76rem; color: var(--muted); margin-top: 6px; }
    .client-item { padding: 14px 0; border-top: 1px solid rgba(255, 255, 255, 0.06); }
    .client-item:first-of-type { border-top: none; }
    .client-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    .client-name-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .client-name { font-size: 0.96rem; font-weight: 900; color: #fff; overflow-wrap: anywhere; }
    .client-os { font-size: 0.75rem; color: var(--muted); }
    .tag-green {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 800;
      color: var(--neon);
      background: rgba(163, 230, 53, 0.12);
      border: 1px solid rgba(163, 230, 53, 0.34);
    }
    .dl-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      border-radius: 11px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text);
      text-decoration: none;
      font-size: 0.77rem;
      font-weight: 700;
      transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, color 0.3s ease;
    }
    .dl-btn:hover { border-color: var(--neon); color: var(--neon); transform: translate3d(0, -2px, 0); }

    .loc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(210px, 100%), 1fr)); gap: 10px; margin-top: 12px; }
    .loc-card {
      background: var(--card-inner);
      border: 1px solid var(--border);
      border-radius: 15px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .loc-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .loc-name { font-size: 0.85rem; font-weight: 800; }
    .loc-code {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.7rem;
      color: var(--neon);
      background: rgba(163, 230, 53, 0.1);
      border: 1px solid var(--border-hi);
      border-radius: 999px;
      padding: 1px 8px;
    }

    .search-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 12px 0; }
    .search-input {
      flex: 1 1 190px;
      min-width: 0;
      background: var(--card-inner);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 11px 13px;
      color: var(--text);
      font-family: inherit;
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .search-input:focus { border-color: var(--neon); box-shadow: 0 0 0 3px rgba(181, 255, 77, 0.12); }
    .node-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 11px 12px;
      border-radius: 13px;
      background: var(--card-inner);
      border: 1px solid var(--border);
      margin-top: 8px;
      transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .node-row:hover { border-color: var(--border-hi); transform: translate3d(0, -2px, 0); }
    .node-tag {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--neon);
      direction: ltr;
      overflow-wrap: anywhere;
    }
    .node-proto { font-size: 0.73rem; color: var(--muted); }
    .empty-note { padding: 16px 4px; color: var(--muted); font-size: 0.84rem; text-align: center; }

    .fab-refresh {
      position: fixed;
      bottom: calc(20px + env(safe-area-inset-bottom, 0px));
      left: calc(20px + env(safe-area-inset-left, 0px));
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: rgba(6, 12, 6, 0.94);
      border: 1px solid var(--border-hi);
      color: var(--text);
      font-size: 1.15rem;
      cursor: pointer;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease, border-color 0.3s ease;
    }
    .fab-refresh:hover { color: var(--neon); transform: rotate(120deg); }

    .page-foot {
      position: relative;
      z-index: 1;
      margin-top: 4px;
      padding: 15px 16px;
      border-radius: 18px;
      background: var(--card);
      border: 1px dashed var(--border-hi);
      font-size: 0.82rem;
      color: var(--muted);
      text-align: center;
      overflow-wrap: anywhere;
    }
    .page-foot a { color: var(--neon); font-weight: 800; text-decoration: none; }
    .page-foot a:hover { text-decoration: underline; }

    @media (max-width: 620px) {
      body { padding: 12px 10px calc(92px + env(safe-area-inset-bottom, 0px)); }
      .status-hero { padding: 16px; border-radius: 20px; }
      .acc-header { padding: 14px; }
      .acc-body, .acc-card.open .acc-body { padding-left: 14px; padding-right: 14px; }
      .url-copy-box { flex-wrap: wrap; }
      .url-text { flex: 1 1 100%; white-space: normal; overflow-wrap: anywhere; font-size: 0.73rem; }
      .url-copy-box .copy-btn { flex: 1 1 100%; }
      .node-row { flex-wrap: wrap; }
      .node-row .copy-btn { flex: 1 1 100%; }
      .fab-refresh { width: 48px; height: 48px; font-size: 1.02rem; }
    }
${FX_CSS}
${BASE_UI_CSS}
  </style>
</head>
<body>
  ${FX_MARKUP}

  <div class="container">
    <!-- کارت اصلی وضعیت کاربر -->
    <section class="status-hero fx-card fx-shine fx-fade" style="--fx-i:0">
      <div class="hero-top">
        <div class="hero-user">
          <div class="hero-logo fx-float">${SHIELD_LOGO_SVG}</div>
          <div>
            <div class="hero-name">${userName}</div>
            <div class="hero-brand">${BRAND_UPPER} Subscription Portal</div>
          </div>
        </div>
        <span class="pill ${isActive ? '' : 'pill-off'}">
          <span class="live-dot fx-live-dot" style="background:currentColor;box-shadow:none;width:7px;height:7px;border-radius:50%;"></span>
          ${escapeHtml(statusText)}
        </span>
      </div>

      <div class="hero-body">
        <div class="ring-wrap">
          <div class="usage-ring fx-ring fx-ring-pulse" id="usageRing" style="--fx-p:0">
            <div class="fx-ring-inner">
              <div class="ring-val" id="ringPercent">${limitBytes > 0 ? usagePercent + '%' : '∞'}</div>
              <div class="ring-cap">مصرف سهمیه</div>
              <div class="ring-sub">${limitBytes > 0 ? escapeHtml(formatBytes(remainingBytes)) + ' باقی‌مانده' : 'نامحدود'}</div>
            </div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-box fx-card">
            <div class="stat-label">مصرف فعلی</div>
            <div class="stat-val" id="statUsed">${escapeHtml(formatBytes(usedBytes))}</div>
          </div>
          <div class="stat-box fx-card">
            <div class="stat-label">سهمیه حجم</div>
            <div class="stat-val">${limitGb > 0 ? `${escapeHtml(String(limitGb))} GB` : '∞ نامحدود'}</div>
          </div>
          <div class="stat-box fx-card">
            <div class="stat-label">تعداد نود در ساب</div>
            <div class="stat-val" id="statNodes" data-count-to="${totalNodes}">0</div>
          </div>
          <div class="stat-box fx-card">
            <div class="stat-label">وضعیت انقضا</div>
            <div class="stat-val">${escapeHtml(expireLabel)}</div>
          </div>
          <div class="stat-box fx-card">
            <div class="stat-label">عمر کل مصرف</div>
            <div class="stat-val" id="statLifetime">${escapeHtml(formatBytes(lifetimeBytes))}</div>
          </div>
          <div class="stat-box fx-card">
            <div class="stat-label">درخواست‌های ثبت‌شده</div>
            <div class="stat-val" id="statReqs" data-count-to="${Number(user.requestCount || 0)}">0</div>
          </div>
        </div>
      </div>

      <div class="stat-label" style="margin-top:14px;">لینک شخصی صفحه وضعیت شما:</div>
      <div class="url-copy-box">
        ${copyButton(statusUrl, 'لینک صفحه وضعیت کپی شد', '🔗 کپی لینک وضعیت')}
        <div class="url-text">${escapeHtml(statusUrl)}</div>
      </div>
    </section>

    <!-- شروع سریع -->
    <div class="section-head">
      <span>🚀 شروع سریع</span>
      <span class="sub-meta">یک لینک برای همه کلاینت‌ها</span>
    </div>
    <div class="acc-card open fx-card fx-reveal" id="accQuickStart" style="--fx-i:0">
      <button type="button" class="acc-header" onclick="toggleAcc('accQuickStart')" aria-expanded="true">
        <div class="acc-title-wrap">
          <span class="acc-title">اتصال هوشمند (ساب‌لینک اصلی)</span>
          <span class="acc-count">1 لینک</span>
          <span class="tag-green">پیشنهادی</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">سریع‌ترین نود بر اساس پینگ واقعی، مناسب هر کلاینتی؛ کافی است همین لینک را در کلاینت وارد کنید.</p>
        <div class="url-copy-box">
          ${copyButton(baseSubUrl, 'ساب‌لینک هوشمند کپی شد')}
          <div class="url-text">${escapeHtml(baseSubUrl)}</div>
        </div>
        <div class="search-row">
          <button type="button" class="copy-btn" data-copy="${escapeHtml(baseSubUrl + '?target=clash')}" data-copy-msg="لینک Clash کپی شد">🟣 Clash</button>
          <button type="button" class="copy-btn" data-copy="${escapeHtml(baseSubUrl + '?target=singbox')}" data-copy-msg="لینک Sing-box کپی شد">🟢 Sing-box</button>
          <button type="button" class="copy-btn" data-copy="${escapeHtml(baseSubUrl + '?target=raw')}" data-copy-msg="لینک متن خام کپی شد">📄 متن خام</button>
        </div>
      </div>
    </div>

    <!-- محدوده نودها -->
    <div class="section-head">
      <span>🎯 محدوده نودها</span>
      <span class="sub-meta">${totalNodes} نود با فرمت number+${BRAND_NAME}</span>
    </div>
    <div class="acc-card fx-card fx-reveal" id="accScope" style="--fx-i:1">
      <button type="button" class="acc-header" onclick="toggleAcc('accScope')" aria-expanded="false">
        <div class="acc-title-wrap">
          <span class="acc-title">فقط بخشی از نودها را می‌خواهید؟</span>
          <span class="acc-count">${scopeOptions.length} گزینه · ${totalNodes} نود در کل</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">با پارامترهای لینک، تعداد نودها یا محدوده خروجی را دقیقاً همان‌طور که می‌خواهید بگیرید:</p>
        ${scopeOptions
          .map(
            (option, i) => `
        <div class="client-item fx-reveal" style="--fx-i:${i}">
          <div class="client-top">
            <span class="client-name">${escapeHtml(option.title)}</span>
            <span class="tag-green">${escapeHtml(option.badge)}</span>
          </div>
          <div class="url-copy-box">
            ${copyButton(option.url, 'کپی شد')}
            <div class="url-text">${escapeHtml(option.url)}</div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>

    <!-- لوکیشن‌ها -->
    <div class="section-head">
      <span>🌍 لوکیشن‌ها</span>
      <span class="sub-meta">هر کشور، یک ساب‌لینک جدا</span>
    </div>
    <div class="acc-card fx-card fx-reveal" id="accLocations" style="--fx-i:2">
      <button type="button" class="acc-header" onclick="toggleAcc('accLocations')" aria-expanded="false">
        <div class="acc-title-wrap">
          <span class="acc-title">ساب‌لینک لوکیشن‌محور</span>
          <span class="acc-count">${locationsList.length} لوکیشن</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">خروجی ثابت هر لوکیشن روی همان آی‌پی تأییدشده تنظیم می‌شود (مناسب انتخاب سریع‌ترین مسیر و عبور از تحریم):</p>
        <div class="loc-grid">
          ${locationsList
            .map(
              (loc, i) => `
          <div class="loc-card fx-card fx-reveal" style="--fx-i:${Math.min(i, 6)}">
            <div class="loc-top">
              <span class="loc-name">${escapeHtml(loc.title)}</span>
              <span class="loc-code">${escapeHtml(loc.code)}</span>
            </div>
            ${copyButton(loc.url, `لینک لوکیشن ${loc.code} کپی شد`, '📋 کپی لینک')}
          </div>`
            )
            .join('')}
        </div>
      </div>
    </div>

    <!-- خانواده ۱: Xray / Base64 -->
    <div class="section-head">
      <span>🛡️ ساب‌لینک اختصاصی هر کلاینت</span>
      <span class="sub-meta">16 کلاینت در 5 خانواده</span>
    </div>

    <div class="acc-card open fx-card fx-reveal" id="accXray" style="--fx-i:3">
      <button type="button" class="acc-header" onclick="toggleAcc('accXray')" aria-expanded="true">
        <div class="acc-title-wrap">
          <span class="acc-title">خانواده Xray / متن ساده — Base64</span>
          <span class="acc-count">${xrayClients.length} کلاینت</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <p class="client-desc">v2rayNG، Exclusive، Amnezia، Streisand، Shadowrocket، V2Box و FoXray ساب‌لینک Base64 (یا متن ساده) می‌خوانند.</p>
        ${xrayClients.map((client, idx) => clientRow(client, idx)).join('')}
      </div>
    </div>

    <!-- خانواده ۲: sing-box -->
    <div class="acc-card fx-card fx-reveal" id="accSingbox" style="--fx-i:4">
      <button type="button" class="acc-header" onclick="toggleAcc('accSingbox')" aria-expanded="false">
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
            ${copyButton(`${baseSubUrl}?target=singbox`, 'لینک Sing-box کپی شد')}
            <div class="url-text">${escapeHtml(`${baseSubUrl}?target=singbox`)}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- خانواده ۳: Clash / Mihomo -->
    <div class="acc-card fx-card fx-reveal" id="accClash" style="--fx-i:5">
      <button type="button" class="acc-header" onclick="toggleAcc('accClash')" aria-expanded="false">
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
            ${copyButton(`${baseSubUrl}?target=clash`, 'لینک Clash کپی شد')}
            <div class="url-text">${escapeHtml(`${baseSubUrl}?target=clash`)}</div>
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
            ${copyButton(`${baseSubUrl}?target=vg`, 'لینک CLASH خانگی کپی شد')}
            <div class="url-text">${escapeHtml(`${baseSubUrl}?target=vg`)}</div>
          </div>
        </div>`
            : ''
        }
      </div>
    </div>

    <!-- خانواده ۴: هسته‌ها و ابزارها -->
    <div class="acc-card fx-card fx-reveal" id="accTools" style="--fx-i:6">
      <button type="button" class="acc-header" onclick="toggleAcc('accTools')" aria-expanded="false">
        <div class="acc-title-wrap">
          <span class="acc-title">هسته‌ها و ابزارها (Surge / QuanX / Loon)</span>
          <span class="acc-count">3 کلاینت</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        ${[
          { name: 'Surge', badge: 'INI', target: 'surge' },
          { name: 'Quantumult X', badge: 'QuanX', target: 'quanx' },
          { name: 'Loon', badge: 'Loon', target: 'loon' }
        ]
          .map(
            (tool, i) => `
        <div class="client-item fx-reveal" style="--fx-i:${i}">
          <div class="client-top"><span class="client-name">${escapeHtml(tool.name)}</span><span class="tag-green">${escapeHtml(tool.badge)}</span></div>
          <div class="url-copy-box">
            ${copyButton(`${baseSubUrl}?target=${tool.target}`, `لینک ${tool.name} کپی شد`)}
            <div class="url-text">${escapeHtml(`${baseSubUrl}?target=${tool.target}`)}</div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>

    <!-- ساب‌لینک به تفکیک پروتکل -->
    <div class="section-head">
      <span>🔗 ساب‌لینک به تفکیک پروتکل و ترنسپورت</span>
      <span class="sub-meta">${protoCombos.length} ترکیب</span>
    </div>
    <div class="acc-card fx-card fx-reveal" id="accCombos" style="--fx-i:7">
      <button type="button" class="acc-header" onclick="toggleAcc('accCombos')" aria-expanded="false">
        <div class="acc-title-wrap">
          <span class="acc-title">لیست ترکیب‌های نود × پروتکل</span>
          <span class="acc-count">${protoCombos.length} لینک</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        ${protoCombos
          .map(
            (combo, i) => `
        <div class="client-item fx-reveal" style="--fx-i:${Math.min(i, 7)}">
          <div class="client-top">
            <span class="client-name">${escapeHtml(combo.title)}</span>
            <span class="tag-green">${escapeHtml(combo.badge)}</span>
          </div>
          <div class="url-copy-box">
            ${copyButton(combo.url, 'کپی شد')}
            <div class="url-text">${escapeHtml(combo.url)}</div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>

    <!-- لیست کانفیگ‌های خروجی -->
    <div class="section-head">
      <span>⚡ نودها</span>
      <span class="sub-meta">${totalNodes} نود · نام‌گذاری number+${BRAND_NAME}</span>
    </div>
    <div class="acc-card open fx-card fx-reveal" id="accNodes" style="--fx-i:8">
      <button type="button" class="acc-header" onclick="toggleAcc('accNodes')" aria-expanded="true">
        <div class="acc-title-wrap">
          <span class="acc-title">لیست کانفیگ‌های خروجی (1+${BRAND_NAME} تا ${totalNodes}+${BRAND_NAME})</span>
          <span class="acc-count">${totalNodes} کانفیگ</span>
        </div>
        <span class="acc-arrow">⌄</span>
      </button>
      <div class="acc-body">
        <div class="search-row">
          <input type="search" id="nodeSearch" class="search-input" placeholder="🔍 جستجوی نام یا پروتکل نود…" autocomplete="off" oninput="renderNodes()">
          <button type="button" class="copy-btn" id="copyAllBtn" style="flex:0 0 auto;">📋 کپی همه (${totalNodes})</button>
        </div>
        <div id="nodesContainer"></div>
        <div class="search-row" id="nodesMoreRow" hidden>
          <button type="button" class="copy-btn" style="flex:1 1 100%;" onclick="showMoreNodes()">نمایش نودهای بیشتر</button>
        </div>
        <div class="empty-note" id="nodesEmpty" hidden>نودی با این جستجو پیدا نشد.</div>
      </div>
    </div>
  </div>

  <div class="page-foot fx-reveal">
    ❓ سؤال یا مشکلی دارید؟ پشتیبانی ${BRAND_NAME} در ${SUPPORT_CHANNEL_LABEL} پاسخگوی شماست:
    <a href="${SUPPORT_CHANNEL_URL}" target="_blank" rel="noopener noreferrer">${SUPPORT_CHANNEL_URL}</a>
  </div>

  <button type="button" class="fab-refresh" onclick="window.location.reload()" title="بروزرسانی وضعیت" aria-label="بروزرسانی وضعیت">⇄</button>

  <script>
${FX_RUNTIME_JS}
  </script>
  <script>
    var ALL_NODES = ${safeNodesJson};
    var NODE_PAGE_SIZE = 30;
    var NODES_SHOWN = NODE_PAGE_SIZE;

    function esc(v) {
      return window.MiliFx ? MiliFx.esc(v) : String(v == null ? '' : v);
    }

    function showToast(msg) {
      if (window.MiliFx) MiliFx.toast(msg);
    }

    function copyText(text, msg) {
      if (window.MiliFx) MiliFx.copy(text, msg);
    }

    function copyAllNodes() {
      copyText(ALL_NODES.join('\\n'), 'همه کانفیگ‌ها کپی شدند');
    }

    function toggleAcc(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var isOpen = el.classList.contains('open');
      setAccOpen(el, !isOpen);
    }

    function setAccOpen(el, open) {
      var body = el.querySelector('.acc-body');
      var header = el.querySelector('.acc-header');
      if (!body) return;
      if (open) {
        el.classList.add('open');
        body.hidden = false;
        body.style.maxHeight = body.scrollHeight + 40 + 'px';
        window.setTimeout(function () {
          if (el.classList.contains('open')) body.style.maxHeight = 'none';
        }, 560);
      } else {
        if (body.style.maxHeight === 'none') body.style.maxHeight = body.scrollHeight + 'px';
        void body.offsetHeight;
        el.classList.remove('open');
        body.style.maxHeight = '0px';
        body.hidden = true;
      }
      if (header) header.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (window.MiliFx && open) MiliFx.reveal(el);
    }

    function initAccordions() {
      document.querySelectorAll('.acc-card').forEach(function (el) {
        var body = el.querySelector('.acc-body');
        if (!body) return;
        if (el.classList.contains('open')) {
          body.hidden = false;
          body.style.maxHeight = 'none';
        } else {
          body.hidden = true;
          body.style.maxHeight = '0px';
        }
      });
    }

    function nodeLabel(link, index) {
      var hashIdx = link.indexOf('#');
      var name = hashIdx > -1 ? decodeURIComponent(link.substring(hashIdx + 1)) : ((index + 1) + '+${BRAND_NAME}');
      var proto = String(link.split('://')[0] || '').toUpperCase();
      return { name: name, proto: proto || 'VLINK' };
    }

    function filteredNodes() {
      var query = '';
      var input = document.getElementById('nodeSearch');
      if (input) query = String(input.value || '').trim().toLowerCase();
      var out = [];
      for (var i = 0; i < ALL_NODES.length; i++) {
        var meta = nodeLabel(ALL_NODES[i], i);
        if (query && meta.name.toLowerCase().indexOf(query) === -1 && meta.proto.toLowerCase().indexOf(query) === -1) continue;
        out.push({ link: ALL_NODES[i], index: i, name: meta.name, proto: meta.proto });
      }
      return out;
    }

    function renderNodes() {
      var container = document.getElementById('nodesContainer');
      if (!container) return;
      var list = filteredNodes();
      var slice = list.slice(0, NODES_SHOWN);
      var empty = document.getElementById('nodesEmpty');
      var moreRow = document.getElementById('nodesMoreRow');
      var copyAllBtn = document.getElementById('copyAllBtn');

      container.innerHTML = slice
        .map(function (item) {
          return '<div class="node-row">' +
            '<div><div class="node-tag">' + esc(item.name) + '</div><div class="node-proto">' + esc(item.proto) + ' · Cloudflare Edge</div></div>' +
            '<button type="button" class="copy-btn" data-copy="' + esc(item.link) + '" data-copy-msg="کانفیگ ' + esc(item.name) + ' کپی شد">📋 کپی کانفیگ</button>' +
            '</div>';
        })
        .join('');

      if (empty) empty.hidden = list.length !== 0;
      if (moreRow) moreRow.hidden = list.length <= NODES_SHOWN;
      if (copyAllBtn) copyAllBtn.textContent = '📋 کپی همه (' + list.length + ')';
      if (window.MiliFx) MiliFx.reveal(container);
    }

    function showMoreNodes() {
      NODES_SHOWN += NODE_PAGE_SIZE;
      renderNodes();
    }

    // کپی با واگذاری رویداد (بدون inline onclick و بدون خطای کوتیشن در لینک‌ها)
    document.addEventListener('click', function (event) {
      var btn = event.target && event.target.closest ? event.target.closest('[data-copy]') : null;
      if (!btn) return;
      event.preventDefault();
      copyText(btn.getAttribute('data-copy'), btn.getAttribute('data-copy-msg') || 'کپی شد');
    });
    document.getElementById('copyAllBtn').addEventListener('click', copyAllNodes);

    initAccordions();
    renderNodes();

    // شمارنده‌های نرم و حلقه مصرف
    if (window.MiliFx) {
      MiliFx.ring(document.getElementById('usageRing'), ${limitBytes > 0 ? usagePercent : 100});
      var usedEl = document.getElementById('statUsed');
      if (usedEl) MiliFx.countUp(usedEl, ${usedBytes}, function (v) { return formatBytesRuntime(v); });
      var lifeEl = document.getElementById('statLifetime');
      if (lifeEl) MiliFx.countUp(lifeEl, ${lifetimeBytes}, function (v) { return formatBytesRuntime(v); });
      document.querySelectorAll('[data-count-to]').forEach(function (el) {
        MiliFx.countUp(el, Number(el.getAttribute('data-count-to')) || 0, function (v) { return String(Math.round(v)); });
      });
      MiliFx.reveal(document);
    }

    function formatBytesRuntime(bytes) {
      var b = Number(bytes) || 0;
      if (b <= 0) return '0 B';
      var units = ['B', 'KB', 'MB', 'GB', 'TB'];
      var i = Math.min(units.length - 1, Math.floor(Math.log(b) / Math.log(1024)));
      var value = b / Math.pow(1024, i);
      return (value >= 100 || i === 0 ? Math.round(value) : value.toFixed(2)) + ' ' + units[i];
    }

    // اندازه‌گیری مجدد ارتفاع آکاردئون‌های باز هنگام تغییر اندازه صفحه
    window.addEventListener('resize', function () {
      document.querySelectorAll('.acc-card.open .acc-body').forEach(function (body) {
        body.style.maxHeight = 'none';
      });
    });
  </script>
</body>
</html>`;
}


// --- MODULE: src/ui/adminHtml.js ---
// ============================================================================
// miliconfig v3.1 - مرکز کنترل مدیریت (Admin Control Center)
// طراحی ۱۰۰٪ مطابق تصاویر 1000050097.png، 1000050085.jpg و 1000050137.jpg
// ============================================================================


function renderAdminDashboardHtml(initialData = {}) {if(_0xMDC.tap(0x10)!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}
  const safeInitialJson = safeJsonForScript({
    brand: BRAND_NAME,
    version: VERSION,
    defaults: CONFIG_DEFAULTS,
    presets: USER_PRESETS,
    supportUrl: SUPPORT_CHANNEL_URL,
    config: initialData.config || CONFIG_DEFAULTS,
    users: initialData.users || [],
    diagnostics: initialData.diagnostics || {},
    adminPath: initialData.adminPath || ''
  });

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
      /* clip (در مرورگرهای جدید) اسکرول‌کانتینر نمی‌سازد تا sticky نوار بالا کار کند */
      overflow-x: clip;
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
      /* در موبایل چیدمان تک‌ستونه می‌شود و ناوبری فقط از منوی کشویی است */
      .app-shell { grid-template-columns: 1fr; }
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

    /*
      ناوبری موبایل فقط از طریق منوی کشویی (Drawer) انجام می‌شود؛
      تب/نوار پایین حذف شده است.
    */

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
      width: 150px;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .donut-ring > * { position: relative; z-index: 1; }

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

    /* ==================
       انیمیشن‌های اختصاصی پنل مدیریت
       ================== */
    .view-section.active { animation: fxFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .metric-card:hover .metric-value { color: var(--neon); }
    .metric-value { transition: color 0.3s ease; }
    .uc-actions .btn-ghost { flex: 1 1 auto; justify-content: center; }
    .modal-backdrop { opacity: 0; transition: opacity 0.28s ease; }
    .modal-backdrop.open { opacity: 1; }
    .modal-box {
      transform: translate3d(0, 20px, 0) scale(0.98);
      opacity: 0.55;
      transition: transform 0.44s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.44s ease;
    }
    .modal-backdrop.open .modal-box { transform: none; opacity: 1; }
    .sidebar { transition: box-shadow 0.3s ease; }
    @media (max-width: 1024px) {
      .sidebar.drawer-open { animation: fxFadeUp 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
    }
    .sync-pill.syncing .dot-online { animation: fxLive 0.65s ease-in-out infinite; }
    .empty-state {
      padding: 22px;
      text-align: center;
      color: var(--muted);
      font-size: 0.86rem;
      border: 1px dashed var(--border);
      border-radius: 16px;
    }
    .quick-bar > .btn-neon { flex: 0 0 auto; }

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
    /* دکمه کشویی موبایل (باز/بسته کردن منو) */
    .menu-toggle { display: none; }
    .sb-close {
      display: none;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(248, 113, 113, 0.12);
      border: 1px solid rgba(248, 113, 113, 0.35);
      color: var(--danger);
      font-size: 0.95rem;
      font-family: inherit;
      cursor: pointer;
      flex-shrink: 0;
    }
    @media (max-width: 1024px) {
      .app-shell {
        padding: 10px;
        gap: 12px;
        padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
      }
      /* نوار بالا چسبان است تا دکمه «☰ منو» همیشه در دسترس باشد */
      .topbar {
        position: sticky;
        top: 8px;
        z-index: 60;
        background: rgba(11, 20, 11, 0.97);
      }
      .topbar-brand { display: none; }
      /*
        منوی کشویی «درون‌صفحه» است، نه لایه‌ی شناور روی کل صفحه:
        با دکمه «☰ منو» باز می‌شود و محتوا را به پایین هل می‌دهد تا صفحه قابل استفاده بماند.
        بستن آن: دکمه ✕ داخل منو، دکمه «✕ بستن منو» در نوار بالا، یا انتخاب هر آیتم منو.
        نکته: این قاعده باید بعد از قاعده پایه .sidebar بیاید تا واقعاً اعمال شود.
      */
      .sidebar {
        display: none;
        position: static;
        top: auto;
        right: auto;
        bottom: auto;
        width: 100%;
        height: auto;
        max-height: none;
        border-radius: 20px;
        padding: 14px;
        overflow: visible;
        z-index: auto;
        box-shadow: none;
        justify-content: flex-start;
      }
      .sidebar.drawer-open { display: flex; }
      .menu-toggle {
        display: inline-flex;
        background: rgba(163, 230, 53, 0.16);
        border-color: var(--border-hi);
        color: var(--neon);
        font-weight: 800;
      }
      .sb-close { display: inline-flex; }
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
${FX_CSS}
${BASE_UI_CSS}
  </style>
</head>
<body>
  ${FX_MARKUP}

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
          <button type="button" class="sb-close" onclick="closeSidebarDrawer()" aria-label="بستن منو">✕</button>
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
          <button type="button" class="top-pill menu-toggle" onclick="toggleSidebarDrawer()" aria-expanded="false" aria-label="باز و بسته کردن منو">☰ منو</button>
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
              <div class="donut-ring fx-ring fx-ring-pulse" id="donutRing" style="--fx-p:0.35">
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
              <textarea id="cfg_yx" class="mili-textarea" rows="4" placeholder="104.16.1.1:443#Node1,188.114.98.10:443#Node2" style="direction:ltr;"></textarea>
              <span class="field-hint">فرمت: IP:Port#Name با کاما جدا شوند. آدرس نودها همیشه آی‌پی واقعی است و در خروجی ساب با فرمت number+${BRAND_NAME} شماره‌گذاری می‌شوند.</span>
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
          </div>

          <div class="modal-sec-title" style="margin-top:18px;">اسکنر داخلی آی‌پی (معادل cfnew) — تست واقعی TCP بدون دامنه</div>
          <div class="form-grid-3">
            <div class="field-box">
              <label class="field-label">حالت اسکن:</label>
              <select id="scanMode" class="mili-select">
                <option value="v4">IPv4 — لبه کلودفلر</option>
                <option value="v6">IPv6 — همراه اول / ایرانسل</option>
              </select>
            </div>
            <div class="field-box">
              <label class="field-label">تعداد کاندید (حداکثر ۶۰):</label>
              <input type="number" id="scanCount" class="mili-input" value="16" min="1" max="60">
            </div>
            <div class="field-box">
              <label class="field-label">پورت و تایم‌اوت (ms):</label>
              <div style="display:flex;gap:8px;">
                <input type="number" id="scanPort" class="mili-input" value="443" min="1" max="65535">
                <input type="number" id="scanTimeout" class="mili-input" value="2500" min="500" max="10000">
              </div>
            </div>
          </div>
          <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap;">
            <button type="button" class="btn-neon" onclick="runIpScan(false)">🔍 اسکن واقعی آی‌پی‌ها</button>
            <button type="button" class="btn-ghost" onclick="runIpScan(true)">💾 اسکن + ذخیره سالم‌ها در لیست ترجیحی</button>
            <button type="button" class="btn-ghost" onclick="resolveYxDomains()">🌐 تبدیل دامنه‌های yx به آی‌پی ثابت</button>
          </div>

          <span class="field-hint" style="display:block;margin-top:8px;">
            توجه: اسکن از داخل Worker انجام می‌شود و کلودفلر اجازهٔ اتصال به برخی آی‌پی‌های لبهٔ خودش را نمی‌دهد (خطای Stream was cancelled).
            برای اعتبارسنجی کامل از دستور <code>npm run scan</code> روی سیستم خودتان استفاده کنید.
          </span>

          <div id="scanResultsBox" class="kv-list" style="margin-top:14px;"></div>
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
            <label class="check-label"><input type="checkbox" id="cfg_ss"> <span>فعال‌سازی Shadowsocks (ss)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_ech"> <span>فعال‌سازی ECH (ech)</span></label>
            <label class="check-label"><input type="checkbox" id="cfg_jk"> <span>زنجیره اینترنت خانگی (jk)</span></label>
          </div>

          <div class="modal-sec-title">۱.۵ رمزنگاری Shadowsocks (AEAD)</div>
          <div class="form-grid-3">
            <div class="field-box">
              <label class="field-label">روش رمزنگاری (ssc):</label>
              <select id="cfg_ssc" class="mili-select">
                <option value="chacha20-ietf-poly1305">chacha20-ietf-poly1305 (پیشنهادی)</option>
                <option value="aes-256-gcm">aes-256-gcm</option>
                <option value="aes-128-gcm">aes-128-gcm</option>
                <option value="all">همه سه روش (سه نود برای هر آدرس)</option>
              </select>
              <span class="field-hint">می‌توانید چند روش را با کاما بنویسید: <code>aes-256-gcm,chacha20-ietf-poly1305</code></span>
            </div>
            <div class="field-box">
              <label class="field-label">رمز عبور Shadowsocks (ssp):</label>
              <input type="text" id="cfg_ssp" class="mili-input" placeholder="خالی = UUID همان کاربر" style="direction:ltr;">
              <span class="field-hint">لینک‌ها با فرمت SIP002 و plugin=v2ray-plugin ساخته می‌شوند.</span>
            </div>
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
            <div class="field-box">
              <label class="field-label">لوکیشن‌های واقعی (locs):</label>
              <input type="text" id="cfg_locs" class="mili-input" placeholder="all یا DE,NL,GB,FR" style="direction:ltr;">
              <span class="field-hint">all = هر ۱۶ لوکیشن با آی‌پی ثابت · no = بدون نود لوکیشن</span>
            </div>
            <div class="field-box">
              <label class="field-label">خروجی ثابت هر نود (pm):</label>
              <select id="cfg_pm" class="mili-select">
                <option value="">غیرفعال — مسیر مستقیم</option>
                <option value="yes">فعال — ترافیک TLS از خروجی ثابت همان لوکیشن</option>
                <option value="only">فقط خروجی ثابت (بدون بازگشت به مستقیم)</option>
              </select>
              <span class="field-hint">این خروجی برای مقاصد میزبانی‌شده روی کلودفلر (Discord و ...) تضمینی است. برای Gemini/OpenAI که روی کلودفلر نیستند باید پروکسی خروجی (s) مثل WARP را تنظیم و روش خروج را only کنید.</span>
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

  <!-- ناوبری موبایل فقط با منوی کشویی (بدون تب پایین) -->

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
        <label class="check-label"><input type="checkbox" id="um_ss"> <span>پروتکل Shadowsocks (ss)</span></label>
        <label class="check-label"><input type="checkbox" id="um_ech"> <span>فعال‌سازی ECH (ech)</span></label>
        <label class="check-label"><input type="checkbox" id="um_jk"> <span>زنجیره اینترنت خانگی (jk)</span></label>
      </div>

      <div class="form-grid-3">
        <div class="field-box">
          <label class="field-label">رمزنگاری Shadowsocks (ssc):</label>
          <select id="um_ssc" class="mili-select">
            <option value="chacha20-ietf-poly1305">chacha20-ietf-poly1305</option>
            <option value="aes-256-gcm">aes-256-gcm</option>
            <option value="aes-128-gcm">aes-128-gcm</option>
            <option value="all">همه سه روش</option>
          </select>
        </div>
        <div class="field-box">
          <label class="field-label">رمز Shadowsocks (ssp):</label>
          <input type="text" id="um_ssp" class="mili-input" placeholder="خالی = UUID همین کاربر" style="direction:ltr;">
        </div>
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
${FX_RUNTIME_JS}
  </script>
  <script>
    var STATE = ${safeInitialJson};
    var SELECTED_PRESET = 'iran-fast';
    var USER_FILTER_STATUS = 'all';

    function getApiBase() {
      var p = window.location.pathname.replace(/\\/+$/g, '');
      return p || '';
    }

    function esc(v) {
      return window.MiliFx ? MiliFx.esc(v) : String(v === undefined || v === null ? '' : v);
    }

    function showToast(msg) {
      if (window.MiliFx) MiliFx.toast(msg);
    }

    function setText(id, value) {
      var el = document.getElementById(id);
      if (el) el.textContent = value;
    }

    // فراخوانی امن API با پیام خطای خوانا (به‌جای شکست بی‌صدا)
    async function apiRequest(path, options) {
      var res = await fetch(getApiBase() + path, options);
      var data = null;
      try { data = await res.json(); } catch (_e) { data = null; }
      if (!res.ok) {
        var message = (data && (data.message || data.error)) || ('خطای سرور (' + res.status + ')');
        throw new Error(message);
      }
      if (!data) throw new Error('پاسخ نامعتبر از سرور');
      return data;
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
      var toggle = document.querySelector('.menu-toggle');
      if (!sidebar) return;
      var willOpen = typeof force === 'boolean' ? force : !sidebar.classList.contains('drawer-open');
      sidebar.classList.toggle('drawer-open', willOpen);
      if (toggle) {
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        toggle.textContent = willOpen ? '✕ بستن منو' : '☰ منو';
      }
    }

    function closeSidebarDrawer() {
      toggleSidebarDrawer(false);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var openModal = document.getElementById('userModalBackdrop');
      if (openModal && openModal.classList.contains('open')) {
        closeUserModal();
        return;
      }
      closeSidebarDrawer();
    });

    function switchView(viewName, fromHash) {
      var titles = {
        dashboard: 'داشبورد',
        users: 'کاربران',
        nodes: 'نودها و تست تاخیر',
        network: 'شبکه و لبه',
        panel: 'پنل و ظاهر',
        system: 'تنظیمات و دیتابیس D1'
      };
      var target = document.getElementById('view-' + viewName);
      if (!target) viewName = 'dashboard';
      setText('topPageTitle', titles[viewName] || 'داشبورد');
      document.querySelectorAll('.view-section').forEach(function(s) {
        var isActive = s.id === 'view-' + viewName;
        s.classList.toggle('active', isActive);
        if (isActive && window.MiliFx && !fromHash) {
          s.style.animation = 'none';
          void s.offsetWidth;
          s.style.animation = '';
          MiliFx.reveal(s);
        }
      });
      document.querySelectorAll('.sb-item').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-view') === viewName);
      });
      try {
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', '#' + viewName);
        }
      } catch (_e) {}
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
      var searchEl = document.getElementById('userSearchInput');
      var q = (searchEl && searchEl.value ? searchEl.value : '').trim().toLowerCase();
      var list = (STATE.users || []).filter(function(u) {
        if (USER_FILTER_STATUS === 'active' && !u.enabled) return false;
        if (USER_FILTER_STATUS === 'disabled' && u.enabled) return false;
        if (!q) return true;
        var name = String(u.username || '').toLowerCase();
        var ident = String(u.uuid || '').toLowerCase();
        return name.indexOf(q) !== -1 || ident.indexOf(q) !== -1;
      });

      setText('sbUserCount', String((STATE.users || []).length));

      if (list.length === 0) {
        container.innerHTML = '<div class="empty-state">هیچ کاربری با این فیلتر یافت نشد. با دکمهٔ «+ کاربر جدید» اولین کاربر را بسازید.</div>';
        return;
      }

      var baseOrigin = window.location.origin;
      var html = '';
      list.forEach(function(u, cardIdx) {
        var statusUrl = baseOrigin + '/status/' + encodeURIComponent(u.id || '');
        var subToken = (u.config && u.config.d && u.config.d.trim()) ? u.config.d.trim().replace(/^\\/+|\\/+$/g, '') : u.uuid;
        var subUrl = baseOrigin + '/' + subToken + '/sub';
        var nodeCount = u.subNodeCount || (u.config && u.config.subNodeCount) || 50;
        var gaugeText = u.dataLimitGb > 0 ? (u.dataLimitGb + ' GB') : '∞ بی‌نهایت';
        var expText = u.expireDays > 0 ? (u.expireDays + ' روز') : 'بدون انقضا';

        html += '<div class="user-card fx-card fx-reveal" style="--fx-i:' + Math.min(cardIdx, 6) + '">' +
          '<div class="uc-top">' +
            '<span class="top-pill ' + (u.enabled ? 'live' : '') + '">' + (u.enabled ? 'شروع با اولین اتصال' : 'غیرفعال') + '</span>' +
            '<div class="uc-id-box">' +
              '<div style="text-align:left;"><div class="uc-name">' + esc(u.username) + '</div><div class="uc-uuid">' + esc(String(u.uuid || '').slice(0, 18)) + (String(u.uuid || '').length > 18 ? '...' : '') + '</div></div>' +
              '<div class="uc-avatar">M</div>' +
            '</div>' +
          '</div>' +
          '<div class="uc-body">' +
            '<div class="uc-stats">' +
              '<div class="uc-stat-line"><span>مصرف</span><strong>' + formatBytesJs(u.usedBytes) + '</strong></div>' +
              '<div class="uc-stat-line"><span>عمر کل</span><strong>' + formatBytesJs(u.lifetimeBytes) + '</strong></div>' +
              '<div class="uc-stat-line"><span>درخواست‌ها</span><strong>' + (u.requestCount || 0) + '</strong></div>' +
              '<div class="uc-stat-line"><span>انقضا</span><strong>' + expText + '</strong></div>' +
              '<div class="uc-stat-line"><span>تعداد نود در ساب</span><strong>' + nodeCount + ' نود (' + esc(STATE.brand) + ')</strong></div>' +
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
      if (window.MiliFx) MiliFx.reveal(container);
    }

    function applyConfigToForm(cfg) {
      if (!cfg) return;
      var textFields = ['yx', 'yxURL', 'subNodeCount', 'wk', 'p', 's', 'qj', 'tp', 'alpn', 'customDNS', 'customECHDomain', 'dkby', 'rm', 'yxby', 'd', 'homepage', 'scu', 'ae', 'pm', 'locs', 'ssc', 'ssp'];
      textFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el && cfg[k] !== undefined) el.value = cfg[k];
      });
      var boolFields = ['ev', 'et', 'ex', 'ss', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el) el.checked = cfg[k] === 'yes' || cfg[k] === true;
      });
    }

    function collectFormConfig() {
      var out = {};
      var textFields = ['yx', 'yxURL', 'subNodeCount', 'wk', 'p', 's', 'qj', 'tp', 'alpn', 'customDNS', 'customECHDomain', 'dkby', 'rm', 'yxby', 'd', 'homepage', 'scu', 'ae', 'pm', 'locs', 'ssc', 'ssp'];
      textFields.forEach(function(k) {
        var el = document.getElementById('cfg_' + k);
        if (el) out[k] = el.value;
      });
      var boolFields = ['ev', 'et', 'ex', 'ss', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
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

      var nodeCount = Number(diag.healthyCfIps || 31);
      var totalReqs = Number(diag.totalRequests || 0);
      setText('mTotalUsers', String(users.length));
      setText('mUsersSub', activeCount + ' فعال · ' + disCount + ' غیرفعال');
      setText('mActiveNodes', String(nodeCount));
      setText('mHealthyIps', String(nodeCount));
      setText('donutCenterCount', String(nodeCount));
      setText('sbNodeCount', String(nodeCount));
      if (window.MiliFx) {
        MiliFx.countUp(document.getElementById('mTotalTraffic'), Number(diag.totalUsedBytes || 0), function (v) { return formatBytesJs(v); });
        MiliFx.countUp(document.getElementById('mLifetimeTraffic'), Number(diag.totalLifetimeBytes || 0), function (v) { return 'مجموع عمر: ' + formatBytesJs(v); });
        MiliFx.countUp(document.getElementById('mTotalReqs'), totalReqs, function (v) { return String(Math.round(v)); });
        MiliFx.countUp(document.getElementById('hbReqs'), totalReqs, function (v) { return '⚡ ' + Math.round(v) + ' درخواست ثبت‌شده'; });
        MiliFx.ring(document.getElementById('donutRing'), nodeCount > 0 ? Math.min(100, Math.round((users.length / nodeCount) * 100)) : 100);
      }

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
          return '<div class="kv-row"><span class="kv-key">' + esc(u.username) + ' (' + (u.subNodeCount || 50) + ' نود)</span><span class="kv-val">' + formatBytesJs(u.usedBytes || 0) + '</span></div>';
        }).join('') || '<div style="color:var(--muted);font-size:0.8rem;">هنوز کاربری ثبت نشده است</div>';
      }

      // رویدادها
      var logBox = document.getElementById('auditLogsList');
      if (logBox) {
        var logs = diag.recentLogs || [];
        logBox.innerHTML = logs.slice(0, 5).map(function(l) {
          return '<div class="kv-row"><span class="kv-key">' + esc(l.action) + '</span><span class="kv-val">' + esc(l.detail) + '</span></div>';
        }).join('') || '<div style="color:var(--muted);font-size:0.8rem;">رویدادی ثبت نشده است</div>';
      }
    }

    async function refreshAllData() {
      var pill = document.querySelector('.top-pill.live');
      if (pill) pill.classList.add('syncing');
      try {
        var data = await apiRequest('/api/stats', { method: 'GET' });
        if (data && data.success) {
          STATE.config = data.config || STATE.config;
          STATE.users = data.users || STATE.users;
          STATE.diagnostics = data.diagnostics || STATE.diagnostics;
          applyConfigToForm(STATE.config);
          renderUsersGrid();
          updateDashboardWidgets();
          showToast('اطلاعات پنل به‌روزرسانی شد');
        } else {
          showToast('دریافت اطلاعات پنل ناموفق بود');
        }
      } catch (err) {
        showToast('خطا در دریافت اطلاعات: ' + (err && err.message ? err.message : 'نامشخص'));
      } finally {
        if (pill) pill.classList.remove('syncing');
      }
    }

    async function quickCreateUser() {
      var username = (document.getElementById('quickUsername').value || '').trim();
      var rawCount = parseInt(document.getElementById('quickSubNodeCount').value, 10);
      var subNodeCount = Number.isFinite(rawCount) ? Math.min(500, Math.max(0, rawCount)) : 50;
      var usePanelDefaults = document.getElementById('quickUsePanelDefaults').checked;
      if (username.length > 64) {
        showToast('نام کاربری حداکثر ۶۴ کاراکتر می‌تواند باشد');
        return;
      }
      try {
        var data = await apiRequest('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username,
            preset: SELECTED_PRESET,
            subNodeCount: subNodeCount,
            usePanelDefaults: usePanelDefaults
          })
        });
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
      var textKeys = ['wk', 'p', 's', 'qj', 'tp', 'alpn', 'd', 'customDNS', 'customECHDomain', 'yx', 'yxURL', 'scu', 'dkby', 'rm', 'yxby', 'homepage', 'ae', 'ssc', 'ssp'];
      textKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) el.value = uCfg[k] !== undefined ? uCfg[k] : '';
      });
      var boolKeys = ['ev', 'et', 'ex', 'ss', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) el.checked = uCfg[k] === 'yes' || uCfg[k] === true;
      });

      modal.classList.add('open');
      if (window.MiliFx) MiliFx.reveal(modal);
      var firstField = document.getElementById('um_username');
      if (firstField) window.setTimeout(function () { firstField.focus(); }, 240);
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
      var textKeys = ['wk', 'p', 's', 'qj', 'tp', 'alpn', 'd', 'customDNS', 'customECHDomain', 'yx', 'yxURL', 'scu', 'dkby', 'rm', 'yxby', 'homepage', 'ae', 'ssc', 'ssp'];
      textKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) payload.config[k] = el.value;
      });
      var boolKeys = ['ev', 'et', 'ex', 'ss', 'ech', 'jk', 'epd', 'epi', 'egi', 'ena', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'];
      boolKeys.forEach(function(k) {
        var el = document.getElementById('um_' + k);
        if (el) payload.config[k] = el.checked ? 'yes' : 'no';
      });
      payload.config.subNodeCount = payload.subNodeCount;
      if (!payload.username) {
        showToast('نام کاربری را وارد کنید');
        return;
      }
      if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(payload.uuid)) {
        showToast('UUID معتبر نیست؛ با دکمه 🎲 یک UUID استاندارد بسازید');
        return;
      }

      var method = id ? 'PUT' : 'POST';
      var data = await apiRequest('/api/users', {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function (err) {
        showToast('خطا در ذخیره کاربر: ' + (err && err.message ? err.message : 'نامشخص'));
        return { success: false, message: 'ارتباط با سرور ناموفق بود' };
      });
      if (data && data.success) {
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
      if (!window.confirm('مصرف این کاربر صفر شود؟')) return;
      await fetch(getApiBase() + '/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, action: 'reset' })
      });
      showToast('مصرف کاربر صفر شد');
      await refreshAllData();
    }

    async function removeUser(id) {
      if (!window.confirm('این کاربر و تمام تنظیماتش حذف شود؟ این کار قابل بازگشت نیست.')) return;
      await fetch(getApiBase() + '/api/users?id=' + encodeURIComponent(id), {
        method: 'DELETE'
      });
      showToast('کاربر حذف شد');
      await refreshAllData();
    }

    async function savePanelSettings() {
      var cfg = collectFormConfig();
      var data = await apiRequest('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cfg)
      }).catch(function (err) {
        showToast('خطا در ذخیره تنظیمات: ' + (err && err.message ? err.message : 'نامشخص'));
        return { success: false, message: 'ارتباط با سرور ناموفق بود' };
      });
      if (!data) return;
      if (data.success) {
        showToast(data.message || 'تنظیمات پنل ذخیره شد');
        await refreshAllData();
      } else {
        showToast(data.message || 'خطا در ذخیره تنظیمات');
      }
    }

    async function resetAllPanelSettings() {
      var data = await apiRequest('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _reset: true })
      }).catch(function (err) {
        showToast('بازنشانی تنظیمات ناموفق بود: ' + (err && err.message ? err.message : 'نامشخص'));
        return { success: false, message: 'ارتباط با سرور ناموفق بود' };
      });
      if (!data) return;
      if (data.success) {
        showToast(data.message);
        await refreshAllData();
      }
    }

    async function initD1Database() {
      var data = await apiRequest('/api/d1-init', { method: 'POST' }).catch(function (err) {
        showToast('بررسی D1 ناموفق بود: ' + (err && err.message ? err.message : 'نامشخص'));
        return { success: false, message: 'ارتباط با سرور ناموفق بود' };
      });
      if (!data) return;
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

    var LAST_SCAN = { results: [], summary: null };

    async function runIpScan(save) {
      var box = document.getElementById('scanResultsBox');
      if (box) {
        box.innerHTML = '<div class="kv-row"><span class="kv-key">در حال اجرای اسکن واقعی TCP...</span><span class="kv-val">لطفاً صبر کنید</span></div>';
      }
      try {
        var data = await apiRequest('/api/scanner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'scan',
            ipv6: document.getElementById('scanMode').value === 'v6',
            count: parseInt(document.getElementById('scanCount').value, 10) || 16,
            port: parseInt(document.getElementById('scanPort').value, 10) || 443,
            timeoutMs: parseInt(document.getElementById('scanTimeout').value, 10) || 2500,
            save: !!save
          })
        });
        LAST_SCAN.results = data.results || [];
        LAST_SCAN.summary = data.summary || null;
        renderScanResults();
        if (save) {
          showToast('نتایج سالم در لیست ترجیحی ذخیره شد');
          await refreshAllData();
        }
      } catch (err) {
        if (box) {
          box.innerHTML = '<div class="kv-row"><span class="kv-key">خطا در اسکن</span><span class="kv-val">' + esc(err && err.message ? err.message : 'نامشخص') + '</span></div>';
        }
      }
    }

    function renderScanResults() {
      var box = document.getElementById('scanResultsBox');
      if (!box) return;
      var list = (LAST_SCAN.results || []).slice().sort(function(a, b) {
        if (!!a.ok !== !!b.ok) return a.ok ? -1 : 1;
        return (a.latency || 99999) - (b.latency || 99999);
      });
      if (!list.length) {
        box.innerHTML = '<div class="kv-row"><span class="kv-key">نتیجه‌ای برای نمایش نیست</span><span class="kv-val">-</span></div>';
        return;
      }
      var s = LAST_SCAN.summary || {};
      var html = '<div class="kv-row"><span class="kv-key">خلاصه اسکن</span><span class="kv-val">' +
        (s.healthy || 0) + ' سالم از ' + (s.total || list.length) + ' کاندید' +
        (s.bestLatency !== null && s.bestLatency !== undefined ? (' · بهترین تأخیر ' + s.bestLatency + 'ms') : '') +
        '</span></div>';
      list.forEach(function(r) {
        var parts = [];
        if (r.colo) parts.push('colo ' + r.colo);
        if (r.loc) parts.push(r.loc);
        if (r.latency !== undefined) parts.push(r.latency + 'ms');
        if (!r.ok) parts.push(esc(r.error || 'ناموفق'));
        html += '<div class="kv-row"><span class="kv-key" style="direction:ltr;">' + (r.ok ? '✓' : '✕') + ' ' + esc(r.ip) + '</span><span class="kv-val">' + parts.join(' · ') + '</span></div>';
      });
      var healthy = list.filter(function(r) { return r.ok; }).map(function(r) { return r.ip + ':' + (r.port || 443) + '#CF-' + r.ip; });
      if (healthy.length) {
        html += '<div class="kv-row"><span class="kv-key">آی‌پی‌های سالم</span><span class="kv-val"><button type="button" class="btn-ghost" data-add-ips="' + esc(healthy.join(',')) + '">+ افزودن به لیست ترجیحی (yx)</button></span></div>';
      }
      box.innerHTML = html;
    }

    async function resolveYxDomains() {
      var yx = (document.getElementById('cfg_yx') ? document.getElementById('cfg_yx').value : '') || '';
      var hosts = yx.split(',').map(function(item) {
        var hostPart = String(item || '').split('#')[0].trim();
        var lastColon = hostPart.lastIndexOf(':');
        if (lastColon > 0 && !isNaN(parseInt(hostPart.slice(lastColon + 1), 10))) {
          hostPart = hostPart.slice(0, lastColon);
        }
        if (hostPart.charAt(0) === '[' && hostPart.charAt(hostPart.length - 1) === ']') {
          hostPart = hostPart.slice(1, -1);
        }
        return hostPart;
      }).filter(function(h) {
        return h && h.indexOf(':') === -1 && /[a-zA-Z]/.test(h);
      });
      if (!hosts.length) {
        showToast('دامنه‌ای در لیست ترجیحی (yx) برای تبدیل پیدا نشد');
        return;
      }
      try {
        var data = await apiRequest('/api/scanner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'resolve', hosts: hosts, save: true, port: 443 })
        });
        var rows = (data.resolved || []).map(function(r) {
          return '<div class="kv-row"><span class="kv-key" style="direction:ltr;">' + esc(r.host) + '</span><span class="kv-val" style="direction:ltr;">' + (r.fixedIp ? esc(r.fixedIp) : 'حل نشد') + '</span></div>';
        }).join('');
        document.getElementById('scanResultsBox').innerHTML = rows || '<div class="kv-row"><span class="kv-key">نتیجه‌ای یافت نشد</span><span class="kv-val">-</span></div>';
        showToast('دامنه‌ها به آی‌پی ثابت تبدیل و ذخیره شدند');
        await refreshAllData();
      } catch (err) {
        showToast('خطا در تبدیل دامنه‌ها: ' + (err && err.message ? err.message : 'نامشخص'));
      }
    }

    function appendGeneratedIps(str) {
      var el = document.getElementById('cfg_yx');
      if (!el || !str) return;
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

    // خطاهای پردازش‌نشده شبکه دیگر بی‌صدا نمی‌مانند
    window.addEventListener('unhandledrejection', function (event) {
      var reason = event && event.reason ? event.reason : null;
      showToast('خطا در ارتباط با سرور: ' + (reason && reason.message ? reason.message : 'درخواست ناموفق بود'));
    });

    // افزودن IPهای تولیدشده با واگذاری رویداد (بدون inline onclick)
    document.addEventListener('click', function (event) {
      var btn = event.target && event.target.closest ? event.target.closest('[data-add-ips]') : null;
      if (btn) appendGeneratedIps(btn.getAttribute('data-add-ips') || '');
    });

    // بستن مودال با کلیک روی پس‌زمینه و کلید Escape
    var modalBackdrop = document.getElementById('userModalBackdrop');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', function (event) {
        if (event.target === modalBackdrop) closeUserModal();
      });
    }

    // مقداردهی اولیه
    renderPresets();
    applyConfigToForm(STATE.config);
    renderUsersGrid();
    updateDashboardWidgets();

    // جلوه‌های نرم روی کارت‌های پنل
    document.querySelectorAll('.metric-card, .panel-card, .hero-card, .stat-box, .kv-row').forEach(function (el, idx) {
      el.classList.add('fx-card');
      if (el.classList.contains('panel-card') || el.classList.contains('metric-card')) el.classList.add('fx-reveal');
      if (!el.style.getPropertyValue('--fx-i')) el.style.setProperty('--fx-i', String(Math.min(idx, 8)));
    });
    if (window.MiliFx) MiliFx.reveal(document);

    // بازیابی نمای انتخاب‌شده از آدرس
    var hashView = String(window.location.hash || '').replace('#', '');
    if (hashView && document.getElementById('view-' + hashView)) switchView(hashView, true);
    window.addEventListener('hashchange', function () {
      var v = String(window.location.hash || '').replace('#', '');
      if (v && document.getElementById('view-' + v)) switchView(v, true);
    });
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

// مسیرهای دارای درصد ناقص (مثل /status/%E0) نباید URIError بدهند؛
// در غیر این صورت درخواست با پاسخ ۲۰۰ «recovered» اشتباه برگردانده می‌شد.
function decodePathToken(value) {
  try {
    return decodeURIComponent(String(value ?? ''));
  } catch (_e) {
    return String(value ?? '');
  }
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

const __MILI_WORKER_EXPORT__ = {
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
          const token = decodePathToken(apiSubPath.slice('status/'.length));
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
        if (apiSubPath === 'scanner') {
          return await handleScannerApi(request, env, true);
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
          const token = decodePathToken(pathParts[0] === 'status' ? pathParts[1] : pathParts[0]);
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
            ? decodePathToken(pathParts.slice(1).join('/'))
            : decodePathToken(pathParts.slice(0, -1).join('/'));

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


export default __MILI_WORKER_EXPORT__;
