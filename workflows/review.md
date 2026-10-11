# Workflow: review or critique an existing design

Works for screenshots, prototypes, URLs or code. The result is an actionable report, not an opinion.

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step) so audience, stakes, tone and brand guide every decision below.

## 1. Context

- Which task does the screen solve, and for whom? What should the review achieve (launch, improve conversion,
  clean up)?
- With code: read the components, styles and copy, and **look at the real interface** whenever possible:
  `node scripts/screenshots.mjs <urls>` (phone and desktop, light and dark) or a browser tool
  (`knowledge/33-looking-at-the-real-interface.md`). If design files exist and a tool can read them, compare design
  and build. When live references help explain an alternative, cite them (`knowledge/34-references-and-design-tools.md`).
- With an image: describe what you see before judging it.
- Separate what you can observe from what you are inferring (`knowledge/16-research-and-testing.md`).

## 2. Passes (in this order)

1. **Purpose and structure**: is it clear in a few seconds what this is and what to do? Is there one primary
   action? Is the underlying problem framed correctly? (`knowledge/00-principles.md`,
   `knowledge/20-problem-framing.md`, `knowledge/07-process.md` → "Critique").
2. **Information architecture**: are the objects, names and grouping the ones the person expects?
   (`knowledge/22-information-architecture.md`).
3. **Heuristics**: Nielsen's ten and the UX laws, including where they conflict (`knowledge/03-usability.md`).
4. **Pattern for the screen type**: compare with the matching file in `knowledge/patterns/`, including its "when
   not to use it" section.
5. **States**: empty, loading, error, partial, permissions, offline, conflict
   (`knowledge/23-states-transitions-and-concurrency.md`, `knowledge/08-real-state-and-verification.md`).
6. **Copy**: clarity, verbs, errors, tone, and how it holds up in other languages
   (`knowledge/04-interface-writing.md`, `knowledge/24-content-and-localization.md`).
7. **Visual**: hierarchy, type, color, spacing, alignment, consistency (`knowledge/05-visual-system.md`,
   `knowledge/09-typography.md`, `knowledge/10-color.md`, `knowledge/17-composition-and-layout.md`).
8. **Slop**: generic signals (`knowledge/01-anti-slop.md`, `knowledge/13-human-design.md`) plus
   `node scripts/slop.mjs`. A signal is a question, not a verdict. In code, also run `node scripts/system-check.mjs`
   (raw values instead of tokens, oversized components) and look for gimmicky motion.
9. **Quick accessibility**: contrast, focus, keyboard, names (`knowledge/02-accessibility.md`) plus
   `node scripts/a11y-static.mjs`. For a full audit, follow `workflows/accessibility.md`.
10. **Ethics**: dark patterns, undue pressure (`knowledge/12-psychology-and-ethical-persuasion.md`).

For landing pages, add `knowledge/landing/08-review.md`.

## 3. Severity (from `knowledge/06-review.md`)

- **Critical**: blocks the task, excludes people, misleads, or causes irreversible harm.
- **High**: causes frequent errors or abandonment.
- **Medium**: annoys or confuses, with a way out.
- **Low**: polish.

A rare but irreversible failure, or a barrier for a minority of people, is not downgraded because it is infrequent.

## 4. Report

Use `templates/review-report.md`:

- A three-line summary: the best, the worst, the first thing to fix.
- Findings ordered by severity, each with **evidence** (where: screenshot, URL or file and line), **why it
  matters** (principle or criterion) and a **concrete fix** (new copy, structural change, token value). When the
  fix is a trade-off, name what it costs.
- What works well (so it does not get broken).
- What was checked and how (script, by hand, with screenshots), and what was not evaluated.
- Judge against the design context (audience, stakes, tone, brand), and say which kind of judgment each finding is:
  requirement, evidence, principle, convention or taste (`knowledge/31-critique-feedback-and-options.md`).

For large reviews, run `usability-reviewer`, `accessibility-auditor` and `interface-writer` in parallel and merge
their findings into one report, removing duplicates and re-ranking by impact. Offer to save the report as a Markdown
file in the project (for example in a `design-reports/` folder, named with the date) when the person may share it.

## 5. What next

Close by offering the next step that fits the findings: fix the top issues now, show a demo of the proposed
structure (`workflows/prototype.md`), explore directions for a deeper redesign (`workflows/ideate.md`), or test with
people first.

## 6. If you also have to fix it

Apply the highest-severity fixes first, within the existing system, and re-run the scripts and the checks that
found the problem.
