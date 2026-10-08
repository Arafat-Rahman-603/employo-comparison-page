"use client";

import React from "react";
import {
  Users,
  Clock,
  Calendar,
  Briefcase,
  Search,
  CheckCircle2,
  FileText,
  Building,
  Check,
  Plus,
} from "lucide-react";

export function ProductShowcase() {
  return (
    <div className="bg-[#231F20] text-white">
      {/* 1. PRODUCT SHOWCASE — EMPLOYEE MANAGEMENT */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Keep employee information <span className="text-[#2674BC]">organized.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Centralize employee profiles, job titles, department structures, emergency contacts, and signed documents in one secure workspace.
              </p>

              {/* Feature Callouts */}
              <div className="space-y-3.5 w-full">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2674BC]/20 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Centralized Employee Information</h4>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Store contact info, roles, salary records, and personal profiles securely in the cloud.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Interactive Team Structure & Org Chart</h4>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Clear reporting lines, departments, and manager assignments configured automatically.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Secure Cloud Documents</h4>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Attach contracts, IDs, tax forms, and NDAs directly to each employee's profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column: Clean, Polished Employee Directory UI Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#231F20] rounded-[24px] border border-white/12 overflow-hidden shadow-2xl">
                {/* Top Directory Bar */}
                <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#1C191A]">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">Team Directory</h3>
                    <p className="text-xs text-white/50">42 active members across 4 departments</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-white/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        readOnly
                        value="Engineering"
                        className="bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-white/40 w-32 sm:w-44 focus:outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-full bg-[#2674BC] hover:bg-[#29ABE2] text-[#231F20] text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="hidden sm:inline">Add Member</span>
                    </button>
                  </div>
                </div>

                {/* Directory Table Rows */}
                <div className="divide-y divide-white/5 text-xs">
                  <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2674BC] flex items-center justify-center font-bold text-xs text-[#231F20] shrink-0">
                        DM
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Drew Miller</div>
                        <div className="text-white/50 text-xs">Operations & Co-Founder</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-white/70">
                      <span className="bg-white/5 px-2.5 py-0.5 rounded text-[11px]">Operations</span>
                      <span className="text-[#29ABE2] font-semibold text-xs">Active</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/50 text-[11px]">3 Documents</span>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#29ABE2] flex items-center justify-center font-bold text-xs text-[#231F20] shrink-0">
                        NA
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Nivi Achanta</div>
                        <div className="text-white/50 text-xs">Engineering Director</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-white/70">
                      <span className="bg-white/5 px-2.5 py-0.5 rounded text-[11px]">Engineering</span>
                      <span className="text-emerald-400 font-semibold text-xs">Active</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/50 text-[11px]">5 Documents</span>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white shrink-0">
                        TF
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Tatiana Figueiredo</div>
                        <div className="text-white/50 text-xs">Staff Product Designer</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-white/70">
                      <span className="bg-white/5 px-2.5 py-0.5 rounded text-[11px]">Design</span>
                      <span className="text-emerald-400 font-semibold text-xs">Active</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/50 text-[11px]">2 Documents</span>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white shrink-0">
                        JB
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Jillian Benbow</div>
                        <div className="text-white/50 text-xs">Community Lead</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-white/70">
                      <span className="bg-white/5 px-2.5 py-0.5 rounded text-[11px]">Community</span>
                      <span className="text-emerald-400 font-semibold text-xs">Active</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/50 text-[11px]">4 Documents</span>
                    </div>
                  </div>
                </div>

                {/* Profile Inspector Drawer Callout */}
                <div className="p-3.5 bg-[#1C191A] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/70 gap-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" /> CSV Import Ready
                  </span>
                  <span className="text-white/50 text-[11px]">Export to Excel or CSV anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE — ATTENDANCE */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden bg-[#231F20]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Polished Attendance Tracking Dashboard Card */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#231F20] rounded-[24px] border border-white/12 p-6 sm:p-7 shadow-2xl space-y-5">
                {/* Attendance Header with Clock */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Clock className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Real-Time Attendance Log</h3>
                      <p className="text-xs text-white/50">Automatic check-in rules & grace times</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse"></span>
                    <span className="uppercase tracking-wider">Live Syncing</span>
                  </div>
                </div>

                {/* Refined Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Attendance</div>
                    <div className="text-xl font-bold font-display text-emerald-400 mt-0.5">95.2%</div>
                    <span className="text-[10px] text-white/40">Present Today</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">On-Time</div>
                    <div className="text-xl font-bold font-display text-white mt-0.5">38 / 42</div>
                    <span className="text-[10px] text-emerald-400">Standard Shift</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Working Hours</div>
                    <div className="text-xl font-bold font-display text-[#29ABE2] mt-0.5">304 hrs</div>
                    <span className="text-[10px] text-white/40">Tracked Today</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Team Activity</div>
                    <div className="text-xl font-bold font-display text-[#29ABE2] mt-0.5">Active</div>
                    <span className="text-[10px] text-white/40">0 Discrepancies</span>
                  </div>
                </div>

                {/* Live Punch Timeline with Employo Status Badges */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-semibold text-white">Marcus Vance (Customer Support)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold text-white/70">08:58 AM</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-bold text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                        On Time
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-semibold text-white">Sarah Jenkins (QA Analyst)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold text-white/70">09:00 AM</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-bold text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                        On Time
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#29ABE2]"></span>
                      <span className="font-semibold text-white">Alex Rodriguez (Sales Rep)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold text-white/70">09:12 AM</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E3F2FD] text-[#2674BC] font-bold text-[10px]">
                        Remote Punch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Know <span className="text-[#29ABE2]">who's working.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Track attendance and check-ins without relying on spreadsheets or scattered messages.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Attendance Status:</strong> View at a glance who is currently working, on break, or absent across all teams.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Seamless Check-ins:</strong> Support office kiosks, desktop punches, or remote timestamps.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Working Hours & Overtime:</strong> Automatic calculation of daily hours without manual recalculations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE — LEAVE */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Leave without the <span className="text-[#2674BC]">back-and-forth.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Manage requests, approvals and leave balances from one place.
              </p>

              <div className="space-y-3.5 w-full">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Instant Request Flow</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Employees submit requests with dates and reasons; managers receive immediate notification to approve or decline.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Automated Balances & Accruals</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Tracks paid time off, sick leave, parental leave, and custom balances automatically without spreadsheet math.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column: Polished Leave Approval Interface Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#231F20] rounded-[24px] border border-white/12 p-6 sm:p-7 shadow-2xl space-y-5">
                {/* Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Leave Requests & Balances</h3>
                      <p className="text-xs text-white/50">Company Holiday Calendar Integrated</p>
                    </div>
                  </div>
                  <span className="text-xs bg-[#EBF5FB] text-[#2674BC] px-3 py-1 rounded-full font-bold">
                    3 Types Configured
                  </span>
                </div>

                {/* Leave Balances Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Annual Leave</div>
                    <div className="text-base sm:text-lg font-bold font-display text-white mt-0.5">16 Days</div>
                    <span className="text-[10px] text-emerald-400">Available</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Sick Leave</div>
                    <div className="text-base sm:text-lg font-bold font-display text-white mt-0.5">8 Days</div>
                    <span className="text-[10px] text-white/40">Available</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Unpaid Leave</div>
                    <div className="text-base sm:text-lg font-bold font-display text-[#29ABE2] mt-0.5">0 Days Used</div>
                    <span className="text-[10px] text-white/40">On Demand</span>
                  </div>
                </div>

                {/* Interactive Request Card */}
                <div className="p-4 rounded-xl bg-[#1C191A] border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#2674BC] flex items-center justify-center text-xs font-bold text-[#231F20] shrink-0">
                        TF
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">Tatiana Figueiredo</div>
                        <div className="text-xs text-[#29ABE2]">Vacation Request • 4 Days</div>
                      </div>
                    </div>
                    <div className="text-xs text-white/50 font-medium">Aug 14, 2026 – Aug 18, 2026</div>
                  </div>

                  <p className="text-xs text-white/70 italic bg-white/[0.02] p-2.5 rounded-lg border border-white/5 mb-3">
                    "Attending family wedding abroad. Handover notes shared with Marcus and Drew."
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[11px] text-white/50">Policy Checked: No coverage conflict</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="px-3.5 py-1.5 rounded-lg bg-[#FFEBEE] hover:bg-[#C62828] text-[#C62828] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Decline
                      </button>
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-lg bg-[#E3F2FD] hover:bg-[#2674BC] text-[#2674BC] hover:text-white font-bold text-xs transition-colors shadow flex items-center gap-1.5 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Approve Request</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE — SHIFTS */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden bg-[#231F20]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Polished Shift Scheduling Card */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#231F20] rounded-[24px] border border-white/12 p-6 sm:p-7 shadow-2xl space-y-5">
                {/* Shift Scheduler Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#29ABE2]/20 text-[#29ABE2] flex items-center justify-center">
                      <Briefcase className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Shift Scheduling Roster</h3>
                      <p className="text-xs text-white/50">Weekly Planner: October 5 – October 11</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-4 py-1.5 rounded-full border-2 border-white/80 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      Publish Roster
                    </button>
                  </div>
                </div>

                {/* Shift Grid */}
                <div className="space-y-2.5">
                  {/* Morning Shift */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-[#2674BC] border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">Morning Shift</span>
                        <span className="font-medium text-white/50">08:00 – 16:00</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">18 Scheduled</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#2674BC]/20 text-[#29ABE2] font-semibold text-[11px]">
                        Drew M. (Lead)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                        Marcus V.
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                        Sarah J.
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/50 font-medium text-[11px]">
                        + 15 more
                      </span>
                    </div>
                  </div>

                  {/* Evening Shift */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-[#29ABE2] border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">Evening Support Shift</span>
                        <span className="font-medium text-white/50">16:00 – 00:00</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">12 Scheduled</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#29ABE2]/20 text-[#29ABE2] font-semibold text-[11px]">
                        Alex R. (Lead)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                        Elena K.
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                        David P.
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/50 font-medium text-[11px]">
                        + 9 more
                      </span>
                    </div>
                  </div>

                  {/* Night Shift */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-white/20 border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white/80">Night Coverage</span>
                        <span className="font-medium text-white/50">00:00 – 08:00</span>
                      </div>
                      <span className="text-[#29ABE2] font-semibold">4 On-Call</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/70 font-medium text-[11px]">
                        On-Call Rotational Engineering Pool
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Make shifts <span className="text-[#29ABE2]">easier to manage.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Plan employee schedules and keep your team aligned.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Custom Rotations:</strong> Create morning, evening, night, or weekend shift templates that fit your company rhythm.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Conflict Detection:</strong> Automatic alerts if someone is double-booked or already has approved leave.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Transparent Visibility:</strong> Employees can check their upcoming shifts from their mobile phones anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
