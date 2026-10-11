# Case: bulk delete — confirm or undo?

## Context and evidence status

**Fictional case.** Ledgerly, its people, records, support findings, quantities and example messages are invented
for teaching. No research or release result described here is a claim about a real product.
The evidence below is a scenario to reason from; the test protocol is proposed work, not a completed study.

Ledgerly manages contacts and deals for small sales teams. Sales representatives clean personal lists;
team administrators import, deduplicate and remove larger collections. The contact table supports selection
and a bulk action bar with Assign, Tag, Export and Delete.

The visible task is removing contacts. The actual job is keeping a useful sales list without losing context
needed by colleagues. A wrong deletion can remove activity history and interrupt another person's work.
The interface therefore needs efficient routine use, understandable scope and a credible recovery path.

The tone is concise and factual because people need to assess consequences. That does not require a cold brand:
a calm explanation can preserve the product's familiar voice without congratulating someone for deleting data.

## The initial request and the reframing

The fictional request is: "People delete contacts by mistake. Add a confirmation dialog."
A dialog may help someone notice a mistake before committing, but it does not establish why the mistake occurs.
The design question is: **How can people remove the intended records and recover when intention was wrong?**

There are three different failures to distinguish:

- An input slip: pressing Delete when another action was intended.
- A scope mistake: intending the visible page but selecting every matching record.
- A consequence mistake: expecting contacts to disappear while their linked activity remains available.

A confirmation addresses some slips and consequences only when its content is understood.
Selection feedback addresses scope. Recovery addresses mistakes noticed after either safeguard.
Treating these as separate mechanisms prevents a reassuring dialog from concealing an unsafe system.

## Evidence and questions before deciding

| Fictional evidence | Interpretation | Limit |
| --- | --- | --- |
| Support cases describe cross-page deletion | Scope deserves investigation | Reports omit unreported mistakes |
| Larger batches recur in those cases | Consequences may rise with batch size | Size alone does not establish value |
| Logs show frequent small deletes | Repeated dialogs could add friction | Frequency does not prove annoyance |
| Interviews describe clicking past warnings | Generic warnings may be habituated | Habits need observation |
| Some lost records have linked deals | Recovery must include relationships | Not every relationship can be restored |

Before accepting this account, a real investigation would trace a deletion from selection event to support case.
Check whether "select all" meant a page, a filter result or an entire workspace in that interface version.
Separate administrator cleanup from representative activity; aggregation can hide different failure mechanisms.

Ask engineering whether deletion is reversible at the record, relationship and external-system levels.
A soft-deleted contact is not fully recoverable if an integration has already erased its external counterpart.
Ask support how they currently restore data and which information they cannot reconstruct.
That operational evidence may be more decisive than preference interviews.

Questions that change the decision:

- Can a single contact contain business-critical history, regardless of the selected count?
- Does an active deal prevent deletion, require reassignment or merely retain a broken reference?
- Is the selection frozen when reviewed, or does a live filter keep adding matching contacts?
- Who can restore records, and can their permission disappear before they try?
- When does retention begin, in which time zone, and what happens during a restore near expiry?
- Does an erasure request require a different approved process from ordinary list cleanup?
- Are keyboard shortcuts a common source of accidental activation?

The fictional decision assumes recovery can preserve activity and deal associations until retention expires.
If that assumption fails, the dialog must describe partial recovery and the risk classification must change.

## Alternatives and rejected approaches

| Situation | Option | Why consider it | Cost or limitation |
| --- | --- | --- | --- |
| Rare, consequential deletion | Confirm every action | Makes consequences explicit | Repetition can reduce attention |
| Frequent reversible cleanup | Delete with undo | Keeps routine work moving | A toast misses late discovery |
| Mistakes noticed later | Trash with restore | Supports delayed recovery | Retention adds complexity |
| Risks vary by scope | Graduated review plus trash | Adds friction where useful | Risk rules need review |
| Scope confusion dominates | Repair selection first | Removes a cause of mistakes | Does not recover other errors |
| Recovery not yet feasible | Restrict bulk deletion | Limits risk during migration | Slows legitimate cleanup |

**Recommendation: explicit selection plus graduated confirmation and persistent trash.**
This adds both prevention and recovery, accepting storage and implementation costs.
The selection repair should ship even if the recovery work takes longer.

The toast-only option is rejected because a person may notice a missing contact after leaving the table.
Confirming every delete is rejected as the default because the scenario includes frequent low-risk cleanup.
It remains reasonable for irreversible actions or records with unusually costly dependencies.
Doing nothing is not neutral when the interface already obscures scope; a temporary batch restriction is safer
than presenting an unimplemented undo promise.

A fictional threshold of 25 contacts is an initial prototype setting, not a recommended industry benchmark.
Batch size is only one input: linked activity, shared ownership and permanent erasure can require review below it.
Typed confirmation is not added by default; it imposes work without ensuring someone understands the consequence.
It can be justified for a rare irreversible operation when tested with its actual audience.

## Decision translated into behavior

