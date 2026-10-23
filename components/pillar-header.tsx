import React from "react";
import Link from "next/link";
import { PillarMetadata } from "@/lib/content/types";

interface PillarHeaderProps {
  pillar: PillarMetadata;
}

export function PillarHeader({ pillar }: PillarHeaderProps) {
  return (
    <header className="border-b border-border bg-card py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">
              ›
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              {pillar.name}
            </li>
          </ol>
        </nav>

        {/* Eyebrow & Demo indicator */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {pillar.name} Pillar
          </span>
          <span className="inline-flex items-center rounded border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
            Demo Collection
          </span>
        </div>

        {/* Canonical H1 */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {pillar.h1}
        </h1>

        {/* Pillar Description */}
        <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
          {pillar.description}
        </p>
      </div>
    </header>
  );
}
