import React, { Suspense } from "react";
import type { Metadata } from "next";
import { SearchContent } from "./search-content";

export const metadata: Metadata = {
  title: "Search | IndieOS",
  description:
    "Search practical guides and frameworks for indie developers and solo founders.",
  robots: {
    index: false,
    follow: true,
  },
};

function SearchFallback() {
  return (
    <div className="space-y-6">
      <div className="h-12 w-full bg-muted rounded-lg animate-pulse" />
      <div className="h-24 w-full bg-muted rounded-xl animate-pulse" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Static Header with approved H1 */}
        <div className="mb-8 border-b border-border pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Search IndieOS
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Search practical, evidence-aware guides across Ideas, Build, Launch, and Growth.
          </p>
        </div>

        <Suspense fallback={<SearchFallback />}>
          <SearchContent />
        </Suspense>
      </div>
    </div>
  );
}
