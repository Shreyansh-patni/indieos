# D6 — IndieOS Website SEO Specification

- **Site:** IndieOS — https://indieos.tech (canonical origin; see §2.1)
- **Audience:** Indie developers and solo founders
- **Pillars (fixed names):** Ideas · Build · Launch · Growth
- **Stack:** Next.js App Router + TypeScript + Tailwind CSS + MDX in GitHub; static-first (`output: 'export'` unless a feature forces otherwise)
- **Hosting budget:** ₹0 — see §8 for the verified host recommendation
- **Launch target:** 31 Oct 2026 · **AdSense application target:** Jan 2027 · **Domain expires:** Feb 2027 (renew before applying; see §8)
- **Research date / date checked for every source in this document:** 2026-10-23
- **Evidence rule:** Every Google or host requirement below is tied to an official source listed in §10. Where Google publishes no rule, this spec says so instead of inventing one. Practitioner conventions are labelled **[Convention — not a Google requirement]**.

> **No-guarantee statement (applies to the whole document):** Following this specification improves crawlability, indexability and policy compliance. It does **not** guarantee indexing, ranking, rich results, snippets as written, or AdSense approval. Google states there is no guarantee any site will be added to its index even when it follows the Search Essentials, and that structured data enables a feature without guaranteeing it will be shown. Sources: SEO Starter Guide; Introduction to structured data — §10.

---

## 1. Governing principles — brief §11 metadata rules (applied verbatim)

These rules govern every page type in §§3–5 and every row of D7. They are restated here so the builder does not need to re-derive them.

1. **No meta keywords tag.** Google Search does not use the `keywords` meta tag. Do not emit `<meta name="keywords">` anywhere. (SEO Starter Guide, “Things we believe you shouldn't focus on”.)
2. **Snippets are not guaranteed.** The snippet is sourced primarily from page content; the meta description is only one possible source. Write meta descriptions as honest summaries, never as a promise of what Google will display. (SEO Starter Guide, “Control your snippets”.)
3. **No keyword stuffing; no character-count rules.** Keyword stuffing is against Google's spam policies. Google publishes no ideal title length, meta-description length, heading count, or word count in the sources checked. Lengths in this spec are readability conventions only, labelled as such; they are never ranking rules.
4. **Structured data only where page content supports it.** Markup must be a true representation of visible page content. Do not mark up content not visible to readers, irrelevant content, or misleading content. (General structured data guidelines.)
5. **No fake ratings, reviews, or authors.** Do not add `aggregateRating`, review markup, author names, credentials, or dates that are not real and visible on the page. Fabricated authorship is deception under Google's helpful-content guidance.
6. **No `noindex` merely for being new.** A new or low-traffic page that is useful and intended for readers stays indexable. Use `noindex` only for pages whose purpose is not search discovery (search results, 404, drafts, thank-you states) — see §6.
7. **Do not block important pages in robots.txt.** robots.txt controls crawling, not indexing. A disallowed URL can still be indexed (without content) if linked elsewhere. Never disallow a page, CSS, JS, or image needed to render or understand indexable content. (Introduction to robots.txt; General structured data guidelines — Access.)
8. **Consistent canonical origin.** One origin everywhere: scheme, host, canonical tags, sitemap, RSS, Open Graph URLs, structured-data URLs, internal links, and redirects must all use the single canonical origin defined in §2.1. Mixed origins split signals.

**Helpful-content test (applies to every article and hub page):** content must be people-first — original information or analysis, first-hand expertise where claimed, a clear primary purpose for the site, and a reader who leaves having achieved their goal without needing to search again. Google explicitly asks: “Are you writing to a particular word count because you've heard or read that Google has a preferred word count? (No, we don't.)” (Creating helpful, reliable, people-first content.)

---

## 2. Global decisions

### 2.1 Canonical origin and host form

| Decision | Value | Why |
|---|---|---|
| Canonical origin | `https://indieos.tech` (apex, HTTPS, no `www`) | One origin only (Principle 8). Google prefers HTTPS over HTTP as canonical when signals are consistent. Either apex or `www` would work; apex is shorter and matches the brand. The choice matters less than never mixing the two. |
| Redirects | `http://indieos.tech/*` → `https://indieos.tech/*` (301/308); `https://www.indieos.tech/*` → `https://indieos.tech/*` (301/308); single hop, no chains | Redirects are the strongest canonicalization signal. (Canonicalization guide.) |
| Trailing slash | No trailing slash except root `/`. `/ideas` not `/ideas/`; articles `/ideas/[slug]` | **[Convention]** — pick one form, enforce it in Next.js config and host redirects, canonicalize to it, and use it in sitemap/RSS/internal links. Google treats slash variants as separate URLs until canonicalized. |
| Case / encoding | Lowercase URLs only; hyphens between words; no uppercase duplicates; no session IDs or tracking parameters in canonical URLs | Descriptive, human-intelligible URLs. (SEO Starter Guide, “Use descriptive URLs”.) |
| Environment variable | `NEXT_PUBLIC_SITE_URL=https://indieos.tech` — the single source every metadata, canonical, sitemap, RSS and JSON-LD builder reads | Prevents preview/staging origins leaking into production metadata. Preview deployments must emit `noindex` and must never be the canonical target. |

### 2.2 Phasing

#### A) Implement before launch (in code / content, before 31 Oct 2026)

- Canonical origin, redirect and trailing-slash rules (§2.1, §7).
- Next.js Metadata API setup: metadata templates, per-page unique title/description, canonical generation, Open Graph/Twitter defaults and overrides (§§3–5).
- `sitemap.ts` and `robots.ts` (or static equivalents) generating only canonical, indexable, 200-status URLs; draft exclusion (§7).
- Templates for homepage, four pillar pages, article, author archive, trust/utility pages, search, 404 — with heading hierarchy, breadcrumbs and internal-link components (§§3–5).
- Structured-data builders (JSON-LD only, only where content supports it) with build-time validation (§§3–5, §7).
- Image pipeline, fonts, Core Web Vitals budgets, accessibility basics (§7).
- All trust/utility pages live and linked from footer/nav: About, Contact, Privacy Policy, Terms, Editorial Policy (§6). Privacy Policy must already describe actual practices; advertising/cookie disclosure wording is finalized again before AdSense code is added (see D8).
- RSS feed generation and validation (§5, §6).
- Draft workflow: drafts excluded from navigation, index, RSS and sitemap at build time (§5).

#### B) Verify only after deployment (needs the live origin)

- Google Search Console: create Domain property for `indieos.tech`, verify ownership, submit `sitemap.xml`, inspect representative URLs (home, one pillar, one article) with URL Inspection / live test.
- Confirm live redirects are single-hop 301/308, live canonical tags match §2.1, live `robots.txt` blocks nothing important, live 404 returns HTTP 404.
- Rich Results Test + Schema Markup Validator on live homepage, pillar and article URLs; Search Console Rich result status reports once data accrues.
- Core Web Vitals field data (Search Console CWV report / PageSpeed Insights) on real traffic; lab checks alone are not field data.
- RSS validator pass on the live feed URL; broken-link crawl of the deployed site.
- Host checks: custom domain + HTTPS certificate active, `_redirects`/`_headers` (or host equivalent) behaving as configured, `ads.txt` reachability — only after AdSense approval supplies the publisher line (see D8).

