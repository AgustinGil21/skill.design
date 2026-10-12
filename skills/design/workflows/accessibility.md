# Workflow: accessibility audit (WCAG 2.2 AA)

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step) so audience, stakes, tone and brand guide every decision below.

Read `knowledge/02-accessibility.md` and `knowledge/15-advanced-accessibility.md`.

## 1. Scope

- Which pages or flows (pick the critical ones: sign-up, purchase, the main task, forms).
- Target level (WCAG 2.2 AA by default).
- What can be tested: code, a running site, screenshots only. State the limit.
- Which languages and scripts the product ships in: right-to-left layouts, long translations and language
  declarations (`lang`) are part of the audit.

## 2. Automated (finds part of the problems, not all)

- `node scripts/a11y-static.mjs <folder or files>` on the code.
- If the site runs and the tools are available: axe, Lighthouse, Pa11y or similar.
- `node scripts/contrast.mjs` for every text/background pair and for component boundaries.

## 3. Manual (what really matters)

1. **Keyboard**: Tab and Shift+Tab through everything; Enter and Space activate; Escape closes; arrow keys in menus,
   tabs and lists; focus always visible and never hidden behind sticky elements; no focus traps.
2. **Structure**: one `h1`, headings in order, landmarks (`header`, `nav`, `main`, `footer`), a skip link.
3. **Names and states**: every control has a name that contains its visible text; `aria-expanded`,
   `aria-current` and errors associated with their fields.
4. **Forms**: visible labels, errors that explain how to fix them, no re-entering data, pasting allowed.
5. **Contrast and color**: 4.5:1 for text, 3:1 for large text and component boundaries; nothing conveyed by color
   alone.
6. **Zoom and reflow**: 200 % and 400 %, 320 px width, increased text spacing (1.4.12).
7. **Motion and time**: reduced motion, pause for anything that moves for more than 5 seconds, no flashing,
   extendable time limits.
8. **Media**: captions, transcripts, no autoplaying sound.
9. **Dynamic content**: changes announced (`role="status"`), focus handled when dialogs open and close and when the
   view changes.
10. **Touch**: targets of at least 24×24 CSS px (44 recommended), alternatives to dragging and complex gestures.
11. **Language**: page and passage languages declared, so screen readers pronounce each language correctly.
12. **Screen reader** (VoiceOver, NVDA or TalkBack) through the critical flow, if it can be run.

## 4. Report

With `templates/review-report.md`, adding for each finding:

- WCAG criterion (number and name) and level.
- Who is affected (see the table in `knowledge/15-advanced-accessibility.md`).
- Evidence (file:line, selector or screenshot) and how it was detected (script, manual, tool).
- The fix, with code when it applies.

Close with what could **not** be tested and why. Never claim "WCAG compliant" without manual testing; say "no
problems were found in what was tested".
