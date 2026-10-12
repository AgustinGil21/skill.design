# Tables and lists

A table answers "which one of all of these?" and "what do I do with these?". Everything that helps find goes above;
everything that acts on the chosen items appears only when something is chosen. Lists and tables are where people spend
much of their time in work products, so small decisions about columns, density and selection compound into hours.

## The problem and who has it

People use tables and lists to:

- **Find** a specific item (a customer, an invoice, a ticket).
- **Scan** for items that need attention (overdue, failed, new).
- **Compare** items on several attributes.
- **Act** on one item or on many at once.
- **Monitor** a set of items that changes over time.

Each of these tasks needs something different. A table designed for comparison may be poor for finding; a list
designed for scanning may be poor for bulk action. When the representation does not match the task, people export to
spreadsheets — the most common sign that a table failed.

## Questions to ask before deciding

- **What is the main task**: find, scan, compare, act or monitor?
- **How many items**: ten, a thousand, a million? Does it grow?
- **What identifies an item** for the person (name, number, date, a combination)?
- **Which attributes do people use to decide**, and which are merely available?
- **What actions** happen on single items and on groups? How risky are they?
- **Who uses it, how often**: an expert eight hours a day, or an occasional visitor?
- **Does the data change while people look at it?**
- **On which devices**, and how wide is the screen?

## Alternatives and how to choose

| Task and content | Representation | Why | Cost |
| --- | --- | --- | --- |
| Compare many attributes across many items | **Table** with sortable columns | Alignment makes comparison fast | Hard on narrow screens |
| Scan items identified mostly by a title and a status | **List** with a primary line and secondary details | Readable, works on mobile | Limited comparison |
| Visual items (images, designs, products) | **Grid of cards or thumbnails** | Recognition by image | Poor for comparison of attributes |
| Items moving through stages | **Board** (columns by status) | Shows workflow (see [boards](boards-and-record-details.md)) | Poor for large volumes |
| Items in time | **Calendar or timeline** | Shows when | Poor for attributes |
| Items in space | **Map with a list** | Shows where (see [commerce and maps](commerce-and-maps.md)) | Needs a list alternative |
| A handful of items | **Simple list**, no toolbar | Less machinery | — |

Many products offer several views of the same data (table, board, calendar). Offer extra views only when people
genuinely switch tasks; each view multiplies design and maintenance work.

## When to use it and when not

- A table with a toolbar, saved views and bulk actions is overkill for twelve items that rarely change.
- Cards are often chosen because they look modern; for comparing prices, dates and statuses across items, they are
  worse than a table.
- Infinite scroll suits casual browsing feeds; for work lists where people need to find their place, report position
  or reach the footer, pagination or "Load more" is usually better.

## Anatomy and behavior

