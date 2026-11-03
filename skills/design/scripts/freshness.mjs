#!/usr/bin/env node
// Lists knowledge files whose time-sensitive content is due for review. Files with laws, platform versions, browser
// support or tool versions carry a stamp under the title:
//   > Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: <what changes>.
// Re-check the content against current sources, then move both dates forward. No dependencies.
// Usage: node freshness.mjs [folder] [--today YYYY-MM-DD] [--json] [--no-fail]

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collect, print } from './lib/files.mjs';
import { isMainScript } from './lib/main.mjs';

const STAMP = /^> Verified: (\d{4}-\d{2}-\d{2}) · Review by: (\d{4}-\d{2}-\d{2}) · Time-sensitive: (.+)$/m;

export function readStamp(text) {
  const m = text.match(STAMP);
  return m ? { verified: m[1], reviewBy: m[2], what: m[3] } : null;
}

export function checkFreshness(files, today) {
  const findings = [];
  for (const [file, text] of files) {
    if (!text.includes('> Verified:')) continue;
    const stamp = readStamp(text);
    if (!stamp) {
      findings.push({ file, line: 0, rule: 'stamp-format', level: 'warning', message: 'Malformed freshness stamp', excerpt: text.split('\n').find((l) => l.includes('Verified:')) ?? '' });
      continue;
    }
    if (stamp.reviewBy < stamp.verified) {
      findings.push({ file, line: 0, rule: 'stamp-format', level: 'warning', message: 'Review date is before the verification date', excerpt: `${stamp.verified} → ${stamp.reviewBy}` });
    } else if (stamp.reviewBy <= today) {
      findings.push({ file, line: 0, rule: 'stale', level: 'warning', message: `Due for review since ${stamp.reviewBy} (verified ${stamp.verified}): ${stamp.what}`, excerpt: stamp.what });
    }
  }
  return findings;
}

if (isMainScript(import.meta.url)) {
  const args = process.argv.slice(2);
  const todayIndex = args.indexOf('--today');
  const today = todayIndex === -1 ? new Date().toISOString().slice(0, 10) : args[todayIndex + 1];
  const folder = args.find((a, i) => !a.startsWith('--') && i !== todayIndex + 1) ?? join(dirname(fileURLToPath(import.meta.url)), '..', 'knowledge');
  const files = collect([folder], new Set(['.md'])).map((f) => [f, readFileSync(f, 'utf8')]);
  const findings = checkFreshness(files, today);
  print(findings, { json: args.includes('--json'), title: `Freshness (as of ${today})` });
  if (!args.includes('--no-fail') && findings.length) process.exit(1);
}
