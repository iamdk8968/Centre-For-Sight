import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 px-4 shadow-lg flex items-center gap-3"
      style={{ maxHeight: '64px' }}
    >
      <a
        href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-[#073B70] bg-[#E9F5FF] hover:bg-sky-100 rounded-xl border border-sky-200/80 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#0878D1]" />
        <span>Call Now</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl shadow-xs transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
};
