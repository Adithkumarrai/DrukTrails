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
            <div class="w-11 h-11 flex items-center justify-center transform hover:scale-105 transition-all duration-350 ease-out">
              <svg viewBox="0 0 100 100" class="w-11 h-11 text-white fill-none" strokeLinecap="round" strokeLinejoin="round">
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
            <span class="font-serif text-lg md:text-xl font-bold tracking-tight">
              Himalayan<span class="text-bhutan-gold font-sans font-semibold">Trails</span>
            </span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed font-light">
            "Experience Bhutan Mindfully" — leading high-value, carbon-negative cultural and mountain trail journeys across the Land of the Thunder Dragon.
          </p>
          
          {/* Social Links */}
          <div class="flex gap-4 pt-2">
            <a href="https://instagram.com/himalayantrails" target="_blank" rel="noopener noreferrer" aria-label="Our Instagram profile" class="h-9 w-9 bg-white/5 hover:bg-bhutan-gold dark:hover:text-[#0c120e] text-white flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-sm">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="https://facebook.com/himalayantrails" target="_blank" rel="noopener noreferrer" aria-label="Our Facebook link" class="h-9 w-9 bg-white/5 hover:bg-bhutan-gold dark:hover:text-[#0c120e] text-white flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-sm">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="https://youtube.com/himalayantrails" target="_blank" rel="noopener noreferrer" class="h-9 w-9 bg-white/5 hover:bg-bhutan-gold dark:hover:text-[#0c120e] text-white flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-sm">
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
          <span>© 2026 HimalayanTrails Tourism Board. All rights reserved. </span>
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
          <span class="font-serif text-sm font-semibold text-forest-green dark:text-white leading-none block">HimalayanTrails</span>
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
