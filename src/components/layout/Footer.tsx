import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../shared/Icons';
import { GoldLogo } from '../shared/GoldLogo';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getTelUrl } from '../../utils/phone';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Google Reviews', path: '/reviews' },
    { label: 'Showroom Gallery', path: '/#gallery' },
    { label: 'Valuation Calculator', path: '/valuation-calculator' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Old Gold Buying', path: '/services#old-gold-buying' },
    { label: 'Broken Gold Buying', path: '/services#broken-gold-buying' },
    { label: 'Professional Gold Valuation', path: '/services#professional-gold-valuation' },
    { label: 'Pledged Gold Release Assistance', path: '/services#pledged-gold-release-assistance' },
    { label: 'Gold Purity Testing', path: '/services#gold-purity-testing' },
    { label: 'Instant Cash Payment', path: '/services#instant-cash-payment' },
  ];

  return (
    <footer className="bg-[#28251F] text-[#F8F5ED] border-t border-[#D4AF37]/30 pt-14 pb-24 lg:pb-12 relative overflow-hidden">
      {/* Decorative Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer: Columns on Desktop, 4 Well-Spaced Structured Groups on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Group 1: Business Identity & Overview (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <GoldLogo variant="dark" size="lg" />

            <p className="text-xs sm:text-sm text-[#E9D5A5]/80 leading-relaxed max-w-md pt-1">
              JS BROTHER'S GOLD is Kadapa's trusted destination for transparent gold buying, professional purity valuation, and pledged gold release assistance. Delivering dignified, customer-focused service in Andhra Pradesh.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1e1c17] border border-[#D4AF37]/30 text-xs font-semibold text-[#E9D5A5] hover:text-white hover:border-[#D4AF37] transition-all group"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Follow {BUSINESS_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:border-emerald-400 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Google Rating Badge */}
            <a
              href={BUSINESS_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-[#1e1c17] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all group cursor-pointer"
              title="Read Google Reviews for JS BROTHER'S GOLD"
            >
              <div className="flex text-[#D4AF37] text-xs">★★★★★</div>
              <div className="text-xs text-[#E9D5A5]/90 group-hover:text-white transition-colors">
                <strong className="text-white">5.0 / 5.0</strong> based on 55 Google Reviews ↗
              </div>
            </a>
          </div>

          {/* Group 2: Quick Navigation (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-3 pt-4 lg:pt-0 border-t border-[#D4AF37]/15 lg:border-t-0">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#E9D5A5] tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs tracking-wide">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#F8F5ED]/75 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3: Services (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-3 pt-4 lg:pt-0 border-t border-[#D4AF37]/15 lg:border-t-0">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#E9D5A5] tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs tracking-wide">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-[#F8F5ED]/75 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 4: Kadapa Establishment & Contact Details (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3 pt-4 lg:pt-0 border-t border-[#D4AF37]/15 lg:border-t-0">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#E9D5A5] tracking-wider uppercase">
              Kadapa Establishment
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#F8F5ED]/80">
              {/* Clickable Address Link */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#D4AF37] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>
              </a>

              {/* Clickable Phone Link */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={getTelUrl()}
                  className="hover:text-[#D4AF37] transition-colors font-bold text-[#FFFFFF]"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              {/* Opening Hours & Confirmation Note */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS_INFO.openingHours.weekdays}</p>
                  <p className="text-[#E9D5A5]/70">{BUSINESS_INFO.openingHours.sunday}</p>
                  <p className="text-[10px] text-[#E9D5A5]/50 italic mt-0.5">({BUSINESS_INFO.openingHours.note})</p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F6E7B8] underline"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Verified Status & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E9D5A5]/70">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <span>
              Professional Gold Valuation • Transparent Evaluation Process • Kadapa, Andhra Pradesh
            </span>
          </div>

          <p className="text-center md:text-right text-[11px] text-[#E9D5A5]/80">
            © {currentYear} JS BROTHER'S GOLD. All rights reserved.
          </p>
        </div>

        {/* Dedicated "Powered by MOMO IT TECHNOLOGIES" Luxury Credit Strip */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center">
          <p className="text-[11px] sm:text-xs tracking-[0.15em] uppercase flex items-center gap-2">
            <span className="font-light text-[#E9D5A5]/60">Powered by</span>
            <a
              href="https://www.momoittechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/momo inline-flex items-center gap-1 font-bold tracking-[0.18em] bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#E9D5A5] bg-clip-text text-transparent hover:brightness-125 transition-all focus:outline-none"
              title="MOMO IT TECHNOLOGIES - Web Design & Technology Solutions"
            >
              <span>MOMO IT TECHNOLOGIES</span>
              <ExternalLink className="w-2.5 h-2.5 text-[#D4AF37] opacity-60 group-hover/momo:opacity-100 group-hover/momo:translate-x-0.5 transition-all" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
