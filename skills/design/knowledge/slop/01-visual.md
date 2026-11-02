# Slop catalog: visual

Color, surfaces, layout, typography, icons and imagery. Read with the [catalog rules](README.md): every item is banned by
default, and keeping one needs a stated reason tied to evidence.

Background: [color](../10-color.md) · [typography](../09-typography.md) · [composition](../17-composition-and-layout.md) ·
[imagery and icons](../19-imagery-icons-and-illustration.md).

## Color

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Purple-to-blue, violet-to-pink or indigo-to-cyan gradient as background, button or border | It is the default of generators and template kits; it says "AI startup", not this product | Start from the brand's real colors; if there is no brand, choose a palette from the product's world and audience and say why |
| Gradient applied to text (`bg-clip-text`) on the main headline | The most recognizable "generated landing" signature; it also lowers contrast and legibility | Solid text color; emphasis through weight, size or a single word in the accent color |
| Gradient on every primary button | Decoration where a clear action is needed; gradients fight with hover and focus states | A solid accent with clear hover, pressed, focus and disabled states |
| Blurred color blobs ("orbs", "auras") behind the hero or cards | Fills empty space with mood instead of content; signals no idea for the section | Real content (the product, a real photo, a diagram that explains); or calm empty space |
| Grain or noise overlay on every surface | A trend default that adds weight and reduces contrast for no message | Use texture only when the brand has a physical, printed or crafted identity |
| Neon accent on near-black (`#0a0a0a` + electric green, cyan or violet) | The "dev tool / crypto / AI" costume; reads as copied from a template | Decide whether dark is right for the audience; pick an accent with meaning and contrast in both themes |
| Five or more saturated accents on one screen | No hierarchy; every color shouts | One accent for action, functional colors for states, neutrals for the rest |
| Library default blue (`#3b82f6`, `blue-500/600`) as the brand | Nobody chose it; it collides with link and focus conventions | Choose the primary from the brand; if it stays blue, choose the specific blue and check it against links and focus |
| Shadcn/Radix grey neutrals (`zinc`, `slate`, `neutral`) untouched | Every generated app shares the same temperature and steps | Tint neutrals slightly toward the brand hue; set the steps for this product's density |
| Pure black text on pure white everywhere, or the reverse in dark mode | Harsh, no thought about reading comfort | Near-black and near-white from a defined neutral scale with checked contrast |
| Low-contrast grey body text (`text-gray-400` on white) for "elegance" | Fails contrast; reads as a template trying to look refined | Body text at AA at least (4.5:1); reduce emphasis with size or weight, not with faint grey |
| Pastel everything for "friendly" | Reduces contrast and hierarchy; treats every audience the same | Friendliness through copy, shapes and illustration; keep text and controls contrasted |
| Colored tinted squares behind every icon (`bg-blue-50` + blue icon) | The feature-card cliché; adds a decorative layer to every item | Icons only where they help scanning, in the text color; or no icons |
| Success green, warning amber and error red used as decoration | Semantic colors lose meaning when they decorate | Reserve semantic colors for states; decorate (if at all) with brand colors |
| Red for an important but not destructive action | People read red as danger or error | Red only for destructive or error; important actions use the primary |
| Status shown by color dot alone | Fails color-blind people and screen readers | Color plus a label or icon ("Paid", "Overdue") |
| Brand color on large surfaces at full saturation | Tiring; hides content | Saturated color in small areas (actions, highlights); calmer tints for surfaces |
| A different accent per section of a landing page | Looks like assembled blocks from different templates | One accent system for the whole page |
| "Glassmorphism": frosted translucent panels with white borders over blobs | Generated-premium look; contrast depends on what is behind | Opaque surfaces with clear elevation; translucency only where the platform uses it (system bars, sheets) |
| Glowing borders or `box-shadow` halos in the accent color | The "AI glow"; decoration that suggests importance everywhere | Elevation from the system's shadow scale, or a plain border |
| Dark mode made by inverting the light palette | Wrong contrast, saturated colors vibrate on dark | Design dark tokens: lower saturation, lighter elevated surfaces, rechecked contrast |
| Charts in rainbow categorical colors | No meaning in the order; color-blind collisions | A validated categorical palette, or one hue and grey for "the rest" |

