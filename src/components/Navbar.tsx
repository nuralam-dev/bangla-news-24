import Link from "next/link";
interface INav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INav[] = data.data;

  // Filter categories where scrapable is true
  const navFilter = navs.filter((n) => n.scrapable);

  // Prepend a custom "হোম" (Home) item
  const categories = [{ title: "হোম", slug: "/" }, ...navFilter];

  return (
    <nav className="w-full border-b border-gray-100 py-3">
      <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap px-4">
        {categories.map((nav, ind) => {
          const isHome = nav.slug === "/";
          return (
            <Link
              key={ind}
              href={isHome ? "/" : `/category/${nav.slug}`}
              className={`text-sm md:text-base font-semibold transition-colors duration-200 ${
                isHome
                  ? "text-[#b90000] font-bold"
                  : "text-gray-800 hover:text-[#b90000]"
              }`}
            >
              {nav.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
