# Platform design languages

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: Apple, Google and Microsoft platform guidelines and OS versions.

Apple, Google and Microsoft redesign their platforms every few years, and people's expectations move with them. An app
that ignores the current language looks old the day it ships; an app that copies a new language badly (glass on
everything, springs that wobble) looks worse. This file covers the languages current in late 2026, how to adopt them,
and the rule that matters most: **check the current guidelines before designing for a platform**, because these
details change every year.

Related: [platforms and input](36-platforms-and-input.md) (conventions, gestures, shortcuts),
[animation techniques](37-animation-techniques.md) (springs), [app icons and brand touchpoints](patterns/app-icons-and-brand-touchpoints.md).

## The rule

1. **Identify the target and its version**: iOS/iPadOS/macOS/watchOS/visionOS version, Android version and Material
   version, Windows version. The project's minimum OS version decides what you can use.
2. **Read the current official guidelines** for what you are designing (Apple Human Interface Guidelines, Material
   Design, Fluent 2), not your memory of them.
3. **Use the system components first.** They get the new language, accessibility settings and future updates for free.
   Custom components must imitate the behavior, not only the look.
4. **Express the brand inside the language**: color, type, imagery, content and voice — not by fighting the system's
   navigation, controls or materials.
5. **On the web, do not imitate a native language** unless the product is a web app pretending to be native for a
   reason; web products have their own language (the brand's).

## Apple: Liquid Glass (iOS 26 and later)

Introduced in 2025 with iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26 and tvOS 26: the first platform-wide redesign
since iOS 7. Refined in iOS 27 (2026).

**What it is.** A translucent, refractive material for the **functional layer** — navigation bars, tab bars, toolbars,
sidebars, controls, sheets — floating above the **content layer**. Controls adapt to the content beneath them, and
navigation can shrink or recede while scrolling so content leads.

**What changed for designers.**

- **Navigation is behavior, not a fixed bar**: toolbars and tab bars react to what is under them and to scrolling;
  design how they look over light, dark, busy and plain content, and when they recede.
- **Content goes edge to edge** under the functional layer; design content to scroll beneath glass without losing
  legibility at the edges.
- **Concentric shapes**: corners of controls and containers relate to the device's corner radius; nested shapes stay
  concentric.
- **Icons are layered** and rendered in several appearances (default, dark, clear and tinted, in light and dark);
  authored with Icon Composer ([app icons](patterns/app-icons-and-brand-touchpoints.md)).
- **iOS 27 refinements** (reported at WWDC 2026): less default transparency, more defined borders, lighter glass in dark
  mode, a system setting that lets people choose how strong the glass looks, and apps built with the iOS 27 SDK can no
  longer opt out of Liquid Glass for native components. Check the current HIG for the exact behavior.

**How to adopt it well.**

- Use system bars, tab bars, toolbars, sheets and controls; they adopt the material automatically.
- **Never put glass on content** (cards, list rows, text blocks): glass is for the functional layer.
- Keep **legibility first**: test over photos, gradients and white; respect Reduce Transparency, Increase Contrast and
  the transparency setting; text on glass must keep contrast.
- Avoid stacking glass on glass.
- Brand color goes into tints, content and accents, not into recoloring the system material.
- Custom controls: match the system's shape, size, states and motion, or use the system ones.

**Common failures.** Glass panels everywhere as decoration; low-contrast text over busy backgrounds; fighting
receding navigation with fixed custom bars; an app icon that does not work in clear or tinted modes.

## Google: Material 3 Expressive (Android 16 and later)

Announced in 2025 as an evolution of Material 3 (not a new version), based on a large research program on emotional
design. Android 16 also requires apps to draw **edge to edge**, under the system bars, with proper insets.

**What it adds.**

- **Motion physics with springs**: spatial springs for position and size, effects springs for color and opacity, with
  motion tokens (motion schemes) instead of fixed-duration tweens. Springs retarget from the current velocity when
  interrupted.
- **Shape**: a larger shape library (dozens of shapes, including softer and more playful ones) and shape morphing for
  emphasis and state changes.
- **Type and color for emphasis**: emphasized type styles for hierarchy and key actions; richer use of dynamic color.
- **New and updated components** (button groups, split buttons, floating toolbars, loading indicators, and more),
  rolling out through the Compose Material 3 libraries; check which are stable in the version the project uses.

**How to adopt it well.**

- Use **motion and shape tokens** from the theme, not hand-tuned values.
- Apply expressive tactics **selectively, at moments that matter** (a primary action, a state change, a hero moment).
  Applying them uniformly is the most common failure; Google's own guidance frames expressiveness as purposeful.
- Springs with visible bounce belong to the system's expressive moments when the platform uses them; in your own
  custom motion, follow the skill's motion rules (settle once, no gratuitous overshoot) unless the product's brand and
  the platform pattern call for it.
- Handle **insets** for edge-to-edge: content under bars, nothing important under the gesture area.
- Dynamic color: test the brand against user-chosen palettes; keep semantic colors stable.

## Microsoft: Fluent 2 (Windows 11)

Materials (Mica, Acrylic) for backgrounds and transient surfaces, rounded geometry, Segoe UI Variable, and WinUI
controls. Use Mica for the app background, Acrylic for transient surfaces (flyouts, menus), the system title bar
behavior, and keyboard and pen as first-class inputs. Desktop density and keyboard shortcuts follow
[platforms and input](36-platforms-and-input.md).

## The web

The web has no platform design language; the brand's design system is the language. Respect the browser and OS where
they reach into the page: `color-scheme`, system fonts where chosen, form controls with `accent-color`, the user's
contrast, motion and transparency preferences (`prefers-contrast`, `prefers-reduced-motion`,
`prefers-reduced-transparency`). Progressive web apps installed on a device should follow the OS conventions for
navigation and safe areas.

## Cross-platform products

| Situation | Approach |
| --- | --- |
| Native apps per platform | Each follows its platform language; the brand is shared through color, type, content, illustration and voice |
| One codebase (React Native, Flutter) | Platform-adaptive components where conventions differ (navigation, sheets, pickers, switches, back behavior); one brand layer on top |
| A strong brand that wants an identical look everywhere | Possible for content areas; keep platform navigation, gestures and system controls native, or people feel lost |
| A web app and native apps | The web follows the brand's system; native apps follow the platform plus the brand |

## Worked comparison

**Situation:** a notes app for iPhone (minimum iOS 26) with a custom opaque top bar and a custom tab bar in brand teal.

**Weak.** The team keeps the custom bars and adds a frosted blur to every note card "to look like Liquid Glass". The
bars do not recede on scroll, the cards' text loses contrast over photos, the tab bar ignores the system's
transparency and contrast settings, and the app icon is a teal square with a white "M" that disappears in clear mode.

**Strong.** The custom bars are replaced with `NavigationStack` toolbars and a system `TabView`, which adopt the
material and its behavior; teal moves into the tint and accents; note cards stay opaque content. Legibility is checked
over photo notes and with Reduce Transparency and Increase Contrast. The icon is rebuilt in layers in Icon Composer
with a mono version that works in clear and tinted modes.

## Checklist

- [ ] Target platforms and minimum versions known; current guidelines checked (with the date).
- [ ] System components used first; custom ones match behavior and states.
- [ ] Apple: glass only on the functional layer; legibility over any content; accessibility settings respected; icon
  works in every appearance.
- [ ] Android: edge to edge with insets; motion and shape from tokens; expressive tactics used selectively.
- [ ] Windows: materials used as intended; keyboard and pen first-class.
- [ ] Brand expressed inside the language, not against it.
