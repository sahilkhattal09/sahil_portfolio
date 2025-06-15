"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={24} />,
    title: "Website Development",
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "App Development",
  },
  {
    icon: <FaServer size={24} />,
    title: "Website Hosting",
  },
];

const AboutMeSection = () => {
  return (
    <section className="bg-[#0e0e2c] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT: Services */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-500 hover:bg-white/10 transition-all"
            >
              <div className="text-orange-500">{service.icon}</div>
              <h4 className="text-lg font-semibold">{service.title}</h4>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: About Me */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-cyan-400"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 leading-relaxed"
          >
            I&apos;m a passionate Full-Stack Developer with expertise in
            building modern, responsive websites and applications. I focus on
            clean code, user-friendly experiences, and scalable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-xl font-bold text-orange-500"
          >
            120+ Projects Completed
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
