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
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#181617] text-white">
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#181617]/40 to-[#181617] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.1] mb-6 max-w-4xl text-balance">
          HR software that <span className="text-[#29ABE2]">grows</span> with your team.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/75 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
          Manage employees, attendance, leave, and shifts with a simple HR platform built for growing teams. No bloated enterprise setups, no mandatory sales calls.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-5">
          <a
            href="https://app.employoapp.com/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#29ABE2] hover:bg-[#2674BC] text-[#181617] hover:text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#29ABE2]/20 group cursor-pointer"
          >
            <span>Start Free</span>
            <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#comparison"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#231F20] hover:bg-white/10 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 group cursor-pointer"
          >
            <span>Compare Employo vs BambooHR</span>
            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform text-[#29ABE2]" />
          </a>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center gap-2 text-xs text-white/60 mb-14 sm:mb-16">
          <CheckCircle2 className="w-4 h-4 text-[#29ABE2] shrink-0" />
          <span>Free for your first 25 employees • No credit card required</span>
        </div>

        {/* Product Visual Mockup Composition (Center card with two angled companion cards) */}
        <div className="w-full max-w-5xl mx-auto relative flex items-center justify-center pt-4 sm:pt-6">
          {/* Left Floating Card (Attendance Punch) */}
          <div className="hidden lg:block absolute -left-4 xl:-left-8 top-16 z-10 w-[240px] -rotate-6 transition-transform hover:rotate-0 duration-300">
            <div className="bg-[#201D1E] rounded-2xl p-4 border border-white/10 shadow-2xl shadow-black/80 text-left">
              <div className="flex items-center justify-between text-xs text-white/60 mb-3">
                <span className="font-medium text-white/80">Today's Shift</span>
                <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded text-white/80">
                  09:00 AM
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#29ABE2] text-[#181617] font-bold text-sm flex items-center justify-between shadow-md mb-3 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Check In</span>
                </div>
                <span className="text-[11px] font-extrabold uppercase bg-black/15 px-2 py-0.5 rounded">
                  Tap
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-white/50 pt-1">
                <span>Status: <strong className="text-emerald-400 font-semibold">Ready</strong></span>
                <span>42 Active</span>
              </div>
            </div>
          </div>

          {/* Center Main Hero Card (Company Dashboard & Attendance Graph) */}
          <div className="w-full max-w-xl z-20">
            <div className="bg-[#201D1E] rounded-3xl p-5 sm:p-7 border border-white/15 shadow-2xl shadow-black/90 text-left">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2674BC]/25 border border-[#2674BC]/40 flex items-center justify-center text-[#29ABE2]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white leading-tight">Apex Labs Inc.</h3>
                    <p className="text-xs text-white/50">San Francisco HQ</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>38 of 42 present</span>
                </div>
              </div>

              {/* Weekly Attendance Ratio Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-white/60 font-medium">Weekly Attendance Ratio</span>
                  <span className="font-bold text-[#29ABE2] bg-[#29ABE2]/10 px-2 py-0.5 rounded border border-[#29ABE2]/20">
                    96.4% Avg
                  </span>
                </div>

                {/* Minimalist Bar Chart */}
                <div className="grid grid-cols-5 gap-3 items-end h-28 pt-2 pb-1 px-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-[#2674BC]/70 hover:bg-[#29ABE2] rounded-t-lg transition-colors h-[48%]" />
                    <span className="text-[11px] text-white/40 font-mono">Mon</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-[#2674BC]/75 hover:bg-[#29ABE2] rounded-t-lg transition-colors h-[72%]" />
                    <span className="text-[11px] text-white/40 font-mono">Tue</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-[#29ABE2] rounded-t-lg shadow-sm shadow-[#29ABE2]/30 h-[92%]" />
                    <span className="text-[11px] text-[#29ABE2] font-mono font-bold">Wed</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-[#2674BC]/60 hover:bg-[#29ABE2] rounded-t-lg transition-colors h-[25%]" />
                    <span className="text-[11px] text-white/40 font-mono">Thu</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-[#2674BC]/70 hover:bg-[#29ABE2] rounded-t-lg transition-colors h-[64%]" />
                    <span className="text-[11px] text-white/40 font-mono">Fri</span>
                  </div>
                </div>
              </div>

              {/* Bottom Employee Live Punch Row */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#29ABE2] text-[#181617] font-bold text-xs flex items-center justify-center">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Kowalski</div>
                    <div className="text-[11px] text-white/50">Lead Engineer • Shift Alpha</div>
                  </div>
                </div>
                <div className="text-emerald-400 font-semibold font-mono text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  08:54 AM On-Time
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Card (Pending Leave Request) */}
          <div className="hidden lg:block absolute -right-4 xl:-right-8 top-20 z-10 w-[240px] rotate-6 transition-transform hover:rotate-0 duration-300">
            <div className="bg-[#201D1E] rounded-2xl p-4 border border-white/10 shadow-2xl shadow-black/80 text-left">
              <div className="flex items-center justify-between text-xs text-white/60 mb-2.5">
                <span className="font-medium text-white/80">Pending Request</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </div>
              <div className="mb-3">
                <div className="font-bold text-sm text-white">PTO: 3 Days</div>
                <div className="text-[11px] text-white/50 mt-0.5">Oct 14 – Oct 17 • Annual Leave</div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                <button
                  type="button"
                  className="py-1.5 rounded-lg bg-[#29ABE2] hover:bg-[#2674BC] text-[#181617] hover:text-white font-bold text-xs transition-colors"
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 font-semibold text-xs transition-colors"
                >
                  Deny
                </button>
              </div>
              <div className="text-[10px] text-white/40 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-white/40" />
                <span>18 Days remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
