"use client";


const Doctor = () => {
  return (
    <section
      id="dokter"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== Judul ===== */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tim Dokter Kami
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Dipercaya oleh keluarga untuk kesehatan anak Anda
          </p>
        </div>

        {/* ===== Kartu Dokter ===== */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Kolom kiri (gambar dokter) */}
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-10 sm:p-12 flex items-center justify-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                <span className="text-6xl sm:text-7xl md:text-8xl">👩‍⚕️</span>
              </div>
            </div>

            {/* Kolom kanan (detail dokter) */}
            <div className="p-8 sm:p-10 md:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                dr. Citra Radhita, SpA (K)
              </h3>
              <p className="text-purple-600 font-semibold mb-6 text-sm sm:text-base">
                Spesialis Anak Neurologi
              </p>

              {/* Detail pengalaman */}
              <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <p>Dokter Spesialis Anak di RSAB Harapan Kita</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <p>Praktik di RS Mayapada</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <p>Berpengalaman dalam penanganan neurologi anak</p>
                </div>
              </div>

              {/* Jadwal praktik */}
              <div className="mt-8 p-4 bg-purple-50 rounded-xl text-sm sm:text-base">
                <p className="font-semibold text-gray-700 mb-1">
                  Jadwal Praktik:
                </p>
                <p className="text-gray-600">Sesuai Perjanjian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
