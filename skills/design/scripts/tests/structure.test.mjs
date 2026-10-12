// Checks that the skill and the repository around it are healthy: valid frontmatter, every cited path exists,
// names, installers and plugin manifests for Claude Code and Codex.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ROOT is the skill folder (skills/design); REPO is the repository that ships it as a plugin.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const REPO = join(ROOT, '..', '..');
const read = (path) => readFileSync(join(ROOT, path), 'utf8');
const readRepo = (path) => readFileSync(join(REPO, path), 'utf8');

test('SKILL.md has frontmatter with name and description', () => {
  const text = read('SKILL.md');
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(fm, 'missing frontmatter');
  assert.match(fm[1], /^name: design$/m);
  const description = fm[1].match(/^description: (.+)$/m);
  assert.ok(description && description[1].length > 50 && description[1].length <= 1024);
  assert.ok(text.split('\n').length < 500, 'SKILL.md must stay short');
});

test('agents have valid frontmatter', () => {
  for (const file of readdirSync(join(REPO, 'agents'))) {
    const fm = readRepo(`agents/${file}`).match(/^---\n([\s\S]*?)\n---/);
    assert.ok(fm, `${file} without frontmatter`);
    assert.match(fm[1], /^name: [a-z-]+$/m, file);
    assert.match(fm[1], /^description: .{30,}$/m, file);
  }
});

// Paths cited between backticks that end in .md or .mjs.
function citedPaths(text) {
  return [...text.matchAll(/`([\w./-]+\.(?:md|mjs))`/g)].map((m) => m[1]);
}

function resolves(path, from) {
  const candidates = [
    join(ROOT, path),
    join(ROOT, 'knowledge', path),
    join(ROOT, 'knowledge', 'patterns', path),
    join(ROOT, 'knowledge', 'landing', path),
    join(ROOT, dirname(from), path),
  ];
  return candidates.some((c) => existsSync(c));
}

// Files that live in the user's project or are written by the scripts, not in the skill.
const PROJECT_FILES = new Set(['DESIGN-CONTEXT.md', 'DESIGN.md', 'PRODUCT.md', 'AGENTS.md', 'report.md', 'index.md']);

test('every path cited in SKILL.md, AGENTS.md, workflows, agents and templates exists', () => {
  // Paths are cited relative to the skill folder, wherever the citing file lives.
  const dirFiles = (base, dir) => readdirSync(join(base, dir)).map((f) => join(base, dir, f));
  const files = [join(ROOT, 'SKILL.md'), join(REPO, 'AGENTS.md'), ...dirFiles(ROOT, 'workflows'), ...dirFiles(REPO, 'agents'), ...dirFiles(ROOT, 'templates')];
  const missing = [];
  for (const absolute of files) {
    const file = absolute.startsWith(ROOT) ? absolute.slice(ROOT.length + 1) : absolute.slice(REPO.length + 1);
    for (const path of citedPaths(readFileSync(absolute, 'utf8'))) {
      if (path.includes('<') || path.startsWith('*') || PROJECT_FILES.has(path)) continue;
      if (!resolves(path, file)) missing.push(`${file} → ${path}`);
    }
  }
  assert.deepEqual(missing, []);
});

test('internal markdown links in the knowledge base exist', () => {
  const missing = [];
  const walk = (folder) => {
    for (const entry of readdirSync(join(ROOT, folder), { withFileTypes: true })) {
      const path = join(folder, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (entry.name.endsWith('.md')) {
        for (const m of read(path).matchAll(/\]\(([^)#\s]+\.md)(?:#[^)]*)?\)/g)) {
          if (/^https?:/.test(m[1])) continue;
          if (!existsSync(join(ROOT, folder, m[1]))) missing.push(`${path} → ${m[1]}`);
        }
      }
    }
  };
  walk('knowledge');
  assert.deepEqual(missing, []);
});

test('file and folder names are lowercase kebab-case ASCII', () => {
  const bad = [];
  const walk = (folder) => {
    for (const entry of readdirSync(join(REPO, folder), { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      const path = join(folder, entry.name);
      // Fixtures imitate real projects (App.tsx, package.json), so they follow those projects' conventions.
      if (path === join('evals', 'fixtures')) continue;
      const base = entry.name.replace(/\.(md|mjs|js|sh|ps1)$/, '');
      const allowed = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.test)?$/.test(base) || /^[A-Z][A-Z-]*$/.test(base);
      if (!allowed) bad.push(path);
      if (entry.isDirectory()) walk(path);
    }
  };
  walk('.');
  assert.deepEqual(bad, []);
});

test('CLAUDE.md imports AGENTS.md instead of being a symlink', () => {
  assert.equal(readRepo('CLAUDE.md').trim(), '@AGENTS.md');
});

test('both installers install the same skill name, agents and the shared agents skills folder, and can uninstall', () => {
  const sh = readRepo('install.sh');
  const ps = readRepo('install.ps1');
  assert.match(sh, /^NAME="design"$/m);
  assert.match(ps, /^\$Name = 'design'$/m);
  for (const text of [sh, ps]) {
    assert.match(text, /skills[\\/]design/, 'the skill lives in skills/design');
    assert.match(text, /\.agents[\\/]skills/, 'Codex and other agents read ~/.agents/skills');
  }
  assert.match(sh, /--remove/);
  assert.match(ps, /\[switch\]\$Remove/);
  assert.match(ps, /-ItemType Junction/);
});

test('the Claude Code plugin and marketplace point to this skill without pinning a version', () => {
  const plugin = JSON.parse(readRepo('.claude-plugin/plugin.json'));
  const marketplace = JSON.parse(readRepo('.claude-plugin/marketplace.json'));
  assert.equal(plugin.name, 'design');
  assert.equal(plugin.version, undefined, 'a pinned version stops updates; commits are the version');
  assert.deepEqual(plugin.skills, ['./skills/design']);
  assert.ok(existsSync(join(REPO, plugin.skills[0], 'SKILL.md')));
  assert.equal(marketplace.plugins.length, 1);
  assert.equal(marketplace.plugins[0].name, plugin.name);
  assert.equal(marketplace.plugins[0].source, './');
});

test('the Codex plugin and marketplace expose the skill from skills/', () => {
  const plugin = JSON.parse(readRepo('.codex-plugin/plugin.json'));
  const marketplace = JSON.parse(readRepo('.agents/plugins/marketplace.json'));
  assert.equal(plugin.name, 'design');
  assert.equal(plugin.version, undefined);
  assert.equal(plugin.skills, './skills/');
  assert.ok(existsSync(join(REPO, 'skills', 'design', 'SKILL.md')), 'Codex reads skills/<name>/SKILL.md');
  assert.deepEqual(marketplace.plugins, [{ name: 'design', source: { source: 'local', path: './' } }]);
});