## Surfaces, depth and shape

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Everything inside a card: sections, lists, single numbers, even headings | Cards are the generator's only container; nothing is grouped by meaning | Group with space and alignment first; use a card only for a self-contained object that can be acted on |
| Cards inside cards inside cards | No hierarchy of containers; nested borders | One level of containment; flatten inner groups with spacing and dividers |
| `rounded-2xl` / `rounded-3xl` on every element | Maximum rounding is the default "friendly" style; it removes character | One radius scale from the brand (sharp, medium or soft), applied by component size |
| Pills for everything (buttons, inputs, tags, tabs) | One shape for all roles erases the difference between action, input and label | Different shapes for different roles, from the system |
| 1px light border plus soft shadow on every card | Both ways of separating at once; the shadcn card look | Choose one: border, shadow, or background shift |
| Huge diffuse shadows (`shadow-2xl`) on flat UI | Floating everything; fake depth | A small elevation scale with a reason for each level |
| Equal padding everywhere (`p-6` on all) | No rhythm; dense and sparse content look the same | A spacing scale applied by relationship (tight inside groups, wider between) |
| Decorative dividers between every section | Filler; the space already separates | Remove; use space and headings |
| Floating, sticky "island" nav bar with blur and pill shape on every site | Copied trend; often covers content and fights with the browser bar on mobile | A nav designed for the site's depth and the device; sticky only when navigation is needed mid-page |
| Rounded image corners plus border plus shadow plus tilt | Stacked decoration on a screenshot | Show the image plainly, at a size where details are readable |
| Fake browser chrome or phone frame around every screenshot | Decoration that shrinks the actual product | Crop to the part that matters; use device frames only when the device is the point |

## Layout and composition

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Everything centered: headings, paragraphs, lists, forms | No entry point; long centered text is hard to read | Left-align reading content (start-align in right-to-left); center only short single messages |
| Every section has the same structure: eyebrow, H2, grey subhead, grid | Assembly of blocks; the page has no rhythm or argument | Vary structure by what each section must prove; some sections are a sentence, some a table, some an image |
| Symmetrical three-column grids for any number of items | Content forced into a grid; the fourth item goes on a lonely row | Choose the layout by the content: a list, a table, a two-column comparison, a single example |
| Bento grid with mismatched card sizes for features | Trend layout used without a reason for the sizes | Sizes follow importance; or use a plain list when items are equal |
| Huge vertical padding between every section (`py-32`) | Fills screen height; makes the page long and empty | Space according to the relationship between sections |
| Max-width container with lots of empty margins on desktop and cramped on mobile | One breakpoint thinking | Layouts designed for phone, tablet, laptop and large screens |
| Hero that fills 100vh with nothing below the fold hint | The visitor does not know there is more; content hidden | Let the next section peek; size the hero by its content |
| Alternating zig-zag image/text rows for every feature | Template rhythm; images are often placeholders | Choose by content; a zig-zag only when each row has a real, specific image |
| Sidebar plus top bar plus breadcrumbs plus tabs for a three-page app | Enterprise shell for a small product | Navigation sized to the number of destinations |
| Dashboard of four KPI cards on top, chart below, table at the bottom | The default admin template, whatever the job | Start from the decision the person makes on this screen; lead with that |
| Decorative grid or dot pattern background | Generated "technical" texture | Plain surface; or a pattern from the brand's world |
| Content-free "hero image" area holding a 3D blob or abstract shape | Nothing to show, so a shape | Show the product, a real outcome, or remove the visual |

