import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { FAQS, HOSPITAL_CONFIG } from '../config/hospitalData';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
            Patient Enquiries & Guidance
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential factual information regarding appointments, location, and consulting procedures at Preet Vihar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#073B70]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#F5F8FC] flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E9F5FF] text-[#0878D1]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="text-sm font-bold text-[#073B70]">
              Still have a specific question about your visit?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our front desk reception team will gladly assist with scheduling and branch guidance.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
              className="px-4 py-2 text-xs font-semibold text-[#073B70] bg-[#E9F5FF] hover:bg-sky-100 rounded-xl border border-sky-200 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0878D1]" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
