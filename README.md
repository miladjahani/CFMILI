# miliconfig v3.1 — مرکز کنترل زیرساخت پروکسی روی Cloudflare Workers & Pages + D1

![Version](https://img.shields.io/badge/version-v3.1--D1-b5ff4d?style=flat-square&labelColor=0b140b)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers%20%26%20Pages-84cc16?style=flat-square&labelColor=0b140b)
![Cloudflare D1](https://img.shields.io/badge/Database-Cloudflare%20D1%20Auto--Migrate-a3e635?style=flat-square&labelColor=0b140b)
![Obfuscation](https://img.shields.io/badge/Security-Obfuscation%20%2B%20Dead%20Code-b5ff4d?style=flat-square&labelColor=0b140b)
![Deploy](https://img.shields.io/badge/Deploy-Zero%20Secret%20(Pages%20%2B%20Workers)-a3e635?style=flat-square&labelColor=0b140b)

**زبان:** [فارسی](فارسی.md) | [English](#english-overview)

---

## ویژگی‌های کلیدی نسخه `miliconfig v3.1`

1. **معماری ماژولار چندفایلی (Multi-File Modular Architecture)**:
   - دیگر یک اسکریپت تک‌فایلی شلوغ نیست؛ کدها در دایرکتری `src/` به تفکیک `config/`، `db/`، `core/`، `subscription/`، `api/` و `ui/` سازماندهی شده‌اند.
   - همزمان فایل‌های باندل و مبهم‌سازی‌شده (`_worker.js`, `dist/_worker.js`, `public/_worker.js`, `少年你相信光吗`) به صورت خودکار تولید می‌شوند تا در هر روش استقراری بلافاصله کار کنند.

2. **دیتابیس Cloudflare D1 بدون هیچ خطایی در استقرار دستی یا اتوماتیک**:
   - **تشخیص خودکار بایندینگ D1**: فرقی نمی‌کند نام متغیر D1 را در کلودفلر `DB`، `D1`، `miliconfig` یا هر نام دیگری بگذارید؛ سیستم به صورت خودکار آن را شناسایی می‌کند.
   - **ساخت خودکار جداول (Auto-Migration)**: نیازی به زدن دستورات SQL یا `wrangler d1 execute` نیست! در اولین درخواست، جداول `users`، `system_config`، `preferred_nodes`، `audit_logs` و `traffic_hourly` به صورت خودکار ساخته می‌شوند.
   - **محافظ ضد خطای D1 و ضد خطای `Error 1101`**: حتی اگر قبل از اتصال D1 پروژه را به صورت دستی یا از گیت‌هاب مستقر کنید، برنامه کرش نمی‌کند و بدون خطای ۱۱۰۱ با حافظه پشتیبان کار می‌کند تا هر زمان که خواستید D1 را متصل نمایید.

3. **مدیریت پیشرفته کاربران + کپی تمام تنظیمات پیش‌فرض کد پایه**:
   - با کلیک روی دکمه **«+ کاربر جدید (پیشرفته)»** یا **«ساخت سریع کاربر»**، علاوه بر **نام کاربر (`username`)** و **تعداد نودها در ساب (`subNodeCount`)**، **تمام ۳۱ تنظیم پیش‌فرض کد پایه (`wk`, `ev`, `et`, `ex`, `ech`, `tp`, `customDNS`, `customECHDomain`, `alpn`, `d`, `p`, `yx`, `yxURL`, `s`, `homepage`, `scu`, `ena`, `epd`, `epi`, `egi`, `ae`, `rm`, `qj`, `dkby`, `yxby`, `ipv4`, `ipv6`, `ispMobile`, `ispUnicom`, `ispTelecom`, `jk`)** برای کاربر وجود دارد و قابل شخصی‌سازی است.

4. **برندینگ `miliconfig` و نام‌گذاری کانفیگ‌ها به فرمت `number+miliconfig`**:
   - تمامی کانفیگ‌های خروجی در همه کلاینت‌ها (v2rayNG, Streisand, Shadowrocket, Amnezia, Exclusive, Clash Meta/Mihomo, Sing-box/Hiddify, Surge, Loon, Quantumult X) دقیقاً با فرمت **`1+miliconfig`**، **`2+miliconfig`**، **`3+miliconfig`** تا **`N+miliconfig`** (بر اساس تعداد نودهای تعیین‌شده در تنظیمات کاربر) نام‌گذاری می‌شوند.

5. **صفحه وضعیت اختصاصی برای ارسال به هر کاربر (`/status/{user_id}`)**:
   - هر کاربر دارای یک لینک اختصاصی **پنجره وضعیت** است که می‌توانید مستقیماً برای مشتری ارسال کنید (شامل حلقه مصرف، وضعیت حجم و انقضا، جستجو در نودها، انتخاب محدوده نودها، سابلینک لوکیشن‌محور ۱۱ کشور، سابلینک اختصاصی ۱۶ کلاینت در ۵ خانواده، لینک دانلود کلاینت‌ها و کپی تکی کانفیگ‌ها).

6. **رابط کاربری بازطراحی‌شده با پس‌زمینه زنده (UI/UX + Animated Background FX)**:
   - هر سه صفحه (درگاه ورود، پنل مدیریت، صفحه وضعیت کاربر) یک لایه جلوه‌های مشترک دارند: پس‌زمینه Aurora متحرک، **بوم ذرات (Canvas) با واکنش به اشاره‌گر**، گرید متحرک، اسکن‌لاین، وینیت و نور دنبال‌کننده نشانگر.
   - انیمیشن‌های روان: ورود پله‌ای کارت‌ها (IntersectionObserver)، شمارنده‌های عددی (Count-up)، حلقه مصرف با `conic-gradient` متحرک، ریپل روی دکمه‌ها، درخشش کارت‌ها، نوار پیشرفت اسکرول، آکاردئون با `max-height` متحرک و توست‌های نرم.
   - احترام کامل به `prefers-reduced-motion` (کاهش حرکت) و سبک‌سازی خودکار جلوه‌ها روی موبایل.

7. **مبهم‌سازی پیشرفته + تزریق کد مرده (Advanced Obfuscation + Dead Code Injection)**:
   - جدول رشته‌های رمزنگاری‌شده XOR/Base64، تغییر نام شناسه‌ها، تبدیل اعداد به عبارت و فشرده‌سازی در چند پاس.
   - **تزریق کد مرده با محمول مبهم (Opaque Predicate)**: بلوک‌هایی که هرگز اجرا نمی‌شوند ولی تحلیل ایستا و مهندسی معکوس را سخت می‌کنند؛ تعداد بلوک‌ها و نام موتور در `dist/build-info.json` گزارش می‌شود.

8. **استقرار روی هر دو بستر کلودفلر بدون هیچ سکرت (Zero-Secret Deploy)**:
   - یک خروجی، دو بستر: `dist/` حالت **Pages Advanced Mode** (فایل `_worker.js`) و همان باندل یک **Worker** استاندارد (`export default { fetch }`) است.
   - هیچ توکن/سکرتی داخل کد یا کانفیگ لازم نیست؛ با اتصال Git پنل کلودفلر، آپلود دستی یا `wrangler login` مستقر می‌شود (جزئیات پایین‌تر).

---

## کانال پشتیبانی

- **کانال رسمی پشتیبانی: [@miliconfig](https://t.me/miliconfig)**
- همین لینک در پنل مدیریت، صفحه وضعیت کاربر و درگاه ورود نمایش داده می‌شود.
- برای تغییر آن، فقط این دو ثابت را در `src/config/defaults.js` ویرایش کنید: `SUPPORT_CHANNEL_HANDLE` و `SUPPORT_CHANNEL_URL`.

---

## راهنمای استقرار بدون سکرت (Cloudflare Pages + Cloudflare Workers)

> خروجی این پروژه به گونه‌ای ساخته می‌شود که **هیچ سکرت، توکن یا متغیر محیطی اجباری نداشته باشد**. D1 اختیاری است و در صورت نبود آن، برنامه با حافظه پشتیبان و بدون خطای ۱۱۰۱ کار می‌کند.

### روش اول (پیشنهادی): اتصال Git از پنل کلودفلر — کاملاً بدون سکرت

**الف) روی Cloudflare Pages**
1. وارد پنل Cloudflare شوید: **Workers & Pages → Create → Pages → Connect to Git**.
2. مخزن گیت‌هاب خود را انتخاب کنید و این تنظیمات را بگذارید:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. بیلد کلودفلر خودش `npm install` می‌کند و پوشه `dist` (که شامل `_worker.js` است) در حالت **Advanced Mode** اجرا می‌شود؛ بدون هیچ سکرتی.
4. برای دیتابیس (اختیاری): **Settings → Functions → D1 database bindings** و بایندینگ را `DB` نام‌گذاری کنید (جداول خودکار ساخته می‌شوند).

**ب) روی Cloudflare Workers**
1. **Workers & Pages → Create → Workers → Import a repository** و انتخاب همین مخزن.
2. تنظیمات پیشنهادی: **Build command**: `npm run build` — **Deploy command**: `npx wrangler deploy`.
3. فایل `wrangler.toml` از قبل آماده است (`main = "src/index.js"`)؛ کلودفلر در محیط بیلد خودش احراز هویت را انجام می‌دهد و نیازی به توکن در مخزن نیست.
4. اگر می‌خواهید نسخه **مبهم‌سازی‌شده** روی Worker برود، از دستور `wrangler deploy _worker.js --no-bundle` استفاده کنید (اسکریپت `npm run deploy:worker:bundle` همین کار را می‌کند).

### روش دوم: آپلود دستی — بدون سکرت

- **Pages**: در پنل، Pages Project → **Create deployment → Direct Upload** و پوشه‌ای که شامل `_worker.js` است را آپلود کنید (`dist/`). یا از فایل `Pages.zip` که ورک‌فلوی گیت‌هاب می‌سازد استفاده کنید.
- **Worker**: در پنل Worker → **Edit code (Quick Edit)** و محتوای `_worker.js` را جای‌گذاری و Deploy کنید.

### روش سوم: CLI روی سیستم خودتان — بدون سکرت مخزن

```bash
npm install
npm run build          # بیلد + مبهم‌سازی + تزریق کد مرده
npm test               # اعتبارسنجی خروجی

npx wrangler login     # ورود تعاملی (OAuth)؛ نیازی به API Token نیست
npm run deploy:worker          # انتشار Worker از سورس (wrangler.toml)
npm run deploy:worker:bundle   # انتشار Worker از باندل مبهم‌سازی‌شده
npm run deploy:pages           # انتشار روی Cloudflare Pages (پوشه dist)
```

### مایگریشن مرحله‌به‌مرحله D1 (پیشنهادی قبل از دپلوی)

ابتدا یک دیتابیس D1 خالی بسازید، سپس اسکریپت مایگریشن را اجرا کنید؛ این اسکریپت
فایل‌های `migrations/*.sql` را می‌خواند و هر دستور را **یکی‌یکی** اجرا و تأیید می‌کند
و در اولین دستور خطادار متوقف می‌شود (به‌جای دیدن خطای مبهم `1101` داخل Worker):

```bash
npx wrangler d1 create miliconfig-db-v2        # دیتابیس خالی
CLOUDFLARE_API_TOKEN=... npm run db:migrate -- --database miliconfig-db-v2
```

نام و UUID دیتابیس را در `wrangler.toml` (بخش `[[d1_databases]]`) و در بایندینگ
`DB` پروژه Pages قرار دهید. کاربر اولیه سیستم در اولین درخواست به‌صورت خودکار ساخته می‌شود.

---

## دپلوی خودکار از گیت‌هاب (GitHub Actions) — اختیاری و بدون شکست قرمز

فایل `.github/workflows/deploy-cloudflare.yml` دو جاب دارد:

| جاب | شرط اجرا | کارها |
|---|---|---|
| `build` | همیشه (هر پوش روی `main`) | نصب ابزارها، `npm run build`، `npm test`، ساخت `Pages.zip` و `_worker.js` و آپلود آن‌ها به‌عنوان Artifact |
| `deploy` | فقط اگر Secretها تنظیم شده باشند | تشخیص خودکار پروژه Pages، `wrangler pages deploy dist --branch main`، بررسی لینک پشتیبانی روی نسخه منتشرشده و (اختیاری) دپلوی Worker |

نکته مهم: اگر Secretها تنظیم نشده باشند، جاب `deploy` با یک پیام راهنما **رد (skip)** می‌شود و ورک‌فلو سبز می‌ماند؛ یعنی کنار اتصال Git پنل کلودفلر، هیچ سکرتی در مخزن لازم نیست.

### فعال‌سازی دپلوی از گیت‌هاب (اختیاری)

در مخزن به **Settings → Secrets and variables → Actions** بروید:

| نوع | نام | مقدار |
|---|---|---|
| Secret | `CLOUDFLARE_API_TOKEN` | توکن API کلودفلر با دسترسی **Cloudflare Pages/Workers: Edit** (ساخت از `dash.cloudflare.com/profile/api-tokens`) |
| Secret | `CLOUDFLARE_ACCOUNT_ID` | شناسه حساب کلودفلر (کنار نام حساب در داشبورد) |
| Variable (اختیاری) | `CF_PAGES_PROJECT` | اگر چند پروژه Pages دارید و می‌خواهید هدف دستی تعیین شود (پیش‌فرض: تشخیص خودکار از حساب) |

برای اجرای دستی یا تعیین نام پروژه، از **Actions → Deploy to Cloudflare → Run workflow** استفاده کنید (ورودی `project_name` و در صورت نیاز `deploy_worker=yes` برای دپلوی هم‌زمان Worker).

---

## بیلد، تست و گزارش (`dist/build-info.json`)

```bash
npm run verify   # build + test در یک دستور
```

بعد از هر بیلد، فایل `dist/build-info.json` ساخته می‌شود و شامل این موارد است: بسترهای هدف (`cloudflare-pages-advanced-mode`, `cloudflare-worker`)، `requiresSecrets: false`، پوشه خروجی Pages، نام موتور مبهم‌سازی، تعداد بلوک‌های **کد مرده تزریق‌شده**، شمارش نشانگر کد مرده در باندل خوانا و `sha256` تمام خروجی‌های استقرار.

مجموعه تست (`npm test`) شامل ۱۱ بررسی واقعی است: استقرار بدون D1، ساخت خودکار جداول، ساخت کاربر با تمام تنظیمات، نام‌گذاری `number+miliconfig`، مبدل‌های Clash/Sing-box، صفحه وضعیت کاربر، حضور پس‌زمینه زنده و انیمیشن‌ها در هر سه صفحه، **اعتبار نحوی تمام اسکریپت‌های درون‌صفحه‌ای**، **امن‌سازی نام کاربری (ضد XSS)**، تزریق کد مرده و یکسان‌بودن خروجی Pages/Worker بدون سکرت.

---

## ساختار ماژولار پروژه

```text
miliconfig/
├── src/
│   ├── index.js                  # روتر اصلی Cloudflare Worker & Pages + محافظ ضد Error 1101
│   ├── config/
│   │   ├── defaults.js           # تمام ۳۱ تنظیم پیش‌فرض کد اصلی CFnew v3.1 + ثابت‌های miliconfig
│   │   └── presets.js            # ۵ پریست ساخت سریع کاربر (ایران پرسرعت، مصرف سنگین، بین‌المللی و...)
│   ├── db/
│   │   └── d1.js                 # لایه دیتابیس Cloudflare D1 با Auto-Migration و تشخیص هوشمند بایندینگ
│   ├── core/
│   │   ├── runtime.js            # هسته پروکسی VLESS + Trojan + xhttp + SOCKS5/HTTP + احراز هویت چندکاربره D1
│   │   └── utils.js              # نام‌گذار نودها (number+miliconfig)، رمزنگاری MD5/SHA224 و امن‌سازی خروجی (escapeHtml)
│   ├── subscription/
│   │   ├── generator.js          # تولیدکننده ساب‌لینک چندکاربره با اعمال subNodeCount
│   │   └── converters.js         # مبدل‌های داخلی Clash YAML، Sing-box JSON، Surge، Loon، QuanX و زنجیره خانگی
│   ├── api/
│   │   └── handlers.js           # اندپوینت‌های REST API مدیریت کاربران، تنظیمات و نودها
│   └── ui/
│       ├── icons.js              # لوگوهای نئونی سپر و ابر miliconfig
│       ├── baseCss.js            # لایه پایه استایل مشترک (موبایل + ویندوز)
│       ├── fx.js                 # پس‌زمینه زنده + انیمیشن‌های روان مشترک هر سه صفحه
│       ├── loginHtml.js          # درگاه ورود/لندینگ
│       ├── adminHtml.js          # پنل مدیریت کامل
│       └── statusHtml.js         # صفحه وضعیت اختصاصی کاربر برای ارسال به مشتری
├── scripts/
│   ├── build.js                  # باندلر ماژولار + سازگاری خودکار Workers/Pages + مانیفست بیلد
│   ├── obfuscate.js              # مبهم‌ساز ایمن کلودفلر + تزریق کد مرده (بدون خطای 1101)
│   └── test-worker.js            # تست خودکار کامل (۱۱ بررسی)
├── migrations/
│   └── 0001_init_miliconfig.sql  # فایل مایگریشن استاندارد D1
├── schema.sql                    # اسکیمای SQL دیتابیس D1
├── wrangler.toml                 # تنظیمات استقرار مستقیم Cloudflare (Worker)
└── package.json
```

---

## English Overview

**miliconfig v3.1** is a modular, multi-user Cloudflare Workers & Pages proxy control center powered by **Cloudflare D1** and built on top of the complete **CFnew v3.1** engine (VLESS, Trojan, xhttp, ECH, SOCKS5/HTTP outbound proxy, Residential Chain, and built-in Clash/Sing-box/Surge/QuanX/Loon converters).
- **Brand & Node Naming**: All client subscription nodes are named `1+miliconfig`, `2+miliconfig`, ..., `N+miliconfig`.
- **Per-User Node Count & Full Defaults**: Every user created via D1 inherits all 31 default settings of the base engine plus custom `username` and `subNodeCount`.
- **Zero-Error D1 & 1101 Protection**: Automatic D1 binding detection, runtime table auto-migration, and Worker-safe AST obfuscation.
- **Animated UI/UX**: All three pages share a live particle-canvas background (aurora, grid, scanline, pointer spotlight) plus smooth reveal, count-up, ripple, animated accordion and toast animations, honoring `prefers-reduced-motion`.
- **Dead Code Injection**: The obfuscation pipeline injects deterministic opaque-predicate dead code blocks in addition to string-array encoding, renaming and minification; counts are reported in `dist/build-info.json`.
- **Zero-Secret Dual Deploy**: One bundle serves both cloudflare Pages (Advanced Mode `_worker.js`) and Workers (`export default { fetch }`); deployment needs no secrets, tokens or required environment variables.
