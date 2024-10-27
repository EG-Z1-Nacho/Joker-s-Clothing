import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;  // Debe ser 'image' para hacer match con `products.ts`
  category: string;
  description: string;
  gallery: {
    image: string;
    name: string;
    description: string;
    price: number;
  }[];
}

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
}

export default function ProductSection({ id, title, products }: ProductSectionProps) {
  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              image={product.image}  // Usar 'image' en lugar de 'mainImage'
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}