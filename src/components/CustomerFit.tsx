"use client";

import React from "react";
import { CheckCircle2, CircleDot } from "lucide-react";

export function CustomerFit() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F4F4] text-[#231F20] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#231F20] leading-[1.12] mb-5">
            Choose the HR platform that{" "}
            <span className="text-[#2674BC]">fits your team.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#231F20]/70 font-normal leading-relaxed text-balance">
            Both tools address everyday HR friction, but they are built for different organizational needs and priorities.
          </p>
        </div>

        {/* Two Balanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
          {/* Card 1: Employo */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] p-7 sm:p-10 border border-black/5 shadow-sm flex flex-col justify-between relative overflow-hidden hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            {/* Top accent strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]" />

            <div>
              {/* Badge */}
              <div className="inline-block text-xs font-bold text-[#2674BC] bg-[#EBF5FB] px-4 py-1 rounded-full uppercase tracking-wider mb-5">
                Best for teams up to 100 employees
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231F20] mb-2">
                Choose Employo if you need:
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-6">
                Straightforward workforce coordination without enterprise overhead.
              </p>

              {/* Checklist */}
              <div className="space-y-3.5 mb-8">
                {[
                  "To be up and running today — setup takes about 15 minutes.",
                  "Attendance tracking and leave approvals from one place.",
                  "Shift scheduling with team coverage planning.",
                  "Free usage for your first 25 employees.",
                  "Predictable flat-tier pricing that stays the same as you hire.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#231F20]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#2674BC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://app.employoapp.com/signup"
              className="w-full inline-flex items-center justify-center bg-[#2674BC] hover:bg-[#29ABE2] text-[#231F20] font-bold text-sm sm:text-base uppercase tracking-wider py-4 rounded-full transition-all duration-200 shadow-md group cursor-pointer"
            >
              <span>Start Free with Employo</span>
              {/* Signature 3-Dot Icon */}
              <div className="flex items-center gap-1 ml-2.5">
                <span className="w-1 h-1 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform" />
                <span className="w-2 h-2 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform" />
              </div>
            </a>
          </div>

          {/* Card 2: BambooHR */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] p-7 sm:p-10 border border-black/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              {/* Badge */}
              <div className="inline-block text-xs font-bold text-[#231F20]/70 bg-[#ebebeb] px-4 py-1 rounded-full uppercase tracking-wider mb-5">
                Best for teams with dedicated HR staff
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231F20] mb-2">
                Choose BambooHR if you need:
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-6">
                A comprehensive HR system managed by an in-house HR team or HR generalist.
              </p>

              {/* Checklist */}
              <div className="space-y-3.5 mb-8">
                {[
                  "Applicant tracking and structured hiring pipelines.",
                  "360-degree performance appraisals and goal tracking.",
                  "Native US payroll processing and benefits administration.",
                  "Formal onboarding workflows with task checklists.",
                  "Enterprise integrations and compliance tooling.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#231F20]/80">
                    <CircleDot className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-3 text-center border-t border-slate-100">
              <p className="text-xs text-[#231F20]/60 font-medium">
                A strong choice for growing companies with a full-time HR function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
