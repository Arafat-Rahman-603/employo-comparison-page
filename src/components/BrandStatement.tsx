"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

export function BrandStatement() {
  return (
    <section className="py-20 sm:py-28 bg-[#181617] text-white relative border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="rounded-[36px] bg-gradient-to-b from-[#201D1E] to-[#181617] border border-white/15 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Top Employo Signature Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2674BC] via-[#29ABE2] to-[#2674BC]" />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16">
            {/* Editorial Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Not every team needs a <span className="text-[#29ABE2]">complete HR suite.</span>
            </h2>

            {/* Editorial Body */}
            <p className="text-base sm:text-lg md:text-xl text-white/75 font-normal leading-relaxed text-balance">
              Some businesses need recruitment, payroll, benefits and advanced performance management. Others simply need their everyday HR operations to work.
            </p>
          </div>

          {/* Conceptual Contrast: Employo Core HR vs BambooHR Broader HR */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
            {/* Employo: Core HR */}
            <div className="rounded-3xl p-7 sm:p-9 bg-[#231F20] border-2 border-[#2674BC] relative shadow-xl">
              <div className="text-xs font-bold text-[#29ABE2] uppercase tracking-wider mb-2">
                Operational Focus
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-1">
                Employo
              </h3>
              <p className="text-base font-semibold text-[#29ABE2] mb-6">
                Core HR
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 text-sm text-white/85">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
                  <span>Centralized employee directory & records</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
                  <span>Real-time attendance & check-in timestamps</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
                  <span>Leave requests & automated balance tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
                  <span>Shift scheduling & team coverage planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
                  <span>Flat, predictable plan pricing ($29.90/mo Pro)</span>
                </div>
              </div>
            </div>

            {/* BambooHR: Broader HR */}
            <div className="rounded-3xl p-7 sm:p-9 bg-[#201D1E] border border-white/15 relative shadow-xl">
              <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                Enterprise Scope
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white/90 mb-1">
                BambooHR
              </h3>
              <p className="text-base font-semibold text-white/60 mb-6">
                Broader HR platform
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  <span>Recruitment & applicant tracking (ATS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  <span>Structured new-hire onboarding workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  <span>360 performance reviews & company goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  <span>Integrated payroll & benefits administration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  <span>Per-employee monthly pricing structure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
