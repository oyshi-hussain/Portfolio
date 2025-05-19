import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Career from "./components/sections/Career";
import MyScene from "./MyScene";
import "./index.css";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/career" element={<Career />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <MyScene /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
