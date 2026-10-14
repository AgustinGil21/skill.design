# Design system plan: [product name]

What the system will be, decided before building it. Keep it as short as the level allows: a level-1 plan fits in
ten lines. See `knowledge/design-system/README.md`.

## Level and why

- **Level**: [0 none · 1 foundations · 2 core kit · 3 documented system · 4 multi-product]
- **Chosen by**: [the person, on date] — **Recommended because**: [evidence: growth, team size, products, platforms]
- **Signals for the next level**: [for example, a second app; a second team; teams forking components]

## Principles

Three to five decisions with consequences for this product, not slogans.

1. [ ]
2. [ ]
3. [ ]

## Foundations

| Foundation | Decision | Source |
| --- | --- | --- |
| Typography | [families and their roles, weight map with meanings, italic policy, scale, text styles] | `knowledge/09-typography.md`, `knowledge/design-system/08-typography-in-the-system.md` |
| Color | [ramps, roles, status pairs] | `knowledge/10-color.md` |
| Space and size | [base unit, scale, control heights, touch targets] | `knowledge/17-composition-and-layout.md` |
| Shape and depth | [radii by role, borders, shadows, z-index layers] | |
| Motion | [durations, easings, reduced mapping] | `knowledge/landing/06-motion.md` |
| Layout | [breakpoints, columns, margins, max widths] | |
| Icons | [one family, sizes] | `knowledge/19-imagery-icons-and-illustration.md` |

## Tokens

- **Tiers**: [primitive + semantic; component tokens only for: …]
- **Modes**: [light, dark; densities; brands]
- **Naming vocabulary**: [surface vs background, muted vs subtle, state suffixes]
- **Source of truth and format**: [CSS custom properties / framework theme / token file built per platform]

## Components (first release)

| Component | Build, wrap or adopt | States that matter | Priority |
| --- | --- | --- | --- |
| | | | |

## Patterns and templates

- [Recurring tasks to document]
- [Page templates]

## Documentation

- **Home**: [comments · README per component · system page at route … · workshop · docs site]
- **Rules file for agents**: [path]
- **Audiences**: [designers, developers, writers, agents]

## Checks

- [ ] Raw values (`scripts/system-check.mjs`, lint)
- [ ] Contrast of every role pair per mode
- [ ] Accessibility per component
- [ ] Visual snapshots (level 3+)

## Ownership and change

- **Owner**: [person or team, with time allocated]
- **How changes happen**: [same change as the screen · proposal and review · versioned releases]
- **Versioning and deprecation**: [level 3+]
