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

export const CF_IPV4_RANGES = [
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

export const CF_IPV6_RANGES = [
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
export const CLEAN_EDGE_IPV4 = [
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
export function ipv4ToCloudflareV6(ip) {
  const parts = String(ip || '').trim().split('.').map(n => parseInt(n, 10));
  if (parts.length !== 4 || parts.some(n => !Number.isFinite(n) || n < 0 || n > 255)) return '';
  const hex = n => n.toString(16);
  const g1 = `${hex(parts[0])}${hex(parts[1])}`;
  const g2 = `${hex(parts[2])}${hex(parts[3]).padStart(2, '0')}`;
  return `2606:4700::${g1}:${g2}`;
}

// آی‌پی‌های ثابت IPv6 (مشتق از آی‌پی‌های تأییدشده + AAAA واقعی صفحات کلودفلر)
export const CLEAN_EDGE_IPV6 = [
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
export const LOCATIONS = [
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
export const SANCTION_FREE_CODES = ['DE', 'NL', 'GB', 'FR', 'CH', 'SE', 'US', 'CA'];

export function getLocation(code) {
  return LOCATIONS.find(l => l.code === String(code || '').toUpperCase()) || null;
}

// فیلتر locs: '' یا 'all' = همه، 'no' = هیچ‌کدام، در غیر این صورت لیست کدها با کاما
export function parseLocationFilter(value = '') {
  const raw = String(value ?? '').trim().toLowerCase();
  if (raw === '' || raw === 'all' || raw === '*') return LOCATIONS.slice();
  if (raw === 'no' || raw === 'off' || raw === '0' || raw === 'none') return [];
  const wanted = raw.split(/[,\s|]+/).filter(Boolean);
  const picked = LOCATIONS.filter(l => wanted.includes(l.code.toLowerCase()));
  return picked;
}

export function getSanctionFreeLocations() {
  return LOCATIONS.filter(l => SANCTION_FREE_CODES.includes(l.code));
}

// انتخاب چرخشی آی‌پی لبه برای هر لوکیشن تا هیچ دو نودی آدرس یکسان نگیرند
export function edgeIpForIndex(index = 0, ipv6 = false) {
  const pool = ipv6 ? CLEAN_EDGE_IPV6 : CLEAN_EDGE_IPV4;
  const i = Math.abs(parseInt(index, 10) || 0) % pool.length;
  return pool[i];
}
