import React from 'react';
import { ShoppingBag } from 'lucide-react';
import StoreGrid from './StoreGrid';
import ArtisticFrame from '../../../ui/ArtisticFrame';

const AmazonStores = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-secondary-500" />
            <h3 className="text-2xl font-bold text-primary-500">
              MSzinger's Amazon Stores
            </h3>
          </div>
        </div>
        <p className="text-charcoal-500 leading-relaxed">
          Discover our curated collection of life-enhancing products, from wellness essentials 
          to comfort solutions. Every item is personally tested and recommended.
        </p>
        <StoreGrid />
      </div>
    </ArtisticFrame>
  );
};

export default AmazonStores;