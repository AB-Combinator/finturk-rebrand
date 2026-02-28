"use client";

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
    accent: "border-border bg-white",
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
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div
                className={`rounded-xl border p-6 h-full ${card.accent}`}
              >
                <div
                  className={`h-10 w-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-4`}
                >
                  <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                </div>
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
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
