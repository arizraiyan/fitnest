import React from "react";
import { motion } from "motion/react";
import { Sparkles, Utensils, ShieldCheck, MessageCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Sparkles,
      titleEn: "Carefully Selected Ingredients",
      titleBn: "বাছাই করা উপাদান",
      descBn: "উচ্চমানের খেজুর, প্রিমিয়াম আমন্ড, আখরোট, চিয়া সিডস ও খাঁটি ওটস দিয়ে যত্নসহকারে প্রতিটি আইটেম তৈরি হয়।",
      descEn: "Pure dates, nuts, seeds, and rolled oats sourced with extreme care."
    },
    {
      icon: Utensils,
      titleEn: "Homemade Goodness",
      titleBn: "ঘরোয়া যত্নে তৈরি",
      descBn: "ঘরোয়া পরিবেশে ছোট ছোট ব্যাচে তৈরি করা হয় বলে প্রতিটি খাবারে বজায় থাকে খাঁটি স্বাদ ও অতুলনীয় সতেজতা।",
      descEn: "Artisanal small-batch crafting for maximum freshness and flavor."
    },
    {
      icon: ShieldCheck,
      titleEn: "Quality & Hygiene",
      titleBn: "পরিচ্ছন্নতা ও মান",
      descBn: "প্রস্তুত থেকে প্যাকেজিং—প্রতিটি ধাপে সর্বোচ্চ পরিচ্ছন্নতা এবং খাদ্য সুরক্ষার মান বজায় রাখা হয়।",
      descEn: "Rigorous cleanliness and food safety from blending to packaging."
    },
    {
      icon: MessageCircle,
      titleEn: "Easy Ordering",
      titleBn: "সহজ অর্ডার ব্যবস্থা",
      descBn: "ওয়েবসাইট থেকে সহজেই WhatsApp-এর মাধ্যমে সরাসরি অর্ডার নিশ্চিত করতে পারেন কোনো জটিলতা ছাড়াই।",
      descEn: "Fast, human-centered ordering directly via WhatsApp messaging."
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FFF8E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
            Why FitNest • আমাদের প্রতিশ্রুতি
          </div>
          <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] mb-3">
            কেন FitNest বেছে নেবেন?
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#263126]/75">
            Wholesome purity in every single pack
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.titleEn}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-7 rounded-3xl bg-white border border-[#F3E8D5] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F3E8D5]/70 group-hover:bg-[#244C35] text-[#244C35] group-hover:text-[#D9A441] flex items-center justify-center mb-6 transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-[#244C35] mb-1">
                    {item.titleEn}
                  </h3>
                  
                  <div className="font-bengali text-sm font-semibold text-[#D9A441] mb-3">
                    {item.titleBn}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#263126]/80 leading-relaxed font-bengali">
                    {item.descBn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3E8D5]/60 text-[11px] text-[#263126]/50">
                  {item.descEn}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
