import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getDirectWhatsAppChatUrl } from "../lib/whatsapp.js";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover/initial */}
      <div
        className={`hidden sm:block bg-white text-[#263126] px-3.5 py-1.5 rounded-full shadow-lg border border-[#F3E8D5] text-xs font-medium transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span>অর্ডার বা তথ্যের জন্য WhatsApp করুন</span>
      </div>

      {/* Floating Button */}
      <a
        href={getDirectWhatsAppChatUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with FitNest on WhatsApp"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
