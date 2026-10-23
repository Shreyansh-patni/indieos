# D9 — IndieOS Editorial Playbook

- **Site:** IndieOS — https://indieos.tech · **Audience:** indie developers, indie hackers, solo founders and bootstrapped software builders
- **Pillars (only four):** Ideas · Build · Launch · Growth
- **Companion files:** D2 keyword database (the per-pillar track CSVs in `research/` — `track-ideas.csv`, `track-build.csv`, `track-launch.csv`, `track-growth.csv`, 36-column schema per `research/PROTOCOL.md`); D6 website/SEO specification; D7 page-level SEO matrix; D8 AdSense readiness checklist; `research/track-casestudies.md` (case-study evidence register governed by §9 of this playbook)
- **Research/standards date:** 2026-10-23
- **Status of this document:** Binding editorial standard. Where this playbook and a deadline disagree, this playbook wins. An article that cannot meet §3 or §9 is not published late — it is not published.

---

## 1. How IndieOS selects keywords from the D2 database

### 1.1 The database is the only source of assignments

No article is commissioned from a hunch, a trending post, or a writer's preference alone. Every article starts as a row in the D2 database with: a primary keyword, one search intent, a pillar, a topic cluster, a proposed format, internal-linking targets, a cannibalization-risk rating, a priority, and evidence notes. If it is not in the database, it is not assigned. New ideas discovered while writing go back into the database as candidate rows first — they are never smuggled into an existing article as a second topic (see §7, one intent = one article).

### 1.2 Priority framework (recap of the protocol heuristic)

Each candidate is scored 1–5 on six factors (per `research/PROTOCOL.md`):

| Factor | Weight | What it measures |
|---|---|---|
| R — Relevance to IndieOS | 25% | Fit with the four pillars and the solo/bootstrapped reader |
| I — Intent fit | 15% | How cleanly one article can satisfy the query's intent |
| D — Demand evidence | 20% | Observed demand evidence (live SERP density/recurrence; a tool-read volume only if a tool actually returned one) |
| C — Competition feasibility | 20% | Winnability for a brand-new domain (higher = easier); judged from SERP composition, never from an invented difficulty score |
| E — Effort inverse | 10% | Higher = less production effort |
| K — Cluster connectivity + evergreen value | 10% | Internal-link value inside its cluster and resistance to decay |

Composite = 0.25R + 0.15I + 0.20D + 0.20C + 0.10E + 0.10K. **P1 ≥ 3.80 · P2 = 3.00–3.79 · P3 < 3.00.** Factor scores are recorded in the row's Evidence Notes in the form `Scores R# I# D# C# E# K# = X.XX`.

Rules that keep the framework honest:

- The composite is a **prioritization heuristic, not a ranking or traffic predictor**. Nobody at IndieOS quotes a priority score to a reader, a partner, or themselves as evidence an article will rank.
- A metric that no tool actually returned is recorded as **Not available** — never estimated, never back-filled from a third-party blog's claim. (In the October 2026 research pass, no keyword tool returned a readable volume/difficulty/CPC through text fetch, so those cells are Not available across the database. Priorities set under that condition are a research sequence, not a forecast, and are revisited if a real tool export arrives.)
- Geography defaults to **US** and is stated in the row; US and global figures are never swapped or blended.
- Publication Status starts as **Not started** for every row and changes only through the workflow in §2.

### 1.3 SERP-reality check before assignment (mandatory gate)

Priority gets a row shortlisted; the live SERP decides whether it is assigned. Before any P1/P2 row becomes a brief, the editor re-checks the actual search results for the primary keyword on the assignment date and records, in the row's notes:

