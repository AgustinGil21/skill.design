# Dialogs, overlays and confirmations

Every layer interrupts. Dialogs, side panels, popovers, menus, sheets and banners each interrupt differently, and
choosing the wrong one either breaks people's flow or hides something they needed to see. This pattern covers how to
choose a layer by task, how much interruption each costs, how to confirm risky actions, and how to manage focus.

## The problem and who has it

People need to do small things without losing their place (rename an item, pick an option, edit a detail), and
occasionally need to stop and consider something serious (delete a project, leave unsaved work). Overlays are how
interfaces offer both. When they are misused:

- **Modals for everything** make people dismiss them by habit, including the one that mattered.
- **Confirmations for everything** train people to click "Yes" without reading.
- **Heavy dialogs for detail** hide the list people were working through.
- **Lost focus** strands keyboard and screen reader users.

## Questions to ask before deciding

- **Does the person need the context behind the layer** while using it (the list, the document)?
- **How long is the task**: one choice, a few fields, many steps?
- **Must the person decide before continuing**, or can the layer wait?
- **How reversible is the action** the layer leads to — really, including effects outside the product?
- **How often does it happen?** Daily interruptions need to be very light.
- **What happens on small screens and with keyboard and screen readers?**

## Alternatives and how to choose

| Need | Layer | Why | Cost |
| --- | --- | --- | --- |
| Choose one option or a short action | **Menu or popover** | Minimal interruption, anchored to the trigger | Limited room; dismisses easily |
| See or edit a detail without losing the list | **Side panel (sheet)** | The list stays visible for comparison and navigation | Less width for the detail |
| A short, focused task that must be completed or cancelled | **Dialog (modal)** | Focus and a clear end | Blocks everything else |
| A long task or several steps | **Its own page or full screen** | Room, URL, back button | Context switch |
| Tell about something that already happened | **Toast** | Does not interrupt | Easy to miss; disappears |
| Warn about something that blocks or matters now | **Inline banner** (or an alert dialog if action is mandatory) | Visible where it applies | Takes space |
| Short supplementary information | **Tooltip** (on hover and focus) | Zero interruption | Not for essential content; not for touch alone |
| A persistent companion (assistant, comments) | **Docked panel that pushes content** | Coexists with work | Reduces work area |

The number of fields does not decide the layer on its own: a two-field dialog that needs the document behind it to be
filled correctly should be a panel or inline; a ten-field task that must be completed in isolation can be a dialog on
desktop and a full screen on mobile.

## When to use it and when not

- **Do not open a dialog to show information** that could be inline.
- **Do not stack dialogs**: a dialog on top of a dialog loses people. Replace the content, or move to a page.
- **Do not use modals for marketing** (newsletter prompts, upsells) in the middle of tasks.
- **Do not interrupt for success**: a toast or an inline change is enough.

## Anatomy and behavior

### Dialogs

- **A title that names the task** ("Invite your team"), not "Attention".
- **One primary action** and a secondary "Cancel". Button order follows the platform convention (commonly Cancel then
  the action on the web and macOS; Windows conventions differ); be consistent within the product.
- **Closing**: Escape, the close button, and clicking outside — **only when nothing has been changed**; with changes,
  ask whether to discard.
- **Focus moves in** on open, **stays inside** while open, and **returns** to the trigger on close (see focus
  destinations below).
- **The background is inert** to assistive technology and keyboard while the modal is open.
- **Scrolling**: long dialogs scroll their body, keeping title and actions visible.
- **Mobile**: dialogs often become full-screen sheets or bottom sheets.

### Side panels

- For contextual detail and editing; the list stays visible for comparison or moving to the next item.
- A width around 400–560 px is a common starting value; on small screens, full screen.
- Move between items with arrow keys or "Previous / Next" without closing the panel.
- Panels that coexist with work (assistant, comments) push content rather than covering it.
- Panels are usually non-modal: focus moves in when opened to act, but the rest of the page remains usable.

