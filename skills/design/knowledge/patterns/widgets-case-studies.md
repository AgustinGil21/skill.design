# Widgets and live activities: case studies

> Verified: 2026-11-13 · Review by: 2027-05-13 · Time-sensitive: products change their widgets often; re-check before citing one as current.

Real widgets and live activities taken apart the way a design critique would: the question each one answers, how it
scales across sizes, what works, what to watch, and what to take away. Read it with
[widgets and live activities](widgets-and-live-activities.md), which holds the rules; this file shows them applied (and
broken) in shipped products. The reasons are hypotheses from the screens, not statements from the teams.

## 1. Size ladders: one question, deeper with each size

### Apple Weather (macOS)

**Question:** "What's the weather here, now and next?"
**Ladder:** small = place, temperature, condition, high and low · medium = + six hours with icons and the sunset ·
large = + five days with range bars · extra large = + ten days.

**What works.** The anchor (place with location arrow, 26°) never moves; each size adds the next horizon in time,
which is exactly the order of curiosity. The range bars encode both the day's span and its position in the week's
range, so the eye compares days without reading numbers; colors move from cool to warm only as an extra cue. Separators
divide horizons, not decorate.
**Watch.** The bars rely on hue for temperature; the numbers on both ends keep it readable without color.
**Take away.** Order sizes by the next question a person asks, and keep the first answer pinned in place.

### Google Calendar

