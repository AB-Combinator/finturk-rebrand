"use client";

import { motion } from "framer-motion";
import { Plug, Eye, Maximize2 } from "lucide-react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animated-section";

const steps = [
  {
    icon: Plug,
    badge: "5 minutes",
    title: "Connect",
    description:
      "Plug into your existing CRM, portfolio system, and calendar. Read-only to start. Nothing changes.",
  },
  {
    icon: Eye,
    badge: "Week 1-4",
    title: "Watch It Work",
    description:
      "Finturk assembles context, prepares meetings, flags cash opportunities, drafts compliance notes. You review and approve.",
  },
  {
    icon: Maximize2,
    badge: "Your pace",
    title: "Expand When Ready",
    description:
      "Unlock execution: one-click cash moves, automated task routing, workflow triggers. Your pace, your rules.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-[15%] w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl animate-orb-slow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Start alongside your current tools.
              <br />
              <span className="text-muted-foreground">
                No migration. No risk.
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <StaggerChildren className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line with traveling dots (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border z-0">
            {/* Traveling dot 1 */}
            <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-travel-dot" />
            {/* Traveling dot 2 — offset */}
            <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-travel-dot" style={{ animationDelay: "1.25s" }} />
            {/* Static glow dots at midpoints */}
            <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40 animate-dot-pulse" />
          </div>

          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative text-center">
                {/* Step icon with pulsing ring */}
                <div className="relative z-10 mx-auto mb-4 h-12 w-12">
                  {/* Expanding ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ring-pulse" />
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <step.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>

                {/* Badge — gentle float */}
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3"
                >
                  {step.badge}
                </motion.span>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <AnimatedSection delay={0.4}>
          <p className="mt-12 text-center text-sm text-muted-foreground italic">
            Your data stays in your existing systems. Finturk reads from them —
            never replaces them.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
