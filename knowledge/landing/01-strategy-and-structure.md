# Landing strategy and structure

How a designer decides what a landing page must achieve, for whom, with which evidence, and in what order — before
opening any design tool. Most weak landing pages are not badly drawn; they are badly framed: no single goal, a vague
audience, a structure copied from a template, and claims without proof.

## What it is and why it matters

A landing page is an argument. It meets a visitor at a specific moment (they clicked an ad, searched a problem, heard
about the product) and helps them decide whether to take a next step. Strategy decides:

- **Which next step** the page asks for.
- **Which visitor** it is written for, and what they already know.
- **Which objections** it must answer, and with what proof.
- **How long and in what order** the argument unfolds.
- **How success is measured** — including what happens after the click.

## Intent and stage of decision

Visitors arrive at different stages. The same product needs different pages (or different sections) for each.

| Stage | Visitor's question | What the page must do |
| --- | --- | --- |
| **Unaware of the problem** | "Why should I care?" | Name the problem in their words; show the cost of the status quo |
| **Aware of the problem, not the category** | "Is there a way to solve this?" | Explain the category and how it solves the problem |
| **Comparing solutions** | "Why this one?" | Differentiate honestly; compare; show proof |
| **Ready to act** | "How do I start, and what does it cost?" | Make the action easy; answer last doubts (price, setup, risk) |
| **Existing customer** | "What's new for me?" | Specific value of the new thing; low-friction upgrade |

Where visitors come from tells you their stage: a search for "how to stop no-shows at a clinic" is problem-aware; a
search for "[product] pricing" is ready to act; an ad on social media is often unaware.

## Before opening the editor

Write down:

- **One goal per page**: sign up, request a demo, buy, join a waitlist. Everything that does not help that goal goes
  below or goes away.
- **A concrete audience** and their situation ("support teams of 10–50 people answering in 5 channels"), not
  "businesses".
- **The main objection** (price, effort to switch, trust, "does it work for me?") and where it is answered.
- **Where people come from** (ad, search, referral): the headline must continue the promise that brought them.
- **The proof that actually exists**: customers, numbers, reviews, a demo. Do not design with invented proof.
- **What happens after the click**: the first screen after sign-up, the demo booking, the checkout. The page's promise
  must match it.

### Separating knowledge from assumptions

| | Example |
| --- | --- |
| **Known** (evidence) | "Most sign-ups come from search for 'clinic scheduling software' (analytics)" |
| **Believed** (reasoning, anecdote) | "Clinic owners worry about migrating patient data (3 sales calls)" |
| **Guessed** | "They care about mobile apps" |

The page should be built on what is known, address what is believed, and test what is guessed.

## Prioritizing objections

List objections, rank them by how often they block a decision and how costly they are, and assign each to a section
with specific proof:

| Objection | Frequency | Answer | Proof | Section |
| --- | --- | --- | --- | --- |
| "Migrating our patients is a nightmare" | High | Free import from the main systems | Import screenshot + named customer quote | How it works |
| "Too expensive for a small clinic" | High | Pricing per practitioner | Pricing table with a small-clinic example | Pricing |
| "Will patients actually use online booking?" | Medium | Reminder and booking stats | Real figure from a customer, with permission | Proof |
| "Is patient data safe?" | Medium | EU hosting, access logs | Security page link, certifications | Objections |

If an important objection has no proof available, get the proof (a customer story, a test) rather than hiding the
objection.

## Choosing the structure

### Short or long page?

| Situation | Length |
| --- | --- |
| Low commitment (free sign-up), familiar category | Short: hero, proof, a few benefits, action |
| High commitment (paid, switching cost), unfamiliar category | Long: explanation, demo, proof, objections, pricing |
| Mixed audiences | A focused page per audience, or a short core with deep sections reachable by navigation |

### Self-serve or sales?

- Self-serve pages emphasize trying the product, pricing and ease.
- Sales-led pages emphasize outcomes, proof, security and what happens in the conversation.
- Many products need both: a primary path and a clearly secondary one.

### The default narrative arc

A common order — a starting point, not a rule:

1. **Hero**: what it is, for whom, the action.
2. **Quick proof**: logos or a verifiable figure, near the hero.
3. **The problem / the change**: "before and after", or the cost of staying the same.
4. **How it works**: a few steps.
5. **What it does**: features as benefits, each with its screenshot.
6. **Deep proof**: testimonials with results, case studies.
7. **Objections**: comparison, security, pricing, FAQ.
8. **Closing**: the same action as the hero, with a different sentence.
9. **Footer**: site map, legal, contact, status.

Every section earns its place: if it is removed and nobody misses it, it does not belong.

