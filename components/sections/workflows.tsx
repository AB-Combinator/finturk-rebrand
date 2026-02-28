"use client";

import { CalendarCheck, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animated-section";

const workflows = [
  {
    icon: CalendarCheck,
    title: "Meeting Intelligence",
    before:
      "30 minutes prepping each client meeting manually",
    after:
      "AI-generated agenda with portfolio changes, life events, action items — ready in seconds",
    metric: "Chicago Partners: 30 min \u2192 5 min per meeting",
  },
  {
    icon: DollarSign,
    title: "CashSweep & CashRaise",
    before:
      "Manual cash monitoring, spreadsheet tracking, phone calls to custodians",
    after:
      "AI monitors balances, recommends moves, executes with one-click approval, logs compliance trail",
    metric: "Automated cash operations with full audit trail",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Autopilot",
    before:
      "Manual note-taking, audit trail assembly, scrambling before SEC reviews",
    after:
      "Every action logged automatically, audit-ready reports generated on demand",
    metric: "Complete SEC audit trail for every client interaction",
  },
];

export function Workflows() {
  return (
    <section id="workflows" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Workflows that run, not features that sit.
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
            Each workflow closes the loop: context &rarr; recommendation &rarr;
            approval &rarr; execution &rarr; evidence.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {workflows.map((wf) => (
            <StaggerItem key={wf.title}>
              <div className="rounded-xl border border-border bg-white h-full flex flex-col overflow-hidden">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <wf.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {wf.title}
                  </h3>
                </div>

                {/* Before / After */}
                <div className="flex-1 px-6 pb-6">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
                    {/* Before */}
                    <div className="rounded-lg bg-muted p-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
                        Before
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {wf.before}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center pt-6">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>

                    {/* After */}
                    <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider block mb-1.5">
                        After
                      </span>
                      <p className="text-sm text-foreground leading-relaxed">
                        {wf.after}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="px-6 py-4 border-t border-border bg-surface">
                  <p className="text-sm font-medium text-primary">
                    {wf.metric}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
