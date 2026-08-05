"use client";

import { Github, Instagram, ArrowUp } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black gradient-text"
              style={{
                background: "rgba(34,211,238,0.08)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              ZK
            </div>
            <div>
              <div className="text-sm font-bold text-white">Zeshan Khalid</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Full Stack Developer · AI Specialist
              </div>
            </div>
          </div>

          {/* Center */}
          <p className="text-[11px] font-medium text-gray-600 text-center">
            © {new Date().getFullYear()} Zeshan Khalid. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/chzexhan1-eng/Full-Stack-Android-Applications-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-600 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.instagram.com/h_z_creatives"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-600 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <MagneticButton>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl text-gray-600 hover:text-white transition-all hover:scale-110"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                aria-label="Back to top"
              >
                <ArrowUp size={15} />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
