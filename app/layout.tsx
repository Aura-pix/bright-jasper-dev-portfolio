import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | Bright Jasper" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: { card: "summary", title: SITE.title, description: SITE.description },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": SITE.personId,
  name: "Bright Jasper",
  url: SITE.url,
  jobTitle: "Software Engineer",
  email: SITE.email,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Federal University of Technology, Minna" },
  knowsAbout: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "SEO", "AI search"],
  sameAs: [
    SITE.seoSite,
    SITE.github,
    SITE.linkedin,
    SITE.x,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">
              Bright Jasper
            </Link>
            <nav className="nav" aria-label="Main">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              Elsewhere:{" "}
              <a href={SITE.seoSite} target="_blank" rel="noopener noreferrer">
                SEO
              </a>
            </p>
            <p>© 2026 Bright Jasper</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