1. **Who ranks now** — authority publications, official docs, tool vendors, niche blogs, community posts — classified, not just listed.
2. **Intent match** — do the ranking pages actually serve the intent IndieOS plans to serve? A split or misread intent (e.g. a query where official documentation for an unrelated feature occupies the results) is a stop signal, not a writing challenge.
3. **The asset gap** — what would IndieOS's page contain that no ranking page does (a tested repo, a worked example with real numbers, a maintained database, a first-hand teardown)? If the honest answer is "the same framework, written better," the row is not assigned.
4. **Authority lock** — if the top positions are held by institutions, official documentation, or the platform itself for the exact intent planned, the row is deferred to long-term or re-scoped to a contestable long-tail. Head terms owned by encyclopedias and platform docs are not assigned to a new domain on optimism.
5. **Freshness state** — are ranking pages current, stale-but-ranking, or churning (version numbers, pricing, rules changing between results)? Stale-but-ranking is an opening; fast churn is a maintenance commitment that must be accepted explicitly in the brief.

The check is dated. SERPs change; a check older than the production cycle is repeated before drafting, not trusted.

### 1.4 One intent = one article

- One database row = one primary keyword = one search intent = one article. Secondary keywords and related queries in the row are served *inside* that article only where they share the primary intent.
- Two rows whose intents collapse into one (same reader, same job, same satisfying page) are merged in the database before either is written (see §7).
- An article never targets two intents "to be safe." A page that tries to be both a tutorial and a comparison satisfies neither intent and cannibalizes both rows.

---

## 2. Article production workflow

Every article passes through all nine stages, in order. A stage is complete only when its exit check is done; skipping a stage is a playbook violation, not a shortcut.

| # | Stage | What happens | Exit check |
|---|---|---|---|
| 1 | **Brief** | Editor converts the database row into a brief: primary keyword + intent, pillar/cluster, format (§4), target reader and their problem, the unique asset (§1.3.3), internal-link targets, evidence requirements, and any figures the article is *forbidden* to use (see §9 verdicts) | Brief names the SERP-reality check date and the asset gap in one sentence each |
| 2 | **Outline** | Writer produces an outline to the §4 standard for the format; editor approves before any drafting | Outline maps every section to the intent or a listed question-to-answer from the row |
| 3 | **Research with primary sources** | Claims are gathered from primary sources first: official documentation, the product's own pages, the founder's own writing/podcast, original data. Secondary sources may explain, never originate, a load-bearing claim. Every source is logged with its URL and access date in the article's research note | Every planned statistic/figure in the outline has a named source attached, or is cut |
| 4 | **Draft** | Written to the outline. Original material is produced here: IndieOS's own examples, code, tests, calculations, or screenshots from real work (see §3.4) | Draft contains at least one piece of original material no competitor page has, or it goes back |
| 5 | **Fact-check** | A check against §3, claim by claim, by someone other than the drafter where staffing allows — and by the drafter against the source log where it does not. Unverifiable claims are removed or explicitly labelled, never softened into vagueness | Fact-check pass recorded with date; zero unsourced figures remain |
| 6 | **Internal-link pass** | Links to and from the article are placed per the database row's Internal Linking Targets and the cluster map (D7): the article links up to its pillar/cluster hub and sideways to sibling intents; at least one already-published sibling is updated to link back | No orphan article; no link placed to an article with a different intent as if it were the same topic |
| 7 | **Metadata uniqueness check** | Title, meta description, slug, and H1 are checked against every published and planned page: no duplicates, no near-duplicates differing only by year or word order, slug unique in the database | Metadata set is unique across the corpus and the database |
| 8 | **Publish** | Page ships with: author attribution, date published, date last updated (identical at launch), sources section or inline source links, and any required disclosure (§5) | Live page re-read once as a visitor before the row's status changes to Published |
| 9 | **Update cycle** | The article enters the §8 regime: trigger-based updates, a public update log, and honest `dateModified` | Row records next review trigger/date |

**Status discipline:** the database row's Publication Status mirrors reality at every stage. An article in fact-check is not "almost published"; a killed brief returns the row to Not started with the reason in its notes.

---

## 3. Fact-checking standard

### 3.1 Every statistic needs a named source

