# Accessibility

How a designer builds products that people with disabilities can perceive, operate and understand — not as a final
audit, but as part of every decision. The default target is **WCAG 2.2 level AA**. This file lists what breaks most
often, separates what is required from what is recommended, and says how to check each item and what evidence to
keep.

For complex widgets, testing with assistive technology and specific situations, see
[advanced accessibility](15-advanced-accessibility.md).

## What it is and why it matters

Accessibility is the degree to which people with different abilities can use the product: people who are blind or
have low vision, who are deaf or hard of hearing, who cannot use a mouse, who have tremors, who have cognitive or
learning disabilities, who have vestibular disorders, who are older, who are temporarily injured, or who are in a
situation that limits them (bright sun, one hand busy, a noisy room, a second language).

It matters because:

- **It is a requirement.** Many jurisdictions require WCAG-based accessibility for public sector services and,
  increasingly, for private products and services. Legal exposure is real, but it is not the main reason.
- **Barriers are absolute for the people who hit them.** A form that cannot be submitted with a keyboard is not
  "harder" for a keyboard user; it is impossible.
- **It improves usability for everyone.** Clear labels, visible focus, good contrast, captions and plain language
  help people in many situations.
- **It is cheap early and expensive late.** Most barriers are structural (semantics, focus order, custom widgets) and
  cost little when designed in, a lot when retrofitted.

## Requirement, recommendation and convention

| Kind | Meaning in this file | Example |
| --- | --- | --- |
| **Requirement (A / AA)** | A WCAG 2.2 success criterion at level A or AA. Failing it fails the target | 1.4.3 Contrast (Minimum), AA |
| **AAA criterion** | Part of WCAG at the highest level; not required for AA conformance but often good practice | 2.3.3 Animation from Interactions, AAA |
| **Recommendation** | Good practice that goes beyond the criteria or makes them easier to meet | 44×44 px touch targets |
| **Convention** | Common practice that helps but is not required | A "Skip to content" link as the very first focusable element |

Conformance is per page (or screen) and per complete process: a checkout is only conformant if every step is.

## Perceivable

| Requirement or practice | Level | What it means for design | How to check |
| --- | --- | --- | --- |
| **Text alternatives** (1.1.1) | A | Every meaningful image has a text alternative that conveys what it communicates; decorative images are hidden from assistive technology (`alt=""`). Icon-only buttons have an accessible name | Inspect images and icon buttons; screen reader pass |
| **Captions for prerecorded video** (1.2.2) | A | Videos with speech have accurate captions | Watch with captions on |
| **Audio description or alternative** (1.2.3 A, 1.2.5 AA) | A / AA | Visual information essential to understanding a video is available through narration or an audio description track | Listen without watching |
| **Captions for live audio** (1.2.4) | AA | Live video with speech has captions | Test a live session |
| **Info and relationships** (1.3.1) | A | Structure shown visually (headings, lists, tables, labels, groups) is also in the markup | Inspect semantics; screen reader headings and landmarks list |
| **Meaningful sequence** (1.3.2) | A | Reading order in the code matches the meaning | Read the page with styles off or with a screen reader |
| **Sensory characteristics** (1.3.3) | A | Instructions do not rely only on shape, color, size, position or sound ("the round button on the right") | Read the copy |
| **Orientation** (1.3.4) | AA | Content works in portrait and landscape unless an orientation is essential | Rotate the device |
| **Identify input purpose** (1.3.5) | AA | Fields collecting personal data declare their purpose (`autocomplete="email"`, `"name"`, `"postal-code"`) | Inspect fields |
| **Use of color** (1.4.1) | A | Color is never the only way to convey information: errors have text and an icon; states have words; links in body text are underlined or otherwise distinguished | View in grayscale |
| **Audio control** (1.4.2) | A | Audio that plays automatically for more than 3 seconds can be paused or muted | Load the page |
| **Text contrast** (1.4.3) | AA | 4.5:1 for normal text; 3:1 for large text (at least 24 CSS px, or 18.66 CSS px bold). Applies to placeholder text people need to read. Text in disabled controls is exempt (see note) | `scripts/contrast.mjs` on every text/background pair |
| **Resize text** (1.4.4) | AA | Text can be enlarged to 200 % without loss of content or function | Browser zoom to 200 % |
| **Images of text** (1.4.5) | AA | Use real text instead of text baked into images, except logos | Inspect |
| **Reflow** (1.4.10) | AA | Content works at 320 CSS px width (equivalent to 400 % zoom on a 1280 px screen) without two-dimensional scrolling, except for content that needs it (data tables, maps, editors) | Narrow the window to 320 px |
| **Non-text contrast** (1.4.11) | AA | 3:1 for the visual boundaries of controls (input borders), icons that convey meaning, focus indicators and essential parts of charts, against adjacent colors | `scripts/contrast.mjs` |
| **Text spacing** (1.4.12) | AA | Content survives increased line height, paragraph, letter and word spacing without clipping | Apply a text-spacing bookmarklet or stylesheet |
| **Content on hover or focus** (1.4.13) | AA | Tooltips and popovers that appear on hover or focus can be dismissed (Escape), can be hovered without disappearing, and stay until dismissed or no longer relevant | Hover and focus each one |

