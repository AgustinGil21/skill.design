# Design systems: the full guide

How a designer decides whether a product needs a design system, how much of one, and how to build, document, ship
and keep it alive. [18-design-systems](../18-design-systems.md) is the short overview (layers, component contracts,
themes, governance in brief); this folder is the depth behind it, written so an agent can create a system from zero
or bring order to one that grew by accident.

A design system is not a Figma file, a component library or a style guide on its own. It is **the set of decisions a
team agrees to reuse** — foundations expressed as tokens, components with contracts, patterns, guidance and the
process that changes them — **and the tools that make those decisions the easy path** in design and in code. A style
guide is consulted; a system is worked with.

## When this applies: ask before building something complete from zero

When the person asks to create something complete with no system behind it — a new product, an app, a whole site,
a landing page that will grow into a site, a full redesign that replaces the visual language — **ask once, before
choosing values, whether they want a design system and how much of one**. The answer changes how you build: whether
values become a token file, whether repeated parts become documented components, whether a page shows the system to
the team.

Do not ask when:

- The project already has a system (tokens, a component library, a documented style). Extend it; that is
  [18-design-systems](../18-design-systems.md) and the project's own rules.
- The task is one screen, one component or one fix inside an existing product.
- The work is an explicitly throwaway demo or prototype (`workflows/prototype.md`); mention in one line that it can
  become a system later.
- The person already answered, in this conversation or in `DESIGN-CONTEXT.md`.

How to ask, which levels to offer and what each produces: [01-deciding-scope](01-deciding-scope.md). The full
procedure is in `workflows/design-system.md`.

## Files

| File | What it answers |
| --- | --- |
| [01-deciding-scope](01-deciding-scope.md) | Does this product need a system? How much (five levels)? How to ask, and what changes with the answer |
| [02-foundations-and-tokens](02-foundations-and-tokens.md) | Which foundations, how to derive their values, token tiers, naming, modes and themes, the DTCG format |
| [03-components-and-patterns](03-components-and-patterns.md) | Inventory, priority and build order, component APIs, states, accessibility, patterns and templates |
| [04-documentation](04-documentation.md) | What a system page contains, component page anatomy, guidance that changes behavior, docs agents can read |
| [05-tooling-design-to-code](05-tooling-design-to-code.md) | Source of truth, token pipelines, design tool variables, code outputs per platform, tests and linting |
| [06-governance-and-evolution](06-governance-and-evolution.md) | Team models, contribution, versioning, deprecation, measuring adoption, keeping it alive |
| [08-typography-in-the-system](08-typography-in-the-system.md) | Family roles, the weight map and what each weight means, italic policy, text styles with every property, the type specimen, loading only what is used |
| [07-building-from-zero](07-building-from-zero.md) | The step-by-step method for a new product and for an existing product without a system, with a worked case |

## Reading order

- **Deciding whether to build one**: 01 only.
- **Building one for a new product**: 01 → 07 (the method) → 02 and 03 as you reach each step → 04 → 05.
- **Bringing order to an existing product**: 01 → 07 (the audit path) → 03 → 06.
- **Running a system that already exists**: 06, then 04 and 05 for the gaps you find.

## How this connects to the rest of the knowledge base

| Topic | Where the detail lives |
| --- | --- |
| Choosing typefaces, scales and measures | [09-typography](../09-typography.md) |
| Building palettes, contrast, dark mode | [10-color](../10-color.md) |
| Grids, spacing, density | [17-composition-and-layout](../17-composition-and-layout.md) |
| Small components and tokens in code | [35-components-tokens-and-code-quality](../35-components-tokens-and-code-quality.md) |
| Brand platform, voice, distinctive assets | [11-brand-and-identity](../11-brand-and-identity.md) |
| Motion values and what reads as generated | [landing/06-motion](../landing/06-motion.md) · [37-animation-techniques](../37-animation-techniques.md) |
| Handoff, design QA | [27-design-handoff-and-engineering](../27-design-handoff-and-engineering.md) |
| Redesigns and migrations | [29-redesigns-and-migrations](../29-redesigns-and-migrations.md) |
| Accessibility requirements | [02-accessibility](../02-accessibility.md) · [15-advanced-accessibility](../15-advanced-accessibility.md) |

The files here do not repeat those: they say which system decision each one feeds and how to turn it into tokens,
components and rules.
