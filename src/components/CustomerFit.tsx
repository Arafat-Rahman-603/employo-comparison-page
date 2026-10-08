"use client";

import React from "react";
import { CheckCircle2, CircleDot, ChevronRight } from "lucide-react";

export function CustomerFit() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#231F20] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#231F20] leading-[1.12] mb-5">
            Choose the HR platform that <span className="text-[#2674BC]">fits your stage.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#231F20]/70 font-normal leading-relaxed text-balance">
            Both tools solve critical HR friction, but they are built for distinctly different organizational scale and priorities.
          </p>
        </div>

        {/* Two Balanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Employo */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Top Cyan Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]" />

            <div>
              {/* Badge */}
              <div className="inline-block text-xs font-semibold text-[#2674BC] bg-[#EBF5FB] px-3.5 py-1 rounded-full mb-5">
                Best for 5 to 100 Employees
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231F20] mb-2">
                Choose Employo if you need:
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-8">
                Agile, straightforward workforce coordination without enterprise overhead.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-[#231F20]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#29ABE2] shrink-0 mt-0.5" />
                  <span>To be up and running today in under 15 minutes.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#29ABE2] shrink-0 mt-0.5" />
                  <span>Real-time mobile & web attendance and simple timesheets.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#29ABE2] shrink-0 mt-0.5" />
                  <span>Frictionless shift planning with instant notifications.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#29ABE2] shrink-0 mt-0.5" />
                  <span>100% free usage for your first 25 team members.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#29ABE2] shrink-0 mt-0.5" />
                  <span>Predictable flat-tier pricing that doesn't punish hiring.</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2">
              <a
                href="https://app.employoapp.com/signup"
                className="w-full inline-flex items-center justify-center bg-[#29ABE2] hover:bg-[#2674BC] text-[#181617] hover:text-white font-bold text-sm sm:text-base py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#29ABE2]/20 group cursor-pointer"
              >
                <span>Start Free with Employo</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: BambooHR */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-3.5 py-1 rounded-full mb-5">
                Best for 200+ Enterprise Teams
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231F20] mb-2">
                Choose BambooHR if you need:
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-8">
                A comprehensive system of record managed by a full-time in-house HR department.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-[#231F20]/80">
                  <CircleDot className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Complex job application tracking (ATS) and hiring pipelines.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/80">
                  <CircleDot className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>360-degree performance appraisals and annual goal tracking.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/80">
                  <CircleDot className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Native US payroll tax filing and benefits administration.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/80">
                  <CircleDot className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Multi-tier enterprise compliance and enterprise SSO integrations.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#231F20]/80">
                  <CircleDot className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Budget availability for $500–$1,500+ monthly software spend.</span>
                </div>
              </div>
            </div>

            {/* Bottom Neutral Subtext */}
            <div className="pt-3 text-center">
              <p className="text-xs text-slate-500 font-medium">
                Great choice for mid-market firms with dedicated HR generalists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
