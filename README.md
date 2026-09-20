# Portfolio: Next.js + Tailwind CSS

A single-page developer portfolio with a sticky intro column, scroll-aware nav,
cursor spotlight and hover cards. Fully responsive (phone, tablet, desktop).

**Stack:** Next.js (App Router, TypeScript) · Tailwind CSS v4 · Inter (self-hosted via Fontsource) · deployed on Vercel

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

## Make it yours

All content lives in `data/`, so you rarely need to touch a component.

| File                | What to edit                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `data/site.ts`      | Name, title, tagline, SEO description, social links, résumé path     |
| `data/experience.ts`| Jobs: dates, role, company, link, description, skill tags           |
| `data/projects.ts`  | Projects: title, link, description, tags, optional "installs" stat   |
| `data/writing.ts`   | Articles: year, title, link                                         |
| `components/sections/About.tsx` | Your About paragraphs (plain JSX)                        |

**Images.** Projects and articles show gradient placeholders until you add a
screenshot. Put the file in `public/images/` and set, for example:

```ts
image: { src: "/images/weather-atlas.png", alt: "Weather Atlas dashboard" },
```

**Résumé.** Put your PDF at `public/resume.pdf` (path is set in `data/site.ts`).

**Colors and fonts.** The palette is Tailwind's built-in `slate` and `teal`
scales. The font stack is set in `app/globals.css` under `@theme`.

**Favicon.** Replace `app/icon.svg`.

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave the defaults. Vercel detects Next.js and needs no extra configuration.
4. Click **Deploy**. Every push to the main branch redeploys automatically.

Prefer the command line?

```bash
npx vercel          # preview deployment
npx vercel --prod   # production deployment
```

To use your own domain, add it under **Project → Settings → Domains**.

## Project structure

```
app/
  layout.tsx        Metadata, font import, page shell
  page.tsx          Composes header + sections
  globals.css       Tailwind import, theme, custom variants
components/
  Header.tsx  Nav.tsx  SocialLinks.tsx  Spotlight.tsx  Footer.tsx
  Section.tsx  Card.tsx  TitleLink.tsx  Tag.tsx  Thumb.tsx ...
  sections/         About, Experience, Projects, Writing
data/               Your content
public/             Static files (images, résumé)
```

`Nav.tsx` and `Spotlight.tsx` are the only client components; everything else is
rendered on the server and the page is statically generated.

## Credit

Layout inspired by [brittanychiang.com](https://brittanychiang.com/). All
placeholder text and names are fictional. Replace them with your own.
