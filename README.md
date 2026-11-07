# dev.brightjasper.com

Server-rendered, statically generated Next.js site. Every page is plain HTML at build time.

## Run it

```bash
npm install
npm run dev     # local at http://localhost:3000
npm run build   # production build
```

## Add a project

Create one file in `content/projects/`, for example `my-project.mdx`:

```mdx
---
title: My Project
summary: One sentence on what it is.
category: Web Apps        # Web Apps | AI & Evals | Tools | Web3
tags: [Next.js, Postgres]
status: Live              # Live | Beta | In progress | Planned | Completed
featured: false           # true shows it on the homepage
live: https://example.com # optional
repo: https://github.com/Aura-pix/my-project  # optional
image: /projects/my-project/cover.png         # optional, put the file in public/
imageWidth: 1600          # required when image is set
imageHeight: 900
date: 2026-12
---

## The problem
## What I built
## Stack
## Decisions and fixes
## Status
```

Push to GitHub and Vercel deploys it. The card, the page, the category tab and the
sitemap entry all come from that one file. A category tab appears when it has a project.

## Before launch

- Confirm the `date` on each project (marked `TODO confirm`).
- Drop your resume at `public/resume.pdf`.
- Check `personId` in `lib/site.ts` matches the Person schema @id on brightjasper.com.

## Retire the old Web3 site

Redirect `blockchain.brightjasper.com` and `0xaurora.vercel.app` to
`https://dev.brightjasper.com/projects/category/web3` with a permanent (301) redirect, so old links keep working.

## Deploy on a subdomain

1. Push this folder to a GitHub repo and import it in Vercel.
2. In Vercel, add the domain `dev.brightjasper.com`.
3. In Cloudflare, add a CNAME for `dev` pointing to `cname.vercel-dns.com` (DNS only, grey cloud).
4. Add `dev.brightjasper.com` as a property in Google Search Console and submit `/sitemap.xml`.
