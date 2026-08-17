import { useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/discover" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold tracking-tight text-white"
          >
            Cine
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Scope
            </span>
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={
                      isActive
                        ? "rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300"
                        : "rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-300 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-800 py-3 md:hidden">
            <ul className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={
                        isActive
                          ? "block rounded-lg bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300"
                          : "block rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;