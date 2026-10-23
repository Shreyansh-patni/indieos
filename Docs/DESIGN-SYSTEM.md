# IndieOS — Design System Specification

**Status:** Draft for Product Owner approval  
**Version:** 0.1  
**Date:** 23 October 2026  
**Parent contract:** `Docs/PRD.md` (PRD v1.3)  
**Scope:** visual rules and component behavior only; no application implementation is authorized by this document.

> **Non-negotiables:** IndieOS supports light and dark themes. Both are strictly monochrome using the exact palette supplied by the Product Owner. Do not add any chromatic colors, gradients, pastel surfaces or category-specific colors. The design should combine the calm typography-led editorial approach of Compose, the editorial structure of Narra, and selected functional patterns from Magic UI Blog without copying any template.

## 1. Design goals

1. Feel like a carefully edited publication for indie developers, solo founders and bootstrapped builders, not a SaaS dashboard or generic AI landing page.
2. Put article titles, useful summaries and the reading experience ahead of decorative UI.
3. Work equally well in both approved monochrome themes.
4. Make Ideas, Build, Launch and Growth easy to discover without relying on color.
5. Keep components predictable and accessible, with shadcn/ui as the primitive foundation and Magic UI used only where a restrained effect improves the experience.
6. Be implementable with the project's confirmed Next.js App Router, TypeScript, Tailwind and content setup after repository reconnaissance. This document does not authorize dependency changes.

## 2. Reference interpretation

### Reference 03 — Olivia / Compose: primary editorial influence

Use the expressive serif headline hierarchy, generous spacing, simple navigation, featured story treatment, compact article cards and long-form article masthead as inspiration. Ignore its pastel gradients and creator-blog branding. Translate the layout ideas into black, white and the approved neutral grayscale only.

### Reference 02 — Narra: information architecture influence

Use the clear difference between hero/featured content, latest stories, editorial modules, author information and related reading. Simplify the density: IndieOS is an independent builder publication, not a general news magazine. Avoid stacking too many homepage sections.

### Reference 01 — Magic UI Blog: technical component influence

Study its category filtering, article grid, code blocks, table-of-contents rail, theme toggle, compact controls and related articles. Do not reproduce its dark UI as the sole theme or adopt all its visual styling. Keep its effect patterns optional and restrained.

### Reuse and licensing boundary

The supplied HTML exports/screenshots are reference material. Do not copy their logos, wording, remote imagery, complete exported code, or fonts unless the project owner has confirmed a suitable license and intended reuse. Build an original IndieOS identity and use original or properly licensed assets.

## 3. Design principles

- **Editorial first:** typography, line length, rhythm and hierarchy establish the design.
- **Monochrome only:** use the defined palette tokens. No pink, blue, green, purple, brown, cream, beige, coral, gradients, tinted shadows, or colored category pills.
- **Contrast over decoration:** distinguish sections using size, alignment, borders, grayscale surfaces and whitespace.
- **Still by default:** content must remain fully visible with motion disabled. Motion never blocks navigation, reading or comprehension.
- **No dead controls:** any visible control must work, or be hidden/clearly disabled with a reason while its dependency is unavailable.
- **Content-driven:** design must tolerate long titles, missing optional images, short excerpts and varied article-body structures.
- **Consistent themes:** the same semantic component maps to equivalent meaning in light and dark mode; do not design each mode as a separate art direction.
- **No fake social proof:** no invented view counts, reading counts, author credentials, ratings or testimonials.

## 4. Color tokens

Use these supplied values as the only palette source. Semantic token mapping below is the initial proposal and must be checked for contrast in the real interface before release.

### 4.1 Light palette

| Token | Hex | Preferred use |
|---|---|---|
| Base | `#FFFFFF` | Page background, primary surface |
| 50 | `#FAFAFA` | Subtle raised surface |
| 100 | `#F5F5F5` | Quiet surface, selected/hover background |
| 200 | `#E5E5E5` | Dividers, subtle borders |
| 300 | `#D4D4D4` | Stronger border, input boundary where needed |
| 400 | `#A3A3A3` | Non-text decoration; text only if contrast passes for its size |
| 500 | `#737373` | Muted text only where contrast passes; do not assume it passes on white |
| 600 | `#525252` | Secondary text/icons |
| 700 | `#404040` | Strong secondary text |
| 800 | `#262626` | Strong text/contrast surface |
| 900 | `#171717` | Main body text or dark surface |
| 950 | `#0A0A0A` | Highest-emphasis text, buttons or deep surface |

