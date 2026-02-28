"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, DollarSign, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const floatingIcons = [
  { icon: CalendarCheck, delay: 0, x: -120, y: -30 },
  { icon: DollarSign, delay: 0.5, x: 130, y: -50 },
  { icon: ShieldCheck, delay: 1, x: -80, y: 40 },
];

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0f172a] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 opacity-10"
          initial={{ x: item.x, y: item.y }}
          animate={{
            y: [item.y, item.y - 12, item.y],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon className="h-8 w-8 text-blue-400" />
        </motion.div>
      ))}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            See what Finturk does with your existing stack.
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            15-minute demo. No commitment. No migration required.
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
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
