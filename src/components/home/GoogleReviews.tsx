import React from 'react';
import { Star, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { REVIEW_HIGHLIGHTS } from '../../data/reviewsData';

export const GoogleReviews: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F1E9DA]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            Client Feedback
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722]">
            What Customers Say About Us.
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
            Rated 5.0 stars by our patrons in Kadapa for honest evaluation, respectful service, and immediate payment.
          </p>
        </div>

        {/* Central Google Scorecard Card */}
        <div className="max-w-3xl mx-auto glass-surface rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl mb-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Google G Logo & Rating */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="w-10 h-10 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.79l7.97-6.2z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div className="text-left">
                <div className="font-bold text-base text-[#292722]">Google Rating</div>
                <div className="text-xs text-[#777168]">Verified Business Profile</div>
              </div>
            </div>

            <div className="h-10 w-[1px] bg-[#D4AF37]/30 hidden sm:block" />

            {/* Score & Stars */}
            <div className="flex items-center gap-3">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#292722]">
                {BUSINESS_INFO.googleRating.toFixed(1)}
              </div>
              <div className="text-left">
                <div className="flex text-[#D4AF37] text-lg leading-none">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-[#777168] mt-1">
                  Based on {BUSINESS_INFO.reviewCount} Reviews
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#777168] max-w-lg mx-auto">
            100% of verified reviews praise our honest testing, transparent weighing, and courteous Kadapa team.
          </p>

          {/* READ GOOGLE REVIEWS Button */}
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3 px-8 shadow-md"
            >
              <span>READ GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Verified Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEW_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37] text-xs">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <h4 className="font-serif text-sm font-bold text-[#292722]">
                  "{item.theme}"
                </h4>

                <p className="text-xs text-[#777168] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] text-[#777168]">
                <span>Customer in {item.authorLocation}</span>
                <span className="font-semibold text-[#92702F]">Google Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
