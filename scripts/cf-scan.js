// ============================================================================
// miliconfig v3.2 - اسکنر خط فرمان آی‌پی کلودفلر (معادل cfnew / CloudflareSpeedTest)
// ----------------------------------------------------------------------------
// اجرای واقعی روی سیستم شما یا در GitHub Actions:
//   npm run scan -- --count 24 --port 443
//   npm run scan -- --v6 --count 12
//   npm run scan -- --resolve ProxyIP.DE.CMLiussss.net,ProxyIP.NL.CMLiussss.net
//   npm run scan -- --count 24 --json > scan.json
//
// هر آی‌پی با یک سوکت TCP واقعی تست می‌شود و تأخیر اتصال اندازه‌گیری می‌شود.
// هیچ دامنه‌ای به‌عنوان آدرس نود استفاده نمی‌شود؛ خروجی فقط آی‌پی است.
// ============================================================================

import net from 'node:net';
import { Readable, Writable } from 'node:stream';
import { pathToFileURL } from 'node:url';
import {
  generateCandidateIps,
  resolveHostsToFixedIps,
  scanIpPool,
  summarizeScanResults
} from '../src/core/scanner.js';
import { LOCATIONS } from '../src/config/locations.js';

function parseArgs(argv = []) {
  const args = { count: 20, port: 443, timeout: 2500, v6: false, json: false, resolve: '', ips: '', sni: 'www.cloudflare.com' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--v6' || a === '--ipv6') args.v6 = true;
    else if (a === '--json') args.json = true;
    else if (a === '--count') args.count = parseInt(argv[++i], 10) || 20;
    else if (a === '--port') args.port = parseInt(argv[++i], 10) || 443;
    else if (a === '--timeout') args.timeout = parseInt(argv[++i], 10) || 2500;
    else if (a === '--resolve') args.resolve = argv[++i] || '';
    else if (a === '--ips') args.ips = argv[++i] || '';
    else if (a === '--sni') args.sni = argv[++i] || 'www.cloudflare.com';
  }
  return args;
}

// connector سازگار با cloudflare:sockets برای محیط Node (شکل Web Streams)
export function nodeConnector({ hostname, port }) {
  return new Promise((resolve, reject) => {
    const socket = net.connect({ host: hostname, port, family: 0 });
    socket.setNoDelay(true);
    const onError = err => {
      socket.destroy();
      reject(err);
    };
    socket.once('error', onError);
    socket.once('connect', () => {
      socket.off('error', onError);
      socket.on('error', () => {});
      resolve({
        readable: Readable.toWeb(socket),
        writable: Writable.toWeb(socket),
        close: () => socket.destroy()
      });
    });
  });
}

function printTable(results = [], summary = {}) {
  const rows = results
    .slice()
    .sort((a, b) => (a.ok === b.ok ? (a.latency || 1e9) - (b.latency || 1e9) : a.ok ? -1 : 1));
  console.log('┌─────────────────────────────────────┬──────────┬────────┐');
  console.log('│ IP                                  │ LATENCY  │ STATUS │');
  console.log('├─────────────────────────────────────┼──────────┼────────┤');
  for (const r of rows) {
    console.log(
      `│ ${String(r.ip).padEnd(35)} │ ${(r.ok ? `${r.latency}ms` : '-').padEnd(8)} │ ${(r.ok ? 'OK' : 'FAIL').padEnd(6)} │`
    );
  }
  console.log('└─────────────────────────────────────┴──────────┴────────┘');
  console.log(
    `\n✅ ${summary.healthy || 0}/${summary.total || rows.length} سالم` +
      (summary.bestIp ? ` · بهترین: ${summary.bestIp} (${summary.bestLatency}ms)` : '')
  );
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.resolve) {
    const hosts = args.resolve.split(',').map(h => h.trim()).filter(Boolean);
    const resolved = await resolveHostsToFixedIps(hosts);
    console.log(JSON.stringify(resolved, null, 2));
    const withIp = resolved.filter(r => r.fixedIp).length;
    console.log(`\n🌐 ${withIp}/${resolved.length} دامنه به آی‌پی ثابت تبدیل شد`);
    return;
  }

  const explicit = args.ips
    ? args.ips.split(',').map(s => s.trim()).filter(Boolean)
    : [];
  const candidates = explicit.length
    ? explicit
    : generateCandidateIps({ count: args.count, ipv6: args.v6 });

  console.log(
    `🔍 اسکن ${candidates.length} آی‌پی ${args.v6 ? '(IPv6)' : '(IPv4)'} روی پورت ${args.port} ...\n`
  );

  const results = await scanIpPool(candidates, {
    port: args.port,
    timeoutMs: args.timeout,
    concurrency: 6,
    connector: nodeConnector,
    sni: args.sni
  });
  const summary = summarizeScanResults(results);

  if (args.json) {
    console.log(JSON.stringify({ results, summary, locations: LOCATIONS }, null, 2));
    return;
  }

  printTable(results, summary);
  if (summary.healthyIps.length > 0) {
    console.log('\nلیست آماده برای فیلد yx در پنل:');
    console.log(summary.healthyIps.slice(0, 12).map(ip => `${ip}:${args.port}#CF-${ip}`).join(','));
  }
}

// اجرای خودکار فقط وقتی این فایل مستقیم اجرا شود (نه وقتی به‌عنوان ماژول import شود)
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(err => {
    console.error('❌ خطا در اسکن:', err?.message || err);
    process.exit(1);
  });
}
