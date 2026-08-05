"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-black/80 border-b border-white/10 shadow-2xl shadow-black/40"
            : "bg-black/60 border-b border-white/5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with Zeshan's Gradient */}
          <MagneticButton>
            <button
              onClick={() => scrollTo("#home")}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 hover:opacity-90 transition-opacity bg-clip-text text-transparent"
            >
              Zeshan Khalid
            </button>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-2 group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}

            {/* Let's Talk CTA matching Zeshan's exact button */}
            <MagneticButton>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-lg shadow-blue-500/25 active:scale-95 border border-white/10"
              >
                Let&apos;s Talk
              </button>
            </MagneticButton>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
