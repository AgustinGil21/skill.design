# Widgets and live activities

> Verified: 2026-11-13 · Review by: 2027-05-13 · Time-sensitive: widget sizes, rendering modes and live activity rules on iOS, Android and Windows.

A widget is a piece of an app that lives outside it: on the home screen, the lock screen, the desktop, a watch face,
StandBy, a widgets board. A live activity is a temporary widget for something happening right now: a ride, a delivery,
a match, a timer, a flight. Both are seen many times a day for a second or two, which makes them some of the most
valuable surfaces an app has — and some of the easiest to get wrong, because they are designed last, copied from the
app, and stretched to fill sizes they were not designed for.

This pattern covers when an app should have widgets, which ones, how to design one idea across sizes, live
activities and the Dynamic Island, the platforms (iOS, iPadOS, macOS, watchOS, Android, Windows and the web), states,
freshness, interactivity, accessibility and the common mistakes.

Case studies of real widgets and live activities, analyzed in depth: [widgets case studies](widgets-case-studies.md).

Related: [app icons and touchpoints](app-icons-and-brand-touchpoints.md) · [notifications](notifications.md) ·
[tracking and offline](tracking-and-offline.md) · [dashboards](dashboards-and-metrics.md) ·
[platform design languages](../40-platform-design-languages.md) · [other surfaces](../43-other-surfaces.md) ·
[spatial continuity](../45-spatial-continuity.md).

## What a widget is for: the answer or the invitation

Every good widget does one of two jobs, and does it **instantly** — in the second it takes to glance at a screen:

1. **The answer.** Information the person needed, so they do not have to open the app: the temperature, the balance,
   the minutes until the bus, the next event. The widget succeeds when the person *doesn't* open the app.
2. **The invitation.** A specific, fresh reason to open the app: a new video from a channel they follow, the episode
   where they left off, a friend's photo, today's story, a song they were listening to. The widget succeeds when the
   tap lands exactly on that thing and it is as good as promised. This is how content platforms use widgets — a hook
   into the app, built from the person's own interests.

Many widgets do both (the score of the match and a tap into the live commentary). What fails is a widget that does
neither: generic content, a logo, information that needs reading, or a hook that leads nowhere in particular.
Because a widget is the most-seen face of the app — on the home screen many times a day — it has to be made
perfectly: a careless widget teaches people to ignore the app.

### The one-second test

Cover the app's name and look at the widget for one second. You should be able to say **what it tells you** (the
answer) or **what you would get by tapping** (the invitation). If you need to read more than a few words, or you are
not sure what the tap opens, the widget is not done.

### Designing the invitation (the hook)

| Make it | How | Example |
| --- | --- | --- |
| **Specific** | Show the actual thing (the thumbnail and title, the cover, the photo), not a category | "Rome's Great Fire · The Rest Is History" with the cover, not "New episodes available" |
| **Personal** | From what the person follows, saved, started or asked for | Stories from friends, a channel they subscribe to, their own memories |
| **Fresh** | Changes when there is something new; says when it is new | "New" badge only when it is true; a timestamp |
| **Resumable** | Where they left off, with progress | Continue watching with a progress bar; the next lesson; the half-read article |
| **One tap to the thing** | The tap opens that item, ready to play or read, not the app's home | Tapping the episode plays the episode |
| **Honest** | The content behind the tap matches the widget | No clickbait titles, no fake "new", no blurred content to provoke curiosity |

**Hook, not trap.** The line between a good invitation and manipulation is whether the person would thank you for the
tap. Legitimate hooks: something new from what they chose to follow, something they started, something personal and
timely. Traps: guilt ("Don't forget me!"), streak threats, fake urgency, red dots for things that need no action,
endless feeds pulled onto the home screen, a refresh button that invites compulsive tapping, curiosity bait that
leads to a generic screen ([psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md),
[flows and dark patterns](../slop/07-flows-and-dark-patterns.md)). Traps raise taps for a while and then the widget
is removed — with some of the person's trust.

## The problem and who has it

- **People who check something often**: the weather, a balance, today's tasks, a streak, the next bus. Opening the app
  for one number is friction; a widget answers in a glance.
- **People waiting on something that changes**: a delivery, a ride, a game, a timer. They want the current state
  without unlocking the phone and searching.
- **People who repeat one action**: log water, start a workout, add a task, ask a question. A widget is a shortcut.
- **The product**: widgets keep the app present and are a reason to come back — which is also the temptation to turn
  them into advertising.

## Questions to ask before deciding

1. **Is there information people check often, that changes, and that fits in a glance?** If not, a widget will be
   decoration that people remove.
2. **Is there an action people repeat several times a day or week?** If so, an action widget may beat an information
   widget.
3. **Is something time-bound happening** (minutes to hours) that people track? That is a live activity, not a widget.
4. **What is private?** Lock screens and shared screens show widgets to anyone nearby.
5. **How fresh must the data be**, and how often can the platform update it?
6. **Which platforms and surfaces** does the product live on, and which ones do its people use?
7. **What does the person need to configure** (a city, an account, a list, a board)?

## When to build a widget, and which one

| What the app has | Widget kind | Examples |
| --- | --- | --- |
| A number or state checked often | **Glance widget**: one primary value, context, maybe a trend | Weather, balance, calories left, streak, battery |
| A short list that changes | **List widget**: the next few items, with a way into each | Today's tasks, next events, top stories, upcoming bills |
| An action repeated often | **Action widget**: one to four buttons that do the thing | Log water, start a workout, quick capture, ask the assistant |
| Both | **Hybrid**: the value plus the action that changes it | "1,000 ml today · + 250 ml" |
| Something visual and personal | **Media widget**: a photo, a cover, a memory | Photos, music recently played, travel countdown |
| Content the person would want next (new, resumable, personal) | **Invitation widget**: the item itself — cover, thumbnail, photo, title — and a tap that opens it | Recently played, continue watching, new from a followed channel, today's story, a friend's photo |
| A process happening now | **Live activity** (iOS) / **Live Update** (Android) | Rides, deliveries, flights, sports, timers, workouts, calls, recordings |
| A dashboard inside the product | **In-app widgets** (cards people add, remove and arrange) | Bank home screens, analytics dashboards, admin consoles |

**Don't build a widget** when the app has nothing people check or repeat (a widget with the logo and "Open app"),
when the data cannot stay fresh enough to be trusted, or only to increase engagement metrics. A widget people remove
after a day teaches them to ignore the next one.

**One app, several widgets.** Each widget answers one question for one job. An app with several jobs offers several
widgets (a fitness app: activity rings, a workout launcher, a weekly goal), each in the sizes that make sense for it —
not every widget in every size.

## Designing one idea across sizes

The best widget families keep **one question** and let each size answer it **more deeply**, without changing topic.
Apple's Weather on the desktop is the reference:

| Size | What it shows | Why |
| --- | --- | --- |
| Small | Place, current temperature, condition, high and low | The answer to "what's it like now?" |
| Medium | The same, plus the next hours with icons and temperatures | "…and in the next hours?" |
| Large | The same, plus the next five days with ranges | "…and this week?" |
| Extra large (iPad, Mac) | The same, plus ten days | The full forecast at a glance |

Rules that follow from it:

- **The top-left anchor never moves.** The place and the current temperature stay in the same position and style in
  every size, so the eye finds them without thinking.
- **Each size adds a layer, in order of importance.** Now → next hours → next days. Never a different topic.
- **The hierarchy is fixed**: one primary value (largest, tabular numerals), its context (label, condition), then
  secondary data in smaller, quieter type.
- **Visualizations scale, they don't shrink**: the temperature-range bars show more days in larger sizes rather than
  becoming tiny.
- **Nothing important is truncated.** If a size cannot show a value whole, the size does not show it.

The same strategy in other apps (from real widgets):

| App | Small | Medium | Large |
| --- | --- | --- | --- |
| Google Calendar | Day and next two events | Day and next events, wider | Month grid plus next events |
| Todoist / Tiimo (tasks) | Three task titles | Three tasks with checkboxes and add | Five or more tasks, overdue, add |
| Transit | Time to home | Time to home plus four other modes | — |
| Instagram (stories) | Two story rings | Four story rings | — |
| Strava | Weekly goal ring | Ring plus daily bars | — (streak as its own medium widget) |
| Public (brokerage) | Value and change | Value and change, wider | Value plus holdings list |
| Apple News / HYPE | One story with image | Two stories | Five stories |

