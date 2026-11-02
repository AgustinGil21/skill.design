# Product archetypes: how habit apps, work tools, social products and money apps are designed, and why

Products that serve the same kind of relationship with people end up with similar design DNA: a language-learning
app and a meditation app share more with each other than with the bank that charges for both. This file takes apart
four archetypes that people often ask to imitate — **habit-forming consumer apps** (Duolingo and the like), **work
tools** (Jira, Slack, Linear), **social and content products** (feeds, posting, communities) and **money apps**
(banks, wallets, crypto) — and explains, critically, what their designers decided, why, what it costs, and what
transfers to another product.

It complements [product domains and tone](30-product-domains-and-tone.md), which reads a project for evidence, and
the [slop catalog](slop/README.md): "make it like Duolingo" or "like Linear" is a request to understand reasons, not to
copy a look.

## What it is and why it matters

When someone says "make it addictive like Duolingo", "clean like Linear" or "trustworthy like a bank", they name a
**feeling produced by many decisions**: business model, frequency of use, stakes, audience, motion, color, copy and
flows. Copying the surface (green owl, monochrome list, navy and white) brings the costs without the reasons.

This file improves these decisions:

- Which archetype the product actually belongs to (often more than one).
- Which decisions of the famous example transfer, which are tied to its business model, and which are harmful.
- How motion, color, density, copy and flows change between archetypes.
- What to push back on when the request imports a pattern from the wrong archetype.

## The four questions that define an archetype

| Question | Habit consumer | Work tool | Social and content | Money |
| --- | --- | --- | --- | --- |
| **How often and how long?** | Daily, minutes | Hours a day, interrupted | Many short visits, open-ended | Frequent glances, rare high-stakes actions |
| **Who chose it?** | The person | Often their employer | The person, pulled by others | The person, with regulation around them |
| **What does a mistake cost?** | Little (a lost streak) | Time, colleagues' trust | Reputation, privacy, safety | Money, sometimes irreversibly |
| **What does the business optimize?** | Daily return and conversion to paid | Seats, retention of teams, efficiency | Attention and content creation | Deposits, transactions, trust |

The last row explains most of what is admirable and most of what is harmful in each archetype. Every decision below
is read against it.

## 1. Habit-forming consumer apps

Examples: Duolingo, Finch, Headspace, Brilliant, Noom, Cal AI, Runna, fitness and journaling apps.

### What their designers decided

- **One tiny unit of progress per day.** The core loop is a short session that always ends in visible progress. Duolingo
  made extending the streak require a single lesson rather than an XP goal; its retention team has described this
  as one of its largest engagement gains (as reported in interviews with its product team; treat figures as
  unverified). The decision: lower the cost of showing up until it is almost free.
