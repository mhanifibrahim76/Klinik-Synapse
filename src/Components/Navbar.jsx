"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => setMobileMenuOpen(false); // Tutup menu setelah klik

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* === Logo & Title === */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo Synapse"
                width={48}
                height={48}
                className="rounded-full object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-base sm:text-lg font-bold text-gray-800">
                Synapse Development Center
              </h1>
              <p className="text-[10px] sm:text-xs text-purple-600">
                Klinik Cipete
              </p>
            </div>
          </div>

          {/* === Desktop Menu === */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 hover:underline underline-offset-4 transition duration-200"
            >
              Beranda
            </Link>
            <Link
              href="/Layanan"
              className="text-gray-700 hover:text-purple-600 hover:underline underline-offset-4 transition duration-200"
            >
              Layanan
            </Link>
            <Link
              href="/Fasilitas"
              className="text-gray-700 hover:text-purple-600 hover:underline underline-offset-4 transition duration-200"
            >
              Fasilitas
            </Link>
          </div>

          {/* === Mobile Menu Button === */}
          <button
            className="md:hidden text-gray-700 hover:text-purple-600 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={handleLinkClick}
            >
              Beranda
            </Link>
            <Link
              href="/Layanan"
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={handleLinkClick}
            >
              Layanan
            </Link>
            <Link
              href="/Fasilitas"
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={handleLinkClick}
            >
              Fasilitas
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
