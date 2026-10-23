# IndieOS — Screen Specifications

**Status:** Draft for Product Owner approval  
**Version:** 0.1  
**Date:** 23 October 2026  
**Parent documents:** `Docs/PRD.md`, `Docs/DESIGN-SYSTEM.md` (draft)  
**Scope:** page structure and observable UX behavior, before UI implementation.

## 1. Global shell

### Shared header

**Desktop (reference 03's restraint; reference 01's theme control):**
- Left: text wordmark `IndieOS`, linking to `/`.
- Main navigation: Ideas, Build, Launch, Growth.
- Utilities: search, saved articles, theme toggle. Keep labels/icon sizing consistent and avoid crowding.
- Thin bottom border in the active theme.
- Current route has a non-color-only indicator (weight, underline or border).

**Mobile:**
- Wordmark on the left; theme toggle and menu trigger on the right. Search/saved items may be inside the menu if width is limited.
- Menu is keyboard-operable, announces expanded/collapsed state, closes with Escape and on navigation, and returns focus to trigger.
- Do not hide all category navigation behind an unlabeled icon.

### Shared footer

- Wordmark and one concise, owner-approved publication statement.
- Four pillar links.
- About, Contact, Editorial Policy, Privacy and Terms only when their routes contain approved content.
- RSS link.
- Newsletter module only after its provider is working; otherwise omit from demo implementation or show only a clearly labelled non-submitting prototype in a development-only context.
- Copyright year should be generated from current date or a deliberate editorial rule, not hardcoded to an old example year.

### Global responsive and theme behavior

- QA widths: 360, 768, 1024, 1440 CSS px.
- Both theme modes retain the same information architecture and hierarchy.
- Theme preference: system on first visit unless owner changes the default; saved choice persists. Toggle must not interrupt current route or search state.
- No chromatic colors or gradients in either theme. Use the exact palette tokens from the design specification.
- No horizontal overflow at 360 px. Major tap targets should be comfortably usable.

## 2. Homepage `/`

### Purpose

Explain the publication's value quickly, surface one strong starting point, and help readers explore the four pillars or latest guides.

### Section order

1. Shared header.
2. Editorial hero.
3. Featured article.
4. Latest articles grid.
5. Explore the four pillars.
6. Newsletter area only if the provider is functional; otherwise omit.
7. Shared footer.

### Hero specification

- Layout: spacious, typography-first and confident. Start from Compose's headline scale/whitespace, but use monochrome surfaces only. Do not copy its colored gradient panel.
- Suggested eyebrow: `PRACTICAL GUIDES FOR INDEPENDENT BUILDERS` (copy remains editable until editorial approval).
- Suggested H1 direction: `Build the thing. Launch it. Grow on your terms.` (placeholder design copy, not a final brand tagline).
- Supporting sentence: one or two lines describing practical guides for ideas, building, launches and growth. Avoid unsupported claims such as “the best” or quantified outcomes.
- CTA/navigation: a text or outlined action to Explore the latest guides; category nav remains the primary route discovery mechanism.
- Visual treatment: use scale, line breaks, whitespace, monochrome rule/border and editorial alignment. If adding an image/graphic, it must be original/licensed, relevant and not introduce a colored accent motif.

### Featured article

- One featured item from the fixture dataset with category, title, short excerpt, valid demo indicator in local/staging mode, and a prominent image if present.
- Desktop: split layout is acceptable, with title/excerpt on one side and image on the other; stacked on mobile.
- Card should not display fake readership counts or testimonials.
- Entire title/link target must be keyboard-accessible; no nested interactive elements.

### Latest articles

- Target 6 article cards in the first view of this section with a load-more control only if it has a real function. If client-side pagination/filtering is not part of the first version, display a clear “View all” link to the appropriate listing instead.
- Desktop: 3-column grid; tablet: 2-column; mobile: 1-column.
- Each card supports category label, title, excerpt, date only when valid, reading time only when computed, and optional image.
- Grid content comes from article data, never repeated/hardcoded JSX.

### Explore the four pillars

- Show Ideas, Build, Launch, Growth with concise descriptions.
- Use monochrome typographic labels, numbers, simple line icons or borders; no category color-coding.
- Each tile navigates to its category route.

### Homepage states

- Demo build: clear internal “Demo content” context may be shown without visually dominating the editorial layout. This label must not appear on a real production article once the fixture is replaced.
- If no featured article resolves, select no featured item and display a controlled fallback or omit the section; do not crash.
- If a category has no articles, show a useful empty state rather than an empty card skeleton.

## 3. Pillar listing pages `/ideas`, `/build`, `/launch`, `/growth`

### Purpose

Give each pillar a clear identity through editorial copy and topic focus while keeping one consistent page system.

### Structure

1. Shared header.
2. Breadcrumb or simple page-level context where it improves orientation.
3. Pillar title and short introductory copy.
4. Optional featured guide selected from eligible content.
5. Article grid/list.
6. Adjacent pillar navigation or “Continue the builder journey” module.
7. Shared footer.

### Requirements

