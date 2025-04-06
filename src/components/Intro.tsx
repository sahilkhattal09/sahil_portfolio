"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactButton from "./Contact";
import ResumeButton from "./ResumeButton";

const Intro = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-[75vh] md:h-[65vh] sm:h-[55vh] text-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('/Laptop.jpg')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Small Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg text-gray-400"
        >
          Hi, I'm
        </motion.h2>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white mt-2"
        >
          Sahil Khattal
        </motion.h1>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-lg text-gray-300 mt-4 max-w-xl"
        >
          Full-Stack Developer specializing in building scalable,
          high-performance applications with modern web technologies. Passionate
          about creating seamless, user-centric digital experiences."
        </motion.p>

        {/* Call to Action */}
        <div className="mt-6">
          <ResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Intro;
