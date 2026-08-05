"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Instagram, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { heroStagger, wordReveal, fadeUp } from "@/lib/animations";

export default function Hero({ visible }: { visible: boolean }) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden py-16"
    >
      {/* Ambient background glows matching Zeshan's site */}
      <div className="hero-glow left-1/4 top-1/4" />
      <div className="hero-glow-secondary right-10 bottom-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-left z-10"
            variants={heroStagger}
            initial="hidden"
            animate={visible ? "show" : "hidden"}
          >
            {/* Zeshan's Sparkles Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.08)]">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                Available for Premium Contracts
              </span>
            </motion.div>

            {/* Title with Zeshan's Gradient */}
            <div className="space-y-2">
              <motion.h1
                className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.05] text-white"
                variants={wordReveal}
              >
                Crafting Digital <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                  Experiences
                </span>
              </motion.h1>
            </div>

            {/* Zeshan Khalid Subtitle */}
            <motion.p
              className="text-lg sm:text-xl font-bold text-gray-200 flex items-center gap-2"
              variants={fadeUp}
            >
              Zeshan Khalid{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />{" "}
              UI/UX Designer &amp; Developer
            </motion.p>

            {/* Bio */}
            <motion.p
              className="max-w-xl text-sm sm:text-base text-gray-400 leading-relaxed font-medium"
              variants={fadeUp}
            >
              I build modern websites, Android applications, and AI-powered
              solutions with a focus on clean design, performance, and user
              experience.
            </motion.p>

            {/* Buttons matching Zeshan's portfolio */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <MagneticButton>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white hover:bg-gray-100 text-black transition-all shadow-xl hover:shadow-white/10 active:scale-95"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all backdrop-blur-md active:scale-95"
                >
                  Contact Me
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-550 text-white transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                >
                  View Resume
                </a>
              </MagneticButton>

              {/* Social links */}
              <div className="flex gap-3 sm:ml-4 border-l border-white/10 pl-4 items-center">
                <MagneticButton>
                  <a
                    href="https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all hover:scale-105 backdrop-blur-md shadow-sm"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://www.instagram.com/h_z_creatives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all hover:scale-105 backdrop-blur-md shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Avatar with Zeshan's multi-layered glowing ring */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative group">
              {/* Outer Blue/Cyan/Purple Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 opacity-25 blur-2xl group-hover:opacity-50 transition-opacity duration-700" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 opacity-80" />

              {/* Avatar Image Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-[6px] border-black bg-black/80 shadow-2xl flex items-center justify-center backdrop-blur-md">
                <Image
                  src="https://zeshan-portfolio-steel.vercel.app/zeshan.jpeg"
                  alt="Zeshan Khalid"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                  unoptimized
                />
              </div>

              {/* Top Left Floating Badge */}
              <div className="absolute -top-3 -left-3 bg-[#0a0a19]/90 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-gray-200 tracking-wider">
                  UI/UX Architect
                </span>
              </div>

              {/* Bottom Right Floating Badge */}
              <div className="absolute bottom-6 -right-6 bg-[#0a0a19]/90 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-gray-200 tracking-wider">
                  Full Stack Android
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
