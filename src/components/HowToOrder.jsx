import React from "react";
import { motion } from "motion/react";
import { Search, ClipboardList, Send, ArrowRight } from "lucide-react";

export default function HowToOrder({ onStartOrder }) {
  const steps = [
    {
      num: "01",
      icon: Search,
      titleEn: "Choose Your Products",
      titleBn: "পণ্য নির্বাচন করুন",
      descBn: "আপনার পছন্দের FitNest স্বাস্থ্যকর খাবার ও পরিমাণ (Weight) সিলেক্ট করুন।"
    },
    {
      num: "02",
      icon: ClipboardList,
      titleEn: "Fill Order Details",
      titleBn: "অর্ডার ফর্ম পূরণ করুন",
      descBn: "আপনার নাম, মোবাইল নম্বর এবং সম্পূর্ণ ডেলিভারি ঠিকানা সহজে টাইপ করুন।"
    },
    {
      num: "03",
      icon: Send,
      titleEn: "Confirm via WhatsApp",
      titleBn: "WhatsApp-এ নিশ্চিত করুন",
      descBn: "এক ক্লিকে স্বয়ংক্রিয় মেসেজ সেন্ড করুন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFF8E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
            Simple 3-Step Process
          </div>
          <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] mb-3">
            কীভাবে অর্ডার করবেন?
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#263126]/75">
            Effortless ordering straight to your doorstep
          </p>
        </div>

        {/* 3 Step Cards with connecting layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div 
            className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-[#F3E8D5] -z-0" 
            aria-hidden="true" 
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 bg-white rounded-3xl p-8 border border-[#F3E8D5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#D9A441]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF8E9] border border-[#F3E8D5] flex items-center justify-center text-[#244C35]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#244C35] mb-1">
                    {step.titleEn}
                  </h3>

                  <div className="font-bengali text-base font-semibold text-[#3D694B] mb-2">
                    {step.titleBn}
                  </div>

                  <p className="text-xs sm:text-sm text-[#263126]/80 leading-relaxed font-bengali">
                    {step.descBn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3E8D5]/60 flex items-center justify-between text-xs text-[#263126]/60">
                  <span>Step {step.num}</span>
                  <span className="font-medium text-[#244C35]">Cash on Delivery</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to start */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onStartOrder}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#244C35] hover:bg-[#3D694B] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Start Your Order Now</span>
            <ArrowRight className="w-4 h-4 text-[#D9A441]" />
          </button>
        </div>

      </div>
    </section>
  );
}
