import React from "react";
import { Users, Clock, Calendar, Briefcase, ArrowUpRight } from "lucide-react";

export function EmployoOverview() {
  return (
    <section className="py-24 sm:py-32 bg-[#1C191A] relative border-b border-white/10">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-8">
        {/* Editorial Section Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
            The HR essentials, <br />
            <span className="text-[#2674BC]">in one place.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl">
            Employo focuses on the everyday work of managing people—without trying to become every business tool your company uses.
          </p>
        </div>

        {/* Asymmetric Editorial Product Layout (4 Distinct Compositions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Employee Management (Spans 7 cols, rich horizontal preview) */}
          <div className="lg:col-span-7 bg-[#231F20] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 shadow-xl group">
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2674BC]/20 text-[#29ABE2] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Employee Management
              </h3>
              <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Keep every employee record, emergency contact, role, and department in one searchable directory. No more lost spreadsheets or out-of-date records.
              </p>
            </div>

            {/* Visual Micro-UI */}
            <div className="p-5 rounded-2xl bg-[#181516] border border-white/10">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-white/50">
                <span>Directory Snapshot</span>
                <span className="text-emerald-400 font-semibold">Active Directory</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-bold text-sm text-white">Nivi A.</div>
                  <div className="text-xs text-white/50">Engineering Lead</div>
                  <span className="mt-2 inline-block text-[10px] bg-[#2674BC]/20 text-[#29ABE2] px-2 py-0.5 rounded font-semibold">
                    Full-Time
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-bold text-sm text-white">Tatiana F.</div>
                  <div className="text-xs text-white/50">Product Design</div>
                  <span className="mt-2 inline-block text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">
                    Remote
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-bold text-sm text-white">Drew M.</div>
                  <div className="text-xs text-white/50">Operations</div>
                  <span className="mt-2 inline-block text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-semibold">
                    Admin
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Real-Time Attendance (Spans 5 cols, punch card composition) */}
          <div className="lg:col-span-5 bg-[#231F20] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 shadow-xl group">
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Attendance Tracking
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Automated check-ins and timestamps. Clear daily attendance visibility for managers and employees alike.
              </p>
            </div>

            {/* Attendance Punch Visual */}
            <div className="p-5 rounded-2xl bg-[#181516] border border-white/10 text-center flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1">
                09:00 AM
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                On Time Check-in
              </div>
              <div className="w-full flex items-center justify-between text-xs text-white/60 pt-3 border-t border-white/5">
                <span>Working Hours: 8h 00m</span>
                <span className="text-[#29ABE2] font-semibold">Live GPS / IP Log</span>
              </div>
            </div>
          </div>

          {/* Card 3: Leave Management (Spans 5 cols, approval UI composition) */}
          <div className="lg:col-span-5 bg-[#231F20] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 shadow-xl group">
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Leave & Time Off
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Submit requests in seconds. Approve or decline with one click, with balances updating automatically.
              </p>
            </div>

            {/* Leave Action Visual */}
            <div className="p-5 rounded-2xl bg-[#181516] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Annual Vacation Leave</span>
                <span className="text-amber-400 font-semibold">Aug 28 – Aug 30</span>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  className="flex-1 py-2 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold hover:bg-rose-500/30 transition-colors"
                >
                  Decline
                </button>
                <button
                  type="button"
                  className="flex-1 py-2 rounded-lg bg-[#2674BC] text-white text-xs font-bold hover:bg-[#29ABE2] transition-colors shadow"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Shift Planning (Spans 7 cols, weekly scheduler composition) */}
          <div className="lg:col-span-7 bg-[#231F20] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 shadow-xl group">
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#29ABE2]/20 text-[#29ABE2] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Smart Shift Scheduling
              </h3>
              <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Build weekly and monthly team schedules. Eliminate coverage gaps and ensure fair, transparent shift assignments across all departments.
              </p>
            </div>

            {/* Shift Calendar Visual */}
            <div className="p-5 rounded-2xl bg-[#181516] border border-white/10">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white/40 text-[10px] uppercase font-semibold">Mon</div>
                  <div className="font-bold text-white mt-1">Day Shift</div>
                  <div className="text-[10px] text-[#29ABE2] mt-0.5">8h covered</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white/40 text-[10px] uppercase font-semibold">Tue</div>
                  <div className="font-bold text-white mt-1">Day Shift</div>
                  <div className="text-[10px] text-[#29ABE2] mt-0.5">8h covered</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white/40 text-[10px] uppercase font-semibold">Wed</div>
                  <div className="font-bold text-[#29ABE2] mt-1">Night Shift</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Coverage OK</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hidden sm:block">
                  <div className="text-white/40 text-[10px] uppercase font-semibold">Thu</div>
                  <div className="font-bold text-white mt-1">Day Shift</div>
                  <div className="text-[10px] text-[#29ABE2] mt-0.5">8h covered</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hidden sm:block">
                  <div className="text-white/40 text-[10px] uppercase font-semibold">Fri</div>
                  <div className="font-bold text-amber-300 mt-1">Split Shift</div>
                  <div className="text-[10px] text-amber-400 mt-0.5">Handover</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