**Note on disabled controls.** WCAG exempts text in inactive (disabled) controls from contrast requirements. That
does not make low-contrast disabled text a good idea: if a disabled control carries information people need ("Pay"
disabled because a field is missing), the information must be available another way — usually by explaining what is
missing next to the control. See [color](10-color.md) and [forms](patterns/forms.md).

**Dark mode and high contrast.** Every theme must meet the same contrast requirements. Respect operating-system forced
colors (Windows High Contrast / `forced-colors`): do not convey state with background images or colors that forced
colors will remove.

## Operable

| Requirement or practice | Level | What it means for design | How to check |
| --- | --- | --- | --- |
| **Keyboard** (2.1.1) | A | Every function works with a keyboard: Tab and Shift+Tab to move, Enter and Space to activate, arrow keys inside composite widgets (menus, tabs, radio groups, listboxes), Escape to close | Unplug the mouse |
| **No keyboard trap** (2.1.2) | A | Focus can always leave a component; modal dialogs contain focus while open, by design, and release it when closed | Tab through everything |
| **Character key shortcuts** (2.1.4) | A | Single-key shortcuts can be turned off, remapped, or only work when the component has focus | Try shortcuts while typing elsewhere |
| **Timing adjustable** (2.2.1) | A | Time limits can be turned off, adjusted or extended (warn before expiry and allow at least a simple extension), except where essential | Let sessions and holds expire |
| **Pause, stop, hide** (2.2.2) | A | Moving, blinking or auto-updating content that lasts more than 5 seconds can be paused | Carousels, tickers, animations |
| **Three flashes** (2.3.1) | A | Nothing flashes more than three times per second | Review video and animation |
| **Animation from interactions** (2.3.3) | AAA | Motion triggered by interaction can be disabled. Not required at AA, but honoring `prefers-reduced-motion` is strongly recommended because motion can cause nausea and vertigo | Turn on reduced motion |
| **Bypass blocks** (2.4.1) | A | A way to skip repeated content (a skip link, landmarks, headings) | Keyboard from the top of the page |
| **Page titled** (2.4.2) | A | Each page or screen has a descriptive title | Browser tab and history |
| **Focus order** (2.4.3) | A | Focus moves in an order that preserves meaning, usually the visual reading order | Tab through |
| **Link purpose in context** (2.4.4) | A | Link text (with its context) says where it goes; no "click here" alone | Screen reader links list |
| **Multiple ways** (2.4.5) | AA | More than one way to find pages in a site (navigation, search, sitemap), except steps in a process | Review navigation |
| **Headings and labels** (2.4.6) | AA | Headings and labels describe their topic or purpose | Read headings alone |
| **Focus visible** (2.4.7) | AA | The keyboard focus indicator is visible | Tab through on every theme |
| **Focus not obscured** (2.4.11) | AA | The focused element is not entirely hidden by sticky headers, footers, banners or chat widgets | Tab through with sticky elements |
| **Focus appearance** (2.4.13) | AAA | A strong focus indicator (enough area and 3:1 contrast change). Recommended as a design standard even at AA | Inspect the indicator |
| **Pointer gestures** (2.5.1) | A | Multipoint or path-based gestures (pinch, swipe patterns) have a single-pointer alternative (buttons) | Use one finger or a mouse |
| **Pointer cancellation** (2.5.2) | A | Actions fire on release, not on press, so people can slide away to cancel | Press and drag away |
| **Label in name** (2.5.3) | A | A control's accessible name contains its visible text, so voice control users can say what they see | Compare visible text and accessible name |
| **Motion actuation** (2.5.4) | A | Functions triggered by shaking or tilting have a regular control alternative and can be disabled | Review device-motion features |
| **Dragging movements** (2.5.7) | AA | Anything done by dragging can be done with single clicks or taps (reorder with buttons or a menu, move with arrow keys, crop with numeric fields) | Try without dragging |
| **Target size (minimum)** (2.5.8) | AA | Targets are at least 24×24 CSS px, or have enough spacing so a 24 px circle around each does not overlap others (with exceptions for inline links and essential sizes). 44×44 px (2.5.5, AAA) is recommended, and platform guidelines recommend 44 pt on iOS and 48 dp on Android | Measure targets |

