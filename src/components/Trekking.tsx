import { TREKS } from "../data";
import { Mountain, Flame, Compass, ArrowRight, ShieldAlert, BadgeInfo } from "lucide-react";

export default function Trekking() {
  const scrollPlanner = () => {
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Extreme": return "text-red-500 bg-red-500/10 border-red-500/20";
      case "Challenging": return "text-orange-500 bg-orange-500/10 border-orange-500/20";
      case "Moderate": return "text-yellow-600 bg-yellow-500/10 border-yellow-500/20";
      default: return "text-green-600 bg-green-500/10 border-green-500/20";
    }
  };

  return (
    <section id="trekking" class="py-24 bg-white dark:bg-[#070b08] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div class="text-center mb-16">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-1.5">
            <Mountain className="w-4 h-4" /> Alpine Heights
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-forest-green dark:text-white">
            World-Class Treks Await
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl mx-auto text-base">
            From the legendary Snowman Trail (voted Earth's hardest hike) to leisure cultural walks, find your perfect ridge connection.
          </p>
        </div>

        {/* 4 Cards Bento Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {TREKS.map((trek, index) => {
            // Determine bento grid spans for a beautiful asymmetric pattern
            let spanClass = "lg:col-span-6";
            if (index === 0) spanClass = "lg:col-span-4";
            else if (index === 1) spanClass = "lg:col-span-8";
            else if (index === 2) spanClass = "lg:col-span-8";
            else if (index === 3) spanClass = "lg:col-span-4";

            return (
              <div 
                key={trek.id}
                onClick={scrollPlanner}
                class={`group bento-card bg-[#F9F6EF] dark:bg-[#121c15] flex flex-col justify-between cursor-pointer ${spanClass}`}
              >
                <div class="relative h-48 overflow-hidden">
                  <img 
                    src={trek.image} 
                    alt={trek.name}
                    class="w-[100%] h-[100%] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Float Duration Indicator */}
                  <div class="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-md text-xs font-bold text-forest-green dark:text-bhutan-gold shadow-sm backdrop-blur-xs">
                    {trek.duration}
                  </div>
  
                  {/* Difficulty badge */}
                  <div class={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getDifficultyColor(trek.difficulty)}`}>
                    {trek.difficulty}
                  </div>
                </div>
  
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 class="font-serif text-lg md:text-xl font-bold text-forest-green dark:text-white">
                      {trek.name}
                    </h3>
                    <p class="text-xs text-stone-gray dark:text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                      {trek.description}
                    </p>
                  </div>
  
                  {/* Technical Specs Rows */}
                  <div class="space-y-2 pt-4 border-t border-gray-100 dark:border-green-950/10 text-[10px] md:text-xs text-stone-gray dark:text-gray-400">
                    <div class="flex justify-between">
                      <span class="font-medium">Max Altitude:</span>
                      <span class="font-semibold text-forest-green dark:text-white">{trek.maxAltitude}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="font-medium">Peak Season:</span>
                      <span class="font-semibold text-forest-green dark:text-white">{trek.season}</span>
                    </div>
                  </div>
  
                  {/* CTA Action */}
                  <div class="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4A017] hover:text-bhutan-gold-light transition-colors">
                    <span>View Full Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
  
              </div>
            );
          })}
        </div>

        {/* Advisory Box */}
        <div class="mt-12 p-6 bg-off-white dark:bg-[#121c15] border border-gray-100 dark:border-green-950/20 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-xs">
          <div class="p-3 bg-bhutan-gold/15 rounded-xl text-bhutan-gold">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div class="flex-1">
            <h4 class="font-serif text-base font-bold text-forest-green dark:text-white">Eco-Advisory: Mountain Permit Limits</h4>
            <p class="text-xs md:text-sm text-stone-gray dark:text-gray-300 mt-1 leading-relaxed">
              All high-altitude mountain trails require specialized permits from the Bhutanese Forestry Council. We arrange all safety checklists, high altitude medical support, and local baggage-yak teams on your behalf.
            </p>
          </div>
          <button 
            onClick={scrollPlanner}
            class="px-5 py-2.5 bg-forest-green dark:bg-bhutan-gold text-white dark:text-[#0c120e] hover:bg-forest-green-dark dark:hover:bg-bhutan-gold-light text-xs font-bold rounded-lg shrink-0 transition-all cursor-pointer"
          >
            Check Altitude Safety
          </button>
        </div>

      </div>
    </section>
  );
}
