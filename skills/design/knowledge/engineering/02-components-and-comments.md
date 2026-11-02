# Components and comments

How to write components that are small, reusable and readable without comments, and when a comment is worth
writing. Generated code tends toward the opposite: one large component, copied blocks with small differences, and
comments everywhere that narrate what the code already says.

The deeper reasoning on composition and tokens is in
[components, tokens and code quality](../35-components-tokens-and-code-quality.md).

## Atomic, reusable, configured by parameters

- **Atomize by default.** A component has one responsibility. A screen composes sections; a section composes
  components; a component composes primitives.
- **Whenever a piece repeats or will repeat, it is a component.** Two blocks of markup that differ only in text,
  icon, tone or size are one component with parameters, not two copies.
- **Differences are parameters**: props for data and behavior, a small variant set for visual differences (size,
  tone, emphasis), slots or children for content the consumer provides.
- **Parameters are few and meaningful.** Prefer `tone="danger"` over `red`, `size="sm"` over `small={true}`, and
  composition over a growing list of booleans. When a component needs more than about eight props or several
  booleans that combine, it is probably several components.
- **Sensible defaults**: the most common use needs no props beyond the content.
- **Accessible by construction**: names, roles, focus and keyboard behavior live in the component, so every use gets
  them.
- **States inside**: loading, disabled, error and empty are part of the component's API, not left to each screen.
- **Styled only with tokens** ([styling and Tailwind](03-styling-and-tailwind.md)).

### Signs a component should be split

- It is longer than a screen of code (around 150–200 lines for UI components is a common warning point; the
  `system-check` script flags 300 and 500).
- It fetches data **and** formats values **and** renders layout.
- Its markup has sections that would need a heading or a comment to be understood.
- It has nested ternaries or long `&&` chains in the markup.
- Parts of it are copied elsewhere.

### When not to split

- A part used once, short and only meaningful in its parent.
- Splitting would only move code into a file with a vague name (`Wrapper`, `Container2`).
- The framework expects colocation (a route file with its loader).

## Comments

### The rule

**Code says what and how; comments say why.** Write a comment only when the reason cannot be expressed by naming or
structure: a non-obvious decision, a workaround for a bug (with a link), a constraint from outside the code (a law, an
API limit, a browser quirk), a performance trick that looks wrong, or a public API's documentation.

### No comments inside a component's markup

In React (and in Vue, Svelte, Astro templates), **do not put comments inside the returned markup** to label its parts:

```tsx
return (
  <div>
    {/* Header */}
    <div className="…">…</div>
    {/* Plan details */}
    <div className="…">…</div>
    {/* Actions */}
    <div className="…">…</div>
  </div>
);
```

A comment that names a part of the markup is a component that was not extracted. Extract it and let the name do the
work:

```tsx
return (
  <PlanCard>
    <PlanHeader plan={plan} />
    <PlanDetails plan={plan} />
    <PlanActions plan={plan} onCancel={onCancel} />
  </PlanCard>
);
```

The same applies to HTML comments in templates and to section comments in long style blocks: if a section needs a
label, it is a unit with a name.

### Comments to delete (the AI-style and the unnecessary)

| Comment | Why it goes |
| --- | --- |
| `// Import React` / `// Imports` above imports | Restates the code |
| `// State for the modal` above `const [isOpen, setIsOpen] = useState(false)` | The name already says it |
| `// Handle click` above `handleClick` | Same |
| `// Render the component` / `// Return JSX` | Same |
| `// Loop through items` / `// Map over users` | Narrates syntax |
| `// Added error handling as requested` / `// Updated to use the new API` / `// Fixed the bug` | Change history belongs in commits, not in code |
| `// This is a reusable button component that…` paragraphs on obvious components | Documentation that repeats the props |
| `// TODO: implement` left in delivered code | Unfinished work presented as finished; open an issue or finish it |
| `// You can customize this…` / `// Feel free to…` / `// Note: …` addressed to the reader | Tutorial voice |
| Section banners (`// ===== HELPERS =====`) | Structure belongs in files and modules |
| Commented-out code | Version control keeps history |
| Emoji in comments | Noise |
| A comment on every line or every function | Over-commenting hides the comments that matter |

### Comments worth keeping

```ts
// Safari 17 fires `resize` before layout settles; read the size on the next frame.
requestAnimationFrame(measure);

// Amounts are stored in minor units; the API rejects decimals (see PAY-412).
const amountInCents = Math.round(amount * 100);
```

- **Public APIs** (a design-system component, a shared hook): a short doc comment (JSDoc/TSDoc) on what it is for,
  non-obvious props and an example, when the project documents components that way.
- **Regulatory or security reasons** that a future editor must not undo.

### Naming does most of the work

- Components are nouns of what they show (`InvoiceRow`, `UsageMeter`); hooks start with `use` and name what they
  provide (`useInvoices`); handlers name the intent (`onCancelSubscription`, not `onClick2`).
- Booleans read as questions (`isOpen`, `hasError`, `canEdit`).
- No abbreviations nobody would say aloud; no `data`, `info`, `item2`, `temp`.

## Markup and readability

- **Early returns** for loading, error and empty states instead of nested ternaries in the markup.
- **Derived values above the return**, named (`const isOverdue = …`), not computed inline in attributes.
- **Lists** keyed by stable IDs, not indexes.
- **Semantic elements** (`button`, `a`, `nav`, `main`, headings) before ARIA.
- **No inline styles** for values that belong to tokens.
- **Strings from the locale files**, not hard-coded.

## Worked comparison

**Weak.** `SubscriptionCard.tsx`, 260 lines, with `{/* Header */}`, `{/* Price */}`, `{/* Features list */}` and
`{/* Buttons */}` inside the return; a copy of the same card for the annual plan with different text; `// Handle cancel
click` above `handleCancel`; `// TODO: add loading state`.

**Strong.** `PlanCard` composes `PlanHeader`, `PriceTag`, `FeatureList` and `PlanActions`; monthly and annual are the
same component with a `billingPeriod` prop; loading is part of `PlanActions`'s API; the only comment explains why
the price is rounded the way the payment provider requires.

## Checklist

- [ ] Every repeated piece is one component with parameters; no near-copies.
- [ ] Components have one responsibility and a name people would use.
- [ ] No comments inside markup; parts that needed labels were extracted.
- [ ] No comments that restate code, narrate changes, address the reader or leave TODOs.
- [ ] Remaining comments explain why.
- [ ] Early returns for states; derived values named; semantic elements; strings in locale files.
