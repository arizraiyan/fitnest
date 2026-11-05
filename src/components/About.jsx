import React from "react";
import { motion } from "motion/react";
import { Heart, Sparkles, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F3E8D5]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Photography (Granola & Muesli packaging) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl border border-[#F3E8D5]">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-[#F3E8D5]/40">
                <img
                  src="/images/fitnest-granola-muesli.jpg"
                  alt="FitNest Handcrafted Granola and Muesli Pouch Packaging"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Editorial Floating Quote Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#244C35] text-white p-5 rounded-2xl shadow-xl max-w-xs items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#D9A441] shrink-0" />
              <p className="font-serif italic text-sm leading-snug">
                "Pure ingredients, zero shortcuts, crafted with care for your daily wellness."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Brand Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
              <Heart className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>আমাদের গল্প • Our Story</span>
            </div>

            {/* English Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] leading-tight mb-4">
              Healthy Living Starts With Better Choices.
            </h2>

            {/* Bengali Story Description */}
            <p className="text-base sm:text-lg text-[#263126]/85 leading-relaxed mb-6 font-bengali">
              FitNest-এর পথচলা স্বাস্থ্যকর খাবারের প্রতি ভালোবাসা থেকে। আমরা এমন কিছু খাবার নিয়ে কাজ করি, যা প্রতিদিনের খাদ্যতালিকায় যোগ করতে পারে স্বাদ ও বৈচিত্র্য। যত্নে তৈরি আমাদের প্রতিটি পণ্য আপনাদের কাছে পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>

            <p className="text-sm sm:text-base text-[#263126]/75 leading-relaxed mb-8">
              আমরা বিশ্বাস করি স্বাস্থ্যকর খাবার মানেই স্বাদহীন নয়। মেদজুল খেজুরের প্রাকৃতিক মিষ্টতা, আমন্ডের ক্রাঞ্চ, রোল্ড ওটসের পুষ্টি আর খাঁটি পিনাট বাটারের সুবাস—সব মিলিয়ে FitNest প্রতিটি রেসিপি তৈরি করে ঘরোয়া যত্নে।
            </p>

            {/* Core Brand Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#F3E8D5]">
              <div className="p-4 rounded-2xl bg-white border border-[#F3E8D5]">
                <div className="font-serif text-2xl font-bold text-[#244C35] mb-1">
                  100%
                </div>
                <div className="text-xs font-semibold text-[#263126]">প্রাকৃতিক উপাদান</div>
                <div className="text-[11px] text-[#263126]/60 mt-0.5">কোনো ক্ষতিকর প্রিজারভেটিভ নেই</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F3E8D5]">
                <div className="font-serif text-2xl font-bold text-[#244C35] mb-1">
                  Fresh
                </div>
                <div className="text-xs font-semibold text-[#263126]">স্মল-ব্যাচ প্রোডাকশন</div>
                <div className="text-[11px] text-[#263126]/60 mt-0.5">সবসময় তাজা ও সুস্বাদু</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
