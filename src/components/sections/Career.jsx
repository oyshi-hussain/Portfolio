import React from "react";
import yorklogo from "../../assets/yorklogo.jpg";
import libertylogo from "../../assets/libertylogo.jpg";
import lassondelogo from "../../assets/lassondelogo.jpg";
import yorkulogo from "../../assets/yorkulogo.png";
import RevealOnScroll from "./RevealOnScroll";
import PeerHelperAward from "../../assets/images/PeerHelperAward.pdf";

const experiences = [
  {
    title: "Exam Monitor & Support Assistance",
    company: "York University",
    date: ["Dec 2024 | Apr 2025"],
    logo: yorklogo,
    description: [
      "Supervised exams, preventing misconduct.",
      "Managed materials, provided instructions, ensured a quiet environment.",
      "Collaborated with faculty to uphold standards.",
    ],
  },
  {
    title: "Service Desk Analyst (Co-op)",
    company: "Liberty Utilities Canada Corp.",
    date: "May 2024 - Aug 2024",
    logo: libertylogo,
    description: [
      "Resolved 100+ ServiceHub tickets daily, optimizing response time and reducing backlog.",
      "Diagnosed and fixed network share, security group (Citrix, Kubra), and mailbox access issues.",
      "Configured Active Directory, Microsoft Exchange, and Azure permissions, enhancing security compliance.",
      "Automated group management in Microsoft Exchange Azure via PowerShell scripts.",
      "Led social committee and mentorship programs.",
    ],
  },
  {
    title: "Exam Monitor & Support Assistance",
    company: "York University",
    date: "Apr 2024",
    logo: yorklogo,
    description: [
      "Supervised exams, ensuring fairness.",
      "Managed materials, maintained a quiet environment.",
      "Collaborated with faculty.",
    ],
  },
  {
    title: "Bookstore Distribution & Customer Service Assistant",
    company: "York University Bookstore",
    date: "Jan 2024 – Apr 2024",
    logo: yorkulogo,
    description: [
      "Delivered excellent customer service and processed transactions efficiently.",
      "Managed inventory, organized merchandise, and fulfilled customer orders.",
      "Collaborated with cashiers to ensure smooth operations during peak hours.",
    ],
  },
  {
    title: "Service Desk Analyst (Co-op)",
    company: "Liberty Utilities Canada Corp.",
    date: "Sep 2023 - Jan 2024",
    logo: libertylogo,
    description: [
      "Resolved numerous tickets daily to reduce backlog.",
      "Fixed network, security, and mailbox issues.",
      "Managed Active Directory, Exchange, and Azure.",
      "Documented user access for streamlined onboarding.",
      "Built a SharePoint site with HTML/CSS for better document management",
    ],
  },
  {
    title: "Bookstore Distribution & Customer Service Assistant",
    company: "York University Bookstore",
    date: "Aug 2021 - Aug 2023",
    logo: yorkulogo,
    description: [
      "Provided customer service and processed orders.",
      "Managed inventory and organized books.",
      "Operated as a cashier, collaborating during peak hours.",
      "Assisted with small store projects.",
    ],
  },
  {
    title: "K2I Program Mentor (Co-op)",
    company: "Lassonde School of Engineering",
    date: "May 2021 - Aug 2021",
    logo: lassondelogo,
    description: [
      "Planned and delivered STEM programs for K-12 students, aligning with the Ontario curriculum and UN Sustainable Development Goals.",
      "Mentored students, provided homework support, and guided participants in the BEST Program.",
      "Developed projects using Arduino and Micro:bit.",
    ],
  },
  {
    title: "Peer Helper",
    company: "Lassonde School of Engineering",
    date: "Sep 2020 - Apr 2021",
    logo: lassondelogo,
    description: [
      "Organized social events to help new students transition smoothly.",
      "Provided academic coaching and peer counseling.",
      "Received the 'Peer Helper Award of Excellence' for leadership.",
      <a
        href={PeerHelperAward}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-green-950 bg-emerald-800/10 rounded-md hover:bg-emerald-700 hover:text-white transition-all"
      >
        View Certificate
      </a>,
    ],
  },
];

function Career() {
  return (
    <section id="career" className="min-h-screen flex justify-center py-5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-6xl mx-auto p-19 rounded-xl border border-amber-100/20 hover:shadow-lg hover:-translate-y-1 transition-all">
          <RevealOnScroll>
            <h2 className="text-4xl font-extrabold text-center mb-12">
              Work Experience
            </h2>
          </RevealOnScroll>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 left-1/2 w-1 bg-gray-600 h-full transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <RevealOnScroll key={index}>
                <div className="relative flex items-start mb-12">
                  <div
                    className={`absolute text-md text-green-950 italic mt-1 p-5 font-bold font-sans ${
                      index % 2 === 0 ? "right-[55%]" : "left-[55%]"
                    }`}
                  >
                    {Array.isArray(exp.date) ? exp.date.join(" ") : exp.date}
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-20 h-20 bg-gray-900 border-3 border-gray-500 rounded-full">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt="Company Logo"
                        className="w-17 h-17 rounded-full"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">Logo</span>
                    )}
                  </div>

                  <div
                    className={`bg-emerald-800/10 p-8 rounded-lg shadow-lg w-[45%] z-10 mb-20 ${
                      index % 2 === 0
                        ? "ml-auto text-right mr-[-15px]"
                        : "mr-auto text-left ml-[-15px]"
                    }`}
                  >
                    <h3 className="text-xl font-sans font-bold text-left mb-4">
                      {exp.title}
                    </h3>
                    <p className="text-[18px] italic font-bold text-green-950 text-left opacity-70 mb-4">
                      {exp.company}
                    </p>

                    {exp.description.length > 0 && (
                      <ul className="mt-2 text-md space-y-1 text-left">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="list-disc list-inside mb-3">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
