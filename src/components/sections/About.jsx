import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/yorklogo.jpg";
import zebralogo from "../../assets/zebra.png";
import "../../App.css";
import "../CoursesCards";
import CoursesCards from "../CoursesCards";
import RevealOnScroll from "./RevealOnScroll";
import Career from "./Career";
import FallingLeaves from "../FallingLeaves";
import resume from "../../assets/images/resume.pdf";
import InMobileVersion from "../InMobileVersion";
import ScrollIndicator from "../ScrollIndicator";

function About() {
  const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"];
  const backendSkills = ["Python", "Java", "Node.js", "C", "C#"];
  const isMobile = InMobileVersion();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0); // wait for render
      }
    }
  }, [location]);

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center pt-32 pb-16 relative overflow-hidden"
    >
      {/* 🌿 Show leaves only if not on mobile */}
      {!isMobile && <FallingLeaves />}

      {/* Falling Leaves in background
      <FallingLeaves /> */}
      <div className="z-10 px-4">
        <div className="max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            {/* <h2 className="text-[50px] font-bold mb-8 bg-gradient-to-r from-emerald-900 to-yellow-200 bg-clip-text text-transparent text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wider"> */}
            <h2 className="text-[40px] font-bold mb-8 bg-gradient-to-r from-emerald-900 to-yellow-200 bg-clip-text text-transparent text-center tracking-wider">
              About Me
            </h2>

            <div className="glass rounded-xl p-8 border-amber-100/20 border hover:shadow-lg hover:-translate-y-1 transition-all mb-0">
              <div className="text-grey-300 mb-6 font-sans text-justify space-y-4">
                <p>
                  Hi! I'm Tashfia Hussain Oyshi, a Computer Science graduate
                  from York University. My interest in technology began with a
                  fascination for robotics and how they navigate the world
                  autonomously. While I haven’t worked hands-on with robotics
                  yet, I’m continuing to sharpen my skills in Python, React, and
                  game development with Unity.
                </p>
                <p>
                  Outside of tech, I have a deep passion for travel, discovering
                  new places, savouring authentic cuisine, and capturing moments
                  through photography &#128248;. I enjoy playing basketball,
                  creating digital art, and reading. I also find comfort and
                  inspiration through playing the guitar. Feel free to explore
                  my work and check out the Projects section to see what I’ve
                  been building. If something catches your eye, I’d love to
                  connect!
                </p>
              </div>

              {/* Skills Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-alias"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-alias"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="flex justify-center mt-2 mb-2">
            <ScrollIndicator />
          </div>

          <RevealOnScroll>
            {/* Education Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 mt-10"></div>
            <div className="p-6 mb-6 rounded-xl border border-amber-100/20 hover:shadow-lg hover:-translate-y-1 transition-all">
              {/* <h3 className="text-xl font-bold mb-4 text-center">Education</h3> */}
              <h3 className="text-3xl font-extrabold mb-4 text-center">
                Education
              </h3>

              {/* <ul className="list-inside space-y-2"> */}
              <li className="flex justify-center space-x-4">
                <img src={logo} className="w-8 h-8" alt="University Logo" />
                <strong className="font-semibold">
                  B.Sc. Hons, Computer Science
                </strong>{" "}
                - York University
                <span className="rainbow-text opacity-70 flex items-center">
                  &nbsp; &#8968; Lassonde School of Engineering &#8971;
                  <img
                    src={zebralogo}
                    className="w-6 h-6 ml-1"
                    alt="Zebra Logo"
                  />
                </span>
              </li>
            </div>
            <br></br>

            {/* Resume Section */}
            <div className="mb-8 text-center p-6 rounded-xl border border-amber-100/20 hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold mb-2">Résumé</h3>
              <p className="mb-4 text-green-950">
                Want to know more about my experience and background?
              </p>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-950 bg-emerald-800/10 px-6 py-2 rounded-xl  hover:bg-emerald-700 hover:text-white transition-all duration-300 ease-in-out hover:animate-bounce"
              >
                Download Resume
              </a>
            </div>

            {/* Course work Section */}

            <div className="mt-12 p-6 rounded-xl border border-amber-100/20 hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-3xl font-extrabold mb-4 text-center">
                Relevant CourseWork:
              </h3>
              <div>
                <CoursesCards />
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Career Section */}
        <div id="career-section" className="mt-10">
          <Career />
        </div>
      </div>
    </section>
  );
}

export default About;
