"use client";

import React from "react";
import {
  Users,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ArrowDown,
  Building2,
  Check,
  X,
  FileText,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#231F20] text-white">
      {/* Background Decorative Repeating Rings Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 38px, rgba(255, 255, 255, 0.05) 39px, rgba(255, 255, 255, 0.05) 40px, transparent 41px)`,
          backgroundSize: "88px 88px",
          backgroundPosition: "center center",
        }}
      />

      {/* Ambient Radial Vignette & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#2674BC]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#231F20]/40 to-[#231F20] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.1] mb-6 max-w-4xl text-balance">
          HR software that <span className="text-[#29ABE2]">grows</span> with your team.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/75 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
          Manage employees, attendance, leave, and shifts with a simple HR platform built for growing teams. No bloated enterprise setups, no mandatory sales calls.
        </p>

        {/* Action Buttons Row - Exact Employo Button-3 and Outline Style */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-5">
          <a
            href="https://app.employoapp.com/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2674BC] hover:bg-[#29ABE2] text-[#231F20] font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-md group cursor-pointer"
          >
            <span>Start Free</span>
            {/* Employo Signature 3-Dot Icon */}
            <div className="flex items-center gap-1 ml-2.5">
              <span className="w-1 h-1 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform" />
              <span className="w-2 h-2 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform" />
            </div>
          </a>

          <a
            href="#comparison"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-bold text-sm sm:text-base uppercase tracking-wider px-7 py-3 rounded-full transition-all duration-200 cursor-pointer"
          >
            <span>Compare Employo vs BambooHR</span>
          </a>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center gap-2 text-xs text-white/70 mb-14 sm:mb-16">
          <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
          <span>Free for your first 25 employees • No credit card required</span>
        </div>

        {/* Product Visual Mockup Composition (3 Grounded Employo Cards) */}
        <div className="w-full max-w-5xl mx-auto pt-6 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Card: Today's Shift & Check-In */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-[#231F20] rounded-[24px] p-6 border border-white/12 shadow-2xl text-left">
              <div>
                <div className="flex items-center justify-between text-xs text-white/60 mb-4 pb-3 border-b border-white/10">
                  <span className="font-semibold text-white/90">Today's Shift</span>
                  <span className="text-xs font-semibold bg-white/5 border border-white/10 px-2.5 py-0.5 rounded text-white/90">
                    09:00 AM
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#2674BC] hover:bg-[#29ABE2] text-[#231F20] font-bold text-sm flex items-center justify-between shadow-md mb-4 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 stroke-[2.5]" />
                    <span>Check In</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-black/15 px-2 py-0.5 rounded">
                    Tap
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-bold text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  <span>Ready</span>
                </span>
                <span className="font-medium text-white/80">42 Active</span>
              </div>
            </div>

            {/* Center Main Card: Company Dashboard & Attendance */}
            <div className="lg:col-span-6 bg-[#231F20] rounded-[24px] p-6 border border-white/12 shadow-2xl text-left flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2674BC]/20 border border-[#2674BC]/30 flex items-center justify-center text-[#29ABE2]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white leading-tight">Apex Labs Inc.</h3>
                      <p className="text-xs text-white/50">San Francisco HQ</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    <span>38 of 42 present</span>
                  </div>
                </div>

                {/* Weekly Attendance Ratio Chart */}
                <div className="mb-5">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-white/60 font-medium">Weekly Attendance Ratio</span>
                    <span className="font-semibold text-xs text-[#29ABE2] bg-[#29ABE2]/10 border border-[#29ABE2]/20 px-2.5 py-0.5 rounded-full">
                      96.4% Avg
                    </span>
                  </div>

                  {/* Clean, Realistic Bar Chart */}
                  <div className="grid grid-cols-5 gap-3 items-end h-28 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full bg-[#2674BC]/60 hover:bg-[#29ABE2] rounded-t transition-colors h-[50%]" />
                      <span className="text-[11px] text-white/50 font-medium">Mon</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full bg-[#2674BC]/70 hover:bg-[#29ABE2] rounded-t transition-colors h-[75%]" />
                      <span className="text-[11px] text-white/50 font-medium">Tue</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full bg-[#29ABE2] rounded-t h-[94%]" />
                      <span className="text-[11px] text-[#29ABE2] font-bold">Wed</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full bg-[#2674BC]/60 hover:bg-[#29ABE2] rounded-t transition-colors h-[30%]" />
                      <span className="text-[11px] text-white/50 font-medium">Thu</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full bg-[#2674BC]/70 hover:bg-[#29ABE2] rounded-t transition-colors h-[68%]" />
                      <span className="text-[11px] text-white/50 font-medium">Fri</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Employee Live Punch Row */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#29ABE2] text-[#231F20] font-bold text-xs flex items-center justify-center">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Kowalski</div>
                    <div className="text-[11px] text-white/50">Lead Engineer • Shift Alpha</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-bold text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  <span>08:54 AM On-Time</span>
                </div>
              </div>
            </div>

            {/* Right Card: Pending Leave Request */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-[#231F20] rounded-[24px] p-6 border border-white/12 shadow-2xl text-left">
              <div>
                <div className="flex items-center justify-between text-xs text-white/60 mb-4 pb-3 border-b border-white/10">
                  <span className="font-semibold text-white/90">Pending Request</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>

                <div className="mb-4">
                  <div className="font-bold text-sm text-white">PTO: 3 Days</div>
                  <div className="text-xs text-white/50 mt-1">Oct 14 – Oct 17 • Annual Leave</div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    className="py-2 rounded-lg bg-[#E3F2FD] hover:bg-[#2674BC] text-[#2674BC] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="py-2 rounded-lg bg-[#FFEBEE] hover:bg-[#C62828] text-[#C62828] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Decline
                  </button>
                </div>
              </div>

              <div className="text-xs text-white/50 flex items-center gap-1.5 pt-3 border-t border-white/10">
                <Calendar className="w-3.5 h-3.5 text-white/40" />
                <span>18 Days remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
