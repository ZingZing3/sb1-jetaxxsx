import React from 'react';
import { BookHeart } from 'lucide-react';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const MSStory = () => {
  return (
    <section id="ms-story" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="kahlo" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={BookHeart}
            title="MSzinger's Story"
            subtitle="A journey of unexpected plot twists and cosmic humor"
            variant="kahlo"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ArtisticFrame variant="kahlo">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
                alt="Journey Beginning"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <div className="p-6 bg-white rounded-xl">
                <h3 className="text-2xl font-bold text-[#4B0082] mb-4">The Beginning</h3>
                <p className="text-[#36454F]">
                  From delivering legendary 3-hour dental chair monologues to broadcasting 
                  stories in China, my journey with MS has been anything but ordinary. 
                  It's a tale of turning medical plot twists into stand-up material.
                </p>
              </div>
            </div>
          </ArtisticFrame>

          <ArtisticFrame variant="kahlo">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?w=800&q=80"
                alt="Finding Humor"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <div className="p-6 bg-white rounded-xl">
                <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Finding the Humor</h3>
                <p className="text-[#36454F]">
                  Here at MSzingers, we don't "battle" MS – we dance with unpredictability, 
                  ride life's wild neurological waves, and transform challenges into art. 
                  Because sometimes the best stories come from the moments when plans fall apart.
                </p>
              </div>
            </div>
          </ArtisticFrame>
        </div>
      </div>
    </section>
  );
};

export default MSStory;