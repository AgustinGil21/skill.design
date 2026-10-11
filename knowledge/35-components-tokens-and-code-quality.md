# Components, tokens and code quality

How a professional designer-engineer builds interfaces that last: small components that compose into larger ones,
and variables (tokens) for every value that repeats. This is not a style preference. It is what makes a product
consistent, themeable, accessible and cheap to change — and what separates crafted work from generated work, which
tends toward one giant component full of hard-coded colors and magic numbers.

The project's conventions and the person's wishes come first: if the codebase organizes components differently, or
the person asks for something specific, follow that. Apply these rules whenever there is room to.

For the system side (layers, contracts, governance), see [design systems](18-design-systems.md); for handoff, see
[design handoff and engineering](27-design-handoff-and-engineering.md).

## Small components that compose

### The rule

Build interfaces from **small components with one responsibility**, assembled into larger ones. A screen is a
composition of sections; a section is a composition of components; a component is a composition of smaller parts.
Atomize by default.

```
BillingPage
├── PageHeader            (title, description, actions slot)
├── PlanSummaryCard
│   ├── PlanName
│   ├── PriceTag          (amount, currency, period: formatting lives here)
│   └── PlanActions
├── UsageMeter            (label, value, limit, status)
└── InvoiceTable
    ├── InvoiceRow
    │   └── StatusBadge   (reused everywhere a status appears)
    └── EmptyState        (reused across the product)
```

### Why

- **Consistency**: `StatusBadge` written once looks and behaves the same everywhere.
- **States in one place**: a small component can own its loading, empty, error and disabled states completely.
- **Accessibility inherited**: the accessible name, focus and ARIA live in the primitive and every composition gets
  them.
- **Change is cheap**: redesigning the price display touches `PriceTag`, not twelve screens.
- **Readability and review**: a 60-line component can be understood and tested; a 700-line one cannot.
- **Localization**: formatting (numbers, dates, plurals) lives in one component instead of being copied.

### How to split

Split when a part:

- has a **name** people would use ("the plan card", "the status badge");
- **repeats**, or will repeat, somewhere else;
- has **its own states** or behavior (loading, open/closed, error);
- mixes **concerns** (fetching data, deciding layout, formatting values, rendering markup).

Common seams:

| Layer | Responsibility | Example |
| --- | --- | --- |
| Primitives | One visual or interactive element, tokens only | `Button`, `Badge`, `Input`, `Icon` |
| Components | A meaningful unit built from primitives | `PriceTag`, `UserChip`, `UsageMeter` |
| Patterns | A task-level composition | `InviteForm`, `FilterBar`, `EmptyState` |
| Sections | A region of a screen | `PlanSummary`, `InvoiceHistory` |
| Screens | Data, routing and composition only | `BillingPage` |

Keep **data fetching and business logic** in screens or hooks; keep presentational components fed by props. That
makes them reusable and easy to show in every state (stories, demos, tests).

### Composition over configuration

Prefer slots and children over components with dozens of boolean props:

```tsx
// Hard to extend: every new need adds a prop
<Card title="Pro" showBadge badgeText="Popular" showFooter footerAction="Upgrade" compact bordered />

// Composable: parts that combine
<Card>
  <Card.Header>
    <PlanName>Pro</PlanName>
    <Badge tone="accent">Most popular</Badge>
  </Card.Header>
  <PriceTag amount={12} currency="EUR" period="month" />
  <Card.Footer>
    <Button variant="primary">Upgrade to Pro</Button>
  </Card.Footer>
</Card>
```

### When not to split

- Splitting a one-off piece into five files that are never reused adds indirection without value.
- Do not create a component per `div`. A component earns its existence by a name, a reuse, a state or a concern.
- Follow the size and structure conventions of the codebase; if the project keeps larger feature components, split
  within its conventions (subcomponents in the same file, hooks for logic).

Signs a component is too big: it is over a few hundred lines, it has many `useState` or effects for unrelated
things, it renders several unrelated regions, its props list keeps growing, or its name is vague (`Dashboard`,
`Main`, `Content`).

## Variables (tokens) for everything that repeats

### The rule

Every value that carries a design decision and can repeat lives in a variable: **colors, spacing, sizes, radii,
typography (families, sizes, weights, line heights), shadows, borders, opacity, durations, easing curves, z-index,
breakpoints**. Components reference tokens, never raw values.

