import type { MetadataRoute } from "next";
import { referenceDocs, tutorialDocs } from "@/lib/docs";
import { legalDocs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://midori-docs.vercel.app";
  const paths = [
    "",
    "/docs",
    "/docs/tutorials",
    "/docs/reference",
    "/legal",
    "/downloads",
    "/repos",
    ...tutorialDocs.map((doc) => `/docs/tutorials/${doc.slug}`),
    ...referenceDocs.map((doc) => `/docs/reference/${doc.slug}`),
    ...legalDocs.map((doc) => `/legal/${doc.slug}`)
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}
