#!/usr/bin/env python3
# ============================================================================
# miliconfig - تفکیک پروکسی‌ها بر اساس کشور + بررسی خودکار پینگ و سلامت
# ----------------------------------------------------------------------------
# ورودی:  data/socks5.txt , data/http.txt (خروجی scripts/fetch-proxies.js)
# خروجی:
#   data/by-country/<KOD>/<protocol>.txt      -> پروکسی‌های سالمِ هر کشور
#   data/by-country/<KOD>/all.txt             -> همه پروتکل‌های سالم آن کشور
#   data/by-country/index.json                -> آمار: تعداد کل/سالم/مرده، میانگین پینگ، درصد سلامت
#   data/by-country/index.md                  -> همان آمار به‌صورت جدول (برای خواندن/README)
#
# مراحل کار:
#   1) استخراج کشور از URL منبع (مثل .../country/DE/socks5.txt یا proxy_vip/AE.txt)
#   2) برای پروکسی‌های بدون کشور: تشخیص GeoIP با ip-api.com (batch، رایگان)
#   3) تست سلامت:
#        SOCKS5 -> دست کامل SOCKS5 handshake (NO AUTH + CONNECT به 1.1.1.1:443) = پینگ واقعی
#        HTTP   -> درخواست CONNECT تانل از طریق خود پروکسی
#   4) نوشتن لیست تفکیک‌شده + گزارش سلامت/پینگ (میلی‌ثانیه)
#
# اجرا:
#   npm run health                                   (هر دو دسته)
#   npm run health -- --only socks5 --limit 5000     (فقط socks5، حداکثر ۵۰۰۰ پروکسی)
#   npm run health -- --no-geo                       (بدون GeoIP؛ کشور ناشناس = ZZ)
#   npm run health -- --timeout 4 --concurrency 300
# ============================================================================

import argparse
import concurrent.futures
import json
import os
import random
import re
import socket
import struct
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
RAW_DIR = os.path.join(DATA_DIR, "raw")
OUT_DIR = os.path.join(DATA_DIR, "by-country")
SOURCES_FILE = os.path.join(ROOT, "config", "proxy_sources.json")
GEO_MAP_FILE = os.path.join(ROOT, "scripts", "geo-country-map.json")

COUNTRY_RE = re.compile(
    r"/(?:country|by-country|proxy_vip|providers)/([A-Za-z]{2})(?:[/_?].*|\.txt)$|"
    r"/([A-Z]{2})\.txt$"
)

# نام فایل خامِ fetch-proxies.js: کل URL با «/» و «:» به «_» تبدیل شده،
# پس در اینجا هم باید همان کاراکترها جایگزین شوند (نه regex کامل).
def raw_filename(url):
    name = re.sub(r"^https?://", "", url)
    return re.sub(r"[/:]", "_", name)


def norm_cc(code):
    """GB -> UK (استاندارد ISO3166 مورد استفاده ip-api)."""
    if not code:
        return None
    code = code.upper()
    return "UK" if code == "GB" else code


def build_url_country_map():
    """نقشه canonical-proxy -> country از روی URLهای config که کد کشور دارند."""
    mapping = {}
    try:
        with open(SOURCES_FILE, encoding="utf-8") as f:
            cfg = json.load(f)
    except Exception as e:
        print(f"⚠️  خطا در خواندن {SOURCES_FILE}: {e}")
        return mapping

    geo_overrides = {}
    if os.path.exists(GEO_MAP_FILE):
        try:
            with open(GEO_MAP_FILE, encoding="utf-8") as f:
                geo_overrides = {k: v for k, v in json.load(f).items() if not k.startswith("_")}
        except Exception:
            pass

    for cat, items in (cfg.get("categories") or {}).items():
        for item in items:
            url = item if isinstance(item, str) else (item or {}).get("url", "")
            m = COUNTRY_RE.search(url)
            cc = None
            if m:
                cc = norm_cc(m.group(1) or m.group(2))
            elif url.endswith(".txt"):
                base = url.rsplit("/", 1)[-1]
                cc = norm_cc(geo_overrides.get(base))
            if not cc or len(cc) != 2:
                continue
            raw_path = os.path.join(RAW_DIR, cat, raw_filename(url))
            if not os.path.exists(raw_path):
                continue
            try:
                with open(raw_path, encoding="utf-8", errors="ignore") as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith("#"):
                            # حذف پیشوند پروتکل برای تطبیق با canonical
                            line = re.sub(r"^(socks5h?|socks4a?|https?)://", "", line, flags=re.I)
                            mapping.setdefault(line, cc)
            except Exception:
                pass
    return mapping


