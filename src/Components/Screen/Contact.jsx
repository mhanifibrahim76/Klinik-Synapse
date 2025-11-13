import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="kontak"
      className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-purple-100">Kami siap membantu Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Alamat</p>
                  <p className="text-purple-100">
                    Jl. Cipete Raya No 10A Cipete, Cilandak, Jakarta Timur
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">WhatsApp / Telepon</p>
                  <a
                    href="tel:085211975522"
                    className="text-purple-100 hover:text-white transition"
                  >
                    0852-1197-5522
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:Synaps.child@gmail.com"
                    className="text-purple-100 hover:text-white transition"
                  >
                    Synaps.child@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Jam Operasional</p>
                  <p className="text-purple-100">09.00 - 18.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/synaps.child"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-white transition"
                  >
                    @synaps.child
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Lokasi Kami
            </h3>

            {/* Wrapper Gambar + Overlay */}
            <div className="relative rounded-xl overflow-hidden h-80 group shadow-md">
              {/* Gambar Klinik */}
              <Image
                src="/assets/klinik.jpeg" // ubah ke nama file gambar kamu
                alt="Klinik ABA Pedia"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay muncul saat hover */}
              <a
                href="https://maps.app.goo.gl/ipVomdcZLY3Wc7ne9?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center"
              >
                <MapPin className="w-16 h-16 mb-3" />
                <p className="font-semibold text-lg mb-1">
                  Lihat di Google Maps
                </p>
                <p className="text-sm opacity-90">Klik untuk membuka peta</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
