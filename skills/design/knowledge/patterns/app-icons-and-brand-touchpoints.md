# App icons and brand touchpoints

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: icon formats and platform requirements.

The small surfaces where a product meets people outside its own screens: app icons, favicons, launch screens,
social preview images, store listings, widgets and notification content. They are seen more often than most screens
and are almost always generated at the last minute — a letter in a gradient square, a blurry favicon, a link preview
with no image.

See also [brand and identity](../11-brand-and-identity.md), [platform design languages](../40-platform-design-languages.md)
and [notifications](notifications.md).

## Questions to ask before deciding

- **Which surfaces exist**: iOS, Android, macOS, Windows, web (favicon, PWA install), social shares, app stores,
  widgets, watch complications, email avatars?
- **What is the brand's mark**, and does it survive at 16 px, in one color, and on dark backgrounds?
- **Which appearances** must the icon support (light, dark, tinted, clear) on the current OS versions?

## App icons

- **One idea, recognizable at a glance**, at small sizes and among many other icons. A distinctive shape or symbol
  beats a wordmark; letters work only when the letterform is distinctive.
- **Apple (iOS 26 and later)**: icons are layered (foreground layers over a background) and rendered by the system in
  several appearances: default, dark, clear and tinted, in light and dark variants. Author them with Icon Composer as
  a single `.icon` file; check every appearance — a mark that relies on color alone disappears in clear and tinted
  modes. Follow the current HIG for sizes and safe zones.
- **Android**: adaptive icons (foreground and background layers, masked by the device into different shapes) and a
  **monochrome layer** for themed icons; keep the mark inside the safe zone so masks do not cut it.
- **macOS and Windows**: follow each platform's shape and perspective conventions; provide all sizes, and check them at
  16 and 32 px.
- **Do not**: a letter in a gradient rounded square, a screenshot of the app, text that becomes unreadable, a different
  mark per platform without a reason, the AI sparkle as identity.

## Favicons and web app icons

- An SVG favicon (it can adapt to dark mode with a `prefers-color-scheme` media query inside it), a 32 px PNG or ICO
  fallback, a 180 px Apple touch icon, and a web app manifest with 192 and 512 px icons (including a maskable one) for
  installable sites.
- Test it in a tab bar at 16 px, in light and dark browser themes, and pinned.

## Launch and splash screens

- Their job is to make start-up feel instant, not to advertise. Apple's guidance is to make the launch screen look like
  the first screen of the app (without text or content that changes); Android 12+ uses a system splash with the icon
  on a background color.
- No logos animating for seconds, no loading spinners before the first screen if content can load in place.

## Social preview images (Open Graph and similar)

- Every shareable page has a title, a description and an image (`og:title`, `og:description`, `og:image`, plus the
  equivalents some networks read), at the recommended size (commonly 1200×630) with the key content centered so crops
  do not cut it.
- **Generate them per page** from a template (title, author, product shot) rather than one generic image; text large
  enough to read in a feed; brand consistent.
- Check them with each network's preview tool; long titles in other languages wrap.

## Store listings

- Screenshots that show real screens doing real tasks, with short captions that say the benefit; the first two do most
  of the work. Localized per market. No fake reviews or awards.
- The icon and the first screenshot must agree with what the app actually looks like.

## Widgets, complications, live activities and notifications

- **Widgets** show one glanceable piece of information and one action; they follow the platform's sizes, margins and
  tinting modes (including clear and tinted on Apple platforms); they update honestly (with a timestamp when data can
  be stale).
- **Notification content**: the title says what happened, the body the key fact, actions name their outcome; images
  only when they add information; grouped by thread; respectful of quiet hours
  ([notifications](notifications.md)).
- **Live activities and ongoing notifications** for processes people are waiting on (a delivery, a ride, a match),
  ended when the process ends ([tracking and offline](tracking-and-offline.md)).

## Accessibility specifics

- Icons and images in touchpoints have names (app names, `alt` for social images where the platform supports it).
- Widget and notification text respects the system's text size; contrast in every appearance.

## Common mistakes

- Generated icons that look like every other generated icon.
- One social image for the whole site.
- Favicons that are unreadable at 16 px or invisible in dark tabs.
- Icons tested only in the default appearance.
- Launch screens used as brand moments that delay the app.

## Worked comparison

**Situation:** a meditation app prepares its launch.

**Weak.** The icon is a lotus in a purple-to-pink gradient; in tinted mode it becomes a grey blob. The site uses one
social image for every page, the favicon is a 512 px PNG scaled down, and the launch screen shows an animated logo for
two seconds.

**Strong.** The icon is a simple, distinctive shape built in layers, with a mono version that reads in clear and tinted
modes and on Android themed icons. Each page generates its own social image with the title. An SVG favicon adapts to
dark tabs. The launch screen mirrors the first screen so the app feels instant.

## Checklist

- [ ] The mark works at 16 px, in one color, on dark, and in every OS appearance.
- [ ] Platform icon formats complete (layered Apple icon, adaptive and monochrome Android icon, favicons, manifest).
- [ ] Launch screen mirrors the first screen; no artificial delay.
- [ ] Every shareable page has its own title, description and preview image, checked in preview tools.
- [ ] Store screenshots are real, localized and honest.
- [ ] Widgets and notifications are glanceable, honest about freshness, and follow platform tinting and sizes.
