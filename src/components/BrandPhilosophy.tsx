import React from "react";

export function BrandPhilosophy() {
  return (
    <section className="py-24 sm:py-32 bg-[#231F20] relative border-b border-white/10">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Card container matching Employo Founder Note card styling */}
          <div className="rounded-3xl sm:rounded-[36px] bg-[#1C191A] border border-white/15 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2674BC] via-[#EBF5FB] to-[#29ABE2]"></div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              More HR software <br />
              <span className="text-[#2674BC]">isn't always better.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 font-normal leading-relaxed mb-6">
              The right HR platform is the one that fits the work your team actually needs to manage.
            </p>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10">
              We were paying for HR software built for companies a hundred times our size, and paying more every time we hired someone. So we built the version we actually wanted: attendance, leave, shifts, employee records. Nothing else.
            </p>

            {/* Team signature strip */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Team member avatar circle stack */}
                <div className="flex items-center -space-x-3">
                  <div className="w-11 h-11 rounded-full border-2 border-[#1C191A] bg-[#2674BC] flex items-center justify-center font-bold text-xs text-white">
                    DM
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-[#1C191A] bg-[#29ABE2] flex items-center justify-center font-bold text-xs text-[#231F20]">
                    NA
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-[#1C191A] bg-purple-600 flex items-center justify-center font-bold text-xs text-white">
                    TF
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-[#1C191A] bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
                    JB
                  </div>
                </div>

                <div>
                  <div className="font-bold text-white text-base">
                    — The Employo team
                  </div>
                  <div className="text-xs text-white/50">
                    4 builders, 0 investors
                  </div>
                </div>
              </div>

              <div className="text-xs text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                Core promise: No per-employee surprise fees
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