1. **Page header**: a title with the total ("4 subscribers"), data freshness ("Updated 21 min ago",
   [Substack](https://mobbin.com/screens/862f4828-a616-4834-8e0c-097671c9b4e8)) and the primary action at the end
   ("Add", "Import / Export").
2. **Saved views** as tabs or chips above ("All", "New", "No activity in 30 days";
   [Calendly](https://mobbin.com/screens/4a027267-d133-4f24-9533-bb3e8eee1dfb),
   [Hotjar](https://mobbin.com/screens/ff3024b1-5264-483e-afa7-460a0224ff89)). Views are filters with names; they keep
   the same columns and actions.
3. **Toolbar**: search, Filter, Sort, Columns/Display, and download at the end. Active filters show as removable chips
   ([Deel](https://mobbin.com/screens/3bc65840-9e16-4227-82fa-6068da77bf1b)).
4. **Table**: the first column is identity (avatar or icon + name + a secondary detail); statuses as badges with color
   and text; numbers aligned to the end with tabular figures; relative dates with the absolute date available.
5. **Footer**: "Showing 1–25 of 217", rows per page, pagination; or aggregates per column (count, maximum, % empty;
   [Twenty](https://mobbin.com/screens/4896dd71-fc2f-4222-b22b-2bab9b3ec225)).

### Choosing columns

Start from the questions people ask of the list, not from the fields in the database.

| Question | Column |
| --- | --- |
| "Which one is it?" | Identity: name and a disambiguating detail |
| "Does it need my attention?" | Status, due date, last activity |
| "How big or important is it?" | Amount, priority, size |
| "Whose is it?" | Owner, assignee |

- Put identity first and the most decision-relevant columns next.
- Hide rarely used columns by default, with a column picker.
- Remember column choices per person.

### Sorting and filtering

- A sensible default sort for the main task (most recent activity, due date, alphabetical for directories).
- Sorting by clicking headers, with the current sort shown (`aria-sort`).
- **Stable ordering**: when values tie, sort by a secondary key so rows do not jump between loads.
- Filters combine with AND by default; say so when it matters, and make OR explicit (see
  [dates and filters](dates-and-filters.md)).

### Absence: zero, unknown and not applicable

An empty cell can mean very different things. Do not collapse them all into one dash.

| Meaning | Example | Display |
| --- | --- | --- |
| **Zero** | The customer has 0 open invoices | "0" |
| **Unknown or not yet available** | Revenue not yet calculated for today | "Not available" or "Calculating…", with explanation on focus |
| **Not applicable** | "Expiry date" for a product that does not expire | A dash with an accessible label "Not applicable", or the column hidden for that type |
| **Empty by choice** | No phone number provided | "—" with an accessible label "No phone number", or an action "Add phone" |
| **Hidden by permission** | Salary column for a non-manager | "Restricted" or the column removed for that role |

Totals and averages must say whether unknown values were excluded.

## Selection and bulk actions

- A checkbox per row plus a header checkbox with an indeterminate state.
- When items are selected, a **floating bar at the bottom** shows "N selected", "Select all 217", the actions and an X
  to clear ([Calendly](https://mobbin.com/screens/4a027267-d133-4f24-9533-bb3e8eee1dfb),
  [Hotjar](https://mobbin.com/screens/ff3024b1-5264-483e-afa7-460a0224ff89),
  [Wrangle](https://mobbin.com/screens/51f10d5c-7b68-46a6-b4b2-da44b0053186)), or it replaces the toolbar
  ([Xero](https://mobbin.com/screens/c38e93b2-8b11-453d-b6bb-0e0498dbf714)).
- **Say when an action does not apply to all**: "2 selected · 1 can be deleted" (Xero). Better than failing silently.
- **Destructive actions last**, separated and styled as destructive.
- **After the action**: a message with the result ("2 emails sent") and undo when possible.

### Selection across pages and changing data

- "Select all 217" must be explicit, and the count must be visible while acting.
- **Selection is a set of identities, not of positions**: when data reloads, sorts or filters, selected items stay
  selected even if they move.
- If selected items disappear (deleted by someone else, filtered out), say so: "3 selected items are no longer in this
  view."
- For large selections, show what will happen before applying (a preview or a count per outcome).

## Row actions

- Frequent actions visible on hover (and always visible on touch); the rest in a "⋯" menu at the end of the row.
- In the menu: common actions first, destructive ones last, separated
  ([Substack](https://mobbin.com/screens/862f4828-a616-4834-8e0c-097671c9b4e8)).
- Clicking the row opens the detail (a page or a side panel); the checkbox must not open the detail.

## Density and readability

- Row height around 40–48 px on desktop; a compact density option for intensive tables.
- **Truncation**: truncate long text with an ellipsis and make the full value available (on focus, in the detail, and
  to assistive technology); never truncate numbers; prefer wrapping to two lines for names when space allows.
- Sticky header on scroll; sticky first column when there is horizontal scroll.
- No heavy vertical borders: thin horizontal separators or very subtle zebra striping.

## Responsive behavior

| Approach | Keeps | Loses | Use when |
| --- | --- | --- | --- |
| Horizontal scroll with sticky identity column | All columns, comparison | Overview | Comparison matters |
| Priority columns (hide less important, show on demand) | Key comparison | Secondary data | A few columns carry most value |
| List rows (identity + 2 key attributes) | Scanning by name | Comparison of many attributes | People inspect one item at a time |
| Cards | Readability per item | Alignment between items | Items are visual or heterogeneous |

## Pagination, infinite scroll and virtualization

| Approach | Good for | Cost |
| --- | --- | --- |
| **Pagination** | Work lists; knowing position; sharing a page; reaching the footer | Extra clicks |
| **"Load more"** | Lists where people browse a bit further | Position less clear |
| **Infinite scroll** | Casual feeds | Footer unreachable; position lost on return; harder for keyboard and screen readers |
| **Virtualization** (rendering only visible rows) | Very large tables | Find-in-page fails; must expose total and position to assistive technology |

Whatever the approach, restore the scroll position and selection when people return from a detail.

## States and transitions

- **Loading**: skeleton rows with the shape of the data, not a centered spinner.
- **Refreshing**: keep current rows visible, mark them as refreshing; do not reorder under the cursor; offer "N new
  items · Show".
- **Truly empty**: an explanation and an action ("Add your first contact").
- **Empty because of filters**: "No results for 'xyz'" plus "Clear filters". Do not confuse it with the previous one.
- **Partial**: some rows failed to load or some columns are unavailable; say which.
- **Error**: inside the table area, with retry; the toolbar stays usable.
- **No permission**: explain who can grant access.

## Edge cases

- Very long names, emails without spaces, names in other scripts.
- Numbers with many digits, negative values, mixed currencies.
- Ten thousand rows; one row; zero rows after a filter.
- Rows updated by other people while one is being edited.
- Right-to-left layouts: column order and alignment mirror; numbers keep their internal direction.

## Accessibility specifics

- A real `<table>` with `<th scope>` for data tables; do not use grid semantics unless cells are interactive.
- Sorting with a button in the header and `aria-sort`.
- A clickable row means a real link or button in the main cell, not `onClick` on the `<tr>`.
- The bulk action bar is announced (a polite status: "3 selected").
- Row actions have distinguishable names ("Edit invoice 2041", visually "Edit").
- Hover-only actions must also appear on focus.
- Sticky headers must not hide focused rows (2.4.11).

## Copy

- Titles with counts; empty states that distinguish causes; bulk results with numbers.
- Column headers short and specific, with units: "Amount (EUR)", "Last activity".
- In other languages, plan for longer headers: allow wrapping, or abbreviate with the full label available.

## Common mistakes and why they happen

- **Columns copied from the database** — because nobody asked which questions people ask.
- **Cards for comparison data** — because they look modern.
- **Dashes for every kind of absence** — because "empty" was never defined.
- **Selection lost on reload or sort** — because selection was tied to positions.
- **Silent partial failures in bulk actions.**
- **Infinite scroll in work tools** — copied from social feeds.

## Worked comparison: a bulk action partly allowed

**Same content:** an accounts payable list; the person selects 25 invoices and chooses "Approve for payment".

**Weak behavior.** The button approves 20 and silently skips 5 that require a second approver. The toast says
"Invoices approved". The 5 remain pending; the supplier calls a week later.

**Strong behavior.**

- Before acting, the bar shows: "25 selected · 20 can be approved · 5 need approval from Finance".
- Pressing "Approve 20" shows a confirmation with the total amount ("Approve 20 invoices · 48,320.00 EUR").
- After: "20 invoices approved. 5 need Finance approval · Request approval".
- The 5 stay selected, so the next action can apply to them.

## How to verify and measure

- **Test** the main task (find, scan, compare, act) with realistic volumes and data.
- **Check** keyboard navigation, screen reader table navigation, sorting announcements, sticky elements at zoom.
- **Measure**: time to find an item, use of search vs. filters vs. views, bulk action errors, export frequency (a
  rising export rate signals the table is not serving the task).

## References

- Substack — [header with freshness and row menu](https://mobbin.com/screens/862f4828-a616-4834-8e0c-097671c9b4e8)
- Calendly — [saved views and bulk bar](https://mobbin.com/screens/4a027267-d133-4f24-9533-bb3e8eee1dfb)
- Hotjar — [saved views and bulk bar](https://mobbin.com/screens/ff3024b1-5264-483e-afa7-460a0224ff89)
- Deel — [active filter chips](https://mobbin.com/screens/3bc65840-9e16-4227-82fa-6068da77bf1b)
- Twenty — [column aggregates](https://mobbin.com/screens/4896dd71-fc2f-4222-b22b-2bab9b3ec225)
- Wrangle — [floating bulk bar](https://mobbin.com/screens/51f10d5c-7b68-46a6-b4b2-da44b0053186)
- Xero — [bulk actions with partial applicability](https://mobbin.com/screens/c38e93b2-8b11-453d-b6bb-0e0498dbf714)
