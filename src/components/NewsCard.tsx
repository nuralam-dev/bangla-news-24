
import Image from "next/image";
import Link from "next/link";

interface News {
  id: string | number;
  imageUrl: string;
  title: string;
  description?: string;
  category?: string;
}

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={news.imageUrl}
          alt={news.title || "News"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category */}
        <div className="absolute left-3 top-3">
          <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            {news.category || "প্রধান খবর"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-red-600">
          {news.title}
        </h2>

        {news.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {news.description}
          </p>
        )}

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-500">
            সর্বশেষ খবর
          </span>

          <Link href={`/news/${news.id}`}>
          <button className="text-sm font-semibold text-red-600 transition-colors hover:text-red-800">
            বিস্তারিত →
          </button></Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

