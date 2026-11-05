import React from "react";
import { MessageCircle, Facebook, Instagram, Heart, ArrowUp } from "lucide-react";
import { BRAND_INFO } from "../data/products.js";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Why FitNest", href: "#why-us" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#244C35] text-[#FFF8E9] pt-16 pb-12 border-t border-[#3D694B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D694B]/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FFF8E9]">
                FitNest
              </span>
            </div>

            <p className="font-serif italic text-sm text-[#D9A441]">
              Eat Healthy • Stay Fit
            </p>

            <p className="text-sm text-[#FFF8E9]/80 font-bengali max-w-sm leading-relaxed">
              স্বাস্থ্যকর খাবারের প্রতি ভালোবাসা, প্রতিদিনের জীবনে ভালো অভ্যাস। ঘরোয়া যত্নে তৈরি প্রাকৃতিক খাবারের নির্ভরযোগ্য আয়োজন।
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D694B]/50 hover:bg-[#3D694B] flex items-center justify-center text-[#FFF8E9] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D694B]/50 hover:bg-[#3D694B] flex items-center justify-center text-[#FFF8E9] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D694B]/50 hover:bg-[#3D694B] flex items-center justify-center text-[#FFF8E9] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#D9A441] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF8E9]/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Codes List */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-base font-bold text-[#D9A441] mb-4">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF8E9]/80">
              <li>• Biotin Laddu (FN-001) — Dates Energy Ball</li>
              <li>• Peanut Butter Overnight Oats (FN-002)</li>
              <li>• Granola (FN-003) — Roasted Almond & Berry</li>
              <li>• Muesli (FN-004) — Toasted Seed & Fruit</li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-[#3D694B]/40 border border-[#3D694B] text-xs text-[#FFF8E9]/90">
              Delivery available across all 64 districts in Bangladesh.
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8E9]/60">
          <div>
            © 2026 FitNest. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D9A441] fill-current" />
            <span>for natural healthy living</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
