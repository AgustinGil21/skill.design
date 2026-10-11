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
├── WRITING-GUIDE.md      How the knowledge base is written (structure and rules per file type)
├── RESEARCH-GUIDE.md     How to research and add knowledge: Mobbin, sources, understanding why designers decided
├── workflows/            How to work in each mode
│   ├── start.md          Study the project first: product, audience, stakes, tone, brand; ask; offer modes
│   ├── ideate.md         Options with a recommendation, and honest feedback on ideas
│   ├── prototype.md      Quick demos and prototypes
│   ├── reference.md      Study a reference site the person shares, and translate it to their project
│   ├── create.md         Screens, flows, components
│   ├── landing.md        Landing pages and marketing sites
│   ├── review.md         Critique and review with severities
│   ├── accessibility.md  WCAG 2.2 AA audit
│   ├── write.md          Interface and marketing copy, in any language
│   └── brand.md          Identity, typography, color, voice
├── knowledge/            The base: foundations, patterns by screen type, landing pages and reasoned case studies
├── agents/               Subagents: product researcher, brand analyst, art director, usability reviewer,
│                         accessibility auditor, interface writer, prototyper, reference analyst
├── templates/            Brief, design context, brand audit, directions, idea feedback, reference report, states
│                         table, review report
├── evals/                Behavioral scenarios and rubric to check the skill acts like a senior designer
├── scripts/              Dependency-free tools (Node ≥ 18)
│   ├── design-scan.mjs   Evidence about a project, web or native: product, stack, languages, brand, fonts, colors, copy
│   ├── system-check.mjs  Tokens, component size, hand-drawn icons, icon and type families
│   ├── reference-capture.mjs  Study reference sites: full scroll, slices, structure, type, color, motion
│   ├── screenshots.mjs   Phone and desktop, light and dark captures of a running interface
│   ├── contrast.mjs      WCAG contrast (HEX, rgb, oklch)
│   ├── slop.mjs          Generic copy and styles, with per-language lexicons
│   ├── a11y-static.mjs   Static accessibility in HTML/JSX/Astro/Vue/Svelte/CSS
│   ├── lexicon/          Hollow-phrase lists per language (en, es, pt, fr, de)
│   └── tests/            Tests for the scripts and the skill's structure
├── install.sh            Installs with symbolic links (Claude Code and Codex)
└── install.ps1           The same for Windows (PowerShell)
```

## Install

Requires Node 18 or later (only for the scripts).

### Claude Code plugin (recommended, updates itself)

In Claude Code:

```
/plugin marketplace add AgustinGil21/skill.design
/plugin install design@skill-design
```

Then turn on updates once: `/plugin` → **Marketplaces** → `skill-design` → **Enable auto-update**. From then on, new
versions arrive when a session starts. Without auto-update, run `/plugin marketplace update skill-design`.

The skill shows up as `/design:design` and the agents as `design:art-director`, `design:usability-reviewer`,
`design:accessibility-auditor` and `design:interface-writer`. It works the same on macOS, Linux and Windows.

Use either the plugin or the installers below, not both, or the skill will be loaded twice.

### From a clone (Codex, other agents, or to edit the skill)

```bash
git clone https://github.com/AgustinGil21/skill.design.git ~/skills/design
cd ~/skills/design
./install.sh
```

It creates symbolic links at `~/.claude/skills/design`, `~/.claude/agents/*.md` and, if Codex exists,
`~/.codex/skills/design`. This folder stays the single source: keep it where you cloned it, and `git pull` updates every agent at once.
To uninstall: `./install.sh --remove`.

#### Windows

```powershell
git clone https://github.com/AgustinGil21/skill.design.git $HOME\skills\design
cd $HOME\skills\design
powershell -ExecutionPolicy Bypass -File .\install.ps1
```

The skill folder is linked with a junction, so no admin rights are needed and `git pull` updates it. The agents are
linked when Developer Mode is on; otherwise they are copied, and `install.ps1` must run again after each `git pull`
to update them. To uninstall: `.\install.ps1 -Remove`. With WSL, use `install.sh` instead.

For other agents, add this to each project's `AGENTS.md` (or equivalent):

```
For any design, interface, accessibility or copy work, follow the skill at ~/skills/design/SKILL.md (use the path where you cloned it)
```

## Use

It works like a senior designer joining your project: on the first task it studies the product, audience, stakes,
tone and existing brand, tells you what it understood (and how sure it is), asks what it cannot infer, and offers
ways to help — a critique report, ideas and directions, feedback on your ideas, a quick demo, or building it.

Example requests, in any language (the skill picks the workflow):

- "Look at this project and tell me how you'd improve the design."
- "What do you think of adding a leaderboard for players?"
- "Give me three directions for the onboarding, and make a demo of the best two."
- "Design the billing screen with all its states."
- "Review this screen and tell me what to fix first." (with a screenshot, URL or code path)
- "Audit the accessibility of `src/components`."
- "Build a landing page for this product, creative and well animated."
- "Fix the error messages of the sign-up form." (the copy is written in the product's language)
- "Define typography and a palette for this brand."

Direct tools:

```bash
node scripts/design-scan.mjs path/to/project
node scripts/screenshots.mjs http://localhost:3000/ --out design-screenshots
node scripts/contrast.mjs "#6b7280" "#ffffff"
node scripts/slop.mjs src/ --lang en,es
node scripts/a11y-static.mjs src/
```

## Maintain

- Test: `node --test scripts/tests/` (checks the scripts, the frontmatter, file naming and that every cited path
  exists).
- Add knowledge by researching with `RESEARCH-GUIDE.md` and writing with `WRITING-GUIDE.md`; new patterns go in `knowledge/patterns/` and are added to the map in
  `SKILL.md` and to the index `knowledge/README.md`.
- Add a language to the slop detector with a new file in `scripts/lexicon/` (see its README).
- `SKILL.md` must stay short: detail belongs in `workflows/` and `knowledge/`.

## License

MIT. See [LICENSE](LICENSE).
