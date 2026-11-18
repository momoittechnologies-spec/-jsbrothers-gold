import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/company-logo.png';

interface GoldLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GoldLogo: React.FC<GoldLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20'
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base tracking-[0.04em]',
    md: 'text-base sm:text-lg md:text-xl tracking-[0.06em]',
    lg: 'text-xl sm:text-2xl md:text-3xl tracking-[0.08em]'
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] md:text-[11px] tracking-[0.25em]',
    lg: 'text-xs md:text-sm tracking-[0.3em]'
  };

  return (
    <Link 
      to="/" 
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 ${className}`}
    >
      {/* Official Company Metallic Gold Medallion Logo */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <img 
          src={companyLogo} 
          alt="JS Brother's Gold Official Crest" 
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
          loading="eager"
        />
      </div>

      {/* Typographic Wordmark - Strictly Controlled Wrapping */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <span className={`font-serif font-bold ${titleSizes[size]} leading-none ${isDark ? 'text-white' : 'text-[#292722]'}`}>
            JS BROTHER'S
          </span>
          <span className={`font-serif font-bold ${titleSizes[size]} leading-none bg-gradient-to-r from-[#D4AF37] via-[#B89548] to-[#92702F] bg-clip-text text-transparent`}>
            GOLD
          </span>
        </div>
        {showSubtitle && (
          <div className="hidden sm:flex items-center gap-1.5 mt-1 whitespace-nowrap">
            <span className="w-2.5 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className={`font-technical uppercase font-medium ${subtitleSizes[size]} ${isDark ? 'text-[#E9D5A5]/80' : 'text-[#777168]'}`}>
              Kadapa • Gold Buyers
            </span>
            <span className="w-2.5 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        )}
      </div>
    </Link>
  );
};
