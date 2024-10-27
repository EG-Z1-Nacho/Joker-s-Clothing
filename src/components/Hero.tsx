import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center pt-2 mt-[-3%]"> {/* Añadido margin-top */}
      <img
        src="src/imgs/logoNBG.png"
        alt="Hero"
        className="hero-image opacity-80 mb-1 w-61 h-auto"
      />
      <div className="text-center space-y-1 px-4">
        <div className="flex items-center justify-center gap-1">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h1 id='title1ID' className="titulo-principal">Joker's Brand CR</h1>
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
        <p className="subtitulo">Tendencia Urbana</p>
        <a
          href="#tshirts"
          className="inline-block bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-purple-400 hover:text-white transition duration-300 transform hover:scale-105"
        >
          View Collection
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}