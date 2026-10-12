# Landing page sections

Each section answers a question the visitor has, with a title that states the benefit or idea, little text and visual
proof. This file is a catalog of sections with the reasoning for choosing, ordering, merging and omitting them —
because the order of questions differs by visitor, and the same section type can help or hurt depending on content.

## Question → section → proof

Start from the visitor's questions (see [strategy](01-strategy-and-structure.md)), then pick sections:

| Visitor question | Section | Proof that answers it |
| --- | --- | --- |
| "What is it, and is it for me?" | Hero | Plain headline, real product visual |
| "Does it actually work?" | Demo, how it works | Interactive demo, real screenshots, steps |
| "What can it do for my case?" | Features, use cases | Feature screenshots by task or audience |
| "Who else uses it?" | Social proof | Named customers, results, logos with permission |
| "Is it better than what I use?" | Comparison | Verifiable differences |
| "How much, and what's the catch?" | Pricing, FAQ | Clear prices, terms |
| "Is it safe?" | Security, trust | Certifications, policies, hosting |
| "How do I start?" | Closing | The action, with risk reducers |

### Omit, merge, reorder

- **Omit** a section when its question is not one visitors have, or when there is no real proof for it.
- **Merge** when two sections answer the same question (features and use cases often can be one section with tabs).
- **Reorder** by visitor stage: comparison earlier for switchers; pricing earlier for ready-to-buy visitors.
- **Keep decision-critical information near the decision as well as in FAQ**: if most visitors ask "is there a free
  plan?", answer it near the
  pricing or the hero.

Vary the rhythm (full width, two columns, grid) so the page is not a stack of identical blocks.

## Features (and bento grids)

