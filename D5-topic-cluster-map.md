# D5 — IndieOS Topic Cluster and Internal Linking Map

- **Site:** IndieOS — https://indieos.tech
- **Pillars (fixed):** Ideas · Build · Launch · Growth
- **Inputs:** `research/track-ideas.csv`, `track-build.csv`, `track-launch.csv`, `track-growth.csv` (55 records each, 220 total; composite scores and P1/P2/P3 priorities per `research/PROTOCOL.md`), `research/track-serp.md` (live SERP verdicts, 2026-10-23), D6 §9 (URL evidence — decision made here in §7 of this document)
- **Date:** 2026-10-23
- **How to read this document:** §1 is the method. §§2–5 are the cluster maps, one section per pillar. §6 is the master internal-linking rule set. §7 is the URL structure decision. §8 is the cannibalization risk register (the binding consolidation decisions). §9 cross-references the SERP verdicts and names the lead article for every authority-locked cluster. §10 is the cross-pillar reader journey.
- **No-guarantee statement:** Cluster ownership, internal linking and URL structure improve topical clarity and crawl paths. They do **not** guarantee indexing, ranking or traffic. SERP verdicts in §9 are observations of SERP composition on 2026-10-23 (per track-serp.md), not predictions.

---

## 1. Method and conventions

1. **Clusters are taken from the CSVs' `Topic Cluster` values, not invented.** 220 records group into **46 clusters**: Ideas 11, Build 12, Launch 15, Growth 8. Cluster names below are the CSV values verbatim.
2. **Primary guide = the record that owns the cluster's head intent.** Normally the P1 / highest composite-score record in the cluster. Where two records tie or where the SERP verdict (§9) makes the highest scorer unusable as the entry point, the exception is stated explicitly in the cluster table and in §9.
3. **Supporting articles** are the remaining records in the cluster. They own narrower intents (a method, a tool pairing, a phase, a failure mode) and must never be written to own the primary's head intent (see §6, §8).
4. **Scores** are the protocol composites from each record's Evidence Notes (P1 ≥ 3.80; P2 = 3.00–3.79; P3 < 3.00). They are a prioritization heuristic, not a ranking predictor.
5. **URLs** in this document use the structure decided in §7: `/{pillar}/{slug}`, where `{slug}` is the record's `Suggested URL Slug` from its CSV, unchanged.
6. **Two Launch clusters contain a single record** ("Developer tool launch" — LAU-006; "Feedback" — LAU-043). They are kept as named clusters because the CSV defines them, but for linking purposes LAU-006 is wired as a satellite of the Hacker News cluster and LAU-043 as a satellite of the Post-launch and metrics cluster (see §4).
7. **Effort** values (Low / Medium / High) are the CSV `Production Effort` values, reused in the roadmap (track-roadmap.md).

---

## 2. Pillar: Ideas — `/ideas`

Pillar intent (per D6 §4): help a developer find and judge a software idea worth pursuing. 55 records, 11 clusters, 14 P1s.

### 2.1 Cluster: Problem Discovery (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-002 — How to Find SaaS Ideas From Customer Complaints (`/ideas/find-saas-ideas-from-customer-complaints`) | how to find saas ideas from customer complaints | 4.50 / P1 |
| Supporting | IDE-004 — How to Find Problems Worth Solving Before Choosing a Product | how to find problems worth solving for a startup | 4.50 / P1 |
| Supporting | IDE-005 — How to Mine Reddit for SaaS Ideas Without Spamming Communities | how to mine reddit for saas ideas | 4.50 / P1 |
| Supporting | IDE-006 — How to Mine G2 and Capterra Reviews for SaaS Ideas | how to mine g2 reviews for saas ideas | 4.50 / P1 |
| Supporting | IDE-018 — Mine App Store Reviews for Product Ideas People Complain About | app store review mining for product ideas | 3.60 / P2 |
| Supporting | IDE-016 — Find Product Ideas From Support Tickets and Help Desk Complaints | how to find product ideas from support tickets | 3.50 / P2 |
| Supporting | IDE-019 — Spot Workflow Gaps in Existing Software Before Competitors Do | how to spot workflow gaps in existing software | 3.50 / P2 |
| Supporting | IDE-017 — Find SaaS Ideas on Indie Hackers and Hacker News Without Copying | how to find saas ideas on indie hackers and hacker news | 3.40 / P2 |

