# IndieOS Website V1 — Product Requirements Document

**Document status:** Draft for Product Owner review  
**Version:** 1.3 (monochrome palette and light/dark theme behavior specified)  
**Date:** 23 October 2026  
**Product:** IndieOS (`https://indieos.tech`)  
**Document owner:** Product Owner / IndieOS founder  
**Primary implementation audience:** AI coding agent + human reviewer  
**Release target:** Development/demo V1 first; production editorial launch only after the content and operational gates in this document are met.

> **Operating rule:** This PRD is the product contract. Do not begin implementation until the Product Owner approves the scope, design direction and unresolved launch dependencies. Once approved, implement one reviewable slice at a time and report evidence, not assurances.

---

## 1. Executive Summary

IndieOS is an independent editorial publication for indie developers, solo founders and bootstrapped software builders. It helps readers move through one connected journey: **find an idea → build the product → launch it → grow the business**.

V1 is a fast, accessible, search-ready editorial website, not a SaaS dashboard or a full content-management system. The first development milestone uses clearly identified demo articles in all four categories to build and test the home page, category pages, article templates, navigation, search, saved articles, sharing, RSS and supporting pages. Real editorial content, real author details, newsletter provider configuration and comments configuration remain separate launch gates.

The website should feel like a carefully art-directed publication: minimal, typography-led, calm, high-quality and easy to read. Use **shadcn/ui** for accessible, editable component foundations and **Magic UI** selectively for restrained motion or one or two signature moments. The design must not look like a generic AI landing page, and animation must never compete with the reading experience. The site's entire color palette is strictly monochrome: black, white and the supplied neutral grayscale scales only. No pink, coral, beige, cream, blue, green, category colors, gradients, or other chromatic accents. V1 supports both light and dark themes using the exact palette tokens in §11.2, with an accessible theme toggle. Use contrast, typography, borders, spacing, image treatment, and layout to create hierarchy.

The implementation is static-first: Next.js App Router, TypeScript, Tailwind CSS and MDX/content files, producing statically rendered pages where the chosen route/content model supports it. The previously approved SEO documents govern canonical URLs, metadata, indexation, structured data, the sitemap, RSS and the article roadmap. Hosting should target Cloudflare Pages Free, with Netlify Free as the researched fallback, subject to a fresh check of the providers' terms before deployment.

## 2. Product Brief

| Item | Decision |
|---|---|
| Product | IndieOS |
| Product type | Independent editorial publication / content website |
| Primary audience | Technical solo builders, indie developers, solo founders and bootstrapped SaaS makers |
| Primary user need | Find practical, trustworthy guidance across the journey from idea selection to business growth |
| Core promise | Practical, evidence-aware guidance for building a small software business you control |
| Primary outcome | A reader can quickly find a relevant guide, read it comfortably, and continue to the next useful step |
| Editorial pillars | Ideas, Build, Launch, Growth; these four are fixed for V1 |
| Content language | English |
| Initial content state | Demo articles only for development and UI/functional testing |
| Theme | Light and dark modes in V1; accessible theme toggle; strict monochrome palette only; persist user preference |
| Primary business model | Publication with future AdSense consideration; no ads before approval |
| Initial hosting target | Cloudflare Pages Free, subject to launch-time terms check; Netlify Free fallback |
| Canonical origin | `https://indieos.tech` |
| URL convention | `/{pillar}/{slug}`, lowercase, hyphen-separated, no trailing slash except `/` |

### 2.1 The problem

Independent builders encounter useful advice in disconnected places: idea directories, founder blogs, launch platforms, vendor marketing blogs and social posts. The advice may be generic, promotional, stale or missing practical evidence. Readers often have to reassemble their own process from these fragmented sources.

### 2.2 The proposed solution

IndieOS presents practical guides organized along the builder's journey. Each page should help readers understand the problem, make a decision or complete a specific task. Articles should show clear reasoning, applicable steps, sources for factual claims and relevant links to the next stage of the journey.

### 2.3 Evidence and assumptions

- **Research-backed direction:** four pillars, 220-keyword research universe, SERP analysis and initial 14-article roadmap are documented in the existing SEO research pack.
- **Current implementation assumption:** V1 is static-first and content is maintained in the repository, not through a CMS.
- **Development assumption:** demo content is fixture content used to validate layouts and workflows; it is not automatically approved for indexing or monetization.
- **Unresolved external dependencies:** the newsletter provider, comments setup, verified contact method and owner-approved public author details must be confirmed before their production-facing features are enabled.
- Do not convert assumptions into public claims without Product Owner approval.

## 3. Product Principles

1. **Useful over flashy.** Editorial clarity, strong typography and reading comfort win over decoration.
2. **One connected journey.** The four pillars should guide readers from Ideas to Build to Launch to Growth rather than behave like unrelated categories.
3. **Evidence over hype.** No fake testimonials, invented performance claims, fabricated statistics, false author details or unsupported case studies.
4. **Fast by default.** Render article content into static HTML where possible, minimize client-side JavaScript and avoid unnecessary third-party scripts.
5. **Accessible by default.** Semantic HTML, keyboard access, visible focus, sufficient contrast and reduced-motion support are required.
6. **Static-first, not static-at-any-cost.** Do not introduce a backend, database or server-only Next.js capability without a reviewed requirement and explicit approval.
7. **SEO is part of the template.** Metadata, canonical rules, structured data, internal links and indexing behavior must be designed into page templates, not bolted on later.
8. **No dead controls.** Every visible button, form or interactive element must work, or it must be hidden/clearly disabled until its dependency is ready.
9. **Small verified slices.** Each implementation prompt has a bounded scope, acceptance criteria, actual checks and a stop condition.
10. **Human owns the release.** Agent-generated output is not considered correct until its behavior, diff and required checks have been independently reviewed.

## 4. Goals and Non-Goals

### 4.1 V1 goals

- Establish a coherent, polished editorial identity for IndieOS.
- Ship the homepage, four category pages, article detail templates and core trust/utility pages.
- Populate each category with demo content sufficient to test card variety, article lengths, metadata, internal links and content states.
- Make all core navigation, search, share, save/bookmark and RSS functions usable.
- Provide article templates that can later accept the approved SEO launch content without a redesign.
- Keep generated public URLs, metadata, sitemap and RSS consistent with the SEO specifications.
- Make the site usable at mobile, tablet and desktop widths.
- Ensure demo content cannot be mistaken for approved final editorial content or accidentally indexed as such.
- Establish a repeatable verify-review-commit workflow for implementation.

### 4.2 Explicit non-goals

- No user accounts, sign-in, profiles or cloud-synced reading lists.
- No admin dashboard or CMS in V1.
- No comments database or custom comment backend.
- No custom newsletter delivery backend.
- No paid subscriptions, memberships, payments, courses or downloads marketplace.
- No ad code, ad placeholders or `ads.txt` entries before AdSense approval.
- No AI chatbot, personalized recommendations or generative article features.
- No analytics SDK by default; any analytics addition requires a separate privacy and performance review.
- No additional editorial categories beyond Ideas, Build, Launch and Growth.
- No colors outside the approved monochrome grayscale palette. Theme switching is in scope, but no other theme-customization controls are in V1.
- No bulk generation/publication of all 220 researched topics.
- No fake traffic numbers, social proof, reader counts, revenue claims or fabricated biographies.
- No deployment or domain/DNS changes without explicit Product Owner approval.

## 5. Personas and User Jobs

### Persona A — The solo builder

A developer building a small SaaS or developer tool. They need concise guidance, concrete steps, examples and realistic trade-offs.

