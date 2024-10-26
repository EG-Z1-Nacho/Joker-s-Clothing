import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { category, id } = useParams();
  const categoryProducts = products[category as keyof typeof products] || [];
  const product = categoryProducts.find(p => p.id === Number(id));

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-xl"
            />
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-purple-600 font-medium">{product.brand}</p>
              <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
            </div>
            <div className="prose max-w-none">
              <p>Experience the perfect blend of style and comfort with our {product.name.toLowerCase()}. 
              Crafted with premium materials and attention to detail, this piece is designed to make a statement 
              while ensuring all-day comfort.</p>
            </div>
            <div className="pt-6 border-t">
              <h2 className="text-xl font-bold mb-4">Product Details</h2>
              <ul className="space-y-2">
                <li>Premium quality materials</li>
                <li>Comfortable fit</li>
                <li>Durable construction</li>
                <li>Easy care instructions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}