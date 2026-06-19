# LeadFlow Automation — Claude Code Guide

## What This Project Is
A live inbound business website for Phong's AI automation service business. Customers come to the site, use the free Automation Idea Generator, and submit a contact form to get a quote. Built to generate freelance income without cold outreach.

## Live URLs
- **Production site:** https://leadflowautomation.vercel.app
- **Old URL (still works):** https://leadflow-automation-nine.vercel.app
- **GitHub repo:** https://github.com/hsteven2008/leadflow-automation
- **Vercel dashboard:** https://vercel.com/hsteven2008-1765s-projects/leadflow-automation

## Tech Stack
- Next.js 16.2.7 (App Router, Turbopack)
- TypeScript
- Tailwind CSS
- Deployed on Vercel (auto-deploys on push to `main`/`master`)

## Project Structure
```
app/                        # Next.js App Router pages
  page.tsx                  # Home (LocalBusiness JSON-LD schema)
  services/page.tsx         # Services (8 services + ItemList/Service JSON-LD schema)
  pricing/page.tsx          # 3 pricing tiers + add-ons
  demos/page.tsx            # Demo cards + Automation Idea Generator
  free-tools/page.tsx       # Lead magnet page
  contact/page.tsx          # Contact form
  about/page.tsx            # Brand story
  faq/page.tsx              # 15 FAQ items (FAQPage JSON-LD schema)
  blog/
    page.tsx                # Blog index — add new posts HERE (posts array)
    [slug]/page.tsx         # Post template — add full content HERE (postContent map) + BreadcrumbList schema
  opengraph-image.tsx       # Auto-generated OG image (1200x630) — served at /opengraph-image
  gbp-photo/route.tsx       # GBP business photo (1000x1000) — served at /gbp-photo
  sitemap.ts                # Auto-generated sitemap (18 URLs)
  robots.ts                 # robots.txt — points to vercel sitemap URL
  globals.css               # Tailwind + Google Fonts (Inter)
  layout.tsx                # Root layout, global metadata, OG/Twitter card tags, header/footer

components/                 # 15 reusable components
  Header.tsx                # Nav with mobile hamburger
  Footer.tsx
  Button.tsx
  SectionHeading.tsx
  ServiceCard.tsx
  PricingCard.tsx
  DemoCard.tsx
  FAQAccordion.tsx          # Client component — accordion toggle
  ContactForm.tsx           # Client component — connected to Formspree (working)
  AutomationIdeaGenerator.tsx  # Client component — pure frontend logic, no backend needed
  BlogCard.tsx
  CTASection.tsx
  ProblemCard.tsx
  StepCard.tsx
  LeadMagnetCard.tsx
  ROICalculator.tsx         # Client component — slider-based calculator
```

## How to Run Locally
```bash
cd "Leadflow Automation"
npm install
npm run dev       # http://localhost:3000
npm run build     # production build check
npm run lint
```

## Deploy to Production
```bash
vercel --prod --yes
```
Or just push to GitHub — Vercel auto-deploys on every push.

### ✅ Alias resolved (June 12, 2026)
`leadflowautomation.vercel.app` was previously a manual alias pinned to a specific
deployment and was stuck on the June 5 build for a week (GSC tag + demo video were not
live). Fixed by adding the domain as a project domain — it now **auto-updates on every
push to `master`**, same as `leadflow-automation-nine.vercel.app`.

## Environment Variables
Stored in `.env.local` (not committed). Set these in Vercel dashboard too.

| Variable | Purpose | Status |
|----------|---------|--------|
| `NEXT_PUBLIC_SITE_URL` | Production URL | ✅ Set — https://leadflowautomation.vercel.app |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Business email | ✅ Set — hsteven2008@gmail.com |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form backend | ✅ Connected — https://formspree.io/f/mdavaeeb |
| `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` | Alternative form backend | Optional |
| `NEXT_PUBLIC_MAKE_WEBHOOK_URL` | Alternative form backend | Optional |
| `SUPABASE_URL` | Lead database | Optional |
| `SUPABASE_ANON_KEY` | Lead database | Optional |

## What Still Needs to Be Done

### Critical (do first)
- [x] Connect contact form to Formspree — working, tested end-to-end
- [x] Set env vars in Vercel dashboard (SITE_URL, CONTACT_EMAIL, FORMSPREE_ENDPOINT)
- [ ] Add Calendly/Cal.com booking link to replace `/contact` CTAs in Header

### Soon
- [ ] Add custom domain (e.g. leadflowautomation.com) — currently on leadflowautomation.vercel.app — biggest remaining trust/authority gap
- [x] Write real content for blog posts — 9 posts with full content in `postContent` map in `app/blog/[slug]/page.tsx`
- [ ] Add first client testimonial to home page (`app/page.tsx`) — ask first client after delivery; add `Review` schema too
- [x] Create Small Business Automation Checklist → built as print-to-PDF page at `/checklist`, linked from `/free-tools`
- [x] Finish Google Search Console verification — ownership auto-verified via HTML tag on June 17, 2026
- [ ] Fix GBP hours — currently shows "Open 24 hours", change to Mon–Fri 9AM–6PM
- [ ] Upload business photo to GBP — use `/gbp-photo` image or generated photo
- [ ] Complete GBP profile — click "Complete your profile" card in GBP dashboard
- [ ] Add name (Phong Hoang) to About page for personal branding + local SEO

