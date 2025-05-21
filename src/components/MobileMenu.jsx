import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#4c4c36d5] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out

        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* cross button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        {/* &times; */}
        &#9938;
      </button>

      {/* <a
        href="/home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold hover:text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        Home
      </a> */}

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold hover:text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        About
      </Link>

      <Link
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold hover:text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        Projects
      </Link>

      {/* <a
        href="#career"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold hover:text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        Career
      </a> */}

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold hover:text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        Contact
      </Link>

      {/* <a
        href="#aboutme"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold hover:text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        More About Me
      </a> */}
    </div>
  );
}

export default MobileMenu;
