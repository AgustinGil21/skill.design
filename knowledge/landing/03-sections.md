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
- **Never hide decision-critical information in FAQ**: if most visitors ask "is there a free plan?", answer it near the
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
- **A timeline of the benefit** (Day 1 · Week 4 · Week 8; [Seed](https://mobbin.com/sites/sections/0a635ee3-8326-4ebe-bd7f-89a3230a8d2e)).
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
  with a technical label ("p99 latency <50 ms"; [Spade](https://mobbin.com/sites/sections/34a2151f-c9b2-4121-b790-8e85202fe9ca)).
- **Animated counters** only if the final number is visible without waiting and announced once to screen readers.
- **Every number real, current and sourced.**

## Social proof

- **Results, not praise**: "We went from 20 minutes to 30 seconds"
  ([Tines](https://mobbin.com/sites/sections/ee2358c4-5c3b-455d-aaad-eae918d67d93)); cases with a figure and logo
  ([Amplemarket](https://mobbin.com/sites/sections/887f98cc-5dbf-4655-860e-bdd5faaeee19),
  [Unify](https://mobbin.com/sites/sections/6a876f69-4a98-4e21-b6dd-c6cfde6ae0d6)).
- **Real people**: photo, name, role, company ([Harvey](https://mobbin.com/sites/sections/d591740c-b7c1-40fb-86c3-34c8511bc2c4)).
- **A mixed mosaic** (photo, quote, logo, figure) with editorial rhythm
  ([Intercom](https://mobbin.com/sites/sections/f9204160-0727-4c99-9b0d-ab5f3bd3c4ce),
  [Jasper](https://mobbin.com/sites/sections/71f4d377-4e1c-4f04-9adf-23dae73c4794)).
- **Relevant proof**: testimonials from the visitor's industry, size and market beat famous logos from unrelated
  sectors.
- **A logo strip** without fast infinite animation; if it moves, it can be paused.
- **Never** invented testimonials, logos or numbers, or ones used without permission.

## FAQ

- **Title on one side, accordion on the other** ([Podia](https://mobbin.com/sites/sections/fcace04c-ea2f-4d51-b4b5-6e69d8ebe25b),
  [Harvest](https://mobbin.com/sites/sections/0c073171-fb09-4b13-b140-937acb761f2c)).
- **The real pre-purchase questions**: card required, cancellation, what happens at the end of the trial, team changes
  ([Lemon Squeezy](https://mobbin.com/sites/sections/1d36bd23-ba39-43a2-8392-c09b09394550)).
- **The direct answer first** ("No. You can…") and links to more detail.
- **Categories and search** when there are many ([Function](https://mobbin.com/sites/sections/c9727265-b907-4654-9748-de9b7b637dc1)).
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
- **Accessibility, privacy and cookie preferences** links always present.

## Rhythm with real content

Test sections with real copy and real screenshots: a bento grid that looks balanced with lorem ipsum often collapses
with real feature names of different lengths, and translations may break card heights.

## Common mistakes

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
