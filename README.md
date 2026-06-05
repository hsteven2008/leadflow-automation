# LeadFlow Automation

A Next.js website for an AI automation and lead follow-up service business targeting small businesses.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Deployed to Vercel**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, problems, services, how it works, ROI calculator |
| `/services` | Detailed service descriptions with pricing |
| `/pricing` | Three pricing tiers + add-ons |
| `/demos` | Automation Idea Generator + demo library |
| `/free-tools` | Lead magnet page with all free tools |
| `/contact` | Contact form |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog posts |
| `/about` | Brand story and positioning |
| `/faq` | FAQ accordion |

## Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://leadflowautomation.com`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Your business email |
| `RESEND_API_KEY` | For sending emails via Resend |
| `FORMSPREE_ENDPOINT` | Formspree form URL |
| `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` | Zapier webhook to receive form data |
| `NEXT_PUBLIC_MAKE_WEBHOOK_URL` | Make.com webhook |
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | n8n webhook |
| `SUPABASE_URL` | Supabase project URL (for lead storage) |
| `SUPABASE_ANON_KEY` | Supabase anon key |

## Connecting the Contact Form

The contact form at `components/ContactForm.tsx` is frontend-only by default.
To connect it, open the file and uncomment one of the backend options:

**Option 1 — Formspree (easiest, free tier available)**
1. Create account at formspree.io
2. Create a form, copy the endpoint URL
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local`
4. Uncomment the Formspree fetch block in `ContactForm.tsx`

**Option 2 — Zapier Webhook**
1. Create a Zap with "Webhook by Zapier" trigger
2. Copy the webhook URL
3. Set `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` in `.env.local`
4. Uncomment the Zapier fetch block in `ContactForm.tsx`

**Option 3 — Resend (for custom email)**
1. Create account at resend.com
2. Get API key and set `RESEND_API_KEY`
3. Create `app/api/contact/route.ts` and POST there from the form

**Option 4 — Supabase (store leads in a database)**
1. Create Supabase project, create a `leads` table
2. Set `SUPABASE_URL` and `SUPABASE_ANON_KEY`
3. Install `@supabase/supabase-js` and insert rows from the form submit

## Deploying to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Add environment variables in Vercel dashboard
5. Click Deploy

Vercel auto-deploys on every push to `main`.

## Customization Guide

**Business name / branding**
- Search and replace `LeadFlow Automation` across all files
- Update colors in `tailwind.config.ts` (change `brand.*` values)
- Update logo/icon in `components/Header.tsx` and `components/Footer.tsx`

**Services**
- Edit service data in `app/services/page.tsx` (the `services` array)
- Update service cards on the home page in `app/page.tsx`

**Pricing**
- Edit `plans` array in `app/pricing/page.tsx`

**Blog posts**
- Add posts to the `posts` array in `app/blog/page.tsx`
- Add full content to `postContent` in `app/blog/[slug]/page.tsx`

**SEO / metadata**
- Global defaults in `app/layout.tsx`
- Per-page metadata via `export const metadata` at the top of each page file

**Contact email / social links**
- Update `components/Footer.tsx`
- Update the contact page info in `app/contact/page.tsx`

## Suggested Next Steps

1. Connect the contact form to Formspree or a Zapier webhook
2. Add your real contact email in `.env.local`
3. Replace placeholder blog posts with real content
4. Add a Calendly or Cal.com booking link to the About/Contact pages
5. Set up Google Analytics (add script to `app/layout.tsx`)
6. Add real testimonials from clients to the home page
7. Create the Small Business Automation Checklist PDF and link it in `/free-tools`

## File Structure

```
app/
  layout.tsx          # Root layout, metadata, header/footer
  page.tsx            # Home page
  globals.css         # Tailwind + global styles
  services/page.tsx   # Services page
  pricing/page.tsx    # Pricing page
  demos/page.tsx      # Demo systems + Idea Generator
  free-tools/page.tsx # Lead magnet page
  contact/page.tsx    # Contact page
  about/page.tsx      # About page
  faq/page.tsx        # FAQ page
  blog/
    page.tsx          # Blog index + post data array
    [slug]/page.tsx   # Individual post template
  sitemap.ts          # Auto-generated sitemap
  robots.ts           # robots.txt

components/
  Header.tsx          # Navigation
  Footer.tsx          # Footer with links
  Button.tsx          # Reusable button (link or button)
  SectionHeading.tsx  # Consistent section titles
  ServiceCard.tsx     # Service overview card
  PricingCard.tsx     # Pricing tier card
  DemoCard.tsx        # Demo system card
  FAQAccordion.tsx    # Expandable FAQ items
  ContactForm.tsx     # Lead capture form
  AutomationIdeaGenerator.tsx  # Interactive idea tool
  BlogCard.tsx        # Blog post preview card
  CTASection.tsx      # Full-width CTA banner
  ProblemCard.tsx     # Problem/solution card
  StepCard.tsx        # Numbered step card
  LeadMagnetCard.tsx  # Lead magnet offer card
  ROICalculator.tsx   # Missed lead revenue calculator
```
