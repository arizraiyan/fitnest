import React, { useState } from "react";
import { Eye, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product, onViewDetails, onOrderNow }) {
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);

  const currentWeightObj = product.weights[selectedWeightIndex] || product.weights[0];
  const currentPrice = currentWeightObj.price;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-[#F3E8D5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 w-full bg-[#F3E8D5]/30 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} - ${product.bengaliName}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Product Code Badge */}
        <div className="absolute top-3 left-3 bg-[#244C35]/90 backdrop-blur-md text-[#FFF8E9] px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide shadow-sm">
          {product.code}
        </div>

        {/* Brand Attribute Tag */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#244C35] px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm border border-[#F3E8D5]">
            {product.badge}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Category & Product Code */}
          <div className="flex items-center gap-2 text-xs text-[#3D694B] font-medium mb-1.5">
            <span>FitNest Natural Food</span>
            <span aria-hidden="true">·</span>
            <span>{product.code}</span>
          </div>

          {/* Product Names: English + Bengali */}
          <div className="mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#244C35] group-hover:text-[#3D694B] transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="font-bengali text-sm font-semibold text-[#D9A441] mt-0.5">
              {product.bengaliName}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#263126]/75 leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>

          {/* Weight Selection Chips */}
          <div className="mb-4">
            <div className="text-xs font-medium text-[#263126]/60 mb-2">Available Weights:</div>
            <div className="flex flex-wrap gap-1.5">
              {product.weights.map((w, idx) => (
                <button
                  key={w.value}
                  type="button"
                  onClick={() => setSelectedWeightIndex(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedWeightIndex === idx
                      ? "bg-[#244C35] text-white shadow-xs"
                      : "bg-[#F3E8D5]/60 hover:bg-[#F3E8D5] text-[#263126]"
                  }`}
                >
                  {w.value}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Action Buttons */}
        <div className="pt-4 border-t border-[#F3E8D5]">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-xs text-[#263126]/60">Price ({currentWeightObj.value}):</span>
            <div className="text-right">
              <span className="text-2xl font-bold text-[#244C35] tabular-nums">
                ৳{currentPrice}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onViewDetails(product, currentWeightObj.value)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#244C35] bg-[#F3E8D5]/80 hover:bg-[#F3E8D5] border border-[#244C35]/15 transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#3D694B]" />
              <span>Details</span>
            </button>

            <button
              type="button"
              onClick={() => onOrderNow(product, currentWeightObj.value, 1)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#244C35] hover:bg-[#3D694B] shadow-sm hover:shadow transition-all cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
