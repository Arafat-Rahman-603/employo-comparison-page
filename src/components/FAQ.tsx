"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is Employo a BambooHR alternative?",
    answer:
      "Employo is a focused, lightweight alternative for teams primarily looking for everyday HR operations: employee records, attendance, leave approvals, and shift scheduling—without the enterprise overhead or complex setup.",
  },
  {
    question: "Is Employo cheaper than BambooHR?",
    answer:
      "Yes. Employo uses flat plan-based pricing: it is completely free for up to 25 employees, and $29.90/month flat for up to 100 employees on the Pro plan. In contrast, BambooHR typically charges per-employee monthly fees plus potential implementation costs.",
  },
  {
    question: "Does Employo support attendance?",
    answer:
      "Yes. Employo includes real-time attendance tracking, check-in timestamps, working hours calculation, and live roster views right out of the box.",
  },
  {
    question: "Does Employo support shift management?",
    answer:
      "Yes. Employo offers built-in shift scheduling, weekly roster planning, and team coverage management designed specifically for frontline and operational teams.",
  },
  {
    question: "Does BambooHR support shift scheduling?",
    answer:
      "Yes. BambooHR supports shift scheduling through its Time & Attendance add-on module, which may carry additional per-user fees depending on your package tier.",
  },
  {
    question: "Does Employo offer payroll?",
    answer:
      "Employo focuses exclusively on core operational HR (records, attendance, leave, and shifts) and does not currently process payroll or tax filings directly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#181617] text-white relative border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4">
            Frequently asked <span className="text-[#2674BC]">questions</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed text-balance">
            Clear, straightforward answers about features, pricing, and how Employo compares.
          </p>
        </div>

        {/* Compact Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className={`rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-200 bg-[#201D1E] border ${
                  isOpen
                    ? "border-[#2674BC]/60 shadow-lg shadow-[#2674BC]/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white text-balance">
                    {faq.question}
                  </h3>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#29ABE2] text-[#181617] rotate-45"
                        : "bg-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {isOpen && (
                  <p className="mt-3 pt-3 border-t border-white/10 text-sm text-white/75 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
