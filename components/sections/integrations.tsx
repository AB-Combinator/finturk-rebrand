"use client";

import {
  Database,
  BarChart3,
  Mail,
  Calendar,
  FileSignature,
  MessageSquare,
  Video,
  Code,
  Users,
  PieChart,
  Star,
  Globe,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animated-section";

const integrationRows = [
  {
    label: "CRMs",
    items: [
      { icon: Database, name: "Redtail" },
      { icon: Users, name: "Wealthbox" },
      { icon: Star, name: "Practifi" },
      { icon: Globe, name: "Salesforce" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { icon: BarChart3, name: "Orion" },
      { icon: PieChart, name: "Tamarac" },
      { icon: Star, name: "Morningstar" },
    ],
  },
  {
    label: "Productivity",
    items: [
      { icon: Mail, name: "Microsoft 365" },
      { icon: Globe, name: "Google Workspace" },
      { icon: Calendar, name: "Calendly" },
      { icon: FileSignature, name: "DocuSign" },
      { icon: MessageSquare, name: "Slack" },
      { icon: Video, name: "Zoom" },
    ],
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Works with what you already use.
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {integrationRows.map((row) => (
            <StaggerChildren
              key={row.label}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {row.items.map((item) => (
                <StaggerItem key={item.name}>
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-white hover:border-primary/30 hover:bg-primary/[0.02] transition-colors">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          ))}

          {/* Open API badge */}
          <StaggerChildren className="flex justify-center">
            <StaggerItem>
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Open API
                </span>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mt-12 text-center text-lg font-semibold text-foreground">
            Finturk reads from your existing systems. Your data stays where it
            is.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
