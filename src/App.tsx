/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { TreatmentModal } from './components/TreatmentModal';
import { Specialists } from './components/Specialists';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactLocation } from './components/ContactLocation';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { Treatment, HOSPITAL_CONFIG } from './config/hospitalData';
import { Calendar, Phone, ShieldCheck, Clock } from 'lucide-react';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [activeTreatmentModal, setActiveTreatmentModal] = useState<Treatment | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || 'Comprehensive Eye Examination');
    setIsBookingModalOpen(true);
  };

  const handleBookFromCard = (treatmentName: string) => {
    // If user prefers on-page form, scroll to it, or open modal
    setSelectedServiceForBooking(treatmentName);
    const formEl = document.getElementById('appointment-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#1B2C40] selection:bg-[#E9F5FF] selection:text-[#073B70]">
      {/* 1. Demo Mode Compliance Notice */}
      <DemoBanner />

      {/* 2. Sticky Header with Top Bar Contract */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 3. Hero Section with Optical Wave Visuals and 4 Trust Cards */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4. About Section: "Dedicated to Better Vision" */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Eye Treatments Section */}
        <Treatments
          onSelectTreatment={(treatment) => setActiveTreatmentModal(treatment)}
          onBookTreatment={(treatmentName) => handleBookFromCard(treatmentName)}
        />

        {/* 6. Our Specialists (Verified Doctor Information Placeholder) */}
        <Specialists onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Patient Reviews Section (Google 4.9/5 Listing Summary) */}
        <Reviews />

        {/* 9. Dedicated Appointment Booking Section */}
        <section id="appointment-section" className="py-16 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Contextual Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-2">
                    <span>Direct Scheduling</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>Preet Vihar Branch</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B70] tracking-tight">
                    Schedule Your Eye Consultation
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Plan your visit with Centre For Sight Preet Vihar. Our team coordinates consultations to minimize wait times and ensure thorough evaluations.
                  </p>
                </div>

                {/* Consultation Guidance Strip */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#00A9A5] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-600">
                      <strong className="text-slate-800 block text-xs">Direct Clinic Desk Connection</strong>
                      Your details generate a structured WhatsApp request directly to our reception desk for schedule confirmation.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0878D1] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-600">
                      <strong className="text-slate-800 block text-xs">Adequate Time For Pupil Dilation</strong>
                      Comprehensive evaluations and retinal screenings typically take 60–90 minutes.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#E9F5FF] border border-sky-200 text-[#073B70] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <Phone className="w-4 h-4 text-[#0878D1]" />
                      <span>Prefer Calling?</span>
                    </div>
                    <a
                      href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
                      className="text-xs font-bold text-[#0878D1] hover:underline"
                    >
                      {HOSPITAL_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form Container */}
              <div className="lg:col-span-7">
                <AppointmentForm initialService={selectedServiceForBooking} />
              </div>
            </div>
          </div>
        </section>

        {/* 10. Contact & Location with Google Map and Transit Guide */}
        <ContactLocation />

        {/* 11. Frequently Asked Questions */}
        <FAQ onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 12. Footer with 4 Columns and Disclaimers */}
      <Footer />

      {/* 13. Mobile Sticky Bottom Action Bar (<15% height) */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* 14. Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* 15. Treatment Details Modal */}
      <TreatmentModal
        treatment={activeTreatmentModal}
        onClose={() => setActiveTreatmentModal(null)}
        onSelectForBooking={(name) => handleBookFromCard(name)}
      />

      {/* 16. Booking Modal Overlay */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedServiceForBooking}
      />
    </div>
  );
}
