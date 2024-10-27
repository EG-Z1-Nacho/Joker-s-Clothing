import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;  // Cambiado a 'image' en lugar de 'mainImage' para coincidir con products.ts
  brand: string;
  category: string;
}

export default function ProductCard({ id, name, image, brand, category }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group">
      <div 
        className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 relative cursor-pointer"
        onClick={() => navigate(`/catalog/${category}/${id}`)}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white text-black px-6 py-3 rounded-full font-bold">
              View Details
            </span>
          </div>
        </div>
        {brand === "Joker Brand CR" && (
          <div className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Original Collection
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-sm font-medium text-purple-500">{brand}</p>
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
    </div>
  );
}