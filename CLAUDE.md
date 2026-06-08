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
  page.tsx                  # Home
  services/page.tsx         # Services (8 services detailed)
  pricing/page.tsx          # 3 pricing tiers + add-ons
  demos/page.tsx            # Demo cards + Automation Idea Generator
  free-tools/page.tsx       # Lead magnet page
  contact/page.tsx          # Contact form
  about/page.tsx            # Brand story
  faq/page.tsx              # 15 FAQ items
  blog/
    page.tsx                # Blog index — add new posts HERE (posts array)
    [slug]/page.tsx         # Post template — add full content HERE (postContent map)
  sitemap.ts                # Auto-generated sitemap
  robots.ts                 # robots.txt
  globals.css               # Tailwind + Google Fonts (Inter)
  layout.tsx                # Root layout, global metadata, header/footer

components/                 # 15 reusable components
  Header.tsx                # Nav with mobile hamburger
  Footer.tsx
  Button.tsx
  SectionHeading.tsx
  ServiceCard.tsx
  PricingCard.tsx
  DemoCard.tsx
  FAQAccordion.tsx          # Client component — accordion toggle
  ContactForm.tsx           # Client component — frontend-only, needs backend connected
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

## Environment Variables
Stored in `.env.local` (not committed). Set these in Vercel dashboard too.

| Variable | Purpose | Status |
|----------|---------|--------|
| `NEXT_PUBLIC_SITE_URL` | Production URL | ⚠️ Not set yet |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Business email | ⚠️ Not set yet |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form backend | ⚠️ Not connected yet |
| `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` | Alternative form backend | Optional |
| `NEXT_PUBLIC_MAKE_WEBHOOK_URL` | Alternative form backend | Optional |
| `SUPABASE_URL` | Lead database | Optional |
| `SUPABASE_ANON_KEY` | Lead database | Optional |

## What Still Needs to Be Done

### Critical (do first)
- [ ] Connect contact form to Formspree — edit `components/ContactForm.tsx`, uncomment fetch block
- [ ] Set env vars in Vercel dashboard (SITE_URL, CONTACT_EMAIL, FORMSPREE_ENDPOINT)
- [ ] Add Calendly/Cal.com booking link to replace `/contact` CTAs in Header

### Soon
- [ ] Add custom domain (e.g. leadflowautomation.com)
- [ ] Write real content for blog posts — add to `postContent` map in `app/blog/[slug]/page.tsx`
- [ ] Add first client testimonial to home page (`app/page.tsx`)
- [ ] Create Small Business Automation Checklist PDF → link in `/free-tools`

### Later
- [ ] Add Google Analytics (`app/layout.tsx` — add script tag)
- [ ] Add email newsletter signup (Beehiiv or ConvertKit)
- [ ] Monthly support offering — add booking link

## Business Model
- **Starter Automation** — $149 (one workflow)
- **Business Workflow** — $449 (CRM + automation + dashboard)
- **Custom Internal Tool** — $999+ (mini CRM / admin portal)
- Add-ons: $75–$300 each (AI email, support, extra revisions)

## Services Offered
1. Lead Tracker Automation ($299+)
2. Client Intake Automation ($399+)
3. Google Sheets CRM Setup ($299+)
4. Zapier / Make / n8n Workflow Setup ($299+ per workflow)
5. Custom Internal Dashboard ($1,500+)
6. AI Email Summary & Follow-Up Automation ($499+)
7. Mini CRM / Admin Portal ($799+)
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

## SEO Keywords Targeting
- AI automation for small business
- small business automation consultant
- lead follow-up automation / lead tracking automation
- Google Sheets CRM setup
- Zapier / Make.com / n8n automation setup
- client intake automation
- Houston AI automation consultant
- Houston workflow automation consultant