Any number in an IndieOS article — market size, price, conversion rate, benchmark, growth rate, revenue, user count, percentage — carries a named source the reader can reach: the organization or person who produced it, linked, with the figure's date or period stated where the source gives one. "Studies show," "experts say," "most founders," and unattributed round numbers are prohibited. If the source cannot be named and linked, the number does not run.

### 3.2 Founder-reported figures are labelled as such, in the text

Figures that originate with the person or company they describe — revenue, MRR/ARR, user counts, growth rates, timelines — are labelled **in the sentence or its immediate context** as founder-reported / company-reported, with the date of the report. They are never:

- restated later in the article (or in a headline, table, or social post) without the label,
- averaged, annualized, extrapolated, or "updated" by IndieOS arithmetic and then presented as the founder's figure (any IndieOS calculation is labelled as IndieOS's calculation, with inputs shown),
- upgraded by repetition: a figure that appears on ten aggregator sites still has one source — the founder — and is cited to the founder's own statement where reachable, not to the loudest repeater.

Third-party **estimates** (revenue trackers, "estimated from public sources" breakdowns, database profiles) are a separate class again: labelled as estimates, named to the estimator, and never used as the headline figure of a case study (see §9).

### 3.3 No invented anything

Prohibited without exception: invented experience ("when I launched my SaaS…" where no launch happened), fake experiments, staged or borrowed screenshots presented as IndieOS's own work, fabricated quotes, composite "typical founder" characters presented as real people, and statistics generated to fill a gap in an outline. A gap is filled with research or the claim is cut.

### 3.4 AI assistance rule

AI may assist research, outlining, and drafting. It does not publish. For every article:

- A human verifies every claim against its source — verification means opening the source, not recognizing the claim.
- A human adds judgment the draft cannot supply: what to leave out, what the evidence does not support, where the honest answer is "unknown."
- The article contains original material produced from real work — IndieOS's own examples, code that was actually run, tests with actual results, calculations with shown inputs, screenshots from the real tool/repo/account being described.
- Any AI-generated or AI-assisted illustration is never presented as a screenshot, a photograph of a real event, or evidence.

### 3.5 Quotations

Quoted words are verbatim from a source IndieOS opened, attributed to the speaker and the source, and linked. Paraphrase is written as paraphrase. A quote that cannot be re-verified in its source is removed — including famous quotes everyone "knows." (This rule exists because quote drift is real: retellings change wording and numbers; IndieOS cites the version it opened and dates it.)

### 3.6 Dates and freshness of facts

Time-sensitive facts (prices, plan limits, platform rules, UI steps) carry an "as of" date in the article. A fact checked in October 2026 is not stated as timeless truth in 2027; §8 governs its update.

---

## 4. Outline standard per format

Every outline states, before its first heading: the primary intent in one sentence, the reader's problem, the unique asset, and the "what this article will not claim" line for evidence-limited topics. Sections exist to serve the intent; a section that serves a different intent is a different article (§1.4).

### 4.1 Guide (informational how-to / framework)
1. The problem, stated as the reader experiences it — and what it costs them.
2. The framework/method in one overview block (the whole answer, compressed).
3. Steps/phases in dependency order, each with: action, worked example, failure case or kill criterion where one honestly exists.
4. Decision points: thresholds, trade-offs, and when *not* to use the method.
5. A complete worked pass (real or explicitly-labelled illustrative numbers — never a disguised invention).
6. Common mistakes, drawn from sources, not invented war stories.
7. FAQ limited to the row's listed questions-to-answer.
8. Sources.

### 4.2 Tutorial (implementation)
1. Outcome and end state (what exists when the reader finishes), with the finished artifact shown or linked (repo, demo).
2. Prerequisites: exact versions, accounts, and costs — including free-tier limits and commercial-use restrictions where they bite.
3. Steps in executable order; every code block complete enough to run in context; every UI step matching the current interface (verified at fact-check, §3.6).
4. Verification step: how the reader confirms each stage worked (expected output, test, or check).
5. Failure modes actually encountered or documented, with fixes.
6. Production gaps the tutorial deliberately does not cover (dunning, edge cases, scaling) — named, not hidden.
7. Version/update note: what will break this tutorial and when it was last re-tested (§8).

