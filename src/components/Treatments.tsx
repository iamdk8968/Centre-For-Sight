import React, { useState, useMemo } from 'react';
import {
  Eye,
  Sparkles,
  Activity,
  ShieldAlert,
  Layers,
  Smile,
  Droplet,
  ClipboardCheck,
  Search,
  ArrowRight,
  Info,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { TREATMENTS, Treatment, HOSPITAL_CONFIG } from '../config/hospitalData';

interface TreatmentsProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({
  onSelectTreatment,
  onBookTreatment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon renderer helper
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#0878D1]";
    switch (iconName) {
      case 'Eye':
        return <Eye className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Smile':
        return <Smile className={iconClass} />;
      case 'Droplet':
        return <Droplet className={iconClass} />;
      case 'ClipboardCheck':
      default:
        return <ClipboardCheck className={iconClass} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'refractive', label: 'Refractive & LASIK' },
    { id: 'surgical', label: 'Cataract & Cornea' },
    { id: 'diagnostic', label: 'Retina & Glaucoma' },
    { id: 'general', label: 'General & Preventive' },
  ];

  const filteredTreatments = useMemo(() => {
    return TREATMENTS.filter((t) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'refractive' && t.category === 'refractive') ||
        (selectedCategory === 'surgical' && (t.category === 'surgical' || t.id === 'cornea')) ||
        (selectedCategory === 'diagnostic' && (t.category === 'diagnostic' || t.id === 'retina' || t.id === 'glaucoma')) ||
        (selectedCategory === 'general' && (t.category === 'general' || t.category === 'pediatric'));

      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="treatments" className="py-16 lg:py-24 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
              <span>Clinical Care & Specialties</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>8 Core Diagnostic Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
              Eye Treatments & Consultations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Specialized ophthalmological evaluations and therapeutic guidance. Branch availability for procedures must be verified with the clinic desk.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search treatments, symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#0878D1] focus:ring-2 focus:ring-[#0878D1]/20 transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="mb-8 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#073B70] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Global Branch Notice Banner */}
        <div className="mb-8 p-3.5 rounded-2xl bg-[#E9F5FF] border border-sky-200/80 flex items-center gap-3 text-xs text-[#073B70]">
          <AlertCircle className="w-4 h-4 text-[#0878D1] shrink-0" />
          <p>
            <strong>Branch Availability:</strong> Treatment categories are illustrative of comprehensive eye care services. Please confirm with the Preet Vihar clinic desk for current doctor availability and specialized diagnostic equipment.
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top: Icon & Category Text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F8FC] border border-slate-100 flex items-center justify-center group-hover:bg-[#E9F5FF] transition-colors">
                    {renderIcon(treatment.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {treatment.category}
                  </span>
                </div>

                {/* Treatment Name */}
                <h3 className="text-lg font-bold text-[#073B70] group-hover:text-[#0878D1] transition-colors mb-2.5">
                  {treatment.name}
                </h3>

                {/* Short Educational Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {treatment.shortDesc}
                </p>

                {/* Branch confirmation badge */}
                <div className="mb-4 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Please confirm with the clinic for Preet Vihar availability</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectTreatment(treatment)}
                  className="text-xs font-semibold text-[#0878D1] hover:text-[#073B70] flex items-center gap-1 py-1 px-2 rounded hover:bg-sky-50 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookTreatment(treatment.name)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state for search */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-600 text-sm">No treatments match your search "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-[#0878D1] font-semibold underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