The header checkbox selects the visible page. A separate control offers selection of all matching results.
The action bar repeats the selected count and scope, so scrolling does not remove the decision context.
If a filter changes, the interface clears selection or asks whether to retain it; silent reinterpretation is avoided.
The chosen policy is consistent across bulk actions rather than changing only for Delete.

For review, the server captures the target set and rechecks authority before execution.
If new matches appear after review, they are excluded unless the person deliberately refreshes the selection.
If some targets become ineligible, the final result reports the actual outcome instead of implying full completion.

Small, recoverable deletions remove rows after confirmation from the server and offer Undo.
A temporary pending treatment may make the interface feel responsive, but it must not imply a completed deletion.
The trash remains reachable from stable navigation after the toast closes.
A ten-second toast is a fictional design setting; its disappearance must not remove the only practical recovery path.

Larger or higher-risk batches open a review dialog with count, scope, affected relationships and recovery terms.
The action says what it will do. The cancellation action leaves the selection available for adjustment.
Permanent erasure is a separate, authorized operation with different copy and a separately reviewed backend policy.
Retention of 30 days is a fictional product constraint, not a statement of legal sufficiency.

## States and transitions

| State | Visible information | Next action or transition |
| --- | --- | --- |
| No selection | Table and row selection controls | Select records |
| Page selected | Page count and offer to extend scope | Extend or delete this page |
| All matches selected | Total count and active filter scope | Review, reduce or clear selection |
| Loading review | Consequences being checked | Wait or cancel without mutation |
| Deleting | Batch identity and pending count | Continue other work; inspect progress |
| Complete | Actual deleted count and recovery route | Undo or open trash |
| Partial failure | Deleted, skipped and failed counts | Inspect failed subset; retry eligible items |
| Request timed out | Outcome not yet known | Check operation status before retrying |
| Offline before submission | No confirmed request | Reconnect and review current scope |
| Permission lost | Operation denied or partly completed | Refresh authority; retain safe context |
| Restoring | Target records and pending status | Wait; avoid duplicate restoration |
| Restore conflict | Conflicting identity or association | Review merge or restore permitted fields |
| Retention expired | Recovery unavailable with explanation | Contact appropriate support path |

A timeout is not evidence of failure. Repeating a request without checking its operation identifier can produce
confusing history or repeat downstream effects. The design contract includes a status lookup and safe retry behavior.

## Edge cases and ownership

When someone edits a contact during deletion, the save response explains that the record is no longer active.
Preserve their unsaved text where policy permits, and link to recovery only if they have that authority.
An inaccessible restore link creates a second failure after the first one.

Restoring an email address that now exists on a new contact requires a deliberate conflict decision.
Do not merge records merely because identifiers match: they may represent shared inboxes or a changed owner.
Show the competing records and which activities would attach to which identity.

For a batch containing locked contacts, explain the fictional lock policy before deletion when it is knowable.
The outcome view exposes the remaining subset without reselecting the successfully deleted records.
A retry should operate on failures, not repeat the whole batch by default.

Audit records should capture authority, operation, scope and outcome without unnecessarily retaining erased content.
The precise retention and erasure policy needs review by the responsible product and policy owners.
A design example cannot settle obligations across jurisdictions.

## Copy by moment and language

The function precedes the English illustration; the wording is not a universal sentence template.

| Moment | Function | Fictional English example |
| --- | --- | --- |
| Selection | Distinguish page from full result | "50 contacts on this page selected" |
| Extend selection | Name the larger scope | "Select all 2,340 matching contacts" |
| Review title | Identify action and quantity | "Delete 2,340 contacts?" |
| Consequence | Describe dependent data and recovery | "Contacts and activity can be restored for 30 days." |
| Completion | State the confirmed outcome | "12 contacts moved to trash. Undo" |
| Partial result | Separate success from remaining work | "39 contacts could not be deleted. Review them" |
| Uncertain result | Explain uncertainty without blaming | "Checking whether the deletion finished" |
| Expiry | Explain the limit precisely | "This contact is no longer available to restore." |

"Moved to trash" may communicate reversibility more accurately than "deleted" in some markets.
Use the product's established terminology and test comprehension; the familiar desktop metaphor is not universal.
The destructive permanent action needs wording distinct from ordinary removal in every supported language.

Counts require full plural handling, including zero and languages with several forms.
Translate complete messages rather than joining an action, number and noun in English order.
Reserve space for longer button labels; moving detail into the dialog is preferable to truncating the selected count.
Use locale-aware number grouping and unambiguous retention dates with the relevant time zone when needed.

Names and email addresses can contain mixed script directions. Isolate identifiers in right-to-left interfaces
so punctuation does not appear to belong to a different contact.
Formal address and grammatical gender should follow the product's market decisions rather than guessed identities.

## Accessibility: requirements and design recommendations

WCAG 2.2 requirements apply to the implemented interface, not merely to its mockups:

