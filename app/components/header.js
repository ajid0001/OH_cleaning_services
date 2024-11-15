import Link from "next/link";

const Header = ({ navTitle = "Ottawa Hybrid Cleaning Service" }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            {/* Logo */}
          </Link>
          <Link href="#" className="text-2xl font-bold">
            {navTitle}
          </Link>
        </div>

        <div className="flex flex-wrap space-x-8 text-center">
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/booking" className="mr-4">
            Get a Quote
          </Link>
          <Link href="/services" className="mr-4">
            Services
          </Link>
          <Link href="/contact" className="mr-4">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
