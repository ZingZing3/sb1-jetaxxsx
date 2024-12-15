import React from 'react';
import { Map, Plane } from 'lucide-react';

const destinations = [
  {
    city: "Dublin, Ireland",
    description: "Walked the streets of Ulysses, visited key Joyce locations",
    visits: "Two summers"
  },
  {
    city: "Trieste, Italy",
    description: "Explored Joyce's teaching years and early writing period",
    visits: "Summer adventure"
  }
];

const TravelExperience = () => {
  return (
    <div className="bg-lavender-300/10 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Plane className="w-6 h-6 text-secondary-500" />
        <h5 className="text-lg font-semibold text-primary-500">
          Literary Travels
        </h5>
      </div>

      <div className="space-y-4">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Map className="w-5 h-5 text-accent-500 mt-1" />
              <div>
                <h6 className="font-medium text-charcoal-500">
                  {destination.city}
                </h6>
                <p className="text-sm text-charcoal-400 mt-1">
                  {destination.description}
                </p>
                <p className="text-sm text-accent-500 mt-2 italic">
                  {destination.visits}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelExperience;