import React from 'react';
import { Link } from 'react-router-dom';

interface GoldLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const GoldLogo: React.FC<GoldLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.06em]',
    md: 'text-lg md:text-xl tracking-[0.08em]',
    lg: 'text-2xl md:text-3xl tracking-[0.1em]'
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] md:text-[11px] tracking-[0.3em]',
    lg: 'text-xs md:text-sm tracking-[0.35em]'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group transition-transform duration-200 ${className}`}>
      {/* Restrained Metallic Gold Emblem */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center rounded-xl p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#D4AF37]/15`}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F6E7B8] via-[#D4AF37] to-[#92702F]" />
        <div className={`relative w-full h-full rounded-[10px] ${isDark ? 'bg-[#1e1c17]' : 'bg-[#28251F]'} flex items-center justify-center p-1.5`}>
          <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F6E7B8" />
                <stop offset="50%" stop-color="#D4AF37" />
                <stop offset="100%" stop-color="#B89548" />
              </linearGradient>
            </defs>
            {/* Geometric Gold Diamond Ingot */}
            <path d="M20 5 L33 13 L33 27 L20 35 L7 27 L7 13 Z" stroke="url(#logo-gold)" strokeWidth="1.2" strokeOpacity="0.4" />
            <path d="M20 9 L29 15 L29 25 L20 31 L11 25 L11 15 Z" stroke="url(#logo-gold)" strokeWidth="0.8" strokeOpacity="0.7" />
            {/* Monogram JS */}
            <text x="20" y="24" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="700" fill="url(#logo-gold)" textAnchor="middle" letterSpacing="0.5">JS</text>
          </svg>
        </div>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif font-bold ${titleSizes[size]} leading-none ${isDark ? 'text-white' : 'text-[#292722]'}`}>
            JS BROTHER'S
          </span>
          <span className={`font-serif font-bold ${titleSizes[size]} leading-none bg-gradient-to-r from-[#D4AF37] via-[#B89548] to-[#92702F] bg-clip-text text-transparent`}>
            GOLD
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-3 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className={`font-technical uppercase font-medium ${subtitleSizes[size]} ${isDark ? 'text-[#E9D5A5]/80' : 'text-[#777168]'}`}>
              Kadapa • Luxury Gold Buyers
            </span>
            <span className="w-3 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        )}
      </div>
    </Link>
  );
};
