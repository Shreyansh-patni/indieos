import { PillarId, PillarMetadata } from "./types";

export const PILLARS: Record<PillarId, PillarMetadata> = {
  ideas: {
    id: "ideas",
    name: "Ideas",
    slug: "ideas",
    h1: "Find an idea worth building",
    seoTitle: "Ideas for Indie Developers — Find and Validate Your Next Product | IndieOS",
    seoDescription:
      "How indie developers find; test and choose software ideas — validation methods; real demand signals and honest kill criteria before you write code",
    description:
      "Validation methods, demand signals, and honest kill criteria to test whether a software problem is worth solving before writing code.",
  },
  build: {
    id: "build",
    name: "Build",
    slug: "build",
    h1: "Build it lean; ship it solo",
    seoTitle: "Build — Ship Your Indie Product with a Lean Stack | IndieOS",
    seoDescription:
      "Practical build guides for solo founders — choosing a stack; scoping an MVP; shipping and deploying a small product you can maintain alone",
    description:
      "Practical architecture, MVP scoping, and free stack choices to ship and maintain a small software business as a solo developer.",
  },
  launch: {
    id: "launch",
    name: "Launch",
    slug: "launch",
    h1: "Launch to your first real users",
    seoTitle: "Launch — Get Your First Users Without Paid Ads | IndieOS",
    seoDescription:
      "Launch playbooks for indie products — waitlists; communities; Product Hunt and directories; and what to do in the first 30 days after release",
    description:
      "Playbooks for waitlists, Show HN, niche communities, and early directories to acquire your first users without paid ads.",
  },
  growth: {
    id: "growth",
    name: "Growth",
    slug: "growth",
    h1: "Grow without burning out or buying ads",
    seoTitle: "Growth — Grow Users and Revenue for Your Indie Product | IndieOS",
    seoDescription:
      "Growth guides for indie products — SEO; content; referrals and pricing experiments that compound for a solo founder with no ad budget",
    description:
      "Sustainable distribution, landing page conversion, pricing experiments, and retention tactics that compound for bootstrapped founders.",
  },
};

export function getPillarMetadata(pillarId: PillarId): PillarMetadata {
  const meta = PILLARS[pillarId];
  if (!meta) {
    throw new Error(`Unknown pillar: ${pillarId}`);
  }
  return meta;
}
