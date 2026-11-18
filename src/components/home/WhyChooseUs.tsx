import React from 'react';
import { Eye, UserCheck, MessageCircle, Building2, Sparkles } from 'lucide-react';
import { TRUST_FEATURES } from '../../data/servicesData';

export const WhyChooseUs: React.FC = () => {
  const featureIcons: Record<string, React.ReactNode> = {
    'transparent-valuation': <Eye className="w-6 h-6 stroke-[1.5]" />,
    'professional-assistance': <UserCheck className="w-6 h-6 stroke-[1.5]" />,
    'convenient-enquiry': <MessageCircle className="w-6 h-6 stroke-[1.5]" />,
    'local-presence': <Building2 className="w-6 h-6 stroke-[1.5]" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F1E9DA]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Trust Pillars
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722]">
            Confidence in Every Gold Transaction.
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
            Experience gold valuation designed around client clarity, transparent weighing, and respectful service in Kadapa.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-white p-7 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F] mb-5 shadow-sm group-hover:scale-108 transition-transform">
                {featureIcons[feature.id]}
              </div>

              <div className="text-[11px] font-bold uppercase tracking-widest text-[#B89548] mb-1.5">
                Pillar 0{idx + 1}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#292722] mb-2.5 leading-snug">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
