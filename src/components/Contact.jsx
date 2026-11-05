import React, { useState } from "react";
import { MessageCircle, Phone, MapPin, Facebook, Mail, Send, Check } from "lucide-react";
import { BRAND_INFO } from "../data/products.js";
import { getDirectWhatsAppChatUrl } from "../lib/whatsapp.js";

export default function Contact() {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryMessage.trim()) return;

    const text = `হ্যালো FitNest! আমার নাম ${inquiryName.trim()}। আমার প্রশ্ন: ${inquiryMessage.trim()}`;
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFF8E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#3D694B] mb-3">
            Get In Touch • সবসময় আপনার পাশে
          </div>
          <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-[#244C35] mb-3">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#263126]/75">
            We are always here to answer your healthy food queries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={getDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white border border-[#F3E8D5] hover:border-[#25D366] shadow-xs hover:shadow-md transition-all flex items-center gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#263126]/60 block uppercase tracking-wider">
                  WhatsApp Helpline (24/7)
                </span>
                <span className="font-serif text-lg font-bold text-[#244C35] group-hover:text-[#25D366] transition-colors">
                  {BRAND_INFO.phone}
                </span>
                <span className="text-xs text-[#263126]/70 block font-bengali">
                  সরাসরি চ্যাট করতে ক্লিক করুন
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#F3E8D5] shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#244C35]/10 text-[#244C35] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#263126]/60 block uppercase tracking-wider">
                  Customer Care Phone
                </span>
                <span className="font-serif text-base font-bold text-[#244C35]">
                  {BRAND_INFO.phone}
                </span>
                <span className="text-xs text-[#263126]/70 block">
                  সকাল ১০টা - রাত ৮টা পর্যন্ত খোলা
                </span>
              </div>
            </div>

            {/* Facebook Page */}
            <a
              href={BRAND_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white border border-[#F3E8D5] hover:border-[#1877F2] shadow-xs hover:shadow-md transition-all flex items-center gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#263126]/60 block uppercase tracking-wider">
                  Official Facebook Page
                </span>
                <span className="font-serif text-base font-bold text-[#244C35] group-hover:text-[#1877F2] transition-colors">
                  facebook.com/FitNestBD
                </span>
                <span className="text-xs text-[#263126]/70 block font-bengali">
                  আমাদের অফিসিয়াল পেজ ফলো করুন
                </span>
              </div>
            </a>

            {/* Address */}
            <div className="p-5 rounded-2xl bg-white border border-[#F3E8D5] shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D9A441]/15 text-[#D9A441] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#263126]/60 block uppercase tracking-wider">
                  Kitchen & Kitchen Dispatch
                </span>
                <span className="font-serif text-base font-bold text-[#244C35]">
                  {BRAND_INFO.location}
                </span>
                <span className="text-xs text-[#263126]/70 block font-bengali">
                  সমগ্র বাংলাদেশে হোম ডেলিভারি প্রদান করা হয়
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#F3E8D5] shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#244C35] mb-2">
              Send a Quick Question
            </h3>
            <p className="text-xs sm:text-sm text-[#263126]/75 mb-6 font-bengali">
              পণ্য বা ডেলিভারি বিষয়ে কোনো প্রশ্ন থাকলে আমাদের জানান। সরাসরি WhatsApp-এ বার্তা পৌঁছে যাবে।
            </p>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#263126] mb-1.5 uppercase tracking-wide">
                  Your Name / নাম
                </label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="আপনার নাম লিখুন"
                  className="w-full px-4 py-2.5 bg-[#FFF8E9]/50 rounded-xl border border-[#F3E8D5] text-sm text-[#263126] focus:outline-none focus:border-[#244C35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#263126] mb-1.5 uppercase tracking-wide">
                  Your Message / আপনার বার্তা
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="আপনার পছন্দের পণ্য বা কোনো বিশেষ প্রয়োজন সম্পর্কে লিখুন..."
                  className="w-full px-4 py-2.5 bg-[#FFF8E9]/50 rounded-xl border border-[#F3E8D5] text-sm text-[#263126] focus:outline-none focus:border-[#244C35]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#244C35] hover:bg-[#3D694B] shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-[#D9A441]" />
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#D9A441]" />
                    <span>Send Inquiry on WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