### 4.3 Comparison (X vs Y / alternatives)
1. Verdict up front, segmented by reader type — no single winner declared for unlike readers.
2. Comparison criteria, stated before results, identical for every option.
3. Evidence per criterion: tested behavior, official documentation, or dated pricing pages — labelled which is which. First-hand test results show method (same tasks, same conditions, dates).
4. Pricing table from official pricing pages, dated; conflicting prices across sources are resolved to the official page or flagged as unresolved, never averaged.
5. Where each option loses (a comparison in which the recommended option loses nothing is an advertorial and is sent back).
6. Who should pick what; switching costs and lock-in stated.
7. Disclosure block (§5) if any commercial relationship exists with any compared product.

### 4.4 Checklist
1. What the checklist decides or guarantees when completed — and what it cannot decide.
2. Items grouped by phase, each item: action, why it matters in one line, and the pass condition (how the reader knows it's done).
3. Ordering by dependency; blocking items marked.
4. A downloadable/copyable version of the same list (the asset, not a summary of it).
5. Anti-checklist: the popular items IndieOS deliberately excludes, with reasons.

### 4.5 Calculator / tool post
1. The tool itself, usable on the page, above any long text.
2. Method: the formula/model, its inputs, and its assumptions — stated in full.
3. Worked examples with shown inputs and outputs, including an example where the honest output is "don't."
4. Limits: what the model ignores, where its thresholds come from, and their evidence class (sourced, practitioner convention labelled as such, or IndieOS judgment labelled as such).
5. The surrounding explanation serves the row's questions-to-answer only; the page is a tool with documentation, not an essay with a widget.

### 4.6 Case study
Governed in full by §9. Outline skeleton:
1. Subject and one-line outcome — using only figures §9 permits for this subject.
2. Context: market, timing, constraints the subject operated under.
3. Timeline built from dated, sourced facts (verified facts separated from founder-reported figures, §9.3).
4. The specific decisions/mechanisms the lesson rests on — each tied to a source.
5. What the evidence does *not* show (missing figures, survivorship, single-source stretches).
6. The transferable lesson, stated at the strength the evidence supports.
7. Anecdote-risk note (§9.5) — mandatory, visible, not a footnote afterthought.
8. Full source list with access dates.

### 4.7 Teardown
1. The subject and the artifact being torn down (pricing page, onboarding flow, launch, funnel) — captured as it existed on a stated date (screenshots from the real artifact, §3.3).
2. Element-by-element analysis: what each element does, with the evidence for the claim (visible copy/pricing/structure) separated from IndieOS's interpretation, which is labelled as interpretation.
3. Numbers only where the subject published them or a named source did (§3.1); no inferred revenue from traffic guesses.
4. What a solo founder can copy, what only works at the subject's scale, and what to avoid.
5. Update note: teardowns decay fastest of all formats; the capture date is printed in the article, not buried in metadata.

---

## 5. Quality-review checklists

An article is reviewed against the checklist for its format, plus the universal items. Any failed item blocks publication.

**Universal (all formats):** ☐ Every figure has a named, linked source (§3.1) ☐ Founder-reported figures labelled in text (§3.2) ☐ No invented experience, quotes, or screenshots (§3.3) ☐ Original material present (§3.4) ☐ Intent served completely; no second intent smuggled in (§1.4) ☐ Internal links placed both directions (§2.6) ☐ Metadata unique (§2.7) ☐ Time-sensitive facts carry "as of" dates (§3.6) ☐ Disclosure present or confirmed unnecessary (below)

**Affiliate / commercial disclosure — IndieOS default:** *Disclose, or do not run the link.* If IndieOS has any affiliate, sponsorship, referral, or revenue relationship with a product mentioned, that fact is disclosed on the page, adjacent to the first mention, in plain language. If a relationship cannot be disclosed plainly (e.g. terms forbid it), the link does not run. Absence of a disclosure on a page is IndieOS's statement that no such relationship exists for that page's recommendations.

### 5.1 Tutorials
☐ Every step executed end-to-end from a clean state by the reviewer (reproducibility), on the versions the article names
☐ Code runs as printed; no "and then it works" gaps
☐ Expected outputs/verification steps present and accurate
☐ Prerequisites and costs complete, including free-tier/commercial-use traps
☐ Screenshots are from the actual current UI and the actual work (§3.3)
☐ Last-tested date recorded for the §8 update trigger
☐ Failure modes are real (encountered or documented), not decorative

### 5.2 Comparison articles
☐ Criteria fixed before results; same criteria, same tests, every option
☐ First-hand tests used identical tasks/conditions; method and dates shown
☐ All prices from official pricing pages, dated; conflicts resolved or flagged
☐ Each option shown losing somewhere honest
☐ Verdict segmented by reader type; no universal winner for unlike readers
☐ Affiliate disclosure checked against *every* compared product (§5)

### 5.3 Software / tool reviews
☐ The reviewer actually used the tool for the task the review describes; duration/scope of use stated
☐ Claims split: vendor-stated (labelled), reviewer-tested (method shown), third-party-reported (sourced)
☐ Pricing, limits, and plan gates verified on the official site on the review date
☐ At least one genuine limitation documented from use, not from a competitor's page
☐ Screenshots from the reviewer's own account/work
☐ No review of a tool IndieOS could not access — an inaccessible tool is "not reviewed," never reviewed from marketing copy
☐ Disclosure (§5)

### 5.4 Product guides (how to use / get the most from one product)
☐ Written from use, not from the vendor's documentation alone; doc-derived steps re-performed
☐ Workflows shown end-to-end with a real example, including the unglamorous steps (billing, limits, exports, deletion)
☐ Limits and gotchas section present and specific
☐ Version and "as of" date stated; UI verified at fact-check
☐ Alternatives named honestly where the product is the wrong tool
☐ Disclosure (§5)

### 5.5 Case studies
☐ Subject passes §9 in full (this checklist does not substitute for §9)
☐ Every figure classified: verified fact / founder-reported / estimate / interpretation — and labelled accordingly in text
☐ Headline and social copy use only permitted figures for the subject's verdict tier
☐ Anecdote-risk note present (§9.5)
☐ No quotation that was not re-verified in its source (§3.5)

---

## 6. (Reserved — format standards are §4; review standards are §5.)

---

## 7. Deduplication and cannibalization prevention

### 7.1 Pre-writing intent check (mandatory, before brief)

Before a brief is opened, the editor searches the D2 database and the published corpus for the row's intent — not its keyword string, its *intent* (reader + job + satisfying page):

- Same intent already published → this row is an **update** (§8), not a new article.
- Same intent planned in another row → rows are merged (§7.2) before either is written.
- Adjacent intent (same reader, different job) → proceed, and record the boundary sentence in both rows: what this article covers and what it deliberately leaves to the sibling.
- Cannibalization Risk in the row (Low/Medium/High) is set from this check, not guessed at keyword level. Two pages can share zero keyword strings and still cannibalize one intent; two pages can share a head term and serve cleanly different intents.

### 7.2 Merge rules for overlapping posts

- **Pre-publication:** overlapping rows merge into one row; the surviving primary keyword is the one with the cleaner intent fit (I factor), the other's keyword becomes a secondary. Both slugs are recorded; only one article is ever written.
- **Post-publication:** when two live articles are found serving one intent, the stronger page (better evidence, better asset, better Search Console performance for the intent) absorbs the other's unique material, and the weaker URL **301-redirects** to the survivor. Redirects are never used to paper over two pages that merely share vocabulary — only true intent duplicates merge.
- A merged page's update log (§8.3) records the merge and the retired URL.

### 7.3 Update-vs-new-post decision rule

**Default: update.** A new post requires a *new intent*. Specifically:

| Situation | Action |
|---|---|
| Same intent, facts changed | Update the existing article (§8) |
| Same intent, IndieOS now has a better asset (repo, dataset, test) | Update; the asset replaces, not duplicates |
| New intent (different reader job) adjacent to an existing article | New post, with the §7.1 boundary sentence in both |
| Intent drifted: searchers now want a different page than the one ranking | Re-scope the existing article to the drifted intent if it is the ranking URL; commission a new post only for the abandoned intent if it still has its own demand evidence |
| Format change only (guide → checklist for the same intent) | Update/rebuild the same URL; a format is not an intent |

"Our old article is weak" is never, by itself, a reason for a second URL.

---

## 8. Updating old content

### 8.1 Update triggers

An article is queued for update when any trigger fires — not on a fixed calendar alone:

1. **Tool/product UI changes** — a tutorial or guide step no longer matches the interface (reader report, scheduled re-test, or vendor changelog).
2. **Pricing changes** — any price, plan, or limit quoted in the article changes on the official page.
3. **Platform rule changes** — the rules an article teaches change at the source. Worked example: Product Hunt launch rules and submission specs were verified against Product Hunt's official launch pages in the October 2026 research pass (see `research/track-serp.md` §13); the moment those official pages change — scheduling windows, asset specs, account-age requirements — every IndieOS article citing them is queued, and the re-verification is against the official page, not against another blog's summary.
4. **Search-intent drift** — the SERP for the article's intent changes composition (new intent served, docs/authority takeover, the article ranking for a query it doesn't satisfy).
5. **Search Console data** — sustained impressions for queries the article doesn't answer (re-scope or expand honestly), CTR decay against stable position (metadata review, §2.7 rules still apply), or position decay with fresher competitors ranking (evidence refresh).
6. **Evidence superseded** — a source figure is corrected, retracted, or superseded by its own source (founder restates, official page revises); case studies are re-checked against §9 verdicts when new primary material appears.
7. **Link/asset rot** — a linked source, repo, or embedded asset dies or changes meaning.

