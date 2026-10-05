import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

const page = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;

  return (
    <div>
      <Marquee></Marquee>
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
        </div>
        <div className=" col-span-1"></div>
      </div>
    </div>
  );
};

export default page;
