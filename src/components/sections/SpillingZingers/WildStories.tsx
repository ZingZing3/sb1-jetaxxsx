import React from 'react';
import { Laugh } from 'lucide-react';
import Button from '../../ui/Button';
import ArtisticFrame from '../../ui/ArtisticFrame';

const wildStories = [
  {
    title: "The Hospital Runway Show",
    description: "How I turned my hospital gown into haute couture and my IV pole into the ultimate fashion accessory.",
    status: "Coming Soon"
  },
  {
    title: "The MRI Mixtape",
    description: "My greatest hits collection, featuring 'Magnetic Attraction' and 'Scanner Love Song.'",
    status: "Coming Soon"
  },
  {
    title: "The Neurologist's Diary",
    description: "What my neurologist really writes in those notes (as imagined by me during those long waiting room sessions).",
    status: "Coming Soon"
  }
];

const WildStories = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Laugh className="w-6 h-6 text-secondary-500" />
        <h3 className="text-2xl font-bold text-primary-500">Wild Adventures</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {wildStories.map((story, index) => (
          <ArtisticFrame key={index} variant="miro" className="bg-white">
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">{story.title}</h3>
              <p className="text-charcoal-500 mb-6">{story.description}</p>
              <Button variant="secondary">Coming Soon</Button>
            </div>
          </ArtisticFrame>
        ))}
      </div>
    </div>
  );
};

export default WildStories;