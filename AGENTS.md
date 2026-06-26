# AGENTS.md

This repository is the public portfolio web project for job applications.

## Repository Visibility

- This repository is intended to be a public GitHub repository under `shjeon-96/portfolio-web`.
- Treat every committed file as publicly visible by default.
- Do not commit secrets, private company details, internal URLs, private issue or PR numbers, customer names, unpublished operating data, or confidential source snippets.
- If a detail is useful for portfolio storytelling but not safe to publish, rewrite it into an anonymized product-engineering summary before committing.
- Vercel production deploys should be safe to share in resumes, job applications, GitHub profile links, and hiring platforms.

## Product Direction

- Theme: Product Console Portfolio / Engineering Ledger.
- Deployment target: Vercel.
- Framework: Next.js, React, TypeScript, Tailwind CSS.
- Primary goal: show product engineering evidence through case studies, engineering changelog, and AI workflow.

## Content Safety

- Do not expose private company source code.
- Do not expose internal API paths, operating URLs, auth tokens, customer names, private issue numbers, PR numbers, or branch names.
- Rewrite commit-based entries into public-safe problem, approach, result summaries.
- Prefer anonymized labels such as B2B no-code web builder, commerce site builder, engineering changelog, and deployment pipeline.

## Design Rules

- The site should feel like a calm B2B SaaS console, not a personal blog or animated landing page.
- Keep the first screen focused on positioning and proof.
- Changelog entries should read as engineering decisions, not activity counts.
- Case studies must use Problem, Role, Approach, Result, and Verification.
- Avoid nested cards, excessive decoration, terminal-themed visuals, and commit graph gimmicks.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Git

- Local GitHub account: `shjeon-96`.
- Commit convention: `feat | fix | refactor | test | docs | chore`.
