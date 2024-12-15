import React from 'react';
import { Coffee, Quote, Heart } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const stories = [
  {
    title: "The MRI Mixtape",
    excerpt: "How I turned my MRI sessions into a personal concert series, complete with interpretive neural dance moves.",
    quote: "The technician asked if I was okay. I said 'Just choreographing my brain waves!'",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&q=80"
  },
  {
    title: "The Great Hospital Escape",
    excerpt: "That time I tried to convince my neurologist that my balance issues were just interpretive dance.",
    quote: "Doctor: 'Can you walk in a straight line?' Me: 'Bold of you to assume I ever did.'",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
  }
];

const SpillingZingers = () => {
  return (
    <section id="spilling-zingers" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="kahlo" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Coffee}
            title="Spilling Zingers"
            subtitle="Telling my truth, one cup of tea at a time"
            variant="kahlo"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <ArtisticFrame key={index} variant="kahlo" className="bg-white transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Heart className="w-6 h-6 text-[#DC143C]" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">{story.title}</h3>
                  <p className="text-[#36454F] mb-6">{story.excerpt}</p>
                  <blockquote className="border-l-4 border-[#50C878] pl-4 mb-6">
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-[#50C878] mr-2 flex-shrink-0" />
                      <p className="italic text-[#36454F]">{story.quote}</p>
                    </div>
                  </blockquote>
                  <Button variant="secondary">Read Full Story</Button>
                </div>
              </div>
            </ArtisticFrame>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#36454F] text-lg mb-6">
            Ready to spill some tea of your own? Share your story with our community.
          </p>
          <Button variant="primary" icon={Coffee}>
            Share Your Zinger
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpillingZingers;