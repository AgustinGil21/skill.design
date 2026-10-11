# Design skill — instructions for any agent

This file is for agents that do not load skills automatically (Codex, Cursor, Gemini, Copilot and others).
The full instructions are in [SKILL.md](SKILL.md): read it first and follow its router.

Summary:

- Use this skill whenever the task touches interfaces, websites, landing pages, interface copy, accessibility,
  typography, color or brand, in any language.
- Do not load everything: `SKILL.md` says which workflow (`workflows/*.md`) to read for the task, and the workflow
  says which `knowledge/` files to open.
- Dependency-free tools (Node ≥ 18):
  - `node scripts/contrast.mjs <text> <background>`
  - `node scripts/slop.mjs <paths> [--lang en,es]`
  - `node scripts/a11y-static.mjs <paths>`
- Subagent definitions in `agents/` (art director, usability reviewer, accessibility auditor, interface writer): read
  them as role instructions if your tool has no subagents.

To use it from a project, add a line like this to the project's `AGENTS.md`:

```
For any design, interface, accessibility or copy work, follow the skill at ~/skills/design/SKILL.md (use the path where you cloned it)
```
