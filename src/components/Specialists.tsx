import React from 'react';
import { UserCheck, Calendar, Phone, Clock, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface SpecialistsProps {
  onOpenBooking: () => void;
}

export const Specialists: React.FC<SpecialistsProps> = ({ onOpenBooking }) => {
  // Configured placeholder structure designed for clinic verification
  // Doctors and qualifications are strictly NOT fabricated.
  const specialistDepartments = [
    {
      title: "Cornea & Refractive Specialist",
      scope: "Specialized in LASIK, PRK suitability evaluations, corneal mapping, and surface irregularities.",
      status: "Schedule verified upon enquiry",
      typicalDays: "Consultations by appointment"
    },
    {
      title: "Cataract & Anterior Segment",
      scope: "Pre-operative IOL biometric calculations, micro-incision cataract diagnosis, and lens clarity evaluations.",
      status: "Schedule verified upon enquiry",
      typicalDays: "Consultations by appointment"
    },
    {
      title: "Vitreo-Retina & Medical Retina",
      scope: "Diabetic retinopathy fundus examinations, retinal vascular screenings, and macular assessments.",
      status: "Schedule verified upon enquiry",
      typicalDays: "Consultations by appointment"
    },
    {
      title: "Glaucoma & Comprehensive Ophthalmology",
      scope: "Applanation tonometry, visual field perimetry reviews, and routine preventive eye health checkups.",
      status: "Schedule verified upon enquiry",
      typicalDays: "Consultations by appointment"
    }
  ];

  return (
    <section id="specialists" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
            <span>Clinical Team & Consultants</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Preet Vihar OPD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
            Our Eye Specialists
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Centre For Sight operates with dedicated ophthalmic consultants across sub-specialities. Consultations are scheduled to ensure thorough, unhurried patient examinations.
          </p>
        </div>

        {/* Informational Placeholder Banner Required by Specification */}
        <div className="p-6 rounded-3xl bg-[#F5F8FC] border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F5FF] text-[#073B70] flex items-center justify-center shrink-0 border border-sky-200">
                <UserCheck className="w-6 h-6 text-[#0878D1]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#073B70]">
                  Verified Doctor Roster Verification
                </h3>
                <p className="text-sm font-semibold text-[#0878D1] mt-0.5">
                  "Specialist profiles and schedules will be updated after clinic verification."
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  In compliance with strict healthcare presentation standards, individual doctor profiles, credentials, and specific OPD timings are finalized in coordination with the Preet Vihar front desk.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#073B70] bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0878D1]" />
                <span>Call Clinic Desk</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire Schedule</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modular Doctor Profile Card Template Structure (Ready for verified clinic data) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialistDepartments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Doctor photograph placeholder container with clinical emblem */}
                <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#F5F8FC] to-[#E9F5FF] border border-slate-100 flex flex-col items-center justify-center text-center p-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-white shadow-xs border border-sky-100 flex items-center justify-center mb-2">
                    <Stethoscope className="w-8 h-8 text-[#0878D1]" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#073B70] tracking-wide">
                    Ophthalmology Consultant
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    Preet Vihar Branch
                  </span>
                </div>

                {/* Sub-Speciality Title */}
                <h4 className="text-base font-bold text-[#073B70] mb-2 leading-snug">
                  {dept.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {dept.scope}
                </p>

                {/* Schedule info */}
                <div className="space-y-1.5 text-[11px] text-slate-500 bg-[#F5F8FC] p-3 rounded-xl mb-4 border border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-[#0878D1]" />
                    <span>{dept.typicalDays}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00A9A5]" />
                    <span>{dept.status}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onOpenBooking}
                className="w-full py-2 text-xs font-semibold text-[#073B70] hover:text-white bg-[#E9F5FF] hover:bg-[#073B70] border border-sky-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Check Doctor Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
