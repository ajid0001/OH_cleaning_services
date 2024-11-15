import Link from "next/link";

const Header = ({ navTitle = "Ottawa Hybrid Cleaning Service" }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          {navTitle}
        </Link>
        <div>
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