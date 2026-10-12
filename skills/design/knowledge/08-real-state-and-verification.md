# Real state and verification

How a designer makes sure the interface tells the truth about what the system is doing, tells the same truth
everywhere, proposes the action that actually resolves each situation, and how they verify all of that against the
real system instead of against a mockup.

A perfectly drawn button that proposes the wrong action is a design error. A status badge that says "Connected" while
another panel says "Disconnected" makes the whole interface untrustworthy, even if each part is fine on its own.

This file covers the truthfulness and consistency of state and the levels of verification. For the mechanics of
transitions (optimistic updates, unknown outcomes, conflicts, retries), see
[states, transitions and concurrency](23-states-transitions-and-concurrency.md).

## What it is and why it matters

Every feature connected to something outside the screen (an account, a server, a payment provider, a device, an AI
service, another person) has **real states** that the interface must represent. The design work is to:

1. Identify every real state, including the uncomfortable ones.
2. Decide what the person sees and can do in each.
3. Make every view agree.
4. Verify that the real system produces those states the way the design assumes.

Getting this right prevents the most damaging kind of interface error: one that looks fine and misleads.

## 1. The states table, before building

Mandatory for features with authentication, long or asynchronous processes, quotas and limits, connections to
external services, synchronization or money. One row per **real state**, not per screen. Use
`templates/states-table.md`.

### Example: connecting an AI provider account

| State | What the person sees | What they can do | Where it is shown |
| --- | --- | --- | --- |
| Not connected | "Not connected" | Connect | Settings |
| Waiting for authorization | "Waiting for you to authorize in the browser" | Paste a code instead / Cancel | Connection dialog |
| Validating | "Checking your account…" | Wait | Card and dialog |
| Connected | "Connected" with the account name | Test / Re-check | Card |
| Connected, quota exhausted | "Usage limit reached · still connected · resets Monday 09:00" | Wait / Use another account | Card, status bar, and where the task was interrupted |
| Invalid credentials | "Expired or invalid" | Reconnect | Card and where it failed |
| Connected, usage data unavailable | "Not available" | Nothing (do not invent a number) | Usage panel |

The lesson of this table: **states that look alike are not interchangeable.** An exhausted quota is not a
disconnection. Proposing "Reconnect" there suggests an action that does not solve the problem, wastes the person's
time and makes them doubt their setup.

### How to find all the states

- **Ask the system, not your imagination.** List the responses, error codes and statuses the backend or provider can
  return, with engineering. Each meaningfully different one is a candidate state.
- **Walk the lifecycle**: before, during, after, failed, expired, revoked, limited, partially available.
- **Consider time**: what happens after an hour, a day, a month? Tokens expire, trials end, holds lapse.
- **Consider other actors**: another device, another person, an administrator, the provider changing its terms.
- **Merge only what leads to the same action.** Two states with different causes but the same action for the person
  can share a message; two states with different actions cannot.

## 2. The same story everywhere

- **One fact, one presentation.** The state of a connection, a job or a payment appears the same way in settings, the
  sidebar, the chat, dialogs, emails and notifications.
- **One source of truth.** Every view reads the same state; none recalculates it on its own. Divergence between views
  is usually an architecture problem that shows up as a design problem.
- **Changes caused by the person appear immediately in every view**, not at the next periodic refresh. If the person
  disconnects an account in settings, the sidebar must not keep saying "Connected" for a minute.
- **Changes caused elsewhere** (another device, a background job) propagate with a refresh frequency that matches how
  fast the data matters, and with a visible "as of" time where staleness is risky.

## 3. Global information in a fixed place; the blockage where it happens

- What affects all work (usage, quota, connection, sync, plan) lives in a persistent place, for example the bottom of
  a sidebar or a status bar, collapsible when it does not need to be fully visible.
- When that state blocks a task, it is **also** explained where the task was interrupted (the chat, the render, the
  form), with the possible action right there.
- Details and administrative actions stay in settings.

People should never have to go looking for why something did not work.

## 4. Progress and errors by real stage

- Each stage of a process has its own text: opening, waiting for authorization, receiving, saving, validating.
- When one fails, the message names **that** stage ("We couldn't validate the account"), not an earlier stage that
  already succeeded ("Couldn't open the login page").
- This requires the system to report the stage; it cannot be fixed with copy alone. Ask engineering for stage-level
  status when designing any multi-step process.

## 5. Alternatives at the moment of the problem

- The alternative route (paste a code, another method, another provider) is available at the start, during the wait
  and after an error, without closing and starting over.
- Switching methods cancels the previous attempt, so a late result does not contradict what the person just chose.

## 6. Messages that say what is known, and nothing more

Structure: **what happened · how it affects the task · what can be done now · when it can continue (if known).**

> "Your AI provider reached its usage limit. The account is still connected. It resets Monday at 09:00. You can wait
> or choose another provider."

- **If a fact is unknown, say so** ("No reset date available"). Never fill the design with an invented value to make
  it look complete.
- **No internal codes** (`provider_unavailable`), no "Something went wrong", no confusing concepts (a usage quota is
  not an exact token balance).
- **Internal names stay out of the normal path**: SDK names, commands and mechanisms appear only in a collapsed
  technical detail, when they help solve the problem.
- **Dates and times** in the person's locale and time zone, with the time zone shown when it could be ambiguous.

## 7. Identity and state are different signals

- A logo or icon identifies **what** it is (faster to recognize than an initial); it must read well at small sizes
  and in light and dark themes.
