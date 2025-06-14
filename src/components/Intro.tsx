"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-white min-h-[80vh] px-8 py-12 relative overflow-hidden bg-[#0e0e2c]">
      {/* BACKGROUND GRADIENT GLOW (behind right section) */}
      <div className="absolute right-0 md:right-20 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-orange-500 opacity-20 blur-3xl z-0 pointer-events-none" />

      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl"
        >
          Hello<span className="text-orange-500">.</span>
        </motion.p>

        <div className="flex items-center gap-4">
          <div className="w-10 h-[2px] bg-orange-500" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold"
          >
            I’m Sahil
          </motion.h2>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Software Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-lg text-gray-300 mt-4 max-w-xl"
        >
          Full-Stack Developer specializing in building scalable,
          high-performance applications with modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex gap-4 mt-6 justify-center md:justify-start"
        >
          <button className="bg-[#ff6a3d] px-6 py-2 rounded-md text-white hover:bg-[#ff3d00] transition-all duration-300">
            Got a project?
          </button>
          <ResumeButton className="border border-[#ff6a3d] text-white px-6 py-2 rounded-md hover:bg-[#ff6a3d] transition-all duration-300" />
        </motion.div>
      </div>

      {/* RIGHT DESIGN CIRCLE */}
      <div className="relative mt-12 md:mt-0 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center z-10">
        <div className="absolute w-full h-full rounded-full border-2 border-orange-400 animate-pulse" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-500 text-4xl">
          {"<"}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500 text-4xl">
          {">"}
        </div>
      </div>
    </section>
  );
};

export default Intro;
