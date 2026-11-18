import React, { useEffect } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { ShieldCheck, Eye, Scale, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onOpenEnquiry: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  useEffect(() => {
    document.title = "About Us | JS BROTHER'S GOLD Kadapa";
  }, []);

  return (
    <div className="w-full bg-[#F8F5ED]">
      <PageHeader
        badge="Our Heritage & Ethos"
        title="Where Gold Meets Trust"
        subtitle="Kadapa's foremost destination for transparent gold evaluation, precision scale weighing, and dignified service."
        backgroundImage="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1920&q=85"
      />

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="gold-badge">The JS Brother's Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722] leading-tight">
              Redefining Gold Buying with Dignity and Transparency
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full" />

            <p className="text-base text-[#292722] leading-relaxed font-medium">
              JS BROTHER'S GOLD was established in Kadapa with a clear focus: to make the gold-buying experience straightforward, professional and customer-friendly.
            </p>

            <p className="text-sm text-[#777168] leading-relaxed">
              We understand that selling gold is an important financial decision. That is why our Kadapa showroom is engineered around complete transparency. There are no behind-the-counter secrets or arbitrary deductions. Every piece of gold—whether a family heirloom, an unused ornament, or a pledged bank receipt—is evaluated directly in your presence using digital precision scales.
            </p>

            <div className="p-5 rounded-2xl bg-[#F1E9DA]/60 border border-[#D4AF37]/30 space-y-3">
              <h4 className="font-serif font-bold text-[#292722] text-sm">
                Our Core Commitments:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#292722]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>100% In-Person Visual Evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Precision digital scale weighing directly in your view</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Instant settlement via IMPS bank transfer or cash as per law</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588444650733-d0767b753fc8?auto=format&fit=crop&w=1200&q=85"
                alt="Jeweller inspecting gold ornaments with professional loupe and precision"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28251F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-surface bg-white/95 rounded-xl text-center">
                <span className="font-serif text-base font-bold text-[#292722]">
                  {BUSINESS_INFO.address.landmark}, Kadapa
                </span>
                <p className="text-xs text-[#777168]">
                  Open 6 Days a Week for Private Valuation
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Pillars of Transparent Valuation */}
      <section className="py-20 bg-[#F1E9DA]/40 border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="gold-badge">Transparent Valuation Approach</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722]">
              The 3 Pillars of Our Evaluation Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#D4AF37]/30 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292722]">
                1. Visual Examination
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                We inspect your gold ornaments directly in your view. Hallmark stamps, design details, and physical condition are assessed openly, explaining the evaluation criteria clearly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D4AF37]/30 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F]">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292722]">
                2. Digital Scale Weighing
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                Accurate digital scales provide transparent weight measurements right in front of you. Embedded stone and bead weights are accounted for fairly to calculate net gold mass.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D4AF37]/30 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292722]">
                3. Fair Bullion Rates
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                Valuations reflect prevailing market rates for 24K, 22K, and 18K purity. You receive a clear, itemized explanation with zero obligation to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722]">
          Experience Transparent Gold Valuation in Kadapa
        </h3>
        <p className="text-sm sm:text-base text-[#777168] max-w-xl mx-auto">
          Visit our showroom at Y Junction, New Bus Stand Road, opposite Zudio Showroom, or book a consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onOpenEnquiry('Gold Valuation')}
            className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3.5 px-7"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <Link
            to="/contact"
            className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3.5 px-6 !bg-white"
          >
            Find Our Location
          </Link>
        </div>
      </section>
    </div>
  );
};
