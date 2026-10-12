# Platforms, devices and input

A senior designer first asks **where and how** the product is used: in a browser, as a phone or tablet app, as a
desktop application; with fingers, a mouse, a touchpad, a keyboard, a pen, a screen reader. Each platform has
expectations people bring from every other app they use. Meeting them makes an interface feel natural; ignoring them
makes it feel clumsy, however good it looks.

The other half of the craft is restraint: add shortcuts, gestures, context menus and rich motion **only when the
product needs them**. A booking form does not need a command palette; a code editor without keyboard shortcuts is
broken. Knowing which is which separates a good designer from a mediocre one. The person always has the last word.

## 1. Identify the platform first

Part of `workflows/start.md`. Evidence:

| Evidence in the project | Likely platform |
| --- | --- |
| Next.js, Astro, Vite, plain HTML, a web manifest | Web (possibly installable as a PWA) |
| React Native, Expo, Flutter, SwiftUI/UIKit, Jetpack Compose, Capacitor, Ionic | Mobile (often phone and tablet) |
| Electron, Tauri, Wails, .NET MAUI/WPF/WinUI, AppKit/SwiftUI for macOS, Qt, GTK, Flutter desktop | Desktop |
| Flutter or React Native with web and desktop targets, Expo web | Cross-platform: design per platform, share the system |
| Unity, Godot, Phaser, a game loop | Game: follow the game's genre and input (controller, keyboard, touch) |

`node scripts/design-scan.mjs <project>` reports platform signals and existing input features (shortcut libraries,
context menus, gesture handlers). When the platform or the target devices are unclear and the design depends on
them, ask — with options: "Is this used mainly on phones at the venue, or on laptops at the office?"

Then establish the **input methods** and **devices** that matter: phone only, phone and tablet, laptops with
touchpads, desktop with mouse, touch laptops, external keyboards on tablets, pens, TV remotes, game controllers,
assistive technology.

## 2. Web

### Fully responsive, not just "mobile and desktop"

Design for the whole range, not two breakpoints:

| Width (CSS px, approximate) | Typical devices | What changes |
| --- | --- | --- |
| 320–479 | Small phones, zoomed views | One column; primary action reachable; nothing cut |
| 480–767 | Large phones, landscape phones | One column with more breathing room; sheets instead of popovers |
| 768–1023 | Tablets, small windows | Two columns where content allows (list + detail); navigation can stay visible |
| 1024–1439 | Laptops, tablets in landscape, split screens | Full layouts; density can increase |
| 1440+ | Desktop monitors | Use the space for content (more columns, side panels), not wider text lines |

Breakpoints come from the **content** (when the layout starts to break), not from device names. Use container
queries for components that live in panels of different widths. Test the in-between sizes: a 1024 px laptop with a
sidebar open, a tablet in split view, a browser window at half a screen.

### Input on the web: detect capabilities, not devices

- Use `@media (pointer: coarse)` and `(hover: hover)` to adapt targets and hover behavior; a touch laptop has both.
- **Nothing essential depends on hover.** Hover can reveal, but the same content or action must be reachable by tap,
  keyboard and focus.
- Touch targets around 44 px on coarse pointers (WCAG 2.5.8 requires at least 24×24 CSS px or enough spacing).
- **Touch gestures where people expect them**: swipe between images or tabs of a carousel, swipe actions in mobile
  lists (with a visible alternative), pull-to-refresh only when the page is app-like, pinch-to-zoom never disabled.
- **Desktop affordances when the product is a tool**: keyboard shortcuts, a command palette, context menus on
  right-click, multi-select with Shift/Cmd/Ctrl, drag and drop. For a marketing site or a simple form, none of these.

### Desktop web for tools

When people use the web app for hours (dashboards, editors, admin panels, email, project management):

- Keyboard navigation for the main flows; shortcuts for frequent actions, shown in menus and tooltips.
- Context menus where people right-click by habit (rows, files, canvas objects), always mirroring actions available
  elsewhere (a menu button), never hiding the only path.
- Do not override browser or OS shortcuts (Cmd/Ctrl+T, W, R, L, F unless replacing find meaningfully).

## 3. Mobile apps (phone and tablet)

### Motion: fluid and spatial

