import React from 'react';
import ArtisticFrame from '../../ui/ArtisticFrame';

const StoryImage = () => {
  return (
    <ArtisticFrame variant="kahlo">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
          alt="Global Storyteller"
          className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
        />
        <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
          <p className="text-primary-500 font-bold">Professional Tumbler</p>
          <p className="text-secondary-500">Speaker & Advocate</p>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default StoryImage;