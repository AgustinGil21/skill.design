# Workflow: create a screen, flow or component

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step) so audience, stakes, tone and brand guide every decision below.

## 1. Frame the problem (do not skip)

- Who uses it, in which situation, and what are they trying to achieve? What happens before and after this screen?
- Is the request a solution in disguise ("add a filter") for a problem that could be solved better another way?
  Restate the problem in one sentence before designing (`knowledge/20-problem-framing.md`).
- Which real data will it show? Ask for it or read it from the code or API.
- Which constraints exist? Stack, component library, existing tokens, languages and locales, platform.
- Read the project's existing code and design: **the project's system wins** over personal taste.
- If something critical is missing, ask once and concretely; otherwise decide, and state the assumption.

Fill in `templates/brief.md` (mentally or in writing, depending on size).

## 2. Find the pattern and model the information

- Open the matching file in `knowledge/patterns/` (see the map in `SKILL.md`).
- If a design exists in Figma (or another design tool) and a tool can read it, read it first and adapt it to the
  project's components and tokens. For unfamiliar screen types, search live references when a Mobbin tool is
  available (`knowledge/34-references-and-design-tools.md`).
- Read its "questions to ask before deciding" and answer them for this case.
- If the screen organizes several objects or sections, sketch the objects, their relationships and the words the
  person uses for them (`knowledge/22-information-architecture.md`).

## 3. Generate alternatives and decide

- Produce at least two genuinely different structures (not two color variations of the same one).
- Compare them on the criteria that matter for this task: frequency, risk, reversibility, data volume, devices,
  accessibility, effort to build (`knowledge/21-decisions-and-tradeoffs.md`).
- Choose, and write down what you gave up and what would make you change your mind.

## 4. Structure

- Re-read `knowledge/00-principles.md` if it is not fresh.
- Define the hierarchy: what is seen first, what is the primary action, what stays hidden until needed.
- Use progressive disclosure (`knowledge/03-usability.md`).
- For data or processes, fill in `templates/states-table.md` **before** building
  (`knowledge/23-states-transitions-and-concurrency.md`, `knowledge/08-real-state-and-verification.md`).

## 5. Write the copy

- Titles, buttons, empty states, errors and confirmations with `knowledge/04-interface-writing.md`, in the product's
  language and form of address (`knowledge/24-content-and-localization.md`).
- Buttons name the outcome of the action; errors say what happened and how to continue.
- Check the copy with the longest realistic values and, if the product is multilingual, with the longest language.

## 6. Apply the visual system

- Use the project's tokens. With no system: `knowledge/18-design-systems.md` to create a minimal one (color, type,
  spacing, radii) and `knowledge/09-typography.md`, `knowledge/10-color.md`,
  `knowledge/17-composition-and-layout.md` to choose values.
- Hierarchy through size and weight before color; space to group before borders.
- Icons from a single set, with a text label when their meaning is not universal
  (`knowledge/19-imagery-icons-and-illustration.md`).

## 7. Build accessibility in while building

- Semantic HTML, accessible names, visible and ordered focus, contrast, announced state changes.
- Complex widgets following the ARIA Authoring Practices patterns (see `knowledge/15-advanced-accessibility.md`).
- Motion only with a purpose, honoring `prefers-reduced-motion`.

## 8. Implement

- Follow the repository's conventions (structure, naming, tests, package manager).
- Existing library components before new ones; customize through tokens.
- **Compose from small components**: screens compose sections, sections compose components, components compose
  primitives; data and logic in screens or hooks, presentational components fed by props. No giant screen
  components (`knowledge/35-components-tokens-and-code-quality.md`).
- **Tokens for every reusable value**: colors, spacing, sizes, radii, type, shadows, durations, easing, z-index. Use
  the project's existing tokens; add missing ones in its format instead of writing raw values.
- **Motion**: decelerating, settles once, with a reduced version; no bounce, elastic, overshoot or AI-style pulses
  unless asked (`knowledge/landing/06-motion.md`).
- Write or update tests if the project has them.

## 9. Verify and close

1. `node scripts/a11y-static.mjs <touched files>`, `node scripts/slop.mjs <touched files>` and
   `node scripts/system-check.mjs <touched files>` (raw values, arbitrary values, oversized components).
2. Contrast of any new color pair with `node scripts/contrast.mjs`.
3. Look at the real result: capture it with `node scripts/screenshots.mjs <urls>` or a browser tool and review the
   images (`knowledge/33-looking-at-the-real-interface.md`); check keyboard, 200 % zoom, 320 px width, dark mode if
   it exists, reduced motion, the longest locale. Compare with screenshots taken before the change.
4. Go through `knowledge/06-review.md`.
5. Report what was done, which assumptions were made, which alternative was discarded and why, and which level of
   verification was reached.
