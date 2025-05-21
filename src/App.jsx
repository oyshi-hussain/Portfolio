import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import "./index.css";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