- **Main search intent:** Informational / method — "where do real, payable problems actually surface, and how do I extract them systematically?" IDE-002 owns the general method (complaints as the source class); each supporting article owns exactly one source channel. IDE-004 owns the prior question (what makes a problem worth solving at all) and is sequenced *before* the channel guides in reading order, even though IDE-002 is the cluster primary.
- **Key related user questions:** Where do complaints live? Which phrases signal demand? How do you cluster patterns? (IDE-002) · What makes pain costly, how often must it recur, who owns the budget? (IDE-004) · Which subreddits matter; which search phrases work; how many mentions signal demand? (IDE-005) · Which reviews to read first; how to tag complaints; when is a gap a standalone product? (IDE-006)
- **SERP note:** The adjacent head query "how to find saas ideas" is **Realistic now** (track-serp.md §2 — niche idea sites only). IDE-002 is IndieOS's entry for that demand family; its title/keyword stay complaint-specific so it does not collide with IDE-003's list intent (see §8, C-03).
- **Recommended internal links:** IDE-002 → IDE-004, IDE-005, IDE-006, IDE-016, IDE-018, IDE-019 (channel menu in the method's "sources" section); each channel guide → IDE-002 (up-link) and → IDE-042 (log what you find in the backlog) and → IDE-009 (score what you found). IDE-005 ↔ IDE-006 cross-link (two highest-yield sources compared). IDE-017 → LAU-028 (same communities, opposite job: research vs launch — see §8, C-25).

### 2.2 Cluster: Validation Without Building (9 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-001 — How to Validate a Micro-SaaS Idea Without Building It (`/ideas/validate-micro-saas-idea-without-building`) | how to validate a micro-saas idea without building it | 4.40 / P1 |
| Supporting | IDE-007 — Landing Page Validation for a SaaS Idea — What Actually Counts | landing page validation for saas idea | 4.50 / P1 |
| Supporting | IDE-008 — Fake Door Test for SaaS — How to Run One Honestly | fake door test for saas | 4.50 / P1 |
| Supporting | IDE-026 — Waitlist Validation for SaaS — Why Signup Count Alone Proves Little | waitlist validation for saas — how many signups is enough | 4.30 / P1 |
| Supporting | IDE-027 — Validate a SaaS Idea With Problem Interviews That Do Not Lead Witnesses | how to validate a saas idea with customer interviews | 3.70 / P2 |
| Supporting | IDE-030 — Product Validation Experiments Ranked by Cost and Signal Strength | validation experiments for product ideas ranked by cost | 3.70 / P2 |
| Supporting | IDE-025 — Pre-Sell a SaaS Product Before Building It — Deposits and Paid Pilots | how to pre-sell a saas product before building it | 3.50 / P2 |
| Supporting | IDE-028 — Concierge MVP Validation — Deliver the Outcome by Hand First | concierge mvp validation for solo founders | 3.50 / P2 |
| Supporting | IDE-029 — Validate a B2B SaaS Idea With No Audience and No Following | how to validate a b2b saas idea with no audience | 3.30 / P2 |

- **Main search intent:** Informational / how-to — pre-build proof of demand, with a transactional sub-intent at the top of the commitment ladder (pre-sell). IDE-001 owns the umbrella framework and the kill thresholds; every supporting article owns one experiment type or one audience constraint.
- **Key related user questions:** What counts as validation? How many interviews are enough? When should you pre-sell? (IDE-001) · What belongs on a validation landing page; must you show pricing; how do you judge conversion? (IDE-007) · How do you set a fake-door threshold; what do you tell clickers; how long should it run? (IDE-008) · How many waitlist signups is enough? (IDE-026)
- **SERP note:** IDE-001's exact query is **Realistic now** (track-serp.md §1 — top 12 are all small niche blogs repeating one framework; no worked real validation exists). This is the Ideas pillar flagship on both score and SERP evidence.
- **Recommended internal links:** IDE-001 → IDE-007, IDE-008, IDE-025, IDE-027, IDE-028, IDE-030 (the experiment menu, ordered by commitment strength) and → IDE-009 (score the outcome) and → IDE-047 (apply kill criteria). Each experiment guide → IDE-001 (up-link, in the intro) and → IDE-030 (where it sits in the cost/signal ranking). IDE-026 → LAU-007 (validation interpretation here; building and operating the waitlist is Launch — §8, C-29). IDE-007 → LAU-008 and → GRO-006 with journey anchors only (three different landing-page jobs — §8, C-20).

### 2.3 Cluster: Evaluation and Scoring (6 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-009 — SaaS Idea Scorecard — Evaluate an Idea Before You Build (`/ideas/saas-idea-scorecard`) | saas idea evaluation scorecard | 4.50 / P1 |
| Supporting | IDE-021 — Estimate Market Size for a Micro SaaS From the Bottom Up | how to estimate market size for a micro saas | 3.70 / P2 |
| Supporting | IDE-020 — Test Willingness to Pay for a SaaS Idea Before Building It | how to test willingness to pay for a saas idea | 3.40 / P2 |
| Supporting | IDE-022 — Assess Technical Feasibility of a SaaS Idea as a Solo Builder | how to assess technical feasibility of a saas idea | 3.40 / P2 |
| Supporting | IDE-023 — Find Differentiation for a SaaS Product in a Crowded Category | how to find differentiation for a saas product | 3.40 / P2 |
| Supporting | IDE-024 — Idea Evaluation Mistakes That Make Solo Founders Build Weak Products | idea evaluation mistakes solo founders make | 3.00 / P2 |

- **Main search intent:** Informational / evaluative — criteria, checklist and scorecard. This cluster owns the SERP query "how to know if a saas idea is good" (**Realistic now**, track-serp.md §6): IDE-009 is written to answer it, with the scorecard as the asset every ranking competitor describes but none ships interactively.
- **Key related user questions:** Which dimensions matter; what is a fatal-flaw score; how many ideas should you compare? (IDE-009) · How do I know if a SaaS idea is worth building? (ranking-page FAQ in the SERP — answered inside IDE-009 and IDE-047, not by a separate article)
- **Recommended internal links:** IDE-009 → IDE-020, IDE-021, IDE-022, IDE-023 (one deep-dive per scorecard dimension) and → IDE-001 (run the experiments that produce the scores). IDE-024 → IDE-009 and → IDE-047 (mistakes vs kill decision). IDE-022 → BUI-002 (feasibility hands off to MVP scoping — cross-pillar journey link).

### 2.4 Cluster: Niche and Market Selection (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-010 — How to Find a Niche for a SaaS Product as a Solo Founder (`/ideas/find-niche-for-saas-product`) | how to find a niche for a saas product | 4.50 / P1 |
| Supporting | IDE-012 — Vertical SaaS Ideas for Solo Founders — Narrow Markets That Pay | vertical saas ideas for solo founders | 3.70 / P2 |
| Supporting | IDE-011 — Underserved Markets for Software — How to Spot One Early | underserved markets for software products | 3.40 / P2 |
| Supporting (demoted — see §8, C-05) | IDE-055 — Choose Between Two SaaS Niches With a Reachability Scorecard | how to choose between two saas niches | 2.80 / P3 |

- **Main search intent:** Informational / framework — niche selection plus scoring. SERP verdict for the head query: **Realistic now** (track-serp.md §4 — the #1 result is enterprise-flavoured; no result scores real niches end-to-end). IDE-010 must therefore contain worked, scored niche teardowns, not only a rubric.
- **Key related user questions:** Where do niches hide; how do you test reachability; when is a niche too small? (IDE-010)
- **Recommended internal links:** IDE-010 → IDE-011, IDE-012 and → IDE-009 (score the niche) and → IDE-002 (find complaints inside the niche). IDE-055's intent is served by a section inside IDE-010 at launch ("Choosing between two finalists"); IDE-055 is only published standalone if that section outgrows the primary (decision C-05).

### 2.5 Cluster: Idea Generation and Lists (7 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-003 — Micro SaaS Ideas With Evaluation Angles for Solo Founders (`/ideas/micro-saas-ideas`) | micro saas ideas | 3.95 / P1 |
| Supporting | IDE-015 — SaaS Ideas Hidden in Spreadsheets and Manual Workarounds | saas ideas from spreadsheets and manual workarounds | 3.70 / P2 |
| Supporting | IDE-054 — Developer Tool Ideas From GitHub Issues and Forum Complaints | developer tool ideas from github issues and forums | 3.70 / P2 |
| Supporting (conditional — see §8, C-01) | IDE-013 — Micro SaaS Ideas for Solo Developers — Scored for Build Scope | micro saas ideas for solo developers | 3.50 / P2 |
| Supporting | IDE-014 — B2B Micro SaaS Ideas Where Buyers Already Have Budget | b2b micro saas ideas | 3.40 / P2 |
| Supporting | IDE-053 — Shopify App Ideas From Merchant Complaints and App Reviews | shopify app ideas from merchant complaints | 3.40 / P2 |
| Supporting | IDE-052 — Chrome Extension Ideas for Indie Developers With Clear Buyers | chrome extension ideas for indie developers | 2.80 / P3 |

- **Main search intent:** List / inspiration with commercial-list intent — the searcher wants scored ideas with buyer, cost and scope, not one-liners.
- **SERP note:** **Realistic only with a superior asset** (track-serp.md §3). IDE-003 may only be published as a maintained, evidence-linked idea database entry point (each idea linked to its complaint source, scored with IDE-009's rubric). A plain list post is explicitly not the plan — see §9 and the roadmap postponement. Because the primary is asset-gated, **IDE-002 leads the Ideas pillar in practice until IDE-003's database exists** (§9).
- **Key related user questions:** How is each idea scored; who pays; how small is the first version? (IDE-003)
- **Recommended internal links:** IDE-003 → IDE-009 (every idea carries its scorecard link), → IDE-001 (validate before building), → IDE-013/IDE-014 as filtered views of the same database, not as competing lists. IDE-015 → IDE-002 (workarounds are a complaint source). IDE-054 → LAU-006 (developer-tool ideas hand off to the developer-tool launch playbook — cross-pillar).

### 2.6 Cluster: Idea-Killing and Mistakes (3 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-047 — Signs a SaaS Idea Is Weak — Kill Criteria for Solo Founders (`/ideas/signs-weak-saas-idea-kill-criteria`) | signs a saas idea is weak and should be killed | 4.30 / P1 |
| Supporting | IDE-048 — Why Most SaaS Ideas Fail Before Launch — Evidence From Validation Gaps | why most saas ideas fail before launch | 3.70 / P2 |
| Supporting | IDE-049 — Startup Idea Red Flags — No Competitor; No Spend and No Reachable Buyer | startup idea red flags — no competitor and no one paying | 3.50 / P2 |

- **Main search intent:** Informational / evaluative-negative — "give me permission and criteria to stop." Distinct from IDE-009 (how to score) and IDE-024 (scoring mistakes): this cluster owns the kill decision itself.
- **Recommended internal links:** IDE-047 → IDE-001 (what to test before killing), → IDE-009 (score first, kill second), → IDE-002 (a killed idea routes back to discovery, not to building). IDE-048 → IDE-047; IDE-049 → IDE-047 and → IDE-031 (the "no competitor" flag routes to competitor research).

### 2.7 Cluster: Competitor and Alternatives Research (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-031 — Competitor Analysis for a SaaS Idea — Direct; Indirect and Status Quo (`/ideas/saas-competitor-analysis-for-ideas`) | how to do competitor analysis for a saas idea | 3.50 / P2 |
| Supporting | IDE-033 — Find Competitor Weaknesses From Reviews Users Actually Wrote | how to find competitor weaknesses from reviews | 3.60 / P2 |
| Supporting | IDE-034 — Competitor Pricing Research — What Rival Prices Tell You About Demand | competitor pricing research for saas ideas | 3.50 / P2 |
| Supporting | IDE-032 — Use Alternatives Searches to Research Product Opportunities | how to research alternatives pages for product opportunities | 3.40 / P2 |
| Supporting | IDE-035 — Build a Competitor Feature Matrix That Finds Real Gaps | how to build a competitor feature matrix that finds gaps | 3.40 / P2 |

- **Note on the primary:** This is the one Ideas cluster with no P1. IDE-031 (3.50) is primary because it owns the cluster's umbrella intent and answers the SERP head query "saas competitor analysis" (**Realistic now**, track-serp.md §5 — small agencies and niche blogs only; the gap is a *filled, real-example teardown plus a downloadable sheet*). IDE-033 scores marginally higher (3.60) but owns a method sub-intent (reviews as the source) and stays supporting.
- **Main search intent:** Informational / framework plus template intent, applied pre-build (kill/validate an idea) — the solo angle the SERP lacks.
- **Recommended internal links:** IDE-031 → IDE-033, IDE-034, IDE-035 (the three evidence-gathering methods) and → IDE-023 (turn gaps into differentiation) and → IDE-009 (feed findings into the scorecard). IDE-032 → GRO-043 (researching alternatives pages here; *building* them for SEO is Growth — §8, C-30 note) and → LAU-027 with a journey anchor only (different intent: research vs launch channels).

### 2.8 Cluster: Search Demand Research (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-036 — Keyword Research for Product Ideas — Find Demand People Already Search For (`/ideas/keyword-research-for-product-ideas`) | keyword research for product ideas | 4.60 / P1 |
| Supporting | IDE-039 — Long-Tail Keyword Ideas for Niche Software Buyers | long tail keyword ideas for niche software | 3.70 / P2 |
| Supporting | IDE-037 — Use Google Trends to Validate a Product Idea Without Fooling Yourself | how to use google trends to validate a product idea | 3.50 / P2 |
| Supporting | IDE-038 — Check Search Demand for a SaaS Idea With Free Tools | how to check search demand for a saas idea | 3.40 / P2 |

- **Main search intent:** Informational / method — using search behaviour as demand evidence *before* a product exists. Stage separation from Growth keyword research is binding (§8, C-06): IDE-036 owns pre-build demand evidence; GRO-017 owns post-launch content targeting.
- **Recommended internal links:** IDE-036 → IDE-037, IDE-038, IDE-039 and → IDE-009 (search demand is one scorecard input). IDE-039 → GRO-017 (the same long-tail skill, later stage — cross-pillar journey link).

### 2.9 Cluster: Research Tools and Workflows (3 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-042 — Build an Idea Backlog With Evidence — Not a List of Hunches (`/ideas/idea-backlog-evidence-database`) | how to build an idea backlog and evidence database | 4.60 / P1 |
| Supporting | IDE-041 — A Weekly Idea Research Workflow for Solo Founders | idea research workflow for solo founders | 3.40 / P2 |
| Supporting | IDE-040 — Free Tools to Find Startup Ideas From Complaints; Reviews and Search | free tools to find startup ideas | 2.80 / P3 |

- **Main search intent:** Informational / system — the durable asset that discovery and validation feed into.
- **Recommended internal links:** IDE-042 receives an up-link from every Problem Discovery and Validation article ("log it in the backlog") — it is the Ideas pillar's connective tissue. IDE-042 → IDE-009 (the backlog's scoring column) and → IDE-041 (the weekly cadence that maintains it).

### 2.10 Cluster: AI-Assisted Research (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-045 — Use ChatGPT to Pressure-Test a Startup Idea — Prompts and Limits (`/ideas/chatgpt-validate-startup-idea`) | how to use chatgpt to validate a startup idea | 3.70 / P2 |
| Supporting | IDE-043 — AI Prompts for SaaS Idea Research That Force Evidence Over Hype | ai prompts for saas idea research | 3.50 / P2 |
| Supporting | IDE-046 — AI Idea Generation Risks — Hallucinated Demand and Fake Competitors | ai idea generation risks and hallucinated demand | 3.50 / P2 |
| Supporting | IDE-044 — Use AI to Analyze Customer Complaints Without Inventing Evidence | how to use ai to analyze customer complaints | 3.40 / P2 |

- **Main search intent:** Informational / method with a safety frame — AI as research assistant, never as evidence. IDE-046 is the cluster's guardrail article and is linked from all three siblings.
- **Recommended internal links:** All four → IDE-001 and → IDE-002 (AI output routes back to real-world validation and real complaints — the cluster's editorial rule, stated in each article). IDE-043 → BUI-015 with a stage anchor only (research prompts here; build prompts in Build — different intent, no conflict).

### 2.11 Cluster: Case Studies (2 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | IDE-051 — Case Study — A Landing Page Test That Killed a SaaS Idea Cheaply (`/ideas/case-study-landing-page-killed-idea`) | case study — landing page test that killed a saas idea | 3.70 / P2 |
| Supporting | IDE-050 — Case Study — From Recurring Complaint to Paid Micro SaaS Wedge | product opportunity case study — complaint to paid micro saas | 3.30 / P2 |

- **Main search intent:** Informational / evidence — worked, real outcomes. **Both records require first-hand or permissioned case data before writing** (see roadmap flags). Neither may be written from invented or composited examples.
- **Recommended internal links:** IDE-051 → IDE-007 and → IDE-047 (the method and the kill criteria it applied). IDE-050 → IDE-002 and → IDE-025 (complaint mining and the pre-sell that closed it). Both receive links *from* their method articles as the worked-example proof — this is the differentiation the SERP analysis found missing across the whole Ideas pillar.

---

## 3. Pillar: Build — `/build`

Pillar intent (per D6 §4): help a solo builder ship the product with a lean stack. 55 records, 12 clusters, 16 P1s — the largest P1 bench of any pillar.

### 3.1 Cluster: MVP Scoping and Specs (2 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-002 — How to Scope a SaaS MVP and What to Cut First (`/build/how-to-scope-a-saas-mvp`) | how to scope a saas mvp | 4.40 / P1 |
| Supporting | BUI-026 — How to Write User Stories an AI Coding Agent Can Build From | how to write user stories for ai coding agents | 2.80 / P3 |

- **Main search intent:** Informational / decision — what goes in v1 and what is cut, tested against the core hypothesis. D6 §4 names the MVP-scoping guide as the Build pillar's "Start here" featured guide, which matches BUI-002's primary status.
- **Key related user questions:** How do you test a feature against the core hypothesis; what are the usual features to cut; when have you cut too much? (BUI-002)
- **Recommended internal links:** BUI-002 → BUI-001 (scope first, then build sequence — the Build pillar's central handoff) and → BUI-014 (the scoped feature set becomes the PRD). BUI-026 → BUI-002 and → BUI-014. Inbound journey link: IDE-022 (feasibility) → BUI-002.

### 3.2 Cluster: MVP Building (2 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-001 — How to Build a SaaS MVP Step by Step as a Solo Founder (`/build/how-to-build-a-saas-mvp`) | how to build a saas mvp | 4.40 / P1 |
| Supporting | BUI-050 — SaaS Boilerplate vs Building From Scratch for a Solo Founder | saas boilerplate vs building from scratch | 4.10 / P1 |

- **Main search intent:** Informational / how-to — the build sequence from scaffold to first paying user. BUI-050 owns the start-point decision (buy a starter vs start blank) and is read *before* BUI-001's step 1 in journey order.
- **SERP note:** **Realistic only with a superior asset** (track-serp.md §8): the SERP is agency lead-gen (6–10-week team timelines). BUI-001's asset is a documented solo build — public scope log, cut list and timeline. Without that asset the article is not publishable to standard (roadmap prerequisite flag).
- **Key related user questions:** What is the build order for auth and billing and the core workflow; how long should an MVP take; what can be skipped until after launch? (BUI-001)
- **Recommended internal links:** BUI-001 → BUI-002 (up-link to scope), → BUI-003 (stack default), → BUI-008 (billing step deep-dive), → BUI-013 (pre-launch gate). BUI-050 → BUI-003 and → BUI-001.

### 3.3 Cluster: Tech Stack and Architecture (6 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-003 — Best Free Tech Stack for a Solo SaaS Developer (`/build/best-free-tech-stack-solo-saas-developer`) | best free tech stack for a solo saas developer | 4.40 / P1 |
| Supporting | BUI-012 — Next.js SaaS Architecture with the App Router Explained for Solo Builders | next.js saas architecture | 3.50 / P2 |
| Supporting | BUI-027 — Next.js Server Actions vs API Routes for a SaaS | next.js server actions vs api routes | 3.50 / P2 |
| Supporting | BUI-028 — Pragmatic TypeScript for Solo SaaS Developers | typescript for solo developers pragmatic guide | 2.80 / P3 |
| Supporting | BUI-051 — Monorepo vs Single Repo for a Solo SaaS | monorepo vs single repo for solo saas | 2.80 / P3 |
| Supporting | BUI-052 — Caching and Performance Basics for a Next.js SaaS That Feels Slow | caching and performance basics for next.js saas | 2.80 / P3 |

- **Main search intent:** Commercial-investigation / recommendation — a default stack by layer, cost-aware. The adjacent SERP query "best tech stack for a solo saas founder" is **Realistic now** (track-serp.md §7 — a niche indie site is #1; the gap is real running costs and free-tier ceilings). BUI-003 must therefore publish costed, first-hand stack data (monthly cost at 0 / 100 / 1,000 users, free-tier traps), not another default list.
- **Key related user questions:** Which layers are free at MVP stage; where do free tiers end; what is the default stack if you know TypeScript? (BUI-003)
- **Recommended internal links:** BUI-003 → BUI-006/BUI-047 (deployment of the stack), → BUI-010 (backend choice), → BUI-050 (boilerplate decision). BUI-012 is the architecture hub for BUI-027, BUI-051, BUI-052, BUI-054 — each links up to BUI-012 and across to BUI-003.

### 3.4 Cluster: Prompting and Spec-Driven Development (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-004 — How to Write a Technical Specification for an AI Coding Agent (`/build/how-to-write-technical-specification-for-ai-coding-agent`) | how to write a technical specification for an ai coding agent | 4.60 / P1 |
| Supporting (co-flagship, stage-split — §8, C-10) | BUI-014 — How to Write a PRD an AI Coding Agent Can Actually Build From | how to write a prd for an ai coding agent | 4.60 / P1 |
| Supporting | BUI-015 — Prompt Templates for Building Features with AI Coding Agents | prompt templates for ai coding agents | 3.50 / P2 |
| Supporting | BUI-016 — Debugging Prompts That Make AI Coding Agents Prove the Cause First | debugging prompts for ai coding agents | 3.50 / P2 |
| Supporting (deferred — §8, C-10) | BUI-017 — Spec-Driven Development with AI Coding Agents Explained Simply | spec driven development with ai coding agents | 3.50 / P2 |

- **Main search intent:** Informational / template — documents and prompts an agent can execute without guessing. BUI-004 owns the technical-depth intent (testable acceptance criteria, always/ask-first/never boundaries); BUI-014 owns the earlier product-stage intent (the seven-section PRD, non-goals). The split is by document stage, enforced in §8.
- **Key related user questions:** What sections must a spec contain; how do you write testable acceptance criteria? (BUI-004) · What are the seven sections of an agent-ready PRD; how do non-goals stop scope creep? (BUI-014)
- **Recommended internal links:** BUI-014 → BUI-004 (PRD matures into spec — the cluster's reading order) and → BUI-002 (scope feeds the PRD). BUI-004 → BUI-015, BUI-016 (templates that execute the spec) and → BUI-007 (the workflow the spec runs inside). BUI-017, when published, links down to both BUI-004 and BUI-014 and targets neither's terms.

### 3.5 Cluster: AI-Assisted Development (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-007 — Vibe Coding Workflow for Production Software as a Solo Founder (`/build/vibe-coding-workflow-production-solo-founder`) | vibe coding workflow | 4.40 / P1 |
| Supporting | BUI-055 — From Vibe Coded Prototype to Production Codebase in Seven Steps | how to turn a vibe coded prototype into production code | 4.40 / P1 |
| Supporting | BUI-023 — How to Maintain AI Generated Code Without Losing Control of Your SaaS | how to maintain ai generated code | 3.50 / P2 |
| Supporting | BUI-025 — AGENTS.md and CLAUDE.md Files That Actually Work for AI Coding Agents | agents.md vs claude.md project rules for ai coding agents | 3.50 / P2 |

- **Main search intent:** Informational / workflow — AI-assisted building *to production standard*: phases, human review points, safe commit/rollback.
- **SERP note:** The head term "vibe coding" is **Long-term only** (track-serp.md §9 — GitHub, Google, Microsoft, Wikipedia and Britannica own the top 12; definitional intent). **No IndieOS article targets the head term or the "what is vibe coding" intent.** BUI-007's target is the *workflow* long-tail, which is a different, contestable intent. See §9.
- **Recommended internal links:** BUI-007 → BUI-004 (spec phase), → BUI-024 (verification phase), → BUI-023 (maintenance phase), → BUI-055 (the rescue path when the workflow was skipped). BUI-055 → BUI-013 (its final step is the production readiness gate — §8, C-11).

### 3.6 Cluster: AI Coding Agents (6 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-005 — Claude Code vs Cursor vs Copilot for Solo SaaS Builders (`/build/claude-code-vs-cursor-vs-copilot-solo-saas`) | claude code vs cursor vs copilot | 3.50 / P2 |
| Supporting | BUI-018 — How to Use Claude Code to Build a SaaS Feature End to End | how to use claude code to build a saas | 3.50 / P2 |
| Supporting | BUI-019 — How to Use Cursor to Build a SaaS Without Losing Track of the Code | how to use cursor to build a saas | 3.50 / P2 |
| Supporting | BUI-020 — Codex vs Claude Code vs Gemini CLI for Terminal Based Building | codex vs claude code vs gemini cli | 2.80 / P3 |
| Supporting | BUI-021 — Windsurf vs Cursor for Solo Developers Building SaaS | windsurf vs cursor | 2.80 / P3 |
| Supporting | BUI-022 — Is GitHub Copilot Worth It for Solo SaaS Developers in 2026 | is github copilot worth it for solo developers | 2.80 / P3 |

- **Note on the primary:** No P1 in this cluster. BUI-005 is primary on umbrella intent, and it also absorbs the high-demand two-way query "claude code vs cursor" as a secondary keyword. SERP verdict for that query: **Realistic only with a superior asset** (track-serp.md §10 — Zapier's first-hand tested comparison anchors the SERP). BUI-005 is therefore **benchmark-gated**: it may only be published with a reproducible first-hand benchmark (same SaaS tasks in each tool, time, token and cost logs, dated). An opinion comparison is not publishable (roadmap flag).
- **Main search intent:** Commercial-investigation — tool choice, pricing, and solo-scale fit; supporting tutorials own per-tool how-to intent.
- **Recommended internal links:** BUI-005 → BUI-018, BUI-019 (from comparison verdict to hands-on setup) and → BUI-007. BUI-018/BUI-019 → BUI-025 (project rules setup) and → BUI-015 (prompt templates). BUI-020/BUI-021/BUI-022 → BUI-005 (up-link only; they own narrow pairings and must not re-litigate the three-way verdict).

### 3.7 Cluster: Auth and Security (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-009 — Clerk vs Supabase Auth vs Auth.js for a Next.js SaaS (`/build/clerk-vs-supabase-auth-vs-authjs`) | clerk vs supabase auth vs auth.js | 4.40 / P1 |
| Supporting (hub role — see note) | BUI-033 — SaaS Security Basics and OWASP for Solo Founders | saas security basics for solo founders | 4.20 / P1 |
| Supporting | BUI-032 — How to Add Authentication to a Next.js SaaS Without Building It Yourself | how to add authentication to a next.js saas | 3.50 / P2 |
| Supporting | BUI-053 — Rate Limiting and Abuse Protection for a Small SaaS API | rate limiting for saas apis | 2.80 / P3 |

- **Note on roles:** BUI-009 is primary because auth choice is the cluster's head commercial intent. BUI-033 is the cluster's *security hub*: it is linked from BUI-009, BUI-032 and BUI-053 as the checklist everything must pass, and it links down to BUI-031 (RLS) and BUI-048 (secrets). The two P1s divide intent — choice vs baseline — per §8, C-14.
- **Main search intent:** Commercial-investigation (which auth) plus informational checklist (what secure-enough means for one person).
- **Key related user questions:** How do setup time and UI and organizations compare; how does cost change with monthly active users; when does row level security decide the choice? (BUI-009) · Which OWASP risks actually hit small SaaS apps; how do you test tenant isolation and IDOR by hand? (BUI-033)
- **Recommended internal links:** BUI-009 → BUI-032 (decision → implementation) and → BUI-031 (when RLS decides it). BUI-032 → BUI-033 (the security pass after setup). BUI-033 → BUI-013 (security items are launch blockers there).

### 3.8 Cluster: Databases and Data (6 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-010 — Supabase vs Firebase for an Indie SaaS (`/build/supabase-vs-firebase-indie-saas`) | supabase vs firebase for saas | 3.50 / P2 |
| Supporting | BUI-029 — Postgres vs SQLite for an Indie SaaS | postgres vs sqlite for a saas | 3.50 / P2 |
| Supporting | BUI-030 — Prisma vs Drizzle for a Next.js SaaS | prisma vs drizzle for next.js | 3.50 / P2 |
| Supporting (paired — §8, C-13) | BUI-031 — Supabase Row Level Security for a Multi Tenant SaaS Explained | supabase row level security multi tenant saas | 3.50 / P2 |
| Supporting (paired — §8, C-13) | BUI-054 — Multi Tenancy in a Next.js SaaS Explained Simply | multi tenancy in next.js saas explained | 3.50 / P2 |
| Supporting | BUI-049 — Database Migrations for Solo SaaS Without the Downtime Fear | database migrations for solo saas | 2.80 / P3 |

- **Note on the primary:** All six records score 3.50/2.80 (no P1). BUI-010 is primary on umbrella intent (backend platform choice is the first data decision a solo founder makes). The three comparison articles (BUI-010, BUI-029, BUI-030) form a choice chain — platform → database engine → ORM — and cross-link in that order; none of them targets another's pairing (§6 rule 3).
- **Main search intent:** Commercial-investigation comparisons, plus tutorial intent for the RLS/multi-tenancy pair.
- **Recommended internal links:** BUI-010 → BUI-029, BUI-030, BUI-031. BUI-031 ↔ BUI-054 are a bound pair (model-level explainer ↔ data-layer implementation) with reciprocal links and a shared "read both" note. BUI-049 → BUI-030 and → BUI-013.

### 3.9 Cluster: Payments and Billing (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide (hub)** | BUI-008 — Stripe Subscriptions in Next.js with Webhooks and the Billing Portal (`/build/stripe-subscriptions-nextjs-webhooks-billing-portal`) | stripe subscriptions in next.js | 4.30 / P1 |
| Supporting (deep-dive) | BUI-034 — Stripe Webhooks Explained for Next.js SaaS Builders | stripe webhooks explained for next.js | 3.50 / P2 |
| Supporting (deep-dive) | BUI-035 — How to Set Up the Stripe Billing Portal for Your SaaS | how to set up stripe billing portal | 3.50 / P2 |
| Supporting | BUI-036 — How to Handle Failed Payments and Dunning in Stripe Without Losing Customers | how to handle failed payments in stripe | 3.50 / P2 |

- **Main search intent:** Tutorial / implementation — code-first; the searcher wants Checkout plus webhooks plus portal on the App Router.
- **SERP note:** **Realistic only with a superior asset** (track-serp.md §12 — fragmented niche/community SERP, no Stripe official result, heavy version churn). BUI-008's asset is a maintained, version-pinned GitHub repo (full webhook suite, tested) linked from the article. Text-only publication is not to standard (roadmap prerequisite flag).
- **Binding hub rule (§8, C-15):** BUI-008 owns the end-to-end intent and the head keyword. BUI-034 and BUI-035 are deep-dives only — their titles, headings and intros must frame them as chapters of the hub's system, and each links up to BUI-008 in its first section. BUI-036 owns the implementation of dunning in Stripe; the Growth-side recovery strategy is GRO-036 (§8, C-23).
- **Key related user questions:** How do you create a checkout session; which five webhook events cover the lifecycle; how do you map subscription state to entitlements; how do you test locally with the Stripe CLI? (BUI-008)

### 3.10 Cluster: APIs and Integrations (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | BUI-039 — Background Jobs in Next.js for SaaS with Inngest and Cron Compared (`/build/background-jobs-nextjs-saas-inngest-cron`) | background jobs in next.js | 4.40 / P1 |
| Supporting | BUI-038 — How to Integrate Third Party APIs Without Breaking Your SaaS | how to integrate third party apis safely | 3.50 / P2 |
| Supporting | BUI-040 — Transactional Email with Resend for a SaaS From Welcome to Billing Alerts | transactional email with resend for saas | 3.50 / P2 |
| Supporting | BUI-041 — File Uploads in a Next.js SaaS Done Safely | file uploads in next.js safely | 3.50 / P2 |
| Supporting | BUI-037 — How to Design a REST API for a Small SaaS That Stays Sane | how to design a rest api for a small saas | 2.80 / P3 |

- **Main search intent:** Informational / tutorial — the unglamorous production plumbing (async work, email, uploads, third-party resilience) that MVP guides skip.
- **Recommended internal links:** BUI-039 is the cluster's connective hub: BUI-040 (sends run as jobs), BUI-041 (uploads trigger jobs) and BUI-038 (calls leave the request path) each link up to it, and it links down to all three. BUI-040 → BUI-032 (auth emails) and → GRO-053 with a stage anchor only (transactional here; lifecycle/onboarding sequences in Growth).

### 3.11 Cluster: Deployment and Production Operations (6 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide (lead in practice — §9)** | BUI-013 — SaaS Production Readiness Checklist for Solo Founders (`/build/saas-production-readiness-checklist-solo-founders`) | saas production readiness checklist | 4.40 / P1 |
| Supporting (postponed/reframed — §9) | BUI-006 — How to Deploy a Next.js SaaS for Free Without Breaking Production Rules | how to deploy a next.js saas for free | 4.40 / P1 |
| Supporting | BUI-046 — Error Tracking and Logging for a Solo SaaS with Sentry | error tracking for solo saas with sentry | 3.50 / P2 |
| Supporting (comparison-led — §8, C-08) | BUI-047 — Free Hosting for an Indie SaaS Compared Honestly | free hosting for indie saas compared | 3.50 / P2 |
| Supporting | BUI-048 — How to Manage Environment Variables and Secrets Safely as a Solo Developer | how to manage environment variables and secrets safely | 3.50 / P2 |
| Supporting | BUI-042 — Analytics for a Small SaaS with PostHog vs Plausible vs Vercel Analytics | analytics for small saas posthog vs plausible | 2.80 / P3 |

- **Main search intent:** Informational / go-live — "is this safe to show the public, and where does it run?"
- **SERP note (important):** BUI-006's head query "how to deploy next.js for free" is **Long-term only** (track-serp.md §11 — nextjs.org official docs hold positions 0–4). BUI-006 and BUI-013 tie on score (4.40), so the tie is broken by SERP evidence: **BUI-013 leads the cluster**; BUI-006 is postponed and reframed to the contestable long-tail the SERP analysis identified (free tiers *for a commercial SaaS* — the Vercel Hobby non-commercial trap and its alternatives, in one dated comparison table) and published as a supporting article under BUI-013, never as a frontal attack on the docs-owned head term. See §8 C-16 and §9.
- **Key related user questions:** Which items are launch blockers versus fast follows; how do you test backups and billing failure paths; what monitoring must exist on day one? (BUI-013)
- **Recommended internal links:** BUI-013 → BUI-033 (security section), → BUI-046 (monitoring section), → BUI-048 (secrets section), → BUI-006/BUI-047 (hosting section), and → LAU-004 (product readiness hands off to launch readiness — §8, C-28). Every Build pillar article that ends at "ship it" links forward to BUI-013.

### 3.12 Cluster: Testing Debugging and Quality (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide (strategy hub)** | BUI-011 — What to Test in a SaaS MVP as a Solo Developer (`/build/what-to-test-in-a-saas-mvp`) | what to test in a saas mvp | 4.60 / P1 |
| Supporting (co-flagship) | BUI-024 — How to Verify AI Generated Code Before You Ship It | how to verify ai generated code | 4.60 / P1 |
| Supporting | BUI-043 — A Solo Developer Workflow for Debugging a SaaS in Production | how to debug a saas in production | 3.50 / P2 |
| Supporting (hub child) | BUI-044 — Vitest for Next.js SaaS and What to Unit Test First | vitest for next.js unit testing | 3.50 / P2 |
| Supporting (hub child) | BUI-045 — Playwright Tests for SaaS Signup and Checkout Money Paths | playwright tests for saas checkout and signup | 3.50 / P2 |

- **Main search intent:** Informational / strategy plus tutorial — what deserves tests at solo scale, and how to verify code you did not write. BUI-011 owns test *strategy*; BUI-024 owns the *verification checklist* for AI-generated code specifically (different reader moment: planning vs pre-ship review — §8, C-12). BUI-044/BUI-045 are tool-level children of BUI-011 and must not re-argue strategy.
- **Key related user questions:** Which three flows must always be tested; what belongs in unit versus end-to-end tests; what can monitoring replace? (BUI-011) · What is the minimum verification stack of types and lint and tests and build? (BUI-024)
- **Recommended internal links:** BUI-011 → BUI-044, BUI-045, BUI-046 (strategy → tools → monitoring). BUI-024 → BUI-011, → BUI-023, → BUI-016 (verification → maintenance → debugging prompts). BUI-045 → BUI-008 (the checkout it tests is the Stripe hub's).

---

## 4. Pillar: Launch — `/launch`

Pillar intent (per D6 §4): help a founder launch to first users without paid ads. 55 records, 15 clusters, 15 P1s.

### 4.1 Cluster: Pre-launch planning (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-005 — How to Launch a Micro-SaaS as a Solo Founder (`/launch/how-to-launch-a-micro-saas`) | how to launch a micro saas | 4.20 / P1 |
| Supporting | LAU-002 — How to Write a SaaS Product Launch Plan as a Solo Founder | saas product launch plan | 3.75 / P2 |
| Supporting | LAU-001 — Product Launch Checklist for Indie SaaS Founders | product launch checklist | 3.70 / P2 |
| Supporting | LAU-003 — Pre-Launch Marketing for Indie Products — What to Do Before You Ship | pre launch marketing strategy | 3.65 / P2 |
| Supporting | LAU-004 — Launch Readiness — How to Know Your Product Is Ready to Launch | launch readiness checklist go no go | 3.50 / P2 |

- **Main search intent:** Informational / planning — the sequence before launch day. Intent split is binding (§8, C-20): LAU-005 owns the end-to-end solo playbook; LAU-002 owns the written *plan document* (phases, goals, KPIs); LAU-001 owns the *task checklist* (items and timing); LAU-004 owns the *go/no-go decision*. Four articles, four different artefacts — outlines must not converge.
- **SERP note:** LAU-001's head term faces very high competition (multiple dedicated checklist guides — CSV SERP assessment). It stays P2 supporting; the cluster is entered through LAU-005.
- **Recommended internal links:** LAU-005 → LAU-002 → LAU-001 → LAU-004 in planning order, and → LAU-038 (where the first customers in the plan actually come from). LAU-004 → BUI-013 (launch readiness assumes product readiness — §8, C-28). LAU-003 → LAU-007 (pre-launch marketing's main asset is the waitlist).

### 4.2 Cluster: Waitlist and beta (7 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-007 — How to Build a Waitlist Before Launch That Actually Converts (`/launch/how-to-build-a-waitlist`) | how to build a waitlist | 4.20 / P1 |
| Supporting (co-lead on score) | LAU-011 — How to Find Beta Testers for Your SaaS Who Match Your Buyers | how to find beta testers | 4.40 / P1 |
| Supporting | LAU-008 — Waitlist Landing Page — Structure and Examples That Convert | waitlist landing page | 3.70 / P2 |
| Supporting | LAU-010 — How to Run a Beta Program for Your SaaS Before Public Launch | how to run a beta program | 3.55 / P2 |
| Supporting | LAU-009 — Waitlist Email Sequence — Emails to Send Before Launch Day | waitlist email sequence | 3.50 / P2 |
| Supporting | LAU-013 — How to Run an Early Access Launch Without a Big Audience | early access program launch | 3.25 / P2 |
| Supporting | LAU-012 — Soft Launch vs Public Launch — Which Should an Indie Product Use | soft launch vs hard launch | 3.10 / P2 |

- **Note on roles:** LAU-011 scores higher (4.40 vs 4.20) but owns a narrower intent (recruiting testers); LAU-007 owns the cluster's umbrella system (page, referrals, warming, conversion) and the SERP-checked head query. LAU-011 is the cluster's co-lead and its first supporting article in reading order (testers before waitlist scale, for most solo products).
- **SERP note:** "how to build a waitlist" is **Realistic now for the marketing intent only** (track-serp.md §17 — the technical/auth reading is owned by Clerk docs; the founder-marketing job is unserved). LAU-007 must be written as the marketing playbook plus referral/template asset, and must not drift into waitlist *feature implementation*.
- **Key related user questions:** How do you get the first 100 signups; how do you keep a waitlist warm; do referrals help? (LAU-007) · Where do you find beta testers; how do you screen them; what should the invite say? (LAU-011)
- **Recommended internal links:** LAU-007 → LAU-008 (page), → LAU-009 (warming sequence), → LAU-040 (conversion at launch). LAU-011 → LAU-010 (recruit → run the programme) and → LAU-039 (testers are the first early adopters). LAU-007 ↔ IDE-026 reciprocal journey link (build/operate here; interpret as evidence there — §8, C-07).

### 4.3 Cluster: Positioning and copy (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-014 — Product Positioning for Launch — Find the Angle Before You Announce (`/launch/product-positioning-for-launch`) | product positioning for launch | 4.20 / P1 |
| Supporting | LAU-015 — Launch Messaging Framework — One Message House for Every Channel | launch messaging framework | 3.50 / P2 |
| Supporting | LAU-017 — How to Write a Launch Announcement Post for Each Channel | how to write a launch announcement | 3.50 / P2 |
| Supporting | LAU-016 — Launch Page Copy — Write a Landing Page That Explains a New Product in Seconds | product launch landing page copy | 3.45 / P2 |
| Supporting | LAU-018 — How to Write a Product Tagline for Launch — Clear Beats Clever | product tagline examples launch | 2.90 / P3 |

- **Main search intent:** Informational / framework and copywriting — angle → message house → per-channel expression → page copy → tagline. The cluster is a pipeline; each article consumes the previous one's output.
- **Recommended internal links:** LAU-014 → LAU-015 → LAU-017 in pipeline order; LAU-015 → LAU-016 and → LAU-018. LAU-016 → LAU-008 (launch page vs waitlist page are siblings, not rivals — §8, C-20) and → GRO-006 with a stage anchor (launch copy here; ongoing conversion optimisation in Growth).

### 4.4 Cluster: Product Hunt (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide (flagship)** | LAU-020 — How to Launch on Product Hunt in 2026 — The Honest Indie Guide (`/launch/product-hunt-launch-guide`) | how to launch on product hunt | 4.10 / P1 |
| Supporting (explainer) | LAU-025 — How Product Hunt Ranking and Featuring Actually Work | how product hunt ranking works | 4.20 / P1 |
| Supporting | LAU-027 — Product Hunt Alternatives for Indie Launches — Compared by Audience and Window | product hunt alternatives | 4.00 / P1 |
| Supporting | LAU-021 — Product Hunt Launch Checklist — Assets and Tasks by Week | product hunt launch checklist | 3.70 / P2 |
| Supporting | LAU-022 — Product Hunt Launch Day Playbook — Hour by Hour for a Solo Maker | product hunt launch day playbook | 3.55 / P2 |
| Supporting | LAU-023 — Do You Need a Hunter on Product Hunt — Myths and What Officially Matters | do you need a hunter on product hunt | 3.50 / P2 |
| Supporting | LAU-026 — What to Do After Your Product Hunt Launch — The 3 Week Follow-Through | what to do after product hunt launch | 3.50 / P2 |
| Supporting | LAU-024 — How to Write Your Product Hunt First Comment — Maker Comment Template | product hunt first comment | 2.90 / P3 |

- **Note on roles:** LAU-025 scores marginally above the flagship (4.20 vs 4.10) but owns a sub-intent (how ranking/featuring works) that the flagship must *explain and link out to*, not duplicate. LAU-020 owns the end-to-end launch intent. LAU-027 sits in this cluster per the CSV but functions as the bridge to the Directories cluster (§4.9).
- **SERP note:** "how to launch on product hunt" is **Realistic only with a superior asset** (track-serp.md §13 — Product Hunt's own hub owns positions 1–5; independent guides rank 6–12). LAU-020's asset is a real launch teardown with dated numbers (upvotes → sign-ups → paying customers). **A generic checklist version of LAU-020 must not be published** — LAU-021 already owns the checklist artefact inside this cluster. "product hunt alternatives" is likewise **superior-asset only** (§16 of track-serp.md — the SERP is vendor-captured): LAU-027 requires a maintained, neutral directory database with tested per-platform data (see §9).
- **Phase split (binding, §8, C-19):** LAU-021 owns *preparation* (assets by week), LAU-022 owns *execution* (the day, hour by hour), LAU-026 owns *follow-through* (3 weeks after). LAU-020 summarises each phase in one section and links down; it does not reproduce their checklists.
- **Key related user questions:** How does Product Hunt ranking work now; do you need a hunter; when can you schedule a launch; what gets featured? (LAU-020 — with ranking and hunter questions answered in depth by LAU-025 and LAU-023 respectively)
- **Recommended internal links:** LAU-020 → LAU-021, LAU-022, LAU-025, LAU-023, LAU-026, LAU-027. LAU-022 → LAU-036 (the multi-channel day view) and → LAU-026. LAU-024 → LAU-021 (the first comment is one checklist asset).

### 4.5 Cluster: Hacker News and dev communities (5 records) + Developer tool launch (1 record)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-028 — Show HN Guide — How to Launch on Hacker News Without Getting Flagged (`/launch/show-hn-guide`) | show hn guide | 4.20 / P1 |
| Satellite primary (own CSV cluster) | LAU-006 — How to Launch a Developer Tool — Docs and Demos First | how to launch a developer tool | 4.40 / P1 |
| Supporting | LAU-029 — Why Show HN Posts Fail — Mistakes That Get Flagged or Ignored | hacker news launch mistakes | 3.40 / P2 |
| Supporting | LAU-030 — Launching an Open Source Tool — GitHub README as Your Launch Page | launching on github open source | 3.25 / P2 |
| Supporting | LAU-032 — How to Write an Indie Hackers Launch Post That Gets Real Feedback | indie hackers launch post | 3.00 / P2 |
| Supporting | LAU-031 — Launching a Developer Tool on DevHunt and daily.dev and Peerlist | devhunt and daily dev launch | 2.70 / P3 |

- **SERP notes:** "how to launch on hacker news" is **Realistic now** (track-serp.md §14 — niche guides dominate; the official page is #10; timing advice conflicts between sources, which LAU-028 must reconcile). "how to launch a developer tool" is **Realistic now and the weakest SERP of all 24 checked** (§18 — Google largely misreads the intent as browser DevTools; only 2 of 13 results are on-intent). LAU-006 is therefore one of the highest-leverage articles on the whole site despite sitting in a one-record CSV cluster.
- **Main search intent:** Informational / playbook — channel rules, timing, first comment, and the try-without-signup requirement.
- **Key related user questions:** What qualifies for Show HN; what title format works; why must the product be tryable without signup? (LAU-028) · What artifacts decide a dev tool launch; where should dev tools launch first? (LAU-006)
- **Recommended internal links:** LAU-006 → LAU-028 (HN is the canonical dev-tool channel), → LAU-031 (dev-specific platforms), → LAU-019 (the demo asset). LAU-028 → LAU-029 (failure modes) and → LAU-036 (day coordination). LAU-032 → GRO-016 with a stage anchor (the launch post here; ongoing Indie Hackers distribution in Growth).

### 4.6 Cluster: Reddit and communities (3 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-033 — How to Launch on Reddit Without Getting Banned or Downvoted (`/launch/reddit-launch-etiquette`) | reddit launch etiquette | 4.10 / P1 |
| Supporting | LAU-035 — Community-Led Launch — Using Slack and Discord and Forums You Already Belong To | community led launch | 3.40 / P2 |
| Supporting | LAU-034 — Subreddit Self-Promotion Rules Compared — r SaaS and r SideProject and More | subreddit self promotion rules | 3.20 / P2 |

- **Main search intent:** Informational / rules-first — how to use communities at launch without destroying the account. Split (§8, C-25): LAU-033 owns *behaviour* (contribution ratio, timing, post craft); LAU-034 owns the *reference table* of per-subreddit rules. LAU-035 generalises the behaviour to non-Reddit communities.
- **Cross-pillar boundary:** Ongoing Reddit marketing after launch is GRO-011 (§8, C-25). LAU-033 covers the launch window only and links forward to GRO-011.
- **Recommended internal links:** LAU-033 → LAU-034, LAU-035, GRO-011 (forward). LAU-034 → LAU-033 (rules → how to act on them).

### 4.7 Cluster: Early adopters and first customers (3 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-038 — How to Get the First Customers for a Bootstrapped SaaS (`/launch/how-to-get-first-customers-bootstrapped-saas`) | how to get first customers bootstrapped saas | 4.10 / P1 |
| Supporting (co-lead on score) | LAU-039 — How to Find Early Adopters Who Will Tolerate a Rough Product | how to find early adopters | 4.20 / P1 |
| Supporting | LAU-040 — Converting Your Waitlist and Beta Users Into Paying Customers at Launch | converting waitlist to customers | 3.40 / P2 |

- **SERP note:** The adjacent queries "how to get your first 100 customers saas" and "how to get first paying customers for saas" are both **Realistic now** (track-serp.md §§15, 24 — fragmented niche SERPs; arithmetic asserted, never evidenced). LAU-038 is written to serve the first-customers family with phased structure (1–10 / 11–50 / 51–100) and real numbers where IndieOS has them; the paying-specific mechanics (paid pilots, deposits, first-cohort pricing) are LAU-038 sections, mirrored from IDE-025's pre-sell methods.
- **Cross-pillar boundary (§8, C-21):** LAU-038 owns *first* customers at launch. GRO-012 owns the *milestone path to $1,000 MRR*. GRO-002 owns the ongoing no-budget channel system. Three articles, three reader moments (launch week / first-revenue climb / steady state).
- **Key related user questions:** Where do the first 10 customers actually come from; should you charge from day one; what outreach converts at zero to one? (LAU-038)
- **Recommended internal links:** LAU-039 → LAU-038 (find them → convert them) and → LAU-011 (early adopters are the beta pool). LAU-038 → LAU-041 (outreach mechanics) and → LAU-052 (how you'll know it worked). LAU-040 → GRO-049 with a stage anchor only (launch-cohort conversion here; day-one conversion measurement in Growth — §8, C-30).

### 4.8 Cluster: Social launch (3 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-045 — Launching on X as a Founder — The Launch Thread That Earns Replies (`/launch/launching-on-x-as-a-founder`) | launching on x as a founder | 3.45 / P2 |
| Supporting | LAU-047 — Build in Public as a Launch Strategy — From First Post to Launch Day | build in public launch strategy | 3.30 / P2 |
| Supporting | LAU-046 — Launching on LinkedIn as a Founder — When B2B Buyers Are the Audience | launching on linkedin as a founder | 3.25 / P2 |

- **Main search intent:** Informational / playbook — the launch-window use of social channels. No P1 in this cluster; LAU-045 is primary on umbrella intent (X is the default indie launch channel).
- **Cross-pillar boundary (§8, C-22):** LAU-047 owns build-in-public *as a launch runway* (first post → launch day). GRO-010 owns build-in-public *as an ongoing growth strategy* (what converts followers into customers over months). The head term "build in public" itself is **Long-term only** (track-serp.md §23 — navigational/entity SERP); neither article targets it directly.
- **Recommended internal links:** LAU-047 → LAU-045 (the runway ends in the launch thread) and → GRO-010 (forward: keep going after launch). LAU-045 ↔ LAU-046 reciprocal (channel choice by audience).

### 4.9 Cluster: Directories and deals (4 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-048 — SaaS Directories to Submit Your Product To — A Sequenced Submission Plan (`/launch/saas-directories-to-submit`) | saas directories to submit | 3.90 / P1 |
| Supporting | LAU-051 — AppSumo and Lifetime Deal Launches — The Real Pros and Cons for Indie SaaS | appsumo lifetime deal launch | 3.45 / P2 |
| Supporting (demoted to section — §8, C-18) | LAU-050 — Uneed and AlternativeTo and SaaSHub — Three Listings With Three Different Jobs | uneed alternativeto saashub listings | 2.70 / P3 |
| Supporting | LAU-049 — BetaList Launch Guide — Using a Pre-Launch Listing to Build Your Waitlist | betalist launch guide | 2.80 / P3 |

- **Main search intent:** Commercial-investigation — where to list, in what order, at what cost, for what return. LAU-048 owns the *sequence and asset kit*; LAU-027 (§4.4) owns the *comparison of Product Hunt alternatives by audience and window*. The two must not both publish "alternatives compared" tables (§8, C-24).
- **Recommended internal links:** LAU-048 → LAU-049, LAU-051 and → LAU-027. LAU-050's three listings are covered as a section inside LAU-048 at launch; the standalone record is only revived if listing-level search demand is evidenced in Search Console data.

### 4.10 Cluster: Launch day operations (2 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-036 — Launch Day Workflow — Coordinating Product Hunt and HN and Social as One Person (`/launch/launch-day-workflow-multi-channel`) | launch day workflow multi channel | 3.50 / P2 |
| Supporting | LAU-037 — Product Launch Mistakes Indie Founders Make — And the Fix for Each | launch mistakes to avoid | 3.45 / P2 |

- **Main search intent:** Informational / operations — one person, one day, several channels. LAU-036 is the *coordinating* view and deliberately stays thin on per-channel detail: it links down to LAU-022 (PH hours), LAU-028 (HN timing) and LAU-045 (X thread) instead of restating them (§8, C-19).
- **Recommended internal links:** LAU-036 → LAU-022, LAU-028, LAU-052 (what to watch during the day). LAU-037 → LAU-055 (mistakes you couldn't fix in time → recovery).

### 4.11 Cluster: Outreach (2 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-041 — Cold Outreach for a Product Launch — Personal Beats Automated at Zero to One (`/launch/cold-outreach-for-launch`) | cold outreach for launch | 3.45 / P2 |
| Supporting | LAU-042 — Partnership and Newsletter Outreach for Launch Week Distribution | partnership outreach for launch | 2.70 / P3 |

- **Main search intent:** Informational / tactical — direct messages that earn first users and launch-week amplification.
- **Cross-pillar boundary:** Launch outreach (LAU-041) is one-to-one and launch-timed. Ongoing compliant cold email as a growth channel is GRO-014 — different setup, compliance and volume regime; the two link to each other with stage anchors and share no templates.

### 4.12 Cluster: Launch content (2 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-019 — How to Make a Product Demo Video for Launch on a Zero Budget (`/launch/demo-video-for-product-launch`) | how to make a product demo video | 3.05 / P2 |
| Supporting | LAU-044 — Launch Screenshots and GIFs — Visual Assets That Carry a Listing | launch screenshots and gifs | 2.80 / P3 |

- **Main search intent:** Informational / asset production — the visuals every listing in §4.4/§4.9 requires. Both are natural supporting links from LAU-021 (asset checklist) and LAU-006 (demo-first dev-tool launches).

### 4.13 Cluster: Post-launch and metrics (4 records) + Feedback (1 record)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | LAU-052 — Launch Metrics to Track — The Few Numbers That Tell You If It Worked (`/launch/launch-metrics-to-track`) | launch metrics to track | 4.10 / P1 |
| Supporting (co-lead) | LAU-055 — Your Launch Flopped — A 14 Day Recovery and Relaunch Plan | what to do when launch flops | 4.10 / P1 |
| Supporting | LAU-054 — How to Relaunch a Product — When a Second Launch Beats a First | relaunching a product | 3.20 / P2 |
| Supporting | LAU-053 — How to Write a Launch Retrospective That Improves the Next Launch | product launch retrospective | 3.10 / P2 |
| Satellite (own CSV cluster: Feedback) | LAU-043 — Building Early Feedback Loops — Turn Launch Comments Into a Roadmap | early feedback loops after launch | 3.35 / P2 |

- **Main search intent:** Informational / diagnosis and recovery — what the numbers mean, what to do when they are bad, and how to run it again properly. Reading order: LAU-043 (collect signal) → LAU-052 (read signal) → LAU-053 (record it) → LAU-055/LAU-054 (act on it).
- **Recommended internal links:** LAU-052 → LAU-053, LAU-055 and → GRO-033 (launch metrics hand off to the ongoing metrics dashboard — cross-pillar). LAU-055 → LAU-054 (recover first, relaunch second) and → LAU-029 (channel-specific failure causes).

---

## 5. Pillar: Growth — `/growth`

Pillar intent (per D6 §4): help a founder get repeatable users and revenue after launch. 55 records, 8 clusters, 12 P1s. Growth is the pillar where the SERP evidence is harshest: three of its head terms are authority-locked (§9), so this pillar is entered through long-tails and niche-held queries, exactly as track-serp.md's cross-SERP pattern prescribes.

### 5.1 Cluster: Acquisition Channels (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | GRO-002 — How to Market a Micro-SaaS Without Paid Advertising — Channels That Cost Time Not Money (`/growth/how-to-market-micro-saas-without-paid-advertising`) | how to market a micro-saas without paid advertising | 4.20 / P1 |
| Supporting (milestone co-lead) | GRO-012 — How to Get to 1000 Dollars MRR — The Unscalable First-Customer Playbook | how to get to 1000 mrr | 4.00 / P1 |
| Supporting | GRO-019 — SaaS Distribution Channels Compared — Cost Time and Fit for Solo Founders | distribution channels for saas compared | 3.65 / P2 |
| Supporting | GRO-030 — MRR Growth Tactics for Bootstrapped SaaS — Compounding Moves After Product Fit Signals | mrr growth tactics bootstrapped | 3.55 / P2 |
| Supporting | GRO-047 — Affiliate Programs for Micro-SaaS — Set Commission Payout and Fraud Rules First | affiliate program for micro saas | 3.30 / P2 |
| Supporting | GRO-048 — Referral Programs for SaaS — Design an Invite Loop Users Understand in Five Seconds | referral program for saas | 3.30 / P2 |
| Supporting | GRO-041 — Founder Growth Lessons and Failures — How to Read Postmortems Without Copying Survivors | founder growth lessons and failures | 3.15 / P2 |
| Supporting | GRO-046 — YouTube for SaaS Founders — Search-Led Tutorials From a Small Channel | youtube for saas founders | 2.85 / P3 |

- **Main search intent:** Informational / playbook — organic channels budgeted in hours, not money.
- **SERP note:** GRO-002's adjacent query "how to market a saas with no budget" is **Realistic now** (track-serp.md §19 — small blogs only; the gap is a time-budgeted, first-hand 90-day log). GRO-002 should therefore be structured as a 90-day, hours-per-channel plan. GRO-012 serves the "first paying customers" family (**Realistic now**, §24) from the Growth side — the milestone view, distinct from LAU-038's launch view (§8, C-21).
- **Key related user questions:** Which free channel should a solo founder start with; how long until organic channels pay back; what should you stop doing? (GRO-002) · Where do the first ten customers come from; what outreach actually converts; when do you stop manual work? (GRO-012)
- **Recommended internal links:** GRO-002 → GRO-019 (channel comparison table), → GRO-011 (Reddit system), → GRO-010 (build in public), → GRO-042 (free-tool engineering). GRO-012 → LAU-038 (back-link: the launch that precedes the climb) and → GRO-014 (the outreach channel in compliant depth).

### 5.2 Cluster: Email and Community (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | GRO-011 — Reddit Marketing for SaaS Without Getting Banned — The Value-First System (`/growth/reddit-marketing-for-saas-without-ban`) | reddit marketing for saas | 4.10 / P1 |
| Supporting | GRO-010 — Build in Public on X — What Actually Converts Followers Into SaaS Customers | build in public strategy | 4.00 / P1 |
| Supporting | GRO-014 — Cold Email for SaaS Founders — A Compliant Deliverability-First Setup | cold email for saas | 3.65 / P2 |
| Supporting | GRO-053 — Onboarding Email Sequences for SaaS — Behaviour Triggers Beat Day-Based Blasts | onboarding email sequence saas | 3.65 / P2 |
| Supporting | GRO-016 — How to Use Indie Hackers for SaaS Distribution Without Link Dropping | indie hackers marketing | 3.60 / P2 |
| Supporting | GRO-020 — Lifecycle Emails for SaaS — The Five Sequences That Protect Activation and Renewal | lifecycle emails for saas | 3.50 / P2 |
| Supporting | GRO-021 — Newsletter Growth for Founders — Turn Product Updates Into an Owned Audience | newsletter growth for founders | 3.30 / P2 |
| Supporting | GRO-045 — LinkedIn Marketing for B2B SaaS Founders — Useful Posts Without Thought-Leader Theatre | linkedin marketing for b2b saas founders | 3.20 / P2 |

- **Note on the primary:** GRO-010 is the cluster's thematic centre (owned-audience building) but GRO-011 is primary because it owns the cluster's strongest single-channel intent and the clearest rules-first differentiation. The two cross-link as equals; neither targets the other's keyword.
- **Main search intent:** Informational / channel systems — participation-led distribution that survives community rules, plus the email sequences that convert the attention.
- **SERP note:** The "build in public" head term is **Long-term only** (§9). GRO-010's entry is its X-specific strategy long-tail ("what actually converts"), which track-serp.md rates realistic with a superior asset (cadence templates plus real outcome data). GRO-010 must carry IndieOS's own build-in-public log or permissioned founder data — flagged in the roadmap.
- **Recommended internal links:** GRO-011 → LAU-033 (back-link: launch-window rules) and → GRO-002. GRO-053 → GRO-008 (onboarding emails serve the onboarding milestone) and → GRO-020 (the wider lifecycle system). GRO-016 → LAU-032 (back-link). GRO-014 → LAU-041 (back-link with stage anchor).

### 5.3 Cluster: SEO and Content (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide (lead in practice — §9)** | GRO-009 — SEO for SaaS From Zero — A Founder Workflow for the First 90 Days (`/growth/seo-for-saas-founder-guide`) | seo for saas | 3.70 / P2 |
| Supporting (postponed — §9) | GRO-004 — Programmatic SEO for Small SaaS — Start With 20 Pages Not 2000 | programmatic seo for saas | 3.90 / P1 |
| Supporting | GRO-042 — Engineering as Marketing — Ship a Free Tool That Earns SaaS Signups | engineering as marketing free tools saas | 3.75 / P2 |
| Supporting | GRO-044 — Blog Strategy for a Small SaaS — Publish for Buyers Not for Other Founders | blog strategy for small saas | 3.65 / P2 |
| Supporting | GRO-017 — SaaS Keyword Research for Founders — Score Intent Before Volume | saas keyword research | 3.60 / P2 |
| Supporting | GRO-043 — Comparison and Alternatives Pages for SaaS SEO — High Intent Without Misleading Claims | comparison and alternatives pages saas seo | 3.60 / P2 |
| Supporting | GRO-018 — Content Marketing for a Small SaaS — One Cluster Done Properly Beats Twenty Random Posts | saas content marketing strategy | 3.55 / P2 |
| Supporting | GRO-040 — SEO Case Studies From Indie SaaS — Patterns Worth Copying and Survivorship Traps | seo case studies indie saas | 3.20 / P2 |

- **Note on the primary (SERP-driven exception):** GRO-004 outscores GRO-009 (3.90 vs 3.70) and is the cluster's only P1, but its head term "programmatic seo" is **Long-term only** (track-serp.md §22 — HubSpot, Shopify, Ahrefs, Semrush, Search Engine Land own the SERP; the bar is proprietary data at scale). **GRO-009 therefore leads this cluster in practice**: it owns the beginner workflow intent, sequences the cluster's reading order, and is the article every sibling links up to until GRO-004 is published. GRO-004 is postponed until IndieOS has its own small-scale pSEO case data (its "20 pages not 2,000" angle is a sub-topic, not a head-term attack) — see §9.
- **Main search intent:** Informational / system — search as a compounding channel for a product that already exists. Stage boundary with IDE-036 is binding (§8, C-06).
- **Recommended internal links:** GRO-009 → GRO-017 (research), → GRO-044/GRO-018 (strategy), → GRO-043 (highest-intent page type), → GRO-042 (free-tool assets), → GRO-004 (when published). GRO-040 requires real case data (roadmap flag) and links from GRO-009 as the evidence section's home.

### 5.4 Cluster: Pricing and Monetization (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide (nominal — see §9)** | GRO-003 — SaaS Pricing Strategies for Indie Founders — Flat Tiered and Usage-Based Compared (`/growth/saas-pricing-strategies-indie-founders`) | saas pricing strategies | 3.85 / P1 |
| Lead in practice | GRO-013 — SaaS Pricing Page Best Practices — Design the Page Around Buyer Anxiety | saas pricing page best practices | 3.85 / P1 |
| Supporting | GRO-007 — Freemium vs Free Trial — Which Model Produces More Paying Customers Per Visitor | freemium vs free trial | 4.00 / P1 |
| Supporting | GRO-026 — How to Raise Prices on a SaaS Without Triggering a Churn Wave | how to raise prices saas | 3.65 / P2 |
| Supporting | GRO-050 — Expansion Revenue for Small SaaS — Earn More From Customers You Already Have | expansion revenue for small saas | 3.65 / P2 |
| Supporting | GRO-037 — Annual vs Monthly Billing for SaaS — Cash Now Versus Churn Risk at Renewal | annual vs monthly billing saas | 3.60 / P2 |
| Supporting | GRO-039 — Lifetime Deals for SaaS — Runway Today Versus Support Debt Tomorrow | lifetime deals risks saas | 3.60 / P2 |
| Supporting | GRO-038 — Usage-Based Pricing for Indie SaaS — When It Aligns Value and When It Scares Buyers | usage based pricing for indie saas | 3.50 / P2 |
| Supporting | GRO-027 — Pricing Psychology for SaaS — What the Evidence Supports and What Is Folklore | pricing psychology saas | 3.20 / P2 |

- **SERP note (authority-locked cluster):** "saas pricing strategies" is **Long-term only** (track-serp.md §20 — Microsoft #1, Stripe ×3, HubSpot, Sage, Zuora in the top 10). GRO-003 and GRO-013 tie on score (3.85). Decision: **GRO-013 leads the cluster in practice** — the pricing *page* intent is concrete, indie-served and convertible; GRO-007 (the cluster's highest scorer at 4.00, model-choice comparison) is the second entry. GRO-003 is **postponed as a head-term article** and, when eventually published, is reframed to the solo long-tail the SERP analysis identified (first price, when to raise it, $9 vs $19 vs $29 with real price-change outcomes) rather than a model taxonomy competing with Stripe/Microsoft. Until then, GRO-003's internal-linking duties (hub for GRO-026, GRO-037, GRO-038) are carried by GRO-013. See §8 C-29 and §9.
- **Main search intent:** Commercial-investigation — model choice, page design, and price changes for a product with (or nearly with) paying users.
- **Key related user questions:** Which model converts better per visitor; when does freemium beat a trial? (GRO-007) · How many tiers should you show; where should social proof sit; what should the CTA say? (GRO-013)
- **Recommended internal links:** GRO-013 → GRO-007, GRO-003 (when live), GRO-006 (page conversion sibling). GRO-039 → LAU-051 (lifetime deals at launch vs as a growth lever — reciprocal stage links). GRO-026 → GRO-001 (price-rise churn risk is read with the churn triage).

### 5.5 Cluster: Conversion Optimization (5 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | GRO-006 — SaaS Landing Page Conversion Rate — Benchmarks and the Fixes That Move Signup (`/growth/saas-landing-page-conversion-rate`) | saas landing page conversion rate | 4.00 / P1 |
| Supporting | GRO-013 — (cross-listed from Pricing, §5.4) SaaS Pricing Page Best Practices | saas pricing page best practices | 3.85 / P1 |
| Supporting | GRO-024 — Signup Flow Optimization for SaaS — Remove Fields Before You Redesign Anything | signup flow optimization saas | 3.60 / P2 |
| Supporting | GRO-025 — Free Trial Conversion Rate Optimization — Fix Activation Before Extending the Trial | free trial conversion rate optimization | 3.60 / P2 |
| Supporting | GRO-049 — Waitlist to Launch Conversion — Turn Signups Into Paying Users on Day One | waitlist to launch conversion saas | 3.50 / P2 |

- **Main search intent:** Informational / benchmark plus fix-list — the funnel from visit to activated trial to paid. GRO-013 is cross-listed here (its CSV cluster is Pricing and Monetization; it is *not* duplicated — one article, two cluster doorways, with Pricing as its canonical cluster home).
- **Boundary (§8, C-08/C-27):** GRO-006 owns *ongoing* landing-page conversion for a live product. It must not absorb IDE-007 (pre-build validation page) or LAU-016 (launch page copy). GRO-049 vs LAU-040 is a registered watch pair (C-30).
- **Recommended internal links:** GRO-006 → GRO-024 → GRO-025 in funnel order; GRO-025 → GRO-034 (activation is the lever trial conversion actually measures) and → GRO-007 (model choice upstream).

### 5.6 Cluster: Retention and Activation (7 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | GRO-001 — How to Reduce Churn in an Early-Stage SaaS Without a Customer Success Team (`/growth/how-to-reduce-churn-early-stage-saas`) | how to reduce churn in an early-stage saas | 4.00 / P1 |
| Supporting (co-lead) | GRO-008 — SaaS Onboarding Best Practices — Cut Time to Value Before Adding More Tours | saas onboarding best practices | 4.00 / P1 |
| Supporting | GRO-035 — Cancellation Flow Save Offers — Pause Downgrade and Exit Interviews Done Honestly | cancellation flow save offers saas | 3.65 / P2 |
| Supporting | GRO-036 — Dunning and Failed Payment Recovery — The Quietest Revenue a SaaS Can Win Back | dunning and failed payment recovery saas | 3.65 / P2 |
| Supporting | GRO-034 — User Activation Rate for SaaS — Define the Event That Predicts Retention | user activation rate saas | 3.60 / P2 |
| Supporting | GRO-052 — Win-Back Campaigns for Churned SaaS Customers — Timing Offers and Honest Limits | win back churned customers saas | 3.60 / P2 |
| Supporting | GRO-054 — Product-Led Growth for Indie SaaS — Borrow the Principles and Skip the Enterprise Playbook | product led growth for indie saas | 3.55 / P2 |

- **SERP note:** The head query "how to reduce churn saas" is **Long-term only** (track-serp.md §21 — Stripe #1; every top-8 slot is a billing/analytics vendor). GRO-001's keyword is already the early-stage long-tail variant, which is the sanctioned entry: solo triage (dunning first, 30-60-90 sequence, churn maths at n=30) that no ranking vendor article provides. GRO-001 leads the cluster, but **no article in this cluster targets the head term**, and GRO-001's title/headings must keep the early-stage qualifier. The benchmark intent that supports the head term is served by GRO-028 in the Metrics cluster (§5.7).
- **Main search intent:** Informational / playbook — keep the customers launch delivered. Reading order: GRO-008/GRO-034 (activate) → GRO-001 (triage churn) → GRO-036 (recover payments) → GRO-035 (save at cancel) → GRO-052 (win back).
- **Key related user questions:** What is a good churn rate at this stage; how do you split voluntary and involuntary churn; which fix should come first? (GRO-001) · What should the first value milestone be; how fast should users reach it? (GRO-008)
- **Recommended internal links:** GRO-001 → GRO-028 (benchmark), → GRO-036, → GRO-035, → GRO-008. GRO-036 ↔ BUI-036 reciprocal with an implementation/strategy anchor split (§8, C-23). GRO-008 → GRO-053 (email support for the milestone) and → GRO-034.

### 5.7 Cluster: Metrics and Unit Economics (8 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | GRO-005 — SaaS LTV and CAC Calculator Guide — Unit Economics a Solo Founder Can Trust (`/growth/saas-ltv-cac-calculator-guide`) | saas ltv cac calculator | 3.95 / P1 |
| Supporting | GRO-028 — SaaS Churn Rate Benchmarks — Why Stage and Customer Size Change the Number | saas churn rate benchmark | 3.70 / P2 |
| Supporting | GRO-029 — CAC Payback Period Explained — The Cash Constraint Behind Every Growth Decision | cac payback period explained | 3.70 / P2 |
| Supporting | GRO-033 — A SaaS Metrics Dashboard a Solo Founder Will Actually Check Weekly | saas metrics dashboard solo founder | 3.65 / P2 |
| Supporting | GRO-031 — Customer Support for Solo Founders — Fast Replies Without Becoming the Help Desk | customer support for solo founders | 3.50 / P2 |
| Supporting | GRO-032 — How to Reduce SaaS Hosting Costs Without Risking Uptime or Migrations at Midnight | reduce saas hosting costs | 3.40 / P2 |
| Supporting | GRO-051 — Net Revenue Retention for Small SaaS — Read It Carefully at Tiny Customer Counts | net revenue retention small saas | 3.40 / P2 |
| Supporting | GRO-055 — Marketing Automation for Solo Founders — Automate the Repetitive and Keep the Personal | marketing automation for solo founders | 3.30 / P2 |

- **Main search intent:** Mixed informational/transactional — GRO-005 carries calculator intent (transactional) and is the cluster's asset article: the explainer plus a working calculator walkthrough. GRO-028 and GRO-029 are the reference pair the rest of the pillar cites for numbers. GRO-033 is the operating routine that consumes all of them.
- **Recommended internal links:** GRO-005 → GRO-029, GRO-028 (its two inputs). GRO-033 → GRO-005, GRO-028, GRO-051 and ← LAU-052 (launch metrics graduate into this dashboard). GRO-032 → BUI-047 (hosting cost here is the *reduction* job; choosing free hosting is Build — reciprocal stage links).

### 5.8 Cluster: Paid Advertising (3 records)

| Role | Record | Primary keyword | Score / Priority |
|---|---|---|---|
| **Primary guide** | GRO-015 — Google Ads for SaaS on a Small Budget — Test Message Fit Before Scaling Spend (`/growth/google-ads-for-saas-small-budget`) | google ads for saas | 3.30 / P2 |
| Supporting | GRO-022 — Meta Ads for SaaS on a Small Budget — When Retargeting Beats Cold Prospecting | meta ads for saas small budget | 3.20 / P2 |
| Supporting | GRO-023 — Reddit Ads for SaaS — A Small Test Guide for Community-First Products | reddit ads for saas | 3.05 / P2 |

- **Main search intent:** Commercial-investigation / budget-test — paid as a *measured experiment* after organic proof, consistent with the pillar's no-budget-first stance. No P1 in this cluster; it is deliberately last in the Growth reading order. GRO-015 is primary because search ads test message fit, which is the cluster's framing question.
- **Recommended internal links:** All three → GRO-005 and → GRO-029 (no paid test is written up without LTV/CAC and payback context). GRO-023 → GRO-011 (paid Reddit is read against the organic Reddit system first).

---

## 6. Master internal-linking rules

These rules bind every article in §§2–5. They extend, and never contradict, D6 §5 (contextual internal links, related articles, orphan prevention).

### 6.1 Structure rules

1. **Every article links up to its cluster primary.** The up-link appears in the body (intro or first relevant section), not only in breadcrumbs, cards or the "related articles" rail. If the article *is* the primary, it links up to its pillar hub instead.
2. **Every primary links down to all of its supporting articles.** The down-links live in a dedicated in-body section of the primary (a "go deeper" / methods / phases section that is part of the article's argument), so the primary functions as the cluster's hub. A supporting article that is not yet published is not linked until it exists — no placeholder links to drafts (per D6 draft rules).
3. **Every article links up to its pillar hub** (`/ideas`, `/build`, `/launch`, `/growth`) via breadcrumb plus at least the pillar context the D6 template provides. The pillar hub links down to every primary (featured "Start here" plus grouped cluster listings per D6 §4).
4. **Supporting articles link sideways selectively:** to the sibling the reader needs next (per the per-cluster link notes in §§2–5), not to every sibling. Two to four in-body internal links per article beyond the up-link is the working range [editorial convention, not a Google rule].
5. **Journey links override cluster boundaries where the reader's job crosses them** (§10). A journey link is placed at the exact step where the reader finishes one stage's job and starts the next — never as a generic "see also" dump.
6. **No orphan articles.** D6 §7 row 12's build check applies: every published article must be linked from its pillar page *and* at least one in-body or related link. The late-December internal-link audit (roadmap) re-verifies this against the live site.

### 6.2 Intent-ownership rules

7. **No article targets another article's primary intent.** Before drafting, the writer checks the target record's primary keyword against §§2–5 and §8: if the draft's title, H1 or intro would satisfy the same search as another record's primary keyword, the draft is re-angled to its own record's intent or stopped. This applies within clusters, across clusters and across pillars.
8. **Primaries own the head term; supporting articles own their modifier.** A supporting article's title and headings must carry its differentiating modifier (the method, tool, phase, audience or stage from its CSV record) — e.g. BUI-034 is always framed as the *webhooks deep-dive*, never as "Stripe subscriptions in Next.js".
9. **One canonical article per intent.** Where §8 says "demote to a section", the demoted record does not get a URL until (and unless) the stated revival condition is met. Where §8 says "keep both with differentiated intent", the differentiation stated there is the contract the two drafts are checked against.
10. **FAQ and question sections follow the same ownership.** A "People Also Ask"-style question listed under one record in §§2–5 is answered in depth only in that record; other articles may link to the answer but must not publish a competing full answer to the same question.

### 6.3 Anchor-text guidance

11. **Descriptive and varied.** Anchor text names the destination's topic and, where natural, its angle: e.g. link IDE-008 as "run a fake door test honestly", IDE-009 as "score the idea before you build", BUI-013 as "the production readiness checklist". Never "click here", "this post" or a bare URL for an internal editorial link.
12. **No exact-match repetition.** Do not use a destination's exact primary keyword as the anchor text on every link to it. Across the site, links to one article should use several natural variants (keyword, partial keyword, title fragment, benefit phrasing). Exact-match anchors are kept to a minority of a page's inbound links — this is a readability and naturalness convention, applied as an editorial rule.
13. **Anchors must match the destination's stage.** Cross-pillar journey anchors state the stage change, e.g. from IDE-001: "once the idea survives validation, scope the MVP" → BUI-002. A Build article never uses an Ideas article's anchor phrasing in a way that implies the same job.
14. **No keyword-anchor linking from templates.** Navigation, breadcrumbs and cards use the destination's title/pillar name (per D6); keyword-rich anchors belong only in genuine in-body context (see also D6 §7 row 15 for the search-page exclusion).

### 6.4 Maintenance rules

15. **When a supporting article is published later, the primary is updated in the same release** to add its down-link (rule 2), and at least one sibling adds a sideways link. Publication checklists in the roadmap assume this.
16. **When an article is substantially updated, its cluster primary is checked** for any summary of it that needs the same update. Dates are only bumped for substantial changes (per D6 §5).
17. **Redirects never substitute for fixing links.** If a URL ever changes (only under §7's exception process), internal links are updated to the new canonical in the same deployment (per D6 §7 row 7).

---

## 7. URL structure decision

### 7.1 Decision

**Recommended structure: pillar paths.**

```
https://indieos.tech/ideas/[slug]
https://indieos.tech/build/[slug]
https://indieos.tech/launch/[slug]
https://indieos.tech/growth/[slug]
```

Pillar hubs at `/ideas`, `/build`, `/launch`, `/growth` (as specified in D6 §4). Trust/utility pages stay at root per D6 §6 (`/about`, `/privacy`, …). This is the structure D6's examples already assume; this section supplies the missing verdict D6 §9 deferred to D5.

### 7.2 Evaluation against the alternative (flat `/blog/[slug]`)

Evidence base: D6 §9's dimension table, weighed with the cluster/editorial evidence in this document.

| Dimension | Pillar paths `/ideas/[slug]` … | Flat `/blog/[slug]` | Weight for IndieOS |
|---|---|---|---|
| **Topical section signals** | URL directory groups articles by stage; Search Console, log and analytics segmentation by topic is free (filter by directory). Matches the 46-cluster map: each cluster lives entirely inside one directory. | One undifferentiated `/blog/` directory; all topical signal must be carried by hubs and links alone. | **High** — IndieOS's whole editorial model is the four-stage journey; the URL is the cheapest place to state it. |
| **URL stability** | Stable as long as the article stays in its pillar. Pillar assignment is made once, at commissioning, from the CSV `Pillar Category` — it is not an editorial judgement call per draft. | Maximally stable; reclassification never moves a URL. | Medium — flat wins in the abstract; see migration row for why the risk is small here. |
| **Migration cost / taxonomy risk** | A pillar rename/merge would move every affected URL. **Mitigant: the four pillar names are fixed by the project brief and are not expected to change** — D6 §9 itself notes this. The realistic taxonomy change (a cluster split) does not move URLs under either scheme, because clusters are not in the URL. | Lowest taxonomy risk; but migrating *away* from flat later is the single largest migration of all (every article moves at once). | **High** — with pillars contractually fixed, pillar paths' main con is neutralised, while flat's deferred-migration risk remains. |
| **Internal linking** | Directory context reinforces the hub-and-spoke model in §6: pillar hub is the natural parent of its articles, and breadcrumb, URL and hub listing all agree (D6 §9 breadcrumb row). | Hubs must do all clustering work; visible breadcrumb (Home › Pillar › Article) would not match the URL path — permitted, but a weaker, divergent signal set. | High |
| **Canonical management** | One canonical per article, identical mechanics to flat (D6 §§2/5/7 apply unchanged). No parameter or pagination differences at IndieOS scale. | Identical mechanics. | Neutral — no deciding weight. |
| **Content organisation** | The repository, the sitemap sections, Search Console filters and the pillar pages all share one taxonomy. A reader (or the solo maintainer) can tell an article's stage from its URL alone. | Organisation lives only in frontmatter/hub data; URLs carry no stage information. | Medium–High for a one-person operation. |
| **Maintenance** | Adding an article = choose its (already-assigned) pillar directory and slug. Renaming a *slug* is equally costly under both schemes and is prohibited once published (§7.3). | One namespace to manage; marginally simpler. | Low — the difference is one directory level. |
| **Human factors** | Self-describing when shared: `…/launch/show-hn-guide` tells a founder the stage before the click; matches how the audience already talks (ideas → build → launch → growth). | `/blog/` is a generic container word with no topical meaning for this audience (D6 §9). | Medium |

**Rationale in one paragraph:** Flat URLs win only on reclassification freedom, and that freedom has almost no value here: pillar membership is assigned by the research database (each record has exactly one `Pillar Category`), the four pillars are fixed by the brief, and clusters — the level that *will* evolve — are deliberately kept out of the URL. Pillar paths win on section signals, breadcrumb/URL/hub agreement, organisational clarity and shareability, at a migration risk that the fixed-pillar constraint reduces to the same order as flat's own deferred risk. **Decision: pillar paths.**

### 7.3 Slug rules (binding)

1. Slugs are **lowercase, hyphenated**, letters/numbers/hyphens only; descriptive of the article's own intent; **no dates, no years, no version stamps** in slugs (a "2026" in a *title* is an editorial choice; it never enters the slug).
2. **No keyword stuffing:** the slug states the topic once. It is not a comma-list of synonyms and does not repeat the pillar name (the directory already carries it) — e.g. `/launch/product-hunt-launch-guide`, not `/launch/how-to-launch-on-product-hunt-launch-guide-checklist`.
3. **Stable once published.** A published slug does not change for wording, SEO or rebranding reasons. The only exceptions are a legal/accuracy correction or a §8 merge executed *before* the merged-away article is ever published. Any exceptional post-publication change requires a single permanent (301/308) redirect, an entry in the maintained redirect map, and same-deployment updates to all internal links, canonical, sitemap and RSS (per D6 §§5/7).
4. **Globally unique.** Slugs are unique across the whole site, not only within a pillar (per D6 §9's practical note) — the database check is: no two of the 220 records share a `Suggested URL Slug`, and new records must clear the same check.
5. **No trailing slash** on article URLs; lowercase enforced by host/Next.js redirects per D6 §2.1.

### 7.4 How the research database maps onto the structure

- Each CSV record's `Suggested URL Slug` is used **verbatim** as `[slug]`; the pillar path is the record's `Pillar Category`, lowercased: Ideas → `/ideas/`, Build → `/build/`, Launch → `/launch/`, Growth → `/growth/`.
- Worked examples: IDE-001 → `https://indieos.tech/ideas/validate-micro-saas-idea-without-building` · BUI-008 → `https://indieos.tech/build/stripe-subscriptions-nextjs-webhooks-billing-portal` · LAU-028 → `https://indieos.tech/launch/show-hn-guide` · GRO-002 → `https://indieos.tech/growth/how-to-market-micro-saas-without-paid-advertising`.
- The D7 page-level SEO matrix and the MDX frontmatter should carry the full canonical path (pillar + slug) as the single source of truth, generated from these two fields — never hand-typed per article.
- Records demoted to sections in §8 (IDE-055, LAU-050) get **no URL** at launch; their slugs are reserved in the database so a later revival cannot collide with a newer article.

---

## 8. Cannibalization risk register

**Method:** All 220 records were scanned on `Primary Keyword`, `Topic Cluster`, `Suggested URL Slug` and the CSV `Cannibalization Risk` field — within pillars, across clusters and across pillars — and each candidate pair was judged on *search intent* (would one searcher's need be satisfied by either article?), not on word overlap alone. Pairs that merely share vocabulary but serve different stages/jobs (e.g. "solo founders" in a keyword) are not conflicts and are not listed. Every conflict below names concrete record IDs and carries one binding decision: **KEEP-BOTH** (differentiated intent — the differentiation is stated), **MERGE** (one article; the other becomes a section or is not created), or **DEMOTE** (one record is supporting/section-level under the other and does not compete for the head intent).

### 8.1 Ideas pillar

| ID | Records | Risk | Decision |
|---|---|---|---|
| C-01 | IDE-003 "micro saas ideas" (P1, 3.95) vs IDE-013 "micro saas ideas for solo developers" (P2, 3.50) vs IDE-014 "b2b micro saas ideas" (P2, 3.40) vs IDE-052 "chrome extension ideas" (P3, 2.80) | **High** (per IDE-003's CSV flag). Three list intents a searcher could satisfy with any one list; IDE-013's keyword is a modifier-variant of IDE-003's head term. | **KEEP-BOTH with structure:** IDE-003 owns the head term as the database entry point. IDE-013 and IDE-014 are published as *filtered views/analyses of the same scored database* (scope-scored cut; buyer-budget cut), interlinked as facets — never as independent competing lists with different idea sets. IDE-052 owns a genuinely different product form (extensions) and stands alone. If the database asset is not built, IDE-013/IDE-014 are not published as standalone lists either (see roadmap postponement of IDE-003). |
| C-02 | IDE-001 "validate a micro-saas idea without building it" (P1) vs IDE-007 landing page validation (P1), IDE-008 fake door test (P1), IDE-026 waitlist validation (P1), IDE-027 interviews (P2), IDE-030 experiments ranked (P2), IDE-025 pre-sell (P2), IDE-028 concierge MVP (P2), IDE-029 B2B no-audience (P2) | **Medium** (per IDE-001/IDE-007 CSV flags). Nine validation articles; a generic draft of any method article drifts into umbrella "how to validate" territory. | **KEEP-BOTH:** IDE-001 owns the umbrella framework, the commitment ladder and kill thresholds. Each supporting article owns exactly one method/constraint and must open by positioning itself as one rung of IDE-001's ladder (with the up-link), covering method execution only. IDE-030 owns the comparative ranking of the same methods and links to each method article instead of re-describing them. |
| C-03 | IDE-002 "find saas ideas from customer complaints" (P1) vs IDE-005 Reddit mining (P1), IDE-006 G2 mining (P1), IDE-016 support tickets (P2), IDE-018 app store mining (P2), IDE-019 workflow gaps (P2), IDE-017 IH/HN ideas (P2) | **Medium** (per IDE-002/IDE-005 CSV flags). Source-mining methods are instances of the complaints method; also adjacent to the unowned head query "how to find saas ideas". | **KEEP-BOTH:** IDE-002 owns the general method and is IndieOS's answer to the "how to find saas ideas" demand family (its title stays complaint-specific; the head phrase is served by the article's framing, not by retitling). Each channel article owns its source's mechanics only (search phrases, tagging, thresholds for that source). |
| C-04 | IDE-009 scorecard (P1) vs IDE-047 kill criteria (P1) vs IDE-024 evaluation mistakes (P2) vs IDE-048 why ideas fail (P2) vs IDE-049 red flags (P2) | **Medium.** Five evaluative articles around "is this idea good / should I stop" — the SERP query "how to know if a saas idea is good" could be claimed by any of them. | **KEEP-BOTH, one owner per question:** IDE-009 owns "how to know if a saas idea is good" and all scoring/criteria intent. IDE-047 owns the *kill decision* (post-score). IDE-024 owns *scoring errors*, IDE-048 owns *failure causes*, IDE-049 owns *pre-score warning signs*. Titles/headings keep those verbs (score / kill / mistakes / fail / red flags) distinct. |
| C-05 | IDE-010 "find a niche for a saas product" (P1, 4.50) vs IDE-055 "choose between two saas niches" (P3, 2.80) vs IDE-011 underserved markets (P2) vs IDE-012 vertical saas ideas (P2) | **Medium** (per IDE-010 CSV flag). IDE-055 is the final step of IDE-010's own framework applied to two finalists — same decision, narrower input. | **DEMOTE IDE-055 to a section of IDE-010** ("Choosing between two finalists", with the reachability scorecard) at launch; no standalone URL. Revival condition: Search Console shows distinct query demand for the two-niche comparison after IDE-010 is indexed. IDE-011 (spot a market condition) and IDE-012 (a category of niches) are **KEEP-BOTH** — different jobs from selection method. |
| C-06 | IDE-036 keyword research for product ideas (P1, Ideas) vs GRO-017 saas keyword research (P2, Growth) | Cross-pillar. Same skill name; a searcher could land on either. | **KEEP-BOTH, stage-split:** IDE-036 owns keyword research as *pre-build demand evidence for choosing a product*. GRO-017 owns keyword research as *post-launch content targeting for an existing product*. Intros state the stage in the first paragraph; reciprocal journey link (§2.8/§5.3). Neither targets the bare phrase "keyword research" without its stage modifier. |
| C-07 | IDE-026 waitlist validation (P1, Ideas) vs LAU-007 build a waitlist (P1, Launch) | Cross-pillar. Same object (a waitlist), adjacent queries. | **KEEP-BOTH, job-split:** IDE-026 owns *interpreting* a waitlist as validation evidence (how many signups is enough; why count alone proves little). LAU-007 owns *building and operating* one (page, referrals, warming, conversion). Reciprocal links at the hand-off point. Neither article covers the other's job beyond a summary paragraph plus link. |
| C-08 | IDE-007 landing page validation (P1, Ideas) vs LAU-008 waitlist landing page (P2, Launch) vs LAU-016 launch page copy (P2, Launch) vs GRO-006 landing page conversion rate (P1, Growth) | Cross-pillar, four-way. All four are "landing page" articles; this is the site's highest structural overlap family. | **KEEP-BOTH ×4, stage-split (binding):** IDE-007 = pre-build *test* page whose job is a yes/no decision. LAU-008 = pre-launch *waitlist* page whose job is signups. LAU-016 = launch *announcement* page copy whose job is explanation in seconds. GRO-006 = live-product page whose job is *ongoing conversion rate* improvement. Each intro names its stage and links the other three with stage anchors (§6 rule 13). No article may use another's stage phrase in its title/H1. IDE-051 (case study of a landing-page test) supports IDE-007 only. |

### 8.2 Build pillar

| ID | Records | Risk | Decision |
|---|---|---|---|
| C-09 | BUI-001 "build a saas mvp" (P1) vs BUI-002 "scope a saas mvp" (P1) | **Medium** (per BUI-001 CSV flag). Both target "mvp" terms; scoping content naturally appears inside build guides. | **KEEP-BOTH:** BUI-002 owns the *decision* (what is in/out, cut order). BUI-001 owns the *sequence* (build order) and references the scope as an input, linking to BUI-002 instead of re-teaching scoping. D6 already encodes this split (Build "Start here" = scoping guide). |
| C-10 | BUI-004 technical specification for AI agents (P1, 4.60) vs BUI-014 PRD for AI agents (P1, 4.60) vs BUI-017 spec-driven development (P2) vs BUI-026 user stories for AI agents (P3) | **Medium** (per BUI-014/BUI-017 CSV flags). Four document-level articles for the same reader; spec and PRD drafts converge easily. | **KEEP-BOTH (BUI-004 + BUI-014), stage-split:** BUI-014 owns the *product-stage* document (problem, users, non-goals, success criteria). BUI-004 owns the *technical-stage* document (architecture constraints, acceptance criteria, boundaries). Reading order BUI-002 → BUI-014 → BUI-004 is linked explicitly. **DEMOTE BUI-017:** it is not published as a competing explainer at launch; its concept overview ships later (Jan+ queue) as a short methodology article that links down to both primaries and targets neither's keyword. BUI-026 owns story-level granularity only. |
| C-11 | BUI-007 vibe coding workflow (P1) vs BUI-055 prototype-to-production (P1) vs BUI-013 production readiness checklist (P1, Deployment cluster) | **Medium** (per BUI-007/BUI-055 CSV flags). "Production" appears in all three intents; BUI-055's final steps duplicate BUI-013's checklist. | **KEEP-BOTH ×3, path-split:** BUI-007 owns the *workflow from the start* (build it right). BUI-055 owns the *rescue/conversion path* (you already vibe-coded it; fix in this order). BUI-013 owns the *gate* (the final checklist any path must pass) — BUI-055's last section links to BUI-013 rather than reproducing the checklist, and BUI-013 does not teach AI-specific conversion. |
| C-12 | BUI-011 what to test in a saas mvp (P1) vs BUI-024 verify AI generated code (P1) vs BUI-044 Vitest (P2) vs BUI-045 Playwright (P2) | **Medium** (per BUI-011/BUI-044/BUI-045 CSV flags). Hub-and-children overlap; verification and test strategy are adjacent reader moments. | **KEEP-BOTH, hub rule:** BUI-011 owns test *strategy* (which flows, which layer, what to skip). BUI-044/BUI-045 own tool execution only and link up to BUI-011 for strategy. BUI-024 owns the *pre-ship verification checklist for AI-written code* (types/lint/tests/build/manual auth checks) — a review artefact, not a testing plan; its intro states this distinction and links to BUI-011. |
| C-13 | BUI-031 Supabase RLS multi-tenant (P2) vs BUI-054 multi-tenancy in Next.js (P2) | **Medium** (both CSV flags). Same underlying problem at two layers; titles both promise "explained". | **KEEP-BOTH as a bound pair:** BUI-054 owns the *model* (shared vs separate, tenant context resolution). BUI-031 owns the *data-layer enforcement* (policies, auth.uid, service-role traps, isolation tests). Published together or BUI-054 first; reciprocal "read both" links; neither summarises the other's layer beyond one paragraph. |
| C-14 | BUI-009 Clerk vs Supabase Auth vs Auth.js (P1) vs BUI-032 add authentication to Next.js (P2) | **Medium** (per BUI-032 CSV flag). Comparison content bleeds into setup content and vice versa. | **KEEP-BOTH:** BUI-009 owns *choice* (comparison, cost by MAU, decision rules) with no step-by-step setup. BUI-032 owns *implementation* of the chosen path with no comparison tables. Each links to the other at the decision/setup boundary. |
| C-15 | BUI-008 Stripe subscriptions in Next.js (P1) vs BUI-034 Stripe webhooks (P2) vs BUI-035 Stripe billing portal (P2) | **High** (all three CSV flags — the highest-rated cannibalization risk in the Build pillar). The hub's scope literally contains the two deep-dives' topics. | **KEEP-BOTH under a strict hub rule:** BUI-008 owns the end-to-end intent and the head keyword, covering webhooks and portal at *integration* depth (which events, how state maps). BUI-034 owns webhook *internals* (signature verification, idempotency, replay). BUI-035 owns portal *configuration* (test/live settings, allowed actions, session creation). Deep-dives carry "Part of: Stripe Subscriptions in Next.js" framing, link up in section 1, and never target the hub's head phrase. BUI-036 (failed payments/dunning) is **not** part of this conflict — distinct revenue-recovery intent (Low per CSV) — but see C-23 for its Growth-side pair. |
| C-16 | BUI-006 deploy Next.js for free (P1) vs BUI-047 free hosting compared (P2) | **High** (per BUI-047 CSV flag). Same free-tier facts, tutorial vs comparison framing. | **KEEP-BOTH, format-split + SERP demotion:** BUI-047 owns the *comparison* (tiers, commercial-use terms, upgrade paths) as the cluster's comparison reference. BUI-006 is **demoted from cluster co-lead to supporting** (§3.11/§9): postponed, and reframed to the commercial-use long-tail (which free tiers legally allow a paid SaaS) as a tutorial that *uses* BUI-047's table rather than rebuilding it. BUI-013 leads the cluster meanwhile. |
| C-17 | BUI-003 best free tech stack (P1) vs BUI-050 boilerplate vs scratch (P1) vs BUI-047 free hosting compared (P2) | **Medium** (per BUI-003/BUI-050 CSV flags). Three "what do I start with" articles citing the same stack/hosting facts. | **KEEP-BOTH ×3, decision-split:** BUI-003 owns the *stack default by layer*. BUI-050 owns the *starting-point* decision (buy starter vs blank repo). BUI-047 owns *hosting* comparison. Shared facts (e.g. free-tier limits) are stated in full in exactly one article (BUI-047 for hosting limits; BUI-003 for stack-layer costs) and summarised-plus-linked elsewhere. |
| C-18 | BUI-005 Claude Code vs Cursor vs Copilot (P2) vs BUI-018 use Claude Code (P2) vs BUI-019 use Cursor (P2) vs BUI-020 Codex vs Claude Code vs Gemini CLI (P3) vs BUI-021 Windsurf vs Cursor (P3) vs BUI-022 Copilot worth it (P3) | **Medium** (per BUI-005 CSV flag). Six tool articles; comparison verdicts repeated inside tutorials is the failure mode. Also note: the live SERP query is the *two-way* "claude code vs cursor" while the record is three-way. | **KEEP-BOTH, verdict-centralised:** BUI-005 is the only article that renders comparative verdicts, and it explicitly covers the two-way Claude Code vs Cursor comparison as a named section (absorbing that query as a secondary keyword). BUI-018/BUI-019 are pure how-to (no verdicts beyond task fit). BUI-020/021/022 own narrow pairings/questions and link up to BUI-005 without re-running the three-way comparison. BUI-005 is benchmark-gated (§3.6) — until the benchmark exists, none of the P3 comparisons is published either, so the cluster cannot fragment early. |

### 8.3 Launch pillar

| ID | Records | Risk | Decision |
|---|---|---|---|
| C-19 | LAU-020 launch on Product Hunt flagship (P1) vs LAU-021 PH launch checklist (P2) vs LAU-022 PH launch day playbook (P2) vs LAU-036 multi-channel launch day workflow (P2) | **High** (LAU-020/LAU-021 CSV flags). Four articles describing the same launch at different zoom levels. | **KEEP-BOTH, phase-split (binding):** LAU-020 owns the end-to-end intent and head keyword, with one summary section per phase. LAU-021 owns *preparation* (assets/tasks by week). LAU-022 owns *execution* (launch day, hour by hour). LAU-036 owns *coordination across channels* and stays at the coordinating view, linking down to LAU-022 for PH hours. LAU-026 owns *follow-through*. No supporting article repeats the flagship's full timeline. LAU-024 (first comment) and LAU-023 (hunter myths) and LAU-025 (ranking mechanics) are single-question articles — no conflict once the phase split holds. |
| C-20 | LAU-001 product launch checklist (P2) vs LAU-002 saas product launch plan (P2) vs LAU-004 launch readiness go/no-go (P2) vs LAU-005 launch a micro saas (P1) | **Medium** (LAU-001/LAU-002 CSV flags). Plan/checklist/readiness are three names founders use for the same pre-launch document. | **KEEP-BOTH, artefact-split:** LAU-005 owns the playbook (narrative sequence). LAU-002 owns the *plan document* (phases, goals, KPIs). LAU-001 owns the *task checklist* (items × timing, downloadable). LAU-004 owns the *decision gate* (evidence thresholds, delay criteria). Outlines are checked against this split at drafting; any section that belongs to a sibling artefact is replaced by a link. (Landing-page members of this family are handled in C-08.) |
| C-21 | LAU-038 get first customers bootstrapped (P1, Launch) vs GRO-012 get to $1,000 MRR (P1, Growth) vs GRO-002 market without paid advertising (P1, Growth) — plus LAU-005 (P1) internally | Cross-pillar + internal. The SERP queries "first 100 customers" / "first paying customers" sit exactly on this seam (track-serp.md §§15/24 note the near-duplicate intent). | **KEEP-BOTH ×3, moment-split:** LAU-038 owns *first customers at launch* (0 → first 10, founder-led, charge-from-day-one). GRO-012 owns the *milestone climb* (first customers → $1,000 MRR, when to stop manual work). GRO-002 owns the *ongoing channel system* (90-day, hours-budgeted). LAU-005 links to LAU-038 for its first-customers section rather than duplicating it. The phased 0–10/11–50/51–100 structure the SERP rewards lives in LAU-038; GRO-012 references the same phases historically and does not re-teach them. |
| C-22 | LAU-047 build in public launch strategy (P2, Launch) vs GRO-010 build in public strategy (P1, Growth) | Cross-pillar. Near-identical keyword stems ("build in public strategy" appears in both records' keyword fields). Highest cross-pillar collision risk on the site. | **KEEP-BOTH, window-split (binding):** LAU-047 owns build-in-public *as a launch runway* — the pre-launch posting arc that ends on launch day. GRO-010 owns build-in-public *as an ongoing growth strategy on X* — cadence, content system, follower→customer conversion over months. Titles keep the distinguishing phrases ("as a Launch Strategy" / "on X — What Actually Converts"). Each links to the other at the launch-day boundary. Neither targets the bare head term "build in public" (§9). |
| C-23 | BUI-036 handle failed payments/dunning in Stripe (P2, Build) vs GRO-036 dunning and failed payment recovery (P2, Growth) vs GRO-001 reduce churn early-stage (P1, Growth) vs GRO-035 cancellation flow save offers (P2, Growth) | Cross-pillar. "Dunning" is named in two records in two pillars; the churn family shares the involuntary-churn territory. | **KEEP-BOTH, layer-split:** BUI-036 owns *Stripe implementation* (webhook that starts the clock, retry settings, reminder sequence mechanics). GRO-036 owns *recovery strategy and copy* (grace-period policy, win-back framing, honest limits). GRO-001 owns *triage order* across all churn causes and links to both instead of detailing dunning. GRO-035 owns the *cancel-flow moment* (pause/downgrade/exit interview), distinct from payment failure. Reciprocal links BUI-036 ↔ GRO-036 with implementation/strategy anchors. |
| C-24 | LAU-027 product hunt alternatives (P1) vs LAU-048 saas directories to submit (P1) vs LAU-050 Uneed/AlternativeTo/SaaSHub listings (P3) vs LAU-049 BetaList guide (P3) vs LAU-031 DevHunt/daily.dev (P3) | **Medium** (LAU-027/LAU-048 CSV flags). Alternatives, directories and listings are the same platform set described three ways. | **KEEP-BOTH (LAU-027 + LAU-048), angle-split:** LAU-027 owns *choosing where to launch instead of/alongside Product Hunt* (compared by audience and launch window; requires the tested directory database — §9). LAU-048 owns *the submission sequence and asset kit* for directories as a class. **DEMOTE LAU-050 to a section of LAU-048** (the three listings, their jobs, free/paid status) — no standalone URL at launch; revival only on evidenced listing-level query demand. LAU-049 (pre-launch listing timing) and LAU-031 (dev-tool platforms) keep narrow platform intents as supporting articles under LAU-048/LAU-006 respectively. |
| C-25 | LAU-033 reddit launch etiquette (P1, Launch) vs LAU-034 subreddit self-promotion rules (P2, Launch) vs GRO-011 reddit marketing for saas (P1, Growth) vs IDE-005 mine reddit for saas ideas (P1, Ideas) | Internal + cross-pillar. Four Reddit articles across three pillars. | **KEEP-BOTH ×4, job-split:** IDE-005 owns *reading* Reddit for demand (research). LAU-033 owns *launch-window behaviour* on Reddit. LAU-034 owns the *rules reference table* (LAU-033 links to it instead of listing rules). GRO-011 owns *ongoing* Reddit marketing as a growth system. The chain IDE-005 → LAU-033 → GRO-011 is the Reddit reader journey and is linked in that order with stage anchors. |
| C-26 | BUI-013 production readiness checklist (P1, Build) vs LAU-004 launch readiness go/no-go (P2, Launch) | Cross-pillar. Two "readiness checklist" articles a founder could conflate. | **KEEP-BOTH, object-split:** BUI-013 owns *product* readiness (backups, billing failure paths, monitoring, security). LAU-004 owns *launch* readiness (assets, channels, support, go/no-go evidence). BUI-013 is the prerequisite and is linked from LAU-004's first section; LAU-004 never restates product checks. |
| C-27 | LAU-040 converting waitlist to customers (P2, Launch) vs GRO-049 waitlist to launch conversion (P2, Growth) | Cross-pillar. The closest remaining pair after C-08: both concern waitlist→paid conversion around launch day. (Note: IDE-017 vs LAU-028/LAU-032 community-name overlaps were reviewed under this scan and are *not* conflicts — research vs launch jobs, covered by C-25's chain logic.) | **KEEP-BOTH under a watch condition:** LAU-040 owns the *launch-cohort playbook* (invite waves, founding offer, beta-to-paid conversion at launch). GRO-049 owns *day-one conversion measurement and fixes* (benchmarks, drop-off diagnosis, follow-up sequence performance). Drafts are compared before either is published (both sit in the Nov–Dec queue, so this is practical): **if the two drafts converge on the same sections, MERGE into LAU-040** (the earlier reader moment) and GRO-049's slug is retired unpublished — no redirect needed pre-publication. |
| C-28 | LAU-041 cold outreach for launch (P2, Launch) vs GRO-014 cold email for saas (P2, Growth) | Cross-pillar. Same tactic family. | **KEEP-BOTH, regime-split:** LAU-041 owns *one-to-one, hand-sent, launch-timed* outreach (low volume, personal). GRO-014 owns *systematised cold email* (deliverability setup, CAN-SPAM/GDPR compliance, safe volume). No shared templates; reciprocal stage links. |

### 8.4 Growth pillar

| ID | Records | Risk | Decision |
|---|---|---|---|
| C-29 | GRO-003 saas pricing strategies (P1) vs GRO-013 pricing page best practices (P1) vs GRO-007 freemium vs free trial (P1) | **Medium** (per GRO-003/GRO-013 CSV flags). Strategy, page and model articles all cite the same pricing evidence. | **KEEP-BOTH, layer-split + SERP sequencing:** GRO-007 owns *model choice* (freemium vs trial). GRO-013 owns *page execution* and leads the cluster in practice (§5.4/§9). GRO-003 owns *strategy/models taxonomy* but is **postponed and reframed** to the indie first-price long-tail (authority-locked head term — §9); until it exists, GRO-013 carries its hub links. No article duplicates another's comparison tables. |
| C-30 | GRO-004 programmatic seo for saas (P1) vs GRO-009 seo for saas (P2) vs GRO-017 saas keyword research (P2) vs GRO-043 comparison/alternatives pages (P2) | **Medium** (per GRO-009 CSV flag; GRO-004's risk is SERP-side, §9). pSEO content naturally expands into a general SEO guide. | **KEEP-BOTH, scope-split + postponement:** GRO-009 owns the *general first-90-days SEO workflow* and leads the cluster. GRO-004 owns *only* the templated-pages-at-small-scale method and is postponed until IndieOS has its own pSEO case data; when published it links up to GRO-009 and contains no general SEO advice. GRO-043 owns one page type (comparison/alternatives) within GRO-009's workflow. IDE-032 (researching alternatives pages pre-build) was reviewed here: different stage, **no conflict** — reciprocal link only. |
| C-31 | GRO-001 reduce churn early-stage (P1) vs GRO-028 churn rate benchmark (P2) vs GRO-008 onboarding best practices (P1) | **Medium** (per GRO-008 CSV flag; GRO-028 is GRO-001's named internal-link target in its CSV row). Benchmark numbers and onboarding advice both appear inside churn guides. | **KEEP-BOTH, artefact-split:** GRO-028 owns the *numbers* (benchmarks by stage/customer size) as the pillar's reference — GRO-001 and GRO-008 cite and link it rather than publishing their own benchmark tables. GRO-001 owns *triage and fix order*. GRO-008 owns the *onboarding milestone system* (time-to-value), linked from GRO-001 as the first fix, without re-arguing churn causes. |

### 8.5 Register summary

- **31 register entries (C-01…C-31)**, organised by pillar in the tables above: Ideas and its cross-pillar pairs C-01–C-08, Build C-09–C-18, Launch and its cross-pillar pairs C-19–C-28, Growth C-29–C-31.
- **Decisions:** KEEP-BOTH with a stated differentiation: the large majority of entries. DEMOTE to a section (no standalone URL at launch): 2 records outright — IDE-055 (→ IDE-010, C-05) and LAU-050 (→ LAU-048, C-24) — plus BUI-017 deferred as a non-competing explainer (C-10). DEMOTE in role (supporting, reframed, postponed): BUI-006 (C-16). POSTPONE on SERP/asset grounds: GRO-003 (C-29), GRO-004 (C-30) — see also §9. CONDITIONAL MERGE watch: GRO-049 → LAU-040 (C-27) — the register's only merge candidate, decided at draft comparison, pre-publication.
- **No pair was decided MERGE outright**, because every High/Medium pair in the CSVs separates cleanly by method, phase, layer, stage or artefact once the splits above are enforced. The enforcement point is drafting: each scheduled article's brief (roadmap) carries its register ID(s).

---

## 9. SERP cross-reference — authority-locked primaries and cluster leads

Source: `research/track-serp.md` (24 queries searched 2026-10-23; verdicts are SERP-composition judgements — **Realistic now** / **Realistic with superior asset** / **Long-term only**). This section flags every cluster whose primary guide's head intent is authority-locked, and names the supporting long-tail article that leads the cluster instead. It also lists the asset-gated primaries (superior-asset verdicts) so the roadmap can gate them.

### 9.1 Authority-locked (Long-term only) — lead article changes

| Cluster (pillar) | Locked primary / head term | Lock evidence (track-serp.md) | **Article that leads the cluster instead** | What happens to the locked article |
|---|---|---|---|---|
| Pricing and Monetization (Growth) | GRO-003 — "saas pricing strategies" | §20: Microsoft #1, Stripe ×3, HubSpot, Sage, Zuora in top 10; total authority dominance | **GRO-013 — SaaS Pricing Page Best Practices (P1, 3.85)**, with GRO-007 Freemium vs Free Trial (P1, 4.00) as second entry | GRO-003 postponed; reframed on publication to the solo first-price long-tail (first price, raise timing, real price-change outcomes) — never a taxonomy attack on the head term (§5.4, C-29) |
| SEO and Content (Growth) | GRO-004 — "programmatic seo" (head term behind "programmatic seo for saas") | §22: HubSpot #1, Shopify, Ahrefs, Semrush, Search Engine Land, SEJ; data-backed authority guides set the bar | **GRO-009 — SEO for SaaS From Zero (P2, 3.70)** leads; GRO-017 keyword research and GRO-043 comparison pages support | GRO-004 postponed until IndieOS has its own small-scale pSEO case data; published then as the 20–100-page solo sub-topic (§5.3, C-30) |
| Deployment and Production Operations (Build) | BUI-006 — "how to deploy next.js for free" | §11: nextjs.org official docs hold positions 0–4 in multiple versions; Google/Microsoft docs follow | **BUI-013 — SaaS Production Readiness Checklist (P1, 4.40)** leads the cluster | BUI-006 demoted to supporting, postponed and reframed to the commercial-use free-tier long-tail (§3.11, C-16) |
| Retention and Activation (Growth) | Head term "how to reduce churn saas" behind GRO-001 | §21: Stripe #1; all top-8 slots are billing/analytics vendors | **GRO-001 itself leads — in its early-stage long-tail form** ("how to reduce churn in an early-stage saas"), supported by GRO-028 churn benchmarks | No article targets the head term. GRO-001 keeps its early-stage qualifier in title and headings permanently (§5.6, C-31) |
| AI-Assisted Development (Build) — head term only | "vibe coding" (definitional head term; **no record targets it**) | §9: GitHub, Google ×3, Microsoft, Britannica, Harvard, IBM, Wikipedia — 12/12 institutional | **BUI-007 — Vibe Coding Workflow (P1)** is already the correct long-tail primary ("workflow", not the definition) | No action needed and no gap created: do not commission a "what is vibe coding" article at any priority |
| Email and Community (Growth) / Social launch (Launch) — head term only | "build in public" (navigational/entity head term; no record targets it bare) | §23: the term's own platforms/directories occupy the SERP; no how-to article in top 5 | **GRO-010 — Build in Public on X (P1)** leads on the strategy long-tail; LAU-047 serves the launch window (C-22) | Neither article is retitled toward the head term; GRO-010 is asset-gated on real outcome data (§9.2) |

### 9.2 Superior-asset primaries — publishable only with the named asset

| Record | SERP verdict | Required asset (from track-serp.md content-gap analysis) |
|---|---|---|
| IDE-003 — Micro SaaS Ideas | Realistic with superior asset (§3) | Maintained, evidence-linked idea database: each idea scored (IDE-009 rubric) with its real complaint source linked. A plain list post does not meet the bar |
| BUI-001 — How to Build a SaaS MVP | Realistic with superior asset (§8) | Documented solo build: public scope log, cut list, timeline (repo or build log) that agency content cannot credibly copy |
| BUI-008 — Stripe Subscriptions in Next.js | Realistic with superior asset (§12) | Maintained, version-pinned GitHub repo: full webhook suite, portal, tested; article and repo versioned together |
| BUI-005 — Claude Code vs Cursor vs Copilot | Realistic with superior asset (§10, via "claude code vs cursor") | Reproducible first-hand benchmark: same SaaS tasks in each tool, time/token/cost logs, dated pricing |
| LAU-020 — Launch on Product Hunt flagship | Realistic with superior asset (§13) | Real launch teardown with dated numbers (own launch or permissioned maker data): upvotes → sign-ups → paying customers, featured vs not |
| LAU-027 — Product Hunt Alternatives | Realistic with superior asset (§16) | Maintained, neutral launch-directory database: per-platform tested data (traffic received, backlink type, queue time, last-verified date) |
| GRO-010 — Build in Public on X | Realistic (how-to intent) with superior asset (§23 adjacent intent) | Cadence templates plus real outcome data (own log or permissioned founder data) on follower→customer conversion |

### 9.3 Realistic-now primaries (no lock, no asset gate beyond normal first-hand quality)

IDE-001 (validation, §1 of track-serp.md), IDE-002 (complaints / "find saas ideas" family, §2), IDE-010 (niche, §4), IDE-031 (competitor analysis, §5), IDE-009 (scorecard / "know if a saas idea is good", §6), BUI-003 (tech stack, §7), LAU-028 (Hacker News, §14), LAU-038 (first customers family, §§15/24), LAU-006 (developer tool launch — weakest SERP of the 24, §18), LAU-007 (waitlist, marketing intent, §17), GRO-002 (no-budget marketing, §19), GRO-012 (first paying customers family, §24). These form the backbone of the roadmap's launch batch and first post-launch weeks.

---

## 10. The cross-pillar reader journey

IndieOS's four pillars are one journey. The cluster map wires it as a single linked chain, with each hand-off placed at the step where the reader's job changes (§6 rule 5):

```
IDEAS                          BUILD                           LAUNCH                          GROWTH
Find problems (IDE-002)   →    Scope the MVP (BUI-002)    →    Position (LAU-014)         →    First channel system (GRO-002)
Score the idea (IDE-009)       Build the MVP (BUI-001)         Waitlist/beta (LAU-007/011)     Climb to $1,000 MRR (GRO-012)
Validate it (IDE-001)          Billing live (BUI-008)           Launch channels (LAU-020/028)   Pricing + conversion (GRO-013/006)
Kill or commit (IDE-047)       Production gate (BUI-013)  →    First customers (LAU-038)  →    Retain (GRO-001) → measure (GRO-005/033)
                                                                                                  ↺ next idea / new feature → back to IDE-002
```

**Named hand-off links (minimum set, all reciprocal where the target exists):**

1. IDE-001 → BUI-002 — "validated; now scope it" (the journey's first hand-off).
2. IDE-009 → IDE-047 → BUI-002 — score, kill-or-commit, then build; a killed idea routes back to IDE-002, never forward.
3. BUI-001 → BUI-013 → LAU-004 — built, production-ready, launch-ready (C-26 chain).
4. BUI-013 → LAU-005 — the Build→Launch hand-off at the pillar level.
5. LAU-007 → LAU-038 → GRO-012 — waitlist, first customers, the $1,000 MRR climb (C-21 chain).
6. LAU-052 → GRO-033 — launch metrics graduate into the weekly metrics dashboard.
7. GRO-001 → IDE-002 — churn and retention evidence (why customers leave) feeds the next product/feature's problem discovery; the loop D6 §4 names ("Growth → Ideas").
8. Stage-pair links maintained per the register: IDE-026 ↔ LAU-007 (C-07), IDE-036 ↔ GRO-017 (C-06), LAU-033 → GRO-011 (C-25), LAU-047 ↔ GRO-010 (C-22), BUI-036 ↔ GRO-036 (C-23), LAU-041 ↔ GRO-014 (C-28).

---

## 11. Document control

- **Cluster source of truth:** the four track CSVs (220 records). If a CSV record's cluster, keyword or priority changes, this map and the roadmap must be re-derived for the affected cluster in the same change.
- **Companion documents:** D6 (technical SEO specification; §9 input decided in §7 above), D7 (page-level SEO matrix — its URLs must follow §7.4), track-roadmap.md (publication schedule built from §§2–5, gated by §9).
- **Register enforcement:** §8 decisions are checked at draft brief, at draft review, and at the late-December internal-link audit.

*End of D5.*
