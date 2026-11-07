import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectEntry from "@/components/ProjectEntry";
import { getActiveCategories, getProjectsByCategory } from "@/lib/projects";
import { CATEGORIES } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return getActiveCategories().map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} projects`,
    description: `${cat.name} projects by Bright Jasper.`,
    alternates: { canonical: `/projects/category/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();
  const projects = getProjectsByCategory(category);
  const categories = getActiveCategories();
  return (
    <>
      <h1>Projects</h1>
      <p className="muted">{cat.name}, newest first.</p>
      <ul className="tabs" aria-label="Project categories">
        <li>
          <Link href="/projects">All</Link>
        </li>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/projects/category/${c.slug}`}
              aria-current={c.slug === category ? "page" : undefined}
            >
              {c.name}
            </Link>
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
