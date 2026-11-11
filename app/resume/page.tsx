import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Bright Jasper, software engineer. Download the PDF or read it online.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p className="muted">Download the PDF or read it below. Updated November 2026.</p>
      <div className="btns">
        <a
          href="/resume.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>

      <h2>Summary</h2>
      <p>
        Software engineer with 3 years of building full-stack web apps in Next.js,
        Node.js, TypeScript and PostgreSQL. Solo developer of Roomly, a student housing
        marketplace in beta for Nigerian universities.
      </p>

      <h2>Projects</h2>
      <h3>Roomly</h3>
      <p className="when">2026 · Solo developer · Beta</p>
      <p>
        Student housing marketplace with first come first served unit locks, escrow
        payments through Monnify, verified caretaker listings and roommate ads. Next.js
        on Vercel, Express and TypeScript on Render, PostgreSQL on Supabase through
        Prisma.
      </p>
      <h3>Noel&apos;s Essentials</h3>
      <p className="when">Client project · Delivered in 24 hours</p>
      <p>
        Single page e-commerce store in Next.js with a cart and WhatsApp order
        placement.
      </p>
      <h3>Flash loan arbitrage bot</h3>
      <p className="when">Tested on Sepolia and an Anvil mainnet fork</p>
      <p>
        Solidity contract using Balancer V2 flash loans, with an off-chain scanner that
        compares Uniswap V2 and SushiSwap prices. Hardhat and ethers.js, with an
        automated test suite.
      </p>

      <h2>Education</h2>
      <h3>B.Tech Computer Science, FUT Minna</h3>
      <p className="when">Third year</p>

      <h2>Skills</h2>
      <p>
        Next.js, React, Node.js, Express, TypeScript, JavaScript, Python, PostgreSQL,
        Prisma, REST APIs, Git, Solidity, ethers.js, Hardhat.
      </p>

      <h2>Links</h2>
      <p>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        ·{" "}
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </div>
  );
}
