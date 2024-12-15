import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import Button from '../ui/Button';

const SupportSection = () => {
  return (
    <section className="py-16 bg-[#E6E6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] mb-6">
                Support the Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Help keep the stories coming, the adventures rolling, and the 
                zingers zinging. Your support means more content, more laughs, 
                and more unfiltered adventures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#E6E6FA] p-6 rounded-xl">
                  <Coffee className="w-12 h-12 text-[#DC143C] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Buy Me a Coffee</h3>
                  <p className="text-gray-600 mb-4">
                    Support with a one-time donation
                  </p>
                  <Button variant="primary">
                    Send Coffee Love
                  </Button>
                </div>
                
                <div className="bg-[#E6E6FA] p-6 rounded-xl">
                  <Heart className="w-12 h-12 text-[#DC143C] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Monthly Support</h3>
                  <p className="text-gray-600 mb-4">
                    Become a regular supporter
                  </p>
                  <Button variant="secondary">
                    Join the Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;