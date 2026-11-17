import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { MapPin, Phone, Clock, Send, MessageSquare, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import { InstagramIcon } from '../components/shared/Icons';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getTelUrl } from '../utils/phone';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Old Gold Buying');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = "Contact Us & Store Location | JS BROTHER'S GOLD Kadapa";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');

    const formattedMsg = `*New Gold Enquiry - JS BROTHER'S GOLD Contact Page*\n\n` +
      `👤 *Name:* ${fullName.trim()}\n` +
      `📞 *Phone:* ${phone.trim()}\n` +
      `💎 *Service:* ${service}\n` +
      (message.trim() ? `📝 *Message:* ${message.trim()}\n` : '') +
      `\n📍 Submitted via Website Contact Page`;

    setIsSubmitted(true);

    setTimeout(() => {
      const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  return (
    <div className="w-full bg-[#F8F5ED]">
      <PageHeader
        badge="Connect Directly"
        title="Visit JS BROTHER'S GOLD in Kadapa"
        subtitle="Conveniently situated opposite Zudio Showroom at Y Junction, New Bus Stand Road, Kadapa."
        backgroundImage="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main 2-Column Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 glass-surface p-8 rounded-2xl border border-[#D4AF37]/40 shadow-xl space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B89548]">
                Store Establishment
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#292722] mt-1">
                JS BROTHER'S GOLD
              </h2>
            </div>

            <div className="space-y-5 text-sm text-[#292722]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#292722]">{BUSINESS_INFO.address.street}</p>
                  <p className="text-[#92702F] font-semibold">{BUSINESS_INFO.address.landmark}</p>
                  <p className="text-[#777168]">{BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}</p>
                  <p className="text-[#777168]">{BUSINESS_INFO.address.state} – {BUSINESS_INFO.address.pincode}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#777168] uppercase font-semibold">Direct Telephone</div>
                  <a
                    href={getTelUrl()}
                    className="font-bold text-base text-[#292722] hover:text-[#D4AF37] transition-colors"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-emerald-700 font-medium">Click to call valuation desk</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#777168] uppercase font-semibold">Official Instagram</div>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#292722] hover:text-[#D4AF37] transition-colors"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="uppercase font-semibold text-[#292722]">Business Timings</div>
                  <p className="font-semibold text-[#292722] mt-0.5">{BUSINESS_INFO.openingHours.weekdays}</p>
                  <p className="text-[#777168]">{BUSINESS_INFO.openingHours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3 px-5 flex-1 flex items-center justify-center gap-1.5 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3 px-5 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/40 shadow-xl space-y-6">
            <div>
              <span className="gold-badge mb-2">Direct Enquiry</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292722] mt-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] mt-1">
                Share your requirements. Our Kadapa valuation specialists will respond promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#292722]">
                  Enquiry Successfully Sent
                </h4>
                <p className="text-xs text-[#777168]">
                  Connecting to our WhatsApp desk for fast correspondence...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Siva Kumar"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/30 text-sm text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/30 text-sm text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/30 text-sm text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                  >
                    <option value="Old Gold Buying">Old Gold Buying</option>
                    <option value="Broken Gold Buying">Broken Gold Buying</option>
                    <option value="Professional Gold Valuation">Professional Gold Valuation</option>
                    <option value="Pledged Gold Release Assistance">Pledged Gold Release Assistance</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-1.5">
                    Message / Ornaments Description
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Enter details of your ornaments or pledged loan..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/30 text-sm text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold-glossy py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-md"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Full Interactive Map */}
        <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl h-[450px]">
          <iframe
            title="JS BROTHER'S GOLD Location Map"
            src={BUSINESS_INFO.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </section>
    </div>
  );
};
