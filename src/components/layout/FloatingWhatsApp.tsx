import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-5 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip Message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#D4AF37]/40 shadow-xl shadow-[#D4AF37]/15 text-xs text-[#292722] animate-bounce-subtle">
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#92702F]">Have Gold to Sell?</span>
            <span className="text-[11px] text-[#777168]">Instant valuation on WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:text-black text-[#777168]"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-xl shadow-emerald-600/35 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white" />
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};
