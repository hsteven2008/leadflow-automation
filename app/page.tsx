import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";
import ProblemCard from "@/components/ProblemCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ROICalculator from "@/components/ROICalculator";

export const metadata: Metadata = {
  title: "LeadFlow Automation | AI Lead Tracking & Follow-Up Automation for Small Businesses",
  description:
    "LeadFlow Automation builds simple AI-powered lead tracking systems, follow-up automations, Google Sheets CRMs, and business dashboards for small businesses.",
};

const services = [
  {
    icon: "📋",
    title: "Lead Tracker Automation",
    description: "Capture every lead from forms, emails, or manual entry and organize them with statuses, notes, and follow-up dates.",
    href: "/services#lead-tracker",
  },
  {
    icon: "📥",
    title: "Client Intake Automation",
    description: "Collect customer requests, summarize them, store them, and notify your team — automatically.",
    href: "/services#client-intake",
  },
  {
    icon: "📊",
    title: "Google Sheets CRM",
    description: "A lightweight CRM built in Google Sheets or Airtable — no expensive software required.",
    href: "/services#sheets-crm",
  },
  {
    icon: "⚙️",
    title: "Zapier / Make / n8n Workflows",
    description: "Connect Gmail, forms, calendars, and CRMs so repetitive tasks happen automatically.",
    href: "/services#workflow",
  },
  {
    icon: "🖥️",
    title: "Custom Internal Dashboard",
    description: "A private dashboard to track leads, customers, vendors, tasks, and follow-ups.",
    href: "/services#dashboard",
  },
  {
    icon: "🌐",
    title: "Website + Automation Bundle",
    description: "A clean landing page connected to lead capture and follow-up automation from day one.",
    href: "/services#bundle",
  },
];

const problems = [
  { icon: "🚪", problem: "Leads slipping through the cracks", solution: "A simple tracker keeps every lead visible and organized." },
  { icon: "📧", problem: "Sending the same follow-up emails manually", solution: "Automated responses go out the moment a form is submitted." },
  { icon: "📉", problem: "Messy spreadsheets nobody updates", solution: "A clean CRM structure everyone can actually use." },
  { icon: "⏰", problem: "No system to remind you who needs follow-up", solution: "Automated reminders delivered to your inbox daily." },
  { icon: "📦", problem: "Customer requests spread across Gmail, texts, and notes", solution: "One intake workflow that collects and organizes everything." },
  { icon: "👁️", problem: "No clear view of lead status", solution: "A dashboard that shows you exactly what needs attention." },
];

const steps = [
  {
    step: 1,
    title: "Tell me what you need to fix",
    description: "Fill out the free contact form. Describe your biggest workflow problem in plain language.",
  },
  {
    step: 2,
    title: "Get a simple automation plan",
    description: "I'll map out a practical system that fits your team and tools — no complicated software needed.",
  },
  {
    step: 3,
    title: "I build it, you run it",
    description: "I set up the system, walk you through it, and make sure your team can use it from day one.",
  },
];

const faqPreview = [
  {
    question: "Do I need to know anything technical?",
    answer: "No. I build and set up the system for you. You just need to be able to use email and a spreadsheet.",
  },
  {
    question: "Can you work with Google Sheets and Gmail?",
    answer: "Yes — most of the systems I build use Google Sheets, Gmail, and lightweight tools your team already knows.",
  },
  {
    question: "How long does setup usually take?",
    answer: "Simple automations are typically ready within 3–5 business days. Larger systems may take 1–2 weeks depending on complexity.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            AI-Powered Automation for Small Businesses
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Stop losing leads.<br />Automate your follow-ups.
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            LeadFlow Automation builds simple AI-powered systems that capture leads, organize
            customer requests, and remind your team who needs follow-up next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base"
            >
              Get a Free Automation Idea
            </Link>
            <Link
              href="/demos"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors text-base"
            >
              View Demo Systems
            </Link>
          </div>

          {/* Benefit bullets */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto text-sm text-blue-100">
            {[
              "✓ Capture every lead in one place",
              "✓ Automate follow-up reminders",
              "✓ Turn messy spreadsheets into simple systems",
              "✓ Save time on repetitive admin work",
              "✓ Build practical tools without expensive enterprise software",
              "✓ Know who needs follow-up next",
            ].map((b) => (
              <div key={b} className="bg-blue-600 bg-opacity-40 rounded-lg px-4 py-2 text-left">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo video */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              60-Second Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See how LeadFlow Automation works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Watch how we help small businesses stop losing leads — in about a minute.
            </p>
          </div>
          <video
            controls
            preload="metadata"
            poster="/demo-video-poster.jpg"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl border border-gray-200"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Problems */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Sound Familiar?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common problems I solve for small businesses
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              If any of these sound like your business, automation can help — without expensive enterprise software.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <ProblemCard key={p.problem} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple systems that actually work
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each service is practical, affordable, and designed for small teams — not enterprise budgets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Up and running in days, not months
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Reality Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How much is poor follow-up costing you?
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Drag the sliders to see an estimate of what missed follow-ups may be costing your business each month.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Pricing preview */}
      <section className="section bg-blue-50">
        <div className="container-max text-center">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Three tiers for every stage — from a single workflow to a full internal dashboard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left mb-8">
            {[
              { name: "Starter Automation", price: "From $149", desc: "One simple workflow to get started." },
              { name: "Business Workflow", price: "From $449", desc: "CRM, automation, AI summary, and dashboard." },
              { name: "Custom Internal Tool", price: "From $999", desc: "Private dashboard or mini CRM for your team." },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{p.name}</h3>
                <p className="text-blue-600 font-extrabold text-2xl mb-2">{p.price}</p>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="btn-primary">
            See Full Pricing Details
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions</h2>
          </div>
          <FAQAccordion items={faqPreview} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-600 font-semibold hover:underline">
              See all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to stop losing leads?"
        subheadline="Get a free automation idea for your business. No commitment, no pressure — just practical ideas."
      />
    </>
  );
}
