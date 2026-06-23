import { useState, FormEvent } from "react";
import { Trees, Check, Flame, Mail, ArrowRight, Heart } from "lucide-react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 1200);
  };

  return (
    <section class="relative py-28 bg-[#0a100b] text-white transition-colors duration-300 overflow-hidden">
      
      {/* Background Graphic with misty mountain trees */}
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1920&q=80" 
          alt="Misty Bhutan alpine ranges background" 
          class="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a100b] via-[#0a100b]/60 to-[#0a100b]" />
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Scarcity Urgency Banner */}
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold uppercase tracking-wider mb-8 animate-pulse">
          <Flame className="w-3.5 h-3.5 fill-red-500" /> Peak Season filling fast. Permit quota 84% filled.
        </div>

        <h2 class="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
          Your Bhutan Adventure Starts Here
        </h2>
        
        <p class="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Join over 10,000+ conscious explorers who discovered the ancient world's happiest kingdom inside deep organic pine valleys.
        </p>

        {/* Subscription box Card */}
        <div class="mt-12 max-w-xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} class="space-y-4">
              <h3 class="font-serif text-lg font-bold text-white text-left flex items-center gap-2">
                <Mail className="w-5 h-5 text-bhutan-gold" /> Claim Your Free Mindful Travel Kit
              </h3>
              <p class="text-xs text-gray-300 text-left leading-relaxed">
                Receive the active 2025/2026 Government Tariff Calculator (SDF), custom altitude packing lists, and secret valley maps.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3 pt-2">
                <div class="flex-1 relative">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your personal email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-bhutan-gold placeholder-gray-400"
                  />
                  {errorMsg && <span class="absolute -bottom-5 left-1 text-[10px] text-red-400 font-medium">{errorMsg}</span>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="px-6 py-4 bg-bhutan-gold hover:bg-bhutan-gold-light text-forest-green-dark font-sans font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
                >
                  {isSubmitting ? (
                    <span class="animate-spin rounded-full h-4 w-4 border-2 border-forest-green border-t-transparent" />
                  ) : (
                    <>Get Free Travel Guide <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>

              <span class="block text-[10px] text-gray-400 text-left pt-2 leading-tight">
                🔒 DrukTrails Promise: No spam ever. Unsubscribe with 1-click. 100% Free.
              </span>
            </form>
          ) : (
            <div class="text-center py-6">
              <div class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-[#070b08] shadow-lg">
                <Check className="w-7 h-7 stroke-[3.5]" />
              </div>
              <h3 class="font-serif text-xl font-bold text-white leading-tight">Welcome to the Trail, Explorer!</h3>
              <p class="text-xs text-gray-300 mt-2 max-w-sm mx-auto leading-relaxed">
                Your private download packet, interactive government permit forms, and custom SDF invoice calculators have been successfully dispatched to <strong class="text-bhutan-gold font-bold">{email}</strong>.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
