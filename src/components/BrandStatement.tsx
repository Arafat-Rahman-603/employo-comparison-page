"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

export function BrandStatement() {
  return (
    <section className="py-20 sm:py-28 bg-[#231F20] text-white relative border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="rounded-[28px] bg-[#1C191A] border border-white/12 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Top Employo Signature Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#2674BC] via-[#EBF5FB] to-[#29ABE2]" />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14">
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-5 text-balance">
              Not every team needs a <span className="text-[#29ABE2]">complete HR suite.</span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed text-balance">
              Some businesses need recruitment, payroll, benefits, and performance management. Others simply need their everyday HR operations to work — records, attendance, leave, and shifts.
            </p>
          </div>

          {/* Conceptual Contrast */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left items-stretch">
            {/* Employo: Core HR */}
            <div className="rounded-[20px] p-7 sm:p-8 bg-[#231F20] border-2 border-[#2674BC] flex flex-col gap-5 shadow-xl">
              <div>
                <div className="text-xs font-bold text-[#29ABE2] uppercase tracking-wider mb-2">
                  Operational Focus
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Employo</h3>
                <p className="text-sm font-semibold text-[#29ABE2]">Core HR</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/85">
                {[
                  "Centralized employee directory & records",
                  "Attendance tracking & check-in timestamps",
                  "Leave requests & balance management",
                  "Shift scheduling & team coverage planning",
                  "Flat, predictable pricing ($29.90/mo Pro plan)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BambooHR: Broader HR */}
            <div className="rounded-[20px] p-7 sm:p-8 bg-[#181516] border border-white/10 flex flex-col gap-5 shadow-lg">
              <div>
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                  Broader Scope
                </div>
                <h3 className="font-display text-2xl font-bold text-white/90 mb-1">BambooHR</h3>
                <p className="text-sm font-semibold text-white/60">Full HR platform</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/70">
                {[
                  "Recruitment & applicant tracking (ATS)",
                  "Structured new-hire onboarding workflows",
                  "Performance reviews & company goals",
                  "Payroll & benefits administration (US-focused)",
                  "Per-employee monthly pricing structure",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
