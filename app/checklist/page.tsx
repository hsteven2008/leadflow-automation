import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Small Business Automation Checklist",
  description:
    "A free checklist to find missed leads, repetitive tasks, and follow-up gaps in your current workflow. Print it or save it as a PDF.",
};

const sections = [
  {
    title: "Lead Capture",
    icon: "📋",
    items: [
      "Every lead source (website form, phone, email, referral) goes into one central place",
      "New leads get an automatic confirmation so they know their message was received",
      "You get an instant alert when a new lead comes in — not just an email that might get buried",
      "Every lead is logged with name, contact info, source, and date",
      "No lead can fall through the cracks even if you're busy or offline",
    ],
  },
  {
    title: "Follow-Up",
    icon: "🔔",
    items: [
      "You have a system that tells you who needs a follow-up today — without checking manually",
      "Leads that go cold (no response in 3–5 days) trigger an automatic reminder",
      "You know the last time you contacted every active lead",
      "Follow-up reminders go to your phone or inbox — wherever you actually check",
      "You're following up at least twice before marking a lead as lost",
    ],
  },
  {
    title: "Client Intake",
    icon: "📥",
    items: [
      "New client requests are logged automatically — not just sitting in your inbox",
      "Clients get a confirmation within minutes of submitting a request",
      "Your team knows about new requests without having to check a shared inbox",
      "Request details (name, contact, what they need) are captured in a structured format",
      "You can see all open requests in one place without digging through email",
    ],
  },
  {
    title: "Repetitive Tasks",
    icon: "⚙️",
    items: [
      "You're not copying the same information from one tool to another by hand",
      "Confirmation emails, welcome messages, and appointment reminders go out automatically",
      "Your team isn't doing the same manual steps more than twice a week",
      "New form submissions automatically update your tracker or CRM",
      "You have a written list of tasks that happen the same way every time",
    ],
  },
  {
    title: "Tracking & Visibility",
    icon: "📊",
    items: [
      "You can see the status of every active lead in under 30 seconds",
      "You know how many leads came in this week vs. last week",
      "You can filter your lead list by status, date, or source",
      "Overdue follow-ups stand out visually — they don't blend in with everything else",
      "You have a record of every customer interaction, not just the ones you remember",
    ],
  },
  {
    title: "Email & Communication",
    icon: "✉️",
    items: [
      "Your response time to new inquiries is under 1 hour during business hours",
      "High-volume inboxes are monitored — not just checked twice a day",
      "Customer emails are sorted or tagged so urgent ones don't get missed",
      "You're not spending more than 30 minutes a day just reading and sorting email",
      "Important requests don't require someone to manually forward them to the right person",
    ],
  },
];

export default function ChecklistPage() {
  const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 print:hidden">
        <div className="container-max max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Free Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Small Business Automation Checklist
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-6">
            {totalItems} questions across 6 areas. Find the gaps in your workflow — lead capture,
            follow-up, client intake, and more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <PrintButton />
            <Link href="/contact" className="btn-primary">
              Get Help With Any of These →
            </Link>
          </div>
        </div>
      </section>

      {/* Print header — only shows when printing */}
      <div className="hidden print:block px-8 pt-8 pb-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold text-gray-900">Small Business Automation Checklist</h1>
        <p className="text-gray-500 text-sm mt-1">LeadFlow Automation · leadflowautomation.vercel.app</p>
        <p className="text-gray-600 text-sm mt-2">
          Check each item that is already true for your business. Any unchecked item is a potential
          gap — a place where leads, time, or money may be slipping through.
        </p>
      </div>

      {/* Intro */}
      <section className="section bg-white print:py-4 print:px-8">
        <div className="container-max max-w-3xl mx-auto print:max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed print:text-sm print:text-gray-700">
            Go through each section and check off the items that are already true for your business.
            Any item you can&apos;t check is a gap — a place where leads, time, or money may be slipping
            through. Use this as a starting point for deciding what to fix first.
          </p>
        </div>
      </section>

      {/* Checklist sections */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 print:pb-4 print:px-8">
        <div className="container-max max-w-3xl mx-auto print:max-w-none space-y-10 print:space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl print:text-xl">{section.icon}</span>
                <h2 className="text-xl font-bold text-gray-900 print:text-base">{section.title}</h2>
              </div>
              <div className="space-y-3 print:space-y-2">
                {section.items.map((item) => (
                  <label
                    key={item}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-blue-50 hover:border-blue-100 transition-colors group print:p-2 print:bg-white print:border-gray-200 print:rounded-none print:border-b"
                  >
                    <input
                      type="checkbox"
                      className="mt-0.5 h-5 w-5 rounded border-gray-300 text-blue-600 flex-shrink-0 print:h-4 print:w-4"
                    />
                    <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 print:text-xs print:text-gray-800">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Score guide */}
      <section className="section bg-blue-50 print:bg-white print:px-8 print:py-4 print:border-t print:border-gray-300">
        <div className="container-max max-w-3xl mx-auto print:max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-4 print:text-base">How to read your results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 print:grid-cols-3 print:gap-2">
            {[
              { range: "25–30 checked", label: "You're in good shape", color: "bg-green-100 border-green-200 text-green-800", desc: "Minor gaps only. Focus on the unchecked items." },
              { range: "15–24 checked", label: "Room to improve", color: "bg-yellow-100 border-yellow-200 text-yellow-800", desc: "Pick the section with the most gaps and fix it first." },
              { range: "Under 15 checked", label: "Significant gaps", color: "bg-red-100 border-red-200 text-red-800", desc: "Manual processes are likely costing you leads and time weekly." },
            ].map((band) => (
              <div key={band.range} className={`rounded-xl p-4 border print:rounded print:p-2 ${band.color}`}>
                <div className="font-bold text-sm print:text-xs">{band.range}</div>
                <div className="font-semibold mt-1 print:text-xs">{band.label}</div>
                <div className="text-xs mt-1 opacity-80 print:text-xs">{band.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <CTASection
          headline="Found some gaps? Let's fix them."
          subheadline="Tell me which section had the most unchecked boxes and I'll recommend the right automation for your business."
          primaryLabel="Get a Free Recommendation"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </div>

      {/* Print footer */}
      <div className="hidden print:block px-8 py-4 border-t border-gray-300 mt-4">
        <p className="text-xs text-gray-500">
          LeadFlow Automation builds practical automation systems for small businesses starting at $299.
          Visit leadflowautomation.vercel.app or email hsteven2008@gmail.com to get started.
        </p>
      </div>
    </>
  );
}
