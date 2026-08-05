"use client";

import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const skillCategories = [
  {
    label: "Frontend",
    color: "cyan",
    skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    color: "blue",
    skills: ["Node.js", "Python", "REST APIs", "Express.js"],
  },
  {
    label: "Mobile",
    color: "green",
    skills: ["Android Development", "Kotlin", "Java", "React Native"],
  },
  {
    label: "AI & Automation",
    color: "purple",
    skills: ["AI Automation", "AI Chatbots", "OpenAI API", "LLM Integration"],
  },
  {
    label: "Design",
    color: "orange",
    skills: ["UI Design", "UX Design", "Figma", "Prototyping", "Wireframing"],
  },
  {
    label: "Tools & Other",
    color: "emerald",
    skills: ["Git & GitHub", "Web Development", "Web Applications", "Code Debugging", "API Integration"],
  },
];

const colorMap: Record<string, { label: string; tag: string; icon: string }> = {
  cyan: {
    label: "text-cyan-400",
    tag: "hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30",
    icon: "text-cyan-400/40",
  },
  blue: {
    label: "text-blue-400",
    tag: "hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30",
    icon: "text-blue-400/40",
  },
  green: {
    label: "text-green-400",
    tag: "hover:bg-green-500/10 hover:text-green-300 hover:border-green-500/30",
    icon: "text-green-400/40",
  },
  purple: {
    label: "text-purple-400",
    tag: "hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30",
    icon: "text-purple-400/40",
  },
  orange: {
    label: "text-orange-400",
    tag: "hover:bg-orange-500/10 hover:text-orange-300 hover:border-orange-500/30",
    icon: "text-orange-400/40",
  },
  emerald: {
    label: "text-emerald-400",
    tag: "hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-500/30",
    icon: "text-emerald-400/40",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label block mb-3">Expertise</span>
          <h2 className="section-title">Core Competencies</h2>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const colors = colorMap[cat.color];
            return (
              <ScrollReveal key={cat.label} delay={i * 0.07} className="h-full">
                <div className="glass-panel rounded-3xl p-6 h-full flex flex-col group hover:border-white/12 transition-all hover:-translate-y-1 duration-300">
                  <h3 className={`text-xs font-extrabold mb-4 tracking-widest uppercase border-b border-white/5 pb-3 flex items-center justify-between ${colors.label}`}>
                    {cat.label}
                    <ChevronRight
                      size={14}
                      className={`${colors.icon} group-hover:translate-x-0.5 transition-transform`}
                    />
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`skill-tag ${colors.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
