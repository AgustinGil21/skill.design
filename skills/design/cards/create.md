# Card: create a screen, flow, component or demo

The compact version of `workflows/create.md` and `workflows/prototype.md`. Read this first; open the workflow and
knowledge files only when a step needs a decision this card does not settle.

## Sequence

1. **Context.** `DESIGN-CONTEXT.md` if it exists; otherwise the evidence step of `workflows/start.md`. Who does what,
   in which situation, with what at stake.
2. **Frame.** Restate the problem in one sentence without naming the solution. If the request does not fit the
   product, say so with reasons and wait for confirmation.
3. **Pattern.** Find the screen's pattern (`grep -il "<word>" knowledge/patterns/*.md`) and read its alternatives and
   "when not to use" section. For products imitating a famous one, `knowledge/39-product-archetypes.md`.
4. **Slop core list.** `knowledge/slop/README.md`. For flows with money, consent, sign-up or cancelling, also
   `knowledge/slop/07-flows-and-dark-patterns.md`.
5. **System.** Use the project's tokens and components. Building from zero: offer a design system once, before any
   value; if one is in scope, tokens and core components first (`workflows/design-system.md`).
6. **Platform.** Web sizes from 320 px up; mobile gestures and fluid motion; desktop conventions. Current design
   language for native targets (`knowledge/40-platform-design-languages.md`).
7. **Content and states.** Real content or `[data: …]`. A states table (`templates/states-table.md`): empty, loading,
   error, partial, no permission, offline, conflict, success.
8. **Build.** Read `cards/code.md` before writing code.
9. **Look.** Screenshots on phone and desktop, light and dark (`scripts/screenshots.mjs`); the craft pass
   (`knowledge/polish.md`).
10. **Final pass.** Slop area files for what you touched; `knowledge/06-review.md`; the scripts.
11. **Report** everything (below).

## Non-negotiables

- One primary action per context; buttons name their outcome.
- Accessible: semantic elements, keyboard, visible focus, AA contrast, never color alone, reduced motion.
- Copy in the product's language and form of address; strings in locale files.
- One icon family, never drawn by hand; two typefaces at most.
- Motion short and decelerating, settling once; no bounce, overshoot, pulses or decorative loops.
- Declining, cancelling and leaving as easy as accepting.
- Demos: label simulated data in the demo; never hand back a demo you have not looked at.

## Decide, don't decorate

For each significant choice (layout, component, interaction), name the alternative you considered and what each
costs. If two directions are both reasonable and the choice changes the work, show both (`workflows/prototype.md`)
or ask.

## Open a file only when

| You need to decide… | Open |
| --- | --- |
| Layout, grid, density | `knowledge/17-composition-and-layout.md` |
| Type or color values | `knowledge/09-typography.md` · `knowledge/10-color.md` |
| Copy for errors, empty states, confirmations | `knowledge/04-interface-writing.md` |
| Which layer (modal, sheet, popover, page) | `knowledge/patterns/dialogs-overlays-and-confirmations.md` |
| An animation technique | `knowledge/37-animation-techniques.md` |
| Something for children, health, money or law | `knowledge/41-inclusive-design-and-accessibility-law.md` |

## Report

What was built (files and structure) · the decisions and the alternatives discarded · assumptions · states covered ·
slop catalog files used, what was fixed and what was kept with its reason · craft pass findings · what the scripts
found · the verification level reached and what could not be verified.
