# Bookings, keyboard shortcuts and what's new

Three patterns grouped for convenience: **bookings** (a table, an appointment, a place) as temporary commitments;
**keyboard shortcuts** that make expert use fast; and **what's new** pages that tell people about changes. Each has a
non-obvious core: a booking is a promise with time limits and penalties; shortcuts depend on context and keyboard
layouts; announcements must distinguish new features from changes that break habits.

## Bookings

### The problem and who has it

People reserve limited resources at a time: restaurant tables, appointments, rooms, classes, rentals. Bookings fail
when the slot disappears at confirmation, rules (cancellation, deposits) surprise people, or changing a booking is
harder than making it.

### Questions to ask before deciding

- **Is the resource held while people decide**, and for how long?
- **What are the rules**: deposits, cancellation windows, no-show fees, late arrival tolerance?
- **Can people change**, join a waitlist, or book for someone else?
- **How is the booking confirmed** (instant or pending approval)?

### Availability and commitment

| Moment | Commitment |
| --- | --- |
| Browsing times | None; availability may change |
| Selecting a time | Optional hold ("We'll hold this table for 5:00") |
| Confirming | Booking created; rules apply |
| Pending approval | Requested, not confirmed — say so |
| Cancelled within the free window | No charge |
| Cancelled late / no-show | Fees per policy |

### Anatomy and behavior

