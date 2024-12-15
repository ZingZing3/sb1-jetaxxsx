import React from 'react';
import { Heart, Camera, Instagram } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const adventures = [
  {
    title: "The Vet Visit Chronicles",
    description: "When your dog's healthcare plan is better than yours...",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    likes: 1234
  },
  {
    title: "Therapy Dog or Comedy Assistant?",
    description: "ZiggyZee's guide to stealing the show during virtual doctor appointments.",
    image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=800&q=80",
    likes: 982
  },
  {
    title: "Adventures in Dog Park Medicine",
    description: "Life lessons from a four-legged healthcare expert.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&q=80",
    likes: 876
  }
];

const ZiggyZinger = () => {
  return (
    <section id="ziggy-zinger" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="okeeffe" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Heart}
            title="Ziggy Zinger"
            subtitle="Adventures with my four-legged healthcare consultant"
            variant="okeeffe"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#4B0082]">Meet ZiggyZee</h3>
            <p className="text-lg text-[#36454F]">
              Professional treat tester, part-time therapist, and full-time 
              reminder that sometimes the best medicine is a wagging tail and 
              unconditional love.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" icon={Instagram}>
                Follow ZiggyZee
              </Button>
              <Button variant="primary" icon={Camera}>
                Latest Adventures
              </Button>
            </div>
          </div>
          <ArtisticFrame variant="okeeffe">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80"
              alt="ZiggyZee"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </ArtisticFrame>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <ArtisticFrame key={index} variant="okeeffe" className="bg-white">
              <div className="relative">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4B0082] mb-2">
                    {adventure.title}
                  </h3>
                  <p className="text-[#36454F] mb-4">{adventure.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#DC143C]">
                      <Heart className="w-5 h-5 mr-1" />
                      <span>{adventure.likes}</span>
                    </div>
                    <Button variant="secondary">Read More</Button>
                  </div>
                </div>
              </div>
            </ArtisticFrame>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZiggyZinger;