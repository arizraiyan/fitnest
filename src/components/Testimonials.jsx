import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "রাফিদ হাসান",
      role: "Software Engineer, Dhaka",
      product: "Peanut Butter Overnight Oats",
      comment: "সকালে অফিসে বের হওয়ার আগে নাস্তা বানানোর ঝামেলা একদম শেষ। ওটস আর পিনাট বাটারের ব্যালান্সটা দারুণ, পেটও ভরা থাকে দীর্ঘক্ষণ।",
      rating: 5,
      date: "October 2026"
    },
    {
      id: 2,
      name: "নুসরাত জাহান",
      role: "Fitness Enthusiast, Gulshan",
      product: "Biotin Laddu",
      comment: "চিনি ছাড়া যে এতো দারুণ স্বাদের লাড্ডু হতে পারে তা ভাবিনি! মেদজুল খেজুর ও বাদামের ক্রাঞ্চ আমাকে প্রতিদিন বিকেলের মিষ্টির লোভ মেটাতে সাহায্য করে।",
      rating: 5,
      date: "November 2026"
    },
    {
      id: 3,
      name: "তানজিলা শারমিন",
      role: "Nutritionist & Home Maker, Uttara",
      product: "Granola & Muesli",
      comment: "গ্রানোলাতে আস্ত বাদাম আর সিডসের পরিমাণ সত্যি প্রশংসনীয়। টক দইয়ের সাথে মিক্স করে প্রতিদিন সকালে পরিবারের সবাইকে পরিবেশন করি।",
      rating: 5,
      date: "November 2026"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F3E8D5]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
            What Food Lovers Say • গ্রাহকদের মতামত (Demo Showcase)
          </div>
          <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] mb-3">
            আমাদের গ্রাহকদের অভিজ্ঞতা
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#263126]/75">
            Real satisfaction from mindful eating
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-7 border border-[#F3E8D5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#D9A441]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#F3E8D5]" />
                </div>

                {/* Product Tag */}
                <div className="text-xs font-medium text-[#3D694B] mb-3">
                  Loved: <strong className="text-[#244C35]">{rev.product}</strong>
                </div>

                {/* Bengali Review Text */}
                <p className="text-sm text-[#263126]/85 leading-relaxed font-bengali mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F3E8D5]/70 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#244C35]">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-[#263126]/60">
                    {rev.role}
                  </p>
                </div>
                <span className="text-[10px] text-[#263126]/40 uppercase tracking-wider">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
