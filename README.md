# TRIGRAMS Studio — marketing site

Marketing sites for TRIGRAMS Studio (Alex Oliver, Perth WA). Two sites from one repo and one Vercel project (`trigrams-studio-website-offer`, team `trigramsstudio`):

- **www.trigrams.studio**: the root pages. Landing page, photo and video, lean and quick. Links out to the two offer pages below.
- **ads.trigrams.studio**: the pages in `ads/`. One offer: Meta (Facebook and Instagram) ad campaigns done start to finish, from $4,000 + GST. Run your own ads to this one.
- (website.trigrams.studio, the landing page offer, lives in `trigrams-client-portal`, not here.)

**How the ads site is served:** `middleware.js` (Vercel Routing Middleware) maps `ads.trigrams.studio/`, `/work`, `/what-to-expect`, `/book-a-call`, `/enquiry`, `/robots.txt`, `/sitemap.xml` and `/llms.txt` to the files in `ads/`. Everything else (styles, scripts, assets, privacy, disclaimer, join) is shared. On www, `/ads/*`, `/what-to-expect`, `/meta-ads` and any `/?p=` link redirect to the ads site. `<html data-site="ads">` tells `site.js` which site it's on. It has to be middleware: `vercel.json` rewrites only run when no file matches, and the www pages sit at the same paths. To test a preview as the ads site, `vercel alias set <preview-url> trigrams-ads-preview.vercel.app`.

## Stack

Plain static HTML/CSS/JS. No framework, no build step. Deployed on Vercel.

| File | Purpose |
|---|---|
| `index.html` | www homepage: hero, clients, what you get, how it works, lean and quick, work, about, free resources, FAQ |
| `work.html` | www work: landing pages, videos, photos |
| `book-a-call.html`, `enquiry.html` | www forms: what you need, timing, then Calendly or a written enquiry |
| `ads/` | The ads site: homepage, work + NLPSC case study, what to expect, and its qualifying forms (ad budget questions, "not a fit" path) |
| `join.html` | Job applications |
| `portfolio.html` | **Unlisted, link only.** Photo and video gallery. Generated, see below |
| `privacy.html`, `disclaimer.html`, `404.html` | Legal and error pages (ABN 85 714 298 118) |
| `styles.css` | All styles. Brand tokens in `:root` |
| `site.js` | All behaviour. Pages read fine with no JavaScript |
| `vercel.json` | Security headers (CSP, HSTS, etc.), cache headers, redirects from old URLs |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Search and AI crawler files for www. The ads site has its own copies in `ads/`. Add new public pages to the right sitemap |

## Editing content

- **Page copy:** directly in each HTML file.
- **Ads price:** `PRICES` / `DEFAULT_PRICE` in `site.js`. `?p=2500|3000|4000` on ads.trigrams.studio links tests other prices. Only the ads site uses it.
- **Form subjects** end in `trigrams.studio` or `ads.trigrams.studio`, so the inbox shows which site a lead came from.
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

Saved 22 October 2026, after the security review.

**Soon**
- [ ] **ads.trigrams.studio DNS (Cloudflare):** add a CNAME `ads` → `cname.vercel-dns.com`, DNS only (grey cloud), like the other subdomains. Then add the domain to this Vercel project and check the host rewrites live.
- [ ] **Point your Meta ads at ads.trigrams.studio** (old `www.trigrams.studio/?p=` links redirect there, but direct links are cleaner).
- [x] **Share images:** `assets/og-home.jpg` ("Marketing sitting on your to-do list?") and `assets/og-ads.jpg` ("Meta ads that bring in leads."), 29 Oct. `/assets/` is cached for a year, so a changed image needs a new filename.
- [x] **Merge the portal security updates.** (Both done and live 28 Oct.) Branch `security-updates-2026-10` in `trigrams-client-portal` and `trigrams-onboarding-portal`: Next.js 16.4.2 (critical fixes), Slack escaping, login code rate limit, onboarding headers. Previews are tested. The client portal deploys from `main` to real clients, so log in once afterwards to check.
- [ ] **Meta Pixel ID:** paste it into `META_PIXEL_ID` at the top of `site.js`, then deploy. The loader, the `Lead` event, the CSP and the privacy policy are already in place. No cookie banner on purpose (Australian law only needs notice and opt-out, which the policy gives).
- [ ] **DMARC (Cloudflare DNS):** `_dmarc.trigrams.studio` is `p=none`, which only monitors, so spoofed @trigrams.studio mail isn't blocked. Check the Cloudflare DMARC reports show Outlook, Google, MailerLite and Resend passing, then change it to `p=quarantine` (later `p=reject`).

**When there's time**
- [ ] **CAA record (Cloudflare DNS):** limits which certificate authorities can issue for the domain. List both Vercel's (Let's Encrypt) and Cloudflare's issuers, or certificates will fail to renew.
- [ ] **Vercel Firewall rate limit** on `open.trigrams.studio/api/signup`, as a hard cap on top of the per-address limit in code.
- [ ] **Portfolio labels:** check the guessed ones in `scripts/portfolio.json` ("Merch drop", "On location", "The roastery"), then run `node scripts/portfolio.mjs`.
- [ ] **Old Vercel CLI copy:** Homebrew still has 53.3.1 (`brew uninstall vercel-cli`). The active one is 65.1.0 in `~/.local`. npm also left a stale `~/.local/lib/node_modules/.vercel-2MHBCWGH` folder that breaks future `npm i -g vercel` updates; delete it.

**Ongoing**
- [ ] **security.txt** expires 22 October 2027. Renew the `Expires` date in `.well-known/security.txt` before then.
- Case study numbers: check them now and then. The disclaimer covers "results vary".
- Legal pages: get a solicitor to review them as revenue grows.
- Favicon: `assets/favicon.svg` is a circular-masked wrapper around `Logo.png`. Regenerate it if the logo changes.

## Voice

Plain, direct, human. Short sentences. Talk to "you". Concrete numbers over adjectives. Say "1 point of contact", never "one person".
