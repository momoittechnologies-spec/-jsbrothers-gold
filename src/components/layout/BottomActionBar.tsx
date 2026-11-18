import React from 'react';
import { Phone, MessageSquare, MapPin, Coins } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getTelUrl } from '../../utils/phone';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface BottomActionBarProps {
  onOpenEnquiry: () => void;
}

export const BottomActionBar: React.FC<BottomActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#28251F]/98 backdrop-blur-md border-t border-[#D4AF37]/35 px-2.5 pt-2 pb-3 shadow-[0_-8px_25px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 max-w-md mx-auto text-center">
        {/* 1. Direct Phone Call */}
        <a
          href={getTelUrl()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#F8F5ED] hover:bg-[#1e1c17] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-[#E9D5A5]">Call Desk</span>
        </a>

        {/* 2. WhatsApp Chat */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#F8F5ED] hover:bg-[#1e1c17] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-0.5">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-300">WhatsApp</span>
        </a>

        {/* 3. Store Location */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#F8F5ED] hover:bg-[#1e1c17] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-[#E9D5A5]">Location</span>
        </a>

        {/* 4. Sell Gold Action CTA */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-br from-[#F6E7B8] via-[#D4AF37] to-[#B89548] text-[#28251F] active:scale-95 transition-all shadow-md shadow-[#D4AF37]/30"
        >
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-[#28251F] mb-0.5">
            <Coins className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider leading-tight">SELL GOLD</span>
        </button>
      </div>
    </div>
  );
};
