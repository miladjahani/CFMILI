// ============================================================================
// miliconfig v3.1 - موتور مبهم‌سازی پیشرفته (Advanced Worker-Safe AST Obfuscator)
// طراحی‌شده اختصاصی برای Cloudflare Workers & Pages بدون بروز خطای Error 1101
// ----------------------------------------------------------------------------
// قابلیت‌ها:
//   ۱. مبهم‌سازی مبتنی بر AST Acorn + Terser + javascript-obfuscator
//   ۲. جدول رشته‌های رمزنگاری‌شده XOR/Base64 با کش O(1) (مسیر پشتیبان)
//   ۳. تزریق کد مرده (Dead Code Injection) با «محمول مبهم / Opaque Predicate»
//      که هرگز اجرا نمی‌شود ولی تحلیل ایستا و مهندسی معکوس را سخت می‌کند.
// ============================================================================

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// نشانگر کد مرده؛ در باندل خوانا (dist/worker.readable.js) قابل بررسی خودکار است.
export const DEAD_CODE_MARKER = '__milicfg_deadcode_v3_1__';

function loadTerser() {
  const candidates = [
    'terser',
    '/usr/share/nodejs/terser/dist/bundle.min.cjs',
    '/usr/share/nodejs/terser'
  ];
  for (const c of candidates) {
    try {
      return require(c);
    } catch (_e) {}
  }
  return null;
}

function loadAcorn() {
  const candidates = ['acorn', '/usr/share/nodejs/acorn'];
  for (const c of candidates) {
    try {
      return require(c);
    } catch (_e) {}
  }
  return null;
}

function loadJsObfuscator() {
  try {
    return require('javascript-obfuscator');
  } catch (_e) {
    return null;
  }
}

function xorEncodeToBase64(str, key) {
  const bytes = Buffer.from(str, 'utf8');
  const out = Buffer.allocUnsafe(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    out[i] = bytes[i] ^ ((key + i * 31) & 0xff);
  }
  return out.toString('base64');
}

