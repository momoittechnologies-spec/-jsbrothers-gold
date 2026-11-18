import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryCategory, GalleryItem } from '../../data/galleryData';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const ShowroomGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const selectedItem: GalleryItem | null = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Handle lightbox navigation
  const handlePrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItemIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Decorative Gold Accent Flares */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6E7B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E9D5A5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D5A5]/35 border border-[#D4AF37]/35 text-[#92702F] text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            Establishment & Showroom Gallery
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292722] tracking-tight leading-tight">
            Step Inside JS BROTHER'S GOLD.
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#F6E7B8] via-[#D4AF37] to-[#B89548] rounded-full mx-auto" />

          <p className="text-sm sm:text-base lg:text-lg text-[#777168] leading-relaxed">
            A genuine photographic glimpse of our physical gold valuation house in Kadapa — featuring precision weighing desks, private consultation bays, and our dedicated appraisal specialists.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'btn-gold-glossy shadow-md text-[#28251F]'
                    : 'bg-[#FAF7F0] hover:bg-[#F1E9DA] text-[#777168] border border-[#D4AF37]/25 hover:border-[#D4AF37]/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Uniform 4:3 Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItemIndex(index)}
                className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-[#FAF7F0] shadow-md hover:shadow-2xl hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* 4:3 Uniform Aspect Ratio Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#28251F]/5">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Hover Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28251F]/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#D4AF37]/60 flex items-center justify-center text-[#28251F] shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5 text-[#92702F]" />
                    </div>
                  </div>

                  {/* Category Pill Tag on Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#92702F] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/40 shadow-sm">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Editorial Footer */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t border-[#D4AF37]/15">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#292722] group-hover:text-[#92702F] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#777168] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#D4AF37] group-hover:text-[#92702F]">
                    <span>View Photo</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Showroom Landmark Footer Banner */}
        <div className="mt-14 sm:mt-18 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37]/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6E7B8] via-[#D4AF37] to-[#B89548] flex items-center justify-center text-[#28251F] shadow-md flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#292722]">
                Visit Our Kadapa Valuation Showroom Today
              </h4>
              <p className="text-xs sm:text-sm text-[#777168] mt-0.5">
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.landmark}, Kadapa • Walk-ins & Private Appraisals Welcome
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glossy text-xs uppercase tracking-wider font-bold py-3 px-6 whitespace-nowrap shadow-md inline-flex items-center gap-2 flex-shrink-0"
          >
            <MapPin className="w-4 h-4 text-[#92702F]" />
            <span>Open in Google Maps</span>
          </a>
        </div>

      </div>

      {/* High-Resolution Luxury Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1e1c17]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Modal Dialog Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#28251F] rounded-2xl border border-[#D4AF37]/45 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-3.5 border-b border-[#D4AF37]/25 flex items-center justify-between bg-[#1e1c17]/80">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#E9D5A5] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs text-[#F1E9DA]/60">
                    Photo {selectedItemIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-[#F1E9DA] transition-colors focus:outline-none"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Full-Size Image Container */}
              <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[480px]">
                <img
                  src={selectedItem.fullImage}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain select-none"
                />

                {/* Left Navigation Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#D4AF37] hover:text-[#28251F] text-white border border-white/20 transition-all flex items-center justify-center shadow-lg focus:outline-none"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#D4AF37] hover:text-[#28251F] text-white border border-white/20 transition-all flex items-center justify-center shadow-lg focus:outline-none"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Bottom Caption Bar */}
              <div className="p-4 sm:p-5 bg-[#1e1c17] border-t border-[#D4AF37]/25 space-y-1 text-left">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F1E9DA]/80 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
