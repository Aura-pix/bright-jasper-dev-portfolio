# dev.brightjasper.com

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-orange?logo=vercel)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Live Website**: [https://dev.brightjasper.com](https://dev.brightjasper.com)  
> The personal engineering portfolio and technical case study platform of **Bright Jasper**, Software Engineer.

---

## Overview

`dev.brightjasper.com` is a fast, statically generated (SSG) portfolio engineered with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **MDX**.

Designed with an editorial, minimalist aesthetic and powered by IBM Plex typography, every page is pre-rendered to plain HTML at build time. It serves as a living archive of production applications, distributed backend services, Web3 smart contracts, and developer tooling.

---

## Key Highlights

- **⚡ Blazing Fast Static Generation (SSG)**: Built entirely with Next.js static export/prerendering. Near-instant page transitions, zero client-side layout shifts, and perfect Lighthouse performance scores.
- **📄 Content-Driven MDX Architecture**: Case studies are authored in MDX with rich frontmatter (`gray-matter` + `next-mdx-remote`), rendering clean prose, architecture decisions, and code blocks without database overhead.
- **🏷️ Dynamic Filtering & Categorical Routing**: Projects are classified across categories (`Web Apps`, `AI & Evals`, `Tools`, `Web3`). Category tabs are dynamically computed and rendered only when projects exist within them.
- **🔍 Machine-Readable SEO & AI Search Optimization**:
  - Semantic HTML5 markup paired with **Schema.org JSON-LD** (`Person` and `SoftwareSourceCode` schemas).
  - Unifies web entity identity with [brightjasper.com](https://brightjasper.com) via canonical `@id` graph references.
  - Automatically generated `sitemap.xml` and `robots.txt` ensuring full discoverability by search engines and LLM crawlers.
- **🎨 Bespoke Design System**: Built with hand-crafted CSS variables, zero runtime CSS-in-JS dependencies, and responsive layouts tailored for mobile, tablet, and desktop readers.

---

## Featured Projects Showcased

| Project | Category | Tech Stack | Status | Highlights |
| :--- | :--- | :--- | :--- | :--- |
| **[Roomly](https://roomly.com.ng)** | Web Apps | Next.js, Express, TypeScript, PostgreSQL, Prisma, Monnify | **Beta** | Student housing marketplace with 20-min unit locks, automated escrow payments, verified listings, and roommate matchmaking. |
| **[Flash Loan Arbitrage Bot](https://github.com/Aura-pix/flash-loan-arb-bot)** | Web3 | Solidity, Balancer V2, Hardhat, ethers.js, TypeScript | **Testnet** | On-chain arbitrage contract with off-chain DEX scanner. Executes atomic loans and trades between Uniswap V2 and SushiSwap. |
| **[Noel's Essentials](https://github.com/Aura-pix/noels-essentials-repo)** | Web Apps | Next.js, JavaScript, WhatsApp API | **Live** | Single-page e-commerce storefront with client-side cart and automated WhatsApp checkout, designed and shipped in 24 hours. |
| **[Watchdocs](https://dev.brightjasper.com/projects/watchdocs)** | Tools | GitHub Actions, CLI, OpenAPI, LLMs | **Planned** | Autonomous documentation agent that analyzes git diffs, updates stale guides/error docs, and opens non-destructive review PRs. |

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Content Engine**: [MDX](https://mdxjs.com/) via `next-mdx-remote` & `gray-matter`
- **Typography**: `@fontsource/ibm-plex-sans` & `@fontsource/ibm-plex-mono`
- **Styles**: Native CSS3 with CSS Custom Properties
- **Deployment**: [Vercel](https://vercel.com/) with Cloudflare DNS management

---

## Project Structure

```text
dev-brightjasper/
├── app/                              # Next.js App Router routes & layouts
│   ├── contact/                      # Contact page (/contact)
│   ├── projects/                     # Projects directory
│   │   ├── [slug]/                   # Dynamic MDX case study page (/projects/:slug)
│   │   ├── category/[category]/      # Filtered category page (/projects/category/:category)
│   │   └── page.tsx                  # All projects index (/projects)
│   ├── resume/                       # Web resume view & download trigger (/resume)
│   ├── global-error.tsx              # Turbopack & App Router error boundary
│   ├── globals.css                   # Custom CSS variables, typography & layout styles
│   ├── layout.tsx                    # Root layout with Person JSON-LD & navigation
│   ├── page.tsx                      # Homepage featuring bio & selected projects
│   ├── robots.ts                     # Dynamic robots.txt generation
│   └── sitemap.ts                    # Dynamic XML sitemap generator
├── components/                       # Shared UI components
│   └── ProjectEntry.tsx              # Changelog-style project list row
├── content/                          # Static content repository
│   └── projects/                     # MDX project case studies
│       ├── flash-loan-arb-bot.mdx
│       ├── noels-essentials.mdx
│       ├── roomly.mdx
│       └── watchdocs.mdx
├── lib/                              # Core utilities & domain logic
│   ├── projects.ts                   # MDX loader, slug parser, filtering & sorting
│   └── site.ts                       # Site constants, metadata, social URLs, and categories
├── public/                           # Static assets & downloadable documents
│   └── resume.pdf                    # Downloadable developer resume
├── next.config.mjs                   # Next.js & Turbopack root configuration
├── package.json                      # Dependencies and npm scripts
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.18+ or v20+) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aura-pix/dev-brightjasper.git
   cd dev-brightjasper
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run start
   ```

---

## Publishing Content

New case studies are created by dropping a new `.mdx` file into `content/projects/`:

```mdx
---
title: "Project Name"
summary: "High-impact description of the engineering project."
category: "Web Apps" # Web Apps | AI & Evals | Tools | Web3
tags: [Next.js, TypeScript, PostgreSQL]
status: "Live" # Live | Beta | In progress | Planned | Completed | Testnet
featured: true # Displays on the home page when true
date: "2026-11" # YYYY-MM
---

## The problem
What friction or inefficiency was addressed.

## What I built
Architecture overview and core capabilities.

## Stack
Technologies, libraries, and infrastructure used.

## Decisions and fixes
Engineering trade-offs, edge cases, and optimizations.

## Status
Current deployment stage and roadmap.
```

The system automatically generates the route `/projects/:slug`, registers the project in `/projects`, creates category tabs, and updates `/sitemap.xml`.

---

## Author & Contact

**Bright Jasper**  
*Software Engineer | Full-Stack, AI & Web3*

- **Website**: [dev.brightjasper.com](https://dev.brightjasper.com)
- **Personal & SEO**: [brightjasper.com](https://brightjasper.com)
- **GitHub**: [@Aura-pix](https://github.com/Aura-pix)
- **LinkedIn**: [bright-jasper-20a8223b3](https://linkedin.com/in/bright-jasper-20a8223b3)
- **X (Twitter)**: [@brightjasp](https://x.com/brightjasp)
- **Email**: [hello@brightjasper.com](mailto:hello@brightjasper.com) / [brghtjasper@gmail.com](mailto:brghtjasper@gmail.com)

---

## License

This project is open-source and available under the [MIT License](LICENSE).
