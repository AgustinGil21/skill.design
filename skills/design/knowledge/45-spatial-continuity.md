# Spatial continuity: everything comes from somewhere

> Verified: 2026-11-03 · Review by: 2027-05-03 · Time-sensitive: platform APIs for shared and morphing transitions.

In a well-made interface, nothing appears out of nowhere. A menu grows out of the button that opened it, a detail page
expands from the card that was tapped, a sheet slides up from the edge it belongs to, and each one goes back the same
way it came. The motion draws a path from the person's gesture to the result. This is not decoration: it is how
people keep track of where they are, what changed, and how to undo it.

Related: [motion](landing/06-motion.md) · [animation techniques](37-animation-techniques.md) ·
[platform design languages](40-platform-design-languages.md) · [dialogs and overlays](patterns/dialogs-overlays-and-confirmations.md) ·
[polish](polish.md).

## Why it matters

- **Cause and effect.** When the menu grows from the button, the person knows the tap caused it and which control
  owns it. A menu that fades in at the center of the screen breaks that link.
- **Object permanence.** If the card becomes the page, the page *is* the card, bigger; people understand the new view
  without reading it.
- **The way back is visible.** Things that return along their path show how to undo: the menu shrinks back into the
  button, the page collapses into its card, the sheet drops to the edge.
- **Attention.** Motion that starts at the point of the gesture keeps the eyes where they already are, instead of
  making them search the screen.

## The rules

1. **Every appearance has an origin**: the control, the item, the edge or the place the content belongs to. If
   nothing caused it (a system message), it comes from a consistent place (toasts from the same edge, always).
2. **Every exit has a destination**, usually the origin: closing reverses opening. Deleted items collapse or travel
   to where they went (the trash, the archive); dismissed sheets return to their edge.
3. **The container persists when it can.** A button that becomes a menu, a card that becomes a page, a search field
   that becomes a search screen: transform the same container (position, size, shape) instead of fading one thing out
   and another in.
4. **Content hands off inside the container.** While the container morphs, the old content fades and blurs out and the
   new content fades and sharpens in, so text never stretches.
5. **Direction means hierarchy.** Forward goes one way, back the other (shared axis); deeper levels come from the item
   that leads to them.
6. **Interruptible and reversible.** A second tap mid-animation reverses from where things are, without jumping.
7. **Duration follows distance and size.** Small morphs are quick (around 200–300 ms); full-screen transforms a bit
   longer; exits faster than entrances.
8. **Reduced motion keeps the relationship, not the travel.** Under reduced motion, crossfade in place or appear
   anchored to the origin, without large movement or scaling.

## Patterns

| Pattern | What happens | Use for |
| --- | --- | --- |
| **Morph from the trigger** | The button itself stretches into the menu or popover, and shrinks back into it | Menus, popovers, action lists from a button; Apple's Liquid Glass controls do this natively |
| **Anchored scale** | The popover scales and fades from the trigger's position (`transform-origin` at the anchor) | Menus and tooltips when a true morph is not available |
| **Container transform** | A card, row or tile expands into a full view; the view collapses back into it | List to detail, gallery to photo, search field to search screen |
| **Shared element** | One element (an image, a title, an avatar) travels between two screens while the rest crossfades | Thumbnails becoming headers, avatars becoming profile photos |
| **Edge origin** | Sheets, drawers and side panels come from the edge they belong to and return there | Bottom sheets, navigation drawers, inspectors |
| **Shared axis** | Screens slide along one axis: forward one way, back the other | Steps in a flow, tabs in order, onboarding |
| **Liquid merge and split** | Neighbouring controls separate and join like drops as they appear or change | Grouped glass controls, toolbars that expand; use sparingly and only where the platform does it |
| **Travel to destination** | An item moves toward where it went (cart, folder, archive) | Only when the destination is on screen and the travel is quick; never blocks the next action |

## Anatomy of a morph (from a real example)

