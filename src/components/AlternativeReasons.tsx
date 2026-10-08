"use client";

import React from "react";
import { DollarSign, SlidersHorizontal, GitFork, CheckCircle2 } from "lucide-react";

export function AlternativeReasons() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F4F4] text-[#231F20] relative">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
          {/* Card 1: Predictable Pricing */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 border border-black/5 shadow-sm flex flex-col justify-between hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#231F20] mb-3">
                Predictable, capped pricing
              </h3>

              <p className="text-sm sm:text-base text-[#231F20]/70 leading-relaxed mb-6">
                No compounding per-employee taxes on every team hire. Employo is free up to 25 people, then simple flat tiers that protect your runway.
              </p>
            </div>

            {/* Micro visual: Per-seat tax vs flat */}
            <div className="p-4 rounded-xl bg-[#F0F0F0] border border-black/5">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#231F20]/60 font-medium">Per-Seat Tax</span>
                <span className="font-bold text-rose-500 text-[11px]">$0 / added hire</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full mb-2.5 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[15%]" />
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-black/5 font-semibold text-[#2674BC]">
                <span>Employo: Flat $29.90</span>
                <span className="text-[11px] font-medium text-[#231F20]/60">Capped Tier</span>
              </div>
            </div>
          </div>

          {/* Card 2: Core HR without bloat */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 border border-black/5 shadow-sm flex flex-col justify-between hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center mb-6">
                <SlidersHorizontal className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#231F20] mb-3">
                Core HR without the bloat
              </h3>

              <p className="text-sm sm:text-base text-[#231F20]/70 leading-relaxed mb-6">
                Focus on daily workflows your staff actually needs: clock-in, leave balances, shifts, and digital records. Zero mandatory 4-week onboarding consultations.
              </p>
            </div>

            {/* Micro visual: 15-Minute Setup */}
            <div className="p-4 rounded-xl bg-[#F0F0F0] border border-black/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-[#231F20]">Setup in 15 Minutes</div>
                <div className="text-[11px] sm:text-xs text-[#231F20]/60">Upload CSV & invite team via link</div>
              </div>
            </div>
          </div>

          {/* Card 3: Everyday workforce flow */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 border border-black/5 shadow-sm flex flex-col justify-between hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center mb-6">
                <GitFork className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#231F20] mb-3">
                Everyday workforce flow
              </h3>

              <p className="text-sm sm:text-base text-[#231F20]/70 leading-relaxed mb-6">
                Give managers and employees a frictionless mobile-friendly portal to view schedules, request vacations, and verify work logs in seconds.
              </p>
            </div>

            {/* Micro visual: Active Employee Shift */}
            <div className="p-4 rounded-xl bg-[#F0F0F0] border border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2674BC] text-[#231F20] font-bold text-xs flex items-center justify-center">
                  AL
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#231F20]">Alex Lee</div>
                  <div className="text-[11px] sm:text-xs text-[#231F20]/60">Shift: 10:00 - 18:00</div>
                </div>
              </div>
              <span className="text-[#29ABE2] font-bold text-xs">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Founder's Note Card (Exact Employo Live Website Styling) */}
        <div className="rounded-[36px] bg-[#231F20] p-8 sm:p-14 lg:p-16 border border-white/12 text-white shadow-2xl relative overflow-hidden">
          {/* Top Employo Signature Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#2674BC] via-[#EBF5FB] to-[#29ABE2]" />

          {/* Exact Employo Founder's Note Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(175,215,179,0.12)] text-[#2674BC] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2674BC]" />
            Founder’s Note
          </div>

          <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Why we built an alternative
          </h3>

          <p className="text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-normal mb-8 max-w-4xl text-pretty">
            &ldquo;We were paying hundreds of dollars each month for legacy HR systems built for Fortune 500 corporations, yet our 35-person team only touched attendance, leave requests, and employee info. We built Employo to give agile companies the exact 4 things they need without the enterprise tax.&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2674BC] border-2 border-[#231F20] flex items-center justify-center text-[11px] font-bold text-[#231F20]">
                  DM
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EBF5FB] border-2 border-[#231F20] flex items-center justify-center text-[11px] font-bold text-[#2674BC]">
                  NA
                </div>
                <div className="w-8 h-8 rounded-full bg-[#29ABE2] border-2 border-[#231F20] flex items-center justify-center text-[11px] font-bold text-[#231F20]">
                  TF
                </div>
                <div className="w-8 h-8 rounded-full bg-[#29ABE2] border-2 border-[#231F20] flex items-center justify-center text-[11px] font-bold text-[#231F20]">
                  JB
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-white">— The Employo team</div>
                <div className="text-xs text-white/60">4 builders, 0 investors</div>
              </div>
            </div>

            <a
              href="https://employoapp.com/about"
              className="text-[#2674BC] hover:text-[#29ABE2] font-bold text-sm transition-colors"
            >
              Read our full story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
