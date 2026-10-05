const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch most-read news");
  }

  const result = await res.json();

  // Handle different API response structures
  const newsList = Array.isArray(result)
    ? result
    : Array.isArray(result.data)
      ? result.data
      : [];

  return (
    <section className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white mt-3 p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">সর্বাধিক পঠিত</h2>

      {newsList.length > 0 ? (
        <div className="space-y-6">
          {newsList.slice(0, 10).map((news, index) => (
            <article key={news.id ?? index} className="flex items-start gap-4">
              <span className="shrink-0 text-3xl font-medium leading-tight text-red-500">
                {index + 1}
              </span>

              <h3 className="text-lg font-semibold leading-8 text-gray-900 transition-colors hover:text-red-600 sm:text-xl">
                {news.title}
              </h3>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">কোনো সংবাদ পাওয়া যায়নি।</p>
      )}
    </section>
  );
};

export default MostRead;
