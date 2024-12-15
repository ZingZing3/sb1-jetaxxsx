import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const WhoIsMSzingers = () => {
  return (
    <section id="who-is-mszingers" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="kahlo" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Sparkles}
            title="Who is MSzingers?"
            subtitle="Unfiltered storyteller, global adventurer, and professional tumbler through life"
            variant="kahlo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ArtisticFrame variant="kahlo">
            <div className="space-y-6 p-8 bg-white rounded-xl">
              <p className="text-lg text-[#36454F]">
                From delivering legendary 3-hour dental chair monologues to broadcasting 
                stories in China, I've made it my mission to find humor in the most 
                unlikely places. With a background in theatre, intercultural communication, 
                and a detour through Traditional Chinese Medicine college, I bring a unique 
                perspective to every story I tell.
              </p>
              <p className="text-lg text-[#36454F]">
                Here at MSzingers, we don't "battle" MS – we dance with unpredictability, 
                ride life's wild neurological waves, and transform challenges into art. 
                Because sometimes the best stories come from the moments when plans fall apart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" icon={Sparkles}>
                  Read My Stories
                </Button>
              </div>
            </div>
          </ArtisticFrame>

          <ArtisticFrame variant="kahlo">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80"
                alt="Global Storyteller"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-[#4B0082] font-bold">Professional Tumbler</p>
                <p className="text-[#DC143C]">Global Storyteller</p>
              </div>
            </div>
          </ArtisticFrame>
        </div>
      </div>
    </section>
  );
};

export default WhoIsMSzingers;