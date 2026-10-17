// ============================================================================
// miliconfig v3.1 - پریست‌های ساخت سریع کاربر (مطابق رابط کاربری تصویر ارسالی)
// ============================================================================

import { CONFIG_DEFAULTS, normalizeEffectiveConfig } from './defaults.js';

export const USER_PRESETS = {
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

export function buildUserDefaultConfig(basePanelConfig = {}, presetId = 'iran-fast', customOverrides = {}) {
  const preset = USER_PRESETS[presetId] || USER_PRESETS['iran-fast'];
  return normalizeEffectiveConfig({
    ...CONFIG_DEFAULTS,
    ...(basePanelConfig || {}),
    ...(preset.configOverrides || {}),
    subNodeCount: customOverrides.subNodeCount ?? basePanelConfig?.subNodeCount ?? preset.subNodeCount ?? 50,
    ...(customOverrides || {})
  });
}
