# Micro-interactions: reordering, hints and previews

Small interactions — dragging to reorder, a tooltip, a one-time hint, a preview before committing — shape how precise
and trustworthy a product feels. They are also where accessibility and correctness quietly break: a drag with no
keyboard alternative, a tooltip carrying essential information, a preview that does not match the result.

## The problem and who has it

- People arranging items whose order matters (priorities, playlists, steps, statuses).
- People discovering what a control does, or that a feature exists.
- People deciding whether to commit to something (a template, a publication, a configuration).

## Questions to ask before deciding

- **Does the order have meaning**, and is it personal or shared with others?
- **How many items**: five or five hundred?
- **What does the hint explain**, and will people need it more than once?
- **How faithful can the preview be** to the final result?
- **Which input methods**: mouse, touch, keyboard, voice, switch?

## Reordering

### When to offer it

| Situation | Option |
| --- | --- |
| Order is meaningful and set by people (priorities, steps) | Manual reordering |
| Order follows a property (date, name, score) | Sorting, not dragging |
| Long lists where items move far | "Move to…" with a position, or numeric priority |
| Shared lists | Reordering with visibility of who changed it and conflict handling |

### Anatomy and behavior

- **A visible handle** on the start side of each item; the cursor changes to "grab"
  ([Juicebox](https://mobbin.com/screens/01028d24-0e2e-4ae8-81b3-c5f8c09117a0),
  [Aboard](https://mobbin.com/screens/e716e176-8bb2-4d14-9b9e-92ad15693491)).
- **While dragging**: the item lifts (shadow), a gap remains in its place, and a **line shows where it will land**
  ([Zendesk](https://mobbin.com/screens/b283f8ce-10b6-44bb-909c-49f6ac8aea71),
  [DoorDash](https://mobbin.com/screens/46a6ef2f-2db8-4796-99a9-b22b99c25452)).
- **Signal that it is possible**: "Drag to reorder" once, near the list (Aboard).
- **Explicit or automatic saving, but clear**: in a reorder dialog, "Save order" / "Cancel"
  ([Behance](https://mobbin.com/screens/c2e38307-e570-44b8-b96a-95b5709351e7)); in a live list, save on drop with a
  message and undo.
- **A non-drag alternative (required for accessibility, WCAG 2.5.7)**: keyboard pick-up and move (Space to pick up,
  arrows to move, Space to drop, Escape to cancel, announcing "Position 3 of 8"), or "Move up / Move down / Move to…"
  in the item's menu.
- **Long lists**: auto-scroll near the edges; "Move to top / bottom" for far moves.
- **Edit the list in place**: add, rename, remove and reorder statuses or categories in one dialog
  ([Juicebox](https://mobbin.com/screens/01028d24-0e2e-4ae8-81b3-c5f8c09117a0)).
- **Touch**: press and hold to lift, with a short haptic.

### Order with filters and concurrency

- **Reordering inside a filtered view** is ambiguous: where does an item go relative to hidden items? Either disable
  manual reordering in filtered views, or define the rule (it moves relative to visible neighbors) and say so.
- **Shared order**: when two people reorder at once, the last change may override the other. Show live changes or
  notify ("Laila reordered this list").
- **Personal vs. shared**: say whether the order affects everyone ("Order is shared with the team").

### A drag that looks great and causes errors

A board where cards can be dragged between columns that represent workflow states: dragging a card to "Paid" marks
an invoice as paid. A slip of the finger on a touch screen pays nothing but records a payment. When a drag changes a
business state, confirm or offer undo, and consider whether a state change should be a drag at all (see
[boards and record details](boards-and-record-details.md)).

## Tooltips, popovers and hints

### Choosing

| Content | Use |
| --- | --- |
| The name or shortcut of an icon-only control | **Tooltip** |
| A short definition of a term | **Info button opening a popover** (text can be selected, links followed) |
| Interactive content (links, buttons) | **Popover**, not a tooltip |
| Information needed to complete a task | **Persistent help text** in the layout |
| A new feature to discover | **One-time hint** pointing at the control |
| A multi-step introduction | **Short guided tour**, optional (see [onboarding](onboarding.md)) |

### Tooltips

- **A tooltip names a control or shows its shortcut.** One line; appears after a short delay on hover and immediately on
  keyboard focus; does not cover what the person is looking at.
- **Never essential information only in a tooltip**: it does not exist on touch and is easy to miss.
- **Dismissible and hoverable** (WCAG 1.4.13): Escape hides it, moving the pointer onto it keeps it open.

### One-time hints and tours

- **Contextual hints once** when a feature is new: pointing at the control, one sentence, "Got it" to close
  ([Flodesk](https://mobbin.com/screens/51004745-8ab3-4276-af6f-eb79e63aad3e)); they do not reappear.
- **Guided tours** with a counter ("1 of 7"), Next, and a way out at every step
  ([Navattic](https://mobbin.com/screens/01b7fa46-ac7d-4b36-ab17-1b15ea68f5fa)); keep them short.
- **An info icon next to a term** for definitions (metrics, permissions), with selectable text.

## Previews

- **Before choosing a template**: a large preview, on desktop and mobile, with a description, tags, how many people used
  it and two actions ("Save" / "Use this template"; [HoneyBook](https://mobbin.com/screens/d4c99850-7299-4f89-90c0-8f886861b590)),
  with arrows to move to the next.
- **Before publishing or sharing**: how it will look on the other side ("Preview job post",
  [Workable](https://mobbin.com/screens/5db5903d-18b2-4987-9e5a-2581f5796d28)); format variants (Grid / Story) with
  the preview changing ([Substack](https://mobbin.com/screens/1b0b3644-2dd2-4e21-ade3-1434fba8b9ea)).
- **A file in a side panel** without leaving the list: preview, description, tags, related items and actions
  (download, duplicate, delete; [Midday](https://mobbin.com/screens/98cd59cf-ebb2-4abd-bd2f-fb1fd8129979)).
- **Configuration with a live preview**: changes appear instantly beside the controls
  ([Felt](https://mobbin.com/screens/8778dd01-ffd3-40ad-bc4b-e41fbeeb6189)).
- **A card for an item before using it** (an agent, an integration): what it does, its capabilities and an example
  result ([WRITER](https://mobbin.com/screens/9642bce1-33bd-48d5-9fff-15e83269d532)).

### Fidelity and limits of previews

- **Say what the preview does not show**: "Preview uses sample data", "Email clients may display this differently".
- **Keep previews in sync** with the final rendering engine where possible; a preview that differs from the result
  breaks trust.
- **Previews as the recipient**: show what other people will see, including their language and permissions.

## Accessibility specifics

- Every drag has a keyboard and single-pointer alternative, with position announcements.
- Tooltips appear on focus, are dismissible and do not hide focused elements.
- Hints and tours are reachable and dismissible by keyboard, do not trap focus, and are announced.
- Previews have text alternatives where they are images.

## Copy

- Hints are one sentence about the benefit or the action.
- Position announcements: "Moved 'Q3 budget' to position 2 of 8".
- Preview disclaimers are short and specific.

## Common mistakes and why they happen

- **Drag-only interactions** — because the mouse demo looked good.
- **Tooltips with instructions** — because space was tight.
- **Tours on every launch.**
- **Previews that lie** — rendered differently from the result.
- **Reordering in filtered views** with surprising results.

## Worked comparison

**Same feature:** prioritizing a backlog of 60 items.

**Weak.** Drag-only reordering, no handle, no keyboard alternative, no indication of saving; in a filtered view, dropped
items jump to unexpected positions.

**Strong.** A handle per item; keyboard move with announcements; "Move to top" and "Move to position…" in each item's
menu; reordering disabled in filtered views with a note ("Clear filters to reorder"); saved on drop with "Priority
updated · Undo"; changes by teammates appear live with their name.

## How to verify and measure

- **Test** reordering with keyboard, touch and a screen reader.
- **Watch** whether people discover drag; measure use of menu alternatives.
- **Measure** undo after reorder (accidental drops), hint dismissal without action (hints that are noise), and
  differences reported between previews and results.

## References

- Juicebox — [handles and in-place list editing](https://mobbin.com/screens/01028d24-0e2e-4ae8-81b3-c5f8c09117a0)
- Aboard — [drag hint](https://mobbin.com/screens/e716e176-8bb2-4d14-9b9e-92ad15693491)
- Zendesk — [drop indicator](https://mobbin.com/screens/b283f8ce-10b6-44bb-909c-49f6ac8aea71)
- DoorDash — [drop indicator](https://mobbin.com/screens/46a6ef2f-2db8-4796-99a9-b22b99c25452)
- Behance — [reorder dialog with save](https://mobbin.com/screens/c2e38307-e570-44b8-b96a-95b5709351e7)
- Flodesk — [one-time hint](https://mobbin.com/screens/51004745-8ab3-4276-af6f-eb79e63aad3e)
- Navattic — [guided tour with counter](https://mobbin.com/screens/01b7fa46-ac7d-4b36-ab17-1b15ea68f5fa)
- HoneyBook — [template preview](https://mobbin.com/screens/d4c99850-7299-4f89-90c0-8f886861b590)
- Workable — [preview as recipient](https://mobbin.com/screens/5db5903d-18b2-4987-9e5a-2581f5796d28)
- Substack — [format variants](https://mobbin.com/screens/1b0b3644-2dd2-4e21-ade3-1434fba8b9ea)
- Midday — [file preview panel](https://mobbin.com/screens/98cd59cf-ebb2-4abd-bd2f-fb1fd8129979)
- Felt — [live configuration preview](https://mobbin.com/screens/8778dd01-ffd3-40ad-bc4b-e41fbeeb6189)
- WRITER — [item card before use](https://mobbin.com/screens/9642bce1-33bd-48d5-9fff-15e83269d532)