```css
:root {
  /* Primitive tokens: the raw palette and scales */
  --burgundy-700: oklch(0.38 0.13 20);
  --gray-50: oklch(0.98 0.003 20);
  --space-2: 0.5rem;
  --space-4: 1rem;
  --radius-2: 0.5rem;
  --duration-fast: 150ms;
  --ease-out: cubic-bezier(0.2, 0, 0, 1);

  /* Semantic tokens: what components use */
  --color-action: var(--burgundy-700);
  --color-surface: var(--gray-50);
  --space-control-x: var(--space-4);
  --radius-control: var(--radius-2);
  --motion-feedback: var(--duration-fast) var(--ease-out);
}

.button {
  background: var(--color-action);
  padding-inline: var(--space-control-x);
  border-radius: var(--radius-control);
  transition: background-color var(--motion-feedback);
}
```

With Tailwind, define tokens in the theme (`@theme` or the config) and use the generated classes
(`bg-action`, `rounded-control`); avoid arbitrary values like `bg-[#7a0f1e]`, `rounded-[13px]` or `p-[18px]`. In
native code, use the platform's mechanism: a Flutter `ThemeData` and theme extensions, SwiftUI asset catalog colors
and environment values, Compose `MaterialTheme` and custom tokens, Android resources.

### Why

- **Consistency**: one burgundy, not five near-identical reds.
- **Themes and dark mode**: change the semantic mapping, not every component.
- **Accessibility**: fix a contrast problem once.
- **Brand evolution**: a rebrand is a token change, not a search-and-replace.
- **Communication**: designers and engineers share names (`--color-danger`, `--space-4`).

### Naming

- **Primitive** tokens describe the value (`--gray-200`, `--space-4`).
- **Semantic** tokens describe the role (`--color-text-muted`, `--color-danger-bg`, `--radius-control`).
- Components use semantic tokens. Names by function, never by appearance (`--color-danger`, not `--color-red`).

### Legitimate exceptions

- A one-time illustration or a data visualization palette may have its own local values — still declared once, at
  the top of the file, not scattered.
- `0`, `100%`, `1px` hairlines and layout fractions are not design decisions.
- Third-party embeds you do not control.
- When the person explicitly asks for a quick throwaway sketch; say that values are hard-coded.

### Introducing tokens into a project that has none

Do not stop a small task to build a full system. Add the tokens the task needs, in the project's format, near
existing global styles; reuse them; and propose a broader extraction as separate work. When the project already has
tokens, never add a raw value that duplicates one.

## Checking it

`node scripts/system-check.mjs <paths>` reports hard-coded colors and arbitrary values in components, raw values in
style attributes, and component files large enough to deserve splitting. It is a prompt for judgment, not a verdict:
token definition files and legitimate exceptions are expected to contain raw values.

## Worked comparison

**Weak**: a 640-line `Dashboard.tsx` that fetches data, formats money in three different ways, renders four
sections, and uses `#ef4444`, `#dc2626` and `bg-[#7a0f1e]` directly, with `rounded-[10px]` on some cards and
`rounded-xl` on others. Changing the brand color means editing 38 places; the empty state exists in one section
only.

**Strong**: `DashboardPage` (data and layout, 80 lines) composes `KpiRow`, `ActivityFeed`, `UpcomingEvents` and
`AlertsPanel`; each uses `Card`, `StatusBadge`, `MoneyAmount` and `EmptyState`. Colors, radii and spacing come from
semantic tokens. Changing the brand is one token; every section has its empty, loading and error state because the
primitives have them.

## Common mistakes

- One giant component per screen.
- Components configured by a growing list of booleans.
- Raw hex values and arbitrary utility values inside components.
- Tokens named by appearance (`--blue-button`).
- Duplicating a token with a slightly different value.
- Splitting into many tiny files that are used once.

## Checklist

- [ ] Screens compose sections; sections compose components; components compose primitives.
- [ ] Data and logic live in screens or hooks; presentational components take props.
- [ ] Every repeated design value is a token; components use semantic tokens.
- [ ] No arbitrary or raw values in components except declared, justified exceptions.
- [ ] The project's conventions and the person's wishes were respected.
- [ ] `scripts/system-check.mjs` run and findings fixed or justified.
