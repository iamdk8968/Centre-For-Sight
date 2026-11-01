import React from 'react';
import { X, Calendar } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pr-8">
          <div className="w-10 h-10 rounded-xl bg-[#E9F5FF] text-[#073B70] flex items-center justify-center shrink-0 border border-sky-200">
            <Calendar className="w-5 h-5 text-[#0878D1]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#0878D1] uppercase tracking-wider">
              {HOSPITAL_CONFIG.branch}
            </div>
            <h3 className="text-xl font-bold text-[#073B70]">
              Request an Appointment
            </h3>
          </div>
        </div>

        {/* Form Container */}
        <AppointmentForm
          initialService={selectedService}
          isModal={true}
        />
      </div>
    </div>
  );
};
