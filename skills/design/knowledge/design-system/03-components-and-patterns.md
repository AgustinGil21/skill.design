# Components and patterns

Components are where a system meets the people who build with it every day. Tokens make values consistent;
components make **behavior** consistent — keyboard support, states, errors, loading, the way a long label wraps. A
good component is chosen without thinking and used correctly without reading the docs; a bad one is copied, patched
and forked.

The contract every component documents (anatomy, states, behavior, content rules, accessibility, composition limits)
is in [18-design-systems](../18-design-systems.md). How to split code into small composable pieces is in
[35-components-tokens-and-code-quality](../35-components-tokens-and-code-quality.md). This file covers the system
decisions: what to build, in which order, with which API, and how components grow into patterns.

## What it is and why it matters

| Layer | What it is | Example | Owned by |
| --- | --- | --- | --- |
| **Primitive component** | The smallest reusable interface part with behavior | Button, text field, checkbox, icon, link | The system |
| **Composite component** | Several primitives with one purpose and shared behavior | Search field with suggestions, date picker, data table, dialog | The system |
| **Pattern** | A documented way of combining components to solve a task | A sign-up form, a filtered list, an empty state, a destructive confirmation | The system as guidance, built in products |
| **Template** | A page-level layout with slots | A settings page shell, a list-and-detail layout | The system or the product |
| **Screen** | A template with real content and data | The members list of a specific club | The product |

Brad Frost's atomic design names a similar ladder (atoms, molecules, organisms, templates, pages). The labels matter
less than the idea: **small parts with one responsibility compose into larger ones**, and each level has a different
owner and rate of change. Name components by purpose (`MemberCard`, `DateRangePicker`), not by chemistry.

## 1. The inventory: what to build

### For a product that exists

Run an **interface inventory**: capture every instance of each kind of element across the product (every button,
every field, every dialog, every color in use) and group them on one page. The point is not the catalogue; it is
the visible argument — twelve slightly different buttons in one view make the case for a system better than any
document, and show which variants are real needs and which are accidents.

For each group, record: how many variants exist, which differences are intentional (a destructive action, a compact
table) and which are drift, and where each lives.

### For a new product

List the screens and flows of the first release, then the elements each one needs. Count repetitions. Elements that
appear in several flows are the core kit; elements in one flow wait.

### What most products need first

| Group | Components | Why early |
| --- | --- | --- |
| Actions | Button (primary, secondary, tertiary or text, destructive), icon button, link | Every screen has them; inconsistent actions confuse hierarchy |
| Input | Text field, text area, select or combobox, checkbox, radio group, switch, field label, help and error text | Forms are where accessibility errors repeat most |
| Feedback | Inline message (banner), toast, empty state, skeleton or loading, progress | States are what screens skip first |
| Overlays | Dialog, popover, menu, tooltip | Focus management is hard; build it once |
| Structure | Card, list row, table, tabs, accordion, divider | Repeated content shapes |
| Navigation | Top bar or sidebar, breadcrumbs, pagination | Shapes every page |
| Identity and status | Avatar, badge or tag, status indicator | Small parts that drift fast |

Build what the first release uses, not this whole table.

## 2. Priority and order

Order by **use × risk**: frequent components first, and among them those where getting it wrong costs most
(accessibility, data loss, money).

1. Foundations rendered and checked ([02-foundations-and-tokens](02-foundations-and-tokens.md)).
2. Text styles, icon, button, link — the parts everything else uses.
3. Form controls with label, help and error, because forms concentrate accessibility requirements (1.3.1, 3.3.1,
   3.3.2, 4.1.2).
4. Feedback: inline message, toast, loading, empty state.
5. Overlays: dialog first (focus trap and return), then menu and popover.
6. Structure and navigation as the first screens need them.

A component is not "done" when it looks right in its default state. It is done when every state works with a
keyboard, a screen reader, long content, the longest language and every theme.

## 3. Choosing to build, adopt or wrap

