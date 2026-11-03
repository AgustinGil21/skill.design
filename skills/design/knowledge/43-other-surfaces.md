# Other surfaces: watch, TV, car, spatial and voice

Most design guidance assumes a phone or a laptop. Products increasingly extend to wrists, living rooms, dashboards,
headsets and speakers, where the same rules produce bad results: a phone layout shrunk onto a watch, a website on a
TV, a form in a moving car. This file gives the essentials of each surface; for any of them, read the current platform
guidelines before designing (Apple Human Interface Guidelines, Android and Wear OS, Android TV/Google TV, CarPlay and
Android Auto, visionOS, Alexa and Google Assistant), because they change and some are enforced at review.

## Watch (watchOS, Wear OS)

- **Glances of a few seconds**: one piece of information or one action per screen; the most important first.
- **Complications and tiles** are often the main interface: glanceable, current, honest about freshness.
- **Input**: taps, the crown or bezel for scrolling and values, short dictation; no typing.
- **Notifications** carry most of the value; actionable from the wrist.
- **Large, high-contrast text; dark backgrounds** (OLED and battery); always-on states dimmed.
- **Health and fitness**: accurate data, calm feedback, no pressure (see the fitness domain in
  [product domains](30-product-domains-and-tone.md)).
- **Do not** port the phone app; pick the two or three moments that matter on the wrist.

## TV and the 10-foot interface

- **Viewed from about three meters**: large type, generous spacing, high contrast, safe margins for overscan.
- **Input is a remote**: directional navigation (focus moves up, down, left, right) with a very clear, animated focus
  state; every element reachable by the D-pad; back always works; minimal text entry (voice, phone pairing, QR codes
  to sign in).
- **Browsing in rows** of content, focus scaling and previews; playback controls simple and consistent.
- **Lean-back sessions, shared screens**: profiles, no private notifications on the big screen, autoplay with
  control (see [feeds](patterns/feeds-and-social-posting.md)).

## Car (CarPlay, Android Auto, built-in systems)

- **Driver distraction is a safety issue**, and platforms enforce templates for this reason: use the provided templates
  (lists, grids, maps, now playing) and their limits on items and text.
- **Glance and voice**: tasks complete in very few, short glances; voice for input; no video, no long text while
  driving.
- **High contrast, day and night modes, large targets**; nothing that requires precise touch.
- **Interruptions**: navigation and calls take priority; the product yields.

## Spatial (visionOS and other headsets)

- **Comfort first**: content within a comfortable field of view and distance, no forced head movement, stable content
  that does not follow the head unless needed, motion that does not cause sickness.
- **Input is eyes and hands**: look to target, pinch to select; targets large enough for gaze (Apple suggests a
  minimum of about 60 points), hover effects provided by the system, no hover-dependent essentials.
- **Windows, volumes and immersive spaces**: start in a window (shared space) and escalate to immersion only when the
  experience needs it; people must always be able to leave.
- **Materials and depth**: use the system's glass material and depth for hierarchy; legibility over any background.
- **Shared and private spaces**: be careful with what appears to others nearby and with recording.

## Voice

- **Conversation design**: short prompts, one question at a time, confirmations proportional to the stakes ("Sending
  €200 to Ana Ruiz. Shall I send it?"), clear ways to go back, stop or ask for help.
- **Discoverability**: say what people can do, with examples, without long menus.
- **Errors**: re-prompt differently, offer choices, hand off to a screen or a human.
- **Privacy**: say when the device is listening and what is stored; avoid reading private content aloud in shared
  spaces.
- **Multimodal**: when a screen is available, show what voice cannot convey well (lists, comparisons, maps).
- **Language**: accents, code-switching and names from many cultures; test with diverse speakers.

## Across surfaces

- **Continuity**: start on one device, finish on another; state synced; handoff explicit.
- **One account, consistent identity**, surface-appropriate presentation.
- **Accessibility** on each surface uses its own assistive technologies (VoiceOver on watch and visionOS, TalkBack,
  TV screen readers, voice control).

## Worked comparison

**Situation:** a food delivery app adds watch and car experiences.

**Weak.** The watch app ports the restaurant list, menus and cart; the CarPlay version shows the full order screen with
item photos and a "Track order" button that opens a map with small text.

**Strong.** The watch shows a complication with the order's stage and arrival time and a notification with "Call
driver"; ordering stays on the phone. In the car, a template-based screen announces "Your order arrives in 8 minutes"
by voice, with one action (call) and no browsing. Both say when data was last updated.

## Checklist

- [ ] The surface's current guidelines checked; required templates and review rules known.
- [ ] Only the moments that matter on that surface; not a port of the phone app.
- [ ] Input model designed for (crown, remote, gaze and pinch, voice, glance).
- [ ] Legibility at the real viewing distance and in the real environment.
- [ ] Safety and comfort constraints respected (car, spatial).
- [ ] Privacy in shared environments considered.
