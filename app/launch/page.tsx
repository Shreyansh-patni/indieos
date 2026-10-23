import type { Metadata } from "next";
import { getPillarMetadata } from "@/lib/content/pillars";
import { getArticlesByPillar } from "@/lib/content/articles";
import { PillarHeader } from "@/components/pillar-header";
import { ArticlePreviewCard } from "@/components/article-preview-card";

const pillar = getPillarMetadata("launch");

export const metadata: Metadata = {
  title: pillar.seoTitle,
  description: pillar.seoDescription,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `https://indieos.tech/${pillar.slug}`,
  },
};

export default function LaunchPillarPage() {
  const articles = getArticlesByPillar("launch");

  return (
    <div>
      <PillarHeader pillar={pillar} />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Section header */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Featured Guides ({articles.length})
          </h2>
          <span className="text-xs text-muted-foreground">
            Showing all {pillar.name} demo records
          </span>
        </div>

        {/* Article list */}
        <section
          aria-label={`${pillar.name} articles`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <ArticlePreviewCard key={article.id} article={article} />
          ))}
        </section>

        {/* Demo safeguard notice */}
        <aside
          aria-label="Demo notice"
          className="mt-12 rounded-lg border border-border bg-muted/50 p-4 text-center text-xs text-muted-foreground leading-relaxed"
        >
          <p>
            <strong>Demo Foundation:</strong> These records represent the initial content architecture for the {pillar.name} pillar. Individual article reading templates will be established in subsequent slices and are protected with <code>noindex</code> directives.
          </p>
        </aside>
      </div>
    </div>
  );
}
