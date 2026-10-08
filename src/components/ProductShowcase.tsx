"use client";

import React, { useState } from "react";
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
  X,
  ChevronRight,
  Filter,
  Plus,
} from "lucide-react";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"directory" | "attendance" | "leave" | "shifts">("directory");

  return (
    <div className="bg-[#231F20] text-white">
      {/* 14. PRODUCT SHOWCASE — EMPLOYEE MANAGEMENT */}
      <section className="py-20 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Keep employee information <span className="text-[#2674BC]">organized.</span>
              </h2>

              <p className="text-lg sm:text-xl text-white/70 font-normal leading-relaxed mb-8">
                Centralize employee profiles, job titles, department structures, emergency contacts, and signed documents in one secure workspace.
              </p>

              {/* Feature Callouts */}
              <div className="space-y-4 w-full">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2674BC]/20 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Centralized Employee Information</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Store contact info, roles, salary records, and personal profiles securely in the cloud.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Interactive Team Structure & Org Chart</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Clear reporting lines, departments, and manager assignments configured automatically.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Secure Cloud Documents</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Attach contracts, IDs, tax forms, and NDAs directly to each employee's profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column: Large Employo Employee Directory UI */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl">
                <div className="bg-[#1C191A] rounded-2xl border border-white/10 overflow-hidden text-white shadow-xl">
                  {/* Top Directory Bar */}
                  <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#211E1F]">
                    <div>
                      <h3 className="font-bold text-base text-white">Team Directory</h3>
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
                        className="px-3 py-1.5 rounded-lg bg-[#2674BC] text-white text-xs font-bold flex items-center gap-1 shadow"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Add Member</span>
                      </button>
                    </div>
                  </div>

                  {/* Directory Table Rows */}
                  <div className="divide-y divide-white/5 text-xs">
                    <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#2674BC] flex items-center justify-center font-bold text-xs text-white">
                          DM
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Drew Miller</div>
                          <div className="text-white/50">Operations & Co-Founder</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-white/70">
                        <span className="bg-white/5 px-2.5 py-1 rounded-md text-[11px]">Operations</span>
                        <span className="text-emerald-400 font-semibold">Active</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-[11px]">3 Documents</span>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors bg-white/[0.02]">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#29ABE2] flex items-center justify-center font-bold text-xs text-white">
                          NA
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Nivi Achanta</div>
                          <div className="text-white/50">Engineering Director</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-white/70">
                        <span className="bg-white/5 px-2.5 py-1 rounded-md text-[11px]">Engineering</span>
                        <span className="text-emerald-400 font-semibold">Active</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-[11px]">5 Documents</span>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white">
                          TF
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Tatiana Figueiredo</div>
                          <div className="text-white/50">Staff Product Designer</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-white/70">
                        <span className="bg-white/5 px-2.5 py-1 rounded-md text-[11px]">Design</span>
                        <span className="text-emerald-400 font-semibold">Active</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-[11px]">2 Documents</span>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
                          JB
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Jillian Benbow</div>
                          <div className="text-white/50">Community Lead</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-white/70">
                        <span className="bg-white/5 px-2.5 py-1 rounded-md text-[11px]">Community</span>
                        <span className="text-emerald-400 font-semibold">Active</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-[11px]">4 Documents</span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Inspector Drawer Callout */}
                  <div className="p-4 bg-[#181516] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/70 gap-2">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> CSV Import Ready
                    </span>
                    <span className="text-white/50">Export to Excel or CSV anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. PRODUCT SHOWCASE — ATTENDANCE */}
      <section className="py-20 sm:py-24 border-b border-white/10 relative overflow-hidden bg-[#1C191A]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Attendance Tracking Dashboard */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-[#2674BC]/20 to-white/5 border border-white/20 shadow-2xl">
                <div className="bg-[#231F20] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-xl space-y-6">
                  {/* Attendance Header with Clock */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white">Real-Time Attendance Log</h3>
                        <p className="text-xs text-white/50">Automatic check-in rules & grace times</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs text-emerald-400 font-bold uppercase">Live Syncing</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">Attendance Status</div>
                      <div className="text-xl font-bold font-display text-emerald-400 mt-1">95.2%</div>
                      <span className="text-[10px] text-white/40">Present Today</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">On-Time Check-ins</div>
                      <div className="text-xl font-bold font-display text-white mt-1">38 / 42</div>
                      <span className="text-[10px] text-emerald-400">Standard Shift</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">Working Hours</div>
                      <div className="text-xl font-bold font-display text-[#29ABE2] mt-1">304 hrs</div>
                      <span className="text-[10px] text-white/40">Tracked Today</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">Team Activity</div>
                      <div className="text-xl font-bold font-display text-amber-300 mt-1">Active</div>
                      <span className="text-[10px] text-white/40">Zero Discrepancies</span>
                    </div>
                  </div>

                  {/* Live Punch Timeline */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="font-semibold text-white">Marcus Vance (Customer Support)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-white/70">08:58 AM Check-In</span>
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold text-[10px]">
                          On Time
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="font-semibold text-white">Sarah Jenkins (QA Analyst)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-white/70">09:00 AM Check-In</span>
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold text-[10px]">
                          On Time
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#29ABE2]"></span>
                        <span className="font-semibold text-white">Alex Rodriguez (Sales Rep)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-white/70">09:12 AM Remote</span>
                        <span className="bg-[#29ABE2]/10 text-[#29ABE2] px-2 py-0.5 rounded font-bold text-[10px]">
                          Remote Punch
                        </span>
                      </div>
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
                  <p className="text-sm text-white/80">
                    <strong className="text-white">Attendance Status:</strong> View at a glance who is currently working, on break, or absent across all teams.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80">
                    <strong className="text-white">Seamless Check-ins:</strong> Support office kiosks, desktop punches, or remote timestamps.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80">
                    <strong className="text-white">Working Hours & Overtime:</strong> Automatic calculation of daily hours without manual recalculations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. PRODUCT SHOWCASE — LEAVE */}
      <section className="py-20 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Leave without the <span className="text-[#2674BC]">back-and-forth.</span>
              </h2>

              <p className="text-lg sm:text-xl text-white/70 font-normal leading-relaxed mb-8">
                Manage requests, approvals and leave balances from one place.
              </p>

              <div className="space-y-4 w-full">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Instant Request Flow</h4>
                  <p className="text-xs text-white/60 mt-1">
                    Employees submit requests with dates and reasons; managers receive immediate notification to approve or decline.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Automated Balances & Accruals</h4>
                  <p className="text-xs text-white/60 mt-1">
                    Tracks paid time off, sick leave, parental leave, and custom balances automatically without spreadsheet math.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column: Leave Approval Interface */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-amber-500/20 to-white/5 border border-white/20 shadow-2xl">
                <div className="bg-[#1C191A] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-xl space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white">Leave Requests & Balances</h3>
                        <p className="text-xs text-white/50">Company Holiday Calendar Integrated</p>
                      </div>
                    </div>
                    <span className="text-xs bg-[#2674BC]/20 text-[#29ABE2] px-3 py-1 rounded-full font-semibold">
                      3 Types Configured
                    </span>
                  </div>

                  {/* Leave Balances Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">Annual Leave</div>
                      <div className="text-lg font-bold font-display text-white mt-0.5">16 Days</div>
                      <span className="text-[10px] text-emerald-400">Available</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">Sick Leave</div>
                      <div className="text-lg font-bold font-display text-white mt-0.5">8 Days</div>
                      <span className="text-[10px] text-white/40">Available</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">Unpaid Leave</div>
                      <div className="text-lg font-bold font-display text-[#29ABE2] mt-0.5">0 Days Used</div>
                      <span className="text-[10px] text-white/40">On Demand</span>
                    </div>
                  </div>

                  {/* Interactive Request Card */}
                  <div className="p-4 rounded-xl bg-[#231F20] border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2674BC] flex items-center justify-center text-xs font-bold text-white">
                          TF
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white">Tatiana Figueiredo</div>
                          <div className="text-xs text-amber-300">Vacation Request • 4 Days</div>
                        </div>
                      </div>
                      <div className="text-xs text-white/50 font-mono">Aug 14, 2026 – Aug 18, 2026</div>
                    </div>

                    <p className="text-xs text-white/70 italic bg-white/[0.02] p-2.5 rounded-lg border border-white/5 mb-4">
                      "Attending family wedding abroad. Handover notes shared with Marcus and Drew."
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-[11px] text-white/50">Policy Checked: No coverage conflict</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/80 font-bold text-xs transition-colors"
                        >
                          Decline
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1.5 rounded-lg bg-[#2674BC] hover:bg-[#29ABE2] text-white font-bold text-xs transition-colors shadow flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve Request</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. PRODUCT SHOWCASE — SHIFTS */}
      <section className="py-20 sm:py-24 border-b border-white/10 relative overflow-hidden bg-[#1C191A]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Shift Scheduling Grid */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-[#29ABE2]/20 to-white/5 border border-white/20 shadow-2xl">
                <div className="bg-[#231F20] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-xl space-y-6">
                  {/* Shift Scheduler Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#29ABE2]/20 text-[#29ABE2] flex items-center justify-center">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white">Shift Scheduling Roster</h3>
                        <p className="text-xs text-white/50">Weekly Planner: October 5 – October 11</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80"
                      >
                        Publish Roster
                      </button>
                    </div>
                  </div>

                  {/* Shift Grid */}
                  <div className="space-y-3">
                    {/* Morning Shift */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border-l-4 border-l-[#2674BC] border border-white/5">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">Morning Shift</span>
                          <span className="font-mono text-white/50">08:00 – 16:00</span>
                        </div>
                        <span className="text-emerald-400 font-semibold">18 Scheduled</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded bg-[#2674BC]/20 text-[#29ABE2] font-semibold text-[11px]">
                          Drew M. (Lead)
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                          Marcus V.
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                          Sarah J.
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/50 font-medium text-[11px]">
                          + 15 more
                        </span>
                      </div>
                    </div>

                    {/* Evening Shift */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border-l-4 border-l-[#29ABE2] border border-white/5">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">Evening Support Shift</span>
                          <span className="font-mono text-white/50">16:00 – 00:00</span>
                        </div>
                        <span className="text-emerald-400 font-semibold">12 Scheduled</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded bg-[#29ABE2]/20 text-[#29ABE2] font-semibold text-[11px]">
                          Alex R. (Lead)
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                          Elena K.
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/80 font-medium text-[11px]">
                          David P.
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/50 font-medium text-[11px]">
                          + 9 more
                        </span>
                      </div>
                    </div>

                    {/* Night Shift */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-white/20 border border-white/5">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white/80">Night Coverage</span>
                          <span className="font-mono text-white/50">00:00 – 08:00</span>
                        </div>
                        <span className="text-[#29ABE2] font-semibold">4 On-Call</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded bg-white/5 text-white/70 font-medium text-[11px]">
                          On-Call Rotational Engineering Pool
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Make shifts <span className="text-[#29ABE2]">easier to manage.</span>
              </h2>

              <p className="text-lg sm:text-xl text-white/70 font-normal leading-relaxed mb-8">
                Plan employee schedules and keep your team aligned.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80">
                    <strong className="text-white">Custom Rotations:</strong> Create morning, evening, night, or weekend shift templates that fit your company rhythm.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80">
                    <strong className="text-white">Conflict Detection:</strong> Automatic alerts if someone is double-booked or already has approved leave.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-white/80">
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
