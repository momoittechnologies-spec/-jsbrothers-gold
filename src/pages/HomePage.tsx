import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { HeroSlider } from '../components/home/HeroSlider';
import { LuxuryMarquee } from '../components/home/LuxuryMarquee';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { GoogleReviews } from '../components/home/GoogleReviews';
import { ShowroomGallery } from '../components/home/ShowroomGallery';
import { ContactCTA } from '../components/home/ContactCTA';
import { LocationContact } from '../components/home/LocationContact';

interface HomePageProps {
  onOpenEnquiry: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  useEffect(() => {
    updatePageSEO({
      title: "JS BROTHER'S GOLD | Premier Gold Buyers & Valuation in Kadapa",
      description: "Kadapa's #1 trusted gold buyers. Sell old, unused & broken gold at live market rates. 100% in-person digital scale evaluation & instant cash/IMPS payment at Y Junction, Kadapa.",
      keywords: "Gold buyers in Kadapa, sell gold Kadapa, old gold buyers Kadapa, gold valuation Kadapa, cash for gold Kadapa, pledged gold release Kadapa, Y Junction Kadapa gold shop",
      canonicalPath: "/"
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Phase 5: Cinematic Hero Slider */}
      <HeroSlider onOpenEnquiry={onOpenEnquiry} />

      {/* Luminous Champagne Gold Infinite Marquee */}
      <LuxuryMarquee variant="champagne" speed="normal" />

      {/* Phase 6 Section 01: Trust Indicators */}
      <TrustIndicators />

      {/* Phase 6 Section 02: About JS Brother's Gold */}
      <AboutSection onOpenEnquiry={onOpenEnquiry} />

      {/* Phase 6 Section 03: Our Services */}
      <ServicesSection onOpenEnquiry={onOpenEnquiry} />

      {/* Phase 6 Section 04: Why Choose Us */}
      <WhyChooseUs />

      {/* Phase 6 Section 05: How It Works */}
      <HowItWorks onOpenEnquiry={onOpenEnquiry} />

      {/* Phase 6 Section 06: Google Customer Reviews */}
      <GoogleReviews />

      {/* Phase 6 Section 07: Real Establishment & Showroom Photographic Gallery */}
      <ShowroomGallery />

      {/* Dark Velvet Gold Infinite Marquee Transition */}
      <LuxuryMarquee variant="dark" speed="slow" />

      {/* Phase 6 Section 07: Premium Contact CTA */}
      <ContactCTA />

      {/* Phase 6 Section 08: Location and Contact */}
      <LocationContact />
    </div>
  );
};
