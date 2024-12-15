import React from 'react';
import { Heart, Activity, Book, Zap, Battery, Coffee } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Acid Reflux Management",
    description: "Elevation helps reduce symptoms"
  },
  {
    icon: Activity,
    title: "Improved Circulation",
    description: "Strategic leg elevation"
  },
  {
    icon: Zap,
    title: "Joint Relief",
    description: "Reduces pressure and swelling"
  },
  {
    icon: Book,
    title: "Lifestyle Comfort",
    description: "Perfect for reading and entertainment"
  },
  {
    icon: Battery,
    title: "Independent Control",
    description: "Adjust without assistance"
  },
  {
    icon: Coffee,
    title: "Tension Relief",
    description: "Massage features for relaxation"
  }
];

const LifestyleBenefits = () => {
  return (
    <div className="bg-white rounded-xl border border-lavender-300 p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-4">
        Lifestyle Benefits
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-accent-500/10 p-2 rounded-lg">
              <benefit.icon className="w-5 h-5 text-accent-500" />
            </div>
            <div>
              <h5 className="font-medium text-charcoal-500">{benefit.title}</h5>
              <p className="text-sm text-charcoal-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleBenefits;