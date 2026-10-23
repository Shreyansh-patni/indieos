import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookmarksProvider } from "@/lib/bookmarks/bookmarks-context";

export const metadata: Metadata = {
  title: "IndieOS — Practical guides for indie developers and solo founders",
  description:
    "IndieOS publishes practical and evidence-based guides for indie developers and solo founders - from finding an idea to building, launching and growing a small software business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        {/* Accessible skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <BookmarksProvider>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </BookmarksProvider>
      </body>
    </html>
  );
}
