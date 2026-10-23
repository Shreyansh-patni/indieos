"use client";

import React, { useState } from "react";
import { useBookmarks } from "@/lib/bookmarks/bookmarks-context";

interface BookmarkButtonProps {
  articleId: string;
  articleTitle?: string;
  variant?: "icon" | "full" | "remove";
  className?: string;
  onAfterToggle?: (nextSaved: boolean) => void;
}

export function BookmarkButton({
  articleId,
  articleTitle = "Article",
  variant = "icon",
  className = "",
  onAfterToggle,
}: BookmarkButtonProps) {
  const { isSaved, toggleSave, isLoaded } = useBookmarks();
  const saved = isLoaded ? isSaved(articleId) : false;
  const [justToggled, setJustToggled] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent event bubbling to parent link in article preview cards
    e.stopPropagation();
    e.preventDefault();

    toggleSave(articleId);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 1200);

    if (onAfterToggle) {
      onAfterToggle(!saved);
    }
  };

  const accessibleLabel = saved
    ? `Remove "${articleTitle}" from saved articles`
    : `Save "${articleTitle}" for later`;

  if (variant === "remove") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Remove "${articleTitle}" from saved articles`}
        title="Remove from saved articles"
        className={`relative z-10 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      >
        <svg
          className="h-3.5 w-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span>Remove</span>
      </button>
    );
  }

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={saved}
        aria-label={accessibleLabel}
        title={saved ? "Saved (click to remove)" : "Save article"}
        className={`relative z-10 inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          saved
            ? "border-foreground/50 bg-muted text-foreground hover:border-foreground"
            : "border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-muted"
        } ${className}`}
      >
        {saved ? (
          <svg
            className="h-4 w-4 text-foreground fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 3a2 2 0 00-2 2v16l9-4 9 4V5a2 2 0 00-2-2H5z" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4"
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        )}
        <span>
          {justToggled
            ? saved
              ? "Saved!"
              : "Removed"
            : saved
            ? "Saved"
            : "Save article"}
        </span>
      </button>
    );
  }

  // Default "icon" variant
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      aria-label={accessibleLabel}
      title={saved ? "Saved (click to remove)" : "Save article"}
      className={`relative z-10 inline-flex items-center justify-center rounded-md p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        saved
          ? "border border-foreground/30 bg-muted text-foreground hover:bg-muted/80"
          : "border border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground"
      } ${className}`}
    >
      {saved ? (
        <svg
          className="h-4 w-4 text-foreground fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M5 3a2 2 0 00-2 2v16l9-4 9 4V5a2 2 0 00-2-2H5z" />
        </svg>
      ) : (
        <svg
          className="h-4 w-4"
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
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      )}
      <span className="sr-only">
        {saved ? `Saved article: ${articleTitle}` : `Save article: ${articleTitle}`}
      </span>
    </button>
  );
}
