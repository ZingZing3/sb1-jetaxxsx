import React from 'react';
import { Play } from 'lucide-react';
import Button from '../../ui/Button';

const episodes = [
  {
    title: "Episode 1: The Diagnosis Comedy Hour",
    duration: "45:00",
    description: "When life gives you an MRI, make it a party.",
    date: "March 15, 2024"
  },
  {
    title: "Episode 2: Adventures in Medical Tourism",
    duration: "38:00",
    description: "From Tibet to Timbuktu: A patient's guide to global healthcare.",
    date: "March 22, 2024"
  }
];

const PodcastEpisodes = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-primary-500 mb-6">Latest Episodes</h3>
      <div className="space-y-6">
        {episodes.map((episode, index) => (
          <div key={index} className="border-b border-lavender-300 pb-6 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xl font-bold text-charcoal-500">{episode.title}</h4>
              <span className="text-secondary-500">{episode.duration}</span>
            </div>
            <p className="text-charcoal-500 mb-4">{episode.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-500">{episode.date}</span>
              <Button variant="secondary" icon={Play}>Play Episode</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastEpisodes;