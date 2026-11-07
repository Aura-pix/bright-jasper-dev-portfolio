import type { Metadata } from "next";
import Link from "next/link";
import ProjectEntry from "@/components/ProjectEntry";
import { getActiveCategories, getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Bright Jasper: Roomly, a client e-commerce store, a flash loan arbitrage bot and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getActiveCategories();
  return (
    <>
      <h1>Projects</h1>
      <p className="muted">Everything I&apos;ve built, newest first.</p>
      <ul className="tabs" aria-label="Project categories">
        <li>
          <Link href="/projects" aria-current="page">
            All
          </Link>
        </li>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/projects/category/${c.slug}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="entries">
        {projects.map((p) => (
          <ProjectEntry key={p.slug} project={p} />
        ))}
      </ul>
    </>
  );
}