| Option | When | Cost |
| --- | --- | --- |
| **Build from scratch** | Simple, stateless components (badge, card, divider) or a truly novel widget | All behavior and accessibility is yours to get right |
| **Wrap a headless library** | Complex widgets (combobox, date picker, menu, dialog, tabs) where behavior is the hard part | A dependency; you style everything with tokens |
| **Adopt a styled library and theme it** | A small team that needs breadth quickly | Identity takes discipline; overrides fight the library |
| **Copy-in component sources** | Code generators that place component source in the project | You own and maintain the copies; upstream fixes need merging |

Complex widgets should follow the WAI-ARIA Authoring Practices patterns for their keyboard model; a headless library
that already does is usually better than a hand-built one. Whatever is chosen, components are styled only with
semantic tokens, and the library's defaults are replaced, not left as the product's look.

## 4. Designing a component's API

The API (props, slots, events, variants) is a contract. Changing it later breaks every screen that uses it
([06-governance-and-evolution](06-governance-and-evolution.md)), so it deserves the same care as the visual design.

- **Props describe meaning, not appearance.** `variant="danger"` or `tone="critical"`, not `color="red"`;
  `size="compact"`, not `padding={6}`.
- **Few variants, each a real need.** A variant changes appearance or density within the same purpose and behavior.
  When behavior or semantics differ, it is a different component (a toggle is not a checkbox variant; tabs are not a
  segmented filter) — see the worked comparison in [18-design-systems](../18-design-systems.md).
- **Composition over configuration.** A card with `header`, `media`, `body` and `actions` slots outlives a card with
  twenty boolean flags. Flags multiply combinations nobody tested.
- **Content is passed, not hard-coded.** Labels, messages and aria labels come in as props in the product's language;
  components never contain user-facing strings, except defaults the localization system provides.
- **Controlled and uncontrolled**: form components accept a value and change handler, and work without them for
  simple use.
- **Accessible by construction**: a required accessible name (the icon button that cannot be rendered without a
  label), relationships wired internally (label to field, error to field with `aria-describedby`), state exposed
  (`aria-expanded`, `aria-pressed`, `aria-invalid`).
- **Escape hatches, sparingly.** A `className` or `style` prop lets teams adjust layout around the component; it must
  not be the way to change the component's own look, or the system stops being one.
- **Names match the design tool.** The same component name, the same variant names and the same property names in
  design and code ([05-tooling-design-to-code](05-tooling-design-to-code.md)).

## 5. States: the matrix

Every interactive component defines the states that apply to it. Missing states are the ones products improvise.

| State | Applies to | What it must show |
| --- | --- | --- |
| Default | All | The resting look with real content |
| Hover | Pointer-driven controls | A change that is never the only signal of anything |
| Focus visible | Everything focusable | A ring from the focus token, in every theme (2.4.7, 2.4.11) |
| Active or pressed | Buttons, toggles | Immediate feedback on press |
| Selected, checked, current | Toggles, tabs, rows, navigation | Not by color alone (1.4.1) |
| Disabled | Controls | Why it is disabled, when that is not obvious; prefer hiding actions people can never use |
| Read-only | Fields | Readable, selectable, clearly not editable |
| Loading or busy | Buttons, fields, regions | Keeps size; announces when it finishes |
| Error and invalid | Fields, groups, forms | Message in text, linked to the field (3.3.1) |
| Empty | Lists, tables, selects | What it means and what to do |
| Overflow | Anything with text | Wrap, truncate with full text available, or grow |

Combinations matter: selected + focused + error must still be distinguishable. Test the matrix in every theme and
density.

## 6. Content, localization and extremes

Components meet real content only in products, so the system has to stress them first:

- Labels much longer than the source language in languages that expand (German compound words in a narrow button),
  and much shorter in scripts that contract ([24-content-and-localization](../24-content-and-localization.md)); test
  with the real translations, not a guessed percentage.
