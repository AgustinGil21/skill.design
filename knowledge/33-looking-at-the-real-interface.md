# Looking at the real interface

Code tells you what was intended; the screen tells you what people get. A senior designer does not review a
product only by reading components: they open it, on a phone and on a large screen, in light and dark, with real
data, and they look. Many of the problems that matter most — hierarchy, rhythm, crowding, contrast over images,
truncation, broken layouts in another language — are invisible in code and obvious on screen.

This file covers how to get to the real interface, what to look for, and what a screenshot can and cannot prove.

## Getting to the real interface

From least to most effort:

| Source | Good for | Limits |
| --- | --- | --- |
| Screenshots the person provides | Fast; shows their real data and context | Only the states they captured; no interaction |
| `node scripts/screenshots.mjs <urls>` | Phone and desktop, light and dark, reduced motion, repeatable | Needs the app running and Playwright or an installed Chrome |
| A browser tool (Claude in Chrome, the built-in browser) | Interaction: click, type, open menus, follow flows | Slower; one view at a time |
| Figma or design files (through a Figma tool, if available) | The intended design, before or beside the code | May differ from what was built |
| Running the app yourself | Everything | Needs the project's own start command; ask before starting servers or installing anything |

Rules:

- **Use the project's own way of running** (its scripts, its package manager). Do not install dependencies or start
  long-running servers without saying so; ask when in doubt.
- **Use realistic data**: an empty development database shows only empty states. Seed data, a staging URL or the
  person's screenshots show the product as people see it.
- **Never log in with real credentials you were not given**, and never capture other people's personal data into
  files that leave the machine.

### Using the screenshot script

```bash
node <skill>/scripts/screenshots.mjs http://localhost:3000/ http://localhost:3000/settings \
  --viewports mobile,desktop --schemes light,dark --out design-screenshots
```

It uses the project's Playwright (`playwright` or `playwright-core`); if no Playwright browser is downloaded, it uses
the Chrome or Edge already installed. Without Playwright it explains the alternatives and exits with code 2. Pages
behind a login need a session: capture public pages with the script, and authenticated ones with a browser tool or
the person's screenshots. Agents can read the resulting images.

## How to look

### 1. The first five seconds

Look at the screen as someone arriving for the first time:

- What do you see first, second, third? Is that the right order for the person's task?
- Is it clear what this screen is and what to do?
- Where does the eye rest? If nowhere, nothing leads.

The **squint test**: blur your vision (or the image). The shapes that remain are the real hierarchy. If the primary
action disappears and a decorative element remains, the hierarchy is wrong.

### 2. Structure and rhythm

- **Alignment**: do edges line up on a few vertical lines, or does every block start somewhere different?
- **Spacing**: is there a rhythm (related things close, groups separated), or is spacing uniform everywhere?
- **Density**: does it match the audience and task (see [product domains and tone](30-product-domains-and-tone.md))?
- **Grouping**: can you see the groups without borders and boxes?

### 3. Typography

- How many sizes and weights are visible? More than five or six usually means no system.
- Line length in text blocks; line height; contrast between headings and body.
- Truncation: are names, titles or numbers cut off? Where does text wrap badly?

### 4. Color

- Proportion: is the lead color reserved for what matters, or spread everywhere?
- Do functional colors (error, success) stay distinct from the brand color?
- Contrast of small and muted text, placeholder text, disabled states, text over images.
- Dark mode: designed or inverted? Do images, logos, charts and shadows still work?

### 5. Components and consistency

- Do the same things look the same across screens (buttons, inputs, cards, tables)?
- Are there several styles of the same component (three button shapes, two icon sets)?
- Are icons clear without labels? Are touch targets large enough on the phone?

### 6. States and real data

Look for the states, not just the happy path: empty, loading, error, long content, many items, one item, no
permission. If you cannot see them on screen, check the code or ask, and say which states were seen and which were
not.

### 7. Responsive behavior

Compare phone and desktop side by side:

- Does the phone version reorganize, or just shrink?
- Is the primary action reachable without scrolling far?
- Do tables, charts and wide content have a mobile strategy?
- Is anything hidden on mobile that people still need?

### 8. Accessibility you can see

- Focus indicators (tab through with a browser tool).
- Text at 200 % zoom and at 320 px width.
- Information carried by color alone.
- Motion with reduced motion turned on (the script captures with reduced motion by default).

Seeing is not enough for accessibility: names, roles and announcements need the code and assistive technology (see
[accessibility](02-accessibility.md)).

### 9. Brand and tone on screen

Does the interface look and sound like the product's audience and stakes? A brand that is coherent in tokens can still
feel inconsistent on screen when spacing, imagery or copy drift.

## What a screenshot can and cannot prove

| A screenshot can show | A screenshot cannot show |
| --- | --- |
| Hierarchy, layout, spacing, density | Keyboard behavior, focus order, screen reader output |
| Color proportion, visible contrast | Exact contrast values (measure with `scripts/contrast.mjs`) |
| Truncation and overflow with this data | Behavior with other data, languages or sizes |
| The state it captured | Other states, transitions, timing, errors |
| What it looks like on this device | Performance, responsiveness to input |

State in every review which findings come from screens, which from code, and which are predictions.

## Annotating findings

When reporting, point to the exact place: the screenshot file and the area ("02-settings-mobile-light.png, top
right: the save button is below the fold"). Pair each visual finding with the code location that causes it when you
can find it, so the fix is concrete.

## Comparing before and after

After a change, capture the same URLs with the same settings and compare them side by side. A fix that improves one
viewport often breaks another; the second set of screenshots catches it.

## Common mistakes

- Reviewing a product only through its code.
- Looking only at the desktop, or only at light mode.
- Judging with an empty database.
- Treating a screenshot as proof of accessibility.
- Starting servers or installing tools without asking.

## Checklist

- [ ] The real interface was seen (screenshots, browser or design files), or the review says it was not.
- [ ] Phone and desktop, light and dark, with realistic data.
- [ ] First-impression hierarchy, rhythm, type, color, consistency, states and responsive behavior reviewed.
- [ ] Visual findings point to a screenshot area and, when possible, to the code.
- [ ] What screenshots cannot prove was checked another way or listed as not verified.
