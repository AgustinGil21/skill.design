---
type: "llm"
focus: "trace"
weight: 2
---

The project situation: SwiftUI notes app (minimum iOS 26) with a custom opaque navigation bar and tab bar in brand teal

PASS if the agent's behavior and output show this: Checks the current Liquid Glass guidance; replaces custom bars with system `NavigationStack`, toolbar and `TabView` so they adopt the material; keeps the brand in tint and content; mentions legibility, accessibility settings and the icon's appearances

FAIL if it is missing or only superficial. Judge behavior and output, not wording.
