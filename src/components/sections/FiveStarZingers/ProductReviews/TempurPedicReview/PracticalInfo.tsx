import React from 'react';
import { Truck, Shield, Clock, CreditCard, Home, Power } from 'lucide-react';

const practicalInfo = [
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Professional setup included"
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Limited warranty coverage"
  },
  {
    icon: Clock,
    title: "Sleep Trial",
    description: "Try it at home"
  },
  {
    icon: CreditCard,
    title: "Financing Available",
    description: "Flexible payment options"
  },
  {
    icon: Home,
    title: "Universal Fit",
    description: "Works with most bed frames"
  },
  {
    icon: Power,
    title: "Emergency Backup",
    description: "Power-down safety feature"
  }
];

const PracticalInfo = () => {
  return (
    <div className="bg-primary-500/5 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-4">
        Practical Considerations
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {practicalInfo.map((info, index) => (
          <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
            <info.icon className="w-5 h-5 text-secondary-500" />
            <div>
              <h5 className="font-medium text-charcoal-500">{info.title}</h5>
              <p className="text-sm text-charcoal-400">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticalInfo;