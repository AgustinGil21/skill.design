# Scenarios

Each scenario: the prompt, the situation in the project, the senior behavior expected and the failure it catches.
Prompts can be run in any language; the expected behavior does not change.

## Discovery and tone

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 1 | "Help me with the design of this app." | A reading app for 6–9 year olds built on a generic SaaS starter (sidebar, tables, blue buttons) | Reads routes, copy and roles; notices the mismatch; asks about developmental stage and the parent area if unclear; offers modes | An adult dashboard repainted in bright colors |
| 2 | "Redesign the home screen." | README says "for families"; routes and permissions serve accountants (`/ledger`, `/clients`, role `accountant`) | Surfaces the contradiction; asks which audience the change serves before deciding tone | Confidently inventing one audience |
| 3 | "Make it look better." | Nothing in the project says who it is for; mixed copy | Inspects first, states what it can and cannot infer, asks one to three questions with options, recommends a bounded next step | Silently redesigning everything |
| 4 | "Design the attendance screen." | Sports club platform; coaches' device unknown | Asks whether coaches use it on the phone during training or after; designs for the answer, or both with a marked assumption | Assuming desktop |
| 5 | "Review the HUD." | A competitive action game with low-contrast HUD and color-only team markers | Judges in-play readability and color independence for the genre | Applying productivity-app rules (more whitespace, softer colors) |
| 6 | "Simplify these tables." | A strategy game with dense resource tables | Evaluates scanning needs and player expertise; keeps useful density, improves hierarchy | Removing data to satisfy a minimalist taste |

## Brand

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 7 | "Make the transfer flow clearer." | Established bank whose real identity uses purple gradients | Preserves the brand; improves clarity of amounts, recipient and status | Removing the palette because it triggers anti-slop rules |
| 8 | "Add a settings page." | Burgundy brand, but reds for errors and library-default blue links | Builds within the brand; flags the red/blue inconsistencies as a separate finding | Adding a fourth color, or silently "fixing" the brand |
| 9 | "Style the dashboard." | White-label product with two clients' assets in the repository | Identifies brand ownership and theme boundaries; asks which client or how themes work | Picking one client's style as universal |

## Ideas and options

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 10 | "What if we replace all navigation with a chat?" | B2B admin product with repeated structured tasks | Strengths, failure mechanisms, alternatives (command palette, assistant inside screens), recommendation, cheap test | Implementing it, or dismissing it without reasons |
| 11 | "Let's add streaks that reset if you miss a day." | Teen wellbeing app | Discusses agency and emotional consequences; alternatives (gentle streaks, weekly goals); recommendation | Treating engagement as sufficient justification |
| 12 | "Give me ideas for the onboarding." | Any project with a design context | Two to four distinct directions with a recommendation; no application files | Three variants of one idea; creating files |
| 13 | "Which is better, tabs or a sidebar?" | A settings area with 12 sections | Recommends with reasons for this case, names the alternative's advantages, offers a quick demo if visual judgment is needed | A generic essay without a recommendation |

## Delivery modes

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 14 | "Just implement the approved card component." | Context file exists, design approved | Proceeds within the system, verifies, reports | Forcing discovery or new options |
| 15 | "Make me a quick demo of two layouts for the pricing page." | Any | Standalone demo with real content, two genuinely different layouts, labeled simulated data, outside production paths | Claiming production readiness; overwriting real pages |
| 16 | "Write me a critique of the checkout." | Checkout code available | Report with evidence type, confidence, severity, fixes and what was not verified; no edits | Vague aesthetic comments or unrequested changes |
| 17 | "Audit accessibility and fix what you find." | Any | Audit report first, then fixes by severity, then re-verification | Fixing without reporting, or claiming WCAG compliance untested |
| 18 | "Build the dashboard home screen." | A project with tokens defined in CSS variables or a Tailwind theme | Composes the screen from small components, uses only tokens, calm motion without bounce or pulses | One 600-line component with raw hex values, `bg-[#…]`, bouncy entrances or pulsing badges |

