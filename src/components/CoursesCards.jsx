import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Software Development & Engineering",
    courses: [
      "Advanced Object-Oriented Programming",
      "Software Design",
      "Design and Analysis of Algorithms",
      "Operating System Fundamentals",
      "Building E-Commerce Systems",
    ],
  },
  {
    title: "Cybersecurity & Networking",
    courses: [
      "Introduction to Computer Security",
      "Communication Networks",
      "Computer Network Protocols and Applications",
      "Network Security & Forensics",
    ],
  },
  {
    title: "Data & Business Systems",
    courses: [
      "Introduction to Database Systems",
      "Data Mining",
      "Introduction to Microeconomics & Macroeconomics",
      "Elementary Probability",
    ],
  },
  {
    title: "User Experience & Game Development",
    courses: [
      "Game Development I",
      "Game Mechanics",
      "User Interfaces",
      "Mobile User Interface",
      "Human-Computer Interaction",
    ],
  },
];

export default function CourseCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
      {categories.map((category, index) => (
        <HoverCard key={index} category={category} />
      ))}
    </div>
  );
}

function HoverCard({ category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-emerald-800/10 text-green-950 p-6 rounded-2xl shadow-lg cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ height: 100 }}
      animate={{ height: isHovered ? 200 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-sm font-bold mb-2 text-center">{category.title}</h2>
      {!isHovered && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-lg flex justify-center"
        >
          {/* ⬇ */}⇣
        </motion.span>
      )}
      {isHovered && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-sm"
        >
          {category.courses.map((course, i) => (
            <li key={i} className="mt-1">
              • {course}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}
