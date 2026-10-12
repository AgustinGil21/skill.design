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
- **A manageable set of plans**, each with **who it is for** in one line ("For a blog or content site"), price with its
  unit ("per user / month"), a button, and what it includes.
- **"Everything in the previous plan, plus:"** to avoid repeating lists (OpenPhone).
- **One highlighted plan** ("Most popular" only if true) with a border or band; enterprise in another tone with "Talk
  to us" ([Copy.ai](https://mobbin.com/sites/sections/2b4ce5a9-1e9c-4069-b0bb-70358ab3a5b9)).
- **Limits with numbers and an info tooltip** per row (items, form submissions, bandwidth; Webflow) instead of
  "Unlimited*".
- **A button per plan that says what happens**: "Try 14 days" on self-serve plans, "Contact sales" on enterprise; the
  current plan identified if the person is signed in, with account management available where useful.
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
| Enterprise-heavy | Self-serve offers plus explained sales option | "Contact us" without scope |

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
credible result. Numbers help when their basis is sound; a concrete qualitative account can be stronger than
an unsupported percentage. The visitor needs to understand whether the conditions resemble their own.

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
- Review cases when the customer leaves or the product changes. A historical case may remain with permission and
  clear dates, provided it does not imply a current endorsement or currently available capability.

### Case studies across markets

Visitors trust customers from their own market and size. Tag cases by region and language; feature local cases on
local pages; translate with the customer's approval of the translated quote.

## Match the evidence to the commitment

The pricing page and case study often serve different people in the same decision. An operator checks whether the
workflow fits, a manager estimates value, and a buyer checks total commitment. Let them share the same assumptions
rather than forcing each to reconstruct the offer from a different page.

Before highlighting a plan, ask what makes it appropriate: usage, permissions, service level or purchasing process.
Popularity is not suitability. A popular plan can be highlighted honestly while a selector recommends a different
one for the visitor's inputs. Explain the basis so the two signals do not appear contradictory.

### Questions beyond the plan cards

- What is the billable unit, and can a newcomer estimate it before using the product?
- Do invited, inactive, temporary or external people count as paid seats?
- When does usage reset, and can delayed events change a previously displayed estimate?
- Which costs are recurring, prepaid, one-time, optional or conditional?
- Is a displayed amount payable now, an annual commitment divided by months, or only an estimate?
- Can the buyer select a plan directly, or must another person approve billing?
- Which evidence in a customer story is attributable to the product, and what else changed at the same time?
- What content can be published with permission, and which details would expose the customer's operations?

If the team cannot explain the price consistently, simplify or clarify the commercial model before adding a
calculator. An elegant interface cannot make an undefined unit predictable.

## Alternatives with decision costs

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| One clear price | One offer with exclusions | Avoids artificial choice | Less room for segmentation |
| Stable customer needs | Tier cards and comparison | Supports fit assessment | Clear feature language needed |
| Estimable variable usage | Calculator and scenarios | Connects usage to cost | Maintain formula and defaults |
| Unpredictable usage | Range and spend controls | Honest uncertainty | Less apparent precision |
| Negotiated scope | Example scope and quote process | Honest expectations | Slower decision path |
| Qualitative evidence | Workflow story | Explains improvement | More reading than a headline metric |
| Measured outcome | Result, method and baseline | Helps assess transfer | Permission and caveats needed |

A quote-only model is reasonable when scope genuinely varies. Do not use it merely to hide a standardized price
unless there is a defensible commercial reason and visitors can still assess likely fit and next steps.
Similarly, do not add a calculator when the answer is a single fixed fee or the inputs are unknowable guesses.

## Calculator reasoning and extreme inputs

A useful calculator explains a model rather than manufacturing an impressive saving. Show the input units,
billing period, included allowance, tier behavior and excluded charges close to the result.
Changing an input should change only the assumptions it actually controls.

For tiered rates, distinguish a graduated price from a volume price: charging each band separately produces a
different total from applying one rate to all units. Show enough of the breakdown to make the transition legible.
Test values just below, at and above each boundary against the billing system's approved examples.

Treat zero, empty, negative, decimal and unusually large inputs as different cases. Zero may be valid even when
the minimum commitment means the bill is not zero. Empty means no estimate is available; it should not silently
become zero. Units that require whole items need an explained correction, not an arbitrary rounding surprise.

For estimated currency conversion, distinguish the display estimate from the settlement currency. Do not let a
locale switch silently reset selected seats or usage. Preserve assumptions so comparisons remain meaningful.

## States around a commercial decision

| State | What the visitor needs | Design response |
| --- | --- | --- |
| Prices loading | Whether an offer is available | Stable placeholder with retry; no false zero price |
| Currency unsupported | Actual settlement currency | Explain before checkout, not after submission |
| Existing customer | Current entitlement and change path | Show account context and effective dates |
| Trial already used | Available next step | Replace the unavailable trial promise |
| Quote requested | Confirmation and response expectation | Show confirmed receipt, only if known |
| Price changed during selection | Updated amount and reason | Reconfirm the changed commitment |
| Billing permission missing | Who can approve the choice | Offer a shareable summary or permitted request |
| Estimate unavailable | Which assumptions are missing | Retain inputs and provide another evaluation path |
| Case withdrawn | Relevant supported evidence | Remove endorsement and repair routes to the story |
| Case materially outdated | What remains historically valid | Date it or replace it; do not silently modernize facts |

