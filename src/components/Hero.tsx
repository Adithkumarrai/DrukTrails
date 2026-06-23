import { ArrowDown, Flame, Compass, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToPlanner = () => {
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      
      {/* Background Graphic Asset (Tiger's Nest Majestic Shot) */}
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548625361-155de6c7f5f3?auto=format&fit=crop&w=1920&q=80"
          alt="Tiger's Nest Monastery on the cliffs of Paro, Bhutan"
          class="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_12s_infinite_ease-in-out]"
          loading="eager"
        />
        {/* Dynamic Dark Gradient Overlays for absolute typography readability */}
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-gray-950/20" />
      </div>

      {/* Content Canvas */}
      <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        
        {/* Urgent Promo Badge */}
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bhutan-gold/15 border border-bhutan-gold/30 text-bhutan-gold text-xs font-semibold uppercase tracking-wider mb-8 animate-bounce">
          <Flame className="w-3.5 h-3.5 fill-bhutan-gold" /> Limited Permits for 2025/2026 Season — 84% Filled
        </div>

        {/* Big Impact Titles */}
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-serif font-black tracking-tight text-white max-w-4xl leading-none">
          Discover Bhutan <br class="hidden sm:inline" />
          <span class="text-stroke italic font-normal">Beyond Ordinary</span> Trails
        </h1>

        <p class="mt-6 text-lg md:text-2xl text-gray-200 font-sans max-w-2xl font-light leading-relaxed">
          The last Himalayan kingdom where Gross National Happiness is a national policy, not a slogan.
        </p>

        {/* Elegant Action CTAs */}
        <div class="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToPlanner}
            class="w-full sm:w-auto px-8 py-4 bg-bhutan-gold text-forest-green-dark hover:bg-bhutan-gold-light active:scale-95 font-serif font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            Plan Your Journey <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <button
            onClick={scrollToDestinations}
            class="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/40 text-white font-serif font-semibold text-lg rounded-full transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            Explore Districts
          </button>
        </div>

        {/* Scroll down mouse indicator */}
        <div class="mt-16 animate-bounce">
          <button 
            type="button"
            onClick={scrollToDestinations}
            aria-label="Scroll Down"
            class="p-3 bg-white/5 border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Social Proof Trust Grid Banner */}
        <div class="w-full mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-300">
          <div class="flex items-center gap-1.5">
            <span class="text-bhutan-gold">4.9 ★</span> Rated by Travelers
          </div>
          <div class="w-1.5 h-1.5 rounded-full bg-white/20 hidden md:block" />
          <div class="flex items-center gap-1.5">
            <span class="text-bhutan-gold">10,000+</span> Happy Souls Guided
          </div>
          <div class="w-1.5 h-1.5 rounded-full bg-white/20 hidden md:block" />
          <div class="flex items-center gap-1.5">
            <span class="text-bhutan-gold">100%</span> Sustainable Eco-Tours
          </div>
        </div>

      </div>
    </section>
  );
}
