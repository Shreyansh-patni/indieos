"use client";

import React, { useState, useEffect, useCallback, useId } from "react";
import { Article } from "@/lib/content/types";

export const SITE_ORIGIN = "https://indieos.tech";

export function getArticleCanonicalUrl(canonicalPath: string): string {
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  return `${SITE_ORIGIN}${cleanPath}`;
}

interface ArticleShareActionsProps {
  article: Article;
  variant?: "compact" | "full";
  className?: string;
}

export function ArticleShareActions({
  article,
  variant = "compact",
  className = "",
}: ArticleShareActionsProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [canWebShare, setCanWebShare] = useState<boolean>(false);
  const statusMessageId = useId();

  const canonicalUrl = getArticleCanonicalUrl(article.canonicalPath);

  // Detect Web Share API support on mount (client only)
  useEffect(() => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanWebShare(true);
    }
  }, []);

  const handleCopyLink = useCallback(async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(canonicalUrl);
        setCopyStatus("success");
        setFeedbackMessage("Canonical link copied to clipboard");
        setTimeout(() => {
          setCopyStatus("idle");
          setFeedbackMessage("");
        }, 2500);
        return;
      }

      // Fallback for older browsers or restricted permissions
      if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea");
        textarea.value = canonicalUrl;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (successful) {
          setCopyStatus("success");
          setFeedbackMessage("Canonical link copied to clipboard");
          setTimeout(() => {
            setCopyStatus("idle");
            setFeedbackMessage("");
          }, 2500);
          return;
        }
      }

      throw new Error("Clipboard API unavailable");
    } catch {
      setCopyStatus("error");
      setFeedbackMessage("Unable to copy link automatically. Please copy the URL manually.");
      setTimeout(() => {
        setCopyStatus("idle");
        setFeedbackMessage("");
      }, 4000);
    }
  }, [canonicalUrl]);

  const handleWebShare = useCallback(async () => {
    if (typeof navigator === "undefined" || !navigator.share) {
      handleCopyLink();
      return;
    }

    try {
      await navigator.share({
        title: article.title,
        text: article.description,
        url: canonicalUrl,
      });
      // Web share succeeded or system sheet opened
      setCopyStatus("success");
      setFeedbackMessage("Article shared successfully");
      setTimeout(() => {
        setCopyStatus("idle");
        setFeedbackMessage("");
      }, 2500);
    } catch (err: unknown) {
      // Ignore user cancellation (AbortError) without error feedback
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      // On actual share failure, fall back to copying
      handleCopyLink();
    }
  }, [article.title, article.description, canonicalUrl, handleCopyLink]);

  return (
    <div className={`relative inline-flex items-center gap-2 ${className}`}>
      {/* Live Region for Screen Readers */}
      <div
        id={statusMessageId}
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        {feedbackMessage}
      </div>

      {/* Web Share Button (if supported on device/browser) */}
      {canWebShare && (
        <button
          type="button"
          onClick={handleWebShare}
          aria-label={`Share "${article.title}"`}
          title="Share article via system dialog"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>Share</span>
        </button>
      )}

      {/* Copy Canonical Link Button */}
      <button
        type="button"
        onClick={handleCopyLink}
        aria-label={`Copy canonical link for "${article.title}"`}
        aria-describedby={feedbackMessage ? statusMessageId : undefined}
        title={copyStatus === "success" ? "Link copied!" : "Copy canonical link to clipboard"}
        className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          copyStatus === "success"
            ? "border-foreground bg-muted text-foreground font-semibold"
            : copyStatus === "error"
            ? "border-destructive bg-card text-destructive"
            : "border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-muted"
        }`}
      >
        {copyStatus === "success" ? (
          <>
            <svg
              className="h-3.5 w-3.5 text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied!</span>
          </>
        ) : copyStatus === "error" ? (
          <>
            <svg
              className="h-3.5 w-3.5 text-destructive"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Failed</span>
          </>
        ) : (
          <>
            <svg
              className="h-3.5 w-3.5"
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
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span>{variant === "full" ? "Copy canonical link" : "Copy link"}</span>
          </>
        )}
      </button>

      {/* Manual URL fallback popup if clipboard API failed */}
      {copyStatus === "error" && (
        <div
          role="alert"
          className="absolute top-full left-0 mt-2 z-20 w-72 rounded-md border border-border bg-card p-3 shadow-md text-xs text-foreground"
        >
          <p className="font-medium text-destructive mb-1">Clipboard unavailable</p>
          <p className="text-muted-foreground mb-2">Copy this canonical link manually:</p>
          <input
            type="text"
            readOnly
            value={canonicalUrl}
            onFocus={(e) => e.target.select()}
            className="w-full rounded border border-border bg-muted px-2 py-1 font-mono text-[11px] text-foreground select-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      )}
    </div>
  );
}
