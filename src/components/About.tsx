import React from 'react';
import { Eye, ShieldCheck, HeartHandshake, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
            <span>About The Centre</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Preet Vihar Branch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
            Dedicated to Better Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sight is our most vital sense. Super-speciality eye care requires careful clinical evaluation, specialized diagnostic precision, and a patient-first approach to preserving vision across every stage of life.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Clinical Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              At <strong className="text-[#073B70]">{HOSPITAL_CONFIG.name} – Preet Vihar</strong>, our focus is delivering dedicated consultations in super-speciality eye care and refractive surgery evaluations. Whether assessing early signs of eye fatigue, monitoring chronic conditions like diabetic changes or glaucoma, or considering refractive procedures to reduce spectacle dependency, timely guidance makes a crucial difference.
            </p>

            <p>
              Every eye condition is unique. We emphasize thorough diagnostic assessments to help patients understand their ocular health clearly. Rather than one-size-fits-all advice, our approach centers on transparent consultations, clear explanation of findings, and patient comfort.
            </p>

            {/* Structured Care Principles */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-[#073B70] font-bold text-sm mb-1.5">
                  <Eye className="w-4 h-4 text-[#0878D1]" />
                  <span>Comprehensive Screening</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Detailed evaluation of the anterior segment, corneal curvature, lens clarity, and posterior retinal health.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-[#073B70] font-bold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00A9A5]" />
                  <span>Clinical Diligence</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Strict focus on medical protocol, sterile consultation spaces, and evidence-grounded recommendations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-[#073B70] font-bold text-sm mb-1.5">
                  <Compass className="w-4 h-4 text-[#0878D1]" />
                  <span>Patient Guidance</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Clear explanations of diagnostic findings so patients make informed choices without pressure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-[#073B70] font-bold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#00A9A5]" />
                  <span>Accessible Location</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Conveniently situated right on Vikas Marg, directly adjacent to Preet Vihar Metro Station Gate No. 2.
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-lg transition-colors cursor-pointer"
              >
                <span>Request Consultation at Preet Vihar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Focus Areas & Verification Note */}
          <div className="lg:col-span-5 space-y-4">
            {/* Super Speciality Focus Card */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-slate-200">
              <h3 className="text-lg font-bold text-[#073B70] mb-3">
                Core Clinical Categories
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Consultations and evaluations available for key ophthalmological sub-specialities:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
                  <span><strong>Cataract Evaluation:</strong> Pre-surgical assessment & lens calculation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
                  <span><strong>Refractive Surgery:</strong> LASIK suitability & corneal mapping</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
                  <span><strong>Retinal Screening:</strong> Diabetic & vascular fundus examinations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
                  <span><strong>Glaucoma Diagnostics:</strong> Eye pressure and visual field assessment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
                  <span><strong>Pediatric & Preventive:</strong> Early childhood visual development</span>
                </li>
              </ul>

              <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-500">
                <strong>Branch Note:</strong> Specific doctor OPD timings and procedure availability should always be confirmed with the Preet Vihar clinic desk prior to your visit.
              </div>
            </div>

            {/* Location & Appointment Card */}
            <div className="p-5 rounded-2xl bg-[#E9F5FF] border border-sky-200 text-[#073B70]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0878D1] mb-1">
                Branch Details
              </div>
              <div className="text-sm font-bold">{HOSPITAL_CONFIG.branch}</div>
              <p className="text-xs text-slate-600 mt-1">
                {HOSPITAL_CONFIG.fullAddress}
              </p>
              <div className="mt-3 pt-3 border-t border-sky-200/80 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">Call / WhatsApp:</span>
                <a href={`tel:${HOSPITAL_CONFIG.phoneRaw}`} className="font-bold text-[#0878D1] hover:underline">
                  {HOSPITAL_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