// ----------------------------------------------------------------------------
// Dead Code Injection
// ----------------------------------------------------------------------------
// مولد عدد شبه‌تصادفی قطعی (Deterministic) تا خروجی بین بیلدها پایدار بماند.
function createSeededRandom(seed = 0x5eed1234) {
  let state = seed >>> 0;
  return function next() {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

// رانتایم محمول مبهم: متد tap همیشه صفر برمی‌گرداند، پس بلوک‌های داخل if هرگز اجرا نمی‌شوند.
function buildDeadCodeRuntime() {
  return `var _0xMDC=(function(){var _0xT=[0x4d,0x43,0x44,0x31,0x1f,0x5a];var _0xS=0x5eed;` +
    `function _0xH(_0xA,_0xB){var _0xR=(_0xA^_0xB)>>>0;_0xR=(_0xR*0x1f+_0xS)>>>0;return _0xR;}` +
    `function tap(_0xC){return (_0xH(_0xC,_0xS)^(_0xC+_0xS))&0x0;}` +
    `return {tap:tap,h:_0xH,s:_0xS,t:_0xT,tag:${JSON.stringify(DEAD_CODE_MARKER)}};})();`;
}

// قالب‌های کد مرده: هر قالب کاملاً خودکفا است و به هیچ متغیر بیرونی وابسته نیست.
function deadCodeBlock(index) {
  const variants = [
    `if(_0xMDC.tap(0x${(0x10 + index).toString(16)})!==0x1){var _0xD=[0x2f,0x4d,0x1a];var _0xN=0;for(var _0xI=0;_0xI<_0xD.length;_0xI+=1){_0xN=(_0xN+_0xD[_0xI])>>>0;}if(_0xN===0x7d2){_0xMDC.t[0]=_0xN;}}`,
    `if(_0xMDC.tap(0x${(0x20 + index).toString(16)})!==0x1){var _0xQ=(_0xMDC.h(0x1a,0x7)>>>0)%0x3b9aca07;var _0xP=_0xMDC.t.concat([_0xQ]);if(_0xP.length===0x0){_0xMDC.t=_0xP;}}`,
    `if(_0xMDC.tap(0x${(0x30 + index).toString(16)})!==0x1){var _0xG=0;while(_0xG<0x0){_0xG+=0x1;}if(_0xG>0x0){_0xMDC.s=_0xG;}}`,
    `if(_0xMDC.tap(0x${(0x40 + index).toString(16)})!==0x1){var _0xM={k:0x1f,v:0x2e};var _0xS2=Object.keys(_0xM).length;if(_0xS2<0x0){_0xMDC.t[1]=_0xS2;}}`,
    `if(_0xMDC.tap(0x${(0x50 + index).toString(16)})!==0x1){var _0xR2=0;try{_0xR2=(_0xMDC.h(0x2,0x3)^0x0)>>>0;}catch(_0xE){_0xR2=0x0;}if(_0xR2===0xdead){_0xMDC.t[2]=_0xR2;}}`
  ];
  return variants[index % variants.length];
}

// تزریق بلوک‌های کد مرده در ابتدای بدنه توابع (بدون تغییر رفتار برنامه)
export function injectDeadCode(code, options = {}) {
  const maxBlocks = Number.isFinite(options.maxBlocks) ? options.maxBlocks : 48;
  const acorn = loadAcorn();
  if (!acorn) return { code, blocks: 0 };

  let ast;
  try {
    ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
  } catch (_e) {
    return { code, blocks: 0 };
  }

  const candidates = [];
  (function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (
      (node.type === 'FunctionDeclaration' ||
        node.type === 'FunctionExpression' ||
        node.type === 'ArrowFunctionExpression') &&
      node.body &&
      node.body.type === 'BlockStatement' &&
      Array.isArray(node.body.body) &&
      node.body.body.length > 0
    ) {
      candidates.push(node.body.start + 1);
    }
    for (const key of Object.keys(node)) {
      if (key === 'start' || key === 'end' || key === 'loc' || key === 'range') continue;
      const child = node[key];
      if (Array.isArray(child)) {
        for (const item of child) {
          if (item && typeof item.type === 'string') walk(item);
        }
      } else if (child && typeof child.type === 'string') {
        walk(child);
      }
    }
  })(ast);

  if (candidates.length === 0) return { code, blocks: 0 };

  const rand = createSeededRandom(0x5eed1234 ^ code.length);
  // پخش یکنواخت نقاط تزریق روی کل باندل (نه فقط چند تابع اول)
  const step = Math.max(1, Math.floor(candidates.length / maxBlocks));
  const points = [];
  for (let i = 0; i < candidates.length && points.length < maxBlocks; i += step) {
    if (rand() < 0.85) points.push(candidates[i]);
  }
  if (points.length === 0) points.push(candidates[0]);

  points.sort((a, b) => b - a);
  let out = code;
  let index = 0;
  for (const pos of points) {
    out = out.slice(0, pos) + deadCodeBlock(index) + out.slice(pos);
    index += 1;
  }

  return {
    code: `${buildDeadCodeRuntime()}\n${out}`,
    blocks: points.length
  };
}

// پیمایش AST برای استخراج امن تمام رشته‌های جاوااسکریپت بدون دست زدن به کلیدهای آبجکت یا Template Literalها
function astEncryptStrings(code, xorKey = 0x5a) {
  const acorn = loadAcorn();
  if (!acorn) return { code, vault: [] };

  let ast;
  try {
    ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
  } catch (_e) {
    return { code, vault: [] };
  }

  const vault = [];
  const vaultMap = new Map();
  const replacements = [];

  function registerString(str) {
    if (vaultMap.has(str)) return vaultMap.get(str);
    const idx = vault.length;
    vault.push(xorEncodeToBase64(str, xorKey));
    vaultMap.set(str, idx);
    return idx;
  }

  function walk(node, parent) {
    if (!node || typeof node !== 'object') return;

    if (
      node.type === 'Literal' &&
      typeof node.value === 'string' &&
      node.value.length >= 3 &&
      node.value.length <= 160
    ) {
      const isPropKey =
        parent &&
        (parent.type === 'Property' || parent.type === 'MethodDefinition') &&
        parent.key === node &&
        !parent.computed;
      const isImportOrExport =
        parent &&
        (parent.type === 'ImportDeclaration' ||
          parent.type === 'ExportNamedDeclaration' ||
          parent.type === 'ExportAllDeclaration');
      const isSwitchCaseTest = parent && parent.type === 'SwitchCase' && parent.test === node;
      const isDefaultParam = parent && parent.type === 'AssignmentPattern' && parent.right === node;

      if (!isPropKey && !isImportOrExport && !isSwitchCaseTest && !isDefaultParam) {
        const idx = registerString(node.value);
        replacements.push({
          start: node.start,
          end: node.end,
          replacement: `_0xMiliDec(${idx})`
        });
      }
    }

    for (const key of Object.keys(node)) {
      if (key === 'start' || key === 'end' || key === 'loc' || key === 'range') continue;
      const child = node[key];
      if (Array.isArray(child)) {
        for (const item of child) {
          if (item && typeof item.type === 'string') walk(item, node);
        }
      } else if (child && typeof child.type === 'string') {
        walk(child, node);
      }
    }
  }

  walk(ast, null);

  if (replacements.length === 0) {
    return { code, vault: [] };
  }

  replacements.sort((a, b) => b.start - a.start);
  let outCode = code;
  for (const r of replacements) {
    outCode = outCode.slice(0, r.start) + r.replacement + outCode.slice(r.end);
  }

  return { code: outCode, vault };
}

export async function obfuscateWorkerBundle(rawEsmCode, options = {}) {
  const lines = rawEsmCode.split('\n');
  const importLines = [];
  const bodyLines = [];

  for (const line of lines) {
    if (/^\s*import\s+.*from\s+['"]cloudflare:sockets['"]\s*;?\s*$/.test(line)) {
      importLines.push(line.trim());
    } else {
      bodyLines.push(line);
    }
  }

  const headerImport =
    importLines.length > 0
      ? importLines[0]
      : `import { connect as cfConnect } from 'cloudflare:sockets';`;

  let bodyCode = bodyLines.join('\n');
  bodyCode = bodyCode.replace(/export\s+default\s+\{/, 'const __MILI_WORKER_EXPORT__ = {');

  // ---- تزریق کد مرده (Opaque Predicate) پیش از مبهم‌سازی ----
  const deadCodeEnabled = options.deadCode !== false;
  const injection = deadCodeEnabled
    ? injectDeadCode(bodyCode, { maxBlocks: options.deadCodeBlocks })
    : { code: bodyCode, blocks: 0 };
  bodyCode = injection.code;

  // نسخه خواناي دقيق ورودي مبهم‌ساز (پس از تزريق كد مرده) براي ديباگ و بررسي خودكار
  const injectedCode = `${headerImport}\n${bodyCode}\nexport default __MILI_WORKER_EXPORT__;\n`;

  const meta = {
    deadCode: deadCodeEnabled,
    deadCodeBlocks: injection.blocks,
    deadCodeMarker: DEAD_CODE_MARKER,
    obfuscator: 'none',
    stringVaultEntries: 0
  };

  const JavaScriptObfuscator = loadJsObfuscator();
  if (JavaScriptObfuscator) {
    const obfResult = JavaScriptObfuscator.obfuscate(bodyCode, {
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: deadCodeEnabled,
      deadCodeInjectionThreshold: 0.25,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.75,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 2,
      stringArrayWrappersChainedCalls: false,
      renameGlobals: false,
      identifierNamesGenerator: 'hexadecimal',
      renameProperties: false,
      target: 'node',
      numbersToExpressions: true,
      simplify: true,
      splitStrings: false,
      transformObjectKeys: false,
      unicodeEscapeSequence: false,
      selfDefending: false,
      debugProtection: false,
      disableConsoleOutput: false,
      reservedNames: ['__MILI_WORKER_EXPORT__', 'cfConnect', 'fetch'],
      // seed ثابت => بیلد تکرارپذیر (دیف‌های ورک‌فلوی مبهم‌سازی دیگر نویزی نیستند)
      seed: 0x5eed13
    });
    meta.obfuscator = 'javascript-obfuscator';
    const code = `${headerImport}\n${obfResult.getObfuscatedCode()}\nexport default __MILI_WORKER_EXPORT__;\n`;
    return { code, meta, injectedCode };
  }

  const xorKey = 0x5a;
  const { code: astEncryptedCode, vault } = astEncryptStrings(bodyCode, xorKey);
  meta.stringVaultEntries = vault.length;

  const vaultRuntime =
    vault.length > 0
      ? `const _0xMiliVault = ${JSON.stringify(vault)};
const _0xMiliCache = Object.create(null);
function _0xMiliDec(_0xIdx) {
  if (_0xMiliCache[_0xIdx] !== undefined) return _0xMiliCache[_0xIdx];
  const _0xRaw = atob(_0xMiliVault[_0xIdx]);
  const _0xBytes = new Uint8Array(_0xRaw.length);
  for (let _0xI = 0; _0xI < _0xRaw.length; _0xI++) {
    _0xBytes[_0xI] = _0xRaw.charCodeAt(_0xI) ^ ((${xorKey} + (_0xI * 31)) & 0xff);
  }
  const _0xStr = new TextDecoder().decode(_0xBytes);
  _0xMiliCache[_0xIdx] = _0xStr;
  return _0xStr;
}\n`
      : '';

  // قرار دادن export default داخل کد ورودی Terser تا از حذف درختی (Tree-Shaking) جلوگیری شود
  const combined = `${vaultRuntime}${astEncryptedCode}\nexport default __MILI_WORKER_EXPORT__;\n`;
  const terser = loadTerser();

  if (terser && typeof terser.minify === 'function') {
    const minified = await terser.minify(combined, {
      ecma: 2022,
      module: true,
      compress: {
        passes: 2,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: false,
        booleans: true,
        loops: true,
        unused: true
      },
      mangle: {
        toplevel: true,
        reserved: ['__MILI_WORKER_EXPORT__', 'cfConnect', 'fetch', 'WebSocketPair']
      },
      format: {
        comments: false,
        ascii_only: false
      }
    });
    if (minified && minified.code) {
      meta.obfuscator = vault.length > 0 ? 'terser+xor-vault' : 'terser';
      return { code: `${headerImport}\n${minified.code}\n`, meta, injectedCode };
    }
  }

  return { code: `${headerImport}\n${combined}`, meta, injectedCode };
}
