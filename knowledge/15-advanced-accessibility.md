# Advanced accessibility

What goes beyond the requirements list in [accessibility](02-accessibility.md): how complex interfaces work for real
people using real assistive technology, how to decide focus and announcements in dynamic interfaces, and how to test
end to end. Requirements tell you what must be true; this file is about designing interactions where those
requirements are easy to meet and pleasant to use.

## Who, and with what

Design decisions land differently depending on how people perceive and operate the interface.

| Situation | Tools or adaptations | What breaks the experience |
| --- | --- | --- |
| **Blind** | Screen readers (VoiceOver, NVDA, JAWS, TalkBack, Narrator), navigation by headings, landmarks, links and form fields; braille displays | Images without text, unnamed buttons, illogical order, content that appears without being announced, custom widgets without roles |
| **Low vision** | Zoom of 200–400 %, screen magnifiers, high contrast, large system fonts | Text that does not scale, horizontal scrolling, low contrast, information far from the focus point |
| **Color vision deficiency** | Sometimes filters | Color as the only signal |
| **Motor disabilities** | Keyboard, switch access, voice control, eye tracking, alternative pointers | Small targets, dragging without alternatives, short timeouts, single-key shortcuts, hover-only content |
| **Deaf or hard of hearing** | Captions, transcripts, visual alerts | Audio and video without text; sound-only notifications |
| **Cognitive and learning disabilities** | Plain language, consistency, few steps, reading aids | Complex text, unexpected changes, time pressure, too many choices, memory demands |
| **Vestibular disorders, epilepsy** | Reduced motion | Parallax, zooms, large movement, flashing |
| **Temporary or situational** | One arm busy, sunlight on the screen, a noisy room, a second language, a slow connection | The same barriers as above: accessible design helps everyone |

People often combine tools: a low-vision person may use zoom and a screen reader; a voice-control user also sees the
screen. Design so tools work together.

## Names, roles and states, in practice

- **Native HTML first** (`button`, `a`, `input`, `select`, `details`/`summary`, `dialog`): keyboard, focus and semantics
  come for free. Use ARIA only when there is no native element — incorrect ARIA is worse than none, because it tells
  assistive technology something false.
- **Every control has an accessible name that contains its visible text** (WCAG 2.5.3 Label in Name, A). Voice
  control users say what they see: "click Save draft" must work.
- **States are exposed and kept in sync**: `aria-expanded`, `aria-pressed`, `aria-selected`, `aria-checked`,
  `aria-current="page"`, `aria-invalid` with the error linked by `aria-describedby`.
- **Icon-only controls** have an accessible name (visually hidden text or `aria-label`); decorative icons are hidden
  with `aria-hidden="true"`.
- **Names are concise and distinguishable.** Twenty buttons named "Edit" in a table are unusable in a screen reader's
  list of controls; "Edit invoice 2041" (visually "Edit", with hidden context) is not.

## Interaction models for complex widgets

The WAI-ARIA Authoring Practices Guide (APG) documents the expected keyboard behavior and semantics for common
widgets. Follow it; people who use assistive technology rely on these conventions as much as sighted mouse users rely
on visual ones. Before building, decide which model a component follows — mixing models is the most common cause of
confusing widgets.

