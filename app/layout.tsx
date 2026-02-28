import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finturk — The AI Operations Layer for Financial Advisors",
  description:
    "The AI operations layer for financial advisors. Connects to your existing tools. Runs workflows end-to-end. No migration required.",
  keywords: [
    "financial advisor",
    "AI",
    "CRM",
    "RIA",
    "wealth management",
    "operations",
    "fintech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
