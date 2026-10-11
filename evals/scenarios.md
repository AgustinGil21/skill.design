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

