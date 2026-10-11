# Mobile (iOS and Android)

Mobile design is shaped by the thumb, the small screen, interruptions and the platform's conventions. People use phones
while walking, waiting, holding a child, in sunlight, with one hand, and they switch apps constantly. Respecting each
system's gestures and conventions usually matters more than originality — with deliberate exceptions where the product
genuinely needs them.


For platform detection, tablets, desktop conventions and touchpad parity, see
[platforms and input](../36-platforms-and-input.md).
## The problem and who has it

- **People on the move** with partial attention and intermittent connectivity.
- **People who only have a phone** for tasks others do on a computer.
- **People using assistive technology**: VoiceOver, TalkBack, Switch Control, large text, voice control.

## Questions to ask before deciding

- **Which tasks happen on mobile**, and which are better on a larger screen?
- **How often, and in what context** (one-handed, glanceable, long sessions)?
- **What happens when the app is interrupted** (a call, switching apps, the OS killing it)?
- **Which platform conventions apply**, and where would breaking them be worth it?
- **Which devices**: small phones, large phones, foldables, tablets, split screen?
- **What network and battery constraints** do people have?

## Native conventions and justified exceptions

| Convention | iOS | Android | When to break it |
| --- | --- | --- | --- |
| Primary navigation | Bottom tab bar | Bottom navigation bar | Products with a single main task may need none |
| Back | Edge swipe and back button in the bar | System back gesture/button | Never break system back |
| Primary action | Top end of the navigation bar | Floating action button or top bar | Creation-heavy apps may use a prominent bottom button on both |
| Settings | Grouped lists | Grouped lists | Rarely |
| Dialogs | Alerts and action sheets | Dialogs and bottom sheets | Follow each platform |

Cross-platform products often unify design; unify visual language, but keep platform behaviors (back, sharing, system
pickers, permission flows) native.

## Anatomy and behavior

### Navigation

- **A bottom tab bar** with three to five primary destinations, icon plus text always (icons alone are guessed). The
  active tab filled and colored, with text, not only color.
- **Each tab keeps its own stack**: tapping it again returns to its root and scrolls to the top.
- **Back**: the edge gesture (iOS) and system back (Android) always work; do not break them with unnecessary modals.
- **Large titles that shrink on scroll** (iOS) for top-level screens; regular titles inside.
- **The screen's primary action**: top end (iOS) or a floating button (Android and creation apps).

### Bottom sheets

