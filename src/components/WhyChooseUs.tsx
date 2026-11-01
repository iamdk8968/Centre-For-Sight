import React from 'react';
import { Target, MapPin, MessageSquare, BookOpen, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const points = [
    {
      num: '01',
      title: 'Specialized Eye Care Focus',
      description: 'Dedicated attention to super-speciality eye care consultations and refractive surgery evaluations with structured diagnostic protocols.',
      icon: Target,
      highlight: 'Ophthalmic focus'
    },
    {
      num: '02',
      title: 'Convenient Preet Vihar Location',
      description: 'Prime East Delhi location at F-14 Vikas Marg, directly adjacent to Preet Vihar Metro Station Gate No. 2 for effortless accessibility.',
      icon: MapPin,
      highlight: 'Metro connected'
    },
    {
      num: '03',
      title: 'Direct Appointment Enquiries',
      description: 'Streamlined appointment requests via WhatsApp and phone calling directly with the Preet Vihar front desk team.',
      icon: MessageSquare,
      highlight: 'Direct desk routing'
    },
    {
      num: '04',
      title: 'Transparent Treatment Information',
      description: 'Educational, patient-friendly guidance on conditions, symptoms, and examinations so you make informed eye health decisions.',
      icon: BookOpen,
      highlight: 'Informed decisions'
    },
    {
      num: '05',
      title: 'Patient-Friendly Website Experience',
      description: 'Intuitive digital experience designed for all age groups with instant directions, contact links, and no cumbersome logins.',
      icon: HeartHandshake,
      highlight: 'Easy accessibility'
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
            <span>Patient-Centric Care</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Preet Vihar, New Delhi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
            Why Choose Centre For Sight Preet Vihar
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Thoughtful healthcare focused on accessible consultations, clinical care standards, and honest patient communication.
          </p>
        </div>

        {/* Feature Grid with human editorial numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.num}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E9F5FF] text-[#073B70] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0878D1]" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 tabular-nums">
                      {pt.num}
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold text-[#00A9A5] uppercase tracking-wider mb-1">
                    {pt.highlight}
                  </div>

                  <h3 className="text-lg font-bold text-[#073B70] mb-2.5">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#073B70] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0878D1]" />
                  <span>Verified listing information</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Action Card */}
          <div className="bg-gradient-to-br from-[#073B70] to-[#0A4B8F] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider mb-2">
                Consultation Enquiries
              </div>
              <h3 className="text-xl font-bold mb-3">
                Have Questions About Your Eye Health?
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed">
                Connect directly with the Preet Vihar front desk to enquire about consultation slots, eye test schedules, or location directions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 space-y-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#073B70] bg-white hover:bg-sky-50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
                className="block text-center text-xs text-sky-200 hover:text-white py-1"
              >
                Call: {HOSPITAL_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
