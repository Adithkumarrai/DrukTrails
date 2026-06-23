import { Compass, Instagram, Facebook, Youtube, Flame, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer class="bg-forest-green dark:bg-[#070b08] text-white pt-20 pb-24 border-t border-white/5 relative z-20 transition-all duration-300">
      
      {/* Footer link columns */}
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        
        {/* Brand Column */}
        <div class="col-span-2 md:col-span-1 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-bhutan-gold flex items-center justify-center text-[#070b08] font-bold shadow-sm">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </div>
            <span class="font-serif text-lg md:text-xl font-bold tracking-tight">
              Druk<span class="text-bhutan-gold font-sans font-semibold">Trails</span>
            </span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed font-light">
            "Experience Bhutan Mindfully" — leading high-value, carbon-negative cultural and mountain trail journeys across the Land of the Thunder Dragon.
          </p>
          
          {/* Social Links */}
          <div class="flex gap-4 pt-2">
            <a href="https://instagram.com/druktrails" target="_blank" rel="noopener noreferrer" aria-label="Our Instagram profile" class="h-9 w-9 bg-white/5 hover:bg-bhutan-gold dark:hover:text-[#0c120e] text-white flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-sm">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="https://facebook.com/druktrails" target="_blank" rel="noopener noreferrer" aria-label="Our Facebook link" class="h-9 w-9 bg-white/5 hover:bg-bhutan-gold dark:hover:text-[#0c120e] text-white flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-sm">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="https://youtube.com/druktrails" target="_blank" rel="noopener noreferrer" class="h-9 w-9 bg-white/5 hover:bg-bhutan-gold dark:hover:text-[#0c120e] text-white flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-sm">
              <Youtube className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Travel Sections */}
        <div>
          <h4 class="font-bold text-sm tracking-widest text-[#D4A017] uppercase mb-4">Destinations</h4>
          <ul class="space-y-2.5 text-xs text-gray-300">
            {["Paro Valley", "Thimphu Capitol", "Punakha Valley", "Bumthang Heartland", "Haa Borderlands"].map((item, i) => (
              <li key={i}>
                <button onClick={() => scrollToSection("destinations")} class="hover:text-bhutan-gold hover:underline cursor-pointer leading-relaxed text-left transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Experiences */}
        <div>
          <h4 class="font-bold text-sm tracking-widest text-[#D4A017] uppercase mb-4">Experiential Channels</h4>
          <ul class="space-y-2.5 text-xs text-gray-300">
            {["World-Class Trekking", "Sacred Festival Assemblies", "Mindful Monastery Walks", "Wildlife Preservation", "Traditional Hot Bath Spots"].map((item, i) => (
              <li key={i}>
                <button onClick={() => scrollToSection("experiences")} class="hover:text-bhutan-gold hover:underline cursor-pointer leading-relaxed text-left transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Practical info & SDF */}
        <div>
          <h4 class="font-bold text-sm tracking-widest text-[#D4A017] uppercase mb-4">Practical Travel Info</h4>
          <ul class="space-y-2.5 text-xs text-gray-300">
            <li>
              <button onClick={() => scrollToSection("faq")} class="hover:text-bhutan-gold hover:underline cursor-pointer leading-relaxed text-left transition-colors">Digital Visa Process</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} class="hover:text-bhutan-gold hover:underline cursor-pointer leading-relaxed text-left transition-colors">SDF Tariff Guide ($100)</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} class="hover:text-bhutan-gold hover:underline cursor-pointer leading-relaxed text-left transition-colors">Alt Acclimatization tips</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} class="hover:text-bhutan-gold hover:underline cursor-pointer leading-relaxed text-left transition-colors">Solo Traveler Regulations</button>
            </li>
          </ul>
        </div>

      </div>

      {/* Sustainable badge & Copyright information */}
      <div class="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
        <div>
          <span>© 2026 DrukTrails Tourism Board. All rights reserved. </span>
          <span class="block mt-1 font-light">Licensed by Ministry of Environment and Tourism, Royal Government of Bhutan.</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full font-sans text-stone-gray dark:text-gray-300">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>🌿 Proud Supporter of Sustainable Bhutan Tourism</span>
        </div>
      </div>

      {/* Floating Elements Workspace (Strict Conversion Optimizations) */}
      
      {/* 1. persistent WhatsApp chat bubble (bottom right) */}
      <a 
        href="https://wa.me/9752321111" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat support on WhatsApp"
        class="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white rounded-full shadow-2xl flex items-center justify-center transition-all cursor-pointer pulse-hover"
        title="Live 24/7 WhatsApp Local Guide Support"
      >
        <MessageCircle className="w-6 h-6 stroke-[2.5]" />
      </a>

      {/* 2. mobile sticky CTA (Only visible on screens < md) */}
      <div class="md:hidden fixed bottom-0 left-0 w-full bg-white/95 dark:bg-[#070b08]/95 backdrop-blur-md p-4 border-t border-gray-100 dark:border-green-950/20 z-40 flex items-center justify-between shadow-2xl">
        <div>
          <span class="font-serif text-sm font-semibold text-forest-green dark:text-white leading-none block">DrukTrails</span>
          <span class="text-[9px] uppercase font-bold tracking-widest text-bhutan-gold mt-1 block">Permit spaces reserving of 2025/2026</span>
        </div>
        <button
          onClick={() => scrollToSection("plan-trip")}
          class="px-5 py-2.5 bg-bhutan-gold text-forest-green-dark hover:bg-bhutan-gold-light font-sans font-bold text-xs rounded-full flex items-center gap-1 cursor-pointer transition-colors"
        >
          Plan My Trip <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
