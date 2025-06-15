"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { experiences } from "../Data/ExperienceData";

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-[#0e0e2c] text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>

      <div className="relative pl-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-14">
            {/* Bullet */}
            <div className="absolute -left-[18px] top-2 w-2.5 h-2.5 bg-orange-500 rounded-full z-10" />

            {/* Line (except last item) */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[-15px] top-[2.2rem] h-36 sm:h-44 w-0.5 bg-orange-500 opacity-30" />
            )}

            {/* Experience Header */}
            <div
              className="flex items-center justify-between cursor-pointer mb-1"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <FaBriefcase className="text-orange-300" /> {exp.company}
              </h3>
              {expandedIndex === index ? (
                <FaChevronUp className="text-gray-300" />
              ) : (
                <FaChevronDown className="text-gray-300" />
              )}
            </div>

            {/* Role and Duration */}
            <p className="text-sm text-gray-400 italic">{exp.role}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>

            {/* Short Description */}
            <p className="text-sm text-gray-300 mt-1">{exp.shortDescription}</p>

            {/* Expandable Long Description */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                expandedIndex === index
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {expandedIndex === index && (
                <div className="mt-4 bg-white/10 p-4 rounded-md text-sm text-gray-200">
                  <p className="whitespace-pre-line">{exp.longDescription}</p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
