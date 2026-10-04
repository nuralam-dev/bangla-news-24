import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Spacer for balanced centering (optional) */}
        <div className="hidden md:block w-36"></div>

        {/* Center: Logo & Title / Date */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Bangla News 24 Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain rounded-xl"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-[#b90000] tracking-wide leading-tight">
              Bangla News 24
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-normal">
              {date}
            </p>
          </div>
        </div>
        {/* Right Side: Sign In / Sign Up */}
        <div className="flex items-center gap-3">
          <button className="text-gray-800 font-medium hover:bg-[#960000] hover:text-white rounded-md transition-colors px-3 py-1.5 text-sm md:text-base">
            সাইন ইন
          </button>
          <button className="bg-[#b90000] hover:bg-[#960000] text-white font-medium px-4 py-1.5 rounded-md text-sm md:text-base transition-colors">
            সাইন আপ
          </button>
        </div>
      </div>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
