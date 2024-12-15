import React from 'react';
import { Gift, Star } from 'lucide-react';
import ArtisticFrame from '../../ui/ArtisticFrame';
import Button from '../../ui/Button';

const products = [
  {
    category: "Stickers & Art",
    items: [
      {
        name: "ZiggyZee Glitter Stickers",
        description: "Sparkly stickers featuring ZiggyZee's adventures",
        link: "https://www.stickermule.com/ziggyzeemiki"
      }
    ]
  },
  {
    category: "Essentials",
    items: [
      {
        name: "Dogvent Calendar",
        description: "Limited edition holiday treat calendar",
        link: "#"
      },
      {
        name: "Premium Dog Food",
        description: "ZiggyZee's favorite nutrition",
        link: "#"
      }
    ]
  },
  {
    category: "Comfort & Style",
    items: [
      {
        name: "Cozy Harness",
        description: "Comfortable, adjustable fit",
        link: "#"
      },
      {
        name: "Grooming Kit",
        description: "Professional-grade tools",
        link: "#"
      }
    ]
  }
];

const ZiggyProducts = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <Gift className="w-6 h-6 text-secondary-500" />
        <h3 className="text-2xl font-bold text-primary-500">Ziggy Zooms - Products We Love</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((category, index) => (
          <ArtisticFrame key={index} variant="okeeffe" className="bg-white">
            <div className="p-6">
              <h4 className="text-xl font-bold text-primary-500 mb-4">{category.category}</h4>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-charcoal-500">{item.name}</h5>
                      <Star className="w-4 h-4 text-secondary-500" fill="currentColor" />
                    </div>
                    <p className="text-sm text-charcoal-400">{item.description}</p>
                    <Button 
                      variant="secondary"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Shop Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </ArtisticFrame>
        ))}
      </div>
    </div>
  );
};

export default ZiggyProducts;