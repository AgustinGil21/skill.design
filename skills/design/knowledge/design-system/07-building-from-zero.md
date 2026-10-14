# Building a system from zero

The method, step by step, for two starting points: a **new product** with nothing yet, and an **existing product**
that grew without a system. Each step names its output, so the work can stop at any level
([01-deciding-scope](01-deciding-scope.md)) and still leave something complete.

## What it is and why it matters

Most failed systems were built in the wrong order: a component library before the foundations were decided, a docs
site before any component existed, a token pipeline before anyone agreed on names. The order below makes each step
rest on the one before, and keeps every intermediate state usable.

Timelines vary widely. One agency reports two to four months for a functional first version of a system (foundations,
basic components, documentation) for a site of medium complexity, growing incrementally after that. For an agent
building a level-1 or level-2 system for a new product, the same steps fit in the first delivery, because the scope
is smaller — not because the steps are skipped.

## Path A: a new product

### Step 0. Ask and set the level

Read the project and the request; ask how much system the person wants, with levels, a recommendation and a default
([01-deciding-scope](01-deciding-scope.md)). Record the answer. **Output**: the chosen level, written down.

### Step 1. Brief and brand input

The system expresses a brand and serves an audience; it cannot be designed without them.

- Product, audiences, jobs, stakes, tone and platforms (`workflows/start.md`, `templates/design-context.md`).
- The brand: existing assets to derive from, or a direction to choose first (`workflows/brand.md`).
- Principles: three to five decisions with consequences for this product ("dense, calm screens for admins who work
  in tables all day; expressive moments only on the public site").

**Output**: a brief (`templates/brief.md`) and the system plan (`templates/design-system-plan.md`).

### Step 2. Foundations

Choose the values with the foundation files and write them as tokens
([02-foundations-and-tokens](02-foundations-and-tokens.md)):

1. Typography: one or two families with written roles, a weight map with meanings, an italic policy, a scale of six
   to eight sizes and the text styles built from them ([09-typography](../09-typography.md),
   [08-typography-in-the-system](08-typography-in-the-system.md)).
2. Color: neutral and brand ramps, status hues, semantic roles, light and dark complete, every pair checked for
   contrast ([10-color](../10-color.md)).
3. Space and size: a base unit, a spacing scale, control heights, touch targets, container widths.
4. Shape and depth: radii by role, borders, a few shadow levels, z-index layers.
5. Motion: durations, easings, a reduced mapping ([landing/06-motion](../landing/06-motion.md)).
6. Layout: breakpoints from content, columns, gutters, margins
   ([17-composition-and-layout](../17-composition-and-layout.md)).
7. Icons: one maintained family, sizes tied to text sizes
   ([19-imagery-icons-and-illustration](../19-imagery-icons-and-illustration.md)).

**Output**: the token source in the stack's format, primitives and semantics, every mode complete. Level 1 ends
here, plus a short comment block or page showing the values.

### Step 3. Foundations page

Render the foundations before building on them: color roles as swatches with names and contrast values, the type
scale with real product sentences, spacing, radii, shadows and motion samples, in every mode. Look at it on a phone
and a desktop, light and dark (`scripts/screenshots.mjs`). Problems are cheap to fix here and expensive later.

**Output**: a foundations view the team can see.

### Step 4. Core components

From the first release's screens, list the components that repeat; build them in use × risk order
([03-components-and-patterns](03-components-and-patterns.md)):

- Small, single-responsibility components that compose
  ([35-components-tokens-and-code-quality](../35-components-tokens-and-code-quality.md)).
- Only semantic tokens; no raw values.
- Every state in the matrix, every mode, keyboard and screen reader behavior.
- Meaning-based props, few variants, no hard-coded strings.
- Tests for states and behavior if the project has tests.

**Output**: the core kit. Level 2 ends here, plus a README per component group.

### Step 5. Patterns and templates

Document the recurring tasks of the first release (sign-up, a form with validation, a list with filters, an empty
state, a destructive confirmation) as compositions of the components, and build page templates where several pages
share a structure.

**Output**: patterns and templates the first screens use.

### Step 6. Documentation

Create the system's home at the chosen level: a system page in the app, a workshop, or a docs site, rendering real
components ([04-documentation](04-documentation.md)). Add the short rules file for agents. **Output**: level 3.

### Step 7. Build the product screens with the system

Build the screens from the system. Every time a screen needs something the system lacks, decide: a new component, a
variant, a pattern or a local exception — and update the system in the same change, not later.

### Step 8. Verify

- `scripts/system-check.mjs` on components and screens: no raw values, no oversized components.
- `scripts/a11y-static.mjs` and `scripts/slop.mjs` on what was built.
- Contrast for every role pair in every mode.
- The real interface on phone and desktop, light and dark, with reduced motion and the longest language
  ([33-looking-at-the-real-interface](../33-looking-at-the-real-interface.md)).

### Step 9. Hand over

Report the level built, what the system contains, where its home is, the decisions and alternatives, what was not
built and the signals for the next level. If the system will be maintained by others, include the governance basics
for its level ([06-governance-and-evolution](06-governance-and-evolution.md)).

## Path B: an existing product without a system

### Step 1. Audit

- **Interface inventory**: screenshots of every instance of each element type, grouped (buttons, fields, colors,
  type sizes, spacing, icons, dialogs, messages).
- **Code scan**: raw values, duplicated components, libraries in use (`scripts/design-scan.mjs`,
  `scripts/system-check.mjs`).
- **Brand reading**: what identity actually exists ([32-reading-an-existing-brand](../32-reading-an-existing-brand.md)).

**Output**: an inventory showing variants per element and which differences are intentional.

### Step 2. Decide the canonical set

For each group, choose the canonical version (or a new one) and map every existing variant to it: kept as a variant,
merged, or removed. Derive tokens from the decisions, not from averaging what exists: harvesting values from drift
makes the drift official.

### Step 3. Build foundations and components

As in Path A, steps 2–4, starting with the most repeated and most broken elements.

### Step 4. Migrate in slices

Replace old parts screen by screen or component by component, behind the same behavior, with visual checks before
and after. Large visual changes to a product people use every day follow the redesign guidance: announce, phase,
let people adjust ([29-redesigns-and-migrations](../29-redesigns-and-migrations.md)).

### Step 5. Prevent regression

Lint rules for raw values and deprecated components, documentation, an owner, and the update-the-system-in-the-same-
change habit.

## Worked comparison

**Request:** "Create the web app for our physiotherapy clinic: appointments, patient records and billing."

**Without a method.** The agent starts on the appointments screen, picks a teal, a font and spacing on the fly,
builds a button inline, then another slightly different one on the records screen. The billing screen needs a
table and dialog; the agent writes both from scratch with different focus handling. Dark mode is added at the end by
inverting colors; half the status colors fail contrast. Three screens, three products.

**With the method.** The agent reads the request, sees an app with several areas and health data, and asks how much
system the person wants, recommending level 2 with a system page (level 3) because staff will extend it. With the
answer, it writes a brief (calm, precise, private; reception staff on desktop, physiotherapists on tablets),
derives tokens (a neutral ramp tinted slightly toward the clinic's green, status roles tuned for light and dark, a
4 px spacing scale, a type scale of seven sizes, radii by role, quick durations), renders the foundations page and
checks contrast, then builds the core kit (button, icon button, field with label and error, select, date field,
checkbox, dialog, toast, table, empty state, tabs) with every state. The three areas are built from it; a
"time slot" picker needed only by appointments stays a local component, noted as a candidate. The report names the
level, the system page route, the decisions and what level 3 would add.

## Common mistakes

- **Starting with the docs site or the pipeline.**
- **Skipping the foundations page**, so problems surface inside components.
- **Harvesting tokens from an inconsistent product.**
- **Big-bang migrations** of products people depend on.
- **Building screens first and "extracting the system later"** — later rarely comes.

## Checklist

- [ ] The level was asked and recorded before the first value was chosen.
- [ ] The brief and brand input exist before foundations.
- [ ] Foundations are tokens, rendered on a page and checked in every mode before components.
- [ ] Core components cover their states, modes and accessibility, using only semantic tokens.
- [ ] Patterns, templates and documentation match the level.
- [ ] Screens are built from the system; gaps are resolved in the same change.
- [ ] Checks ran; the real interface was seen; the report names the level and the next signals.
- [ ] For an existing product: inventory, canonical decisions, migration in slices, regression guards.
