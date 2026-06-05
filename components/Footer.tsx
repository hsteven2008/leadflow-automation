import Link from "next/link";

const services = [
  { href: "/services#lead-tracker", label: "Lead Tracker Automation" },
  { href: "/services#client-intake", label: "Client Intake Automation" },
  { href: "/services#sheets-crm", label: "Google Sheets CRM" },
  { href: "/services#workflow", label: "Zapier / Make / n8n Setup" },
  { href: "/services#dashboard", label: "Custom Dashboard" },
  { href: "/services#bundle", label: "Website + Automation Bundle" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demos", label: "Demo Systems" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-white text-lg">
                LeadFlow<span className="text-blue-400"> Automation</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Simple AI-powered lead tracking systems, follow-up automations, and workflow tools
              for small businesses. Based in Houston, TX.
            </p>
            <div className="mt-4">
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Get a Free Automation Idea
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LeadFlow Automation. All rights reserved.</p>
          <p>Houston, TX · AI-powered automation for small businesses</p>
        </div>
      </div>
    </footer>
  );
}