A plan comparison may be public while account-specific discounts are private. Avoid exposing negotiated prices
in shared links or screenshots unless that sharing is intended and authorized.
A sales contact form confirming receipt is not confirmation of a purchased plan or a reserved price.

## Accessibility and localization specifics

**Requirements:** comparison relationships need programmatic structure under WCAG 1.3.1. Real tables can work
well; when transforming them on mobile, retain the plan and feature association in the reading order.
Keyboard operation is covered by 2.1.1, and custom controls need name, role and value under 4.1.2.
A price update that functions as a status message needs programmatic exposure under 4.1.3 without moving focus.

**Recommendations:** pair a slider with editable input because precise values can be difficult through dragging.
Announce a settled result rather than every intermediate amount. Keep explanatory text available on focus and
touch; if hover/focus content is used, check dismissibility, hoverability and persistence under 1.4.13.
Do not rely on a colored border alone to identify the recommended or current plan (1.4.1).

Currencies, billing periods and plurals belong in complete localized messages. An English example such as
"per member, billed annually" names both unit and commitment; another language may need a different word order.
Do not concatenate a currency, number and translated suffix and assume grammar will remain correct.

Use locale-aware number entry deliberately: visitors may type separators differently from the display locale.
Validate without silently changing magnitude. Clarify ambiguous currency symbols and distinguish tax treatment
from language selection; speaking one language does not establish a person's tax location.

In customer stories, preserve the speaker's meaning, title conventions and naming preferences. Translation may
change sentence length and emphasis, but it must not strengthen a cautious observation into a guaranteed outcome.
If a local case does not exist, explain the original customer's context rather than implying local evidence.

## Copy by moment

| Moment | Function | English illustration, not a required wording |
| --- | --- | --- |
| Plan introduction | Help self-identification | "For teams sharing projects with clients" |
| Annual selection | Explain total obligation | "Annual payment; monthly equivalent shown" |
| Estimate result | Separate model from bill | "Estimate based on the usage above" |
| Trial action | Name access and duration | "Start the trial" with verified duration nearby |
| Sales action | Name the next interaction | "Request a pricing conversation" |
| Unsupported evidence | State the limit | "Customer-reported outcome; method below" |

Avoid using the same action label for a trial, a sales form and checkout when their consequences differ.
A shorter label can work when adjacent text clearly supplies the consequence; length alone is not clarity.

## Test protocol and measurement

Ask participants with different buying roles to choose a suitable plan and explain what they would pay now,
what could increase the bill, and what happens at renewal. Then ask them to find evidence that a comparable
customer succeeded. Observe reasoning rather than asking whether the page "feels trustworthy".

Verify prices and estimator outputs against the approved commercial source, including boundary values and every
supported billing period. Check the destination carries the chosen plan, currency and commitment accurately.

Measure completed appropriate purchases or qualified quote requests, with plan changes, unexpected-bill contacts,
refunds and early cancellation as guardrails. A high-priced plan selling more is not automatically success if
buyers downgrade once they understand limits that the page concealed.

For case studies, track whether readers can identify the customer context and evidence limits. Assisted purchase
behavior can be informative but does not prove the story caused the purchase; readers self-select into it.
Report low traffic and incomplete attribution instead of assigning invented revenue to every case-page visit.

## Worked comparison (fictional design scenario)

**Weak pricing page:** five plans with names like "Rocket" and "Galaxy", features listed with checkmarks only, a
"Most popular" badge on the most expensive plan, "Unlimited*" with the footnote in a tooltip, prices without tax in a
market where totals are expected, and every button reading "Get started".

**Strong pricing page:** three plans named by audience ("Solo", "Team", "Business"), each with who it is for, price per
seat with the yearly toggle and honest saving, numeric limits with explanations, "Most popular" on the plan most
customers actually choose, tax display per market, buttons saying "Try Team free for 14 days" and "Talk to sales", and
the billing FAQ answering cancellation, refunds and seat changes.

Keep the underlying product and entitlements constant while comparing these versions; reducing five genuine plans
to three without changing the commercial model would hide options rather than improve explanation. First group
the same five offers into meaningful families, then test whether visitors can identify which family applies.

The stronger treatment wins through explicit units, limits and consequences, not through a magic card count.
If research shows buyers need a dense procurement comparison, keep the full table with a short summary above it.
If no plan is demonstrably most popular, omit that badge and explain a recommendation by fit instead.

## Common mistakes

- **Plans named for marketing instead of audience.**
- **Hidden limits and costs.**
- **"Contact us" with no information.**
- **Calculators with unrealistic defaults or unstated assumptions.** Optimistic defaults can make an estimate
  look attractive while producing poorly matched purchases; validate defaults against actual use where known.
- **Numbers without context, or qualitative evidence dismissed because it lacks a headline metric.** Teams seek
  impressive proof; preserve the method and mechanism so the reader can judge relevance.
- **Unapproved logos and quotes.**

## Checklist

- [ ] Pricing model, buyer and top questions understood before designing.
- [ ] Each plan says who it is for, the price unit and real limits.
- [ ] Highlighting has an explicit basis; popularity claims are supported; no decoys or fake urgency.
- [ ] Currency, tax and number formats correct per market.
- [ ] Signed-in, trial-used and price-change states designed.
- [ ] Calculator accessible, with realistic defaults and stated assumptions.
- [ ] Case studies have context, evidence limits, method where applicable and current publication permission.
