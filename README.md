# amirhesp.github.io

Personal site — a single static page. Built with [Astro](https://astro.build)
and Tailwind CSS, deployed to GitHub Pages.

## Running it locally

Requires Node 22 (see `.nvmrc`):

```bash
nvm use
npm install
npm run dev      # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with live reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve `dist/` exactly as it will be deployed |

## Editing the content

Everything on the page — bio, experience, projects, skills, education, links —
lives in **`src/data/profile.ts`**. Edit that file; no markup changes needed.

To add a project, append to the `projects` array:

```ts
{
  name: 'Project name',
  blurb: 'One or two sentences about what it does.',
  tech: ['Kotlin', 'Room'],
  url: 'https://...',   // optional — omit and use `note` instead if not public
}
```

Replacing `public/resume.pdf` updates the résumé download.

## Deploying

Push to `main`. GitHub Actions builds the site and publishes it — nothing else
to run.

Repo settings must have **Settings → Pages → Source = GitHub Actions**.

### Attaching a custom domain later

1. Buy the domain.
2. Point DNS at GitHub Pages (`A` records to GitHub's IPs, or a `CNAME` to
   `amirhesp.github.io`).
3. Settings → Pages → Custom domain, then tick **Enforce HTTPS**.
4. Update `site` in `astro.config.mjs` to the new URL.