| Widget | Use it for | Keyboard model (summary) | Common mistakes |
| --- | --- | --- | --- |
| **Disclosure** (show/hide) | Revealing a section | Enter/Space toggles; `aria-expanded` on the button | Using a link; not updating state |
| **Accordion** | A set of disclosures | Same as disclosure; optional arrow keys between headers | Making headers non-headings; hiding content needed at once |
| **Tabs** | Switching between panels of one context | Tab enters the tab list; arrow keys move between tabs; Tab moves into the panel | Using tabs for navigation between pages; every tab in the Tab sequence |
| **Menu button and menu** | A list of actions (not navigation) | Enter/Space or Down opens; arrows move; Escape closes and returns focus | Using `role="menu"` for site navigation, which changes keyboard expectations |
| **Listbox** | Choosing one or many options from a list | Arrows move, Space selects (multi), type-ahead | Custom listboxes that ignore type-ahead |
| **Combobox** | A text field with suggestions | Typing filters; Down opens; arrows move through options; Enter selects; Escape closes | Moving focus into the list instead of using active descendant; not announcing results count |
| **Dialog (modal)** | A task that blocks the page until done | Focus moves in, stays in, Escape closes, focus returns | No initial focus; focus lost on close; background still reachable |
| **Grid** | Interactive tabular data (spreadsheet-like) | Arrows move between cells; Tab leaves the grid; Enter edits | Using grid semantics for a simple data table, which makes reading harder |
| **Tree** | Hierarchies (folders) | Arrows navigate and expand/collapse; type-ahead | Deep trees without "expand all" or search |
| **Carousel** | Rotating content | Previous/next buttons; pause; slide position announced | Auto-rotation without pause; hidden slides still focusable |
| **Tooltip** | Short supplementary info on hover and focus | Appears on focus and hover, dismissible with Escape (1.4.13) | Essential information only in a tooltip; tooltips on non-focusable elements |
| **Slider** | Choosing a value in a range | Arrows change by step; Page Up/Down by larger steps; Home/End | No text input alternative for precise values |
| **Date picker** | Choosing dates | A text field that accepts typed dates in the person's locale, plus an optional calendar grid | Forcing the calendar; calendars that start the week on the wrong day for the locale |

**Simple data tables are not grids.** A table people read should be a `table` with headers, navigated with the screen
reader's table commands. Use the grid pattern only when cells are interactive and keyboard cell navigation helps.

## Deciding where focus goes

Focus is the keyboard and screen reader user's position. Moving it is a design decision with consequences.

| Situation | Focus destination | Why |
| --- | --- | --- |
| Dialog opens | The first meaningful element: usually the first field, or the dialog title/heading when the dialog contains content to read first; for a destructive confirmation, the least destructive action | The person needs context before acting; accidental Enter should not destroy data |
| Dialog closes | The control that opened it | Keeps the person's place |
| Dialog closes and its trigger no longer exists (the item was deleted) | The next logical element: the next item in the list, or the list heading | Focus must not fall to the top of the page |
| Navigating to a new view in a single-page app | The new view's main heading (`h1`), with the title updated | Mimics a page load; announces where they are |
| Submitting a form with errors | The error summary at the top (with links to fields), or the first invalid field for short forms | People need to know what failed and get to it |
| Content updates in place (filters applied, results loaded) | Do not move focus; announce the change with a status message | Moving focus would make people lose their place |
| An item is added to a list | Usually keep focus where it was; announce "Added"; optionally move focus to the new item if the next action is to edit it | Depends on the task |
| An item is deleted from a list | The next item, or the previous if it was the last | Prevents focus loss |
| A toast appears | Do not move focus; announce politely; make its action reachable elsewhere too | Toasts disappear; focus inside them would vanish |
| A panel opens beside the content (non-modal) | Into the panel if the person opened it to act there; otherwise stay | Non-modal panels should not trap or steal focus |

The worst outcome is **focus loss**: focus falls to `body` and the next Tab starts from the top of the page. Test every
action that removes, replaces or hides the focused element.

## Announcing changes without saturating

Status messages (WCAG 4.1.3, AA) must be announced, but too many announcements make a screen reader unusable.

- **Polite status** (`role="status"` / `aria-live="polite"`) for routine results: "Saved", "12 results",
  "Filter applied".
- **Assertive alert** (`role="alert"`) only for urgent, time-sensitive errors: "Connection lost — your changes are not
  being saved".
- **Short and specific.** "3 files uploaded, 1 failed" rather than a paragraph.
- **Debounce rapid updates.** A search-as-you-type results count should announce after typing pauses, not on every
  keystroke. A progress bar should announce milestones (25 %, 50 %…), not every percent.
