import { useState } from "react";
import { DESTINATIONS } from "../data";
import { Destination } from "../types";
import { Eye, MapPin, X, Calendar, Trees, HelpCircle } from "lucide-react";

export default function Destinations() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  const openModal = (dest: Destination) => {
    setSelectedDest(dest);
  };

  const closeModal = () => {
    setSelectedDest(null);
  };

  const scrollAndBook = () => {
    closeModal();
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinations" class="py-24 bg-white dark:bg-[#070b08] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div class="text-center mb-16">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4" /> Sacred Geography
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-forest-green dark:text-white">
            Top Destinations in Bhutan
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl mx-auto text-base">
            Each valley is an entirely different biosphere, ranging from lush subtropical orchards to high-altitude frozen glaciated passes.
          </p>
        </div>

        {/* 6 Grid Cards in a stunning asymmetric bento container */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {DESTINATIONS.map((dest: Destination, index: number) => {
            // Determine span classes for standard Bento Grid alignment
            let spanClass = "lg:col-span-6";
            if (index === 0) spanClass = "lg:col-span-8";
            else if (index === 1) spanClass = "lg:col-span-4";
            else if (index === 2) spanClass = "lg:col-span-4";
            else if (index === 3) spanClass = "lg:col-span-8";
            else if (index === 4) spanClass = "lg:col-span-6";
            else if (index === 5) spanClass = "lg:col-span-6";

            return (
              <div 
                key={dest.id}
                class={`group bento-card relative bg-[#F9F6EF] dark:bg-[#121c15] flex flex-col cursor-pointer ${spanClass}`}
                onClick={() => openModal(dest)}
              >
                
                {/* Image box with overflow hidden */}
                <div class="relative h-64 md:h-72 w-full overflow-hidden">
                  <img 
                    src={dest.image}
                    alt={dest.name}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-100 transition-opacity" />
                  
                  {/* Float tags */}
                  <div class="absolute top-4 left-4 flex flex-wrap gap-1">
                    {dest.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} class="text-[10px] uppercase font-bold tracking-wider text-white bg-forest-green/80 dark:bg-bhutan-gold/80 dark:text-[#0c120e] px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text elements */}
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span class="text-xs font-semibold text-bhutan-gold uppercase tracking-wider block">
                      {dest.subtitle}
                    </span>
                    <h3 class="mt-1 font-serif text-xl md:text-2xl font-bold text-forest-green dark:text-white">
                      {dest.name}
                    </h3>
                    <p class="mt-3 text-sm text-stone-gray dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div class="mt-6 pt-4 border-t border-gray-100 dark:border-green-950/10 flex items-center justify-between text-xs font-semibold text-forest-green dark:text-bhutan-gold group-hover:text-bhutan-gold-light transition-colors">
                    <span>Explore Local Guides</span>
                    <Eye className="w-5.5 h-5.5 text-[#D4A017]" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informational Modal */}
        {selectedDest && (
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-xs animate-fade-in">
            <div 
              class="bg-[#F9F6EF] dark:bg-[#121c15] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative animate-scale-up border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button 
                onClick={closeModal}
                class="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Graphic Header banner */}
              <div class="relative h-64 md:h-80 w-full">
                <img 
                  src={selectedDest.image} 
                  alt={selectedDest.name}
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                <div class="absolute bottom-6 left-6 text-white">
                  <span class="text-xs uppercase font-bold tracking-widest text-bhutan-gold">
                    {selectedDest.subtitle}
                  </span>
                  <h3 class="text-2xl md:text-4xl font-serif font-black leading-tight">
                    {selectedDest.name}
                  </h3>
                </div>
              </div>

              {/* Content Panel */}
              <div class="p-6 md:p-8 space-y-6">
                <div>
                  <h4 class="text-sm font-semibold text-forest-green dark:text-bhutan-gold uppercase tracking-wider mb-2">District Significance</h4>
                  <p class="text-sm md:text-base text-stone-gray dark:text-gray-200 leading-relaxed">
                    {selectedDest.description} 
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-4 pb-6 border-b border-gray-200 dark:border-green-950/20 text-xs md:text-sm text-stone-gray dark:text-gray-300">
                  <div class="p-4 bg-white dark:bg-[#19241c] rounded-xl border border-gray-100 dark:border-green-950/20">
                    <span class="block font-bold text-forest-green dark:text-white uppercase text-[10px] tracking-wider mb-1">Recommended Stay</span>
                    <span>2 – 4 Days (Excellent Acclimatization)</span>
                  </div>
                  <div class="p-4 bg-white dark:bg-[#19241c] rounded-xl border border-gray-100 dark:border-green-950/20">
                    <span class="block font-bold text-forest-green dark:text-white uppercase text-[10px] tracking-wider mb-1">Key Attractions</span>
                    <span>{selectedDest.tags.join(" • ")}</span>
                  </div>
                </div>

                {/* Form Navigation Action */}
                <div class="flex items-center justify-between flex-wrap gap-4 pt-2">
                  <span class="text-xs text-stone-gray dark:text-gray-400">
                    *Requires pre-granted regional pass. Handled fully by HimalayanTrails.
                  </span>
                  <button
                    onClick={scrollAndBook}
                    class="px-6 py-3 bg-bhutan-gold hover:bg-bhutan-gold-dark text-forest-green-dark font-sans font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Select District & Plan Itinerary
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
