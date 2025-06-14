import AboutMeSection from "@/components/AboutMe";
import ExperienceCard from "@/components/ExperienceCards";
import HeroLayout from "@/components/HeroLayout";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <HeroLayout />

      <Skills />

      <AboutMeSection />
      <section className="py-12 bg-cover bg-center text-gray-200 relative">
        <div className="absolute inset-0 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <ExperienceCard />
          </div>
        </div>
      </section>
    </div>
  );
}
