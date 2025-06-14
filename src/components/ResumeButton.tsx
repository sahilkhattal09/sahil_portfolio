"use client";
import React from "react";
import { motion } from "framer-motion";

const ResumeButton = ({ className = "" }) => {
  return (
    <motion.a
      href="/MohammedSahil_resume.pdf"
      download
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-blue-600 text-white font-semibold py-2 px-5 md:px-6 md:py-3 text-sm md:text-base rounded-lg hover:bg-blue-700 transition text-center ${className}`}
    >
      Download Resume
    </motion.a>
  );
};

export default ResumeButton;
