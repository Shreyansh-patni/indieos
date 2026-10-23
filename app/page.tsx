import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content/articles";
import { PILLARS } from "@/lib/content/pillars";
import { PillarId } from "@/lib/content/types";
import { ArticlePreviewCard } from "@/components/article-preview-card";

export const metadata: Metadata = {
  title: "IndieOS — Practical guides for indie developers and solo founders",
  description:
    "IndieOS publishes practical and evidence-based guides for indie developers and solo founders — from finding an idea to building, launching and growing a small software business.",
  alternates: {
    canonical: "https://indieos.tech/",
  },
};

const PILLAR_ORDER: PillarId[] = ["ideas", "build", "launch", "growth"];

export default function HomePage() {
  const allArticles = getAllArticles();

  // Featured anchor guide (IDE-001)
  const featuredArticle =
    allArticles.find((a) => a.id === "IDE-001") || allArticles[0];

  // Latest guides selection (6 diverse articles across pillars, excluding the featured one)
  const latestArticles = allArticles
    .filter((a) => a.id !== featuredArticle.id)
    .slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-border bg-card py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
            Practical Guides for Independent Builders
          </p>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto"
          >
            Build a small software business you control
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-medium text-foreground/80 max-w-2xl mx-auto">
            Build the thing. Launch it. Grow on your terms.
          </p>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Practical, evidence-aware guidance for indie developers and solo
            founders moving through the journey from idea validation to
            building, launching, and sustainable growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pillars"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore the Pillars
            </a>
            <a
              href="#latest-guides"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Browse Latest Guides
            </a>
          </div>
        </div>
      </section>

      {/* 2. Demo Safeguard Banner */}
      <div className="bg-muted border-b border-border py-2.5 px-4 text-center text-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">Demo Preview:</strong> All
          articles shown below are illustrative records from the V1 content
          fixture for architecture and layout verification.
        </p>
      </div>

      {/* 3. Four Pillars Showcase */}
      <section
        id="pillars"
        aria-labelledby="pillars-heading"
        className="border-b border-border py-14 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              The Builder Journey
            </p>
            <h2
              id="pillars-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              Explore the Four Pillars
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Four connected stages of building an independent software business
              without outside capital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_ORDER.map((pillarId) => {
              const pillar = PILLARS[pillarId];
              return (
                <Link
                  key={pillar.id}
                  href={`/${pillar.slug}`}
                  className="group relative rounded-lg border border-border bg-card p-6 shadow-sm hover:border-foreground/40 transition-colors flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      Stage
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-foreground group-hover:underline">
                      {pillar.name}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-medium text-foreground">
                    <span>Explore {pillar.name}</span>
                    <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Guide Section */}
      {featuredArticle && (
        <section
          aria-labelledby="featured-heading"
          className="border-b border-border bg-card py-14 sm:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Starting Point
                </p>
                <h2
                  id="featured-heading"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
                >
                  Featured Guide
                </h2>
              </div>
              <span className="rounded border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Demo
              </span>
            </div>

            <article className="group relative rounded-xl border border-border bg-background p-8 sm:p-10 shadow-sm hover:border-foreground/40 transition-colors">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="font-semibold uppercase tracking-wider text-foreground">
                  {featuredArticle.pillar}
                </span>
                <span>•</span>
                <span>{featuredArticle.readingTime}</span>
                <span>•</span>
                <span className="font-mono text-[11px]">{featuredArticle.id}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:underline leading-tight max-w-3xl">
                <Link
                  href={featuredArticle.canonicalPath}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  <span className="absolute inset-0 rounded-xl" aria-hidden="true" />
                  {featuredArticle.title}
                </Link>
              </h3>

              <p className="mt-3.5 text-base text-muted-foreground leading-relaxed max-w-3xl">
                {featuredArticle.description}
              </p>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
                <div className="flex flex-wrap gap-2">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-1 font-medium text-foreground">
                  <span>Read Guide</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* 5. Latest Demo Guides Grid */}
      <section
        id="latest-guides"
        aria-labelledby="latest-heading"
        className="border-b border-border py-14 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Recent Publications
              </p>
              <h2
                id="latest-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
              >
                Latest Guides
              </h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Showing 6 demo fixtures across all pillars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticlePreviewCard
                key={article.id}
                article={article}
                headingLevel="h3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. About Strip */}
      <section
        aria-labelledby="about-strip-heading"
        className="bg-card py-12 sm:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-background p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h2
                id="about-strip-heading"
                className="text-lg font-bold tracking-tight text-foreground"
              >
                About IndieOS
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                IndieOS is an independent editorial publication for indie
                developers, solo founders, and bootstrapped software builders.
                We publish practical, evidence-aware guides covering idea
                validation, lean technical architecture, product launches, and
                sustainable growth without outside capital.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0 text-xs font-medium">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                About the Publication
              </Link>
              <Link
                href="/editorial-policy"
                className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Editorial Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
