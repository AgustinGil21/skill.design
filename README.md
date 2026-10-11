# Design skill

Expert interface and website design for any AI agent (Claude Code, Codex, Cursor and others), any project and any
product language: frame the problem, create, review, audit accessibility, write copy, define a brand and build
landing pages, without generic design.

The knowledge is written in English and is language-independent by design: copy rules are stated by their function,
and every topic that touches text or data covers what changes across languages and locales (plurals, text
expansion, formality, right-to-left scripts, formats).

## What's inside

```
design/
├── SKILL.md              Entry point for agents: rules, router by task, knowledge map
├── AGENTS.md             Entry point for agents that do not load skills (Codex, Cursor, etc.)
├── WRITING-GUIDE.md      How the knowledge base is written and extended
├── workflows/            How to work in each mode
│   ├── create.md         Screens, flows, components
│   ├── landing.md        Landing pages and marketing sites
│   ├── review.md         Critique and review with severities
│   ├── accessibility.md  WCAG 2.2 AA audit
│   ├── write.md          Interface and marketing copy, in any language
│   └── brand.md          Identity, typography, color, voice
├── knowledge/            The base: foundations, patterns by screen type, landing pages and reasoned case studies
├── agents/               Subagents: art director, usability reviewer, accessibility auditor, interface writer
├── templates/            Brief, states table, review report
├── scripts/              Dependency-free tools (Node ≥ 18)
│   ├── contrast.mjs      WCAG contrast (HEX, rgb, oklch)
│   ├── slop.mjs          Generic copy and styles, with per-language lexicons
│   ├── a11y-static.mjs   Static accessibility in HTML/JSX/Astro/Vue/Svelte/CSS
│   ├── lexicon/          Hollow-phrase lists per language (en, es, pt, fr, de)
│   └── tests/            Tests for the scripts and the skill's structure
└── install.sh            Installs with symbolic links (Claude Code and Codex)
```

## Install

```bash
cd ~/Documents/Programming/Skills/design
./install.sh
```

It creates symbolic links at `~/.claude/skills/design`, `~/.claude/agents/*.md` and, if Codex exists,
`~/.codex/skills/design`. This folder stays the single source: what you edit here shows up everywhere.
To uninstall: `./install.sh --remove`.

For other agents, add this to each project's `AGENTS.md` (or equivalent):

```
For any design, interface, accessibility or copy work, follow the skill at ~/Documents/Programming/Skills/design/SKILL.md
```

## Use

Example requests, in any language (the skill picks the workflow):

- "Design the billing screen with all its states."
- "Review this screen and tell me what to fix first." (with a screenshot, URL or code path)
- "Audit the accessibility of `src/components`."
- "Build a landing page for this product, creative and well animated."
- "Fix the error messages of the sign-up form." (the copy is written in the product's language)
- "Define typography and a palette for this brand."

Direct tools:

```bash
node scripts/contrast.mjs "#6b7280" "#ffffff"
node scripts/slop.mjs src/ --lang en,es
node scripts/a11y-static.mjs src/
```

## Maintain

- Test: `node --test scripts/tests/` (checks the scripts, the frontmatter, file naming and that every cited path
  exists).
- Add knowledge following `WRITING-GUIDE.md`; new patterns go in `knowledge/patterns/` and are added to the map in
  `SKILL.md` and to the index `knowledge/README.md`.
- Add a language to the slop detector with a new file in `scripts/lexicon/` (see its README).
- `SKILL.md` must stay short: detail belongs in `workflows/` and `knowledge/`.
