# Preferences: language and region, appearance and notifications

Preferences let people adapt the product to their language, region, eyes and attention. They are rarely visited, but
when someone needs them — to read in their language, to stop a flood of emails, to make text bigger — they need them
to work clearly and immediately. This pattern covers language and region, appearance, and notification preferences,
plus the question underneath all of them: which setting wins when the system, the device, the person and the
organization disagree.

## The problem and who has it

- People whose language, formats or time zone differ from the product's defaults.
- People with visual, motor or cognitive needs who adjust appearance and motion.
- People overwhelmed by notifications.
- Administrators setting defaults for a whole organization.

When preferences fail: dates in the wrong format, prices in the wrong currency, unreadable text, people disabling all
notifications (and missing critical ones), or settings that silently do not apply.

## Questions to ask before deciding

- **What is the scope** of each preference: this device, this account, this workspace, the whole organization, the
  public page others see?
- **What is the precedence** when sources disagree (system setting, browser, account, organization policy)?
- **Which preferences are required** (security, billing alerts) and cannot be fully turned off?
- **Does the change apply immediately**, and can it be previewed and reverted?
- **Which languages, regions and scripts** does the product support?

## Precedence and scope

Write down the precedence explicitly and show it in the interface when it matters.

| Source | Example | Typical precedence |
| --- | --- | --- |
| Organization policy (required) | "Two-factor authentication required" | Highest for security and compliance |
| Person's explicit choice | Dark theme, Spanish, 24-hour clock | Wins over defaults |
| Organization default (not required) | Workspace language, week start | Default for members until they choose |
| Device or system setting | OS dark mode, OS language, reduced motion | Default when the person chose "Use system" |
| Product default | Light theme, English | Last resort |

- Show **inherited** values as such ("Using organization default: Monday") and **required** values as locked with the
  reason ("Required by your organization").
