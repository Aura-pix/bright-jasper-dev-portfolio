import Link from "next/link";
import ProjectEntry from "@/components/ProjectEntry";
import { getFeatured } from "@/lib/projects";
import { SITE } from "@/lib/site";

export default function Home() {
  const featured = getFeatured();
  return (
    <>
      <section>
        <p className="eyebrow">Bright Jasper</p>
        <h1>Software engineer with 3 years of building full-stack web apps.</h1>
        <p className="lead">
          I work in Next.js, Node.js, TypeScript, Python and PostgreSQL.
          I&apos;m the solo developer of Roomly, a student housing marketplace
          in beta for Nigerian universities.
        </p>
        <p className="muted">
          Third-year Computer Science student at Federal University of
          Technology Minna (FUTMinna). Open to junior and mid-level software, AI
          and Web3 roles, remote.
        </p>
        <div className="btns">
          <Link href="/projects" className="btn">
            View projects
          </Link>
          <Link href="/resume" className="btn btn-ghost">
            Resume
          </Link>
          <a
            href={SITE.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="stats">
          Watchdocs in testing · Roomly in beta · Client store shipped in 24
          hours · Flash loan bot tested on Sepolia
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <p className="muted">Live, in beta and in progress.</p>
        <ul className="entries">
          {featured.map((p) => (
            <ProjectEntry key={p.slug} project={p} />
          ))}
        </ul>
        <p>
          <Link href="/projects">See all projects</Link>
        </p>
      </section>

      <section className="section">
        <h2>Stack</h2>
        <ul className="stack-list">
          <li>
            <strong>Languages</strong>
            <span>TypeScript, JavaScript, Python, Solidity</span>
          </li>
          <li>
            <strong>Frameworks</strong>
            <span>Next.js, Node.js/Express, FastAPI</span>
          </li>
          <li>
            <strong>Data</strong>
            <span>PostgreSQL, Prisma, Supabase</span>
          </li>
          <li>
            <strong>Web3</strong>
            <span>Hardhat, ethers.js</span>
          </li>
          <li>
            <strong>Tooling</strong>
            <span>GitHub Actions</span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          I&apos;m a third-year Computer Science student at Federal University
          of Technology Minna (FUTMinna), Nigeria. I started with HTML, CSS and
          Python and now build full-stack apps. Roomly is my main project, and
          I&apos;m now building Watchdocs, a GitHub Action and CLI that opens
          PRs with docs updates. I run Roomly myself: frontend, backend,
          payments and support. I learn by shipping something and fixing what
          breaks. I work across web2 and web3, with Solidity and DeFi tooling
          alongside the web stack. I also write about SEO at{" "}
          <a href={SITE.seoSite} target="_blank" rel="noopener noreferrer">
            brightjasper.com
          </a>
          .
        </p>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>
          For roles, collaborations or questions, email{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. More ways to reach
          me are on the <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </>
  );
}
