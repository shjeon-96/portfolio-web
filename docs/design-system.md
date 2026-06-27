# Portfolio Design System

This portfolio uses a compact product-console design system. The goal is a calm B2B SaaS console, not a blog, terminal theme, or decorative landing page.

## Authoritative Sources

- Foundations and global tokens: `app/globals.css`
- Class tokens and small helpers: `lib/design-system.ts`
- React UI primitives: `components/ui/`
- Page headings: `components/section-heading.tsx`

Do not introduce a second color, radius, spacing, button, badge, or panel rule in page files when an existing token or primitive covers the behavior.

## Foundations

- Background: warm neutral app canvas
- Surfaces: white and near-white panels
- Radius: 8px panels, 6px controls
- Accent: blue for navigation and evidence labels, green for result/output labels, amber for boundary labels
- Typography: product-console sans stack with monospace labels
- Motion: restrained hover and focus states only

## Primitives

- `Panel`: framed surfaces and repeated cards
- `ActionLink`: primary, secondary, compact, subtle, and icon actions
- `Badge` / `BadgeList`: stack chips, categories, and proof points
- `NumberMarker`: ordered workflow or evidence steps
- `TextLink`: inline evidence links

## Usage Rules

- Use `Panel` for individual framed items, repeated records, and evidence blocks.
- Use full-width bands for page sections instead of nesting panels inside panels.
- Use `ActionLink` for command-like links and `TextLink` for prose evidence links.
- Use `BadgeList` for technology stacks and short public-safe labels.
- Keep changelog evidence structured as problem, approach, result, and verification-oriented notes.