A demo of Liquid Glass-style controls on Android and the web
([video post](https://x.com/BennettBuhner/status/2117519021880861021), November 2026), studied frame by frame:

1. **Press**: the avatar button scales up slightly and brightens under the finger.
2. **Stretch**: the button loses its circular shape and grows like a liquid toward where the menu will sit.
3. **Settle**: the shape becomes the menu's rounded rectangle; the menu items fade in from a blur to sharp.
4. **Close**: the items blur out, the menu shrinks into a blob with a short "neck" pointing back to the button,
   merges into it, and the icon reappears from a blur.
5. The "⋯" button does the same into its action list, and the grouped "+" and "⋯" buttons separate and rejoin like
   drops as the screen changes.

What makes it work: the menu is visibly *the same object* as the button, the path in and out is the same, and the
content never stretches — it hands off by blur and fade inside the moving container.

## Implementation

### Web

- **Anchor menus to their trigger**: CSS anchor positioning (`position-anchor`, `position-area`) places the popover;
  `transform-origin` at the anchor's side makes it scale out of the trigger. Entry and exit with `@starting-style` and
  `transition-behavior: allow-discrete` for popovers and dialogs ([web platform](engineering/08-web-platform.md)).
- **Morph between states or pages**: the View Transitions API with the same `view-transition-name` on the old and new
  element (button and menu, card and detail); customize `::view-transition-group()` timing; works for same-document
  and cross-document navigation where supported.
- **FLIP for layout changes**: measure first and last positions, invert, play — with GSAP Flip, Motion's layout
  animations and shared `layoutId`, or by hand ([animation techniques](37-animation-techniques.md)).
- **Content handoff**: crossfade the inner content with a small blur while the container animates; never scale text.
- **Liquid merges**: an SVG "goo" filter (blur plus a contrast color matrix) can fake liquid joins between shapes, but
  it is expensive, can blur text, and must not be used on controls with readable labels; keep it to the shape layer.

### Apple platforms

- System controls with Liquid Glass morph between states on their own (menus out of buttons, toolbars expanding).
  For custom glass shapes, group them in a glass container and give related shapes matching IDs so the system morphs
  between them; check the current SwiftUI documentation for the APIs in the target OS version
  ([platform design languages](40-platform-design-languages.md)).
- **Container transform to a new screen**: `.navigationTransition(.zoom(sourceID:in:))` on the destination and
  `matchedTransitionSource(id:in:)` on the source (iOS 18 and later), with a shared namespace.
- **Within a screen**: `matchedGeometryEffect` between two views with the same ID.

### Android

- **Shared element and container transform in Compose**: `SharedTransitionLayout` with `Modifier.sharedElement()` for
  identical content and `Modifier.sharedBounds()` for a container whose content changes (the container transform).
- Material 3 motion: container transform, shared axis, fade through and fade, with the motion scheme's springs.

## When not to

- **Do not invent an origin.** If content was not caused by a visible element, do not pretend it came from one; use a
  consistent place instead.
- **Dense work tools** need speed: keep the anchoring (menus appear at their trigger) but make the motion very short
  or instant.
- **Long distances or busy screens**: a shared element crossing half the screen over moving content can confuse; use
  a short container transform or a crossfade.
- **No path blocks the person**: travel animations (an item flying to the cart) are brief and never delay the next
  action.

## Common mistakes

- Menus and dialogs that fade in at the center, unrelated to the control that opened them.
- Opening with one animation and closing with another (or closing instantly), so the way back is lost.
- Scaling the text along with the container, so it stretches.
- A "card to page" transition where a different card animates, or the page appears and then the card disappears.
- Copying the liquid look (blobs, goo) on content and labels, where it hurts reading.
- No reduced-motion version.

## Checklist

- [ ] Every element that appears has a visible origin, and every exit a destination (usually the origin).
- [ ] Containers persist through transforms; content hands off by fade and blur, never stretches.
- [ ] Forward and back move in opposite directions; deeper levels come from their item.
- [ ] Interruptible: reversing mid-animation continues from the current state.
- [ ] Durations scale with distance; exits faster than entrances.
- [ ] Reduced motion keeps the relationship with a crossfade or anchored appearance.
- [ ] Platform APIs (View Transitions, matched geometry, shared bounds) checked in current docs for the target version.
