# How to hand this to Claude Code

## The short version

Don't paste the business context into chat. Put it in the repo. Claude Code reads files, and anything in a file survives the session ending, the context filling up, and you coming back in three weeks.

Three steps, about 10 minutes of setup.

---

## Step 1: put four files in the repo

```
your-website-repo/
  CLAUDE.md                      <- update this
  docs/
    WEBSITE-BRIEF.md             <- the brief
    anti-ai-writing-style.md     <- copy from ABOUT ME/
    Trigrams-Brand-Kit.md        <- copy from PROJECTS/Waterford.../\_BRAND-TRIGRAMS/
```

The brief is the one-off job. `CLAUDE.md` is standing context that gets read on every future session. The other two need to be in the repo because Claude Code can't see your Dropbox folder.

---

## Step 2: add this to CLAUDE.md

Merge it in if the file already exists. Keep whatever's in there about the stack, build commands and deploy.

```markdown
## What this business is

TRIGRAMS Studio (always plural, capitalised) builds growth systems for small and
mid-size businesses in Perth, WA.

Promise: we build predictable systems that generate attention, leads and conversions.

Clients buy leads, growth, revenue and time back. They do not buy websites, reels,
landing pages or automations. Those are the tooling.

The system has four layers: Attention, Traffic, Conversion, Follow up.

## How the work gets done

A network of specialists. Alex is the single point of contact and is accountable
for the outcome. He does not personally do every task, and the site says so.

Never write copy that implies Alex personally delivers everything. Never write
capacity language: no waitlists, no "at capacity", no "limited spots". The model
buys capacity rather than rationing it.

Never label which specific layers are partner-delivered. That's internal.

## Hard site rules

- The only price on the site is "Projects from $5,000". It appears twice at most.
- Never price an individual layer or service. Never rebuild a package or tier table.
  The old ladder ($200 site, $500-800 follow-up, $150-200 retainer, $1,500-2,500
  sprint) is retired and is not coming back.
- Services are never a menu of separate things to pick from.
- Video is Layer 1 fuel. No video page, no video nav item, no standalone video offer.
- Primary CTA everywhere is "book a discovery call". The word "quote" appears nowhere.

## Claims and proof

Only one client result is real and usable: 54 enquiries in 30 days for a Perth gym
at $6.28 each.

Pulse Property Group and Waterford Wellness Centre appear as process descriptions
only, with zero performance claims. Their trackers are empty. Do not write lead
counts, cost per lead, reach, follower growth or conversion rates for either.
Do not use RateMyAgent reviews as testimonials.

If a number isn't in docs/WEBSITE-BRIEF.md, it doesn't exist. Ask, never estimate.

## Writing rules

Follow docs/anti-ai-writing-style.md. The ones that get broken most:
- No em dashes.
- No negative parallelism. Never "it's not about X, it's about Y."
- Sentence case headers.
- Contractions, digits for numbers, short paragraphs.

Voice: a partner sitting next to you, not an agency pitching at you. Plain English,
specific numbers, direct.

Never use: unlock, leverage, synergy, transform, elevate, game-changer, bespoke,
world-class.

## Design system

Tokens in docs/Trigrams-Brand-Kit.md. Red #D92B1B, cream #F7F2EA, ink #1A1A1A.
Archivo headings, Inter body. Radius 10 buttons, 16 cards. 8px spacing grid.

This is a content and IA change, not a redesign. Reuse existing components.
```

---

## Step 3: the prompts, in order

### Prompt 1, the audit

```
Read CLAUDE.md and docs/WEBSITE-BRIEF.md first.

Then audit the current site against the brief. Go through the actual page
components and tell me, file by file:

1. Which components can be reused with new copy only
2. Which need structural changes
3. Which should be deleted
4. What's missing that the new structure needs

Give me that as a plan with a file list. Do not write any code yet.
```

### Prompt 2, the positioning line

Do this one on its own, before any page work. It's the most important sentence on the site and it'll get rushed if it's bundled into a page build.

```
Write 5 options for the line that replaces "One person, Perth-based, no handoffs".

It has to carry three things at once: you always deal with one person, that
person isn't personally doing every task, and that's the upside rather than
the compromise.

Follow the writing rules in CLAUDE.md. No negative parallelism, so don't write
"not an agency, a partner" or anything in that shape.

Copy only. No code.
```

### Prompt 3, page by page

```
Approved. Start with the homepage.

Build the new section order from the brief. Reuse existing components where the
layout stays. Write the copy following the rules in CLAUDE.md.

Show me the copy for every section before you write any code.
```

Then repeat for The System, then Work, then About. One page per prompt. Review before moving on.

### Prompt 4, the check

Run this at the end, in a fresh session so it isn't marking its own homework.

```
Check the whole site against the Definition of done checklist in
docs/WEBSITE-BRIEF.md. Go item by item and tell me pass or fail with the file
and line for each failure.

Also grep the codebase for em dashes and for any dollar figure other than $5,000.
```

---

## Why this shape

**Plan before code, every time.** You catch a wrong assumption in a paragraph instead of in a 600 line diff.

**One page per prompt.** A whole-site rewrite in one go is unreviewable. You'll approve things you don't actually like because reading it all is exhausting.

**Rules in the repo, not the chat.** CLAUDE.md is read automatically every session. Anything you say in chat is gone when the session ends.

**The final check in a fresh session.** A model that just wrote the copy is the worst judge of whether the copy follows the rules.

---

## The thing most likely to go wrong

Claude Code will want to fill the Work page. It's an obvious gap and models hate obvious gaps, so it'll reach for the RateMyAgent quotes or estimate a plausible-looking lead number for Pulse.

The brief and CLAUDE.md both forbid it, but check that page yourself before it ships. Fabricated results on a marketing site is the one mistake here you can't quietly fix later.

---

## After the build

Pull the real Pulse numbers out of Meta Ads Manager and fill in that tracker. The brief tells Claude Code to build the Pulse block so a results section can drop in without restructuring. Two real case studies is a different website to one.
