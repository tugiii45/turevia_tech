import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Products", path: "/products" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#0B1120]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition group-hover:scale-105">
            T
          </div>

          <div>
            <span className="block text-lg font-bold tracking-tight text-white">
              Turevia Technologies
            </span>

            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Technology • Innovation • Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 md:block"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-800/70 bg-[#0B1120] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-500/10 text-cyan-400"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;