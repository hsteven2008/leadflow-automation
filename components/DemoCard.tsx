import Link from "next/link";

interface DemoCardProps {
  icon: string;
  title: string;
  description: string;
  helpsWho: string;
  tools: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function DemoCard({
  icon,
  title,
  description,
  helpsWho,
  tools,
  ctaLabel = "Try Demo",
  ctaHref = "/demos",
}: DemoCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 flex-1">{description}</p>
      <p className="text-xs text-gray-500 mb-2">
        <span className="font-semibold text-gray-700">Who it helps:</span> {helpsWho}
      </p>
      <div className="flex flex-wrap gap-1 mb-4">
        {tools.map((t) => (
          <span key={t} className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <Link
        href={ctaHref}
        className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
