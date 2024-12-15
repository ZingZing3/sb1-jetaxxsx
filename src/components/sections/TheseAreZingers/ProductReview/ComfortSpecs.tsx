import React from 'react';
import { Moon, Volume2, Weight, Ruler } from 'lucide-react';

const specs = [
  {
    icon: Volume2,
    title: "Whisper-quiet Operation",
    description: "Silent motor system for undisturbed adjustments"
  },
  {
    icon: Moon,
    title: "Under-bed Lighting",
    description: "LED night light for safe navigation"
  },
  {
    icon: Weight,
    title: "Weight Capacity",
    description: "850 lbs per base"
  },
  {
    icon: Ruler,
    title: "Adjustable Height",
    description: "3\" - 12\" leg adjustment range"
  }
];

const ComfortSpecs = () => {
  return (
    <div className="bg-white rounded-xl border border-lavender-300 p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-4">
        Comfort Specifications
      </h4>
      <div className="space-y-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-lavender-300/30 p-2 rounded-lg">
              <spec.icon className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <h5 className="font-medium text-charcoal-500">{spec.title}</h5>
              <p className="text-sm text-charcoal-400">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComfortSpecs;