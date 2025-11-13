// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h3 className="text-xl font-bold">Synapse Development Center</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Melayani dengan Dedikasi untuk Tumbuh Kembang Anak
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Synapse Development Center - Klinik Cipete. All rights reserved.
          </p>
        </div>
      </footer>

  );
}
