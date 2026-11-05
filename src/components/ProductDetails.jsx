import React, { useState, useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, CheckCircle, ShieldCheck } from "lucide-react";

export default function ProductDetails({ product, initialWeight, isOpen, onClose, onProceedToOrder }) {
  const [selectedWeight, setSelectedWeight] = useState(initialWeight || (product?.weights?.[0]?.value ?? ""));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (initialWeight) {
      setSelectedWeight(initialWeight);
    } else if (product?.weights?.[0]) {
      setSelectedWeight(product.weights[0].value);
    }
    setQuantity(1);
  }, [product, initialWeight]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const currentWeightObj = product.weights.find((w) => w.value === selectedWeight) || product.weights[0];
  const unitPrice = currentWeightObj.price;
  const totalPrice = unitPrice * quantity;

  const handleWeightChange = (val) => {
    setSelectedWeight(val);
  };

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FFF8E9] rounded-3xl shadow-2xl border border-[#F3E8D5] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#263126] shadow-md transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: Product Image Column */}
          <div className="md:col-span-5 relative bg-white min-h-[260px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#244C35]/90 text-white text-xs px-3 py-1 rounded-full font-mono font-medium">
              {product.code}
            </div>
          </div>

          {/* Right: Content Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header Info */}
              <div className="flex items-center gap-2 text-xs text-[#3D694B] font-medium mb-1">
                <span>FitNest Homemade</span>
                <span>•</span>
                <span>{product.code}</span>
              </div>

              <h2 id="product-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#244C35]">
                {product.name}
              </h2>
              <p className="font-bengali text-lg font-semibold text-[#D9A441] mt-0.5 mb-4">
                {product.bengaliName}
              </p>

              {/* Full Description */}
              <p className="text-sm text-[#263126]/80 leading-relaxed mb-5">
                {product.fullDescription}
              </p>

              {/* Product Highlights */}
              {product.highlights && (
                <div className="space-y-2 mb-6 p-3.5 bg-white rounded-2xl border border-[#F3E8D5]">
                  <div className="text-xs font-semibold text-[#244C35] uppercase tracking-wider">
                    পণ্যটির বিশেষত্ব:
                  </div>
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#263126]/85">
                      <CheckCircle className="w-4 h-4 text-[#3D694B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Weight Options */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#263126] mb-2 uppercase tracking-wide">
                  Select Weight / Pack:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.weights.map((w) => {
                    const isSelected = w.value === selectedWeight;
                    return (
                      <button
                        key={w.value}
                        type="button"
                        onClick={() => handleWeightChange(w.value)}
                        className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#244C35] text-white border-[#244C35] shadow-xs"
                            : "bg-white text-[#263126] border-[#F3E8D5] hover:border-[#3D694B]/40"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{w.label}</span>
                          <span className={`font-bold tabular-nums ${isSelected ? "text-[#D9A441]" : "text-[#244C35]"}`}>
                            ৳{w.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6 flex items-center justify-between">
                <label className="text-xs font-semibold text-[#263126] uppercase tracking-wide">
                  Quantity:
                </label>
                <div className="flex items-center border border-[#F3E8D5] bg-white rounded-xl overflow-hidden shadow-xs">
                  <button
                    type="button"
                    onClick={decrementQty}
                    className="p-2 text-[#244C35] hover:bg-[#F3E8D5] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-[#244C35] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={incrementQty}
                    className="p-2 text-[#244C35] hover:bg-[#F3E8D5] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Total & Order Button */}
            <div className="pt-4 border-t border-[#F3E8D5] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#263126]/60 block">Total Amount</span>
                <span className="text-2xl font-bold text-[#244C35] tabular-nums">
                  ৳{totalPrice}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onProceedToOrder(product, selectedWeight, quantity)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#244C35] hover:bg-[#3D694B] shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-[#D9A441]" />
                <span>Proceed to Order</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
