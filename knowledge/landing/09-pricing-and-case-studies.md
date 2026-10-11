# Pricing pages and customer case studies

Two pages where visitors stop browsing and start deciding. A pricing page answers "how much, for what, and what's the
catch?"; a case study answers "did this work for someone like me?". Both fail the same way: they hide what visitors
need to decide, or they inflate it.

For the in-product version of plan tables, see [plans and pricing tables](../patterns/plans-and-pricing-tables.md);
for detailed comparison tables, see [comparison, support and reviews](../patterns/comparison-support-and-reviews.md).

## Pricing page

### Questions before designing

- **What is the pricing model?** Flat per plan, per seat, usage-based, hybrid, quote-only. The design follows it.
- **Who buys, and who pays?** The user and the buyer may differ (a team lead chooses, finance approves).
- **What do visitors misunderstand today?** Ask sales and support for the top pricing questions.
- **What is the most common plan, and why?** That is the plan to help people recognize, not necessarily to push.
- **What are the hidden costs** (overage, add-ons, taxes, setup)? They must be visible.
- **Which markets and currencies** must it support?

### The pieces

- **A headline that lowers tension** with risk reducers below ("No card required. Cancel anytime.";
  [Circle](https://mobbin.com/sites/sections/a93e4670-ea71-48a0-9b9d-641ae2d1480f); "Try 7 days risk-free",
  [OpenPhone](https://mobbin.com/sites/sections/1ca6d670-c802-4c7a-9207-884d71bbd631)).
- **Monthly / yearly** as a toggle with the saving stated ("Save up to 22 %") and, on each plan, "billed yearly" and
  the previous price struck through ([Webflow](https://mobbin.com/sites/sections/1de182cf-e932-4e0f-9720-fc62f8171fb9)).
  The struck price must be the real monthly price, not an inflated anchor.
- **Separate plan families** before the cards (Site · Ecommerce; Start · Scale) instead of eight cards at once
  (Webflow, Circle).
- **Three or four plans**, each with **who it is for** in one line ("For a blog or content site"), price with its
  unit ("per user / month"), a button, and what it includes.
- **"Everything in the previous plan, plus:"** to avoid repeating lists (OpenPhone).
- **One highlighted plan** ("Most popular" only if true) with a border or band; enterprise in another tone with "Talk
  to us" ([Copy.ai](https://mobbin.com/sites/sections/2b4ce5a9-1e9c-4069-b0bb-70358ab3a5b9)).
- **Limits with numbers and an info tooltip** per row (items, form submissions, bandwidth; Webflow) instead of
  "Unlimited*".
- **A button per plan that says what happens**: "Try 14 days" on self-serve plans, "Contact sales" on enterprise; the
  current plan disabled if the person is signed in.
- **A full comparison table below**, billing FAQ and a closing.
- **Anti-example**: a pricing page that loads black with no content until an animation ends
  ([FLORA](https://mobbin.com/sites/sections/ce9e2e4f-09d6-4055-9271-7bdeb75ed593)).

### Choosing how many plans and how to show them

| Situation | Approach | Watch out for |
| --- | --- | --- |
| One product, clear tiers | 3 plan cards + comparison table | Plans that differ by features nobody understands |
| Simple product, one price | A single price with what is included | Inventing tiers to look "complete" |
| Per-seat pricing | Price per seat, a seat selector, total shown | Hiding the minimum seats |
| Usage-based | Calculator (below) plus examples | Visitors unable to estimate their bill |
| Several products | Family selector first, then plans | Eight cards on one screen |
| Enterprise-heavy | Two self-serve plans + "Talk to us" with what it includes | "Contact us" with no information at all |

### Ethics of pricing design

Pricing is where persuasion turns into manipulation most easily (see
[psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md)):

- **Allowed**: highlighting the plan that fits most customers; showing yearly savings honestly; anchoring with a real
  higher plan.
- **Not acceptable**: decoy plans designed only to make another look better while being bad for anyone who buys them;
  fake "limited time" discounts; prices without taxes in markets where totals including tax are expected or required;
  hiding the cancellation terms.

### Currency, tax and markets

- Show the visitor's currency where you actually charge in it; say when it is an estimate.
- Follow local conventions for tax display (tax-inclusive prices are expected or legally required in many markets).
- Format numbers and currencies per locale (`Intl.NumberFormat`), never with hard-coded separators.
- Regional pricing must be consistent and explainable if someone compares.

### States and edge cases

- Signed-in visitors: show their current plan, and upgrade/downgrade actions instead of "Start trial".
- Trials already used: do not promise a trial again.
- Prices that change: show the date of the change and what happens to existing customers.
- Long plan names and feature lists in translation: cards must not depend on equal heights.
- Mobile: plan cards stack; the comparison table becomes "compare two plans" or a per-plan list, not a shrunk table.

## Pricing calculator (usage-based pricing)

- **One or two variables with a slider and an editable value** (charges per month, hours, students) and the total
  shown large beside it ([Stripe](https://mobbin.com/sites/sections/088a670f-2b5e-4b7a-ad9b-680405acd8fb),
  [Duolingo](https://mobbin.com/sites/sections/e19a3827-93f1-44d7-b629-bc44a070152f)).
- **Visible tiers** on the bar with each tier's price ("0–500: 2¢ · 501–1,000: 1.8¢") so it is clear why the total
  changes (Stripe).
- **A breakdown of the total** by item, with "included in plan" subtracted
  ([Cofounder](https://mobbin.com/sites/sections/7567c411-413a-46d1-9f30-701a78b29c2b),
  [Vercel](https://mobbin.com/sites/sections/770b030a-8e99-4fc4-97a2-30e9a8a9a7b0)).
- **A recommended plan** based on the inputs, with a direct button ("Recommended plan: Pro · Choose Pro";
  [Cartesia](https://mobbin.com/sites/sections/f7fe4c69-1b50-448b-92f8-96f3bbae2568)).
- **Stated assumptions** ("Based on a typical workload: 10 % usage"; Vercel) and "Reset"
  ([Grok](https://mobbin.com/sites/sections/81db7590-2786-489b-af2d-ef506c7388b5)).
- **Comparisons with alternatives** only with verifiable data and a source.
- **Accessible**: the slider operable by keyboard with its value announced; a numeric field as an alternative; the
  total updated in a polite live region at most once after input settles.
- **Realistic defaults**: start at a typical customer's usage, not at the cheapest point.

## Customer case studies

### What makes a case study persuasive

A case study persuades when a visitor recognizes themselves in it (same industry, size, problem) and sees a specific,
credible result. Praise without numbers, or results without context, do not persuade.

### Structure

1. **Headline with the result and the customer**: "How Amplitude saved $1M with…"
   ([Intercom](https://mobbin.com/sites/sections/4534a835-e123-4bfb-853d-349b14d7456b)); "4× more meetings using…"
   ([Apollo](https://mobbin.com/sites/sections/b797eaa5-dfcc-40cd-bba0-f45b4f6763c2)).
2. **Key results at the top** in three or four points, with the highlighted quote
   ([incident.io](https://mobbin.com/sites/sections/2a716120-45a3-4a5b-91cc-3f250375bd26)).
3. **A facts panel**: industry, size, region, products used, "Migrated from X" when relevant
   ([Sequence](https://mobbin.com/sites/sections/85067bae-e00c-44b7-975a-0300e6660a73)).
4. **Context → problem → what they tried → solution → results with numbers → quote → what's next.**
5. **The product's action** and a related case at the end.

### Details

- **Figures with concrete labels** next to the quote ("260+ hours saved per person per year · 69 % adoption in 6
  months"; [Granola](https://mobbin.com/sites/sections/6fe5dee9-b811-4e60-82f3-ad7024090784)).
- **A real person with photo, name and role**, in a design with identity
  ([Customer.io](https://mobbin.com/sites/sections/d771a0a2-6e3b-49d1-a393-ab86282a0f74)).
- **Say how results were measured** and over what period; mention what else changed if relevant.
- **Show the product** in the customer's context (screens with their data, with permission and anonymized where
  needed).
- **A case index** filterable by industry, size and use case, with the main figure on each card.
- Share and "Back to all cases".

### Honesty and permission

- Every name, logo, photo, figure and quote approved by the customer, with a date.
- Results attributed to the product only as far as the customer would say.
- Remove or update cases when the customer leaves or the product changes substantially.

### Case studies across markets

Visitors trust customers from their own market and size. Tag cases by region and language; feature local cases on
local pages; translate with the customer's approval of the translated quote.

## Worked comparison

**Weak pricing page:** five plans with names like "Rocket" and "Galaxy", features listed with checkmarks only, a
"Most popular" badge on the most expensive plan, "Unlimited*" with the footnote in a tooltip, prices without tax in a
market where totals are expected, and every button reading "Get started".

**Strong pricing page:** three plans named by audience ("Solo", "Team", "Business"), each with who it is for, price per
seat with the yearly toggle and honest saving, numeric limits with explanations, "Most popular" on the plan most
customers actually choose, tax display per market, buttons saying "Try Team free for 14 days" and "Talk to sales", and
the billing FAQ answering cancellation, refunds and seat changes.

## Common mistakes

- **Plans named for marketing instead of audience.**
- **Hidden limits and costs.**
- **"Contact us" with no information.**
- **Calculators with unrealistic defaults or unstated assumptions.**
- **Case studies without numbers, or numbers without context.**
- **Unapproved logos and quotes.**

## Checklist

- [ ] Pricing model, buyer and top questions understood before designing.
- [ ] Each plan says who it is for, the price unit and real limits.
- [ ] Highlighted plan is honestly the most common; no decoys or fake urgency.
- [ ] Currency, tax and number formats correct per market.
- [ ] Signed-in, trial-used and price-change states designed.
- [ ] Calculator accessible, with realistic defaults and stated assumptions.
- [ ] Case studies with context, method, numbers and approval.
