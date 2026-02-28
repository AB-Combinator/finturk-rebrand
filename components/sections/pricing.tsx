"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animated-section";

const plans = [
  {
    name: "Essentials",
    price: "$49",
    period: "/user/mo",
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Connect your CRM + portfolio tools",
      "Meeting intelligence",
      "AI client context assembly",
      "Compliance activity logging",
      "Email + chat support",
    ],
  },
  {
    name: "Standard",
    price: "$90",
    period: "/user/mo",
    cta: "Start Free Trial",
    ctaVariant: "primary" as const,
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Essentials, plus:",
      "CashSweep & CashRaise",
      "Workflow automation builder",
      "Advanced integrations",
      "Priority support",
    ],
  },
  {
    name: "Advanced",
    price: "$135",
    period: "/user/mo",
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Everything in Standard, plus:",
      "Custom workflow builder",
      "Dedicated onboarding specialist",
      "SLA guarantee",
      "API access",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Start small. Scale when you&rsquo;re ready.
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-lg mb-14">
            14-day free trial. No credit card. No migration.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative rounded-xl border p-6 h-full flex flex-col transition-shadow duration-300 ${
                  plan.highlighted
                    ? "border-primary shadow-lg shadow-primary/10 bg-card hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                    : "border-border bg-card hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.ctaVariant} className="w-full">
                  {plan.cta}
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