- **One idea per card**, with a real fragment of the product, not a generic icon
  ([Retool](https://mobbin.com/sites/sections/0daad8f7-cdde-4ef2-a454-2a26d2bbe0a5),
  [Loom](https://mobbin.com/sites/sections/4470dfca-a7ae-4a96-a9b4-a33395edbd07)).
- **Different sizes with hierarchy**: the most important takes more space; if all weigh the same, it is a list.
- **A concrete number when it exists** ("3,400 icons to choose from") instead of adjectives.
- **Group by audience or task** with "Learn more" per group
  ([Threads](https://mobbin.com/sites/sections/88bf981a-9759-44bb-9c0e-e03cc6ecf2cd)).
- **"And also…"** as a compact list for secondary items, instead of more large cards
  ([Miro](https://mobbin.com/sites/sections/5b9cd8b3-d6f3-4983-a9f3-fe36687c2bcc)).
- **Anti-example**: three cards with icon + title + generic sentence ("Fast", "Secure", "Simple").

## How it works

- **A few numbered steps** with a visual per step showing that moment of the product
  ([Superpower](https://mobbin.com/sites/sections/4f88b0b2-0b0a-4f83-abba-cc5971bd13b8),
  [FLORA](https://mobbin.com/sites/sections/35657c50-f894-4f9e-9a02-7ec46c414587)).
- **Verbs from the person's side** ("Choose your coffee · Choose how often · Relax";
  [Escape Cafe](https://mobbin.com/sites/sections/68d54554-65f5-4fd2-a974-c30e7c9eaffc)).
- **Step by step in depth** with a list of what is included and an action at each step when the process is the product
  ([Function](https://mobbin.com/sites/sections/7c72acdf-c8a3-425c-b7a6-2e0c487bb17c)).
- **Large numbers as a graphic element** (01, 02) when the brand allows it
  ([Trawelt](https://mobbin.com/sites/sections/629aae31-4a94-46df-a97f-3180a6ae22e0)).
- **A progress line** that advances on scroll and highlights the current step
  ([Giga](https://mobbin.com/sites/sections/f850ffc1-be4a-4064-88d5-9b52d2ec9d52)).

## Scroll storytelling (pinned sections)

- **Text advancing on one side, a pinned visual on the other that changes** with each step
  ([Mural](https://mobbin.com/sites/sections/94100049-8b7d-4b4a-a114-bde6f6dd71f5)); the step list is also clickable to
  jump.
- **A timeline of the benefit** (Day 1 · Week 4 · Week 8;
  [Seed](https://mobbin.com/sites/sections/0a635ee3-8326-4ebe-bd7f-89a3230a8d2e)).
- **A visualization that transforms** with the text (Explore → Generate → Refine → Scale;
  [Wild](https://mobbin.com/sites/sections/eef9343d-0d21-41e4-9524-54462b7612db)).
- **Rules**: the content must be readable without the animation; do not hijack scrolling; stack on mobile; honor
  reduced motion.

## On-page demo: demo, screenshot or video?

| Option | Best when | Cost |
| --- | --- | --- |
| **Interactive demo** | The value is felt by doing (editors, builders) | Build and maintain; must load fast |
| **Screenshots** | The value is visible at a glance | Can look static; must stay current |
| **Video** | The value unfolds over time (a workflow) | People may not play it; needs captions |
| **Recorded walkthrough** | Complex products | Less authentic than real use |

- **A touchable version of the product** with a hint ("Click anywhere to add columns";
  [monday.com](https://mobbin.com/sites/sections/cb5efa4f-8757-45c7-a26f-ffadd272a4fb)) or a guided tour ("Interactive
  demo below · click"; [The Leap](https://mobbin.com/sites/sections/93ef6214-dac2-4f0a-8171-75df5652fef0)).
- **A playground** for technical products ("Open the playground";
  [Framer](https://mobbin.com/sites/sections/0ff6a925-ee1d-4f53-aca0-05b0cab5419b)).
- **Video with controls and visible duration** (1:17) when a demo is not possible
  ([Kajabi](https://mobbin.com/sites/sections/ac0b2cd1-430e-47db-97b8-ef46bd5037ee)), with captions.
- **Deferred loading** that does not block the page; an image + text alternative if it fails.

### Demo states

Design the demo's loading, error and reset states, and a way back to the start; an interactive demo that breaks or
gets stuck is worse than a screenshot. Mark demo data as an example.

## Comparison ("before / after", "us / them")

- **Two parallel columns**, row by row: today's problem and how it is solved
  ([Ploy](https://mobbin.com/sites/sections/9138eef2-4217-4b65-bdac-b9f7909c6d40),
  [V7](https://mobbin.com/sites/sections/17e4b22d-7c8d-45ff-a87c-47b61b089da6)).
- **Against a named competitor**, with verifiable differences and no mockery
  ([Pitch](https://mobbin.com/sites/sections/26fcfa15-59d6-4ba6-b654-91474bcd2ed6),
  [User Interviews](https://mobbin.com/sites/sections/079c8c77-f0d7-4326-96a6-389b6d135837)). Compare equivalent
  plans and dates; update when competitors change.
- **A toggle "The old way / The new way"** that changes the illustration
  ([Parker AI](https://mobbin.com/sites/sections/34c27591-02c4-49ee-9452-875696403b6e)).
- **Anti-example**: savings without a source ("83–92 % less") in a gradient headline
  ([Copy.ai](https://mobbin.com/sites/sections/78bc277a-11a9-4cd5-9ddc-2b5ed13f57c3)).

## Numbers

- **Three or four large figures with labels that say what they measure**
  ([Ramp](https://mobbin.com/sites/sections/b3c99307-fd22-4b51-8d0b-11bc1d750391),
  [Fluz](https://mobbin.com/sites/sections/2cd277b3-579b-4d9d-8a70-bc882293c9e7)).
- **A surprising figure** ("Zero bank accounts to change", Fluz) breaks monotony.
- **Visualized** when size matters ([Aave](https://mobbin.com/sites/sections/02770c29-a1ea-4602-894f-9a59a779f0ea)) or
  with a technical label ("p99 latency <50 ms";
[Spade](https://mobbin.com/sites/sections/34a2151f-c9b2-4121-b790-8e85202fe9ca)).
- **Animated counters** only if the final number is visible without waiting and announced once to screen readers.
- **Every number real, current and sourced.**

## Social proof

- **Results, not praise**: "We went from 20 minutes to 30 seconds"
  ([Tines](https://mobbin.com/sites/sections/ee2358c4-5c3b-455d-aaad-eae918d67d93)); cases with a figure and logo
  ([Amplemarket](https://mobbin.com/sites/sections/887f98cc-5dbf-4655-860e-bdd5faaeee19),
  [Unify](https://mobbin.com/sites/sections/6a876f69-4a98-4e21-b6dd-c6cfde6ae0d6)).
- **Real people**: photo, name, role, company
  ([Harvey](https://mobbin.com/sites/sections/d591740c-b7c1-40fb-86c3-34c8511bc2c4)).
- **A mixed mosaic** (photo, quote, logo, figure) with editorial rhythm
  ([Intercom](https://mobbin.com/sites/sections/f9204160-0727-4c99-9b0d-ab5f3bd3c4ce),
  [Jasper](https://mobbin.com/sites/sections/71f4d377-4e1c-4f04-9adf-23dae73c4794)).
- **Relevant proof**: testimonials from the visitor's industry, size and market beat famous logos from unrelated
  sectors.
- **A logo strip** without fast infinite animation; if it moves, it can be paused.
- **Never** invented testimonials, logos or numbers, or ones used without permission.

## FAQ

- **Title on one side, accordion on the other**
  ([Podia](https://mobbin.com/sites/sections/fcace04c-ea2f-4d51-b4b5-6e69d8ebe25b),
  [Harvest](https://mobbin.com/sites/sections/0c073171-fb09-4b13-b140-937acb761f2c)).
- **The real pre-purchase questions**: card required, cancellation, what happens at the end of the trial, team changes
  ([Lemon Squeezy](https://mobbin.com/sites/sections/1d36bd23-ba39-43a2-8392-c09b09394550)).
- **The direct answer first** ("No. You can…") and links to more detail.
- **Categories and search** when there are many
  ([Function](https://mobbin.com/sites/sections/c9727265-b907-4654-9748-de9b7b637dc1)).
- **Accessible**: buttons with `aria-expanded`, answers in the DOM (and, for search engines, FAQ structured data where
  appropriate).

## Closing

- **Repeat the action with a different sentence**, short, with risk reducers ("No card · 7-day trial · 90+ content
  types"; [Copy.ai](https://mobbin.com/sites/sections/43e1da3a-16d7-4e1d-81ca-2895817ba805)).
- **A visual moment of its own** (brand color full width, a shape returning from the hero;
  [The Leap](https://mobbin.com/sites/sections/5a5e734d-0b06-4545-8131-5e421c4560be)).

## Footer

- **Site map columns**, legal, language and region, social links, service status ("All systems operational";
  [Dub](https://mobbin.com/sites/sections/bc31e448-f56a-4b11-939d-55d0b472ebec)).
- **Subscription** with what is received and how often ("Every Friday at 16:00";
  [Fiasco](https://mobbin.com/sites/sections/af0c1930-9ed3-4ed4-9af0-dfbc96b3a625)) in the visitor's time zone.
- **A brand signature**: a giant logotype or the hero's phrase as a close
  ([Maze](https://mobbin.com/sites/sections/43b8823a-7002-4bd5-a23d-88673d35492a),
  [Vizcom](https://mobbin.com/sites/sections/3492c84c-d0ad-4b3f-8692-481bb7609472)).
- **Accessibility, privacy and cookie preferences** links where applicable, discoverable without searching.

## Rhythm with real content

Test sections with real copy and real screenshots: a bento grid that looks balanced with lorem ipsum often collapses
with real feature names of different lengths, and translations may break card heights.

## Questions before adding another section

- Which unresolved question does the block answer, and where did that question come from?
- Does the visitor need its answer before committing, or only after deciding to investigate further?
- Is the evidence specific to this audience, plan and market, or merely available in the asset library?
- Could the same answer live beside the action that creates the doubt, without a separate section?
- Does the proposed interaction make comparison easier, or conceal content to produce visual variety?
- Who will update the section when pricing, availability, product behavior or permission to quote changes?

A section inventory is not a content strategy. Assign each block a job and a reason for its position. When a page
feels long, distinguish repeated claims from necessary detail. Removing repetition improves pace; removing a
migration caveat may make the page shorter while making the decision substantially worse.

## Choosing a structure without following a recipe

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| One clear workflow | Sequential story | Preserves cause and effect | Slower for expert scanning |
| Several independent tasks | Grouped feature overview | Supports selective reading | Can fragment the proposition |
| Comparing buyers | Comparison before features | Answers the immediate question | Requires ongoing verification |
| Unfamiliar product | Demonstration before detail | Establishes a mental model | Needs a noninteractive fallback |
| Distinct audiences | Routes to focused pages | Reduces irrelevant detail | Adds navigation and maintenance |
| Sparse evidence | Brief explanation and evaluation path | Keeps claims honest | Offers less social reassurance |

Tabs fit related views that are useful one at a time. They are a poor default for features people must compare
simultaneously. A grid can expose the differences faster; a long sequence may better explain dependencies. On a
narrow screen, the solution may change because two parallel columns cease to be comparable at a glance.

Do not omit an important objection simply because supporting evidence is weak. State the known capability and
its limit, or provide a route to resolve the uncertainty. Omission is appropriate for an irrelevant section, not
for a material limitation that makes an otherwise persuasive claim misleading.

## States across composed sections

| State | Visitor consequence | Response |
| --- | --- | --- |
| Embed loading | Proof not yet inspectable | Show a meaningful preview and keep reading available |
| Embed blocked | Consent or policy prevents playback | Explain the dependency and provide text or images |
| Demo reset | Previous changes disappear | Name the scope and restore the initial example |
| No matching use case | Visitor cannot establish fit | Offer adjacent documentation or an honest limit |
| Quote withdrawn | Evidence is no longer publishable | Remove attribution and revise the supported claim |
| Stale comparison | Decision may rest on old terms | Review the affected rows and disclose verification date |
| Partial locale content | Some proof cannot be read | Identify the content language before navigation |
| Service unavailable | Primary action may fail | Give accurate status and a useful alternative |

A section can fail editorially as well as technically. Expired evidence needs an owner and a fallback, just as a
failed video does. If removing a quote leaves a promise unsupported, remove or narrow the promise too; replacing
the portrait while keeping the unsupported result is not a meaningful repair.

## Accessibility, reading order and localization

WCAG 1.3.1 Info and Relationships (A) requires relationships conveyed visually to be programmatically determinable
or available in text. Use actual headings for the argument structure and table semantics for comparisons whose
row and column relationships carry meaning. A collection of decorative cards is not automatically a table.

WCAG 1.3.2 Meaningful Sequence (A) applies when sequence affects meaning. A mobile grid should preserve the logical
claim-proof relationship, even if desktop art direction places images in alternating columns. Test the document
order before deciding that visual rearrangement is harmless.

WCAG 2.1.1 Keyboard (A) and 4.1.2 Name, Role, Value (A) apply to accordions, tabs and demo controls. Expose state and
relationships with an appropriate semantic pattern. An expanded answer must not leave its links unavailable to
keyboard users, and a collapsed answer should not expose invisible controls in the focus sequence.

For prerecorded media, apply the relevant WCAG 1.2 criteria, including 1.2.2 Captions (Prerecorded) (A) where
applicable. Captions do not replace an explanation of visual information that audio does not convey. Decide which
information the visitor needs and provide the corresponding accessible alternative.

As recommendations, let people bypass a long demonstration and use descriptive section links on complex pages.
There is no universal required number of blocks or cards. A readable linear page can be more accessible than a
shorter page full of controls; reducing scroll distance is not itself an accessibility achievement.

Localize section priority as well as words. A market without a named integration needs a different fit explanation,
not a translated promise about that integration. Keep quotes faithful and permitted; label translations when that
context matters. Avoid reassembling sentences from translated card labels because agreement and word order vary.

Format comparisons with explicit units and market scope. Test text expansion, scripts without spaces and mixed
right-to-left text with product identifiers. Let card heights follow content where possible; truncating a caveat
to protect symmetry makes the comparison less honest.

## Worked comparison: helping a clinic evaluate migration

This fictional example uses the same content in both versions: appointment booking, reminders, spreadsheet import,
per-practitioner pricing and a statement explaining supported import fields. No customer outcome is asserted.

**Weak:** a benefits grid leads with generic speed and simplicity. A decorative process animation follows. Import
limits are hidden inside the last FAQ answer, and the pricing link appears only in the footer. The page treats all
features as equally important, although migration determines whether the clinic can plausibly start.

**Stronger:** after establishing the booking task, the page shows which records import and which require review.
A short workflow explains preparing a spreadsheet, previewing mappings and checking rejected rows. Pricing then
helps the clinic assess cost, followed by reminder settings and a direct evaluation action.

The improved order answers feasibility before desirability. It gives up an early catalogue of attractive features,
but reduces the risk of a trial started with false expectations. If evidence later shows new clinics with no
existing data dominate this campaign, the migration detail should move later or into a focused route.

Reject a tabbed import-versus-reminders section for this version: it conceals independent information that matters
to the same visitor. Reject a mandatory interactive tour because a buyer evaluating on a phone may only need the
supported fields. A concise preview plus optional walkthrough retains depth without requiring participation.

## How to verify and measure the argument

Ask participants to locate an answer to a realistic pre-purchase doubt without telling them its section name.
Record whether they find it, interpret its scope correctly and know what remains uncertain. Then ask them to
explain why the product does or does not fit. Correct rejection is evidence of useful communication.

Observe transitions between claim and proof, especially when tabs, carousels or pinned scenes intervene. A heatmap
showing little interaction may mean the default content sufficed; it may also mean people never discovered the
control. Pair behavioral data with task observation rather than declaring either interpretation from clicks alone.

Track qualified progression and downstream mismatch reasons alongside section reach. Scroll depth is diagnostic,
not proof of persuasion. A shorter page can reduce scrolling and improve decisions; a longer page can support
procurement without raising immediate conversion. Define the expected role before judging the metric.

Review repeated sections for consistency after every offer change. Closing actions, pricing caveats and FAQ
answers often drift because different teams own them. Shared content sources can reduce that risk, but localized
exceptions still require explicit ownership and review.

## Common mistakes

Template sections accumulate because every team wants representation. Require each proposed addition to name
the visitor question it answers and the evidence it adds. Generic feature cards often reflect missing product
examples; commissioning accurate evidence is more useful than inventing another decorative layout.

- **Sections chosen from a template**, not from questions.
- **Feature cards with generic icons.**
- **Testimonials that praise instead of proving.**
- **Decision-critical information hidden in FAQ.**
- **Demos without states.**
- **Unsourced numbers.**

## Checklist

- [ ] Each section answers a real visitor question with real proof.
- [ ] Sections were omitted, merged or reordered for the visitor's stage.
- [ ] Features show the product, with hierarchy.
- [ ] Demo type chosen deliberately, with states and fallbacks.
- [ ] Comparisons are fair and current.
- [ ] Social proof is relevant, real and permitted.
- [ ] FAQ answers directly; critical answers also appear near decisions.
- [ ] Rhythm tested with real content and translations.

- [ ] Every interactive block has a keyboard path and a meaningful fallback.
- [ ] Evidence expiry, localization gaps and content ownership are explicit.
- [ ] Visitors can find material limits without opening unrelated accordions.
