"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarCheck,
  DollarSign,
  ShieldCheck,
  BarChart3,
  FileCheck,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const floatingIcons = [
  { icon: CalendarCheck, delay: 0, x: -140, y: -40 },
  { icon: DollarSign, delay: 0.5, x: 150, y: -60 },
  { icon: ShieldCheck, delay: 1, x: -100, y: 50 },
  { icon: BarChart3, delay: 1.5, x: 120, y: 40 },
  { icon: FileCheck, delay: 2, x: -160, y: 10 },
  { icon: Zap, delay: 2.5, x: 170, y: -10 },
];

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background animate-gradient-bg" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 opacity-[0.08]"
          initial={{ x: item.x, y: item.y }}
          animate={{
            y: [item.y, item.y - 15, item.y],
            x: [item.x, item.x + 8, item.x],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon className="h-8 w-8 text-primary" />
        </motion.div>
      ))}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            See what Finturk does with your existing stack.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            15-minute demo. No commitment. No migration required.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() =>
              window.open("https://finturk.io/demo", "_blank")
            }
          >
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
