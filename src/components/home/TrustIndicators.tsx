import React from 'react';
import { Star, ShieldCheck, MapPin, Scale } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-surface bg-[#FFFFFF]/90 rounded-2xl shadow-xl shadow-[#92702F]/10 border border-[#D4AF37]/30 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-[#D4AF37]/20">
          
          {/* Indicator 1: Google Rating */}
          <div className="flex items-center gap-4 pt-2 lg:pt-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm">
              <Star className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold text-[#292722]">
                  {BUSINESS_INFO.googleRating.toFixed(1)}
                </span>
                <div className="flex text-[#D4AF37] text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-xs text-[#777168] font-medium uppercase tracking-wider">
                Google Rating
              </p>
            </div>
          </div>

          {/* Indicator 2: Google Reviews */}
          <div className="flex items-center gap-4 pt-2 lg:pt-0 lg:pl-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#92702F]" />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-[#292722]">
                {BUSINESS_INFO.reviewCount}
              </div>
              <p className="text-xs text-[#777168] font-medium uppercase tracking-wider">
                Google Reviews
              </p>
            </div>
          </div>

          {/* Indicator 3: Gold-Buying Services */}
          <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm">
              <Scale className="w-6 h-6 text-[#92702F]" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#292722] leading-tight">
                Gold-Buying
              </div>
              <p className="text-xs text-[#777168] font-medium uppercase tracking-wider">
                & Valuation Services
              </p>
            </div>
          </div>

          {/* Indicator 4: Located in Kadapa */}
          <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm">
              <MapPin className="w-6 h-6 text-[#92702F]" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#292722] leading-tight">
                Kadapa, AP
              </div>
              <p className="text-xs text-[#777168] font-medium uppercase tracking-wider">
                Opp. Zudio Showroom
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
