import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { Calculator, ShieldCheck, Info, MessageSquare, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { getTelUrl } from '../utils/phone';

interface CalculatorPageProps {
  onOpenEnquiry: (service: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenEnquiry }) => {
  const [karat, setKarat] = useState<'24K' | '22K' | '18K'>('22K');
  const [grossWeight, setGrossWeight] = useState<string>('20');
  const [stoneWeight, setStoneWeight] = useState<string>('0');

  useEffect(() => {
    document.title = "Gold Weight & Karat Calculator | JS BROTHER'S GOLD Kadapa";
  }, []);

  const gross = parseFloat(grossWeight) || 0;
  const stones = parseFloat(stoneWeight) || 0;
  const netGoldWeight = Math.max(0, gross - stones);

  const purityFactor = karat === '24K' ? 0.999 : karat === '22K' ? 0.916 : 0.750;
  const pure24kEquivalent = netGoldWeight * purityFactor;

  const handleWhatsAppInquiry = () => {
    const url = getServiceWhatsAppUrl("Gold Valuation Calculator", {
      weight: `${netGoldWeight.toFixed(2)}`,
      purity: karat,
      notes: `Gross: ${gross}g, Stones: ${stones}g. Pure Equivalent: ${pure24kEquivalent.toFixed(2)}g. Please share current rate.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#F8F5ED]">
      <PageHeader
        badge="Precision Estimator"
        title="Gold Weight & Karat Calculator"
        subtitle="Understand net gold weights and karat equivalents transparently before visiting our Kadapa valuation laboratory."
        backgroundImage="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Calculator Inputs Card (7 cols) */}
          <div className="lg:col-span-7 glass-surface p-7 sm:p-9 rounded-2xl border border-[#D4AF37]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-serif text-2xl font-bold text-[#292722]">
                Estimate Your Net Gold Content
              </h2>
            </div>

            <div className="space-y-5">
              {/* Purity Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-2">
                  1. Select Gold Purity / Karat Grade
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { k: '24K' as const, label: '24 Karat', sub: '99.9% Pure', desc: 'Bullion / Bars' },
                    { k: '22K' as const, label: '22 Karat', sub: '91.6% Hallmark', desc: 'Standard Ornaments' },
                    { k: '18K' as const, label: '18 Karat', sub: '75.0% Gold', desc: 'Stone Jewellery' },
                  ].map((item) => (
                    <button
                      key={item.k}
                      type="button"
                      onClick={() => setKarat(item.k)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        karat === item.k
                          ? 'bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border-[#D4AF37] ring-1 ring-[#D4AF37]'
                          : 'bg-white border-[#D4AF37]/20 hover:bg-[#F1E9DA]/50'
                      }`}
                    >
                      <div className="font-bold text-sm text-[#292722]">{item.label}</div>
                      <div className="text-[11px] font-semibold text-[#92702F]">{item.sub}</div>
                      <div className="text-[10px] text-[#777168] mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gross Weight Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-1.5">
                  2. Gross Ornament Weight (in Grams)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={grossWeight}
                  onChange={(e) => setGrossWeight(e.target.value)}
                  placeholder="e.g. 24.50"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 text-base font-semibold text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                />
                <p className="text-[11px] text-[#777168] mt-1">
                  Total weight of all ornaments together on a digital scale.
                </p>
              </div>

              {/* Stone Deductions Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#292722] mb-1.5">
                  3. Estimated Stones / Enamel / Beads (in Grams)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={stoneWeight}
                  onChange={(e) => setStoneWeight(e.target.value)}
                  placeholder="e.g. 2.00"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 text-base font-semibold text-[#292722] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
                />
                <p className="text-[11px] text-[#777168] mt-1">
                  Enter 0 if ornaments are plain gold with no stones or pearls.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full btn-gold-glossy py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get Current Market Quote on WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Gold Valuation')}
                  className="w-full btn-luxury-outline py-3 text-xs uppercase tracking-wider font-semibold"
                >
                  Book Free In-Person Testing in Kadapa
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results & Transparency Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calculation Output Card */}
            <div className="bg-[#28251F] text-white p-7 rounded-2xl border border-[#D4AF37]/40 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E9D5A5]">
                  Derived Evaluation Metrics
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  Net Gold Assessment
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#D4AF37]/20">
                  <span className="text-[#E9D5A5]/80">Gross Weight:</span>
                  <span className="font-bold text-white">{gross.toFixed(2)} g</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#D4AF37]/20">
                  <span className="text-[#E9D5A5]/80">Stone Deductions:</span>
                  <span className="font-bold text-rose-300">- {stones.toFixed(2)} g</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#D4AF37]/30 text-sm">
                  <span className="text-white font-bold">Net Gold Weight ({karat}):</span>
                  <span className="font-bold text-[#E9D5A5] text-base">{netGoldWeight.toFixed(2)} g</span>
                </div>
                <div className="flex justify-between py-2 bg-[#1e1c17] p-3 rounded-xl border border-[#D4AF37]/30">
                  <span className="text-[#E9D5A5] font-semibold">24K Pure Equivalent:</span>
                  <span className="font-bold text-[#F6E7B8] text-base">{pure24kEquivalent.toFixed(2)} g</span>
                </div>
              </div>

              <div className="text-[11px] text-[#E9D5A5]/70 space-y-1">
                <p>• Purity Factor applied: {(purityFactor * 100).toFixed(1)}%</p>
                <p>• Zero hidden wastage or melting loss deductions.</p>
              </div>
            </div>

            {/* Transparency Policy Callout */}
            <div className="glass-surface p-6 rounded-2xl border border-[#D4AF37]/30 text-xs text-[#292722] space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-[#92702F]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Our Transparent Valuation Guarantee</span>
              </div>
              <p className="text-[#777168] leading-relaxed">
                In strict adherence to ethical gold-buying standards, JS BROTHER'S GOLD never provides speculative or misleading online pricing. Gold rates fluctuate continuously in international and domestic markets. Our final valuation is calculated live at our Kadapa showroom based on exact Karatmeter spectrometry and that hour's transparent rate.
              </p>
            </div>

            <div className="text-center text-xs text-[#777168]">
              Need immediate assistance? Call our desk directly at{' '}
              <a href={getTelUrl()} className="font-bold text-[#292722] underline hover:text-[#D4AF37]">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
