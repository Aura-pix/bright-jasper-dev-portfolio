import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProject, statusClass } from "@/lib/projects";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      title: `${p.title} | Bright Jasper`,
      description: p.summary,
      url: `${SITE.url}/projects/${p.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: p.title,
    description: p.summary,
    url: `${SITE.url}/projects/${p.slug}`,
    codeRepository: p.repo,
    programmingLanguage: p.tags,
    dateCreated: p.date,
    author: { "@id": SITE.personId },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <p className="muted">
        <Link href="/projects">Projects</Link> / {p.title}
      </p>
      <header className="case-head">
        <span className="entry-date">{p.date}</span>
        <h1>{p.title}</h1>
        <p className="lead">{p.summary}</p>
        <div className="case-meta">
          <span className={statusClass(p.status)}>{p.status}</span>
          <span className="chip">{p.category}</span>
          {p.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="btns">
          {p.live ? (
            <a href={p.live} className="btn">
              Live site
            </a>
          ) : null}
          {p.repo ? (
            <a href={p.repo} className="btn btn-ghost">
              Source
            </a>
          ) : null}
        </div>
      </header>
      {p.image && p.imageWidth && p.imageHeight ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="case-cover"
          src={p.image}
          alt={`${p.title} preview`}
          width={p.imageWidth}
          height={p.imageHeight}
          loading="eager"
        />
      ) : null}
      <div className="prose">
        <MDXRemote source={p.content} />
      </div>
    </article>
  );
}
