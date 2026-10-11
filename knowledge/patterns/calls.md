# Audio and video calls

Calls are real-time, social and fragile: audio drops, cameras fail, the wrong window gets shared, someone is recorded
without noticing. People cannot pause a call to figure out the interface, so controls must be obvious, state must be
unmistakable (am I muted? is this being recorded?), and recovery must be fast. This pattern covers the full lifecycle:
before joining, during, interruptions, and after.

## The problem and who has it

- **Participants** who need to be heard, see others and share content without embarrassment.
- **Hosts** who manage participants, recording and security.
- **People with disabilities**: deaf and hard-of-hearing people need captions; blind people need accessible controls
  and announcements; people with cognitive disabilities need predictable layouts.

## Questions to ask before deciding

- **One-to-one or group?** Internal team, customers, the public?
- **What devices**: browser, desktop app, phone, room systems?
- **What is sensitive**: recording, transcription, screen sharing, presence?
- **What happens when the network degrades?**
- **Who controls what** (host, co-host, participant)?

## The call lifecycle

| Phase | Needs |
| --- | --- |
| **Before joining** | Preview camera and microphone, choose devices, set name, check connection, join muted or not |
| **Joining** | Waiting room or direct entry, knowing who is already there |
| **During** | Audio, video, sharing, chat, reactions, captions, recording awareness |
| **Interruptions** | Network drops, device changes, permission loss, host leaving |
| **After** | Recording, transcript, summary, follow-ups |

### Before joining (pre-join)

- A preview of the camera with a mirror, a microphone level meter and device selectors.
- "Join with microphone off" options, remembered.
- A connection check with plain-language results ("Your connection may be unstable for video").
- Who is in the call already, when appropriate.

## Anatomy and behavior: during the call

- **Controls in a bar at the bottom, centered and named** (Microphone · Camera · Share · Record · Chat · People), with
  **"Leave" separated and styled as destructive** ([Dialpad](https://mobbin.com/screens/a55b65b4-cc0d-4c87-a742-cdfdb055757d),
  [Zoom](https://mobbin.com/screens/4c927607-e330-478b-885d-0c8213a9cc19),
  [Wrangle](https://mobbin.com/screens/a8efbc98-b7ae-4e1d-98c9-69dbf7858b5d)).
- **The button's state says what is happening now and its label what it does**: a muted microphone shown clearly with
  "Unmute"; an arrow next to it to choose the device.
- **Each participant with name and state** (muted, speaking highlighted with a border); your own tile marked "(You)"
  ([ClickUp](https://mobbin.com/screens/2ae49e76-dc76-4b8a-b12e-7000344f0266)).
- **Recording and transcribing always visible to everyone** ("● Recording", "Transcribing"), not only to the person
  recording; joining a recorded call says so before entering.
- **A side panel for People / Chat** with who is present, who is missing ("Didn't join · No response") and host actions
  (mute all, invite; [Zoom](https://mobbin.com/screens/4c927607-e330-478b-885d-0c8213a9cc19),
  [Whereby](https://mobbin.com/screens/4bc807a9-7aa8-40c1-be6a-4afef7e1fd0e)).
- **Per-person diagnostics**: connection quality, echo cancellation, chosen device
  ([Descript](https://mobbin.com/screens/7ea8de26-61f9-4bf2-a238-c6fc6578a594)).
- **Layouts** (Dynamic / Grid / Speaker) and elapsed time at the top.
- **Live captions as a first-level control**; shortcuts to mute (press-and-hold space to talk).

### Screen sharing

- Choose what to share (a window, a tab, the whole screen) with previews.
- A clear, persistent indicator while sharing ("You are sharing 'Budget.xlsx' · Stop sharing").
- Warn when sharing the whole screen that notifications may be visible.
- Make stopping one click away from anywhere.

### Recording that people understand

- Ask for consent where required; inform everyone at the start and when people join late.
- Say what is recorded (audio, video, shared screen, chat) and who can access the recording.
- Make it obvious when recording stops.

## Interruptions and recovery

| Event | Design |
| --- | --- |
| Network degrades | Reduce video quality automatically, say so ("Video paused to keep audio clear") |
| Connection drops | "Reconnecting…" with the call kept; rejoin automatically |
| Microphone or camera lost (unplugged, used by another app) | Explain and offer another device |
| Permission revoked in the browser | Explain how to re-enable it, per browser |
| Host leaves | Transfer host or end with a clear message |
| Wrong window shared | One-click stop, and a preview next time |

## States and edge cases

- Muted while speaking ("You're muted" hint when voice is detected).
- Large calls (hundreds of participants): pagination, raised hands, moderated Q&A.
- Phone dial-in participants without video or names.
- Different languages: captions in the spoken language, translation as an option.

## Accessibility specifics

- All controls reachable by keyboard and screen reader, with state announced ("Microphone off").
- Live captions (WCAG 1.2.4, AA, for live audio content) with adjustable size and position.
- Announcements for joins, leaves and hand raises, configurable to avoid overload.
- Pinning a sign language interpreter's video.
- Avoid relying only on visual indicators (the speaking border) — also expose active speaker to assistive technology.

## Copy

- Control labels describe actions ("Unmute", "Stop sharing").
- Status messages calm and specific ("Reconnecting — your audio will return in a moment").

## Common mistakes and why they happen

- **Ambiguous mute state** — icon-only toggles.
- **Recording indicators only for the recorder.**
- **Screen sharing without a persistent indicator.**
- **Calls ending on brief network drops.**
- **Captions hidden in menus.**

## Worked comparison

**Weak.** Icon-only controls; the mute icon looks the same muted or unmuted except for a thin slash; recording shows a
small dot only to the host; a network drop ends the call.

**Strong.** Labeled controls with clear states; a "You're muted" hint when speaking; a "● Recording" banner for all
participants with who started it; reconnection keeps the call; captions one click away.

## How to verify and measure

- **Test** on poor networks, with device changes, keyboard and screen reader, and with captions.
- **Measure** reconnection success, "talking while muted" incidents, accidental shares reported, caption use.

## References

- Dialpad — [control bar](https://mobbin.com/screens/a55b65b4-cc0d-4c87-a742-cdfdb055757d)
- Zoom — [control bar and people panel](https://mobbin.com/screens/4c927607-e330-478b-885d-0c8213a9cc19)
- Wrangle — [control bar](https://mobbin.com/screens/a8efbc98-b7ae-4e1d-98c9-69dbf7858b5d)
- ClickUp — [participant tiles](https://mobbin.com/screens/2ae49e76-dc76-4b8a-b12e-7000344f0266)
- Whereby — [people panel](https://mobbin.com/screens/4bc807a9-7aa8-40c1-be6a-4afef7e1fd0e)
- Descript — [per-person diagnostics](https://mobbin.com/screens/7ea8de26-61f9-4bf2-a238-c6fc6578a594)
