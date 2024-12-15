import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Zero-gravity Position",
    description: "Reduces pressure points and pain for optimal comfort"
  },
  {
    title: "Customizable Elevation",
    description: "0-70 degrees head and foot adjustment range"
  },
  {
    title: "QuietMode™ Anti-snore",
    description: "Intelligent position adjustment to reduce snoring"
  },
  {
    title: "Multi-zone Massage",
    description: "3 intensity levels for targeted relief"
  },
  {
    title: "Smart Controls",
    description: "Wireless remote and smartphone compatibility"
  }
];

const FeaturesList = () => {
  return (
    <div className="bg-lavender-300/30 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-4">
        Essential Features
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="mt-1">
              <Check className="w-5 h-5 text-accent-500" />
            </div>
            <div>
              <h5 className="font-medium text-charcoal-500">{feature.title}</h5>
              <p className="text-sm text-charcoal-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;