- **2.1.1 Keyboard, A:** selection, deletion, cancellation and restoration work without pointer-only actions.
- **1.3.1 Info and Relationships, A:** checkbox labels identify rows and table structure is programmatic.
- **4.1.2 Name, Role, Value, A:** selected and mixed checkbox states are exposed to assistive technology.
- **4.1.3 Status Messages, AA:** relevant completion and selection messages are programmatically available.
- **2.4.3 Focus Order, A; 2.4.7 Focus Visible, AA:** focus remains meaningful and visibly located.
- **3.3.4 Error Prevention, AA:** applicable stored-data deletion needs reversibility, checking or confirmation.
- **2.2.1 Timing Adjustable, A:** assess time-limited interactions against its permitted mechanisms and exceptions.

Recommended dialog behavior includes containing focus while modal, supporting cancellation and returning focus
sensibly. These are implementation patterns, not the literal wording of a WCAG requirement.
Starting on Cancel can be useful for a destructive dialog; long explanatory content may instead need initial focus
on a static heading so a screen reader user can understand the decision before reaching controls.

After rows disappear, return focus to a meaningful surviving row or the table heading.
Announce the count once, not for every individual row removed.
Make trash genuinely discoverable and operable before treating it as an equivalent non-timed recovery route.
Check whether retained activity, authority and available time make restoration practically equivalent.

## Worked comparison: the same deletion

**Weak version.** An administrator selects a table header and presses Delete.
A dialog asks "Are you sure?" with Confirm and Cancel. The interface deletes all matching contacts.
A success toast closes before the administrator notices that the next page is empty.
The dialog created a pause but revealed neither selection scope nor the consequence.

**Stronger version.** The header first selects the visible page and states that scope.
The administrator deliberately extends selection to all 2,340 matches, then sees a review with the same count.
The dialog explains activity recovery and the retention window before offering the named deletion action.
The completion view reports the confirmed count and provides Undo plus a durable trash route.

The stronger version costs more screen space and backend work.
Its value comes from matching intention to a stable target set and making a mistaken decision recoverable.
If the task were permanent erasure, the recovery promise would be removed and the review made correspondingly stricter.

## Proposed test protocol

Recruit representative frequent cleaners and occasional administrators, including keyboard and screen reader users.
Recruitment follows roles and input needs, not an invented universal sample size.
Use fictional records and a resettable environment so the task does not expose or destroy real customer data.

1. Ask participants to remove only the currently visible page, without naming the selection mechanism.
2. Ask them to remove all contacts matching a filter and explain the scope before committing.
3. Introduce linked activity and ask what will remain and what can be recovered.
4. Simulate a delayed realization after the toast has closed; observe discovery of trash.
5. Inject a partial failure, timeout, restore conflict and permission change in separate tasks.
6. Repeat the critical tasks with translated long content, zoom and non-pointer input.

Record actual selections, predicted consequences, recovery success and assistance needed.
A quick completion with a wrong scope is a failure, even if the participant says the interface felt easy.
Counterbalance old and new designs where comparison matters; repeated tasks teach the intended model.
Use technical integration checks for retention and idempotency because a prototype cannot establish them.

## Metrics, guardrails and decision limits

Primary outcome: accidental deletion incidents relative to completed deletion operations, separated by batch risk.
Support tickets are one signal, supplemented by voluntary reports and observed recovery behavior.
A reduction in tickets alone could mean people stopped asking for help.

Track recovery completion, elapsed time to recover and records left unresolved after partial failures.
Frequent restores may indicate better recoverability or continuing selection mistakes; investigate both interpretations.
Guardrails include cleanup completion time, repeated confirmation abandonment, storage growth and failed restores.
Exclude authorized permanent erasure from metrics that assume recovery should be possible.

No numerical improvement is asserted here. A real release would establish a baseline and assess uncertainty
before attributing a change to the design rather than seasonality, permissions or an altered cleanup workload.

Reconsider the design if single records prove more consequential than large batches, retention becomes shorter,
external systems prevent coherent restoration or the main error comes from misleading filters rather than selection.
The principle transfers; the fictional threshold and retention period do not.

## Review checklist

- [ ] Evidence separates slips, scope errors and consequence misunderstandings.
- [ ] Selection scope remains explicit through review and execution.
- [ ] Recovery covers the data relationships promised in the copy.
- [ ] Partial, uncertain, offline and permission-loss outcomes have usable paths.
- [ ] Permanent erasure is distinguished from ordinary cleanup.
- [ ] Keyboard, status announcements, focus and localized counts have been tested.
- [ ] Metrics include incorrect outcomes and recovery, not just action speed.
- [ ] Conditions that would reverse the recommendation are documented.

## Knowledge applied

[Dialogs, overlays and confirmations](../patterns/dialogs-overlays-and-confirmations.md) ·
[tables and lists](../patterns/tables-and-lists.md) ·
[states, transitions and concurrency](../23-states-transitions-and-concurrency.md) ·
[decisions and trade-offs](../21-decisions-and-tradeoffs.md) ·
[interface writing](../04-interface-writing.md).
