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
      {/* <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-900 to-yellow-100 bg-clip-text leading-right text-transparent text-left">
          Hello World!
        </h1>
        <p className="text-[#494d36af] text-lg mb-8 max-w-lg mx-auto text-justify">
          Welcome to my portfolio! I’m Tashfia Hussain Oyshi. Here, you’ll find
          a collection of my projects, achievements, and creative work. Explore
          and get to know more about my journey and passion for software
          development, designing, and creativity. I enjoy bringing ideas to life
          through design and development, always looking for new ways to improve
          and innovate. From designing intuitive user experiences to building
          interactive applications, I am passionate about blending technology
          and design. I love crafting visually appealing interfaces, sketching
          ideas in Procreate and Adobe Fresco, prototyping in Figma, and
          bringing them to life with development tools and creative
          problem-solving. Feel free to explore my work and see what I’ve been
          creating!
        </p>
      </div> */}
    </section>
  );
}

export default Home;
