import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-full mx-auto flex items-center justify-between">
          {/* Logo y Nombre de la Marca a la Izquierda */}
          <Link to="/" className="flex items-center gap-2 mr-auto">
            <span className="text-3xl font-black italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Joker's Brand CR
            </span>
          </Link>

          {/* Redes Sociales Centradas */}
          <div className="flex gap-4 items-center justify-center mx-auto">
            {/* Instagram con hover en fucsia */}
            <a 
              href="https://www.instagram.com/joker_brandcr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#e32ba3]" // Color fucsia en hover
            >
              <Instagram size={24} />
            </a>

            {/* WhatsApp con hover en verde */}
            <a 
              href="https://api.whatsapp.com/send/?phone=50660446045" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#25D366]" // Color verde en hover
            >
              <Phone size={24} />
            </a>

            {/* Facebook con hover en azul */}
            <a 
              href="https://www.facebook.com/jokersbrandcr?mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#1877F2]" // Color azul en hover
            >
              <Facebook size={24} />
            </a>
          </div>

          {/* Categorías a la Derecha */}
          <div className="hidden lg:flex gap-4 ml-auto">
            <Link to="/catalog/tshirts" className="navbar-link">T-Shirts</Link>
            <Link to="/catalog/pants" className="navbar-link">Pants</Link>
            <Link to="/catalog/shorts" className="navbar-link">Shorts</Link>
            <Link to="/catalog/socks" className="navbar-link">Socks</Link>
          </div>

          {/* Botón del menú móvil */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 flex flex-col items-center justify-center z-50">
          {/* Título en el menú móvil */}
          <h2 className="text-3xl font-black italic mb-4 text-white">Joker's Brand CR</h2>
          <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            <X size={24} className="text-white" />
          </button>
          <div className="flex flex-col items-center gap-8 text-2xl">
            <Link to="/catalog/tshirts" onClick={() => setIsMenuOpen(false)} className="navbar-link text-black lg:text-white hover:text-purple-500">T-Shirts</Link>
            <Link to="/catalog/pants" onClick={() => setIsMenuOpen(false)} className="navbar-link text-black lg:text-white hover:text-purple-500">Pants</Link>
            <Link to="/catalog/shorts" onClick={() => setIsMenuOpen(false)} className="navbar-link text-black lg:text-white hover:text-purple-500">Shorts</Link>
            <Link to="/catalog/socks" onClick={() => setIsMenuOpen(false)} className="navbar-link text-black lg:text-white hover:text-purple-500">Socks</Link>
          </div>
        </div>
      )}
    </>
  );
}