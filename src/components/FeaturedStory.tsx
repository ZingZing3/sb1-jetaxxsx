import React from 'react';
import { Quote } from 'lucide-react';

const FeaturedStory = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#4B0082] to-[#36454F] p-8 md:p-12">
          <div className="relative z-10">
            <Quote className="w-12 h-12 text-[#50C878] mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              MS Adventures: Traveling the World with a Bomb in My Backpack
            </h2>
            
            <p className="text-[#E6E6FA] text-lg md:text-xl mb-8">
              From Tibet to Timbuktu, join me on an unexpected journey where 
              neurological surprises meet cultural adventures. Because sometimes 
              the best stories come from the moments when plans fall apart.
            </p>
            
            <button className="bg-[#DC143C] hover:bg-[#36454F] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
              Read the Full Story
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <div className="absolute w-full h-full rounded-full bg-[#50C878] transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;