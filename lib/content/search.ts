import { Article } from "./types";
import { ARTICLES } from "./articles";

/**
 * Searches the local article catalog.
 * Matches case-insensitively against title, description, tags, and pillar name.
 * Handles empty queries and trimmed whitespace gracefully.
 */
export function searchArticles(query: string, articles: Article[] = ARTICLES): Article[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return [];
  }

  return articles.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(trimmed);
    const descMatch = article.description.toLowerCase().includes(trimmed);
    const pillarMatch = article.pillar.toLowerCase().includes(trimmed);
    const tagsMatch = article.tags.some((tag) => tag.toLowerCase().includes(trimmed));

    return titleMatch || descMatch || pillarMatch || tagsMatch;
  });
}
