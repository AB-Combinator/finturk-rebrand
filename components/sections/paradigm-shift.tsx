"use client";

import { motion } from "framer-motion";
import { FileText, Sparkles, Zap } from "lucide-react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animated-section";

const cards = [
  {
    icon: FileText,
    title: "The Old Way",
    accent: "border-border bg-card",
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
    items: [
      "Log data manually",
      "Look up info before meetings",
      "Move cash with spreadsheets",
      "Assemble compliance trails by hand",
    ],
  },
  {
    icon: Sparkles,
    title: "What AI Changed",
    accent: "border-primary/20 bg-primary/[0.02]",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    items: [
      "Context assembles automatically",
      "Recommendations before you ask",
      "Orchestration with guardrails",
      "Evidence recorded as work happens",
    ],
  },
  {
    icon: Zap,
    title: "Finturk",
    accent: "border-primary/30 bg-primary/5 shadow-md",
    iconBg: "bg-primary",
    iconColor: "text-primary-foreground",
    items: [
      "Pulls client context from your existing CRM, portfolio tools, and email",
      "Generates meeting agendas with action items, risks, and talking points",
      "CashSweep and CashRaise run with human approval, full audit trail",
      "Every action logged — SEC audit-ready on demand",
    ],
  },
];

export function ParadigmShift() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-10 right-[10%] w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl animate-orb-slow pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl animate-orb pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              CRMs were built to store records.
              <br />
              <span className="text-muted-foreground">
                Your practice needs a system that acts.
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Connecting arrows between cards (desktop) */}
        <div className="hidden md:flex absolute top-[58%] left-[calc(33.33%+0.5rem)] z-10">
          <motion.div
            animate={{ x: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-primary text-lg">&rarr;</span>
          </motion.div>
        </div>
        <div className="hidden md:flex absolute top-[58%] right-[calc(33.33%+0.5rem)] z-10">
          <motion.div
            animate={{ x: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-primary text-lg">&rarr;</span>
          </motion.div>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <StaggerItem key={card.title}>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03 }}
                className={`rounded-xl border p-6 h-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] ${card.accent}`}
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`h-10 w-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-4`}
                >
                  <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