**Jobs to be done:**
- Find out whether an idea is worth pursuing.
- Scope a build and choose a practical stack.
- Launch with little or no marketing budget.
- Identify early growth activities without copying enterprise playbooks.

### Persona B — The first-time founder

A technically capable person with limited business experience who needs a connected process, not an unstructured pile of links.

**Jobs to be done:**
- Understand the next step in the journey.
- Save useful guides and return to them later on the same device.
- Discover related reading without starting a new search from scratch.

### Persona C — The returning reader

A reader who knows IndieOS and wants to browse a pillar, find a specific topic, use RSS or share an article.

**Jobs to be done:**
- Find a guide quickly using category navigation or search.
- Tell whether an article is current and who published it.
- Copy or share an article URL.

## 6. Product Scope and Release Phases

### Phase 0 — PRD and design approval

Outputs: approved PRD, documented review of the supplied references, a proposed visual direction, information architecture, content schema, relevant skill shortlist and acceptance checklist. No implementation changes yet. Docs/DESIGN-SYSTEM.md exists as the draft visual specification and parent design contract, incorporating the locked monochrome palette tokens and light/dark theme rules.

**Exit gate:** Product Owner approves the PRD and first design reference/screens.

### Phase 1 — Demo V1 implementation

Build the visual system and functional structure using demo articles across all four pillars. The goal is to validate information architecture, article readability, responsive behavior and the main interactions.

**Demo-content rules:**
- Use 3 demo articles per pillar (12 total) as the target fixture set.
- Fixtures should vary in type and length: guide, checklist/tutorial, and launch/growth playbook as appropriate.
- Include a visible internal content status such as `demo`; do not publish fabricated statistics or claims.
- Demo pages may be rendered for local/staging visual QA but must be excluded from production indexation, sitemap, RSS and production structured data.
- A demo deployment must carry a site-wide `noindex,nofollow` configuration and must not be treated as the public SEO launch.
- Demo fixtures must be straightforward to replace with real, reviewed content without changing component code.

**Exit gate:** All Phase 1 acceptance criteria pass; Product Owner has reviewed desktop and mobile captures; no critical accessibility or build issues remain.

### Phase 2 — Editorial and launch readiness

Replace or promote fixtures only after content is written/reviewed under D9 Editorial Playbook standards. The current researched roadmap targets a 14-article launch batch, but the batch should slip intact if it is not ready rather than ship thin or misleading content. Verify metadata, internal links, sources, RSS, sitemap, redirects and live hosting behavior.

**Exit gate:** The article batch and all blocking D8/D10 readiness items are signed off; Product Owner authorizes production deployment.

### Phase 3 — Post-launch operations

Configure Search Console, submit sitemap, inspect indexation, monitor broken links and revisit the content roadmap based on observed data. Re-check current AdSense policies and provider terms before any application or monetization change.

## 7. Information Architecture and Routes

### 7.1 Primary navigation

- Home
- Ideas
- Build
- Launch
- Growth
- Search control
- Saved articles control

Keep the header lightweight and usable at narrow widths. On mobile, any collapsed navigation must be keyboard-operable, have a clear accessible name and close after a route selection.

### 7.2 Required routes

| Route | Purpose | Indexing in demo mode | Indexing in production mode |
|---|---|---|---|
| `/` | Homepage and entry point into the builder journey | `noindex` | `index,follow` |
| `/ideas` | Ideas pillar listing | `noindex` | `index,follow` |
| `/build` | Build pillar listing | `noindex` | `index,follow` |
| `/launch` | Launch pillar listing | `noindex` | `index,follow` |
| `/growth` | Growth pillar listing | `noindex` | `index,follow` |
| `/{pillar}/{slug}` | Article detail | `noindex` | `index,follow` only for approved published articles |
| `/about` | Publication mission and editorial identity | `noindex` | `index,follow` after copy approval |
| `/contact` | Contact route with a real monitored method | `noindex` | `index,follow` after contact method is verified |
| `/editorial-policy` | Editorial standards and correction process | `noindex` | `index,follow` after review |
| `/privacy` | Actual privacy/data-handling disclosures | `noindex` | `index,follow` after practices are verified |
| `/terms` | Terms of use | `noindex` | `index,follow` after review |
| `/authors/{slug}` | Author archive for approved author identity | `noindex` | `index,follow` after author details are approved |
| `/search?q=...` or equivalent | Client-side/static search results | Always `noindex,follow`; omit from sitemap | Always `noindex,follow`; omit from sitemap |
| `/404` / host 404 document | Useful recovery route | `noindex` | `noindex` and real HTTP 404 behavior |
| `/rss.xml` | RSS feed with published articles only | Demo articles excluded | Published articles only |
| `/sitemap.xml` | Canonical indexable URLs | Empty/minimal or withheld for demo domain; never list demo articles | Canonical indexable pages and approved articles only |
| `/robots.txt` | Crawl guidance and sitemap reference | Prevent demo indexation where possible; deploy-level `noindex` remains mandatory | Allows required assets and references sitemap |

**Routing convention:** use only the lowercase pillar names shown above and lowercase, hyphen-separated article slugs. The only trailing-slash URL is the homepage `/`. Category and article links, canonicals, RSS entries and sitemap entries must use the same form.

**Note on Newsletter:** There is NO dedicated `/newsletter` route in V1. Newsletter capture is implemented exclusively as an embedded module on the homepage and optional footer, and is gated on provider verification.

### 7.3 Footer navigation

Footer links: four pillars, About, Contact, Editorial Policy, Privacy, Terms and RSS. Do not render links to unavailable or placeholder destinations. If a launch dependency is not ready, hide the feature or clearly state that it is unavailable in the demo; never leave a dead form or fake email address.

## 8. Core User Journeys

### Journey 1 — Browse from the homepage

1. Reader lands on the homepage.
2. Understands who IndieOS is for and what it covers.
3. Chooses one of the four pillars or selects a featured article.
4. Reads an article and can continue through related articles or breadcrumbs.

### Journey 2 — Browse a pillar

1. Reader selects Ideas, Build, Launch or Growth.
2. Pillar page explains its scope in original copy.
3. Reader scans article cards showing clear title, excerpt, category, date/status and estimated reading time where valid.
4. Reader selects an article or switches to another pillar.

### Journey 3 — Read an article

1. Article opens with headline, short deck/excerpt, author, publication date and reading time where supported by real content.
2. Reader can use breadcrumbs and the table of contents on long articles.
3. Body uses semantic headings, lists, callouts, images with suitable alt text and readable code blocks when relevant.
4. Reader may save, share/copy the link, or continue to related content.
5. Related articles are based on explicit content metadata, not random recommendations.

### Journey 4 — Search

1. Reader activates search via the header.
2. Search interface opens accessibly and focuses the input.
3. Reader enters a query.
4. Results match article titles, descriptions and tags from a build-generated static index.
5. Empty state explains that no results were found and suggests clearing or changing the query.
6. Search never exposes drafts or demo fixtures in production mode.

### Journey 5 — Save and revisit

1. Reader chooses Save/Bookmark on an article.
2. The article is stored in browser `localStorage` on that device only.
3. The control announces its new state accessibly: “Save article” or “Remove saved article”.
4. Saved Articles shows the saved items, an empty state when there are none, and a remove action.
5. Data may be cleared by the reader and is not synced across devices. No account is required.

### Journey 6 — Share an article

1. Reader activates Share.
2. Where supported, the native Web Share API opens; otherwise a Copy Link action copies the canonical URL.
3. Success or failure is conveyed accessibly; if clipboard API is unavailable, a selectable URL or clear fallback is provided.

## 9. Functional Requirements

