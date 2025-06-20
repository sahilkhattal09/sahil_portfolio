"use client";
import React from "react";

const skills = [
  "Javascript",
  "Node.js",
  "React.Js",
  "Angular.js",
  "Tailwind CSS",
  "Express js",
  "Mongo DB",
  "Sql",
];

export default function Skills() {
  return (
    <div className="w-full bg-[#181d33] py-4">
      <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-8 text-gray-400 text-sm md:text-base">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="hover:text-white transition duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
