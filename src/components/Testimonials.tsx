import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" class="py-24 bg-forest-green/10 dark:bg-[#070e0a] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div class="text-center mb-16">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-1.5">
            <Quote className="w-5 h-5 text-bhutan-gold" /> Emotional Connection
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-forest-green dark:text-white">
            Stories from Travelers
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl mx-auto text-base">
            Read directly what mindful travelers felt during their mountain hikes, home stays, and silent temple blessings.
          </p>
        </div>

        {/* Desktop View: Grid of All 3 cards */}
        <div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              class="bento-card bg-white dark:bg-[#121c15] p-8 md:p-10 border border-gray-100 dark:border-green-950/20 shadow-lg relative flex flex-col justify-between hover:shadow-xl transition-all duration-350"
            >
              {/* Giant gold quotation watermarks */}
              <div class="absolute top-6 right-8 text-black/5 dark:text-white/5 font-serif text-8xl leading-none font-black pointer-events-none select-none">
                ”
              </div>

              <div>
                {/* Rating Meter */}
                <div class="flex gap-1 mb-6">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} class="w-4 h-4 fill-bhutan-gold text-bhutan-gold" />
                  ))}
                </div>

                <p class="text-stone-gray dark:text-gray-300 text-sm md:text-base leading-relaxed italic relative z-10">
                  "{test.quote}"
                </p>
              </div>

              {/* Avatar details */}
              <div class="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-green-950/10">
                <img 
                  src={test.avatar} 
                  alt={test.name} 
                  class="w-12 h-12 rounded-full object-cover border-2 border-bhutan-gold"
                  loading="lazy"
                />
                <div>
                  <h4 class="font-bold text-sm text-forest-green dark:text-white leading-tight">{test.name}</h4>
                  <span class="text-xs text-stone-gray dark:text-gray-400 capitalize">{test.country}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile View: Dynamic Carousel with manual buttons */}
        <div class="block md:hidden relative max-w-sm mx-auto">
          <div class="bg-white dark:bg-[#121c15] p-8 rounded-2xl border border-gray-100 dark:border-green-950/20 shadow-lg relative flex flex-col min-h-[340px] justify-between">
            {/* Quote icon */}
            <div class="absolute top-6 right-8 text-black/5 dark:text-white/5 font-serif text-8xl leading-none font-black pointer-events-none select-none">
              ”
            </div>

            <div>
              <div class="flex gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                  <Star key={i} class="w-4 h-4 fill-bhutan-gold text-bhutan-gold" />
                ))}
              </div>
              <p class="text-stone-gray dark:text-gray-300 text-sm leading-relaxed italic">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>
            </div>

            <div class="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-green-950/10">
              <img 
                src={TESTIMONIALS[activeIndex].avatar} 
                alt={TESTIMONIALS[activeIndex].name} 
                class="w-10 h-10 rounded-full object-cover border border-bhutan-gold"
                loading="lazy"
              />
              <div>
                <h4 class="font-bold text-xs text-forest-green dark:text-white leading-tight">{TESTIMONIALS[activeIndex].name}</h4>
                <span class="text-[10px] text-stone-gray dark:text-gray-400 capitalize">{TESTIMONIALS[activeIndex].country}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls floating */}
          <div class="flex justify-center items-center gap-6 mt-6">
            <button 
              onClick={prev}
              class="p-2 border border-gray-200 dark:border-green-950/40 rounded-full bg-white dark:bg-[#121c15] text-forest-green dark:text-bhutan-gold hover:bg-bhutan-gold hover:text-[#0c120e] cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div class="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <span 
                  key={i} 
                  class={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? "bg-bhutan-gold" : "bg-gray-200 dark:bg-gray-800"}`} 
                />
              ))}
            </div>
            <button 
              onClick={next}
              class="p-2 border border-gray-200 dark:border-green-950/40 rounded-full bg-white dark:bg-[#121c15] text-forest-green dark:text-bhutan-gold hover:bg-bhutan-gold hover:text-[#0c120e] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