### 4.2 Dark palette

| Token | Hex | Preferred use |
|---|---|---|
| Base | `#000000` | Page background |
| 50 | `#0A0A0A` | Primary raised surface |
| 100 | `#171717` | Card surface, hover background |
| 200 | `#262626` | Border, divider |
| 300 | `#373737` | Stronger border/control boundary |
| 400 | `#525252` | Muted surface; text only if contrast passes |
| 500 | `#8A8A8A` | Muted text candidate; verify actual contrast |
| 600 | `#A3A3A3` | Secondary text/icons |
| 700 | `#D4D4D4` | Strong text |
| 800 | `#E5E5E5` | High-emphasis text |
| 900 | `#F5F5F5` | Main text |
| 950 | `#FAFAFA` | Highest-emphasis text/surfaces |

### 4.3 Semantic CSS variable mapping proposal

Map semantic tokens to theme-specific values rather than placing palette hex codes directly throughout components. These are design values, not an instruction to edit repository files yet.

| Semantic token | Light | Dark | Purpose |
|---|---|---|---|
| `background` | `#FFFFFF` | `#000000` | Main canvas |
| `foreground` | `#171717` | `#F5F5F5` | Main text |
| `card` | `#FFFFFF` | `#0A0A0A` | Cards and article surfaces |
| `card-foreground` | `#171717` | `#F5F5F5` | Card text |
| `popover` | `#FFFFFF` | `#171717` | Menus, popovers, dialogs |
| `popover-foreground` | `#171717` | `#F5F5F5` | Popover text |
| `primary` | `#0A0A0A` | `#FAFAFA` | Main action, selection |
| `primary-foreground` | `#FAFAFA` | `#000000` | Main action text/icons |
| `secondary` | `#F5F5F5` | `#171717` | Secondary control surface |
| `secondary-foreground` | `#262626` | `#E5E5E5` | Secondary control content |
| `muted` | `#F5F5F5` | `#171717` | Quiet surface |
| `muted-foreground` | `#525252` | `#A3A3A3` | Secondary text, subject to contrast testing |
| `accent` | `#E5E5E5` | `#262626` | Monochrome hover/active surface, never a color accent |
| `accent-foreground` | `#171717` | `#FAFAFA` | Text/icons on accent surface |
| `border` | `#E5E5E5` | `#262626` | Standard borders |
| `input` | `#D4D4D4` | `#373737` | Input boundary |
| `ring` | `#525252` | `#D4D4D4` | Keyboard focus ring |
| `destructive` | `#262626` | `#E5E5E5` | Monochrome error-state base; pair with explicit text/icon and copy |

**Contrast warning:** this is a candidate token map, not a declaration that every pairing passes WCAG. Validate every semantic foreground/background pair, button, placeholder, focus ring and meaningful border in both themes. Avoid the light theme `#737373` on `#FFFFFF` for normal-size text unless the actual pairing is verified against the required threshold; prefer darker secondary text. Do not use color alone to convey error/success.

### 4.4 Theme behavior

- First visit: use `prefers-color-scheme` unless the owner approves a different default.
- Returning visit: a user's explicit selection overrides system preference and persists across navigation and reloads.
- Theme toggle: visible in the global header and in the mobile navigation if the header collapses; accessible name announces the action, and the current state is understandable to assistive technology.
- Switching theme must preserve the current URL, search query, saved state and any entered but not submitted form text.
- Prevent or minimize theme flash before hydration when supported by the confirmed framework setup.
- The theme toggle uses monochrome sun/moon or equivalent icons, no colored track or glow.
- Theme changes must not affect canonical URLs, indexing, content or layout structure.

## 5. Typography

### 5.1 Typography roles

