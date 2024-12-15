import React from 'react';
import { Camera, Heart, Share2, Youtube, Instagram } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const socialContent = [
  {
    platform: 'Instagram',
    title: "When Your MRI Becomes a Dance Party",
    views: "10.2K",
    icon: Instagram,
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    link: "https://instagram.com/p/example1"
  },
  {
    platform: 'YouTube',
    title: "Hospital Room Stand-Up Special",
    views: "15.5K",
    icon: Youtube,
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80",
    link: "https://youtube.com/watch?v=example2"
  }
];

const RealZingers = () => {
  return (
    <section id="real-zingers" className="relative py-16 bg-[#E6E6FA] overflow-hidden">
      <ArtisticBackground variant="kahlo" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Camera}
            title="Real Zingers"
            subtitle="Life's plot twists captured in pixels and punchlines"
            variant="kahlo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialContent.map((content, index) => (
            <ArtisticFrame key={index} variant="kahlo" className="bg-white transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <content.icon className="w-4 h-4 text-[#DC143C] mr-1" />
                  <span className="text-sm text-[#4B0082]">{content.platform}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4B0082] mb-3">{content.title}</h3>
                  <div className="flex items-center justify-between text-sm text-[#36454F] mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 text-[#DC143C] mr-1" />
                        {content.views} views
                      </span>
                    </div>
                    <Button 
                      variant="secondary" 
                      icon={Share2}
                      onClick={() => window.open(content.link, '_blank')}
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </ArtisticFrame>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-[#36454F] text-lg">
            Follow along for more unfiltered moments and unexpected adventures
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="primary" icon={Instagram}>
              Follow on Instagram
            </Button>
            <Button variant="secondary" icon={Youtube}>
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealZingers;