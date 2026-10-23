import React from "react";
import Link from "next/link";

const PILLAR_LINKS = [
  { label: "Ideas", href: "/ideas" },
  { label: "Build", href: "/build" },
  { label: "Launch", href: "/launch" },
  { label: "Growth", href: "/growth" },
];

const TRUST_LINKS = [
  { label: "About", href: "/about" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "RSS Feed", href: "/rss.xml" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand & mission */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              IndieOS
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Practical, evidence-aware guidance for indie developers and solo founders building a small software business they control.
            </p>
          </div>

          {/* Pillars navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Editorial Pillars
            </h2>
            <ul className="mt-4 space-y-2.5">
              {PILLAR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust and site info */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Publication & Trust
            </h2>
            <ul className="mt-4 space-y-2.5">
              {TRUST_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {currentYear} IndieOS. All rights reserved.</p>
          <p>Independent publication for solo software builders.</p>
        </div>
      </div>
    </footer>
  );
}
