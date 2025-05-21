import { useRef, useState } from "react";
import appVideo from "../../assets/video/MentalHealthAppPrototype.webm";
import darkCity1 from "../../assets/images/darkCity1.png";
import endlessRunner from "../../assets/images/endlessRunner.png";
import dextersLab from "../../assets/images/dextersLab.png";
import ecoHouseStartImage from "../../assets/images/EcoHouseStartImage.png";
import eggTimer from "../../assets/images/eggTimer.png";
import RevealOnScroll from "./RevealOnScroll";
import mediVersed from "../../assets/images/mediversed.png";
import zencartopia from "../../assets/images/zencartopia.png";
import FallingLeaves from "../FallingLeaves";
import researchPaper from "../../assets/images/MentalHealthAppReport.pdf";
import InMobileVersion from "../InMobileVersion";

function Projects() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = InMobileVersion();

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center pt-32 pb-16"
    >
      {/* 🌿 Show leaves only if not on mobile */}
      {!isMobile && <FallingLeaves />}

      {/* Falling Leaves in background
      <FallingLeaves /> */}
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-[40px] font-bold mb-8 bg-gradient-to-r from-emerald-900 to-yellow-200 bg-clip-text text-transparent text-center tracking-wider">
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col gap-12">
          {/*  */}

          {/* Egg Timer Electron App */}
          <RevealOnScroll>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6 mt-4">
                  Egg Timer
                </h3>
                <p className="mb-4 text-justify">
                  An Egg Timer is a desktop application designed to help users
                  cook eggs perfectly by selecting their preferred egg type and
                  using a built-in countdown timer with sound alerts for precise
                  timing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Procreate",
                    "Figma",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Electron.js",
                    "Node.js",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/oyshi-hussain/Egg-Timer"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link &#8611;
                  </a>
                </div>
              </div>

              {/* Egg Timer Image and Figma Prototype */}
              <div className="md:w-1/3 w-full h-auto m-5">
                <a
                  href="https://www.figma.com/proto/zIkpiP27flshHbiGuWGRPw/Egg-Timer?node-id=4-3&p=f&t=4INcsAm7qt1nSYQv-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3&hide-ui=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={eggTimer}
                    alt="Egg Timer App Image"
                    className="w-full h-auto rounded-lg object-cover shadow-md hover:opacity-60 transition"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            {/* E-Commerce App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6 mt-4">
                  ZenCartopia
                </h3>
                <p className="mb-4 text-justify">
                  ZenCartopia is a full-stack web application built with React
                  for the frontend and Spring Boot for the backend. It serves as
                  an e-commerce platform that allows users to sign in, edit user
                  profiles, browse products, manage their shopping cart, and
                  place orders. This project demonstrates the integration of
                  React and Spring Boot to build a complete and functional web
                  application.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "React",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Java",
                    "Spring Boot",
                    "MySQL",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/oyshi-hussain/ZenCartopia"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link &#8611;
                  </a>
                </div>
              </div>

              {/* ZenCartopia Image and Figma Prototype */}
              <div className="md:w-1/2 w-full h-auto m-5">
                <a
                  href="https://www.figma.com/design/QoKbawuLQx1RH8hEJrvlGa/EECS4413ZenCartopiApparel?node-id=0-1&t=zHeCBROTv9zAbFxi-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={zencartopia}
                    alt="E-commerce App Image"
                    className="w-full h-auto rounded-lg object-cover shadow-md hover:opacity-60 transition"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            {/* Ctrl-Del-Hack Hackathon Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6 mt-4">
                  MediVersed
                  <p className="text-[15px] text-green-950/80 mt-2">
                    Ctrl+Hack+Del
                  </p>
                </h3>
                <p className="mb-4 text-justify">
                  MediVersed is a web-based platform that matches patients with
                  nurses based on specific care needs and nursing expertise.
                  Check out the GitHub link to see how it works.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Figma",
                    "React",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "MongoDB",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/oyshi-hussain/ctrl-hack-del"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link &#8611;
                  </a>
                </div>
              </div>

              {/* Mediversed Image and Figma Prototype */}
              <div className="md:w-1/3 w-full h-auto m-5">
                <a
                  href="https://www.figma.com/design/imLQkINAwPxOpcuDoT1Ccj/Hospital-App?node-id=0-1&t=fEwztCqjNWzxNdef-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mediVersed}
                    alt="MediVersed Image"
                    className="w-full h-auto rounded-lg object-cover shadow-md hover:opacity-60 transition"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Mental Health App Project */}

          <RevealOnScroll>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition">
              <div className="flex flex-col md:flex-row items-start gap-10 mb-2">
                <div className="md:w-1/2 w-full">
                  <div>
                    <h3 className="text-green-950/60 text-2xl font-bold mb-6 mt-6">
                      {" "}
                      York Mental Health App
                    </h3>
                    <p className="mb-4 text-justify">
                      A mental health app dedicated to promoting well-being
                      among university students Offers a comprehensive range of
                      features to support mental health Provides free resources
                      and tools for effective mental health management Aims to
                      help students deal with mental health issues and enhance
                      their overall well-being
                    </p>
                    <div className="flex flex-wrap gap-10 mb-20">
                      <div>
                        {["Figma"].map((tech, key) => (
                          <span
                            key={key}
                            className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="justify-between items-center">
                        <a
                          href="https://www.figma.com/proto/Eqwmrg3ClRr0PhPCUDvBSs/YorkU-Mental-Health-App?node-id=74-96&p=f&t=iYyCYY8zdlXO07cU-8&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A96&hide-ui=1"
                          className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Prototype &#8611;
                        </a>
                      </div>
                    </div>

                    {/* Research Paper */}
                    <h4 className="text-lg font-semibold text-emerald-900 mb-5">
                      Research Paper 📄
                    </h4>
                    <p className="text-sm mb-4">
                      You can view my research paper on the Mental Health App
                      prototype below:
                    </p>
                    <a
                      href={researchPaper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-green-950 bg-emerald-800/10 rounded-md hover:bg-emerald-700 hover:text-white transition-all"
                    >
                      View PDF
                    </a>
                  </div>
                </div>

                {/* Mental Health App Prototype */}
                <div className="md:w-1/2 w-full flex justify-end">
                  <div className="relative w-[280px] h-[580px] rounded-[2rem] overflow-hidden hover:opacity-60 transition">
                    {/* Video */}
                    <video
                      ref={videoRef}
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={appVideo} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Custom Play Button */}
                    {!isPlaying && (
                      <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="bg-white/90 hover:bg-white shadow-lg w-16 h-16 rounded-full flex items-center justify-center transition cursor-pointer">
                          <svg
                            className="w-6 h-6 fill-black"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Dar City Game 3 */}

          <RevealOnScroll>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6 mt-4">
                  The Dark City
                </h3>
                <p className="mb-4 text-justify">
                  This game follows a boy who, after losing his family, moves to
                  Theodora. By night, he works as a spy tasked with delivering a
                  package while evading menacing demons and other lurking
                  creatures, sneaking and sprinting through perilous paths. This
                  game was created using 3D Platformer Unity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Unity 3D", "C#"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://oyshi.itch.io/the-dark-city"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Game Link &#8611;
                  </a>
                </div>
              </div>

              {/* Dark City Game Image */}
              <div className="w-full h-auto">
                <img
                  src={darkCity1}
                  alt="The Dark City"
                  className="w-full rounded-lg object-cover shadow-md m-5"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Game 2 */}

          <RevealOnScroll>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6 mt-4">
                  Endless Runner
                </h3>
                <p className="mb-4 text-justify">
                  This game is about an endless runner, where the runner is
                  being chased by a monster and should avoid the obstacles in
                  order to survive. The game was created using 2D platformer
                  Unity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Unity 2D", "C#"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://oyshi.itch.io/endless-runner"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Game Link &#8611;
                  </a>
                </div>
              </div>

              {/* Endless Runner Image */}
              <div className="md:w-1/2 w-full h-auto m-5">
                <img
                  src={endlessRunner}
                  alt="Endless Runner Game"
                  className="w-full h-auto rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Dexter's Laboratory Game */}

          <RevealOnScroll>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6">
                  Dexter’s Labyrinth
                </h3>
                <p className="mb-4 text-justify">
                  This game is about a boy who lost his way home. This game was
                  created using Bitsy Game Maker. Bitsy is amazing and is easy
                  to use to make any game with little coding experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                    Bitsy
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://oyshi.itch.io/dexters-labyrinth"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Game Link &#8611;
                  </a>
                </div>
              </div>

              {/* Dexter's Lab's Images */}
              <div className="w-full h-auto m-5">
                <img
                  src={dextersLab}
                  alt="Dexter’s Labyrinth Game"
                  className="w-full h-auto rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Game Eco House */}

          <RevealOnScroll>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(96,102,53,0.2)] transition flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="md:w-2/3">
                <h3 className="text-green-950/60 text-2xl font-bold mb-6">
                  Eco House
                  <p className="text-[15px] text-green-950/80 mt-2">
                    ElleHack2020
                  </p>
                </h3>
                <p className="mb-4 text-justify">
                  Eco-House is an educational game designed to promote
                  environmental awareness. Players learn to sort trash into the
                  correct bins (trash, recycling, or organic), turn off lights
                  and appliances to conserve energy, and save water by turning
                  off taps. It was created as a group project at ElleHacks 2020.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-800/10 text-green-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                    Unity
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://oyshi.itch.io/eco-house"
                    className="text-green-950/80 hover:text-emerald-600 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Game Link &#8611;
                  </a>
                </div>
              </div>

              {/* EcoHouse Game Image */}
              <div className="md:w-1/2 w-full h-auto">
                <img
                  src={ecoHouseStartImage}
                  alt="Eco House Game"
                  className="w-full h-auto rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Projects;
