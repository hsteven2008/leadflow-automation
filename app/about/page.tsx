import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "LeadFlow Automation is built by Phong Hoang, a Houston-based automation consultant helping small businesses turn messy lead tracking and manual workflows into simple automated systems.",
};

const beliefs = [
  {
    icon: "🔧",
    title: "Simple is better than complicated",
    desc: "A system your team will actually use beats a powerful one they avoid. Every solution I build is designed to be easy to understand, not impressive to look at.",
  },
  {
    icon: "🎯",
    title: "Practical results over technical demos",
    desc: "The goal is always the same: fewer dropped leads, faster follow-ups, less manual work. I focus on measurable outcomes, not flashy technology.",
  },
  {
    icon: "💬",
    title: "Honest about what works",
    desc: "Not every business needs a custom dashboard. Sometimes a clean Google Sheet and one automation workflow is the right answer — and that's what I'll recommend.",
  },
  {
    icon: "📖",
    title: "You should understand your own systems",
    desc: "Every system I build comes with documentation and a walkthrough so your team can understand, update, and manage it — not depend on me forever.",
  },
];

const clientTypes = [
  "Contractors and construction companies",
  "Real estate agents and property managers",
  "Medical and dental offices",
  "Senior living and care facilities",
  "Staffing and recruiting companies",
  "Local service businesses",
  "Small sales teams",
  "Office managers and admin teams",
  "B2B service providers",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max max-w-3xl mx-auto text-center">
          <span className="text-4xl block mb-4">⚡</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            We help small businesses stop losing leads.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            LeadFlow Automation turns messy lead tracking, manual follow-ups, and repetitive admin
            work into simple automated systems. Practical systems. Not enterprise software.
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="section bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Help
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built for small teams, not enterprise departments
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most automation tools and consultants are built for large companies with IT teams and
                big budgets. LeadFlow Automation is different — we work with small businesses that
                need practical systems without enterprise pricing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If your team is between 1 and 20 people, uses Gmail and Google Sheets, and spends
                too much time on manual tasks — you&apos;re exactly who we help.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Industries we work with</h3>
              <ul className="space-y-2">
                {clientTypes.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-blue-500">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section bg-gray-50">
        <div className="container-max max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Believe
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              How we approach every project
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beliefs.map((b) => (
              <div key={b.title} className="card">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How We Work
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple process. Real results.</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "You tell me the problem in plain language",
                desc: "No need to know the technical solution. Just describe what's breaking down — where leads get lost, what tasks eat up your time, what information is hard to find.",
              },
              {
                title: "I map out a simple system",
                desc: "I design a practical solution using tools you already have (Gmail, Google Sheets, forms) or lightweight tools that won't cost you hundreds per month.",
              },
              {
                title: "I build it, test it, and walk you through it",
                desc: "Once the system is ready, I send a walkthrough so your team knows how it works. No confusing technical documentation — just a clear explanation of what to do.",
              },
              {
                title: "You run it. I support it if needed.",
                desc: "Most systems are simple enough for your team to manage. If you need changes later, I offer support packages so you're never stuck.",
              },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the founder */}
      <section className="section bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl flex-shrink-0">
              👤
            </div>
            <div>
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
                The Person Behind It
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Hi, I&apos;m Phong Hoang</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                I&apos;m a Houston-based automation consultant who helps small businesses set up practical
                systems for lead tracking, follow-up, and client intake — using tools like Zapier,
                Make.com, Google Sheets, and n8n.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                I started LeadFlow Automation because I kept seeing the same problem: small business
                owners working hard to bring in leads, then losing them to slow response times or
                disorganized follow-up. The fix is almost always a simple system — not expensive
                software.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every project I take on gets a walkthrough and documentation so your team can run it
                independently. I&apos;m based in Houston and work with businesses across Texas and beyond.
              </p>
              <div className="mt-4">
                <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why simple */}
      <section className="section bg-blue-50">
        <div className="container-max max-w-3xl mx-auto text-center">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Philosophy
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why simple systems beat complicated software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-8">
            {[
              { icon: "👥", stat: "Used daily", desc: "A simple system your team actually uses is worth more than powerful software nobody opens." },
              { icon: "⚡", stat: "Set up fast", desc: "Most LeadFlow systems are live within 3–7 days — not 3–7 months of implementation." },
              { icon: "💰", stat: "Affordable", desc: "A one-time setup cost beats a $300/month software subscription your small team doesn't need." },
            ].map((c) => (
              <div key={c.stat} className="bg-white rounded-xl p-5 border border-blue-100">
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{c.stat}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to build something practical?"
        subheadline="Tell me what problem you need to solve and I'll design a simple system that fits your team and your budget."
        primaryLabel="Get a Free Automation Idea"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
