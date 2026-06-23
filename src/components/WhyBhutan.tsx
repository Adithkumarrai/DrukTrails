import { Mountain, Heart, Trees, Sparkles, Trophy, Globe, Feather, ShieldCheck } from "lucide-react";

export default function WhyBhutan() {
  return (
    <section id="why-bhutan" class="py-24 bg-off-white dark:bg-[#0c110d] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div class="text-center mb-20">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Emotional Discovery
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-forest-green dark:text-white leading-tight">
            Why Bhutan Will Change You
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Bhutan is not another checklist checkpoint. It is a slow, deeply intentional journey that restores the mind, body, and soul.
          </p>
        </div>

        {/* Bento/Grid Cards (Value Props) */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1 */}
          <div class="bento-card bg-white dark:bg-[#121c15] p-8 md:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-bhutan-gold/10 rounded-xl flex items-center justify-center text-bhutan-gold mb-6">
                <Mountain className="w-6 h-6 text-[#D4A017]" />
              </div>
              <span class="stat-badge mb-3">100% Isolated</span>
              <h3 class="font-serif text-xl md:text-2xl font-bold text-forest-green dark:text-white mb-3">Last Himalayan Kingdom</h3>
              <p class="text-sm text-stone-gray dark:text-gray-300 leading-relaxed">
                Explore ancient fortress ruins, pristine cliffside dzongs, and silent alpine trails locked away from commercial mass-tourism formats for centuries.
              </p>
            </div>
            <div class="mt-6 text-xs font-semibold text-bhutan-gold">Protected valleys & sacred passes</div>
          </div>

          {/* Card 2 */}
          <div class="bento-card bg-white dark:bg-[#121c15] p-8 md:p-10 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-bhutan-gold/10 rounded-xl flex items-center justify-center text-bhutan-gold mb-6">
                <Heart className="w-6 h-6 text-[#D4A017]" />
              </div>
              <span class="stat-badge mb-3">National Philosophy</span>
              <h3 class="font-serif text-xl md:text-2xl font-bold text-forest-green dark:text-white mb-3">Gross National Happiness</h3>
              <p class="text-sm text-stone-gray dark:text-gray-300 leading-relaxed">
                Where royal public policy prioritizes spiritual connection, cultural preservation, personal mindfulness, and organic community wellness over pure raw GDP metrics.
              </p>
            </div>
            <div class="mt-6 text-xs font-semibold text-bhutan-gold">Centered around individual and collective health</div>
          </div>

          {/* Card 3 */}
          <div class="bento-card bg-white dark:bg-[#121c15] p-8 md:p-10 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-bhutan-gold/10 rounded-xl flex items-center justify-center text-bhutan-gold mb-6">
                <Trees className="w-6 h-6 text-[#D4A017]" />
              </div>
              <span class="stat-badge mb-3">Carbon Negative Status</span>
              <h3 class="font-serif text-xl md:text-2xl font-bold text-forest-green dark:text-white mb-3">Zero Environmental Footprint</h3>
              <p class="text-sm text-stone-gray dark:text-gray-300 leading-relaxed">
                A true global ecological sanctuary. Absorbing more greenhouse gases than it produces, Bhutan rigorously safeguards clean glacial waters, ancient old-growth forests, and rare alpine habitats.
              </p>
            </div>
            <div class="mt-6 text-xs font-semibold text-bhutan-gold">72% perpetual forest coverage by decree</div>
          </div>

          {/* Card 4 */}
          <div class="bento-card bg-white dark:bg-[#121c15] p-8 md:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-bhutan-gold/10 rounded-xl flex items-center justify-center text-bhutan-gold mb-6">
                <ShieldCheck className="w-6 h-6 text-[#D4A017]" />
              </div>
              <span class="stat-badge mb-3">High-Value, Low-Volume</span>
              <h3 class="font-serif text-xl md:text-2xl font-bold text-forest-green dark:text-white mb-3">Mindful Eco-Tourism</h3>
              <p class="text-sm text-stone-gray dark:text-gray-300 leading-relaxed">
                A sustainable policy ensures trails remain quiet, tour volumes are fully managed, and sustainable development fees are recycled directly into free public education and healthcare.
              </p>
            </div>
            <div class="mt-6 text-xs font-semibold text-bhutan-gold">Guarantees authentic hospitality</div>
          </div>

        </div>

        {/* Counter Stats Section */}
        <div class="mt-20 bg-forest-green dark:bg-[#112417] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background visual pattern */}
          <div class="absolute right-0 top-0 w-96 h-96 bg-bhutan-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            
            {/* Stat 1 */}
            <div class="space-y-2 border-r border-white/10 last:border-0 pr-4">
              <Trophy className="w-6 h-6 text-bhutan-gold mx-auto mb-1 opacity-80" />
              <div class="text-4xl md:text-5xl font-serif font-black tracking-tight text-bhutan-gold">
                20
              </div>
              <p class="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-200">
                Pristine Districts
              </p>
            </div>

            {/* Stat 2 */}
            <div class="space-y-2 lg:border-r border-white/10 pr-4">
              <Trees className="w-6 h-6 text-bhutan-gold mx-auto mb-1 opacity-80" />
              <div class="text-4xl md:text-5xl font-serif font-black tracking-tight text-bhutan-gold">
                72%
              </div>
              <p class="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-200">
                Forest Coverage
              </p>
            </div>

            {/* Stat 3 */}
            <div class="space-y-2 border-r border-white/10 pr-4">
              <Feather className="w-6 h-6 text-bhutan-gold mx-auto mb-1 opacity-80" />
              <div class="text-4xl md:text-5xl font-serif font-black tracking-tight text-bhutan-gold">
                700+
              </div>
              <p class="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-200">
                Rare Bird Species
              </p>
            </div>

            {/* Stat 4 */}
            <div class="space-y-2">
              <Globe className="w-6 h-6 text-bhutan-gold mx-auto mb-1 opacity-80" />
              <div class="text-4xl md:text-5xl font-serif font-black tracking-tight text-bhutan-gold">
                1st
              </div>
              <p class="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-200">
                Carbon Negative State
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
