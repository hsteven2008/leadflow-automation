import Link from "next/link";

interface LeadMagnetCardProps {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
}

export default function LeadMagnetCard({ icon, title, description, ctaLabel, ctaHref, badge }: LeadMagnetCardProps) {
  return (
    <div className="card border-2 border-blue-100 hover:border-blue-300 transition-colors text-center flex flex-col items-center">
      {badge && (
        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
          {badge}
        </span>
      )}
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-5 leading-relaxed">{description}</p>
      <Link
        href={ctaHref}
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
