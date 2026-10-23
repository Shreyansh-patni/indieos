import React, { Suspense } from "react";
import type { Metadata } from "next";
import { SavedContent } from "./saved-content";

export const metadata: Metadata = {
  title: "Saved Articles | IndieOS",
  description:
    "Review your saved guides and frameworks, stored locally in this browser.",
  robots: {
    index: false,
    follow: false,
  },
};

function SavedFallback() {
  return (
    <div className="space-y-6">
      <div className="h-6 w-48 bg-muted rounded animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Static Header with approved H1 and storage explanation */}
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

          <div className="mt-4 rounded-md border border-border bg-muted/60 p-3 text-xs text-muted-foreground">
            <strong className="text-foreground">Local storage notice:</strong> Bookmarks persist across page reloads on this browser. Clearing website data will reset your saved list.
          </div>
        </header>

        <Suspense fallback={<SavedFallback />}>
          <SavedContent />
        </Suspense>
      </div>
    </div>
  );
}
