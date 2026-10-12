# Design skill

Senior product and interface design for any AI agent (Claude Code, Codex, Cursor and others), any project and any
product language: study the project, frame the problem, offer options, give honest feedback, create, review, audit
accessibility, write copy, define a brand, study reference sites and build landing pages — without generic design.

The knowledge is written in English and is language-independent by design: copy rules are stated by their function,
and every topic that touches text or data covers what changes across languages and locales.

## What's inside

```
skill.design/
├── skills/design/            The skill (the folder agents load)
│   ├── SKILL.md              Entry point: rules, router by task, knowledge map
│   ├── workflows/            How to work in each mode: start, ideate, prototype, reference, create, landing,
│   │                         review, accessibility, write, brand
│   ├── knowledge/            Foundations, patterns by screen type, landing pages and reasoned cases
│   ├── templates/            Brief, design context, brand audit, directions, idea feedback, reference report,
│   │                         states table, review report
│   ├── scripts/              Dependency-free tools (Node ≥ 18; reference-capture needs Node ≥ 22)
│   │   ├── design-scan.mjs        Evidence about a project, web or native
│   │   ├── system-check.mjs       Tokens, component size, hand-drawn icons, icon and type families
│   │   ├── reference-capture.mjs  Study reference sites: full scroll, slices, structure, type, color, motion
│   │   ├── screenshots.mjs        Phone and desktop, light and dark captures of a running interface
│   │   ├── contrast.mjs, slop.mjs, a11y-static.mjs
│   │   └── tests/                 Tests for the scripts and the repository structure
│   ├── WRITING-GUIDE.md      How the knowledge base is written
│   └── RESEARCH-GUIDE.md     How to research and add knowledge
├── agents/                   Subagents for Claude Code: product researcher, brand analyst, art director,
│                             usability reviewer, accessibility auditor, interface writer, prototyper, reference analyst
├── evals/                    Behavioral scenarios, rubric, fixtures and results
├── .claude-plugin/           Claude Code plugin and marketplace
├── .codex-plugin/            Codex plugin
├── .agents/plugins/          Codex marketplace
├── AGENTS.md / CLAUDE.md     Entry point for agents that read project instructions instead of skills
├── install.sh / install.ps1  Install from a clone (macOS, Linux / Windows)
└── LICENSE
```

## Install

Choose **one** way per agent; installing the same skill twice makes it load twice.

### Claude Code (plugin, updates itself)

```
/plugin marketplace add AgustinGil21/skill.design
/plugin install design@skill-design
```

Turn on updates once: `/plugin` → **Marketplaces** → `skill-design` → **Enable auto-update**. Without it, run
`/plugin marketplace update skill-design`. The skill shows up as `/design:design` and the agents as
`design:product-researcher`, `design:brand-analyst`, `design:art-director`, `design:usability-reviewer`,
`design:accessibility-auditor`, `design:interface-writer`, `design:prototyper` and `design:reference-analyst`.

### Codex (plugin)

```bash
codex plugin marketplace add AgustinGil21/skill.design
codex plugin add design@skill-design
```

To update: `codex plugin marketplace upgrade skill-design`. Codex has no subagent files; the skill and `AGENTS.md`
describe each agent's role so Codex can follow them itself.

### From a clone (any agent, or to edit the skill)

```bash
git clone https://github.com/AgustinGil21/skill.design.git ~/skills/design
cd ~/skills/design
./install.sh
```

It links `skills/design` into `~/.claude/skills/design` (Claude Code) and `~/.agents/skills/design` (Codex and other
agents that read the shared skills folder), and the agents into `~/.claude/agents/`. It also removes an old link in
`~/.codex/skills/design` left by earlier versions. Keep the clone where it is: `git pull` updates every agent at
once. To uninstall: `./install.sh --remove`.

#### Windows

```powershell
git clone https://github.com/AgustinGil21/skill.design.git $HOME\skills\design
cd $HOME\skills\design
powershell -ExecutionPolicy Bypass -File .\install.ps1
```

The skill is linked with a junction, so no admin rights are needed and `git pull` updates it. The agents are linked
when Developer Mode is on; otherwise they are copied, and `install.ps1` must run again after each `git pull` to
update them. To uninstall: `.\install.ps1 -Remove`. With WSL, use `install.sh`.

### Agents without skills support

Add this line to each project's `AGENTS.md` (or equivalent):

```
For any design, interface, accessibility or copy work, follow the skill at ~/skills/design/skills/design/SKILL.md (use the path where you cloned it)
```

## Use

It works like a senior designer joining your project: on the first task it studies the product, audience, stakes,
platform, tone and existing brand, tells you what it understood (and how sure it is), asks what it cannot infer, and
offers ways to help — a critique report, ideas and directions, feedback on your ideas, a quick demo, or building it.

Example requests, in any language:

- "Look at this project and tell me how you'd improve the design."
- "What do you think of adding a leaderboard for players?"
- "Give me three directions for the onboarding, and make a demo of the best two."
- "This is the reference page: https://… — also look at …/pricing. Study it and tell me what to take."
- "Design the billing screen with all its states."
- "Audit the accessibility of `src/components`."

Direct tools (from `skills/design/`):

```bash
node scripts/design-scan.mjs path/to/project
node scripts/reference-capture.mjs https://example.com --follow 5
node scripts/screenshots.mjs http://localhost:3000/ --out design-screenshots
node scripts/system-check.mjs src/
node scripts/contrast.mjs "#6b7280" "#ffffff"
node scripts/slop.mjs src/ --lang en,es
node scripts/a11y-static.mjs src/
```

## Maintain

- Test from `skills/design/`: `node --test scripts/tests/` (scripts, frontmatter, names, cited paths, installers and
  both plugin manifests).
- Research with `skills/design/RESEARCH-GUIDE.md`, write with `skills/design/WRITING-GUIDE.md`; add new files to the map
  in `SKILL.md` and to `knowledge/README.md`.
- Check behavior with the scenarios in `evals/`.
- `SKILL.md` must stay short: detail belongs in `workflows/` and `knowledge/`.

## License

MIT. See [LICENSE](LICENSE).
