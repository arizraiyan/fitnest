import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero({ onExploreProducts, onQuickOrder }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#FFF8E9]">
      {/* Subtle organic background glow */}
      <div 
        className="absolute top-1/4 right-5 w-96 h-96 bg-[#3D694B]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-5 w-80 h-80 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Label / Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-4"
            >
              <span className="w-6 h-px bg-[#3D694B]" />
              <span>Healthy Choices • Homemade Goodness</span>
            </motion.div>

            {/* Main Bengali Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] leading-tight mb-3"
              style={{ textWrap: "balance" }}
            >
              সুস্থ জীবনের শুরু হোক প্রতিদিনের খাবার থেকে।
            </motion.h1>

            {/* English Heading in Playfair Display */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#263126] font-medium tracking-tight mb-6"
            >
              Eat Better. Feel Better. Live Better.
            </motion.h2>

            {/* Bengali Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#263126]/85 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            >
              প্রতিদিনের খাবারে যোগ করুন পুষ্টিকর ও সুস্বাদু খাবারের আনন্দ। FitNest নিয়ে এসেছে যত্নে তৈরি স্বাস্থ্যকর খাবারের কিছু দারুণ আয়োজন।
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#244C35] hover:bg-[#3D694B] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </button>

              <button
                onClick={onQuickOrder}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#244C35] bg-[#F3E8D5] hover:bg-[#ebdcc4] border border-[#244C35]/20 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Order Now</span>
              </button>
            </motion.div>

            {/* Trust Markers Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-6 border-t border-[#F3E8D5] grid grid-cols-3 gap-4 max-w-lg text-xs sm:text-sm text-[#263126]/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D694B] shrink-0" />
                <span>100% প্রাকৃতিক</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D694B] shrink-0" />
                <span>চিনিমুক্ত অপশন</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D694B] shrink-0" />
                <span>হোমমেড কোয়ালিটি</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Asset (Peanut Butter Overnight Oats) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Product Frame with soft shadow and gentle border */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-[#F3E8D5]">
                <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-2xl overflow-hidden bg-[#F3E8D5]/50">
                  <img
                    src="/images/overnight-oats.jpg"
                    alt="FitNest Peanut Butter Overnight Oats - Fresh Breakfast In A Jar"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Caption on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-medium text-[#FFF8E9]/90">
                      Signature Breakfast
                    </p>
                    <p className="font-serif text-lg font-semibold">
                      Peanut Butter Overnight Oats
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm border border-[#F3E8D5] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#244C35] flex items-center justify-center text-[#D9A441] shadow-inner shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#244C35] tracking-wide">
                    100% Homemade Goodness
                  </div>
                  <div className="text-[11px] text-[#263126]/70">
                    ঘরোয়া যত্নে তাজা তৈরি
                  </div>
                </div>
              </motion.div>

              {/* Quick Spec Chip */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#244C35] text-white px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md">
                FN-002 • Ready to Eat
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
