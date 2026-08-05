"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "ConnectX",
    description:
      "A communication platform that enables users to connect through secure messaging and collaboration features with a modern and user-friendly interface.",
    image: "/connectx.png",
    tags: ["React", "CSS", "Node.js", "WebSockets"],
    githubUrl: "https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-",
    featured: true,
  },
  {
    title: "NovaAI",
    description:
      "An AI-powered assistant designed to automate tasks, improve productivity, and simplify everyday workflows for individuals and teams.",
    image: "/novaai.png",
    tags: ["Next.js", "Tailwind CSS", "OpenAI API", "Python"],
    githubUrl: "https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-",
    featured: true,
  },
  {
    title: "SkyCast",
    description:
      "A weather application that provides real-time weather forecasts, location-based updates, and an intuitive user experience.",
    image: "/skycast.png",
    tags: ["HTML", "JavaScript", "Weather API", "CSS"],
    githubUrl: "https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-",
  },
  {
    title: "FitForge AI",
    description:
      "An AI-powered fitness application that helps users create personalized workout plans and track their fitness progress with intelligent recommendations.",
    image: "/fitforge.png",
    tags: ["React Native", "AI Integration", "Tailwind", "Node.js"],
    githubUrl: "https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <ScrollReveal>
            <span className="section-label block mb-3">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all active:scale-95 bg-white/5 border border-white/10 backdrop-blur-md shadow-sm"
            >
              <Github size={15} />
              View All on GitHub
            </a>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <motion.div
                className="glass-panel rounded-3xl overflow-hidden flex flex-col group shadow-xl"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden border-b border-white/5 bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                            aria-label={`GitHub for ${project.title}`}
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
