# Dashboards and metrics

A dashboard answers "how are we doing, and what needs attention?". It is not a warehouse for every possible chart.
This pattern covers starting from the decision, choosing and defining metrics, comparisons, the difference between
zero, unknown and not applicable, layout, and going from an indicator to an action. For chart-level decisions, see
[data visualization](../25-data-visualization.md); for plan pages, see
[plans and pricing tables](plans-and-pricing-tables.md).

## The problem and who has it

- **Managers and owners** checking health at a glance, daily or weekly.
- **Operators** monitoring something live (orders, incidents, queues).
- **Analysts** exploring why something changed.

Each needs a different dashboard. When one dashboard tries to serve all three, it becomes a wall of charts nobody
reads, and the one signal that mattered is lost.

## Questions to ask before deciding

- **Which decision will someone make with this?** ("Do we need more staff this weekend?")
- **How often is it checked**, and how fast must it update?
- **Which metrics answer the decision**, and how are they defined?
- **Compared to what**: previous period, target, same period last year, other teams?
- **What should happen next** when a number looks wrong?
- **Who sees it**, and does each role need different data?

## Decision → question → metric

| Decision | Question | Metric | Comparison |
| --- | --- | --- | --- |
| Restock or not | Are we selling faster than usual? | Units sold per day | Same weekdays, last 4 weeks |
| Add support staff | Are customers waiting longer? | Median first response time | Target (2 h) and last month |
| Invest in a channel | Is it bringing customers who stay? | 90-day retention by acquisition channel | Other channels |

Start every dashboard with this table. Metrics that do not connect to a decision belong in exploration views, not on
the main dashboard.

## Alternatives and how to choose

| Need | Option |
| --- | --- |
| Daily health check | A few KPIs with comparisons and a short list of "needs attention" items |
| Live operations | A stable layout with values updating in place, alerts for thresholds |
| Exploration | A metric detail view with filters, breakdowns and drill-down |
| Reporting to others | A scheduled report or export with fixed definitions |
| Each role different | Role-based default dashboards, customizable |

## Anatomy and behavior

