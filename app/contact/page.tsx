import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LeadFlow Automation. Describe your biggest workflow problem and get a free automation recommendation for your small business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Let&apos;s Talk Automation</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Tell me what you want to fix. I&apos;ll get back to you within 1 business day with
            practical ideas and an honest recommendation.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="section bg-gray-50">
        <div className="container-max max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What happens next?</h2>
                <ol className="space-y-4 mt-4">
                  {[
                    { n: "1", title: "Fill out the form", desc: "Tell me about your business and what you want to automate." },
                    { n: "2", title: "I review your request", desc: "Within 1 business day, I'll look at what you need." },
                    { n: "3", title: "You get a free idea", desc: "I'll reply with practical automation ideas and a rough quote." },
                    { n: "4", title: "We build it together", desc: "If it feels right, we scope the work and get started." },
                  ].map((s) => (
                    <li key={s.n} className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.n}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                        <p className="text-gray-500 text-sm">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Common requests</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {[
                    "Set up a Google Sheets CRM",
                    "Build a lead tracker from a contact form",
                    "Connect Zapier or Make workflows",
                    "Create a follow-up reminder system",
                    "Build a simple client intake form",
                    "Summarize emails with AI",
                    "Build a custom internal dashboard",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-blue-500">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  📍 Based in <strong className="text-gray-700">Houston, TX</strong> · Serving small businesses nationwide
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Get a Free Automation Idea</h2>
                <p className="text-gray-500 text-sm mb-6">No commitment. I reply within 1 business day.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
