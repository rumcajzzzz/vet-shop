'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & name */}
          <Link href="/" className='cursor-pointer'>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">VetCare</span>
            </div>
          </Link>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Strona główna
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              O nas
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors">
              Cennik
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-green-600 transition-colors">
              Galeria
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Call to Action */}
          <a href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white cursor-pointer">
              Umów wizytę
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;