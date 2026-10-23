import { Article, PillarId } from "./types";

/**
 * Exactly 12 demo article records (3 per pillar), grounded in D2/D3 launch batch specifications.
 * Marked explicitly as isDemo: true and status: "demo".
 */
export const ARTICLES: Article[] = [
  // --- Ideas Pillar (3 records) ---
  {
    id: "IDE-001",
    slug: "validate-micro-saas-idea-without-building",
    title: "How to Validate a Micro-SaaS Idea Without Building It",
    description:
      "A structured commitment ladder and kill criteria to verify real willingness to pay before writing production code.",
    pillar: "ideas",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "7 min read",
    tags: ["Validation", "Idea Scoring", "Customer Discovery"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Validate a Micro-SaaS Idea Without Building It | IndieOS",
    seoDescription:
      "Framework for solo founders to validate customer demand and payment willingness before writing code.",
    canonicalPath: "/ideas/validate-micro-saas-idea-without-building",
  },
  {
    id: "IDE-002",
    slug: "find-saas-ideas-from-customer-complaints",
    title: "How to Find SaaS Ideas From Customer Complaints",
    description:
      "A systematic workflow to mine public software forums, reviews, and community threads for high-frequency user pain.",
    pillar: "ideas",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "6 min read",
    tags: ["Idea Mining", "Reviews", "Problem Discovery"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Find SaaS Ideas From Customer Complaints | IndieOS",
    seoDescription:
      "Step-by-step method to turn existing customer complaints into concrete software opportunities.",
    canonicalPath: "/ideas/find-saas-ideas-from-customer-complaints",
  },
  {
    id: "IDE-010",
    slug: "find-niche-for-saas-product",
    title: "How to Find a Niche for a SaaS Product as a Solo Founder",
    description:
      "Testing whether a solo developer can realistically reach, sell to, and support a target market on a zero-dollar budget.",
    pillar: "ideas",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "5 min read",
    tags: ["Niche Selection", "Targeting", "Solo Strategy"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Find a Niche for a SaaS Product as a Solo Founder | IndieOS",
    seoDescription:
      "How to evaluate market size, reachability, and willingness to pay when picking a SaaS niche.",
    canonicalPath: "/ideas/find-niche-for-saas-product",
  },

  // --- Build Pillar (3 records) ---
  {
    id: "BUI-001",
    slug: "how-to-build-a-saas-mvp",
    title: "How to Build a SaaS MVP Step by Step as a Solo Founder",
    description:
      "A day-by-day solo build sequence anchored to one core user workflow and strict boundaries against feature bloat.",
    pillar: "build",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "9 min read",
    tags: ["MVP", "Architecture", "Solo Development"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Build a SaaS MVP Step by Step as a Solo Founder | IndieOS",
    seoDescription:
      "Practical execution plan to build and ship an initial software product without getting stuck in development.",
    canonicalPath: "/build/how-to-build-a-saas-mvp",
  },
  {
    id: "BUI-002",
    slug: "how-to-scope-a-saas-mvp",
    title: "How to Scope a SaaS MVP and What to Cut First",
    description:
      "How to ruthlessly cut non-essential features so a solo builder can reach a working release in weeks rather than months.",
    pillar: "build",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "5 min read",
    tags: ["Scoping", "Product Specs", "MVP"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Scope a SaaS MVP and What to Cut First | IndieOS",
    seoDescription:
      "Scoping guidelines and stop rules for solo software builders defining version one.",
    canonicalPath: "/build/how-to-scope-a-saas-mvp",
  },
  {
    id: "BUI-003",
    slug: "best-free-tech-stack-solo-saas-developer",
    title: "Best Free Tech Stack for a Solo SaaS Developer",
    description:
      "A layer-by-layer breakdown of generous free tiers, evaluating when each tier becomes a constraint for commercial projects.",
    pillar: "build",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "8 min read",
    tags: ["Tech Stack", "Hosting", "Free Tiers"],
    status: "demo",
    isDemo: true,
    seoTitle: "Best Free Tech Stack for a Solo SaaS Developer | IndieOS",
    seoDescription:
      "Evaluating Next.js, static hosting, databases, and auth on zero upfront infrastructure costs.",
    canonicalPath: "/build/best-free-tech-stack-solo-saas-developer",
  },

  // --- Launch Pillar (3 records) ---
  {
    id: "LAU-006",
    slug: "how-to-launch-a-developer-tool",
    title: "How to Launch a Developer Tool - Docs and Demos First",
    description:
      "Why developer tools need interactive artifacts and honest documentation rather than vague marketing landing pages.",
    pillar: "launch",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "6 min read",
    tags: ["Developer Tools", "Launch", "Documentation"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Launch a Developer Tool - Docs and Demos First | IndieOS",
    seoDescription:
      "A developer-focused launch playbook prioritizing quickstarts, sample repos, and interactive proof.",
    canonicalPath: "/launch/how-to-launch-a-developer-tool",
  },
  {
    id: "LAU-007",
    slug: "how-to-build-a-waitlist",
    title: "How to Build a Waitlist Before Launch That Actually Converts",
    description:
      "Moving beyond passive email collection to create an engaged subscriber group ready to test your initial release.",
    pillar: "launch",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "6 min read",
    tags: ["Waitlists", "Audience", "Pre-Launch"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Build a Waitlist Before Launch That Actually Converts | IndieOS",
    seoDescription:
      "Techniques to cultivate an authentic pre-launch audience without misleading signup counters.",
    canonicalPath: "/launch/how-to-build-a-waitlist",
  },
  {
    id: "LAU-028",
    slug: "show-hn-guide",
    title: "Show HN Guide - How to Launch on Hacker News Without Getting Flagged",
    description:
      "Guidelines, tone expectations, and etiquette for presenting a genuine technical project to the Hacker News community.",
    pillar: "launch",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "7 min read",
    tags: ["Hacker News", "Distribution", "Community"],
    status: "demo",
    isDemo: true,
    seoTitle: "Show HN Guide - How to Launch on Hacker News | IndieOS",
    seoDescription:
      "A grounded walkthrough of Show HN rules, submission timing, and how to answer technical feedback.",
    canonicalPath: "/launch/show-hn-guide",
  },

  // --- Growth Pillar (3 records) ---
  {
    id: "GRO-002",
    slug: "how-to-market-micro-saas-without-paid-advertising",
    title: "How to Market a Micro-SaaS Without Paid Advertising",
    description:
      "Ranking organic channels by founder time investment and direct return when advertising budgets are non-existent.",
    pillar: "growth",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "8 min read",
    tags: ["Organic Marketing", "Bootstrapping", "Zero Budget"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Market a Micro-SaaS Without Paid Advertising | IndieOS",
    seoDescription:
      "Time-efficient organic acquisition channels tailored for solo founders with zero ad budget.",
    canonicalPath: "/growth/how-to-market-micro-saas-without-paid-advertising",
  },
  {
    id: "GRO-006",
    slug: "saas-landing-page-conversion-rate",
    title: "SaaS Landing Page Conversion Rate - Benchmarks and Practical Fixes",
    description:
      "Realistic indie benchmark ranges and the highest-leverage copy improvements that turn visitors into users.",
    pillar: "growth",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "7 min read",
    tags: ["Conversion Rate", "Landing Page", "Copywriting"],
    status: "demo",
    isDemo: true,
    seoTitle: "SaaS Landing Page Conversion Rate - Benchmarks and Fixes | IndieOS",
    seoDescription:
      "Low-traffic conversion rate benchmarks and systematic fixes for bootstrapped software products.",
    canonicalPath: "/growth/saas-landing-page-conversion-rate",
  },
  {
    id: "GRO-012",
    slug: "how-to-get-to-1000-mrr-saas",
    title: "How to Get to 1000 Dollars MRR - The Unscalable First-Customer Playbook",
    description:
      "Direct outreach, high-touch onboarding, and manual customer acquisition needed to hit your initial revenue milestone.",
    pillar: "growth",
    publishedAt: "2026-10-23T00:00:00Z",
    author: {
      name: "IndieOS Editorial",
      role: "Staff Guide",
    },
    readingTime: "8 min read",
    tags: ["Revenue", "MRR", "First Customers"],
    status: "demo",
    isDemo: true,
    seoTitle: "How to Get to 1000 Dollars MRR as a Solo Founder | IndieOS",
    seoDescription:
      "The unscalable manual steps to take a bootstrapped product from zero to its first thousand in revenue.",
    canonicalPath: "/growth/how-to-get-to-1000-mrr-saas",
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticlesByPillar(pillar: PillarId): Article[] {
  return ARTICLES.filter((article) => article.pillar === pillar);
}

export function getArticleBySlug(pillar: PillarId, slug: string): Article | undefined {
  return ARTICLES.find((article) => article.pillar === pillar && article.slug === slug);
}