- **Continuity**: people should always understand where an element came from and where it went. A card expands into
  the detail screen and collapses back into its place; a sheet rises from the bottom and returns there; a deleted
  item leaves and the list closes the gap.
- **Interruptible and gesture-driven**: animations follow the finger, respond to velocity, and can be reversed
  mid-way (dismissing a sheet halfway and letting go returns it). Nothing locks the interface while it animates.
- **Native timing**: use the platform's transitions and curves (UIKit/SwiftUI springs without bounce, Material
  motion on Android); 60 fps or more; no layout jank.
- **Haptics** for meaningful moments (a successful action, reaching a threshold), sparingly.
- Still professional: no gratuitous bounce or decorative loops (see [motion](landing/06-motion.md)).

### Gestures

- Platform gestures are sacred: iOS edge swipe back, Android system back, pull to refresh, swipe to dismiss sheets.
- Custom gestures (swipe actions, long press, pinch) need a visible alternative and must not conflict with system
  gestures.
- Long press opens context menus with previews where the platform does (iOS context menus, Android long press).

### Phone and tablet are different devices

A tablet is not a big phone. Use the space:

- **List and detail side by side** (split view), multi-column layouts, persistent navigation (sidebar or rail).
- **Support landscape** and multitasking sizes (split screen, slide over, resizable windows).
- **Pointer and keyboard on tablets**: hover effects for the iPad pointer, keyboard shortcuts with the discoverability
  overlay, drag and drop between apps.
- Keep the phone experience complete: the tablet layout adds utility, it does not move features out of the phone.

See [mobile patterns](patterns/mobile.md).

## 4. Desktop applications

### Know the target

Single platform (a macOS-only app) or cross-platform (Electron, Tauri)? Cross-platform apps still follow each
platform's conventions where people feel them:

| Convention | macOS | Windows | Linux (GNOME/KDE vary) |
| --- | --- | --- | --- |
| Primary modifier | Cmd (⌘) | Ctrl | Ctrl |
| Preferences | App menu → Settings… (Cmd+,) | File/Tools → Options or Settings | Varies; Ctrl+, common in modern apps |
| Menu bar | Global, at the top of the screen | In the window | In the window (or none in GNOME) |
| Window controls | Left, traffic lights | Right | Varies |
| Quit | Cmd+Q | Alt+F4 / File → Exit | Ctrl+Q |
| Redo | Cmd+Shift+Z | Ctrl+Y (also Ctrl+Shift+Z) | Ctrl+Shift+Z |
| Shortcut labels | Symbols (⌘⇧Z) | Text (Ctrl+Shift+Z) | Text |

Show shortcut labels for the platform the person is on; never show "Ctrl" to a Mac user.

### What desktop users expect

- **Speed**: fewer and faster animations (100–200 ms), or none for frequent actions. People repeat actions hundreds
  of times a day; motion that is charming once is friction the hundredth time.
- **Keyboard first for frequent work**: shortcuts, Tab order, arrow-key navigation in lists and grids, Enter/Escape
  behavior, type-to-select.
- **Mouse and touchpad richness**: right-click context menus, double-click to open, drag and drop (including to and
  from the OS), multi-select, hover for previews and tooltips with shortcut hints.
- **Menus** that list every command with its shortcut — the best teacher of shortcuts.
- **Windows**: resizable layouts that work from small to very large windows, remembered sizes and positions,
  multiple windows when the work needs it.
- **Density**: desktop users usually accept more information per screen; still group and align.

## 5. Never forget the touchpad

Many people use laptops without a mouse. Everything that works with a mouse must work with a touchpad:

- **Right-click**: two-finger tap or click, or Ctrl+click on macOS — context menus must open with all of them (listen
  to the `contextmenu` event, not only the right button).
- **No middle-click-only features**; touchpads rarely have one.
- **Scrolling**: two-finger scroll in both directions; support horizontal scrolling in wide tables and timelines;
  respect inertial scrolling.
- **Zoom**: pinch on a touchpad arrives in browsers as a wheel event with `ctrlKey`; canvases and maps should treat
  it as zoom.
- **Dragging is harder on a touchpad**: generous drop zones, auto-scroll near edges, keyboard or menu alternatives
  ("Move to…") — WCAG 2.5.7 requires a single-pointer alternative to dragging.
- **Hover is less precise**: menus that close when the pointer leaves by a pixel are frustrating; use small delays and
  safe triangles for submenus.
