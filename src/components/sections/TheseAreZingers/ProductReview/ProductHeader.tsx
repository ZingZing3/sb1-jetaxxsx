import React from 'react';
import { Star } from 'lucide-react';

const ProductHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-primary-500">
          TEMPUR-Ergo® Smart Base
        </h3>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-secondary-500" fill="currentColor" />
          <span className="ml-1 text-lg font-semibold">4.9/5</span>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
        alt="TEMPUR-Ergo® Smart Base"
        className="w-full h-64 object-cover rounded-xl"
      />
      <p className="text-lg text-charcoal-500 leading-relaxed">
        Transform your sleep experience with the ultimate in comfort and technology. 
        Perfect for managing chronic conditions, this smart adjustable base combines 
        therapeutic features with luxurious comfort.
      </p>
    </div>
  );
};

export default ProductHeader;