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
    <section id="how-it-works" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
          {/* Connecting line with animated dots (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border z-0">
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-dot-pulse" />
            <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-dot-pulse" style={{ animationDelay: "0.4s" }} />
            <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-dot-pulse" style={{ animationDelay: "0.8s" }} />
            <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-dot-pulse" style={{ animationDelay: "1.2s" }} />
          </div>

          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="relative text-center">
                {/* Step number */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative z-10 mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <step.icon className="h-5 w-5 text-primary" />
                </motion.div>

                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  {step.badge}
                </span>

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
