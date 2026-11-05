import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import OrderModal from "./components/OrderModal.jsx";
import About from "./components/About.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import HealthyLifestyle from "./components/HealthyLifestyle.jsx";
import HowToOrder from "./components/HowToOrder.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import { PRODUCTS } from "./data/products.js";

export default function App() {
  // Product Details Modal State
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [detailsWeight, setDetailsWeight] = useState("");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Order Modal State
  const [orderProduct, setOrderProduct] = useState(PRODUCTS[0]);
  const [orderWeight, setOrderWeight] = useState(PRODUCTS[0]?.weights[0]?.value || "");
  const [orderQty, setOrderQty] = useState(1);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  // Handlers
  const handleOpenDetails = (product: any, weight?: string) => {
    setDetailsProduct(product);
    setDetailsWeight(weight || product.weights[0].value);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  const handleOpenOrder = (product?: any, weight?: string, qty = 1) => {
    const prod = product || PRODUCTS[0];
    setOrderProduct(prod);
    setOrderWeight(weight || prod.weights[0].value);
    setOrderQty(qty);
    setIsOrderOpen(true);
  };

  const handleProceedFromDetailsToOrder = (product: any, weight: string, qty: number) => {
    setIsDetailsOpen(false);
    handleOpenOrder(product, weight, qty);
  };

  const handleSelectProductByCode = (code: string) => {
    const matched = PRODUCTS.find((p) => p.code === code) || PRODUCTS[0];
    handleOpenDetails(matched, matched.weights[0].value);
  };

  const handleScrollToProducts = () => {
    const target = document.querySelector("#products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E9] text-[#263126] font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        onOpenProducts={handleScrollToProducts}
        onOpenOrder={() => handleOpenOrder(PRODUCTS[1], "350g", 1)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={handleScrollToProducts}
          onQuickOrder={() => handleOpenOrder(PRODUCTS[1], "350g", 1)}
        />

        {/* 2. Featured Products Section */}
        <Products
          onViewDetails={handleOpenDetails}
          onOrderNow={handleOpenOrder}
        />

        {/* 3. About FitNest */}
        <About />

        {/* 4. Why Choose FitNest */}
        <WhyChooseUs />

        {/* 5. Our Healthy Lifestyle */}
        <HealthyLifestyle
          onSelectProductByCode={handleSelectProductByCode}
        />

        {/* 6. How To Order */}
        <HowToOrder
          onStartOrder={() => handleOpenOrder(PRODUCTS[0], "250g", 1)}
        />

        {/* 7. Customer Testimonials */}
        <Testimonials />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Modals */}
      <ProductDetails
        product={detailsProduct}
        initialWeight={detailsWeight}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        onProceedToOrder={handleProceedFromDetailsToOrder}
      />

      <OrderModal
        initialProduct={orderProduct}
        initialWeight={orderWeight}
        initialQty={orderQty}
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
      />
    </div>
  );
}
