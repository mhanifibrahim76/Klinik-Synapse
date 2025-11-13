"use client";

import { useState } from "react";
import { conditions, services } from "../Model";
import Link from "next/link";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Ambil hanya 3 pertama
  const displayedServices = services.slice(0, 3);
  const displayedConditions = conditions.slice(0, 3);

  return (
    <section id="layanan" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* ===== Bagian Layanan Kami ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Layanan komprehensif untuk mendukung tumbuh kembang optimal anak
            Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer border-2 border-transparent hover:border-purple-300"
              onClick={() => setActiveService(index)}
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

        {/* Tombol lihat semua layanan */}
        <div className="text-center mb-20">
          <Link
            href="/Layanan"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            Lihat Semua Layanan →
          </Link>
        </div>

        {/* ===== Bagian Menangani ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Menangani
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami menangani berbagai kondisi tumbuh kembang anak dengan pendekatan profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedConditions.map((condition, index) => (
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

        {/* Tombol lihat semua menangani */}
        <div className="text-center">
          <Link
            href="/Layanan"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            Lihat Semua Kondisi →
          </Link>
        </div>

        {/* ===== Info Biaya ===== */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Kisaran Biaya:</span> Rp 200.000 - Rp 1.000.000
          </p>
          <p className="text-sm text-gray-600">
            *Biaya dapat berbeda tergantung jenis layanan dan kebutuhan terapi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
