import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

const ScrollIndicator = () => {
  const scrollToElement = useScrollTo();

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <button
        onClick={() => scrollToElement('who-is-mszingers')}
        className="text-lavender-300 hover:text-accent-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </div>
  );
};

export default ScrollIndicator;