import React, { useEffect } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { ShieldCheck, Award, Eye, Scale, Users, Sparkles, Check, ArrowRight } from 'lucide-react';
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
        subtitle="Kadapa's foremost destination for transparent gold evaluation, non-destructive karat testing, and dignified service."
        backgroundImage="https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=1920&q=85"
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
              JS BROTHER'S GOLD was established in Kadapa with a single defining vision: to transform gold-selling from an uncertain, behind-closed-doors negotiation into an open, dignified, and scientifically verified experience.
            </p>

            <p className="text-sm text-[#777168] leading-relaxed">
              Traditional pawnbrokers and unorganized jewelers often employ crude rubstone testing, arbitrary melting discounts, and opaque deductions. At JS BROTHER'S GOLD, we dismantled those practices. Every piece of gold—whether a family heirloom, a broken ornament, or a pledged bank receipt—is evaluated in full view of the owner using calibrated technology.
            </p>

            <div className="p-5 rounded-2xl bg-[#F1E9DA]/60 border border-[#D4AF37]/30 space-y-3">
              <h4 className="font-serif font-bold text-[#292722] text-sm">
                Our Core Commitments:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#292722]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>No hidden deductions or melting losses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>German laser Karatmeter testing in your presence</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Instant settlement via IMPS bank transfer or cash</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588444650733-d0767b753fc8?auto=format&fit=crop&w=1200&q=85"
                alt="Jeweller inspecting gold ornaments with professional loupe and precision"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28251F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-surface rounded-xl text-center">
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

      {/* 3 Pillars of Scientific Valuation */}
      <section className="py-20 bg-[#F1E9DA]/40 border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="gold-badge">Non-Destructive Testing</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722]">
              The 3 Pillars of Our Scientific Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-surface p-8 rounded-2xl border border-[#D4AF37]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292722]">
                1. Optical Karatmeter
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                We employ advanced X-ray Fluorescence (XRF) spectrometry. Your jewellery is never cut, filed, or damaged with nitric acid. The exact percentage of gold and alloy metals is measured down to 0.01% accuracy.
              </p>
            </div>

            <div className="glass-surface p-8 rounded-2xl border border-[#D4AF37]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F]">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292722]">
                2. Calibrated Scales
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                Class-II digital precision scales with legal metrology stamps ensure true weight representation. You see the reading yourself, with separate itemized accounting for embedded stones and net gold weight.
              </p>
            </div>

            <div className="glass-surface p-8 rounded-2xl border border-[#D4AF37]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5ED] to-[#F1E9DA] border border-[#D4AF37]/40 flex items-center justify-center text-[#92702F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292722]">
                3. Direct Market Rates
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                Valuations match prevailing bullion indices. You receive an itemized quotation sheet and are under zero obligation to proceed until you are 100% comfortable with the terms.
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
          Visit our showroom at Y Junction, New Bus Stand Road, opposite Zudio Showroom, or book an appointment.
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
            className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3.5 px-6"
          >
            Find Our Location
          </Link>
        </div>
      </section>
    </div>
  );
};
