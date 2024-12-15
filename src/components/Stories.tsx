import React from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';
import Button from './ui/Button';

const STORIES = [
  {
    title: "Dental Chair Chronicles: My 3-Hour Comedy Special",
    excerpt: "How turning medical appointments into standup comedy sessions became my signature move.",
    date: "March 15, 2024",
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    likes: 234
  },
  {
    title: "Lost in Tibet: When GPS Meets MS",
    excerpt: "Adventures in high-altitude navigation with an unreliable neurological compass.",
    date: "March 10, 2024",
    location: "Tibet",
    image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=800&q=80",
    likes: 189
  },
  {
    title: "The Art of Falling Gracefully",
    excerpt: "Life lessons learned from unexpected encounters with gravity.",
    date: "March 5, 2024",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&q=80",
    likes: 156
  }
];

const Stories = () => {
  return (
    <section className="py-16 bg-[#E6E6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4B0082]">
          Latest Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((story, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#36454F]">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {story.location}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#DC143C]">
                    <Heart className="w-5 h-5 mr-1" />
                    {story.likes}
                  </div>
                  <Button variant="secondary">Read More</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;