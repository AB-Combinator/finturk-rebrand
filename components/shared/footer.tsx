import { ShieldCheck } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Workflows", href: "#workflows" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "SOC-2 Report", href: "#" },
  ],
  Contact: [
    { label: "sales@finturk.io", href: "mailto:sales@finturk.io" },
    { label: "Book a Demo", href: "https://finturk.io/demo" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-bold text-lg tracking-tight text-foreground">
              Finturk
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              The AI operations layer for financial advisors.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium mb-3 text-foreground">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Finturk, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>SOC-2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
