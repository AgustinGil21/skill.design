# Design systems

How a designer builds, governs and evolves a design system as a product maintained by an organization. A system is the
memory of decisions: it lets new work come out coherent without rethinking everything — as long as it is maintained,
adopted and allowed to change.

## What it is and why it matters

A design system is the set of tokens, components, patterns, guidelines and processes a team shares to build products
consistently. Its value:

- **Consistency** that people notice as quality and learn once.
- **Speed**: teams stop rebuilding buttons and spend time on real problems.
- **Quality at scale**: accessibility, states and edge cases solved once, reused everywhere.
- **A shared language** between design and engineering.

Its risks are equally real: a system that is too rigid blocks good solutions; one that is too loose becomes a
collection of exceptions; one that nobody maintains becomes a source of inconsistency.

## 1. Layers

1. **Primitive tokens**: the full palette, type scale, spacing, radii, shadows, durations (`--orange-500`,
   `--space-4`).
2. **Semantic tokens**: roles (`--color-action`, `--color-text-muted`, `--color-danger-bg`, `--radius-control`).
   Components use only these; changing a theme means changing this mapping.
3. **Components**: button, field, menu, dialog, table… with all their variants and states.
4. **Patterns**: combinations that solve tasks (a sign-up form, a filtered list, an empty state) — see
   [patterns](patterns/).
5. **Guidelines**: when to use what, voice, accessibility, examples and counterexamples, and the reasons.
6. **Process**: how the system is contributed to, reviewed, versioned and communicated.

## 2. Component, pattern or exception?

The most frequent system decision: someone needs something the system does not have.

| Situation | Decision |
| --- | --- |
| The need appears in several products or flows, with the same behavior | **A new component** (or a variant of an existing one) |
| The need is a combination of existing components solving a task | **A pattern**: documented composition, not a new component |
| The need is unique to one screen and unlikely to repeat | **A local exception**, documented, built from system parts |
| The need contradicts an existing component's behavior | **Question the need first**; if justified, evolve the component for everyone |

### Variant or separate component?

- **Variant** when the purpose, anatomy and behavior are the same and only appearance or size changes (a small
  button, a destructive button).
- **Separate component** when the behavior or purpose differs (a toggle is not a checkbox variant; a combobox is not
  a select variant).
- A component with a dozen variants is often three components or several undocumented exceptions.

### When to abstract

Abstract after the second or third real occurrence, not the first. Premature abstractions encode guesses; late ones
leave duplicates. When in doubt, keep a well-documented exception and revisit it.

## 3. Component contracts

Each component documents its behavior, not just its appearance:

- **Anatomy**: the parts and which are optional.
- **States**: default · hover · focus visible · active/pressed · selected · disabled · loading · error · empty ·
  read-only. Missing states get improvised in products.
- **Behavior**: keyboard interaction (following APG for complex widgets), focus management, what happens on
  overflow, how it responds to content length.
- **Content rules**: label length, truncation, wrapping, icons, number formats.
- **Accessibility**: role, name, states, announcements, contrast in every theme.
- **Composition limits**: what may be placed inside it and what may not (a button inside a link, a menu inside a
  tooltip).
- **Do and don't examples** with real content.

## 4. Rules that prevent disorder

- **One way to do each thing**: one primary button style, one way to show errors.
- **Small composable components and tokens for every reusable value**: see
  [components, tokens and code quality](35-components-tokens-and-code-quality.md).
- **Names by function**, not appearance (`button-danger`, not `button-red`).
- **Few variants.**
- **Accessibility inside the component** (keyboard, ARIA, contrast) so it is inherited — but remember that a component
  cannot guarantee accessibility on its own: the content, labels and composition chosen by each team can still create
  barriers. Test real usage, not only the component.
- **Document why**, not only what.
- **Version and announce changes**; deprecate with time and a migration path.

## 5. Using a library

- Use what established libraries solve well (accessibility, keyboard, focus) and **customize through tokens** rather
  than rewriting components.
- Keep the library's base behavior and give the product identity through typography, color, radii, spacing and brand
  moments.
- Avoid every product built with the same library looking identical: identity lives in tokens and in brand moments,
  not in reinventing the button.
