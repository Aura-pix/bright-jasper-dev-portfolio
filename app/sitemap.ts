import type { MetadataRoute } from "next";
import { getActiveCategories, getAllProjects } from "@/lib/projects";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/projects", "/resume", "/contact"].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
  }));
  const categories = getActiveCategories().map((c) => ({
    url: `${SITE.url}/projects/category/${c.slug}`,
    lastModified: now,
  }));
  const projects = getAllProjects().map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: now,
  }));
  return [...staticPages, ...categories, ...projects];
}
