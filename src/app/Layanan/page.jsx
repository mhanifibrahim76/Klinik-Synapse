"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { services, conditions } from "@/Components/Model";

const LayananPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navbar />
      <div className="max-w-7xl mx-auto pb-10 pt-30">
        {/* ===== Header Halaman ===== */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Seluruh Layanan & Penanganan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan dan penanganan untuk mendukung
            tumbuh kembang anak secara menyeluruh — dengan pendekatan
            profesional, empati, dan metode berbasis bukti.
          </p>
        </div>

        {/* ===== Bagian Layanan ===== */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Layanan Kami
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer border-2 border-transparent hover:border-purple-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                  <span className="text-3xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bagian Menangani ===== */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Menangani
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer border-2 border-transparent hover:border-purple-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                  <span className="text-3xl text-white">{condition.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {condition.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Info Biaya ===== */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center mt-16">
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Kisaran Biaya:</span> Rp 200.000 -
            Rp 1.000.000
          </p>
          <p className="text-sm text-gray-600">
            *Biaya dapat berbeda tergantung jenis layanan dan kebutuhan terapi.
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default LayananPage;
