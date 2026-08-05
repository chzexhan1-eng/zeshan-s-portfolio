"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

// Custom cursor — client only (no SSR, hides on mobile via CSS)
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      {/* Premium cursor */}
      <CustomCursor />

      {/* Loader */}
      <Loader onComplete={handleLoaderComplete} />

      {/* Main content */}
      <SmoothScroll>
        <div className="relative bg-background text-text-primary min-h-screen">
          <Navbar visible={loaded} />

          <main>
            <Hero visible={loaded} />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
