import { useState } from "react";
import { Trees, Check, ArrowRight, ShieldCheck, Heart, Sparkles, Feather } from "lucide-react";

interface AnimalData {
  id: string;
  name: string;
  scientific: string;
  desc: string;
  habitat: string;
  status: string;
  image: string;
  badge: string;
}

export default function WildlifeHighlight() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const ANIMALS: AnimalData[] = [
    {
      id: "snow-leopard",
      name: "Snow Leopard",
      scientific: "Panthera uncia",
      desc: "Patrolling high-alt alpine passes of the northern frontier. The absolute ghost of the peaks, masterfully camouflaged among granite glaciers.",
      habitat: "Northern Jigme Dorji National Sanctuary, above 4,400m.",
      status: "Vulnerable • Fully protected by ranger crews",
      image: "/src/assets/images/mount_jomolhari_1782183204611.jpg",
      badge: "High Altitude Ghost"
    },
    {
      id: "red-panda",
      name: "Red Panda",
      scientific: "Ailurus fulgens",
      desc: "An adorable, highly elusive arboreal mammal thriving in warm hemlock and mossy bamboo understories. Known in lyrics as the fire fox of Bhutan.",
      habitat: "Sengor & Phobjikha wild reserves, 2,200m – 3,700m.",
      status: "Endangered • Actively tracked by conservationists",
      image: "/src/assets/images/phobjikha_valley_1782183170088.jpg",
      badge: "Arboreal Sentinel"
    },
    {
      id: "black-necked-crane",
      name: "Black-Necked Crane",
      scientific: "Grus nigricollis",
      desc: "Sacred seasonal winter migrators arriving from Tibet. They encircle Gangtey monastery three times in flight upon arrival as a mystical sign of respect.",
      habitat: "Marshy wetlands of Phobjikha Valley & Bumthang.",
      status: "Near Threatened • Deeply celebrated during winter festivals",
      image: "/src/assets/images/phobjikha_valley_1782183170088.jpg",
      badge: "Sacred Guardian"
    },
    {
      id: "golden-langur",
      name: "Golden Langur",
      scientific: "Trachypithecus geei",
      desc: "A spectacular, golden-furred primate with a playful personality, native exclusively to pristine broadleaf canopy canopies of the southern mountains.",
      habitat: "Royal Manas National Park canopy forests.",
      status: "Endangered • Found only in Bhutan & borders",
      image: "/src/assets/images/traditional_bhutanese_1782183220459.jpg",
      badge: "Crown Canopy Jewel"
    }
  ];

  const scrollPlanner = () => {
    document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
  };

  const activeAnimal = ANIMALS[selectedIdx];

  return (
    <section id="wildlife" className="py-24 bg-[#FAF8F5] dark:bg-[#070b08] transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative organic background curves */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-bhutan-gold bg-bhutan-gold/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Trees className="w-3.5 h-3.5 text-forest-green dark:text-bhutan-gold" /> Pristine Biosphere Network
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-forest-green dark:text-white leading-tight">
            Earth's Last Carbon-Negative sanctuary
          </h2>
          <p className="text-stone-gray dark:text-gray-300 text-sm md:text-base leading-relaxed">
            With over 72% of forest cover protected strictly by royal decree, Bhutan is our planet's ultimate biological corridor. Click an native species to explore their real-life habitats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Real-Photo Dynamic Spotlight Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative h-[380px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-150 dark:border-green-950/25 group/photo">
              
              {/* Dynamic Image Swapper */}
              <img 
                src={activeAnimal.image} 
                alt={activeAnimal.name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover/photo:scale-105"
                loading="lazy"
              />
              
              {/* Image Gradient overlays to support typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              
              {/* Floating Animal Category Badge */}
              <span className="absolute top-6 left-6 bg-bhutan-gold text-[#0c120e] px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {activeAnimal.badge}
              </span>

              {/* Dynamic Overlay Caption Detail */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-xl transition-all duration-500">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1.5">
                  <h3 className="font-serif text-2xl font-black text-white">{activeAnimal.name}</h3>
                  <span className="text-xs italic text-bhutan-gold font-mono">{activeAnimal.scientific}</span>
                </div>
                
                <p className="text-xs text-gray-200 leading-relaxed mb-4">
                  {activeAnimal.desc}
                </p>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-[11px]">
                  <div>
                    <span className="block text-gray-400 uppercase tracking-widest font-semibold text-[8px]">Primary Habitat</span>
                    <span className="font-medium text-white block mt-0.5">{activeAnimal.habitat}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 uppercase tracking-widest font-semibold text-[8px]">Conservation State</span>
                    <span className="font-semibold text-bhutan-gold block mt-0.5">{activeAnimal.status}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Interactive Selection & Conservation Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-4">
              <span className="text-[10px] text-stone-gray dark:text-gray-400 font-bold uppercase tracking-widest block">Interactive Species Ledger</span>
              <h3 className="font-serif text-xl font-bold text-forest-green dark:text-white">Select a species to view real details:</h3>
              
              {/* Interactive buttons stack */}
              <div className="space-y-3">
                {ANIMALS.map((animal, idx) => {
                  const isSelected = selectedIdx === idx;
                  return (
                    <button
                      key={animal.id}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? "bg-white dark:bg-[#121c15] border-bhutan-gold ring-1 ring-bhutan-gold/30 shadow-lg" 
                          : "bg-white/50 dark:bg-green-950/10 border-transparent hover:border-gray-200 dark:hover:border-green-950/20"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Miniature thumbnail preview */}
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-gray-100 dark:border-green-950/10 shadow-inner">
                          <img 
                            src={animal.image} 
                            alt={animal.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <span className={`block font-serif text-sm font-black ${isSelected ? 'text-forest-green dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                            {animal.name}
                          </span>
                          <span className="text-[11px] text-stone-gray dark:text-gray-400 font-medium block leading-tight mt-0.5 truncate max-w-[200px]">
                            {animal.habitat}
                          </span>
                        </div>
                      </div>

                      <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? "bg-bhutan-gold text-[#0c120e]" 
                          : "bg-gray-100 dark:bg-green-950/20 text-gray-400"
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom informational card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#121c15] border border-gray-100 dark:border-green-950/20 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest-green/10 dark:bg-bhutan-gold/10 text-forest-green dark:text-bhutan-gold rounded-lg flex items-center justify-center">
                  <Feather className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-xs font-serif font-bold text-forest-green dark:text-white">GNH Sustainable Pledge</span>
                  <span className="text-[10px] text-stone-gray dark:text-gray-400 block">Carbon-Negative & Sovereign Eco-Credits</span>
                </div>
              </div>
              <p className="text-xs text-stone-gray dark:text-gray-300 leading-relaxed">
                All wilderness trekking packages strictly support the Jigme Dorji National Sanctuary local game rangers and sustainable birding guides.
              </p>

              {/* Action Buttons group */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 w-full">
                <button
                  onClick={scrollPlanner}
                  className="w-full py-3 bg-forest-green text-white dark:bg-bhutan-gold dark:text-[#0c120e] hover:bg-forest-green-dark dark:hover:bg-bhutan-gold-light font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Request Wildlife Itinerary <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