Priority definitions: **P0 = required for demo V1**, **P1 = required for a production editorial launch**, **P2 = later enhancement**.

### 9.1 Site shell and navigation

- **FR-001 (P0):** Create a consistent site shell with semantic header, navigation, main content and footer.
- **FR-002 (P0):** Provide clear links to all four pillars from the header or mobile navigation and homepage.
- **FR-003 (P0):** Include a visible skip-to-content link.
- **FR-004 (P0):** Provide a branded 404 experience with links back to the homepage and pillars.
- **FR-005 (P0):** Support direct loads and browser refresh on all generated static routes.
- **FR-006 (P0):** Header, mobile menu and footer must work without mouse-only interaction.

### 9.2 Homepage

- **FR-010 (P0):** Hero H1: “Build a small software business you control” (locked canonical H1 across all specifications). The phrase “Build the thing. Launch it. Grow on your terms.” may appear as optional secondary deck or subheading copy below the H1.
- **FR-011 (P0):** State clearly that IndieOS serves indie developers and solo founders and covers Ideas, Build, Launch and Growth.
- **FR-012 (P0):** Display four pillar cards/sections with short original descriptions and clear links.
- **FR-013 (P0):** Display featured demo articles and a latest/recent list using fixture data; layout must support fewer items without breaking.
- **FR-014 (P0):** Include a concise About strip and trust/footer links.
- **FR-015 (P1):** Show a newsletter signup strip only after a real provider is selected, configured and tested. Otherwise omit it.
- **FR-016 (P0):** Do not display invented readership, ratings, social proof, statistics or testimonials.

### 9.3 Category/pillar pages

- **FR-020 (P0):** Implement separate pages for Ideas, Build, Launch and Growth.
- **FR-021 (P0):** Each page contains a clear H1, original description, article list and visible article status where applicable.
- **FR-022 (P0):** Cards use a shared component and render correctly when optional fields are absent.
- **FR-023 (P0):** Sort the default feed by publication date descending only when dates are valid; featured order may be explicitly configured.
- **FR-024 (P0):** If a category has no eligible articles, show a designed empty state rather than broken layout.
- **FR-025 (P1):** In production mode, only approved `published` content is listed.

### 9.4 Article pages and MDX content

- **FR-030 (P0):** Render one shared article template from validated content metadata and an MDX body.
- **FR-031 (P0):** Required metadata: stable ID, title, slug, pillar, description, status, author reference and content body.
- **FR-032 (P0):** Dates, updated dates, reading time, author details and factual claims must not be fabricated. Demo fixtures must be clearly classified in content data.
- **FR-033 (P0):** Article template includes breadcrumb, headline, excerpt/deck, article metadata, body and related links.
- **FR-034 (P0):** Generate a table of contents from H2/H3 headings for long articles; every TOC link must target a unique anchor. Hide the TOC on short articles if it adds no value.
- **FR-035 (P0):** Inline code and code blocks are readable, responsive and copy-friendly where a copy control is provided.
- **FR-036 (P0):** Images have descriptive alt text when informative, empty alt text when decorative, explicit dimensions, and appropriate file sizes.
- **FR-037 (P0):** Related articles are selected from explicit metadata and cannot link to drafts or production-excluded demo posts.
- **FR-038 (P0):** Invalid or missing required frontmatter must fail validation/build loudly instead of emitting guessed metadata.
- **FR-039 (P1):** Production articles have unique title and meta description, author link, original date, relevant modified date, contextual internal links and validated Article/BlogPosting data where supported.
- **FR-040 (P1):** Only articles that pass editorial review can change to `published`.

### 9.5 Demo content system

- **FR-045 (P0):** Include 12 demo fixtures, 3 for each pillar.
- **FR-046 (P0):** Include variety: one guide, one checklist/tutorial and one practical playbook or comparison-style piece per pillar where the topic fits.
- **FR-047 (P0):** Use article fixture data that exercises short and long titles, excerpts of different lengths, lists, code blocks, callouts, TOC, images and related links as applicable.
- **FR-048 (P0):** Store content status explicitly: `demo`, `draft` or `published`.
- **FR-049 (P0):** Demo and draft articles never appear in production sitemap, RSS, public JSON-LD or indexable article lists.
- **FR-050 (P0):** Demo/staging build is globally `noindex,nofollow`; production mode cannot silently promote demo content.
- **FR-051 (P0):** The production build should fail or emit a blocking audit if an article is configured as published without required metadata or owner/editorial approval recorded in the content workflow.

### 9.6 Search

- **FR-055 (P0):** Provide a search entry point visible in the global site shell.
- **FR-056 (P0):** Search runs from a build-generated local index; it must not require a database or third-party search service.
- **FR-057 (P0):** Search matches title, description/excerpt and tags; full-body indexing is optional and requires a bundle/performance review.
- **FR-058 (P0):** Search supports loading/ready, result, empty and error/unavailable states.
- **FR-059 (P0):** Search results page is `noindex,follow`, never appears in sitemap and cannot list drafts or demo content in production.

### 9.7 Bookmarks / saved articles

- **FR-060 (P0):** Bookmark control works without authentication and stores canonical article identifiers in browser `localStorage` only.
- **FR-061 (P0):** Saved Articles page/list includes saved article cards, remove actions and a helpful empty state.
- **FR-062 (P0):** Storage access is guarded so server rendering succeeds when `window`/`localStorage` are unavailable.
- **FR-063 (P0):** The UI explains or otherwise clearly signals that saved articles are stored on this device and are not synced.
- **FR-064 (P0):** Clearing or corrupting local storage does not break the page; the user can recover by clearing saved items.

### 9.8 Sharing

- **FR-065 (P0):** Provide Share or Copy Link controls on articles.
- **FR-066 (P0):** Copy action uses the canonical URL and provides accessible success/failure feedback.
- **FR-067 (P0):** No third-party sharing SDK is required for standard share/copy behavior.

### 9.9 Comments

- **FR-070 (P1, dependency-gated):** Use Giscus only if the selected public GitHub repository is public and GitHub Discussions are enabled and configured.
- **FR-071 (P1):** Comments are not rendered as dead placeholders. If Giscus prerequisites are unmet, hide the comment section until configuration is complete.
- **FR-072 (P1):** Explain the third-party nature of comments in the privacy disclosures before enabling the embed.
- **FR-073 (P1):** Lazy-load the embed where practical and preserve a comfortable reading experience when it is unavailable.

### 9.10 Newsletter

- **FR-075 (P1, dependency-gated):** Select and approve a real newsletter provider before enabling the signup UI. In V1, newsletter capture is an embedded module on the homepage and optional footer; there is no dedicated `/newsletter` route.
- **FR-076 (P1):** The form validates email input, exposes submitting/success/error states and does not claim success unless the provider confirms it.
- **FR-077 (P1):** The provider, data handling, unsubscribe path and privacy policy language must be verified before production use.
- **FR-078 (P0):** During demo V1, hide the production signup form if the provider is not configured; do not send data into a mock endpoint.

### 9.11 Trust and utility pages

- **FR-080 (P0):** Add About, Contact, Editorial Policy, Privacy and Terms route templates.
- **FR-081 (P0):** Mark trust-page copy as `needs-owner-review` until facts, practices and contact details have been approved.
- **FR-082 (P1):** Contact uses a real, monitored contact method or a form service that has been tested end-to-end. Never invent an email address.
- **FR-083 (P1):** Privacy Policy describes actual services, local storage behavior, embedded comments/newsletter provider and analytics/cookies that are actually used.
- **FR-084 (P1):** Public author name, biography, author slug and avatar are owner-approved before indexing. No fake publisher details in JSON-LD.

### 9.12 RSS and SEO output

- **FR-090 (P0):** Establish shared metadata helpers using the Next.js Metadata API and one canonical site-origin setting.
- **FR-091 (P0):** Keep preview/staging builds from emitting production canonicals and production indexation signals.
- **FR-092 (P1):** Generate `sitemap.xml` with only canonical, indexable 200-status pages and approved published articles.
- **FR-093 (P1):** Generate `robots.txt` with a correct sitemap reference and without blocking required assets.
- **FR-094 (P1):** Generate RSS with published articles only and canonical links.
- **FR-095 (P1):** Use structured data only where it matches content visible on the page; do not create fake organization, rating, review, price or author data.
- **FR-096 (P1):** Open Graph/Twitter metadata uses correct title, description, canonical URL and a crawlable branded/social image.
- **FR-097 (P1):** No meta keywords tag.
- **FR-098 (P1):** Search, 404 and demo/draft routes must not be added to the production sitemap.

## 10. Content Model and Editorial Rules

### 10.1 Article schema

Proposed TypeScript-level content contract; final field names may be adjusted after repository reconnaissance, but meaning and validation requirements must be preserved.

```ts
type Pillar = "ideas" | "build" | "launch" | "growth";
type ContentStatus = "demo" | "draft" | "published";

type Article = {
  id: string;                  // stable editorial ID, e.g. DEM-IDE-001
  title: string;
  slug: string;                // lowercase, hyphen-separated
  pillar: Pillar;
  description: string;         // unique summary/meta description
  excerpt: string;
  status: ContentStatus;
  authorId: string;            // references an approved author record
  publishedAt?: string;        // ISO date; required for published status
  updatedAt?: string;          // only after substantive revision
  tags: string[];
  readingTimeMinutes?: number; // computed from content unless manually justified
  featured?: boolean;
  relatedArticleIds: string[];
  coverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seo?: {
    title?: string;
    description?: string;
    noindex?: boolean;
  };
  editorialStatus?: "needs-review" | "approved";
};
```

### 10.2 Content validation

- `id` and final URL must be unique.
- `pillar` must be one of the four fixed pillars.
- `slug` must be lowercase and hyphen-separated; final routes must follow `/{pillar}/{slug}`.
- `title`, `description`, `excerpt`, `status` and body are required for every article record.
- A production article must have a real author record, valid publication date, approved editorial state and unique metadata.
- `updatedAt` is present only after a substantive change, not a spelling-only correction.
- Related IDs must resolve to eligible articles; fail validation or omit invalid relations, rather than render broken links.
- Images must have dimensions and intentional alt behavior.
- Any demo-generated claims, names, dates or stats must be clearly illustrative and must not be promoted into final copy without fact-checking.

### 10.3 Demo fixture topics

Use topics that reflect the site's real subject and likely article formats; treat body copy as placeholder/demo copy until editorial review. These are fixture topics, not a publishing approval:

| Pillar | Demo fixture A | Demo fixture B | Demo fixture C |
|---|---|---|---|
| Ideas | Validate a Micro-SaaS Idea Without Building It | Find SaaS Ideas by Studying Customer Complaints | A Simple Scorecard for Evaluating Product Ideas |
| Build | How to Scope a SaaS MVP | A Free-First Tech Stack for a Solo Developer | Writing a Technical Spec for an AI Coding Agent |
| Launch | How to Launch a Developer Tool | A Practical Show HN Checklist | Build a Waitlist That Tests a Real Assumption |
| Growth | Market a Micro-SaaS Without Paid Ads | What It Takes to Reach $1,000 MRR: A Planning Framework | A Practical Guide to SaaS Landing Page Experiments |

These topics align with the existing research backlog. They must not contain invented performance data or unsupported claims. The content team should eventually use D2/D3/D5 and D9 to approve final keywords, outlines, sources and internal links.

## 11. Design and Visual System

### 11.0 Supplied design-reference review (23 October 2026)

**Status: reviewed; proposed synthesis is pending Product Owner approval.** The supplied files include paired homepage and article-page references for three designs. They should guide visual and interaction decisions, not be treated as a request to clone any template or import an entire exported codebase.

| Reference set | Strongest ideas to study | What not to inherit by default |
|---|---|---|
| **Reference 01 — Magic UI Blog** | Clearly separated category filters; image-led article cards; reusable technical article structures; visible code examples; article contents/navigation rail; related posts; consistent borders and compact controls. | Its dark theme and visible theme toggle are relevant references for the approved dual-theme behavior, but do not use its whole blog UI as IndieOS's visual base. |
| **Reference 02 — Narra** | Magazine-like homepage sections; strong featured story; topic/category discovery; author profiles; spacious editorial hierarchy; long-form story layout with table of contents; related-story cards; contrast from a dark footer/end section. | Avoid news-site density, unnecessarily many homepage modules, and a visual identity that makes IndieOS look like a general news publisher instead of a publication for independent software builders. |
| **Reference 03 — Olivia / Compose** | Typography-led editorial identity; expressive serif headlines; spacious white canvas; soft pastel/gradient used as a focal area; featured article treatment; restrained article-card grid; prominent newsletter section; clear article masthead, author block and related reading. | Do not copy the creator/entrepreneurship brand, its exact visual assets, template copy, identity, or layouts pixel-for-pixel. Avoid making pastel decoration more prominent than article content. |

#### Proposed combination for IndieOS

- **Visual starting point:** the typography-first editorial feel and generous spacing of Reference 03, translated into the approved monochrome palette. Do not copy its pastel or gradient colors.
- **Editorial information architecture:** borrow useful page-section and long-form reading patterns from Reference 02, simplified for the four fixed IndieOS pillars: Ideas, Build, Launch and Growth.
- **Technical article details and components:** selectively use patterns from Reference 01 where they improve code examples, filters, TOC behavior, cards or controls. Its theme toggle may inform interaction details, while IndieOS must use only the approved monochrome tokens.
- **IndieOS identity:** the final result must feel like a publication for indie developers and bootstrapped software builders, not a reskinned creator blog, generic news template or SaaS dashboard.
- **Theme:** V1 supports both light and dark modes. Include an accessible site-wide theme toggle. Use the matching Light or Dark grayscale tokens in §11.2, and keep component contrast and states consistent when switching themes.
- **Typography:** explore an expressive editorial serif for display headlines paired with a highly legible sans-serif for body/UI. The recommended candidate pairing is `DM Serif Display` (display/headings) + `Geist` (body/UI), inspired by Reference 02 (Narra). Note: font licensing, self-hosting options, performance, and final Product Owner approval remain pending before final adoption; do not lock the pairing as final or introduce unverified font licenses.
- **Color:** use only the supplied monochrome Light and Dark palettes in §11.2. Category pills and status indicators must remain monochrome; communicate meaning with text, shape, iconography or labels rather than chromatic colors.
- **Homepage composition to explore:** simple wordmark/navigation; a clear editorial hero; a featured article; a latest-articles grid; a concise way to explore the four pillars; a newsletter feature only when its provider works; and a useful footer. Keep the number of sections intentional rather than reproducing every section from Narra.
- **Article composition to explore:** breadcrumb/category, title and deck, author/date/updated-date/reading-time metadata when valid, prominent hero media, comfortable reading column, table of contents on long articles, semantic body blocks, sources where needed, author information and related articles. On smaller screens, the TOC should move into the reading flow or a keyboard-accessible disclosure rather than occupy a side rail.
- **Motion:** prefer stillness for reading. Magic UI effects are optional; use only a small number of purposeful transitions or decorative treatments, keep them non-blocking, and respect `prefers-reduced-motion`.
- **Assets and code:** the supplied screenshots and HTML exports are references for analysis. Do not assume that remote template images, copy, logos, fonts or full exported Framer code are licensed for reuse. Use original or appropriately licensed IndieOS assets and implement the approved design using the repository's stack.

