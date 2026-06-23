import { useRef } from "react";
import { FESTIVALS } from "../data";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Compass } from "lucide-react";

export default function Festivals() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 350;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleBookClick = () => {
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="festivals" class="py-24 bg-off-white dark:bg-[#0c110d] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Title Section with Scroll Arrows */}
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-bhutan-gold" /> Sacred Celebrations
            </span>
            <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-forest-green dark:text-white">
              Sacred Festival Calendar
            </h2>
            <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl text-base">
              witness ancient Cham dances executed by monks in spectacular wood-carved masks, celebrating positive spiritual energy and mountain spirits.
            </p>
          </div>
          
          {/* Scroll Control Buttons */}
          <div class="flex gap-3 shrink-0">
            <button 
              onClick={() => scroll("left")}
              class="p-3 border border-gray-200 dark:border-green-950/40 rounded-full bg-white dark:bg-[#121c15] text-forest-green dark:text-bhutan-gold hover:bg-bhutan-gold hover:text-[#0c120e] transition-all cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              class="p-3 border border-gray-200 dark:border-green-950/40 rounded-full bg-white dark:bg-[#121c15] text-forest-green dark:text-bhutan-gold hover:bg-bhutan-gold hover:text-[#0c120e] transition-all cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Container scrollable */}
        <div 
          ref={containerRef}
          class="flex gap-6 overflow-x-auto pr-8 py-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {FESTIVALS.map((fest) => (
            <div 
              key={fest.id}
              class="snap-start shrink-0 w-[290px] md:w-[360px] bento-card overflow-hidden bg-white dark:bg-[#121c15] border border-gray-100 dark:border-green-950/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Card Banner Image */}
              <div class="relative h-48 md:h-56 w-full overflow-hidden">
                <img 
                  src={fest.image} 
                  alt={fest.name} 
                  class="w-[100%] h-[100%] object-cover hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                
                {/* Floating Date Stamp */}
                <div class="absolute top-4 left-4 bg-bhutan-gold text-forest-green-dark px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider shadow-sm">
                  {fest.date}
                </div>
              </div>

              {/* Text elements */}
              <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center gap-1.5 text-xs text-stone-gray dark:text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-bhutan-gold" />
                    <span>{fest.location}</span>
                  </div>
                  
                  <h3 class="mt-2 font-serif text-lg md:text-xl font-bold text-forest-green dark:text-white">
                    {fest.name}
                  </h3>
                  
                  <p class="text-xs md:text-sm text-stone-gray dark:text-gray-300 mt-2 leading-relaxed line-clamp-3">
                    {fest.description}
                  </p>
                </div>

                <button
                  onClick={handleBookClick}
                  class="mt-4 pt-4 border-t border-gray-100 dark:border-green-950/10 text-xs font-bold text-bhutan-gold hover:text-bhutan-gold-dark text-left w-full uppercase tracking-wider flex items-center justify-between cursor-pointer"
                >
                  <span>Build Experience Package</span>
                  <Compass className="w-4 h-4 animate-spin-slow text-[#D4A017]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
