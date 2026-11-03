# Native and cross-platform apps

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: native toolchains and platform requirements.

The engineering rules of this folder, applied to iOS, Android and cross-platform apps. The same principles hold —
small components configured by parameters, tokens, tests at the right level, current tooling, the person choosing the
stack — but each platform has its own idioms, and code that fights them feels wrong to people even when it looks
right.

Read the platform's current documentation and the project's minimum OS versions before writing code; native APIs
change every year ([platform design languages](../40-platform-design-languages.md)).

## Choosing the approach (the person decides)

| Approach | Strengths | Costs | Leans toward |
| --- | --- | --- | --- |
| **SwiftUI** (iOS, iPadOS, macOS, watchOS, visionOS) | First access to platform features and the current design language; declarative; previews | Apple only; some older APIs still need UIKit/AppKit | Apple-first products, platform-heavy features |
| **Jetpack Compose** (Android) | Modern Android UI, Material 3 Expressive components, Kotlin | Android only | Android-first products |
| **Kotlin Multiplatform** (shared logic, optionally Compose Multiplatform UI) | Share business logic, keep native UIs | Two UI codebases unless sharing UI too | Teams that want native UI with shared logic |
| **React Native with Expo** | One codebase for iOS and Android with React skills; over-the-air updates; the New Architecture | Platform-specific polish needs native modules or careful components | Product teams with web React experience |
| **Flutter** | One codebase, consistent rendering, strong tooling | Custom-drawn widgets must be made to feel native (Cupertino vs Material); larger binaries | Brand-heavy apps that accept a custom look |

## Architecture

- **Unidirectional data flow**: state in a view model or store, views render state and send events. SwiftUI with
  `@Observable` models; Compose with `ViewModel` and `StateFlow`; React Native with the same state rules as React
  ([architecture](01-architecture-and-patterns.md)); Flutter with a chosen state approach (Riverpod, Bloc) used
  consistently.
- **Navigation as state**: `NavigationStack` with typed paths, Navigation Compose with type-safe routes, Expo Router
  (file-based) or React Navigation; deep links handled through the same routes.
- **Offline and lifecycle**: apps are suspended and killed; persist drafts, restore state, handle background refresh
  and reconnection ([tracking and offline](../patterns/tracking-and-offline.md)).
- **Modules by feature**, shared design-system module with tokens and components.

## Design system in native code

- **Tokens in the platform's mechanism**: SwiftUI asset catalog colors (with dark and high-contrast variants),
  environment values and custom `ShapeStyle`s; Compose `MaterialTheme` with a custom color scheme, typography and
  shapes, plus `CompositionLocal` for extra tokens; React Native a theme object (generated from the same token source
  as the web); Flutter `ThemeData` and `ThemeExtension`.
- **One token source** for web and native when the product has both (a token pipeline that outputs CSS, Swift, Kotlin
  and JSON; [design-system tooling](../design-system/05-tooling-design-to-code.md)).
- **Components configured by parameters**, previews for every variant and state (SwiftUI previews, Compose
  `@Preview`, Storybook for React Native).

## Platform behaviors to get right

- **Dynamic Type and font scaling**: text styles, not fixed sizes; layouts that reflow at the largest sizes.
- **Accessibility APIs**: SwiftUI accessibility modifiers (labels, traits, actions, rotors); Compose semantics;
  React Native `accessibilityLabel`/`role`/`accessibilityActions`; test with VoiceOver and TalkBack.
- **Safe areas and insets**: SwiftUI safe areas; Android edge-to-edge with `WindowInsets` (required from Android 16).
- **Haptics** through the platform's feedback APIs, consistent and optional ([sound and haptics](../44-sound-and-haptics.md)).
- **Motion**: system springs and transitions, respecting Reduce Motion / remove animations settings.
- **Keyboard and pointer on tablets**, hardware keyboard shortcuts, iPad multitasking sizes, Android large screens and
  foldables.
- **Permissions** requested in context with a reason ([mobile](../patterns/mobile.md)).
- **Localization**: string catalogs (Xcode), Android resources with plurals, i18n libraries in React Native and Flutter;
  right-to-left layouts mirrored.

## Looking at the result

Capture the running app like web work: `node scripts/native-screenshots.mjs --platform ios|android --large-text`
(light, dark and large text), and compare before and after with `node scripts/visual-diff.mjs`.

## Testing

| Level | iOS | Android | React Native | Flutter |
| --- | --- | --- | --- | --- |
| Unit | Swift Testing / XCTest | JUnit, Kotlin test | Jest or Vitest (logic) | `flutter_test` |
| Component / UI | SwiftUI previews, snapshot tests, XCUITest | Compose UI tests, screenshot tests (Roborazzi, Paparazzi) | React Native Testing Library | Widget tests, golden tests |
| End to end | XCUITest | Espresso / UI Automator | Maestro or Detox | `integration_test`, Maestro |

Query by accessibility labels and roles where the framework allows; screenshot tests for each design-system component
in light, dark and large text.

## Tooling and supply chain

- Pin the toolchain (Xcode version, Gradle and AGP versions, Node and Expo SDK, Flutter version) in the repository.
- Dependencies pinned to exact versions (Swift Package Manager exact or `.upToNextMinor` only with review; Gradle
  version catalogs; npm rules for React Native; `pubspec.lock` committed).
- Linters and formatters: SwiftLint/swift-format, ktlint or Detekt, the JS tooling for React Native, `dart format` and
  analyzer rules.
- Signing keys and API secrets never in the repository; server-side for anything secret.
- Crash reporting and performance monitoring from the first beta ([production readiness](11-production-readiness.md)).

## Performance

- Lists virtualized (`List`/`LazyVStack`, `LazyColumn`, `FlashList`/`FlatList`, `ListView.builder`); stable keys.
- Images decoded at display size; caches.
- Startup: defer non-essential work; measure cold start on low-end devices.
- Avoid re-render storms: stable state, derived values, the React Compiler in React Native.

## Worked comparison

**Situation:** a React Native orders app adds an order detail screen.

**Weak.** Fixed font sizes, colors written inline, a custom header that ignores safe areas, `ScrollView` with 500 rows,
no accessibility labels on icon buttons, and a tap target of 28 points.

**Strong.** Text styles from the theme that scale with the system setting; colors from the token theme with dark
variants; the platform's header with safe-area handling; `FlashList` for the rows; `accessibilityLabel` and `role`
on icon buttons; 44-point targets. Screenshots captured with `scripts/native-screenshots.mjs --large-text` show the
layout reflowing at the largest text size.

## Checklist

- [ ] The person chose the approach; minimum OS versions known; current platform docs checked.
- [ ] Unidirectional state; navigation as state; lifecycle and offline handled.
- [ ] Tokens in the platform's mechanism, from one source; components with previews per variant and state.
- [ ] Dynamic Type, accessibility APIs, safe areas and insets, reduced motion handled.
- [ ] Tests at each level, including screenshot tests for the design system.
- [ ] Toolchain and dependencies pinned; no secrets in the app.
