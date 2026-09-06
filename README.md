# Portfolio

Personal portfolio site, built with Next.js (App Router) + TypeScript.

Implements the "Burn Book" direction (`4a`) from the Claude Design handoff in
[`design/`](./design) — a photocard-collage scrapbook aesthetic (hot pink +
red, taped prints, star stickers, marker scrawl). See `design/README.md` and
`design/chats/` for the full design history and the other mockup directions
that weren't built.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Filling in your content

The page ships with clearly labeled placeholders — swap these in `app/page.tsx`:

- Name, tagline, and bio in the hero section
- `[ your photo — print like a photocard ]` and the four "figure" boxes under
  "THE DESK CREW" — replace with `<img>` tags pointing at real photos
- The three project cards (name, description, tags, repo link)
- `RESUME PDF` link — drop a `resume.pdf` into `public/`
- Contact links (email, GitHub, LinkedIn) in the closing banner

## Deploying

This is a standard Next.js app — push to GitHub and import the repo on
[Vercel](https://vercel.com/new), or run `npm run build && npm start` anywhere
that supports Node.
