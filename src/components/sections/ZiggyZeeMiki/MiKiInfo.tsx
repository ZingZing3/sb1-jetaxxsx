import React from 'react';
import { Heart, PawPrint, Crown } from 'lucide-react';
import ArtisticFrame from '../../ui/ArtisticFrame';
import Button from '../../ui/Button';

const MiKiInfo = () => {
  return (
    <ArtisticFrame variant="okeeffe" className="bg-white p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary-500">What is a Mi-Ki?</h3>
          <div className="prose text-charcoal-500">
            <p>
              Mi-Kis are an extraordinary rare toy breed known for their gentle nature,
              intelligence, and adaptability. These small companions typically weigh
              between 4-10 pounds and stand 8-11 inches tall.
            </p>
            <ul className="space-y-3 list-none">
              <li className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-secondary-500" />
                <span>Gentle, loving temperament</span>
              </li>
              <li className="flex items-center space-x-2">
                <PawPrint className="w-5 h-5 text-secondary-500" />
                <span>Hypoallergenic coat</span>
              </li>
              <li className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-secondary-500" />
                <span>Perfect for service/therapy work</span>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="secondary"
              onClick={() => window.open('https://www.servicedogtraininginstitute.com', '_blank')}
            >
              Service Dog Training
            </Button>
            <Button 
              variant="primary"
              onClick={() => window.open('https://www.baxterandbella.com', '_blank')}
            >
              Training School
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/images/ziggy/holiday-2024.jpg"
            alt="ZiggyZee, a beautiful Mi-Ki dog"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-primary-500 font-bold">ZiggyZee the Miki</p>
            <p className="text-secondary-500">Professional Joy Spreader</p>
          </div>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default MiKiInfo;