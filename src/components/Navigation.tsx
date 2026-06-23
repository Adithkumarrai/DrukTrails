import { useState, useEffect } from "react";
import { Compass, Menu, X, Sun, Moon, ArrowRight } from "lucide-react";

interface NavigationProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navigation({ isDarkMode, onToggleDarkMode }: NavigationProps) {
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
            {/* Elegant Custom Dragon/Path SVG Logo */}
            <div class="relative w-10 h-10 bg-forest-green dark:bg-bhutan-gold rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <Compass className="w-5.5 h-0.5 mt-[-1px] text-white dark:text-[#070b08]" />
              <div class="absolute inset-0 border-2 border-[#D4A017]/30 rounded-xl" />
            </div>
            <div>
              <span class={`font-serif text-xl md:text-2xl font-black tracking-tight ${isScrolled ? 'text-forest-green dark:text-white' : 'text-white'}`}>
                Druk<span class="text-bhutan-gold font-sans font-semibold tracking-normal">Trails</span>
              </span>
              <span class="block text-[8px] uppercase tracking-widest text-[#D4A017] leading-none font-sans font-bold">Bhutan Eco-Tours</span>
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
