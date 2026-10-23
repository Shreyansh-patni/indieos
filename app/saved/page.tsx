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
      <div className="h-10 w-48 bg-muted rounded animate-pulse" />
      <div className="h-6 w-96 max-w-full bg-muted rounded animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 rounded-lg border border-border bg-card p-6 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Suspense fallback={<SavedFallback />}>
          <SavedContent />
        </Suspense>
      </div>
    </div>
  );
}
