import React, { useState } from 'react';
import { Eye, Phone, MapPin, ExternalLink, ShieldAlert, ArrowUp, X } from 'lucide-react';
import { HOSPITAL_CONFIG, TREATMENTS } from '../config/hospitalData';

export const Footer: React.FC = () => {
  const [showLegalModal, setShowLegalModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#073B70] text-white pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/80">
          {/* Column 1: Business Name & Concept Note (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {HOSPITAL_CONFIG.name}
                </span>
                <span className="text-xs text-sky-200">
                  {HOSPITAL_CONFIG.branch}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Super-speciality eye hospital & eye care concept presentation. Dedicated to clinical transparency, specialized consultations, and accessible patient communication.
            </p>

            <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/80 text-[11px] text-sky-200">
              <strong className="text-white block mb-0.5">Website Concept Demo</strong>
              Independent concept presentation. Not an official or affiliated Centre For Sight website.
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About the Centre</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Eye Treatments</a>
              </li>
              <li>
                <a href="#specialists" className="hover:text-white transition-colors">Our Specialists</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Location</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Eye Care Information (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Eye Care Information
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <a href="#treatments" className="hover:text-white transition-colors block truncate">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-[10px] text-slate-400 pt-1">
              *Confirm specific branch availability with clinic
            </div>
          </div>

          {/* Column 4: Contact Details (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Preet Vihar Clinic
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {HOSPITAL_CONFIG.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${HOSPITAL_CONFIG.phoneRaw}`} className="hover:text-white font-medium">
                  {HOSPITAL_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={HOSPITAL_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white underline underline-offset-4"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="text-[11px] text-slate-400 pt-1">
                Google Rating: <strong>4.9 / 5.0</strong> ({HOSPITAL_CONFIG.googleReviewCount} reviews)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Centre For Sight – Preet Vihar Concept Demo. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 font-medium">
              Disclaimer: {HOSPITAL_CONFIG.demoNotice}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowLegalModal(true)}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer text-xs"
            >
              Privacy & Disclaimer
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Disclaimer Modal */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-800 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowLegalModal(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-4 text-[#073B70]">
              <ShieldAlert className="w-6 h-6 text-[#0878D1]" />
              <h3 className="text-lg font-bold">Privacy & Healthcare Demonstration Disclaimer</h3>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Demonstration Concept:</strong> This website is an independent digital prototype created to illustrate a premium web presence for Centre For Sight – Preet Vihar. It is not owned, operated, or endorsed by Centre For Sight corporate entities.
              </p>
              <p>
                <strong>2. Verified Information:</strong> Publicly verifiable branch data including the address at F-14 Vikas Marg, the contact number +91 9953783443, and the Google review summary (4.9 rating with 131 reviews) are incorporated for realistic demonstration.
              </p>
              <p>
                <strong>3. No Medical Outcome Guarantees:</strong> Content provided across this site is for educational purposes only. Diagnostic suitability, surgical recommendations, and medical protocols must be determined directly by a qualified ophthalmologist.
              </p>
              <p>
                <strong>4. Appointment Enquiries:</strong> Submissions made via the appointment form generate a prefilled message for WhatsApp communication to the clinic desk. No sensitive health records or credit card details are collected or stored on this server.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowLegalModal(false)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#073B70] rounded-xl hover:bg-[#0878D1] transition-colors"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
