import React from 'react';
import { ShoppingBag, MapPin, Globe } from 'lucide-react';
import Button from '../../ui/Button';
import ArtisticFrame from '../../ui/ArtisticFrame';

const stores = [
  {
    region: "Canada",
    link: "https://www.amazon.ca/shop/mszingers",
    description: "Shop our Canadian collection",
    icon: MapPin
  },
  {
    region: "United States",
    link: "https://www.amazon.com/shop/mszingers",
    description: "Explore our US recommendations",
    icon: MapPin
  },
  {
    region: "Global",
    link: "https://www.amazon.com/shop/mszingers/international",
    description: "International shipping available",
    icon: Globe
  }
];

const AmazonStores = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8">
      <div className="space-y-8">
        <div className="flex items-center space-x-3">
          <ShoppingBag className="w-6 h-6 text-secondary-500" />
          <h3 className="text-2xl font-bold text-primary-500">
            MSzinger's Amazon Stores
          </h3>
        </div>
        
        <p className="text-charcoal-500 leading-relaxed">
          Discover our curated collection of life-enhancing products, from wellness essentials 
          to comfort solutions. Every item is personally tested and recommended.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div 
              key={index}
              className="bg-lavender-300/10 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-3">
                <store.icon className="w-5 h-5 text-secondary-500" />
                <h4 className="text-xl font-bold text-primary-500">{store.region}</h4>
              </div>
              <p className="text-charcoal-500 mb-4">{store.description}</p>
              <Button 
                variant="primary"
                onClick={() => window.open(store.link, '_blank')}
              >
                Visit Store
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default AmazonStores;