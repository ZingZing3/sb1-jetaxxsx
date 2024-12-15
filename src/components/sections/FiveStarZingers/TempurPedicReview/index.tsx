import React from 'react';
import ArtisticFrame from '../../../ui/ArtisticFrame';
import { Star } from 'lucide-react';
import Button from '../../../ui/Button';

const TempurPedicReview = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-primary-500">
            TEMPUR-Ergo Smart Base
          </h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-secondary-500" fill="currentColor" />
            <span className="ml-1 text-lg font-semibold">4.9/5</span>
          </div>
        </div>
        
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
          alt="TEMPUR-Ergo Smart Base"
          className="w-full h-64 object-cover rounded-xl"
        />

        <p className="text-lg text-charcoal-500 leading-relaxed">
          Transform your sleep experience with the ultimate in comfort and technology. 
          Perfect for managing chronic conditions, this smart adjustable base combines 
          therapeutic features with luxurious comfort.
        </p>

        {/* Personal Experience Section */}
        <div className="bg-accent-500/10 rounded-xl p-6">
          <p className="text-charcoal-500 leading-relaxed">
            As someone who has been using the previous model for over 8 years, 
            I can personally attest to its durability and life-changing benefits.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-end space-x-4">
          <Button variant="secondary">Learn More</Button>
          <Button variant="primary">Shop Now</Button>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default TempurPedicReview;