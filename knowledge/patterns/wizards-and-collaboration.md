# Wizards and collaboration

Two patterns that both deal with work that unfolds over time: **wizards** split a task into steps a person completes
in sequence; **collaboration** (comments, suggestions, presence, activity) lets several people work on the same thing.
Both fail in similar ways — lost context, invalidated work, unclear responsibility — and both need careful handling
of what happens when something changes in the middle.

## The problem and who has it

- **Wizards** serve people completing a complex, infrequent task: setting up an account, applying for something,
  creating a configuration, importing data.
- **Collaboration** serves teams reviewing and improving shared work: documents, designs, contracts, videos,
  spreadsheets.

When wizards fail, people abandon midway, cannot go back without losing answers, or submit something they did not
review. When collaboration fails, comments get lost, people overwrite each other, and nobody knows who is responsible
for what.

## Questions to ask before deciding

### For wizards

- Do the parts **depend on each other** (later steps change with earlier answers)?
- Does the person need to **review everything together** before submitting?
- Will they need **information they may not have at hand**?
- How often is the task done? Experts repeating it may prefer a single page.
- Can progress be **saved and resumed**, maybe on another device?

### For collaboration

- Is the work **edited simultaneously** or in turns?
- Do comments refer to **content that will change**?
- Who **resolves** feedback, and who is **notified**?
- What are the **roles** (owner, editor, commenter, viewer)?

## Alternatives and how to choose

### Wizard, form or free task?

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Independent fields | **Single form with sections** | Overview, easy to scan and edit | Can look long |
| Dependent parts, branching, or a natural order | **Wizard** | Focus; later steps adapt | Loses overview; needs a review step |
| Frequent task by experts | **Single page** with smart defaults | Speed | Overwhelming for first-time |
| Open-ended creation | **Free canvas or editor** with a checklist | Flexibility | Less guidance |
| Setup that unlocks value gradually | **Checklist** the person completes in any order | Autonomy (see [onboarding](onboarding.md)) | Weaker sequence |

## Wizards: anatomy and behavior

- **A step indicator** with names (not only numbers), the current step marked, completed steps checked and clickable to
  go back ([Remote](https://mobbin.com/screens/114f75af-ff47-45d6-968a-9c412ec260da),
  [Upwork](https://mobbin.com/screens/6f054ed2-a56c-4e5c-8d23-d4a48a8ed2f9)). Horizontal at the top for a few steps;
  vertical on the side when there are more or names are long
  ([Workable](https://mobbin.com/screens/41e79574-116d-49ed-a7ca-a1756dd9271c),
  [AWS](https://mobbin.com/screens/98d56892-8648-40dd-a969-0805ec944a39)). Optional steps marked "(optional)".
- **Buttons at the bottom, fixed**: "Back" on the start side, "Save and exit" as secondary, "Continue" as primary on the
  end side (Upwork). The last button names the result ("Create application", "Submit claim").
- **A review step** with a block per step and "Edit" in each one, taking the person to that step and back to the
  review ([Remote](https://mobbin.com/screens/114f75af-ff47-45d6-968a-9c412ec260da),
  [Employment Hero](https://mobbin.com/screens/1a1d201b-3303-462e-bf8b-bc67632cf0b2)).
- **Warn what cannot be changed later** in the review ("The name is a unique identifier and can't be changed",
  [AWS](https://mobbin.com/screens/98d56892-8648-40dd-a969-0805ec944a39)).
- **Contextual help in a side column** explaining what makes this step good (Upwork "Project details").
- **Character counters** with minimum and maximum ("0/1200, min. 120").
- **Imports**: Upload → Map columns → Review, with filters "All 5 / Valid 5 / Errors 0"
  ([Resend](https://mobbin.com/screens/91fa40ac-7866-4079-b42b-fcc2c7bea086)).
- **Automatic drafts**: leaving and returning loses nothing.
- **While creating**, progress on the same page, and "Don't leave until it finishes" only if it is true.

### Dependencies between steps

The hardest part of wizards is what happens when an earlier answer changes.

- **Say what a change affects** before applying it: "Changing the country will reset the tax details in step 4."
- **Keep compatible answers**; only clear what no longer applies.
- **Mark invalidated steps** in the indicator ("Needs review") instead of silently resetting them.
- **Branching**: show only the steps that apply; the indicator updates, and the total count stays honest.

### Saving and resuming

- Save after each step (or continuously) on the server, not only in the browser.
- On return, take people to where they left off, with a summary of what is done.
- Show the draft's existence elsewhere ("Application in progress · Continue").
- If information is missing ("I don't have my tax ID now"), allow skipping with a reminder where the rules permit.

## Comments

- **Anchored to something specific**: highlighted text, a point on a canvas, a second of a video, a cell. The anchor
  shows as a numbered marker or highlight ([Sketch](https://mobbin.com/screens/e8b9adb8-372f-49f5-ab7e-75cecf2f5a83),
  [Contractbook](https://mobbin.com/screens/4be3b62c-8099-49d6-81b0-3a3906bb0fe5)).
- **A thread**: author, relative time, text, reactions, "Reply…" with @mentions, attachments.
- **Resolve** with a check in the thread header; resolved threads hidden but recoverable ("Resolved comments").
- **A side panel with all comments**, filterable (open / resolved, this document / this page;
  [Craft](https://mobbin.com/screens/bdefa8ef-b626-4193-932f-c6ffb0227f28),
  [Coda](https://mobbin.com/screens/cbe04cfc-3d9f-4e0c-87d5-a05a8564751e)); clicking one goes to its anchor.
- **Suggested changes** (replace X with Y) separate from comments, with accept / reject.
- **Who gets notified**: "Notify: Everyone" editable before sending
  ([Todoist](https://mobbin.com/screens/f60860d4-80cb-4a3d-a2e0-1b58ba046b2f)).
- **Comment menu**: follow, copy link, edit, delete ([Campsite](https://mobbin.com/screens/92e22c17-8b0b-4d59-8d26-dfdcdfa936da)).

### Comments on content that changes

- **When the anchored text is edited**, keep the comment attached to the closest surviving text, and mark it ("The
  text this comment referred to was changed").
- **When the anchor is deleted**, keep the comment as **orphaned** in the panel with the quoted original, not silently
  removed.
- **When a design or video version changes**, comments stay with the version they were made on, with an option to
  carry them forward.

## Presence, conflict and responsibility

- **Avatars of who is viewing** at the top; named cursors on shared canvases.
- **Presence is not locking**: seeing someone in a document does not prevent conflicting edits. Decide the conflict
  strategy (real-time merging, section locks, or conflict detection; see
  [states, transitions and concurrency](../23-states-transitions-and-concurrency.md)).
- **An "Activity" tab** next to "Comments" with the history of changes.
- **"Edited 5 min ago by Jane"** near the title.
- **Versions** with author and "Restore" (see [profile, brand kit and version history](profile-brand-kit-and-version-history.md)).
- **Responsibility**: assign comments or review requests to a person, with due dates when the workflow needs them.

## States and transitions

- Wizard steps: not started, in progress, complete, needs review, skipped, blocked (missing information).
- Submission: submitting, submitted, failed with answers kept, outcome unknown.
- Comments: sending, sent, failed (with retry, text kept), edited, resolved, orphaned.
- Collaboration: offline edits pending sync, conflicts to resolve.

## Edge cases

- Going back several steps and changing an answer that invalidates later ones.
- Two people filling the same application (shared drafts).
- Session expiry in the middle of a long wizard.
- A comment thread with hundreds of replies.
- Mentions of people who lost access to the document.
- Translations: step names and buttons longer than in English.

## Accessibility specifics

- The step indicator is a list with the current step marked (`aria-current="step"`); completed and remaining steps are
  announced.
- On moving to the next step, focus goes to the step heading.
- Errors on submit move focus to a summary.
- Comment markers are reachable by keyboard and linked to their threads; the comment panel can be navigated by
  heading.
- New comments and presence changes are announced sparingly.

## Copy

- Step names are short nouns ("Company", "Payment", "Review").
- Warnings about irreversible choices are specific.
- Notification text for comments says who, what and where ("Laila replied to your comment on 'Q3 plan'").

## Common mistakes and why they happen

- **Wizards for independent fields** — because steps look simpler.
- **Silent resets** when earlier answers change.
- **No review step.**
- **Drafts only in the browser.**
- **Comments deleted with their anchor.**
- **Presence mistaken for locking.**

## Worked comparison

**Same task:** applying for a business loan in a bank app.

**Weak wizard.** Seven unnamed steps; going back to change the business type silently clears the financial statements
uploaded in step 5; no review; the session expires after 15 minutes and loses everything.

**Strong wizard.** Named steps (Business, Owners, Finances, Documents, Review); changing the business type warns
"Your uploaded statements will be kept; the revenue question in Finances will need review"; drafts saved after each
field; the review shows every answer with Edit; the session warns before expiring and the draft survives; "Submit
application" is the final button.

## How to verify and measure

- **Test** going back and changing answers, saving and resuming on another device, keyboard navigation.
- **Measure** step-level abandonment, time per step, edits from the review step (what people correct), and resumed
  drafts.
- **For collaboration**, measure resolved vs. open comments, orphaned comments, and conflicts.

## References

- Remote — [named steps and review](https://mobbin.com/screens/114f75af-ff47-45d6-968a-9c412ec260da)
- Upwork — [steps, buttons and contextual help](https://mobbin.com/screens/6f054ed2-a56c-4e5c-8d23-d4a48a8ed2f9)
- Workable — [vertical steps](https://mobbin.com/screens/41e79574-116d-49ed-a7ca-a1756dd9271c)
- AWS — [vertical steps and irreversible warning](https://mobbin.com/screens/98d56892-8648-40dd-a969-0805ec944a39)
- Employment Hero — [review step](https://mobbin.com/screens/1a1d201b-3303-462e-bf8b-bc67632cf0b2)
- Resend — [import steps](https://mobbin.com/screens/91fa40ac-7866-4079-b42b-fcc2c7bea086)
- Sketch — [anchored comments](https://mobbin.com/screens/e8b9adb8-372f-49f5-ab7e-75cecf2f5a83)
- Contractbook — [anchored comments](https://mobbin.com/screens/4be3b62c-8099-49d6-81b0-3a3906bb0fe5)
- Craft — [comments panel](https://mobbin.com/screens/bdefa8ef-b626-4193-932f-c6ffb0227f28)
- Coda — [comments panel](https://mobbin.com/screens/cbe04cfc-3d9f-4e0c-87d5-a05a8564751e)
- Todoist — [who gets notified](https://mobbin.com/screens/f60860d4-80cb-4a3d-a2e0-1b58ba046b2f)
- Campsite — [comment menu](https://mobbin.com/screens/92e22c17-8b0b-4d59-8d26-dfdcdfa936da)