### Menus

- Grouped with separators; icons on the start side only if all items have them; shortcuts on the end side.
- Destructive actions last, separated and styled as destructive.
- Keyboard: arrow keys, Enter, Escape, first-letter type-ahead; follow the menu pattern only for actions, not for site
  navigation (see [advanced accessibility](../15-advanced-accessibility.md)).

## Confirm before, or undo after?

- **By default, act and offer undo** (delete an item, archive, move). Prior confirmation becomes noise, and people learn
  to accept without reading.
- **Confirm only what is irreversible and costly**: deleting a project, an account, other people's data, sending to many
  people, paying.
- **Check real reversibility**: undo that only reverses the interface, while an email was already sent or a webhook
  fired, is not undo (see [principles](../00-principles.md)).

| Action | Reversible? | Protection |
| --- | --- | --- |
| Archive a message | Yes | Act + undo |
| Delete a file with a 30-day trash | Within the window | Act + undo + "Moved to trash for 30 days" |
| Remove a member from a workspace | Their access stops immediately; can re-invite | Confirm with consequences (what they lose, who is notified) |
| Delete a project with no trash | No | Strong confirmation |
| Send a campaign to 12,000 people | No | Preview, test send, confirm with the count |

## Confirming irreversible actions

A widely repeated pattern ([Cloudflare](https://mobbin.com/screens/aa928ac1-4a1d-4b8c-9ccb-be35211cdca8),
[Clerk](https://mobbin.com/screens/71516c8f-ca28-4b68-bca8-01b6ea6e46ec),
[Lindy](https://mobbin.com/screens/9f1d4d52-a8f7-48b7-89e5-b113b6aa6419),
[Relevance AI](https://mobbin.com/screens/552cef13-e0e1-41d4-8715-9b5b7d65cb43)):

1. **A title with verb and object**: "Delete project "Aurora"".
2. **Concrete consequences**: what will be lost (versions, files, members) and that it cannot be undone.
3. **Typing the name** (or a word such as DELETE) to enable the button, sometimes with a copy button next to the text
   to type (Cloudflare, [Resend](https://mobbin.com/screens/778f011b-60b4-4584-b317-1e2353024e0c)). For bulk deletions,
   typing the count ([HubSpot](https://mobbin.com/screens/36379d53-ae81-4379-a218-a3e05659194a)).
4. **A destructive button with the exact verb** ("Delete project"), disabled until the text matches.
5. **If a trash or grace period exists, say so** ("Can be recovered for 30 days").

### Does typing the name actually work?

Typing a name adds deliberate effort, which helps prevent accidental clicks. But a copy button next to the name lets
people paste without reading, which can defeat the purpose; and typing requirements create barriers for some people
(motor and cognitive disabilities, unfamiliar scripts). Consider:

- Use type-to-confirm only for the most destructive actions, not routine ones.
- Make the consequence the focus, not the puzzle: list what will be lost, with counts.
- Ensure the text to type is easy to enter in any keyboard layout (avoid special characters).
- For the highest stakes (deleting an organization), add a delay or a second channel (email confirmation) instead of a
  harder puzzle.

### Unsaved changes

When people close a layer or leave a page with unsaved changes:

- Ask with clear options: "Save changes", "Discard", "Keep editing" — not "Are you sure? Yes / No".
- Better: autosave drafts so leaving is safe.

## Focus: where it goes

| Moment | Focus destination |
| --- | --- |
| A form dialog opens | The first field |
| A content dialog opens (text to read before acting) | The dialog title or the start of the content |
| A destructive confirmation opens | The least destructive control (Cancel), or the title, so Enter does not destroy |
| The dialog closes | The trigger that opened it |
| The trigger no longer exists (the item was deleted) | The next logical element (next item, list heading) |
| A side panel opens to edit | Into the panel |
| A popover opens | The first item or the content; Escape returns to the trigger |

## Interruption cost

Every interruption costs attention, and the cost grows with frequency. Budget interruptions:

- A daily action with a confirmation costs dozens of interruptions per week per person.
- A modal upsell during a task costs trust.
- An alert that is shown often stops being read.

When in doubt, use the lighter layer and measure whether people miss important information.

## States and transitions

- Dialogs with forms have the same states as forms: validating, submitting, error, success (see [forms](forms.md)).
- A dialog whose action is in progress keeps the dialog open with a pending state, then closes and confirms.
- If the action fails, the dialog stays open with the error and the input preserved.
- Opening and closing animations are short and respect reduced motion.

## Edge cases

- The underlying item changes or is deleted by someone else while a dialog about it is open.
- Very long names in confirmation titles (truncate in the middle; show full name in the body).
- Dialogs on small screens with the keyboard open (actions must stay reachable).
- Right-to-left: panel side and button order follow the layout direction.
- Nested choices that tempt a dialog inside a dialog: replace content within the same dialog instead.

## Accessibility specifics

- `role="dialog"` (or `alertdialog` for confirmations that need an immediate response), `aria-modal="true"`, an
  accessible name from the title, and a description when useful.
- Focus trapping inside modals, and inert background.
- Escape closes, unless closing would lose data without confirmation.
- Focus returns predictably; no focus loss.
- Popovers and tooltips follow 1.4.13 (dismissible, hoverable, persistent).
- Type-to-confirm fields have labels and work with assistive technology and paste.

## Copy

- Dialog titles name the task or the specific question.
- Bodies state consequences with numbers and names.
- Buttons repeat the action; avoid "Yes / No" and "OK".
- In other languages, ensure the confirm word to type is translated and easy to type with that language's keyboard.

## Common mistakes and why they happen

- **Modal by default** — because it is easy to build.
- **Confirmation everywhere** — because someone once deleted something by accident; undo would have been better.
- **Dialog on dialog** — because flows grew without restructuring.
- **Focus lost after close** — because the trigger disappeared.
- **Generic "Are you sure?"** — because the consequence was never written down.

## Worked comparison: the same task as dialog, panel and page

**Task:** editing a customer's details from a list of customers.

| Layer | Works when | Fails when |
| --- | --- | --- |
| Dialog | Changing one or two fields quickly | The person needs to compare with other customers or browse to the next |
| Side panel | Reviewing and editing customers one after another | The record has many sections and long text |
| Page | The record is complex (contacts, invoices, notes) and people work on it for a while | People need to edit many customers quickly |

A support team that updates customers between calls chose the side panel with Previous/Next; an accounting team that
manages complex accounts chose the page. Both were right for their task.

## How to verify and measure

- **Test** with keyboard and screen reader: open, act, close, delete-then-close.
- **Observe** whether people read confirmations or click through them.
- **Measure** undo usage (high undo use means the action was easy to trigger by mistake), accidental-deletion support
  requests, and abandonment in dialogs.

## References

- Cloudflare — [type-to-confirm deletion](https://mobbin.com/screens/aa928ac1-4a1d-4b8c-9ccb-be35211cdca8)
- Clerk — [irreversible confirmation](https://mobbin.com/screens/71516c8f-ca28-4b68-bca8-01b6ea6e46ec)
- Lindy — [irreversible confirmation](https://mobbin.com/screens/9f1d4d52-a8f7-48b7-89e5-b113b6aa6419)
- Relevance AI — [irreversible confirmation](https://mobbin.com/screens/552cef13-e0e1-41d4-8715-9b5b7d65cb43)
- Resend — [type-to-confirm with copy](https://mobbin.com/screens/778f011b-60b4-4584-b317-1e2353024e0c)
- HubSpot — [typing the count for bulk deletion](https://mobbin.com/screens/36379d53-ae81-4379-a218-a3e05659194a)
