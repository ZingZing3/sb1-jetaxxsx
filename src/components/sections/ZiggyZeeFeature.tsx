import React from 'react';
import { Heart, Star } from 'lucide-react';
import Button from '../ui/Button';

const ZiggyZeeFeature = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#4B0082] to-[#36454F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet ZiggyZee
            </h2>
            <p className="text-[#E6E6FA] text-lg mb-6">
              The four-legged star of our show who gets better healthcare than 
              their human. Coming soon: "Gone to the Dogs" - A hilarious look at 
              the healthcare system through ZiggyZee's eyes.
            </p>
            <div className="flex space-x-4">
              <Button icon={Heart} variant="secondary">
                Follow ZiggyZee
              </Button>
              <Button icon={Star}>
                Watch Teaser
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80"
              alt="ZiggyZee"
              className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-[#4B0082] font-bold">Coming Soon:</p>
              <p className="text-[#DC143C]">"Gone to the Dogs"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZiggyZeeFeature;