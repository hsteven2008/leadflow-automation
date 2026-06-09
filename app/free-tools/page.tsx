import type { Metadata } from "next";
import AutomationIdeaGenerator from "@/components/AutomationIdeaGenerator";
import ROICalculator from "@/components/ROICalculator";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free Tools",
  description:
    "Free tools for small businesses — Automation Idea Generator, Missed Lead Calculator, and Small Business Automation Checklist.",
};

export default function FreeToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Free Tools</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Practical free tools to help you find automation opportunities, estimate missed revenue,
            and decide what to fix first.
          </p>
        </div>
      </section>

      {/* Tool cards */}
      <section className="section bg-gray-50">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LeadMagnetCard
              icon="🤖"
              title="Automation Idea Generator"
              description="Answer 3 questions about your business and get 3 practical automation ideas instantly. No email required."
              ctaLabel="Try It Free →"
              ctaHref="#idea-generator"
              badge="Free · No signup"
            />
            <LeadMagnetCard
              icon="📊"
              title="Missed Lead Calculator"
              description="Estimate how much revenue poor follow-up may be costing your business every month. Takes 30 seconds."
              ctaLabel="Calculate Now →"
              ctaHref="#roi-calculator"
              badge="Free · No signup"
            />
            <LeadMagnetCard
              icon="✅"
              title="Small Business Automation Checklist"
              description="A simple checklist to find missed leads, repetitive tasks, and follow-up gaps in your current workflow."
              ctaLabel="Get the Checklist →"
              ctaHref="/checklist"
              badge="Free · No signup"
            />
            <LeadMagnetCard
              icon="💡"
              title="Free Automation Consultation"
              description="Not sure what to automate first? Tell me about your business and I'll give you a free recommendation."
              ctaLabel="Book a Free Call →"
              // TODO: replace with Calendly or Cal.com booking link
              ctaHref="/contact"
              badge="Free"
            />
          </div>
        </div>
      </section>

      {/* Idea Generator */}
      <section id="idea-generator" className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Automation Idea Generator</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Select your business type, biggest problem, and current tools. Get 3 specific automation
              ideas in seconds.
            </p>
          </div>
          <AutomationIdeaGenerator />
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="section bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Missed Lead Calculator</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Drag the sliders to see how much poor follow-up may be costing your business each month.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <CTASection
        headline="Got your ideas? Let's build it."
        subheadline="I'll take the automation idea that fits your business and build a working system within 3–7 days."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
