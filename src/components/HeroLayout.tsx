// components/HeroLayout.tsx or HeroLayout.jsx
"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";

const HeroLayout = () => {
  return (
    <section className="w-full bg-[#0e0e2c] text-white relative overflow-hidden">
      {/* Glowing circle background */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-orange-500 opacity-20 blur-[180px] z-0"></div>

      {/* Content (Navbar + Intro) */}
      <div className="relative z-10">
        <Navbar />
        <Intro />
      </div>
    </section>
  );
};

export default HeroLayout;
