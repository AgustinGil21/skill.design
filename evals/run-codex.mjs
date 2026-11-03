#!/usr/bin/env node
// Runs the generated eval cases (evals/cases/) with Codex, so the skill is measured on both agents.
// For each case: an empty temporary workspace, the case's fixture.sh, the working copy of the skill linked as a
// project skill (.agents/skills/design) plus a one-line AGENTS.md pointer, then `codex exec` with the prompt. The run is
// graded by a Claude judge with the case's LLM graders (expected behavior, failure to avoid). No dependencies.
// Usage: node evals/run-codex.mjs [--scenarios 27,35] [--runs 1] [--model <id>] [--judge-model <id>] [--dry-run]

import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const EVALS = dirname(fileURLToPath(import.meta.url));
const REPO = join(EVALS, '..');
const SKILL = join(REPO, 'skills', 'design');
const CASES = join(EVALS, 'cases');

export function readCase(dir) {
  const prompt = readFileSync(join(dir, 'prompt.md'), 'utf8').replace(/^---[\s\S]*?---\s*/, '').trim();
  const graders = readdirSync(join(dir, 'graders')).map((file) => {
    const text = readFileSync(join(dir, 'graders', file), 'utf8');
    const type = (text.match(/^type:\s*"?(\w+)"?/m) ?? [])[1];
    const body = text.replace(/^---[\s\S]*?---\s*/, '').trim();
    const weight = Number((text.match(/^weight:\s*(\d+)/m) ?? [])[1] ?? 1);
    return { name: file.replace(/\.md$/, ''), type, body, weight };
  });
  const tags = (readFileSync(join(dir, 'case.yaml'), 'utf8').match(/^tags: \[(.*)\]$/m) ?? [])[1] ?? '';
  return { name: dir.split('/').at(-1), dir, prompt, graders, scenario: Number((tags.match(/scenario-(\d+)/) ?? [])[1]) };
}

function snapshot(dir) {
  const files = new Map();
  const walk = (path) => {
    for (const name of readdirSync(path)) {
      if (['node_modules', '.git', '.agents'].includes(name)) continue;
      const full = join(path, name);
      if (statSync(full).isDirectory()) walk(full);
      else files.set(relative(dir, full), readFileSync(full, 'utf8'));
    }
  };
  walk(dir);
  return files;
}

export function judgePrompt(grader, prompt, answer, changed) {
  return [
    'You are grading one run of an AI agent. Answer with exactly one word on the last line: PASS or FAIL.',
    '',
    `The person asked: ${prompt}`,
    '',
    '## Criteria',
    grader.body,
    '',
    "## The agent's final answer",
    answer.slice(0, 30000),
    '',
    '## Files the agent created or changed',
    changed.length ? changed.map(([path, text]) => `### ${path}\n${text.slice(0, 5000)}`).join('\n\n') : '(none)',
  ].join('\n');
}

function judge(prompt, model) {
  const args = ['-p', prompt, '--output-format', 'json'];
  if (model) args.push('--model', model);
  const out = JSON.parse(execFileSync('claude', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }));
  const verdict = String(out.result ?? '').trim().split('\n').at(-1).toUpperCase();
  return verdict.includes('PASS') && !verdict.includes('FAIL');
}

function main() {
  const argv = process.argv.slice(2);
  const value = (flag, fallback) => (argv.includes(flag) ? argv[argv.indexOf(flag) + 1] : fallback);
  const wanted = String(value('--scenarios', '')).split(',').filter(Boolean).map(Number);
  const runs = Number(value('--runs', 1));
  const model = value('--model');
  const judgeModel = value('--judge-model');
  const cases = readdirSync(CASES)
    .filter((d) => existsSync(join(CASES, d, 'prompt.md')))
    .map((d) => readCase(join(CASES, d)))
    .filter((c) => wanted.length === 0 || wanted.includes(c.scenario));

  if (argv.includes('--dry-run')) {
    for (const c of cases) console.log(`${c.name}: codex exec ${JSON.stringify(c.prompt)} · graders: ${c.graders.filter((g) => g.type === 'llm').map((g) => g.name).join(', ')}`);
    return;
  }

  const outDir = join(CASES, 'results', `codex-${new Date().toISOString().replace(/[:.]/g, '-')}`);
  mkdirSync(outDir, { recursive: true });
  const rows = [];
  for (const c of cases) {
    for (let run = 1; run <= runs; run++) {
      const workdir = mkdtempSync(join(tmpdir(), `codex-eval-${c.scenario}-`));
      execFileSync('bash', [join(c.dir, 'fixture.sh')], { cwd: workdir });
      mkdirSync(join(workdir, '.agents', 'skills'), { recursive: true });
      symlinkSync(SKILL, join(workdir, '.agents', 'skills', 'design'));
      if (!existsSync(join(workdir, 'AGENTS.md'))) {
        writeFileSync(join(workdir, 'AGENTS.md'), 'For any design, interface, accessibility or copy work, follow the skill at .agents/skills/design/SKILL.md\n');
      }
      const before = snapshot(workdir);
      const lastMessage = join(workdir, '.agents', 'last-message.md');
      const args = ['exec', '--full-auto', '--skip-git-repo-check', '-o', lastMessage, c.prompt];
      if (model) args.splice(1, 0, '-m', model);
      const started = Date.now();
      const result = spawnSync('codex', args, { cwd: workdir, encoding: 'utf8', timeout: 25 * 60 * 1000, maxBuffer: 64 * 1024 * 1024 });
      const answer = existsSync(lastMessage) ? readFileSync(lastMessage, 'utf8') : (result.stdout ?? '');
      const after = snapshot(workdir);
      const changed = [...after].filter(([path, text]) => before.get(path) !== text && path !== 'AGENTS.md');
      let score = 0;
      let total = 0;
      const verdicts = {};
      for (const g of c.graders.filter((x) => x.type === 'llm')) {
        let pass = false;
        try {
          pass = judge(judgePrompt(g, c.prompt, answer, changed), judgeModel);
        } catch (error) {
          verdicts[g.name] = `error: ${String(error).slice(0, 200)}`;
        }
        verdicts[g.name] ??= pass ? 'PASS' : 'FAIL';
        total += g.weight;
        if (pass) score += g.weight;
      }
      const row = { case: c.name, run, score: total ? score / total : 0, verdicts, seconds: Math.round((Date.now() - started) / 1000), exit: result.status, workdir, changed: changed.map(([p]) => p) };
      rows.push(row);
      writeFileSync(join(outDir, `${c.name}-run-${run}.json`), JSON.stringify({ ...row, answer }, null, 2));
      console.log(`${c.name} run ${run}: score ${row.score.toFixed(2)} ${JSON.stringify(verdicts)}`);
    }
  }
  const table = ['| Case | Run | Score | Verdicts | Files changed |', '| --- | --- | --- | --- | --- |',
    ...rows.map((r) => `| ${r.case} | ${r.run} | ${r.score.toFixed(2)} | ${Object.entries(r.verdicts).map(([k, v]) => `${k}: ${v}`).join('; ')} | ${r.changed.length} |`)];
  writeFileSync(join(outDir, 'summary.md'), `# Codex evaluation\n\n${table.join('\n')}\n`);
  console.log(`\nSaved to ${outDir}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
