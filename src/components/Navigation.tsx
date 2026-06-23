import { useState, useEffect } from "react";
import { Compass, Menu, X, Sun, Moon, ArrowRight, ShieldCheck } from "lucide-react";

interface NavigationProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAdmin: () => void;
}

export default function Navigation({ isDarkMode, onToggleDarkMode, onOpenAdmin }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#070b08]/95 backdrop-blur-md py-4 shadow-md border-b border-gray-100 dark:border-green-950/20"
            : "bg-transparent py-6"
        }`}
      >
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            class="flex items-center gap-2 cursor-pointer group"
          >
            {/* Redesigned Royal Bhutanese Prayer Flags & Dzong Peak crest logo matching the uploaded image */}
            <div class="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-all duration-350 ease-out">
              <svg viewBox="0 0 100 100" class="w-12 h-12 text-white fill-none" strokeLinecap="round" strokeLinejoin="round">
                {/* 1. Golden crescent framing top-left-bottom (exactly matches the brushstroke curve of the uploaded logo) */}
                <path d="M 74,38 C 45,14 20,38 21,68 C 21.5,74 25,81 33,85 C 29,81 21,74 20,68 C 16,48, 33,22, 71,32 L 74,38 Z" fill="#D4A017" class="fill-[#D4A017] dark:fill-bhutan-gold" />
                
                {/* 2. Pristine white snow-capped peaks with deep green contours */}
                {/* Background white card so transparency doesn't ruin the mountain body on dark backgrounds */}
                <polygon points="26,62 36,46 45,51 50,37 57,47 64,41 78,61 68,64 45,63 26,62" fill="#ffffff" />
                
                {/* Ridge shadows to create the precise vector 3D look of the uploaded image */}
                <polygon points="50,37 57,47 50,60 50,37" fill="#093C21" />
                <polygon points="64,41 73,53 64,52 64,41" fill="#093C21" />
                <polygon points="36,46 41,51 36,55 36,46" fill="#093C21" />
                
                {/* Mountain outlines and key ridges */}
                <path d="M 26,62 L 36,46 L 45,51 L 50,37 L 57,47 L 64,41 L 78,61" stroke="#093C21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 36,46 L 36,55" stroke="#093C21" strokeWidth="1.2" />
                <path d="M 50,37 L 50,60" stroke="#093C21" strokeWidth="1.5" />
                <path d="M 64,41 L 64,52" stroke="#093C21" strokeWidth="1.2" />

                {/* 3. Deep Green Meadow Base matching the bottom sweep */}
                <path d="M 23,72 C 30,76 38,78 48,74 C 55,71 63,65 72,66 C 80,67 86,70 85,74 C 83,86 65,95 50,95 C 38,95 28,92 25,85 C 23,80 20,74 23,72 Z" fill="#093C21" />

                {/* 4. Pristine S-Shaped White River path curving through the meadow */}
                <path d="M 68,69 C 64,71 52,72 50,76 C 48,80 58,82 50,86 C 42,90 28,94 27,97 C 35,95 53,89 57,86 C 61,83 55,80 58,76 C 61,72 73,70 73,68 Z" fill="#ffffff" />

                {/* 5. Authentic Bhutanese Dzong (Fortress) structure nested on the right-hand slope */}
                <rect x="67" y="55" width="14" height="10" fill="#ffffff" />
                <rect x="70" y="59" width="1.5" height="4" fill="#093C21" />
                <rect x="75" y="59" width="1.5" height="4" fill="#093C21" />
                {/* Lower Roof */}
                <polygon points="64,55 81,55 77,53 68,53" fill="#D4A017" stroke="#093C21" strokeWidth="0.5" />
                {/* Upper room */}
                <rect x="69" y="49" width="10" height="4" fill="#ffffff" />
                {/* Upper Roof */}
                <polygon points="67,49 77,49 74,47 70,47" fill="#D4A017" stroke="#093C21" strokeWidth="0.5" />
                {/* Spire roof */}
                <polygon points="70,45 74,42 78,45" fill="#D4A017" stroke="#093C21" strokeWidth="0.5" />
                {/* Top spire crown pin */}
                <line x1="74" y1="42" x2="74" y2="40" stroke="#D4A017" strokeWidth="1" />

                {/* 6. Sacred Tibetan Lungta Prayer Flags string and five solid traditional colors on the left */}
                <path d="M 23,58 C 30,62 40,65 52,66" stroke="#093C21" strokeWidth="0.8" fill="none" />
                {/* Flags */}
                <polygon points="25,59 27,60 27,64 25,63" fill="#0143a5" stroke="#093C21" strokeWidth="0.4" />
                <polygon points="30,61 32,62 32,66 30,65" fill="#ffffff" stroke="#093C21" strokeWidth="0.4" />
                <polygon points="35,62 37,63 37,67 35,66" fill="#e53935" stroke="#093C21" strokeWidth="0.4" />
                <polygon points="40,63 42,64 42,68 40,67" fill="#43a047" stroke="#093C21" strokeWidth="0.4" />
                <polygon points="45,64 47,65 47,69 45,68" fill="#fdd835" stroke="#093C21" strokeWidth="0.4" />
              </svg>
            </div>
            <div>
              <span class={`font-serif text-xl md:text-2xl font-black tracking-tight ${isScrolled ? 'text-forest-green dark:text-white' : 'text-white'}`}>
                Himalayan<span class="text-bhutan-gold font-sans font-semibold tracking-normal">Trails</span>
              </span>
              <span class="block text-[8px] uppercase tracking-widest text-[#D4A017] leading-none font-sans font-bold">Himalayan Eco-Tours</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div class="hidden lg:flex items-center gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "why-bhutan", label: "Why Bhutan" },
              { id: "destinations", label: "Destinations" },
              { id: "experiences", label: "Experiences" },
              { id: "trekking", label: "Trekking" },
              { id: "festivals", label: "Festivals" },
              { id: "plan-trip", label: "Plan Trip" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                class={`text-sm font-medium transition-all duration-300 hover:text-bhutan-gold relative py-1 cursor-pointer group ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-bhutan-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Controls (Mode + CTA) */}
          <div class="hidden lg:flex items-center gap-4">
            {/* Admin Hub Switcher */}
            <button
              onClick={onOpenAdmin}
              class={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 px-3.5 ${
                isScrolled
                  ? "border-gray-200 dark:border-green-950/30 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-green-950/20"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
              title="Open Admin Control Center"
            >
              <ShieldCheck className="w-4.5 h-4.5 text-bhutan-gold animate-pulse" />
              <span className="text-xs font-bold font-sans tracking-wide uppercase">Admin Console</span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={onToggleDarkMode}
              class={`p-2.5 rounded-full border hover:bg-gray-100 transition-colors cursor-pointer ${
                isScrolled
                  ? "border-gray-200 dark:border-green-950/30 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-green-950/20"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
              title="Toggle Day/Night Aesthetics"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5 text-bhutan-gold" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Sticky Action CTA */}
            <button
              onClick={() => handleLinkClick("plan-trip")}
              class="px-6 py-2.5 bg-bhutan-gold text-forest-green-dark hover:bg-bhutan-gold-light active:scale-95 font-sans font-bold text-sm tracking-wide rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Buttons */}
          <div class="flex lg:hidden items-center gap-3">
            {/* Mode Selector */}
            <button
              onClick={onToggleDarkMode}
              class={`p-2 rounded-full border ${
                isScrolled
                  ? "border-gray-200 dark:border-green-950/40 text-gray-700 dark:text-gray-300"
                  : "border-white/20 text-white"
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-bhutan-gold" /> : <Moon className="w-4 h-4" />}
            </button>
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              class={`p-2 rounded-lg ${isScrolled ? "text-forest-green dark:text-white" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div class="fixed inset-0 z-40 bg-white dark:bg-[#070b08] py-24 px-6 flex flex-col gap-6 lg:hidden animate-fade-in-down">
          <div class="flex flex-col gap-4">
            {[
              { id: "home", label: "Home" },
              { id: "why-bhutan", label: "Why Bhutan's Charm" },
              { id: "destinations", label: "Top Destinations" },
              { id: "experiences", label: "Mindful Experiences" },
              { id: "trekking", label: "Himalayan Treks" },
              { id: "festivals", label: "Sacred Festivals" },
              { id: "plan-trip", label: "Plan Custom Trip" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                class="text-left py-3 border-b border-gray-100 dark:border-green-950/20 font-serif text-xl font-medium text-forest-green dark:text-white hover:text-bhutan-gold transition-colors"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAdmin();
              }}
              class="text-left py-3 border-b border-gray-100 dark:border-green-950/20 font-serif text-xl font-semibold text-bhutan-gold flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-bhutan-gold animate-pulse" /> Admin Console
            </button>
          </div>

          {/* Mobile CTA */}
          <button
            onClick={() => handleLinkClick("plan-trip")}
            class="mt-auto w-full py-4 bg-bhutan-gold text-forest-green-dark font-sans font-bold text-center rounded-xl shadow-md uppercase tracking-wide flex items-center justify-center gap-2"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