## Understandable

| Requirement or practice | Level | What it means for design | How to check |
| --- | --- | --- | --- |
| **Language of page** (3.1.1) | A | The page declares its language (`lang`), so screen readers pronounce it correctly | Inspect `html` |
| **Language of parts** (3.1.2) | AA | Passages in another language declare theirs | Inspect mixed-language content |
| **On focus / on input** (3.2.1, 3.2.2) | A | Nothing changes context just because something receives focus or a value changes (no auto-submitting a form when a select changes) unless people were warned | Tab and change values |
| **Consistent navigation** (3.2.3) | AA | Repeated navigation appears in the same order across pages | Compare pages |
| **Consistent identification** (3.2.4) | AA | The same function has the same name and icon everywhere | Compare pages |
| **Consistent help** (3.2.6) | A | Help mechanisms (contact, chat, help link) appear in the same relative place across pages | Compare pages |
| **Error identification** (3.3.1) | A | Errors are identified in text, next to the field | Submit invalid data |
| **Labels or instructions** (3.3.2) | A | Fields have visible labels and needed instructions; a placeholder is not a label | Inspect forms |
| **Error suggestion** (3.3.3) | AA | When the fix is known, the error says how to fix it | Submit invalid data |
| **Error prevention for legal, financial and data** (3.3.4) | AA | Submissions with legal or financial consequences, or that change stored data, can be reviewed, corrected, confirmed or reversed | Walk the checkout or submission |
| **Redundant entry** (3.3.7) | A | People are not asked for the same information twice in a process; it is auto-filled or selectable | Walk multi-step flows |
| **Accessible authentication (minimum)** (3.3.8) | AA | No cognitive test (memorizing, transcribing, solving puzzles) is required to log in unless an alternative exists; allow paste, password managers, passkeys, email links or codes | Try logging in with a password manager |

Plain language is not a WCAG AA requirement, but it is one of the most effective practices for people with cognitive
disabilities and for people reading in a second language: short sentences, common words, one idea per sentence,
consistent terms.

## Robust

| Requirement or practice | Level | What it means for design and build | How to check |
| --- | --- | --- | --- |
| **Name, role, value** (4.1.2) | A | Every interactive element exposes a name, a role and its state to assistive technology. Native elements do this for free: `button` for actions, `a` for navigation, real `input`, `select`, `textarea` | Screen reader; accessibility inspector |
| **Status messages** (4.1.3) | AA | Messages that appear without moving focus (saved, results count, errors after async validation) are announced via a status or alert region | Screen reader while triggering them |

Practices that make these requirements achievable:

- **Semantic HTML first**: landmarks (`header`, `nav`, `main`, `footer`), one `h1` and headings in order without
  skipping levels, lists as lists, tables as tables with headers.
- **ARIA only when there is no native element**, and complete: tabs need `tablist`, `tab` and `tabpanel` with
  `aria-selected` and `aria-controls`; disclosure buttons update `aria-expanded`; current navigation items use
  `aria-current`. Incorrect ARIA is worse than none.
- **Live regions** for content that changes without reloading: polite status for routine updates, alert for urgent
  errors only.
- **Dialogs** with `role="dialog"`, `aria-modal`, an associated title, a deliberate initial focus and focus returned
  to the trigger on close.
- **Accessible component libraries** before building complex widgets from scratch, and test them anyway: composition
  and content can still introduce barriers.

## Mobile

- Every control has a name and role for VoiceOver and TalkBack; swipe actions are exposed as accessible actions.
- Text scales with the system font size (Dynamic Type, Android font scale) up to accessibility sizes, without
  clipping.
- Targets of 44×44 pt (iOS) / 48×48 dp (Android) with spacing between them.
- No functionality depends only on shaking, tilting or multi-finger gestures.
- Orientation is not locked unless essential.

## A quick check on every screen

