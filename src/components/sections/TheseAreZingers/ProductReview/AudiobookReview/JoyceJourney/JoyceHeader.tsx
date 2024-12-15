import React from 'react';
import { BookOpen } from 'lucide-react';

const JoyceHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <BookOpen className="w-6 h-6 text-accent-500" />
        <h4 className="text-xl font-semibold text-primary-500">
          Down the Joycean Rabbit Hole
        </h4>
      </div>
      <p className="text-charcoal-500 leading-relaxed">
        What started as an audiobook experience of Ulysses turned into a 
        transformative journey through Joyce's Dublin and Trieste, connecting with 
        fellow enthusiasts and scholars worldwide.
      </p>
    </div>
  );
};

export default JoyceHeader;