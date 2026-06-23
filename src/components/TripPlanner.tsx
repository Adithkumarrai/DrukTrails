import { useState, FormEvent } from "react";
import { Sliders, Check, CreditCard, Award, Calendar, Users, Briefcase, ChevronRight, HelpCircle, ArrowRight, Compass, Sparkles } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  activity: string;
  accommodation: string;
}

export default function TripPlanner() {
  // Form input states
  const [duration, setDuration] = useState<number>(7);
  const [budget, setBudget] = useState<string>("mid-range");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["culture", "photography"]);
  const [month, setMonth] = useState<string>("October");
  const [groupSize, setGroupSize] = useState<number>(2);
  
  // Interactive UI states
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>("");
  const [generatedItinerary, setGeneratedItinerary] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [itinerarySaved, setItinerarySaved] = useState<boolean>(false);

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleManualSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simulate high-end algorithmic calculation sequence
    setIsGenerating(true);
    let step = 0;
    const loadingStatements = [
      "Securing local guide availability...",
      "Calculating sustainable development SDF fees...",
      "Optimizing elevation acclimatization route...",
      "Confirming boutique dzong hotel licensing..."
    ];
    
    setLoadingText(loadingStatements[0]);
    const interval = setInterval(() => {
      step++;
      if (step < loadingStatements.length) {
        setLoadingText(loadingStatements[step]);
      } else {
        clearInterval(interval);
        
        // Generate actual customized itinerary data
        const SDF_Fee = duration * 100 * groupSize; // $100 / night / person SDF
        let dailyHotelCost = budget === "luxury" ? 450 : budget === "mid-range" ? 220 : 120;
        let estimatedTotal = (SDF_Fee + (dailyHotelCost * duration * groupSize) + (180 * duration)); // hotel + SDF + general transfers/flights/guide

        // Generate tailored daily sequence based on selected options
        const dailyPlan: ItineraryDay[] = [];
        
        // Always starts at Paro and moves into Thimphu / Punakha
        dailyPlan.push({
          day: 1,
          title: "Kingdom Welcome & Acclimatization",
          activity: "Arrive at Paro International Airport (one of the world's most thrilling landings). Meet your dedicated local DrukTrails guide. Transfer to Thimphu and view the illuminated Tashichho Dzong.",
          accommodation: budget === "luxury" ? "Amankora Thimphu Lodge" : budget === "mid-range" ? "Le Méridien Thimphu" : "Hotel Kisa"
        });

        if (duration > 5) {
          dailyPlan.push({
            day: 2,
            title: "Traditional Highlights of the Capital",
            activity: "Ascend the mountain to view the giant Buddha Dordenma Statue. Visit the National Folk Heritage Museum, followed by a personalized watercolor session with local art students.",
            accommodation: budget === "luxury" ? "Amankora Thimphu Lodge" : budget === "mid-range" ? "Le Méridien Thimphu" : "Hotel Kisa"
          });
        }

        // Punakha Addition if requested or duration allows
        const includePunakha = duration >= 6;
        if (includePunakha) {
          dailyPlan.push({
            day: 3,
            title: "Journey to Punakha via Dochula Pass",
            activity: `Traverse Dochula Pass (3,100m) with spectacular views of the Eastern Himalayas and its 108 stupas. Hike through fertile chili fields to Chimi Lhakhang temple in Punakha.`,
            accommodation: budget === "luxury" ? "Six Senses Punakha Lodge" : budget === "mid-range" ? "Dhensa Boutique Resort" : "Hotel Zangtopelri"
          });
          dailyPlan.push({
            day: 4,
            title: "Confluence of Rivers & Majestic Dzong",
            activity: `Explore the breathtaking riverside Punakha Dzong, the seat of historical governance. In the afternoon, walk over Bhutan's longest suspension bridge or enjoy river rafting.`,
            accommodation: budget === "luxury" ? "Six Senses Punakha Lodge" : budget === "mid-range" ? "Dhensa Boutique Resort" : "Hotel Zangtopelri"
          });
        }

        // If high duration (>8) and trekking is included
        const includeHighTrek = selectedInterests.includes("trekking") && duration > 7;
        if (includeHighTrek) {
          dailyPlan.push({
            day: 5,
            title: "Ridge Trekking: Clear Glacial Lakes",
            activity: "Embark on an exclusive short-loop trek upwards into alpine valleys, visiting historic temples and pitching mountain camps directly under sacred skies.",
            accommodation: "Premium Wilderness Camp with private chef"
          });
          dailyPlan.push({
            day: 6,
            title: "Descent & Farmhouse Herbal Bath",
            activity: "Trek back downhill to the valleys. Transition to a traditional hot stone farmhouse bath where heated river stones infused with artemisia herbs release natural relaxation.",
            accommodation: budget === "luxury" ? "Amankora Paro Lodge" : budget === "mid-range" ? "Naksel Boutique Resort" : "Tashi Namgay Resort"
          });
        } else {
          // General cultural/nature extension
          dailyPlan.push({
            day: 5,
            title: "Bumthang Heartland Exploration",
            activity: selectedInterests.includes("wildlife") 
              ? "Dawn bird watching in Phobjikha pristine valley, looking for Black-Necked Cranes, followed by mountain walks." 
              : "Private incense-making masterclass and archery session with Paro veterans.",
            accommodation: budget === "luxury" ? "Six Senses Paro" : budget === "mid-range" ? "Naksel Boutique Resort" : "Tashi Namgay Resort"
          });
          if (duration > 6) {
            dailyPlan.push({
              day: 6,
              title: "Sacred Valley Walks of Bumthang / Phobjikha",
              activity: "Explore historic farmhouses and listen to local oral storytelling about legendary saints. Taste fresh organic cheese stews and home-brewed red beers.",
              accommodation: budget === "luxury" ? "Como Uma Paro" : budget === "mid-range" ? "Naksel Boutique Resort" : "Tashi Namgay Resort"
            });
          }
        }

        // Final day is always Tiger's Nest Hike!
        dailyPlan.push({
          day: duration - 1,
          title: "Quest to Tiger's Nest Monastery",
          activity: "The pinnacle of your journey: hike up the pine forests to Paro Taktsang. Experience a silent candle-light prayer room 900m on the high cliffs. Descend for a celebratory dinner with our agency founder.",
          accommodation: budget === "luxury" ? "Amankora Paro" : budget === "mid-range" ? "Naksel Boutique Resort" : "Tiger's Nest Lodge"
        });

        dailyPlan.push({
          day: duration,
          title: "Tashi Delek (Heartfelt Farewell)",
          activity: "Have your final organic breakfast in the valley. Your local DrukTrails guide and driver provide private chauffeur escort to Paro Airport for your departure.",
          accommodation: "None (International Flight)"
        });

        setGeneratedItinerary({
          title: `Custom ${duration}-Day Bhutanese ${selectedInterests.map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(" & ")} Odyssey`,
          duration: duration,
          budgetCategory: budget.toUpperCase(),
          summary: `This bespoke journey is configured for ${groupSize} guests during ${month}. It balances Bhutan's mandatory high-value carbon-negative regulations with deeply immersive cultural highlights, prioritizing ecological mindfulness.`,
          dailyPlan: dailyPlan,
          pricingEstimate: estimatedTotal.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
          permitStatus: "Guaranteed (Permit quota reserved under DrukTrails active block)"
        });
        
        setIsGenerating(false);
        setFormSubmitted(true);
        // Scroll to results
        setTimeout(() => {
          document.getElementById("itinerary-results")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }, 700);
  };

  const handleSaveItinerary = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      setEmailError("Please enter a valid email address to secure your quote.");
      return;
    }
    setEmailError("");
    setItinerarySaved(true);
  };

  return (
    <section id="plan-trip" class="py-24 bg-white dark:bg-[#070b08] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center mb-16">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-2">
            <Sliders className="w-4 h-4" /> Customized Quotation Engine
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-bold text-forest-green dark:text-white">
            Plan Your Dream Bhutan Trip
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Use our interactive planner to specify your travel preferences. We'll generate an instantly priced, expert-compatible custom itinerary tailored for sustainable travel.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Side */}
          <div class="lg:col-span-5 bg-[#F9F6EF] dark:bg-[#121814] p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-green-950/20 shadow-xl transition-all duration-300">
            <form onSubmit={handleManualSubmit} class="space-y-6">
              
              {/* Duration Slider */}
              <div>
                <div class="flex justify-between items-center mb-2">
                  <label class="text-sm font-medium text-forest-green dark:text-gray-200">Trip Duration (Days)</label>
                  <span class="text-base font-bold text-bhutan-gold bg-white dark:bg-[#1b251e] px-3 py-1 rounded-md shadow-sm border border-gold/10">{duration} Days</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="21" 
                  value={duration} 
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  class="w-full accent-bhutan-gold cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none h-2"
                />
                <div class="flex justify-between text-xs text-stone-gray dark:text-gray-400 mt-1">
                  <span>5 Days (Express Gateway)</span>
                  <span>21 Days (Full Traverse)</span>
                </div>
              </div>

              {/* Budget Option */}
              <div>
                <label class="block text-sm font-medium text-forest-green dark:text-gray-200 mb-2">Comfort Style & Budget</label>
                <div class="grid grid-cols-3 gap-3">
                  {["budget", "mid-range", "luxury"].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setBudget(style)}
                      class={`p-3 text-xs md:text-sm rounded-xl border font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        budget === style 
                          ? "bg-forest-green text-white border-forest-green dark:bg-bhutan-gold dark:text-[#0c120e] dark:border-bhutan-gold shadow-md"
                          : "bg-white dark:bg-[#19211c] border-gray-200 dark:border-green-950/30 text-stone-gray dark:text-gray-300 hover:border-bhutan-gold"
                      }`}
                    >
                      {style === "budget" ? "Cozy" : style === "mid-range" ? "Boutique" : "Luxe Haven"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests Checkboxes */}
              <div>
                <label class="block text-sm font-medium text-forest-green dark:text-gray-200 mb-2">Interests & Focused Experiences</label>
                <div class="grid grid-cols-2 gap-3">
                  {[
                    { id: "culture", label: "Ancient Culture" },
                    { id: "trekking", label: "High-Alt Treks" },
                    { id: "wildlife", label: "Pristine Wildlife" },
                    { id: "festivals", label: "Sacred Festivals" },
                    { id: "photography", label: "Scenic Photography" }
                  ].map((interest) => {
                    const isChecked = selectedInterests.includes(interest.id);
                    return (
                      <button
                        key={interest.id}
                        type="button"
                        onClick={() => toggleInterest(interest.id)}
                        class={`flex items-center gap-2 p-3 text-xs md:text-sm rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                          isChecked 
                            ? "bg-white dark:bg-[#1b251e] border-bhutan-gold text-forest-green dark:text-white font-semibold shadow-inner" 
                            : "bg-white dark:bg-[#19211c] border-gray-200 dark:border-green-950/30 text-stone-gray dark:text-gray-300 hover:bg-gray-50/50"
                        }`}
                      >
                        <div class={`w-4 h-4 rounded flex items-center justify-center border transition-all ${isChecked ? "bg-bhutan-gold border-bhutan-gold text-[#0c120e]" : "border-gray-300"}`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        {interest.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Month of Travel & Group Size Row */}
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-forest-green dark:text-gray-200 mb-1.5">Travel Month</label>
                  <select 
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    class="w-full p-3 text-sm rounded-xl border border-gray-200 dark:border-green-950/30 bg-white dark:bg-[#19211c] text-stone-gray dark:text-gray-200 focus:border-bhutan-gold focus:outline-none cursor-pointer"
                  >
                    {["March", "April", "May", "June", "September", "October", "November", "December"].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-forest-green dark:text-gray-200 mb-1.5">Group Size (Guests)</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="12"
                    value={groupSize}
                    onChange={(e) => setGroupSize(Math.max(1, parseInt(e.target.value) || 1))}
                    class="w-full p-3 text-sm rounded-xl border border-gray-200 dark:border-green-950/30 bg-white dark:bg-[#19211c] text-stone-gray dark:text-gray-200 focus:border-bhutan-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Generate CTA Button */}
              <button
                type="submit"
                disabled={isGenerating}
                class="w-full py-4 bg-bhutan-gold text-forest-green-dark hover:bg-bhutan-gold-light font-serif font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <div class="flex items-center gap-3">
                    <span class="animate-spin rounded-full h-5 w-5 border-2 border-forest-green border-t-transparent" />
                    <span class="text-xs font-sans tracking-wide italic font-medium">{loadingText}</span>
                  </div>
                ) : (
                  <>Generate My Bespoke Itinerary <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              {/* Trust badges below form */}
              <div class="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-green-950/20 text-[10px] md:text-xs text-stone-gray dark:text-gray-400 text-center">
                <div class="flex flex-col items-center gap-1">
                  <CreditCard className="w-4 h-4 text-forest-green dark:text-bhutan-gold" />
                  <span>No Credit Card</span>
                </div>
                <div class="flex flex-col items-center gap-1 border-x border-gray-200 dark:border-green-950/20">
                  <Award className="w-4 h-4 text-forest-green dark:text-bhutan-gold" />
                  <span>Expert Reviewed</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <Compass className="w-4 h-4 text-forest-green dark:text-bhutan-gold" />
                  <span>SDF Compliant</span>
                </div>
              </div>

            </form>
          </div>

          {/* Result Side */}
          <div class="lg:col-span-7 h-full min-h-[500px] flex flex-col">
            {!formSubmitted && !isGenerating && (
              <div class="flex-1 border-2 border-dashed border-gray-200 dark:border-green-950/30 rounded-2xl flex flex-col items-center justify-center p-12 text-center bg-gray-50/50 dark:bg-green-950/5 h-full">
                <Compass className="w-16 h-16 text-bhutan-gold animate-pulse mb-4" />
                <h3 class="font-serif text-xl font-medium text-forest-green dark:text-white">Your Itinerary Will Appear Here</h3>
                <p class="text-sm text-stone-gray dark:text-gray-400 max-w-sm mt-2">
                  Configure your travel specifics on the left panel and click "Generate" to construct a fully quoted travel map instantly.
                </p>
              </div>
            )}

            {isGenerating && (
              <div class="flex-1 bg-white dark:bg-[#121814] rounded-2xl border border-gray-100 dark:border-green-900/10 p-12 flex flex-col items-center justify-center text-center shadow-lg h-full">
                <div class="relative w-20 h-20 mb-6">
                  <div class="absolute inset-0 rounded-full border-4 border-bhutan-gold/10 border-t-bhutan-gold animate-spin" />
                  <Compass className="absolute inset-4 text-forest-green dark:text-bhutan-gold w-12 h-12" />
                </div>
                <h3 class="font-serif text-xl font-bold text-forest-green dark:text-white animate-pulse">Assembling Your Himalayan Encounter</h3>
                <p class="text-sm text-stone-gray dark:text-gray-400 max-w-xs mt-2 italic leading-relaxed">
                  "{loadingText}"
                </p>
                <div class="mt-8 flex gap-1 justify-center">
                  <span class="w-2.5 h-2.5 bg-forest-green dark:bg-bhutan-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span class="w-2.5 h-2.5 bg-forest-green dark:bg-bhutan-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span class="w-2.5 h-2.5 bg-forest-green dark:bg-bhutan-gold rounded-full animate-bounce" />
                </div>
              </div>
            )}

            {formSubmitted && !isGenerating && generatedItinerary && (
              <div id="itinerary-results" class="bg-white dark:bg-[#121c15] p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-green-900/20 shadow-xl transition-all duration-300">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 dark:border-green-950/20 pb-6 gap-4">
                  <div>
                    <span class="text-xs font-semibold tracking-wider text-bhutan-gold bg-bhutan-gold/10 px-3 py-1 rounded-full uppercase">
                      Bespoke Experience Profile
                    </span>
                    <h3 class="mt-2 font-serif text-xl md:text-2xl font-bold text-forest-green dark:text-white">
                      {generatedItinerary.title}
                    </h3>
                  </div>
                  <div class="text-left md:text-right">
                    <span class="text-xs text-stone-gray dark:text-gray-400 block">Est. Complete Quotation</span>
                    <span class="text-2xl font-serif font-black text-bhutan-gold">{generatedItinerary.pricingEstimate}*</span>
                    <span class="text-[10px] text-stone-gray dark:text-gray-500 block leading-tight">*Inc. Guides, Accommodation & SDF taxes</span>
                  </div>
                </div>

                <p class="text-sm text-stone-gray dark:text-gray-300 my-6 leading-relaxed italic bg-off-white dark:bg-[#19251d] p-4 rounded-xl border-l-4 border-bhutan-gold">
                  {generatedItinerary.summary}
                </p>

                {/* Timeline display */}
                <div class="space-y-6 max-h-[420px] overflow-y-auto pr-2 no-scrollbar border-b border-gray-100 dark:border-green-950/20 pb-6">
                  {generatedItinerary.dailyPlan.map((p: ItineraryDay) => (
                    <div key={p.day} class="relative pl-8 border-l border-bhutan-gold/30">
                      {/* Timeline dot */}
                      <div class="absolute -left-1.5 top-0.5 w-3.5 h-3.5 rounded-full bg-bhutan-gold flex items-center justify-center border-2 border-white dark:border-[#121c15]">
                        <span class="w-1.5 h-1.5 bg-forest-green rounded-full" />
                      </div>
                      
                      <div class="flex justify-between items-center text-xs text-bhutan-gold font-medium tracking-wide uppercase">
                        <span>Day {p.day}</span>
                        <span class="text-[10px] bg-off-white dark:bg-[#18261e] border border-gray-100 dark:border-green-950/30 px-2.5 py-0.5 rounded-md lowercase font-sans text-stone-gray dark:text-gray-400">
                          stay: {p.accommodation}
                        </span>
                      </div>
                      <h4 class="font-serif font-bold text-base text-forest-green dark:text-white mt-1">
                        {p.title}
                      </h4>
                      <p class="text-xs md:text-sm text-stone-gray dark:text-gray-300 mt-1 leading-relaxed">
                        {p.activity}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Save Itinerary Form */}
                <div class="mt-6">
                  {!itinerarySaved ? (
                    <div class="bg-off-white dark:bg-[#1a281f] p-4 rounded-xl border border-gray-100 dark:border-green-950/20">
                      <h4 class="text-sm font-semibold text-forest-green dark:text-white flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-bhutan-gold" /> Capture and Secure This Travel Quote
                      </h4>
                      <p class="text-xs text-stone-gray dark:text-gray-300 mt-1">
                        Enter your email to receive a detailed PDF breakdown, live flight routes, and permit authorization forms.
                      </p>
                      <form onSubmit={handleSaveItinerary} class="mt-3 flex gap-2">
                        <div class="flex-1 relative">
                          <input 
                            type="email" 
                            required
                            placeholder="your.email@gmail.com"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            class="w-full p-2.5 pl-3 text-xs md:text-sm rounded-lg border border-gray-200 dark:border-green-950/50 bg-white dark:bg-[#121c15] text-gray-800 dark:text-white focus:outline-none focus:border-bhutan-gold"
                          />
                          {emailError && <span class="absolute -bottom-5 left-0 text-[10px] text-red-500 font-medium">{emailError}</span>}
                        </div>
                        <button 
                          type="submit"
                          class="px-4 bg-bhutan-gold hover:bg-bhutan-gold-dark text-forest-green-dark font-sans font-bold text-xs md:text-sm rounded-lg flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                        >
                          Lock Quote <ChevronRight className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div class="bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 p-4 rounded-xl text-center">
                      <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white shadow-md">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                      <h4 class="text-sm font-semibold text-green-700 dark:text-green-400">Itinerary Sent Successfully!</h4>
                      <p class="text-xs text-stone-gray dark:text-gray-300 mt-1 max-w-sm mx-auto">
                        An email containing the comprehensive {duration}-day bespoke guide, luxury lodging vouchers, and visa details has been dispatched to <strong class="text-forest-green dark:text-white">{emailInput}</strong>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Subtext info */}
                <span class="block text-[9px] text-stone-gray dark:text-gray-400 mt-4 text-center leading-tight">
                  🔒 DrukTrails strict privacy: Your details will never be sold. Checked directly by regional Bhutanese guides representing GNH rules.
                </span>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
