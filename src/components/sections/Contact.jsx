import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CatAnimation from "../CatAnimation";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 px-4">
        {/* 🐾 Left: animated cat */}
        <CatAnimation />

        {/* 💌 Right: contact info */}
        <div className="glass rounded-xl p-8 border-amber-100/20 border hover:shadow-lg hover:-translate-y-1 transition-all mb-10">
          <div className="w-200">
            <h2 className="text-4xl font-extrabold tracking-wide mb-6 font-quicksand text-left">
              <span className="bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent ">
                Get In Touch
              </span>{" "}
              <span>☕️</span>
            </h2>

            <p className="text-md text-[#4b4b3e] mb-6">
              I'd love to hear from you — whether it's for a project, a
              question, or just to connect! Feel free to reach out via email
              with your name and contact details, or connect with me through the
              platforms below.
            </p>

            <a
              href="mailto:oyshi.hussain@gmail.com"
              className="text-md font-medium text-[#4b4b3e] hover:text-emerald-950 transition"
            >
              oyshi.hussain@gmail.com
            </a>

            <div className="flex gap-6 text-3xl mt-6 text-emerald-900">
              <a
                href="https://github.com/oyshi-hussain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4b4b3e] transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tashfiahussainoyshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4b4b3e] transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
