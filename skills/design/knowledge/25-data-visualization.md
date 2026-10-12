# Data visualization

How a designer turns data into something people can understand and act on. A chart is an answer to a question; when
the question is unclear, the chart is decoration. This file covers starting from the decision, choosing the encoding,
data quality and provenance, scales and comparisons, uncertainty, annotation, accessibility, and charts across
languages and locales.

For dashboards and metric screens as a whole, see [dashboards and metrics](patterns/dashboards-and-metrics.md). For
color palettes for data, see [color](10-color.md).

## What it is and why it matters

Visualization is the encoding of data into visual properties — position, length, angle, area, color, shape — so that
people can see patterns, compare values and notice exceptions faster than in a table of numbers.

Done well, it lets people:

- See a trend, a change or an outlier at a glance.
- Compare values accurately.
- Understand the uncertainty and the limits of the data.
- Decide what to do next.

Done badly, it misleads: truncated axes exaggerate differences, wrong chart types hide comparisons, missing context
makes noise look like a signal.

## 1. Start from the decision

Before choosing a chart, write the chain:

> **Decision** → **question** → **metric** → **comparison** → **chart**

| Step | Example |
| --- | --- |
| Decision | Should the support team add weekend staff? |
| Question | Is weekend ticket volume growing faster than weekday volume, and are weekend response times worse? |
| Metric | Tickets per day; median first response time |
| Comparison | Weekend vs. weekday, over the last 12 weeks |
| Chart | Two small line charts sharing a time axis: volume and response time, with weekend and weekday as two clearly labeled lines |

If the decision is unknown, ask who will look at the chart and what they will do differently depending on what they
see. A chart that would not change any decision may still be useful for awareness, but it should not take the
prominent place on the screen.

## 2. Choosing the encoding

People judge some visual properties more accurately than others. Position along a common scale is the most accurate;
length is good; angle, area and color intensity are less precise. Choose encodings so the comparison that matters uses
the most accurate channel.

| Question type | Good choices | Usually worse choices |
| --- | --- | --- |
| **Compare categories** | Bar chart (sorted), dot plot | Pie with many slices, 3D bars |
| **Change over time** | Line chart; bars for few discrete periods | Pie charts per period |
| **Part of a whole** | Stacked bar (few parts), a single bar split into parts, a pie or donut with two or three parts | Pies with many similar slices |
| **Distribution** | Histogram, box plot, strip or dot plot | Averages alone |
| **Relationship between two variables** | Scatter plot | Two separate charts side by side |
| **Ranking** | Sorted bar chart, ordered list with values | Unsorted bars |
| **Geography** | A map when location matters; a sorted bar chart when only the values matter | A map for data unrelated to place |
| **Exact values** | A table | A chart with labels on every point |
| **A single key number** | The number, large, with its comparison ("12,480 · +8 % vs. last month") | A gauge |

### Tables are visualizations too

When people need exact values, need to look up specific items, or compare many attributes, a well-designed table
(aligned numbers, tabular figures, sorting, highlighting) beats a chart.

### Small multiples

Instead of one chart with eight overlapping lines, use eight small charts with the same scales in a grid. Comparison
across panels is easy because the axes match.

## 3. Data quality and provenance

A chart inherits every flaw of its data and hides most of them. Make the data's limits visible.

- **Definitions**: what exactly is counted? "Active users" means something specific; link to the definition.
- **Source and freshness**: "Source: billing system · Updated 06:00 today".
- **Denominators**: a rate without its base is ambiguous. "Conversion 8 %" of what? 8 % of 50 visits is not 8 % of
  50,000.
- **Missing data**: show gaps as gaps, not as zeros. Zero, unknown and not applicable are different (see
  [tables and lists](patterns/tables-and-lists.md)).
- **Partial periods**: the current month is incomplete; mark it as such or exclude it from trend comparisons.
- **Changes in definition or collection**: when tracking changed, annotate the chart at that point.
- **Small numbers**: percentages from small samples swing wildly; show counts alongside.

## 4. Scales and axes

- **Bar charts start at zero**, because bar length encodes value. Truncating the axis exaggerates differences.
- **Line charts can start above zero** when the focus is change and the range is narrow, but label the axis clearly.
- **Consistent scales across compared charts**; if scales differ, make it obvious.
- **Logarithmic scales** for data spanning orders of magnitude, labeled explicitly — many people misread them.
- **Time axes**: equal spacing for equal time; mark weekends, holidays or partial periods when they matter.
- **Dual axes** (two different y-axes on one chart) invite false correlations; prefer two aligned charts.
- **Aspect ratio** changes how steep a trend looks; do not stretch or squash to make a point.

## 5. Comparisons and distortions

Common ways charts mislead, intentionally or not:

