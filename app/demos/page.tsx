import type { Metadata } from "next";
import DemoCard from "@/components/DemoCard";
import AutomationIdeaGenerator from "@/components/AutomationIdeaGenerator";
import ROICalculator from "@/components/ROICalculator";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Demo Systems",
  description:
    "Try the free Automation Idea Generator and see live examples of lead trackers, client intake systems, follow-up automations, and mini CRMs built for small businesses.",
};

const demos = [
  {
    icon: "📋",
    title: "Lead Tracker Demo",
    description: "See how a simple Google Sheets lead tracker looks — with status columns, follow-up dates, and color-coded alerts for overdue contacts.",
    helpsWho: "Contractors, real estate agents, recruiters, service businesses",
    tools: ["Google Sheets", "Zapier", "Gmail"],
    ctaLabel: "Get This Built for Me",
    ctaHref: "/contact",
  },
  {
    icon: "📥",
    title: "Client Intake Automation Demo",
    description: "A workflow that collects a customer request via form, sends them a confirmation email, and logs the request in a tracker — all automatically.",
    helpsWho: "Medical offices, senior living, service businesses",
    tools: ["Tally / Google Forms", "Make.com", "Google Sheets"],
    ctaLabel: "Get This Built for Me",
    ctaHref: "/contact",
  },
  {
    icon: "🗂️",
    title: "Mini CRM Demo",
    description: "A lightweight CRM that tracks contacts, lead stage, notes, and next actions. Designed to replace a messy spreadsheet with something you'll actually use.",
    helpsWho: "Small sales teams, local businesses, staffing firms",
    tools: ["Airtable", "Google Sheets", "Zapier"],
    ctaLabel: "Get This Built for Me",
    ctaHref: "/contact",
  },
  {
    icon: "⏰",
    title: "Follow-Up Reminder System",
    description: "An automation that checks your tracker each morning and sends you a digest of leads who haven't been contacted in 3+ days.",
    helpsWho: "Any business with sales or service leads",
    tools: ["Google Sheets", "Zapier", "Gmail"],
    ctaLabel: "Get This Built for Me",
    ctaHref: "/contact",
  },
  {
    icon: "✉️",
    title: "AI Email Summary Workflow",
    description: "Incoming emails get summarized, categorized by priority, and logged — so you spend less time reading and more time responding.",
    helpsWho: "Office managers, admin teams, high-email businesses",
    tools: ["Gmail", "Make.com", "OpenAI", "Google Sheets"],
    ctaLabel: "Get This Built for Me",
    ctaHref: "/contact",
  },
  {
    icon: "🖥️",
    title: "Business Automation Dashboard",
    description: "A clean internal dashboard showing all active leads, recent requests, and follow-up alerts — built specifically for your business.",
    helpsWho: "Teams of 2–20 people managing customers or leads",
    tools: ["Next.js", "Supabase or Airtable", "Vercel"],
    ctaLabel: "Get This Built for Me",
    ctaHref: "/contact",
  },
];

export default function DemosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Demo Systems</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            See examples of what&apos;s possible. Try the free Automation Idea Generator below — or browse
            the demo library to find something that fits your business.
          </p>
        </div>
      </section>

      {/* Automation Idea Generator */}
      <section className="section bg-blue-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Tool
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Automation Idea Generator</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Answer 3 questions about your business and get 3 practical automation ideas instantly — no email required.
            </p>
          </div>
          <AutomationIdeaGenerator />
        </div>
      </section>

      {/* Demo Cards */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Demo Library
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Systems I Build</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Each of these can be built and live within 3–7 days. Click any card to start a conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((d) => (
              <DemoCard key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Calculator
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Missed Lead Calculator</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Estimate how much revenue poor follow-up may be costing your business each month.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <CTASection
        headline="See something that fits your business?"
        subheadline="Reach out and I'll tell you exactly what it would take to build it for your team."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
