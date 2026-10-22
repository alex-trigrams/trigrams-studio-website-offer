# TRIGRAMS Studio — marketing site

Marketing site for TRIGRAMS Studio (Alex Oliver, Perth WA). One offer: Meta (Facebook and Instagram) ad campaigns done start to finish, from $4,000 + GST.

**Live:** www.trigrams.studio (Vercel project `trigrams-studio-website-offer`, team `trigramsstudio`)

## Stack

Plain static HTML/CSS/JS. No framework, no build step. Deployed on Vercel.

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, clients, how it works, the campaign and price, what's included, ad budget, ads, about, free resources, FAQ |
| `work.html`, `what-to-expect.html` | The ads and NLPSC case study; how a campaign runs |
| `book-a-call.html`, `enquiry.html` | The qualifying form (same questions on both), then Calendly or a written enquiry |
| `join.html` | Job applications |
| `portfolio.html` | **Unlisted, link only.** Photo and video gallery. Generated, see below |
| `privacy.html`, `disclaimer.html`, `404.html` | Legal and error pages (ABN 85 714 298 118) |
| `styles.css` | All styles. Brand tokens in `:root` |
| `site.js` | All behaviour. Pages read fine with no JavaScript |
| `vercel.json` | Security headers (CSP, HSTS, etc.), cache headers, redirects from old URLs |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Search and AI crawler files. Add new public pages to the sitemap |

## Editing content

- **Page copy:** directly in each HTML file.
- **Price:** `PRICES` / `DEFAULT_PRICE` in `site.js`. `?p=2500|3000|4000` on ad links tests other prices.
- **Structured data (JSON-LD):** generated. Run `node scripts/prerender.mjs` after changing a page title, description, the homepage FAQ or the business facts in that script. `--check` reports pages that are out of date.
- **Forms:** post to Formspree `meewzagj` with a honeypot field.

## The portfolio page (`/portfolio`)

Not linked anywhere on the site, not in the sitemap, and marked noindex (meta tag plus an `X-Robots-Tag` header). Share the link directly.

```bash
scripts/add-photos.sh "<folder of photos>" <set-slug>   # web-size copies into assets/stills/<set-slug>/
# add the set (and any reels) to scripts/portfolio.json
node scripts/portfolio.mjs                              # rebuilds portfolio.html
```

In `portfolio.json`, `featured` puts photos first in a set, `hide` leaves them out, `show` sets how many show before "Show all", and `highlights` picks the big photos under the hero.

## Media

- `assets/reels/<id>.mp4`: silent 8-second previews (autoplay in view). `assets/reels/full/<id>.mp4`: 540p with sound, loaded only when tapped. `<id>-poster.jpg`: the first frame.
- `assets/stills/<set>/` full size (1600px long edge), `thumb/` for grids (700px).
- Re-encode before adding any video with ffmpeg. Never commit originals. `assets/` is cached for a year, so give a changed file a new name if visitors must see the new version straight away.
- `assets/signature/` and `assets/email-icons/` are not used by pages. They are hosted for email signatures and HTML emails. Keep them.

## Deploying

```bash
vercel deploy --prod --yes
```

`vercel.json` sets the CSP. **If you add a new external script, font or media host, add it to the CSP or it will be blocked.**

## To do

- **Meta Pixel ID:** paste it into `META_PIXEL_ID` at the top of `site.js`, then deploy. The loader, the `Lead` event, the CSP and the privacy policy are already in place. No cookie banner on purpose (Australian law only needs notice and opt-out, which the policy gives).
- Case study numbers: check them now and then. The disclaimer covers "results vary".
- Legal pages: get a solicitor to review them as revenue grows.
- Favicon: `assets/favicon.svg` is a circular-masked wrapper around `Logo.png`. Regenerate it if the logo changes.

## Voice

Plain, direct, human. Short sentences. Talk to "you". Concrete numbers over adjectives. Say "1 point of contact", never "one person".