| Role | Direction | Initial desktop range | Initial mobile range |
|---|---|---:|---:|
| Display / homepage H1 | Expressive editorial serif; compact but not cramped | 56–72 px | 38–46 px |
| Featured-story title | Editorial serif | 36–48 px | 28–36 px |
| Article H1 | Editorial serif, easy to scan | 44–60 px | 34–42 px |
| H2 | Same serif family or a compatible serif | 30–38 px | 26–32 px |
| H3 | Serif or strong sans, based on hierarchy | 22–28 px | 20–24 px |
| Card title | Serif headline style | 21–26 px | 20–24 px |
| Body / long-form | High-legibility sans-serif | 17–19 px | 17–18 px |
| UI/body metadata | Sans-serif | 13–15 px | 13–15 px |
| Eyebrow / label | Sans-serif, medium weight, moderate tracking | 11–13 px | 11–12 px |
| Code | Readable monospace | 13–15 px | 13–14 px |

These are review ranges, not final pixel contracts. The selected fonts and exact type ramp must be approved after reviewing actual screenshots and long-form content. The recommended candidate pairing is `DM Serif Display` (expressive editorial serif for display and headings) paired with `Geist` (neutral, high-legibility sans-serif for body and UI), inspired by Reference 02 (Narra). Note: font licensing, local/self-hosting options, performance, and final Product Owner approval remain pending before final adoption. Do not lock the pairing as final or introduce unverified font licenses.

### 5.2 Editorial text rules

- Maintain comfortable line length: target approximately 60–75 characters for body copy; headings may be shorter and more expressive.
- Long-form body line-height target: 1.65–1.8; headings typically 1.0–1.15 depending on face and size.
- Do not apply condensed letter spacing that makes text hard to read. Tight display tracking is allowed only after visual testing.
- Links must be distinguishable without color alone; use underline or another reliable non-color cue for inline article links.
- Use typographic scale and whitespace rather than all-caps labels everywhere.
- All article headings must follow semantic order; do not choose heading tags only for visual size.

## 6. Layout and spacing

### 6.1 Global layout

- Content container: max width 1,200–1,280 px on large desktops, with 32 px side gutters at wide widths and 20–24 px at tablet sizes.
- Small phone side gutters: 18–20 px at 360–390 px viewports.
- Editorial reading column: 680–760 px maximum for comfortable long-form text.
- Article layout with TOC: a 680–760 px content column plus a 200–240 px TOC rail, with clear separation and enough room for the article. On smaller viewports the TOC moves into a disclosure or inline block.
- Page sections: generally 64–104 px vertical separation on desktop, 44–72 px on mobile; avoid arbitrary variations without purpose.
- Use a consistent spacing scale based on multiples of 4/8 px. Exact Tailwind mapping is an implementation decision after repository inspection.

### 6.2 Breakpoints for design QA

Capture and inspect at 360, 768, 1024 and 1440 CSS pixels as the PRD requires. These are test widths, not necessarily the exact CSS breakpoint values. Layouts should adapt fluidly between them.

### 6.3 Responsive principles

- No horizontal page scrolling at 360 px.
- Cards reflow from three columns to two and then one column as space requires.
- Navigation changes to a compact, accessible menu at the confirmed breakpoint.
- Long headlines must wrap naturally; do not force awkward line breaks that fail on other widths.
- Tables and code blocks must remain usable on mobile; provide controlled horizontal scrolling for genuinely wide code/table content rather than causing page overflow.
- Desktop-only sidebar UI, including TOC, becomes inline or collapsible on narrow screens.

## 7. Imagery and visual texture

- Use article cover images only when relevant to the story; the visual system must still look complete if an optional cover image is absent.
- Image treatment may be natural photography, monochrome abstract imagery, screenshots or diagrams. For a strict black-and-white UI, any image asset used in demo cards should be selected or treated in a way that does not introduce a competing colorful UI accent. Content images may include necessary colors if they are intrinsic to the actual subject matter, but do not use colored image overlays or colored image backdrops as brand styling. If the Product Owner intended monochrome photography too, confirm that before asset production.
- Use consistent aspect-ratio roles: card thumbnail roughly 3:2 or 16:10; featured story 16:7 to 16:9 depending on composition; article hero 16:9 or natural ratio with reserved dimensions.
- Apply subtle border/radius consistently; avoid making every image a pill or heavily rounded app tile. Suggested radius range: 8–14 px for story media/cards, smaller for inputs/buttons.
- Provide intentional alt text for meaningful images; decorative imagery has empty alt text. Do not place important text inside images.
- Use original or properly licensed imagery. Store image dimensions and prevent layout shift.
- Do not depend on color in images to convey category. Category is always expressed in text.

