import React from 'react';
import { PhoneCall, MessageSquare, Scale, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/servicesData';

interface HowItWorksProps {
  onOpenEnquiry: (service?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiry }) => {
  const stepIcons = [
    <PhoneCall className="w-5 h-5" />,
    <MessageSquare className="w-5 h-5" />,
    <Scale className="w-5 h-5" />,
    <CheckCircle2 className="w-5 h-5" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F5ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            Process Timeline
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722]">
            A Simple Way to Get Started.
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
            Our 4-step evaluation roadmap guarantees total clarity before any commitment is made.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Champagne Gold Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle with Emblem & Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFFFFF] border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center text-[#92702F] group-hover:scale-110 group-hover:bg-[#F1E9DA] transition-all duration-300">
                    {stepIcons[idx]}
                  </div>

                  {/* Step Number Tag */}
                  <div className="absolute -bottom-2.5 -right-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] text-[#28251F] text-[10px] font-black uppercase tracking-wider shadow">
                    {step.step}
                  </div>
                </div>

                {/* Step Title & Content */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#B89548]">
                    {step.short}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292722]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777168] leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Evaluation CTA */}
        <div className="mt-14 pt-8 text-center border-t border-[#D4AF37]/20">
          <p className="text-xs sm:text-sm text-[#777168] mb-4">
            Have questions about documents needed or specific gold purity?
          </p>
          <button
            onClick={() => onOpenEnquiry('Gold Valuation')}
            className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3 px-7 shadow-md"
          >
            Start Your Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
