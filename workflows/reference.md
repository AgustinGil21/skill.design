# Workflow: study a reference site or page

When the person shares a link ("this is the original page: …, also look here: …/…, …/…"), study it the way a senior
designer studies a reference: see all of it, on desktop and phone, scroll to the end, take it apart section by
section, and work out **why** it was designed that way — then say what to take from it and what not.

Read [RESEARCH-GUIDE.md](../RESEARCH-GUIDE.md) section 3 (understanding the designer) and
`knowledge/34-references-and-design-tools.md`. Use `templates/reference-report.md` for the output.

## 1. Capture everything

```bash
node scripts/reference-capture.mjs <url> [more urls] --out design-references [--viewports desktop,mobile] [--follow N]
```

- Pass **every URL the person mentioned**: the main page and the extra paths.
- `--follow N` adds up to N same-site links found on the first page (for "look around, there is more").
- The script scrolls each page to the end (so lazy content loads and scroll animations run), captures it slice by
  slice on each viewport, dismisses an obvious cookie banner, and writes `report.md` with sections, headings, copy,
  calls to action, navigation, typography, colors, background layers, videos and motion libraries.
- It needs Chrome, Chromium or Edge and Node 22+, and permission to launch a browser (sandboxed agents may not have
  it). Otherwise use a browser tool: scroll the page to the end, capture each screen on desktop and phone widths,
  and run the contents of `scripts/lib/page-inventory.js` in the page to get the same inventory (sections, headings,
  CTAs, typography, colors, motion) as JSON. As a last resort, ask the person for screenshots — and say what was
  missing.
- Pages behind logins, age gates or heavy bot protection may need a browser tool and the person's help.
- For the person's **own** product, prefer `scripts/screenshots.mjs` on the running app; this workflow is for
  references.

For several sites or long pages, delegate each site to a `reference-analyst` agent in parallel, passing the skill
folder, the URLs, the person's goal and the capture folder.

## 2. Look before reading the numbers

Read the slices **in order**, desktop first, then phone:

- What is the first impression in five seconds? What do you see first, second, third?
- What is the idea that organizes the page (a concept, a story, a product demo, a catalog)?
- How does the page move from one section to the next: rhythm, contrast changes, scale changes, pinned sequences?
- What happens on the phone: reorganized or shrunk? What was cut?

Screenshots are still frames: motion, video and scroll-driven sequences must be inferred from the capture report
(layers, videos, canvases, libraries such as GSAP or Lenis) and, when it matters, checked with a browser tool.

## 3. Take it apart

For each section (the report lists them with their slice):

| Ask | Example |
| --- | --- |
| What job does this section do for the visitor? | "Confirms the date and platforms before anything else" |
| What is the evidence or emotion it relies on? | "Key art and trailers carry the desire; copy is minimal" |
| How is it built? | "Full-bleed key art, centered CTA, date and platforms in the corners" |
| What does it cost? | "Heavy media; little information for people who want details" |

Then the system: typography (families, weights, case, tracking), color (palette, how it changes by section), shape
(radii, cards), imagery, motion (what moves, when, how fast), navigation (hidden menu? sticky CTA?), copy voice.

## 4. Understand the designer

Use the questions in [RESEARCH-GUIDE.md](../RESEARCH-GUIDE.md): audience, stakes, priority, what was given up,
constraints, convention vs. deliberate difference. Write the reasoning as hypotheses ("the menu is hidden because the
page is a single story and the only action that matters is pre-ordering").

## 5. Translate to the person's project

The reference is not the brief. Compare it with the person's design context:

- **Take**: principles that fit their product (pacing, how proof is shown, a navigation choice), with the reason.
- **Adapt**: ideas that need changes for their audience, platform, budget or brand.
- **Do not take**: what only works for that brand or budget (custom typefaces, cinematic video, years of franchise
  equity), and what would hurt their users (hidden navigation for a tool, autoplay video on mobile data).
- **Never copy** the look, assets, copy or trade dress of the reference.

## 6. Deliver

Write the report with `templates/reference-report.md`, citing slices (`desktop-07.jpg`) for every observation. Offer
the next step: directions inspired by it (`workflows/ideate.md`), a demo (`workflows/prototype.md`), or applying
specific principles to a screen.

## Common mistakes

- Looking only at the first screen.
- Describing the reference instead of explaining it.
- Copying its look into a product with a different audience.
- Treating screenshots as proof of motion or interaction.
- Forgetting the phone version.
