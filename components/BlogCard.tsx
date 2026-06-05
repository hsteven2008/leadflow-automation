import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  date?: string;
}

export default function BlogCard({ title, description, category, readTime, slug, date }: BlogCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-gray-400 text-xs">{readTime}</span>
        {date && <span className="text-gray-400 text-xs ml-auto">{date}</span>}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-blue-600 font-semibold text-sm hover:underline"
      >
        Read article →
      </Link>
    </div>
  );
}
