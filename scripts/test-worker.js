// ============================================================================
// miliconfig v3.1 - تست خودکار یکپارچگی، دیتابیس D1، نام‌گذاری number+miliconfig و باندل مبهم‌شده
// ============================================================================

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// ساخت یک شبیه‌ساز دقیق Cloudflare D1 در حافظه جهت تست کامل SQL و بایندینگ‌ها
function createMockD1Database() {
  const tables = {
    system_config: new Map(),
    users: new Map(),
    preferred_nodes: [],
    audit_logs: [],
    traffic_hourly: new Map()
  };

  return {
    prepare(sql) {
      const cleanSql = sql.replace(/\s+/g, ' ').trim();
      let boundParams = [];
      const stmt = {
        bind(...params) {
          boundParams = params;
          for (const p of params) {
            if (p === undefined) {
              throw new Error("D1_TYPE_ERROR: Type 'undefined' not supported for value 'undefined'");
            }
          }
          return stmt;
        },
        async run() {
          if (cleanSql.startsWith('CREATE TABLE IF NOT EXISTS')) {
            return { success: true };
          }
          if (cleanSql.startsWith('INSERT OR IGNORE INTO users') || cleanSql.startsWith('INSERT INTO users')) {
            const [
              id, username, uuid, sub_node_count, status, enabled,
              data_limit_gb, used_bytes, lifetime_bytes, request_count,
              expire_days, expire_at, start_on_first_use, first_connected_at,
              ip_limit, node_scope, preset, note, config_json, created_at, updated_at
            ] = boundParams;
            if (cleanSql.includes('OR IGNORE') && tables.users.has(id)) {
              return { success: true };
            }
            tables.users.set(id, {
              id, username, uuid, sub_node_count, status, enabled,
              data_limit_gb, used_bytes, lifetime_bytes, request_count,
              expire_days, expire_at, start_on_first_use, first_connected_at,
              ip_limit, node_scope, preset, note, config_json, created_at, updated_at
            });
            return { success: true };
          }
          if (cleanSql.startsWith('UPDATE users SET username =')) {
            const [
              username, uuid, sub_node_count, status, enabled,
              data_limit_gb, expire_days, expire_at, start_on_first_use,
              ip_limit, node_scope, preset, note, config_json, updated_at, id
            ] = boundParams;
            const existing = tables.users.get(id);
            if (existing) {
              Object.assign(existing, {
                username, uuid, sub_node_count, status, enabled,
                data_limit_gb, expire_days, expire_at, start_on_first_use,
                ip_limit, node_scope, preset, note, config_json, updated_at
              });
            }
            return { success: true };
          }
          if (cleanSql.startsWith('DELETE FROM users WHERE id =')) {
            tables.users.delete(boundParams[0]);
            return { success: true };
          }
          if (cleanSql.startsWith('INSERT INTO system_config')) {
            const [key, value, updated_at] = boundParams;
            tables.system_config.set(key, { key, value, updated_at });
            return { success: true };
          }
          if (cleanSql.startsWith('DELETE FROM system_config WHERE key =')) {
            tables.system_config.delete(boundParams[0]);
            return { success: true };
          }
          if (cleanSql.startsWith('DELETE FROM system_config')) {
            tables.system_config.clear();
            return { success: true };
          }
          if (cleanSql.startsWith('INSERT INTO audit_logs')) {
            const [action, detail, ip, created_at] = boundParams;
            tables.audit_logs.unshift({ id: tables.audit_logs.length + 1, action, detail, ip, created_at });
            return { success: true };
          }
          return { success: true };
        },
        async first() {
          if (cleanSql.includes('SELECT COUNT(*) as cnt FROM users')) {
            return { cnt: tables.users.size };
          }
          return null;
        },
        async all() {
          if (cleanSql.startsWith('SELECT * FROM users')) {
            return { results: Array.from(tables.users.values()) };
          }
          if (cleanSql.startsWith('SELECT key, value FROM system_config')) {
            return { results: Array.from(tables.system_config.values()) };
          }
          if (cleanSql.startsWith('SELECT * FROM audit_logs')) {
            return { results: tables.audit_logs.slice(0, boundParams[0] || 15) };
          }
          return { results: [] };
        }
      };
      return stmt;
    }
  };
}

