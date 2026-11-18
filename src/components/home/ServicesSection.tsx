import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle, Scale, Shield, Landmark } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

interface ServicesSectionProps {
  onOpenEnquiry: (service: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEnquiry }) => {
  const serviceIcons: Record<string, React.ReactNode> = {
    'old-gold-buying': <Sparkles className="w-5 h-5" />,
    'broken-gold-buying': <Scale className="w-5 h-5" />,
    'professional-gold-valuation': <Shield className="w-5 h-5" />,
    'pledged-gold-release': <Landmark className="w-5 h-5" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            What We Do
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722]">
            Discover Our Gold Services.
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
            Professional gold solutions tailored to your requirements with transparent in-person evaluation and direct payout in Kadapa.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="glossy-card rounded-2xl flex flex-col justify-between group border border-[#D4AF37]/30 bg-[#FAF7F0]"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28251F]/80 via-[#28251F]/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#28251F]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[#E9D5A5] text-[11px] font-semibold tracking-wider">
                    <span className="text-[#D4AF37]">{serviceIcons[service.id]}</span>
                    <span>0{index + 1}</span>
                  </div>

                  {/* Title overlay on bottom of image for sleek luxury feel */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#E9D5A5] font-medium tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm text-[#777168] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Benefits Bullets */}
                  <div className="space-y-2 pt-1 border-t border-[#D4AF37]/15">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-[#292722]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 flex items-center justify-between gap-3 border-t border-[#D4AF37]/10 mt-auto">
                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-2.5 px-5 shadow-sm"
                >
                  Enquire Now
                </button>

                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#92702F] hover:text-[#292722] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
