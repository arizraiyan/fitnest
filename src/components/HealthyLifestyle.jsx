import React from "react";
import { motion } from "motion/react";
import { Sun, Coffee, Cookie, Sparkles } from "lucide-react";

export default function HealthyLifestyle({ onSelectProductByCode }) {
  const highlights = [
    {
      id: "breakfast",
      productCode: "FN-002",
      titleEn: "Better Breakfast Choices",
      titleBn: "স্বাস্থ্যকর সকালের শুরু",
      descBn: "সকালের ব্যস্ততায় পুষ্টিকর ওটস ও প্রাকৃতিক পিনাট বাটার দীর্ঘক্ষণ পেট ভরা রাখে এবং সারাদিনের প্রয়োজনীয় শক্তি জোগায়।",
      image: "/images/overnight-oats.jpg",
      icon: Coffee,
      tag: "Morning Vitality"
    },
    {
      id: "snacks",
      productCode: "FN-001",
      titleEn: "Delicious Everyday Snacks",
      titleBn: "পুষ্টিকর মিষ্টির আনন্দ",
      descBn: "বিকেলের খিদে বা কাজের ফাঁকে চিনিযুক্ত অস্বাস্থ্যকর খাবারের বদলে খাঁটি খেজুর ও বাদামের তৈরি বায়োটিন লাড্ডু সেরা সমাধান।",
      image: "/images/biotin-laddu.jpg",
      icon: Cookie,
      tag: "Guilt-Free Sweet"
    },
    {
      id: "goodness",
      productCode: "FN-003",
      titleEn: "Homemade Food Goodness",
      titleBn: "ক্রাঞ্চি ও ক্রিস্পি ক্রাফটিং",
      descBn: "দই বা দুধের সাথে এক বাটি ক্রাঞ্চি গ্রানোলা কিংবা হোলগ্রেইন মিউজলি দিয়ে তৈরি করুন সহজ ও রুচিশীল খাবার।",
      image: "/images/fitnest-granola-muesli.jpg",
      icon: Sun,
      tag: "Anytime Wholesome"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F3E8D5]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Make Every Bite Count</span>
          </div>

          <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] mb-3">
            প্রতিদিনের খাবারে একটু ভালো অভ্যাস।
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#263126]/75">
            Real nourishment for busy modern life
          </p>
        </div>

        {/* 3 Visual Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#F3E8D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image frame */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#F3E8D5]/40">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#244C35] shadow-xs flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#244C35] mb-1">
                      {item.titleEn}
                    </h3>
                    <div className="font-bengali text-sm font-semibold text-[#D9A441] mb-3">
                      {item.titleBn}
                    </div>
                    <p className="text-xs sm:text-sm text-[#263126]/80 leading-relaxed font-bengali">
                      {item.descBn}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#F3E8D5] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#3D694B]">
                      {item.productCode}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProductByCode(item.productCode)}
                      className="text-xs font-semibold text-[#244C35] hover:text-[#3D694B] flex items-center gap-1 group-hover:underline cursor-pointer"
                    >
                      <span>Explore item</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
