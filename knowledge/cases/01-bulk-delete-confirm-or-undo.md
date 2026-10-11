# Case: bulk delete — confirm or undo?

## Context

**Product (fictional):** Ledgerly, a contact and deal management tool for small sales teams. A table lists contacts
with selection checkboxes and a bulk action bar (Assign · Tag · Export · Delete).

**People:** sales reps who clean lists daily; team admins who import and deduplicate large lists.

## The problem as first stated

"Support gets tickets from people who deleted contacts by mistake. Add a confirmation dialog."

### Reframing

A confirmation dialog is one solution. The underlying problem: **people lose data they did not mean to lose, and
recovering it requires support.** Questions to ask before choosing:

- How do mistakes happen? Wrong selection, misclick, not realizing "select all" selected every page?
- How often do people delete on purpose? If daily, a dialog becomes a reflex click.
- Can deletion be reversed technically? For how long?
- What else is deleted with a contact (deals, notes, activity)?

## Evidence

| Type | Finding |
| --- | --- |
| **Known** (support tickets, last quarter) | Most accidental deletion tickets involved more than 50 contacts; several mentioned "I thought I selected only this page" |
| **Known** (analytics) | Bulk delete is used frequently by admins; most uses involve fewer than 10 contacts |
| **Believed** (interviews with 5 reps) | Reps would find a dialog on every delete annoying; they "click through" existing dialogs |
| **Guessed** | Mistakes on small selections happen but are not reported |

## Constraints

- Deletes are currently hard deletes; engineering can add a soft delete with a 30-day retention.
- Deleting contacts also removes linked activity; deals stay but lose the contact link.
- Data protection rules require that a person's data can be permanently erased on request.

## Alternatives

| Option | Strengths | Weaknesses |
| --- | --- | --- |
| **A. Confirmation dialog on every delete** | Simple to build | Habituation; does not fix the "select all" misunderstanding; no recovery |
| **B. Undo toast** (deletion delayed a few seconds) | Fast for intended deletes | Toast disappears; people may notice the mistake later; risky for large deletes |
| **C. Soft delete + trash with restore for 30 days** | Recovers late-noticed mistakes; no friction | More engineering; trash must be designed; data protection needs a permanent path |
| **D. Graduated**: undo for small deletes, confirmation with the count and consequences for large ones, trash behind both | Friction proportional to risk; recovery always | More states to design and test |
| **E. Fix the selection model** (make "select all across pages" explicit) | Addresses the main cause | Does not help with other mistakes |

## Decision

**D + E.** The cause (ambiguous "select all") and the consequence (irreversible loss) were both addressed:

- **Selection**: selecting the header checkbox selects the visible page; a banner offers "Select all 2,340 contacts"
  explicitly; the action bar always shows the count.
- **Small deletes** (fewer than 25, a threshold to revisit with data): immediate removal with an undo toast that stays
  for 10 seconds and a "View trash" link.
- **Large deletes**: a confirmation dialog that states the count, what is also removed (activity) and that items stay
  in the trash for 30 days; the button says "Delete 2,340 contacts".
- **Trash**: restore individually or in bulk; permanent deletion available to admins, with confirmation; automatic
  purge after 30 days.

**Given up:** simplicity (more states), and some storage cost.

## States and edge cases

| State | Behavior |
| --- | --- |
| Deleting (large) | Progress in the action bar; the table stays usable; other people see contacts disappear when done |
| Partial failure | "2,301 deleted, 39 could not be deleted (locked by an active deal)" with a filter to see them |
| Undo after the toast closed | Trash restore |
| Restore conflict | A contact with the same email was created meanwhile → offer merge or keep both |
| Permissions | Reps can delete their own contacts; deleting others' requires admin; the action is disabled with an explanation |
| Concurrency | Another user edits a contact being deleted → their edit fails with a clear message and a restore link |
| Permanent erasure request | Admin path to delete permanently from trash, logged in the audit log |

## Copy (by function)

- **Toast**: what happened + undo. "12 contacts deleted. Undo"
- **Dialog title**: the action and the scope. "Delete 2,340 contacts?"
- **Dialog body**: consequences and recovery. "Their activity history is deleted too. You can restore them from the
  trash for 30 days."
- **Primary button**: the action with the count; secondary: "Cancel".
- **Selection banner**: "All 50 contacts on this page are selected. Select all 2,340 contacts"

In other languages, the count needs plural rules (ICU message format), and the button may need to shorten; the
dialog must handle longer text without truncating the count.

## Accessibility

- The undo toast is announced politely and does not steal focus; its action is reachable by keyboard and stays long
  enough (WCAG 2.2.1 Timing Adjustable — or the trash makes the time limit non-essential).
- The dialog traps focus, starts on the least destructive control, closes with Escape.
- The selection banner is announced when it appears.

## Testing and measurement

- **Usability test** with five reps and three admins on a prototype: tasks included deleting one page vs. all pages.
  All participants understood the selection banner; two missed the undo toast but found the trash.
- **Metrics after release**: accidental deletion tickets (primary), restores from trash within 1 hour (proxy for
  mistakes caught), time to complete bulk cleanup (guardrail: should not increase meaningfully).

## Result and limits

Accidental deletion tickets dropped substantially in the following quarter (fictional). Restores within an hour show
mistakes still happen but are now recoverable. Open questions: whether the 25-contact threshold is right; whether
admins want a bulk "empty trash". A change in data protection requirements could shorten retention and change the
copy.

## Knowledge applied

[Dialogs, overlays and confirmations](../patterns/dialogs-overlays-and-confirmations.md) ·
[tables and lists](../patterns/tables-and-lists.md) ·
[states, transitions and concurrency](../23-states-transitions-and-concurrency.md) ·
[decisions and trade-offs](../21-decisions-and-tradeoffs.md) ·
[interface writing](../04-interface-writing.md).
