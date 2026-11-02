# Slop catalog: product UI

Screens inside an app: dashboards, navigation, lists, forms, settings, states, onboarding, AI features and mobile. Read
with the [catalog rules](README.md): every item is banned by default, and keeping one needs a stated reason tied to
evidence.

Background: [usability](../03-usability.md) · [states](../23-states-transitions-and-concurrency.md) ·
[patterns](../README.md#patterns-by-screen-type).

## Dashboards and home screens

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Four KPI cards in a row (Revenue, Users, Orders, Growth) with "+12.5%" in green | The admin-template default, whatever the product | Start from the decision made on this screen; show the few numbers that drive it, with period and comparison |
| Percent changes with no period or baseline | Meaningless | "Up 8% vs. last October" |
| A line chart that goes up and to the right in every mock | Fake data | Realistic data, including flat and down periods |
| A donut chart for anything | Hard to compare slices | A bar or a sorted list |
| Sparklines everywhere | Decoration when nobody reads them | Only where trend matters for the decision |
| "Recent activity" feed nobody needs | Filler block | What needs attention, assigned, due or failing |
| Greeting headline "Good morning, Alex 👋" | Fills the most valuable spot | The most important current state or task |
| Every widget in a card of equal size | No priority | Size and position by importance |
| Empty dashboard full of zeroes for a new account | Looks broken | A first-run state that leads to the first meaningful action |

## Navigation and structure

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Sidebar with 12 icon-labeled items for a product with three real areas | Enterprise shell by default | Navigation sized to the real objects and tasks |
| Collapsible sidebar, a top bar, breadcrumbs and tabs all at once | Every navigation pattern stacked | One primary navigation and the minimum secondary |
| "Upgrade to Pro" card pinned at the top of the sidebar | Business pressure in the primary navigation | Upgrade prompts where the limit or value appears |
| User avatar menu holding settings, billing, team and help | Hides important destinations | Group by frequency; frequent destinations visible |
| Command palette and keyboard shortcuts in a product without repeated use | Copying expert tools | Add them when people repeat tasks often enough to learn them |
| Tabs with one tab | Pattern without content | Remove the tabs |
| Settings as one endless page | No structure | Group by what people come to change |
| Icons-only rail with tooltips as the only labels | People cannot learn it | Labels, or labels on hover with an expanded mode |

## Lists, tables and records

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| A data table where every row is a card with shadow | Wastes space, slows scanning | A real table with aligned columns, or a dense list |
| Status pills in five pastel colors with no legend | Decorative color | A small, consistent status set with labels |
| Avatar stacks on every row | Decoration | Show owners only where ownership is relevant |
| "Actions" column with a kebab menu as the only way to act | Hidden actions | Primary action visible; secondary in the menu; bulk actions on selection |
| Pagination for 15 items, or infinite scroll for records people need to find again | Pattern chosen by habit | Fit the pattern to the volume and the task (find, scan, compare) |
| Search box that does nothing smart (exact match, no empty state) | Placeholder feature | Search across the fields people remember, with a helpful no-results state |
| Filter chips that do not say how many results remain | No feedback | Show the count and how to clear |

## Forms and inputs

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Placeholder text as the only label | Disappears; fails accessibility | Visible labels |
| Every field required with red asterisks | No thought about what is needed | Ask only what is needed now; mark the exceptions |
| Validation that fires on the first keystroke | Scolds before the person finished | Validate on leaving the field or on submit, then live while fixing |
| Two-column forms for sequential data | Breaks reading order | One column for most forms |
| Huge rounded inputs with icons inside every field | Decoration that reduces space for content | Plain fields; icons only when they add meaning (search, currency) |
| "Submit" button | No outcome | The action's outcome |
| Toggle switches for choices that apply on save | Toggles imply immediate effect | Checkboxes when changes apply on save; toggles when they apply now |
| Date pickers for birth dates | Painful for distant dates | Plain fields for known dates |

## States and feedback

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Only the happy path designed | Real data breaks it | Empty, loading, partial, error, no permission, offline, conflict, success |
| Full-screen spinner for every load | Hides content that could stay | Keep content visible; load parts; skeletons for first loads only |
| Skeletons that do not match the layout that arrives | Layout jump | Skeletons shaped like the real content, or none for fast loads |
| Shimmering skeletons that loop for long waits | Says nothing about progress | Progress and what is being done |
| Toast for every action, including obvious ones | Noise; toasts disappear before being read | Inline confirmation where the change happened; toast for background results with an undo |
| Confirmation modal for reversible actions | Friction and habituation | Undo |
| Success screen with confetti for a routine action | Gratuitous celebration | Calm confirmation; celebrate only real milestones |
| Empty state with a large illustration and "Nothing here yet" | Decoration without help | What this place is for and the first action; sample content when it helps |
| Error page with a joke where something was lost | Insensitive | Plain, with recovery |
| 404 that is just "404" and a home button | A dull moment left dull | The way out first (search, likely destinations), then a small detail from the product's world |

## Onboarding and first run

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Three or more welcome carousel slides before the product | Delays value; nobody reads them | Let people in; teach at the moment of need |
| Seven-step product tour with tooltips on first launch | Memorized by nobody | One or two hints tied to the first task, dismissible |
| "Tell us about yourself" questions that change nothing | Data collection disguised as personalization | Ask only what changes the experience, and show the effect |
| Checklist widget with 8 setup steps and a progress ring | Gamified chores | The two or three steps that lead to first value |
| Product name plus "Welcome to X! 🎉" as the first screen | Ceremony | The first useful action |

## AI features

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Sparkles icon and a purple gradient on every AI entry point | AI as decoration and marketing | Name the action; style it like the rest of the product |
| A chat box as the whole interface for structured tasks | Chat is not a better form | Put assistance inside the screens where the work happens; chat for open-ended questions |
| "Ask AI" floating button on every page | Pushes AI where nobody asked | Offer AI where it saves a real step |
| Streaming text with a blinking cursor for short answers | Theater | Stream only when it shortens the wait for long output |
| Pulsing orb, glowing border or "thinking" animation as identity | Generated AI aesthetic | Show what the system is doing (steps, sources, tools) |
| AI output inserted without review or undo | No control | Preview, accept, edit, undo; label generated content |
| Suggestions shown as facts without sources | Overclaims certainty | Sources, confidence where meaningful, a way to check |
| Suggested prompts that are generic ("Write a poem") | Not about the person's work | Suggestions built from their real context |
| AI features that cannot be turned off | Forced | A setting to hide or disable them |

## Mobile

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Desktop layout shrunk into a phone | Not designed for touch or one hand | Thumb-reachable primary actions, native navigation patterns, sheets |
| Hamburger menu hiding the main destinations | Out of sight, out of mind | A tab bar for 3–5 main destinations |
| Tiny tap targets and text links as buttons | Missed taps | Targets of at least 24×24 CSS px (WCAG 2.5.8), 44pt or 48dp by platform convention |
| Floating action button on every screen | Android-template reflex | A FAB only when one creation action dominates |
| Custom gestures nobody can discover | Hidden features | Visible controls; gestures as shortcuts |
| Modal on top of modal on top of sheet | Lost context | One layer at a time |
| Bottom sheet that cannot be dismissed by swipe | Breaks platform expectation | Native sheet behavior |

## Settings, account and billing

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| "Danger zone" in red at the bottom with "Delete account" as a bright red button | Template drama | A clear, calm section with the consequence explained and the steps |
| Billing page with only "Upgrade" visible and no way to cancel | Hidden exit | Plan, next charge, method, invoices, change and cancel, all visible |
| Notification settings as 40 toggles | No grouping | Group by what people care about; presets |
| Profile page with fields nobody uses (bio, website, pronouns) by default | Generated scaffolding | Fields the product actually uses, with the reason |

## Imitating a famous product's surface

"Make it like Duolingo / Linear / Slack / Revolut" is a request to understand reasons, not to copy a look. See
[product archetypes](../39-product-archetypes.md).

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| A mascot, gems, hearts and a daily streak added to a non-learning product | The surface of a habit app without its reasons; often harmful (money, health, work) | Take the reason (a tiny unit of real progress); choose the cadence the goal needs (weekly goals, plans that adapt) |
| Full-screen celebrations after routine actions because "Duolingo does it" | Lesson-end celebrations fit a short, playful session, not a work task | Scale celebration to the achievement and the archetype |
| The "Linear look" (monochrome list, tiny type, command palette) on a product for occasional, non-expert users | Density and shortcuts without the repeated use that justifies them | Density and shortcuts in proportion to frequency and expertise |
| A social feed as the home of a tool | Engagement mechanics where people come to do a task | Start from the task; an activity view filtered by relevance |
| Neobank styling (big balance, four round action buttons, black cards) for a product with no money in it | Costume | Lead with what this product's people check most |
| Business-model mechanics copied as patterns (energy that runs out, upsell cards in the sidebar, sold streak repairs) | They serve the original company's revenue, not the person | Leave them out unless the business model and the ethics have been decided explicitly |