- **Swipe navigation** (two-finger swipe back) should not fight horizontal scrolling inside the app.

## 6. Shortcuts, gestures and muscle memory

Some products reward repetition: editors, email, design tools, IDEs, trading, games. For them, shortcuts and
gestures are a core feature; for others, they are noise.

**When to invest**: daily, repeated use; expert users; actions done many times per session; competing products have
established shortcuts people already know.

**How**:

- Follow established conventions (Cmd/Ctrl+K command palette, J/K to move in lists, E to archive in email-like
  tools, Space to preview) when the domain already has them.
- Make them **discoverable**: in menus, tooltips, a "?" overlay, the command palette.
- Make them **consistent** across the product and stable across versions: changing a shortcut breaks muscle memory.
- Avoid conflicts with the OS, the browser and assistive technology; single-key shortcuts must be possible to turn
  off or remap, or work only when a component has focus (WCAG 2.1.4).
- Localize: some key combinations are hard or impossible on other keyboard layouts (AZERTY, QWERTZ); test them.

## 7. Accessibility across inputs

- Every gesture has a simple alternative (WCAG 2.5.1 Pointer Gestures); dragging has a single-pointer alternative
  (2.5.7).
- Everything works by keyboard (2.1.1), with visible focus (2.4.7) that is not hidden (2.4.11).
- Target size (2.5.8) on all pointers.
- Motion respects reduced motion; mobile transitions fall back to fades.
- Screen readers: VoiceOver and TalkBack on mobile, NVDA/JAWS/VoiceOver on desktop; custom gestures must not break
  their navigation.

## 8. Only when needed

| Product | Rich shortcuts and context menus? | Rich gestures? | Motion |
| --- | --- | --- | --- |
| Marketing site, simple form | No | Basic (carousels, zoom) | A few purposeful moments |
| Content site, blog | No (maybe search shortcut) | Basic | Minimal |
| SaaS dashboard used daily | Yes, for frequent actions | Mobile list actions | Fast, functional |
| Editor, design tool, IDE | Essential | Pinch, pan, multi-touch on tablet | Fast; direct manipulation |
| Mobile consumer app | Tablet keyboard support | Yes, native gestures | Fluid, spatial, interruptible |
| Desktop productivity app | Essential, per platform | Touchpad gestures | Minimal and fast |
| Game | Per genre and controller | Per genre | Per genre |

Adding a command palette, gestures or animations "because good apps have them" is the same mistake as adding
gradients because other sites have them.

## Worked comparison

**Brief:** a project management tool, web, used daily by teams on laptops and occasionally on phones.

**Weak:** a desktop layout that collapses into a hamburger menu below 1024 px; hover-only row actions; a custom
right-click handler that only reacts to the right mouse button; drag-only reordering; a bouncy modal entrance on
every task open; "Ctrl+K" shown to Mac users.

**Strong:** layouts from 360 px to 1920 px with a list-and-detail split from 900 px; row actions visible on touch and
in a "⋯" menu, also on right-click and two-finger tap; reordering by drag with auto-scroll plus "Move up/down"
items; Cmd/Ctrl+K palette and J/K navigation shown in menus with platform-correct labels; task details open in
150 ms without bounce; on phones, swipe actions on tasks with visible alternatives.

## Common mistakes

- Designing two breakpoints and ignoring tablets and small laptops.
- Hover-only actions.
- Context menus that only work with a physical right button.
- Shortcuts nobody can discover, or that override the browser.
- Phone layouts stretched onto tablets.
- Mobile transitions that cut instead of showing where things go.
- Long, decorative animations in desktop tools.
- Shortcuts, gestures and palettes added to products that do not need them.

## Checklist

- [ ] Platform(s), devices and input methods identified with evidence, or asked.
- [ ] Web: works from 320 px to large screens, including tablet and small-laptop widths.
- [ ] Nothing essential depends on hover; targets fit coarse pointers.
- [ ] Mouse and touchpad parity: right-click, scrolling, zoom, drag alternatives.
- [ ] Mobile: native gestures respected, motion continuous and interruptible, tablet layouts add utility.
- [ ] Desktop: platform conventions, correct modifier labels, fast motion, menus with shortcuts.
- [ ] Shortcuts and gestures only where repeated use justifies them, discoverable and accessible.
