import { Trees, Check, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function WildlifeHighlight() {
  const scrollPlanner = () => {
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="wildlife" class="py-24 bg-white dark:bg-[#070b08] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Dynamic Image Montage */}
          <div class="lg:col-span-6 relative group">
            <div class="relative h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80" 
                alt="Endangered Himalayan wildlife habitats"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
              
              {/* Floating conservation callout */}
              <div class="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white shadow-lg">
                <span class="text-xs uppercase font-bold tracking-widest text-[#D4A017] block mb-1">Conservation First</span>
                <span class="text-sm font-medium leading-relaxed block">
                  "All DrukTrails wildlife packages strictly support the Jigme Dorji National Sanctuary local game rangers and sustainable birding guides."
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative and Bullet points */}
          <div class="lg:col-span-6 space-y-6">
            <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center gap-1.5">
              <Trees className="w-5 h-5 text-forest-green dark:text-bhutan-gold" /> Pristine Biosphere
            </span>
            <h2 class="font-serif text-3xl md:text-5xl font-black text-forest-green dark:text-white leading-tight">
              Home to Earth's Rarest Wildlife
            </h2>
            <p class="text-stone-gray dark:text-gray-300 text-sm md:text-base leading-relaxed">
              With over 72% of forest cover protected strictly by royal decree, Bhutan is our planet's ultimate biological highway. From snow-swept cliffs to warm valleys, rare creatures live untouched.
            </p>

            {/* Bullet Lists formatted */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { name: "Snow Leopard", desc: "Patrolling high-alt alpine passes of Jigme Dorji Sanctuary." },
                { name: "Black-Necked Crane", desc: "Sacred seasonal winter migrators of Phobjikha valleys." },
                { name: "Red Panda", desc: "Residing in warm hemlock forests and wild bamboo groves." },
                { name: "Takin (National Animal)", desc: "A rare goat-like bovine living in high birch and oak ridges." }
              ].map((animal, i) => (
                <div key={i} class="p-4 bg-off-white dark:bg-[#121c15] border border-gray-100 dark:border-green-950/20 rounded-xl leading-relaxed flex gap-3 shadow-xs">
                  <div class="h-6 w-6 rounded-full bg-forest-green/10 dark:bg-bhutan-gold/10 text-forest-green dark:text-bhutan-gold flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span class="block font-serif font-bold text-sm text-forest-green dark:text-white">{animal.name}</span>
                    <span class="text-[11px] text-stone-gray dark:text-gray-400 leading-tight block mt-0.5">{animal.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div class="pt-4 flex flex-col sm:flex-row items-center gap-4 text-xs md:text-sm">
              <button
                onClick={scrollPlanner}
                class="w-full sm:w-auto px-6 py-3.5 bg-bhutan-gold hover:bg-bhutan-gold-light text-forest-green-dark font-sans font-bold uppercase tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Explore Wildlife Packages <ArrowRight className="w-4 h-4" />
              </button>
              
              <div class="flex items-center gap-1 text-stone-gray dark:text-gray-400">
                <ShieldCheck className="w-5.5 h-5.5 text-forest-green dark:text-bhutan-gold" />
                <span>Ranger-led expeditions</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
