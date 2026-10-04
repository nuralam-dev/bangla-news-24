import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

export interface IHeader {
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

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headLine = await data.data;
  console.log(headLine);
  return (
    <div className="bg-red-700">
      <div className="flex items-center max-w-7xl mx-auto">
        <div className="bg-red-800 text-white p-1">
          <p>সর্বশেষ</p>
        </div>
        <MarqueeText className=" text-white" direction="right" duration={15}>
          {headLine.map((h: IHeader, ind: number) => (
            <span key={ind}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