## Typography

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Inter (or Geist, Roboto, system UI) because it was the default | Not wrong, but undecided; the same as every generated app | Choose the typeface for the product's voice and reading needs; if Inter stays, say why and tune weights, sizes and features |
| One weight for everything, or only regular and bold | Flat hierarchy | Two to four weights with roles (body, emphasis, headings, numbers) |
| Every heading in the same size, tight tracking and `font-semibold` | No scale; display text treated like UI text | A type scale with clear steps; tracking adjusted by size |
| Giant hero headline (80–120px) with tight negative tracking for a simple message | "Bold" by default; wraps badly in other languages | Size from the message length and the layout; test long translations |
| Serif display font plus sans body "for elegance" with no brand reason | The next house style; every "premium" template does it | A pairing chosen from the brand, or one family with strong weights |
| Monospace for labels, eyebrows and numbers to look "technical" | Costume; monospace is for code and identifiers | Monospace only for code, IDs and values people copy; tabular numerals for numbers |
| ALL-CAPS eyebrow above every heading ("FEATURES", "PRICING") | Template scaffolding; adds a line that says nothing | Remove it, or make it carry information (a step, a category) |
| Body text at 14px with long lines | Default component size used for reading | 16px or more for reading text; lines around 60–80 characters |
| Light weights (300) for body on screens | Elegant in a mock-up, hard to read, fails in dark mode | Regular or medium body; light only at large sizes |
| Text over images without a scrim | Contrast depends on the photo | A solid or graded scrim, or text beside the image |
| Proportional numerals in tables and prices | Columns do not align; numbers jitter when they change | Tabular numerals for data; aligned decimals |
| Underline or color for emphasis in body copy | Looks like a link | Weight for emphasis; links are the only underlined text |
| Three or more typefaces | No system | Two at most; contrast from weights and sizes |

## Icons

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| An icon before every heading, list item and button | Decoration; slows scanning instead of speeding it | Icons only where they help recognition (navigation, repeated actions, file types) |
| Lucide by default in every project | Fine as a family, but its presence everywhere is the generated signature | Choose the family for the brand's line weight and shape; any maintained family, consistently |
| Sparkles icon for AI features | Ambiguous (it means "magic", "new", "premium"); it is a marketing mark | Name the action ("Summarize", "Draft reply"); an icon of the result if one is needed |
| Mixed families, stroke widths or filled and outline in the same area | Assembled from several sources | One family, one style per context (outline for navigation, filled for selected, for example) |
| Hand-drawn SVG paths written by the agent | Wrong proportions, inconsistent strokes | Use the project's icon family; never draw icons |
| Checkmark icons in green circles for every list item | The pricing-table cliché used everywhere | Plain list; checkmarks only in comparisons where some items are crossed |
| Rocket for "launch", lightning for "fast", shield for "secure", brain for "AI" | The most literal metaphor, used by every template | Show the outcome; if an icon is needed, choose one that matches the actual object |
| Icons without labels in primary navigation | People cannot guess meaning | Labels with icons, or labels alone |

## Imagery and illustration

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Flat corporate illustrations of people with purple skin and big limbs | The "Corporate Memphis" look; says nothing about the product | Real photos, real screens, or commissioned illustration with a style tied to the brand |
| AI-generated hero images (glossy, symmetrical, too-perfect people, melted hands, impossible lighting) | People recognize them and trust drops | Real photography with permission; if generated imagery is used, art-direct and check it, and do not present it as real people or places |
| 3D clay or glass shapes floating in space | Generic "modern" filler | Show something specific: the product in use, the outcome, the object |
| Stock photos of people pointing at laptops, shaking hands, smiling at screens | Says "we had no picture" | Photos of the real team, customers (with permission), places and objects |
| Fake dashboard screenshot as the hero (line chart up, round numbers) | Shows nothing true about the product | A real screen with realistic data, or a focused crop of the feature that matters |
| Abstract wave or blob dividers between sections | Template decoration | Straight edges; or a shape that belongs to the brand |
| Illustration in empty states that is the same for every empty state | Decoration with no relation to what is empty | Say what will appear here and how to make it appear; a small detail from the product's world if it fits |
| Avatars from generated face sets in testimonials | Faces that do not exist next to quotes that do not exist | Real people with permission, or no faces |
| Logos rendered as grey wordmarks of famous companies | Implies endorsements that may not exist | Only logos of real customers with permission |
| Emoji used as illustrations (🚀✨🎉 at large size) | Cheap decoration; renders differently per platform | Use illustration, photography or nothing |

## Brand and identity

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Logo made of a letter in a rounded gradient square | The default app-icon generator output | Brand work with a concept; or a clear wordmark in the chosen typeface |
| Product name with a sparkle, bolt or orbit glyph next to it | Decoration as identity | A mark that comes from the product's idea, or none |
| Brand "personality" expressed only through color | Everything else stays default | Voice, type, imagery, layout and motion carry the identity together |
| Different visual languages between marketing site and product | The site was generated separately | One system; the site shows the real product and shares its tokens |