## Platform and input

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 19 | "Add a context menu to the file list." | Electron desktop app used on Mac and Windows laptops | Opens on right-click, two-finger tap and Ctrl+click (contextmenu event); mirrors a visible "⋯" menu; shortcut labels per platform (⌘ vs Ctrl); fast, no bounce | Menu bound to mouse button 2 only; "Ctrl" shown on macOS; slow animated menu |
| 20 | "Adapt the orders screen for tablets." | React Native app designed for phones | Uses the space (list and detail side by side, landscape, pointer and keyboard support) while keeping the phone layout complete | The phone layout stretched; features moved out of the phone |
| 21 | "Add keyboard shortcuts and a command palette." | A marketing site with a contact form | Questions the need: little repeated use; recommends against or limits it to search, with reasons | Adding a palette and shortcuts because good apps have them |

## References

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 22 | "This is the original page: [url]. Also look here: [url/path]. Build the whole context of this landing." | A public, media-heavy landing page | Captures every URL fully on desktop and phone (or uses a browser tool when it cannot launch one), takes it apart section by section with slices as evidence, explains the designer's choices as hypotheses, and separates take / adapt / do not take | Describing only the first screen; copying the look; claiming motion from still screenshots |

## Design systems

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 23 | "Create the web app for our physiotherapy clinic: appointments, patient records and billing." | Empty repository, no tokens or component library | Before choosing any value, asks once how much of a design system the person wants, with levels, what each leaves in the project, a recommendation (core kit or documented system) and a default; then builds foundations, a foundations page and core components before screens | Starting on the first screen with inline values; or asking a bare "do you want a design system?" |
| 24 | "Make me a landing page for my bakery." | New single-page site, nothing else planned | Asks briefly or assumes foundations only (a token file), says so, and does not build a docs site or a token pipeline | Over-scoping a one-page site into a full system |
| 25 | "Add a settings page." | A product with a documented system (tokens, components, system page) | Does not ask about a design system; builds from the existing tokens and components and updates the system if a gap appears | Asking whether they want a design system, or creating a parallel set of tokens |
| 26 | "Our app has twelve different buttons. Fix it." | Existing product, no system, raw values everywhere | Runs an inventory, decides canonical variants with reasons, derives tokens from decisions (not from averaging), migrates in slices with checks | Harvesting every existing value into tokens, or a big-bang restyle |

## Slop catalog

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 27 | "Make me a landing page for our invoicing app." | No brand evidence beyond a name and a product description | Reads the slop catalog (core list, visual, copy, landing, motion) before building; avoids the pill badge, gradient text, three icon cards, invented logos and stats; real content or `[data: …]`; the report lists the catalog files used, what was avoided and anything kept with its reason | A centered hero with a "New" pill, purple gradient, feature grid and "Trusted by 10,000+ teams", with `slop.mjs` passing and the agent calling it done |
| 28 | "Review this dashboard." | A React dashboard with four KPI cards, a rising line chart, "Welcome back, Alex 👋" and shadcn defaults | Uses the catalog as a checklist; each item found becomes a finding with the fix, or is kept only with evidence (brand) | Only running the detector; calling defaults "clean" |
| 29 | "Our brand is purple; use a purple gradient in the hero." | Brand files with a purple gradient | Keeps it with the brand as the stated reason, applies it with contrast, and still avoids the other catalog items | Removing the brand's real gradient because it is on the list, or keeping every other default because one was justified |

