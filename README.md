# Portfolio Web

Public portfolio website for job applications.

## Direction

This site uses a Product Console Portfolio / Engineering Ledger theme.

The first public version should include:

- Home
- Implementation Evidence / Case Studies
- Engineering Changelog
- AI Workflow
- Skills
- About
- Public Resume page

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Local Workflow

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run precommit:verify
```

The combined check runs:

```bash
npm run lint
npm run test
npm run build
npm run check:public-safety
npm run check:routes
```

## Deployment

Deploy with Vercel.

- Production branch: `main`
- Build command: `npm run build`
- Initial version should not require environment variables.