- **At the top, the period and the comparison**: a range selector ("Last 30 days", 7D / 30D / 3M / 12M) and "Compare
  to previous period" ([Navattic](https://mobbin.com/screens/a5be5a57-9c24-49a2-9ce5-ccd5edc17a1b),
  [Whop](https://mobbin.com/screens/0bb8b25f-0c3d-47c3-b20a-1447e7dbab9e),
  [Mixpanel](https://mobbin.com/screens/bef56b40-0756-4135-a99c-72692615331b)). Filters as chips beside them. See
  [dates and filters](dates-and-filters.md) for what periods mean.
- **KPI cards**: a name with an info button explaining the metric, a large value, the change with sign, color and icon
  ("▲ +12 % vs. …"), and, if it fits, a sparkline ([AirOps](https://mobbin.com/screens/ef4f113f-b98a-49b6-a028-4b43d9de78df)).
  The number of cards follows the decisions, not a fixed count: a few that matter beat twelve that do not.
- **"Updated 1 min ago"** and refresh; if data has a delay, say so.
- **Each chart with a title that says what it measures** and a one-line description.
- **Customize**: choose and order cards in a side panel ([Base44](https://mobbin.com/screens/0043a974-d804-4b6c-ad10-44e48f9cd909)).
- **Explore a metric** in its own view with comparisons (last year, 7-day average) on the side
  ([Steep](https://mobbin.com/screens/1f477d37-7951-4fb6-bf21-ccaf275da8b7)).
- **Example data marked** as such ("Using demo data · Continue setup").
- **No data**: the empty chart with its axis and "No visits in this period yet", not a giant 0 %.

### Is green good?

The color of a change depends on the metric: more revenue is good, more errors is bad. Define the "good direction" per
metric, and pair color with an icon and text, never color alone.

## Definitions and provenance

- **Every metric has a definition** reachable from the card: what is counted, from which source, with which filters.
- **Denominators**: show counts alongside rates ("8.2 % · 41 of 500").
- **Freshness and source**: "Billing data · updated 06:00".
- **Changes in definition** annotated on charts.
- **Consistent definitions across the product**: "Active users" means the same thing everywhere.

## Zero, unknown and not applicable

| Value | Meaning | Display |
| --- | --- | --- |
| 0 | Measured and nothing happened | "0" |
| Unknown | Not measured yet, or the source failed | "—" with "Data unavailable (source not responding)" |
| Not applicable | The metric does not apply (refund rate for a free plan) | Hide the card or explain |
| Partial | Some sources missing | The value marked "partial", with what is missing |

Showing "0" when data is missing is one of the most harmful dashboard errors: it looks like a collapse or like
nothing to worry about, depending on the metric.

## Comparisons and distortions

- Compare equivalent periods (the first 10 days of this month vs. the first 10 days of last month).
- Mark incomplete periods as in progress.
- Avoid percentage changes on tiny bases ("+300 %" from 1 to 4); show absolute values too.
- See [data visualization](../25-data-visualization.md) for axes and chart choices.

## From indicator to action

A dashboard that shows a problem and offers no next step creates anxiety, not action.

- **Each anomaly links to its detail**: the orders that are late, the tickets waiting longest.
- **"Needs attention" lists**: the specific items behind a bad number.
- **Alerts** for thresholds that matter, with the same definitions as the dashboard.

## States and transitions

- Loading: skeletons per card; cards load independently.
- Refreshing: keep values visible, mark as updating, avoid layout shifts.
- Partial failure: the affected cards show their error; totals say what they exclude.
- No data yet (new account): explain when data will appear.

## Edge cases

- Time zones in "today"; organizations in several time zones.
- Currencies and units (mixed currencies need conversion and a note).
- Very large and very small numbers; abbreviations (3.2 k, 1.4 M) formatted per locale, exact values on demand.
- Roles that should not see some metrics.

## Accessibility specifics

- KPI cards readable as text ("Revenue, 48,200 euros, up 12 % from last month").
- Charts with text summaries and data tables (see [data visualization](../25-data-visualization.md)).
- Changes not conveyed by color alone.
- Live updates not announced constantly; alerts announced.

## Copy

- Metric names in the people's vocabulary, with definitions.
- Change labels state the comparison ("vs. 1–10 Sep").
- Numbers formatted per locale.

## Common mistakes and why they happen

- **Dashboards of everything** — because every metric was available.
- **Zero shown for missing data.**
- **Incomparable periods.**
- **No definitions.**
- **No path from number to action.**

## Worked comparison

**Same business:** an online bakery checking orders each morning.

**Weak.** Twelve cards: total orders, visits, bounce rate, average order value, page speed, social followers… A line
chart of orders since launch. Yesterday's delivery failures are not visible.

**Strong.** Three cards: "Orders for today: 84 (▼ 6 vs. last Tuesday)", "Deliveries failed yesterday: 3 · See which",
"Stock running out: 2 products · Review". A small chart of orders per day for the last 4 weeks, weekdays aligned. The
detail views hold everything else.

## How to verify and measure

- **Test** with the people who make the decision: can they answer their question in under a minute?
- **Measure** dashboard visits vs. actions taken from it, use of drill-downs, and exports (a sign the dashboard misses
  something).

## References

- Navattic — [period and comparison](https://mobbin.com/screens/a5be5a57-9c24-49a2-9ce5-ccd5edc17a1b)
- Whop — [period presets](https://mobbin.com/screens/0bb8b25f-0c3d-47c3-b20a-1447e7dbab9e)
- Mixpanel — [compare to previous period](https://mobbin.com/screens/bef56b40-0756-4135-a99c-72692615331b)
- AirOps — [KPI cards](https://mobbin.com/screens/ef4f113f-b98a-49b6-a028-4b43d9de78df)
- Base44 — [customize cards](https://mobbin.com/screens/0043a974-d804-4b6c-ad10-44e48f9cd909)
- Steep — [metric detail](https://mobbin.com/screens/1f477d37-7951-4fb6-bf21-ccaf275da8b7)
