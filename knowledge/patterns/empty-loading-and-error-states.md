# Empty, loading, error and success states

Every screen has at least five states: ideal, empty, loading, partial and error. Designing only the ideal one is the
most common reason interfaces feel broken. This pattern covers how to design each state, how to choose feedback by
what the system actually knows, and how to recover without losing people's work.

For the mechanics of transitions (optimistic updates, unknown outcomes, conflicts, retries), see
[states, transitions and concurrency](../23-states-transitions-and-concurrency.md). For the truthfulness of state
across views, see [real state and verification](../08-real-state-and-verification.md).

## The problem and who has it

Everyone meets these states, often at the worst moments: the first visit (empty), a slow connection (loading), a
failure (error). These moments decide whether people trust the product:

- An empty screen with no explanation looks broken or useless.
- A spinner with no information makes people reload, losing work.
- A generic error with no way out ends the task.
- A success that is not visible makes people repeat the action.

## Questions to ask before deciding

- **Why could this be empty?** First use, filters, permissions, everything done, a failure to load?
- **How long can this take**, and does the system know how far along it is?
- **What can go wrong**, and which failures can the person fix vs. which they cannot?
- **What is safe to retry automatically**, and what is not?
- **What must be preserved** when something fails (typed text, selections, position)?
- **Does the person need to stay**, or can they leave and be notified?

## Empty states

Distinguish the cause; each needs a different answer.

| Type | Example | What to show |
| --- | --- | --- |
| **First time** | "No projects yet" | What this place is for, **one** primary action, optional help |
| **No results** | A search or filter with no matches | What was searched, "Clear filters", suggestions |
| **Done** | Inbox at zero | Calm confirmation ("You're all caught up") with no forced action |
| **No permission** | Content exists but is restricted | That access is restricted and who can grant it |
| **Failed to load** | The request failed | An error, not an empty state: say it failed and offer retry |

