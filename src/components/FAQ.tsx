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
      "Employo is a focused alternative for teams primarily looking for everyday HR operations: employee records, attendance, leave approvals, and shift scheduling — without the enterprise overhead or complex setup that comes with a broader HR platform.",
  },
  {
    question: "Is Employo cheaper than BambooHR?",
    answer:
      "Employo uses flat plan-based pricing: it is completely free for up to 25 employees, and $29.90/month flat for up to 100 employees on the Pro plan. BambooHR does not publish fixed public pricing — their quotes are typically per-employee monthly, with pricing varying by plan tier, team size, and selected modules.",
  },
  {
    question: "Does Employo include attendance tracking?",
    answer:
      "Yes. Employo includes attendance tracking with check-in records, daily log views, and exportable reports — right out of the box, with no additional module required.",
  },
  {
    question: "Does Employo support shift management?",
    answer:
      "Yes. Employo includes built-in shift scheduling and weekly roster planning designed for operational teams.",
  },
  {
    question: "Does BambooHR support shift scheduling?",
    answer:
      "BambooHR offers time and attendance features, with shift scheduling available as part of their Time & Attendance add-on. Feature availability and pricing depend on your plan tier.",
  },
  {
    question: "Does Employo offer payroll?",
    answer:
      "Employo focuses on core operational HR — records, attendance, leave, and shifts — and does not currently process payroll or tax filings.",
  },
  {
    question: "How does Employo handle leave balances?",
    answer:
      "Employo lets managers configure leave types (such as annual, sick, and unpaid leave) and tracks remaining balances for each employee. When leave is approved, the balance is updated accordingly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#231F20] text-white relative border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4">
            Frequently asked <span className="text-[#2674BC]">questions</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed text-balance">
            Straightforward answers about features, pricing, and how Employo compares to BambooHR.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className={`rounded-[18px] p-5 sm:p-6 cursor-pointer transition-all duration-200 bg-[#231F20] border ${
                  isOpen
                    ? "border-[#2674BC] shadow-lg shadow-[#2674BC]/5"
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
                        ? "bg-[#2674BC] text-[#231F20] rotate-45"
                        : "bg-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {isOpen && (
                  <p className="mt-3.5 pt-3.5 border-t border-white/10 text-sm text-white/75 leading-relaxed">
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
