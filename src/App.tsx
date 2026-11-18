import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BottomActionBar } from './components/layout/BottomActionBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { EnquiryModal } from './components/shared/EnquiryModal';
import { ValuationModal } from './components/shared/ValuationModal';

// Code-split pages for peak performance & Core Web Vitals
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage').then(m => ({ default: m.CalculatorPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then(m => ({ default: m.ReviewsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Subtle Luxury Fallback Loader
const LuxuryLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37] animate-spin" />
    <span className="font-serif text-sm tracking-widest text-[#92702F] uppercase font-semibold animate-pulse">
      JS BROTHER'S GOLD
    </span>
  </div>
);

// ScrollToTop Component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState('Old Gold Buying');
  const [isValuationOpen, setIsValuationOpen] = useState(false);

  const handleOpenEnquiry = (service: string = 'Old Gold Buying') => {
    setEnquiryService(service);
    setIsEnquiryOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8F5ED] text-[#292722] antialiased">
        {/* Sticky Header */}
        <Header onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Pages with Suspense */}
        <main className="flex-1 pb-20 lg:pb-0">
          <Suspense fallback={<LuxuryLoader />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/services" element={<ServicesPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/how-it-works" element={<HowItWorksPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/valuation-calculator" element={<CalculatorPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all redirect to Home */}
              <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Bottom Bar */}
        <BottomActionBar onOpenEnquiry={() => handleOpenEnquiry('Old Gold Buying')} />

        {/* Floating WhatsApp Action */}
        <FloatingWhatsApp />

        {/* Global Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          initialService={enquiryService}
        />

        {/* Global Indicative Valuation Estimator Modal */}
        <ValuationModal
          isOpen={isValuationOpen}
          onClose={() => setIsValuationOpen(false)}
          onOpenEnquiry={handleOpenEnquiry}
        />
      </div>
    </Router>
  );
}

export default App;
