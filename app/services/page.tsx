import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "LeadFlow Automation offers lead tracker automation, client intake systems, Google Sheets CRM, Zapier/Make/n8n workflow setup, custom dashboards, and more for small businesses.",
};

const services = [
  {
    id: "lead-tracker",
    icon: "📋",
    title: "Lead Tracker Automation",
    description:
      "A simple system that captures leads from forms, emails, or manual entry and organizes them in a tracker with statuses, notes, and follow-up dates. Never lose a lead again.",
    whoFor: "Contractors, real estate agents, recruiters, medical offices, and any business that gets inbound leads.",
    problem: "Leads come in from multiple places — your website form, Gmail, phone calls, texts — and fall through the cracks because there's no central place to track them.",
    includes: [
      "Lead capture form (website, Typeform, or Google Form)",
      "Google Sheet or Airtable tracker with status columns",
      "Follow-up date reminders",
      "Email notification on new lead",
      "Setup guide and walkthrough",
    ],
    startingPrice: "Starting at $299",
  },
  {
    id: "client-intake",
    icon: "📥",
    title: "Client Intake Automation",
    description:
      "A workflow that collects customer requests, summarizes them, stores them, and notifies the right person — automatically. Clients get a response instantly; your team gets organized information.",
    whoFor: "Service businesses, medical offices, senior living facilities, and any team managing incoming client requests.",
    problem: "Client requests arrive through email, forms, and phone calls — and someone has to manually sort, summarize, and forward them. This creates delays and errors.",
    includes: [
      "Intake form (Typeform, Google Form, or Tally)",
      "Automated confirmation email to client",
      "Internal notification to your team",
      "Google Sheets or Airtable log of all submissions",
      "AI-powered summary of request (optional add-on)",
    ],
    startingPrice: "Starting at $399",
  },
  {
    id: "sheets-crm",
    icon: "📊",
    title: "Google Sheets CRM Setup",
    description:
      "A lightweight CRM built in Google Sheets or Airtable for small teams that don't need expensive CRM software yet. Clean, organized, and easy for your whole team to use.",
    whoFor: "Small sales teams, real estate agents, staffing companies, and service businesses with 1–20 people.",
    problem: "HubSpot, Salesforce, and enterprise CRMs are overkill for a small team. Most small businesses end up with a messy spreadsheet nobody maintains.",
    includes: [
      "Clean CRM structure with lead stages",
      "Contact info, notes, and follow-up date columns",
      "Status tracking (New, Contacted, Proposal Sent, Won, Lost)",
      "Conditional formatting for overdue follow-ups",
      "Filter and search setup",
      "Optional: Zapier or Make integration to auto-add leads from forms",
    ],
    startingPrice: "Starting at $299",
  },
  {
    id: "workflow",
    icon: "⚙️",
    title: "Zapier / Make / n8n Workflow Setup",
    description:
      "Connect apps like Gmail, Google Sheets, forms, calendars, CRMs, and websites so repetitive tasks happen automatically — without you lifting a finger.",
    whoFor: "Any business that does the same manual steps repeatedly: copying info between tools, sending confirmation emails, updating spreadsheets.",
    problem: "You spend time copying data from one app to another. New form submissions don't get logged. Emails go unanswered. Follow-ups get forgotten.",
    includes: [
      "Workflow map of your current manual process",
      "Zapier, Make (Make.com), or n8n automation build",
      "Testing and error handling",
      "Documentation of how the workflow runs",
      "One revision round",
    ],
    startingPrice: "Starting at $299 per workflow",
  },
  {
    id: "dashboard",
    icon: "🖥️",
    title: "Custom Internal Dashboard",
    description:
      "A private dashboard for tracking leads, customers, vendors, tasks, requests, and follow-ups — built for your specific business, not a generic template.",
    whoFor: "Teams that need a central hub to manage customers, leads, projects, or vendors without paying for enterprise software.",
    problem: "You have customer info scattered across spreadsheets, emails, and sticky notes. No one knows what needs attention without asking around.",
    includes: [
      "Private web-based dashboard",
      "Customer or lead database with search and filter",
      "Status tracking and notes",
      "Follow-up reminders",
      "Admin interface for adding and updating records",
      "Deployment and setup help",
      "Documentation for your team",
    ],
    startingPrice: "Starting at $1,500",
  },
  {
    id: "ai-email",
    icon: "✉️",
    title: "AI Email Summary & Follow-Up Automation",
    description:
      "Let AI read your incoming emails, summarize key requests, tag them by priority, and trigger follow-up reminders — so nothing falls through the cracks.",
    whoFor: "Office managers, admin staff, and any team managing a high volume of customer emails.",
    problem: "Your inbox is full. You spend hours reading emails just to figure out who needs what. Responses are slow and some requests get missed entirely.",
    includes: [
      "Gmail integration via Zapier, Make, or n8n",
      "AI summary of incoming email content",
      "Priority tagging (Urgent, Follow-up, Info)",
      "Automatic log entry in Google Sheets or Airtable",
      "Follow-up reminder trigger",
    ],
    startingPrice: "Starting at $499",
  },
  {
    id: "mini-crm",
    icon: "🗂️",
    title: "Mini CRM / Admin Portal",
    description:
      "A lightweight internal tool for managing customers, leads, vendors, or job requests — with a simple interface your team can actually use every day.",
    whoFor: "Small teams of 2–20 people who need something more structured than a spreadsheet but don't want to pay for enterprise software.",
    problem: "Spreadsheets are too messy. Enterprise CRMs are too expensive and complicated. You need something in between.",
    includes: [
      "Simple data entry form",
      "Record list with search and filter",
      "Status tracking",
      "Notes and history log",
      "Exportable reports",
      "Optional: email notification triggers",
    ],
    startingPrice: "Starting at $799",
  },
  {
    id: "bundle",
    icon: "🌐",
    title: "Website + Automation Bundle",
    description:
      "A simple landing page or business website connected to lead capture and follow-up automation — so every visitor who contacts you is automatically tracked and followed up.",
    whoFor: "Small businesses that need a new website AND a system to capture and follow up with leads from that website.",
    problem: "Your website has a contact form, but nobody knows who submitted it or whether they got a response. Leads disappear into your inbox.",
    includes: [
      "Simple business landing page (Next.js or no-code)",
      "Contact or lead capture form",
      "Automated email confirmation to visitor",
      "Lead log in Google Sheets or Airtable",
      "Follow-up reminder system",
      "Vercel deployment",
      "Setup walkthrough",
    ],
    startingPrice: "Starting at $999",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Simple, practical automation systems for small businesses. No complicated software. No enterprise pricing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-white">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`section ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="container-max max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{s.description}</p>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-1">Who it&apos;s for</h3>
                    <p className="text-gray-600 text-sm">{s.whoFor}</p>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-1">The problem it solves</h3>
                    <p className="text-gray-600 text-sm">{s.problem}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-extrabold text-blue-600">{s.startingPrice}</span>
                    <Link href="/contact" className="btn-primary text-sm py-2 px-5">
                      Get a Quote →
                    </Link>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-4">What&apos;s included</h3>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        headline="Not sure which service you need?"
        subheadline="Describe your biggest workflow problem and I'll recommend a practical solution that fits your budget."
        primaryLabel="Get a Free Recommendation"
        primaryHref="/contact"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