### Justified alternative structures

- **Demo-first**: for products whose value is obvious once seen (an editor, a visual tool), put an interactive demo
  right after the hero.
- **Problem-first**: for unaware audiences, open with the problem before the product.
- **Comparison-first**: for "X alternative" pages, open with the difference.
- **Story-first**: for products with a strong founder or customer story, when the story is the proof.

### Variants by page type

| Type | Emphasis | Hero | Key sections |
| --- | --- | --- | --- |
| Software (SaaS) | Show the product in use | Real screenshot or demo | How it works, features, integrations, testimonials with numbers, pricing |
| AI tool | Show the result and the control | Live try or before/after | Real examples, limits and privacy, use cases |
| Physical product | Desire and detail | Photo or 3D of the object | Materials, use, reviews, shipping and returns |
| Studio or portfolio | Personality and work | A strong visual idea | Projects, process, clients, contact |
| Waitlist / launch | Curiosity and real urgency | Promise + email field | What's coming, when, why join |
| Comparison ("X vs Y") | Honest difference | "The alternative to X for…" | Table, migration, price |

See [recipes](14-recipes.md) for full structures, and the type-specific guides
([pricing and case studies](09-pricing-and-case-studies.md), [mobile, launches and integrations](10-mobile-launches-and-integrations.md),
[audiences, trust and about](11-audiences-trust-and-about.md), [AI, physical products and portfolios](12-ai-physical-products-and-portfolios.md)).

## Landing page navigation

- **Few options at the top** (Product, Pricing, Customers, Resources) and the primary action always visible at the end;
  "Sign in" as text, not a button.
- **A dropdown with descriptions** per item when there are several products, and a column of highlights
  ([Intercom](https://mobbin.com/sites/sections/650d948a-d6fe-47dc-8332-f3639148b176)).
- **A compact sticky bar** on scroll; on long pages, a section summary or reading progress.
- **An announcement** (launch, event) in one dismissible line at the top, not a carousel.
- **Campaign pages** may remove navigation to avoid distraction; the main site's pages should not.

## Languages and markets

- **Write per market**, not translate: problems, objections, proof and even the action can differ by country.
- **Local proof**: customers, currencies, regulations and payment methods from the visitor's market.
- **Separate URLs per language** (see [SEO and content](../14-seo-and-content.md)).

## Measuring

- **Define the primary metric before launching** (sign-ups, demos requested) and measure by source.
- **Add quality and guardrail metrics**: activation of sign-ups, demo show-up rate, refunds — a page that brings many
  sign-ups who never use the product is not succeeding.
- **Test one thing at a time** (headline, proof, action) with enough traffic; do not redesign everything on a hunch.
- **Watch recordings or click maps** to see where people leave, and ask five people what they understood from the hero.
- **Low traffic**: rely on qualitative tests (five-second tests, comprehension questions) and before/after comparisons
  rather than A/B tests that cannot reach significance.

See [measurement and learning](../26-measurement-and-learning.md).

## Worked comparison

**Same product:** scheduling software for physiotherapy clinics.

**Weak strategy.** "Goal: get leads." Audience: "healthcare businesses". Structure copied from a SaaS template: hero
with "The future of clinic management", three feature cards, testimonials from a stock library, pricing, FAQ. It gets
visits from an ad aimed at clinic owners searching for "reduce no-shows"; the headline never mentions no-shows.

**Strong strategy.**

- *Goal:* start a 14-day trial.
- *Audience:* owners of clinics with 2–10 physiotherapists, problem-aware ("too many no-shows, too many phone calls").
- *Objections ranked:* migration, price for small clinics, patient adoption, data safety.
- *Structure:* hero continuing the ad ("Fewer no-shows. Fewer calls. Patients book and get reminders by text."), proof
  from a named clinic, how booking and reminders work, migration (with the import screenshot), pricing per
  practitioner, security, FAQ, closing.
- *Measurement:* trials started, trials that send their first reminder (quality), and booking volume after 30 days.

## Common mistakes

- **Several goals** on one page.
- **Vague audiences.**
- **Templates instead of arguments.**
- **Ignoring where visitors come from.**
- **Invented proof.**
- **Measuring clicks, not outcomes.**

## Checklist

- [ ] One goal, one concrete audience, their stage of decision and source.
- [ ] Known, believed and guessed separated.
- [ ] Objections ranked and each assigned to a section with real proof.
- [ ] Structure and length chosen for the audience and commitment, with alternatives considered.
- [ ] The page's promise matches what happens after the click.
- [ ] Market-specific content for each language and region.
- [ ] Primary metric, quality metric and guardrails defined before launch.
