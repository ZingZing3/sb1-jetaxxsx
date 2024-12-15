import React from 'react';
import { Gift, Star, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const recommendations = [
  {
    title: "The Ultimate Spoonie Survival Kit",
    category: "Wellness",
    description: "Curated essentials for navigating life's plot twists with style and comfort.",
    price: 49.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
  },
  {
    title: "Brain Fog Be Gone Journal",
    category: "Mental Wellness",
    description: "A humor-infused journal designed for those days when your neurons are playing hide and seek.",
    price: 24.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80"
  },
  {
    title: "Adventure Ready Travel Pack",
    category: "Travel",
    description: "Everything you need for spontaneous adventures (medical surprises included).",
    price: 79.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80"
  }
];

const TheseAreZingers = () => {
  return (
    <section id="these-are-zingers" className="relative py-16 bg-[#E6E6FA] overflow-hidden">
      <ArtisticBackground variant="miro" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Gift}
            title="These Are Zingers"
            subtitle="Carefully curated recommendations for the extraordinary journey"
            variant="miro"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((item, index) => (
            <ArtisticFrame key={index} variant="miro" className="bg-white">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-sm text-[#4B0082]">{item.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#4B0082]">{item.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-[#DC143C] mr-1" />
                      <span className="text-[#36454F]">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-[#36454F] mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#DC143C]">
                      ${item.price}
                    </span>
                    <Button variant="secondary" icon={ShoppingBag}>
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </ArtisticFrame>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#36454F] text-lg mb-6">
            All recommendations are personally tested and approved. Some links may be affiliate links.
          </p>
          <Button variant="primary">
            View All Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TheseAreZingers;