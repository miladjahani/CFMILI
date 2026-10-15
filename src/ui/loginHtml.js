// ============================================================================
// miliconfig v3.1 - صفحه درگاه ورود و ترمینال امنیتی (تم سبز نئونی miliconfig)
// ============================================================================

import { BRAND_NAME, BRAND_UPPER, VERSION } from '../config/defaults.js';
import { CLOUD_LOGO_SVG, FAVICON_DATA_URI, SHIELD_LOGO_SVG } from './icons.js';

export function renderLoginGatewayHtml(options = {}) {
  const hasCustomPath = Boolean(options.customPath && String(options.customPath).trim());
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      <input type="text" id="uuidInput" class="token-input" placeholder="e.g. 351c9981-04b6-4103-aa4b-864aa9c91469" autofocus>
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