- To choose options, filters or see details without losing context (map, list)
  ([Strava](https://mobbin.com/screens/ff743f3b-70ee-49f7-ab41-f1dd17bd1f3d),
  [Cash App](https://mobbin.com/screens/f70ac04e-6599-4cd0-b4b6-9178f7fc177b)).
- A grabber at the top, a title, close with X or by swiping down; a medium height that expands to full.
- Options as large rows with icon + title + description
  ([ChatGPT](https://mobbin.com/screens/cf94f6ed-ad32-48c1-ad40-e8ee75e9615a)), or visual cards when the difference is
  visual ([AllTrails](https://mobbin.com/screens/acba9f6e-6d6b-4432-807f-6b59c249e141),
  [Fi](https://mobbin.com/screens/b590abf4-f9cb-41e0-87d1-c980e3d698a8)).
- The primary button at the bottom, full width, in thumb reach
  ([Grab](https://mobbin.com/screens/2069f68f-09c9-4de2-ba5f-e4cc6a456d3b)).
- No stacking sheets on sheets.
- Sheets must be dismissible by assistive technology (an explicit close button, not only a swipe).

### Swipe actions

- Swiping a row reveals actions; the destructive one at the far end styled as destructive, the others with their own
  color and text ([Telegram](https://mobbin.com/screens/7b4ae82f-5122-4626-82c9-a6ef11bea8dc),
  [Shopee](https://mobbin.com/screens/cc2f6159-8bee-4851-b2d7-c76b0f37a12f)).
- **Always provide another way** to reach those actions (long press, "⋯" menu, Edit mode): swipes are undiscoverable,
  and screen reader users need them exposed as accessible actions.
- **A full swipe triggers the default action** only if it is reversible (archive yes; delete only with undo).
- **Let people choose** what each swipe does in settings ([GitHub](https://mobbin.com/screens/37a63823-8a0b-479b-bf6a-7354a718618d)).

### System permissions

- **Never ask on first launch.** Ask when needed, with a prior screen explaining why ("To tell you when your car
  arrives", [Waymo](https://mobbin.com/screens/682f61a7-dd62-4771-aa6b-493ccf16725d),
  [Microsoft Copilot](https://mobbin.com/screens/0cd130d9-7007-475a-9379-c65d6bea2a05)).
- **One concrete benefit per permission**, in one line.
- **Offer the lesser alternative** ("Approximate location only",
  [World App](https://mobbin.com/screens/1b03f389-e105-4cf0-bef2-5fad252db9fb)) and "Not now".
- **If denied**: explain what will not work and offer a button to Settings
  ([PayPal](https://mobbin.com/screens/983f9dfc-bbc5-42dd-965d-abcac68bda66)); do not nag on every screen.
- **Permission lifecycle**: permissions can be revoked, granted "once", or downgraded by the OS. Check at use time,
  not only at onboarding.

### Onboarding on mobile

- **A short welcome**: brand, one value sentence and two buttons ("Sign in" / "Create account",
  [Raycast](https://mobbin.com/flows/1c30eb52-9997-4a33-a50d-05dc3e7a8f09)). No five swipeable benefit screens before
  letting people in.
- **Personalization questions with "Step 1 of 4"**, a progress bar, visible "Skip" and "You can change this later"
  ([Blinkist](https://mobbin.com/flows/a9e95e3d-961b-422b-b217-d3fe6fe34e0f)).
- **Options as large tappable rows**, not dropdowns; "Next" at the bottom in thumb reach.
- **An honest free trial**: a timeline "Today you start · day 5 we remind you · day 7 you're charged", annual and
  monthly prices, "Cancel anytime" (Blinkist).
- **Land on personalized content**, not an empty screen.

### Settings on mobile

- **A grouped list** with section titles (Preferences, Subscription, Support, About;
  [Meetup](https://mobbin.com/screens/3acc9970-f3ca-43f3-959e-c72d76090d76),
  [Gentler Streak](https://mobbin.com/screens/ca366da8-1c89-41cb-96c8-5805528dc313)).
- **Each row**: optional icon, title, **current value at the end** ("Imperial", "On", "Dark mode") and a chevron if it
  opens another screen; a switch if it is yes/no and applies immediately.
- **A subtitle under the title** when the option is not self-explanatory
  ([Google TV](https://mobbin.com/screens/13577f13-8ff2-4789-ab1b-5a95a0df46d8): "Warn before using mobile data").
- **Footer text under a group** to explain consequences.
- **Accessibility as its own section** (accessible colors, +/− signs as well as color;
  [Copilot](https://mobbin.com/screens/87e61ef3-fb87-4e97-a062-87886023ce01)).
- **App version at the end** (useful for support); legal and About at the bottom; sign out and delete account last,
  separated.

## Sizes and touch

- Minimum touch area 44×44 pt (iOS) / 48×48 dp (Android), even when the icon is smaller.
- Spacing between targets so neighbors are not hit by mistake.
- Safe areas (notch, dynamic island, home indicator); important content away from edges.
- Base text around 16–17 pt; nothing below about 11–12 pt.
- **Support the system text size** (Dynamic Type, font scale) up to accessibility sizes without breaking layouts:
  wrap, stack and scroll instead of truncating.

## Keyboard and forms

- The keyboard type matches the data; the return key names the action ("Next", "Search", "Send").
- The focused field is never hidden by the keyboard; the primary button moves above it.
- One-time codes autofill from SMS or email.
- External keyboards (tablets, accessibility): tab order and shortcuts work.

## Interruptions, restoration and continuity

- **Save state continuously**: when the OS kills the app in the background, people return to where they were, with
  drafts intact.
- **Deep links** open the exact place, including after sign-in.
- **Handoff between devices**: a task started on the phone can continue on the computer.
- **Long tasks** continue in the background where the platform allows, or resume cleanly.
- **Returning hours later**: show what changed ("2 new comments since you left") without losing the person's place.

## Beyond the phone

- Tablets and foldables: use the space for list-detail layouts; do not just stretch the phone layout.
- Split screen and multiple windows: layouts adapt to narrow and wide windows.
- Landscape: supported unless essential (WCAG 1.3.4, AA).

## Performance, data and battery

- **Immediate touch response** (pressed states, subtle haptics on confirmations).
- **Incremental loading** with skeletons; pull to refresh where content changes.
- **Offline work** with a queue and visible state ("Will send when you're back online"); see
  [tracking and offline](tracking-and-offline.md).
- **Budget for modest devices**: test on older, slower phones and on slow networks.
- **Data use**: warn before large downloads on cellular; offer Wi-Fi-only options.

## Accessibility specifics

- Every control has a label and role for VoiceOver and TalkBack; custom actions for swipes.
- Focus order follows the visual order; modals and sheets trap and return focus appropriately.
- Text scales; layouts reflow.
- No functionality depends only on gestures, shaking or tilting (WCAG 2.5.1, 2.5.4).
- Test with screen readers, large text, Switch Control or Switch Access, and voice control.

## Copy

- Short labels that fit at large text sizes and in long languages.
- Permission explanations with one concrete benefit.

## Common mistakes and why they happen

- **Permission prompts on launch.**
- **Icon-only tab bars.**
- **Swipe-only actions.**
- **Layouts that break with large text.**
- **Losing state when the app is killed.**
- **Desktop patterns squeezed into phones** (hover tooltips, tiny targets).

## Worked comparison: a task resumed hours later

**Weak.** A person starts filling an insurance claim on the bus, switches to answer a message; the OS kills the app;
reopening shows the home screen and the claim is gone.

**Strong.** The claim draft saves after each field; reopening shows "Continue your claim (3 of 5 steps done)"; the
photo already taken is still attached; a notification the next day reminds them, once, with a deep link to the exact
step.

## How to verify and measure

- **Test** on real devices (small and large, old and new), with large text, screen readers, poor networks, and
  interruptions (calls, app switching, background kills).
- **Measure** task completion on mobile vs. desktop, permission grant rates in context, crash and state-loss reports.

## References

- Strava — [bottom sheet over map](https://mobbin.com/screens/ff743f3b-70ee-49f7-ab41-f1dd17bd1f3d)
- Cash App — [bottom sheet](https://mobbin.com/screens/f70ac04e-6599-4cd0-b4b6-9178f7fc177b)
- ChatGPT — [options as large rows](https://mobbin.com/screens/cf94f6ed-ad32-48c1-ad40-e8ee75e9615a)
- AllTrails — [visual option cards](https://mobbin.com/screens/acba9f6e-6d6b-4432-807f-6b59c249e141)
- Fi — [visual option cards](https://mobbin.com/screens/b590abf4-f9cb-41e0-87d1-c980e3d698a8)
- Grab — [full-width primary button](https://mobbin.com/screens/2069f68f-09c9-4de2-ba5f-e4cc6a456d3b)
- Telegram — [swipe actions](https://mobbin.com/screens/7b4ae82f-5122-4626-82c9-a6ef11bea8dc)
- Shopee — [swipe actions](https://mobbin.com/screens/cc2f6159-8bee-4851-b2d7-c76b0f37a12f)
- GitHub — [configurable swipes](https://mobbin.com/screens/37a63823-8a0b-479b-bf6a-7354a718618d)
- Waymo — [permission with context](https://mobbin.com/screens/682f61a7-dd62-4771-aa6b-493ccf16725d)
- Microsoft Copilot — [permission with context](https://mobbin.com/screens/0cd130d9-7007-475a-9379-c65d6bea2a05)
- World App — [approximate location option](https://mobbin.com/screens/1b03f389-e105-4cf0-bef2-5fad252db9fb)
- PayPal — [denied permission recovery](https://mobbin.com/screens/983f9dfc-bbc5-42dd-965d-abcac68bda66)
- Raycast — [short welcome](https://mobbin.com/flows/1c30eb52-9997-4a33-a50d-05dc3e7a8f09)
- Blinkist — [personalization steps and honest trial](https://mobbin.com/flows/a9e95e3d-961b-422b-b217-d3fe6fe34e0f)
- Meetup — [grouped settings](https://mobbin.com/screens/3acc9970-f3ca-43f3-959e-c72d76090d76)
- Gentler Streak — [grouped settings](https://mobbin.com/screens/ca366da8-1c89-41cb-96c8-5805528dc313)
- Google TV — [setting subtitles](https://mobbin.com/screens/13577f13-8ff2-4789-ab1b-5a95a0df46d8)
- Copilot — [accessibility section](https://mobbin.com/screens/87e61ef3-fb87-4e97-a062-87886023ce01)