- Say **what a preference affects**: "Changes your dashboard and emails, not what your customers see"
  ([Wix](https://mobbin.com/screens/89be04d5-840b-4d1f-9235-07decb12cb77)); "Only for this browser".

## Language and region

- **Separate language from formats**: the interface language should not decide currency, time zone, date format, time
  format (12/24 h), number format (1.234,56 vs. 1,234.56) or the first day of the week
  ([Fibery](https://mobbin.com/screens/a4934de3-ded7-453c-8050-486f64c42ca8),
  [Midday](https://mobbin.com/screens/b4190675-4964-4434-8fad-591cf963607a)).
- **Preview formats** next to the selectors ("Date: 5 September 2026 19:12 · Number: 1.234,56",
  [Wix](https://mobbin.com/screens/89be04d5-840b-4d1f-9235-07decb12cb77)).
- **"Use device time zone"** on by default, showing which one it is.
- **Warn about consequences** of sensitive changes (a currency change that affects prices or shipping) in place, not
  after.
- **Languages in their own names** ("Español", "日本語") with search, not a 100-item dropdown without a filter; no
  flags as the only indicator.
- **Right-to-left (Arabic, Hebrew, Persian, Urdu)**: the layout mirrors — navigation, reading order, directional icons
  ([Cal.com](https://mobbin.com/screens/bbd09c01-6abb-46bb-89af-fc8d93e6b919)). Not everything mirrors: numbers, code,
  media playback controls in many conventions, logos and images of real objects keep their orientation; and
  left-to-right content inside RTL text (names, URLs) must be isolated. Design with logical properties (start/end)
  from the start.
- **Design for longer text**: translations into many languages are longer than English, sometimes much longer for
  short labels; do not fix widths for buttons and labels, and test with real translations or pseudo-localization.

See [content and localization](../24-content-and-localization.md).

## Appearance

- **Light / Dark / System** as three cards with a thumbnail of how each looks, "System" first and default
  ([Cal.com](https://mobbin.com/screens/f561880a-1845-4179-904d-3c3aa8941090),
  [Craft](https://mobbin.com/screens/46511e34-71ad-4bcd-9aab-c04411707094)); or a compact segmented control with icons
  ([Profound](https://mobbin.com/screens/065209b0-8f6b-4c38-a0a7-56aa8cc0bfc9)).
- **Live preview** while choosing (a sample message or screen at the top;
  [Amie](https://mobbin.com/screens/a48f080b-552b-4575-839b-22d63a9804da),
  [Discord](https://mobbin.com/screens/31cad21c-efef-48c3-8236-2dfa26ec7b1e)).
- **Text size with a slider** and preview ([X](https://mobbin.com/screens/b58d381d-58f1-4fd6-8012-a78bed482658)), while
  also respecting browser zoom and system text size.
- **Accent color** as round swatches with a check on the chosen one; validate contrast for every option.
- **Different scope per surface** when it applies ("Dashboard theme" / "Your public page theme", Cal.com).
- **Density** (comfortable / compact), **reduced motion** and **high contrast** as app options in addition to system
  settings, for people who cannot change system settings (shared or managed devices).
- **Applies immediately**; no "Save" needed. If a choice makes the interface unreadable (a combination of size and
  contrast), offer an easy way back: a keyboard shortcut, a "Reset appearance" link in a predictable place, or a timed
  revert for drastic changes.

## Notification preferences

- **Channels first** (in-app, email, push, Slack…), each with its status and destination ("Sent to ana@…", "Connected
  to #general"; [fal](https://mobbin.com/screens/a5b40b1a-3c52-4a6e-ab9e-047b643671d9),
  [Vercel](https://mobbin.com/screens/2ef3689f-eb09-4d26-a6fd-3cda64208d78)).
- **Then the matrix**: events as rows (with a one-line description), channels as columns, grouped by topic (Project,
  Team, Usage; [Todoist](https://mobbin.com/screens/1f7a02c0-2c4e-4325-a563-19b5cacb138c),
  [Otter](https://mobbin.com/screens/93ab8b2e-8fe3-430c-9416-9e32bcc2487f)).
- **"All" per column** to turn a whole channel on or off.
- **Unconnected channels dimmed** with "Connect Slack in Integrations"
  ([AirOps](https://mobbin.com/screens/a33cf381-5620-42a5-8533-afa05089d716)).
- **Critical events marked** ("Critical") and not fully disableable when they concern security or billing — say why.
- **Digests** as an alternative to individual alerts ("Summary twice a day",
  [Air](https://mobbin.com/screens/e6f97962-c24c-478b-b416-08830dc5b062)).
- **Mute** per project or for a time ("Pause for 1 h / until tomorrow").
- **Separate product messages (news, surveys, marketing) from work notifications**, with marketing off by default
  ([SoundCloud](https://mobbin.com/screens/31f2030b-85f0-4f80-9a6e-d12d2f7e8452) separates them well).
- **Save on each change**, with discreet confirmation.

### Matrices on small screens

A matrix of 20 events × 4 channels does not fit a phone. Alternatives:

- One screen per channel with a list of events.
- One screen per event group with channel toggles per event.
- Presets ("Everything", "Only what needs me", "Critical only") with customization below.

See [notifications](notifications.md).

## States and transitions

- **Inherited, chosen, required** shown distinctly.
- **Mixed state**: when a group contains on and off items, the group toggle shows an indeterminate state.
- **Applying**: immediate for appearance; per toggle for notifications; with preview for formats.
- **Conflicts**: the app setting says dark, the system says light, the person chose "System" — show the effective
  value.
- **Errors saving**: revert the control and explain; never show a toggle as on when the server did not save it.

## Edge cases

- People using shared devices (preferences per account, not per device, where possible).
- Language changed by mistake to one the person cannot read (keep the language selector findable by its icon and by
  language names in their own script).
- Time zone changes when traveling; recurring events must keep their intended time.
- Organization policies changed while people have personal preferences that conflict.

## Accessibility specifics

- Toggles and radio groups with labels and announced states.
- Matrices as tables with headers, or as grouped lists on mobile.
- Changes to appearance should not move focus.
- Reduced motion and contrast options complement, not replace, system settings.
- Language selector items marked with their language (`lang`) so screen readers pronounce them correctly.

## Copy

- Each preference says what it changes and for whom.
- Required settings explain the requirement and who set it.
- Format previews use real examples in the selected locale.

## Common mistakes and why they happen

- **Language tied to formats and currency** — one locale variable for everything.
- **Flags for languages.**
- **Unclear scope** — people think they changed something for everyone.
- **All notifications off** as the only escape from noise — no digests or mute.
- **Settings that silently fail to save.**

## Worked comparison

**Same person:** a Brazilian accountant working for a Portuguese company, using a product whose organization default is
English, with euros, and Monday week start.

**Weak.** Choosing Portuguese changes the interface to Brazilian Portuguese and also switches currency to BRL and dates
to the US format (because the product maps language to a single locale). Invoices now show wrong currency.

**Strong.** Language: "Português (Brasil)". Region formats: "Use organization default (Portugal: 31/12/2026, 1.234,56
€)" shown as inherited, changeable. Time zone: device (Lisbon). Currency stays the organization's. A preview shows the
effective formats before applying.

## How to verify and measure

- **Test** each preference's scope and precedence with organization policies and system settings.
- **Test** RTL and long languages with real content.
- **Measure** notification opt-outs by event (noisy events), use of digests and mute, support contacts about formats.

## References

- Fibery — [language separate from formats](https://mobbin.com/screens/a4934de3-ded7-453c-8050-486f64c42ca8)
- Midday — [language separate from formats](https://mobbin.com/screens/b4190675-4964-4434-8fad-591cf963607a)
- Wix — [format preview and scope](https://mobbin.com/screens/89be04d5-840b-4d1f-9235-07decb12cb77)
- Cal.com — [right-to-left](https://mobbin.com/screens/bbd09c01-6abb-46bb-89af-fc8d93e6b919)
- Cal.com — [theme cards](https://mobbin.com/screens/f561880a-1845-4179-904d-3c3aa8941090)
- Craft — [theme cards](https://mobbin.com/screens/46511e34-71ad-4bcd-9aab-c04411707094)
- Profound — [compact theme control](https://mobbin.com/screens/065209b0-8f6b-4c38-a0a7-56aa8cc0bfc9)
- Amie — [live preview](https://mobbin.com/screens/a48f080b-552b-4575-839b-22d63a9804da)
- Discord — [live preview](https://mobbin.com/screens/31cad21c-efef-48c3-8236-2dfa26ec7b1e)
- X — [text size slider](https://mobbin.com/screens/b58d381d-58f1-4fd6-8012-a78bed482658)
- fal — [notification channels](https://mobbin.com/screens/a5b40b1a-3c52-4a6e-ab9e-047b643671d9)
- Vercel — [notification channels](https://mobbin.com/screens/2ef3689f-eb09-4d26-a6fd-3cda64208d78)
- Todoist — [notification matrix](https://mobbin.com/screens/1f7a02c0-2c4e-4325-a563-19b5cacb138c)
- Otter — [notification matrix](https://mobbin.com/screens/93ab8b2e-8fe3-430c-9416-9e32bcc2487f)
- AirOps — [unconnected channels](https://mobbin.com/screens/a33cf381-5620-42a5-8533-afa05089d716)
- Air — [digest option](https://mobbin.com/screens/e6f97962-c24c-478b-b416-08830dc5b062)
- SoundCloud — [product messages separated](https://mobbin.com/screens/31f2030b-85f0-4f80-9a6e-d12d2f7e8452)
