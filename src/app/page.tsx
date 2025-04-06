import ExperienceCard from "@/components/ExperienceCards";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Intro />
      <div className="w-full h-[1px] bg-gray-700" />
      <Skills />
      <div className="w-full h-[1px] bg-gray-700" />

      <section className="py-12 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <ExperienceCard />
        </div>
      </section>
    </div>
  );
}
