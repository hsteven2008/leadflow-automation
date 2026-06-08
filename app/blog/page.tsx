import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical articles on AI automation for small businesses — lead tracking, follow-up systems, Google Sheets CRMs, Zapier vs Make, and more.",
};

export const posts = [
  {
    slug: "5-signs-your-small-business-needs-automation",
    title: "5 Signs Your Small Business Needs Automation",
    description:
      "If any of these sound familiar, manual workflows are costing you time and leads every single week.",
    category: "Getting Started",
    readTime: "5 min read",
    date: "June 2025",
  },
  {
    slug: "google-sheets-crm-save-lost-leads",
    title: "How a Simple Google Sheets CRM Can Save Lost Leads",
    description:
      "You don't need Salesforce to stop losing customers. A clean Google Sheet with the right structure is often all a small team needs.",
    category: "CRM & Lead Tracking",
    readTime: "6 min read",
    date: "June 2025",
  },
  {
    slug: "real-cost-of-doing-everything-manually",
    title: "The Real Cost of Doing Everything Manually in Your Small Business",
    description:
      "Manual processes feel free because you're not paying for software. But the real cost — in time, missed leads, and errors — adds up fast.",
    category: "Automation ROI",
    readTime: "5 min read",
    date: "May 2025",
  },
  {
    slug: "what-is-client-intake-automation",
    title: "What Is a Client Intake Automation?",
    description:
      "A client intake automation collects, organizes, and routes new customer requests — automatically. Here's how it works and why your business probably needs one.",
    category: "Client Intake",
    readTime: "4 min read",
    date: "May 2025",
  },
  {
    slug: "ai-summarize-customer-emails",
    title: "How AI Can Summarize Customer Emails and Save Admin Time",
    description:
      "Spending hours just reading and sorting emails? Here's how AI email summarization works for small businesses and what it actually saves.",
    category: "AI Automation",
    readTime: "5 min read",
    date: "May 2025",
  },
  {
    slug: "stop-losing-leads-from-contact-form",
    title: "How to Stop Losing Leads from Your Website Contact Form",
    description:
      "Most contact form submissions either go to a cluttered inbox or disappear entirely. Here's a simple automation fix that captures every one.",
    category: "Lead Tracking",
    readTime: "4 min read",
    date: "April 2025",
  },
  {
    slug: "why-follow-up-reminders-matter",
    title: "Why Follow-Up Reminders Matter for Small Businesses",
    description:
      "Studies show most sales happen after the 5th follow-up. Most small businesses never send more than one. Here's how to automate the rest.",
    category: "Follow-Up Automation",
    readTime: "4 min read",
    date: "April 2025",
  },
];

const categories = [...new Set(posts.map((p) => p.category))];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Automation Blog</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Practical guides on lead tracking, follow-up automation, and workflow tools for small businesses.
            No fluff, no hype — just things that work.
          </p>
        </div>
      </section>

      {/* Category filter (visual only — no JS routing needed for static) */}
      <section className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="container-max flex flex-wrap gap-2 justify-center">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">All Posts</span>
          {categories.map((c) => (
            <span key={c} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-default transition-colors">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to automate your business?"
        subheadline="Get a free automation idea based on your specific business type and biggest problem."
        primaryLabel="Get a Free Idea"
        primaryHref="/contact"
        secondaryLabel="Try the Idea Generator"
        secondaryHref="/demos"
      />
    </>
  );
}
