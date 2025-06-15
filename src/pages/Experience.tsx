"use client";
import ExperienceCard from "../components/ExperienceCards";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="py-12 bg-cover bg-center text-gray-200 relative bg-[#0e0e2c] overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500 rounded-full opacity-20 blur-[150px] z-0"></div>
      <div className="absolute left-[-120px] bottom-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full opacity-10 blur-[120px] z-0"></div>

      {/* Faded Briefcase Icon (right side) */}
      <div className="absolute right-16 top-[340px] text-[220px] text-white opacity-5 z-0 hidden lg:block">
        <FaBriefcase />
      </div>

      {/* Section Header */}
      <div className="bg-[#181d33] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-400 text-lg md:text-xl font-semibold">
            Experience
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