- **The three facts that decide together at the top**: people · date · time, as chips or selectors in a row, editable
  at any moment ([Deliveroo](https://mobbin.com/flows/273b91d4-ed45-4e31-bdcd-44c392e46a3a),
  [Google Maps](https://mobbin.com/flows/0d96c444-c82b-4655-984e-a1cc9ad5f4a8)).
- **Available times as buttons**, unavailable ones dimmed (not hidden, so the gap is understood), grouped by period
  (Lunch / Dinner) with "See all" ([Zomato](https://mobbin.com/flows/786683de-379e-4460-8e0f-994f73d34a7e),
  [Uber Eats](https://mobbin.com/flows/0bbd24f0-3731-461d-b07c-01b4e355ff5b)).
- **Booking from the list** by tapping a time on the card, without going through the detail page
  ([TheFork](https://mobbin.com/flows/21d0ad29-148f-481c-894d-9e9d22885fb8)).
- **A calendar with available days highlighted**, past or full days dimmed (Deliveroo).
- **A fixed, editable summary in the review** ("Sun 1 Feb · 11:45 · 2 people · Edit"), contact details pre-filled,
  optional special requests ([Grab](https://mobbin.com/flows/781fe4f1-a471-4688-b940-36d532d2e822)).
- **Rules before confirming**: tolerance, duration, cancellation policy, charges; and "Instant confirmation · No charge
  · Free cancellation" next to the button (TheFork) — when true.
- **A visible hold time** when the place is set aside ("We'll hold your table for 4:46", Uber Eats).
- **Marketing off by default** in review checkboxes.
- **Confirmation**: what, when, where, where the receipt was sent, and useful actions (add to calendar, directions,
  share, manage or cancel). Anti-example: advertising for another product in the confirmation (Zomato).

### Change, wait and cancel

- **Changing** a booking is as easy as making it; show the new availability and keep the old booking until the new one
  is confirmed.
- **Waitlists**: position or likelihood when known, how people will be notified, and how long they have to accept.
- **Booking for others**: the guest's name and contact; who receives confirmations.
- **Cancellation**: the consequence before confirming ("Free until 18:00 today; after that, a 10.00 EUR fee").

## Keyboard shortcuts

### Discovery vs. customization

- **Discovery**: show shortcuts where actions live (tooltips, menus, the command palette) so people learn them while
  working.
- **Reference**: a searchable list opened with "?" or Cmd/Ctrl+/ from anywhere, grouped by context (Global, List,
  Detail, Editor; [Amie](https://mobbin.com/screens/bd60d05d-f8f8-4a5f-801b-533c35f06c9f),
  [Frame.io](https://mobbin.com/screens/7bf0c9af-dd42-4511-a35e-15e097df461b)).
- **Customization**: each action with its shortcut and "Edit" / "Add shortcut"; record the combination by pressing it;
  warn about conflicts; "Show only customized" and "Reset" ([Height](https://mobbin.com/screens/227ea05e-2f27-4ad6-8bbf-fa8915d896f3),
  [Replit](https://mobbin.com/screens/ff45e13e-7ef5-4178-9434-dd7382fcff1c)).

### Anatomy and behavior

- **Keys as separate key caps** ("⌘" "K"), with the symbols of the viewer's operating system (⌘ on Mac, Ctrl on
  Windows and Linux).
- **Context stated** when a shortcut works only somewhere ("These work with a message selected",
  [Discord](https://mobbin.com/screens/d747e905-e01f-488a-9edb-cfefdbd958d5)).
- **Single-key shortcuts can be turned off** (WCAG 2.1.4, A) — they interfere with screen readers and dictation
  ([Zoho CRM](https://mobbin.com/screens/8291b6de-66e5-495e-91a8-c8a2b6525956) has the switch).
- **Limits stated**: "Global shortcuts only work in the desktop app" (Discord, Fabric).

### Keyboard layouts

Shortcuts built on punctuation (`/`, `[`, `\`, `` ` ``) move or require modifiers on many non-US layouts (QWERTZ,
AZERTY, Nordic, Spanish, Japanese). Prefer letters and numbers with modifiers for important shortcuts; detect the
layout where possible; test on common layouts; let people remap.

## What's new (changelogs)

### Kinds of change

| Change | Communication |
| --- | --- |
| New feature | Announce where people will use it; optional to try |
| Improvement | Brief note; no interruption |
| Fix | Changelog only |
| Breaking change (moved, renamed, removed) | Advance notice, in-context explanation, migration help (see [redesigns and migrations](../29-redesigns-and-migrations.md)) |
| Feature not available to everyone (plan, region, rollout) | Say who gets it and when |

Announcing more is not always better: a stream of announcements trains people to ignore them, and announcing features
people cannot use (wrong plan, not yet rolled out) confuses and frustrates.

### Anatomy and behavior

- **Entries in reverse chronological order** with date (and version if applicable), a title that says what people can
  do now, one or two lines, and an image or video of the change
  ([Visual Electric](https://mobbin.com/screens/d9619b46-9e89-4981-bef1-ad85c5074d79)).
- **A type label** (New · Improved · Fixed) and filters by type ([Canny](https://mobbin.com/screens/32a827a7-bbaf-4184-942d-d52462742365),
  [Webflow](https://mobbin.com/screens/e3459bdb-c87e-4603-97d4-15b5865629ca)).
- **The important first, the minor collapsed** ("Platform improvements", "Bug fixes" in accordions;
  [Gumloop](https://mobbin.com/screens/48782b0a-881f-44cf-81cf-c4bcbc6b8e30)).
- **A path to try it**: a button that opens the feature ("Start creating", "See in Studio") or "Learn more".
- **A version selector** when there are many ([Leonardo](https://mobbin.com/screens/e0cbc005-7d2a-47e3-b7de-33effee96097)).
- **Inside the product**: a discreet dot on "What's new" when there is something unseen, and a side panel
  ([Tally](https://mobbin.com/screens/cd537297-7313-4098-ad1a-0595d1781b81)); not a modal that interrupts on arrival
  (anti-example: [Suno](https://mobbin.com/screens/e5128125-a731-4a11-9100-bbbf940922b6)).
- **RSS and search**; a link to the roadmap ("What's coming") if one exists.
- **Written for users, not the team**: "You can now merge two images", not "Pipeline refactor".
- **Localized**: in the languages the product supports.

## Accessibility specifics

- Booking time buttons with full date and time names; unavailable states announced.
- Shortcut reference reachable by keyboard and screen reader; remapping usable without a mouse.
- Changelog images with alternative text; videos with captions.

## Common mistakes and why they happen

- **Slots that disappear at confirmation.**
- **Cancellation rules discovered after booking.**
- **Shortcuts that conflict with assistive technology or non-US layouts.**
- **Announcement modals on every login.**
- **Announcing features people cannot access.**

## Worked comparison: an announcement that confuses

**Weak.** A modal on login: "New: AI summaries!" shown to everyone, including free-plan users who cannot use it and
admins whose organizations disabled AI features.

**Strong.** Eligible users see a dot on "What's new" and a short entry with "Try it on your last meeting"; free-plan
users see the entry with "Available on Pro"; organizations that disabled AI do not see it promoted.

## How to verify and measure

- **Bookings**: completion, slot conflicts, changes vs. cancellations, no-shows.
- **Shortcuts**: usage by experts, remaps, conflicts reported.
- **What's new**: feature adoption after announcement, dismissals, support questions about changes.

## References

- Deliveroo — [booking facts and calendar](https://mobbin.com/flows/273b91d4-ed45-4e31-bdcd-44c392e46a3a)
- Google Maps — [booking facts](https://mobbin.com/flows/0d96c444-c82b-4655-984e-a1cc9ad5f4a8)
- Zomato — [time buttons; anti-example confirmation ads](https://mobbin.com/flows/786683de-379e-4460-8e0f-994f73d34a7e)
- Uber Eats — [time buttons and hold timer](https://mobbin.com/flows/0bbd24f0-3731-461d-b07c-01b4e355ff5b)
- TheFork — [book from the list and rules](https://mobbin.com/flows/21d0ad29-148f-481c-894d-9e9d22885fb8)
- Grab — [editable summary](https://mobbin.com/flows/781fe4f1-a471-4688-b940-36d532d2e822)
- Amie — [shortcuts reference](https://mobbin.com/screens/bd60d05d-f8f8-4a5f-801b-533c35f06c9f)
- Frame.io — [shortcuts reference](https://mobbin.com/screens/7bf0c9af-dd42-4511-a35e-15e097df461b)
- Discord — [context and limits](https://mobbin.com/screens/d747e905-e01f-488a-9edb-cfefdbd958d5)
- Height — [customization](https://mobbin.com/screens/227ea05e-2f27-4ad6-8bbf-fa8915d896f3)
- Replit — [customization](https://mobbin.com/screens/ff45e13e-7ef5-4178-9434-dd7382fcff1c)
- Zoho CRM — [turn off single-key shortcuts](https://mobbin.com/screens/8291b6de-66e5-495e-91a8-c8a2b6525956)
- Visual Electric — [changelog entries](https://mobbin.com/screens/d9619b46-9e89-4981-bef1-ad85c5074d79)
- Canny — [type labels](https://mobbin.com/screens/32a827a7-bbaf-4184-942d-d52462742365)
- Webflow — [type labels](https://mobbin.com/screens/e3459bdb-c87e-4603-97d4-15b5865629ca)
- Gumloop — [minor changes collapsed](https://mobbin.com/screens/48782b0a-881f-44cf-81cf-c4bcbc6b8e30)
- Leonardo — [version selector](https://mobbin.com/screens/e0cbc005-7d2a-47e3-b7de-33effee96097)
- Tally — [in-product panel](https://mobbin.com/screens/cd537297-7313-4098-ad1a-0595d1781b81)
- Suno — [anti-example: modal on arrival](https://mobbin.com/screens/e5128125-a731-4a11-9100-bbbf940922b6)
