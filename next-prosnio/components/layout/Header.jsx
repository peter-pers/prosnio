import Image from "next/image";

import logo from "../../public/personio-logo.png";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 mx-auto">
        <Image src={logo} className="pr-6" />
        <div className="text-lg text-gray-600 md:flex">
          <a
            href="#"
            className="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10"
          >
            Product
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
          >
            Why Personio
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
          >
            About Personio
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
