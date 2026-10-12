# Plans and pricing tables

In-product plan pages and pricing tables help people choose or change a plan: upgrading, downgrading, starting a
trial, comparing what they get. They sit where money, trust and product value meet, which makes them a frequent place
for dark patterns. For marketing pricing pages, see [landing pricing and case studies](../landing/09-pricing-and-case-studies.md);
for usage and billing after choosing, see [usage, limits and subscriptions](usage-limits-and-subscriptions.md).

## The problem and who has it

- **People deciding whether to pay** need to know what they get, what it costs in total, and what happens if they
  change their mind.
- **Current customers** need to know their plan, what more they would get, and the consequences of changing.
- **Buyers who are not users** (finance, procurement) need totals, invoices and terms.

When plan pages fail: people pick the wrong plan, are surprised by the total, cannot find how to downgrade, or never
upgrade because they cannot tell what changes.

## Questions to ask before deciding

- **What is the unit of value** people pay for: seats, usage, features, projects?
- **What distinguishes plans** in ways that matter for decisions?
- **What does a typical customer actually pay** in total (seats × price × period + extras)?
- **What happens on upgrade and downgrade**: proration, lost features, data over limits?
- **Is there a trial**, and what happens when it ends?
- **Which currencies, taxes and regions** apply?

## Alternatives and how to choose

| Situation | Option |
| --- | --- |
| Few plans with clear differences | Cards side by side with a comparison table below |
| One plan with usage pricing | A calculator with real scenarios |
| Enterprise needs | A "Talk to sales" plan with what it includes and typical timeline |
| Current customer changing plan | A plan management page focused on "your plan" and what changes |

## Anatomy and behavior

- **A monthly / annual switch** at the top with the saving written ("Save 20 %"), where both options exist
  ([Coda](https://mobbin.com/screens/567ef516-bbfe-4cae-b5a5-0c2b6dded7e3),
  [Melio](https://mobbin.com/screens/67518093-a65c-482d-92cb-93b57cc6f88c)).
- **A small number of plans**, the recommended one highlighted with a reason ("Most teams your size choose this"), and
  the **current plan marked** ("Your plan", button disabled; [Webflow](https://mobbin.com/screens/f598251e-1a27-4d42-bc55-b0308650382c),
  [Linear](https://mobbin.com/screens/881e0a06-83c5-437d-90ea-fa58c5f69c6a)). Recommend only when the recommendation is
  honest; "Most popular" must be true.
- **Who each plan is for** in one line ("For teams that…") before the feature list.
- **"Everything in Pro, plus:"** to avoid repeating lists — with a full comparison table available, because
  cumulative lists force people to remember previous columns.
- **Price with a clear unit** ("per person / month", "billed annually") and the annual total when billed annually
  ([Workable](https://mobbin.com/screens/69659b14-f151-49df-a6b8-24eedb7912dc)).
- **A comparison table** below, grouped by theme, with an info button per row and the current plan's column
  highlighted ([Slite](https://mobbin.com/screens/6ab05b0e-db3d-4cc9-956d-9ffa785476de)). Use a real table with headers.
- **Buttons with different verbs by state**: "Your plan", "Upgrade", "Downgrade", "Talk to sales".
- **Free trial**: days remaining visible, and what happens when it ends (charged automatically? downgraded?).

### Total cost by scenario

Prices per unit hide totals. Show what a realistic customer pays:

```
Team plan · 12 people · billed annually
12 × 9.00 USD × 12 months = 1,296.00 USD per year (+ tax)
```

Offer a seat or usage input so people see their own total.

### Consequences of changing plans

| Change | Show before confirming |
| --- | --- |
| Upgrade | New price, prorated charge today, next renewal date and amount |
| Downgrade | Features lost, what happens to data over limits, effective date, credit or refund |
| Monthly to annual | Total charged today, saving |
| Cancel | End date, what remains accessible, data retention, how to export |

## Honesty

- **No hidden prices**: taxes and fees shown or clearly flagged as added at checkout.
- **No difficult cancellation**: downgrade and cancel as findable as upgrade.
- **No fake countdowns or fake "only today" discounts.**
- **No decoy plans** created only to push another.
- **No pre-selected add-ons.**

See [psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md).

## States and edge cases

- Current plan, trial, past due, cancelled but active until a date, grandfathered (old plan no longer sold).
- Plans unavailable in a region or currency.
- Seat counts lower than current members on downgrade.
- Buyer is not the user: invoices, purchase orders, billing contacts.

## Accessibility specifics

- Comparison tables with row and column headers; check and dash marks with text equivalents ("Included", "Not
  included").
- The billing period switch is a labeled radio group or toggle with state announced; prices update with an
  announcement.
- The recommended plan not marked by color alone.

## Copy

- Plan names that describe who they are for, or neutral names; never names that only make sense internally.
- Prices formatted for the locale and currency, with the period.
- Feature names in the people's vocabulary, with explanations.

## Common mistakes and why they happen

- **Unit prices without totals.**
- **Cumulative lists without a full comparison.**
- **Hidden downgrade paths** — retention pressure.
- **Recommended badges that are not true.**
- **Prices that change at checkout.**

## Worked comparison

**Same customer:** a 14-person agency on the Starter plan considering Pro.

**Weak.** Three cards with per-person monthly prices, "Most popular" on Pro, a list "Everything in Starter, plus 8
features". The upgrade charges an annual amount without warning; downgrade is only possible by email.

**Strong.** "Your plan: Starter · 14 people · 98.00 USD/month". Pro shows "For agencies that share work with clients"
and the agency's total: "14 × 12.00 = 168.00 USD/month · billed today: 52.30 USD (prorated)". A comparison table
highlights the rows that differ. Downgrade is available in the same page with its consequences.

## How to verify and measure

- **Measure** plan changes, downgrade and cancellation attempts, refunds and support contacts about billing after a
  change.
- **Test** comprehension: can people state what they will pay and what they will get?

## References

- Coda — [monthly / annual switch](https://mobbin.com/screens/567ef516-bbfe-4cae-b5a5-0c2b6dded7e3)
- Melio — [monthly / annual switch](https://mobbin.com/screens/67518093-a65c-482d-92cb-93b57cc6f88c)
- Webflow — [current plan marked](https://mobbin.com/screens/f598251e-1a27-4d42-bc55-b0308650382c)
- Linear — [current plan marked](https://mobbin.com/screens/881e0a06-83c5-437d-90ea-fa58c5f69c6a)
- Workable — [price unit and annual total](https://mobbin.com/screens/69659b14-f151-49df-a6b8-24eedb7912dc)
- Slite — [comparison table](https://mobbin.com/screens/6ab05b0e-db3d-4cc9-956d-9ffa785476de)
