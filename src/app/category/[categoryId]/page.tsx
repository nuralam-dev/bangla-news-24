import NewsCard from "@/components/NewsCard";

const CategoryPage = async ({ params }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category news");
  }

  const data = await res.json();

  const categoryNews = data.data;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold border-b-2 border-b-red-700">{data.title}</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
