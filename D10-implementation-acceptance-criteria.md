# D10 — IndieOS Implementation Acceptance Criteria

**Purpose:** Testable pass/fail requirements for the future IndieOS website (Next.js App Router, TypeScript, Tailwind CSS, MDX in GitHub, static-first). Each criterion states how it is verified. This document specifies WHAT the finished site must satisfy; it is not an implementation guide and intentionally contains no coding-agent prompt (per project brief).
**Derived from:** D6 (Website SEO Specification), D7 (Page-Level SEO Matrix), D8 (AdSense Readiness Checklist). Research date: 2026-10-23.
**Phases:** PRE = must pass before public launch · POST = can only be verified on the live origin after deployment · OPS = ongoing operational gate.

## 1. Hosting and deployment
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-01 | Site is hosted on Cloudflare Pages (Free) or the D6-approved fallback (Netlify Free). It is NOT hosted on Vercel Hobby or GitHub Pages (both prohibit this commercial/AdSense use case per D6 §8). | Hosting dashboard shows the project; plan = Free | PRE |
| AC-02 | Custom domain indieos.tech connected; www (if resolving) 301-redirects to the apex canonical origin https://indieos.tech. | curl -I both hosts; check status + Location | POST |
| AC-03 | HTTPS enforced on every URL; no mixed-content warnings; HTTP redirects to HTTPS. | Browser load + curl -I http:// URL | POST |
| AC-04 | Build deploys from the GitHub repository; a test commit to the production branch deploys successfully without manual file uploads. | Push test commit; observe deploy | PRE |
| AC-05 | Static output: all content pages served as static HTML (no per-request server rendering required for articles). | Build output / response headers | PRE |

## 2. URLs, canonicals, redirects
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-10 | Every article URL follows the D5-decided structure and its slug exactly matches the D2 database slug for that article ID. | Crawl sitemap; compare against D2 slug column | PRE |
| AC-11 | Every indexable page has exactly one canonical tag, self-referencing, using the https://indieos.tech origin, matching the D7 canonical rule for its page type. | View-source / crawler export | PRE |
| AC-12 | Trailing-slash behaviour is consistent site-wide (one form only); the other form 301-redirects. | curl -I samples of both forms | POST |
| AC-13 | No redirect chains longer than 1 hop and no redirect loops in a full crawl. | Screaming Frog / cf. crawl report | POST |
| AC-14 | Renamed or removed articles 301 to the closest live equivalent; no 302s used for permanent moves. | curl -I old URLs | OPS |

## 3. Metadata and social sharing
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-20 | Homepage, 4 pillar pages and trust pages carry the unique SEO title, meta description and H1 specified in D7 (or an owner-approved revision recorded in D7). | View-source per page vs D7 | PRE |
| AC-21 | Every published article has a UNIQUE SEO title and UNIQUE meta description; a site-wide export shows zero duplicate titles and zero duplicate descriptions. | Crawler metadata export, dedupe check | PRE |
| AC-22 | No page contains a meta keywords tag. | grep rendered HTML | PRE |
| AC-23 | Article pages render correct Open Graph and Twitter card tags (title, description, URL, image) and the shared social image displays correctly in a card validator. | Card validator / view-source | PRE |
| AC-24 | H1 appears exactly once per page and matches the on-page headline (article HTML title may differ from H1 per D7). | Crawler H1 export | PRE |

## 4. Sitemap, robots, indexation control
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-30 | /sitemap.xml exists, returns 200, lists only canonical indexable URLs (homepage, pillars, published articles, indexable trust pages) and no drafts, no search page, no 404 page. | Fetch sitemap; sample-check 10 URLs | PRE |
| AC-31 | Sitemap is regenerated automatically when an article is published or removed (no manual editing). | Publish/unpublish a test article in staging | PRE |
| AC-32 | /robots.txt returns 200, references the sitemap, and does not block any important page or asset Google needs to render pages. | Fetch robots.txt; GSC robots tester after launch | PRE/POST |
| AC-33 | Search-results page is noindex,follow (or equivalent per D7) and absent from the sitemap. | View-source; sitemap check | PRE |
| AC-34 | Draft/unpublished articles return 404 (or are absent from the build), and appear in NO navigation, listing, RSS or sitemap output. | Attempt draft URL; grep sitemap + RSS | PRE |
| AC-35 | Google Search Console property verified for https://indieos.tech and sitemap submitted. | GSC UI | POST |

