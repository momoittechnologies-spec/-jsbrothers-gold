import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getTelUrl } from '../../utils/phone';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface BottomActionBarProps {
  onOpenEnquiry: () => void;
}

export const BottomActionBar: React.FC<BottomActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#28251F]/95 backdrop-blur-md border-t border-[#D4AF37]/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Direct Phone Call */}
        <a
          href={getTelUrl()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#F8F5ED] hover:bg-[#1e1c17] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#E9D5A5]">Call Desk</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#F8F5ED] hover:bg-[#1e1c17] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-0.5">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-300">WhatsApp</span>
        </a>

        {/* Map Directions */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#F8F5ED] hover:bg-[#1e1c17] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#E9D5A5]">Location</span>
        </a>

        {/* Sell Gold CTA */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-br from-[#F6E7B8] via-[#D4AF37] to-[#B89548] text-[#28251F] shadow-md shadow-[#D4AF37]/30"
        >
          <span className="text-[11px] font-extrabold uppercase tracking-wider leading-tight">SELL</span>
          <span className="text-[10px] font-bold uppercase tracking-wider leading-tight">GOLD</span>
        </button>
      </div>
    </div>
  );
};
