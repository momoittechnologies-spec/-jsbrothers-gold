import React, { useState, useEffect } from 'react';
import { X, Calculator, Info, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getServiceWhatsAppUrl } from '../../utils/whatsapp';

interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (service: string) => void;
}

export const ValuationModal: React.FC<ValuationModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry
}) => {
  const [karat, setKarat] = useState<'24K' | '22K' | '18K'>('22K');
  const [grossWeight, setGrossWeight] = useState<string>('16');
  const [stoneWeight, setStoneWeight] = useState<string>('0');

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

  const gross = parseFloat(grossWeight) || 0;
  const stones = parseFloat(stoneWeight) || 0;
  const netGoldWeight = Math.max(0, gross - stones);

  // Pure gold purity factors
  const purityPercentage = karat === '24K' ? 99.9 : karat === '22K' ? 91.6 : 75.0;

  const handleWhatsAppInquiry = () => {
    const url = getServiceWhatsAppUrl("Professional Gold Valuation", {
      weight: `${netGoldWeight.toFixed(2)}`,
      purity: karat,
      notes: `Gross: ${gross}g, Stones: ${stones}g. Please share current evaluation rate.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F0] rounded-2xl border border-[#D4AF37]/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#777168] hover:text-[#292722] hover:bg-[#F1E9DA] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/30 text-[#92702F] text-[11px] font-semibold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
              Indicative Valuation Guide
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292722]">
              Gold Weight & Karat Estimator
            </h2>
            <p className="text-xs sm:text-sm text-[#777168] mt-1.5">
              Understand how net gold weight and purity are calculated before your in-person testing at JS BROTHER'S GOLD.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Karat Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                Select Gold Purity (Karat)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { k: '24K' as const, label: '24K (99.9%)', desc: 'Pure Gold' },
                  { k: '22K' as const, label: '22K (91.6%)', desc: 'Hallmark Jewellery' },
                  { k: '18K' as const, label: '18K (75.0%)', desc: 'Diamond / Antique' },
                ].map((item) => (
                  <button
                    key={item.k}
                    type="button"
                    onClick={() => setKarat(item.k)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      karat === item.k
                        ? 'bg-gradient-to-b from-[#F6E7B8]/40 to-[#E9D5A5]/30 border-[#D4AF37] ring-1 ring-[#D4AF37]'
                        : 'bg-white border-[#D4AF37]/20 hover:bg-[#F1E9DA]/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#292722]">{item.k}</div>
                    <div className="text-[10px] text-[#777168] font-medium">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weights */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                  Gross Weight (Grams)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={grossWeight}
                  onChange={(e) => setGrossWeight(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-sm font-medium text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292722] mb-1.5">
                  Stones / Beads (Grams)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={stoneWeight}
                  onChange={(e) => setStoneWeight(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-sm font-medium text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Calculation Breakdown Card */}
            <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#777168]">Total Ornament Weight:</span>
                <span className="font-semibold text-[#292722]">{gross.toFixed(2)} g</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#777168]">Non-Gold Deductions (Stones):</span>
                <span className="font-semibold text-rose-700">- {stones.toFixed(2)} g</span>
              </div>
              <div className="h-[1px] bg-[#D4AF37]/20" />
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#292722] uppercase tracking-wider">
                  Net Pure Gold Weight:
                </span>
                <span className="text-base font-bold text-[#92702F]">
                  {netGoldWeight.toFixed(2)} g ({karat})
                </span>
              </div>
              <div className="text-[11px] text-[#777168] bg-[#F1E9DA]/50 p-2 rounded-lg flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  Standard Purity Equivalent: <strong>{(netGoldWeight * (purityPercentage / 100)).toFixed(2)} g</strong> of 24K pure gold equivalent.
                </span>
              </div>
            </div>

            {/* Transparency Notice */}
            <div className="p-3.5 rounded-xl bg-[#F8F5ED] border border-[#D4AF37]/20 text-xs text-[#777168] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[#292722]">Transparent Valuation Policy:</strong> We do not speculate or display unverified online rates. Final valuation is determined live at our Kadapa showroom based on in-person evaluation, precision digital scale weighing, and prevailing market rates.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full btn-gold-glossy py-3 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-md"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Enquire Current Rate on WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenEnquiry("Gold Valuation");
                }}
                className="w-full btn-luxury-outline py-2.5 text-xs uppercase tracking-wider font-semibold"
              >
                Book In-Person Valuation at Kadapa
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>

            <div className="text-center text-[11px] text-[#777168]">
              Or call our valuation desk directly: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#292722] hover:text-[#D4AF37] underline">{BUSINESS_INFO.phoneFormatted}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
