interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

interface IType {
  curationId: string;
  title: string;
  articles: Article[];
}

import MainNews from "@/components/MainNews";

import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

const Page = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();

  const section: IType[] = data.data;

  const mainNews = section[0].articles;
  const otherSection: IType[] = section.slice(1);

  return (
    <div>
      

      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-1">
        {/* Main News */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          {/* Other News Sections */}
          <div className="grid gap-2 mt-4">
            {otherSection.map((otherNews) => (
              <div key={otherNews.curationId}>
                {/* Section Title */}
                <div className="border-b-2 border-red-700 pb-1">
                  <h1>{otherNews.title}</h1>
                </div>

                {/* News Cards */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {otherNews.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side News */}
        <div className="col-span-1">
          {/* Sidebar content will go here */}
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
};

export default Page;