import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bright Jasper for software roles, collaborations or questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p className="lead">
        For roles, collaborations or questions, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p>
        You can also reach me at <a href={`mailto:${SITE.altEmail}`}>{SITE.altEmail}</a>,
        on{" "}
        <a href={SITE.x} target="_blank" rel="noopener noreferrer">
          X
        </a>
        ,{" "}
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        or{" "}
        <a href={SITE.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </>
  );
}
