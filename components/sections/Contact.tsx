"use client";

import { useState } from "react";
import { Send, Github, Instagram, MapPin, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label block mb-3">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;m always open to
            discussing new opportunities and creative ideas.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-4" direction="left">
            <div className="space-y-5 h-full flex flex-col">
              {/* Availability */}
              <div className="glass-panel rounded-3xl p-7 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                    Available Now
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Open for Premium Contracts
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Currently accepting new projects and freelance opportunities. Let&apos;s build something great together.
                </p>
              </div>

              {/* Location */}
              <div className="glass-panel rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)" }}>
                    <MapPin size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Location</div>
                    <div className="text-sm font-bold text-white">Pakistan</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-panel rounded-3xl p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">
                  Connect
                </div>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-",
                      label: "GitHub",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/h_z_creatives",
                      label: "Instagram",
                    },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <MagneticButton key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-2xl text-gray-500 hover:text-white transition-all hover:scale-105"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                          aria-label={social.label}
                        >
                          <Icon size={18} />
                        </a>
                      </MagneticButton>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-8" direction="right">
            <div className="glass-panel rounded-3xl p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)" }}>
                      <CheckCircle size={28} className="text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm text-gray-400">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-cyan-400 underline-hover mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 rounded-2xl text-sm text-white placeholder-gray-600 font-medium outline-none focus:border-cyan-500/40 transition-all"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3.5 rounded-2xl text-sm text-white placeholder-gray-600 font-medium outline-none focus:border-cyan-500/40 transition-all"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-2xl text-sm text-white placeholder-gray-600 font-medium outline-none focus:border-cyan-500/40 transition-all resize-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      />
                    </div>
                    <MagneticButton className="w-full">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-black transition-all shadow-xl active:scale-[0.98] disabled:opacity-60"
                        style={{ background: "white" }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={14} />
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
