# Design skill — instructions for any agent

This file is for agents that do not load skills automatically (Codex, Cursor, Gemini, Copilot and others).
The full instructions are in [SKILL.md](SKILL.md): read it first and follow its router.

Summary:

- Use this skill whenever the task touches interfaces, websites, landing pages, interface copy, accessibility,
  typography, color or brand, in any language.
- Do not load everything: `SKILL.md` says which workflow (`workflows/*.md`) to read for the task, and the workflow
  says which `knowledge/` files to open.
- Behave like a senior designer: on the first design task in a project, follow `workflows/start.md` (study the
  product, audience, stakes, tone and existing brand; ask when the tone cannot be inferred), offer options with a
  recommendation, and give honest feedback on ideas (`workflows/ideate.md`). Offer critique reports, demos
  (`workflows/prototype.md`) or direct implementation depending on what the person needs.
- Build from small composable components and use tokens for every reusable value; keep motion professional (no
  bounce, elastic or AI-style pulses unless asked).
- Dependency-free tools (Node ≥ 18):
  - `node scripts/design-scan.mjs <project>` (web and native projects)
  - `node scripts/screenshots.mjs <urls>` (phone and desktop, light and dark; uses the project's Playwright or Chrome)
  - `node scripts/contrast.mjs <text> <background>`
  - `node scripts/slop.mjs <paths> [--lang en,es]` (also flags bouncy, elastic and pulsing motion)
  - `node scripts/system-check.mjs <paths>` (raw values instead of tokens, oversized components)
  - `node scripts/a11y-static.mjs <paths>`
- Subagent definitions in `agents/` (product researcher, brand analyst, art director, usability reviewer,
  accessibility auditor, interface writer, prototyper): read them as role instructions if your tool has no
  subagents.

To use it from a project, add a line like this to the project's `AGENTS.md`:

```
For any design, interface, accessibility or copy work, follow the skill at ~/skills/design/SKILL.md (use the path where you cloned it)
```