- State is stated with **text** (with a badge or color as reinforcement). Never only a colored dot, and never inferred
  from the logo (WCAG 1.4.1 Use of Color, A).

## 8. Updating without noise

- Refresh at the frequency the data really changes (for example, every minute for usage), sharing the request across
  views and tabs, and immediately when an action changes it.
- The layout does not shift when values update; use tabular figures for changing numbers; no constant animation;
  respect reduced motion.
- Do not announce routine background updates to screen readers; announce changes that matter to the current task
  (WCAG 4.1.3 Status Messages, AA).

## 9. Intent is not confirmation

The interface must distinguish what the person **asked for** from what the system **confirmed**:

- "Sending…" vs. "Sent" vs. "Delivered" vs. "Not sent".
- "Payment submitted" vs. "Payment confirmed".
- "Saved on this device" vs. "Synced".

When the outcome is uncertain (a timeout, a lost connection after sending), show the uncertainty and check before
offering to repeat the action. The classic failure: the server finished, the client lost the connection, the
interface shows "Failed, try again", and the person creates a duplicate. See
[states, transitions and concurrency](23-states-transitions-and-concurrency.md).

## 10. Partial and degraded states

Real systems are often partly working:

- **Partial data**: three of four data sources loaded. Show what loaded, mark what did not, and do not compute totals
  as if everything were there.
- **Degraded service**: search works but is slow; payments work but one method is down. Say what is affected and offer
  the alternative.
- **Partial success**: 362 of 378 items imported. Report counts and the failures with reasons.

Never present partial data as complete. A dashboard total that silently excludes a failed source is a lie with good
typography.

## 11. Levels of verification: say which one was reached

| Level | What it proves | What it does not prove |
| --- | --- | --- |
| **Design reviewed** | Hierarchy, copy, drawn states, visual accessibility | That it works |
| **Interaction with simulated data** | That the interface reacts correctly to each state | That the real states arrive like that |
| **Integration tested** | That the real system produces those states | The complete journey of a person |
| **Real journey completed** | That someone reached the result with the real system | That every edge case works |
| **Observed in use** | That people succeed with it in their real context over time | — |

An interface can look perfect, pass simulated tests and still fail with the real process (a different URL, a
different output format, an environment requirement, a provider response nobody anticipated). When reporting work,
**say which level was reached and what remains to confirm**; do not present the levels as equivalent.

### Verification coverage

Completing one journey does not prove every case works. Be explicit about coverage:

| Covered | Not covered (and why) |
| --- | --- |
| Connecting with a valid account, light and dark, 1280 px and 390 px | Expired token (could not produce one in the test environment) |
| Quota exhausted (simulated response) | Real quota exhaustion (would require using the whole quota) |
| Keyboard and VoiceOver on the connection dialog | NVDA (not available) |

A short coverage table prevents the most common overstatement in design and engineering reports: "it works" when
"it works in the case I tried" is the truth.

## 12. Minimum states to check

Light and dark · relevant widths · long content and the longest language · loading · offline · near and at the limit ·
data unavailable · error and recovery · cancel and switching methods · partial results · stale data.

Plus contrast, keyboard, accessible names, overflow, and never capturing screenshots in the middle of a transition.

## Worked comparison

**Feature:** a status indicator for a device sync in a fitness app (watch to phone).

**Weak design.**

- A green dot in the header means "synced"; a gray dot means "not synced".
- The dot is gray both when the watch is out of range and when the account's cloud backup failed.
- The workout list shows yesterday's data with no indication that today's workout has not arrived.
- The settings screen says "Connected" because the Bluetooth pairing exists, even when sync has failed for two days.

People see "Connected" in settings, a gray dot in the header, and no workout. They re-pair the watch, which does not
fix a cloud backup failure.

**Strong design.**

| Real state | Header | Workout list | Settings | Action offered |
| --- | --- | --- | --- | --- |
| Synced | "Synced 2 min ago" | Up to date | "Watch connected · last sync 2 min ago" | — |
| Watch out of range | "Watch not nearby · last sync 3 h ago" | "Workouts after 07:40 will appear when your watch is nearby" | Same | Bring the watch closer |
| Cloud backup failing | "Not backed up since Tuesday" | Data visible on this phone | "Backup failing: storage full" | Manage storage |
| Syncing | "Syncing 2 workouts…" | New items appear as they arrive | Same | — |

Every view reads the same state, the text names the cause, and the action matches the cause. Verification: tested
with a real watch out of range and with a simulated backup failure; the real "storage full" response from the cloud
provider was not reproduced, and that is recorded as pending.

## Common mistakes

- **Merging look-alike states** (quota vs. disconnection, offline vs. server down) into one message with one wrong
  action.
- **Views that disagree** because each computes state differently.
- **Invented values** to fill a design ("Resets in 3 days" when the date is unknown).
- **Color-only state.**
- **Partial data shown as complete.**
- **Reporting "done" at the design or simulation level** as if it were verified with the real system.

## Checklist

- [ ] A states table exists with every real state, built from what the system can actually return.
- [ ] Look-alike states with different actions have different messages.
- [ ] Every view reads one source of truth and updates immediately on the person's own actions.
- [ ] Global state lives in a fixed place; blocking state is also explained where the task stopped.
- [ ] Errors name the real stage that failed.
- [ ] Unknown facts are shown as unknown; nothing is invented.
- [ ] State is expressed in text, not only color or icons.
- [ ] Intent, acceptance and confirmation are distinguished.
- [ ] Partial and degraded states are explicit.
- [ ] The verification level and the coverage (what was and was not tested) are reported.
