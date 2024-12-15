import React from 'react';
import ArtisticFrame from '../../ui/ArtisticFrame';

const StoryHumor = () => {
  return (
    <ArtisticFrame variant="kahlo">
      <div className="space-y-6">
        <img
          src="https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?w=800&q=80"
          alt="Finding Humor"
          className="rounded-2xl shadow-xl w-full h-64 object-cover"
        />
        <div className="p-6 bg-white rounded-xl">
          <h3 className="text-2xl font-bold text-primary-500 mb-4">Finding the Humor</h3>
          <p className="text-charcoal-500">
            Here at MSzingers, we don't "battle" MS – we dance with unpredictability, 
            ride life's wild neurological waves, and transform challenges into art. 
            Because sometimes the best stories come from the moments when plans fall apart.
          </p>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default StoryHumor;