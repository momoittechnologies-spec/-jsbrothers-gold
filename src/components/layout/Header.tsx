import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';
import { GoldLogo } from '../shared/GoldLogo';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { getTelUrl } from '../../utils/phone';

interface HeaderProps {
  onOpenEnquiry: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Gold Utility Bar */}
      <div className="bg-[#28251F] text-[#E9D5A5] text-[11px] font-medium tracking-wider py-1.5 px-4 sm:px-8 border-b border-[#D4AF37]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Kadapa Gold Valuation Center: Open Today (10 AM – 8:30 PM)
            </span>
            <span className="text-[#777168]">|</span>
            <span className="text-[#F8F5ED]/80">
              Y Junction, Opp. Zudio Showroom, Kadapa
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={getTelUrl()}
              className="flex items-center gap-1 text-[#F8F5ED] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#777168]">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#E9D5A5] hover:text-white transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5ED]/95 backdrop-blur-md shadow-md shadow-[#92702F]/10 border-b border-[#D4AF37]/20 py-3'
            : 'bg-[#F8F5ED] border-b border-[#D4AF37]/15 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <GoldLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs uppercase tracking-[0.12em] font-semibold transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#92702F] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]'
                      : 'text-[#292722] hover:text-[#92702F]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiry('Old Gold Buying')}
              className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-2.5 px-6"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#92702F]" />
              SELL YOUR GOLD
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={() => onOpenEnquiry('Old Gold Buying')}
              className="btn-gold-glossy text-[11px] uppercase tracking-wider font-bold py-2 px-3.5"
            >
              Sell Gold
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#292722] hover:bg-[#F1E9DA] border border-[#D4AF37]/30 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 lg:hidden bg-[#F8F5ED]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 overflow-y-auto animate-in slide-in-from-top duration-300 flex flex-col justify-between p-6">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-widest text-[#777168] font-bold border-b border-[#D4AF37]/20 pb-2">
              Navigation Menu
            </p>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#E9D5A5]/30 text-[#92702F] border-l-4 border-[#D4AF37]'
                        : 'text-[#292722] hover:bg-[#F1E9DA]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </NavLink>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/valuation-calculator"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F1E9DA] border border-[#D4AF37]/40 text-xs font-bold text-[#292722] uppercase tracking-wider"
              >
                <span>Gold Weight & Karat Calculator</span>
              </Link>
            </div>
          </div>

          {/* Mobile Drawer Bottom Info */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-serif font-bold text-[#292722]">
                JS BROTHER'S GOLD — KADAPA
              </div>
              <p className="text-xs text-[#777168]">
                {BUSINESS_INFO.address.full}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={getTelUrl()}
                className="btn-luxury-outline text-xs py-2.5 px-3 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89548]" />
                Call Desk
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy text-xs py-2.5 px-3 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
