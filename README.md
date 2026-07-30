# ProFix & Shine

Marketing website for **ProFix & Shine** — a professional cleaning and property services business based in Luton, UK.

**Tagline:** *Fixing with Precision, Cleaning to Perfection*

**Live site:** [profixandshine.co.uk](https://www.profixandshine.co.uk)

---

## Overview

A modern, SEO-focused business website built with Next.js 14. It showcases four core services, captures leads through a contact form, and is optimised for local search in Luton and surrounding Bedfordshire areas.

### Services

- Painting & Decorating
- Garden & Ground Cleaning
- Window Cleaning
- Jet Wash

### Service area

Based at **Wimborne Road, Luton, LU1 1PD**, serving **Luton, Dunstable, Bedford, St Albans & nearby towns**.

---

## Features

- **Homepage** with animated service carousel hero, stats, services grid, before/after recent work slider, testimonials, blog preview, and CTA banner
- **Service pages** with hero, features, process steps, FAQs, before/after comparisons, and related services
- **Blog** with static MDX-style content and individual post pages
- **Contact page** with validated form (React Hook Form + Zod), business info, and embedded map
- **About, Terms, Privacy Policy**, and custom **404** page
- **SEO & structured data** — per-page metadata, Open Graph, Twitter cards, LocalBusiness / Service / FAQ JSON-LD
- **Sitemap & robots.txt** generated automatically on build via `next-sitemap`
- **Accessibility & UX** — responsive layout, reduced-motion support, cookie consent, floating WhatsApp button
- **Optional Google Analytics** via environment variable

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Fonts | Montserrat (headings), Inter (body) via `next/font` |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). **Turbopack** is the default bundler in Next.js 16 — no extra flags needed.

### Production build

```bash
npm run build
```

This generates a static site in the **`out/`** folder (HTML, assets, sitemap, and robots.txt). Upload the contents of `out/` to your web host, or point Hostinger’s output directory to `out`.

To preview locally after building, use any static file server, for example:

```bash
npx serve out
```

### Lint

```bash
npm run lint
```

---

## Environment variables

Create a `.env.local` file in the project root:

```env
# Optional — enables Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional — overrides sitemap base URL (defaults to https://www.profixandshine.co.uk)
SITE_URL=https://www.profixandshine.co.uk
```

---

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── blog/               # Blog listing + [slug] posts
│   ├── contact/
│   ├── services/           # Services hub + individual service pages
│   ├── privacy-policy/
│   ├── terms/
│   └── not-found.tsx
├── components/
│   ├── contact/            # Contact form, info, map
│   ├── layout/             # Navbar, Footer, Logo, CookieConsent, WhatsApp
│   ├── sections/           # Homepage sections (Hero, Stats, RecentWork, etc.)
│   ├── services/           # Service page building blocks
│   └── ui/                 # Reusable UI primitives (Button, Card, etc.)
├── styles/
│   └── globals.css         # Tailwind layers + design utilities
├── types/                  # Shared TypeScript interfaces
└── utils/
    ├── constants/          # Services, blog posts, SEO, testimonials, etc.
    └── helpers/            # SEO helpers, animations, cn utility
```

---

## Configuration

Most site content lives in `src/utils/constants/`:

| File | Purpose |
|------|---------|
| `seo.ts` | Company info, address, service area, default SEO |
| `services.ts` | Service definitions, features, FAQs, before/after images |
| `testimonials.ts` | Customer testimonials |
| `recentWork.ts` | Homepage before/after showcase projects |
| `blogPosts.ts` | Blog articles |
| `navigation.ts` | Header and footer links |
| `faqs.ts` | Why Choose Us and general FAQ content |

Update **`companyInfo`** in `seo.ts` to change phone, email, address, or service area in one place — it propagates to the footer, contact page, map, and JSON-LD schema.

---

## Design system

Brand colours and tokens are defined in `tailwind.config.ts`:

- **Navy** `#0A2A6B` — primary text / brand dark
- **Royal** `#156FEA` — primary accent
- **Cyan** `#24C7FF` — secondary accent
- **Page** `#F4F8FC` — background

Surface styling uses border + inset ring utilities (`card-surface`, `card-surface-hover`) instead of heavy drop shadows for a cleaner, modern look.

---

## Deployment

### Hostinger (static site — `out` folder)

This app is configured for **static export**. `npm run build` writes the production site to the **`out/`** directory.

#### Build locally or on Hostinger

| Setting | Value |
|---------|--------|
| Node.js version | **20** (or 22) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| **Output directory** | **`out`** |

Upload or publish everything inside `out/` as your website root (including `_next/`, `index.html`, etc.).

#### Environment variables (build time)

| Variable | Example | Required |
|----------|---------|----------|
| `SITE_URL` | `https://www.profixandshine.co.uk` | Yes (sitemap & canonical URLs) |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | No |

Set these before running `npm run build` so `postbuild` generates the correct sitemap in `out/`.

#### Verify before upload

```bash
npm ci
npm run build
npx serve out
```

Open [http://localhost:3000](http://localhost:3000) and check `/sitemap.xml`.

---

### Hostinger (Node.js Web Apps — optional)

If you prefer a Node server instead of static files, remove `output: "export"` from `next.config.mjs`, then use:

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Start command | `npm run start -- -p $PORT` |
| Output directory | `.next` |

---

### Other hosts

The site can also run on Vercel, Netlify, or any Node.js host using `npm run build` and `npm start`. Set `SITE_URL` to your production domain.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Static export to `out/` + sitemap generation |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## License

Private project — all rights reserved.
