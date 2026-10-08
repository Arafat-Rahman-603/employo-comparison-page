import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BambooHR Alternative for Growing Teams | Employo",
  description:
    "Looking for a BambooHR alternative? Compare Employo and BambooHR for employee management, attendance, leave and shifts with predictable plan-based pricing.",
  keywords: [
    "BambooHR alternative",
    "BambooHR alternatives",
    "BambooHR competitor",
    "BambooHR alternative for small business",
    "BambooHR alternative for growing teams",
    "BambooHR vs Employo",
    "simple HR software",
    "HR software for growing teams",
  ],
  openGraph: {
    title: "BambooHR Alternative for Growing Teams | Employo",
    description:
      "Manage employee records, attendance, leave and shifts with a simple HR platform built for growing teams. Free for your first 25 employees.",
    url: "https://employoapp.com/bamboohr-alternative",
    siteName: "Employo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#231F20] text-white font-sans selection:bg-[#2674BC] selection:text-white">
        {children}
      </body>
    </html>
  );
}