async function runTests() {
  console.log('🧪 [miliconfig] شروع تست خودکار باندل مبهم‌شده و ماژول‌ها...');

  const obfPath = path.join(ROOT_DIR, 'dist', '_worker.js');
  assert.ok(fs.existsSync(obfPath), 'فایل dist/_worker.js باید وجود داشته باشد');

  // جایگزینی موقت import { connect as cfConnect } from 'cloudflare:sockets' برای اجرای محلی در Node.js
  const rawObf = fs.readFileSync(obfPath, 'utf8');
  const testableCode = rawObf.replace(
    /import\s+\{\s*connect\s+as\s+cfConnect\s*\}\s+from\s+['"]cloudflare:sockets['"];?/,
    'const cfConnect = () => ({ readable: new ReadableStream(), writable: new WritableStream(), closed: Promise.resolve(), close(){} });'
  );
  const tmpTestFile = path.join(ROOT_DIR, 'dist', '_worker.test-runner.mjs');
  fs.writeFileSync(tmpTestFile, testableCode, 'utf8');

  try {
    const mod = await import(tmpTestFile);
    const worker = mod.default;
    assert.ok(worker && typeof worker.fetch === 'function', 'باندل مبهم‌شده باید دارای متد fetch معتبر باشد');

    const adminUuid = '351c9981-04b6-4103-aa4b-864aa9c91469';

    // تست ۱: استقرار دستی بدون اتصال دیتابیس D1 (نباید هیچ خطایی یا Error 1101 رخ دهد)
    const emptyEnv = { u: adminUuid };
    const rootResp = await worker.fetch(new Request('https://mili.example.com/'), emptyEnv, {});
    assert.strictEqual(rootResp.status, 200, 'صفحه اصلی بدون D1 باید با کد 200 باز شود');
    const rootHtml = await rootResp.text();
    assert.ok(rootHtml.includes('MILICONFIG'), 'برند MILICONFIG باید در صفحه ورود وجود داشته باشد');
    console.log('  ✓ تست ۱ (استقرار دستی بدون D1 و بدون خطای 1101): موفق');

    // تست ۲: اتصال دیتابیس D1 و ساخت خودکار جداول + پنل مدیریت
    const mockD1 = createMockD1Database();
    const d1Env = { u: adminUuid, DB: mockD1 };

    const adminResp = await worker.fetch(new Request(`https://mili.example.com/${adminUuid}`), d1Env, {});
    assert.strictEqual(adminResp.status, 200, 'پنل مدیریت با D1 باید با کد 200 باز شود');
    const adminHtml = await adminResp.text();
    assert.ok(adminHtml.includes('مرکز کنترل زیرساخت پروکسی miliconfig'), 'عنوان داشبورد miliconfig باید وجود داشته باشد');
    assert.ok(adminHtml.includes('um_subNodeCount'), 'فیلد تعداد نودها در ساب باید در مودال کاربر جدید وجود داشته باشد');
    assert.ok(adminHtml.includes('https://t.me/miliconfig'), 'دکمه کانال پشتیبانی باید https://t.me/miliconfig را باز کند');
    assert.ok(!/t\.me\/\+/.test(adminHtml), 'هیچ لینک دعوت منقضی (t.me/+...) نباید در پنل باشد');
    console.log('  ✓ تست ۲ (پنل مدیریت و ساخت خودکار جداول D1): موفق');

    // تست ۳: ایجاد کاربر جدید از طریق API همراه با نام کاربر، تعداد نود در ساب (مثلاً 8 نود) و تمام تنظیمات پیش‌فرض کد
    const createResp = await worker.fetch(
      new Request(`https://mili.example.com/${adminUuid}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'reza-vip',
          subNodeCount: 8,
          preset: 'iran-fast',
          ev: 'yes',
          et: 'yes'
        })
      }),
      d1Env,
      {}
    );
    assert.strictEqual(createResp.status, 200, 'ایجاد کاربر در D1 باید 200 برگرداند');
    const createdData = await createResp.json();
    assert.strictEqual(createdData.success, true);
    assert.strictEqual(createdData.user.username, 'reza-vip');
    assert.strictEqual(createdData.user.subNodeCount, 8);
    assert.strictEqual(createdData.user.config.customDNS, 'https://223.5.5.5/dns-query');
    assert.strictEqual(createdData.user.config.customECHDomain, 'cloudflare-ech.com');
    console.log('  ✓ تست ۳ (ایجاد کاربر جدید در D1 با تمام تنظیمات پیش‌فرض کد + تعداد نود در ساب): موفق');

    // تست ۴: بررسی ساب‌لینک کاربر و نام‌گذاری دقیق کانفیگ‌ها به فرمت number+miliconfig و تعداد دقیق نودها (8 نود)
    const newUserUuid = createdData.user.uuid;
    const subRawResp = await worker.fetch(
      new Request(`https://mili.example.com/${newUserUuid}/sub?target=raw`),
      d1Env,
      {}
    );
    assert.strictEqual(subRawResp.status, 200);
    const rawLinksText = await subRawResp.text();
    const rawLines = rawLinksText.trim().split('\n').filter(Boolean);
    assert.strictEqual(rawLines.length, 8, `تعداد نودهای ساب‌لینک باید دقیقاً برابر با subNodeCount (8) باشد ولی ${rawLines.length} بود`);

    rawLines.forEach((line, idx) => {
      const expectedTag = `${idx + 1}+miliconfig`;
      const hashPart = decodeURIComponent(line.split('#')[1] || '');
      assert.strictEqual(
        hashPart,
        expectedTag,
        `نام نود شماره ${idx + 1} باید ${expectedTag} باشد ولی ${hashPart} بود`
      );
    });
    console.log('  ✓ تست ۴ (نام‌گذاری کانفیگ‌ها به فرمت دقیق 1+miliconfig تا 8+miliconfig و رعایت تعداد نود در ساب): موفق');

    // تست ۵: بررسی فرمت Clash و Sing-box برای کاربر
    const clashResp = await worker.fetch(
      new Request(`https://mili.example.com/${newUserUuid}/sub?target=clash`),
      d1Env,
      {}
    );
    const clashYaml = await clashResp.text();
    assert.ok(clashYaml.includes('"1+miliconfig"') && clashYaml.includes('"8+miliconfig"'), 'کانفیگ Clash باید شامل نودهای 1+miliconfig تا 8+miliconfig باشد');

    const sbResp = await worker.fetch(
      new Request(`https://mili.example.com/${newUserUuid}/sub?target=singbox`),
      d1Env,
      {}
    );
    const sbJson = JSON.parse(await sbResp.text());
    assert.ok(sbJson.outbounds.some(o => o.tag === '1+miliconfig'), 'کانفیگ Sing-box باید شامل تگ 1+miliconfig باشد');
    console.log('  ✓ تست ۵ (تبدیل اشتراک داخلی Clash YAML و Sing-box JSON با نام number+miliconfig): موفق');

    // تست ۶: بررسی صفحه وضعیت اختصاصی کاربر (/status/{id})
    const statusResp = await worker.fetch(
      new Request(`https://mili.example.com/status/${createdData.user.id}`),
      d1Env,
      {}
    );
    assert.strictEqual(statusResp.status, 200);
    const statusHtml = await statusResp.text();
    assert.ok(statusHtml.includes('reza-vip'), 'صفحه وضعیت باید نام کاربر را نمایش دهد');
    assert.ok(statusHtml.includes('v2rayNG') && statusHtml.includes('Exclusive') && statusHtml.includes('Amnezia VPN'), 'صفحه وضعیت باید شامل تمام کلاینت‌های تصویر ارسالی باشد');
    console.log('  ✓ تست ۶ (صفحه وضعیت اختصاصی کاربر برای ارسال به مشتری): موفق');

    console.log('\n🎉 تمام تست‌های عملکردی، دیتابیس D1، رابط کاربری و مبهم‌سازی با موفقیت ۱۰۰٪ پاس شدند!');
  } finally {
    if (fs.existsSync(tmpTestFile)) fs.unlinkSync(tmpTestFile);
  }
}

runTests().catch(err => {
  console.error('❌ تست ناموفق بود:', err);
  process.exit(1);
});
