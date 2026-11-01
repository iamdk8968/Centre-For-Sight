import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappMessage = encodeURIComponent(
    "Hello Centre For Sight Preet Vihar, I would like to enquire about eye consultations."
  );

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip notice */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-1.5 px-3 rounded-xl shadow-lg border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Enquire via WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Preet Vihar clinic"
        className="group flex items-center justify-center w-13 h-13 rounded-full bg-[#00A9A5] hover:bg-[#008f8b] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-6 h-6 fill-white text-[#00A9A5]" />
      </a>
    </div>
  );
};