And what goes wrong:

- **The same content in every size**, leaving a large widget half empty (a to-do widget with three items in a large
  frame).
- **Truncation in the small size** ("For you: getting s…", "Meeting with sta…"): the small size needs its own content
  choice (a count, the next item only), not the medium list cut off.
- **A different topic per size** with no relation between them, which makes the family feel random (choose it only
  when sizes are genuinely different widgets).

## Anatomy and craft

- **Margins and padding from the platform** (iOS uses standard content margins applied by the system; Android uses
  the launcher's padding); don't fight them.
- **Corner radii concentric with the widget's corner**: inner cards and images use the outer radius minus the padding.
- **Type at glance distance**: one large primary value; labels and secondary text at the platform's small sizes, never
  below them; tabular numerals for numbers that change.
- **One accent color** from the brand for the primary value or progress; semantic colors only for meaning (rain,
  losses, overdue).
- **Brand mark small**, in a corner, or absent: the content is the identity. A widget whose largest element is the
  logo is an ad.
- **Icons from the app's family** and the platform's symbols; weather and status icons recognizable at small sizes.
- **Images** that work cropped to every size; text over images with a scrim.
- **Visualizations simple**: rings, bars, sparklines, step trackers; legible without labels on every point.

## Rendering modes, themes and wallpapers

Widgets are drawn by the system over wallpapers the designer does not control, and the system may recolor them.

- **Apple platforms**: widgets render in **full color**, **accented** (the system tints content and replaces the
  background with a themed or glass material — the default on the Home Screen with tinted and clear icon styles in
  recent iOS versions), or **vibrant** (on the Lock Screen and in StandBy, monochrome and blended with the wallpaper).
  Design and test every mode: mark which parts are the accent group, make sure meaning survives without color, and
  provide images that work tinted. On Liquid Glass versions, the background may be glass; contrast must hold over it
  ([platform design languages](../40-platform-design-languages.md)).
- **Android**: support dynamic color (Material You) so widgets match the person's theme, light and dark; keep a brand
  color where it carries meaning.
- **Light and dark** always; StandBy and night modes dim and redden on some devices.

## States

| State | What the widget shows |
| --- | --- |
| **Placeholder** (loading, first render, gallery preview) | The layout with redacted shapes, never spinners |
| **Unconfigured** | What it will show and how to set it up ("Choose a board to get started"), opening configuration on tap |
| **Signed out** | A short message and a tap target to sign in in the app; never personal data |
| **Empty** | A useful empty state ("No tasks today — add one"), with the add action if the widget has one |
| **Stale data** | The last known value with its time ("Updated 9:41"), or relative time that the system keeps current |
| **Error** | The last good data plus a quiet note, or a short message; never a raw error |
| **Private on the lock screen** | Sensitive values hidden or replaced when the device is locked (balances, health, messages) |
| **Ended** (live activities) | The final state for a short time ("Arrived in 13 min · Rate order"), then removed |

## Freshness and updates

- Widgets do not update in real time: the system refreshes them on a schedule and a budget. Design for the data being
  minutes old: show times as **relative or absolute timestamps the system renders**, so they stay correct between
  refreshes ("in 12 min", "Updated 9:41").
- Prefer values that stay true until the next update (today's events, the next departure with its time) over values
  that are wrong a minute later (a live count without a time).
- For things that change every second or minute and matter right now, use a **live activity**, which can be updated by
  the app or by push.

## Interactivity

- **Tap the widget** to open the app **at the place shown** (the event, the task, the city), not at the home screen;
  different areas can link to different places.
- **Buttons and toggles** (iOS 17 and later, Android) can act without opening the app: complete a task, log water,
  play or pause, start a timer. Use them for **one or two frequent actions**; show the result immediately (the
  checkbox checks, the number updates) and handle failure.
- **No text input, no complex flows** in a widget; open the app (or a sheet) for anything that needs more.
- **Touch targets** at the platform's minimum (44 pt / 48 dp) even inside small widgets.

## Configuration and discovery

- **Configuration** lets people choose what the widget shows (city, account, list, board, stock). Offer sensible
  defaults so the widget works before anyone configures it.
- **Discovery**: most people never open the widget gallery. Offer the widget at a moment it is useful (after the
  person checks the same thing several times, after setting up a goal), with a preview of the actual widget and the
  steps for their platform; once, dismissible, never as a blocker.
- **Gallery previews** show real-looking content (a city, a realistic balance) so people know what they are adding.

## Live activities (iOS) and the Dynamic Island

A live activity shows a process that is happening now on the Lock Screen, in the Dynamic Island on supported
iPhones, in StandBy, on a paired Apple Watch's Smart Stack and on the Mac when iPhone is nearby (check the current
documentation for surfaces in the target OS).

**When to start one.** Only for an activity the person started or is clearly waiting for, with a beginning and an end
(minutes to hours): a ride, a delivery, a flight, a match they follow, a workout, a timer, a call, a recording, a
focus session. Not for marketing, not for news, not for something with no end.

**Presentations.**

| Presentation | When | Design |
| --- | --- | --- |
| **Lock Screen / banner** | Always, while active | The full view: the state, progress, time, one or two actions. Example: "70 in 1 minute", a progress bar along the route, "Arrive at 5:51 PM · 35 min" ([Transit](https://mobbin.com/screens/b84f786b-1c21-4110-9977-f0544d9adcf5)) |
| **Compact** (Dynamic Island, one activity) | The default in the island | Two parts around the camera: **leading** = identity (app mark, avatar, thumbnail), **trailing** = the one live value (time left, score, gate, heart rate). Oura "♥140 · 2:39", American Airlines "B22", Granola recording "1:37" |
| **Minimal** (several activities) | When more than one activity runs | A single glyph or value in a circle; Apple's guidance is to fit compact and minimal content within a circle of about 28 pt diameter so it never truncates |
| **Expanded** | When the person touches and holds | More detail and controls, growing out of the compact view so the layout expands predictably ([FocusFlight](https://mobbin.com/screens/54d63fe8-f924-436c-9071-c63038dbefb6)) |

**Rules.**

- **The trailing value is the reason the activity exists**: the minutes until arrival, the score, the time left.
  Update it; don't decorate it.
- **Same information, same place, in every presentation**, so the expanded view reads as the compact one grown
  ([spatial continuity](../45-spatial-continuity.md)).
- **Actions only for the next step** of the process: "Start ride", "Open boot" ([Waymo](https://mobbin.com/screens/66063536-4fc7-4cd9-87a4-b87663436576)),
  mute and speaker during a call ([Discord](https://mobbin.com/screens/cd15106c-309c-4837-adb8-e65ef8815a14)), pause a
  timer.
- **End it** when the process ends, showing the final state briefly ("Arrived in 13 mins · Rate order";
  [Blinkit](https://mobbin.com/screens/e04baca0-840b-4a12-9de2-0c9efad9b400)), then remove it. Activities have a
  maximum duration on the system; check the current limits.
- **Alerts only for real changes** (the driver arrived, the gate changed), not every update.
- **Dark and simple in the island**: the island is black hardware; content is high contrast, minimal, one accent.
- **Privacy**: lock screens are public; avoid names, addresses and amounts that should not be seen.

## Android

- **Home screen widgets** are resizable by the person across grid cells; design responsive layouts with breakpoints
  (Jetpack Glance's `SizeMode.Responsive` or `Exact`) instead of stretching one layout. Google's **canonical layouts**
  (text, list, grid, toolbar and image-based) are a starting point.
- **Minimum and default sizes** declared so the widget never opens in a size where it breaks; a **preview** that shows
  real content in the widget picker.
- **Rounded corners and padding** follow the system; **dynamic color** and light/dark themes.
- **Add a 48 dp button when there is room**: breakpoints decide when actions appear.
- **Live Updates (Android 16)**: progress-centric ongoing notifications for the same processes as iOS live
  activities, shown at the top of the notification drawer, on the lock screen and as a **status bar chip** with a
  short text (time left, distance, step). Use them only for active processes the person started; media playback has
  its own surface.
- **Wear OS** tiles and complications follow the same glance rules ([other surfaces](../43-other-surfaces.md)).

## Windows and the web

- **Windows 11 Widgets Board**: installed apps and progressive web apps can provide widgets declared in the web app
  manifest's `widgets` member, rendered from **Adaptive Card** templates (not HTML), and added by the person from the
  board. Design them as a separate, simple card: the same glance rules, the board's sizes and theme.
- **Widgets inside a web product** (dashboards, bank home screens, admin consoles): cards people add, remove, resize
  and reorder ([Revolut Business](https://mobbin.com/screens/2c485b8f-000c-40b3-b6da-cc043ca22449) has a "Widgets"
  section with "+"). The same rules apply: one question per card, sizes that add depth, real states, keyboard
  reordering, and a sensible default layout ([dashboards](dashboards-and-metrics.md)).
- **Embeddable widgets** for other sites (booking, reviews, status): small, accessible, isolated styles, the host's
  language, no tracking without consent.

## A method for a new app

1. **List the jobs** the app does and mark which ones people check or repeat outside the app.
2. **Pick one to three widgets**, one question each; decide which are glance, list, action or hybrid.
3. **Write each widget's question in one line** ("How long until I get home?").
4. **Design the smallest size first**: the one value or action that answers the question.
5. **Add one layer per size**, in order of importance; skip sizes that add nothing.
6. **Design every state** (placeholder, unconfigured, signed out, empty, stale, error, private).
7. **Design every rendering mode** and theme, on several wallpapers.
8. **Decide freshness and interactivity**: what updates when, what taps open, which one or two actions run in place.
9. **If there is a process with a start and an end**, design its live activity (lock screen, compact, minimal,
   expanded, ended) or Android Live Update.
10. **Plan discovery**: when and how the app offers the widget.

## Applying it across kinds of apps

| App | Widgets worth building | Live activity |
| --- | --- | --- |
| Weather | Now (small) → hours (medium) → days (large); nowcast "Rain in 13 min" | Severe weather alerts only if the platform allows; usually not |
| Banking | Balance or "safe to spend" (private on lock screen); upcoming bills | A transfer in progress (rare) |
| Tasks and calendar | Next event; today's tasks with checkboxes and add | A focus session or meeting timer |
| Fitness and health | Rings or goal; a workout launcher | The workout in progress (pace, heart rate, time) |
| Food delivery and rides | Reorder favourite (action) | The order or ride (stage, minutes, driver) |
| Travel | Next trip countdown; boarding pass at airport time | The flight (gate, boarding, delay) |
| Music and podcasts | Recently played with play | Now playing is handled by the system's media controls |
| Learning and habits | Today's goal or streak with a calm tone | A lesson or practice session timer |
| Sports | Favourite team's next match | The match in progress (score, minute) |
| Smart home | Scenes and toggles (action) | A process like a robot vacuum run or an oven timer |
| AI assistants | Quick-ask with voice and camera (action) | A long task in progress (research, generation) |

## The wall of live widgets (a reference studied)

A widely shared demo of AI-generated interface work ([video post](https://x.com/JamesC_Alpha/status/2120651508689813604),
November 2026) shows a wall of dark live cards with values that change frame to frame: a live match "Harbor 2 – 2
Ridge" with minute and team bars; a flight "LIS → NRT" with a route arc, gate and "Lands in 6h 16m"; a call with a
waveform and a red end button; now playing with artwork, progress and controls; a timer "Pasta 7:35" with a ring; a
run with pace bars and heart rate; "Rain in 13 min" with a minute-by-minute bar chart; a breathing session "Round 5
of 6 · Breathe in 2:29"; deliveries "5 stops away" with a step track; and compact single-value pills (147, 77%,
21 AQI, 13 mph).

What it gets right, and is worth learning: each card answers one question with one large primary value in tabular
numerals; a small label above it gives context; a simple visualization (ring, bars, route, steps) shows progress;
actions appear only where the process needs them; each domain has one accent color; values update in place without
layout shifts.

What not to take literally: a wall of widgets is a showcase, not a product. Each of those cards needs a reason to
exist in a real app (a process the person started), a platform presentation (lock screen, compact, minimal,
expanded), states (starting, ended, stale) and accessibility. Pure-black cards suit the Dynamic Island and dark
StandBy; home screen widgets must adapt to the system's rendering modes and the person's wallpaper.

## Accessibility specifics

- **Combine elements into one meaningful label** for screen readers ("Escobar, 26 degrees, cloudy, high 28, low 19"),
  not a list of fragments; label buttons with their action.
- **Text size**: widgets have fixed space; support the larger text sizes the platform allows and prefer showing fewer
  items over shrinking text.
- **Contrast over any wallpaper and in every rendering mode**; never meaning by color alone (rain, losses, overdue
  also need icons or words).
- **Live activities**: updates are announced sparingly; motion respects reduced motion.
- **Touch targets** at platform minimums.

## Copy

- **Labels short and specific**: "Calories left", "Rain in 13 min", "Home 26 min", "Lands in 6h 16m".
- **Units and times always**; relative times where they stay true.
- **No marketing in widgets**; no guilt ("Don't forget me!" with an angry mascot is pressure on the home screen).
- **Empty and unconfigured states say what to do**.
- **In other languages**: the widget's fixed width makes expansion critical; test the longest language and keep
  labels to a word or two.

## Common mistakes and why they happen

- **The app's screen shrunk into a widget**, because the widget was built from existing components.
- **The same layout stretched to every size**, leaving empty space or truncating the small one.
- **A logo-first widget** ("Open app"), because someone wanted presence on the home screen.
- **Ads, upsells or guilt in widgets and live activities**, because they are seen so often.
- **Stale data shown as current**, because refresh limits were not designed for.
- **Sensitive data on the lock screen**, because the widget was tested on an unlocked phone.
- **Only the full-color mode tested**, so the widget turns into an unreadable grey block when tinted.
- **Live activities that never end**, or that are used for news and promotions.

## Worked comparison

**Situation:** a personal finance app wants widgets.

**Weak.** One widget, the same layout in three sizes: the app logo large at the top, "Total balance €12,480.33" in
the middle, "Open app" at the bottom. The large size is mostly empty. On the lock screen it shows the balance to
anyone. It refreshes once an hour without saying so. In tinted mode the green logo becomes a grey blob.

**Strong.** Two widgets. **"Safe to spend"**: small shows "€420 safe to spend until Friday" (the one decision people
make); medium adds the next three bills with dates; large adds the month's spending by category as bars. **"Quick
add"**: a small action widget that opens the expense sheet. On the lock screen the amounts are hidden until the phone is unlocked;
every value shows "Updated 9:41"; meaning survives in tinted and vibrant modes because the amounts carry the hierarchy,
not the colors. The app offers the widget after the person checks "safe to spend" for the third time in a week, with a
preview and the steps for their phone.

## How to verify and measure

- Run the one-second test on every size: what does it tell, or what would the tap give?

- Render every family and size, every state, in light, dark, tinted/accented and vibrant modes, on several wallpapers,
  with the largest text size, in the longest language, on the smallest and largest supported devices.
- Check privacy on a locked device.
- Measure: widgets added and kept (removal within days means it is not useful), taps per widget and where they lead,
  actions completed in place, live activities started, ended and dismissed early. For answer widgets, fewer app opens
  can be success; for invitation widgets, measure what happens after the tap (the item played, read or saved), not
  only the tap — taps followed by an immediate exit mean the hook over-promised.

## References

Home screen widgets across sizes:
- Google Calendar — [small, medium, large](https://mobbin.com/screens/b40f3cc5-6b2a-4e00-b54a-15cff92545dd)
- GitHub — [contribution graph in two sizes](https://mobbin.com/screens/20f07f1e-3e57-4dc9-b280-308098485011)
- Transit — [time home, plus modes](https://mobbin.com/screens/122ad26c-d640-406e-b8c9-e82595de7754)
- Instagram — [stories](https://mobbin.com/screens/52141e18-0ae6-4578-b9ac-c3ff18d433aa)
- Spotify — [recently played with play](https://mobbin.com/screens/d7a177a7-685c-4bba-a27a-cf2e4053ca06)
- Perplexity — [action widget](https://mobbin.com/screens/9289eebd-4221-42df-9b55-82fef51780a4)
- Pinterest — [unconfigured state](https://mobbin.com/screens/65a7433e-f9a2-4618-a225-a7a2709442d7)
- Moonly — [different content per size](https://mobbin.com/screens/0145d88c-04fe-4533-83a8-875ec956cb3a)
- Polarsteps — [trip countdown](https://mobbin.com/screens/5b09d425-6144-4c2d-91b6-5e2ef4be1423)
- Public — [brokerage value and holdings](https://mobbin.com/screens/feb21ca8-bd18-49b2-be28-370ffd975c30) ·
  Mercury — [balances](https://mobbin.com/screens/2927d241-dd5f-4eff-99f2-48c788b217c3)
- Strava — [streak, goal ring and bars](https://mobbin.com/screens/1c996718-ab94-4247-85b3-80885bab44c9) ·
  Apple Fitness — [rings and workout launchers](https://mobbin.com/screens/c1fe70c1-c102-41c8-9352-15f5897055f5) ·
  MyFitnessPal — [water with + 250 ml](https://mobbin.com/screens/f74772bf-95d0-4a91-8e2d-56d33a77508e) ·
  Alma — [nutrition with quick actions](https://mobbin.com/screens/fe23c4a3-b043-432c-aa9f-9bb4db519889) ·
  BitePal — [calories left with add](https://mobbin.com/screens/487c5915-a34d-4bcf-aa0c-d07a42e93033)
- Todoist — [today's tasks](https://mobbin.com/screens/d830160f-31d4-4753-b2d7-37e3739ff398) · Tiimo —
  [tasks with add](https://mobbin.com/screens/328f199c-2624-429a-aa4f-60ebf1ada74d) · Abode —
  [same list in every size](https://mobbin.com/screens/3dd68d11-1906-459e-a6fa-6fd7f1d629f3) (anti-example)
- Tide Guide — [tides and weather across sizes](https://mobbin.com/screens/a9580790-ccec-4905-8b5a-3e1580c4a7d4)
- Apple News — [stories across sizes](https://mobbin.com/screens/ea4f9501-2dec-43a4-85cb-cbf4a8b6fb40) · HYPE —
  [top stories](https://mobbin.com/screens/7e7c3699-adcf-444c-8e35-4be331c66d1e) · Reddit —
  [photo widgets](https://mobbin.com/screens/0cf7bb27-dfb8-4723-a3a2-f0c8245e24d6)
- American Airlines — [next trip](https://mobbin.com/screens/3d729935-9fbb-4741-80d4-d95f4f1fb1ce)
- Duolingo — [guilt streak widget](https://mobbin.com/screens/7d0f39fd-a349-4ef0-9a3b-d907200515fa) (anti-example)

Live activities and the Dynamic Island:
- Transit — [bus arriving](https://mobbin.com/screens/b84f786b-1c21-4110-9977-f0544d9adcf5) · Waymo —
  [ready at pick-up with actions](https://mobbin.com/screens/66063536-4fc7-4cd9-87a4-b87663436576) · Blinkit —
  [ended state](https://mobbin.com/screens/e04baca0-840b-4a12-9de2-0c9efad9b400) · Discord —
  [call controls](https://mobbin.com/screens/cd15106c-309c-4837-adb8-e65ef8815a14) · WHOOP —
  [workout](https://mobbin.com/screens/3688ad6f-ed24-4871-b55c-0ac639ce96b2) · Yazio —
  [meals](https://mobbin.com/screens/4bc38d1d-5a05-4e0a-8939-352891988c19)
- Compact island: Oura — [heart rate and time](https://mobbin.com/screens/dbc7d8dc-29cf-419c-9a6d-f2f781e2b6d0) ·
  American Airlines — [gate](https://mobbin.com/screens/56fcbcca-6d48-4662-a6da-2cb1827605b9) · Granola —
  [recording](https://mobbin.com/screens/95fba3d5-1eac-4cd5-a356-6b3085529248) · Instagram —
  [upload progress](https://mobbin.com/screens/46f634c4-fa71-4d6a-9301-318e10592eb4) · Tinder —
  [boost countdown](https://mobbin.com/screens/6c0dfffa-45da-4a92-aba7-970a643cf4d6)
- Expanded island: FocusFlight — [route, progress and controls](https://mobbin.com/screens/54d63fe8-f924-436c-9071-c63038dbefb6)

Platform guidance (verify the current versions): Apple Human Interface Guidelines — Widgets and Live Activities;
Android — [canonical widget layouts](https://developer.android.com/design/ui/mobile/guides/widgets/layouts) and
[Live Update notifications](https://developer.android.com/develop/ui/compose/notifications/live-update); Microsoft —
[PWA-driven widgets](https://learn.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/widgets).
