import React from 'react';
import { Mic2, Play, Volume2 } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';

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

const SayItZinger = () => {
  return (
    <section id="say-it-zinger" className="relative py-16 bg-[#E6E6FA] overflow-hidden">
      <ArtisticBackground variant="okeeffe" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Mic2}
            title="Say It Zinger"
            subtitle="Where medical adventures meet stand-up comedy"
            variant="okeeffe"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#4B0082] mb-6">Latest Episodes</h3>
            <div className="space-y-6">
              {episodes.map((episode, index) => (
                <div key={index} className="border-b border-[#E6E6FA] pb-6 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-[#36454F]">{episode.title}</h4>
                    <span className="text-[#DC143C]">{episode.duration}</span>
                  </div>
                  <p className="text-[#36454F] mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#36454F]">{episode.date}</span>
                    <Button variant="secondary" icon={Play}>Play Episode</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#4B0082]">Now Playing</h3>
              <Volume2 className="w-6 h-6 text-[#DC143C]" />
            </div>
            <div className="aspect-video bg-[#E6E6FA] rounded-xl mb-6">
              {/* Audio player visualization placeholder */}
              <div className="h-full flex items-center justify-center">
                <div className="space-x-2 flex items-end">
                  {[4, 6, 8, 4, 6, 3, 5, 7, 4, 6].map((height, i) => (
                    <div
                      key={i}
                      className="w-2 bg-[#4B0082] rounded-full animate-pulse"
                      style={{ height: `${height * 8}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Button variant="primary" className="w-full">
              Subscribe to Podcast
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SayItZinger;