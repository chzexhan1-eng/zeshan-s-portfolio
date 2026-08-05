"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { loaderVariants } from "@/lib/animations";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const duration = 1400;
    const interval = 16;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(eased * 100, 100));

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 900);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#0a0a0f" }}
          variants={loaderVariants}
          initial="initial"
          exit="exit"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 noise-overlay" />

          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 60%)",
            }}
          />

          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* ZK Monogram */}
            <div className="relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(168,85,247,0.15) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="text-3xl font-black gradient-text"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  ZK
                </span>
              </div>
              {/* Rotating ring */}
              <div
                className="absolute -inset-3 rounded-2xl border border-accent-cyan/20 animate-spin-slow"
                style={{ borderRadius: "1.25rem" }}
              />
            </div>

            {/* Name */}
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Zeshan Khalid
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #22d3ee, #4d8eff, #a855f7)",
                }}
              />
            </div>

            {/* Progress number */}
            <p className="text-[10px] font-bold tracking-widest text-gray-600">
              {Math.round(progress)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
