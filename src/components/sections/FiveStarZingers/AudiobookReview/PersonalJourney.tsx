import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

const PersonalJourney = () => {
  return (
    <div className="bg-accent-500/10 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="w-6 h-6 text-accent-500" />
        <h4 className="text-xl font-semibold text-primary-500">
          My Journey from Page to Audio
        </h4>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4">
          <p className="text-charcoal-500 leading-relaxed">
            As a voracious reader who cherished the physical experience of books - 
            their smell, texture, and the satisfying feel of turning pages - adapting 
            to audiobooks was a journey of discovery. When eyesight challenges made 
            traditional reading difficult, I found a new kind of magic in the 
            spoken word.
          </p>
          <div className="mt-4 p-4 bg-lavender-300/20 rounded-lg">
            <p className="text-charcoal-500 italic">
              "While I still love the 3D experience of physical books, audiobooks 
              have opened up new dimensions in storytelling. Hearing James Joyce's 
              'Ulysses' performed brought the text to life in ways I never 
              imagined possible."
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Heart className="w-5 h-5 text-secondary-500" />
          <span className="text-charcoal-500 italic">
            "Discovering that audio versions had their own unique magic"
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalJourney;