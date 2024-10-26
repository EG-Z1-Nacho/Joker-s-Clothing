import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'T-Shirts', path: '/catalog/tshirts' },
    { name: 'Pants', path: '/catalog/pants' },
    { name: 'Shorts', path: '/catalog/shorts' },
    { name: 'Socks', path: '/catalog/socks' }
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button 
            className="lg:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="text-2xl font-black italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Joker Brand CR
          </Link>
          <div className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className="hover:text-purple-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg lg:hidden flex items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-purple-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}