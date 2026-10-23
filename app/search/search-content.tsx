"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { searchArticles } from "@/lib/content/search";
import { ArticlePreviewCard } from "@/components/article-preview-card";

const POPULAR_TOPICS = [
  "Validation",
  "MVP",
  "Waitlist",
  "MRR",
  "Tech Stack",
  "Hacker News",
];

export function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  // Sync state when URL query param changes
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    const trimmed = val.trim();
    if (trimmed) {
      router.replace(`/search?q=${encodeURIComponent(trimmed)}`, { scroll: false });
    } else {
      router.replace("/search", { scroll: false });
    }
  };

  const handleClear = () => {
    setQuery("");
    router.replace("/search", { scroll: false });
  };

  const handleTopicClick = (topic: string) => {
    setQuery(topic);
    router.replace(`/search?q=${encodeURIComponent(topic)}`, { scroll: false });
  };

  const trimmed = query.trim();
  const results = searchArticles(query);

  return (
    <div>
      {/* Search Input Bar */}
      <div className="mb-8 flex items-center rounded-lg border border-border bg-card px-3 sm:px-4 py-2.5 shadow-sm focus-within:border-foreground/50 focus-within:ring-1 focus-within:ring-ring">
        <svg
          className="h-5 w-5 text-muted-foreground shrink-0 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          id="search-page-input"
          type="search"
          role="searchbox"
          aria-label="Search articles by title, description, tags, or pillar"
          placeholder="Search by topic, keyword, or pillar (e.g., validation, mvp, waitlist)..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          autoFocus
        />

        {trimmed.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search query"
            className="text-xs font-medium text-muted-foreground hover:text-foreground px-2 py-1 rounded hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Clear
          </button>
        )}
      </div>

      {/* Live region for accessibility */}
      <div className="sr-only" role="status" aria-live="polite">
        {trimmed
          ? `${results.length} ${results.length === 1 ? "guide" : "guides"} found for ${trimmed}`
          : "Search input ready. Type to search articles."}
      </div>

      {/* Results or States */}
      <div>
        {/* State 1: Empty input / suggestions */}
        {!trimmed && (
          <div className="py-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Explore Popular Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {POPULAR_TOPICS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleTopicClick(topic)}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-foreground mb-1">
                About the IndieOS Catalog
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                IndieOS indexes 12 illustrative demo guides covering the full journey of a solo
                founder: finding and validating ideas, building lean software architectures,
                launching to early adopters, and growing sustainable MRR.
              </p>
            </div>
          </div>
        )}

        {/* State 2: Active query with results */}
        {trimmed && results.length > 0 && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border text-sm text-muted-foreground">
              <span>
                Found <strong className="text-foreground">{results.length}</strong>{" "}
                {results.length === 1 ? "guide" : "guides"} matching &ldquo;{trimmed}&rdquo;
              </span>
              <span className="rounded border border-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider">
                Demo Catalog
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((article) => (
                <ArticlePreviewCard
                  key={article.id}
                  article={article}
                  headingLevel="h2"
                />
              ))}
            </div>
          </div>
        )}

        {/* State 3: Active query with NO results */}
        {trimmed && results.length === 0 && (
          <div className="py-12 px-4 text-center rounded-xl border border-border bg-card">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
              <svg
                className="h-6 w-6 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <h2 className="text-lg font-semibold text-foreground">
              No guides found for &ldquo;{trimmed}&rdquo;
            </h2>

            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              We couldn&apos;t find any guides matching your search terms. Check your spelling or
              browse guides directly by editorial pillar:
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/ideas"
                className="rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Ideas
              </Link>
              <Link
                href="/build"
                className="rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Build
              </Link>
              <Link
                href="/launch"
                className="rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Launch
              </Link>
              <Link
                href="/growth"
                className="rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Growth
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <button
                type="button"
                onClick={handleClear}
                className="text-xs font-medium text-foreground underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                Clear search query
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
