import React from 'react';
import { Shield, Snowflake, Sparkles } from 'lucide-react';
import Button from '../../../../ui/Button';

const accessories = [
  {
    icon: Shield,
    title: "TEMPUR-Protect® Mattress Cover",
    description: "Essential protection against spills and wear",
    price: "99.00",
    experience: "Absolutely love these! They've protected my mattress perfectly for years."
  },
  {
    icon: Snowflake,
    title: "TEMPUR-Cloud® Cooling Pillow",
    description: "Advanced cooling technology for optimal sleep temperature",
    price: "199.00",
    experience: "Game-changer! Using it for 6 years - didn't realize how important a good pillow was until this!"
  },
  {
    icon: Sparkles,
    title: "TEMPUR-Protect® Pillow Cover",
    description: "Waterproof protection for your pillow investment",
    price: "39.00",
    experience: "These covers are fantastic - they keep the pillows in perfect condition!"
  }
];

const RecommendedAccessories = () => {
  return (
    <div className="bg-white rounded-xl border border-lavender-300 p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-6">
        Recommended Accessories
      </h4>
      
      <div className="space-y-6">
        {accessories.map((item, index) => (
          <div 
            key={index}
            className="bg-lavender-300/10 rounded-lg p-4 space-y-4"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <item.icon className="w-6 h-6 text-accent-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h5 className="font-medium text-charcoal-500">{item.title}</h5>
                  <span className="text-secondary-500 font-semibold">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-charcoal-400 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-accent-500/20">
              <p className="text-sm text-charcoal-500 italic">
                <span className="font-medium text-accent-500">My Experience:</span>{" "}
                {item.experience}
              </p>
            </div>
            
            <div className="flex justify-end">
              <Button 
                variant="secondary"
                onClick={() => window.open('#', '_blank')}
              >
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedAccessories;