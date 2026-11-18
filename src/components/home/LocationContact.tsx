import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../shared/Icons';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getTelUrl } from '../../utils/phone';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const LocationContact: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F5ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Flagship Establishment
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722]">
            Visit JS BROTHER'S GOLD in Kadapa.
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
            Conveniently situated at the prominent Y Junction landmark on New Bus Stand Road, opposite Zudio Showroom in Vivekananda Nagar.
          </p>
        </div>

        {/* Location Showcase & Map Embed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 glass-surface p-7 sm:p-9 rounded-2xl border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B89548]">
                  Direct Store Details
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#292722] mt-1">
                  JS BROTHER'S GOLD
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-[#292722]">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{BUSINESS_INFO.address.street}</p>
                  <p className="text-[#92702F] font-medium">{BUSINESS_INFO.address.landmark}</p>
                  <p className="text-[#777168]">{BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}</p>
                  <p className="text-[#777168]">{BUSINESS_INFO.address.state} – {BUSINESS_INFO.address.pincode}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 text-sm text-[#292722]">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#777168] uppercase font-semibold">Phone Consultation</div>
                  <a
                    href={getTelUrl()}
                    className="font-bold text-base text-[#292722] hover:text-[#D4AF37] transition-colors"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-emerald-700 font-medium">Click to call immediately</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3 text-sm text-[#292722]">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#777168] uppercase font-semibold">Official Instagram</div>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#292722] hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                  >
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-sm text-[#292722]">
                <div className="w-9 h-9 rounded-xl bg-[#E9D5A5]/30 border border-[#D4AF37]/30 flex items-center justify-center text-[#92702F] flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs text-[#777168]">
                  <div className="uppercase font-semibold text-[#292722]">Business Hours</div>
                  <p className="font-medium text-[#292722] mt-0.5">{BUSINESS_INFO.openingHours.weekdays}</p>
                  <p className="font-medium text-[#292722]">{BUSINESS_INFO.openingHours.sunday}</p>
                  <p className="text-[11px] text-[#777168] italic mt-0.5">({BUSINESS_INFO.openingHours.note})</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
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
                href={getWhatsAppUrl("Hello JS BROTHER'S GOLD, I would like to visit your Kadapa store. Please share exact location and directions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3 px-5 flex items-center justify-center"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl relative min-h-[380px] lg:min-h-full bg-[#FAF7F0] flex flex-col">
            {/* Top Map Header */}
            <div className="bg-[#28251F] text-white px-5 py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-[#E9D5A5]">Kadapa Central Location: Y Junction</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map iframe */}
            <iframe
              title="JS BROTHER'S GOLD Kadapa Location Map"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', flex: 1 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