The Product Owner has specified the strict monochrome palette and approved both light and dark themes with a theme toggle. Exact typefaces, component mapping to palette tokens, hero treatment and page composition remain open for review.

### 11.1 Art direction

**Direction:** modern editorial publication for independent software builders. Calm, high-trust, minimal, typography-first, with clear hierarchy and a distinctive editorial signature. The recommended synthesis above uses Reference 03 for typography and visual balance, Reference 02 for editorial structure, and selected Reference 01 interaction patterns. Avoid a SaaS dashboard aesthetic, giant gradient blobs, excessive glassmorphism, generic feature-grid repetition and gratuitous animation.

### 11.2 Visual rules

- **Palette rule:** monochrome only. No chromatic accent colors, colored category badges, colored status indicators, or color gradients. Use the exact supplied tokens below rather than introducing arbitrary gray values where a token is suitable.

**Light palette**

| Token | Hex | Intended use (semantic assignment to be finalized in the design phase) |
|---|---|---|
| Base | `#FFFFFF` | Main page background / primary light surface |
| 50 | `#FAFAFA` | Subtle raised surface |
| 100 | `#F5F5F5` | Quiet surface / hover background |
| 200 | `#E5E5E5` | Borders and dividers |
| 300 | `#D4D4D4` | Stronger borders |
| 400 | `#A3A3A3` | Muted controls and metadata as contrast allows |
| 500 | `#737373` | Secondary text where contrast passes |
| 600 | `#525252` | Secondary/strong text |
| 700 | `#404040` | Strong text |
| 800 | `#262626` | Near-black surfaces or text |
| 900 | `#171717` | High-emphasis dark surface or text |
| 950 | `#0A0A0A` | Deepest monochrome surface or text |

**Dark palette**

| Token | Hex | Intended use (semantic assignment to be finalized in the design phase) |
|---|---|---|
| Base | `#000000` | Main page background / primary dark surface |
| 50 | `#0A0A0A` | Subtle raised surface |
| 100 | `#171717` | Quiet surface / hover background |
| 200 | `#262626` | Borders and dividers |
| 300 | `#373737` | Stronger borders |
| 400 | `#525252` | Muted controls and metadata background |
| 500 | `#8A8A8A` | Secondary text/surfaces; verify contrast per use |
| 600 | `#A3A3A3` | Secondary text and icons |
| 700 | `#D4D4D4` | Strong text |
| 800 | `#E5E5E5` | High-emphasis text |
| 900 | `#F5F5F5` | Very high-emphasis text/surface |
| 950 | `#FAFAFA` | Lightest text/surface |

- Semantic tokens (background, foreground, card, popover, primary, secondary, muted, accent, border, input, ring) must map to the monochrome palette separately for light and dark themes. “Accent” means a monochrome contrast treatment, never a chromatic color.
- **Theme behavior:** provide a visible, accessible theme toggle with an accurate accessible name and state. Respect the system preference for first-time visitors unless a saved user choice exists; persist the explicit choice locally. Theme switching must not lose the current route, search query or unsaved form input. Avoid a visible theme flash where feasible.
- **Theme icon:** use a monochrome sun/moon or equivalent clear icon; no colored toggle surface. Ensure keyboard operation, focus visibility and screen-reader state announcement.
- **Contrast:** validate actual foreground/background pairs, not palette tokens in isolation. WCAG AA contrast requirements apply in both modes, including muted text, borders where meaningful, controls, focus indicators, code blocks and disabled states.
- A purposeful typography system: expressive display treatment for key headlines and highly readable body text. Decide exact font families after an initial design exploration and approve them before coding.
- Body text line length should remain comfortable for long reading; article column is narrower than listing pages.
- Spacing should be systematic rather than individually improvised.
- Cards should feel editorial, not like dashboard metric cards.
- Images are used only when they explain or enrich the article; do not add stock imagery merely to fill space.
- Motion is subtle, quick and purposeful. Always respect `prefers-reduced-motion`.
- Support both the approved light and dark variants, each using only its supplied monochrome palette. Theme toggle, persistence and system-preference behavior are in scope.

### 11.3 Component strategy

**shadcn/ui** is the foundation for accessible primitives and consistent variants. Install only the components needed by the approved design, such as Button, Input, Dialog/Sheet, Breadcrumb, Tooltip, Card, Separator, Skeleton and Sonner only if toast notifications are used. Do not blindly install the full component catalogue.

**Magic UI** is an enhancement layer, not the design system. Evaluate Blur Fade, subtle text/section entrance, or a restrained marquee only when it supports the editorial concept. The default is little or no motion on article reading pages. Do not add an animation component just because it exists.

Every shared component must specify its relevant states: default, hover, focus-visible, active, disabled, loading, success, empty and error where applicable.

### 11.4 Required design artifacts before implementation

The following are implementation gates. Docs/DESIGN-SYSTEM.md and Docs/SCREEN-SPECIFICATIONS.md have been established as the parent visual and screen contracts, pending formal Product Owner approval before coding.

- Approved design direction / visual reference board.
- Desktop homepage screen.
- Mobile homepage screen.
- Pillar listing screen.
- Article reading screen, including long-title and long-body behavior.
- Search overlay/page and result/empty states.
- Saved Articles and empty state.
- Design tokens: type scale, colors, spacing, radii, borders, shadows, content widths and breakpoints.
- Component inventory: navigation, article card, pillar card, breadcrumb, badge/status, TOC, callout, code block, share/bookmark controls, empty state and footer.
- Motion/reduced-motion rules and responsive behavior.

### 11.5 Visual QA

Capture screenshots at minimum at 360px, 768px, 1024px and 1440px widths. Review typography, content width, wrapping, card density, navigation behavior, focus states, overflow, empty states and reduced motion. Compare against approved references rather than relying on an agent's subjective “looks good” statement.

## 12. Technical Architecture

### 12.1 Preferred stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Selected Magic UI components
- MDX or a validated repository content model for articles
- Static-first rendering/export, where confirmed compatible with required routes and integrations
- Cloudflare Pages Free as target host, with Netlify Free fallback, pending current terms and compatibility checks

Use the repository's existing package manager/lockfile if a project already exists. If creating a fresh repository, select one package manager and commit its lockfile. Pin exact versions through the package manager; do not use automatic bulk dependency upgrades during feature work.

### 12.2 Architecture boundaries

- **Content layer:** validated article fixtures and MDX/body content, separate from presentation.
- **Presentation layer:** reusable server-rendered page templates and UI components.
- **Client-only islands:** search interactions, local bookmarks, mobile navigation, copy/share, and dependency-gated embeds only.
- **SEO layer:** a single shared source for base URL, metadata, canonical generation, JSON-LD, sitemap, RSS and robots rules.
- **External services:** newsletter provider and Giscus only after explicit setup; no secret tokens in browser code.
- **No database/backend in V1:** if a feature later requires server-side state, stop and propose a separate architecture decision rather than silently adding infrastructure.

### 12.3 Static export guardrails

The chosen static export mode must be verified against the actual requirements and hosting provider before it is locked. Next.js static export does not support every server-backed feature. In particular, do not assume request-dependent route handlers, cookies, server actions, runtime rewrites/redirects or draft mode are available in exported output. Plan routes/content at build time and validate the actual generated output.

