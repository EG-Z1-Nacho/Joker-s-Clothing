import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import '../index.css'

export default function Catalog() {
  const { category } = useParams();
  const categoryProducts = products[category as keyof typeof products] || [];
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : "Unknown Category";

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{categoryTitle} Catalog</h1>
        <div className="catalog-container">
          {categoryProducts.map((product) => (
            <div key={product.id} className="catalog-item">
              <Link to={`/catalog/${category}/${product.id}`}>
                <div className="image-hover-effect">
                  <img
                    src={product.image} 
                    alt={product.name}
                    className="catalog-product-image"
                  />
                </div>
              </Link>
              <div className="text-center mt-4">
                <p className="text-sm text-purple-600 font-medium">{product.brand}</p>
                <h2 className="text-lg font-bold">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}