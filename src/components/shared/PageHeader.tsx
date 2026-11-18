import React from 'react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85"
}) => {
  return (
    <div className="relative py-20 sm:py-28 bg-[#28251F] text-white overflow-hidden border-b border-[#D4AF37]/30">
      {/* Background with Dark Champagne Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#28251F] via-[#28251F]/70 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c17]/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E9D5A5]">
            {badge}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {title}
        </h1>

        <div className="w-20 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

        <p className="text-sm sm:text-base lg:text-lg text-[#F1E9DA]/90 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
