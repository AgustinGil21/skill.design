# Dates, ranges and filters

Dates and filters decide which slice of data people see. They look like small controls, but they carry meaning that is
easy to get wrong: what "last 30 days" includes, which time zone a date belongs to, whether two filters narrow or
widen the result. A wrong slice leads to wrong decisions, and people rarely notice.

## The problem and who has it

- **People analyzing data** pick periods to compare (this month vs. last month).
- **People scheduling** pick dates and ranges for future events (a stay, a delivery window).
- **People finding records** narrow long lists by attributes (status, owner, date).

When these controls fail: reports show the wrong period, bookings land on the wrong day because of time zones,
filters silently exclude records, and people cannot reproduce or share what they saw.

## Questions to ask before deciding

- **Past or future?** Analysis looks back; scheduling looks forward.
- **What does the period mean** in this domain: calendar months, fiscal periods, rolling windows, business days?
- **Does "today" count** if it is incomplete?
- **Civil date or instant?** A birthday or a due date is a calendar date; a meeting start is an instant in a time zone.
- **Whose time zone**: the person's, the organization's, the event's location?
- **How many filters**, how often used, and do they combine with AND or OR?
- **Is applying a filter expensive** (a slow query), or instant?
- **Should the view be shareable** (URL) and remembered?

## Alternatives and how to choose

### Date input

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| A date the person knows (birth date, document issue date) | Typed input (one field with a locale format hint, or day/month/year fields) | Fast; calendars are slow for distant dates | Needs good parsing and validation |
| A date near today | Calendar with today marked, plus typed input | Weekday context | Calendar keyboard support needed |
| A period for analysis | Range picker with presets | Presets cover most uses | More complex control |
| A flexible plan ("sometime next month") | Presets like "Weekend", "Flexible dates", "I don't know yet" | Matches uncertain intent | Less precise |
| Recurring dates | A recurrence builder with a plain-language summary | Complex rules made readable | Edge cases (end of month, DST) |

### Filters

| Situation | Option |
| --- | --- |
| Two to four frequent filters | Visible chips or dropdowns above the list |
| Many filters | A "Filters" panel or popover, with active filters shown as chips |
| Complex logic (AND/OR, groups) | A filter builder, with a plain-language summary (see [advanced search](video-upload-advanced-search-and-live-activities.md)) |
| Recurring views | Saved views with names |
| Mobile | A full-screen panel with "Show 32 results" as the primary button |

## Anatomy and behavior

### Date range picker

