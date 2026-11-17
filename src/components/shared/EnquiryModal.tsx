import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Old Gold Buying'
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState(initialService);
  const [weight, setWeight] = useState('');
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Phone Call'>('WhatsApp');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter your phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted enquiry for WhatsApp transmission
    const formattedMsg = `*New Gold Enquiry - JS BROTHER'S GOLD*\n\n` +
      `👤 *Name:* ${fullName.trim()}\n` +
      `📞 *Phone:* ${phoneNumber.trim()}\n` +
      `💎 *Service:* ${service}\n` +
      (weight.trim() ? `⚖️ *Approx Weight:* ${weight.trim()} grams\n` : '') +
      `📱 *Preferred Contact:* ${contactMethod}\n` +
      (message.trim() ? `📝 *Message:* ${message.trim()}\n` : '') +
      `\n📍 Submitted via Website Enquiry Form`;

    // Save submission locally for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('js_gold_enquiries') || '[]');
      existing.unshift({
        id: Date.now(),
        fullName,
        phoneNumber,
        service,
        weight,
        contactMethod,
        message,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('js_gold_enquiries', JSON.stringify(existing));
    } catch {
      // localStorage may fail silently in private windows
    }

    setIsSubmitted(true);

    // If preferred is WhatsApp, redirect to WhatsApp after brief acknowledgment
    if (contactMethod === 'WhatsApp') {
      setTimeout(() => {
        const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 1200);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setWeight('');
    setMessage('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F0] rounded-2xl border border-[#D4AF37]/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Metallic Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#777168] hover:text-[#292722] hover:bg-[#F1E9DA] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="gold-badge mb-2">Enquiry Registered</span>
              <h3 className="font-serif text-2xl font-bold text-[#292722] mt-2">
                Thank You, {fullName}!
              </h3>
              <p className="text-sm text-[#777168] mt-2 max-w-md mx-auto leading-relaxed">
                Your enquiry for <strong className="text-[#292722]">{service}</strong> has been received by our Kadapa valuation desk.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F1E9DA]/60 border border-[#D4AF37]/20 text-xs text-[#292722] text-left space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#777168]">Contact Number:</span>
                <span className="font-semibold">{phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777168]">Evaluation Center:</span>
                <span className="font-semibold">Y Junction, Kadapa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777168]">Direct Line:</span>
                <span className="font-semibold">{BUSINESS_INFO.phoneFormatted}</span>
              </div>
            </div>

            <p className="text-xs text-[#777168]">
              {contactMethod === 'WhatsApp' 
                ? 'Opening WhatsApp to connect with our gold specialist...'
                : 'Our specialist will contact you shortly during business hours.'}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppUrl(`Hello JS BROTHER'S GOLD, I submitted an enquiry for ${service} (Name: ${fullName}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy text-sm py-2.5 px-5"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp Now
              </a>
              <button
                onClick={handleReset}
                className="btn-luxury-outline text-sm py-2.5 px-5"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/30 text-[#92702F] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                Confidential • Zero Obligation
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292722]">
                Sell Your Gold / Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#777168] mt-1.5">
                Connect directly with JS BROTHER'S GOLD in Kadapa for transparent valuation & instant assistance.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  placeholder="e.g. Ramesh Reddy"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                    errors.fullName ? 'border-red-400 ring-1 ring-red-300' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                  } text-sm text-[#292722] placeholder:text-[#777168]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                  Phone Number <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#777168]">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="98765 43210"
                    maxLength={14}
                    className={`w-full pl-12 pr-4 py-2.5 rounded-xl bg-white border ${
                      errors.phoneNumber ? 'border-red-400 ring-1 ring-red-300' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                    } text-sm text-[#292722] placeholder:text-[#777168]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-sm text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                  >
                    <option value="Old Gold Buying">Old Gold Buying</option>
                    <option value="Broken Gold Buying">Broken Gold Buying</option>
                    <option value="Gold Valuation">Gold Valuation</option>
                    <option value="Pledged Gold Assistance">Pledged Gold Assistance</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                    Approx. Weight (Grams)
                  </label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 24g (optional)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-sm text-[#292722] placeholder:text-[#777168]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setContactMethod('WhatsApp')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      contactMethod === 'WhatsApp'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-1 ring-emerald-500'
                        : 'bg-white border-[#D4AF37]/20 text-[#777168] hover:bg-[#F1E9DA]/40'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactMethod('Phone Call')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      contactMethod === 'Phone Call'
                        ? 'bg-[#E9D5A5]/30 border-[#D4AF37] text-[#292722] ring-1 ring-[#D4AF37]'
                        : 'bg-white border-[#D4AF37]/20 text-[#777168] hover:bg-[#F1E9DA]/40'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B89548]" />
                    Direct Phone Call
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                  Additional Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  placeholder="Share any specific details regarding your gold ornaments or pledged loan..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-sm text-[#292722] placeholder:text-[#777168]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold-glossy py-3.5 text-sm uppercase tracking-wider font-bold shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Confidential Enquiry
                </button>
              </div>

              {/* Trust Footer */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#777168] pt-1">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Privacy Guaranteed • In-Person Testing in Kadapa</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
