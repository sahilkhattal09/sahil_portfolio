"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "E-Commerce Store",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Redux JS, MongoDB, Node.js",
    ],
    image: "/projectimages/Shoppingwebsite.png",
    github: "https://github.com/sahilkhattal09/Shopify",
    live: "https://ecom-demo.vercel.app",
    description:
      "A modern e-commerce platform where users can browse products, add items to the cart. Built with React.js and Redux for state management.",
  },
  {
    name: "Crowdfunding Platform",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/projectimages/crowdfunding.png",
    github: "https://github.com/sahilkhattal09/Crowd_Funding_",
    live: "https://crowdfund-demo.vercel.app",
    description:
      "A full-stack crowdfunding platform allowing users to create, view, and donate to fundraising campaigns. Features secure backend APIs, campaign filtering, and responsive design.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-[1] text-white bg-[#0e0e2c] overflow-hidden"
    >
      {/* Section Heading */}
      <div className="bg-[#181d33] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-400 text-lg md:text-xl font-semibold">
            Projects
          </h2>
        </div>
      </div>

      {/* Projects Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-10 relative overflow-hidden rounded-xl"
            >
              {/* Orange glow effect inside each card */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500 blur-2xl opacity-20 rounded-full z-0" />

              {/* Project Info */}
              <div className="flex-1 space-y-4 max-w-xl relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="border border-gray-500 text-gray-300 bg-white/5 backdrop-blur-md text-xs md:text-sm px-3 py-1 rounded-full hover:bg-white/10 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-200"
                  >
                    <FaGithub /> View GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-orange-600"
                  >
                    <FiExternalLink /> View Project
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative flex-1 w-full max-w-[500px] pt-4 lg:pt-0 z-10">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
