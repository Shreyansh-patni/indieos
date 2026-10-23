import type { MetadataRoute } from "next";

export const SITE_ORIGIN = "https://indieos.tech";

/**
 * Generates the /robots.txt configuration for IndieOS V1.
 *
 * Rules (D6 §4, D10 AC-32, AC-110):
 * - References the canonical sitemap at https://indieos.tech/sitemap.xml.
 * - Allows crawling of all pages and assets needed for rendering (CSS, JS, images).
 * - Does not substitute for noindex: demo safeguards are enforced via page-level robots meta tags.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
