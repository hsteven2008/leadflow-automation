import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  features?: string[];
}

export default function ServiceCard({ icon, title, description, href, features }: ServiceCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
      {features && (
        <ul className="space-y-1 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 mt-0.5">✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <Link href={href} className="text-blue-600 font-semibold text-sm hover:underline mt-auto">
          Learn more →
        </Link>
      )}
    </div>
  );
}
