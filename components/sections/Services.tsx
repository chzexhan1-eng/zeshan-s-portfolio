"use client";

import { Globe, Layers, Smartphone, Code, Cpu, MessageSquare, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  badge: string;
}

const services: Service[] = [
  {
    icon: Globe,
    iconColor: "text-blue-400",
    title: "Website Development",
    description:
      "Crafting beautiful, responsive, and SEO-optimized modern websites tailored to represent your brand's unique identity.",
    badge: "Fast & SEO-First",
  },
  {
    icon: Layers,
    iconColor: "text-indigo-400",
    title: "Web Application Development",
    description:
      "Building fast, scalable, and feature-rich single-page applications with seamless interactive user interfaces.",
    badge: "SaaS & Dashboards",
  },
  {
    icon: Smartphone,
    iconColor: "text-emerald-400",
    title: "Android App Development",
    description:
      "Developing robust and native Android applications that deliver exceptional performance and native user experiences.",
    badge: "Kotlin & Native",
  },
  {
    icon: Code,
    iconColor: "text-purple-400",
    title: "UI/UX Design",
    description:
      "Designing user-centric, clean, and intuitive wireframes and prototypes focused on maximizing user engagement.",
    badge: "Figma to Code",
  },
  {
    icon: Cpu,
    iconColor: "text-amber-400",
    title: "AI Automation",
    description:
      "Integrating modern AI capabilities to automate business tasks, streamline daily operations, and improve productivity.",
    badge: "OpenAI & Workflows",
  },
  {
    icon: MessageSquare,
    iconColor: "text-pink-400",
    title: "AI Chatbot Development",
    description:
      "Building smart conversational interfaces and assistant agents using cutting-edge LLMs and automation tools.",
    badge: "Smart Agents",
  },
  {
    icon: Sparkles,
    iconColor: "text-cyan-400",
    title: "Code Debugging & Optimization",
    description:
      "Refactoring and optimizing existing systems to eliminate bugs, reduce load times, and improve code maintainability.",
    badge: "Refactoring",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding border-t border-white/5"
      style={{ background: "rgba(255,255,255,0.008)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label block mb-3">Expert Services</span>
          <h2 className="section-title">Capabilities &amp; Solutions</h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <ScrollReveal key={svc.title} delay={i * 0.07}>
                <div className="glass-card rounded-3xl p-7 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="space-y-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Icon size={20} className={svc.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug mb-2">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 px-3.5 py-2 rounded-xl w-fit"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {svc.badge}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
