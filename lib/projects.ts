import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CATEGORIES } from "./site";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  status: string;
  featured: boolean;
  live?: string;
  repo?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  date: string;
  content: string;
};

const DIR = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: String(data.title),
      summary: String(data.summary),
      category: String(data.category),
      tags: (data.tags as string[]) ?? [],
      status: String(data.status ?? ""),
      featured: Boolean(data.featured),
      live: data.live as string | undefined,
      repo: data.repo as string | undefined,
      image: data.image as string | undefined,
      imageWidth: data.imageWidth as number | undefined,
      imageHeight: data.imageHeight as number | undefined,
      date: String(data.date),
      content,
    } satisfies Project;
  });
  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getFeatured(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

// Only categories that have at least one project get a tab.
export function getActiveCategories() {
  const all = getAllProjects();
  return CATEGORIES.filter((c) => all.some((p) => p.category === c.name));
}

export function getProjectsByCategory(slug: string): Project[] {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return [];
  return getAllProjects().filter((p) => p.category === cat.name);
}

export function statusClass(status: string): string {
  const s = status.toLowerCase();
  if (s === "live" || s === "beta") return "tag tag-green";
  return "tag tag-grey";
}
