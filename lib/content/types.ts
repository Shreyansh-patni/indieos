export type PillarId = "ideas" | "build" | "launch" | "growth";

export interface PillarMetadata {
  id: PillarId;
  name: string;
  slug: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  pillar: PillarId;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: string;
  tags: string[];
  status: "demo" | "draft" | "published";
  isDemo: boolean;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
}
