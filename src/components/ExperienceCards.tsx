"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { experiences } from "../Data/ExperienceData"; // Ensure correct import path

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="relative flex flex-col border-l-4 border-gray-300 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-6">
            {/* Timeline Dot */}
            <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            {/* Experience Header */}
            <div
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 text-sm md:text-xl">
                <FaBriefcase className="text-gray-700" /> {exp.company}
              </h3>
              {expandedIndex === index ? (
                <FaChevronUp className="text-gray-500 transition-transform duration-300" />
              ) : (
                <FaChevronDown className="text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <p className="text-gray-600 italic text-sm">{exp.role}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="text-gray-700 text-sm">{exp.shortDescription}</p>

            {/* Expandable Horizontal Scroll Section */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={
                expandedIndex === index
                  ? { opacity: 1, width: "auto" }
                  : { opacity: 0, width: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {expandedIndex === index && (
                <div className="mt-2 flex flex-col lg:flex-row overflow-x-auto bg-gray-100  rounded-lg space-x-4 scroll-smooth snap-x snap-mandatory max-w-full sm:max-w-xs md:max-w-full">
                  <p className="text-gray-700 whitespace-pre-line min-w-[300px] px-4 text-xs sm:text-sm md:text-base">
                    {exp.longDescription}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
