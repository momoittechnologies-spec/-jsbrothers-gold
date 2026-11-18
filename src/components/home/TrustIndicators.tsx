import React from 'react';
import { Star, ShieldCheck, MapPin, Scale } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="relative z-20 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFFFF] rounded-2xl shadow-xl shadow-[#92702F]/8 border border-[#D4AF37]/35 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          
          {/* Indicator 1: Google Rating */}
          <a
            href={BUSINESS_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-md transition-all group cursor-pointer"
            title="Read 5.0 Google Reviews for JS BROTHER'S GOLD"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm group-hover:scale-105 transition-transform">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#292722]">
                  {BUSINESS_INFO.googleRating.toFixed(1)}
                </span>
                <div className="flex text-[#D4AF37] text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-[#777168] font-semibold uppercase tracking-wider group-hover:text-[#92702F] transition-colors">
                Google Rating ↗
              </p>
            </div>
          </a>

          {/* Indicator 2: Google Reviews */}
          <a
            href={BUSINESS_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-md transition-all group cursor-pointer"
            title="Read Verified Google Reviews for JS BROTHER'S GOLD"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#92702F]" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#292722]">
                {BUSINESS_INFO.reviewCount}
              </div>
              <p className="text-[10px] sm:text-xs text-[#777168] font-semibold uppercase tracking-wider group-hover:text-[#92702F] transition-colors">
                Google Reviews ↗
              </p>
            </div>
          </a>

          {/* Indicator 3: Gold-Buying Services */}
          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#92702F]" />
            </div>
            <div>
              <div className="font-serif text-base sm:text-lg font-bold text-[#292722] leading-tight">
                Gold-Buying
              </div>
              <p className="text-[10px] sm:text-xs text-[#777168] font-semibold uppercase tracking-wider">
                & Valuation
              </p>
            </div>
          </div>

          {/* Indicator 4: Located in Kadapa */}
          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8]/40 to-[#E9D5A5]/30 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#92702F] shadow-sm">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#92702F]" />
            </div>
            <div>
              <div className="font-serif text-base sm:text-lg font-bold text-[#292722] leading-tight">
                Kadapa, AP
              </div>
              <p className="text-[10px] sm:text-xs text-[#777168] font-semibold uppercase tracking-wider">
                Opp. Zudio
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
