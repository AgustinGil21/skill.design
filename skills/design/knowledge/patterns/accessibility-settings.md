# In-app accessibility settings

Some people need to adjust a product beyond what their operating system offers: longer message durations, no
autoplay, higher contrast, simplified motion, captions on by default. In-app accessibility settings make that
possible. They complement — never replace — a product that is accessible by default and respects system settings on
its own. See [accessibility](../02-accessibility.md) and [preferences](preferences.md).

## The problem and who has it

- **People who cannot change system settings** (managed or shared devices).
- **People who need product-specific adjustments** the system does not offer (message duration, autoplay of user
  content, alt-text requirements when posting).
- **People with combined needs** (low vision and vestibular sensitivity) whose settings interact.

## Questions to ask before deciding

- **Does the product already respect system settings** (text size, reduced motion, contrast, captions)?
- **Which product-specific behaviors** cause barriers (autoplay, timed messages, animations, sounds, haptics)?
- **What is the precedence** between system and app settings?
- **How do people recover** if a setting makes the interface unusable for them?

## Anatomy and behavior

- **An "Accessibility" section findable in Settings**, with options grouped (Visual · Motion · Audio · Navigation) and
  a line explaining each ([Canva](https://mobbin.com/screens/0e0b8aed-7212-44d1-a85c-be08f628e2b6),
  [Starling](https://mobbin.com/screens/e465aa3a-1860-41df-9cda-42c0ab9786d8)).
- **"Use system setting" as the default** (autoplay, reduced motion), with the option to override in the app.
- **Options worth offering**: high contrast, automatic captions, reduced motion, turning off haptics
  ([Bluesky](https://mobbin.com/screens/6a1126a4-d465-4593-b862-75445c0420b7)), turning off number transitions and
  effects ([Tide Guide](https://mobbin.com/screens/42ee74ba-d425-47c6-8006-7ea733ab68a2)), and **messages that stay
  on screen longer** (Canva).
- **Not depending on color for meaning**: amounts with + and − ([Copilot](https://mobbin.com/screens/87e61ef3-fb87-4e97-a062-87886023ce01))
  and color-vision-friendly palettes.
- **Live preview** of the change and "Reset" ([Character AI](https://mobbin.com/screens/947f1681-9863-4d18-af06-1aa17954f3d4)).
- **Accessibility of the domain, not only the screen**: an accessible vehicle, audio guidance, less walking
  ([Waymo](https://mobbin.com/screens/64fc71f8-7486-4e19-a87d-cea421d09bcc)); requiring alt text before posting
  (Bluesky).
- **Apply immediately**; if a restart is needed, say so in the option
  ([Gojek](https://mobbin.com/screens/d1f510c3-4524-4c09-977f-e1122f3375fe)), though ideally it is not needed.

## Scope and precedence

| Setting source | Default behavior |
| --- | --- |
| System preference (reduced motion, text size, captions) | Honored automatically |
| App setting "Use system" | Follows the system |
| App setting overridden | Wins inside the app, shown clearly |
| Organization policy | Rarely relevant for accessibility; never reduce access |

Settings should sync across the person's devices when they sign in, so they do not need to reconfigure on each one.

## Recovery

A setting change can make the interface hard to use (very large text breaking layouts, high contrast making a chart
unreadable). Make the way back obvious: the Accessibility section reachable from a stable place, a "Reset to defaults"
action, and changes that can be undone immediately.

## Testing combined needs

Test combinations, not just individual settings: large text + high contrast; reduced motion + screen reader; captions
+ zoom. Many problems only appear in combination.

## Copy

- Each option says what it changes in practical terms ("Toasts stay until you close them").
- Avoid medicalized or labeling language ("For people with…"); describe the effect.

## Common mistakes and why they happen

- **An accessibility page instead of accessible defaults.**
- **Ignoring system settings** so people must configure everything twice.
- **Options buried** deep in settings.
- **No recovery** from a setting that breaks the layout.

## Worked comparison

**Weak.** The app ignores the system's reduced-motion setting; an "Accessibility" page offers a single "High contrast"
toggle that breaks charts.

**Strong.** The app honors system text size, reduced motion and captions by default. Its Accessibility section adds
autoplay off, longer toasts, haptics off and contrast options with a live preview and reset; charts include patterns
and direct labels so contrast changes do not break them.

## How to verify and measure

- **Test** with assistive technology users and with combined settings.
- **Measure** setting usage (signals of barriers elsewhere), and support contacts about accessibility.

## References

- Canva — [grouped accessibility section, longer messages](https://mobbin.com/screens/0e0b8aed-7212-44d1-a85c-be08f628e2b6)
- Starling — [accessibility section](https://mobbin.com/screens/e465aa3a-1860-41df-9cda-42c0ab9786d8)
- Bluesky — [haptics, alt text requirement](https://mobbin.com/screens/6a1126a4-d465-4593-b862-75445c0420b7)
- Tide Guide — [turning off effects](https://mobbin.com/screens/42ee74ba-d425-47c6-8006-7ea733ab68a2)
- Copilot — [signs instead of color](https://mobbin.com/screens/87e61ef3-fb87-4e97-a062-87886023ce01)
- Character AI — [live preview and reset](https://mobbin.com/screens/947f1681-9863-4d18-af06-1aa17954f3d4)
- Waymo — [accessibility of the service](https://mobbin.com/screens/64fc71f8-7486-4e19-a87d-cea421d09bcc)
- Gojek — [restart notice](https://mobbin.com/screens/d1f510c3-4524-4c09-977f-e1122f3375fe)