- Track the library's updates; forking it creates a maintenance burden.

## 6. Themes

- Light, dark and high contrast as different mappings of the same semantic tokens.
- Different brands or clients (white label): change primitives and mappings, not components.
- Test each theme for contrast and for state combinations (selected + focused + error).
- Density modes (comfortable, compact) as token sets, tested with real content.

## 7. Content and localization in the system

- Components must handle the longest translations: labels that wrap, buttons that grow, tables with long headers.
- Right-to-left support: components use logical properties; directional icons mirror.
- Pluralization and variables are handled by the localization system, not by component code.
- Test components with pseudo-localization and real translations.

See [content and localization](24-content-and-localization.md).

## 8. Governance and contribution

A system is a product with users (the teams). It needs:

- **Owners**: a team or people accountable for quality and roadmap.
- **A contribution process**: how a team proposes a new component or change, how it is reviewed (design,
  accessibility, engineering), and how it is accepted or redirected.
- **A decision record**: why components look and behave as they do.
- **Support**: a channel for questions; office hours; examples.
- **Adoption metrics**: which products use which components and versions; where local overrides exist.

### Federated vs. centralized

| Model | How it works | Good for | Risk |
| --- | --- | --- | --- |
| **Centralized** | One team builds and owns the system | Strong consistency, smaller organizations | A bottleneck; distant from product needs |
| **Federated** | Product teams contribute; a core team curates | Large organizations, diverse products | Inconsistency without strong curation |

## 9. Design and code correspondence

- **One source of truth for tokens** exported to design tools and code.
- **Component names and props match** between the design library and the code library.
- **Documentation shows live code examples**, not only images.
- **Visual regression tests** catch unintended changes.
- **Accessibility tests** run on components in isolation and in composed examples.

See [handoff and engineering](27-design-handoff-and-engineering.md).

## 10. Migrations and deprecation

- **Version** the system (semantic versioning or similar) and publish change notes.
- **Deprecate before removing**: mark components deprecated, explain the replacement, give a timeline.
- **Provide codemods or migration guides** where possible.
- **Measure adoption** of new versions; support teams that lag.

## Signs the system is failing

- Loose values in code (`#3b82f6`, `13px`, `margin: 7px`).
- Duplicated "almost identical" components.
- Screens that look like different products.
- Nobody knows which version is current.
- Teams build around the system because contributing is too slow.
- Accessibility problems reappear in every product because the components are composed incorrectly.

## Worked comparison: unify three controls or keep them separate?

**Situation:** three product teams built their own "segmented choice" controls: one for switching views (list/board),
one for filtering by status, one for choosing a payment frequency in a form.

**Over-unified decision.** One "SegmentedControl" component with variants for all three. It ends up with flags for
"acts as tabs", "acts as filter", "acts as radio group", each with different keyboard behavior and semantics. Teams
misuse the flags; screen readers announce view switching as form choices.

**Considered decision.**

- View switching between panels of the same context is a **tabs** pattern (tab semantics, arrow keys).
- Filtering a list is a **toggle button group** (pressed states, the list updates with an announced count).
- Payment frequency in a form is a **radio group** styled as segments (form semantics, a single value submitted).
- Shared **visual tokens** give all three the same look; their **behavior and semantics** differ because their
  purposes differ.
- The system documents when to use each, with examples.

The trade-off: three components to maintain instead of one, accepted because merging them would make every use
slightly wrong.

## Common mistakes

- **Building components before understanding repeated needs.**
- **Variants that hide different behaviors.**
- **Assuming accessible components guarantee accessible products.**
- **No contribution path**, so teams fork.
- **No deprecation plan**, so old versions live forever.
- **Design and code drifting apart.**

## Checklist

- [ ] Tokens are layered (primitive → semantic) and components use only semantic tokens.
- [ ] Each component has a documented contract: anatomy, states, behavior, content rules, accessibility, composition
      limits.
- [ ] Component vs. pattern vs. exception decisions follow explicit criteria.
- [ ] Themes, densities and languages (including RTL) are tested with real content.
- [ ] Ownership, contribution and decision records exist.
- [ ] Design and code share token sources and names; visual and accessibility tests run.
- [ ] Versions, change notes and deprecation timelines are published.
