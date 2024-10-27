import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-gradient-to-b from-black to-white pt-1">
        <div className="bg-white">
          <ProductSection
            id="tshirts"
            title="T-Shirts"
            products={products.tshirts.map(p => ({ ...p, category: 'tshirts' }))}
          />
          <div className="bg-gray-50/50">
            <ProductSection
              id="pants"
              title="Pants"
              products={products.pants.map(p => ({ ...p, category: 'pants' }))}
            />
          </div>
          <ProductSection
            id="shorts"
            title="Shorts"
            products={products.shorts.map(p => ({ ...p, category: 'shorts' }))}
          />
          <div className="bg-gray-50/50">
            <ProductSection
              id="socks"
              title="Socks"
              products={products.socks.map(p => ({ ...p, category: 'socks' }))}
            />
          </div>

          {/* Sección de "Other Brands" */}
          <div className="max-w-7xl mx-auto py-16 text-center">
            <h2 className="text-4xl font-bold mb-8">Other Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/catalog/Thrasher" className="flex items-center justify-center">
                <img src="src/imgs/Thrasher-Logo.png" alt="Brand Logo 1" className="h-24 w-auto hover:scale-105 transition-transform" />
              </Link>
              <Link to="/catalog/adidas" className="flex items-center justify-center">
                <img src="src/imgs/Adidas_Logo.svg" alt="Adidas Logo" className="h-24 w-auto hover:scale-105 transition-transform" />
              </Link>
              <Link to="/catalog/nike" className="flex items-center justify-center">
                <img src="src/imgs/Nike-Logo.png" alt="Nike Logo" className="h-24 w-auto hover:scale-105 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}