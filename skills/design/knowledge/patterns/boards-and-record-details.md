# Kanban boards and record details

Boards show work moving through stages; record detail pages show everything about one item and let people edit it.
They often appear together — click a card, open its detail. The key decisions: whether a board is the right
representation, what moving a card actually means, and whether edits save immediately or need confirmation.

## The problem and who has it

- **Teams tracking work** through stages (to do, doing, done; lead, qualified, won).
- **People managing records** (customers, deals, tickets, candidates) who need to see and update details quickly.

When these fail: a drag changes a business state by accident, boards become unreadable at scale, inline edits save
the wrong value, or a failed save silently loses what someone typed.

## Questions to ask before deciding

- **What does a column represent**: a workflow status with rules, or just a grouping?
- **How many items**: twenty cards or two thousand?
- **What do people decide when scanning the board**?
- **What changes when an item moves**: notifications, automations, permissions, billing?
- **Who edits records**, how often, and how many fields at once?
- **Can two people edit the same record at once?**

## Board, table, queue or timeline?

| Representation | Good for | Weak for |
| --- | --- | --- |
| **Board (kanban)** | Seeing flow and bottlenecks for a moderate number of items | Large volumes, comparing many attributes |
| **Table** | Many items, many attributes, bulk edits (see [tables and lists](tables-and-lists.md)) | Seeing flow |
| **Queue** | Working items one at a time in order (see [triage](triage-roles-and-celebrations.md)) | Overview |
| **Timeline / Gantt** | Dates, dependencies, durations | Status at a glance |
| **Calendar** | Items on specific days | Undated items |

Offer several views of the same data when people genuinely switch tasks; keep filters and selection across views.

## Anatomy and behavior: the board

