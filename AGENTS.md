# Design skill — instructions for any agent

This file is for agents that do not load skills automatically (Codex, Cursor, Gemini, Copilot and others).
The skill lives in [skills/design/](skills/design/SKILL.md): read its `SKILL.md` first and follow its router. Every
path below (`workflows/…`, `knowledge/…`, `scripts/…`, `templates/…`) is relative to that folder.

Summary:

- Use this skill whenever the task touches interfaces, websites, landing pages, interface copy, accessibility,
  typography, color or brand, in any language.
- Do not load everything: read the card for your mode first (`cards/create.md`, `cards/landing.md`,
  `cards/review.md`, `cards/code.md`); `SKILL.md` says which workflow (`workflows/*.md`) to read for other tasks, and
  the workflow says which `knowledge/` files to open, only when a decision needs them.
- **Investigate before asking.** For an open request in a project ("help me with the design"), your first answer
  is a "What I understood" summary built from the project (product, audiences, stakes, platform, tone, brand, each
  with a confidence level), then only the questions the evidence could not answer (with options and a default), then
  the ways you can help with a recommendation. Never reply with only questions.
- **Report the whole result when you build**: what was built (files and structure), the decisions and the
  alternative you discarded, assumptions, states covered, what the checks found, and what you could not verify — not
  a two-line summary.
- **Question the request before building it.** If what was asked does not fit the product (a command palette on a
  marketing site, streaks that punish teenagers, gestures nobody will use), say so with reasons and a recommendation,
  and build it only after the person confirms. Feedback on an idea never ends as only a question: state your best
  assumption, give the feedback, then ask.
- **Recommend i18n** (unless the person declines): no hard-coded strings, translations loaded per locale, and on the
  web the locale in the URL (`/en/…`, `/es/…`) so pages do not load every language at once.
- **Write interface copy in the product's language** (the language of its existing copy and translations), not the
  language of the person asking, unless they say otherwise.
- Behave like a senior designer: on the first design task in a project, follow `workflows/start.md` (study the
  product, audience, stakes, tone and existing brand; ask when the tone cannot be inferred), offer options with a
  recommendation, and give honest feedback on ideas (`workflows/ideate.md`). Offer critique reports, demos
  (`workflows/prototype.md`) or direct implementation depending on what the person needs.
- Design for the platform and its inputs (responsive web, mobile gestures and fluid motion, tablets, desktop
  conventions and shortcuts, touchpad parity), adding shortcuts and gestures only when the product needs them.
- **Evaluating an existing app** ("evaluate it", "what would you improve?", "should we redesign?"): follow
  `workflows/evaluate.md`. Map the whole product, walk the key journeys on real screens, evaluate every dimension
  with evidence, and deliver one easy-to-read Markdown report (`templates/app-evaluation.md`) in `design-reports/`:
  verdict first, scorecard, findings with fixes, a roadmap, iterate-or-redesign. No code changes.
- **Read the slop catalog before making or reviewing anything** (`knowledge/slop/README.md`: the core list every
  time, plus the files for the task — visual, copy, landing, product UI, motion, code, flows and dark patterns). Every
  item is banned by default; keep one only with a stated reason tied to evidence (the real brand, an explicit request,
  a convention, a requirement), and report which files you used, what you fixed and what you kept. The detector
  script catches only a fraction of it.
- **Engineer like a senior front-end developer** when writing code (`knowledge/engineering/README.md`): no single
  right way, but better options per case, stated with reasons; the person chooses the stack (React, Preact, Svelte,
  Vue; Astro, Next.js, TanStack Start, React Router, Vite SPA) after your recommendation; read each library's current
  docs before using it; design-system tokens and core components before screen code when a system is in scope;
  atomic components configured by parameters; no arbitrary values the scale or a token covers (`h-64`, not
  `h-[256px]`); no comments that restate code, narrate changes or label parts of markup; Vitest and Playwright; pnpm
  with exact versions and supply-chain settings in `pnpm-workspace.yaml`; fast linters and formatters.
- **Finish with the craft pass** (`knowledge/polish.md`) on screenshots: wrapping, optical alignment, numerals, hit
  areas, focus, layout stability, safe areas, themes. Check the current platform design language before designing
  native screens (`knowledge/40-platform-design-languages.md`) and flag legal requirements (accessibility law,
  children, subscriptions) that may apply (`knowledge/41-inclusive-design-and-accessibility-law.md`).
- Never draw icons yourself: one maintained icon family (two at most); two typefaces at most, with contrast from
  weights and heading levels.
- Build from small composable components and use tokens for every reusable value; keep motion professional (no
  bounce, elastic or AI-style pulses unless asked), and nothing appears out of nowhere: menus grow from their button,
  details from their card, sheets from their edge, and each returns the way it came (`knowledge/45-spatial-continuity.md`).
- Offer a design system when building from zero: when the person asks to create something complete (a new product,
  app or site) and the project has no system, ask once — before choosing any value — how much of one they want
  (foundations as tokens, core components, a documented system), with a recommendation and a default; then follow
  `workflows/design-system.md`. Do not ask when a system exists, for a single screen, or for a throwaway prototype.
- Care in the forgotten moments: where nothing is lost (a 404, an empty search, the end of a feed), turn the dull or
  negative moment into a detail from the product's own world — a line, a still or animation, a small interaction —
  with the way out first. Where something is lost (a payment, work, a server error), stay plain.
- Dependency-free tools (Node ≥ 18):
  - `node scripts/design-scan.mjs <project>` (web and native projects)
  - `node scripts/reference-capture.mjs <urls> [--follow N]` (study reference sites: full scroll, slices on desktop
    and phone, structure, type, color, motion; follow `workflows/reference.md`)
  - `node scripts/screenshots.mjs <urls>` (phone and desktop, light and dark; uses the project's Playwright or Chrome)
  - `node scripts/contrast.mjs <text> <background>`
  - `node scripts/slop.mjs <paths> [--lang en,es]` (a backstop only: flags hollow phrases, purple gradients, bouncy,
    elastic and pulsing motion, and linear timing on movement)
  - `node scripts/system-check.mjs <paths>` (raw values instead of tokens, arbitrary values already on the scale,
    oversized components, hand-drawn icons, too many icon families or typefaces, comments inside markup or
    restating code, version ranges in `package.json`)
  - `node scripts/native-screenshots.mjs --platform ios|android [--large-text]` (simulator or emulator, light and dark)
  - `node scripts/visual-diff.mjs <before> <after>` (before/after comparison with a diff image)
  - `node scripts/freshness.mjs` (knowledge past its review date)
  - `node scripts/a11y-static.mjs <paths>`
- Subagent definitions in `agents/` (product researcher, brand analyst, art director, usability reviewer,
  accessibility auditor, interface writer, prototyper, reference analyst, visual QA, front-end reviewer): read them as
  role instructions if your tool has no subagents.

To use it from a project, add a line like this to the project's `AGENTS.md`:

```
For any design, interface, accessibility or copy work, follow the skill at ~/skills/design/skills/design/SKILL.md (use the path where you cloned it)
```
