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
      {/* 1. EMPLOYEE MANAGEMENT */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Keep employee information{" "}
                <span className="text-[#2674BC]">organized.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Centralize employee profiles, job titles, department structures, emergency contacts, and signed documents in one place.
              </p>

              {/* Feature Callouts */}
              <div className="space-y-3 w-full">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2674BC]/20 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Centralized Employee Directory</h4>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Store contact info, roles, and personal profiles in one searchable place.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Department Structure &amp; Org Chart</h4>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Clear reporting lines, departments, and manager assignments.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Employee Documents</h4>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Attach contracts, IDs, and other documents directly to each employee&apos;s profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column: Employee Directory Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#1C191A] rounded-[20px] border border-white/10 overflow-hidden shadow-2xl">
                {/* Top Directory Bar */}
                <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">Team Directory</h3>
                    <p className="text-xs text-white/50">42 active members · 4 departments</p>
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

                {/* Directory Rows */}
                <div className="divide-y divide-white/5 text-xs">
                  {[
                    { initials: "DM", name: "Drew Miller", role: "Operations", dept: "Operations", status: "Active", docs: "3 Documents", color: "bg-[#2674BC]", statusColor: "text-[#29ABE2]" },
                    { initials: "NA", name: "Nivi Achanta", role: "Engineering Director", dept: "Engineering", status: "Active", docs: "5 Documents", color: "bg-[#29ABE2]", statusColor: "text-emerald-400" },
                    { initials: "TF", name: "Tatiana Figueiredo", role: "Product Designer", dept: "Design", status: "Active", docs: "2 Documents", color: "bg-purple-600", statusColor: "text-emerald-400" },
                    { initials: "JB", name: "Jillian Benbow", role: "Community Lead", dept: "Community", status: "Active", docs: "4 Documents", color: "bg-emerald-600", statusColor: "text-emerald-400" },
                  ].map((emp, i) => (
                    <div key={emp.initials} className={`p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors ${i % 2 === 1 ? "bg-white/[0.01]" : ""}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${emp.color} flex items-center justify-center font-bold text-xs text-[#231F20] shrink-0`}>
                          {emp.initials}
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{emp.name}</div>
                          <div className="text-white/50 text-xs">{emp.role}</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-white/70">
                        <span className="bg-white/5 px-2.5 py-0.5 rounded text-[11px]">{emp.dept}</span>
                        <span className={`${emp.statusColor} font-semibold text-xs`}>{emp.status}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-[11px]">{emp.docs}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-3.5 bg-[#181516] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/70 gap-2">
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

      {/* 2. ATTENDANCE */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-[#231F20]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#1C191A] rounded-[20px] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Clock className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Attendance Log</h3>
                      <p className="text-xs text-white/50">Today · Check-in records</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                    <span className="uppercase tracking-wider">Live</span>
                  </div>
                </div>

                {/* Summary Strip */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">Present</div>
                    <div className="text-xl font-bold font-display text-emerald-400 mt-0.5">38</div>
                    <span className="text-[10px] text-white/40">of 42</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">On Leave</div>
                    <div className="text-xl font-bold font-display text-[#29ABE2] mt-0.5">4</div>
                    <span className="text-[10px] text-white/40">Approved</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[11px] text-white/50 uppercase font-semibold">On Time</div>
                    <div className="text-xl font-bold font-display text-white mt-0.5">35</div>
                    <span className="text-[10px] text-white/40">Standard shift</span>
                  </div>
                </div>

                {/* Check-in Log */}
                <div className="space-y-2">
                  {[
                    { name: "Marcus Vance (Customer Support)", time: "08:58 AM", status: "On Time", statusBg: "bg-[#E8F5E9]", statusText: "text-[#2E7D32]", dotColor: "bg-[#4CAF50]" },
                    { name: "Sarah Jenkins (QA Analyst)", time: "09:00 AM", status: "On Time", statusBg: "bg-[#E8F5E9]", statusText: "text-[#2E7D32]", dotColor: "bg-[#4CAF50]" },
                    { name: "Alex Rodriguez (Sales)", time: "09:14 AM", status: "Late", statusBg: "bg-amber-500/15", statusText: "text-amber-400", dotColor: "bg-amber-400" },
                  ].map((entry) => (
                    <div key={entry.name} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${entry.dotColor}`} />
                        <span className="font-semibold text-white">{entry.name}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-semibold text-white/70">{entry.time}</span>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${entry.statusBg} ${entry.statusText} font-bold text-[10px]`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${entry.dotColor}`} />
                          {entry.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Know <span className="text-[#29ABE2]">who&apos;s working.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Track attendance and check-ins without relying on spreadsheets or scattered messages.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Attendance status:</strong> See who is present, on leave, or late across all teams.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Check-in records:</strong> Timestamps logged when employees clock in through the platform.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Exportable reports:</strong> Download attendance records for your payroll processing or audits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEAVE MANAGEMENT */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Leave without the{" "}
                <span className="text-[#2674BC]">back-and-forth.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Manage requests, approvals, and leave balances from one place.
              </p>

              <div className="space-y-3 w-full">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Instant request flow</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Employees submit requests with dates and reasons. Managers approve or decline directly from their dashboard.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Leave balances &amp; types</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Track leave types — annual, sick, unpaid — with remaining balances visible to employees and managers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-bold text-sm text-white">Holiday calendar</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Set company holidays so they're excluded from leave day counts automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column: Leave Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#1C191A] rounded-[20px] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Leave Requests</h3>
                      <p className="text-xs text-white/50">3 leave types configured</p>
                    </div>
                  </div>
                </div>

                {/* Leave Balance Strip */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Annual Leave", value: "16 Days", sub: "Available", subColor: "text-emerald-400" },
                    { label: "Sick Leave", value: "8 Days", sub: "Available", subColor: "text-white/40" },
                    { label: "Unpaid Leave", value: "0 Used", sub: "On demand", subColor: "text-white/40" },
                  ].map((b) => (
                    <div key={b.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] text-white/50 uppercase font-semibold">{b.label}</div>
                      <div className="text-base sm:text-lg font-bold font-display text-white mt-0.5">{b.value}</div>
                      <span className={`text-[10px] ${b.subColor}`}>{b.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Pending Request Card */}
                <div className="p-4 rounded-xl bg-[#231F20] border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#2674BC] flex items-center justify-center text-xs font-bold text-[#231F20] shrink-0">
                        TF
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">Tatiana Figueiredo</div>
                        <div className="text-xs text-[#29ABE2]">Vacation Request · 4 Days</div>
                      </div>
                    </div>
                    <div className="text-xs text-white/50 font-medium">Aug 14 – Aug 18</div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[11px] text-white/50">No coverage conflict found</span>
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
                        <span>Approve</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHIFT MANAGEMENT */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-[#231F20]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#1C191A] rounded-[20px] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#29ABE2]/20 text-[#29ABE2] flex items-center justify-center">
                      <Briefcase className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Shift Roster</h3>
                      <p className="text-xs text-white/50">Week of October 5 – 11</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-full border-2 border-white/80 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    Publish Roster
                  </button>
                </div>

                {/* Shift Grid */}
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-[#2674BC] border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">Morning Shift</span>
                        <span className="font-medium text-white/50">08:00 – 16:00</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">18 Scheduled</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#2674BC]/20 text-[#29ABE2] font-semibold text-[11px]">Drew M. (Lead)</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">Marcus V.</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">Sarah J.</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/50 font-medium text-[11px]">+ 15 more</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-[#29ABE2] border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">Evening Shift</span>
                        <span className="font-medium text-white/50">16:00 – 00:00</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">12 Scheduled</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#29ABE2]/20 text-[#29ABE2] font-semibold text-[11px]">Alex R. (Lead)</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">Elena K.</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 font-medium text-[11px]">David P.</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/50 font-medium text-[11px]">+ 9 more</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-4 border-l-white/20 border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white/80">Night Coverage</span>
                        <span className="font-medium text-white/50">00:00 – 08:00</span>
                      </div>
                      <span className="text-[#29ABE2] font-semibold">4 On-Call</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/70 font-medium text-[11px]">On-Call Rotational Pool</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6">
                Make shifts{" "}
                <span className="text-[#29ABE2]">easier to manage.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8">
                Plan employee schedules and keep your team aligned on who is working when.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Custom shift templates:</strong> Create morning, evening, night, or weekend shifts that fit your team&apos;s schedule.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Roster visibility:</strong> Employees can see their upcoming shifts from their web or mobile access.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2674BC]/30 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    <strong className="text-white">Team coverage planning:</strong> View who is assigned to each shift and identify gaps before the week starts.
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
