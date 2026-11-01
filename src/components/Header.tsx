import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Eye, ChevronRight } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalData';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Specialists', href: '#specialists' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-white ${
        scrolled ? 'shadow-md border-b border-slate-200/80 py-3' : 'border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element with subtle medical icon) */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#073B70] group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#0878D1] rounded"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B70] to-[#0878D1] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <Eye className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#073B70] leading-none">
              Centre For Sight
            </span>
            <span className="text-[11px] font-semibold text-[#0878D1] tracking-wide mt-1">
              Preet Vihar · New Delhi
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-slate-700"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#0878D1] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#0878D1]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#073B70] bg-[#E9F5FF] hover:bg-sky-100/90 rounded-lg transition-colors border border-sky-200/60 whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#0878D1]" />
            <span>{HOSPITAL_CONFIG.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-lg transition-colors shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#073B70] rounded-lg cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#073B70] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl p-5 space-y-4 animate-in slide-in-from-top-2 duration-200 z-50">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-800 hover:text-[#0878D1] py-2 border-b border-slate-100"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2.5">
            <a
              href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-[#073B70] bg-[#E9F5FF] rounded-xl border border-sky-200"
            >
              <Phone className="w-4 h-4 text-[#0878D1]" />
              <span>Call: {HOSPITAL_CONFIG.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