1. **Keyboard**: Tab through everything. Is focus visible, in a sensible order, never hidden? Can you do everything?
2. **Zoom and reflow**: 200 % zoom and a 320 px wide window.
3. **Grayscale**: is everything understandable without color?
4. **Contrast**: small text, placeholders, icons, borders, focus indicators, in every theme.
5. **Screen reader** on the main flow (VoiceOver with Cmd+F5 on macOS, NVDA on Windows, TalkBack on Android): are
   names, roles, states and changes announced?
6. **Reduced motion** turned on.
7. **Automated checks** (axe, Lighthouse, `scripts/a11y-static.mjs`) for the mechanical part. Automated tools find only
   part of the problems; keyboard, screen reader and judgment find the rest.

## Criterion, test, evidence

For every requirement in scope, keep evidence that it was checked. A finding without evidence cannot be fixed or
verified; a pass without evidence cannot be trusted.

| Criterion | Test performed | Evidence | Result |
| --- | --- | --- | --- |
| 1.4.3 Contrast | `contrast.mjs` on 14 token pairs | Output saved in the report | 13 pass; muted text on light surface 4.1:1 fails |
| 2.1.1 Keyboard | Full checkout with keyboard only | Notes per step | Date picker unreachable |
| 4.1.3 Status messages | VoiceOver while saving the form | Recording | "Saved" not announced |
| 2.4.11 Focus not obscured | Tab with the cookie banner open | Screenshot | Banner hides focused links |

Say also what was **not tested** and why (no access to NVDA, could not produce an expired session). Never write
"WCAG compliant" without manual testing; write "no problems were found in what was tested", with the scope.

## Compliance is not the same as a good experience

A screen can pass every criterion and still be hard to use with assistive technology: a form whose every field is
labeled but whose error summary is announced 40 fields after the submit button; a data table that is technically
correct but takes three minutes to navigate because every row repeats twelve icons with names. Test with real
assistive technology and, when possible, with disabled people. See
[advanced accessibility](15-advanced-accessibility.md).

## Worked comparison

**Same content:** a newsletter sign-up form with an email field and a submit button.

**Inaccessible version.**

```html
<div class="form">
  <input placeholder="Your email" class="input">
  <div class="btn" onclick="subscribe()">→</div>
  <span class="error" style="color:red">Invalid</span>
</div>
```

- No label; the placeholder disappears on typing (3.3.2, 1.3.1).
- The button is a `div`: not focusable, no role, no name (2.1.1, 4.1.2).
- The arrow alone has no accessible name.
- The error is red text only, not associated with the field, not announced (1.4.1, 3.3.1, 4.1.3).

**Accessible version.**

```html
<form>
  <label for="email">Email address</label>
  <input id="email" type="email" autocomplete="email" aria-describedby="email-hint email-error" required>
  <p id="email-hint">We send one email a month. Unsubscribe anytime.</p>
  <p id="email-error" class="error" role="alert" hidden>
    <svg aria-hidden="true">…</svg> Enter an email address like name@example.com
  </p>
  <button type="submit">Subscribe</button>
</form>
```

- A visible, associated label and a hint linked with `aria-describedby`.
- A native button with a text name that matches what people see.
- The error has an icon and text, is linked to the field, and is announced when it appears.
- `autocomplete` helps people with motor and cognitive disabilities fill it quickly (1.3.5).

## Common mistakes

- **Accessibility as a final audit.**
- **Divs and spans as buttons.**
- **Placeholder as label.**
- **Color-only states.**
- **Removing focus outlines** without a visible replacement.
- **Custom widgets without keyboard support.**
- **ARIA added to "fix" the wrong element** instead of using the right one.
- **Trusting automated tools alone.**
- **Claiming compliance without evidence.**

## Checklist

- [ ] Text, non-text and focus contrast meet AA in every theme.
- [ ] Nothing relies on color alone.
- [ ] Every function works with a keyboard; focus is visible, ordered and never obscured.
- [ ] Every control has a name, role and state; native elements are used where they exist.
- [ ] Forms have visible labels, associated errors with suggestions, and no redundant entry.
- [ ] Content reflows at 320 px and survives 200 % zoom and increased text spacing.
- [ ] Media has captions and alternatives; nothing autoplays sound; motion can be paused and reduced.
- [ ] Targets meet 24×24 px minimum (44 recommended); dragging and gestures have alternatives.
- [ ] Status messages are announced; page and passage languages are declared.
- [ ] Evidence is kept per criterion, and untested areas are stated.
