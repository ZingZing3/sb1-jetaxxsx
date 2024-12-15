import React from 'react';
import { Palette, Star } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const activities = [
  {
    title: "MS Bingo",
    description: "Turn your symptoms into a game! First one to get 'brain fog' wins.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&q=80",
    rating: 4.8
  },
  {
    title: "Neuro Ninja Warrior",
    description: "Navigate daily obstacles with style. Points for creative solutions!",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80",
    rating: 4.9
  },
  {
    title: "MRI Music Festival",
    description: "Create your perfect playlist for that magnetic concert experience.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    rating: 4.7
  }
];

const FunZingers = () => {
  return (
    <section id="fun-zingers" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="miro" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Palette}
            title="Fun Zingers"
            subtitle="Where medical adventures become playful experiences"
            variant="miro"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ArtisticFrame key={index} variant="miro" className="bg-white">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#4B0082]">{activity.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-[#DC143C] mr-1" />
                      <span className="text-[#36454F]">{activity.rating}</span>
                    </div>
                  </div>
                  <p className="text-[#36454F] mb-6">{activity.description}</p>
                  <Button variant="secondary" className="w-full">
                    Join the Fun
                  </Button>
                </div>
              </div>
            </ArtisticFrame>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary">
            Submit Your Fun Zinger
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FunZingers;