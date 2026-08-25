# TRIGRAMS Studio — offer site

Marketing site for TRIGRAMS Studio (Alex Oliver, Perth WA). Marketing systems for small businesses, in four phases: get found (website, from $500, live in 14 days) → never lose an enquiry (follow-up) → stay in front of them (content marketing) → reach more people (Meta ads).

**Live:** www.trigrams.studio (Vercel project `trigrams-studio-website-offer`)

## Stack

Plain static HTML/CSS/JS — no framework, no build step. Deployed on Vercel.

| File | Purpose |
|---|---|
| `index.html` | Conversion landing page (hero → build demo → ladder → proof → FAQ → founder → blog/newsletter → CTA) |
| `clients.html`, `case-studies.html`, `how-it-works.html`, `about.html`, `enquiry.html` | Dedicated pages |
| `privacy.html`, `disclaimer.html`, `404.html` | Legal + error pages (ABN 85 714 298 118) |
| `styles.css` | All styles, shared across pages. Brand tokens in `:root` |
| `site.js` | All data + behaviour. Content lives in data blocks at the top: `CLIENTS`, `CASE_STUDIES`, `SERVICE_STEPS`, `PROCESS_STEPS` |
| `vercel.json` | Security headers (CSP, HSTS, frame denial, etc.) |

## Editing content

- **Client list / case studies / pricing ladder / build-demo steps** — edit the arrays at the top of `site.js`. Markup renders from them.
- **Page copy** — directly in each HTML file.
- **Blog posts** — placeholder cards in `index.html` (`#blog` section); swap text + add links when real posts exist.
- **Forms** — all three (enquiry, newsletter bar, popup) post to Formspree `meewzagj` with honeypot spam protection. Popup shows once per 7 days per visitor (localStorage), never after subscribing, never on enquiry/legal/404 pages.

## Deploying

```bash
vercel          # preview
vercel --prod   # production
```

`vercel.json` sets the CSP — **if you add a new external script/font/media host, add it to the CSP or it will be blocked.**

## Next phases / roadmap

### Phase: client portal (planned)
Login-protected portal where clients see reports, live data, and stats.

Recommended approach when the time comes:
- **Keep this site as-is** (static marketing site is fast and simple). Build the portal as a **separate app** on a subdomain, e.g. `portal.trigrams.studio` — separate Vercel project, no risk to the marketing site.
- **Stack suggestion:** Next.js (App Router) on Vercel + **Clerk** for auth (native Vercel Marketplace integration, magic-link/email login suits non-technical clients) + a Marketplace Postgres (Neon) for data.
- **Data sources to pipe in:** Vercel Analytics per client site, MailerLite/ConvertKit campaign stats (both have APIs), form submission counts, uptime.
- **MVP scope:** login → one dashboard page per client → monthly report (the same numbers currently emailed), auto-refreshed. Ship that before building anything fancier.
- Session context already includes Vercel guidance for auth (`vercel:auth` skill) and storage (`vercel:vercel-storage`) when starting this.

### Smaller backlog
- Real blog posts to replace the three placeholder cards (`#blog`), possibly a `/blog/` folder with one HTML page per post.
- UP Dietitian brand colours in the build demo moodboard are guesses (`#7A9B76`, `#F4EFE6`) — replace with her real hexes.
- Case-study stats: verify/update numbers periodically; disclaimer already covers "results vary".
- Newsletter: currently collects emails via Formspree — migrate to MailerLite form/API when sequences are set up, so subscribers land directly in the platform.
- Consider OG image (currently the logo) — a proper 1200×630 card would improve link previews.
- Favicon: `assets/favicon.svg` is a circular-masked wrapper around `Logo.png`; regenerate if the logo changes.
- Legal pages are solid templates but get a solicitor review as revenue grows.

## Notes

- Prices on-site are "from $300" (deliberately not $200) — pricing under review.
- Never position as videography; systems consultant only.
- Voice: plain, direct, confident, human. Short sentences. Talk to "you". Concrete numbers over adjectives.
