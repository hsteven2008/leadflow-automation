import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  bestFor,
  includes,
  featured = false,
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl border-2 p-8 flex flex-col ${
        featured
          ? "border-blue-600 bg-blue-600 text-white shadow-xl scale-105"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      {featured && (
        <span className="inline-block bg-white text-blue-600 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 self-start">
          Most Popular
        </span>
      )}
      <h3 className={`text-2xl font-bold mb-1 ${featured ? "text-white" : "text-gray-900"}`}>{name}</h3>
      <p className={`text-4xl font-extrabold mb-1 ${featured ? "text-white" : "text-blue-600"}`}>{price}</p>
      <p className={`text-sm mb-6 ${featured ? "text-blue-100" : "text-gray-500"}`}>Best for: {bestFor}</p>

      <ul className="space-y-2 mb-8 flex-1">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className={`mt-0.5 ${featured ? "text-blue-200" : "text-blue-500"}`}>✓</span>
            <span className={featured ? "text-blue-50" : "text-gray-700"}>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`block text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
          featured
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
