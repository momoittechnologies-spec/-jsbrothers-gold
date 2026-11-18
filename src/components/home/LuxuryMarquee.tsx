import React from 'react';
import { Coins, ShieldCheck, Scale, Award, Star, Zap, MapPin, CheckCircle2 } from 'lucide-react';

interface MarqueeItem {
  prefix?: string;
  title: string;
  highlight?: string;
  tag?: string;
  icon?: React.ReactNode;
}

interface LuxuryMarqueeProps {
  variant?: 'champagne' | 'dark';
  speed?: 'normal' | 'slow';
  className?: string;
}

export const LuxuryMarquee: React.FC<LuxuryMarqueeProps> = ({
  variant = 'champagne',
  speed = 'normal',
  className = ''
}) => {
  const items: MarqueeItem[] = [
    {
      title: "Transparent Gold Evaluation",
      highlight: "100% In-Person",
      tag: "Zero Hidden Deductions",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
    },
    {
      title: "Kadapa's Trusted Gold Buyers",
      highlight: "5.0 ★ Rating",
      tag: "55+ Google Reviews",
      icon: <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
    },
    {
      title: "Precision Digital Weighing",
      highlight: "Direct in View",
      tag: "Non-Destructive Testing",
      icon: <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
    },
    {
      title: "Pledged Gold Release Assistance",
      highlight: "Bank & NBFC",
      tag: "Confidential & Dignified",
      icon: <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
    },
    {
      title: "Immediate Settlement",
      highlight: "Instant IMPS / Cash",
      tag: "Fair Market Value",
      icon: <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
    },
    {
      title: "Old, Unused & Broken Gold",
      highlight: "Highest Value",
      tag: "Live Gold Valuation",
      icon: <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
    },
    {
      title: "Prime Kadapa Destination",
      highlight: "Y Junction",
      tag: "Opposite Zudio Showroom",
      icon: <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
    },
    {
      title: "Transparent Valuation Process",
      highlight: "Honest Gram-by-Gram",
      tag: "Customer-First Standard",
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
    }
  ];

  const isDark = variant === 'dark';

  return (
    <aside 
      aria-label="Brand highlights ticker"
      className={`relative w-full overflow-hidden select-none py-5 sm:py-6 transition-colors shadow-sm ${
        isDark 
          ? 'bg-[#23201a] border-y border-[#D4AF37]/35 text-[#F8F5ED]' 
          : 'bg-gradient-to-r from-[#F1E9DA]/80 via-[#FAF7F0] to-[#F1E9DA]/80 border-y border-[#D4AF37]/35 text-[#292722]'
      } ${className}`}
    >
      {/* Decorative Golden Gradient Glow Edge Overlays (Vignette Fade) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[var(--marquee-bg,#F8F5ED)] to-transparent" 
           style={{ ['--marquee-bg' as string]: isDark ? '#23201a' : '#F4EEE1' }} 
      />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[var(--marquee-bg,#F8F5ED)] to-transparent" 
           style={{ ['--marquee-bg' as string]: isDark ? '#23201a' : '#F4EEE1' }} 
      />

      {/* Subtle Metallic Gold Accent Top/Bottom Highlights */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Marquee Outer Track */}
      <div className="marquee-mask flex overflow-hidden">
        <div 
          className="animate-marquee flex items-center shrink-0 cursor-default"
          style={{ animationDuration: speed === 'slow' ? '50s' : '36s' }}
        >
          {/* Track 1: First copy */}
          <div className="flex items-center">
            {items.map((item, idx) => (
              <MarqueePill key={`track1-${idx}`} item={item} isDark={isDark} />
            ))}
          </div>

          {/* Track 2: Duplicate copy for seamless infinite loop */}
          <div className="flex items-center" aria-hidden="true">
            {items.map((item, idx) => (
              <MarqueePill key={`track2-${idx}`} item={item} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

interface MarqueePillProps {
  item: MarqueeItem;
  isDark: boolean;
}

const MarqueePill: React.FC<MarqueePillProps> = ({ item, isDark }) => {
  return (
    <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-9 py-1 shrink-0 group">
      {/* Icon with Soft Ambient Gold Circle */}
      <span className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
        isDark 
          ? 'bg-[#2e2a22] border border-[#D4AF37]/40 shadow-sm shadow-[#D4AF37]/15' 
          : 'bg-[#FFFFFF] border border-[#D4AF37]/35 shadow-sm shadow-[#D4AF37]/10'
      }`}>
        {item.icon}
      </span>

      {/* Text Group */}
      <div className="flex items-baseline gap-2 whitespace-nowrap">
        {/* Main Title */}
        <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
          isDark 
            ? 'text-[#F8F5ED] group-hover:text-white' 
            : 'text-[#292722] group-hover:text-[#92702F]'
        }`}>
          {item.title}
        </span>

        {/* Editorial Serif Italic Highlight */}
        {item.highlight && (
          <span className="font-serif italic font-normal text-xs sm:text-sm text-[#B89548] tracking-normal">
            — {item.highlight}
          </span>
        )}

        {/* Technical Micro Badge */}
        {item.tag && (
          <span className={`hidden md:inline-block ml-1 text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded-full ${
            isDark 
              ? 'bg-[#D4AF37]/15 text-[#E9D5A5] border border-[#D4AF37]/30' 
              : 'bg-[#D4AF37]/15 text-[#92702F] border border-[#D4AF37]/30'
          }`}>
            {item.tag}
          </span>
        )}
      </div>

      {/* Luxury Diamond Separator */}
      <span className="text-[#D4AF37] opacity-60 text-[10px] sm:text-xs pl-4 sm:pl-6 select-none" aria-hidden="true">
        ◆
      </span>
    </div>
  );
};
