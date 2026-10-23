# D1 — IndieOS Executive Research Report

**Project:** IndieOS (indieos.tech) — an independent publication for indie developers, indie hackers, solo founders and bootstrapped software builders.
**Research date:** 23 October 2026 · **Status:** Pre-development research, complete per §16 QA gate (see §9) · **Companion deliverables:** D2 keyword database (CSV/XLSX), D3 shortlist & roadmap, D4 SERP analysis, D5 cluster map, D6 SEO specification, D7 page-level SEO matrix, D8 AdSense checklist, D9 editorial playbook, D10 acceptance criteria.

## 1. Method in brief
Eight parallel research tracks: four pillar keyword tracks (Ideas, Build, Launch, Growth — 55 records each under a shared protocol), one live-SERP track (24 priority queries inspected result-by-result, plus three deep page reads), one technical track working only from official Google and hosting-provider sources (D6–D8), one cluster/roadmap track working from the assembled database, and one editorial/case-study track verifying founder evidence from primary sources. Every record in D2 carries a search intent, a reader problem, a format, a qualitative SERP competition judgement and a transparent priority score. Programmatic QC verified: 220 records, 55 per pillar, unique IDs, unique slugs, zero duplicate primary keywords or intents.

## 2. Market and audience
The reader is a technical solo builder moving through one journey: find a problem → validate → build → launch → grow. The four fixed pillars (Ideas, Build, Launch, Growth) map exactly onto that journey, and the strongest structural finding of this research is that the journey itself is the moat available to a new domain: incumbent content is fragmented across idea-list sites, agency MVP blogs, launch-tool vendors and SaaS-marketing vendors, and almost nobody serves the whole chain with one editorial voice and first-hand evidence.
**Target market recommendation: United States first** (all demand research was US-geography English; the SERPs, tools and competitor set are US-centric, and US traffic carries the strongest AdSense value), UK/Canada/Australia as natural English-language spillover with no separate targeting at launch, and no Germany-specific effort initially (English-language German demand exists but does not justify separate content before the core is established). Search Console data after 60–90 days should revisit this.

## 3. Main opportunity areas (evidence: D4 SERP verdicts)
1. **Ideas is the most contestable pillar.** For validation, idea-finding, niche and competitor-analysis queries, top positions are held by small founder blogs (adlega, microgaps, fromscratch.dev, solooop). A new domain with genuinely better method content can compete here first.
2. **The single weakest SERP found: "how to launch a developer tool".** Only two results are on-intent; the rest is browser DevTools documentation. LAU-006 is the clearest opening in the entire database.
3. **Specification-driven AI development is an unowned niche.** "Technical specification for an AI coding agent", "PRD for an AI coding agent", "verify AI-generated code" (all 4.60, Build's top scores) sit in a still-forming niche with no dominant indie brand — and IndieOS's own build process generates first-hand evidence for them.
4. **Superior-asset plays** (winnable, but only with a real asset): the micro-SaaS ideas database (IDE-003), a maintained Stripe+Next.js repo (BUI-008 — notably, Stripe's own docs do not rank for the tutorial query), a neutral Product Hunt alternatives directory (LAU-027), and an LTV:CAC calculator (GRO-005).
5. **Authority-locked head terms — do not attack directly:** "vibe coding" (GitHub/Google/Microsoft/Wikipedia), "saas pricing strategies" (Microsoft/Stripe/HubSpot), "how to reduce churn" (Stripe/Paddle/Baremetrics), "programmatic seo" (HubSpot/Ahrefs/Semrush), "deploy next.js for free" (official docs hold 4 of the top 5) and the "build in public" head term. D5 routes each of these through long-tail supporting articles instead.

## 4. Tool limitations — the honest centre of this report
**No numeric keyword metrics could be obtained, and none were invented.** Monthly search volume, keyword difficulty and CPC are "Not available" on all 220 D2 records. What was attempted on 2026-10-23:
- **OpenSEO (openseo.so)** — investigated first, per the brief. It is a real, credible tool (DataForSEO-backed; hosted plan $10/mo; $0.50 trial ≈ 10 searches; genuinely free no-account tools including a Keyword Generator). However, the free Keyword Generator sits behind an interactive browser-verification form that cannot be submitted via text fetch, and the trial requires account signup, which was out of scope (no accounts/purchases authorised). Its free tools remain the recommended first stop for an interactive session by the owner.
- **Ahrefs Free Keyword Generator** — landing page loads; no keyword data returned without interactive use.
- **WordStream Free Keyword Tool** — results require email submission; not used.
- **Google Keyword Planner** — requires a Google Ads account login; not accessible.
- **Google Trends** — fetch failed with HTTP 429; no trend data claimed anywhere in this package.
- **Google autocomplete (suggestqueries)** — worked; used for related-query mining only, never converted into volumes.
Consequences: prioritisation rests on live SERP composition (the stronger evidence for a new domain anyway) plus the documented scoring framework — but the *demand* component of every score is qualitative. **Recommended owner action before final scheduling:** one interactive browser session (OpenSEO free tools or the $0.50 trial, owner's choice) to pull volume/difficulty for the 57 P1 keywords and sanity-check the P1 ordering. This is the single highest-value verification step remaining.

## 5. Strongest early opportunities
The 14-article launch batch (full reasoning in D3): IDE-001, IDE-002, IDE-009, IDE-010 · BUI-001, BUI-002, BUI-003, BUI-004 · LAU-006, LAU-007, LAU-028 · GRO-002, GRO-006, GRO-012. Category verdict: **Ideas + Build is the strongest opening combination** (contestable SERPs plus an ownable emerging niche), Launch contributes the single best query, and Growth's head terms are the most authority-locked — Growth leads with long-tail and milestone content instead.

## 6. Risks and uncertainties
- **Content-quality / AdSense risk (highest):** Google publishes NO minimum post count, word count, traffic level or domain age for AdSense approval (verified on official pages, D8). The real risks are thin or derivative content, and publishing the 200-topic database as bulk low-value pages. The roadmap therefore launches with 14 strong articles, not 200.
- **Evidence risk in case studies:** indie folklore is unreliable. The case-study register (research/track-casestudies.md) verified 10 publication-ready stories from primary sources but quarantined 10 famous figures that could not be verified (e.g. Transistor "$375K/mo", Photopea "$3M/year") and corrected three myths (Carrd did raise $2M; Baremetrics was not sold to Stripe). D9 makes this evidence standard binding.
- **Hosting risk (eliminated by research):** Vercel Hobby's Fair Use Guidelines explicitly name AdSense as commercial use requiring a paid plan — the default indie choice would have broken the monetisation plan. Cloudflare Pages Free is the specified host (D6 §8); Netlify Free is the fallback with a credit-exhaustion availability caveat.
- **Timeline risk:** the 31 Oct 2026 launch target leaves ~8 days for build + 14 articles; D3's rule is that the batch slips intact rather than launching thin. Domain expiry in Feb 2027 is a hard deadline — renewal is scheduled in December (D3/D10 AC-90).
- **Policy drift:** AdSense Program Policies were mid-migration to a new help center in Oct 2026 (page stamped "Last updated: August 4, 2026"); D8/D10 require a policy re-check at application time.
- **Unverified fact:** the current live state of indieos.tech could not be confirmed from the research environment (fetch failed; DNS resolves). Owner to confirm what, if anything, is currently served on the domain.

## 7. Recommended next actions (owner decisions in §8 of the completion report)
1. Approve the D5 URL structure (pillar paths) and D6/D7 specifications, or request changes, before any build starts.
2. Approve Cloudflare Pages as host.
3. Run (or delegate) the interactive OpenSEO session for P1 metrics; record results into D2's metric columns with source + date.
4. Confirm indieos.tech's current state and registrar renewal settings.
5. Begin Phase 0: build to D10 acceptance criteria; draft the 14-article launch batch under D9 standards.
6. Do NOT submit any AdSense application before the D8 checklist is fully green (target window: early Jan 2027).

## 8. Assumptions log (labelled, per brief)
- A1: US is the default geography for all demand judgements (no tool offered a choice we could exercise). Revisit with Search Console data.
- A2: A single author identity operates the publication at launch (author archive specified accordingly in D6/D7); a second author changes only D7's author rows.
- A3: No affiliate programme is active at launch; D9's rule is disclose-or-don't-run.
- A4: The site launches English-only.
- A5: "Launch on 31 Oct 2026" is a target; the roadmap preserves batch integrity if it slips (D3).

## 9. QA gate (§16) — performed 2026-10-23
✔ ≥50 records per category (55 each, 220 total — counted programmatically) · ✔ duplicate keywords/intents: none (programmatic + D5's 31-entry cannibalisation register with a decision per conflict) · ✔ slugs unique (programmatic) · ✔ every record has intent, format, title, reader problem · ✔ metric cells checked against sources: all "Not available", matching the tool audit — nothing to falsify · ✔ high-priority keywords verified in live SERPs: 24 queries deep-analysed (D4) plus per-track P1 SERP inspection · ✔ current official Google guidance verified for D6/D8 with dated source lists · ✔ D7 covers all 14 required page types · ✔ plan fits ₹0 budget (Cloudflare Pages Free; no paid tools) · ✔ inaccessible tools and the unverified indieos.tech state recorded above, not papered over.
**Incomplete research (honest list):** numeric volume/KD/CPC for all keywords (needs interactive session); trend/seasonality data (Trends 429 — all trend cells are qualitative or "Not available"); indieos.tech live state; 4 case studies need one more primary source each; Cloudflare's full Self-Serve Subscription Agreement not opened (D6 flags a re-verify at launch).
