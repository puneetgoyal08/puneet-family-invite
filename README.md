# Puneet & Nidhi — family invitation

The copy of the wedding invitation that Puneet's parents send to relatives. It was cloned from
[ivory-sage-invites](https://github.com/puneetgoyal08/ivory-sage-invites) (the couple's own
invitation) and differs in three ways: the opening page says who the invitation is from, Puneet's
name comes first throughout, and the hero line speaks for the parents.

Everything else — events, travel, gallery — lives in `src/config/wedding.ts`.

## Develop

```bash
npm i --legacy-peer-deps
npm run dev
```

## Deploy

Vercel builds it with `npm run build` and serves `dist/client` (see `vercel.json`). Pushes to
`main` also publish a copy to GitHub Pages through `.github/workflows/deploy-pages.yml`.
