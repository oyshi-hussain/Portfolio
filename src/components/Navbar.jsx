import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.ico";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#f4ffbb] font-bold transition-colors"
      : "text-grey-300 hover:text-[#f4ffbb] transition-colors";

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#4c4c36d5] backdrop-blur-lg border-amber-100 shadow-lg shadow-[#2e2e20]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* <a> </a> logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-bold hover:text-[#f4ffbb] transition-colors tracking-wide"
          >
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            Tashfia Hussain Oyshi
          </NavLink>

          {/* Hamburger Menu for Mobile Menu */}
          <div
            className="w-10 h-10 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9778;
            {/* &#8984; */}
          </div>

          {/* Desktop Menu */}

          <div className="text-lg hidden md:flex items-center space-x-10">
            {/* Navigatin */}
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => {
                //Scrolls up only if it's on the same about page
                if (window.location.pathname === "/about") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              About
            </NavLink>
            <a
              href="/about#career-section"
              className="text-grey-300 hover:text-[#f4ffbb] transition-colors"
            >
              Career
            </a>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
