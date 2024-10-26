import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[85vh] bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
        alt="Hero"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h1 className="text-6xl md:text-8xl font-black italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Joker Brand CR
            </h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-xl md:text-3xl font-medium uppercase tracking-wider">
            Urban Style Redefined
          </p>
          <a
            href="#tshirts"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-400 hover:text-white transition duration-300 transform hover:scale-105"
          >
            View Collection
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}