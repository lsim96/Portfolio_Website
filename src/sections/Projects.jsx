import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "E-Store",
    description:
      "A full-stack e-commerce web application built with React and TypeScript, featuring a modern client-server architecture. The project implements a complete online shopping platform with product management, user authentication, and RESTful API endpoints.",
    image: "/projects/project-1.jpg",
    tags: ["React", "Typescript", "Node.js", "Tailwindcss", "PostgreSQL"],
    link: "#",
    github: "https://github.com/lsim96/E-store_Webiste",
  },
  {
    title: "GuitarShop",
    description:
      "A responsive and interactive web application for browsing guitar models, specifications, and the musicians who play them. Built with React, TypeScript, and GraphQL, this project demonstrates modern frontend development practices with a focus on clean code and user experience.",
    image: "/projects/project-2.jpg",
    tags: ["Typescript", "GraphQL", "React"],
    link: "#",
    github: "https://github.com/lsim96/GuitarShop_Website",
  },
  {
    title: "JobSeeker",
    description:
      "A comprehensive job search and application platform built with Angular and TypeScript. This single-page application provides job seekers with an intuitive interface to browse opportunities, manage applications, and track their job search progress.",
    image: "/projects/project-3.jpg",
    tags: ["Angular", "SCSS", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/lsim96/JobSeeker_Website",
  },
  {
    title: "Calculator",
    description:
      "A clean and responsive calculator application built with React and TypeScript, demonstrating modern frontend development practices and strong fundamentals in component design and state management.",
    image: "/projects/project-4.jpg",
    tags: ["React", "Typescript", "Tailwindcss"],
    link: "#",
    github: "https://github.com/lsim96/Calculator",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* {Bg glows} */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* {Section header} */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-boldmt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              I worked on.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            This is the section showcasing my most recent projects that I worked
            on, from a simple calculator to much bigger projects.
          </p>
        </div>

        {/* {Projects Grid} */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* {Image} */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* {Overlay Links} */}

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* {Content section} */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                  group-hover:translate-x-1
                  group-hover: -translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {View all Projects} */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/lsim96?tab=repositories">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
