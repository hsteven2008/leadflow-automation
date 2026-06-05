import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for LeadFlow Automation services. Starting at $149 for a single workflow up to $999+ for a custom internal tool or mini CRM.",
};

const plans = [
  {
    name: "Starter Automation",
    price: "Starting at $149",
    bestFor: "Small businesses that need one simple workflow to get organized.",
    includes: [
      "One intake form or lead capture form",
      "Google Sheets or Airtable tracker setup",
      "Email notification on new entry",
      "Simple follow-up reminder system",
      "Basic setup and usage guide",
      "One revision round",
    ],
    ctaLabel: "Get Started",
  },
  {
    name: "Business Workflow",
    price: "Starting at $449",
    bestFor: "Businesses with repeated admin tasks or messy lead follow-up.",
    includes: [
      "Intake workflow with form and routing",
      "CRM-style tracker in Google Sheets or Airtable",
      "Automated email response to customers",
      "AI summary or priority tagging (optional)",
      "Simple status dashboard",
      "Zapier, Make, or n8n workflow setup",
      "Walkthrough video (recorded overview)",
      "Two revision rounds",
    ],
    featured: true,
    ctaLabel: "Most Popular — Get a Quote",
  },
  {
    name: "Custom Internal Tool",
    price: "Starting at $999",
    bestFor: "Teams that need a private dashboard, mini CRM, or admin portal.",
    includes: [
      "Private web-based dashboard",
      "Customer or vendor database with search and filter",
      "Status tracking and notes",
      "Follow-up reminders and alerts",
      "Admin interface for managing records",
      "Deployment to Vercel or your hosting",
      "Full documentation for your team",
      "Three revision rounds",
    ],
    ctaLabel: "Get a Custom Quote",
  },
];

const addOns = [
  { name: "AI Email Summary", desc: "Add AI-powered email summarization and priority tagging", price: "+$150–$300" },
  { name: "Monthly Support", desc: "Ongoing maintenance, updates, and minor changes", price: "+$99–$199/mo" },
  { name: "Walkthrough Video", desc: "Recorded walkthrough of your system for your team", price: "+$75" },
  { name: "Extra Revision Round", desc: "One additional round of changes after delivery", price: "+$75" },
  { name: "Zapier/Make Setup", desc: "Additional workflow automation beyond the base scope", price: "+$150/workflow" },
  { name: "Extra Form or Tracker", desc: "Additional intake form or CRM tracker for another team or use case", price: "+$150" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Three tiers to match your stage — from a single workflow to a full internal tool.
            No surprise fees, no bloated retainers.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
            {plans.map((p) => (
              <PricingCard key={p.name} {...p} />
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto">
            * Final pricing depends on scope, number of tools, integrations, and complexity.
            Contact me to get an exact quote for your specific needs.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Optional Add-Ons</h2>
            <p className="text-gray-600">Customize any package with the extras you actually need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((a) => (
              <div key={a.name} className="card">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{a.name}</h3>
                  <span className="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">{a.price}</span>
                </div>
                <p className="text-gray-500 text-xs">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-blue-50">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">LeadFlow vs. Enterprise Software</h2>
            <p className="text-gray-600">You don&apos;t need a $500/month CRM subscription to stay organized.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 text-gray-700 font-semibold">Feature</th>
                  <th className="px-5 py-3 text-blue-600 font-semibold">LeadFlow</th>
                  <th className="px-5 py-3 text-gray-500 font-semibold">Enterprise CRM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Setup time", "3–7 days", "Weeks to months"],
                  ["Monthly cost", "$0 after setup*", "$50–$500+/mo"],
                  ["Works with Gmail", "✅", "Varies"],
                  ["Works with Google Sheets", "✅", "Limited"],
                  ["Tech knowledge required", "None", "Training required"],
                  ["Custom to your workflow", "✅", "Rigid templates"],
                  ["Small team friendly", "✅", "Designed for 50+ users"],
                ].map(([feat, us, them]) => (
                  <tr key={feat} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700 font-medium">{feat}</td>
                    <td className="px-5 py-3 text-center text-green-700 font-semibold">{us}</td>
                    <td className="px-5 py-3 text-center text-gray-400">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center mt-3">*Tools like Google Sheets and Zapier free tier are free or low-cost.</p>
        </div>
      </section>

      <CTASection
        headline="Not sure what you need?"
        subheadline="Try the free Automation Idea Generator — describe your problem and get 3 practical ideas in seconds."
        primaryLabel="Try the Free Tool"
        primaryHref="/demos"
        secondaryLabel="Contact Me Directly"
        secondaryHref="/contact"
      />
    </>
  );
}
