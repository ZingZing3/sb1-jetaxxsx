import React from 'react';
import ArtisticFrame from '../../../ui/ArtisticFrame';
import ImageOverlay from './ImageOverlay';

const StoryImage = () => {
  return (
    <ArtisticFrame variant="kahlo">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
          alt="MSzingers speaking at an event, sharing stories about living with MS"
          className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
        />
        <ImageOverlay />
      </div>
    </ArtisticFrame>
  );
};

export default StoryImage;