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
  description: string;
  primaryCtaText: string;
  primaryService: string;
  secondaryCtaText?: string;
  secondaryAction?: 'call' | 'contact';
  image: string;
  imageAlt: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    tag: "Transparent Gold Buying • Kadapa",
    headline: "Your Gold. Your Value. Your Choice.",
    description: "Turn your old, unused and broken gold into value with a professional and transparent gold-buying experience.",
    primaryCtaText: "SELL YOUR GOLD",
    primaryService: "Old Gold Buying",
    secondaryCtaText: "CALL OUR TEAM",
    secondaryAction: "call",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Exquisite handcrafted Indian gold jewellery resting on polished ivory marble with warm studio lighting"
  },
  {
    id: 2,
    tag: "Scientific Karatmeter Testing",
    headline: "Every Gram Deserves Attention.",
    description: "Understand the value of your gold through a professional evaluation process.",
    primaryCtaText: "ENQUIRE NOW",
    primaryService: "Gold Valuation",
    secondaryCtaText: "CALL OUR TEAM",
    secondaryAction: "call",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Goldsmith precision weighing and non-destructive optical testing environment in champagne lighting"
  },
  {
    id: 3,
    tag: "Bank & Pawn Loan Settlement",
    headline: "Your Gold Matters. We're Here to Help.",
    description: "Speak with our team for assistance with pledged gold release services.",
    primaryCtaText: "GET ASSISTANCE",
    primaryService: "Pledged Gold Assistance",
    secondaryCtaText: "CALL OUR TEAM",
    secondaryAction: "call",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Fine gold ornaments and heirloom pieces displayed in an elegant luxury setting"
  },
  {
    id: 4,
    tag: "Kadapa's Trusted Gold Destination",
    headline: "A Better Gold-Buying Experience.",
    description: "Connect with JS BROTHER'S GOLD in Kadapa for your gold-buying requirements.",
    primaryCtaText: "CONTACT US",
    primaryService: "Gold Buying",
    secondaryCtaText: "CALL OUR TEAM",
    secondaryAction: "call",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Pure gold bullion bars and gold jewellery with sophisticated champagne reflections"
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

  // Autoplay with 6.5s interval
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
      className="relative w-full h-[78vh] min-h-[580px] max-h-[850px] overflow-hidden bg-[#28251F]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="JS Brother's Gold Hero Showcase"
    >
      {/* Background Image Carousel with Fade Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.imageAlt}
            className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.05]"
            loading="eager"
          />

          {/* Luxury Glossy Gradient Overlays */}
          {/* Subtle champagne light vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1c17]/90 via-[#28251F]/70 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#28251F] via-transparent to-[#1e1c17]/40" />
          {/* Subtle warm metallic shimmer gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide.id}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c17]/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E9D5A5]">
                  {currentSlide.tag}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
                {currentSlide.headline.split('.').map((part, index, arr) => (
                  <span key={index} className="inline-block mr-2 last:mr-0">
                    {index === 1 ? (
                      <span className="bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#E9D5A5] bg-clip-text text-transparent">
                        {part.trim()}
                        {index < arr.length - 1 ? '.' : ''}
                      </span>
                    ) : (
                      <span>{part.trim()}{index < arr.length - 1 ? '.' : ''}</span>
                    )}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#F1E9DA]/90 font-normal leading-relaxed max-w-xl">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenEnquiry(currentSlide.primaryService)}
              className="btn-gold-glossy text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 px-7 shadow-xl shadow-[#D4AF37]/25"
            >
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            {currentSlide.secondaryCtaText && (
              <a
                href={getTelUrl()}
                className="btn-luxury-outline text-xs sm:text-sm uppercase tracking-wider font-semibold py-3.5 px-6 !border-[#D4AF37]/60 !text-[#F8F5ED] hover:!bg-[#D4AF37]/20"
              >
                <Phone className="w-4 h-4 mr-2 text-[#D4AF37]" />
                <span>{currentSlide.secondaryCtaText}</span>
              </a>
            )}
          </div>

          {/* Trust Guarantee Micro Badge */}
          <div className="pt-2 flex items-center gap-3 text-xs text-[#E9D5A5]/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Certified German Karatmeter</span>
            </div>
            <span>•</span>
            <span>Non-Destructive Testing</span>
            <span>•</span>
            <span>Opp. Zudio, Kadapa</span>
          </div>
        </div>
      </div>

      {/* Manual Controls (Prev / Next Buttons) */}
      <div className="hidden sm:flex absolute right-8 bottom-12 z-20 items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#1e1c17]/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#E9D5A5] hover:text-white hover:bg-[#D4AF37]/30 transition-all active:scale-95 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#1e1c17]/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#E9D5A5] hover:text-white hover:bg-[#D4AF37]/30 transition-all active:scale-95 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators / Progress Bars */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className="group relative py-2 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-10 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] shadow-md shadow-[#D4AF37]/50' 
                : 'w-3 bg-white/30 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};