- Generate all known article routes from validated content at build time.
- Use only browser APIs such as `localStorage` within client-side lifecycle/interaction code, not during server pre-render.
- Avoid default Next.js image optimization unless using a compatible loader or static image strategy.
- Configure correct host-level redirects for apex canonical, HTTPS and trailing slash behavior; test deployed behavior before SEO launch.
- If static export prevents a required launch feature, document the trade-off and obtain Product Owner approval before changing architecture.

### 12.4 Source-of-truth files

Before coding, create or reconcile the minimum useful project context files:

- `AGENTS.md` — concise agent rules, file scope expectations, safety and verification policy.
- `README.md` — setup and verified commands.
- `PROJECT-BRIEF.md` — short mission/scope summary, linked to this PRD.
- `PRD.md` — this document.
- `DESIGN-SYSTEM.md` — approved visual tokens and component conventions.
- `ARCHITECTURE.md` — content model, static rendering boundary, routes and SEO output.
- `TESTING.md` — actual commands and manual/browser checklist.
- `DECISIONS/` — only meaningful architecture decisions that are expensive to reverse.

Do not duplicate this PRD inside `AGENTS.md`; link to it. Keep instructions short, current and non-contradictory.

## 13. SEO, Content Integrity and Indexation

The reconciled D6, D7 and D10 documents remain the detailed SEO authorities. This PRD carries their requirements into product scope; it does not replace those files.

- Canonical origin: `https://indieos.tech`.
- URL shape: `/{pillar}/{slug}`, without trailing slash except `/`.
- One consistent canonical for each production indexable page.
- Unique title and meta description for every indexable page/article.
- Exactly one primary H1 per page as the site's semantic convention; heading hierarchy is sequential.
- Proper Open Graph/Twitter metadata and a real, crawlable social image.
- `sitemap.xml` includes only canonical indexable pages and approved published articles; excludes search, 404, drafts and demo content.
- `robots.txt` references the sitemap and does not block assets needed to render pages.
- RSS includes approved published articles only.
- Structured data reflects visible content; no invented organization data, reviews, ratings, prices or author identities.
- No `meta keywords` tag.
- Related-content and contextual internal links must not create dead or circular placeholder link systems; use explicit IDs.
- Production SEO settings must never leak from a preview/demo build. Demo/staging is globally noindex.
- Every published article must follow D9 fact-checking, sourcing, deduplication and editorial review standards.
- Avoid doorway pages or mass-publishing the 220-keyword database. The D3 launch plan prioritizes a coherent first batch of 14 strong articles and explicitly allows the launch to slip intact if quality is not ready.
- Do not include ad code, ad placeholders or `ads.txt` before AdSense approval. AdSense application remains gated by D8 readiness and a current policy review.

## 14. Accessibility, Performance, Privacy and Security

### 14.1 Accessibility requirements

- Semantic landmarks, logical heading order, labelled inputs and accessible names for icon-only controls.
- Full keyboard access and a visible focus indicator for links, menus, buttons, dialogs, search, bookmarks and share controls.
- Skip link moves focus to the main content.
- WCAG AA contrast for text and meaningful controls; do not rely on color alone.
- Images have intentional alt text; decorative images use empty alt text.
- Dialogs/menus have correct focus behavior and do not trap users unexpectedly.
- Success/error messages are announced appropriately to assistive technologies.
- Reduced-motion preference is respected; motion cannot be necessary to understand content.
- Body type and line length remain readable at 360px viewport width.

### 14.2 Performance targets

Target, not an unverified claim: on the homepage and a representative article, lab measurements should aim for LCP ≤ 2.5 seconds, INP ≤ 200 ms and CLS ≤ 0.1 on a documented mid-range mobile profile. Record the tool, network/throttling and date. These are release targets; lab measurements are not a substitute for future real-user field data.

- Prefer server-rendered/static HTML and small client islands.
- Do not add large client bundles for decorative interactions.
- Reserve image dimensions to prevent layout shift; use sensible modern formats and sizes.
- Lazy-load below-the-fold images and third-party embeds where appropriate.
- Avoid render-blocking third-party scripts beyond approved services.

### 14.3 Privacy and security

- No secrets in source, prompts, screenshots, browser bundles or repository history.
- `localStorage` is used only for the saved-article identifiers in V1; do not store sensitive data.
- Do not add cookies, analytics, or third-party trackers without a documented need and privacy review.
- Validate content metadata at build time; treat MDX/code and externally supplied content as potentially unsafe.
- Avoid raw HTML in MDX unless it is intentionally allowed, reviewed and safely rendered.
- Contact/newsletter/comment providers must be identified and disclosed before use.
- Privacy copy must describe actual deployed behavior, not a generic template that promises unused or nonexistent practices.
- External embeds must not be loaded when disabled and should not block article reading.

## 15. Integrations and External Dependencies

| Dependency | Status | Required action | Blocking? |
|---|---|---|---|
| Newsletter provider | Not selected | Choose provider, verify free plan/limits, test signup/unsubscribe, document privacy behavior | Blocks visible production newsletter form; does not block demo V1 |
| Giscus/GitHub Discussions | Not configured | Confirm repo is public, enable Discussions, configure repository/category and test embed | Blocks production comments; does not block demo V1 |
| Public author details | Needs owner approval | Confirm display name, author slug, bio, avatar decision and links | Blocks real author archive/indexable author data |
| Contact method | Needs verification | Provide real monitored email or choose/test a form provider | Blocks production Contact page content sign-off |
| Domain DNS / hosting | Needs launch-time verification | Confirm registrar, preserve existing DNS records, check current host terms, validate canonical redirects | Blocks production deployment, not local demo work |
| AdSense | Future | Re-check D8 and current official policy; apply only when eligible/readiness gates pass | Not part of demo V1 |

No external dependency may be represented as configured until an end-to-end test has been observed and recorded.

## 16. Acceptance Criteria

Statuses must be reported as **PASS**, **FAIL**, **NOT RUN** or **BLOCKED**. “NOT RUN” must never be reported as “PASS.” These criteria supplement D10's more detailed operational checklist.

### 16.1 Product and content

- **AC-P01:** The homepage explains IndieOS's audience and purpose and exposes the four pillars.
- **AC-P02:** Each of the four pillar routes loads directly and contains an H1, intro and eligible article list.
- **AC-P03:** The demo build has 12 fixture articles, exactly three for each pillar, with varied title/excerpt/body lengths and content blocks.
- **AC-P04:** The fixture set uses explicit `demo` status; production build cannot accidentally include demo content as published content.
- **AC-P05:** Article routes follow `/{pillar}/{slug}`; IDs/slugs are unique and validated.
- **AC-P06:** Missing required metadata or broken internal content references cause a visible build/validation failure rather than invented fallback values.
- **AC-P07:** Long articles show a working TOC; TOC is omitted when it is not useful; anchors are unique.
- **AC-P08:** Related articles resolve to valid eligible articles and never point to missing routes.

### 16.2 Functional UX

- **AC-F01:** All primary navigation, footer links, breadcrumbs and article links work with mouse, touch and keyboard.
- **AC-F02:** Search returns expected fixture results for title, description/excerpt and tag matches; no-match state is usable.
- **AC-F03:** Search results route is noindex and absent from sitemap.
- **AC-F04:** Bookmark save/remove persists through refresh on the same browser and renders the correct Saved Articles state.
- **AC-F05:** Saved Articles shows a deliberate empty state and handles unavailable/corrupted local storage without crashing.
- **AC-F06:** Share/Copy Link uses the canonical URL and exposes success/failure feedback.
- **AC-F07:** No visible form/control is dead; if newsletter/comments/contact dependencies are unmet, the corresponding production control is hidden or replaced with a truthful, approved fallback.
- **AC-F08:** Mobile navigation opens, closes, and changes route correctly with keyboard and touch.
- **AC-F09:** Unknown URLs return a true HTTP 404 after deployment, not a 200 homepage fallback.