| Distortion | Example | Fix |
| --- | --- | --- |
| Truncated bar axis | Bars from 95 to 100 look like a tenfold difference | Start bars at zero, or use a dot plot |
| Cherry-picked range | A chart starting at the lowest point | Show a meaningful period, explain the choice |
| Comparing incomparable groups | Revenue of a new region vs. a mature one, no context | Normalize (per customer, per month since launch) |
| Area for one-dimensional data | Circles scaled by radius instead of area | Scale area, or use bars |
| Cumulative charts that always go up | Total sign-ups since launch hides a decline | Show per-period values |
| Averages hiding distribution | Average response time hides a long tail of very slow cases | Show median and percentiles, or a distribution |
| Correlation as causation | Two lines moving together | Say it is a correlation; seek other evidence |

## 6. Uncertainty

Many numbers are estimates: forecasts, samples, models, projections.

- **Show uncertainty**: ranges, error bars, shaded intervals, "estimated" labels.
- **Distinguish actual from projected**: solid line for actuals, dashed for projections, labeled.
- **Say how confident**: "Forecast based on the last 12 weeks; actual results may vary by ±15 %" (when that range is
  real).
- **Do not show false precision**: "12,483.27 users" for an estimate implies accuracy that does not exist.

## 7. Annotation and direct labeling

- **Title with the takeaway** when the chart supports a point: "Weekend tickets grew 40 % since March" rather than
  "Tickets by day" (when that finding is true).
- **Label lines directly** at their ends instead of using a distant legend.
- **Annotate events** that explain changes (a launch, an outage, a price change).
- **Highlight the series that matters** and mute the others.
- **Units everywhere**: currency, percentage points vs. percent, time zone.

## 8. Interaction

- **Tooltips** for exact values, reachable by keyboard and touch (not only hover).
- **Filters and time ranges** that update the chart and announce the change.
- **Drill-down** from summary to detail, with a clear way back.
- **Do not hide essential information behind interaction**: the key takeaway must be visible without hovering.

## 9. Accessibility

- **Text alternative**: a short summary of the takeaway ("Revenue grew each month except August, when it fell 12 %"),
  plus access to the underlying data as a table (WCAG 1.1.1, A).
- **Not color alone** (1.4.1, A): use direct labels, patterns, markers or shapes in addition to color.
- **Contrast** of lines, bars and important elements against the background: 3:1 (1.4.11, AA).
- **Keyboard access** to interactive elements and tooltips (2.1.1, A).
- **Reduced motion**: animated transitions between chart states should respect the preference.
- **Readable at zoom**: labels must not overlap or disappear at 200 %.
- **Screen reader navigation**: for complex interactive charts, consider structured navigation of series and points,
  or rely on the data table.

## 10. Charts across languages and locales

- **Number and date formats** follow the locale (decimal separators, grouping, date order, week start).
- **Currencies**: show the currency explicitly when there may be doubt; do not mix currencies on one axis without
  conversion and a note.
- **Right-to-left**: time axes usually still run in the direction the locale expects for time; test with native readers
  rather than assuming mirroring. Text labels and legends follow the script direction.
- **Label length**: translated labels are often longer; direct labels and axis titles need space.
- **Color meaning**: in some financial contexts, red signals rising prices and green falling; follow local conventions
  where people expect them.

## Worked comparison

**Question:** a store manager wants to know whether this month's sales are on track.

**Misleading chart.** A bar chart of daily sales for the month, y-axis from 9,000 to 10,000, no comparison, the last
bar (today, incomplete) much shorter than the others, title "Sales".

- The truncated axis makes small daily differences look dramatic.
- Today's incomplete bar looks like a collapse.
- No reference to answer "on track".

**Clear chart.**

- A single large number: "18 days into March: 182,400 € (target for the month: 300,000 €)".
- A line chart of cumulative sales for this month against the same days last March and against the target path; the
  target as a dashed line; the current day marked "today (in progress)".
- Direct labels on the lines; a note "Sales from the online store included from 4 March".
- A text alternative: "Cumulative March sales are 3 % behind the target path and 6 % ahead of last March."

## Common mistakes

- **Chart before question.**
- **Pie charts with many slices.**
- **Truncated bar axes.**
- **Averages without distribution.**
- **Missing denominators, definitions and freshness.**
- **Legends far from the data.**
- **Information only on hover.**
- **Color-only series.**

## Checklist

- [ ] The decision, question, metric and comparison are written before choosing the chart.
- [ ] The encoding puts the key comparison on position or length.
- [ ] Definitions, sources, freshness, denominators and gaps are visible.
- [ ] Axes are honest (bars from zero, consistent scales, no dual-axis tricks).
- [ ] Uncertainty and projections are shown as such.
- [ ] The takeaway is stated; lines are labeled directly; events are annotated.
- [ ] Text alternatives and data tables exist; color is not the only encoding; contrast passes.
- [ ] Formats, currencies and labels follow the locale.
