import React from 'react';
import { BookOpen } from 'lucide-react';

const PersonalJourney = () => {
  return (
    <div className="bg-lavender-300/10 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="w-6 h-6 text-accent-500" />
        <h4 className="text-xl font-semibold text-primary-500">
          From Page to Audio
        </h4>
      </div>
      <p className="text-charcoal-500 leading-relaxed">
        When eyesight challenges made traditional reading difficult, I discovered 
        that audiobooks offered their own unique magic. The transition from physical 
        books to audio opened up new ways to experience and appreciate literature.
      </p>
    </div>
  );
};

export default PersonalJourney;