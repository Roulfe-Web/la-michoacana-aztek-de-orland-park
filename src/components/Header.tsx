import { Link } from "react-router-dom";
import { useState } from "react";
import OrderOnlineButton from "./forms/ui/OrderOnlineButton";
import TopBorder from "./forms/ui/TopBorder";
import logo from "../assets/logo.webp"; // adjust path if needed

const doorDashUrl =
  "https://www.doordash.com/store/la-michoacana-azteca-orland-park-1431425/31846562/?srsltid=AfmBOorn-dw4u6kJBkn1Ei9SgLEFQFVJxdK__0syucelxuyAhxPHwPiU";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg shadow-md">
        <TopBorder />

        <div className="px-4 py-4 md:px-10 lg:px-24 lg:py-6">
          {/* Mobile header */}
          <div className="flex items-center justify-between md:hidden">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img
                src={logo}
                alt="La Michoacana Aztek Logo"
                className="h-14 w-14 rounded-full object-cover"
              />

              <span className="ml-2 text-lg leading-tight">
                La Michoacana Aztek
                <br />
                <span className="text-azul">de Orland Park</span>
              </span>
            </Link>

            <button
              onClick={handleMenuToggle}
              className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-0.5 w-7 bg-black transition duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-black transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-black transition duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          {/* Desktop header */}
          <div className="hidden items-center justify-between text-xl tracking-wider md:flex">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="La Michoacana Aztek Logo"
                className="h-20 w-20 rounded-full object-cover"
              />

              <span className="ml-2 text-2xl leading-tight">
                La Michoacana Aztek
                <br />
                <span className="text-azul">de Orland Park</span>
              </span>
            </Link>

            <ul className="flex flex-row gap-8 lg:gap-14">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition hover:hover-rosa">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <a href={doorDashUrl} target="_blank" rel="noopener noreferrer">
              <OrderOnlineButton text="Order Online" color="azul" size="lg" />
            </a>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`overflow-hidden border-t border-black/10 bg-bg transition-all duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }`}
        >
          <div
            className={`px-4 py-5 transition-all duration-300 ease-out ${
              isMenuOpen ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            <ul className="flex flex-col items-center gap-5 text-center text-xl tracking-wider">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="transition hover:hover-rosa"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center">
              <a
                href={doorDashUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <OrderOnlineButton
                  text="Order Online"
                  color="azul"
                  size="lg"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile floating Order Online bar */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 md:hidden">
        <a href={doorDashUrl} target="_blank" rel="noopener noreferrer">
          <OrderOnlineButton text="Order Online" color="azul" size="lg" />
        </a>
      </div>
    </>
  );
}

export default Header;