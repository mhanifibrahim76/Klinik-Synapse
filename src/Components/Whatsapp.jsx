import { Phone } from 'lucide-react';
const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/6285211975522"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transform hover:scale-110 transition z-50"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default Whatsapp;
