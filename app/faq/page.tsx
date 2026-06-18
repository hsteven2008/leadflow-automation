import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about LeadFlow Automation — how we work, what tools we use, how long setup takes, and whether we can work with your existing systems.",
};

const faqItems = [
  {
    question: "Do I need to know anything technical?",
    answer:
      "No. You just need to be able to use email and a basic spreadsheet. I handle all the technical setup, testing, and configuration. When everything is ready, I walk you through how it works in plain language.",
  },
  {
    question: "Can you work with Google Sheets?",
    answer:
      "Absolutely. Most of the systems I build are based on Google Sheets. It's free, your team already knows how to use it, and it connects easily to automation tools like Zapier and Make.",
  },
  {
    question: "Can you use Zapier, Make, or n8n?",
    answer:
      "Yes — all three. The right choice depends on your budget, tools, and how complex the workflow is. I'll recommend the best option for your specific situation and build it for you.",
  },
  {
    question: "Can this work with my existing website?",
    answer:
      "Usually yes. If your website has a contact form or a way to embed a form, I can connect it to your lead tracker or automation workflow. I've worked with WordPress, Webflow, Squarespace, custom sites, and more.",
  },
  {
    question: "How long does setup usually take?",
    answer:
      "Simple automations (one form, one workflow, one tracker) are typically live within 3–5 business days. Larger systems with multiple workflows or a custom dashboard may take 1–2 weeks. I'll give you a realistic timeline before we start.",
  },
  {
    question: "Do you offer monthly support?",
    answer:
      "Yes. I offer optional monthly support packages for businesses that want ongoing maintenance, minor changes, or someone to call when something breaks. Pricing starts at $99/month.",
  },
  {
    question: "Is this a custom app or an automation?",
    answer:
      "It depends on what you need. Most projects are automations using tools like Zapier, Make, Google Sheets, and Gmail — no custom code required. For dashboards or mini CRMs, I build lightweight web apps using Next.js. I'll recommend the simplest approach that solves your problem.",
  },
  {
    question: "Can you build a CRM?",
    answer:
      "Yes. I build lightweight CRMs in Google Sheets or Airtable for teams that don't need enterprise software. For teams that need something more structured, I can build a mini CRM as a private web app.",
  },
  {
    question: "Can you help me figure out what to automate?",
    answer:
      "Yes — that's part of the free consultation. Just describe your current workflow and biggest pain points in plain language. I'll suggest 2–3 automation ideas that would make the most practical difference for your business.",
  },
  {
    question: "Do I need a full website?",
    answer:
      "Not necessarily. You can capture leads through a standalone form (Tally, Typeform, or Google Form) connected to a tracker without a full website. If you do want a site, I offer a Website + Automation Bundle that includes both.",
  },
  {
    question: "Can you work with Airtable or Excel?",
    answer:
      "Yes to Airtable — it's a great tool for more structured data with built-in automation features. For Excel, I can work with it but recommend Google Sheets for easier integration with automation tools. I'll always recommend what works best for your situation.",
  },
  {
    question: "Can you connect forms to email follow-ups?",
    answer:
      "Yes. This is one of the most common setups I build: someone submits your contact or intake form → they get an automatic confirmation email → you get a notification → the lead is logged in your tracker. This alone saves hours of manual work each week.",
  },
  {
    question: "What if I already have a CRM?",
    answer:
      "That's fine. I can build automations that feed into your existing CRM, improve how leads enter it, or add follow-up logic on top of it. I work with whatever tools you already have — I'm not trying to replace everything.",
  },
  {
    question: "What's the difference between Zapier and Make?",
    answer:
      "Both connect apps and automate tasks. Zapier is simpler to set up and great for straightforward workflows. Make (formerly Integromat) handles more complex multi-step workflows and is often more affordable at higher volumes. I'll recommend the right one based on what you need.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form and describe your biggest workflow problem. I'll reply within 1 business day with practical ideas and a rough quote. No commitment required.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Everything you need to know before getting started. Don&apos;t see your question?{" "}
            <a href="/contact" className="text-blue-400 hover:underline">Just ask.</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container-max max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTASection
        headline="Still have questions?"
        subheadline="Reach out and I'll get back to you within 1 business day with honest, practical answers."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
        secondaryLabel="Try the Free Idea Generator"
        secondaryHref="/demos"
      />
    </>
  );
}
