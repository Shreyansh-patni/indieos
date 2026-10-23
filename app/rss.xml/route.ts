import { getAllArticles } from "@/lib/content/articles";

export const dynamic = "force-static";

const SITE_ORIGIN = "https://indieos.tech";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generates the RSS 2.0 feed at /rss.xml.
 *
 * Rules (D6 §6, §25, D10 AC-34, AC-110):
 * - Valid RSS 2.0 XML with atom:link and dc namespace.
 * - Absolute canonical article links on https://indieos.tech.
 * - Only content explicitly eligible for publication (status === "published" && !isDemo).
 * - Strictly excludes demo fixtures and drafts.
 * - If no published articles exist, validly emits a channel with zero items.
 * - Returns application/rss+xml; charset=utf-8.
 */
export async function GET() {
  const eligibleArticles = getAllArticles().filter(
    (article) => article.status === "published" && !article.isDemo
  );

  // Sort newest first
  eligibleArticles.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });

  const channelTitle = "IndieOS — Practical guides for indie developers and solo founders";
  const channelDescription =
    "IndieOS publishes practical and evidence-based guides for indie developers and solo founders — from finding an idea to building, launching and growing a small software business.";
  const channelLink = SITE_ORIGIN;
  const feedUrl = `${SITE_ORIGIN}/rss.xml`;

  const itemsXml = eligibleArticles
    .map((article) => {
      const cleanPath = article.canonicalPath.startsWith("/")
        ? article.canonicalPath
        : `/${article.canonicalPath}`;
      const articleUrl = `${SITE_ORIGIN}${cleanPath}`;
      const pubDate = new Date(article.publishedAt).toUTCString();

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.pillar)}</category>
      <pubDate>${pubDate}</pubDate>
      ${article.author?.name ? `<dc:creator>${escapeXml(article.author.name)}</dc:creator>` : ""}
    </item>`;
    })
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${channelLink}</link>
    <description>${escapeXml(channelDescription)}</description>
    <language>en</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${itemsXml ? `${itemsXml}\n` : ""  }  </channel>
</rss>
`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
