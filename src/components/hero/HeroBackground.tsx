import React from 'react';
import ArtisticOverlay from '../artwork/ArtisticOverlay';

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-charcoal-500 to-primary-500">
        <ArtisticOverlay opacity={0.15} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lavender-300 to-transparent" />
    </>
  );
};

export default HeroBackground;