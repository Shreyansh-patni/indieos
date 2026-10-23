import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
