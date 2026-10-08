"use client";

import React, { useState } from "react";
import { Users, CheckCircle2, Info } from "lucide-react";

export function PricingCalculator() {
  const [employeeCount, setEmployeeCount] = useState<number>(50);

  // Employo Pricing Logic
  const isFree = employeeCount <= 25;
  const employoPrice = isFree ? 0 : 29.9;
  const employoPlanName = isFree ? "Free Tier" : "Pro Plan";

  // BambooHR Core estimate (~$10.50 per employee/mo standard average)
  const bambooEstimatedPrice = Math.round(employeeCount * 10.5);
  const monthlySavings = Math.max(0, Math.round(bambooEstimatedPrice - employoPrice));
  const annualSavings = monthlySavings * 12;

  const presets = [15, 25, 50, 75, 100];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#181617] text-white relative border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4">
            Your team grows. <br />
            <span className="text-[#29ABE2]">Your HR bill doesn't have to.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed text-balance">
            Compare Employo's simple plan pricing with estimated per-employee costs.
          </p>
        </div>

        {/* Compact Calculator Box */}
        <div className="max-w-3xl mx-auto bg-[#201D1E] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl">
          {/* Employee Count Selector */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <label htmlFor="employee-slider" className="text-sm font-semibold text-white/80 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#29ABE2]" />
                <span>Team Size:</span>
              </label>
              <div className="flex items-baseline gap-1.5 px-4 py-1.5 rounded-full bg-[#2674BC]/20 border border-[#2674BC]/30 text-white font-mono">
                <span className="text-lg font-bold text-[#29ABE2]">{employeeCount}</span>
                <span className="text-xs text-white/70">employees</span>
              </div>
            </div>

            {/* Slider */}
            <input
              id="employee-slider"
              type="range"
              min="5"
              max="100"
              step="5"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Number(e.target.value))}
              className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#29ABE2]"
            />

            <div className="flex justify-between text-[11px] text-white/40 font-mono mt-2">
              <span>5 employees</span>
              <span className="text-emerald-400 font-semibold">25 (Free limit)</span>
              <span>50</span>
              <span>75</span>
              <span>100 (Pro cap)</span>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10">
              <span className="text-xs text-white/50 mr-1">Quick presets:</span>
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setEmployeeCount(preset)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    employeeCount === preset
                      ? "bg-[#29ABE2] text-[#181617]"
                      : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
                  }`}
                >
                  {preset} {preset === 25 ? "(Free)" : ""}
                </button>
              ))}
            </div>
          </div>

          {/* Two Clean Pricing Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Employo Block */}
            <div className="p-6 rounded-2xl bg-[#231F20] border-2 border-[#2674BC] flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-[#29ABE2] uppercase tracking-wider">Employo</span>
                  <span className="bg-[#2674BC]/20 text-[#29ABE2] px-2 py-0.5 rounded text-[11px] font-semibold">
                    {employoPlanName}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 my-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white">
                    {isFree ? "$0" : "$29.90"}
                  </span>
                  <span className="text-xs text-white/50 font-medium">/ month</span>
                </div>

                <p className="text-xs text-white/70 mt-1">
                  {isFree ? "Free forever for up to 25 employees" : "Flat fee up to 100 employees"}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-400 flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>All core HR features included</span>
              </div>
            </div>

            {/* BambooHR Block */}
            <div className="p-6 rounded-2xl bg-[#201D1E] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-white/60 uppercase tracking-wider">BambooHR</span>
                  <span className="bg-white/5 text-white/50 px-2 py-0.5 rounded text-[11px]">
                    Estimated Core
                  </span>
                </div>

                <div className="flex items-baseline gap-1 my-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white/90">
                    ~${bambooEstimatedPrice}
                  </span>
                  <span className="text-xs text-white/40 font-medium">/ month</span>
                </div>

                <p className="text-xs text-white/50 mt-1">
                  Estimated at ~$10.50 per employee/mo
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/40">
                <span>Per-employee pricing model</span>
              </div>
            </div>
          </div>

          {/* Estimated Difference Bar */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#2674BC]/20 to-[#29ABE2]/10 border border-[#2674BC]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="text-xs text-white/60 font-medium">Estimated Monthly Difference</div>
              <div className="font-display text-xl sm:text-2xl font-black text-[#29ABE2]">
                Save ~${monthlySavings}/month
              </div>
            </div>
            <div className="text-xs text-white/70 bg-black/30 px-3.5 py-1.5 rounded-full border border-white/10">
              ~${annualSavings.toLocaleString()} estimated savings per year
            </div>
          </div>

          {/* Small Disclaimer */}
          <p className="text-[11px] text-white/40 leading-relaxed mt-5 text-center">
            * BambooHR pricing is an industry estimate based on published averages for standard core tiers. BambooHR does not publish fixed public rates; actual quotes may vary depending on team size, add-on modules, and annual contracts.
          </p>
        </div>
      </div>
    </section>
  );
}