#### C) Ongoing after publication

- Search Console monitoring: Pages (indexing) report, Sitemaps report, Manual Actions, structured-data reports, CWV report — review after each release and at least monthly.
- Broken-link / 404 log review; fix or redirect moved URLs with a single permanent redirect; never leave internal links pointing at redirects.
- Metadata stewardship: every new article ships with a hand-written unique description (§5); quarterly duplicate title/description audit via Search Console exports / crawl.
- Content stewardship per helpful-content guidance: update or remove stale articles; never change a date without a substantial content change.
- Sitemap hygiene: `lastmod` only when content verifiably changed (Google uses `lastmod` only if consistently accurate, and ignores `priority`/`changefreq`).
- Policy watch: re-check AdSense Program Policies, Publisher Policies and Search Essentials before the Jan 2027 application and after any major site change (policies change; staying current is the publisher's responsibility).
- Domain renewal: renew `indieos.tech` well before Feb 2027 so the AdSense application and review never run on a lapsing domain.

---

## 3. Homepage specification — `https://indieos.tech/`

| Element | Specification |
|---|---|
| **Primary intent** | **Branded / navigational first, non-branded discovery second.** At launch the homepage is what people who already heard “IndieOS” (from X, Reddit, LinkedIn, word of mouth) land on to confirm this is the right publication and to enter a pillar. It is not expected to win broad non-branded queries on its own — non-branded discovery is the job of pillar pages and articles (§§4–5 of the keyword work; this spec only assigns the homepage the discovery role it can honestly serve: a clear topical statement of what IndieOS covers, so search engines can understand the site's primary purpose). Do not stuff the homepage with every pillar keyword to chase non-branded traffic. |
| **SEO title** | `IndieOS — Practical guides for indie developers and solo founders` |
| **Meta description** | `IndieOS publishes practical; evidence-based guides for indie developers and solo founders — from finding an idea to building; launching and growing a small software business.` (Hand-written, unique; snippet display not guaranteed — Principle 2.) |
| **H1 (one only)** | `Build a small software business you control` — reader-facing headline; the topical statement is carried by the intro copy and title, not by keyword-loading the H1. **[Convention]** Exactly one H1 per page is an accessibility/clarity convention in this spec, not a Google ranking rule (Google states heading order/count do not affect ranking; semantic order still helps screen readers). |
| **Intro copy requirements** | 60–120 words **[Convention — readability, not a ranking rule]** directly under the H1 stating: who IndieOS is for (indie developers / solo founders), what it publishes (practical guides across Ideas, Build, Launch, Growth), and how it works (evidence-based, written from real building experience, no hype). Must name all four pillars in natural language so the homepage's topical purpose is unambiguous to a first-time reader and to a crawler. No “welcome to our website” filler; no claims (traffic, readers, results) that are not true yet. |
| **Sections (in order)** | 1) Hero (H1 + intro + primary CTA). 2) Pillars — four cards/sections, one per pillar, each with a 1–2 sentence original description and a link to the pillar page (H2 per pillar). 3) Featured articles — 3–6 editorially chosen articles with title, 1-line hand-written summary, author, date (not an auto-dump of newest posts). 4) Latest articles — most recent 6–9 across pillars with pillar label. 5) About strip — 2–3 sentences on who writes IndieOS + link to About and Editorial Policy. 6) Newsletter strip (if newsletter exists at launch; otherwise omit rather than ship a dead form). 7) Footer with pillar nav, About, Contact, Privacy, Terms, Editorial Policy, RSS. |
| **Internal links** | To: each pillar page (from pillar section + nav + footer), every featured/latest article shown, About, author archive(s). Descriptive anchor text that names the destination topic; no “click here”. Homepage must link to every pillar; every pillar and article must be reachable from the homepage within 2 clicks (orphan prevention, §7). |
| **Canonical** | Self-referencing absolute canonical: `https://indieos.tech/` |
| **Open Graph / Twitter** | `og:type=website`, `og:site_name=IndieOS`, `og:title` = SEO title, `og:description` = meta description, `og:url` = canonical, `og:image` = dedicated 1200×630 branded image with alt-relevant filename; `twitter:card=summary_large_image` with matching title/description/image. OG image must be crawlable (not blocked in robots.txt) and actually depict brand/site, not a fake article visual. |
| **Structured data** | `WebSite` + `Organization` **only if the visible content supports them**: Organization only with the real publisher name, real logo URL, and real same-as/profile links that exist — omit any property that is not true yet. WebSite only for the site identity; add `potentialAction`/`SearchAction` **only if** a working on-site search exists whose query URL the markup describes. No ratings, no fake founding data, no invented social profiles. JSON-LD, in `<head>`, validated (§7). If either object would require an invented value, ship the homepage with no structured data rather than false structured data. |
| **Indexing** | Index, follow. Included in sitemap. Not in RSS (RSS is for articles). |
| **CTA** | Primary: “Start with Ideas” (to `/ideas`) or the current featured guide — one primary CTA only in the hero. Secondary: newsletter signup if live. No pop-up/interstitial that blocks reading on arrival; no ad slots on the homepage before AdSense approval (and after approval, never above content in a way that pushes all content below the fold — see D8). |
| **Accessibility / performance** | Semantic landmarks (`header/nav/main/footer`), skip link, visible focus, pillar cards fully keyboard-operable, hero image (if any) with descriptive alt or `alt=""` if purely decorative, colour contrast AA, LCP element is server-rendered text or a preloaded optimized image — targets in §7 checklist row 22. |

---

## 4. Category (pillar) page specifications

Common rules for all four pillars (differences are in the table below):

