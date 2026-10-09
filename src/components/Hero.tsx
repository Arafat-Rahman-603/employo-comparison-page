"use client";

import React from "react";
import { Clock, Calendar, CheckCircle2, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#231F20] text-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Comparison-intent badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2674BC]/15 border border-[#2674BC]/30 text-[#29ABE2] text-xs font-bold uppercase tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" />
          BambooHR Alternative
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.1] mb-6 max-w-4xl text-balance">
          A simpler BambooHR alternative{" "}
          <span className="text-[#29ABE2]">for growing teams.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/75 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
          Manage employee records, attendance, leave, and shifts in one place.
          Choose the essential HR tools your team needs without the complexity of
          a broader HR platform.
        </p>

        {/* Action Buttons Row */}
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

        {/* Product Visual Mockup — 3 Grounded Employo Cards */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

            {/* Left Card: Employee Directory Snapshot */}
            <div className="lg:col-span-4 bg-[#1C191A] rounded-[20px] p-5 border border-white/10 shadow-xl text-left flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2674BC]/20 text-[#29ABE2] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Team Directory</span>
                </div>
                <span className="text-[11px] text-[#29ABE2] font-semibold bg-[#29ABE2]/10 px-2 py-0.5 rounded-full border border-[#29ABE2]/20">
                  Active
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  { initials: "NA", name: "Nivi Achanta", role: "Engineering Director", color: "bg-[#29ABE2]" },
                  { initials: "DM", name: "Drew Miller", role: "Operations", color: "bg-[#2674BC]" },
                  { initials: "SK", name: "Sarah Kim", role: "Marketing Lead", color: "bg-purple-600" },
                ].map((emp) => (
                  <div key={emp.initials} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.03] transition-colors">
                    <div className={`w-7 h-7 rounded-full ${emp.color} flex items-center justify-center font-bold text-[10px] text-[#231F20] shrink-0`}>
                      {emp.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xs">{emp.name}</div>
                      <div className="text-white/50 text-[11px]">{emp.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-white/40 mt-auto pt-2 border-t border-white/5">
                42 employees across 4 departments
              </div>
            </div>

            {/* Center Card: Today's Attendance */}
            <div className="lg:col-span-4 bg-[#1C191A] rounded-[20px] p-5 border border-white/10 shadow-xl text-left flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Today&apos;s Attendance</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-center text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-display text-xl font-black text-emerald-400">38</div>
                  <div className="text-white/50 text-[11px] mt-0.5">Present</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-display text-xl font-black text-white">4</div>
                  <div className="text-white/50 text-[11px] mt-0.5">On Leave</div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs">
                  <span className="font-semibold text-white">Marcus V.</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-bold text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    On Time
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs">
                  <span className="font-semibold text-white">Sarah J.</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-bold text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    On Time
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: Pending Leave Request */}
            <div className="lg:col-span-4 bg-[#1C191A] rounded-[20px] p-5 border border-white/10 shadow-xl text-left flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Leave Request</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              <div>
                <div className="font-bold text-sm text-white mb-1">Annual Leave — 3 Days</div>
                <div className="text-xs text-white/50">Oct 14 – Oct 17 • Tatiana F.</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="py-2 rounded-lg bg-[#FFEBEE] hover:bg-[#C62828] text-[#C62828] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Decline
                </button>
                <button
                  type="button"
                  className="py-2 rounded-lg bg-[#E3F2FD] hover:bg-[#2674BC] text-[#2674BC] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Approve
                </button>
              </div>

              <div className="text-[11px] text-white/40 pt-2 border-t border-white/5">
                18 days remaining in balance
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