- **A map, not a menu.** The learning path is a single vertical road of nodes ([Duolingo path](https://mobbin.com/flows/c199f9a9-7a91-4795-8ba5-5a3c24847009)):
  no choice about what to do next, so no friction deciding. The cost: little agency for advanced learners.
- **A character that reacts.** The mascot and world characters give feedback with emotion. Duolingo animates them in
  Rive with a state machine so mouths sync to audio and characters react to right and wrong answers
  ([Duolingo engineering blog](https://blog.duolingo.com/world-character-visemes)). Feedback becomes social, which
  is stronger than a checkmark — and also the source of the guilt-trip notifications people complain about.
- **Celebration as part of the loop.** Full-screen feedback ("PERFECT", "17 in a row"), chests, gems, sounds and
  haptics after each lesson ([lesson completion](https://mobbin.com/flows/c199f9a9-7a91-4795-8ba5-5a3c24847009)).
  Big, saturated, fast and frequent, because the session is short and the reward must land before the person leaves.
- **Loss protection that is also a store.** Streak freezes, repairs and calendars of practiced days
  ([Duolingo streak](https://mobbin.com/flows/d1739059-58c7-4b20-8630-8833869d34bb),
  [streak freeze used](https://mobbin.com/screens/3b18d128-382c-4604-9f98-214c7d239779)). They soften the
  punishment of a missed day, and they are bought with the in-app currency, so the anxiety they relieve is also a
  revenue line.
- **Friction sold back.** Limited hearts or energy end a session after mistakes; refills come from waiting, watching
  an ad, gems or the subscription ([energy](https://mobbin.com/screens/d6a2c6fe-f807-4485-b505-7778c7b59847),
  [one more mistake](https://mobbin.com/screens/3c700cfa-f55b-4011-8b03-119f925788d5)). This is a monetization
  mechanic, not a learning one: it stops people exactly when they are practicing hardest.
- **Social pressure in small doses.** Friend streaks with a "Nudge" button, friend quests with deadlines
  ([friend quest](https://mobbin.com/flows/e7d141df-f1bd-4092-b218-59df9b26a657)).

### Critical reading

| Decision | What transfers | What does not, or harms |
| --- | --- | --- |
| Tiny daily unit | Make the smallest meaningful action very cheap | When the goal needs depth (learning, health), tiny units can replace real progress: engagement is not learning |
| Single path | Remove decisions for beginners | Experts need to choose; offer both |
| Reactive character | Feedback with emotion, consistent voice | Characters that guilt, sulk or "cry" at absence |
| Celebration | Mark real milestones clearly | Celebrating every tap trains people to ignore celebration; condescending for adults at work |
| Streak protection | Forgiveness for missed days | Selling relief from anxiety the product created |
| Friction sold back | — | Hearts and energy that interrupt practice are a business decision, not a design pattern to import |
| Social nudges | Optional accountability with friends | Pressure by default, for minors, or on sensitive goals |

Better models for the same need:

- **Runna** asks what to do with missed workouts — rearrange them or skip them — instead of punishing
  ([missed workouts](https://mobbin.com/screens/321454f7-be6f-48af-999a-4bb5f4d2f09d)).
- **Finch** frames a broken streak as "It's okay to miss a day" and offers a free first repair
  ([Finch](https://mobbin.com/screens/d6e7a7b1-4b61-40b1-8ff7-1c602badec85)) — still a streak, but without shame.
- **Brilliant** earns protection by doing the activity ("Streak Charge") rather than buying it
  ([Brilliant](https://mobbin.com/screens/d9f1ce10-de3a-481e-b2a0-bbac8ece55a6)).
- **Cal AI** shows "1 Day streak lost" as a large grey flame; neutral but heavy — the counterexample of how much
  visual weight a loss deserves ([Cal AI](https://mobbin.com/screens/f48da1ad-4de3-4900-9abd-6978316b5bb7)).

### Design DNA, when it fits

- **Color:** saturated, cheerful, one strong brand color with bright secondaries for rewards; functional colors very
  distinct (correct and incorrect must read in a glance). Works because sessions are short and emotional.
- **Type:** rounded, heavy display weights for feedback; readable body for content.
- **Motion:** expressive and fast for feedback (under a second), characters with state machines, haptics on correct
  answers. Still: no motion while the person reads or answers; reduced-motion versions; celebrations scale with the
  achievement.
- **Copy:** short, warm, in the character's voice for feedback; plain for anything about money or data.
- **Flows:** onboarding as a first lesson (value before account), paywalls after value, trial timelines that say when
  the charge happens ([Headspace trial](https://mobbin.com/screens/17e4ce60-0851-40be-92af-336be1220857)).

### When to push back

"Add streaks and gamification" in a product where the goal is not daily (budgeting, health records), where the
audience is vulnerable (teens, mental health, kids), or where frequency is not value (a tax app). See
[gamification](patterns/badges-and-gamification.md) for weekly goals, forgiveness and opt-in competition.

## 2. Work tools

Examples: Jira, Slack, Linear, Notion, Asana, Figma, CRMs and admin consoles.

### What their designers decided

- **Density with hierarchy, not decoration.** Linear's lists are monochrome rows with an ID, a status icon, a title
  and a few properties ([Linear issues](https://mobbin.com/screens/fd1b4d88-f021-49a3-98af-4cd3a87e1d29)). Color is
  almost only status and labels. People scan hundreds of items a day; every decorative pixel costs time.
- **The object page as the center.** Jira's work item: title and description on the left, an editable properties
  panel on the right, activity below ([Jira item](https://mobbin.com/screens/fb68a64a-1e18-4cd5-a2ab-4a566e43c1f3)).
  Empty properties say "None" and are editable in place: the page is a form that does not look like one.
- **Keyboard first, mouse always.** Shortcut hints appear where the action lives ("Pro tip: press M to comment" in
  Jira; "F" next to Filter in [Linear](https://mobbin.com/screens/ed670cda-0527-4716-a1a6-0159f12c4f42)). Shortcuts
  are taught in context instead of in a manual.
- **Toasts with a way back.** Jira confirms a clone with a link to the new item
  ([clone toast](https://mobbin.com/screens/f95ce716-07ef-4c1c-9a29-165ff2167e0b)); actions are reversible or
  navigable, because people work fast.
- **Saved views and filters as first-class objects.** Linear lets a filtered list become a named view
  ([view](https://mobbin.com/screens/ed670cda-0527-4716-a1a6-0159f12c4f42)). Experts build their own interface.
- **Calm by default, loud only for others' needs.** Slack's channel UI is quiet; attention comes from mentions,
  unread state and threads. An empty channel says what it is for and offers the next action
  ([Slack channel](https://mobbin.com/screens/fe601bec-b835-4429-8957-75642a5fe7e0)).
- **Fast, minimal motion.** Panels slide quickly, nothing celebrates routine work. Linear's 2026 refresh moved toward
  a calmer, more consistent interface ([Linear changelog](https://linear.app/changelog/2026-03-12-ui-refresh)).

### Critical reading

| Decision | What transfers | What does not, or harms |
| --- | --- | --- |
| Monochrome density | Quiet surfaces where people scan a lot | On a product used weekly by novices, density without guidance confuses |
| Keyboard first | Shortcuts for repeated actions, taught in context | Shortcuts and command palettes in products without repeated use |
| Properties panel | Edit in place, every field visible | Thirty empty fields shown to everyone; Jira's configurability is also its reputation for complexity |
| Configurable workflows | Teams adapt the tool | Every team builds a different product; admins carry the cost |
| Upsell in the sidebar | — | Slack places a trial offer at the top of the primary navigation ([Slack](https://mobbin.com/screens/fe601bec-b835-4429-8957-75642a5fe7e0)): business pressure in the most valuable space |
| AI entry points everywhere ("Improve task", "Ask Linear") | AI inside the object where the work happens | AI buttons on every surface, labeled with sparkles |

### Design DNA, when it fits

- **Color:** neutral surfaces, one restrained accent, a small semantic set for status and priority, carefully
  checked in dark mode (many people work in it all day).
- **Type:** one sans family, compact sizes for metadata, comfortable size for descriptions and comments, tabular
  numerals.
- **Motion:** under 200 ms, no celebration for routine actions, layout changes that keep the person's place.
- **Copy:** literal, short, verbs that match the object ("Assign", "Move to Done").
- **Flows:** bulk actions with undo, keyboard paths for the top tasks, permissions visible where they apply.

### When to push back

Consumer gamification in work tools ("badges for closing tickets"), marketing-style heroes inside the product,
modal-heavy flows for frequent actions, or the "Linear look" on a product for occasional, non-expert users.

## 3. Social and content products

Examples: X, Instagram, TikTok, Reddit-like communities, Digg, Bluesky, professional networks, niche communities.

### What their designers decided

- **The feed is the product.** Content fills the screen; chrome is minimal and icons are the vocabulary. Ranking
  decides what people see, which makes the ranking a design decision even if no designer drew it.
- **Infinite scroll and autoplay** remove the moment of choice to continue. This is the most effective and most
  criticized decision in the archetype: in February 2026 the European Commission preliminarily found TikTok's
  infinite scroll, autoplay, push notifications and recommender design in breach of the Digital Services Act, and
  suggested disabling infinite scroll over time and adding effective screen-time breaks
  ([European Commission](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act)).
  Preliminary findings do not settle the case, but the direction of regulation is clear.
- **Posting must feel instant; audience must be explicit.** X and Digg put the audience selector above the text
  field ("Everyone", a community) and say who can reply
  ([X audience](https://mobbin.com/flows/99a52f6e-d598-4720-bfc7-4fdcb64d4d0a),
  [Digg post](https://mobbin.com/flows/51e2230c-a562-4fea-910d-34bb7f3e7369)). Handshake shows the audience under the
  name ("People at your school") and confirms with a toast
  ([Handshake](https://mobbin.com/flows/5c80547c-d194-4d5d-bddc-ee7dc9205467)).
- **Lightweight reactions, heavy reporting.** Liking is one tap; reporting and blocking take several steps with
  categories. The asymmetry protects moderation, but makes self-protection slower than engagement.
- **Control as a retention feature.** Some products now show watch time, reminders and limits
  ([Whatnot watch time](https://mobbin.com/screens/d40efedd-3b9b-4193-99f5-11b30b8ca9f3)) or let people mute topics
  in place ([Fable](https://mobbin.com/screens/1163393d-c735-447b-8132-160724efd6ed)).

### Critical reading

| Decision | What transfers | What does not, or harms |
| --- | --- | --- |
| Content-first layout | Let the user's content lead; minimal chrome | Icon-only actions without labels in products for non-experts |
| Infinite feed | Endless lists when people browse with no goal and want more | A feed as the default home of a tool, a news product without an end, any product for minors |
| Autoplay | — | Autoplay by default; offer it as a choice |
| Audience selector | Always show who will see a post before it is posted | Changing defaults silently |
| Counts (likes, followers) | Signals of quality where they help | Public counts that drive comparison in vulnerable audiences |
| Notifications | Notify about people who matter to the person | Engagement notifications ("You have new suggestions") |

See [feeds and social posting](patterns/feeds-and-social-posting.md) for the pattern in detail.

### Design DNA, when it fits

- **Color:** neutral chrome so content provides color; one accent for primary actions and state (liked, following).
- **Motion:** gesture-driven, interruptible, fast (swipes, pull to refresh, media transitions from where they were
  tapped); haptics for small confirmations, sparingly.
- **Copy:** short, community-specific voice; system messages (moderation, privacy, reports) plain and serious.
- **Flows:** compose from anywhere, explicit audience, drafts saved, edit and delete with clear effects, report and
  block reachable from every piece of content.

## 4. Money apps: banks, payments and wallets

Examples: Monzo, Starling, ANZ Plus, Revolut, Cash App, Wise; crypto wallets such as Phantom, Uniswap, Coinbase Wallet;
exchanges such as Binance.

### What their designers decided

- **The balance is the hero, the action row is the second line.** Wallet homes show the total, the change, and four
  verbs (Send, Swap, Receive, Buy) ([Phantom](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5),
  [Uniswap](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112)). People open the app to check, and act
  less often.
- **Verification of the recipient before money moves.** UK and Australian banks check the payee name against the
  receiving bank ("We've matched the name below with the receiving bank. It's still important to check you're
  sending money to who you think you are.") ([Starling](https://mobbin.com/flows/588805d1-2dab-47f1-8ebb-2235862c1b2b),
  [ANZ Plus](https://mobbin.com/flows/526d53d9-6d75-4809-ae8d-d05a1de39b9d)). Uniswap warns on a new address: "You
  haven't transacted with this address before"
  ([Uniswap](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112)).
- **Scam warnings in context.** Starling shows "We've never spoken to you on the phone. If anyone on the phone says
  it's Starling, it's a scam" on the payee page ([Starling](https://mobbin.com/flows/588805d1-2dab-47f1-8ebb-2235862c1b2b)):
  the warning appears where the fraud happens, not in a help article.
- **Fees and networks explained where they appear.** Uniswap explains the network cost in a sheet and says the app
  does not receive it ([Uniswap](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112)).
- **Secrets treated as secrets.** Crypto wallets gate the recovery phrase behind warnings, an acknowledgment
  checkbox and system authentication; Coinbase Wallet flags "Not backed up" in the profile
  ([Phantom](https://mobbin.com/flows/1c019b72-1213-4f94-ae9d-b3dd5f0fbd78),
  [Coinbase Wallet](https://mobbin.com/flows/d3cb548a-9c26-4f44-9345-babf2d5d91a2)).
- **Pending is a state of its own.** Phantom's activity lists "Pending" above dated history
  ([Phantom](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5)).

### Critical reading

| Decision | What transfers | What does not, or harms |
| --- | --- | --- |
| Balance as hero | Show the number people came for, with freshness | Hiding fees and pending amounts behind it |
| Name check before paying | Verify the recipient whenever the rail allows | Treating a match as proof; say it reduces, not removes, risk |
| Contextual scam warnings | Specific warnings where the risk is | Generic, legal-sounding warnings on every screen (people learn to skip them) |
| Truncated addresses in review ("CwiH…DTnF") | — | Address-poisoning attacks create lookalike addresses that match the first and last characters; show the full address in review and highlight differences |
| "Copy to clipboard" for a recovery phrase | — | Clipboard contents can be read by other apps; offer it only with a warning, or not at all |
| Countdown offers, confetti on trades | — | Pressure and celebration around risky financial actions |
| Price charts in red and green | Change at a glance | Color alone, and Western convention assumed (in some East Asian markets red means up) |

See [wallets, transfers and crypto](patterns/wallets-and-crypto.md) and [money and progress](patterns/money-and-progress.md).

### Design DNA, when it fits

- **Color:** restrained surfaces, the brand in small doses, semantic colors reserved for state and change, always
  with signs and words.
- **Type:** tabular numerals, large amounts, currency formatted by locale, precision rules per asset.
- **Motion:** calm and short; the motion that matters is state change (pending to complete). No celebration until
  the money has really arrived.
- **Copy:** precise and composed; warnings specific to the situation ("You have never paid this account").
- **Flows:** review screens with everything that matters, irreversible actions said plainly, recovery and support
  reachable from every money screen.

## Motion, color and density by archetype

| | Habit consumer | Work tool | Social and content | Money |
| --- | --- | --- | --- | --- |
| Motion budget | High for feedback, zero while reading | Very low, fast | Gesture-led, medium | Low, state-focused |
| Celebration | Real milestones, scaled | Almost never | Small, social (a like) | Only on confirmed completion |
| Haptics | Correct answers, milestones | Rare | Small confirmations | Authentication, confirmed payment |
| Color | Saturated, playful, distinct functional colors | Neutral, one accent, semantic set | Neutral chrome, content leads | Restrained, semantic with text |
| Density | Low per step | High, adjustable | Medium-high feed | Overview with detail on demand |
| Voice | Warm character | Literal | Community-specific | Precise |

## Hybrids and conflicts

Most real products mix archetypes, and the conflicts are where design decisions are made:

- **A learning app with payments**: the lesson can be playful; the paywall, trial and cancellation are money flows
  and follow money rules (see [cancellation and retention](patterns/cancellation-and-retention.md)).
- **A team tool with a social feed** (activity, kudos): the feed must stay a work feed — no infinite engagement loops,
  no public counts that rank colleagues.
- **A fintech with gamified saving**: progress toward goals can celebrate; trades and transfers cannot.
- **A social product for professionals**: content-first layout, but notifications and visibility with work-tool
  restraint.

Rule: **apply the archetype of the moment, not of the brand.** The same product can be playful in a lesson and
precise in a payment.

## A method for a new case

1. Answer the four questions (frequency, who chose it, cost of mistakes, what the business optimizes).
2. Name the archetype per area of the product, not for the whole product.
3. List what the famous reference does and sort it into: transfers, tied to its business model, harmful.
4. Decide motion, color, density and voice per area from the table above, adjusted by brand evidence.
5. Check the flows that touch money, consent and attention against
   [flows and dark patterns](slop/07-flows-and-dark-patterns.md).
6. State the decision and what was deliberately not copied.

## Worked comparison

**Request:** "Make our budgeting app addictive like Duolingo."

**Copying the surface.** A green mascot, a daily streak for opening the app, gems for categorizing transactions,
confetti after every entry, a "Don't lose your 30-day streak!" notification at 9 p.m., energy that runs out after
three mistakes in categorization.

What goes wrong: people open the app to keep the streak, not to budget; the evening notification adds anxiety around
money; the energy mechanic blocks the core task; nothing shows whether they are spending less.

**Using the reasons.** The relevant decisions from Duolingo are *a tiny unit of progress* and *visible progress*,
not the mascot or the currency:

- The tiny unit is a weekly 2-minute review ("12 transactions to check this week"), not a daily login.
- Progress is real: "Spent €84 less on delivery than in September" and goals with dates.
- Forgiveness is built in: weeks can be skipped; the history keeps the best run.
- Celebration is calm and rare: the first month under budget, an emergency fund reached.
- No currency, no energy, no evening guilt notifications; reminders at a time the person chose.

## Common mistakes

- Copying the look of a famous product instead of its reasons.
- Importing a pattern from another archetype because it "works" there (streaks into money, density into consumer
  onboarding, feeds into tools).
- Treating a business model mechanic (hearts, energy, upsell placement) as a design pattern.
- Applying one archetype to every area of a hybrid product.
- Assuming what is common is acceptable: several archetype defaults (infinite autoplay feeds, obstructed cancelling)
  are under regulatory action.

## Checklist

- [ ] The four questions are answered for each area of the product.
- [ ] Every borrowed decision is sorted into transfers / business-model / harmful, with the reason.
- [ ] Motion, color, density and voice follow the archetype of each moment.
- [ ] Money, consent and attention flows were checked against the dark-pattern catalog.
- [ ] The person was told what was deliberately not copied and why.

## References

- Duolingo — [path and lesson completion](https://mobbin.com/flows/c199f9a9-7a91-4795-8ba5-5a3c24847009) ·
  [streak](https://mobbin.com/flows/d1739059-58c7-4b20-8630-8833869d34bb) ·
  [friend quest](https://mobbin.com/flows/e7d141df-f1bd-4092-b218-59df9b26a657) ·
  [energy](https://mobbin.com/screens/d6a2c6fe-f807-4485-b505-7778c7b59847) ·
  [streak freeze](https://mobbin.com/screens/3b18d128-382c-4604-9f98-214c7d239779) ·
  [Rive visemes (engineering blog)](https://blog.duolingo.com/world-character-visemes)
- Finch — [streak repair](https://mobbin.com/screens/d6e7a7b1-4b61-40b1-8ff7-1c602badec85) · Runna —
  [missed workouts](https://mobbin.com/screens/321454f7-be6f-48af-999a-4bb5f4d2f09d) · Brilliant —
  [streak charge](https://mobbin.com/screens/d9f1ce10-de3a-481e-b2a0-bbac8ece55a6) · Cal AI —
  [streak lost](https://mobbin.com/screens/f48da1ad-4de3-4900-9abd-6978316b5bb7)
- Jira — [work item](https://mobbin.com/screens/fb68a64a-1e18-4cd5-a2ab-4a566e43c1f3) ·
  [toast with link](https://mobbin.com/screens/f95ce716-07ef-4c1c-9a29-165ff2167e0b) · Slack —
  [channel and sidebar](https://mobbin.com/screens/fe601bec-b835-4429-8957-75642a5fe7e0) · Linear —
  [issue list](https://mobbin.com/screens/fd1b4d88-f021-49a3-98af-4cd3a87e1d29) ·
  [filters and views](https://mobbin.com/screens/ed670cda-0527-4716-a1a6-0159f12c4f42) ·
  [UI refresh, March 2026](https://linear.app/changelog/2026-03-12-ui-refresh)
- X — [audience](https://mobbin.com/flows/99a52f6e-d598-4720-bfc7-4fdcb64d4d0a) · Digg —
  [post](https://mobbin.com/flows/51e2230c-a562-4fea-910d-34bb7f3e7369) · Handshake —
  [post](https://mobbin.com/flows/5c80547c-d194-4d5d-bddc-ee7dc9205467) · Whatnot —
  [watch time](https://mobbin.com/screens/d40efedd-3b9b-4193-99f5-11b30b8ca9f3) · Fable —
  [mute](https://mobbin.com/screens/1163393d-c735-447b-8132-160724efd6ed)
- European Commission — [preliminary findings on TikTok's addictive design (Feb 2026)](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act)
- Phantom — [send](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5) ·
  [recovery phrase](https://mobbin.com/flows/1c019b72-1213-4f94-ae9d-b3dd5f0fbd78) · Uniswap —
  [send](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112) · Coinbase Wallet —
  [recovery phrase](https://mobbin.com/flows/d3cb548a-9c26-4f44-9345-babf2d5d91a2) · Starling —
  [payee](https://mobbin.com/flows/588805d1-2dab-47f1-8ebb-2235862c1b2b) · ANZ Plus —
  [payment](https://mobbin.com/flows/526d53d9-6d75-4809-ae8d-d05a1de39b9d)
