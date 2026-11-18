import React, { useEffect } from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { HOW_IT_WORKS_STEPS } from '../data/servicesData';
import { ShieldCheck, FileText, CheckCircle, HelpCircle, ArrowRight, PhoneCall } from 'lucide-react';
import { getTelUrl } from '../utils/phone';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HowItWorksPageProps {
  onOpenEnquiry: (service?: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenEnquiry }) => {
  useEffect(() => {
    document.title = "How It Works | JS BROTHER'S GOLD Kadapa";
  }, []);

  const faqs = [
    {
      q: "Does your valuation process damage or scratch my jewellery?",
      a: "Our evaluation is conducted with extreme care directly in your presence. We inspect hallmarking, purity, and weight transparently without damaging or altering your ornaments."
    },
    {
      q: "What documents do I need to bring?",
      a: "In compliance with statutory regulatory norms in India, please carry any valid government photo ID (Aadhaar Card, PAN Card, Voter ID, or Driving License). If you have the original purchase receipt, please bring it, though it is not strictly mandatory for legacy family heirlooms."
    },
    {
      q: "How is the payment transferred?",
      a: "Payment is transferred immediately upon mutual agreement via instant online bank transfer (IMPS / NEFT / RTGS) directly into your verified bank account, or cash as permitted under current tax guidelines."
    },
    {
      q: "Can you help release gold pledged with private pawnbrokers or banks?",
      a: "Yes. Our team reviews your loan pledge receipt, assists in clearing the pending principal and interest directly with the bank/lender in Kadapa, collects the physical ornaments, and settles the surplus balance with you immediately."
    }
  ];

  return (
    <div className="w-full bg-[#F8F5ED]">
      <PageHeader
        badge="Transparent Procedure"
        title="A Simple Way to Get Started"
        subtitle="Step-by-step clarity on our transparent evaluation, precision weighing, and immediate settlement workflow in Kadapa."
        backgroundImage="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1920&q=85"
      />

      {/* 4 Steps In Depth */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="gold-badge">The Roadmap</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722]">
            From Evaluation to Settlement in 4 Steps
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="glass-surface p-7 rounded-2xl border border-[#D4AF37]/30 flex flex-col justify-between relative space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-extrabold text-[#D4AF37]">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#92702F] bg-[#E9D5A5]/30 px-2 py-0.5 rounded">
                    Est: {step.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#292722]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#777168] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/15 text-[11px] font-semibold text-[#92702F]">
                100% Transparent • In-Person
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist: What to Bring */}
      <section className="py-16 bg-[#F1E9DA]/50 border-y border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-surface p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9D5A5]/40 border border-[#D4AF37]/50 flex items-center justify-center text-[#92702F]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#292722]">
                  Checklist: What to Bring to Our Kadapa Store
                </h3>
                <p className="text-xs sm:text-sm text-[#777168]">
                  Please ensure you carry the following for quick, legally verified transactions:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#92702F]">
                  1. Government ID Proof
                </div>
                <p className="text-xs text-[#777168] leading-relaxed">
                  Original Aadhaar Card, PAN Card, Driving License, or Voter ID of the gold owner.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#92702F]">
                  2. Bank Account Details
                </div>
                <p className="text-xs text-[#777168] leading-relaxed">
                  Passbook copy, canceled cheque, or UPI / IFSC details matching your government ID.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#92702F]">
                  3. Purchase / Loan Slip
                </div>
                <p className="text-xs text-[#777168] leading-relaxed">
                  Original purchase invoice if available, or loan pledge slip if seeking release assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="gold-badge">Clarity & Confidence</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292722]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm space-y-2"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#292722]">
                  {faq.q}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#777168] leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-6 space-y-4">
          <p className="text-sm text-[#292722] font-semibold">
            Ready to test your gold with zero obligation?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry('Gold Valuation')}
              className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3.5 px-7"
            >
              Book In-Person Valuation
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <a
              href={getTelUrl()}
              className="btn-luxury-outline text-xs uppercase tracking-wider font-semibold py-3.5 px-6"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#D4AF37]" />
              Call Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