- **Do not announce what the person caused and can perceive.** Typing in a field does not need "You typed A".
- **The live region must exist in the page before the message is inserted**, or many screen readers ignore it.
- **Do not duplicate**: if focus moves to an error message, it is read anyway; also announcing it repeats it.

## Hard cases

### Virtualized and infinite lists

Lists that render only visible rows break assumptions: screen reader users cannot "see" the total; find-in-page
fails; focus can land on a row that is then removed from the DOM.

- Expose the total and position (`aria-setsize`, `aria-posinset` for list items; row counts for tables) so people
  know where they are.
- Keep the focused row rendered even when scrolled away.
- Offer a "Load more" button or pagination as an alternative to infinite scroll; infinite scroll also makes footers
  unreachable.
- Provide search and filters so people do not need to traverse thousands of items.

### Canvas, maps and data visualizations

- Provide the underlying data in an accessible form: a table, a list or a text summary of the insight ("Revenue grew
  each month except August").
- For interactive maps, provide a list view of the same results with the same filters.
- For canvas-based editors, the hardest case: provide keyboard commands for selection and movement, an accessible
  outline or layers panel that mirrors the canvas, and numeric inputs for position and size.

### Rich text editors and collaborative editing

- Use established editor frameworks with accessibility support rather than building from scratch.
- Announce collaborators' changes sparingly; never move the person's caret because of someone else's edit.
- Formatting must be available through keyboard shortcuts and a toolbar reachable by keyboard.

### Drag and drop

Every drag interaction needs a non-drag alternative (WCAG 2.5.7, AA): "Move up/down" buttons, a "Move to…" menu, or
keyboard pick-up-and-drop (Space to pick up, arrows to move, Space to drop, Escape to cancel) with announcements of
the current position.

### Time limits and sessions

Warn before a session or hold expires with enough time to extend it, in a way that is announced and reachable without
losing work. Save drafts so expiry does not destroy input.

### Authentication

Allow password managers, paste, passkeys and email or app codes; avoid puzzles and transcription challenges (WCAG
3.3.8, AA). If a CAPTCHA is unavoidable, offer an alternative that does not depend on vision, hearing or puzzles.

## Conflicting needs and preferences

Accessibility needs can conflict with each other:

- **Large text vs. seeing everything at once**: people with low vision zoom in and see less; people with some
  cognitive disabilities need everything visible. Reflow and good structure serve both.
- **Captions vs. visual clutter**: captions help many and distract some. Make them controllable.
- **Motion that explains vs. motion that harms**: a transition that shows where an item went helps comprehension; for
  people with vestibular disorders, it can cause nausea. Honor reduced motion with a non-moving equivalent (an
  instant change plus a highlight).
- **Shortcuts for efficiency vs. accidental activation**: single-key shortcuts help power users and trigger by mistake
  for speech users (WCAG 2.1.4). Make them remappable or require a modifier.

Resolve conflicts with options the person controls, not by choosing one group over another.

## Cognitive accessibility in depth

- **Plain language**: short sentences, common words, one idea per paragraph, explained terms. Aim for text most
  people can read quickly in their first language and understand in a second.
- **Consistency**: the same navigation and names on every page (3.2.3 and 3.2.4, AA); help in the same place (3.2.6, A).
- **Memory support**: show previous answers, keep context visible, do not require remembering codes across screens.
- **Error tolerance**: warn about consequences before important actions; allow review and undo.
- **Focus on one task**: avoid distractions (auto-playing media, unrelated promotions) in task flows.
- **Time**: no time limits, or generous ones that can be extended.

## Testing end to end

Accessibility testing is a combination of methods; each finds different problems.

1. **Automated checks** (axe, Lighthouse, WAVE, `scripts/a11y-static.mjs`): fast, mechanical, catch only part of the
   problems. Necessary, not sufficient.
2. **Keyboard only**: complete every critical journey with Tab, Shift+Tab, Enter, Space, Escape and arrows.
3. **Screen reader**: VoiceOver (macOS/iOS), NVDA (Windows), TalkBack (Android). Navigate by headings, landmarks,
   links and form fields, and complete the critical journeys. Listen to what is announced after each action.
4. **Zoom and reflow**: 200 % and 400 %, a 320 px wide window, large system text.
5. **Preferences**: reduced motion, forced colors / high contrast, dark mode.
6. **Voice control**: Voice Control (macOS/iOS) or Voice Access (Android): can every control be activated by saying
   its visible name?
7. **With disabled people**: the only way to learn what tools and checklists cannot show. Recruit people who use the
   relevant technology daily, and pay them.

### Scenario-based testing

Test journeys, not pages. A scenario names the person, the tool and the goal:

| Scenario | Tool | Goal | Watch for |
| --- | --- | --- | --- |
| Booking an appointment | NVDA + Firefox | Choose a doctor, a slot and confirm | Date picker usable by keyboard; confirmation announced |
| Paying an invoice | VoiceOver on iPhone | Pay and get the receipt | Amount and recipient read before confirming; success announced |
| Editing a table of products | Keyboard + 200 % zoom | Change three prices | Focus visible at zoom; no horizontal scroll trap |
| Reordering a playlist | Voice Control | Move a song up three places | Non-drag alternative reachable by name |

## Usability vs. compliance

Passing criteria is the floor. A compliant interface can still be slow and frustrating with assistive technology:
an error summary announced after 40 fields, a table where every row repeats twelve labeled icons, a combobox that
announces each of 300 options. Measure task success and time with assistive technology, not just pass or fail per
criterion.

## Worked comparison: closing a dialog whose trigger disappeared

**Situation:** in a list of 30 invoices, a keyboard user opens the "Delete invoice 2041" confirmation dialog from the
row's menu and confirms. The row, and the menu button that opened the dialog, no longer exist.

**Weak behavior.** The dialog closes and focus returns to the removed button. Focus falls to the `body`; the next Tab
starts at the skip link at the top of the page. A screen reader user hears nothing about the deletion and has lost
their place in the list.

**Strong behavior.**

- After deletion, focus moves to the next invoice row's first focusable element (invoice 2042), or to the previous
  one if 2041 was last, or to the list heading if the list is now empty.
- A polite status announces "Invoice 2041 deleted. Undo available."
- The undo action is reachable in the page, not only in a disappearing toast.
- Tested with keyboard and VoiceOver: focus lands predictably, and the announcement is heard once.

## Documenting

- An **accessibility statement** with the target level, known gaps and a contact for reporting barriers.
- In every review, record **what was tested, with what tools and by whom**, and what was not (see verification levels
  in [real state and verification](08-real-state-and-verification.md)).

## Common mistakes

- **Choosing a widget by appearance** instead of by interaction model (menus for navigation, grids for read-only
  tables).
- **Focus loss** after deletions, closes and view changes.
- **Announcing everything** or nothing.
- **Infinite scroll** with no alternative and no position information.
- **Testing pages instead of journeys.**
- **Treating compliance as the goal** rather than as the floor.

## Checklist

- [ ] Each complex widget follows one documented interaction model (APG) with its keyboard behavior.
- [ ] Accessible names are concise, distinguishable and contain the visible text.
- [ ] Focus destinations are designed for open, close, navigate, submit, add and delete — no focus loss.
- [ ] Status messages are announced politely, debounced, and alerts are reserved for urgent errors.
- [ ] Virtualized lists, canvases, maps and charts have accessible equivalents.
- [ ] Drag, gestures, time limits and authentication have accessible alternatives.
- [ ] Conflicting needs are resolved with options the person controls.
- [ ] Critical journeys were tested with keyboard, a screen reader, zoom, voice control and preferences.
- [ ] Testing coverage and gaps are documented, and a way to report barriers exists.
