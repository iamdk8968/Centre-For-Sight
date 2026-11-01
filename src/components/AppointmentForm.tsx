import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  AlertCircle,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { HOSPITAL_CONFIG, TREATMENTS } from '../config/hospitalData';

interface AppointmentFormProps {
  initialService?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialService = '',
  isModal = false,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 01:00 PM)');
  const [serviceCategory, setServiceCategory] = useState(
    initialService || 'Comprehensive Eye Examination'
  );
  const [userNote, setUserNote] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceCategory(initialService);
    }
  }, [initialService]);

  // Set minimum date to today
  const todayString = new Date().toISOString().split('T')[0];

  const timeOptions = [
    'Morning (10:00 AM - 01:00 PM)',
    'Afternoon (01:00 PM - 04:00 PM)',
    'Evening (04:00 PM - 07:00 PM)',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }

    // Indian phone regex: 10 digits, optionally with +91 or leading 0
    const cleanPhone = mobileNumber.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (!/^(?:\+?91)?[6-9]\d{9}$/.test(cleanPhone)) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!preferredDate) {
      errs.preferredDate = 'Please select your preferred date';
    }

    if (!serviceCategory) {
      errs.serviceCategory = 'Please choose a general service category';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format the WhatsApp message exactly as requested
    const formattedMsg = `Hello Centre For Sight, I would like to request an appointment at your Preet Vihar branch.

Name: ${fullName.trim()}
Phone: ${mobileNumber.trim()}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}
Service: ${serviceCategory}${userNote.trim() ? `\nNote: ${userNote.trim()}` : ''}

Please confirm availability. Thank you.`;

    setGeneratedMessage(formattedMsg);
    setIsSubmitted(true);

    // Open WhatsApp URL directly
    const encodedText = encodeURIComponent(formattedMsg);
    const whatsappUrl = `https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${encodedText}`;

    // Small delay to allow visual transition, then open
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobileNumber('');
    setPreferredDate('');
    setUserNote('');
    setErrors({});
  };

  return (
    <div
      id="appointment-form-container"
      className={`${
        isModal
          ? 'bg-white p-0'
          : 'bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-blue-900/5'
      }`}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {!isModal && (
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0878D1] uppercase tracking-wider mb-1">
                <span>Direct Clinic Scheduling</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Preet Vihar Desk</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B70] tracking-tight">
                Request an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out your preferred details below to generate a direct enquiry via WhatsApp to our Preet Vihar reception desk.
              </p>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Rajesh Sharma"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none transition-all ${
                  errors.fullName
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-slate-200 focus:border-[#0878D1] focus:ring-2 focus:ring-[#0878D1]/20'
                }`}
              />
            </div>
            {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Mobile Number (for WhatsApp / Call) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="e.g. 98765 43210"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                  if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                }}
                className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none transition-all ${
                  errors.mobileNumber
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-slate-200 focus:border-[#0878D1] focus:ring-2 focus:ring-[#0878D1]/20'
                }`}
              />
            </div>
            {errors.mobileNumber && (
              <p className="text-red-600 text-[11px] mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          {/* Service Category */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              General Service Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={serviceCategory}
                onChange={(e) => {
                  setServiceCategory(e.target.value);
                  if (errors.serviceCategory) setErrors({ ...errors, serviceCategory: '' });
                }}
                className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0878D1] focus:ring-2 focus:ring-[#0878D1]/20 transition-all text-slate-800"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
                <option value="General Eye Consultation / Second Opinion">
                  General Eye Consultation / Second Opinion
                </option>
              </select>
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  min={todayString}
                  value={preferredDate}
                  onChange={(e) => {
                    setPreferredDate(e.target.value);
                    if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                  }}
                  className={`w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none transition-all ${
                    errors.preferredDate
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-slate-200 focus:border-[#0878D1]'
                  }`}
                />
              </div>
              {errors.preferredDate && (
                <p className="text-red-600 text-[11px] mt-1">{errors.preferredDate}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Time Slot <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0878D1] transition-all text-slate-800"
                >
                  {timeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Optional Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Additional Details / Specific Symptoms (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Enquiring for LASIK suitability check or routine spectacle checkup..."
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0878D1] focus:ring-2 focus:ring-[#0878D1]/20 transition-all text-slate-800 resize-none"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Do not enter sensitive financial or medical records here.
            </p>
          </div>

          {/* Compliance & WhatsApp note */}
          <div className="p-3 rounded-xl bg-[#E9F5FF] border border-sky-200/80 text-[11px] text-[#073B70] flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#0878D1] shrink-0 mt-0.5" />
            <p>
              Submitting opens a pre-composed WhatsApp request to <strong>{HOSPITAL_CONFIG.phoneDisplay}</strong>. This does not represent a confirmed booking; the clinic front desk will reply to verify doctor availability and slot timings.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#073B70] hover:bg-[#0878D1] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <Send className="w-4 h-4" />
            <span>Send Appointment Request</span>
          </button>
        </form>
      ) : (
        /* Submission Success & Summary Screen */
        <div className="text-center py-4 space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
            <CheckCircle className="w-9 h-9" />
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#073B70]">
              Appointment Request Generated!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
              Your request was preformatted for WhatsApp to <strong>{HOSPITAL_CONFIG.name} – Preet Vihar</strong> (+91 9953783443).
            </p>
          </div>

          {/* Message Preview Box */}
          <div className="text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-lg mx-auto">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#0878D1]" />
                <span>Pre-filled WhatsApp Request Message</span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-[#0878D1] hover:text-[#073B70] flex items-center gap-1 text-[11px] font-bold"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>
            </div>
            <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
              {generatedMessage}
            </pre>
          </div>

          {/* Next Steps Notice */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-lg mx-auto text-left">
            <strong>Next Step:</strong> If WhatsApp did not open automatically, tap the button below to send your message or call the desk directly. Clinic personnel will confirm doctor OPD slots.
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                generatedMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-[#00A9A5] hover:bg-[#008f8b] rounded-xl flex items-center justify-center gap-2 shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in WhatsApp</span>
            </a>

            <a
              href={`tel:${HOSPITAL_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-[#073B70] bg-[#E9F5FF] hover:bg-sky-100 rounded-xl border border-sky-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0878D1]" />
              <span>Call Clinic (+91 9953783443)</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
