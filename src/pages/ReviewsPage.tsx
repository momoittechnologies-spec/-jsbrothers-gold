import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { PageHeader } from '../components/shared/PageHeader';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { REVIEW_HIGHLIGHTS } from '../data/reviewsData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ReviewsPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Customer Reviews & 5.0 Star Ratings | JS BROTHER'S GOLD Kadapa",
      description: "Read verified customer reviews and 5.0-star Google ratings for JS BROTHER'S GOLD Kadapa. Rated #1 for transparent weighing, fair value, and respectful service.",
      keywords: "JS Brothers Gold reviews, gold buyer reviews Kadapa, best rated gold buyer Kadapa, customer ratings JS Brothers Gold",
      canonicalPath: "/reviews"
    });
  }, []);

  return (
    <div className="w-full bg-[#F8F5ED]">
      <PageHeader
        badge="Verified Reputation"
        title="What Customers Say About Us"
        subtitle="Unwavering 5.0-star trust across 55+ verified Google reviews in Kadapa, Andhra Pradesh."
        backgroundImage="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=85"
      />

      {/* Main Review Dashboard */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Scorecard Hero */}
        <div className="glass-surface p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Google Business Profile Rating
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="font-serif text-6xl sm:text-7xl font-extrabold text-[#292722]">
              5.0
            </div>
            <div className="text-left space-y-1">
              <div className="flex text-[#D4AF37] text-2xl">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-sm font-bold text-[#292722]">
                Perfect 5.0 Star Score
              </p>
              <p className="text-xs text-[#777168]">
                Based on {BUSINESS_INFO.reviewCount} customer reviews on Google Maps
              </p>
            </div>
          </div>

          <p className="text-sm text-[#777168] max-w-xl mx-auto leading-relaxed">
            Every transaction at JS BROTHER'S GOLD is governed by honesty, respectful treatment, and complete transparency. Our Google reviews reflect the genuine confidence of Kadapa residents.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BUSINESS_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3.5 px-8 shadow-md flex items-center justify-center gap-2"
            >
              <span>READ & WRITE GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl("Hello JS BROTHER'S GOLD, I would like to enquire about your gold-buying services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3.5 px-6 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Customer Satisfaction Themes */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292722]">
              Why Kadapa Chooses JS BROTHER'S GOLD
            </h3>
            <p className="text-xs sm:text-sm text-[#777168]">
              Key themes highlighted by verified Google patrons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEW_HIGHLIGHTS.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#D4AF37]/30 shadow-md space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37] text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Google Review
                  </span>
                </div>

                <h4 className="font-serif text-base font-bold text-[#292722]">
                  {highlight.theme}
                </h4>

                <p className="text-xs sm:text-sm text-[#777168] leading-relaxed italic">
                  "{highlight.quote}"
                </p>

                <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#777168]">
                  <span>Kadapa Resident</span>
                  <span className="font-medium text-[#92702F]">Verified Visit</span>
                </div>
              </div>
            ))}
          </div>

          {/* Rate Us on Google Banner */}
          <div className="mt-12 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37]/35 p-6 sm:p-8 text-center space-y-4 shadow-sm">
            <div className="inline-flex text-[#D4AF37] text-lg">★★★★★</div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#292722]">
              Had a Great Experience at JS BROTHER'S GOLD?
            </h4>
            <p className="text-xs sm:text-sm text-[#777168] max-w-lg mx-auto leading-relaxed">
              Your feedback helps fellow Kadapa residents discover a dignified, transparent, and fair gold valuation experience. Leave your 5-star Google review today!
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3.5 px-8 shadow-md inline-flex items-center gap-2"
              >
                <span>LEAVE A GOOGLE REVIEW</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
