// ============================================================================
// miliconfig v3.1 - اجرای مرحله‌به‌مرحله مایگریشن‌های D1 روی Cloudflare
// ----------------------------------------------------------------------------
// این اسکریپت فایل‌های migrations/*.sql را به ترتیب می‌خواند و هر دستور SQL را
// «یکی‌یکی» روی دیتابیس خالی D1 اجرا و تأیید می‌کند؛ بنابراین اگر دستوری مشکل
// داشته باشد، دقیقاً همان مرحله با خطای واضح متوقف می‌شود (نه داخل Worker با 1101).
//
// استفاده:
//   CLOUDFLARE_API_TOKEN=... node scripts/d1-migrate.js --database miliconfig-db-v2
//   npm run db:migrate -- --database miliconfig-db-v2
//
// متغیرهای محیطی: CLOUDFLARE_API_TOKEN (الزامی)، CLOUDFLARE_ACCOUNT_ID (یا --account)
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');

const API_BASE = 'https://api.cloudflare.com/client/v4';

function parseArgs(argv) {
  const args = { database: process.env.D1_DATABASE || '', account: process.env.CLOUDFLARE_ACCOUNT_ID || '' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--database' || a === '-d') args.database = argv[++i] || '';
    else if (a === '--account' || a === '-a') args.account = argv[++i] || '';
    else if (a.startsWith('--database=')) args.database = a.slice('--database='.length);
    else if (a.startsWith('--account=')) args.account = a.slice('--account='.length);
  }
  return args;
}

const token = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN || '';
const args = parseArgs(process.argv.slice(2));

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if (!token) fail('CLOUDFLARE_API_TOKEN تنظیم نشده است.');
if (!args.account) fail('شناسه حساب کلودفلر مشخص نیست (--account یا CLOUDFLARE_ACCOUNT_ID).');
if (!args.database) fail('نام یا UUID دیتابیس مشخص نیست (--database یا D1_DATABASE).');

