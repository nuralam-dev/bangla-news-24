import Image from "next/image";
interface INews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const MainNews = ({ news }: { news: INews[] }) => {
  if (!news || news.length === 0) return null;

  const firstNews = news[0];
  const otherNews = news.slice(1);

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Main Featured News (Left Column) */}
      <div className="md:col-span-6 flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.title || "Featured News"}
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <span className="text-red-600 text-sm font-semibold block mb-2">
              {firstNews.category || "প্রধান খবর"}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
              {firstNews.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {firstNews.description}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary News List (Right Column) */}
      <div className="md:col-span-6 flex flex-col gap-3">
        {otherNews.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
          >
            <span className="text-red-600 text-xs font-semibold block mb-1">
              {item.category || "প্রধান খবর"}
            </span>
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
