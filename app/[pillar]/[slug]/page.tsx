import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/content/articles";
import { getPillarMetadata } from "@/lib/content/pillars";
import { PillarId } from "@/lib/content/types";
import { ArticleReadingTemplate } from "@/components/article-reading-template";

const VALID_PILLARS: PillarId[] = ["ideas", "build", "launch", "growth"];

interface PageProps {
  params: Promise<{
    pillar: string;
    slug: string;
  }>;
}

/**
 * Generate static params for all 12 demo article combinations at build time.
 */
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    pillar: article.pillar,
    slug: article.slug,
  }));
}

/**
 * Metadata generation with strict noindex, nofollow protections for demo articles.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pillar, slug } = await params;

  if (!VALID_PILLARS.includes(pillar as PillarId)) {
    return {
      title: "Page Not Found | IndieOS",
      robots: { index: false, follow: false },
    };
  }

  const article = getArticleBySlug(pillar as PillarId, slug);
  if (!article) {
    return {
      title: "Page Not Found | IndieOS",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${article.title} | IndieOS`,
    description: article.description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://indieos.tech/${article.pillar}/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { pillar, slug } = await params;

  // 1. Verify pillar is one of the four approved pillars
  if (!VALID_PILLARS.includes(pillar as PillarId)) {
    notFound();
  }

  // 2. Resolve article strictly by BOTH pillar and slug (never slug alone)
  const article = getArticleBySlug(pillar as PillarId, slug);
  if (!article) {
    notFound();
  }

  const pillarMeta = getPillarMetadata(pillar as PillarId);

  return <ArticleReadingTemplate article={article} pillar={pillarMeta} />;
}
