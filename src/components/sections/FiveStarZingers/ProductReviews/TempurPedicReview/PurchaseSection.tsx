import React from 'react';
import Button from '../../../../ui/Button';
import { ExternalLink, ShoppingCart } from 'lucide-react';

const PurchaseSection = () => {
  return (
    <div className="bg-white rounded-xl border-2 border-accent-500 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 mb-4 md:mb-0">
          <h4 className="text-2xl font-bold text-primary-500">
            Transform Your Sleep Experience
          </h4>
          <p className="text-charcoal-500">
            Invest in your comfort and well-being with the TEMPUR-Ergo Smart Base
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="secondary"
            icon={ExternalLink}
            onClick={() => window.open('#', '_blank')}
          >
            Learn More
          </Button>
          <Button 
            variant="primary"
            icon={ShoppingCart}
            onClick={() => window.open('#', '_blank')}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;