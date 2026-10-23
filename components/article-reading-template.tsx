import React from "react";
import Link from "next/link";
import { Article, PillarMetadata } from "@/lib/content/types";
import { BookmarkButton } from "@/components/bookmark-button";
import { ArticleShareActions } from "@/components/article-share-actions";

interface ArticleReadingTemplateProps {
  article: Article;
  pillar: PillarMetadata;
}

export function ArticleReadingTemplate({ article, pillar }: ArticleReadingTemplateProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <li>
            <Link
              href="/"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="select-none">
            ›
          </li>
          <li>
            <Link
              href={`/${pillar.slug}`}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              {pillar.name}
            </Link>
          </li>
          <li aria-hidden="true" className="select-none">
            ›
          </li>
          <li aria-current="page" className="font-medium text-foreground truncate max-w-[200px] sm:max-w-xs">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="border-b border-border pb-8 mb-8">
        {/* Category & Demo Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Link
            href={`/${pillar.slug}`}
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {pillar.name} Pillar
          </Link>
          <span className="inline-flex items-center rounded border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
            Demo Fixture
          </span>
        </div>

        {/* Canonical H1 Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
          {article.title}
        </h1>

        {/* Lead Deck / Description */}
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {article.description}
        </p>

        {/* Byline & Metadata Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-y-3 gap-x-4 text-xs text-muted-foreground pt-4 border-t border-border">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-foreground">{article.author.name}</span>
              <span>•</span>
              <span>{article.author.role}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <time dateTime={article.publishedAt}>
                October 23, 2026
              </time>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <BookmarkButton
              articleId={article.id}
              articleTitle={article.title}
              variant="full"
            />
            <ArticleShareActions
              article={article}
              variant="compact"
            />
          </div>
        </div>
      </header>

      {/* Demo Notice Banner */}
      <aside
        aria-label="Demo notice"
        className="mb-8 rounded-lg border border-border bg-muted p-4 text-xs text-muted-foreground leading-relaxed"
      >
        <p>
          <strong className="text-foreground">Illustrative Demo Content:</strong> This article detail page verifies the reading layout, typography rhythm, responsive boundaries, and metadata structure for IndieOS V1. The full researched guide is scheduled in the editorial backlog and protected with <code>noindex</code> directives.
        </p>
      </aside>

      {/* Main Article Body (Demonstrating typography blocks: headings, paragraphs, callout, lists) */}
      <div className="space-y-6 text-foreground leading-relaxed text-base sm:text-lg">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3">
            1. Overview and Core Problem
          </h2>
          <p>
            When building software as a solo founder or indie developer, resources are inherently constrained. Every hour invested in building or marketing must deliver tangible feedback. {article.description}
          </p>
          <p className="mt-4">
            Rather than jumping directly to execution or copying playbooks designed for venture-funded organizations, bootstrapped builders require lightweight frameworks that establish measurable milestones early.
          </p>
        </section>

        {/* Editorial Callout */}
        <div className="border-l-4 border-foreground bg-muted p-5 rounded-r-lg my-6">
          <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
            Key Takeaway
          </p>
          <p className="text-sm sm:text-base font-medium text-foreground">
            Focus on one single workflow and validate willingness to pay before adding secondary features or spending budget on promotional campaigns.
          </p>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3">
            2. Step-by-Step Execution Sequence
          </h2>
          <p>
            A disciplined execution framework helps avoid premature optimization and scope creep:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-base text-foreground/90">
            <li>
              <strong>Define the boundary:</strong> Establish clear criteria for what belongs in version one and what must be cut.
            </li>
            <li>
              <strong>Measure genuine demand:</strong> Look for observable user actions rather than polite verbal affirmations.
            </li>
            <li>
              <strong>Implement sustainable workflows:</strong> Prioritize repeatable, low-maintenance processes over complex automations.
            </li>
            <li>
              <strong>Review and iterate:</strong> Collect qualitative feedback from actual early adopters before scaling.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3">
            3. Summary and Next Steps
          </h2>
          <p>
            Systematic execution distinguishes enduring independent software businesses from abandoned weekend prototypes. Test assumptions in days, build in weeks, and maintain clarity over your product scope.
          </p>
        </section>
      </div>

      {/* 8. Article-End Actions: Save & Share */}
      <section
        aria-label="Article actions"
        className="my-10 rounded-lg border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
            Share or Save this Guide
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Bookmark for your next build session or share the canonical link with other founders.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <BookmarkButton
            articleId={article.id}
            articleTitle={article.title}
            variant="full"
          />
          <ArticleShareActions
            article={article}
            variant="full"
          />
        </div>
      </section>

      {/* Article Footer: Tags and Back Navigation */}
      <footer className="mt-12 pt-8 border-t border-border">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs text-muted-foreground mr-1">Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted px-2.5 py-1 text-xs text-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Back link & Bookmark control */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
          <Link
            href={`/${pillar.slug}`}
            className="inline-flex items-center text-sm font-medium text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            ← Back to {pillar.name} Guides
          </Link>
          <div className="flex items-center gap-3">
            <BookmarkButton
              articleId={article.id}
              articleTitle={article.title}
              variant="full"
            />
            <span className="text-xs text-muted-foreground font-mono">
              {article.id}
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
}
