import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function Catalog() {
  const { category } = useParams();
  const categoryProducts = products[category as keyof typeof products] || [];
  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{categoryTitle} Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-purple-600 font-medium">{product.brand}</p>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.gallery.slice(0, 2).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}