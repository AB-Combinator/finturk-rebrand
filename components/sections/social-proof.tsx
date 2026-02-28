"use client";

import { Quote, Clock, Zap, TrendingUp } from "lucide-react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animated-section";

const heroMetrics = [
  { icon: Clock, value: "8 days", label: "to go live" },
  { icon: Zap, value: "6x", label: "faster meeting prep" },
  { icon: TrendingUp, value: "$7.7B", label: "AUM managed" },
];

const testimonials = [
  {
    quote:
      "Finturk turned our meeting prep from a 30-minute scramble into a 5-minute review. The AI actually understands context across our client relationships.",
    name: "Sarah Chen",
    title: "Managing Partner",
    company: "Meridian Wealth Group",
  },
  {
    quote:
      "We were skeptical about adding another tool. But Finturk doesn't replace anything — it just makes everything we already use work better together.",
    name: "David Park",
    title: "Chief Compliance Officer",
    company: "Summit Financial Advisors",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Trusted by advisors managing billions.
            </h2>
          </div>
        </AnimatedSection>

        {/* Hero testimonial - Chicago Partners */}
        <AnimatedSection>
          <div className="relative rounded-xl border border-primary/20 bg-card p-8 sm:p-10 mb-8 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
              <Quote className="h-8 w-8 text-primary/30 shrink-0" />
              <div>
                <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
                  &ldquo;We migrated from Practifi in just 8 days. Meeting
                  preparation dropped from 30 minutes to 5 minutes per client.
                  The AI doesn&rsquo;t just store our data — it actually does the
                  work.&rdquo;
                </p>
                <div className="mb-6">
                  <p className="font-semibold text-foreground">
                    Chicago Partners Wealth Advisors
                  </p>
                  <p className="text-sm text-muted-foreground">
                    $7.7 billion AUM
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  {heroMetrics.map((m) => (
                    <div key={m.label} className="flex items-center gap-2">
                      <m.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {m.value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Additional testimonials */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="rounded-xl border border-border bg-card p-6 h-full flex flex-col">
                <Quote className="h-5 w-5 text-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.title}, {t.company}
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
