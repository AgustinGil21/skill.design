# Workflow: evaluate an existing app or site

For requests like "evaluate our app", "what would you improve?", "should we redesign?", "give me your opinion of the
product", "audit the whole thing". The result is **one Markdown report that a non-designer can read in ten minutes**,
written to a file in the project. This mode **never changes code or design files**: it reads, captures, judges and
recommends. Fixes come later, only if the person asks.

A screen-level critique ("review this form") follows `workflows/review.md`; this workflow evaluates the product as a
whole: its journeys, its system, its craft and its fitness for the people who use it.

## 0. Agree on the frame (briefly)

If the request leaves it open, infer and state it at the top of the report; ask only if a wrong guess would waste the
work:

- **Goal of the evaluation**: improve what exists, prepare a redesign, decide between redesign and iteration, prepare
  a launch, or a general health check.
- **Who uses the product and for what** (from `DESIGN-CONTEXT.md` or `workflows/start.md`, step 1).
- **Scope**: the whole product, or specific areas or platforms.

## 1. Inventory: know the whole product before judging any part

- **Map it**: routes or screens, navigation, roles and states (signed out, new account, full account, admin), from
  the code (router files, navigation components) and the running product. Use `node scripts/design-scan.mjs <project>`
  for the evidence summary.
- **Pick the key journeys** (three to six): the reason people come (the core task), getting started (sign-up and first
  use), the money or commitment moment (checkout, plan, cancel), recovering from a problem (error, support), and any
  journey the person is worried about.
- **Capture the real interface**: `node scripts/screenshots.mjs <urls>` on phone and desktop, light and dark, for every
  screen in the key journeys and the main states (empty, loading, error). Save the images next to the report so it can
  link them. If the app cannot run, say so and evaluate from code, marking findings as predictions.

## 2. Walk the journeys like the people who use them

For each key journey, step by step: what the person wants, what they see, what they must understand or decide, where
they hesitate or fail, and how it ends. Count steps, decisions and dead ends. Note the moments that work well.

## 3. Evaluate every dimension

Go through each dimension, using the files named only where a judgment needs them. Every finding needs evidence
(screenshot, URL, file and line, or a reproducible step) and a kind of judgment (requirement, evidence, principle,
convention or taste; `knowledge/31-critique-feedback-and-options.md`).

| Dimension | Questions | Open when needed |
| --- | --- | --- |
| **Product fit** | Does the product serve its people's real jobs? Does the tone fit the audience and the stakes? | `knowledge/20-problem-framing.md` · `knowledge/30-product-domains-and-tone.md` · `knowledge/39-product-archetypes.md` |
| **Structure and navigation** | Are objects, names and grouping what people expect? Can they always tell where they are and how to go back? | `knowledge/22-information-architecture.md` · `knowledge/patterns/navigation-and-settings.md` |
| **Key journeys** | Steps, friction, dead ends, defaults, confirmations, recovery | `knowledge/03-usability.md` · the pattern for each screen type |
| **States** | Empty, loading, error, partial, no permission, offline, conflict, success | `knowledge/23-states-transitions-and-concurrency.md` |
| **Copy** | Clarity, buttons that name outcomes, errors with recovery, consistent terms, the product's language | `knowledge/04-interface-writing.md` · `knowledge/24-content-and-localization.md` |
| **Visual system** | Hierarchy, type, color, spacing, consistency; is there a system or a collection of one-offs? | `knowledge/05-visual-system.md` · `knowledge/18-design-systems.md` |
| **Brand** | Is there a recognizable identity, used consistently? What equity must be kept? | `knowledge/32-reading-an-existing-brand.md` |
| **Generic and generated look** | Which slop catalog items appear? | `knowledge/slop/README.md` and its area files |
| **Craft** | Wrapping, alignment, numerals, hit areas, focus, layout stability, themes | `knowledge/polish.md` |
| **Accessibility** | Contrast, keyboard, focus, names, motion, text size; legal exposure in the product's markets | `knowledge/02-accessibility.md` · `knowledge/41-inclusive-design-and-accessibility-law.md` · `node scripts/a11y-static.mjs` |
| **Platforms and responsiveness** | Phone, tablet, desktop; touch and keyboard; current platform language for native apps | `knowledge/36-platforms-and-input.md` · `knowledge/40-platform-design-languages.md` |
| **Trust, ethics and law** | Honest pricing, easy cancelling, consent, no dark patterns, children's protections where relevant | `knowledge/slop/07-flows-and-dark-patterns.md` · `knowledge/patterns/cancellation-and-retention.md` |
| **Performance as experienced** | Slow first load, layout shifts, laggy interactions | `knowledge/engineering/07-performance.md` |
| **Code and design-system health** (when code is available) | Tokens or raw values, component size and reuse, comments, tests, dependencies | `knowledge/engineering/README.md` · `node scripts/system-check.mjs` |

## 4. Score, prioritize and decide

- **Scorecard**: rate each dimension from 1 to 5 with a one-line reason and the strongest evidence. Scores summarize;
  the findings carry the weight. Never present scores as measured data.
- **Severity per finding** (`knowledge/06-review.md`): Critical, High, Medium, Low, with confidence as a separate
  field.
- **Prioritize by impact and effort**: quick wins (high impact, low effort), next (high impact, more effort), later.
- **Iterate or redesign**: recommend one, with reasons. Redesign when the structure, the system or the product fit is
  wrong at the root; iterate when the foundations hold and problems are local
  (`knowledge/29-redesigns-and-migrations.md`). Name what a redesign must keep.

## 5. Write the report

Use `templates/app-evaluation.md` and save it as `design-reports/design-evaluation-<YYYY-MM-DD>.md` in the project
(create the folder; put the screenshots in `design-reports/screenshots/`). It is the only file this workflow writes.
If the person said not to write files, give the same report in the reply.

Readability rules, because the reader is often not a designer:

- **Written in the person's language**, in plain words; design terms explained in a few words the first time.
- **The answer first**: the verdict, the three most important problems and the three most valuable fixes fit on the
  first screen.
- **Scannable**: short sections, tables for findings and scores, one idea per bullet, no walls of text.
- **Concrete**: every finding points to where it happens (screenshot or location) and says what to do, not only what
  is wrong.
- **Balanced**: what works well is listed, so it is kept.
- **Honest**: what was checked, how, and what could not be verified (screens that would not load, states not
  reached, no testing with people).

## 6. Close in the conversation

A short summary in the reply (verdict, top three problems, top three fixes, the path to the report), then offer the
next steps: fix the quick wins, prototype the proposed structure (`workflows/prototype.md`), explore redesign
directions (`workflows/ideate.md`), or test the key journeys with people first. Do not start any of them until the
person chooses.
