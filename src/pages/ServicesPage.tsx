import React, { useEffect } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { SERVICES_DATA } from '../data/servicesData';
import { CheckCircle2, ArrowRight, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { getWhatsAppUrl, getServiceWhatsAppUrl } from '../utils/whatsapp';
import { getTelUrl } from '../utils/phone';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ServicesPageProps {
  onOpenEnquiry: (service: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  useEffect(() => {
    document.title = "Our Services | JS BROTHER'S GOLD Kadapa";
  }, []);

  return (
    <div className="w-full bg-[#F8F5ED]">
      <PageHeader
        badge="Our Comprehensive Services"
        title="Discover Our Gold Services"
        subtitle="Transparent evaluation, scientific non-destructive testing, and immediate financial settlements in Kadapa."
        backgroundImage="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1920&q=85"
      />

      {/* Services List */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column (5 cols) */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28251F]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#28251F]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#E9D5A5] text-xs font-semibold">
                    <span>Service 0{index + 1}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#E9D5A5] font-semibold">
                      JS BROTHER'S GOLD
                    </p>
                    <div className="font-serif text-xl font-bold">{service.title}</div>
                  </div>
                </div>
              </div>

              {/* Text Content Column (7 cols) */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9D5A5]/30 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {service.subtitle}
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722]">
                  {service.title}
                </h2>

                <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full" />

                <p className="text-base text-[#292722] font-medium leading-relaxed">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#777168] leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Benefits */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722]">
                    Key Advantages:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-[#292722]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accepted Items */}
                <div className="p-4 rounded-xl bg-[#F1E9DA]/50 border border-[#D4AF37]/20 text-xs text-[#292722] space-y-1">
                  <span className="font-bold uppercase tracking-wider text-[#92702F]">Items Accepted:</span>
                  <p className="text-[#777168]">{service.acceptedItems.join(' • ')}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiry(service.title)}
                    className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3 px-6 shadow-md"
                  >
                    Enquire for {service.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3 px-5 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Direct Help Callout */}
      <section className="py-16 bg-[#28251F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Not Sure Which Service You Require?
          </h3>
          <p className="text-xs sm:text-sm text-[#E9D5A5]/80 max-w-xl mx-auto">
            Our gold experts are available on phone and WhatsApp to guide you through purity questions, loan release procedures, or current market quotations.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getTelUrl()} className="btn-gold-glossy text-xs py-3 px-6">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#28251F]" />
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-luxury-outline text-xs py-3 px-6 !border-[#D4AF37] !text-white hover:!bg-[#D4AF37]/20">
              <MessageSquare className="w-3.5 h-3.5 mr-2 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
