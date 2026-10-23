"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useBookmarks } from "@/lib/bookmarks/bookmarks-context";
import { getAllArticles } from "@/lib/content/articles";
import { ArticlePreviewCard } from "@/components/article-preview-card";

export function SavedContent() {
  const {
    savedArticleIds,
    isLoaded,
    clearAll,
    storageError,
    clearStorageError,
  } = useBookmarks();

  const [confirmClear, setConfirmClear] = useState(false);

  const allArticles = useMemo(() => getAllArticles(), []);

  // Map stored IDs to actual article records, preserving save order
  const savedArticles = useMemo(() => {
    if (!isLoaded || savedArticleIds.length === 0) return [];
    const articleMap = new Map(allArticles.map((a) => [a.id, a]));
    return savedArticleIds
      .map((id) => articleMap.get(id))
      .filter((a): a is NonNullable<typeof a> => Boolean(a));
  }, [allArticles, savedArticleIds, isLoaded]);

  // Loading Skeleton State
  if (!isLoaded) {
    return (
      <div className="space-y-6">
        <div className="border-b border-border pb-6">
          <div className="h-9 w-48 bg-muted rounded animate-pulse" />
          <div className="mt-3 h-5 w-80 max-w-full bg-muted rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 rounded-lg border border-border bg-card p-6 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header section */}
      <header className="mb-8 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Personal Library
          </span>
          <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
            Browser LocalStorage
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Saved Articles
        </h1>

        <p className="mt-2.5 text-base text-muted-foreground max-w-2xl leading-relaxed">
          Articles bookmarked during your reading sessions are stored locally in this browser.
          They are not synchronized to an account or sent to an external server.
        </p>

        {/* Demo environment reminder */}
        <div className="mt-4 rounded-md border border-border bg-muted/60 p-3 text-xs text-muted-foreground">
          <strong className="text-foreground">Local storage notice:</strong> Bookmarks persist across page reloads on this browser. Clearing website data will reset your saved list.
        </div>
      </header>

      {/* Storage Error / Corrupted Storage Recovery Notice */}
      {storageError && (
        <div
          role="alert"
          className="mb-8 rounded-lg border border-foreground/30 bg-muted p-4 text-sm text-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div>
            <p className="font-semibold text-foreground">Storage Issue Detected</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {storageError} — corrupted or restricted browser storage was safely handled.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearAll}
              className="rounded-md border border-foreground bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Reset Saved Items
            </button>
            <button
              type="button"
              onClick={clearStorageError}
              aria-label="Dismiss storage warning"
              className="rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {savedArticles.length === 0 ? (
        <section
          aria-label="Empty saved articles state"
          className="my-8 rounded-xl border border-dashed border-border bg-card p-8 sm:p-12 text-center"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground mb-4">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-foreground tracking-tight">
            No saved articles yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground leading-relaxed">
            You haven&apos;t bookmarked any guides. When you find an article you want to reference later, click the bookmark icon on any card or detail page.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ideas"
              className="rounded-md border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Browse Ideas Guides →
            </Link>
            <Link
              href="/build"
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Build Guides
            </Link>
            <Link
              href="/launch"
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Launch Guides
            </Link>
            <Link
              href="/growth"
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Growth Guides
            </Link>
          </div>
        </section>
      ) : (
        /* Saved Articles Grid */
        <div>
          {/* Actions toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{savedArticles.length}</span> {savedArticles.length === 1 ? "saved guide" : "saved guides"}
            </p>

            <div className="flex items-center gap-2">
              {confirmClear ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Clear all saved?</span>
                  <button
                    type="button"
                    onClick={() => {
                      clearAll();
                      setConfirmClear(false);
                    }}
                    className="rounded border border-foreground bg-foreground px-2.5 py-1 text-xs font-medium text-background hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Yes, clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmClear(false)}
                    className="rounded border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmClear(true)}
                  aria-label="Clear all saved articles"
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Clear all saved
                </button>
              )}
            </div>
          </div>

          {/* Grid reusing ArticlePreviewCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedArticles.map((article) => (
              <ArticlePreviewCard
                key={article.id}
                article={article}
                headingLevel="h2"
                showRemoveAction={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
