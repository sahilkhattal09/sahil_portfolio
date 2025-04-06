"use client";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.a
      href="#contact"
      className="px-6 py-3 bg-gradient-to-r from-[#00C8FF] to-[#007BA7] text-white rounded-md text-lg font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-[#00E0FF] hover:to-[#0093C4] opacity-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} // Button appears after 1.5s
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Me
    </motion.a>
  );
};

export default ContactButton;
