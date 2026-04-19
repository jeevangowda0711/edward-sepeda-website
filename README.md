# Mixed Meaning — Website

Marketing site for **Mixed Meaning**, cocktail experiences and hospitality led by **Edward Sepeda** (owner & curator): private events, classes, and consulting grounded in sensory craft.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** + **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router** for `/`, `/booking`, and `/gallery`
- **Motion** for lightweight page fades
- **Lucide React** icons

Contact and booking flows use **`mailto:`** submissions (guests compose mail in their default email app); there is no backend or database in this project.

## Prerequisites

- **Node.js** 20+ recommended

## Setup

```bash
npm install
npm run dev
```

The dev server listens on port **3000** by default (`http://localhost:3000`). See `package.json` scripts to change host/port.

## Scripts

| Command       | Purpose                          |
| ------------- | -------------------------------- |
| `npm run dev` | Local development with HMR       |
| `npm run build` | Production bundle in `dist/`    |
| `npm run preview` | Serve `dist/` locally       |
| `npm run lint` | `tsc --noEmit` typecheck        |
| `npm run clean` | Remove `dist/`               |

## Project layout

| Path | Role |
| ---- | ---- |
| `src/constants.ts` | Brand strings, contact email, teaser video ID |
| `src/data/gallery.ts` | Gallery items (`placeholder` / `image` / `youtube`) |
| `src/pages/` | Route screens |
| `src/components/` | Navbar, footer, scroll helper |
| `public/` | Static assets (e.g. portrait image, `robots.txt`) |

### Gallery

Edit `src/data/gallery.ts` to swap placeholders for:

- **`image`** entries — local paths under `/` in `public/` work well (e.g. `/gallery/01.jpg`).
- **`youtube`** entries — official iframe embed only (`videoId` field); renders the same embed pattern as the home teaser.

### Contact email

Central address: **`src/constants.ts`** (`CONTACT_EMAIL`). Update once if the client’s inbox changes.

### SEO / social meta

`index.html` contains meta tags, Open Graph/Twitter fields, canonical URL, and JSON-LD. **Replace `https://mixedmeaning.com/`** with the real production origin (canonical, `og:url`, and any absolute image URLs when you add `og:image`) before launch.

### Environment

There are **no runtime secrets** in this static app. Optional: set `DISABLE_HMR=true` when running Vite dev if you need to suppress HMR for a specific tooling setup (see `vite.config.ts`).

### Asset naming

Prefer short, ASCII filenames under `public/` (e.g. `edward-sepeda-portrait.png`) so builds and CDN paths stay predictable across operating systems.

## Deploy

Build artifacts are plain static files:

```bash
npm run build
```

Deploy `dist/` to Netlify, Vercel, Cloudflare Pages, S3+CloudFront, or any static host; configure SPA fallback so client routes (`/booking`, `/gallery`) resolve to `index.html`.

## License / rights

© Edward Sepeda / Mixed Meaning — site content belongs to the client; keep repository access appropriate for production deployment.
