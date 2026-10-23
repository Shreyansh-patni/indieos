"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { searchArticles } from "@/lib/content/search";
import { Article } from "@/lib/content/types";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_TOPICS = [
  "Validation",
  "MVP",
  "Waitlist",
  "MRR",
  "Tech Stack",
  "Hacker News",
];

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const results: Article[] = searchArticles(query);
  const trimmed = query.trim();

  // Focus management and body scroll lock
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Small delay to ensure DOM is ready for focus
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        if (previousFocusRef.current && typeof previousFocusRef.current.focus === "function") {
          previousFocusRef.current.focus();
        }
      };
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation: Escape and Tab focus trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [onClose]
  );

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleTopicClick = (topic: string) => {
    setQuery(topic);
    inputRef.current?.focus();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-16"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
        className="relative z-50 w-full max-w-2xl rounded-xl border border-border bg-background shadow-lg overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in-0 zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="search-dialog-title" className="sr-only">
          Search Articles
        </h2>

        {/* Live region for screen readers */}
        <div className="sr-only" role="status" aria-live="polite">
          {trimmed
            ? `${results.length} ${results.length === 1 ? "guide" : "guides"} found for ${trimmed}`
            : "Search input ready. Type to search articles."}
        </div>

        {/* Search Input Bar */}
        <div className="flex items-center border-b border-border px-3 sm:px-4 py-3 bg-background">
          <svg
            className="h-5 w-5 text-muted-foreground shrink-0 mr-2.5"
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
            ref={inputRef}
            type="search"
            role="searchbox"
            aria-label="Search articles by title, description, tags, or pillar"
            placeholder="Search guides by title, topic, pillar, or tag..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          />

          {trimmed.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search query"
              className="mr-2 text-xs font-medium text-muted-foreground hover:text-foreground px-2 py-1 rounded hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Clear
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded border border-border px-2 py-1 text-[11px] font-mono text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Esc
          </button>
        </div>

        {/* Search Results / Content Area */}
        <div className="overflow-y-auto p-4 flex-1">
          {/* State 1: Empty input / initial suggestions */}
          {!trimmed && (
            <div className="py-6 px-2 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Suggested Topics
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Explore 12 practical demo guides across Ideas, Build, Launch, and Growth.
              </p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {POPULAR_TOPICS.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => handleTopicClick(topic)}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* State 2: Active query with results */}
          {trimmed && results.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-border text-xs text-muted-foreground">
                <span>
                  Found <strong className="text-foreground">{results.length}</strong>{" "}
                  {results.length === 1 ? "guide" : "guides"} for &ldquo;{trimmed}&rdquo;
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider">
                  Demo Catalog
                </span>
              </div>

              <ul role="list" className="space-y-2">
                {results.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={article.canonicalPath}
                      onClick={onClose}
                      className="group block rounded-lg border border-transparent p-3 sm:p-4 hover:border-border hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground mb-1">
                        <span className="font-semibold uppercase tracking-wider text-foreground">
                          {article.pillar}
                        </span>
                        <span>•</span>
                        <span>{article.readingTime}</span>
                        <span>•</span>
                        <span className="rounded border border-border px-1.5 py-0.2 text-[9px] uppercase font-mono">
                          Demo
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:underline leading-snug">
                        {article.title}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {article.description}
                      </p>

                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* State 3: Active query with NO results */}
          {trimmed && results.length === 0 && (
            <div className="py-8 px-4 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-3">
                <svg
                  className="h-5 w-5 text-muted-foreground"
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

              <h3 className="text-base font-semibold text-foreground">
                No guides found for &ldquo;{trimmed}&rdquo;
              </h3>

              <p className="mt-1.5 text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                We couldn&apos;t find any articles matching your search. Check for typos or
                browse by editorial pillar below:
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Link
                  href="/ideas"
                  onClick={onClose}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Ideas
                </Link>
                <Link
                  href="/build"
                  onClick={onClose}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Build
                </Link>
                <Link
                  href="/launch"
                  onClick={onClose}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Launch
                </Link>
                <Link
                  href="/growth"
                  onClick={onClose}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Growth
                </Link>
              </div>

              <div className="mt-6">
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

        {/* Footer info bar */}
        <div className="border-t border-border px-4 py-2.5 bg-background flex flex-wrap items-center justify-between text-[11px] text-muted-foreground gap-2">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                Esc
              </kbd>{" "}
              to close
            </span>
            <span>
              <kbd className="font-mono rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                Tab
              </kbd>{" "}
              to navigate
            </span>
          </div>
          <span>12 demo guides indexed</span>
        </div>
      </div>
    </div>
  );
}
