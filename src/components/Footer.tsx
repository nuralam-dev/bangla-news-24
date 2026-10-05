import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo / Website Name */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">News Portal</h2>
            <p className="mt-1 text-sm text-gray-500">
              সর্বশেষ খবর, সবসময় আপনার সাথে।
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-5 text-sm text-gray-600">
            <Link href="./" className="transition hover:text-red-500">
              Home
            </Link>
            <Link href="/" className="transition hover:text-red-500">
              Category
            </Link>
            <Link href="/" className="transition hover:text-red-500">
              About
            </Link>
            <Link href="/" className="transition hover:text-red-500">
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-200 pt-5 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} News Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
