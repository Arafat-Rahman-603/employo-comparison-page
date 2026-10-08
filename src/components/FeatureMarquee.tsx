import React from "react";

const MARQUEE_ITEMS = [
  "Attendance",
  "Leave Tracking",
  "Employee Shifts",
  "Employee Records",
  "Simple HR",
  "No Spreadsheets",
  "Holiday Calendar",
  "Shift Planning",
  "Team Management",
  "Free First 25",
];

export function FeatureMarquee() {
  return (
    <div className="relative w-full bg-[#29ABE2] py-4 sm:py-5 overflow-hidden z-20 shadow-md">
      {/* Repeating Marquee Container */}
      <div className="flex select-none">
        <div className="animate-marquee flex items-center">
          {/* Render 3 full sets for seamless infinite loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center whitespace-nowrap px-4 sm:px-6"
              >
                <span className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-[#231F20]">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#231F20]/40 ml-4 sm:ml-6"></span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
