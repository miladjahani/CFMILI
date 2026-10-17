#!/usr/bin/env node
// ============================================================================
// miliconfig - تبدیل data/by-country/pool.json به ماژول باندل‌شونده Worker
// خروجی: src/config/proxyPoolData.js  (استخر سالم پروکسی‌ها تفکیک کشور)
// اجرا:  node scripts/build-proxy-pool.js   یا  npm run pool:embed
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'by-country', 'pool.json');
const OUT = path.join(ROOT, 'src', 'config', 'proxyPoolData.js');
const MAX_BYTES = 240 * 1024; // سقف امن زیر محدودیت ۲۵۶KB بخش متنی باندل

if (!fs.existsSync(SRC)) {
  console.warn('⚠️  data/by-country/pool.json یافت نشد — فایل خالی تولید می‌شود.');
  console.warn('    برای پر کردن استخر:  npm run proxy:pipeline');
  const stub = `// استخر پروکسی (خالی) — با «npm run proxy:pipeline» و «npm run pool:embed» پر می‌شود.\nexport const PROXY_POOL_JSON = '{"v":1,"generatedAt":"","countries":{}}';\n`;
  fs.writeFileSync(OUT, stub);
  process.exit(0);
}

let pool;
try {
  pool = JSON.parse(fs.readFileSync(SRC, 'utf8'));
} catch (e) {
  console.error('❌ pool.json نامعتبر است:', e.message);
  process.exit(1);
}

const countries = pool.countries || {};
// اگر حجم از سقف رد شد، از کشورهای پرموجود حذف رندهای بدترین پینگ تا جا بیفتد
const trimCountryLists = (maxPerCountry) => {
  const out = {};
  for (const [cc, list] of Object.entries(countries)) {
    if (list.length <= maxPerCountry) { out[cc] = list.slice(); continue; }
    const sorted = list.slice().sort((a, b) => (parseInt(a.split('|')[3],10)||99999) - (parseInt(b.split('|')[3],10)||99999));
    out[cc] = sorted.slice(0, maxPerCountry);
  }
  return out;
};

let finalCountries = countries;
let payload = JSON.stringify({ v: 1, generatedAt: pool.generatedAt || '', countries: finalCountries });
if (Buffer.byteLength(payload, 'utf8') > MAX_BYTES) {
  let per = 150;
  while (per > 10 && Buffer.byteLength(payload, 'utf8') > MAX_BYTES) {
    per -= 10;
    finalCountries = trimCountryLists(per);
    payload = JSON.stringify({ v: 1, generatedAt: pool.generatedAt || '', countries: finalCountries });
  }
  console.log(`✂️  حجم بیش از سقف بود → ${per} رکورد برتر هر کشور نگه داشته شد.`);
}

const totalRecs = Object.values(finalCountries).reduce((a, l) => a + l.length, 0);
const content =
  `// ============================================================\n` +
  `// استخر پروکسی‌های سالم تفکیک‌شده بر اساس کشور\n` +
  `// تاریخ سلامت‌سنجی: ${finalCountries && pool.generatedAt ? pool.generatedAt : ''}\n` +
  `// رکورد: ${totalRecs} | کشور: ${Object.keys(finalCountries).length} | حجم: ${(Buffer.byteLength(payload,'utf8')/1024).toFixed(1)} KB\n` +
  `// با اسکریپت scripts/build-proxy-pool.js تولید شده — دستی ویرایش نشود.\n` +
  `// ============================================================\n` +
  `export const PROXY_POOL_JSON = ${JSON.stringify(payload)};\n`;

fs.writeFileSync(OUT, content);
console.log(`✅ src/config/proxyPoolData.js ساخته شد — ${totalRecs} پروکسی سالم در ${Object.keys(finalCountries).length} کشور (${(Buffer.byteLength(content,'utf8')/1024).toFixed(1)} KB)`);
