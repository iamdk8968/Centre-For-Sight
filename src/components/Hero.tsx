import React from 'react';
import { Calendar, ArrowRight, Star, MapPin, Phone, CheckCircle2, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-100">
      {/* Subtle Optical Wave & Mesh Backgrounds */}
      <div className="absolute inset-0 bg-optical-wave pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-sky-100/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Unboxed Editorial Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0878D1] uppercase">
              <span>Super-Speciality Eye Care</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Preet Vihar, New Delhi</span>
            </div>

            {/* Headline with balanced wrap and clamp sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#073B70] tracking-tight leading-[1.12] text-balance">
              Advanced Eye Care for a <span className="text-[#0878D1]">Clearer Tomorrow</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Explore eye care consultations, advanced treatment information, and appointment enquiries at Centre For Sight, Preet Vihar, New Delhi.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>

              <a
                href="#treatments"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#073B70] bg-[#E9F5FF] hover:bg-sky-100 rounded-xl border border-sky-200/80 transition-colors"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#0878D1]" />
              </a>
            </div>

            {/* Trust highlights inline */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00A9A5]" />
                <span>Direct Clinic Coordination</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00A9A5]" />
                <span>Vikas Marg Metro Connectivity</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00A9A5]" />
                <span>Specialized Eye Care Categories</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Clinical Presentation Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Clinical Visual Card */}
              <div className="rounded-3xl bg-gradient-to-b from-[#F5F8FC] to-white p-4 sm:p-5 border border-slate-200/80 shadow-xl shadow-blue-900/5">
                {/* Visual Medical Scene Container */}
                <div className="relative h-64 sm:h-76 rounded-2xl bg-gradient-to-br from-[#073B70] via-[#0A4B8F] to-[#0878D1] overflow-hidden flex flex-col justify-between p-6 text-white shadow-inner">
                  {/* Subtle Optical Wave Overlay in SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="200" cy="150" r="140" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="200" cy="150" r="100" stroke="white" strokeWidth="1" />
                    <circle cx="200" cy="150" r="60" stroke="#00A9A5" strokeWidth="2" />
                    <circle cx="200" cy="150" r="24" fill="#00A9A5" fillOpacity="0.4" />
                    <path d="M50 150 H350 M200 50 V250" stroke="white" strokeWidth="0.8" opacity="0.6" />
                    <path d="M80 80 L320 220 M80 220 L320 80" stroke="white" strokeWidth="0.5" opacity="0.4" />
                  </svg>

                  {/* Top card pill-free indicator */}
                  <div className="relative z-10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00A9A5]" />
                      <span className="font-medium text-sky-100 tracking-wide">Eye Care Centre</span>
                    </div>
                    <span className="text-[11px] text-sky-200">Preet Vihar Clinic</span>
                  </div>

                  {/* Center Graphic: Eye Care Focus */}
                  <div className="relative z-10 text-center py-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-lg">
                      <Eye className="w-9 h-9 text-sky-200" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">Super-Speciality Eye Care</h3>
                    <p className="text-xs text-sky-100/90 mt-1 max-w-xs mx-auto">
                      Cataract · Refractive LASIK · Retina · Glaucoma · Pediatric
                    </p>
                  </div>

                  {/* Bottom Strip: Clinic Consultation Status */}
                  <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                      <span className="text-slate-100">Consultation Enquiries Open</span>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="text-white hover:text-sky-200 underline font-medium text-[11px] cursor-pointer"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>

                {/* Micro preview cards */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-medium">Branch Location</div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">Vikas Marg, Delhi</div>
                    <div className="text-[10px] text-[#0878D1] mt-0.5">Near Metro Gate 2</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-medium">Patient Feedback</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-xs font-bold text-slate-800">{HOSPITAL_CONFIG.googleRating}</span>
                      <div className="flex text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">({HOSPITAL_CONFIG.googleReviewCount})</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Google Listing Info</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI / Trust Information Row Below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Location */}
            <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200/70 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E9F5FF] text-[#073B70] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0878D1]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Location</div>
                  <div className="text-sm font-bold text-[#073B70]">Preet Vihar, Delhi</div>
                  <div className="text-[11px] text-slate-600 truncate">Vikas Marg · Metro Gate 2</div>
                </div>
              </div>
            </div>

            {/* Card 2: Rating */}
            <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200/70 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Google Rating</div>
                  <div className="text-sm font-bold text-[#073B70] flex items-center gap-1.5">
                    <span>{HOSPITAL_CONFIG.googleRating} / 5.0</span>
                    <span className="text-xs text-slate-400 font-normal">Rating</span>
                  </div>
                  <div className="text-[11px] text-slate-600">Based on supplied listing</div>
                </div>
              </div>
            </div>

            {/* Card 3: Reviews */}
            <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200/70 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Google Reviews</div>
                  <div className="text-sm font-bold text-[#073B70] tabular-nums">
                    {HOSPITAL_CONFIG.googleReviewCount} Patient Reviews
                  </div>
                  <div className="text-[11px] text-slate-600">Supplied listing information</div>
                </div>
              </div>
            </div>

            {/* Card 4: Appointments */}
            <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200/70 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E9F5FF] text-[#073B70] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0878D1]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Call for Appointments</div>
                  <a
                    href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
                    className="text-sm font-bold text-[#073B70] hover:text-[#0878D1] transition-colors block"
                  >
                    {HOSPITAL_CONFIG.phoneDisplay}
                  </a>
                  <div className="text-[11px] text-slate-600">WhatsApp & Call Desk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
