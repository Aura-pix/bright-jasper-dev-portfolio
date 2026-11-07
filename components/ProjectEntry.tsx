import Link from "next/link";
import { statusClass, type Project } from "@/lib/projects";

export default function ProjectEntry({ project }: { project: Project }) {
  const p = project;
  return (
    <li className="entry">
      {p.image && p.imageWidth && p.imageHeight ? (
        <Link href={`/projects/${p.slug}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`${p.title} preview`}
            width={p.imageWidth}
            height={p.imageHeight}
            loading="eager"
          />
        </Link>
      ) : null}
      <div className="entry-head">
        <span className="entry-date">{p.date}</span>
        <h3>
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </h3>
        {p.featured ? <span className="tag tag-accent">Featured</span> : null}
        <span className={statusClass(p.status)}>{p.status}</span>
      </div>
      <p>{p.summary}</p>
      <ul className="chips">
        {p.tags.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
      <div className="entry-links">
        <Link href={`/projects/${p.slug}`}>Read the case study</Link>
        {p.live ? <a href={p.live}>Live</a> : null}
        {p.repo ? <a href={p.repo}>Source</a> : null}
      </div>
    </li>
  );
}
