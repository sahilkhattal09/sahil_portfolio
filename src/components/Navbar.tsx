"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const navLinkStyle =
    "text-textLight hover:text-linkHover transition-colors duration-200";

  return (
    <div className="fixed w-full top-0 left-0 bg-[#0e0e2c] text-textLight p-4 flex items-center justify-between shadow-md z-[1000]">
      <div className="text-xl font-bold ml-4 hidden md:block">
        Sahil Khattal
      </div>

      <div className="hidden md:flex items-center space-x-6 mr-4 text-sm font-medium">
        <Link href="#home" className={navLinkStyle}>
          Home
        </Link>
        <Link href="#about" className={navLinkStyle}>
          About
        </Link>

        <Link href="#experience" className={navLinkStyle}>
          Experience
        </Link>

        <Link href="#projects" className={navLinkStyle}>
          Projects
        </Link>
        <Link href="#contact" className={navLinkStyle}>
          Contact
        </Link>

        <a
          href="https://www.linkedin.com/in/sahil-khattal-2a46b6236"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textLight hover:text-accent"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