### 16.3 Demo/indexation behavior

- **AC-I01:** Demo/staging pages emit `noindex,nofollow`.
- **AC-I02:** Demo articles are excluded from production sitemap, RSS, public JSON-LD and indexable article listings.
- **AC-I03:** Only `published` content with approved editorial status is eligible for production listing, sitemap and RSS.
- **AC-I04:** Production pages use one canonical origin and the final approved URL convention.
- **AC-I05:** There are no meta keywords tags, fake review/rating schema or invented organization/author data.
- **AC-I06:** Search page and 404 are noindex and are not in the sitemap.

### 16.4 Visual, accessibility and performance

- **AC-V01:** Approved desktop and mobile references exist before final UI implementation.
- **AC-V02:** Screenshots are captured and reviewed at 360, 768, 1024 and 1440 CSS pixels.
- **AC-V03:** No horizontal overflow or clipped primary content at 360px width.
- **AC-V04:** Keyboard-only check confirms visible focus, skip link, accessible menu/dialog behavior and operable controls.
- **AC-V05:** Text and control contrast meets WCAG AA requirements in both light and dark modes; meaningful control boundaries and focus indicators remain perceptible without relying on chromatic color.
- **AC-V06:** Reduced-motion preferences are respected; animation does not impair reading or cause essential content to disappear.
- **AC-V07:** Images reserve dimensions and use appropriate alt text; console contains no relevant errors on key flows.
- **AC-V08:** Homepage and article lab performance results are recorded with environment details and evaluated against the targets in §14.2.
- **AC-V09:** Theme toggle switches between the approved light and dark palettes, is keyboard accessible, exposes its state accessibly, and does not leave any component with unreadable contrast.
- **AC-V10:** The selected theme persists across navigation and reloads; first-time behavior respects system preference unless the Product Owner later approves a different default. Theme switching does not lose current route or entered search text.

### 16.5 Engineering and release

- **AC-E01:** Install/dev/lint/typecheck/test/build commands are verified from the actual package scripts and documented.
- **AC-E02:** Lint, typecheck, relevant tests and production build pass, or all failures are reported with cause and next action.
- **AC-E03:** Browser QA covers homepage → pillar → article, search, save/remove, share/copy and the 404 flow.
- **AC-E04:** Independent review checks changed files against this PRD; no unrelated refactors or hidden scope expansion remain.
- **AC-E05:** No new dependency, environment variable, provider or external side effect is introduced without review.
- **AC-E06:** A staging/demo build and production build have distinct, tested indexation behavior.
- **AC-E07:** Hosting plan/terms and host compatibility are checked at deployment time; DNS is not changed without explicit approval.
- **AC-E08:** Product Owner explicitly approves the release before production deployment.

## 17. Implementation Roadmap

Use the sequence below; each slice ends with verification, diff review and a short handoff note.

### Slice 0 — Repository reconnaissance (read-only)

- Confirm whether a repo already exists; inspect branch, status, README, AGENTS, package manager, scripts, current Next.js/Tailwind/shadcn config and deployment state.
- Run baseline checks if safe and record pre-existing failures.
- Do not edit, install dependencies or deploy during reconnaissance.
- Output `RECON.md` with verified facts, commands, unknowns and risks.

### Slice 1 — Product/design contract

- Approve this PRD and the design direction.
- Create `DESIGN-SYSTEM.md` and reference screens.
- Confirm typography, colors, spacing, content widths, card system, mobile header, article layout and restrained Magic UI usage.
- No app implementation until approval.

### Slice 2 — Foundation and shared shell

- Configure or reconcile App Router, TypeScript, Tailwind, shadcn and the chosen content model.
- Implement tokens, global layout, skip link, navigation, footer, button/link variants and responsive primitives.
- Verify build, keyboard and responsive behavior.

### Slice 3 — Content model and 4 pillar pages

- Add schema/type validation and the 12 demo fixtures.
- Build category cards, featured/latest logic, pillar pages and empty states.
- Validate status filters and URL uniqueness.

### Slice 4 — Article template

- Build article header/body typography, breadcrumbs, TOC, code/callout styles, related links, bookmark and share controls.
- Verify short/long content and all responsive states.

### Slice 5 — Search, Saved Articles, RSS and SEO foundation

- Build static search index and usable search states.
- Add local bookmarks and Saved Articles surface.
- Implement metadata helpers, canonical rules, sitemap/RSS/robots behavior per mode, JSON-LD eligibility and 404 handling.
- Demo noindex tests are mandatory before a preview deployment.

### Slice 6 — Trust pages and gated integrations

- Add About, Contact, Editorial Policy, Privacy and Terms templates.
- Keep unapproved copy flagged and integrations hidden until verified.
- Add Giscus/newsletter only after explicit configuration and tests.

### Slice 7 — Independent verification and polish

- Run static checks, relevant automated tests, browser journey tests and visual QA.
- Inspect the full diff against the PRD and source-of-truth docs.
- Fix the largest visual and behavioral mismatches; don't refactor unrelated code.

### Slice 8 — Demo deployment (approval required)

- Check host terms and configuration.
- Deploy a non-indexable preview/demo environment after approval.
- Smoke-test direct routes, redirects/404 behavior, metadata and core interactions.
- Do not change production DNS or deploy an indexable site without explicit owner approval.

### Slice 9 — Production editorial launch (later gate)

- Replace demo fixtures with approved content from the D3 plan under D9 review.
- Review all D8 AdSense readiness blockers; ads are still excluded unless/ until approval.
- Re-check current hosting terms, SEO rules, privacy notices, contact/author details and external integrations.
- Submit sitemap and Search Console property once live; record smoke tests and rollback path.

## 18. Coding-Agent Workflow and Guardrails

Follow the Vibe Coding A–Z Playbook 2.0:

1. **Understand:** read this PRD and only the relevant source documents/files; summarize task, constraints and unknowns.
2. **Specify:** give the slice an observable outcome, allowed files, acceptance criteria, non-goals and stop condition.
3. **Plan:** list files, steps, risks and actual verification commands; wait for approval when scope or architecture changes.
4. **Implement:** make one small coherent change. Reuse existing patterns; avoid unrelated refactors.
5. **Verify:** run checks that were actually defined and capture browser evidence where relevant.
6. **Independently review:** review the diff against this PRD and devise test cases from requirements, not only from the implementation.
7. **Report:** mark each gate PASS/FAIL/NOT RUN/BLOCKED; give exact commands and observed results; list changed files and remaining risks.
8. **Stop:** if requirements conflict, an expected command cannot be found, static export blocks a requirement, or a critical unknown appears, state the issue and do not silently broaden scope.

### Mandatory change controls

Ask before: adding a dependency; changing the canonical URL convention; adding a backend/CMS/database; selecting a paid provider; changing the deployment/host; running destructive commands; modifying production DNS; changing indexation behavior on the production domain; adding analytics/ad code; publishing demo content as real editorial content.

## 19. Skills.sh Skill Recommendations

Skills are reusable agent procedures, not a guarantee of code correctness. Install only skills relevant to the current phase, inspect their `SKILL.md` before trusting them, and remove/avoid duplicates. The official skills CLI supports installing an individual skill with `npx skills add <owner/repo> --skill <skill-name>`.

