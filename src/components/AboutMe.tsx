"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer, FaLinkedin } from "react-icons/fa";

const services = [
  { icon: <FaCode size={24} />, title: "Website Development" },
  { icon: <FaMobileAlt size={24} />, title: "App Development" },
  { icon: <FaServer size={24} />, title: "Website Hosting" },
];

const AboutMeSection = () => {
  return (
    <section className="bg-[#0e0e2c] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT: Vertical Line + Items */}
        <div className="relative flex flex-col md:w-[48%] pl-10">
          {services.map((service, index) => (
            <div key={index} className="relative mb-14">
              {/* Dot */}
              <div className="absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full bg-orange-500 z-10" />

              {/* Line Segment */}
              {index !== services.length - 1 && (
                <div className="absolute left-[-15px] top-[1.75rem] h-10 w-0.5 bg-orange-500 opacity-30" />
              )}

              {/* Icon + Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 ml-3"
              >
                <div className="text-orange-500">{service.icon}</div>
                <h4 className="text-lg font-medium">{service.title}</h4>
              </motion.div>
            </div>
          ))}
        </div>

        {/* RIGHT: About Me */}
        <div className="md:w-[48%] space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-cyan-400"
          >
            About Me
          </motion.h2>

          {/* Mobile: Name + LinkedIn */}
          <div className="flex items-center gap-2 md:hidden">
            <p className="text-lg font-semibold text-white">Sahil Khattal</p>
            <a
              href="https://www.linkedin.com/in/sahil-khattal-2a46b6236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-orange-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 leading-relaxed"
          >
            I'm a passionate Full-Stack Developer with expertise in building
            modern, responsive websites and applications. I focus on clean code,
            user-friendly experiences, and scalable architecture.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-8"
          >
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-4xl font-bold text-white">
                120<span className="text-orange-500 text-3xl">+</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="text-4xl font-bold text-white">
                1<span className="text-orange-500 text-3xl">+</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">Year Experience</p>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="text-4xl font-bold text-white">
                10<span className="text-orange-500 text-3xl">+</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">
                Technologies Mastered
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