- **Columns by status** with name, count and a subtle color per status
  ([Slack Lists](https://mobbin.com/screens/50a69d82-266a-4785-8cfe-7bc829b1c3b2),
  [Asana](https://mobbin.com/screens/0a9f2bf5-409a-4af8-9493-531dd6868124)). Empty columns stay visible with "+ Add" so
  items can be dropped there.
- **Compact cards**: a title and only the two to four facts that decide priority (assignee, date, priority, subtask
  progress "1 of 3"); overdue dates with text, not only red
  ([Programa](https://mobbin.com/screens/894a77ba-3553-4f11-a721-e274fd07b621),
  [Todoist](https://mobbin.com/screens/349a1427-9550-4ec9-ab52-d3ddb0fa73a9)).
- **"+ Add" at the bottom of each column**: create with that status; type the title and Enter, the rest later.
- **A view bar**: group by, filter, sort, "only mine", and **save view**; if the view has unsaved changes, say so ("This
  view has unsaved changes", [ClickUp](https://mobbin.com/screens/0c287f59-753c-4e28-92ad-9dff95fcde36)).
- **Horizontal swimlanes** (by person, by project) when a second dimension is needed
  ([Wrike](https://mobbin.com/screens/b519f90f-f918-4c4e-b567-8d5b6031b3ba)).
- **Switch views** (board, list, timeline) without losing filters.
- **Drag with alternatives**: change the status from the card (menu or field) and with the keyboard; while dragging,
  show where it will land; a short animation on drop (reduced with reduced motion).
- **Work-in-progress limits** per column if the team uses them ("3 / 5").

### What moving a card means

| Column meaning | Effect of moving | Design |
| --- | --- | --- |
| A grouping (personal priority) | Only order or group changes | Move freely, undo available |
| A workflow status | Business state changes; automations and notifications may fire | Show the effect ("Moving to Done notifies the client"), undo or confirm when effects are external |
| A restricted transition | Some moves are not allowed ("can't skip QA") | Show allowed targets while dragging; explain refusals |

## Anatomy and behavior: the record detail

A layout repeated across CRMs and task managers
([Attio](https://mobbin.com/screens/cf4f2b49-652f-4c76-8a7c-1ea4f57c10cf),
[Linear](https://mobbin.com/screens/c2e621a6-0b95-44cd-b7b2-6e6e6aaee625),
[Plane](https://mobbin.com/screens/72a69282-f86d-4d4d-b7c3-96bbb28e98aa)):

- **Top**: icon, editable name, main actions ("Add to list", "Send email"), favorite, more.
- **Center**: the content (a description as a document) and the chronological **activity** (who changed what, with
  "See all changes" for grouped ones).
- **Side**: properties as label → value (status, assignee, dates, tags, relationships).
- **Tabs** for related items (Activity, Emails, Tasks, Notes, Files) with counts.

### Detail by decision

Order properties by what people decide with this record, not by database order: for a deal, stage, amount, close date
and owner first; system fields last.

## Inline editing

- **The value is the field**: click (or Enter) to edit in place; Enter or clicking outside saves; Escape cancels
  ([Twenty](https://mobbin.com/screens/601f66eb-0efb-4e92-a88e-38d29a5f9608)).
- **Empty values editable with muted text** ("Add description…", "Choose tag") instead of a dead dash
  ([Attio](https://mobbin.com/screens/cf4f2b49-652f-4c76-8a7c-1ea4f57c10cf)).
- **On hover or focus, a sign that it is editable** (a subtle background or pencil) without filling the screen with
  pencils (anti-example: a pencil per field always visible, [Salesforce](https://mobbin.com/screens/149e2d88-9487-49d1-b10d-a6d25713fde3)).
- **Optimistic saving with subtle confirmation**; if it fails, restore the previous value **and keep what the person
  typed** available ("Couldn't save · Retry · Copy your text"), with the reason in the field.
- **Fields grouped in collapsible sections** (General, Business, Contact, System) when there are many.
- **System metadata** (created, modified, by whom) at the end, in secondary text.

### Immediate or transactional editing?

| Situation | Saving |
| --- | --- |
| Independent fields, low risk | Immediate per field |
| Fields that must be valid together (an address, a price with currency and tax) | Edit as a group with Save/Cancel |
| Long text | Autosave drafts, with "Saved" state |
| High-risk fields (contract value, permissions) | Explicit confirmation |

"Click outside saves" is convenient but surprising for long or risky edits; for those, prefer explicit Save.

### Concurrency and per-field permissions

- Show when someone else is viewing or editing the record.
- Detect conflicting edits per field and resolve without silent overwrites.
- Fields the person cannot edit appear read-only with the reason.

## Rich text editing

- **"/" to insert blocks** (table, image, code, divider) with search
  ([Plane](https://mobbin.com/screens/72a69282-f86d-4d4d-b7c3-96bbb28e98aa)).
- **A floating bar on selection** with formatting and each option's shortcut
  ([Linear](https://mobbin.com/screens/c2e621a6-0b95-44cd-b7b2-6e6e6aaee625)).
- **Markdown shortcuts** (`#`, `-`, `**`) converted while typing.
- **"Last edited by X 6 min ago"** near the content.

## Scale

- Boards with hundreds of cards per column: collapse columns, paginate, or switch to a table.
- Many columns: horizontal scroll with sticky column headers and a minimap or column jump.

## Accessibility specifics

- Cards reachable by keyboard; moving cards possible by keyboard with announcements ("Moved to In review, position 2").
- Inline fields with labels; edit mode announced; errors associated.
- Boards conveyed as lists of columns with counts for screen readers.

## Copy

- Column names in the team's vocabulary.
- Effects of moves stated when they matter.
- Save failures specific and recoverable.

## Common mistakes and why they happen

- **Boards for large datasets.**
- **Drags that trigger external effects silently.**
- **Click-outside saving for risky fields.**
- **Losing typed text on save failure.**
- **Dead dashes for empty fields.**

## Worked comparison

**Weak.** A sales board where dragging a deal to "Won" sends the contract to the client automatically; a touchpad slip
sends a contract for the wrong deal. Inline edit of the amount saves on click outside; a failed save reverts and the
typed value is gone.

**Strong.** Moving to "Won" shows "This will send the contract to Lisboa Coffee · Confirm / Cancel"; inline edit of the
amount uses explicit Save with currency; a failed save keeps the typed value with "Retry".

## How to verify and measure

- **Test** keyboard moves, concurrent edits, save failures, large boards.
- **Measure** undo after moves, accidental status changes, save failures, time to update records.

## References

- Slack Lists — [columns by status](https://mobbin.com/screens/50a69d82-266a-4785-8cfe-7bc829b1c3b2)
- Asana — [columns by status](https://mobbin.com/screens/0a9f2bf5-409a-4af8-9493-531dd6868124)
- Programa — [compact cards](https://mobbin.com/screens/894a77ba-3553-4f11-a721-e274fd07b621)
- Todoist — [compact cards](https://mobbin.com/screens/349a1427-9550-4ec9-ab52-d3ddb0fa73a9)
- ClickUp — [unsaved view changes](https://mobbin.com/screens/0c287f59-753c-4e28-92ad-9dff95fcde36)
- Wrike — [swimlanes](https://mobbin.com/screens/b519f90f-f918-4c4e-b567-8d5b6031b3ba)
- Attio — [record detail and editable empty values](https://mobbin.com/screens/cf4f2b49-652f-4c76-8a7c-1ea4f57c10cf)
- Linear — [record detail and floating format bar](https://mobbin.com/screens/c2e621a6-0b95-44cd-b7b2-6e6e6aaee625)
- Plane — [record detail and slash commands](https://mobbin.com/screens/72a69282-f86d-4d4d-b7c3-96bbb28e98aa)
- Twenty — [inline editing](https://mobbin.com/screens/601f66eb-0efb-4e92-a88e-38d29a5f9608)
- Salesforce — [anti-example: pencils everywhere](https://mobbin.com/screens/149e2d88-9487-49d1-b10d-a6d25713fde3)
