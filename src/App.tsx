import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BottomActionBar } from './components/layout/BottomActionBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { EnquiryModal } from './components/shared/EnquiryModal';
import { ValuationModal } from './components/shared/ValuationModal';

// Direct synchronous page imports for 0ms instant mobile page transitions (no chunk fetch delay)
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

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

        {/* Main Content Pages - Instantaneous Zero-Latency Rendering */}
        <main className="flex-1 pb-24 lg:pb-0">
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
