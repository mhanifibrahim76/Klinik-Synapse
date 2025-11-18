"use client";

import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Screen/Hero";
import Services from "@/Components/Screen/Services";
import Doctor from "@/Components/Screen/Doctor";
import Contact from "@/Components/Screen/Contact";
import Footer from "@/Components/Footer";
import Whatsapp from "@/Components/Whatsapp";

export default function SynapseClinicWebsite() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Doctor Section */}
      <Doctor />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <Whatsapp />
    </div>
  );
}
