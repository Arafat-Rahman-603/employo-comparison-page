"use client";

import React from "react";
import { Check, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  employo: boolean;
  bamboo: boolean;
  note?: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Employee Management",
    employo: true,
    bamboo: true,
    note: "Employee records, profiles & company directory",
  },
  {
    feature: "Attendance",
    employo: true,
    bamboo: true,
    note: "Real-time check-ins, daily hours & on-time logs",
  },
  {
    feature: "Leave Management",
    employo: true,
    bamboo: true,
    note: "Vacation requests, balances & manager approvals",
  },
  {
    feature: "Shift Management",
    employo: true,
    bamboo: true,
    note: "Shift schedules, weekly rosters & team coverage",
  },
  {
    feature: "Employee Documents",
    employo: true,
    bamboo: true,
    note: "Cloud document storage for contracts and IDs",
  },
  {
    feature: "Reports",
    employo: true,
    bamboo: true,
    note: "Exportable attendance, leave and staff logs",
  },
  {
    feature: "Applicant Tracking",
    employo: false,
    bamboo: true,
    note: "Job listings, candidate pipeline & recruiting",
  },
  {
    feature: "Onboarding",
    employo: false,
    bamboo: true,
    note: "Structured new hire checklists & workflows",
  },
  {
    feature: "Performance Management",
    employo: false,
    bamboo: true,
    note: "360-degree reviews, goal tracking & appraisals",
  },
  {
    feature: "Payroll",
    employo: false,
    bamboo: true,
    note: "Direct deposits, tax filing & benefits services",
  },
];

export function FeatureComparison() {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#181617] text-white relative border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4">
            Employo vs <span className="text-[#2674BC]">BambooHR</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed text-balance">
            A clear comparison of core operational HR features versus enterprise lifecycle tools.
          </p>
        </div>

        {/* Clean, Light Table */}
        <div className="max-w-4xl mx-auto bg-[#201D1E] rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 p-4 sm:p-5 bg-[#231F20] border-b border-white/10 text-xs font-bold uppercase tracking-wider text-white/60">
            <div className="col-span-6 sm:col-span-6">HR Capability</div>
            <div className="col-span-3 sm:col-span-3 text-center text-[#29ABE2]">Employo</div>
            <div className="col-span-3 sm:col-span-3 text-center text-white/80">BambooHR</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5 text-sm">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature & Note */}
                <div className="col-span-6 sm:col-span-6 pr-2">
                  <div className="font-semibold text-white text-sm sm:text-base">
                    {row.feature}
                  </div>
                  {row.note && (
                    <div className="text-xs text-white/50 mt-0.5 line-clamp-1">
                      {row.note}
                    </div>
                  )}
                </div>

                {/* Employo Status */}
                <div className="col-span-3 sm:col-span-3 flex justify-center">
                  {row.employo ? (
                    <div className="w-7 h-7 rounded-full bg-[#2674BC]/20 text-[#29ABE2] border border-[#2674BC]/30 flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                      <Minus className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* BambooHR Status */}
                <div className="col-span-3 sm:col-span-3 flex justify-center">
                  {row.bamboo ? (
                    <div className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                      <Minus className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 sm:p-5 bg-[#181617] border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span>
              Employo focuses deliberately on core operations: records, attendance, leave & shifts.
            </span>
            <span className="font-semibold text-[#29ABE2]">
              No extra fees for core features
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
