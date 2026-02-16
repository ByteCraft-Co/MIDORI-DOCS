import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://midori-docs.vercel.app";
  return ["", "/docs", "/legal", "/downloads", "/repos"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}