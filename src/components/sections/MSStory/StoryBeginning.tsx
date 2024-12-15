import React from 'react';
import ArtisticFrame from '../../ui/ArtisticFrame';

const StoryBeginning = () => {
  return (
    <ArtisticFrame variant="kahlo">
      <div className="space-y-6">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
          alt="Journey Beginning"
          className="rounded-2xl shadow-xl w-full h-64 object-cover"
        />
        <div className="p-6 bg-white rounded-xl">
          <h3 className="text-2xl font-bold text-primary-500 mb-4">The Beginning</h3>
          <p className="text-charcoal-500">
            From delivering legendary 3-hour dental chair monologues to broadcasting 
            stories in China, my journey with MS has been anything but ordinary. 
            It's a tale of turning medical plot twists into stand-up material.
          </p>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default StoryBeginning;