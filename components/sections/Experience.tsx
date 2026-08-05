"use client";

import { Briefcase, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    role: "Senior Android & Web Developer",
    company: "AU Software House",
    period: "2023 — Present",
    type: "Full-time",
    description:
      "Spearheaded development of key modules for Android and Web applications. Ensured smooth third-party API integration, led UI/UX decisions, and maintained high code quality across multiple projects. Collaborated with cross-functional teams to deliver production-ready solutions.",
    skills: ["Android", "React", "Node.js", "API Integration", "UI/UX"],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    type: "Freelance",
    description:
      "Delivered custom web applications, Android apps, and AI-powered tools for clients across multiple industries. Managed full project lifecycle from requirements to deployment, achieving high client satisfaction with clean code and modern design.",
    skills: ["Next.js", "React", "Python", "OpenAI", "Figma"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-white/5"
      style={{ background: "rgba(255,255,255,0.008)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label block mb-3">History</span>
          <h2 className="section-title">Professional Experience</h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 hidden md:flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "border-cyan-400 bg-cyan-400/20"
                        : "border-gray-600 bg-gray-800"
                    }`}>
                      {exp.current && (
                        <div className="w-full h-full rounded-full bg-cyan-400/50 animate-pulse" />
                      )}
                    </div>
                  </div>

                  <motion.div
                    className="glass-panel rounded-3xl p-7 hover:border-white/12 transition-all group hover:-translate-y-1 duration-300"
                    whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-cyan-400" />
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-sm font-bold text-gray-400">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1.5">
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${
                          exp.current
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-gray-500 bg-white/5 border border-white/5"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed font-medium mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tech-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