### Recommended core set for implementation

| Skill | Why it fits IndieOS | Install command | Timing |
|---|---|---|---|
| `frontend-design` from `anthropics/skills` | Helps define a distinctive editorial art direction before coding and avoids template-like AI design | `npx skills add anthropics/skills --skill frontend-design` | Before design exploration |
| `magic-ui` from `magicuidesign/magicui` | Provides usage guidance for Magic UI components and motion restraint | `npx skills add magicuidesign/magicui --skill magic-ui` | Before adding Magic UI components |
| `shadcn` from `shadcn-ui/ui` | Helps use shadcn/ui CLI and source-owned components consistently | `npx skills add shadcn-ui/ui --skill shadcn` | During UI foundation work |
| `web-design-guidelines` from `vercel-labs/agent-skills` | Independent pass for UI, UX and accessibility guideline compliance | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` | After major visual slices and before release |
| `next-best-practices` from `vercel-labs/openreview` | Current Next.js App Router patterns, including version-sensitive conventions | `npx skills add vercel-labs/openreview --skill next-best-practices` | Before architecture/foundation work |
| `webapp-testing` from `anthropics/skills` | Playwright-based browser testing for real routes, interactions and screenshots | `npx skills add anthropics/skills --skill webapp-testing` | Once the local site exists |

### Optional workflow helper

`vercel-react-best-practices` from `vercel-labs/agent-skills` may be added if performance/component-boundary issues arise:

```bash
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices
```

Do not install every skill at once. Start with the five core design/component/Next.js skills; add browser testing when the application exists. Review shell-command directives and any external downloads before installation. Follow the skills CLI syntax recommended by each skill page and do not copy package-manager commands blindly if the repository uses a different package manager.

## 20. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Overdesigned UI harms reading | High | Editorial design rules, minimal motion, narrow article column, reference-based visual QA |
| Demo content becomes indexable | High | Separate demo/production modes, global demo noindex, content-status gates, sitemap/RSS filters and build checks |
| Static export blocks an assumed capability | Medium/high | Confirm exact Next.js/host support before implementation; avoid server-only requirements in V1 |
| Scope creep into CMS/accounts/backend | High | Explicit non-goals, ask-before-change controls, one feature slice per prompt |
| Dead newsletter/comments/contact UI | Medium | Hide until provider/method is configured and end-to-end tested |
| Inaccurate SEO schema or metadata | High | Central builders, content validation, automated sitemap/metadata checks and owner approval |
| Unverified author or publisher identity | High | Use no invented author/organization facts; block production author schema/archive until approved |
| Third-party scripts slow pages or add privacy burden | Medium | Only add required integrations, lazy-load embeds and document privacy impact |
| Host policy/terms change | Medium | Re-check provider terms immediately before production deployment |
| Agent silently broadens changes | High | Explicit file scope, diff review, independent tests, approval checkpoints |

## 21. Definition of Done

A slice is not done simply because code has been generated. It is done only when:

- The implementation matches the approved requirement and remains within scope.
- Relevant loading, empty, error, disabled, success and recovery states are addressed.
- Responsive behavior is checked at required widths.
- Accessibility basics are checked, including keyboard/focus/reduced motion.
- Relevant lint, typecheck, tests and production build were run and actual results captured.
- Browser QA and screenshots were performed for visual or interaction changes.
- SEO/indexation behavior is verified where routes/content changed.
- Diff contains only intentional changes and introduces no unapproved dependency/external effect.
- Documentation and decision records are updated if behavior or architecture changed.
- Product Owner accepts the work before shipping or moving to the next risky phase.

## 22. Decisions Still Required Before Production Launch

These do not block the first local demo implementation unless the work specifically touches them, but they do block the respective production feature:

1. Approve public author name, author slug, biography and any external profile links.
2. Select and test a newsletter provider, or explicitly decide to omit newsletter from the initial production release.
3. Confirm a monitored contact email or test a form provider end-to-end.
4. Make the repository public and enable/configure GitHub Discussions if Giscus comments are wanted.
5. Confirm current hosting terms, DNS state and apex/`www`/HTTPS redirect behavior before deployment.
6. Approve final visual direction, typefaces (candidate pairing `DM Serif Display + Geist`) and semantic token assignments before UI coding. The monochrome palette and support for both light and dark themes are fixed; exact token hex values are specified in §11.2.
7. Confirm what counts as the demo preview URL/environment and ensure it cannot accidentally index.
8. Before public editorial launch, review the 14-article D3 batch and D8 AdSense-readiness gates; no ads or AdSense application before the documented gate passes.

## 23. Source Documents and References

### Internal source of truth

- `D1-executive-research-report.md` — opportunity, limitations and research caveats.
- `D3-prioritized-shortlist-and-roadmap.md` — researched 14-article launch batch and sequencing.
- `D5-topic-cluster-map.md` — topic clusters, URL decision and internal-link logic.
- `D6-website-seo-specification-reconciled.md` — page-level SEO and technical requirements.
- `D7-page-level-seo-matrix-reconciled.csv` — route-specific SEO mapping.
- `D8-adsense-readiness-checklist.md` — future advertising readiness gate.
- `D9-editorial-playbook.md` — editorial quality, sourcing, deduplication and update rules.
- `D10-implementation-acceptance-criteria-reconciled.md` — detailed engineering/launch checklist.
- `Refrence-01_homepage.png` and `Refrence-01_blogpage.png` with corresponding HTML exports — Magic UI Blog component/layout reference, including a theme-toggle interaction reference.
- `Refrence-02_homepage.png` and `Refrence-02_blogpage.png` with corresponding HTML exports — Narra editorial magazine and long-form article reference.
- `Refrence-03_homepage.png` and `Refrence-03_blogpage.png` with corresponding HTML exports — Olivia / Compose typography-led editorial reference; use its typography and layout ideas only, not its pastel colors.
- `Vibe_Coding_AZ_Playbook_2.0(3).pdf` — governing workflow guidance, especially: nine-stage lifecycle (p. 1), risk lanes and professional loop (pp. 2-3), executable product brief and acceptance criteria (p. 5), design/context/repository setup (pp. 6-8), small-slice implementation and states (pp. 8-9), independent verification (pp. 10-11), security/agent trust boundaries (p. 12), release/operations (pp. 13-14), anti-patterns and master checklist (p. 15), workflow and prompt templates (pp. 16-18).

### External references (checked 23 October 2026)

- [skills.sh directory](https://www.skills.sh/) — catalogue and skill discovery.
- [skills CLI command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md) — installation and per-skill commands.
- [Anthropic frontend-design skill](https://www.skills.sh/anthropics/skills/frontend-design).
- [Magic UI skill](https://www.skills.sh/magicuidesign/magicui/magic-ui).
- [shadcn/ui skill](https://www.skills.sh/shadcn-ui/ui/shadcn).
- [Vercel web-design-guidelines skill](https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines).
- [Next.js best-practices skill](https://www.skills.sh/vercel-labs/openreview/next-best-practices).
- [Anthropic webapp-testing skill](https://www.skills.sh/anthropics/skills/webapp-testing).
- [Next.js App Router documentation](https://nextjs.org/docs/app/getting-started).
- [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports) — confirms static export outputs route HTML but does not support every server-backed Next.js feature; re-check against the pinned version before implementation.
- [Magic UI installation documentation](https://magicui.design/docs/installation).

---

**Approval record**

- Product Owner approval: `PENDING`
- Design direction approval: `PENDING`
- Demo-mode/indexation strategy approval: `PENDING`
- Production launch approval: `NOT IN SCOPE OF THIS DRAFT`