- Right-to-left: logical properties for spacing and alignment; directional icons mirror, others do not.
- Numbers, dates and currencies formatted by the localization layer, never inside components.
- Zero, one and thousands of items; names of 2 and 60 characters; missing images.
- Pseudo-localization in the component workshop to catch truncation and hard-coded strings.

## 7. Patterns and templates

A pattern is guidance for a recurring task built from components, not a new component. Document a pattern when:

- The same task appears in several places (sign-up, inviting people, filtering a list, confirming a destructive
  action, empty states).
- Teams solve it differently and people notice.
- There is a reason behind the preferred solution worth writing down.

A pattern page says the problem, the preferred composition, the alternatives and when each applies, the states, the
copy by function, and links to real screens using it. This knowledge base's [patterns](../patterns/) folder is a
library of exactly this kind of reasoning; a product's system documents its own choices among those options.

Templates (page shells with slots) are worth building when several pages share a structure — settings, list and
detail, dashboards — so navigation, headings, spacing and loading behave the same everywhere.

### Component, pattern or local exception

| The need | Decision |
| --- | --- |
| Repeats in several places with the same behavior | A component or a variant |
| Is a combination of existing components for one task | A pattern |
| Is unique to one screen | A local component built from system parts, kept in the product |
| Contradicts an existing component | Question the need; if it holds, evolve the component for everyone |

Abstract on the second or third real occurrence, not the first.

## 8. Testing components

| Check | How | Catches |
| --- | --- | --- |
| States and behavior | Component tests per state; keyboard interaction tests | Broken focus, missing states |
| Accessibility | Automated checks on each story or example, plus manual screen reader and keyboard passes on complex widgets | Missing names, roles, contrast; automated tools catch only part of the problems |
| Visual | Screenshots of every variant and state, compared on change | Unintended visual changes |
| Content | Long text, RTL, pseudo-localized, empty, huge | Overflow, truncation, hard-coded strings |
| Themes | Every component in every mode | Missing tokens, contrast failures |

## Worked comparison

**Situation:** a club-management product needs buttons for "Save member", "Delete member", "Export CSV" and an icon
button to close panels.

**Configuration-heavy.** One `Button` with `color`, `bgColor`, `borderColor`, `rounded`, `small`, `large`, `outline`,
`icon`, `iconRight`, `loading`, `loadingText`, `fullWidth`, `danger`, `ghost`, `link` props. Teams combine
`danger` with `ghost` and `link`, nobody knows what that looks like, the close button passes an icon and no label,
and the screen reader announces "button".

**Considered.** `Button` with `variant` (`primary`, `secondary`, `tertiary`, `danger`), `size` (`default`,
`compact`), optional leading icon, and a `busy` state that keeps width and announces completion; `IconButton` as its
own component that requires a `label` prop; `Link` for navigation, not a button variant. Colors come from semantic
action tokens; the danger variant is documented for irreversible actions only, with the confirmation pattern linked.
Fewer combinations, each tested, and the inaccessible case cannot be written.

## Common mistakes

- **Building the whole catalogue** before any screen needs it.
- **Variants that hide different behavior.**
- **Components without states**, completed by each product differently.
- **Strings inside components**, which break localization.
- **Escape hatches used as the main API**, so every instance looks different.
- **A library's default look shipped as the brand.**
- **No inventory** before consolidating an existing product, so the system repeats the drift.

## Checklist

- [ ] The kit was chosen from an inventory (existing product) or from the first release's screens (new product).
- [ ] Order follows use × risk; the core kit exists before secondary components.
- [ ] Build, wrap or adopt was decided per component; complex widgets follow APG keyboard models.
- [ ] APIs use meaning-based props, few variants, composition over flags, no hard-coded strings.
- [ ] Every component covers its state matrix in every theme and density.
- [ ] Components were tested with long, translated, RTL, empty and extreme content.
- [ ] Recurring tasks are documented as patterns; local exceptions stay local until they repeat.
- [ ] Component, accessibility, visual and content checks run on every component.
