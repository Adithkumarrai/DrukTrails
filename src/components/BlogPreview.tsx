import { useState } from "react";
import { BLOGS } from "../data";
import { BlogPost } from "../types";
import { BookOpen, Calendar, Clock, X, ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const getArticleBody = (id: string) => {
    switch (id) {
      case "blog1":
        return {
          title: "Complete Guide to Tiger's Nest",
          author: "DrukTrails Alpine Safety Council",
          content: [
            "Paro Taktsang, famously known as the Tiger's Nest, is Bhutan's absolute crown jewel. Perched dramatically 3,120 meters above sea level, it clings directly to a sheer granite rock mountain wall.",
            "Acclimatization is Key: We recommend staying at least 3 days in Paro (2,200m) or Thimphu before climbing. Take a steady, deep-breathing pace. Stop at the halfway visual cafeteria for organic butter tea.",
            "Strict Etiquette: Photos are permitted only outside the temple parameters. Once you enter the holy inner rooms, shoes, cameras, and cellphones are gathered and guarded. Dress respectfully with covered shoulders and knees."
          ]
        };
      case "blog2":
        return {
          title: "Bhutan Festivals & Tshechu Etiquette",
          author: "Tshengye Namgay, Cultural Historian",
          content: [
            "Sacred Tshechus are massive district-level spiritual celebrations. Masked monks (called Cham) whirling in ancient silk garments perform dances designed to dispel evil and bring positive weather and crop growth.",
            "Pilgrim Dress code: Locals wear their premium silk Gho and Kira out of cultural reverence. Travelers are expected to dress formally (long pants, shirts with sleeves). Avoid loud talking or pointing during prayers.",
            "The Throngdrel: The grand climax occurs pre-dawn on the final day, when the giant embroidered thangka is unrolled. Merely gazing upon it is believed to cleanse a lifetime's negative karma."
          ]
        };
      default:
        return {
          title: "SDF Tariff: Supporting Carbon-Negative Status",
          author: "Kezang Dorji, Eco-Auditor of Bhutan",
          content: [
            "The Sustainable Development Fee (SDF) forms the spine of Bhutan's state protection policy. Every night, USD 100 goes directly into the state green treasury.",
            "Where it goes: USD 30 of your fee directly replants native pine and spruce saplings across barren slopes. The remaining funds finance free medical care for remote yak-nomads, sustainable solar projects, and free public education.",
            "True Value: By preventing mass commercial overdevelopment, the SDF keeps paths pristine, forests green, and hosts genuinely hospitable."
          ]
        };
    }
  };

  return (
    <section id="blog" class="py-24 bg-white dark:bg-[#070b08] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div class="text-center mb-16">
          <span class="text-sm font-semibold tracking-wider text-bhutan-gold uppercase flex items-center justify-center gap-1.5">
            <BookOpen className="w-5 h-5 text-forest-green dark:text-bhutan-gold" /> Travel Library
          </span>
          <h2 class="mt-2 text-3xl md:text-5xl font-serif font-black text-forest-green dark:text-white">
            Travel Guides & Stories
          </h2>
          <p class="mt-4 text-stone-gray dark:text-gray-300 max-w-xl mx-auto text-base">
            Prepare your mind for the kingdom. Read guidelines about mountain pass altitudes, custom visa fees, and sacred temple laws.
          </p>
        </div>

        {/* 3 Columns Grid in premium asymmetrical Bento pattern */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {BLOGS.map((blog, index) => {
            // Set up asymmetric column layout
            let spanClass = "lg:col-span-4";
            if (index === 0) spanClass = "lg:col-span-6";
            else if (index === 1) spanClass = "lg:col-span-6";
            else if (index === 2) spanClass = "lg:col-span-12";

            const isFullWidthRange = index === 2;

            return (
              <div 
                key={blog.id}
                onClick={() => setSelectedArticle(blog)}
                class={`group bento-card bg-[#F9F6EF] dark:bg-[#121c15] overflow-hidden border border-gray-100 dark:border-green-950/25 flex flex-col justify-between cursor-pointer ${spanClass}`}
              >
                <div class={`${isFullWidthRange ? 'lg:flex lg:flex-row-reverse lg:items-stretch lg:h-64' : ''}`}>
                  <div class={`relative h-48 md:h-56 overflow-hidden shrink-0 ${isFullWidthRange ? 'lg:w-[50%] lg:h-auto' : 'w-full'}`}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      class="w-[100%] h-[100%] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Floating Category tag */}
                    <span class="absolute top-4 left-4 bg-forest-green text-white dark:bg-bhutan-gold dark:text-[#0c120e] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>

                  <div class={`p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4 ${isFullWidthRange ? 'lg:p-10' : ''}`}>
                    <div class="space-y-2">
                      <div class="flex items-center gap-4 text-[10px] md:text-xs text-stone-gray dark:text-gray-400">
                        <span class="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-bhutan-gold" /> {blog.date}</span>
                        <span class="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-bhutan-gold" /> {blog.readTime}</span>
                      </div>
                      <h3 class="font-serif text-base md:text-xl font-bold text-forest-green dark:text-white group-hover:text-bhutan-gold transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                      {isFullWidthRange && (
                        <p class="hidden lg:block text-xs text-stone-gray dark:text-gray-300 leading-relaxed max-w-xl">
                          Every night booked in the magic Himalayan kingdom goes directly to public services, reforestation initiatives, and clean organic energy programs across pristine districts.
                        </p>
                      )}
                    </div>

                    <div class="pt-4 border-t border-gray-100 dark:border-green-950/10 flex items-center justify-between text-xs font-bold uppercase text-bhutan-gold group-hover:text-bhutan-gold-light transition-all">
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 text-[#D4A017]" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Article Reader */}
        {selectedArticle && (
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-xs animate-fade-in">
            <div 
              class="bg-[#F9F6EF] dark:bg-[#121c15] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button 
                onClick={() => setSelectedArticle(null)}
                class="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div class="p-6 md:p-10 space-y-6">
                
                <div>
                  <span class="text-xs font-bold text-bhutan-gold uppercase tracking-widest block mb-1">
                    {selectedArticle.category} • {selectedArticle.readTime}
                  </span>
                  <h3 class="font-serif text-2xl md:text-3xl font-black text-forest-green dark:text-white leading-tight">
                    {getArticleBody(selectedArticle.id).title}
                  </h3>
                  <div class="flex items-center gap-2 mt-3 text-xs text-stone-gray dark:text-gray-400">
                    <span class="font-medium">By {getArticleBody(selectedArticle.id).author}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>

                <div class="space-y-4 pt-4 border-t border-gray-150 dark:border-green-950/20 text-sm md:text-base text-stone-gray dark:text-gray-200 leading-relaxed max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                  {getArticleBody(selectedArticle.id).content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div class="flex items-center justify-end pt-4 border-t border-gray-150 dark:border-green-950/20">
                  <button 
                    onClick={() => {
                      setSelectedArticle(null);
                      document.getElementById("plan-trip")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    class="px-5 py-2.5 bg-forest-green dark:bg-bhutan-gold text-white dark:text-[#0c120e] hover:bg-forest-green-dark dark:hover:bg-bhutan-gold-light font-sans font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Select Experience Package
                  </button>
                </div>

              </div>
              
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
