import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

interface AboutSectionProps {
  onOpenEnquiry: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F1E9DA]/50 relative overflow-hidden">
      {/* Subtle Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial & Philosophy (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/35 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              About JS BROTHER'S GOLD
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722] leading-[1.18]">
              Where Gold Meets Trust.
            </h2>

            {/* Decorative Gold Accent Bar */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full" />

            <p className="text-base sm:text-lg text-[#292722] font-medium leading-relaxed">
              JS BROTHER'S GOLD provides gold-buying, gold valuation and pledged gold release assistance in Kadapa. Our focus is to make the gold-buying experience straightforward, professional and customer-friendly.
            </p>

            <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
              We understand that selling gold is an important financial decision. That is why our Kadapa showroom is centered on transparency. There are no behind-the-counter mysteries or confusing deductions. We examine your gold directly in your presence on precision digital scales, explain every gram and purity detail clearly, and honour fair market value with complete transparency.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% In-Person Visual Evaluation",
                "Precision Digital Scale Weighing",
                "Instant Bank Transfer / Cash Settlement",
                "Pledged Gold Loan Assistance in Kadapa",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#292722]">
                  <div className="w-5 h-5 rounded-full bg-[#E9D5A5]/40 border border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0 text-[#92702F]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry('Gold Valuation')}
                className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3.5 px-6 shadow-md"
              >
                Book Valuation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <Link
                to="/about"
                className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3.5 px-6 !bg-white"
              >
                Learn Our Story
              </Link>
            </div>
          </div>

          {/* Right Column: Luxury Gold Photography Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Ambient Gold Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/15 via-[#E9D5A5]/10 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=85"
                alt="Gold jewellery appraisal and evaluation in Kadapa"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Glass Float Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 glass-surface bg-white/95 rounded-xl border border-[#D4AF37]/40 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#92702F]">
                      Kadapa Landmark Location
                    </span>
                    <div className="font-serif text-sm sm:text-base font-bold text-[#292722]">
                      Opposite Zudio Showroom, Y Junction
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F6E7B8] to-[#D4AF37] flex items-center justify-center text-[#28251F] shadow-sm flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
