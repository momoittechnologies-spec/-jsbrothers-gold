import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getTelUrl } from '../../utils/phone';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-[#28251F] via-[#332e26] to-[#28251F] text-white">
      {/* Background Gold Photography with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury gold ornaments background"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
          loading="lazy"
        />
        {/* Ambient Radial Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E9D5A5] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Instant Evaluation Desk
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to Know What Your Gold Is Worth?
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

        <p className="text-base sm:text-lg text-[#F1E9DA]/90 max-w-2xl mx-auto leading-relaxed">
          Connect with JS BROTHER'S GOLD and discuss your gold-buying requirements with our team.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getTelUrl()}
            className="w-full sm:w-auto btn-gold-glossy text-xs sm:text-sm uppercase tracking-wider font-bold py-4 px-8 shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#28251F]" />
            <span>CALL NOW: {BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-luxury-outline text-xs sm:text-sm uppercase tracking-wider font-semibold py-4 px-8 !border-[#D4AF37]/70 !text-[#F8F5ED] hover:!bg-[#D4AF37]/25 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP ENQUIRY</span>
          </a>
        </div>

        <p className="text-xs text-[#E9D5A5]/70 pt-2">
          Private & Confidential • Fast Response • Kadapa, Andhra Pradesh
        </p>
      </div>
    </section>
  );
};
