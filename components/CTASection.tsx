import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  headline = "Ready to stop losing leads?",
  subheadline = "Get a free automation idea for your business. No commitment required.",
  primaryLabel = "Get a Free Automation Idea",
  primaryHref = "/contact",
  secondaryLabel = "View Demo Systems",
  secondaryHref = "/demos",
}: CTASectionProps) {
  return (
    <section className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{headline}</h2>
        <p className="text-blue-100 text-lg mb-8">{subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors text-base"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
