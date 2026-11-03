# Workflow: design in a design tool (Figma and similar)

For when the person wants the design in a design file — to explore, review with a team, hand off, or keep as the
source of truth — and a tool that can write design files is available (the Figma MCP server, or another canvas tool
such as Pencil). Teams at large companies make most visual decisions in the design file before code; this workflow
makes those files as rigorous as the code would be.

If no tool can write design files, say so and offer a coded demo instead (`workflows/prototype.md`). Reading an
existing file to build code is covered in `knowledge/34-references-and-design-tools.md`.

## 0. Before touching the canvas

- **Load the tool's own instructions first.** Each tool has rules: for Figma, load its skills before calling it
  (`/figma-use` before writing, `/figma-generate-design` for screens, `/figma-generate-library` for a design system,
  `/figma-design-to-code` before reading a design into code) and start a session for the file. Follow them; they
  change with the tool.
- **Context and slop**: `DESIGN-CONTEXT.md` or `workflows/start.md`; the slop core list (`knowledge/slop/README.md`).
- **Find the system**: search the file's and the team's libraries for existing components, variables and styles, and
  reuse them. A design file built from detached shapes is the canvas equivalent of raw hex values in code.

## 1. System first (when there is none)

If the person wants a system or the file has none, build it before screens, following `workflows/design-system.md`:

- **Variables** for color (primitive and semantic collections, with light and dark modes), spacing, radius and
  sizing; **text styles** for the type scale; **effect styles** for elevation.
- **Components** with **variants and properties** (size, tone, state: default, hover, pressed, focus, disabled,
  loading), auto layout, and names that match the code components.
- A **foundations page** showing the tokens, checked for contrast.

## 2. Screens

- **Frames at real device sizes** (phone, tablet, desktop) with layout grids; **auto layout** everywhere so content
  can change length; constraints that behave when resized.
- **Real content** (or `[data: …]`), long names and the longest locale; never lorem ipsum.
- **Every state** as its own frame or variant: empty, loading, error, partial, no permission, success
  (`templates/states-table.md`).
- **Components and variables only**: no detached instances, no raw colors or one-off text styles.
- **Name layers and frames** so a developer or an agent can navigate the file ("Checkout / Payment / Error — card
  declined").
## 3. Prototype: states, interactions and motion

A static screen hides most of the design. Show how the interface responds: a button that presses, a screen that
changes state, a sheet that slides up, a list that updates. Build the prototype in the file for the flows that need
to be tested, presented or handed off.

**Interactive components (states inside a component).**

- Give each component its interaction variants (default, hover, pressed, focus, disabled, loading, selected, open and
  closed) and wire them inside the component: *while hovering* → hover, *while pressing* → pressed, *on click* →
  change to the next variant (a toggle that switches, a checkbox that checks, an accordion that opens, a button that
  goes to loading and then success).
- Every instance in every screen inherits the behavior, so screens become interactive without extra wiring.

**Screen-to-screen flows.**

- Connect frames with the trigger people actually use: *on tap/click* for buttons, *on drag* for swipes and sheets,
  *key press* for shortcuts, *after delay* for automatic transitions (a loading state that resolves).
- Use **overlays** for dialogs, menus, sheets and toasts (position, background dimming, close on outside click), not
  copies of the whole screen.
- Set **scroll behavior**: what scrolls, what stays fixed (headers, tab bars, action bars), horizontal carousels.
- Name a **flow starting point** for each journey ("Checkout — happy path", "Checkout — card declined") so reviewers
  open the right one.

**State changes with variables and logic** (when the tool supports them).

- Use variables for state that changes across screens (items in a cart, a selected plan, signed in or not), set them
  on interaction, and show or hide content from them, instead of duplicating frames for every combination.
- Conditional logic for branches that matter to the review (a coupon that is valid or not, a payment that succeeds
  or fails), so one prototype can show both paths.

**Motion.**

- **Animate between states with matching layers** (smart animate or the tool's equivalent): keep layer names and
  structure identical across the two states so elements move, resize and fade instead of jumping.
- **Timing and easing from the system's motion tokens**: short and decelerating for interface changes, exits faster
  than entrances; no bounce or overshoot presets unless the person asks for them (`knowledge/landing/06-motion.md`,
  `knowledge/37-animation-techniques.md`).
- **Directional transitions** that explain space: push or slide for hierarchy (forward and back), move in from the
  edge for sheets, dissolve for state changes in place.
- **Annotate what the prototype cannot show**: reduced-motion behavior, interruption, real loading times, focus
  movement for keyboard and screen-reader users.
- If the tool can export video or animated previews of a flow, use them to share motion with people who will not open
  the prototype, and record the key flows for the handoff.

**Check it like a user.** Play every flow from its starting point on the real device size (the tool's mirror app on
a phone for mobile designs), tap every hotspot, try the back path, and fix dead ends and missing states.

## 4. Review in the file

- Take screenshots of the frames and look at them (the tool's screenshot function), then run the craft pass
  (`knowledge/polish.md`) and the slop area files.
- Check contrast of every text and control pair with `node scripts/contrast.mjs`.
- Leave annotations for behavior that a static frame cannot show (motion, keyboard, focus order, edge cases).

## 5. Handoff to code

- Share the prototype flows (starting points and any exported videos) with the states and motion they demonstrate,
  so engineering builds the behavior, not only the screens.
- Map file components to code components (Code Connect or the tool's equivalent) when the team uses it.
- Variables exported to the token pipeline (`knowledge/design-system/05-tooling-design-to-code.md`), never retyped.
- A handoff note: flows, states, responsive behavior, motion, accessibility notes and open questions
  (`knowledge/27-design-handoff-and-engineering.md`).
- When building from the file, read it with the tool's design-to-code instructions and adapt it to the project's
  components and tokens (`cards/code.md`); the file is intent, not code to copy.

## Report

The file and pages created or changed (with links), the components and variables used or created, the states covered,
the prototype flows and their starting points, the interactions and transitions built,
what was checked (screenshots, contrast, craft pass), annotations left, and what still needs a decision.
