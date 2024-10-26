import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { products } from '../data/products';

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
        </div>
      </main>
    </>
  );
}