## 8. Component rules

### 8.1 Header and navigation

- Compact horizontal wordmark/navigation on desktop, inspired by Compose's restraint.
- Wordmark links home and remains readable in both themes.
- Four primary categories only: Ideas, Build, Launch, Growth.
- Provide search, saved articles and theme toggle without overcrowding the header. If too tight, place lower-priority utilities in an accessible menu.
- Use a thin monochrome border to separate the header from content. Sticky behavior is optional; do not add it unless it improves usability after screen review.
- Desktop nav must have clear current-page indication using underline, weight, border or shape; not color alone.
- Mobile nav opens via a clearly labeled button, traps/manages focus correctly if implemented as a dialog, closes with Escape and after navigation, and returns focus to its trigger.

### 8.2 Buttons and links

- Primary button: black surface/white foreground in light theme; white surface/black foreground in dark theme.
- Secondary button: monochrome border and transparent/quiet surface.
- Tertiary action: simple text link with visible hover and focus behavior.
- Hover/active state uses neutral grayscale changes, underline or subtle border; no glow or color shifts.
- Focus-visible must be clearly visible in both themes and not clipped by overflow containers.
- Disabled controls remain legible and communicate why they are unavailable if the reason isn't obvious.

### 8.3 Article cards

- Image at top or in a deliberate featured split-card composition.
- Category label in monochrome text; optionally use a neutral bordered capsule, not a colored pill.
- Title is the primary card element. Excerpt is short, non-redundant and readable.
- Show date and read time only when valid; do not fabricate published dates for demo fixtures.
- Whole-card interaction may be used only if nested controls do not create invalid interaction semantics. Links must remain obvious.
- Hover: slight border/surface change or image scale no more than necessary; avoid animation that moves text or shifts the grid.
- Support missing images, very long titles, and excerpt lengths without card-height chaos.

### 8.4 Category pills and filters

- Four fixed pillar labels, visually neutral.
- Active state uses a border, underline, filled monochrome surface or text weight.
- Filter count may appear only if it communicates a useful, accurate number; don't display false/artificial popularity.
- Filters must be keyboard operable and convey the selected state accessibly.

### 8.5 Theme toggle

- Icon button with accessible name such as “Switch to dark mode” or “Switch to light mode”; accessible state labels should not be ambiguous.
- Tooltip can reinforce the label but must not be the only accessible name.
- No colored toggle track, gradient or decorative halo.
- Must work with pointer, keyboard and assistive technology; preference persists.

### 8.6 Article reading components

Support these content types as needed by the content model: H2/H3 headings, paragraphs, ordered/unordered lists, blockquotes, inline links, images/captions, code blocks with copy button, callouts, tables, horizontal dividers and source links. All components use semantic markup and theme tokens. Use monochrome callouts differentiated by border/icon/label, not color blocks.

- TOC is generated from valid H2/H3 heading IDs; current section indicator uses weight/line/border rather than color.
- Code blocks must have sufficient contrast in both modes, horizontal scrolling and a working copy button with accessible feedback.
- Tables have clear headers and mobile behavior; never reduce text to unreadable sizes to make a table fit.
- Blockquotes can use a strong left border and increased type styling without a colored surface.
- Inline links are visually identifiable when not hovered/focused.

### 8.7 Forms, search and feedback

- Inputs have visible labels or accessible names, clear boundaries, focus rings and understandable errors.
- Placeholder text is never the only label.
- Search includes empty, loading (if applicable), results, no-results and failure/retry behavior even if implemented entirely client-side.
- Newsletter is an embedded homepage and footer component (no dedicated `/newsletter` route in V1); it is not displayed as a working form until a real provider and privacy notice are configured. In demo mode, show a non-submitting preview only if it is visibly marked as a demo; preferably omit it until the integration works. Never display a pretend form.
- Contact form is hidden until end-to-end verified; otherwise expose only an owner-approved monitored email address, never a fake email.
- Toasts/announcements use text plus icon and accessible live-region behavior, not color alone.

### 8.8 Saved articles

- Local-only storage; no account and no sync in V1.
- Save/remove control includes an accessible name and pressed/selected state.
- A saved-articles page has a helpful empty state and a remove action.
- If storage is unavailable, present a recoverable message rather than crashing.
- Saved state does not modify SEO output or create indexable URLs.

### 8.9 Footer

- Quiet multi-column footer inspired by Compose but reduced to useful IndieOS destinations.
- Include the four pillars and approved trust pages, plus RSS.
- Optional newsletter block only when provider is configured.
- Theme surfaces remain monochrome. A dark footer in light mode is allowed as long as the same theme's contrast, border, link and focus rules pass; the dark theme may instead use grayscale surface layering.

## 9. Motion and interaction

- Default mode: static and calm. Animation is optional, never required to reveal core content.
- Use Magic UI only for an identifiable design purpose. Candidate uses: subtle entrance of a featured visual or understated interaction feedback. Do not animate every card or heading.
- Avoid: continuously moving marquees as decoration, animated gradient/aurora backgrounds, floating particle fields, strong parallax, scroll-jacking, long sequences and effects that reduce text contrast.
- Use brief, restrained transitions where they improve feedback. Favor opacity/border/transform changes that do not cause layout shift.
- Respect `prefers-reduced-motion`; use a reduced or static alternative.
- No motion should be necessary to understand theme selection, selected category, saved state or form status.

## 10. Accessibility and quality gates

- Semantic landmarks: header, nav, main, article, aside when appropriate, footer.
- Include a skip-to-content link, correct page title and logical heading hierarchy.
- All interactive elements work by keyboard; focus order follows reading order.
- Accessible names for icon buttons, copy/share/save/theme controls and mobile menu.
- WCAG AA text contrast minimum in both themes; validate all common UI states and muted text.
- Don't rely on chromatic color as information; the whole system is monochrome.
- Alt text is accurate and concise. Decorative media is hidden from assistive technology.
- Dialog/sheet menu focus handling follows expected keyboard behavior.
- Check browser zoom and reflow; no content becomes inaccessible when text size grows.
- Reduced motion and touch target sizes are considered.
- QA widths: 360, 768, 1024 and 1440 CSS pixels. Include a longest title, missing image, empty saved list, no-search-results state, light/dark state and article with code/table.

## 11. Suggested primitive inventory (not an install order)

Start with existing repository components if present. Do not add dependencies until read-only reconnaissance confirms the stack and the owner approves any required installation.

- Layout: `SiteHeader`, `MobileNav`, `SiteFooter`, `PageContainer`, `SectionHeading`, `SkipLink`.
- Navigation: `PillarNav`, `Breadcrumbs`, `PaginationOrLoadMore` only if required by the final route architecture.
- Article discovery: `ArticleCard`, `FeaturedArticle`, `ArticleGrid`, `PillarCard`, `CategoryLabel`, `ArticleMetadata`.
- Article body: `ArticleHeader`, `ArticleBody`, `TableOfContents`, `CodeBlock`, `Callout`, `Blockquote`, `ArticleImage`, `SourceList`, `RelatedArticles`, `AuthorBlock`.
- Utilities: `ThemeToggle`, `SearchDialogOrPage`, `SaveArticleButton`, `ShareArticleButton`, `CopyButton`, `EmptyState`, `ErrorMessage`.
- Forms only after external integration is selected: `NewsletterForm`, optional `ContactForm`.

Use shadcn/ui primitives where their accessibility and interaction behavior helps; custom compose editorial patterns around them. Do not build abstract component frameworks before a pattern repeats.

## 12. Approval checklist

Before implementation, the Product Owner should approve or mark for revision:

- [ ] Reference synthesis: Compose typography/spacing + Narra story structure + selected Magic UI patterns.
- [ ] Strict black/white plus supplied grayscale tokens only.
- [ ] Light and dark modes plus theme preference behavior.
- [ ] Typeface direction: candidate pairing DM Serif Display + Geist and real font licensing/hosting plan.
- [ ] Homepage hero composition and featured-article structure.
- [ ] Article reading column, TOC behavior and cover-image style.
- [ ] Header utility placement and mobile navigation behavior.
- [ ] Card, category label, button and form styles.
- [ ] Animation restraint and reduced-motion behavior.
- [ ] Screen specifications and QA breakpoints.

## 13. Implementation boundary

This document does not authorize coding, package installation, asset downloads, repository edits, deployment or DNS changes. After approval, inspect the actual repository, compare existing conventions against this specification, then implement the smallest foundation slice with verification.
