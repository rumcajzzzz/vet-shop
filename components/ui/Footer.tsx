'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">VetCare</span>
            </div>
            <p className="text-gray-400">
              Nowoczesna klinika weterynaryjna zapewniająca najwyższą jakość opieki.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Nawigacja</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Strona główna
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                O nas
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-white transition-colors">
                Galeria
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Usługi</h4>
            <div className="space-y-2 text-gray-400">
              <p>Konsultacje</p>
              <p>Chirurgia</p>
              <p>Diagnostyka</p>
              <p>Profilaktyka</p>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <p>ul. Weterynaryjna 123</p>
              <p>00-001 Warszawa</p>
              <a href="tel:+48123456789">+48 123 456 789</a>
              <p>kontakt@vetcare.pl</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VetCare. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;