# Audio and video players

Players are used for minutes or hours at a time, often while doing something else: cooking, commuting, exercising,
working. Their controls must be reachable without looking closely, their state must survive interruptions, and they
must work with keyboards, screen readers, captions and audio description. For caption quality and accessible media in
depth, see [accessible media](accessible-media.md).

## The problem and who has it

- **Listeners and viewers** of podcasts, courses, music, videos, meditations.
- **People with disabilities** who rely on captions, transcripts, audio description and keyboard controls.
- **People on mobile** controlling playback from the lock screen or headphones.

## Questions to ask before deciding

- **What is played**: short clips, long-form episodes, live streams, music queues?
- **Where**: in-page, full screen, background audio, picture-in-picture?
- **What controls matter** for this content (chapters for long audio, speed for learning)?
- **What happens on interruption** (a call, a lost connection, an expired session)?

## Anatomy and behavior

- **Large basic controls**: play/pause in the center, back 15 s and forward 15/30 s on the sides
  ([Waking Up](https://mobbin.com/screens/9d78575c-82a6-4fc3-9e4c-0d432c9d00be),
  [Apple Podcasts](https://mobbin.com/screens/416723d1-24a7-4c15-b7c3-fb21d53d44ae)).
- **A timeline with elapsed and remaining time** (−3:43), draggable, and in long audio, chapter marks
  ([Brink](https://mobbin.com/screens/9ad1664d-5e1b-4243-bb4f-a2db5abc504f)).
- **Speed** (1×, 1.5×…), **sleep timer**, bookmark and share as secondary controls.
- **Chapters** in a list with durations, and the current one shown above the timeline
  ([Queue](https://mobbin.com/screens/4ac39cee-850b-4828-9e08-aa93b44c3ef3)).
- **A synchronized transcript** with the current sentence highlighted, and tapping a sentence jumps there
  ([Apple Podcasts](https://mobbin.com/screens/416723d1-24a7-4c15-b7c3-fb21d53d44ae)). This is also accessibility.
- **A persistent mini player** above the tab bar that expands to full screen.
- **Keyboard shortcuts** on the web (space, arrows, J/K/L, M, F) — documented, not conflicting with screen readers —
  and system controls (lock screen, headphones).
- **Captions and audio description** available; volume and caption preferences remembered.

## States of the player

| State | Display |
| --- | --- |
| Loading / buffering | A buffering indicator on the timeline, without blocking controls |
| Playing / paused | Clear play/pause state |
| Stalled | "Connection is slow — lowering quality" |
| Error | "This video can't play right now · Retry", with the reason when known |
| Session expired | "Sign in again to continue — you'll resume at 12:41" |
| Live | "LIVE" indicator and "Go to live" when behind |
| Ended | Next item or replay, without autoplay surprises for people who don't want it |

- **Resume position** across sessions and devices.
- **Autoplay of the next item** is a preference, with a visible countdown and a cancel.

## Navigating time accessibly

- Seek with arrow keys in fixed steps, and by chapters.
- Announce position on demand ("12 minutes 41 seconds of 48 minutes").
- Provide a transcript as an alternative way to navigate content.

## Edge cases

- Multiple audio tracks and languages; caption tracks per language.
- Very long content (hours): chapters and search in transcript.
- Background playback restrictions on some platforms.
- Picture-in-picture while using other parts of the app.

## Accessibility specifics

- All controls are buttons with names and states; the timeline is a slider with value text.
- Captions (WCAG 1.2.2, A), audio description or a media alternative (1.2.3 A, 1.2.5 AA).
- No autoplay with sound (1.4.2, A).
- Visible focus over video content.

## Copy

- Times formatted per locale.
- Errors that say whether the problem is the connection, the account or the content.

## Common mistakes and why they happen

- **Tiny controls over busy video.**
- **Losing the position** on errors or app restarts.
- **Captions buried in menus.**
- **Autoplay with sound.**

## Worked comparison

**Weak.** A course video player with hover-only controls, no captions toggle on mobile, and an error that restarts the
lesson from the beginning.

**Strong.** Persistent controls on touch, captions as a first-level button with the language, chapters, a transcript
panel, and resume at the exact second after errors or sign-in.

## How to verify and measure

- **Test** with keyboard, screen reader, captions on, and poor networks.
- **Measure** completion, resume success, caption usage, playback errors.

## References

- Waking Up — [large basic controls](https://mobbin.com/screens/9d78575c-82a6-4fc3-9e4c-0d432c9d00be)
- Apple Podcasts — [controls and synchronized transcript](https://mobbin.com/screens/416723d1-24a7-4c15-b7c3-fb21d53d44ae)
- Brink — [timeline with chapters](https://mobbin.com/screens/9ad1664d-5e1b-4243-bb4f-a2db5abc504f)
- Queue — [chapter list](https://mobbin.com/screens/4ac39cee-850b-4828-9e08-aa93b44c3ef3)