**Question:** "What's next today?" · **Ladder:** small = date and the next two items · medium = the same, wider ·
large = month grid plus next items ([screens](https://mobbin.com/screens/b40f3cc5-6b2a-4e00-b54a-15cff92545dd)).
**Works.** Tasks and events share one list with distinct shapes (pill for task, block for event).
**Watch.** The medium size adds width but almost no information; a second day or a third event would earn the space.
**Take away.** If a size adds only whitespace, it should add the next horizon (tomorrow) or not exist.

### Crypto.com

**Question:** "How are my coins doing?" · **Ladder:** small single = one coin with price and change · small list =
three coins, compact · medium = three rows with sparklines · large = six rows with sparklines
([screens](https://mobbin.com/screens/fb9413e4-a25c-4725-b250-3cd26e731b55)).
**Works.** "Last Update 17:11" in the header is honest about freshness; sparklines show the shape of the day in the
space of a word; change is shown with sign and color.
**Watch.** Truncated names ("Measurable…", "Reactive Net…") while tickers sit below: the ticker is the shorter, more
recognizable label and could lead.
**Take away.** Put the freshness stamp where the eye lands; lead with the shortest label people recognize.

### TradingView

**Question:** "What are the markets doing?" · **Ladder:** small list = three indices · small single = one ticker with a
large price · medium = indices with names, or one ticker's latest news with previous/next arrows
([screens](https://mobbin.com/screens/31b5708d-94a7-4d9f-a483-a25b8958552e)).
**Works.** The single-ticker small gives the price the largest type in the family: one value, one widget. The news
widget pages with in-place buttons, a good use of interactivity.
**Watch.** Tiny secondary text (exchange and time) at the edge of legibility.
**Take away.** In a small size, give one value the whole stage instead of three values a third each.

### Structured (day planner)

**Question:** "What's my day?" · **Ladder:** small = four items, compact timeline · medium = two items with completion
circles · large = five items ([screens](https://mobbin.com/screens/e914a470-e0f3-47da-baf8-3fe508898d7e)).
**Works.** The small size is designed, not cropped: smaller rows, the timeline kept, completion circles removed. The
timeline spine and colored icons make the day readable at a glance; durations ("1 hr, 30 min") help planning.
**Watch.** The medium shows fewer items than the small, which feels inverted; it trades count for tappable circles.
**Take away.** Each size can choose a different trade-off (count versus actions), but say which and keep it consistent.

### FotMob

**Question:** "When do my teams play, and what happened?" · **Ladder:** medium = four fixtures · large = eight fixtures
with results ("1 FT 0") and the refresh time ([screens](https://mobbin.com/screens/89cc7501-1389-4221-8b53-d0b46e91ae8b)).
**Works.** Crests do the identification, so text is only time or score; local kickoff times; a refresh timestamp.
**Take away.** Recognizable images can replace words in dense widgets — when they truly identify.

### Public and Mercury (money)

Public: value and change in small and medium; large adds holdings
([screens](https://mobbin.com/screens/feb21ca8-bd18-49b2-be28-370ffd975c30)). Mercury: one balance per widget, with a
30-day trend in one variant ([screens](https://mobbin.com/screens/2927d241-dd5f-4eff-99f2-48c788b217c3)).
**Works.** Large, well-set numerals (Mercury's raised cents) make money feel precise.
**Watch.** Neither shows whether the amounts hide on the lock screen; a balance widget must decide its private state.
**Take away.** Money widgets need a privacy decision before a layout decision.

## 2. One app, many questions: Tide Guide

Tide Guide offers a dozen widgets, each answering a different question for people who live by the tide
([flow](https://mobbin.com/flows/471807e6-99d3-4302-8ae6-689bf164606a)):

| Widget | Question |
| --- | --- |
| Tide curve with current position (small, medium) | Where is the tide now and when does it turn? |
| Tide level bar "0.7 m · Low in 2 hr 3 min · Falling tide" | How much water, rising or falling, and when is low? |
| Circular gauge "0.9 m" with the time of the next low | The same, as a dial for a small square |
| Tomorrow's tides list | What do I plan for tomorrow? |
| Sun and moon times | When is light and dark? |
| Wind speed and direction | Can I go out on the water? |
| Sun arc | Where is the sun in its day? |
| Large: curve, weather by hour and three days of tides | The full picture for planning |

**Works.** Each widget is one question, so people compose their own home screen from the questions they care about.
The same visual language (curve, dark blue, small labels) ties the family together.
**Watch.** One medium variant shows only "Tue / Wed / Thu" with an empty body — a placeholder or loading state that
should show redacted shapes instead of an empty frame.
**Take away.** For an app with several daily questions, offer several focused widgets rather than one widget trying to
show everything.

## 3. Action widgets: doing, not showing

| Product | Actions | Notes |
| --- | --- | --- |
| Perplexity ([screen](https://mobbin.com/screens/9289eebd-4221-42df-9b55-82fef51780a4)) | Ask field, plus voice, camera, other modes | The field is a large target that opens the app ready to type |
| Notion ([screen](https://mobbin.com/screens/6a216e4f-97a1-4751-8239-3960c05b8ee1)) | Ask AI, camera, photo, voice, transcription | Same anatomy as Perplexity: one primary, then secondary inputs |
| Tiimo ([screen](https://mobbin.com/screens/9bd0f286-7ce4-42bd-8146-ee694806b166)) | "What's the plan?" with voice, then today, tasks, calendar, timer | Small size keeps four buttons in a grid; voice gets the dark emphasis |
| Apple Fitness ([screen](https://mobbin.com/screens/c1fe70c1-c102-41c8-9352-15f5897055f5)) | Start walk, run, cycle, hike | A small "Outdoor Walk · Start Workout" widget for the one workout someone does daily |
| MyFitnessPal ([screen](https://mobbin.com/screens/f74772bf-95d0-4a91-8e2d-56d33a77508e)) | "+ 250 ml" water | Hybrid: the value and the action that changes it, with a fill visualization on the edge |
| Spotify ([screen](https://mobbin.com/screens/d7a177a7-685c-4bba-a27a-cf2e4053ca06)) | Play recently played | Medium adds other recent covers as quick entries |
| MD Vinyl ([screen](https://mobbin.com/screens/7d35c941-3a8e-4034-85ed-8144f87ef5e4)) | Previous, play, next, love as physical knobs | A brand-expressive widget: the controls are the identity. Works because the product is about tactile music; it would be costume in a utility |

**Lessons.** One primary action gets the emphasis (dark fill, size, first position); secondary actions are equal
circles with clear icons; buttons are platform-sized targets; the result shows immediately (the water count goes up).
Avoid action widgets whose actions merely open different tabs of the app; that is a launcher, and most people already
have the icon for that.

## 4. Media and social: content as the widget

- **Instagram** stories: two rings in small, four in medium
  ([screen](https://mobbin.com/screens/52141e18-0ae6-4578-b9ac-c3ff18d433aa)). The ring keeps its meaning (unseen
  story) at widget scale.
- **Apple News / HYPE**: one story with a full-bleed image in small, two stories in medium, five in large
  ([Apple News](https://mobbin.com/screens/ea4f9501-2dec-43a4-85cb-cbf4a8b6fb40),
  [HYPE](https://mobbin.com/screens/7e7c3699-adcf-444c-8e35-4be331c66d1e)). The small one switches to image-first
  because a list cannot fit; the type stays at reading size.
- **Reddit** photo widgets and **BeReal** memories: personal images; their value depends on good cropping and on not
  showing something embarrassing on a shared screen
  ([Reddit](https://mobbin.com/screens/0cf7bb27-dfb8-4723-a3a2-f0c8245e24d6),
  [BeReal](https://mobbin.com/screens/363b2a3c-b4f8-4c0a-9ae8-3e12d370446b)).
- **Facebook**: a notifications list plus shortcuts, and Reels with a refresh button
  ([screen](https://mobbin.com/screens/87ce54b2-f5d6-4ed3-8d1a-4e715651b938)). *Critique*: notifications on the home
  screen turn the widget into a pull back into the feed; the refresh button invites compulsive tapping. Useful for
  some people, but it is engagement design ([feeds](feeds-and-social-posting.md)).
- **Snapchat**: a Snapcode and a friend's Bitmoji on a map with "1h"
  ([screen](https://mobbin.com/screens/6f56411d-53fe-44c2-ae5f-e8503864531f)). *Critique*: a friend's location on a
  home screen anyone can see is a privacy decision that needs consent from the friend and a clear timestamp.

**Lessons.** Images need crops designed for every size; text over images needs a scrim; social widgets need privacy
decisions (who appears, where, for whom) before visual ones.

## 5. Habit and health: progress without pressure

- **Strava** offers three focused widgets: streak in weeks with this week's activity days, weekly goal ring with daily
  bars, and the ring alone ([screen](https://mobbin.com/screens/1c996718-ab94-4247-85b3-80885bab44c9)). The weekly
  unit is kinder than a daily one ([gamification](badges-and-gamification.md)).
- **Alma** combines nutrition bubbles with three quick inputs (voice, keyboard, camera) and a separate streak widget
  that says "Streak secured! Nice work." ([screen](https://mobbin.com/screens/fe23c4a3-b043-432c-aa9f-9bb4db519889)).
- **Duolingo**: "847 days · Save your streak!" and an angry owl with "Don't forget me!"
  ([screen](https://mobbin.com/screens/7d0f39fd-a349-4ef0-9a3b-d907200515fa)). *Critique*: guilt on the home screen,
  shown many times a day; effective for engagement, costly for wellbeing and trust. Anti-example.
- **BitePal**: calories left with a mascot and a "+" in the medium
  ([screen](https://mobbin.com/screens/487c5915-a34d-4bcf-aa0c-d07a42e93033)): character without guilt.

**Lesson.** Progress widgets should show what was achieved and what is next, in the cadence the goal needs; a
character can add warmth, but never pressure.

## 6. Live activities

### Deliveries: six products, one pattern

| Product | Headline | Progress | Extras |
| --- | --- | --- | --- |
| Zomato ([screen](https://mobbin.com/screens/91ace382-39ab-41ea-b09f-0e9700d2eec4)) | "Order is on the way · Arriving in 5 mins" (minutes in green) | Three icon stops with a filled line | Rider illustration; restaurant name |
| Wonder ([screen](https://mobbin.com/screens/e3af3b8e-851f-49e9-b23b-dbc679d71c51)) | "Pickup 9:39–9:49pm · 10 Stuyvesant Street" | Received · Preparing · Ready, labeled | Brand typography, black card |
| sweetgreen ([screen](https://mobbin.com/screens/2a747a51-4306-4a18-b51f-44956124f1e3)) | "Your greens are getting closer · Delivery to home" | Four labeled steps | "ETA 12:10–12:20pm" top right |
| Gopuff ([screen](https://mobbin.com/screens/bb65261b-6543-4b83-adc5-e70cdd55f887)) | "Order received! We'll start packing it soon." | Four icon stops | Brand blue background |
| Instacart ([screen](https://mobbin.com/screens/3ef61bc6-79bd-4b40-b45a-76798e0b02e5)) | "Arriving now · Your order is almost there" | Four icon stops, most complete | Retailer logo |
| Lugg ([screen](https://mobbin.com/screens/d915f6d9-05b8-426f-bb0b-e40f855a0d1f)) | "Arrived at pickup · Loading · address" | A truck riding a gradient bar | Driver avatar, expand control |

**What the strongest share.** The headline is the current state in plain words; the time is a **window** ("9:39–9:49",
"12:10–12:20") rather than false precision; the step tracker shows where in the process the order is, with labels when
there are few steps; brand expression lives in color and typography, not in extra content.
**Watch.** Icon-only steps (Gopuff, Instacart) need accessible labels and are harder to read than Wonder's labeled
steps; "Arriving in 5 mins" should become a time window or a timestamp so it stays true between updates.
**Take away.** For processes with stages, combine one sentence of state, one time window and a labeled stepper.

### Transit, rides and travel

- **Transit**: "70 in 1 minute" with the route as a progress bar and "Arrive at 5:51 PM · 35 min"
  ([screen](https://mobbin.com/screens/b84f786b-1c21-4110-9977-f0544d9adcf5)). The line number is the anchor, colored
  like the real line.
- **Waymo**: "Ready at pick-up" with "Start ride" and "Open boot" and the car's roof light code "RL"
  ([screen](https://mobbin.com/screens/66063536-4fc7-4cd9-87a4-b87663436576)) — actions for the next physical step,
  plus the identifier that helps find the car.
- **American Airlines** compact island: the gate "B22" in the trailing slot
  ([screen](https://mobbin.com/screens/56fcbcca-6d48-4662-a6da-2cb1827605b9)) — the single most useful fact at the
  airport.

### Sports

- **Apple Sports**: crests, score "0 – 0", minute "18:25" and one line of play-by-play
  ([screen](https://mobbin.com/screens/267532fa-2c5f-4f5d-8434-7080b8fecf6f)). The commentary line turns a score into a
  story without opening the app.
- **NFL**: a pre-game card with team colors bleeding in from the edges, records and kickoff
  ([screen](https://mobbin.com/screens/314b061f-6093-4496-9ea0-867c3e6871ee)). Strong identity; the date and time are
  the content before the game.

### Workouts, focus and health

- **Future**: the exercise name, a progress bar, "14 MIN LEFT" and play, in both the lock screen and the expanded
  island ([screen](https://mobbin.com/screens/50d44c95-e4c8-4e4a-b65b-1df69344b1e4)).
- **TIDE** focus: "0:14 · Night Sea · Focusing" with pause
  ([screen](https://mobbin.com/screens/f9f6a5f2-db50-44bb-ae28-3eab81e4b2a5)).
- **WHOOP** and **Oura**: heart rate, zone, distance and pace with tabular numerals; compact island "♥140 · 2:39"
  ([WHOOP](https://mobbin.com/screens/3688ad6f-ed24-4871-b55c-0ac639ce96b2),
  [Oura](https://mobbin.com/screens/dbc7d8dc-29cf-419c-9a6d-f2f781e2b6d0)).

### The Dynamic Island in compact form

Across Oura (♥ 140 · 2:39), American Airlines (logo · B22), Granola (logo · 1:37 recording), Instagram (thumbnail ·
upload ring), Tinder (bolt · 23:02), Opal (lock · 0:19), Flo and TIDE (timers): **leading = identity, trailing = the
one live value**, in the app's accent color, never more than a few characters. The rule is so consistent that a
compact presentation breaking it (two values, a sentence) reads as wrong immediately.

### yope: a countdown as pressure

An expanded island with a streak "6", a countdown "59:44", "DROP A PIC FOR THE DAY" and the week's ticks and crosses
([screen](https://mobbin.com/screens/52762633-a84d-4158-a28a-588ae9c4f61f)). *Critique*: a live activity is meant for a
process the person started; using it as a daily ticking deadline turns the most visible surface into pressure. Same
lesson as streak guilt, with higher visibility.

## 7. Configuration, customization and discovery

- **Vocabulary** configures the widget in the app with a live preview at the top: categories, theme, border and
  refresh frequency ([flow](https://mobbin.com/flows/71c62d5c-1d61-48fa-9863-9fbc7b568d57)). The preview updates as
  settings change — the right pattern for appearance options.
- **Life Reset** offers widget templates per size with "Edit", a preview carousel and "How to add the widget"
  ([flow](https://mobbin.com/flows/df487eb7-5a9b-4461-9540-16e37450bfe9)).
- **Pinterest** shows an unconfigured state that says what to do: "Edit this widget and choose a board to get started"
  ([screen](https://mobbin.com/screens/65a7433e-f9a2-4618-a225-a7a2709442d7)).
- **Binance** (in-app widgets) uses a long-press menu with size options, "Choose coin", "Edit homepage" and "Remove
  widget" ([screen](https://mobbin.com/screens/4a64f55a-8141-47a9-9dd0-96b45a19e64c)) — the same mental model as the
  OS, inside the product.
- **Discovery screens**: Philips Hue sells the outcome ("Control lights with widgets — set scenes right from your Home
  Screen, Lock Screen, and StandBy — without opening the app";
  [screen](https://mobbin.com/screens/b93b6eab-4895-43e5-9527-d4936f4f2c6b)); Ladder shows the widget on a phone and
  three numbered steps ([screen](https://mobbin.com/screens/613f7bb6-5a8b-43f1-8a29-c7a3940dd5e8)); CapCut separates
  Home Screen and Lock Screen instructions in tabs ([screen](https://mobbin.com/screens/0cc2df39-45ee-498b-bd27-29fa65e87464));
  Truecaller lists five steps ([screen](https://mobbin.com/screens/3515c637-eb2f-450a-9012-3e23b69850f2)); Google and
  Airbuds animate the gesture ([Google](https://mobbin.com/screens/73101647-2740-45fb-aa4d-82aebce34ebf),
  [Airbuds](https://mobbin.com/screens/3bd83cf0-9207-46ac-b5c0-a70b9014e242)); Alma shows its own widget in context
  first ([screen](https://mobbin.com/screens/35d09946-c8f9-45ff-bf1c-f3368c26efbb)); DailyArt combines a beautiful
  preview, steps and how to customize ([flow](https://mobbin.com/flows/fbca89d7-ae8a-45dc-ac6f-26b95debc1f2)).

**Lessons for discovery.** Lead with the benefit in the person's words (what they can do without opening the app);
show the actual widget on a phone; keep steps to three or four, specific to the platform and surface (home versus lock
screen); animate the gesture when it is unfamiliar; offer it at the moment it is useful, once.

## 8. Invitation widgets: the hook into the app

Widgets whose job is to bring people back into the app, judged by the promise they make and keep:

| Widget | The hook | Verdict |
| --- | --- | --- |
| Spotify ([screen](https://mobbin.com/screens/d7a177a7-685c-4bba-a27a-cf2e4053ca06)) | The album last played, with play, and other recent covers | Strong: personal, resumable, one tap to the music |
| Neuecast ([screen](https://mobbin.com/screens/59b9102b-21e9-4af7-99b4-d27ab42b016a)) | The episode last played, with play | Strong: specific episode and show |
| Instagram ([screen](https://mobbin.com/screens/52141e18-0ae6-4578-b9ac-c3ff18d433aa)) | New stories from people the person follows, as rings | Strong: the ring already means "something new from someone you chose" |
| Apple News / HYPE ([News](https://mobbin.com/screens/ea4f9501-2dec-43a4-85cb-cbf4a8b6fb40), [HYPE](https://mobbin.com/screens/7e7c3699-adcf-444c-8e35-4be331c66d1e)) | Today's top story with its image and headline | Good when the headline is honest and the tap opens that article |
| Reddit ([screen](https://mobbin.com/screens/0cf7bb27-dfb8-4723-a3a2-f0c8245e24d6)) | A photo from communities the person follows | Good; depends on safe cropping and appropriate content for a shared screen |
| Polarsteps ([screen](https://mobbin.com/screens/5b09d425-6144-4c2d-91b6-5e2ef4be1423)) | "3 nights until Holiday" over a photo | Strong: personal anticipation; an answer and an invitation at once |
| Facebook ([screen](https://mobbin.com/screens/87ce54b2-f5d6-4ed3-8d1a-4e715651b938)) | Notifications and a Reel with a refresh button | Risky: pulls the feed onto the home screen; the refresh invites compulsive taps |
| Duolingo ([screen](https://mobbin.com/screens/7d0f39fd-a349-4ef0-9a3b-d907200515fa)) | Guilt: "Don't forget me!" | Trap |

Inside apps, Netflix's "Continue watching" row — the title, the artwork and a progress bar per item
([screen](https://mobbin.com/screens/8e17cb66-fcc6-42a0-93a3-ddf1987419e7)) — is the model for a resumable invitation
widget: it shows exactly what you would get and how far you are, and one tap resumes it.

**Lesson.** The best hooks are the person's own things (what they follow, started or are waiting for), shown as the
real item, opening straight into it. Measure the minutes after the tap, not the tap.

## 9. What the cases teach (patterns to apply)

0. **Answer or invitation, instantly**: each widget either tells something in one second or offers a specific,
   honest reason to tap (Spotify, Instagram), never neither.
1. **One question per widget**; several widgets when the app answers several daily questions (Tide Guide).
2. **Pin the anchor**: the primary value keeps its place and style across sizes (Apple Weather).
3. **Sizes add the next horizon** (time, count, detail), never a new topic (Calendar, Crypto.com).
4. **Design the small size**, don't crop it (Structured versus truncated task lists).
5. **Give one value the stage** in small sizes (TradingView's single ticker).
6. **Show freshness** where the eye lands ("Last Update 17:11", "↻ 4:43 PM").
7. **Recognizable images replace words** only when they truly identify (crests, covers).
8. **One primary action**, emphasized; secondary actions equal and clear (Perplexity, Notion, Tiimo).
9. **Processes = sentence + time window + labeled stepper** (Wonder, sweetgreen).
10. **Compact island = identity + one live value**.
11. **Actions in live activities are the next step** of the process (Waymo).
12. **Privacy before layout** for money, location and social content (Mercury, Snapchat).
13. **No guilt, no ticking pressure, no feed pulls** (Duolingo, yope, Facebook as cautions).
14. **Configuration with a live preview**; unconfigured states that say what to do (Vocabulary, Pinterest).
15. **Discovery that sells the outcome, shows the widget and keeps steps short** (Philips Hue, Ladder).
