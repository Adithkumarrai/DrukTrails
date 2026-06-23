import { EXPERIENCES } from "../data";
import { Compass, Sparkles, Trees, Mountain, Camera, Smile } from "lucide-react";

export function getExperienceIcon(id: string) {
  switch (id) {
    case "nature-wildlife":
      return <Trees className="w-7 h-7 text-bhutan-gold" />;
    case "trekking-adventure":
      return <Mountain className="w-7 h-7 text-bhutan-gold" />;
    case "spiritual":
      return <Sparkles className="w-7 h-7 text-bhutan-gold" />;
    case "photography":
      return <Camera className="w-7 h-7 text-bhutan-gold" />;
    case "festivals":
      return <Compass className="w-7 h-7 text-bhutan-gold" />;
    case "village-food":
      return <Smile className="w-7 h-7 text-bhutan-gold" />;
    default:
      return <Compass className="w-7 h-7 text-bhutan-gold" />;
  }
}

export default function Experiences() {
  const scrollPlanner = () => {
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experiences" class="py-24 bg-[#0a100b] text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div class="text-center mb-16">
          <span class="text-xs font-semibold tracking-widest text-[#D4A017] uppercase flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 animate-spin-slow" /> Custom Travel Styles
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-white leading-tight">
            Choose Your Mindful Experience
          </h2>
          <p class="mt-4 text-gray-300 max-w-xl mx-auto text-base">
            Select one of our core experience channels. Each itinerary is customized organically, matching strict standards of local environmental stewardship.
          </p>
        </div>

        {/* 3x2 Grid and signature highlight as asymmetrical Bento blocks */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {EXPERIENCES.map((exp, index) => {
            // Determine custom spans for asymmetric visual hierarchy
            let spanClass = "lg:col-span-4";
            if (index === 3) spanClass = "lg:col-span-8";
            else if (index === 5) spanClass = "lg:col-span-12";

            const isFullWidth = index === 5;

            return (
              <div 
                key={exp.id}
                onClick={scrollPlanner}
                class={`group bento-card relative bg-[#121c15] hover:bg-[#16251c] p-8 md:p-10 border border-transparent hover:border-bhutan-gold/20 flex flex-col justify-between cursor-pointer ${spanClass}`}
              >
                <div class={`${isFullWidth ? 'lg:flex lg:items-center lg:gap-12 lg:justify-between' : ''}`}>
                  <div class={`${isFullWidth ? 'lg:max-w-2xl' : ''}`}>
                    {/* Custom icon rounded wrapper with hover grow */}
                    <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {getExperienceIcon(exp.id)}
                    </div>
                    <span class="stat-badge mb-3">Eco-Responsible Option</span>
                    <h3 class="font-serif text-xl md:text-2xl font-bold text-white mb-3">
                      {exp.title}
                    </h3>
                    <p class="text-sm text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {isFullWidth && (
                    <div class="hidden lg:block bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm">
                      <h4 class="font-bold text-sm text-bhutan-gold mb-2 uppercase tracking-wide">Included Farmhouse Placements</h4>
                      <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-4 leading-normal">
                        <li>Heritage rustic homestays in Haa or Bumthang valleys</li>
                        <li>Spiced red-rice brewing workshops</li>
                        <li>Under-soil hot-stone mineral baths</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div class="mt-8 flex items-center gap-1 text-xs font-bold text-[#D4A017] group-hover:text-bhutan-gold-light transition-colors uppercase tracking-wider">
                  <span>Learn More Tailored Paths</span>
                  <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
