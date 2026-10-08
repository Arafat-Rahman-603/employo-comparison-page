import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AlternativeReasons } from "@/components/AlternativeReasons";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BrandStatement } from "@/components/BrandStatement";
import { PricingCalculator } from "@/components/PricingCalculator";
import { FeatureComparison } from "@/components/FeatureComparison";
import { CustomerFit } from "@/components/CustomerFit";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BambooHR Alternative for Growing Teams | Employo",
  description:
    "Looking for a BambooHR alternative? Compare Employo and BambooHR for employee records, attendance, leave and shifts with simple, predictable plan-based pricing.",
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

export default function BambooHRAlternativePage() {
  return (
    <div className="min-h-screen bg-[#231F20] text-white flex flex-col selection:bg-[#2674BC] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Why Alternative Section (Looking for a simpler HR solution?) */}
        <AlternativeReasons />

        {/* 4. Employo Features & Product Showcase (Alternating Layouts) */}
        <ProductShowcase />

        {/* 5. Brand Statement (Not every team needs a complete HR suite) */}
        <BrandStatement />

        {/* 6. Pricing Comparison (Your team grows. Your HR bill doesn't have to.) */}
        <PricingCalculator />

        {/* 7. Employo vs BambooHR (10-row comparison table) */}
        <FeatureComparison />

        {/* 8. Who Should Choose What (Choose the HR platform that fits your stage.) */}
        <CustomerFit />

        {/* 9. Frequently Asked Questions */}
        <FAQ />

        {/* 10. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 11. Official Footer */}
      <Footer />
    </div>
  );
}
