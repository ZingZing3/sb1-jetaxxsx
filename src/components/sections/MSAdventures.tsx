import React from 'react';
import { Compass, MapPin, Heart } from 'lucide-react';
import Button from '../ui/Button';

const adventures = [
  {
    title: "The Tibet Chronicles",
    location: "Tibet",
    description: "Where high altitude met high comedy: navigating ancient temples with a questionable sense of balance.",
    image: "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=800&q=80"
  },
  {
    title: "Acupuncture Adventures",
    location: "Traditional Chinese Medicine College",
    description: "That time I decided to become a human pincushion in the name of healing.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
  },
  {
    title: "The Great Wellness Expedition",
    location: "Global",
    description: "From yoga in India to meditation in Japan - my quest for the ultimate healing cocktail.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
  }
];

const MSAdventures = () => {
  return (
    <section id="ms-adventures" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-[#E6E6FA] rounded-full mb-4">
            <Compass className="w-8 h-8 text-[#4B0082]" />
          </div>
          <h2 className="text-4xl font-bold text-[#4B0082] mb-4">MS Adventures</h2>
          <p className="text-xl text-[#36454F] max-w-3xl mx-auto">
            Global expeditions in search of healing, humor, and unexpected plot twists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <div key={index} className="bg-[#E6E6FA] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <MapPin className="w-4 h-4 text-[#DC143C] mr-1" />
                  <span className="text-sm text-[#4B0082]">{adventure.location}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4B0082] mb-3">{adventure.title}</h3>
                  <p className="text-[#36454F] mb-6">{adventure.description}</p>
                  <div className="flex items-center justify-between">
                    <Button variant="secondary" icon={Heart}>
                      Love this
                    </Button>
                    <Button variant="primary">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSAdventures;