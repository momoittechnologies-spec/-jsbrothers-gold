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
    { label: 'Valuation Calculator', path: '/valuation-calculator' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Old Gold Buying', path: '/services#old-gold-buying' },
    { label: 'Broken Gold Buying', path: '/services#broken-gold-buying' },
    { label: 'Professional Gold Valuation', path: '/services#professional-gold-valuation' },
    { label: 'Pledged Gold Release Assistance', path: '/services#pledged-gold-release-assistance' },
  ];

  return (
    <footer className="bg-[#28251F] text-[#F8F5ED] border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D4AF37]/20">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <GoldLogo variant="dark" size="lg" />

            <p className="text-sm text-[#E9D5A5]/80 leading-relaxed max-w-md pt-2">
              JS BROTHER'S GOLD is Kadapa's distinguished destination for transparent gold buying, scientific karat valuation, and pledged gold release assistance. Delivering trust, non-destructive testing, and immediate value in Andhra Pradesh.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1e1c17] border border-[#D4AF37]/30 text-xs font-semibold text-[#E9D5A5] hover:text-white hover:border-[#D4AF37] transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Follow {BUSINESS_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:border-emerald-400 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#1e1c17] border border-[#D4AF37]/20">
              <div className="flex text-[#D4AF37] text-sm">★★★★★</div>
              <div className="text-xs text-[#E9D5A5]/90">
                <strong className="text-white">5.0 / 5.0</strong> based on 55 Google Reviews
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#E9D5A5] tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wide">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#F8F5ED]/75 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#E9D5A5] tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wide">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-[#F8F5ED]/75 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kadapa Location & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#E9D5A5] tracking-wider uppercase">
              Kadapa Establishment
            </h4>
            
            <div className="space-y-3 text-xs text-[#F8F5ED]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={getTelUrl()}
                  className="hover:text-[#D4AF37] transition-colors font-semibold"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS_INFO.openingHours.weekdays}</p>
                  <p className="text-[#E9D5A5]/70">{BUSINESS_INFO.openingHours.sunday}</p>
                </div>
              </div>

              <div className="pt-2">
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

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E9D5A5]/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>
              Certified Karatmeter Valuation • Licensed Gold Buying • Kadapa, Andhra Pradesh
            </span>
          </div>

          <p className="text-center md:text-right">
            © {currentYear} JS BROTHER'S GOLD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
