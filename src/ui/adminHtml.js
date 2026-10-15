// ============================================================================
// miliconfig v3.1 - مرکز کنترل مدیریت (Admin Control Center)
// طراحی ۱۰۰٪ مطابق تصاویر 1000050097.png، 1000050085.jpg و 1000050137.jpg
// ============================================================================

import { BRAND_NAME, BRAND_UPPER, CONFIG_DEFAULTS, VERSION } from '../config/defaults.js';
import { USER_PRESETS } from '../config/presets.js';
import { CLOUD_LOGO_SVG, FAVICON_DATA_URI, SHIELD_LOGO_SVG } from './icons.js';

export function renderAdminDashboardHtml(initialData = {}) {
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      min-width: 260px;
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
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
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
      overflow-y: auto;
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
        <a class="sb-btn" href="https://t.me/+ft-zI76oovgwNmRh" target="_blank" rel="noopener">🔗 کانال پشتیبانی</a>
        <button type="button" class="sb-btn sb-btn-logout" onclick="window.location.href='/'">خروج از حساب</button>
      </div>
    </aside>

    <!-- ناحیه اصلی -->
    <main class="main-area">
      <!-- نوار بالا -->
      <header class="topbar">
        <div class="topbar-right">
          <h1 class="page-title" id="topPageTitle">داشبورد</h1>
        </div>
        <div class="topbar-left">
          <span style="font-size:0.74rem;color:var(--muted);letter-spacing:0.12em;">${BRAND_UPPER} CONTROL CENTER</span>
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
              <input type="text" id="quickUsername" class="mili-input" placeholder="نام کاربری (مثلاً ali یا خالی = خودکار)" style="flex:1;min-width:190px;">
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
            <input type="text" id="userSearchInput" class="mili-input" placeholder="🔍 جستجوی نام کاربر یا UUID..." oninput="renderUsersGrid()" style="min-width:240px;">
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
    <button type="button" class="mob-nav-btn active" data-mob="dashboard" onclick="switchView('dashboard')"><span>⊞</span><span>نمای کلی</span></button>
    <button type="button" class="mob-nav-btn" data-mob="users" onclick="switchView('users')"><span>👥</span><span>کاربران و نودها</span></button>
    <button type="button" class="mob-nav-btn" data-mob="network" onclick="switchView('network')"><span>☁️</span><span>شبکه و لبه</span></button>
    <button type="button" class="mob-nav-btn" data-mob="panel" onclick="switchView('panel')"><span>✎</span><span>پنل و ظاهر</span></button>
    <button type="button" class="mob-nav-btn" data-mob="system" onclick="switchView('system')"><span>⚙️</span><span>سیستم</span></button>
  </nav>

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
            <input type="text" id="um_uuid" class="mili-input" style="flex:1;direction:ltr;">
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

      <div style="margin-top:20px;display:flex;justify-content:flex-end;gap:10px;">
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