- **Structure**: a small illustration or icon (not the protagonist), a title that states the benefit ("Collect your
  inspiration", [Mobbin](https://mobbin.com/screens/f68b3864-e437-43b2-88b7-43a13f634513)), a sentence, a button
  ([Laravel Cloud](https://mobbin.com/screens/5a0b71b3-f06f-4b14-af43-b862c1550a8f),
  [Fabric](https://mobbin.com/screens/a4f06792-edb8-4ea3-8c04-f99a2f771acc)).
- **Show what it will look like when full**: a preview of the screen with example data, clearly labeled as an example
  ([ClickUp Goals](https://mobbin.com/screens/3f3c2432-3db0-4cfc-b469-2a088d38dde5)).
- **Help as a second layer**: invite someone, watch a tutorial, contact support, in a discreet row below
  ([Steep](https://mobbin.com/screens/b026462f-39da-445e-b451-36da6d487c49)).
- **Empty inside a builder**: say where the result will appear ("Add filters; results appear here",
  [HubSpot](https://mobbin.com/screens/1f61dd9a-ad64-47ed-bdef-f840c67cdfbc)).
- **Humor, sparingly, if the brand has it** ([Typeform](https://mobbin.com/screens/648d4700-8592-4be4-8b65-5931ac44fd17)).
- **Avoid**: a huge dashed box with a tiny link as the only action
  ([Literal](https://mobbin.com/screens/fb36989d-05af-4136-bb73-634a2e0ba1f9)); "No data" with no way forward; three
  competing buttons.

## Loading: feedback by certainty and scope

Time thresholds are a starting point. What matters more is **what the system knows** and **how much of the screen is
affected**.

### By duration (starting values)

- **Under ~300 ms**: show nothing; a flashing indicator is worse than waiting.
- **~300 ms to 2 s**: a skeleton with the shape of the content, or a button in a "Saving…" state with a fixed width.
- **2 to 10 s**: progress with what is happening ("Analyzing 3 of 12 files").
- **Over 10 s**: stages with checkmarks, an estimate when reliable, and the option to leave and be notified.

### By what the system knows

| What is known | Feedback |
| --- | --- |
| Nothing about progress | An indeterminate indicator plus what is happening ("Contacting your bank…") |
| Number of steps or items | A count ("3 of 12 files") |
| Stages | A stage list ("Uploading ✓ · Processing · Ready") |
| Reliable percentage | A progress bar |
| An estimate that may change | "About 2 minutes left", updated honestly, never a bar that stalls at 99 % |

### By scope

- **Never block the whole screen** for something that affects one part. Load sections independently.
- **Keep existing content visible while refreshing**, marked as refreshing. Replacing data with a spinner loses
  context; showing slightly old data with "Updating…" is usually better.
- **Optimistic updates** for actions that rarely fail (star, move, rename), with a clear rollback if they do.

## Errors

- **Where it happened**: in the field, the row, the card or the step — not only a generic banner at the top.
- **Three parts**: what happened (in the person's words), why if it helps, and what to do (Retry, Edit, Contact).
  Technical details collapsed and copyable for support.
- **No blame** ("You entered…") and no drama ("Oops! Something went terribly wrong").
- **Keep what the person typed.** Losing a form because of a network error is unacceptable.
- **Distinguish fixable from unfixable**: for input problems, say exactly what to change; for system problems, say what
  is safe and when to try again.

### Safe retries

- **Automatic retry with increasing waits** is appropriate for reading data and for operations that are safe to repeat,
  with a visible "Offline, retrying…" message.
- **Do not retry automatically** operations that may have happened (payments, sends, orders) without first checking
  their status.
- **Change something before offering retry** when the failure is not transient; a Retry button on a validation error is
  a trap.

### Uncertain and partial outcomes

- **Uncertain**: "We couldn't confirm your payment yet. Don't pay again — we're checking." See
  [states, transitions and concurrency](../23-states-transitions-and-concurrency.md).
- **Partial**: "362 imported, 16 need your attention · Review". Never report partial success as success.

## Error pages (404, 500, no permission)

- **Inside the app frame** (sidebar and search stay), not a blank page
  ([Coinbase](https://mobbin.com/screens/a7b3ff5b-38e8-4d00-8b50-0900ee10f423)).
- **A title that says what happened** in the person's words ("We can't find this page", "You don't have access to this
  project"), one line with the likely cause, and **ways out**: go home, search, request access, retry.
- **Server errors**: "Retry" as the primary action; a link to the status page if there is one.
- **No permission**: who can grant it and a "Request access" button.
- **Deleted object**: say so ("This video was deleted on 3 Oct") and offer the trash if it exists.
- **An error inside a section** (a panel, a chart) with its own retry, without taking down the page
  ([Care.com](https://mobbin.com/screens/5bea7e07-ed66-498c-9862-a7e7110507f2)).
- **Avoid**: "Whoops!", large illustrations that push the way out off-screen, unexplained codes.

## Success and toasts

- **A brief confirmation**, at the bottom (or top end), that does not cover the next action
  ([Laravel](https://mobbin.com/screens/5a0b71b3-f06f-4b14-af43-b862c1550a8f),
  [Klarna](https://mobbin.com/screens/ab5556c1-f9bd-4e69-92fb-2c9e0b2edda3)).
- **Undo inside the toast** for reversible actions, instead of asking for confirmation before.
- **Duration** around 4–6 s as a starting value; longer when it has an action; pauses on hover and focus; can be
  closed.
- **Status role** (`role="status"`, or `alert` for errors); it does not steal focus.
- **Do not use toasts for errors that require action**: those go inline.
- **Keep toast actions available elsewhere**: a toast disappears; "Undo" should also be reachable (for example in the
  item's menu or in an activity log) for a reasonable time, so keyboard and screen reader users, and anyone who looked
  away, are not left without it.

## States and transitions summary

| State | Must answer |
| --- | --- |
| Empty | Why is it empty, and what can I do? |
| Loading | Is something happening, how long, can I leave? |
| Refreshing | Is what I see current? |
| Partial | What worked, what didn't, what do I do with the rest? |
| Error | What happened, is my work safe, what now? |
| Unknown | What is known, what should I not do? |
| Success | What changed, where is it, can I undo? |

## Edge cases

- Errors during the first load of an empty account (is it empty or failed?).
- Very long error messages from external services (summarize; keep details collapsible).
- Errors while the person is typing in the same area (do not move their focus or erase input).
- Many toasts at once (stack, merge or summarize).
- Offline while on an error page.

## Accessibility specifics

- Status messages announced politely (4.1.3, AA); errors that block a task can use an alert.
- Do not move focus to toasts; move focus to inline errors only after a submit.
- Skeletons and spinners have an accessible label ("Loading invoices") and are hidden once content arrives.
- Error messages are associated with their fields (`aria-describedby`).
- Time-limited toasts with actions are a problem for timing (2.2.1): make actions available elsewhere or let the toast
  persist until dismissed.
- Error pages have a proper title and heading.

## Copy

- Empty: what will be here + how to start.
- Loading: what is happening, in the person's terms.
- Error: what happened + what to do + what is safe.
- Success: what changed, briefly.
- In every language, keep errors calm and specific; avoid exclamation marks and idioms like "Oops".

## Common mistakes and why they happen

- **Only the happy path designed** — because mockups start with ideal data.
- **One empty state for every cause.**
- **Full-screen spinners** — because loading was handled globally.
- **Generic errors** — because the system does not report specific failures to the interface; ask for them.
- **Auto-retrying unsafe actions.**
- **Undo only in a disappearing toast.**

## Worked comparison: a correct spinner with a misleading message

**Same situation:** generating a monthly report that takes about 40 seconds and sometimes fails when one data source
is unavailable.

**Weak design.** A full-screen spinner with "Loading…". After 40 seconds, the report appears — sometimes with one
section silently empty because a source failed. When the whole request times out: "Something went wrong."

**Strong design.**

- The report page appears immediately with its structure; each section shows its own progress ("Sales: ready ·
  Inventory: loading · Returns: waiting").
- The person can leave; a notification arrives when the report is ready.
- If a source fails: the section says "Returns data unavailable (supplier system not responding). The rest of the
  report is complete. Retry this section", and totals say they exclude returns.
- If everything fails: "We couldn't generate the report. Your filters are saved. Try again in a few minutes."

## How to verify and measure

- **Force each state** in testing: empty account, no results, slow network, offline, server error, permission denied,
  partial failure.
- **Check** announcements with a screen reader and focus behavior after errors.
- **Measure**: retries, reloads during loading (a sign of unclear feedback), support contacts about errors, abandonment
  after errors.

## References

- Mobbin — [empty state with benefit title](https://mobbin.com/screens/f68b3864-e437-43b2-88b7-43a13f634513)
- Laravel Cloud — [empty state and toast](https://mobbin.com/screens/5a0b71b3-f06f-4b14-af43-b862c1550a8f)
- Fabric — [empty state structure](https://mobbin.com/screens/a4f06792-edb8-4ea3-8c04-f99a2f771acc)
- ClickUp Goals — [preview of the filled state](https://mobbin.com/screens/3f3c2432-3db0-4cfc-b469-2a088d38dde5)
- Steep — [help as a second layer](https://mobbin.com/screens/b026462f-39da-445e-b451-36da6d487c49)
- HubSpot — [empty builder](https://mobbin.com/screens/1f61dd9a-ad64-47ed-bdef-f840c67cdfbc)
- Typeform — [humor in empty states](https://mobbin.com/screens/648d4700-8592-4be4-8b65-5931ac44fd17)
- Literal — [anti-example: tiny action in a huge box](https://mobbin.com/screens/fb36989d-05af-4136-bb73-634a2e0ba1f9)
- Coinbase — [error page inside the app frame](https://mobbin.com/screens/a7b3ff5b-38e8-4d00-8b50-0900ee10f423)
- Care.com — [section-level error](https://mobbin.com/screens/5bea7e07-ed66-498c-9862-a7e7110507f2)
- Klarna — [success toast](https://mobbin.com/screens/ab5556c1-f9bd-4e69-92fb-2c9e0b2edda3)
