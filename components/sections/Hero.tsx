"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Instagram, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { heroStagger, wordReveal, fadeUp, scaleFade } from "@/lib/animations";

const roles = [
  { text: "Full Stack Developer", color: "#22d3ee" },
  { text: "Android Developer", color: "#a855f7" },
  { text: "UI/UX Designer", color: "#4ade80" },
  { text: "AI Specialist", color: "#fb923c" },
];

export default function Hero({ visible }: { visible: boolean }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="hero-glow left-1/4 top-1/4" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(77,142,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={heroStagger}
            initial="hidden"
            animate={visible ? "show" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest border"
                style={{
                  background: "rgba(34,211,238,0.05)",
                  borderColor: "rgba(34,211,238,0.2)",
                  color: "#22d3ee",
                }}
              >
                <Sparkles size={10} className="animate-pulse" />
                Available for Premium Contracts
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-3">
              {roles.map((role, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    className="font-black leading-[1.05] tracking-tight"
                    style={{
                      fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                      color: i === 0 ? "#f0ede8" : "rgba(240,237,232,0.55)",
                    }}
                    variants={wordReveal}
                    transition={{
                      duration: 0.7,
                      ease: [0.76, 0, 0.24, 1],
                      delay: i * 0.07,
                    }}
                  >
                    {role.text}
                    <span style={{ color: role.color }}>.</span>
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Bio */}
            <motion.p
              className="max-w-xl text-base text-gray-400 leading-relaxed font-medium"
              variants={fadeUp}
            >
              I build modern websites, Android applications, and AI-powered
              solutions with a focus on clean design, performance, and
              exceptional user experience.
            </motion.p>

            {/* Current role callout */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-gray-300 tracking-wide">
                Senior Android & Web Developer
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 px-2.5 py-1 rounded-lg"
                style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}
              >
                AU Software House
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white text-black hover:bg-gray-100 transition-all shadow-xl active:scale-95"
                >
                  View Projects
                  <ArrowRight size={14} />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white transition-all active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Contact Me
                </a>
              </MagneticButton>

              {/* Socials */}
              <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                <MagneticButton>
                  <a
                    href="https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-gray-500 hover:text-white transition-all hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="https://www.instagram.com/h_z_creatives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-gray-500 hover:text-white transition-all hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex items-center gap-8 pt-4 border-t border-white/5">
              {[
                { value: "2-3", label: "Years Experience" },
                { value: "4+", label: "Projects Shipped" },
                { value: "7+", label: "Services Offered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white tracking-tight gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-6 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle, #4d8eff 0%, #a855f7 50%, transparent 70%)",
                }}
              />
              {/* Rotating border */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-white/10 animate-spin-slow" />
              {/* Photo */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden"
                style={{
                  border: "4px solid rgba(255,255,255,0.06)",
                  background: "rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="https://zeshan-portfolio-steel.vercel.app/zeshan.jpeg"
                  alt="Zeshan Khalid"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              {/* Badge — top left */}
              <motion.div
                className="absolute -top-4 -left-4 px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                style={{
                  background: "rgba(10,10,15,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-gray-200 tracking-wider">
                  UI/UX Architect
                </span>
              </motion.div>
              {/* Badge — bottom right */}
              <motion.div
                className="absolute bottom-4 -right-8 px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                style={{
                  background: "rgba(10,10,15,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-gray-200 tracking-wider">
                  Full Stack Android
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
