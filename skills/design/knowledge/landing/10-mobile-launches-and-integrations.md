# Landing pages on phones, waitlists and integration directories

Three situations with their own logic: the phone, where visitors may arrive with limited time or bandwidth; the
waitlist, where access is not yet generally available; and the integration directory, where visitors check whether the
product fits their stack.

## The landing page on a phone

Check device distribution by acquisition source before deciding priorities. A phone layout needs its own hierarchy
and interaction choices even when desktop accounts for most qualified traffic.

### Questions before designing

- **What share of traffic is mobile, by source?** Social ads are often mostly mobile; search for B2B software often
  less so. Check analytics.
- **Can the action be completed on a phone?** If not (a desktop-only tool), the mobile goal changes: send a link,
  book a demo, save for later.
- **What is the visitor doing?** Commuting, between tasks, one-handed: short attention, interrupted sessions.

### The first screen

- **Headline, supporting explanation and clear next step** form the opening hierarchy. A 44–48 px button is a
  comfort recommendation, not a required height. Let content and text settings determine line count.
  A partial visual can suggest more below; do not sacrifice an understandable offer to fit a fixed viewport.
- **Test with large system text** and with the longest language: the button must not fall below the first screen
  through a layout regression. It may reasonably move below the fold when text grows; do not shrink text to prevent it.

### Layout and components

- **A sticky bottom button** when the page is long and the action is single; it must not cover content or the cookie
  banner, and it hides near the closing section (where the button already is). Account for safe areas
  (`env(safe-area-inset-bottom)`).
- **Menu** as a sheet or full screen, with the primary action inside too; closable with one tap and with Escape; focus
  managed while open.
- **Grids often become one column**; comparisons can become cards or a selected-plan comparison. Preserve important
  differences. Carousels need usable controls in addition to swipe, including keyboard operation.
- **Screenshots designed for the phone**: readable crops of the product, not the whole desktop screen shrunk.
- **Video**: choose a crop that preserves the demonstration; vertical or square can fit well. Offer playback control
  and appropriate captions or descriptions rather than treating a silent crop as a complete alternative.
