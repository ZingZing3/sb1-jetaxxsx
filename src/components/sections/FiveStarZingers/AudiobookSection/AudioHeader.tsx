import React from 'react';

const AudioHeader = () => {
  return (
    <div className="space-y-4">
      <p className="text-lg text-charcoal-500 leading-relaxed">
        From being a voracious reader to discovering the magic of audiobooks, 
        my journey with Audible has opened new dimensions in experiencing literature.
      </p>
      <img
        src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
        alt="Person enjoying audiobooks"
        className="w-full h-64 object-cover rounded-xl"
      />
    </div>
  );
};

export default AudioHeader;