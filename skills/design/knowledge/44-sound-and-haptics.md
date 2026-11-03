# Sound and haptics

Sound and touch feedback are design materials, as deliberate as color and motion, and as easy to overuse. A good
interface sound tells you something happened without looking; a good haptic confirms an action under your thumb.
Generated products either ignore them or add them everywhere. This file covers when they help, how to design them, and
how to keep them accessible.

Related: [platforms and input](36-platforms-and-input.md), [animation techniques](37-animation-techniques.md),
[product archetypes](39-product-archetypes.md) (budgets per kind of product).

## When they help

| Situation | Sound | Haptics |
| --- | --- | --- |
| Confirming an action people cannot see (sent, paid, locked) | A short, quiet confirmation, when sound is expected (payments at a terminal, sending a message) | A success pattern |
| Errors and warnings | Rarely: alarming sounds for real alarms only | A distinct warning or error pattern |
| Continuous control (sliders, pickers, dials, drag snapping) | No | Light ticks at detents and snap points |
| Reaching a limit or boundary | No | A firm bump |
| Learning and games | Part of the experience (correct, incorrect, rewards) | Correct answers, impacts |
| Notifications | The product's own notification sound, distinct and short | System notification haptics |
| Background or ambient | Only in products about sound or immersion (music, meditation, games) | No |

**Default for most product interfaces**: no sound for routine interactions; haptics for a few meaningful events.

## Designing haptics

- **Use the platform's patterns first**: iOS feedback generators (notification success, warning and error; impact
  light, medium, heavy, soft, rigid; selection), SwiftUI `sensoryFeedback`; Android `HapticFeedbackConstants` and
  `VibrationEffect` primitives. They match what people feel elsewhere on the device.
- **Consistent mapping**: one pattern per kind of event across the product, so people learn it.
- **Match the motion**: the haptic lands with the visual change (the snap, the arrival), at a matching intensity.
- **Short and sparse**: long or repeated haptics dilute meaning and drain battery.
- **Custom patterns** (Core Haptics, composed vibrations) for games and signature moments only, designed and tested
  on devices.
- **The web**: the Vibration API is limited and unsupported on iOS; do not rely on it.

## Designing sound

- **Short** (often under half a second), **quiet** relative to system sounds, and **in the brand's character** (warm,
  crisp, playful) without being musical noise.
- **A small family**: a few sounds with consistent timbre for related events (sent, received, success, error), not a
  different sound for everything.
- **Respect the context**: silent mode, focus modes, shared spaces, and media playing; duck or skip sounds when audio is
  playing.
- **Not the only signal**: every sound has a visual (and ideally haptic) equivalent.
- **Audio branding** (a sonic logo) belongs in specific moments (launch of a media product, a payment confirmation),
  not on every screen.

## Accessibility

- Settings to turn sounds and haptics off independently, and respect the system's settings (sound off, reduce motion
  often paired with reduced haptics, system haptics off).
- Never convey information only by sound or vibration (WCAG 1.3.3 for sensory characteristics; deaf and hard-of-hearing
  people; people with tactile insensitivity).
- No startling sounds; no sounds that autoplay on load (WCAG 1.4.2 Audio Control for audio longer than three seconds).
- Vibration can be uncomfortable or painful for some people; keep it optional.

## Common mistakes

- A sound on every tap; haptics on every scroll.
- Different haptics for the same kind of event in different screens.
- Celebration sounds for routine work tasks.
- Sound as the only error signal.
- Custom vibration patterns that feel like a phone call.

## Worked comparison

**Situation:** a banking app adds feedback to its transfer flow.

**Weak.** A click sound on every key of the amount pad, a long celebratory vibration and a cash-register sound when the
transfer is submitted (still pending), and a buzzing error pattern that is the only sign a field is wrong.

**Strong.** Light selection haptics on the amount pad's detents only if the platform does it natively; no sounds in the
flow; a single success haptic when the transfer is confirmed (not when submitted); errors shown in text next to the
field with a warning haptic. Sounds and haptics can be turned off in settings and follow the system's settings.

## Checklist

- [ ] Sound and haptics used only where they add information.
- [ ] Platform patterns first; one consistent mapping per event type.
- [ ] Haptics aligned with the visual change.
- [ ] Silent and focus modes, media playback and system settings respected; independent off switches.
- [ ] Every sound and haptic has a visual equivalent.