- **Forms**: the right keyboard (`type="email"`, `inputmode`), `autocomplete`, one field per row.
- **Nothing depends on hover**: what desktop reveals on hover is visible or tappable on the phone.
- **A single field in the hero** when the action is starting with one piece of data (phone or email;
  [Current](https://mobbin.com/sites/sections/92cca7c1-f14e-4cbc-96f9-12a4b5893464)).

### Promoting an app

- On the phone, store buttons that go straight to the store for that platform (detect the platform, show the other
  as a link). Treat detection as a suggestion and retain manual choice for unknown or misidentified devices.
- On desktop, a QR code with "Works on iOS and Android"
  ([Mailchimp](https://mobbin.com/sites/sections/b9ad2dfa-45dd-419e-b1a6-cb0c488665fd)), plus "Send me a link" for
  people who do not scan.
- Show the app inside a phone in real use
  ([Riverside](https://mobbin.com/sites/sections/1c313c57-669f-445e-9894-30cc76f0e798),
  [Headspace](https://mobbin.com/sites/sections/5b44d3ff-891d-4add-9f5f-53b903bb1800)).
- Official store badges follow each store's guidelines and are localized.
- Ratings shown only if real and current, with the store named.

### Measuring on real devices

Test on a real mid-range phone on mobile data: weight, tap accuracy and layout problems appear there that never appear
on a design laptop.

## Waitlist or launch page

### What it must answer

Even before general access, visitors need: what it is, for whom, when, what they get by joining, and what happens to
their
email.

### The pieces

- **What it is and when**: even if not ready, say what it will do and when it is expected ("Pre-orders open in March";
  [Superr](https://mobbin.com/sites/sections/bd3dab59-95e3-497d-9eb7-f64e334fd07f)). If the date is uncertain, say so
  ("Early 2027, we'll email you first").
- **One field and a button saying what you get** ("Reserve my spot", "Get early access";
  [ISO Meet](https://mobbin.com/sites/sections/c494bf4c-177f-4b26-830f-1168406fd48f),
  [Base](https://mobbin.com/sites/sections/75fb9e38-9f05-494f-92ab-86ff2a2e5efd)).
- **What happens with the email**, as a list: notice at launch, updates, first chance to buy (Superr), with a link to
  the privacy policy.
- **Honest social proof** ("5,000+ creatives already signed up", ISO Meet) — only real counts.
- **A countdown only if there is a real date**
  ([Rains](https://mobbin.com/sites/sections/6efdded0-c82c-47c3-b304-4cba52056fb6)),
  accessible (not announcing every second; the date also in text, with time zone).
- **A visual idea that creates curiosity** without hiding what it is (the named cursors of "Not just cursors on a
  screen"; [Opacity](https://mobbin.com/sites/sections/aa78df4e-e768-4c84-956a-35bf1072f469)).

### After signing up

- A confirmation with its own tone ("You're on the list"), position in the queue if it exists, and something to do
  (share, follow, answer one question to prioritize access).
- A confirmation message consistent with the actual service; distinguish accepted requests from delivered email.
  Use any verification or double opt-in required by the applicable policy, jurisdiction or consent model.
- Referral mechanics ("move up by inviting friends") only if the reward is real and the rules are clear (see
  [referrals](../patterns/referrals.md)).

### States

- Already registered: provide a useful next step without exposing membership where it is sensitive. A neutral
  confirmation can protect privacy; an explicit status may be appropriate in an authenticated context.
- Invalid email: inline error with how to fix.
- Network error: keep the typed email and offer retry.
- Launched: the page changes to the product page; people on the list get the promised first access.

**Anti-example**: a gradient and a generic sentence with a "Join" button and nothing else — no what, when or why.

## Integration directory

### Why it matters

For many products, "does it work with what we already use?" is a deciding objection. The directory answers it and,
with one page per integration, attracts search traffic ("[product] + [tool] integration").

### The pieces

- **Search at the top and categories on the side**
  ([Harvest](https://mobbin.com/sites/sections/41a0951f-e71a-414d-b2ab-9b8d7ac6402f),
  [Customer.io](https://mobbin.com/sites/sections/ddd898fb-2f9e-4d80-976e-9c5540521002)).
- **A card**: logo, name, one line on **what you can do** with the integration ("Track time from your Asana tasks"),
  not the other company's description.
- **Status and plan labels** (Beta, New, "Notify me when available", Pro / Business;
  [Glide](https://mobbin.com/sites/sections/c636424b-762c-4482-ac1b-8a68bd54133e)).
- **Curated sections** (Popular · New · Free) with "See all"
  ([Intercom](https://mobbin.com/sites/sections/1a275928-845e-4086-baae-d6e9eb65e6d2)).
- **Who builds it** (official / partner;
  [Apollo](https://mobbin.com/sites/sections/80ce640b-eb1b-4e86-8131-7789528a0f5b) ).
- **On the main landing page, the short version**: "1,000+ integrations" with categories and recognizable logos
  ([ClickUp](https://mobbin.com/sites/sections/bb3f7978-3e19-438c-a1ac-7fdec49dc8a9)) and a link to the directory.

### The integration page

Each integration gets its own page: what it does (use cases), how to connect it (steps), screenshots, the permissions
it requests and why, which plans include it, who maintains it, and a link to documentation. A request form for
integrations that do not exist yet ("Tell us what you use") turns gaps into signals.

### Edge cases

- **No results**: suggest similar tools, the generic options (API, webhooks, Zapier-style connectors) and the request
  form.
- **Deprecated integrations**: a clear label and the alternative.
- **Many logos at once**: lazy-load, with dimensions reserved; logos with alt text naming the tool.
- **Trademark use**: follow each partner's logo guidelines.

## Questions at the boundary between interest and access

These page types share a problem: the visitor's interest does not yet mean they can use the product. A phone may
not support the full workflow, a waitlist may not grant access, and an integration logo may not mean compatibility.
Design the boundary so visitors can decide accurately before sharing data or investing time.

- Does the phone action complete a task or merely hand it to another device? How will context survive the handoff?
- Is joining a waitlist a notification request, an application, a paid reservation or an invitation queue?
- What determines eligibility and ordering? Is a queue position real, stable and appropriate to reveal?
- Which launch claims are committed, which are estimates, and who updates them if the plan changes?
- Does an integration read, write or synchronize data? In which direction, for which objects and at what frequency?
- Who maintains the connector, handles failures and supports visitors when the two services disagree?
- Are market, plan, version or permission restrictions decision-critical before the next step?

The most helpful next action may be "send this to my administrator" or "notify me when available", provided the
service actually supports it. A visually stronger "Start now" cannot repair unavailable access.

## Choose a structure that matches readiness

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Phone supports the core task | Direct start | Preserves intent | Full mobile recovery needs testing |
| Desktop setup needed | Preserve context in handoff | Realistic expectations | Loss between devices |
| Launch timing is uncertain | Notification signup without a countdown | Avoids a false deadline | Less urgency |
| Qualification needed | Short application and criteria | Explains selection | Effort and exclusion risk |
| Few simple integrations | Compact annotated list | Easy to scan and maintain | Limited filtering |
| Many distinct connectors | Directory and detail pages | Evaluates compatibility | Maintain search and taxonomy |
| No native connector | Alternative or request path | Honest compatibility | Lower immediate conversion |

Do not introduce a waitlist when a usable product could be offered directly unless capacity, safety or another
real constraint explains delayed access. Conversely, do not call an early prototype generally available merely
to remove a signup step. State what visitors can actually do and what remains experimental.

A directory is unnecessary for a handful of connectors whose differences fit in a clear list. A logo wall may be
sufficient as an overview, but it is weak evidence for someone deciding whether a specific workflow will work.

## Mobile handoff and interruption

Preserve the visitor's selected plan, integration or use case through a send-link or cross-device flow when this
can be done safely. Explain what will be sent and whether the destination requires a new session or sign-in.
Do not place secrets or personal form contents in a publicly shareable URL.

Embedded browsers may handle authentication, file picking and store destinations differently. Provide a useful
fallback when the full flow cannot complete there, and test returning from an external app rather than treating
the outbound tap as completion.

A sticky action can reduce travel on a long page, but it competes with the browser chrome, virtual keyboard,
consent panel and accessibility controls. Hide or reposition it when needed; preserving the input and its error
message takes priority over keeping a marketing button continuously visible.

When a comparison requires several attributes, reducing it to two plan names is not enough. Let people choose
which plans to compare or keep a labeled scrollable table when two-dimensional comparison is essential.
The responsive decision should preserve evidence, not merely remove visual density.

## State design across the three journeys

| State | What to communicate | Next step |
| --- | --- | --- |
| Store unavailable in this region | Eligibility limit before promising installation | Supported alternative, if any |
| Email link accepted | Request received, without claiming delivery | Explain where to check and how to retry |
| Waitlist verification pending | Joining is not yet complete | Verify address or request another message |
| Already on the list | Useful status with appropriate privacy | Manage preferences or wait for updates |
| Launch delayed | Revised uncertainty and effect on existing requests | Offer update preferences or withdrawal |
| Product now launched | The new access path and any eligibility limits | Replace signup messaging coherently |
| Integration in preview | Availability and supported scope | Explain testing or invitation process |
| Integration deprecated | End date, affected workflows and replacement | Migration instructions |
| Search yields nothing | No matching result, not necessarily no capability | Adjust search or inspect alternatives |
| Connector temporarily unavailable | Known status and affected action | Status details or supported workaround |

If a confirmation request times out, retain entered data and avoid claiming either success or failure without
support. Submission and email delivery are separate events. Test safe retry so a connection problem does not
create repeated notifications or conflicting queue entries.

## Accessibility requirements and recommended behavior

WCAG 2.1.1 requires keyboard access, subject to its exception; dragging-only or swiping-only interaction needs an
alternative where 2.5.7 applies. Target Size (Minimum), 2.5.8, provides a 24 CSS pixel rule with spacing and other
exceptions. Larger targets are a practical recommendation for a phone, not a universal AA size requirement.

Names, roles and state changes of search filters and menus need programmatic exposure (4.1.2). Search counts or
submission confirmations that are status messages fall under 4.1.3. Announce a settled result once; announcing a
countdown every second distracts from the page and is not needed to communicate the deadline.

A full-screen menu should use behavior consistent with its semantics. For a modal dialog, contain focus while
open and restore it sensibly on close; for an ordinary disclosure, preserve the natural page sequence.
Do not apply dialog keyboard behavior to a simple expanded navigation list just because it covers a large area.

A QR code needs an equivalent reachable destination. Describe the action in surrounding text and provide a
normal link or supported send-link option. Image recognition should not be the only route to an app.

## Copy and localization

Explain the consequence before asking for data. In an English illustration, "Get an email when registration
opens" makes a narrower promise than "Get access". Preserve that distinction in every language even when a
literal translation would be shorter or more marketable.

Use whole localized messages for positions, counts and delivery estimates so languages with several plural
forms or different variable order remain natural. Do not assume queue numbers should be grouped, spoken or
abbreviated like ordinary marketing totals; test the intended meaning with local readers.

A launch deadline needs a date and time zone when the time matters. Localize its display without changing the
underlying instant. A launch scheduled separately by region needs regional information rather than one global
countdown that appears to promise simultaneous access.

Search should handle the partner names, aliases and scripts visitors actually use. Brand names often remain
unchanged, while categories and capability descriptions are localized. Review accent handling and mixed-script
queries with real examples; a translated category label cannot compensate for a search index in one language.

For integration descriptions, state the action, objects and direction before promotional language. An English
example is "Create a task when a form is submitted". This is more useful than "Connect your favorite tools"
because visitors can compare it with the workflow they need.

## Verification and useful measures

Test the same intent across devices: discover on a phone, send a link if needed, then continue elsewhere.
Check whether context survives and whether participants understand that a handoff is not completion.
Use representative mobile devices, large text, a virtual keyboard and a slow or interrupted connection.

For a waitlist, ask people what joining guarantees, when they expect contact and how they can leave. A rising
signup count accompanied by disappointment about access indicates a promise problem, not necessarily success.
Measure verified interest and eventual appropriate activation; watch duplicate requests, complaints and unsubscribes.

For an integration directory, ask visitors to determine whether a specific object can move in the required
direction under their plan. Measure correct compatibility assessment and successful setup, with failed setup and
support contacts as guardrails. A popular logo receiving many clicks does not show the connector meets the need.

When access has not launched, there is no activation result to claim. Record interest as a weaker signal and
plan the follow-up that will test whether those visitors can and want to use the product when available.

## Worked comparison (fictional design scenario)

**Weak mobile landing:** the desktop page shrunk; the hero visual takes the whole first screen and the button is
below; a feature grid of 3 columns at 320 px; a comparison table that scrolls horizontally with tiny text; a chat
widget covering the sticky button.

**Strong mobile landing:** the same offer and plan differences remain, with a readable opening explanation and
action, screenshots cropped to the relevant task, and a comparison that preserves each decision-critical attribute.
The sticky action yields to the keyboard and closing action; contact remains available without covering the form.

This version does not assume every element fits above the fold. It improves the ordering and removes competing
layers so the visitor can read and act at their chosen text size. A two-plan comparison is useful only when the
visitor can still evaluate the alternatives they need. Test completion, not simply how much fits in a screenshot.

## Common mistakes

- **Desktop-first design shrunk to mobile.**
- **Waitlists that hide what the product is.**
- **Countdowns without real dates.** Urgency can inflate signups while teaching visitors that deadlines are not
  credible. Use availability information and honest uncertainty when timing is unsettled.
- **Integration cards that describe the partner instead of the use case.** Reusing partner copy is easy, but it
  leaves the compatibility question unanswered. Describe the supported action and its limits.
- **Store links that ignore the visitor's platform.**

## Checklist

- [ ] Mobile intent and traffic sources known; readable hierarchy survives text growth and interruptions.
- [ ] Sticky elements do not cover content or each other.
- [ ] Screenshots and video designed for the phone.
- [ ] Waitlist says what, for whom, when, and what happens with the email.
- [ ] Waitlist states designed (already registered, error, launched).
- [ ] Integration directory with search, categories, use-case lines and per-integration pages.
