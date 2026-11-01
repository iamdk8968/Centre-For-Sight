import React, { useState } from 'react';
import { Info, X, ShieldAlert, ExternalLink, Phone } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

export const DemoBanner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <aside aria-label="Demo notice banner" className="bg-[#073B70] text-white text-xs border-b border-blue-900/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-sky-400/20 text-sky-200 text-[11px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
              Demo Concept
            </span>
            <p className="truncate text-slate-200">
              Independent website concept for demonstration purposes. Not an official Centre For Sight website.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="text-sky-300 hover:text-white underline underline-offset-2 flex items-center gap-1 transition-colors text-[11px]"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Details & Notice</span>
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="text-slate-300 hover:text-white p-0.5 rounded transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Notice Information Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#073B70] flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-[#0878D1]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1B2C40]">Website Concept Demo Notice</h3>
                <p className="text-xs text-slate-500">Sales demonstration presentation</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                This website is an independent digital concept developed for demonstration purposes for <strong className="text-slate-900">{HOSPITAL_CONFIG.name} – {HOSPITAL_CONFIG.branch}</strong>.
              </p>
              <p className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                <strong>Important:</strong> It does not represent an official or affiliated web presence of Centre For Sight. Verified branch listing data (4.9 rating / 131 reviews, Vikas Marg address, and contact number) is used for realistic contextual preview.
              </p>
              <p className="text-xs text-slate-500">
                To confirm doctor consultations, available medical procedures, and clinic timings directly, please contact the branch desk:
              </p>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#E9F5FF] text-[#073B70]">
                <div className="flex items-center gap-2 font-medium">
                  <Phone className="w-4 h-4 text-[#0878D1]" />
                  <span>{HOSPITAL_CONFIG.phoneDisplay}</span>
                </div>
                <a
                  href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
                  className="text-xs bg-[#073B70] text-white px-3 py-1.5 rounded-lg hover:bg-[#0878D1] transition-colors"
                >
                  Call Clinic
                </a>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 pt-3 border-t border-slate-100">
              <a
                href={HOSPITAL_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-2"
              >
                <span>View Google Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="text-xs px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
