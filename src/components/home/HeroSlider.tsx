import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { getTelUrl } from '../../utils/phone';

interface HeroSliderProps {
  onOpenEnquiry: (service?: string) => void;
}

interface SlideData {
  id: number;
  tag: string;
  headline: string;
  teluguSubheading: string;
  description: string;
  primaryCtaText: string;
  primaryService: string;
  secondaryCtaText: string;
  image: string;
  imageAlt: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    tag: "Gold-Buying Services • Kadapa",
    headline: "Your Gold. Your Value. Your Choice.",
    teluguSubheading: "మీ పాత మరియు వాడని బంగారానికి సరైన విలువ • తక్షణ నగదు చెల్లింపు",
    description: "Discover a professional and transparent way to sell your old, unused and broken gold with JS BROTHER'S GOLD in Kadapa.",
    primaryCtaText: "SELL YOUR GOLD",
    primaryService: "Old Gold Buying",
    secondaryCtaText: "CALL OUR TEAM",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Exquisite gold jewellery placed on an ivory marble surface with warm studio lighting and natural metallic reflections"
  },
  {
    id: 2,
    tag: "Professional Gold Valuation",
    headline: "Every Gram Deserves Attention.",
    teluguSubheading: "మీ సమక్షంలోనే పారదర్శక డిజిటల్ తూకం • ఖచ్చితమైన స్వచ్ఛత పరిశీలన",
    description: "Understand the true purity and value of your gold through our transparent in-person evaluation process.",
    primaryCtaText: "ENQUIRE NOW",
    primaryService: "Gold Valuation",
    secondaryCtaText: "CALL OUR TEAM",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Precision weighing and jeweler appraisal environment in warm champagne studio lighting"
  },
  {
    id: 3,
    tag: "Pledged Gold Assistance",
    headline: "Your Gold Matters. We're Here to Help.",
    teluguSubheading: "బ్యాంకులు & ఫైనాన్స్ వద్ద తనఖా పెట్టిన బంగారం విడిపించుటకు నమ్మకమైన సహాయం",
    description: "Speak with our Kadapa team for confidential guidance with releasing pledged gold from banks and private lenders.",
    primaryCtaText: "GET ASSISTANCE",
    primaryService: "Pledged Gold Assistance",
    secondaryCtaText: "CALL OUR TEAM",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Traditional gold ornaments and jewellery displayed in an elegant luxury setting"
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenEnquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay rotation (6.5s interval)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section 
      className="relative w-full h-[76vh] min-h-[560px] max-h-[820px] overflow-hidden bg-[#F8F5ED]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="JS Brother's Gold Hero Showcase"
    >
      {/* Background Image Carousel with Lighter, Radiant Ivory/Champagne Treatment */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.imageAlt}
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.02]"
            loading="eager"
          />

          {/* Lighter, Warm Ivory & Champagne Gradient Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5ED]/95 via-[#F8F5ED]/80 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5ED] via-transparent to-[#F8F5ED]/40" />
          {/* Subtle Champagne Metallic Shimmer */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Gold Luxury Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#92702F]">
                  {currentSlide.tag}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292722] leading-[1.14]">
                {currentSlide.headline.split('.').map((part, index, arr) => (
                  <span key={index} className="inline-block mr-2 last:mr-0">
                    {index === 1 ? (
                      <span className="bg-gradient-to-r from-[#D4AF37] via-[#B89548] to-[#92702F] bg-clip-text text-transparent">
                        {part.trim()}
                        {index < arr.length - 1 ? '.' : ''}
                      </span>
                    ) : (
                      <span>{part.trim()}{index < arr.length - 1 ? '.' : ''}</span>
                    )}
                  </span>
                ))}
              </h1>

              {/* Professional Telugu Sub-Heading */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#D4AF37]/35 shadow-sm max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 animate-pulse" />
                <p className="text-xs sm:text-sm font-semibold text-[#292722] leading-snug tracking-wide">
                  {currentSlide.teluguSubheading}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#777168] font-medium leading-relaxed max-w-xl">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onOpenEnquiry(currentSlide.primaryService)}
              className="btn-gold-glossy text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 px-7 shadow-lg shadow-[#D4AF37]/25"
            >
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              href={getTelUrl()}
              className="btn-luxury-outline text-xs sm:text-sm uppercase tracking-wider font-semibold py-3.5 px-6 !border-[#D4AF37]/70 !text-[#292722] bg-[#FFFFFF]/80 hover:!bg-[#E9D5A5]/30 shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-[#92702F]" />
              <span>{currentSlide.secondaryCtaText}</span>
            </a>
          </div>

          {/* Trust Highlights Strip (Safe & Verified Wording) */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#777168]">
            <div className="flex items-center gap-1.5 font-semibold text-[#292722]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Transparent Evaluation</span>
            </div>
            <span>•</span>
            <span className="font-semibold text-[#292722]">Precision Scale Weighing</span>
            <span>•</span>
            <span className="text-[#92702F] font-semibold">Opp. Zudio, Kadapa</span>
          </div>
        </div>
      </div>

      {/* Manual Controls (Prev / Next Buttons) */}
      <div className="hidden sm:flex absolute right-8 bottom-10 z-20 items-center gap-2.5">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#FFFFFF]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#292722] hover:text-[#92702F] hover:bg-white transition-all active:scale-95 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#FFFFFF]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#292722] hover:text-[#92702F] hover:bg-white transition-all active:scale-95 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators / Progress Bars */}
      <div className="absolute bottom-6 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className="group relative py-2 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-10 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] shadow-md shadow-[#D4AF37]/40' 
                : 'w-3 bg-[#292722]/20 group-hover:bg-[#292722]/40'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};
