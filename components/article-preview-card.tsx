import React from "react";
import { Article } from "@/lib/content/types";

interface ArticlePreviewCardProps {
  article: Article;
}

export function ArticlePreviewCard({ article }: ArticlePreviewCardProps) {
  return (
    <article className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-colors flex flex-col justify-between">
      <div>
        {/* Metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground mb-3">
          <span className="font-mono text-[11px] text-muted-foreground">
            {article.id}
          </span>
          <div className="flex items-center gap-2">
            <span>{article.readingTime}</span>
            <span aria-hidden="true">•</span>
            <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wider font-medium">
              Demo
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground leading-snug">
          {article.title}
        </h2>

        {/* Excerpt / Description */}
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
          {article.description}
        </p>
      </div>

      {/* Footer info: tags & author notice */}
      <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted px-2 py-0.5 text-[11px] text-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-muted-foreground italic">
          {article.author.name}
        </span>
      </div>
    </article>
  );
}
