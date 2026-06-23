import { useState, useEffect } from "react";
// Import main modular components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhyBhutan from "./components/WhyBhutan";
import Destinations from "./components/Destinations";
import Experiences from "./components/Experiences";
import Trekking from "./components/Trekking";
import Festivals from "./components/Festivals";
import TripPlanner from "./components/TripPlanner";
import WildlifeHighlight from "./components/WildlifeHighlight";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import FAQAccordion from "./components/FAQAccordion";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Synchronize Scroll Progress Bar (Apple style visual detail)
  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(scrolled);
      }
    };
    
    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  // Sync Dark Mode state class list on DOM root
  const toggleDarkMode = () => {
    const curr = !isDarkMode;
    setIsDarkMode(curr);
    
    const root = document.documentElement;
    if (curr) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <div id="druk-trails-root" class="relative min-h-screen text-gray-900 bg-off-white dark:bg-[#070b08] dark:text-gray-100 transition-colors duration-300">
      
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-bar"
        class="fixed top-0 left-0 h-1 bg-bhutan-gold z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Header Navigation */}
      <Navigation 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode} 
      />

      {/* Main Structural Blocks */}
      <main>
        {/* Section 2: Fullscreen Hero */}
        <Hero />

        {/* Section 3: Value proposals cards & counters */}
        <WhyBhutan />

        {/* Section 4: Zoom dest cards & detail overlays */}
        <Destinations />

        {/* Section 5: Experiential Channel Grids */}
        <Experiences />

        {/* Section 6: Iconic Trekking specs cards & advisory guides */}
        <Trekking />

        {/* Section 7: Festival Calendar with scroll tracks */}
        <Festivals />

        {/* Section 8: Interactive Quotation form & bespoke itinerary rendering */}
        <TripPlanner />

        {/* Section 10: Biological Wildlife Highlights */}
        <WildlifeHighlight />

        {/* Section 9: Traveler Stories Deck */}
        <Testimonials />

        {/* Section 11: National Geographic style reading pre-views */}
        <BlogPreview />

        {/* Detailed Practical Accordion FAQs */}
        <FAQAccordion />

        {/* Section 12: High converting newsletter card */}
        <FinalCTA />
      </main>

      {/* Section 13: Footer with floating WhatsApp bubbles */}
      <Footer />

    </div>
  );
}
