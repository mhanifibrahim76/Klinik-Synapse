"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="pt-25 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* ===== KIRI (Text) ===== */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
              Melayani dengan Dedikasi
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug md:leading-tight">
              Tempat Terapi Tumbuh Kembang Anak
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Spesialisasi dalam penanganan tumbuh kembang anak dan anak
              berkebutuhan khusus dengan pendekatan profesional dan penuh kasih
              sayang.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/6285211975522"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-1 transition"
              >
                Buat Janji Sekarang
              </a>
              <a
                href="#layanan"
                className="bg-white text-purple-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold border-2 border-purple-500 hover:bg-purple-50 transition"
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* ===== KANAN (Slider gambar dalam frame tetap) ===== */}
          <div className="relative mt-10 md:mt-0 flex justify-center">
            {/* Frame luar */}
            <div className="relative rounded-2xl shadow-2xl flex items-center justify-center p-[4px] sm:p-[5px] bg-gradient-to-br from-purple-400 to-pink-400 w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] mx-auto">
              <div className="rounded-xl overflow-hidden aspect-[4/3] w-full relative">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  slidesPerView={1}
                  className="w-full h-full"
                >
                  <SwiperSlide>
                    <Image
                      src="/assets/slider1.jpeg"
                      alt="Terapi Anak"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/slider2.jpeg"
                      alt="Konsultasi Psikologi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/slider3.jpeg"
                      alt="Fisioterapi Anak"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/slider4.jpeg"
                      alt="Terapi Okupasi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* Badge tetap di luar frame (posisi aman & proporsional) */}
            <div className="absolute bottom-[-16px] sm:bottom-[-20px] right-3 sm:right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl z-20">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl text-purple-600">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                    Profesional
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-600">
                    Tim Berpengalaman
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
