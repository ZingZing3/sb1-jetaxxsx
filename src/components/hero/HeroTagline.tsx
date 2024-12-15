import React from 'react';
import { Sparkles, Brain } from 'lucide-react';

const HeroTagline = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 text-[#E6E6FA]">
        {['Unfiltered', 'Unexpected', 'Unstoppable'].map((word, index) => (
          <span
            key={word}
            className={`text-2xl md:text-3xl font-light tracking-wide animate-fade-in-${index + 1}`}
          >
            {word}.
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4 text-[#50C878] animate-fade-in-4">
        <Sparkles className="w-7 h-7" />
        <span className="text-2xl font-medium tracking-wide">Global Storyteller</span>
        <Brain className="w-7 h-7" />
      </div>
    </div>
  );
};

export default HeroTagline;