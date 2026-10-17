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

import { md5Hex } from './utils.js';

export const SS_CIPHERS = {
  'aes-128-gcm': { name: 'aes-128-gcm', keyLen: 16, saltLen: 16, tagLen: 16, kind: 'aes-gcm' },
  'aes-256-gcm': { name: 'aes-256-gcm', keyLen: 32, saltLen: 32, tagLen: 16, kind: 'aes-gcm' },
  'chacha20-ietf-poly1305': { name: 'chacha20-ietf-poly1305', keyLen: 32, saltLen: 32, tagLen: 16, kind: 'chacha20-poly1305' },
  none: { name: 'none', keyLen: 0, saltLen: 0, tagLen: 0, kind: 'none' }
};

export const SS_CIPHER_NAMES = ['aes-128-gcm', 'aes-256-gcm', 'chacha20-ietf-poly1305', 'none'];
export const SS_DEFAULT_CIPHER = 'chacha20-ietf-poly1305';
export const SS_MAX_CHUNK = 0x3fff;

const SS_INFO = new TextEncoder().encode('ss-subkey');

// ---------------------------------------------------------------- utilities
export function hexToBytes(hex = '') {
  const clean = String(hex || '').replace(/[^0-9a-fA-F]/g, '');
  const out = new Uint8Array(Math.floor(clean.length / 2));
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
  return out;
}

function concatBytes(...arrays) {
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

export function randomBytes(len = 32) {
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
export async function evpBytesToKey(password, keyLen = 32) {
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

export async function hkdfSha1(masterKey, salt, keyLen = 32) {
  if (!keyLen) return new Uint8Array(0);
  const base = await crypto.subtle.importKey('raw', masterKey, 'HKDF', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'HKDF', hash: 'SHA-1', salt, info: SS_INFO },
    base,
    keyLen * 8
  );
  return new Uint8Array(bits);
}

export async function deriveSubkey(masterKey, salt, keyLen) {
  return hkdfSha1(masterKey, salt, keyLen);
}

export function incrementNonce(nonce) {
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
export function chacha20Block(key, counter, nonce) {
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

export function chacha20Xor(key, nonce, counter, input) {
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

export function poly1305(msg, key32) {
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

export function chacha20Poly1305Seal(key, nonce, plaintext, aad = new Uint8Array(0)) {
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

export function chacha20Poly1305Open(key, nonce, sealed, aad = new Uint8Array(0)) {
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
async function importAesKey(rawKey) {
  return crypto.subtle.importKey('raw', rawKey, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
}

export async function aeadSeal(cipher, key, nonce, plaintext) {
  const spec = SS_CIPHERS[cipher] || SS_CIPHERS[SS_DEFAULT_CIPHER];
  if (spec.kind === 'none') return plaintext.slice();
  if (spec.kind === 'chacha20-poly1305') return chacha20Poly1305Seal(key, nonce, plaintext);
  const aesKey = await importAesKey(key);
  const buf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce, tagLength: 128 }, aesKey, plaintext);
  return new Uint8Array(buf);
}

export async function aeadOpen(cipher, key, nonce, sealed) {
  const spec = SS_CIPHERS[cipher] || SS_CIPHERS[SS_DEFAULT_CIPHER];
  if (spec.kind === 'none') return sealed.slice();
  if (spec.kind === 'chacha20-poly1305') return chacha20Poly1305Open(key, nonce, sealed);
  const aesKey = await importAesKey(key);
  const buf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce, tagLength: 128 }, aesKey, sealed);
  return new Uint8Array(buf);
}

// ------------------------------------------------------------- chunk framing
export async function writeChunk(encoderState, payload) {
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
export function createDecoder({ cipher, masterKey, salt = null }) {
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
    async init(saltBytes) {
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
export async function createEncoder({ cipher, masterKey }) {
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
export const SS_ATYP_IPV4 = 1;
export const SS_ATYP_DOMAIN = 3;
export const SS_ATYP_IPV6 = 4;

export function encodeSsAddress(host, port, addressType = null) {
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
    groups.forEach((g, i) => {
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

export function parseSsAddress(bytes) {
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
export function normalizeSsCipherName(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (raw === 'chacha20-poly1305') return 'chacha20-ietf-poly1305';
  if (raw === 'chacha20') return 'chacha20-ietf-poly1305';
  if (raw === 'plain' || raw === 'none') return 'none';
  return SS_CIPHERS[raw] ? raw : '';
}

// ssc می‌تواند یک نام، لیست کاما‌دار یا all باشد
export function resolveSsCiphers(value) {
  const raw = String(value ?? '').trim().toLowerCase();
  if (raw === 'all' || raw === '*') return ['aes-128-gcm', 'aes-256-gcm', 'chacha20-ietf-poly1305'];
  if (!raw) return [SS_DEFAULT_CIPHER];
  const list = raw
    .split(/[,\s|]+/)
    .map(normalizeSsCipherName)
    .filter(Boolean);
  return list.length ? Array.from(new Set(list)) : [SS_DEFAULT_CIPHER];
}

export function pickPrimarySsCipher(value) {
  return resolveSsCiphers(value)[0] || SS_DEFAULT_CIPHER;
}

// دیتای همراه آدرس در همان اولین chunk (مثلاً ClientHello در TLS) باید بلافاصله
// به مقصد فرستاده شود؛ در غیر این صورت دست‌دهی کلاینت معطل می‌ماند.
export function collectSsUploadPayloads({ target, payloads } = {}) {
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
export async function tryOpenShadowsocks(firstFrame, password, ciphers = [SS_DEFAULT_CIPHER]) {
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
