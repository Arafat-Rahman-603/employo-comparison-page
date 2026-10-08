"use client";

import React from "react";
import { DollarSign, SlidersHorizontal, GitFork, CheckCircle2 } from "lucide-react";

export function AlternativeReasons() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#231F20] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#231F20] leading-[1.12] mb-5">
            Looking for a <span className="text-[#2674BC]">simpler HR</span> solution?
          </h2>

          <p className="text-base sm:text-lg text-[#231F20]/70 font-normal leading-relaxed text-balance">
            Growing teams outgrow spreadsheets and WhatsApp threads quickly, but legacy enterprise systems like BambooHR often bring steep per-seat fees and bloated modules you never end up using.
          </p>
        </div>

        {/* 3 Core Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Card 1: Predictable Pricing */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#231F20] mb-3">
                Predictable, capped pricing
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-6">
                No compounding per-employee taxes on every team hire. Employo is free up to 25 people, then simple flat tiers that protect your runway.
              </p>
            </div>

            {/* Micro visual: Per-seat tax vs flat */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#231F20]/60 font-medium">Per-Seat Tax</span>
                <span className="font-bold text-rose-500 font-mono">$0 / added hire</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[15%]" />
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60 font-semibold text-[#2674BC]">
                <span>Employo: Flat $29.90</span>
                <span>Capped Tier</span>
              </div>
            </div>
          </div>

          {/* Card 2: Core HR without bloat */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center mb-6">
                <SlidersHorizontal className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#231F20] mb-3">
                Core HR without the bloat
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-6">
                Focus on daily workflows your staff actually needs: clock-in, leave balances, shifts, and digital records. Zero mandatory 4-week onboarding consultations.
              </p>
            </div>

            {/* Micro visual: 15-Minute Setup */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#231F20]">Setup in 15 Minutes</div>
                <div className="text-[11px] text-[#231F20]/60">Upload CSV & invite team via link</div>
              </div>
            </div>
          </div>

          {/* Card 3: Everyday workforce flow */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center mb-6">
                <GitFork className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#231F20] mb-3">
                Everyday workforce flow
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed mb-6">
                Give managers and employees a frictionless mobile-friendly portal to view schedules, request vacations, and verify work logs in seconds.
              </p>
            </div>

            {/* Micro visual: Active Employee Shift */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2674BC] text-white font-bold text-xs flex items-center justify-center">
                  AL
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231F20]">Alex Lee</div>
                  <div className="text-[11px] text-[#231F20]/60">Shift: 10:00 - 18:00</div>
                </div>
              </div>
              <span className="bg-blue-100 text-[#2674BC] text-[10px] font-bold px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Founder's Note Card */}
        <div className="rounded-[28px] bg-[#181617] p-8 sm:p-10 border border-white/10 text-white shadow-xl relative overflow-hidden">
          <div className="inline-block text-[10px] font-bold tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full uppercase mb-4">
            Founder's Note
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-4">
            Why we built an alternative
          </h3>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-6 max-w-4xl text-pretty">
            &ldquo;We were paying hundreds of dollars each month for legacy HR systems built for Fortune 500 corporations, yet our 35-person team only touched attendance, leave requests, and employee info. We built Employo to give agile companies the exact 4 things they need without the enterprise tax.&rdquo;
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-1.5">
              <div className="w-7 h-7 rounded-full bg-[#2674BC] border-2 border-[#181617] flex items-center justify-center text-[10px] font-bold">
                E1
              </div>
              <div className="w-7 h-7 rounded-full bg-[#29ABE2] text-[#181617] border-2 border-[#181617] flex items-center justify-center text-[10px] font-bold">
                E2
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#181617] flex items-center justify-center text-[10px] font-bold">
                E3
              </div>
            </div>
            <span className="text-xs text-white/60 font-medium">
              The Employo Team • 4 Builders, Zero VCs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
