import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, ShieldCheck, Train } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
            <span>Location & Direct Contact</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>East Delhi Branch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
            Visit & Contact Centre For Sight Preet Vihar
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Conveniently accessible along Vikas Marg directly next to Delhi Metro Blue Line Gate No. 2.
          </p>
        </div>

        {/* 2-Column Split: Contact Details & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Main Location Details Card */}
            <div className="bg-[#F5F8FC] rounded-3xl p-6 border border-slate-200">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E9F5FF] text-[#073B70] flex items-center justify-center shrink-0 border border-sky-200">
                  <MapPin className="w-6 h-6 text-[#0878D1]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0878D1] uppercase tracking-wider">
                    Hospital Address
                  </div>
                  <h3 className="text-lg font-bold text-[#073B70]">
                    Centre For Sight – Preet Vihar
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {HOSPITAL_CONFIG.fullAddress}
              </p>

              {/* Metro Landmark Tip */}
              <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <Train className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
                <div>
                  <strong>Metro Connectivity:</strong> Located directly adjacent to Preet Vihar Metro Station Gate No. 2 (Delhi Metro Blue Line).
                </div>
              </div>

              {/* Action Buttons: Directions */}
              <div className="mt-5 pt-4 border-t border-slate-200/80">
                <a
                  href={HOSPITAL_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Click-to-call */}
              <a
                href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#073B70] flex items-center justify-center mb-3 group-hover:bg-[#073B70] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-[#0878D1] group-hover:text-white" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Direct Telephone</div>
                  <div className="text-sm font-bold text-[#073B70] mt-0.5 truncate">
                    {HOSPITAL_CONFIG.phoneDisplay}
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-[#0878D1] group-hover:underline">
                  Tap to Call Now →
                </div>
              </a>

              {/* WhatsApp Enquiry */}
              <a
                href={`https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Centre For Sight, I would like to enquire about consultations at your Preet Vihar branch."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-[#00A9A5] group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">WhatsApp Desk</div>
                  <div className="text-sm font-bold text-[#073B70] mt-0.5 truncate">
                    {HOSPITAL_CONFIG.phoneDisplay}
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-[#00A9A5] group-hover:underline">
                  Start WhatsApp Chat →
                </div>
              </a>
            </div>

            {/* Clinic Timings Placeholder */}
            <div className="p-4 rounded-2xl bg-[#E9F5FF] border border-sky-200 text-xs text-[#073B70] flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
              <div>
                <strong>OPD & Consultation Timings:</strong> {HOSPITAL_CONFIG.hoursPlaceholder}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map & Transit Assistance */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F8FC] rounded-3xl p-4 sm:p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#073B70]">Interactive Map & Directions</h3>
                  <p className="text-xs text-slate-500">F-14, Vikas Marg, Preet Vihar, Delhi 110092</p>
                </div>
                <a
                  href={HOSPITAL_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0878D1] hover:text-[#073B70] flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Map Frame */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                <iframe
                  title="Centre For Sight Preet Vihar Google Map"
                  src="https://maps.google.com/maps?q=Centre+For+Sight+F-14+Vikas+Marg+Preet+Vihar+Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
              </div>

              {/* Transit & Parking Details */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-[#073B70] block mb-0.5">By Delhi Metro</span>
                  De-board at Preet Vihar Metro Station (Blue Line) and take Exit Gate No. 2. The clinic is situated adjacent to the gate on Vikas Marg.
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-[#073B70] block mb-0.5">By Car / Taxi</span>
                  Directly accessible via the main Vikas Marg arterial corridor connecting Laxmi Nagar and Anand Vihar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