async function cf(pathname, init = {}) {
  const res = await fetch(`${API_BASE}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers || {})
    }
  });
  let json;
  try {
    json = await res.json();
  } catch {
    throw new Error(`${pathname} → پاسخ نامعتبر (HTTP ${res.status})`);
  }
  if (!json.success) {
    const detail = (json.errors || []).map(e => `${e.code}: ${e.message}`).join(' | ') || `HTTP ${res.status}`;
    throw new Error(`${pathname} → ${detail}`);
  }
  return json.result;
}

async function resolveDatabase(nameOrId) {
  const list = await cf(`/accounts/${args.account}/d1/database?per_page=100`);
  const db = (list || []).find(d => d.uuid === nameOrId || d.name === nameOrId);
  if (!db) throw new Error(`دیتابیس «${nameOrId}» در این حساب پیدا نشد.`);
  return db;
}

async function query(dbId, sql) {
  const result = await cf(`/accounts/${args.account}/d1/database/${dbId}/query`, {
    method: 'POST',
    body: JSON.stringify({ sql })
  });
  const first = Array.isArray(result) ? result[0] : result;
  if (first && first.success === false) {
    const detail = (first.errors || []).map(e => e.message).join(' | ');
    throw new Error(detail || 'اجرای دستور ناموفق بود');
  }
  return first;
}

// تقسیم فایل SQL به دستورهای مستقل؛ کامنت‌های -- حذف می‌شوند و نقطه‌ویرگول
// داخل رشته‌ها نادیده گرفته می‌شود تا هیچ دستوری اشتباه بریده نشود.
export function splitSqlStatements(sqlText) {
  const withoutComments = sqlText
    .split('\n')
    .map(line => {
      const idx = line.indexOf('--');
      return idx >= 0 ? line.slice(0, idx) : line;
    })
    .join('\n');

  const statements = [];
  let current = '';
  let inString = false;
  let quote = '';

  for (const ch of withoutComments) {
    if (inString) {
      current += ch;
      if (ch === quote) inString = false;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      quote = ch;
      current += ch;
      continue;
    }
    if (ch === ';') {
      const trimmed = current.trim();
      if (trimmed) statements.push(trimmed);
      current = '';
      continue;
    }
    current += ch;
  }

  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
}

function describe(sql) {
  const create = sql.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([A-Za-z0-9_]+)/i);
  if (create) return `CREATE TABLE ${create[1]}`;
  const index = sql.match(/CREATE\s+(?:UNIQUE\s+)?INDEX\s+(?:IF\s+NOT\s+EXISTS\s+)?([A-Za-z0-9_]+)/i);
  if (index) return `CREATE INDEX ${index[1]}`;
  const insert = sql.match(/INSERT\s+(?:OR\s+\w+\s+)?INTO\s+([A-Za-z0-9_]+)/i);
  if (insert) return `INSERT INTO ${insert[1]}`;
  return sql.split('\n')[0].slice(0, 60);
}

async function main() {
  const db = await resolveDatabase(args.database);
  console.log(`🗄️  [miliconfig] دیتابیس هدف: ${db.name} (${db.uuid})`);

  const before = await query(db.uuid, "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_cf_%' ORDER BY name");
  const existingTables = (before?.results || []).map(r => r.name);
  if (existingTables.length === 0) console.log('✅ دیتابیس خالی است؛ مایگریشن از صفر شروع می‌شود.');
  else console.log(`ℹ️  جداول موجود: ${existingTables.join(', ')} (دستورها IF NOT EXISTS هستند و خطا نمی‌دهند)`);

  const migrationsDir = path.join(ROOT_DIR, 'migrations');
  if (!fs.existsSync(migrationsDir)) fail('پوشه migrations پیدا نشد.');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();
  if (files.length === 0) fail('هیچ فایل مایگریشنی در migrations/ وجود ندارد.');

  let executed = 0;
  for (const file of files) {
    const raw = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    const statements = splitSqlStatements(raw);
    console.log(`\n📄 ${file} — ${statements.length} دستور`);

    for (let i = 0; i < statements.length; i++) {
      const step = `مرحله ${String(i + 1).padStart(2, '0')}/${statements.length}`;
      const label = describe(statements[i]);
      try {
        await query(db.uuid, statements[i]);
        executed += 1;
        console.log(`  ✓ ${step} — ${label}`);
      } catch (err) {
        console.error(`  ✗ ${step} — ${label}`);
        console.error(`     خطا: ${err.message}`);
        console.error('     دستور متوقف شد تا بقیه مراحل با داده ناقص اجرا نشوند.');
        process.exit(1);
      }
    }
  }

  const after = await query(db.uuid, "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_cf_%' ORDER BY name");
  const tables = (after?.results || []).map(r => r.name);
  const expected = ['audit_logs', 'preferred_nodes', 'system_config', 'traffic_hourly', 'users'];
  const missing = expected.filter(t => !tables.includes(t));

  console.log(`\n📊 جداول نهایی (${tables.length}): ${tables.join(', ') || '—'}`);
  if (missing.length) fail(`این جداول ساخته نشدند: ${missing.join(', ')}`);

  const counts = {};
  for (const t of expected) {
    const row = await query(db.uuid, `SELECT COUNT(*) AS c FROM ${t}`);
    counts[t] = row?.results?.[0]?.c ?? 0;
  }
  console.log(`🧮 ردیف‌ها: ${expected.map(t => `${t}=${counts[t]}`).join(' · ')}`);
  console.log(`\n✅ مایگریشن کامل شد: ${executed} دستور روی ${files.length} فایل، بدون خطا.`);
  console.log('ℹ️  کاربر اولیه (seed) در اولین درخواست Worker/Pages به‌صورت خودکار ساخته می‌شود.');
}

main().catch(err => {
  console.error(`❌ مایگریشن D1 شکست خورد: ${err.message}`);
  process.exit(1);
});
