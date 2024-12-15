import React from 'react';
import { MapPin, Heart } from 'lucide-react';
import Button from '../../ui/Button';
import { Adventure } from './types';

const AdventureCard: React.FC<Adventure> = ({
  title,
  location,
  description,
  image
}) => {
  return (
    <div className="bg-lavender-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
          <MapPin className="w-4 h-4 text-secondary-500 mr-1" />
          <span className="text-sm text-primary-500">{location}</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary-500 mb-3">{title}</h3>
          <p className="text-charcoal-500 mb-6">{description}</p>
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
  );
};

export default AdventureCard;