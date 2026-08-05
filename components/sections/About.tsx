"use client";

import { Shield, Zap, Star, GraduationCap, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label block mb-3">Overview</span>
          <h2 className="section-title">About Me &amp; Insights</h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Biography — large card */}
          <ScrollReveal className="md:col-span-8" delay={0.05}>
            <div className="glass-panel rounded-3xl p-8 hover:border-white/12 transition-all h-full flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="section-label">Biography</span>
                  <Shield size={16} className="text-cyan-500/40" />
                </div>
                <h3 className="text-2xl font-bold leading-snug text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Passionate about solving complex problems through technology.
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                  I am <span className="text-white font-semibold">Zeshan Khalid</span>, a passionate Full Stack Developer,
                  Android Developer, and UI/UX Designer with 2–3 years of experience building
                  websites, web applications, mobile applications, and AI-powered solutions.
                  I enjoy solving real-world problems through technology and continuously
                  improving my skills to create reliable, user-friendly, and modern digital products.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-white/5 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest text-gray-600">
                <span className="flex items-center gap-1.5"><MapPin size={10} /> Based in Pakistan</span>
                <span>Est. 2023</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience stat */}
          <ScrollReveal className="md:col-span-4" delay={0.1}>
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="space-y-2">
                <span className="section-label">Experience</span>
                <div className="text-6xl font-black tracking-tight gradient-text">2-3</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Years of Development
                </div>
              </div>
              <div className="space-y-2.5 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <Zap size={13} className="text-cyan-400" />
                  <span>Android Expert</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <Star size={13} className="text-purple-400" />
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Current Role */}
          <ScrollReveal className="md:col-span-4" delay={0.15}>
            <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  Role
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Senior Android &amp; Web Developer
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Spearheaded key development modules for Android and Web apps at AU Software House,
                  ensuring smooth third-party API integration and pixel-perfect layouts.
                </p>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-6 px-3.5 py-2 rounded-xl w-fit"
                style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}>
                AU Software House
              </span>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal className="md:col-span-8" delay={0.2}>
            <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                  Education
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h4 className="text-lg font-bold text-white">
                    Bachelor of Science (Hons.) Agriculture
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 px-3.5 py-2 rounded-xl w-fit"
                    style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}>
                    Expected: 2027
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
                  Currently pursuing a Bachelor of Science (Hons.) in Agriculture at the
                  University of Agriculture Faisalabad. Combining domain expertise with modern AI
                  automation to innovate technology-driven agriculture and software solutions.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-xs text-gray-600 font-bold uppercase tracking-wider border-t border-white/5 pt-4">
                <GraduationCap size={14} className="text-purple-400" />
                <span>University of Agriculture Faisalabad</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
