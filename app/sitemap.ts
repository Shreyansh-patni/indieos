import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content/articles";
import { PILLARS } from "@/lib/content/pillars";

export const SITE_ORIGIN = "https://indieos.tech";

/**
 * Generates the canonical /sitemap.xml for IndieOS V1.
 *
 * Rules (D6 §3, D7, D10 AC-30, AC-34, AC-110):
 * - Canonical origin https://indieos.tech only.
 * - Homepage is included as the primary canonical indexable entry point.
 * - Pillars are included only when they contain published articles.
 *   (Under D6 line 104 and AC-110, pillars with zero published articles emit noindex and are excluded).
 * - Only approved articles with status === "published" and !isDemo are included.
 * - Strictly excludes /search, /saved, 404 routes, demo articles, and any other noindex routes.
 * - No fabricated dates: uses real updatedAt/publishedAt for articles; omits lastModified if not verified.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // 1. Homepage: canonical indexable URL
  entries.push({
    url: SITE_ORIGIN,
  });

  // 2. Pillars: included only if they contain published editorial articles
  const publishedArticles = getAllArticles().filter(
    (article) => article.status === "published" && !article.isDemo
  );

  const pillarsWithPublished = new Set(publishedArticles.map((a) => a.pillar));
  for (const pillar of Object.values(PILLARS)) {
    if (pillarsWithPublished.has(pillar.id)) {
      entries.push({
        url: `${SITE_ORIGIN}/${pillar.slug}`,
      });
    }
  }

  // 3. Published Articles: canonical article detail routes
  for (const article of publishedArticles) {
    const cleanPath = article.canonicalPath.startsWith("/")
      ? article.canonicalPath
      : `/${article.canonicalPath}`;

    entries.push({
      url: `${SITE_ORIGIN}${cleanPath}`,
      ...(article.updatedAt || article.publishedAt
        ? { lastModified: new Date(article.updatedAt || article.publishedAt) }
        : {}),
    });
  }

  return entries;
}
