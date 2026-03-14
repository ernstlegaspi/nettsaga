import React from "react";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import PricingSection from "./components/sections/PricingSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <div className="relative overflow-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full bg-blush/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[38rem] h-80 w-80 rounded-full bg-forest/10 blur-3xl" />

      <Header />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