## 5. Structured data
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-40 | Article pages emit valid BlogPosting/Article JSON-LD whose headline, dates and author match the visible page content exactly. | Google Rich Results Test on 3 sample articles | PRE |
| AC-41 | BreadcrumbList markup matches the visible breadcrumb trail on article and pillar pages. | Rich Results Test | PRE |
| AC-42 | No structured data claims anything not visible on the page: no ratings, reviews, prices or fake author/organization details anywhere. | Code review + Rich Results Test | PRE |
| AC-43 | dateModified is emitted only when an article was substantively updated, and matches the displayed update date. | Sample 3 updated articles | OPS |

## 6. Article system and content integrity
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-50 | Article pages show author name linking to the author archive, original publication date, and (when applicable) updated date. | Visual check on 3 articles | PRE |
| AC-51 | Heading hierarchy is sequential (no skipped levels) and a table of contents with working anchors renders on long articles per D6. | Visual + DOM check | PRE |
| AC-52 | Code blocks render with syntax highlighting and a copy-friendly layout; inline code is visually distinct. | Visual check | PRE |
| AC-53 | Every content image has descriptive alt text (or empty alt if purely decorative) and is served in a modern format at sensible dimensions; no layout shift from images (width/height reserved). | Lighthouse + DOM check | PRE |
| AC-54 | Each article contains contextual internal links per D5 rules (to its cluster primary and at least 2 supporting/related articles once they exist). | Manual sample of launch batch | PRE |
| AC-55 | Missing or invalid frontmatter (title, description, date, pillar) fails the build loudly instead of publishing a page with fallback metadata. | Break a test article in staging; build must fail | PRE |

## 7. RSS, errors, search
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-60 | RSS feed exists, validates, contains only published articles with correct canonical links, and updates on publish. | Feed validator | PRE |
| AC-61 | Unknown URLs return a true HTTP 404 with the custom 404 page (which is noindex and links back to homepage and pillars). | curl -I a nonsense URL | PRE/POST |
| AC-62 | Server errors never expose stack traces, file paths or environment details to visitors. | Trigger error in staging | PRE |

## 8. Performance and accessibility budgets
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-70 | On a mid-range Android profile (Lighthouse mobile, throttled), the homepage and a sample article achieve: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1. | Lighthouse on live origin | POST |
| AC-71 | No article page ships render-blocking third-party scripts beyond approved analytics/ads (post-AdSense) tags. | WebPageTest / request audit | POST |
| AC-72 | Keyboard-only navigation reaches all interactive elements with a visible focus state; skip-to-content works. | Manual keyboard pass | PRE |
| AC-73 | Colour contrast of body text meets WCAG AA (4.5:1) in light and dark themes (if dark theme ships). | Contrast checker on samples | PRE |
| AC-74 | Site is fully usable at 360px width with no horizontal scrolling. | Device emulation | PRE |

## 9. AdSense and monetization gates
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-80 | No ad code, ad placeholders or ads.txt entries exist before AdSense approval. | Code/hosting review | PRE |
| AC-81 | The D8 readiness checklist is fully green (all blocking rows pass) before an application is submitted; submission occurs only in the Jan 2027 window or later. | D8 checklist sign-off recorded | OPS |
| AC-82 | Privacy Policy page discloses advertising cookies and links Google's advertising disclosures, and an EU/EEA/UK/CH-compliant consent mechanism (Google-certified CMP) is active before ads serve to those regions. | D8 verification steps | OPS |
| AC-83 | After approval, ads.txt includes Google as an authorized seller exactly as AdSense instructs, and ad placement follows D8 placement rules (no ads interfering with navigation or reading). | Fetch /ads.txt; visual check | OPS |
| AC-84 | AdSense and Google Publisher Policies are re-checked at application time (policies were mid-migration in Oct 2026 per D8), and any change is reflected in D8 before applying. | D8 re-check row dated | OPS |

## 10. Operations and domain
| ID | Criterion | Verification | Phase |
|---|---|---|---|
| AC-90 | Domain indieos.tech renewal is completed (or auto-renew confirmed) BEFORE its February 2027 expiry; registrar confirmation stored. | Registrar dashboard | OPS |
| AC-91 | A broken-link check runs at least monthly; internal 404s found are fixed or redirected within one publishing cycle. | Crawler report | OPS |
| AC-92 | Search Console coverage and top-query reports are reviewed at the D3 roadmap milestones; findings are logged, not acted on impulsively. | Review log | OPS |
| AC-93 | Every substantive article update updates the visible updated date, the sitemap lastmod and the D2 Publication Status field. | Sample audit | OPS |

**Sign-off rule:** Launch requires all PRE criteria green. AdSense application requires AC-81 green. Any criterion waived must be recorded here with the owner's name, date and reason.
