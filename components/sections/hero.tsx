"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  Scale,
  ArrowRight,
  Database,
  Mail,
  BarChart3,
  CalendarCheck,
  DollarSign,
  FileCheck,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "SOC-2 Type II" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: Scale, label: "SEC Compliance-Ready" },
  { icon: BarChart3, label: "$7.7B AUM Managed" },
];

const existingStack = [
  { icon: Database, label: "Redtail" },
  { icon: BarChart3, label: "Orion" },
  { icon: Mail, label: "Outlook" },
];

const outcomes = [
  { icon: CalendarCheck, label: "Meeting Agendas" },
  { icon: DollarSign, label: "Cash Moves" },
  { icon: FileCheck, label: "Compliance Trails" },
];

export function Hero() {
  const scrollToWorkflows = () => {
    document.getElementById("workflows")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden grid-bg">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/[0.07] blur-3xl animate-orb pointer-events-none" />
      <div className="absolute top-40 right-[5%] w-96 h-96 rounded-full bg-primary/[0.05] blur-3xl animate-orb-slow pointer-events-none" />
      <div className="absolute bottom-10 left-[30%] w-64 h-64 rounded-full bg-primary/[0.04] blur-3xl animate-orb-slower pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Your CRM stores data.
            <br />
            <span className="gradient-text">Finturk does the work.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The AI operations layer for financial advisors. Connects to your
            existing tools. Runs workflows end-to-end. No migration required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" size="lg" onClick={scrollToWorkflows}>
              See it in action
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open("https://finturk.io/demo", "_blank")
              }
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 sm:mt-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Existing Stack */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Your Existing Stack
              </span>
              <div className="flex flex-col gap-2">
                {existingStack.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border bg-card shadow-sm transition-colors hover:border-primary/20"
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connecting line with animated dots */}
            <div className="hidden md:flex items-center gap-0">
              <div className="relative w-16 h-px bg-border">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" style={{ animationDelay: "0.3s" }} />
              </div>
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
            <div className="md:hidden">
              <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
            </div>

            {/* Finturk Center */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative px-8 py-6 rounded-xl border-2 border-primary/30 bg-primary/5 animate-pulse-glow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  AI Operations Layer
                </div>
                <span className="text-xl font-bold text-foreground">
                  Finturk
                </span>
              </div>
            </div>

            {/* Connecting line with animated dots */}
            <div className="hidden md:flex items-center gap-0">
              <div className="relative w-16 h-px bg-border">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" style={{ animationDelay: "0.6s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" style={{ animationDelay: "0.9s" }} />
              </div>
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
            <div className="md:hidden">
              <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
            </div>

            {/* Outcomes */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Outcomes
              </span>
              <div className="flex flex-col gap-2">
                {outcomes.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-primary/20 bg-primary/5 transition-colors hover:border-primary/40"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 sm:mt-20 bg-surface border-y border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
