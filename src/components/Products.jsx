import React from "react";
import { motion } from "motion/react";
import { PRODUCTS } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import { Leaf } from "lucide-react";

export default function Products({ onViewDetails, onOrderNow }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FFF8E9] border-t border-[#F3E8D5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Discover Our Healthy Products</span>
          </div>

          <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] mb-3 tracking-tight">
            আমাদের জনপ্রিয় পণ্যসমূহ
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#263126]/80 mb-3">
            Artisanal Batches • Pure Ingredients
          </p>

          <p className="text-sm sm:text-base text-[#263126]/75 max-w-xl mx-auto">
            স্বাদ ও যত্নের মিশেলে তৈরি FitNest-এর পছন্দের খাবার। কোনো ক্ষতিকর প্রিজারভেটিভ ছাড়া ঘরোয়া পরিবেশে প্রস্তুত।
          </p>
        </div>

        {/* Staggered Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard
                product={product}
                onViewDetails={onViewDetails}
                onOrderNow={onOrderNow}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Helpful Ordering Assurance Note */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-[#F3E8D5]/60 border border-[#244C35]/15 text-center text-xs sm:text-sm text-[#263126]/80">
          <span className="font-semibold text-[#244C35]">অর্ডার সংক্রান্ত তথ্য:</span> পণ্য নির্বাচন করে সরাসরি WhatsApp-এ বিস্তারিত বিবরণ সহ আপনার অর্ডার পাঠাতে পারেন। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা রয়েছে।
        </div>

      </div>
    </section>
  );
}
