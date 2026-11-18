import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getTelUrl } from '../../utils/phone';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F1E9DA] via-[#F8F5ED] to-[#F1E9DA] text-[#292722] border-y border-[#D4AF37]/25">
      {/* Supporting Subtle Gold Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-[#E9D5A5]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E9D5A5]/40 border border-[#D4AF37]/40 text-[#92702F] text-xs font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Instant Evaluation Desk
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#292722] tracking-tight leading-tight">
          Ready to Know What Your Gold Is Worth?
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

        <p className="text-base sm:text-lg text-[#777168] max-w-2xl mx-auto leading-relaxed">
          Connect with JS BROTHER'S GOLD and discuss your gold-buying requirements with our team.
        </p>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getTelUrl()}
            className="w-full sm:w-auto btn-gold-glossy text-xs sm:text-sm uppercase tracking-wider font-bold py-4 px-8 shadow-xl shadow-[#D4AF37]/30 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#28251F]" />
            <span>CALL NOW: {BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-luxury-outline text-xs sm:text-sm uppercase tracking-wider font-semibold py-4 px-8 !border-[#D4AF37]/60 !text-[#292722] bg-white hover:!bg-[#E9D5A5]/30 flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WHATSAPP ENQUIRY</span>
          </a>
        </div>

        <p className="text-xs text-[#777168] pt-2">
          Private & Confidential • Fast Response • Kadapa, Andhra Pradesh
        </p>
      </div>
    </section>
  );
};
