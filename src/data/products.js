/**
 * FitNest Product Catalog
 * Brand: FitNest ("Eat Healthy • Stay Fit")
 * 
 * Images refer to the three brand photographs:
 * - /images/biotin-laddu.jpg
 * - /images/overnight-oats.jpg
 * - /images/fitnest-granola-muesli.jpg
 */

export const PRODUCTS = [
  {
    id: "fn-001",
    code: "FN-001",
    name: "Biotin Laddu",
    bengaliName: "বায়োটিন লাড্ডু",
    alternativeName: "Dates Energy Ball",
    shortDescription: "খেজুর, বাদাম, বীজ ও অন্যান্য উপাদানের মিশেলে তৈরি সুস্বাদু এনার্জি বল।",
    fullDescription: "FitNest বায়োটিন লাড্ডু হলো স্বাস্থ্যকর প্রিমিয়াম ডেটস এনার্জি বল। কোনো ধরনের রিফাইন্ড সুগার বা কৃত্রিম প্রিজারভেটিভ ছাড়া কেবল প্রাকৃতিক মেদজুল খেজুর, আমন্ড, আখরোট, চিয়া সিডস ও খাঁটি উপাদান দিয়ে তৈরি। এটি আপনার দৈনন্দিন পুষ্টির চাহিদা মেটায় ও স্বাস্থ্যকর মিষ্টির তৃপ্তি দেয়।",
    image: "/images/biotin-laddu.jpg",
    badge: "100% Homemade",
    highlights: [
      "কোনো কৃত্রিম চিনি বা গুড় নেই",
      "প্রাকৃতিক খেজুর, বাদাম ও বিভিন্ন স্বাস্থ্যকর বীজ",
      "ঘরোয়া পরিবেশে সর্বোচ্চ পরিচ্ছন্নতায় প্রস্তুত"
    ],
    weights: [
      { label: "250g (Approx. 10-12 Balls)", value: "250g", price: 420 },
      { label: "500g (Approx. 20-24 Balls)", value: "500g", price: 800 },
      { label: "1kg (Family Pack)", value: "1kg", price: 1550 }
    ],
    defaultWeight: "250g",
    defaultPrice: 420
  },
  {
    id: "fn-002",
    code: "FN-002",
    name: "Peanut Butter Overnight Oats",
    bengaliName: "পিনাট বাটার ওভারনাইট ওটস",
    alternativeName: "PB Overnight Oats Jar",
    shortDescription: "ওটস, পিনাট বাটার এবং বিভিন্ন উপাদানের সমন্বয়ে তৈরি মজাদার ব্রেকফাস্ট অপশন।",
    fullDescription: "FitNest পিনাট বাটার ওভারনাইট ওটস আপনার সকালের নাস্তাকে করবে দ্রুত, সহজ এবং অত্যন্ত পুষ্টিকর। প্রিমিয়াম রোল্ড ওটস, হোমমেড ক্রিমি পিনাট বাটার, চিয়া সিড এবং প্রাকৃতিক ফ্লেভারের নিখুঁত সংমিশ্রণ। রাতে ফ্রিজে ভিজিয়ে রেখে সকালে সরাসরি খাওয়ার জন্য প্রস্তুত।",
    image: "/images/overnight-oats.jpg",
    badge: "Signature Breakfast",
    highlights: [
      "প্রিমিয়াম রোল্ড ওটস ও খাঁটি পিনাট বাটার",
      "ফাইবার এবং স্বাস্থ্যকর উদ্ভিজ্জ প্রোটিনের উৎস",
      "ব্যস্ত সকালের জন্য ঝটপট ও পুষ্টিকর রেডি নাস্তা"
    ],
    weights: [
      { label: "350g Jar", value: "350g", price: 320 },
      { label: "700g (Twin Pack)", value: "700g", price: 600 },
      { label: "1kg Economy Jar", value: "1kg", price: 850 }
    ],
    defaultWeight: "350g",
    defaultPrice: 320
  },
  {
    id: "fn-003",
    code: "FN-003",
    name: "Granola",
    bengaliName: "গ্রানোলা",
    alternativeName: "Roasted Almond & Berry Granola",
    shortDescription: "বিভিন্ন বাদাম, ওটস ও অন্যান্য উপাদানের মিশেলে তৈরি মজাদার গ্রানোলা।",
    fullDescription: "FitNest ক্রাঞ্চি হোমমেড গ্রানোলা তৈরি হয় রোল্ড ওটস, কুঁচি করা আমন্ড, আখরোট, মিষ্টি কুমড়ার বীজ ও ড্রাই ক্র্যানবেরির মৃদু রোস্টিংয়ের মাধ্যমে। কোনো প্রিজারভেটিভ ছাড়া সামান্য প্রাকৃতিক মধু দিয়ে বেক করা। দুধ, দই বা ফ্রুট সালাদের সাথে খেতে অসাধারণ ক্রাঞ্চি স্বাদ দেয়।",
    image: "/images/fitnest-granola-muesli.jpg",
    badge: "Slow Roasted",
    highlights: [
      "রোল্ড ওটস, আস্ত বাদাম এবং ড্রাই বেরিজ",
      "হালকা ক্রাঞ্চি টেক্সচার ও প্রাকৃতিক সুবাস",
      "দুধ বা দইয়ের সাথে প্রতিদিনের মজাদার স্ন্যাক্স"
    ],
    weights: [
      { label: "250g Pouch", value: "250g", price: 380 },
      { label: "500g Pouch", value: "500g", price: 720 },
      { label: "1kg Value Pack", value: "1kg", price: 1380 }
    ],
    defaultWeight: "250g",
    defaultPrice: 380
  },
  {
    id: "fn-004",
    code: "FN-004",
    name: "Muesli",
    bengaliName: "মিউজলি",
    alternativeName: "Toasted Seed & Fruit Muesli",
    shortDescription: "ওটস, বাদাম ও বিভিন্ন উপাদানের সমন্বয়ে তৈরি সহজ ও সুস্বাদু খাবার।",
    fullDescription: "FitNest ক্লাসিক মিউজলি সম্পূর্ণ নন-ফ্রাইড এবং কোনো চিনিযুক্ত সিরাপ ছাড়া তৈরি স্বাস্থ্যকর ব্রেকফাস্ট উপাদান। এতে রয়েছে হোলগ্রেইন ওটস, সূর্যমুখী বীজ, চিয়া সিড এবং বিভিন্ন পুষ্টিকর বাদামের ব্যালান্সড অনুপাত, যা প্রতিদিনের সুষম খাদ্যাভ্যাস তৈরিতে সহায়ক।",
    image: "/images/fitnest-granola-muesli.jpg",
    badge: "Zero Added Sugar",
    highlights: [
      "কোনো বাড়তি চিনি বা তেল ছাড়া প্রস্তুত",
      "হোলগ্রেইন ওটস ও বিভিন্ন নিউট্রিশিয়াস সিডস",
      "সহজ হজমযোগ্য ও হালকা খাবার"
    ],
    weights: [
      { label: "250g Pouch", value: "250g", price: 350 },
      { label: "500g Pouch", value: "500g", price: 660 },
      { label: "1kg Value Pack", value: "1kg", price: 1250 }
    ],
    defaultWeight: "250g",
    defaultPrice: 350
  }
];

export const BRAND_INFO = {
  name: "FitNest",
  tagline: "Eat Healthy • Stay Fit",
  bengaliTagline: "সুস্থ জীবনের শুরু হোক প্রতিদিনের খাবার থেকে।",
  heroHeadingEn: "Eat Better. Feel Better. Live Better.",
  heroDescriptionBn: "প্রতিদিনের খাবারে যোগ করুন পুষ্টিকর ও সুস্বাদু খাবারের আনন্দ। FitNest নিয়ে এসেছে যত্নে তৈরি স্বাস্থ্যকর খাবারের কিছু দারুণ আয়োজন।",
  phone: "+880 1700-000000",
  whatsappNumber: "8801700000000",
  email: "hello.fitnest.bd@gmail.com",
  location: "Dhaka, Bangladesh",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/8801700000000"
  }
};
