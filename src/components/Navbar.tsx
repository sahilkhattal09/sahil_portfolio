"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const navLinkStyle =
    "text-white hover:text-gray-300 transition-colors duration-200";

  return (
    <div
      className="fixed w-full top-0 left-0 bg-[#121a26] backdrop-blur-sm 
              text-[#e5e7eb] p-4 flex items-center shadow-md z-[1000]"
    >
      {/* Navbar Links - Hidden on Small Screens */}
      <div className="hidden md:flex space-x-6 flex-1 ml-4">
        <Link href="#home" className={navLinkStyle}>
          Home
        </Link>
        <Link href="#about" className={navLinkStyle}>
          About
        </Link>
        <Link href="#services" className={navLinkStyle}>
          Services
        </Link>
        <Link href="#contact" className={navLinkStyle}>
          Contact
        </Link>
      </div>

      {/* Centered Name - Always Visible */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-medium">
        Sahil Khattal
      </div>

      {/* LinkedIn Icon (Right) */}
      <div className="flex-1 flex justify-end">
        <a
          href="https://www.linkedin.com/in/sahil-khattal-2a46b6236"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0a66c2] transition duration-300 ease-in-out"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
