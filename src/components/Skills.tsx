"use client";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Redux",
  "Express.js",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section
      className="w-full py-16 px-4 bg-gray-800
 text-white"
    >
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border border-[#2a3142] text-sm px-3 py-1 rounded-full bg-[#101722] hover:bg-[#1c2533] transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
