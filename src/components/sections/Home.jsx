import React from "react";
import RevealOnScroll from "./RevealOnScroll";
import MyScene from "../../MyScene.jsx";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <MyScene />
      </div>
    </section>
  );
}

export default Home;
