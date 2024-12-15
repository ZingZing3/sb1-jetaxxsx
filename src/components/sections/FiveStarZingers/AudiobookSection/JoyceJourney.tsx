import React from 'react';
import { MapPin } from 'lucide-react';

const JoyceJourney = () => {
  return (
    <div className="bg-lavender-300/10 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-4">
        The Joyce Journey
      </h4>
      <div className="space-y-4">
        <p className="text-charcoal-500">
          Listening to Ulysses led to an incredible journey through Joyce's world, 
          including visits to Dublin and Trieste, and participation in the James 
          Joyce Center's courses with Carolyn Elbay.
        </p>
        <div className="flex items-center space-x-2 text-accent-500">
          <MapPin className="w-5 h-5" />
          <span>Dublin, Ireland • Trieste, Italy</span>
        </div>
      </div>
    </div>
  );
};

export default JoyceJourney;