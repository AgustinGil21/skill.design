# Workflow: design system

For creating a design system, bringing order to a product that has none, or deciding whether a new build needs one.
The knowledge lives in `knowledge/design-system/`; this file is the order of work.

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step): a system expresses a product, an audience and a brand.

## When this workflow starts

- The person asks for a design system, a component library, tokens, a style guide or "a consistent look".
- **The person asks to create something complete from zero** — a new product, app, site, or a landing page that will
  grow — and the project has no system. Then step 1 is a question, asked once, before any value is chosen.
- An existing product shows drift (many button styles, raw values everywhere) and the person wants it fixed.

Skip the question, and go straight to building with what exists, when the project already has a system (extend it),
when the task is one screen or component, when it is a throwaway prototype, or when the person already answered.

## 1. Ask how much system (once)

Read `knowledge/design-system/01-deciding-scope.md`. From the evidence (is it going to grow, how many people, products,
platforms, brands; is there a library; who will maintain it), ask one question with the levels that fit, what each
produces, a recommendation and a default. Use the tool's question interface when available. Typical options:

1. **Full system** — tokens for every value in every mode, core components with all states, a documented system page.
2. **Foundations and core components** — tokens and the repeating components, documented in the code.
3. **Foundations only** — a token file.
4. **No system** — build directly.

Record the answer (in `DESIGN-CONTEXT.md` if the person keeps one) and say which level you are building.

## 2. Plan

Fill in `templates/design-system-plan.md`: level, principles, foundations, token tiers and modes, first components,
documentation home, source of truth, checks, owner. For a level-1 system, a few lines are enough.

## 3. Build in order

Follow `knowledge/design-system/07-building-from-zero.md` (path A for a new product, path B for an existing one):

1. Foundations as tokens — `knowledge/design-system/02-foundations-and-tokens.md`, with `knowledge/09-typography.md`
   and `knowledge/design-system/08-typography-in-the-system.md` (family roles, weights, italics, text styles),
   `knowledge/10-color.md`, `knowledge/17-composition-and-layout.md`.
2. A foundations page, checked in every mode before going on.
3. Core components in use × risk order — `knowledge/design-system/03-components-and-patterns.md` and
   `knowledge/35-components-tokens-and-code-quality.md`.
4. Patterns and templates for the first release's recurring tasks.
5. Documentation at the chosen level — `knowledge/design-system/04-documentation.md`, including the short rules file
   agents read.
6. Tooling only as much as the level needs — `knowledge/design-system/05-tooling-design-to-code.md`.
7. The product screens, built from the system; gaps resolved in the same change.

Respect the project's stack and conventions: tokens in the format it reads, components where its components live,
its tests and naming.

## 4. Verify

1. `node scripts/system-check.mjs <components and screens>`: no raw values, no oversized components, one icon family,
   two typefaces at most.
2. `node scripts/contrast.mjs` for every semantic text and non-text pair in every mode.
3. `node scripts/a11y-static.mjs` and `node scripts/slop.mjs` on what was built.
4. The foundations page and real screens on phone and desktop, light and dark, reduced motion, longest language
   (`node scripts/screenshots.mjs <urls>`).
5. `knowledge/06-review.md`.

## 5. Report

The level built and why; what the system contains (tokens, components, patterns, documentation) with file paths;
where its home is; the main decisions and the alternatives discarded; what was not built and the signals for the next
level; who should own it and the governance basics for its level
(`knowledge/design-system/06-governance-and-evolution.md`); what was verified and how.
