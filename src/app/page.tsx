import AboutMeSection from "@/components/AboutMe";
import Contact from "@/components/Contact";

import HeroLayout from "@/components/HeroLayout";
import Projects from "@/components/Projects";

import Skills from "@/components/Skills";
import Experience from "@/pages/Experience";

export default function Home() {
  return (
    <div>
      <HeroLayout />

      <Skills />
      <div id="about">
        <AboutMeSection />
      </div>

      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
