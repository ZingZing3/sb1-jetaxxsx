import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Button from '../../ui/Button';
import ArtisticFrame from '../../ui/ArtisticFrame';

const stores = [
  {
    region: "Canada",
    link: "https://www.amazon.ca/shop/ziggyzeemiki",
    description: "Shop ZiggyZee's Canadian favorites"
  },
  {
    region: "United States",
    link: "https://www.amazon.com/shop/ziggyzeemiki",
    description: "Discover ZiggyZee's US picks"
  },
  {
    region: "United Kingdom",
    link: "https://www.amazon.co.uk/shop/ziggyzeemiki",
    description: "Explore ZiggyZee's UK collection"
  }
];

const ZiggyStores = () => {
  return (
    <ArtisticFrame variant="okeeffe" className="bg-white p-8">
      <div className="space-y-8">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="w-6 h-6 text-secondary-500" />
          <h3 className="text-2xl font-bold text-primary-500">ZiggyZee's Amazon Stores</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <div key={index} className="bg-lavender-300/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-primary-500 mb-2">{store.region}</h4>
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

export default ZiggyStores;