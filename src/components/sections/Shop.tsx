import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    title: "Spoonies Survival Kit",
    description: "Essential (and hilarious) tools for navigating life with chronic illness",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    category: 'own'
  },
  {
    id: '2',
    title: "Travel Emergency Kit",
    description: "Because sometimes you need more than just a passport",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    category: 'own'
  }
];

const Shop = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] mb-4">
            MSZingers Shop
          </h2>
          <p className="text-lg text-gray-600">
            Survival kits, travel essentials, and more zingy goodness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-[#E6E6FA] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4B0082]">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#DC143C]">
                    ${product.price}
                  </span>
                  <Button icon={ShoppingBag}>
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;