- **Not a thin list of links.** Each pillar page must contain, above the article list: (1) a unique intro (see per-pillar copy brief) that defines the stage, who it is for, and what the reader will be able to do; (2) a “Start here” featured guide chosen editorially with a hand-written 2–3 sentence summary explaining why it is first; (3) sub-topic groupings (cluster headings as H2) with a 1-sentence original description per group, articles listed under the group they belong to; (4) a closing section linking onward to the next pillar and back to relevant articles in other pillars. Article cards carry a hand-written 1-line summary (from the article's own description), author and date — never title-only cards, never auto-extracted first-sentence excerpts duplicated across the site. A pillar with zero published articles is **not published as an empty page**: it stays a draft (excluded from nav/index/sitemap/RSS) until it has at least its intro, its start-here guide, and a small set of real articles to group. **[This is an editorial completeness rule for IndieOS, not a Google minimum — Google publishes no minimum article count per category.]**
- **Layout:** H1 → intro → Start here (featured) → grouped latest/all articles (H2 per group) → “Keep going” cross-pillar section → newsletter strip (if live).
- **Breadcrumbs (visible + markup):** Home › [Pillar]. Visible breadcrumb must match any `BreadcrumbList` markup exactly.
- **Canonical:** Self-referencing absolute canonical on the pillar URL; paginated/filtered variants (if ever introduced) canonicalize per §7 — no parameter duplicates.
- **Indexability:** Index, follow, in sitemap, not in RSS.
- **Structured data:** `BreadcrumbList` (mirroring the visible trail) + `CollectionPage`/`ItemList` **only** describing the articles actually listed and visible on the page, in the order shown. No `Article` markup on the pillar page itself (the articles have their own pages), no ratings, no FAQ markup unless a real, visible FAQ section exists on that page.
- **Internal linking:** From nav, homepage pillar section, footer, every article in the pillar (via breadcrumb + “More in [Pillar]”), and the neighbouring pillars' “Keep going” sections. Descriptive anchors naming the stage outcome (e.g. “validate an idea before you build”), not just “Ideas”.

| | **Ideas** — `/ideas` | **Build** — `/build` | **Launch** — `/launch` | **Growth** — `/growth` |
|---|---|---|---|---|
| **Primary intent** | Informational: help a developer find and judge a software idea worth pursuing | Informational / how-to: help a solo builder ship the product with a lean stack | Informational / how-to: help a founder launch to first users without paid ads | Informational / how-to: help a founder get repeatable users and revenue after launch |
| **SEO title** | `Ideas for Indie Developers — Find and Validate Your Next Product \| IndieOS` | `Build — Ship Your Indie Product with a Lean Stack \| IndieOS` | `Launch — Get Your First Users Without Paid Ads \| IndieOS` | `Growth — Grow Users and Revenue for Your Indie Product \| IndieOS` |
| **Meta description** | `How indie developers find; test and choose software ideas — validation methods; real demand signals and honest kill criteria before you write code.` | `Practical build guides for solo founders — choosing a stack; scoping an MVP; shipping and deploying a small product you can maintain alone.` | `Launch playbooks for indie products — waitlists; communities; Product Hunt and directories; and what to do in the first 30 days after release.` | `Growth guides for indie products — SEO; content; referrals and pricing experiments that compound for a solo founder with no ad budget.` |
| **H1** | `Find an idea worth building` | `Build it lean; ship it solo` | `Launch to your first real users` | `Grow without burning out or buying ads` |
| **Intro copy brief (unique per pillar; 100–180 words [Convention])** | Defines the idea stage: the difference between an idea and evidence of demand; promises validation methods, teardown-style analysis and explicit kill criteria; states who it is for (developers with skills but no proven idea). Must not promise income or “proven ideas that print money” — deceptive-claims risk (Publisher Policies) and helpful-content honesty both prohibit it. | Defines the build stage for a one-person team: scope control, stack choices for maintainability, MVP discipline, deploying cheaply. Names the trade-off honestly (speed vs. debt) and states the pillar assumes the idea was validated in Ideas. | Defines launch as a sequence, not a day: pre-launch audience, launch channels, launch-day execution, first-30-days follow-up. States plainly that no channel guarantees users. | Defines growth as repeatable systems after first users: search/content, community, referrals, pricing and retention for tiny teams; explicitly excludes growth-hacking tricks, bought traffic and engagement manipulation. |
| **Featured / Start here** | The validation-framework guide | The MVP-scoping guide | The 30-day launch plan guide | The first-growth-channel guide |
| **Cross-pillar flow** | → Build (“once an idea survives validation”) | ← Ideas · → Launch | ← Build · → Growth | ← Launch · → Ideas (next product / new features) |

Article URL note: articles live under their pillar path in this spec's examples (e.g. `/ideas/validate-saas-idea`). The pillar-vs-flat decision and its technical trade-offs are analysed in §9 without a verdict, per the brief — D5 makes the final recommendation. Whichever structure D5 chooses, §§2–6 apply unchanged: one canonical URL per article, pillar page as its hub, breadcrumb reflecting the chosen hierarchy truthfully.

---

## 5. Article page specification — template for every article

Example pattern: `https://indieos.tech/ideas/[slug]` (subject to the §9 / D5 structure decision).

| Element | Specification |
|---|---|
| **SEO title template** | `{Article title as written for readers} \| IndieOS` — generated from the article's frontmatter `title` only. The frontmatter title must itself be descriptive, unique across the site, and an accurate summary of the content (title-link guidance). Never append pillar keywords, year-stamps or “best/top” claims the article does not support. If two articles would collide, rewrite a title at authoring time — do not deduplicate with numbers. |
| **H1 rule** | Exactly one H1, equal to the article's reader-facing headline. It may differ slightly from the SEO `<title>` (e.g. shorter on-page form) but must describe the same content and must not make a stronger claim than the article delivers. Heading hierarchy thereafter: H2 for main sections, H3 inside them, no skipped levels for styling — use CSS for appearance. (Order is an accessibility convention; Google states heading order does not affect ranking.) |
| **Meta description — authoring method** | **Hand-written per article in frontmatter (`description:`), unique to that article, 1–2 sentences summarising what the reader will learn or be able to do.** Never auto-generated from the first paragraph, never templated with swapped keywords, never copied from another article. Build must warn/fail on a missing or duplicate description (see “Missing-metadata handling”). Snippet display is not guaranteed (Principle 2): the description is a summary offer to Google, and the article's opening paragraph must independently summarise the piece because Google may source the snippet from body content. |
| **Canonical generation** | Build-time, absolute, self-referencing: `metadataBase` = canonical origin + article's own path via the Next.js Metadata API `alternates.canonical`. No query parameters, no trailing slash, no preview origin. Syndicated/republished pieces (avoid by default) would canonicalize to the original with permission — IndieOS default is original-only publication. |
| **Author + author archive** | Visible byline with the real author's name linking to their author archive page (`/authors/[slug]`). The same person must be the `author` in structured data, with the archive URL as `author.url`. No byline for a person who did not write/review the piece; no stock-photo personas. Author archive: real bio, real areas covered, list of their articles with summaries (not a thin list — same completeness rule as §4). |
| **Dates** | Visible “Published [date]” and, only when the article was substantially revised, “Updated [date]”. Frontmatter `datePublished` / `dateModified` (ISO 8601 with timezone) feed the visible dates, structured data, sitemap `lastmod` and RSS — all four must agree. Never bump a date without a substantial change (helpful-content guidance names this as a warning sign). |
| **Structured data — Article / BlogPosting** | JSON-LD `@type: BlogPosting` (the specific Article subtype for IndieOS posts; `Article` is the fallback if a piece is not a blog post) with only true, visible-supported properties: `headline` (= H1), `description`, `image` (the article's real representative image, absolute crawlable URL), `datePublished`, `dateModified`, `author` (Person with `name` + `url` to the author archive), `publisher` (Organization matching the homepage Organization, with real logo), `mainEntityOfPage` (= canonical). Plus a separate `BreadcrumbList` mirroring the visible breadcrumb (Home › Pillar › Article). **Prohibited:** `aggregateRating`, review, FAQ, HowTo or any other type unless that exact content is visibly present and the specific feature documentation is followed; no keywords-stuffed `articleSection` spam (a single honest pillar name is fine). Validate every template change with the Rich Results Test (B-phase, §2.2). Structured data enables eligibility; it does not guarantee a rich result. |
| **Heading hierarchy & TOC / anchors** | Articles over ~4 H2 sections **[Convention]** render a table of contents generated from the actual H2/H3 headings, each with a stable `id` anchor (slugified heading, deduplicated at build). TOC links are ordinary in-page anchors with descriptive text. Heading `id`s must be stable across edits unless the heading text changes (external deep links depend on them). |
| **Images** | Every non-decorative image: descriptive hand-written `alt` text explaining the image's relationship to the surrounding content (not the filename, not keyword repetition); placed near the relevant text; served optimized (see §7 — WebP/AVIF via the static image pipeline, explicit `width`/`height` to prevent layout shift, lazy-load below the fold, preload only a true LCP hero image). Screenshots must be real captures of what the article discusses, labelled as such. Decorative images: `alt=""`. |
| **Code blocks** | Semantic `<pre><code>` with a `language-*` class for highlighting; code is real, tested where the article claims it works, and copyable without the prompt symbols. Long lines scroll horizontally inside the block — never overflow the page. Code content is part of the article's indexable text; do not render code as images. |
| **Contextual internal links** | Minimum pattern **[editorial rule, not a Google minimum]**: link in-body (not only in nav/cards) to (a) the pillar hub, (b) the prerequisite/next-step article where a genuine sequence exists, (c) any IndieOS article the text actually builds on. Anchor text describes the destination. Outbound links to primary sources where claims are sourced; `nofollow`/`sponsored` only where the relationship requires it (untrusted or paid links), not as a default. |
| **Related articles** | End-of-article section: 3 articles — same-pillar first, editorially related (frontmatter `related:`) before any automated fallback; cards with hand-written summaries. No infinite scroll, no auto-generated “you may also like” link farm. |
| **Breadcrumbs** | Visible trail Home › [Pillar] › [Article short title] above the H1 or directly under the header; markup mirrors it exactly (§5 structured data). On the flat-URL alternative (§9) the trail still shows the editorial hierarchy (Home › Pillar › Article) — breadcrumbs describe navigation hierarchy, which the visible site structure (hub pages) supports in either URL scheme. |
| **Social metadata** | Per-article OG/Twitter from frontmatter: `og:type=article`, title/description = SEO title/description, `og:url` = canonical, `og:image` = article-specific 1200×630 image (fallback: pillar image, then site default — never another article's image), `article:published_time`, `article:modified_time`, `article:author`. Twitter card `summary_large_image`. |
| **RSS + sitemap inclusion** | Published articles only: included in sitemap (with accurate `lastmod`) and in RSS (full item: title, link = canonical, description, author, pubDate, pillar as category). Feed order newest-first. |
| **Draft handling** | Frontmatter `draft: true` (or future `datePublished`) articles are excluded at build time from: production build output entirely on the production origin (preferred), or — if a preview build renders them — from navigation, pillar listings, homepage lists, related sections, search index (`noindex` + excluded), RSS and sitemap. A draft URL must never return 200-indexable on production. Preview deployments are `noindex` site-wide (§2.1). |
| **Indexability & error behaviour** | Published article: index, follow, HTTP 200. Unknown slug: true HTTP 404 with the custom 404 page (§6 inventory) — never a soft-404 (200 with “not found” text) and never a redirect to the homepage. Removed article: 404, or a single 301 to a genuinely equivalent replacement article if one exists (state the replacement in the redirect map; do not redirect to the pillar as a substitute for content). |
| **Missing-metadata handling** | Build fails (does not silently default) when a published article lacks: `title`, `description`, `author`, `datePublished`, pillar, or OG image alt/fallback resolution. The only permitted fallbacks are the site-default OG image and the pillar label. A missing description must never be replaced by an auto-excerpt in production metadata. |

---

## 6. Trust and utility pages inventory

**Explicit statement:** No set of trust pages — including every page below — **guarantees AdSense approval**. Google reviews the whole site against the AdSense Program Policies and Publisher Policies; trust pages support honesty and usability, they are not an approval checklist with a passing score. See D8 for what is actually required vs. recommended.

| Page | URL | Index / follow | Mandatory? | Why (index decision + purpose) |
|---|---|---|---|---|
| About | `/about` | **Index** | Mandatory for IndieOS launch | States who publishes IndieOS, for whom, and why — the site's primary-purpose evidence for readers and for helpful-content “Who” assessment. Carries publisher identity matching Organization markup. A real page with real information, not a paragraph of filler. |
| Contact | `/contact` | **Index** | Mandatory for IndieOS launch | A working way to reach the publisher (form and/or real monitored email presented in spam-resistant form). Supports trust and AdSense site-readiness guidance on clear, usable sites. Never a fake address or a dead form. |
| Privacy Policy | `/privacy` | **Index** | **Mandatory — policy requirement once Google products/ads are used** | Publisher Policies require a privacy policy that clearly discloses data collection, sharing and use from Google products, including cookies/web beacons/IP addresses and third parties placing/reading cookies for ad serving (full requirement in D8). Must describe IndieOS's *actual* practices (analytics, newsletter provider, host logs, and — once added — AdSense) and be updated when practices change. **TEMPLATE — requires owner/legal review before publication; content depends on actual site practices.** |
| Terms | `/terms` | **Index** | Mandatory for IndieOS launch (site-protective, not an AdSense requirement) | Terms of use / disclaimer for advice content, intellectual property, liability limits appropriate to the content. Indexed so readers and reviewers can find it from search as well as footer. **TEMPLATE — requires owner/legal review before publication; content depends on actual site practices.** |
| Editorial Policy | `/editorial-policy` | **Index** | Mandatory for IndieOS launch (editorial choice; not a Google requirement) | How articles are researched, sourced, tested, corrected and updated; AI-assistance disclosure practice; affiliate/sponsored disclosure practice if ever used. Operationalises the helpful-content Who/How/Why expectations in public. |
| Author profile(s) / archive | `/authors/[slug]` | **Index** (per real author) | Mandatory for each publishing author | Real bio, expertise basis, articles list with summaries. The target of article bylines and `author.url`. One page per real person only — never create archives for personas who have not written. |
| Search results page | `/search` (query in `?q=`) | **Noindex, follow** | Optional (only if on-site search is built) | A utility for on-site readers, not a search-discovery page: thin, query-dependent duplicates are the classic duplicate/thin pattern. Excluded from sitemap; canonical not self-promoted; result URLs with parameters must not be indexable. If `WebSite` SearchAction markup exists anywhere, it must describe this real search. If search is not built at launch, omit both the page and the markup. |
| RSS feed | `/rss.xml` (and/or `/feed.xml` — pick one canonical feed URL, redirect the other) | N/A (feed, not a page) | Mandatory for IndieOS launch (distribution choice) | Articles only (§5). Not an index target; referenced via `<link rel="alternate" type="application/rss+xml">` in the head and from the footer. Validated (B-phase). |
| Custom 404 | any unmatched URL | **Noindex by status** (HTTP 404; also emit noindex as belt-and-braces) | Mandatory | Helpful dead-end: explains the miss, links to homepage, four pillars and search (if built). Returns a genuine 404 status; excluded from sitemap/RSS; **no ad code** (ads on non-content/error screens violate Publisher Policies inventory rules — see D8). |
| Newsletter (embedded) | Embedded on `/` and footer (no dedicated `/newsletter` route in V1) | N/A (embedded) | Optional (embedded only if provider is verified) | Newsletter capture in V1 is an embedded homepage and footer module only. No dedicated `/newsletter` route in V1 per reconciled PRD and screen specifications. Gated dependency: must remain hidden or explicitly non-submitting demo until a real provider is verified and tested end-to-end. |
| AdSense `ads.txt` | `/ads.txt` | N/A | After approval only | Plain-text authorized-sellers file at the root with the exact publisher line AdSense supplies. Not mandatory per Google, but highly recommended; if the file exists, IndieOS must be listed as an authorized seller or ads must not run (Publisher Policies — Authorized inventory). Do not create a placeholder file before the real publisher ID exists. |

Footer link set on every page: About · Contact · Editorial Policy · Privacy Policy · Terms · RSS. Navigation link set: Ideas · Build · Launch · Growth (+ About). No trust page is ever blocked in robots.txt.

---

## 7. Technical SEO implementation checklist

Owner key: **Code** = Next.js codebase · **Host** = hosting/DNS configuration · **GSC** = Google Search Console (post-deployment). Every row lists its primary owner(s).

| # | Item | Specification | Owner |
|---|---|---|---|
| 1 | Canonical origin / hostname | Single origin `https://indieos.tech` from `NEXT_PUBLIC_SITE_URL`; `metadataBase` set once in the root layout; all canonicals, OG URLs, JSON-LD URLs, sitemap, RSS built from it. Preview origins never emitted as canonical. | Code |
| 2 | HTTPS | Valid certificate for apex (+ `www` for its redirect), auto-renewed by the host; HSTS after HTTPS is confirmed stable. Mixed-content audit: no `http://` asset URLs in templates/MDX. | Host + Code |
| 3 | Sitemap generation | Next.js `app/sitemap.ts` (static-export compatible: generated at build) emitting only canonical, indexable, 200 URLs: home, 4 pillars, About/Contact/Editorial/Privacy/Terms, author archives, published articles. Absolute URLs, UTF-8, accurate `lastmod` only; no `priority`/`changefreq` reliance (Google ignores them). Split/index if limits (50,000 URLs / 50 MB per file) are ever approached. Excludes: drafts, search, 404, thank-you states, redirects, noindex pages. | Code |
| 4 | robots.txt | Next.js `app/robots.ts` (or static file). Default: allow all; `Sitemap: https://indieos.tech/sitemap.xml` line present. Disallow nothing that renders or explains indexable pages (no CSS/JS/image/API-route blocks needed by rendering). Explicitly remember: robots.txt ≠ noindex; it is never the mechanism for hiding drafts (drafts are unpublished, §5) or for canonicalization. Test after deployment (B-phase). AdSense crawler access: do not block the AdSense crawler from content pages once ads are requested — the crawler must be able to reach pages carrying ad code (see D8). | Code (+ GSC verify) |
| 5 | Search Console setup | Domain property for `indieos.tech` (covers all subdomains/protocols), DNS verification; submit sitemap; add the URL-prefix property only if needed for a specific report. Check Pages, Sitemaps, Manual Actions, Rich results and CWV reports (B/C-phase). | GSC |
| 6 | URL normalization | Lowercase, hyphenated, descriptive slugs; one URL per piece of content; internal links always point at the canonical form (never at a redirect, never with tracking parameters). | Code |
| 7 | Redirects / loops | A single maintained redirect map (host `_redirects` or Next.js config exported to host rules). Permanent (301/308) only for permanent moves; one hop; no chains; no loops; no redirecting everything to home. Test the full map after each deployment. | Host + Code |
| 8 | Trailing slash | Enforced single form (§2.1) in Next.js config and host rules; sitemap/RSS/internal links use the same form. | Code + Host |
| 9 | Status codes | Real statuses: 200 live, 301/308 moved, 404 missing, 410 only for deliberately retired-with-no-equivalent content if the host supports it cleanly, no 200-error pages (soft 404s), no 302s left as permanent moves, server errors monitored. | Host + Code |
| 10 | 404 handling | Custom 404 (§6 inventory), genuine 404 status, noindex, no ads, helpful recovery links; 404s logged/reviewed in C-phase for fixable internal-link causes. | Code + Host |
| 11 | Crawl paths | Every indexable page reachable by ordinary `<a href>` links from the homepage within 3 clicks (pillars in 1, articles in 2 via pillar/featured). No content reachable only via JS interaction, search, or form submission. No reliance on sitemap alone for discovery — internal links are the primary discovery path. | Code |
| 12 | Orphan prevention | Build check: every published article is linked from its pillar page **and** at least one in-body or related link. CI/build script lists any article with zero inbound internal links and fails the release until fixed. | Code |
| 13 | Pagination | Avoid paginated pillar archives at IndieOS scale (single grouped listing per pillar). If pagination is ever required: each page self-canonical (never canonicalize all pages to page 1), sequential `rel` not relied on, all paginated pages reachable by crawlable links, no duplicate intro copy across pages. | Code |
| 14 | Query parameters / duplicates | No indexable parameter variants: search (`?q=`), sorting, UTM and referral parameters never change the canonical and never enter the sitemap. Canonical tag strips parameters; host rules do not create parameter duplicates. | Code + Host |
| 15 | Search page indexing | `/search` = noindex, follow; excluded from sitemap; not linked with keyword-anchor text from templates. (See §6.) | Code |
| 16 | Draft exclusion | Drafts/future posts excluded from build output on production, nav, listings, related, RSS, sitemap and search index (§5). Staging/preview = site-wide noindex + password/protection where the host allows; never submitted to GSC as the production property. | Code + Host |
| 17 | Generated metadata (Metadata API) | Root layout: defaults + `title.template`. Per-route `generateMetadata` from frontmatter/content data only. One code path builds title, description, canonical, OG, Twitter and robots directives so they can never disagree. No meta keywords anywhere (Principle 1). | Code |
| 18 | Structured-data validation | Build-time JSON schema sanity check + Rich Results Test on templates before launch and on live URLs after deployment; GSC Rich result reports in C-phase. Any template change re-validates one page of each affected type. Markup/content mismatch = release blocker. | Code + GSC |
| 19 | Image formats / optimization | Static-first pipeline: pre-optimized WebP/AVIF + JPEG/PNG fallback generated at build (the static export does not use the host image optimizer); responsive `srcset`/sizes; explicit dimensions; file names descriptive. `next/image` only in a configuration compatible with static export (`images.unoptimized` with build-time optimization, or a custom loader pointing at the pre-built assets) — decide at build time and record the choice in the repo README; the SEO requirement is the output (optimized, dimensioned, crawlable images), not the component. | Code |
| 20 | Alt text | Enforced per §5: content images have hand-written descriptive alt; decorative `alt=""`; build lint warns on missing alt in MDX. Alt text is never the title/filename repeated and never keyword lists. | Code |
| 21 | Fonts / layout shift | Self-hosted subset fonts (no third-party font request), `font-display: swap` with a metric-matched fallback, preloaded primary font only; reserved space for images/embeds/newsletter form; no late-injected banners above content. Targets: see the CWV row in this table. | Code |
| 22 | Core Web Vitals targets | Engineering targets (field data, 75th percentile): **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1**. Static export + minimal client JS is the strategy; MDX pages ship no heavy client bundles; third-party scripts (analytics/newsletter, later AdSense) load deferred and are re-measured after addition — ad code is expected to move these numbers and must be re-validated (B-phase repeat). Verify via GSC CWV report + PageSpeed field data, not lab scores alone. | Code (+ GSC verify) |
| 23 | Mobile usability | Responsive Tailwind layout; tap targets sized/spaced for touch; no horizontal scroll; readable base font size without zoom; no intrusive interstitial covering content on arrival. Test on a real small viewport before launch. | Code |
| 24 | Accessibility | Semantic HTML first (one H1, ordered headings, landmarks, skip link); keyboard-complete navigation and TOC; visible focus states; AA contrast; alt text (§20); link text meaningful out of context; forms labelled (contact/newsletter). Screen-reader pass on homepage, one pillar, one article before launch. **[Accessibility is specified here as a quality/UX requirement for readers; Google's helpful-content and page-experience guidance reward a good page experience overall.]** | Code |
| 25 | RSS validation | Feed generated at build from the same article data as the sitemap; validate with an RSS validator after deployment; feed URL returns `application/rss+xml`, absolute canonical links, correct dates. One canonical feed URL (§6). | Code |
| 26 | Deployment URL config | Production deployment bound to the apex custom domain; preview/branch deployments on host subdomains with noindex; environment variables per context (production `NEXT_PUBLIC_SITE_URL` = canonical origin; previews never reuse it for canonical generation — previews are noindexed regardless). | Host + Code |
| 27 | Environment variables | Documented in repo (names only, no secrets committed): `NEXT_PUBLIC_SITE_URL`, analytics/newsletter keys when added, AdSense publisher ID only after approval. Build fails if `NEXT_PUBLIC_SITE_URL` is unset in a production build. | Code |
| 28 | Error logging / broken-link detection | Host deploy logs reviewed per release; scheduled (monthly, C-phase) crawl of the production site (e.g. a link-checker in CI against the live sitemap) reporting 404s, redirect chains and orphan pages; Search Console Pages report as the second source. Fix internal broken links at the source page, not only with redirects. | Host + Code + GSC |

### 7.1 What lives where — summary

- **Next.js code:** metadata/canonical/OG generation, sitemap, robots, templates, structured data, image/font pipeline, draft logic, redirect source map, RSS.
- **Hosting config:** custom domain + HTTPS + HSTS, www/http redirects, redirect execution, `_headers` (content-type for `ads.txt`/RSS, security headers), preview protection.
- **Search Console:** ownership verification, sitemap submission, indexing/rich-result/CWV monitoring, manual-action checks. Search Console never *fixes* code — it only reports; every fix lands in code or host config.

---

## 8. Hosting verification (official terms/pricing checked 2026-10-23)

Requirement profile: Next.js **static export** (HTML/CSS/JS + images), custom domain `indieos.tech`, ₹0 budget, and — decisively — **Google AdSense ads on the same origin from Jan 2027**. A host whose free terms prohibit advertising fails the brief even if it is technically excellent.

| Host / free plan | What the official source says (checked 2026-10-23) | Verdict for IndieOS |
|---|---|---|
| **Vercel — Hobby** | Terms of Service §4: “You shall only use the Services under a Hobby plan for your personal or non-commercial use.” Fair Use Guidelines, Commercial usage: “Hobby teams are restricted to non-commercial personal use only… The inclusion of advertisements, including but not limited to online advertising platforms like Google AdSense” is listed as commercial usage requiring Pro or Enterprise. Hobby includes 100 GB Fast Data Transfer. | **Disqualified at ₹0.** AdSense on Vercel Hobby would breach Vercel's terms by Vercel's own explicit example. Vercel Pro would work technically but breaks the ₹0 budget. |
| **Cloudflare Pages — Free** | Pages limits (Free): 500 builds/month, 1 concurrent build, 100 custom domains per project, 20,000 files per site, 25 MiB max per asset, unlimited preview deployments. Pages Functions pricing doc: “On both free and paid plans, requests to static assets are free and unlimited.” Pages pricing page: all plans include “unlimited sites, seats, requests, and bandwidth”, Free $0 forever. **No commercial-use or advertising prohibition was found in the official Pages limits, pricing or Functions-pricing pages checked.** A static-export site invokes no Functions, so the Workers Free quota (100,000 requests/day for Functions) is not consumed by ordinary page views. Native support: Git-connected builds, custom domain + HTTPS, `_redirects` and `_headers` files (2,000 static redirects max — far above IndieOS needs), `public/`-style static assets served at root (so `/ads.txt` and `/rss.xml` work as files/routes). | **Recommended primary (see below).** |
| **Netlify — Free** | Current pricing page: Free “$0 forever”, 300 credit limit/month, custom domains with SSL, global CDN. Credit model (current docs/pricing): production deploys 15 credits each, bandwidth 20 credits/GB, web requests 2 credits per 10k, compute 10 credits/GB-hour; on Free, when credits run out projects **pause until the next billing cycle** (no auto-recharge). Netlify's own Free-plan announcement states: “On the Free plan, you can deploy commercial projects, personal sites, or other creative explorations” — i.e. **commercial use including an ad-supported publication is not prohibited** (the legacy Free figures still widely quoted — 100 GB bandwidth / 300 build minutes — were replaced by the credit model for accounts on credit-based pricing from 4 Sep 2025). | **Viable fallback.** Allowed commercially, excellent Next.js/static support and `_redirects`/`_headers`, but the 300-credit hard pause is a real availability risk for a growing publication (≈15 GB of bandwidth alone would consume the month), whereas Cloudflare static delivery is unmetered. |
| **GitHub Pages** | GitHub Pages limits (official docs): “GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS).” Limits: published site ≤ 1 GB, soft 100 GB/month bandwidth, soft 10 builds/hour (custom Actions workflow exempt), 10-minute deploy timeout. | **Not recommended.** An ad-monetized publication run as the owner's business sits directly against the stated intended-use restriction, and Pages offers no `_headers` control and only file-based redirects workarounds. Keep GitHub as the code host (and build CI if wanted), not the serving host. |

### Recommendation

- **Primary: Cloudflare Pages (Free)** — deploy the Next.js static export (`out/`), connect the GitHub repo, attach `indieos.tech` as the custom domain, ship `_redirects` (www/http handled at Cloudflare; legacy/slug redirects in-file) and `_headers` (RSS/`ads.txt` content types, security headers) in the output. Evidence-linked reasoning: (1) it is the only ₹0 host checked whose official pages impose **no commercial/advertising ban** while explicitly making static requests/bandwidth unlimited; (2) its free limits (500 builds/month, 20,000 files) exceed a publication's needs by orders of magnitude; (3) root-level static files satisfy the future `/ads.txt` requirement without server code.
- **Fallback: Netlify (Free)** — pre-test the same static export on Netlify during development so a migration is a DNS + deploy change, not a rebuild. Trigger to migrate: any Cloudflare Pages blocker (build incompatibility, account issue). Accept the credit-pause risk consciously if it is ever used in production, and monitor credits weekly.
- **Explicitly rejected at ₹0:** Vercel Hobby (AdSense named as prohibited commercial use) and GitHub Pages (online-business intended-use restriction). Revisit Vercel only if the budget changes to paid Pro.
- **Caveat:** Host terms change. Re-check the Cloudflare Pages limits/pricing pages and Vercel Fair Use Guidelines at launch (Oct 2026) and again before adding AdSense code (Jan 2027); record the re-check date in the repo.

---

## 9. URL structure input — pillar paths vs. flat paths (evidence only; decision in D5)

Options: **(P)** pillar paths — article at `/ideas/[slug]`, `/build/[slug]`, etc. · **(F)** flat paths — every article at `/blog/[slug]` (or root-level `/[slug]`), with pillars existing only as hub/listing pages.

| Technical-SEO dimension | (P) Pillar paths — pros | (P) Pillar paths — cons | (F) Flat paths — pros | (F) Flat paths — cons |
|---|---|---|---|---|
| Section signals / site organisation | URLs themselves group topically similar pages in directories; Google states directory grouping helps it learn how sections differ (e.g. change frequency) and parts of the URL can surface as breadcrumbs. Pillar membership is unambiguous from the URL alone (crawl reports, log analysis, Search Console filters segment cleanly by directory). | Membership is baked into the URL: an article that genuinely changes pillar needs a URL move (redirect + canonical + sitemap + internal-link updates). Cross-pillar articles must pick one primary home even when they serve two stages. | Articles are pillar-neutral; reclassifying an article is a metadata/hub-listing change with **no URL move**. Hub pages carry the organisation instead of URLs. | Section signal must be carried entirely by internal linking, breadcrumbs and hub pages rather than the URL; Search Console/log segmentation by topic needs extra mapping. A single `/blog/` directory mixes all stages, so directory-level learning sees one undifferentiated section. |
| Canonical stability | Canonical is stable as long as the article stays in its pillar (the normal case if pillars are assigned carefully at publication). | Any recategorisation, pillar rename, or pillar merge/split is a **site-structure migration**: every affected canonical changes at once. | Maximum canonical stability: slugs almost never need to change; pillar taxonomy can evolve freely behind stable URLs. | Stability cuts both ways: a poorly chosen slug is just as permanent; no structural “fresh start” is available without the same migration cost. |
| Migration cost / risk | Higher lifetime risk concentrated in taxonomy changes; mitigated by treating pillar names/slugs as permanent once launched (the four pillar names are fixed by the brief). | — | Lowest taxonomy-migration risk; a future redesign of hubs/breadcrumbs does not touch article URLs. | Moving *away* from flat later (to pillar paths) is itself the large migration: every article URL changes simultaneously. |
| Breadcrumbs | URL path, visible breadcrumb and `BreadcrumbList` naturally coincide. | — | Visible breadcrumb can still show Home › Pillar › Article truthfully (it describes the navigation hierarchy via hub pages), but it will not match the URL path — acceptable to Google, which derives breadcrumbs from URL words *or* structured data, but the two signals differ. | — |
| Link equity / internal linking | In-pillar linking patterns are reinforced by shared directory context; pillar hubs are the natural parent of their articles. | Deep nesting is still shallow here (2 levels), so no crawl-depth penalty either way at IndieOS scale. | All articles sit at one uniform depth; hub pages must do all topical clustering work through links. | No directory reinforcement; a weak hub page weakens the whole cluster signal. |
| Human factors (SEO-adjacent) | URLs are self-describing when shared (“…/launch/…” tells a founder the stage before clicking); memorable section addresses. | Longer URLs; slug must stay unique only within a pillar in theory — in practice keep slugs globally unique in both schemes to avoid confusion. | Shortest, simplest URLs; one namespace to manage. | `/blog/` labels a B2B-leaning publication with a generic container word that carries no topical meaning in the URL or in shared links. |

**No verdict is given here, by design.** The final recommendation is made in D5, which weighs this technical evidence together with the keyword/cluster and editorial evidence. Whichever option D5 selects, the non-negotiables from §§2/5/7 already hold: one canonical URL per article for its lifetime, a maintained permanent-redirect map for any exception, globally unique slugs, and pillar hub pages that are substantive (§4) rather than link lists.

---

## 10. Sources — official only, all checked 2026-10-23

### Google Search Central (developers.google.com)

| Source | URL | Used for |
|---|---|---|
| SEO Starter Guide: The Basics | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | Titles/snippets, descriptive URLs, directory grouping, duplicate content, images/alt, meta-keywords non-use, keyword stuffing, no word-count rule, heading-order statement |
| Creating helpful, reliable, people-first content | https://developers.google.com/search/docs/fundamentals/creating-helpful-content?source=post_page-----8633410e102f-------------------------------- | People-first test, E-E-A-T/Who-How-Why, date-freshness warning, word-count quote |
| How to specify a canonical (canonicalization) | https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=en | Redirect/canonical/sitemap signal strength, self-referencing canonical, absolute URLs, HTTPS preference, don't use robots.txt/noindex for canonicalization |
| Build and submit a sitemap | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | Sitemap formats, 50 MB / 50,000-URL limits, absolute canonical URLs only, `lastmod` use, `priority`/`changefreq` ignored, submission methods |
| Introduction to robots.txt | https://developers.google.com/search/docs/crawling-indexing/robots/intro | robots.txt controls crawling not indexing; disallowed URLs can still be indexed; use noindex/password to exclude |
| Introduction to structured data markup | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | JSON-LD recommended, markup must describe visible page content, no guarantee of rich results |
| General structured data guidelines | https://developers.google.com/search/docs/appearance/structured-data/sd-policies | Format/access/quality rules, no invisible or misleading markup, no fake reviews, required properties, validation |
| Article structured data (Article / NewsArticle / BlogPosting) | https://developers.google.com/search/docs/appearance/structured-data/article | BlogPosting type and recommended properties incl. author with url |
| Breadcrumb structured data | https://developers.google.com/search/docs/appearance/structured-data/breadcrumb | BreadcrumbList construction mirroring the visible trail |

### Google AdSense Help / Publisher Policies (support.google.com)

Full AdSense requirement-by-requirement sourcing is in **D8**; the items below are the ones this specification itself relies on.

| Source | URL | Used for |
|---|---|---|
| Eligibility requirements for AdSense | https://support.google.com/adsense/answer/9724?hl=en | Age 18+, own/high-quality/original content, policy compliance, HTML access |
| Make sure your site's pages are ready for AdSense | https://support.google.com/adsense/answer/7299563?hl=en | Clear navigation, unique content, no scraped/copyrighted content with ads |
| AdSense Program policies | https://support.google.com/adsense/answer/48182?hl=en | Invalid traffic, encouraging clicks, ad placement, site behaviour |
| Google Publisher Policies | https://support.google.com/adsense/answer/10502938?hl=en | Prohibited content, privacy disclosure, Better Ads Standards, authorized inventory / ads.txt, ads interfering, inventory value (no ads on low-value/under-construction/non-content screens) |
| Ads.txt guide | https://support.google.com/adsense/answer/12171612?hl=en | ads.txt not mandatory but highly recommended; root placement; publisher-ID format |
| Connect your site to AdSense | https://support.google.com/adsense/answer/7584263?hl=en | Ownership verification methods; review usually a few days, sometimes 2–4 weeks |

### Hosting — official terms / pricing / docs

| Source | URL | Used for |
|---|---|---|
| Vercel Terms of Service (§4 Hobby Plan) | https://vercel.com/legal/terms | Hobby = personal/non-commercial use only |
| Vercel Fair Use Guidelines | https://vercel.com/docs/limits/fair-use-guidelines | Commercial-use definition explicitly including Google AdSense; Hobby resource figures |
| Cloudflare Pages limits | https://developers.cloudflare.com/pages/platform/limits/ | Free: 500 builds/month, 100 custom domains/project, 20,000 files, 25 MiB/asset, redirects limits |
| Cloudflare Pages Functions pricing | https://developers.cloudflare.com/pages/functions/pricing/ | Static asset requests free and unlimited on free and paid plans; Functions billed as Workers |
| Cloudflare Pages pricing page | https://www.cloudflare.com/products/pages/ | “Unlimited sites, seats, requests, and bandwidth”; Free $0 forever |
| Netlify pricing | https://www.netlify.com/pricing/ | Free $0 forever, 300 credits/month, credit costs (deploy 15, bandwidth 20/GB, requests 2/10k) |
| Netlify credit-based pricing plans (docs) | https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/ | Free = 300 credits/month hard limit; sites pause when credits run out |
| Netlify Free plan announcement | https://netlify.com/blog/introducing-netlify-free-plan.md | “On the Free plan, you can deploy commercial projects…” |
| GitHub Pages limits | https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits | Online-business/commercial intended-use restriction; 1 GB site, soft 100 GB/month, build limits |

### Sources that could not be fetched / scope notes

- **Cloudflare's full Self-Serve Subscription Agreement** was not opened in this pass; the commercial-use conclusion for Pages rests on the official Pages limits/pricing/Functions-pricing pages above, in which no commercial or advertising prohibition appears. Re-verify against the full agreement at launch (noted in §8 caveat).
- **Organization structured-data detail page:** the search result URL carried a session `authuser` parameter, so this spec deliberately grounds Organization markup in the Introduction to structured data + General guidelines above rather than citing a session URL. Validate the exact Organization properties against the live Google documentation at build time.
- **Next.js framework documentation** was outside this task's official-source scope (Google + host terms only). `sitemap.ts`, `robots.ts`, the Metadata API and static-export image behaviour are therefore stated as implementation choices for the pinned Next.js version and must be confirmed against that version's docs during the build — they are not presented as Google requirements.
- No non-official source (blog, forum, SEO tool) was used for any requirement in this document. Community-forum numbers about AdSense (post counts, word counts) appear only in D8, explicitly labelled as **not** official.

*End of D6.*


---

## 11. Owner-approved V1 reconciliation (2026-10-23)

This section supersedes conflicting earlier examples or optional wording in D6. The approved V1 is a **typography-first developer publication supporting both monochrome light and monochrome dark themes with an accessible theme toggle**. The only top-level editorial pillars are Ideas, Build, Launch, and Growth. Topic-cluster headings may organize articles inside a pillar but must not become extra categories in the main navigation.

### 11.1 Binding URL decision

Use `/{pillar}/{slug}` for every article, with the D2 `Suggested URL Slug` unchanged. Canonical origin remains `https://indieos.tech`, apex host, HTTPS, lowercase paths, and no trailing slash except `/`. D5 is the binding URL decision. Remove the older statement in §4 that says the pillar-versus-flat decision is still undecided. Example for IDE-001: `/ideas/validate-micro-saas-idea-without-building`.

### 11.2 V1 features and delivery constraints

- **Table of contents, RSS, related articles, sharing, author bylines:** included in V1 as specified elsewhere in D6.
- **Bookmarks:** implement as browser-local bookmarks using local storage, with clear UI feedback and an empty state. No user account, cross-device sync, or server storage in V1. If storage is unavailable, the page must still work and explain that saving is unavailable.
- **Comments:** use Giscus backed by GitHub Discussions only after the public repository, Discussions, category, and allowed-origin configuration are set up and tested. Comments are optional per article via frontmatter; never show a broken or empty third-party embed. Provide a clear moderation policy and disclose the third-party integration in the Privacy Policy. If configuration is not complete by launch, hide the comments component rather than shipping a dead placeholder; track it as a launch-blocking feature decision for the V1 sign-off.
- **Newsletter:** newsletter capture in V1 is an embedded module on the homepage and footer; there is no dedicated `/newsletter` route in V1. Before enabling, verify a free provider's current terms, commercial-use allowance, subscriber limits, export capability, double-opt-in options, and privacy terms. Do not ship a fake form or a form that only displays success locally. The provider is an external dependency and must be selected and tested before newsletter launch. If it cannot be verified in time, keep the signup hidden or visibly marked as an unconfigured demo in local development; never display a nonfunctional submission on public pages.
- **Search:** implement a client-side/static content search if it fits the static export and quality requirements. Search result URLs are `noindex,follow` and excluded from the sitemap.
- **Contact:** to avoid an unconfigured form backend in the static site, the launch-safe baseline is a real, owner-controlled monitored email link. A form is allowed only when a provider/backend is configured and production submission has been tested. Never invent an email address.
- **Author identity:** use only a real, owner-approved public byline and biography. The D7 sample `/authors/shreyansh` is illustrative until the owner confirms the public author slug and biography. No invented credentials, experience, or claims.

### 11.3 Visual and interaction scope

IndieOS V1 supports both light and dark themes using the exact monochrome grayscale palettes specified in `Docs/PRD.md` v1.3 and `Docs/DESIGN-SYSTEM.md`. Include an accessible theme toggle in the header and mobile navigation (with accessible name, state announcement, and sun/moon icons). Respect `prefers-color-scheme` on first visit; persist the user's explicit theme choice across reloads and navigation without page refresh or loss of search/form input. No chromatic colors, colored category pills, gradients, or colored hover accents. Contrast must meet WCAG AA (4.5:1 for body text) across both themes. Typography is typography-first, with `DM Serif Display + Geist` as the recommended candidate pairing pending licensing, self-hosting verification, and final Product Owner approval. All interactions must be keyboard-accessible, have visible focus states in both themes, and work at mobile widths (360px+).

### 11.4 Hosting and AdSense gates

Primary target: Cloudflare Pages Free with a static export, pending re-check of current official terms and limits immediately before production deployment and again before enabling AdSense. Netlify Free is the documented fallback, subject to a current terms/credit-limit check. Do not use Vercel Hobby or GitHub Pages for this monetized publication unless their terms materially change and the review is documented. Do not transfer the domain registration merely to use Cloudflare Pages; preserve and audit existing DNS records before changing nameservers.

No ad code, ad placeholders, or publisher-specific `ads.txt` line before AdSense approval. Re-check current official AdSense policies before application. No approval is guaranteed.

### 11.5 Release and scope gates

The 14-article launch batch is the editorial target, not permission to publish unfinished articles. If site or article quality is not ready by the target date, slip the launch batch intact rather than shipping thin content. The domain renewal must be completed or auto-renew verified in December 2026, ahead of the February 2027 expiry.
