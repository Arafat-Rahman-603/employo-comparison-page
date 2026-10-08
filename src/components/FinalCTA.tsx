"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#231F20] text-white relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="rounded-[36px] bg-gradient-to-br from-[#2674BC] via-[#29ABE2] to-[#2674BC] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle atmospheric accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/15 blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#231F20] leading-[1.1] mb-6 text-balance">
              Keep HR simple as your team grows.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#231F20]/80 font-medium leading-relaxed mb-8 text-balance">
              Start with the essentials and see how Employo streamlines your daily operations.
            </p>

            {/* Primary CTA Button */}
            <a
              href="https://app.employoapp.com/signup"
              className="inline-flex items-center justify-center bg-[#231F20] hover:bg-black text-white font-bold text-sm sm:text-base uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-200 shadow-xl group cursor-pointer"
            >
              <span>Start Free</span>
              {/* Employo Signature 3-Dot Icon */}
              <div className="flex items-center gap-1 ml-2.5">
                <span className="w-1 h-1 rounded-full bg-white group-hover:scale-125 transition-transform" />
                <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
                <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
              </div>
            </a>

            {/* Supporting Microcopy */}
            <div className="flex items-center gap-2 text-[#231F20]/75 text-xs sm:text-sm font-bold mt-6">
              <CheckCircle2 className="w-4 h-4 text-[#231F20]" />
              <span>Free for up to 25 employees</span>
              <span className="mx-1">•</span>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