### SEO — Ongoing
- [ ] Get first backlink — submit to Clutch.co, UpCity.com; post Houston blog in local FB groups
- [ ] Get first Google review — ask first client to leave GBP review after delivery
- [ ] Add 1–2 blog posts per month — keeps site fresh, builds keyword surface area
- [ ] Check GSC in 2–3 weeks for indexed pages and keyword impressions
- [ ] Claim $1,000 Google Ads credit (in GBP dashboard) — do AFTER getting custom domain

### Later
- [x] Add Google Analytics — GA4 tracking (G-ZSBMHX0643) in `app/layout.tsx`
- [ ] Add email newsletter signup (Beehiiv or ConvertKit)
- [ ] Monthly support offering — add booking link
- [x] Embed the demo video on the home page — web-optimized copy (8.8 MB, CRF 25) committed at `public/demo-video.mp4` + poster, native `<video>` section after the hero. Source project: `../Leadflow Demo Video/` (re-render there, then re-encode with ffmpeg `-crf 25 -movflags +faststart`)

## How to Handle a Client Request (Workflow)

1. Client submits contact form → email arrives at hsteven2008@gmail.com
2. Read their `automationGoal` field to understand what they need
3. Ask clarifying question if needed: **"Do you use a POS system like Square or Toast?"**
4. Reply with the right tier and scope:
   - Simple form + Google Sheets tracker → **$149 Starter**
   - CRM + automation + integrations (e.g. Square API) → **$449 Business**
   - Custom web dashboard → **$999 Custom**
5. Client pays → bring the request to Claude Code, build it together step by step
6. Deliver, walk client through it, ask for a testimonial

## Common Client Scenarios + How to Solve Them

### Restaurant — track daily customer count
- **No POS:** Tally form → Zapier → Google Sheets. Staff enters total once per shift. ($149)
- **Has Square/Clover:** Zapier pulls transaction count automatically, no staff input needed. ($449)
- **Has Toast:** Requires Toast developer account + API setup. ($449, takes longer)

### General rule — always ask first:
> "Do you use any software already — like Square, Gmail, Google Sheets, or a booking system?"
Their answer determines which tier and what tools to use.

## Business Model
- **Starter Automation** — $149 (one workflow)
- **Business Workflow** — $449 (CRM + automation + dashboard)
- **Custom Internal Tool** — $999+ (mini CRM / admin portal)
- Add-ons: $75–$300 each (AI email, support, extra revisions)

## Services Offered
1. Lead Tracker Automation ($149+)
2. Client Intake Automation ($149+)
3. Google Sheets CRM Setup ($149+)
4. Zapier / Make / n8n Workflow Setup ($149+ per workflow)
5. Custom Internal Dashboard ($999+)
6. AI Email Summary & Follow-Up Automation ($449+)
7. Mini CRM / Admin Portal ($449+)
8. Website + Automation Bundle ($999+)

## How to Add a Blog Post
1. Add entry to `posts` array in `app/blog/page.tsx`:
   ```ts
   { slug: "your-slug", title: "...", description: "...", category: "...", readTime: "X min read", date: "Month YYYY" }
   ```
2. Add full content to `postContent` map in `app/blog/[slug]/page.tsx`:
   ```ts
   "your-slug": ( <article>...</article> )
   ```
3. Push to GitHub — Vercel auto-deploys.

## How to Add a New Service
- Edit the `services` array in `app/services/page.tsx`
- Also update the service cards on the home page in `app/page.tsx`
- Update footer links in `components/Footer.tsx` if needed

## SEO Status (as of June 18, 2026)

### Done
- Google Search Console verified (HTML tag, June 17, 2026)
- Sitemap submitted — 18 URLs indexed
- OG image live at `/opengraph-image` (1200x630, blue branded)
- GBP photo generated at `/gbp-photo` (1000x1000)
- JSON-LD schema: FAQPage, LocalBusiness, ItemList+Service, BreadcrumbList (all blog posts)
- OpenGraph + Twitter card metadata on all pages
- Per-page unique title + description on all 9 pages + 9 blog posts
- Internal links: all blog posts link to relevant `/services#[anchor]` and `/pricing`
- Blog post dates: all set to June 2026
- robots.txt sitemap URL: points to vercel URL
- Google Business Profile: created June 18, 2026 — live on Google Search + Maps
- GA4 tracking: G-ZSBMHX0643

### Blog Posts (9 total)
1. 5 Signs Your Small Business Needs Automation
2. How a Simple Google Sheets CRM Can Save Lost Leads
3. The Real Cost of Doing Everything Manually
4. What Is a Client Intake Automation?
5. How AI Can Summarize Customer Emails and Save Admin Time
6. How to Stop Losing Leads from Your Website Contact Form
7. Why Follow-Up Reminders Matter for Small Businesses
8. Automation for Houston Small Businesses: What Actually Works ← local SEO
9. Zapier vs. Make.com: Which One Is Right for Your Small Business? ← comparison keyword

## SEO Keywords Targeting
- AI automation for small business
- small business automation consultant
- lead follow-up automation / lead tracking automation
- Google Sheets CRM setup
- Zapier / Make.com / n8n automation setup
- client intake automation
- Houston AI automation consultant
- Houston workflow automation consultant
