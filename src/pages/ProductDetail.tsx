import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { category, id } = useParams();
  const categoryProducts = products[category as keyof typeof products] || [];
  const product = categoryProducts.find(p => p.id === Number(id));

  const [selectedItem, setSelectedItem] = useState(
    product?.gallery[0] || { image: '', name: 'Producto no encontrado', description: '', price: 0 }
  );

  useEffect(() => {
    if (product) {
      setSelectedItem(product.gallery[0]); // Primera imagen como selección inicial
    }
  }, [product]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 relative">
      {/* Fondo oscuro que aparece al hacer hover */}
      <div className="overlay hidden"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Imagen principal */}
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="product-main-image w-full max-h-60 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => document.querySelector('.overlay')?.classList.remove('hidden')}
              onMouseLeave={() => document.querySelector('.overlay')?.classList.add('hidden')}
            />
            {/* Miniaturas de la galería (las primeras 3 imágenes) */}
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.slice(0, 3).map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={item.name}
                  className={`product-thumbnail w-full aspect-square object-cover rounded-lg cursor-pointer ${
                    selectedItem.image === item.image ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-purple-600 font-medium">{product.brand}</p>
              <h1 className="text-4xl font-bold mt-2">{selectedItem.name}</h1>
            </div>
            <div className="prose max-w-none">
              <p>{selectedItem.description}</p>
            </div>
            <div className="pt-6 border-t">
              <h2 className="text-xl font-bold mb-4">Detalles del Producto</h2>
              <ul className="space-y-2">
                <li>Materiales de alta calidad</li>
                <li>Ajuste cómodo</li>
                <li>Construcción duradera</li>
                <li>Instrucciones de cuidado fáciles</li>
              </ul>
            </div>
            <div className="pt-6 border-t">
              <h2 className="text-2xl font-bold text-green-600">
                ₡{selectedItem.price.toLocaleString('es-CR')}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}