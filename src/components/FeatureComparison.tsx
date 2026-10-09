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
    feature: "Attendance Tracking",
    employo: true,
    bamboo: true,
    note: "Check-in timestamps, daily logs & exportable reports",
  },
  {
    feature: "Leave Management",
    employo: true,
    bamboo: true,
    note: "Leave requests, balances & manager approvals",
  },
  {
    feature: "Shift Management",
    employo: true,
    bamboo: true,
    note: "BambooHR via Time & Attendance add-on (fees may apply)",
  },
  {
    feature: "Employee Documents",
    employo: true,
    bamboo: true,
    note: "Cloud document storage per employee profile",
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
    note: "Job listings, candidate pipeline & recruiting tools",
  },
  {
    feature: "Onboarding Workflows",
    employo: false,
    bamboo: true,
    note: "Structured new-hire checklists & task assignments",
  },
  {
    feature: "Performance Management",
    employo: false,
    bamboo: true,
    note: "360-degree reviews, goal tracking & appraisals",
  },
  {
    feature: "Payroll Processing",
    employo: false,
    bamboo: true,
    note: "US-focused payroll, tax filing & benefits admin",
  },
];

export function FeatureComparison() {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#231F20] text-white relative border-b border-white/10">
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
        <div className="max-w-4xl mx-auto bg-[#231F20] rounded-[24px] sm:rounded-[36px] border border-white/12 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <div className="min-w-[480px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 p-4 sm:p-5 bg-[#1C191A] border-b border-white/10 text-xs font-bold uppercase tracking-wider text-white/60">
                <div className="col-span-6">HR Capability</div>
                <div className="col-span-3 text-center text-[#29ABE2]">Employo</div>
                <div className="col-span-3 text-center text-white/70">BambooHR</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-white/5 text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Feature & Note */}
                    <div className="col-span-6 pr-3">
                      <div className="font-semibold text-white text-xs sm:text-sm">
                        {row.feature}
                      </div>
                      {row.note && (
                        <div className="text-[11px] text-white/50 mt-0.5 line-clamp-1">
                          {row.note}
                        </div>
                      )}
                    </div>

                    {/* Employo Status */}
                    <div className="col-span-3 flex justify-center">
                      {row.employo ? (
                        <div className="w-6 h-6 rounded-full bg-[#2674BC] text-[#231F20] flex items-center justify-center font-bold">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                          <Minus className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    {/* BambooHR Status */}
                    <div className="col-span-3 flex justify-center">
                      {row.bamboo ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                          <Minus className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 sm:p-5 bg-[#181516] border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
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
