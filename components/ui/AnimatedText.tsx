"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, wordReveal } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "lines";
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  type = "words",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  if (type === "words") {
    const words = text.split(" ");
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div
          className="flex flex-wrap"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden mr-[0.25em] mb-1">
              <motion.span
                className="inline-block"
                variants={wordReveal}
                custom={i}
                transition={{
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                  delay: delay + i * 0.04,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
          delay,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
