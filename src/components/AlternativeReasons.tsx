"use client";

import React from "react";
import { DollarSign, SlidersHorizontal, GitFork } from "lucide-react";

export function AlternativeReasons() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F4F4] text-[#231F20] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#231F20] leading-[1.12] mb-5">
            Why teams look for a{" "}
            <span className="text-[#2674BC]">simpler HR solution</span>
          </h2>

          <p className="text-base sm:text-lg text-[#231F20]/70 font-normal leading-relaxed text-balance">
            Growing teams often outgrow spreadsheets quickly. But broader HR platforms built for larger enterprises can bring per-seat fees and feature sets that most teams never use.
          </p>
        </div>

        {/* 3 Core Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Predictable Pricing */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 border border-black/5 shadow-sm flex flex-col gap-6 hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center">
              <DollarSign className="w-5 h-5 stroke-[2.2]" />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-[#231F20] mb-3">
                Predictable, capped pricing
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed">
                No per-employee costs compounding on every new hire. Employo is free for up to 25 employees, then a simple flat monthly tier — your bill stays predictable as your team grows.
              </p>
            </div>

            <div className="mt-auto p-4 rounded-xl bg-[#F0F0F0] border border-black/5 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#231F20]/60 font-medium">Per-seat exposure</span>
                <span className="font-bold text-emerald-600">$0 / added hire</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[12%]" />
              </div>
              <div className="flex items-center justify-between font-semibold text-[#2674BC] border-t border-black/5 pt-2.5">
                <span>Employo Pro Plan</span>
                <span>$29.90 / month</span>
              </div>
            </div>
          </div>

          {/* Card 2: Core HR without bloat */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 border border-black/5 shadow-sm flex flex-col gap-6 hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5 stroke-[2.2]" />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-[#231F20] mb-3">
                Core HR without the bloat
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed">
                Focus on the workflows your staff actually uses: clock-in, leave balances, shift rosters, and employee records. No lengthy setup consultants or lengthy onboarding required.
              </p>
            </div>

            <div className="mt-auto p-4 rounded-xl bg-[#F0F0F0] border border-black/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xs text-[#231F20]">Set up in about 15 minutes</div>
                <div className="text-[11px] text-[#231F20]/60">Upload CSV and invite your team</div>
              </div>
            </div>
          </div>

          {/* Card 3: Everyday workforce flow */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 border border-black/5 shadow-sm flex flex-col gap-6 hover:border-[#2674BC]/30 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#2674BC] flex items-center justify-center">
              <GitFork className="w-5 h-5 stroke-[2.2]" />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-[#231F20] mb-3">
                Everyday workforce flow
              </h3>

              <p className="text-sm text-[#231F20]/70 leading-relaxed">
                Give managers and employees a straightforward way to view schedules, submit leave requests, and review attendance logs without navigating a complex enterprise system.
              </p>
            </div>

            <div className="mt-auto p-4 rounded-xl bg-[#F0F0F0] border border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2674BC] text-[#231F20] font-bold text-xs flex items-center justify-center">
                  AL
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231F20]">Alex Lee</div>
                  <div className="text-[11px] text-[#231F20]/60">Shift: 10:00 – 18:00</div>
                </div>
              </div>
              <span className="text-[#29ABE2] font-bold text-xs">Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
