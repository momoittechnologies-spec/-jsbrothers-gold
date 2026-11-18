import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ArrowRight,
  Home,
  Info,
  Layers,
  GitBranch,
  Star,
  Calculator,
  MapPin
} from 'lucide-react';
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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', desktopLabel: 'Home', path: '/', icon: <Home className="w-4 h-4 text-[#D4AF37]" /> },
    { label: 'About Us', desktopLabel: 'About Us', path: '/about', icon: <Info className="w-4 h-4 text-[#D4AF37]" /> },
    { label: 'Our Services', desktopLabel: 'Services', path: '/services', icon: <Layers className="w-4 h-4 text-[#D4AF37]" /> },
    { label: 'How It Works', desktopLabel: 'How It Works', path: '/how-it-works', icon: <GitBranch className="w-4 h-4 text-[#D4AF37]" /> },
    { label: 'Google Reviews', desktopLabel: 'Reviews', path: '/reviews', icon: <Star className="w-4 h-4 text-[#D4AF37]" /> },
    { label: 'Valuation Calculator', desktopLabel: 'Calculator', path: '/valuation-calculator', icon: <Calculator className="w-4 h-4 text-[#D4AF37]" /> },
    { label: 'Contact Us', desktopLabel: 'Contact', path: '/contact', icon: <MapPin className="w-4 h-4 text-[#D4AF37]" /> },
  ];

  return (
    <>
      {/* Top Gold Utility Bar (Desktop only) */}
      <div className="bg-[#28251F] text-[#E9D5A5] text-[11px] font-medium tracking-wider py-1.5 px-4 sm:px-8 border-b border-[#D4AF37]/20 hidden lg:block">
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
              className="flex items-center gap-1.5 text-[#F8F5ED] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#777168]">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E9D5A5] hover:text-white transition-colors"
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
            ? 'bg-[#F8F5ED]/95 backdrop-blur-md shadow-md shadow-[#92702F]/10 border-b border-[#D4AF37]/25 py-2.5 sm:py-3'
            : 'bg-[#F8F5ED] border-b border-[#D4AF37]/20 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo / Wordmark */}
          <GoldLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[11px] xl:text-xs uppercase tracking-[0.08em] xl:tracking-[0.1em] font-semibold transition-colors duration-200 py-1 whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'text-[#92702F] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]'
                      : 'text-[#292722] hover:text-[#92702F]'
                  }`
                }
              >
                {link.desktopLabel}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={() => onOpenEnquiry('Old Gold Buying')}
              className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-2.5 px-4 xl:px-6 shadow-sm hover:shadow-md transition-all whitespace-nowrap flex-shrink-0 inline-flex items-center justify-center gap-1.5"
            >
              <span>SELL YOUR GOLD</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#92702F] flex-shrink-0" />
            </button>
          </div>

          {/* Mobile Right Controls: Clean Hamburger ONLY */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-[#F1E9DA]/70 hover:bg-[#E9D5A5]/40 border border-[#D4AF37]/40 text-[#292722] transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Rebuilt Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content Panel */}
          <div className="relative ml-auto w-full max-w-sm bg-[#F8F5ED] h-full shadow-2xl flex flex-col justify-between z-10 border-l border-[#D4AF37]/30 overflow-y-auto">
            {/* Drawer Top Header */}
            <div className="p-4 sm:p-5 border-b border-[#D4AF37]/25 flex items-center justify-between bg-[#F1E9DA]/50">
              <GoldLogo size="sm" showSubtitle={false} onClick={() => setMobileMenuOpen(false)} />
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#777168] hover:text-[#292722] hover:bg-[#E9D5A5]/30 border border-[#D4AF37]/30 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="p-5 flex-1 space-y-1.5 overflow-y-auto">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#B89548] px-3 pb-2">
                Navigation
              </p>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#E9D5A5]/40 text-[#92702F] border-l-4 border-[#D4AF37] shadow-sm'
                        : 'text-[#292722] hover:bg-[#F1E9DA] border-l-4 border-transparent'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]/70" />
                </NavLink>
              ))}

              {/* Dedicated SELL YOUR GOLD CTA in Drawer */}
              <div className="pt-4 px-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry('Old Gold Buying');
                  }}
                  className="w-full btn-gold-glossy py-3.5 text-xs uppercase tracking-wider font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <span>SELL YOUR GOLD</span>
                  <ArrowRight className="w-4 h-4 text-[#92702F]" />
                </button>
              </div>
            </div>

            {/* Drawer Bottom Store Contact Section */}
            <div className="p-5 border-t border-[#D4AF37]/25 bg-[#F1E9DA]/60 space-y-3">
              <div className="space-y-1">
                <div className="text-xs font-serif font-bold text-[#292722]">
                  JS BROTHER'S GOLD — KADAPA
                </div>
                <p className="text-[11px] text-[#777168] leading-tight">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.landmark}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={getTelUrl()}
                  className="btn-luxury-outline text-xs py-2 px-3 flex items-center justify-center gap-1.5 !bg-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89548]" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-glossy text-xs py-2 px-3 flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