- The four pillars are fixed. Do not create extra primary categories.
- Category pages use the same layout system and semantic structure, with content data changing only the title, description and articles.
- Featured status may only use the explicit content flag or approved rule.
- Article list sorts by the approved content order; do not manufacture dates to create a chronological feed.
- Demo content carries internal demo status and is excluded from production sitemap/RSS/indexation.
- If filtering is present, selected filter state must be keyboard-accessible and URL behavior should be consistent; do not add filters solely as decoration.

## 4. Article page `/{pillar}/{slug}`

### Purpose

Provide a comfortable, credible long-form reading experience and a clear path to the next useful guide.

### Desktop structure

1. Shared header.
2. Breadcrumb: Home → Pillar → Article.
3. Article masthead, within an approximately 760–900 px region:
   - monochrome category label;
   - H1 title;
   - short description/deck;
   - author/date/updated-date/read-time only when valid;
   - demo indicator only in the local/staging demo mode.
4. Hero image if supplied and meaningful.
5. Reading layout: 680–760 px main column plus optional 200–240 px TOC rail for sufficiently long articles.
6. Body with semantic Markdown/MDX renderers.
7. Source list or references when article requires them.
8. Article-end actions: save, share/copy link.
9. Author block only if owner-approved profile exists.
10. Related articles, restricted to valid related IDs and eligible content.
11. Navigation to the next pillar stage when relevant.
12. Shared footer.

### Mobile structure

- Single reading column; no side rail.
- Table of contents appears as a keyboard-accessible disclosure before the article body or as an inline list, depending on tested layout.
- Article action buttons wrap; labels remain visible or have accessible names.
- Code blocks/tables scroll within their own containers, not the whole document.
- Images are responsive with reserved aspect ratio/dimensions.

### Article typography and blocks

- Body width, line height and paragraph spacing follow `DESIGN-SYSTEM.md`.
- H2/H3 heading IDs are stable enough for TOC anchors and direct links.
- Supported blocks: paragraphs, lists, nested lists, headings, blockquotes, inline links, images/captions, code blocks, callouts, tables, dividers and source references as content requires.
- Use only semantic HTML and validated content data.
- Copy-code feedback, save feedback and share/copy feedback use accessible status announcements.
- Never add fake bylines, fabricated author credentials, false publication dates or unsupported data claims.

### Article states

- Unknown slug or invalid pillar: real not-found handling and useful links to pillars/search.
- Missing optional cover image: omit media slot or use a deliberate monochrome placeholder approved for the design; no broken-image icon.
- Invalid related article IDs: omit those relations or fail validation in development; never render broken links.
- Demo article: noindex; excluded from production sitemap, production RSS, and production article structured data.
- Draft/unapproved article: must not appear on public demo listing unless explicitly included as a fixture; must never become production-indexable automatically.

## 5. Search `/search?q=...`

### Entry points

- Search icon/control in header; keyboard shortcut is optional and only if implemented accessibly.
- Mobile search entry from the mobile menu if it cannot fit in the header.

### Page structure

1. Shared header.
2. H1 `Search IndieOS` or equivalent approved copy.
3. Persistent search input with accessible label.
4. Result summary when results exist.
5. Result list/cards.
6. Empty/no-results/recovery message.
7. Footer.

### Behavior

- Use a generated/static index sourced from eligible local content; no search backend required for V1.
- Search title, excerpt/description, pillar and tags; include body indexing only if it is efficient and scoped.
- Normalize whitespace and case. Do not break on empty, punctuation-heavy or non-Latin input.
- Preserve query in URL when using query parameters and preserve typed input when switching themes.
- No results: say that nothing matched and link to all four pillars; don't fabricate suggestions.
- Search route and query variants remain `noindex,follow` and are omitted from the sitemap.
- If content fails to load, show a non-technical error and retry/clear option where applicable.

## 6. Saved articles `/saved` (or the route selected in the final routing review)

### Purpose

Let readers revisit saved guides on the same device without an account.

### Structure and behavior

- Page title and brief explanation that saved articles are stored locally on this browser/device.
- Saved article list using the same reusable card pattern.
- Remove action on each saved item.
- Empty state with a route back to Ideas/Build/Launch/Growth.
- If storage contains stale IDs or articles no longer exist, ignore stale records safely and offer a clear/recovery behavior.
- If local storage is unavailable, explain that saving is unavailable in this session and keep the page usable.
- Saved page is noindex and absent from the sitemap.

## 7. About `/about`

- Purpose: explain IndieOS's mission, intended reader, four-pillar model and principles for practical, evidence-aware writing.
- Layout: narrow editorial content column; clear H1, short summary and structured sections.
- Do not invent a team, founder bio, company registration, partnerships or credentials. Use only owner-approved details.
- Link to Editorial Policy, Contact and the four pillars.
- Keep the page indexable only after content approval.

## 8. Editorial Policy `/editorial-policy`

- Explain how topics are selected, sources checked, affiliate/promotional relationships disclosed when applicable, updates handled and corrections requested.
- Use concrete processes only after the owner confirms them; do not claim a process exists merely because it sounds professional.
- Simple reading column with clear H2 sections and review/contact link.
- Indexable only after owner review.