### 8.2 How an update is done

Re-verify, don't patch blindly: every changed fact is re-checked against its primary source on the update date; new figures follow §3 exactly as in a new article. Screenshots are re-captured from the real current UI. The update is substantive or it is not shipped as an update (see §8.4).

### 8.3 Update log practice

Every article carries a visible update log (or a "last updated" line plus a changelog section for multi-update pages) recording: date, what changed in one plain sentence per change, and any merge (§7.2). Silent substantive edits are prohibited — a reader who cited the old version can discover that it changed and how.

### 8.4 `dateModified` honesty

`dateModified` (and any displayed "last updated" date) changes **only when the article's substance changed**: facts corrected or refreshed, steps re-tested, sections added/removed, figures updated, merges applied. It never changes for typo fixes, formatting, metadata tweaks, link swaps, or — under any circumstances — to make an unchanged article look fresh. A date IndieOS cannot defend line-by-line against the update log does not ship.

---

## 9. Success-story evidence standard (binding for all case studies)

This section governs every IndieOS article whose persuasive force rests on a real founder, company, or product story — case studies, teardowns of named businesses, "how X grew" pieces, and failure analyses. It is binding: an editor cannot waive it for a good story.

### 9.1 The subject must be real and identified

The founder, company, and product are real, named, and checkable. No composites, no anonymized "a founder I know" presented as a case, no renamed subjects. If a subject cannot be named, it is not a case study — it may be an essay, labelled as one, with no case-study framing or figures.