## Archetypes and flows

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 30 | "Make our budgeting app addictive like Duolingo." | Personal finance app | Separates what transfers (tiny unit of real progress, visible progress) from business-model mechanics (energy, sold repairs) and harmful ones (guilt notifications, daily streak for opening the app); recommends weekly goals and calm celebration; asks before building | Adding a mascot, gems, a daily streak and confetti |
| 31 | "Add a cancel flow with a retention offer." | Subscription web app selling in the EU, UK and California | One screen with facts, an optional reason, at most one offer with cancel equally visible, confirmation by email with the end date; mentions the market rules to verify | Several retention screens, a countdown offer, a mandatory survey or cancel as a grey link |
| 32 | "Design the send screen for our crypto wallet." | Self-custody wallet | New-address and lookalike checks, full address in review, network fee explained, irreversibility stated once, pending state, no celebration before confirmation | Truncated address in review, generic warning sheets, confetti on send |
| 33 | "Add a community feed to the home tab." | A running app | Questions the feed as home; proposes a Community tab with a following feed that ends, explicit audience when posting, no autoplay, time controls | An infinite ranked feed with autoplay as the new home |

## Engineering

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 34 | "Start the project for our booking app." | Empty repository, no stack chosen | Recommends a library and framework with reasons and costs, asks the person to choose (with a default), proposes the design-system level before screens; sets up pnpm with exact versions and supply-chain settings in `pnpm-workspace.yaml`, a fast linter and formatter, Vitest and Playwright | Choosing Next.js silently; `^` versions; Jest and Prettier from memory; screens before tokens |
| 35 | "Build the pricing card." | Tailwind v4 project with a theme | Composes small components configured by props; uses theme tokens and scale classes; no comments inside JSX; tests by role and name | `h-[250px]`, `text-[#1a1a2e]`, `{/* Header */}` comments, a copied card per plan |
| 36 | "Add a date picker with [library]." | Existing React project | Reads the library's current docs for the installed version (patterns, accessibility, pitfalls) before writing code and says what it checked | APIs written from memory, deprecated props |
| 37 | "Review this component." | A 400-line React component with `useEffect` fetching, restating comments and arbitrary values | Findings for architecture (split, data layer), comments (delete restating ones, extract labeled parts), styling (tokens and scale), tests; runs `system-check.mjs` | Only style nitpicks; keeping the comments |

## Platforms, craft and law

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 38 | "Update the navigation for the new iOS design." | SwiftUI notes app (minimum iOS 26) with a custom opaque navigation bar and tab bar in brand teal | Checks the current Liquid Glass guidance; replaces custom bars with system `NavigationStack`, toolbar and `TabView` so they adopt the material; keeps the brand in tint and content; mentions legibility, accessibility settings and the icon's appearances | Painting glass effects on content, keeping custom opaque bars, or inventing APIs without checking |
| 39 | "Design the receipt email for our Pro subscription." | Note-taking app with Pro at €8/month, customers in the EU, UK and California | A transactional email with a factual subject and preview, amount, date, plan, next charge and how to cancel; client-safe HTML, plain-text part, dark mode and images-off considered, accessible structure | A marketing newsletter layout, text in images, no cancel information, "Click here" |
| 40 | "Polish the pricing page before launch." | Tailwind pricing page with orphan words in headings, misaligned icons, proportional numerals in prices and focus rings clipped by overflow | Captures screenshots, runs the craft pass item by item, fixes with tokens, reports before and after | Generic "looks good" or restyling the page instead of fixing details |
| 41 | "Add a leaderboard and public profiles." | A reading app for children aged 6–9 | Pushes back with reasons (children's codes, COPPA, comparison pressure); proposes private progress and parent-visible achievements; asks before building | Building public profiles and rankings for children |

## Evaluation

| # | Prompt | Situation | Expected behavior | Failure to catch |
| --- | --- | --- | --- | --- |
| 42 | "Evaluate our app and tell me what you would improve." | A reading app for children aged 6–9 built on a generic SaaS starter | Maps the product, walks the key journeys, evaluates every dimension with evidence, and writes one easy-to-read Markdown report in `design-reports/` (verdict first, scorecard, findings with fixes and effort, what works, roadmap, iterate or redesign, what could not be verified); no code changes; a short summary in the reply | Editing code, a vague opinion without evidence, a wall of text, or a report that only lists problems without fixes |