- **Presets on one side, calendar on the other**: Today, Yesterday, Last 7 / 30 / 90 days, This month, Last month,
  Quarter, Year, Custom ([Quicken](https://mobbin.com/screens/c6beb86c-33df-413a-9be4-93aa6dbec8f7),
  [Shopify](https://mobbin.com/screens/dcba8f32-4ca1-4d22-b246-4c1628026bff),
  [Bonsai](https://mobbin.com/screens/f125e2a9-0a14-4903-a8f8-ad720a62473d)). Presets cover most uses; the calendar is
  for the rest.
- **Two typed fields** "From → To" above the calendar, in the person's locale format, in addition to clicking.
- **Two months side by side** on desktop; one on mobile.
- **The range highlighted** between the dates; days outside the allowed range dimmed and disabled with an explanation
  ("Up to 7 days", [Tripadvisor](https://mobbin.com/screens/b6e40730-e914-4ae1-8813-1b44d4cb0b4d)).
- **"Apply" and "Cancel"** when the change triggers something expensive; otherwise apply on selection.
- **The trigger button shows the chosen range** ("1 Jun – 8 Jul 2026") and the preset name if used ("Last 30 days").
- **Contextual presets** when they matter ("This weekend", [Spotify](https://mobbin.com/screens/61ec0db0-180a-4c74-b545-9185388a2d26);
  "Black Friday", Shopify).
- **"I don't know the dates yet"** as a way out in planning flows (Tripadvisor).
- **Time zone visible** when it matters (reports, events, schedules).
- **Calendar keyboard**: arrows between days, Page Up/Page Down between months, Enter to choose.
- **Week start and month names** follow the locale; other calendars where the audience uses them.

### What the period means

Define and display it precisely:

| Preset | Questions to settle | Recommended display |
| --- | --- | --- |
| "Last 30 days" | Does it include today (incomplete)? Rolling or calendar? | "11 Sep – 10 Oct (includes today, in progress)" |
| "This month" | Up to now, or the whole month including future days? | "1–10 Oct (month to date)" |
| "Last month" | Calendar month in which time zone? | "September 2026 (Europe/Madrid)" |
| "This year" | Calendar or fiscal year? | "FY 2026 (Apr 2026 – Mar 2027)" |

- **Inclusive boundaries** should be explicit when ambiguity matters ("1–30 September, both included").
- **Comparisons** must use equivalent periods ("first 10 days of October vs. first 10 days of September").
- **Relative vs. absolute**: a saved view with "Last 30 days" moves every day; a saved view with "September 2026" does
  not. Let people choose and show which one it is.

### Single dates

- Birth dates and distant dates: typed input (one field with format, or three fields), not a click calendar.
- Near dates: a calendar with today marked.
- **Relative dates in lists** ("2 h ago", "yesterday") with the absolute date available on focus or hover and to
  assistive technology; absolute dates in documents and records.

### Civil dates vs. instants

- **Civil date** (a birthday, a due date, a holiday): stored and shown without a time zone. Showing it converted from
  UTC can move it to the previous day for some people.
- **Instant** (a meeting, a deadline at a time): stored with a time zone; shown in the person's time zone, and also in
  the event's time zone when they differ ("15:00 your time · 10:00 in São Paulo").
- **Daylight saving changes** create non-existent and duplicated local times; recurring events must handle them.

### Filters

- **A few frequent filters as visible chips**; the rest in "Filters" (side panel or popover).
- **Active filters as chips** with their value ("Status: Active ✕") and "Clear all".
- **A result count** that updates while filtering ("32 results").
- **On mobile**, a full-screen panel with "Show 32 results" as the primary button.
- **The URL keeps the filters** (shareable; back works).
- **Options that would produce zero results** dimmed or with "(0)".
- **Numeric ranges** with two fields and an optional slider.

### Combining filters

- Different filters combine with **AND** (Status: Open **and** Owner: Laila).
- Multiple values within one filter usually combine with **OR** (Status: Open **or** Pending).
- Show the logic when it is not obvious, in plain language: "Open or Pending invoices owned by Laila, due this month".
- For complex logic, use a builder with groups and a readable summary.

### Applying immediately or on confirm

| Apply | When |
| --- | --- |
| Immediately | Fast results, small lists, exploratory filtering |
| On "Apply" | Slow queries, many filters to set at once, mobile panels |

Do not mix them silently in one panel.

### Counts and uncertainty

- Counts for options are helpful but expensive; when approximate, say so ("~1,200").
- When counts are unavailable, omit them rather than show stale numbers.

## States and transitions

- Loading results after filtering: keep the old results visible, marked as updating.
- No results: say which filters caused it, offer to remove the most restrictive one.
- Invalid range (end before start): prevent it in the picker; if typed, explain next to the field.
- Filters referring to deleted values (an owner who left): show them as such and allow removal.

## Edge cases

- Leap years, 29 February, months with 30 and 31 days in "same day last month".
- Time zone changes when traveling.
- Fiscal years that start in other months.
- Ranges spanning a daylight saving change.
- Locales with different first day of the week or different calendars.
- Very long filter values and translations of filter names.

## Accessibility specifics

- Date fields have labels and format hints; typed entry is always possible (do not force the calendar).
- The calendar grid follows a known keyboard pattern and announces the selected date and range.
- Disabled dates explain why, in text.
- Filter chips have accessible names including the value ("Remove filter: Status Active").
- Result count changes are announced politely (4.1.3).

## Copy

- Presets named the way people say them in each language.
- Ranges formatted in the locale's style, with the time zone when relevant.
- Empty results: "No invoices match these filters. Remove "Due this week"?".

## Common mistakes and why they happen

- **"Last 30 days" with undefined boundaries** — because the query was written before the label.
- **Converting civil dates through time zones** — birthdays shown a day early.
- **Forcing calendars for birth dates.**
- **Filters not in the URL.**
- **Silent AND/OR assumptions.**
- **Comparing incomplete periods to complete ones.**

## Worked comparison

**Same request:** a sales dashboard with "This month vs. last month".

**Weak.** On 10 October, "This month" shows 1–10 October; "Last month" shows all of September. Sales look 66 % lower.
The manager panics.

**Strong.** The comparison label reads "1–10 Oct vs. 1–10 Sep (same days)", with a toggle for "Full September". The
current period is marked "in progress". Dates use the organization's time zone, shown in the picker.

## How to verify and measure

- **Test** date entry with typed formats from several locales, and with keyboard-only calendar use.
- **Check** boundary cases (end of month, DST, leap years) with real data.
- **Measure** use of presets vs. custom ranges; frequency of "no results" after filtering; shares of filtered URLs.

## References

- Quicken — [range presets](https://mobbin.com/screens/c6beb86c-33df-413a-9be4-93aa6dbec8f7)
- Shopify — [presets and contextual ranges](https://mobbin.com/screens/dcba8f32-4ca1-4d22-b246-4c1628026bff)
- Bonsai — [range picker](https://mobbin.com/screens/f125e2a9-0a14-4903-a8f8-ad720a62473d)
- Tripadvisor — [limits and flexible dates](https://mobbin.com/screens/b6e40730-e914-4ae1-8813-1b44d4cb0b4d)
- Spotify — [contextual presets](https://mobbin.com/screens/61ec0db0-180a-4c74-b545-9185388a2d26)