## 9. Contact `/contact`

- Preferred MVP fallback: an owner-approved, monitored email link, provided the exact address is supplied and tested.
- If no real contact method has been approved, keep the route out of production navigation until resolved.
- A form must not be shown unless its provider, validation, submission confirmation, error behavior and privacy implications are tested end to end.
- Never invent an email address or present a nonfunctional form as working.

## 10. Privacy `/privacy` and Terms `/terms`

- Both pages use the common legal/editorial reading layout.
- Copy must describe actual shipped behavior, providers, local storage, external embeds and personal-data processing truthfully.
- Do not say the site uses no cookies or does not collect data unless verified against the built site and providers.
- Privacy page must be updated before enabling newsletter, comments, analytics or other third-party integrations.
- Production indexation depends on owner review of the real copy.

## 11. Author archive `/authors/{slug}`

- Build the route template only if needed by an approved real author record.
- Displays approved name, short biography, approved external links and eligible published articles.
- Demo content may use a fictional fixture only if clearly marked for internal staging; it must not be copied to production or generated as a real author claim.
- Don't publish an empty archive or fake author schema.

## 12. Newsletter module

- Intended placement: homepage near the end of content and optional footer placement.
- Do not implement as a real submission flow until a provider has been selected and tested.
- Must contain a real label, email validation, consent/privacy wording appropriate to the provider, success response, recoverable error and duplicate-submission handling as supported.
- If the provider isn't ready, omit it in functional builds or mark any prototype as demo-only and non-submitting.

## 13. RSS `/rss.xml`, sitemap and robots

### RSS
- Include only approved published articles in production.
- Use absolute canonical article URLs and correct publication/update dates.
- Exclude demo, draft, unapproved, search and utility content.

### Sitemap
- Production sitemap includes only canonical, indexable, approved pages and published articles.
- Exclude search, saved articles, 404, drafts, demos and parameterized URLs.
- Demo builds must not leak fixture article URLs into a production sitemap. If a preview build has a sitemap, ensure its deployment environment cannot be indexed.

### Robots/indexing gate
- Demo site-wide `noindex,nofollow` is mandatory; do not rely on robots.txt alone as a deindexing mechanism.
- Production indexing is switched only after the owner-approved release gate.
- `/search` and not-found routes stay non-indexable.

## 14. Not-found page

- Clear statement that the page was not found.
- Links to homepage, four pillars and search.
- Keep design useful and brand-consistent, not a joke page.
- Host/route must return actual 404 semantics where platform behavior permits.
- Noindex and excluded from sitemap.

## 15. Core interaction contracts

| Interaction | Expected result | Failure/edge behavior |
|---|---|---|
| Pillar navigation | Opens correct route | No dead/placeholder links |
| Theme toggle | Switches palette without route/state loss; preference persists | Falls back safely if storage unavailable |
| Search | Results update from query/index | Empty and no-result states are clear |
| Save article | Save state updates and persists locally | Storage failure is explained; no crash |
| Remove saved article | Item disappears and state persists | Stale ID is handled gracefully |
| Share | Uses native share when available; otherwise copies canonical URL when possible | Manual-copy fallback or clear error if clipboard unavailable |
| Copy code | Copies current code block contents | Accessible feedback and nonfatal failure state |
| TOC anchor | Navigates to matching heading | Only valid heading IDs included |
| Newsletter submit | Works only with configured provider | Hidden/non-submitting demo unless configured |
| Contact submit | Works only with configured and tested delivery | Do not display nonfunctional form |
| RSS | Returns published items only | Empty feed behavior is valid if nothing is published |
| 404 | Provides recovery links and real not-found handling | Must not accidentally render homepage with 200 status |

## 16. Design QA checklist

For each significant screen capture, test all of the following at 360, 768, 1024 and 1440 px where relevant:

- Light and dark modes.
- Primary and secondary navigation states.
- Longest demo headline and a missing/failed image.
- Empty search results, empty saved articles and search input with query.
- Article with TOC, code block, quote, table, long list and source links.
- Keyboard-only navigation and focus-visible states.
- Theme switching while on a search result/article and while text is in the search field.
- Motion disabled/reduced-motion setting.
- No page-level horizontal overflow, clipped controls or unexpected text overlap.
- Console errors, broken routes, bad anchors and content that varies only by color.

## 17. Build order after approval

1. Repository reconnaissance (read-only); reconcile paths, scripts, framework versions and existing components.
2. Confirm visual approval for the design system and these screen specs.
3. Build shared foundation only: tokens/theme behavior, responsive shell, header/footer, skip link and link/button primitives.
4. Verify both themes, keyboard navigation and responsive behavior before proceeding.
5. Build homepage and category template using the 12 fixture records.
6. Build article template and content-body components.
7. Build search and local saved articles.
8. Add SEO/indexation/RSS behavior and trust pages.
9. Add integrations only after their external dependencies are configured and approved.
10. Run independent quality checks, capture screenshots, inspect diff and obtain explicit release approval.

No step in this document authorizes direct repository edits or deployment without the relevant approval gate.
