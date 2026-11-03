# Card: review, critique or audit

The compact version of `workflows/review.md` and `workflows/accessibility.md`. A review produces a report; it does
not edit files unless the person asked for fixes.

## A whole app, or one part?

- **"Evaluate our app", "what would you improve?", "should we redesign?", "give me your opinion"** about an existing
  product: follow `workflows/evaluate.md`. The deliverable is one easy-to-read Markdown report
  (`templates/app-evaluation.md`) saved in `design-reports/`; no code or design files change.
- **A specific screen, flow or component**: the sequence below.

## Sequence

1. **Scope and mode.** What is reviewed (screens, flow, page, code), for whom, and what the person wants back (a
   report, prioritized fixes, or fixes applied).
2. **Evidence.** Look at the real interface: screenshots on phone and desktop, light and dark, with realistic data. Say
   which findings come from screens, which from code, and which are predictions.
3. **Task and structure.** Can the person do the main task? Information architecture, hierarchy, the primary action.
4. **States.** Empty, loading, error, partial, no permission, offline, conflict, success.
5. **Heuristics and patterns.** `knowledge/03-usability.md`; the matching pattern's "when not to use".
6. **Copy.** Clarity, outcomes on buttons, errors with recovery, the product's language.
7. **Slop.** Every catalog file that applies, as a checklist (`knowledge/slop/README.md`); each item found is a
   finding unless the brand or an explicit decision justifies it.
8. **Craft.** `knowledge/polish.md` on the screenshots.
9. **Accessibility.** Contrast, focus, keyboard, names, motion; `workflows/accessibility.md` for a full audit.
10. **Ethics and law.** Dark patterns, consent, cancelling, children
    (`knowledge/slop/07-flows-and-dark-patterns.md`, `knowledge/41-inclusive-design-and-accessibility-law.md`).
11. **Code** (when code is in scope): `cards/code.md` checklist, `scripts/system-check.mjs`.

## How to write findings

Each finding: **what** (specific, located) · **evidence** (screenshot, code line, criterion) · **who it hurts and
how much** (severity from `knowledge/06-review.md`) · **fix** (concrete, in the project's system) · **confidence**.
Lead with the few findings that matter most. Name what works, so it is kept. Use `templates/review-report.md`.

## Avoid

Vague taste ("feels cluttered") without a mechanism · a flat list of 60 equal findings · fixes that ignore the
project's system · claiming WCAG conformance from automated checks · editing files during a report-only review.

## Scripts (backstops, not the review)

`node scripts/a11y-static.mjs <paths>` · `node scripts/slop.mjs <paths> --lang <languages>` ·
`node scripts/system-check.mjs <paths>` · `node scripts/contrast.mjs <fg> <bg>`. Say what was checked by script and
what by hand.
