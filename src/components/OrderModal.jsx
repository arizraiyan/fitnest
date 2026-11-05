import React, { useState, useEffect } from "react";
import { X, ShoppingBag, Plus, Minus, AlertCircle, MessageCircle, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "../data/products.js";
import { validateBangladeshiPhone, getWhatsAppOrderUrl, WHATSAPP_NUMBER } from "../lib/whatsapp.js";

export default function OrderModal({ initialProduct, initialWeight, initialQty = 1, isOpen, onClose }) {
  const [selectedProductId, setSelectedProductId] = useState(initialProduct?.id || PRODUCTS[0]?.id);
  const [selectedWeight, setSelectedWeight] = useState(initialWeight || "");
  const [quantity, setQuantity] = useState(initialQty || 1);

  // Form input fields
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state when initialProduct or initialWeight change
  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
      setSelectedWeight(initialWeight || initialProduct.weights[0].value);
      setQuantity(initialQty || 1);
    }
  }, [initialProduct, initialWeight, initialQty, isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const currentWeightObj = currentProduct.weights.find((w) => w.value === selectedWeight) || currentProduct.weights[0];
  const unitPrice = currentWeightObj?.price || currentProduct.defaultPrice;
  const totalPrice = unitPrice * quantity;

  const handleProductChange = (e) => {
    const pId = e.target.value;
    setSelectedProductId(pId);
    const newP = PRODUCTS.find((p) => p.id === pId);
    if (newP) {
      setSelectedWeight(newP.weights[0].value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!customerName.trim()) {
      newErrors.customerName = "আপনার নাম লিখুন (Name is required)";
    }

    if (!phone.trim()) {
      newErrors.phone = "সচল ফোন নম্বর লিখুন (Phone number is required)";
    } else if (!validateBangladeshiPhone(phone)) {
      newErrors.phone = "সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)";
    }

    if (!address.trim()) {
      newErrors.address = "সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন (Delivery address is required)";
    }

    if (!quantity || quantity < 1) {
      newErrors.quantity = "পরিমাণ কমপক্ষে ১ হতে হবে";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const orderData = {
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      productName: `${currentProduct.name} (${currentProduct.bengaliName})`,
      productCode: currentProduct.code,
      weight: currentWeightObj.label || currentWeightObj.value,
      quantity,
      unitPrice,
      totalPrice,
      specialInstructions: specialInstructions.trim()
    };

    const whatsappUrl = getWhatsAppOrderUrl(orderData);
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FFF8E9] rounded-3xl shadow-2xl border border-[#F3E8D5] overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#244C35] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D9A441]" />
            <h2 id="order-modal-title" className="font-serif text-lg sm:text-xl font-bold tracking-wide">
              Complete Your FitNest Order
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close order form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleConfirmOrder} className="p-5 sm:p-7 space-y-6">
          
          {/* Order Summary Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#F3E8D5] shadow-xs flex flex-col sm:flex-row items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F3E8D5]/50 shrink-0">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1 w-full text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-serif font-bold text-[#244C35] text-base">
                  {currentProduct.name}
                </span>
                <span className="text-xs bg-[#244C35]/10 text-[#244C35] px-2 py-0.5 rounded font-mono font-medium">
                  {currentProduct.code}
                </span>
              </div>
              <div className="text-xs text-[#263126]/70 mt-1">
                Selected: <strong className="text-[#244C35]">{currentWeightObj.label || currentWeightObj.value}</strong>
              </div>
              <div className="text-xs text-[#263126]/70">
                Unit Price: ৳{unitPrice} × {quantity} = <strong className="text-base text-[#244C35] tabular-nums">৳{totalPrice}</strong>
              </div>
            </div>
          </div>

          {/* Product & Weight Configuration Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Product Switcher */}
            <div>
              <label className="block text-xs font-semibold text-[#263126] mb-1.5">
                Product / পণ্য:
              </label>
              <select
                value={selectedProductId}
                onChange={handleProductChange}
                className="w-full px-3 py-2 bg-white rounded-xl border border-[#F3E8D5] text-xs font-medium text-[#263126] focus:outline-none focus:border-[#244C35]"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Weight Switcher */}
            <div>
              <label className="block text-xs font-semibold text-[#263126] mb-1.5">
                Weight / পরিমাণ:
              </label>
              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-[#F3E8D5] text-xs font-medium text-[#263126] focus:outline-none focus:border-[#244C35]"
              >
                {currentProduct.weights.map((w) => (
                  <option key={w.value} value={w.value}>
                    {w.value} — ৳{w.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Stepper */}
            <div>
              <label className="block text-xs font-semibold text-[#263126] mb-1.5">
                Quantity / সংখ্যা:
              </label>
              <div className="flex items-center border border-[#F3E8D5] bg-white rounded-xl overflow-hidden h-[38px]">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="px-2.5 h-full text-[#244C35] hover:bg-[#F3E8D5] transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-center text-xs font-bold text-[#244C35] tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-2.5 h-full text-[#244C35] hover:bg-[#F3E8D5] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="space-y-4 pt-2 border-t border-[#F3E8D5]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#244C35]">
              Customer Information / গ্রাহকের বিবরণ
            </h3>

            {/* Customer Name */}
            <div>
              <label className="block text-xs font-medium text-[#263126] mb-1">
                Your Full Name / আপনার নাম <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  if (errors.customerName) setErrors({ ...errors, customerName: null });
                }}
                placeholder="যেমন: তানভীর আহমেদ"
                className={`w-full px-3.5 py-2.5 bg-white rounded-xl border text-sm text-[#263126] focus:outline-none focus:ring-2 focus:ring-[#244C35]/20 ${
                  errors.customerName ? "border-red-500" : "border-[#F3E8D5] focus:border-[#244C35]"
                }`}
              />
              {errors.customerName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.customerName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium text-[#263126] mb-1">
                Phone Number / মোবাইল নম্বর <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: null });
                }}
                placeholder="যেমন: 01712345678"
                className={`w-full px-3.5 py-2.5 bg-white rounded-xl border text-sm text-[#263126] focus:outline-none focus:ring-2 focus:ring-[#244C35]/20 ${
                  errors.phone ? "border-red-500" : "border-[#F3E8D5] focus:border-[#244C35]"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-xs font-medium text-[#263126] mb-1">
                Full Delivery Address / ডেলিভারি ঠিকানা <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={2}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  if (errors.address) setErrors({ ...errors, address: null });
                }}
                placeholder="বাসা নম্বর, রোড, এলাকা, জেলা (যেমন: হাউজ #১২, রোড #৪, ধানমন্ডি, ঢাকা)"
                className={`w-full px-3.5 py-2.5 bg-white rounded-xl border text-sm text-[#263126] focus:outline-none focus:ring-2 focus:ring-[#244C35]/20 ${
                  errors.address ? "border-red-500" : "border-[#F3E8D5] focus:border-[#244C35]"
                }`}
              />
              {errors.address && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.address}
                </p>
              )}
            </div>

            {/* Special Instructions (Optional) */}
            <div>
              <label className="block text-xs font-medium text-[#263126] mb-1">
                Special Instructions (Optional) / বিশেষ কোনো নির্দেশনা
              </label>
              <input
                type="text"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="যেমন: বিকাল ৫টার পরে ডেলিভারি দিলে ভালো হয়"
                className="w-full px-3.5 py-2 bg-white rounded-xl border border-[#F3E8D5] text-xs text-[#263126] focus:outline-none focus:border-[#244C35]"
              />
            </div>
          </div>

          {/* Reassurance Notice */}
          <div className="p-3 bg-[#3D694B]/10 rounded-xl flex items-start gap-2.5 text-xs text-[#244C35]">
            <ShieldCheck className="w-4 h-4 text-[#3D694B] shrink-0 mt-0.5" />
            <div>
              <strong>সরাসরি WhatsApp নিশ্চিতকরণ:</strong> 'Confirm Order on WhatsApp' বাটনে চাপলে স্বয়ংক্রিয়ভাবে একটি গোছানো মেসেজ সহ আপনার WhatsApp অ্যাপ বা ওয়েব ওপেন হবে। আপনি মেসেজটি রিভিও করে সেন্ড করতে পারবেন।
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-xs text-[#263126]/60 block">Total Payable (Excl. delivery):</span>
              <span className="text-2xl font-bold text-[#244C35] tabular-nums">
                ৳{totalPrice}
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Confirm Order on WhatsApp</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