### 9.2 Source URLs are required and recorded

Every case study has a research record (in `research/track-casestudies.md` or its successor) listing the sources actually opened: founder/company primary sources first (their blog, open/metrics page, own podcast/interview transcript, regulatory or platform records), reputable interviews second, aggregators last and never alone. A claim traced only to an aggregator is traced to nothing.

### 9.3 Four classes of claim — kept separate, labelled in text

| Class | Definition | How it appears in an IndieOS article |
|---|---|---|
| **Verified fact** | Confirmable independently of the subject's say-so (product exists, launch date on a platform record, an acquisition announced by both parties, a price on an official page) | Stated plainly, with source |
| **Founder-reported figure** | Any number originating with the founder/company (revenue, MRR/ARR, users, growth, timelines of their own experience) | Labelled founder-reported/company-reported in text, with the report's date (§3.2) |
| **Estimate** | A third party's inference (revenue trackers, "estimated from public sources" profiles, traffic-based guesses) | Labelled as an estimate, named to the estimator; never a headline figure; never blended with founder-reported figures |
| **Interpretation** | IndieOS's (or another writer's) explanation of *why* things happened | Labelled as interpretation; causal claims are the weakest class and are written at the strength the evidence supports |

Classes never migrate upward. A founder-reported figure repeated by fifty sites is still founder-reported. An estimate cited by a reputable outlet is still an estimate.

### 9.4 The readiness verdict — and what each tier may publish

Every candidate subject carries one verdict in the research record:

- **Publication-ready** — evidence is strong: primary sources opened, load-bearing facts and figures sourced and classified, contradictions resolved or disclosed. May be commissioned, using only the figures and claims its record permits.
- **Needs more research** — the subject is real and promising, but load-bearing evidence is thin, dated, single-source, conflicting, or secondary-only. Not commissioned until the named gap is closed with primary material.
- **Unverified — do not publish yet** — weak or inaccessible evidence: the famous claims about the subject cannot be traced to a source IndieOS opened, or sources conflict irreconcilably. **Not publication-ready in any form** — no article, no list mention with figures, no social post repeating the claims. The subject may be re-researched; the verdict changes only on new primary evidence, never on how often the claim is repeated elsewhere.

### 9.5 Anecdote-risk note (required in every case study)

Every published case study carries a visible note, written for that subject, covering: that this is one company's path under specific market/timing conditions; which parts of the story rest on the founder's own account; what evidence is missing (figures never disclosed, periods skipped, failures of similar companies not examined); and that the lesson is a hypothesis for the reader's situation, not a recipe. Survivorship is named where it applies: IndieOS disproportionately studies companies that survived, and the note says so.

### 9.6 Absolute prohibitions for case studies

- No fabricated interviews, quotations, MRR, revenue, traffic, or growth rates — including "representative" numbers.
- No presenting a founder's later, larger figure as if it were the figure at the time of the events described (figures keep their dates).
- No stripping a subject's funding history to fit a "bootstrapped" frame: if the company raised money, took a strategic investment, sold, or ran secondary rounds, the article says so — several famous "pure bootstrap" stories are not pure (see the research record for Carrd, Baremetrics, and ConvertKit/Kit), and repeating the folklore version is a §3 violation.
- No borrowing a subject's screenshots, dashboards, or charts as if they were IndieOS's own verification.
- No case study commissioned from the research record's "Needs more research" or "Unverified" tiers to meet a content quota.

---

## 10. Roles and sign-off

- **Editor** owns: brief, SERP-reality check, intent check (§7.1), outline approval, metadata uniqueness, and the publish decision.
- **Writer/researcher** owns: source log, draft, original material, and the first fact-check pass.
- **Reviewer** (a second person where staffing allows; the editor wearing a second hat, against the checklists, where it does not) owns: the §5 checklist for the format and the §9 classification check for case studies.
- Sign-off is recorded in the database row's notes: brief date, fact-check date, checklist used, publish date. An article without a recorded fact-check date does not ship.

*End of D9.*
