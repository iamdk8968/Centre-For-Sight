import React from 'react';
import { X, CheckCircle2, AlertCircle, Calendar, ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
import { Treatment, HOSPITAL_CONFIG } from '../config/hospitalData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onSelectForBooking: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onSelectForBooking,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close treatment details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3.5 pr-8 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#E9F5FF] text-[#0878D1] flex items-center justify-center shrink-0 border border-sky-200">
            <Stethoscope className="w-6 h-6 text-[#073B70]" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0878D1] mb-1">
              Super-Speciality Eye Care Category
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#073B70] tracking-tight">
              {treatment.name}
            </h3>
          </div>
        </div>

        {/* Branch Availability Notice */}
        <div className="mb-6 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Branch Availability Note:</strong> Please confirm with the Preet Vihar clinic desk for current doctor availability, equipment suitability, and consultation schedules.
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-6 text-sm text-slate-700">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Clinical Overview
            </h4>
            <p className="leading-relaxed text-slate-600 bg-[#F5F8FC] p-4 rounded-xl border border-slate-200/60">
              {treatment.description}
            </p>
          </div>

          {/* Symptoms and Tests 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#073B70] mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A9A5]" />
                <span>Common Symptoms Addressed</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {treatment.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#0878D1] font-bold">·</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#073B70] mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0878D1]" />
                <span>Diagnostic Assessments</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {treatment.tests.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#0878D1] font-bold">·</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What to expect */}
          <div className="p-4 rounded-xl bg-[#E9F5FF] border border-sky-200/70 text-xs text-[#073B70]">
            <h4 className="font-bold mb-1">What to Expect During Your Evaluation</h4>
            <p className="text-slate-600 leading-relaxed">{treatment.whatToExpect}</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onSelectForBooking(treatment.name);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Enquire for {treatment.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
