import { useState } from "react";
import { FAQItem } from "../types";
import { FAQS } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" class="py-24 bg-off-white dark:bg-[#0c120e] transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6">
        
        <div class="text-center mb-16">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </span>
          <h2 class="mt-2 text-3xl md:text-4xl font-serif font-semibold text-forest-green dark:text-white">
            Practical Travel Advice
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl mx-auto">
            Essential information regarding Bhutanese regulations, visa entry guidelines, and the sustainable tariff model.
          </p>
        </div>

        <div class="space-y-4">
          {FAQS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                id={`faq-item-${faq.id}`}
                class="bento-card bg-white dark:bg-[#121c15] border border-gray-100 dark:border-green-900/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  class="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span class="font-serif text-lg md:text-xl font-medium text-forest-green dark:text-white hover:text-bhutan-gold transition-colors">
                    {faq.question}
                  </span>
                  <div class={`p-1.5 rounded-full bg-off-white dark:bg-[#192b1f] text-forest-green dark:text-bhutan-gold transform transition-transform duration-300 ${isOpen ? "rotate-180 bg-bhutan-gold/10 text-bhutan-gold" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  class={`transition-all duration-500 ease-in-out overflow-hidden`}
                  style={{ 
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div class="px-6 pb-6 md:px-8 md:pb-8 text-stone-gray dark:text-gray-300 text-sm md:text-base border-t border-gray-50/50 dark:border-green-950/20 pt-4 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div class="mt-12 text-center text-sm text-stone-gray dark:text-gray-400">
          Need further custom planning details? Live agents are available 24/7 on <a href="https://wa.me/9752321111" target="_blank" rel="noopener noreferrer" class="text-bhutan-gold font-medium hover:underline">WhatsApp Support</a>.
        </div>

      </div>
    </section>
  );
}
