import React from 'react';
import ArtisticFrame from '../../../ui/ArtisticFrame';
import { Headphones } from 'lucide-react';
import Button from '../../../ui/Button';

const AudiobookReview = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-primary-500">
            Audible: Rediscover the Magic of Books
          </h3>
          <Headphones className="w-8 h-8 text-secondary-500" />
        </div>

        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
          alt="Person enjoying audiobooks"
          className="w-full h-64 object-cover rounded-xl"
        />

        <p className="text-lg text-charcoal-500 leading-relaxed">
          Experience literature in a new dimension with Audible's vast collection of 
          audiobooks, bringing stories to life through exceptional narration and 
          performance.
        </p>

        {/* Call to Action */}
        <div className="flex justify-end space-x-4">
          <Button 
            variant="secondary"
            onClick={() => window.open('https://www.audible.ca/ep/freetrial', '_blank')}
          >
            Try Audible Canada
          </Button>
          <Button 
            variant="primary"
            onClick={() => window.open('https://www.audible.com/ep/freetrial', '_blank')}
          >
            Try Audible US
          </Button>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default AudiobookReview;