def load_proxies(fname):
    out = []
    path = os.path.join(DATA_DIR, fname)
    if not os.path.exists(path):
        return out
    with open(path, encoding="utf-8", errors="ignore") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                out.append(line)
    return out


# ---------------------------- GeoIP (ip-api batch) -------------------------

GEO_CACHE_FILE = os.path.join(DATA_DIR, "geo-cache.json")


def load_geo_cache():
    try:
        with open(GEO_CACHE_FILE, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def save_geo_cache(cache):
    try:
        with open(GEO_CACHE_FILE, "w", encoding="utf-8") as f:
            json.dump(cache, f)
    except Exception:
        pass


def geo_lookup(ips, concurrency=4, cache=None):
    """دریافت کد کشور برای مجموعه IP با endpoint batch ip-api.com (رایگان، بدون کلید).

    محدودیت سرویس رایگان: هر ۱۵ ثانیه فقط یک درخواست از هر IP — بنابراین
    بین batchها الزاماً sleep می‌شود. نتایج در data/geo-cache.json کش می‌شوند
    تا اجرای بعدی سریع باشد؛ برای حجم زیاد (--all) فلگ --no-geo را استفاده کنید.
    """
    result = dict(cache or {})
    ips = [ip for ip in dict.fromkeys(ips) if ip not in result]
    batches = [ips[i:i + 100] for i in range(0, len(ips), 100)]

    def do_batch(batch):
        payload = json.dumps([{"query": ip} for ip in batch]).encode()
        req = urllib.request.Request(
            "http://ip-api.com/batch?fields=query,countryCode,status",
            data=payload,
            headers={"Content-Type": "application/json"},
        )
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                rows = json.loads(resp.read().decode())
            return rows
        except Exception:
            return []

    for i in range(0, len(batches), concurrency):
        chunk = batches[i:i + concurrency]
        with concurrent.futures.ThreadPoolExecutor(max_workers=len(chunk)) as ex:
            for rows in ex.map(do_batch, chunk):
                for row in rows:
                    cc = (row.get("countryCode") or "").upper()
                    if cc:
                        result[row.get("query", "")] = cc
        print(f"   … GeoIP {min((i+concurrency)*100, len(ips))}/{len(ips)} IP")
        if i + concurrency < len(batches):
            time.sleep(16)  # رعایت rate-limit رایگان ip-api (45 req/min)
    return result


# --------------------------- SOCKS5 handshake ping --------------------------

def parse_proxy(p):
    """'user:pass@host:port' | '[ipv6]:port' | 'ipv4:port' -> (host, port, auth)"""
    auth = ""
    body = p
    at = body.rfind("@")
    if at > -1:
        auth, body = body[:at], body[at + 1:]
    if body.startswith("["):  # [ipv6]:port
        close = body.find("]")
        host = body[1:close]
        port = int(body[close + 2:])
    else:
        host, _, portstr = body.rpartition(":")
        port = int(portstr)
    return host, port, auth


def socks5_connect(host, port, dst_host, dst_port, auth="", timeout=5.0):
    """دست کامل SOCKS5 (RFC1928) تا برقراری CONNECT؛ زمان را برمی‌گرداند (ms)."""
    start = time.monotonic()
    s = socket.create_connection((host, port), timeout=timeout)
    try:
        s.settimeout(timeout)
        # greeting: VER=5, NMETHODS=2 (none + auth)
        s.sendall(b"\x05\x02\x00\x02")
        resp = s.recv(2)
        if len(resp) < 2 or resp[0] != 0x05:
            raise IOError("bad greeting")
        method = resp[1]
        if method == 0x02:
            if ":" in auth:
                u, _, pw = auth.partition(":")
            else:
                u, pw = auth, ""
            creds = b"\x01" + u.encode()[:255] + bytes([len(u.encode()[:255])]) \
                    + pw.encode()[:255] + bytes([len(pw.encode()[:255])])
            # فرمت صحیح: VER ULEN USER PLEN PASS
            ub, pb = u.encode()[:255], pw.encode()[:255]
            creds = b"\x01" + bytes([len(ub)]) + ub + bytes([len(pb)]) + pb
            s.sendall(creds)
            if s.recv(2)[1] != 0x00:
                raise IOError("auth failed")
        elif method == 0xFF:
            raise IOError("no acceptable method")
        # CONNECT request (IPv4 / domain)
        if re.match(r"^\d{1,3}(\.\d{1,3}){3}$", dst_host):
            addr = socket.inet_aton(dst_host)
            atyp = b"\x01"
        else:
            addr = dst_host.encode()
            atyp = b"\x03" + bytes([len(addr)])
        s.sendall(b"\x05\x01\x00" + atyp + addr + struct.pack(">H", dst_port))
        rep = s.recv(32)
        if len(rep) < 4 or rep[1] != 0x00:
            raise IOError(f"socks reply error: {rep[1] if len(rep) > 1 else '?'}")
        elapsed = (time.monotonic() - start) * 1000.0
        return elapsed
    finally:
        try:
            s.close()
        except OSError:
            pass


def http_connect_ping(host, port, dst_host, dst_port, auth="", timeout=5.0):
    """تست پروکسی HTTP/HTTPS با CONNECT تانل؛ زمان (ms) برمی‌گرداند."""
    start = time.monotonic()
    s = socket.create_connection((host, port), timeout=timeout)
    try:
        s.settimeout(timeout)
        req = f"CONNECT {dst_host}:{dst_port} HTTP/1.1\r\nHost: {dst_host}:{dst_port}\r\n"
        if auth:
            import base64
            req += f"Proxy-Authorization: Basic {base64.b64encode(auth.encode()).decode()}\r\n"
        req += "\r\n"
        s.sendall(req.encode())
        status_line = s.recv(4096).decode(errors="ignore").split("\r\n")[0]
        if " 200 " not in f" {status_line} ":
            raise IOError(f"http status: {status_line[:40]}")
        return (time.monotonic() - start) * 1000.0
    finally:
        try:
            s.close()
        except OSError:
            pass


# ------------------------------ health worker -------------------------------

PING_TARGETS = [("1.1.1.1", 443), ("one.one.one.one", 443), ("8.8.8.8", 443)]


def test_one(proxy, kind, timeout):
    host, port, auth = parse_proxy(proxy)
    dst, dport = random.choice(PING_TARGETS)
    fn = socks5_connect if kind == "socks5" else http_connect_ping
    try:
        ms = fn(host, port, dst, dport, auth=auth, timeout=timeout)
        return {"proxy": proxy, "kind": kind, "alive": True, "ping_ms": round(ms, 1)}
    except Exception as e:
        return {"proxy": proxy, "kind": kind, "alive": False, "error": str(e)[:80]}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", choices=["socks5", "http"], default="")
    ap.add_argument("--timeout", type=float, default=5.0)
    ap.add_argument("--concurrency", type=int, default=250)
    ap.add_argument("--limit", type=int, default=0, help="حداکثر پروکسی برای تست در هر دسته")
    ap.add_argument("--no-geo", action="store_true", help="رد مرحله GeoIP (کش کشور ناشناس = ZZ)")
    ap.add_argument("--max-geo", type=int, default=5000,
                    help="حداکثر IP جدید برای GeoIP در هر اجرا (سرویس رایگان محدود است؛ 0 = بدون سقف)")
    args = ap.parse_args()

    t0 = time.time()
    url_country = build_url_country_map()
    print(f"🌍 کشور از URL منبع: {len(url_country)} پروکسی شناخته‌شده")

    datasets = []
    if args.only in ("", "socks5"):
        datasets.append(("socks5", "socks5.txt"))
    if args.only in ("", "http"):
        datasets.append(("http", "http.txt"))

    all_items = []  # (canonical, kind, country_hint)
    for kind, fname in datasets:
        proxies = load_proxies(fname)
        if args.limit:
            proxies = proxies[: args.limit]
        for p in proxies:
            all_items.append((p, kind, url_country.get(p)))
        print(f"📦 {fname}: {len(proxies)} پروکسی")

    # GeoIP برای موارد بدون کشور (با کش محلی data/geo-cache.json)
    unknown_ips = sorted({parse_proxy(p)[0] for p, _k, c in all_items if not c})
    geo_cache = load_geo_cache()
    todo = [ip for ip in unknown_ips if ip not in geo_cache]
    if args.max_geo and len(todo) > args.max_geo:
        print(f"🗺️  محدودیت GeoIP: فقط {args.max_geo} از {len(todo)} IP جدید بررسی می‌شود "
              f"(اجرای بعدی ادامه می‌دهد؛ یا --max-geo 0)")
        todo = todo[: args.max_geo]
    if todo and not args.no_geo:
        print(f"🗺️  GeoIP برای {len(todo)} IP جدید (ip-api batch)…")
        geo_cache = geo_lookup(todo, cache=geo_cache)
        save_geo_cache(geo_cache)
        print(f"   → مجموع کش: {len(geo_cache)} IP")
    geo = geo_cache

    def country_of(p, hint):
        if hint:
            return hint
        return geo.get(parse_proxy(p)[0], "ZZ")

    # تست سلامت
    print(f"🏓 تست سلامت {len(all_items)} پروکسی (همزمانی {args.concurrency}، تایم‌اوت {args.timeout}s)…")
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.concurrency) as ex:
        futs = [ex.submit(test_one, p, kind, args.timeout) for p, kind, _c in all_items]
        done = 0
        for fu in concurrent.futures.as_completed(futs):
            results.append(fu.result())
            done += 1
            if done % 2000 == 0:
                alive = sum(1 for r in results if r["alive"])
                print(f"   … {done}/{len(all_items)} — سالم تاکنون: {alive}")

    # جمع‌آوری بر اساس کشور
    stats = {}
    for (p, kind, hint), r in zip(all_items, results):
        cc = country_of(p, hint)
        st = stats.setdefault(cc, {
            "total": 0, "alive": 0, "dead": 0, "sum_ping": 0.0,
            "socks5_alive": [], "http_alive": [],
        })
        st["total"] += 1
        if r["alive"]:
            st["alive"] += 1
            st["sum_ping"] += r["ping_ms"]
            st[f"{kind}_alive"].append({"proxy": p, "ping_ms": r["ping_ms"]})
        else:
            st["dead"] += 1

    os.makedirs(OUT_DIR, exist_ok=True)
    index_entries = []
    total_alive = total_dead = 0
    for cc in sorted(stats, key=lambda x: (-stats[x]["alive"], x)):
        st = stats[cc]
        cdir = os.path.join(OUT_DIR, cc)
        os.makedirs(cdir, exist_ok=True)
        socks_sorted = sorted(st["socks5_alive"], key=lambda r: r["ping_ms"])
        http_sorted = sorted(st["http_alive"], key=lambda r: r["ping_ms"])
        with open(os.path.join(cdir, "socks5.txt"), "w", encoding="utf-8") as f:
            f.write("\n".join(r["proxy"] for r in socks_sorted) + ("\n" if socks_sorted else ""))
        with open(os.path.join(cdir, "http.txt"), "w", encoding="utf-8") as f:
            f.write("\n".join(r["proxy"] for r in http_sorted) + ("\n" if http_sorted else ""))
        with open(os.path.join(cdir, "all.txt"), "w", encoding="utf-8") as f:
            for r in socks_sorted:
                f.write(f"socks5://{r['proxy']}\n")
            for r in http_sorted:
                f.write(f"http://{r['proxy']}\n")
        avg = (st["sum_ping"] / st["alive"]) if st["alive"] else None
        pct = round(100.0 * st["alive"] / st["total"], 1) if st["total"] else 0
        entry = {
            "country": cc,
            "total": st["total"],
            "alive": st["alive"],
            "dead": st["dead"],
            "health_pct": pct,
            "avg_ping_ms": round(avg, 1) if avg is not None else None,
            "socks5_alive": len(socks_sorted),
            "http_alive": len(http_sorted),
        }
        index_entries.append(entry)
        total_alive += st["alive"]
        total_dead += st["dead"]

    index = {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "durationSec": round(time.time() - t0, 1),
        "tested": len(all_items),
        "alive": total_alive,
        "dead": total_dead,
        "countries": index_entries,
    }
    with open(os.path.join(OUT_DIR, "index.json"), "w", encoding="utf-8") as f:
        json.dump(index, f, ensure_ascii=False, indent=2)

    # ---- استخر فشرده پروکسی‌های سالم (مصرف Worker/Pages: دکمه مولتی‌لوکیشن) ----
    # فقط ۱۵۰ پروکسی برتر هر کشور (مرتب بر اساس پینگ)، بدون user/pass (ناشناس)،
    # حداکثر ~6000 رکورد تا حجم فایل زیر ۲۵۶KB باندل Worker بماند.
    def parse_canon(p):
        p = re.sub(r"^(socks5h?|socks4a?|https?)://", "", p, flags=re.I)
        if "@" in p:
            return None  # پروکسی احراز هویتی در استخر عمومی نمی‌نشیند
        m = re.match(r"^(\[[0-9a-fA-F:]+\]|[\d.]+|[A-Za-z0-9.\-]+):(\d{1,5})$", p)
        if not m:
            return None
        host = m.group(1).strip("[]")
        port = int(m.group(2))
        if port <= 0 or port > 65535:
            return None
        return host, port

    pool_countries = {}
    for cc in sorted(stats):
        st = stats[cc]
        merged = [("s", r) for r in st["socks5_alive"]] + [("h", r) for r in st["http_alive"]]
        merged.sort(key=lambda t: t[1]["ping_ms"])
        entries = []
        for kind, r in merged[:150]:
            pc = parse_canon(r["proxy"])
            if not pc:
                continue
            entries.append(f"{pc[0]}|{pc[1]}|{kind}|{int(round(r['ping_ms']))}")
        if entries:
            pool_countries[cc] = entries

    pool = {
        "v": 1,
        "generatedAt": index["generatedAt"],
        "maxPerCountry": 150,
        "countries": pool_countries,
    }
    pool_path = os.path.join(OUT_DIR, "pool.json")
    with open(pool_path, "w", encoding="utf-8") as f:
        json.dump(pool, f, separators=(",", ":"))
    print(f"🏊 pool.json: {sum(len(v) for v in pool_countries.values())} پروکسی سالم "
          f"در {len(pool_countries)} کشور ({os.path.getsize(pool_path)//1024} KB)")

    # markdown
    lines = [
        "# 🌍 پروکسی‌های سالم تفکیک‌شده بر اساس کشور",
        "",
        f"- تاریخ: `{index['generatedAt']}` — مدت: `{index['durationSec']}s`",
        f"- تست‌شده: `{index['tested']}` | ✅ سالم: `{index['alive']}` | ❌ مرده: `{index['dead']}`",
        "",
        "| کشور | کل | سالم | مرده | سلامت | SOCKS5 | HTTP/HTTPS | میانگین پینگ |",
        "|---|---:|---:|---:|---:|---:|---:|---:|",
    ]
    for e in index_entries:
        ping = f"{e['avg_ping_ms']} ms" if e["avg_ping_ms"] is not None else "—"
        lines.append(
            f"| **{e['country']}** | {e['total']} | {e['alive']} | {e['dead']} | "
            f"{e['health_pct']}% | {e['socks5_alive']} | {e['http_alive']} | {ping} |"
        )
    with open(os.path.join(OUT_DIR, "index.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

    print(f"\n✅ پایان: {total_alive} پروکسی سالم از {len(all_items)} "
          f"در {len(index_entries)} کشور → {OUT_DIR}")
    print("   ساختار: by-country/<کد>/<socks5.txt|http.txt|all.txt> + index.json + index.md")


if __name__ == "__main__":
    sys.exit(main())
