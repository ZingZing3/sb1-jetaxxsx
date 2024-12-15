import React from 'react';
import Button from '../ui/Button';
import { useScrollTo } from '../../hooks/useScrollTo';

const HeroActions = () => {
  const scrollToElement = useScrollTo();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
      <Button 
        variant="primary"
        className="w-full sm:w-auto text-lg group transform hover:scale-105 transition-all duration-300"
        onClick={() => scrollToElement('who-is-mszingers')}
      >
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          Meet MSzingers
        </span>
      </Button>
      <Button 
        variant="secondary"
        className="w-full sm:w-auto text-lg group transform hover:scale-105 transition-all duration-300"
        onClick={() => scrollToElement('what-is-ms')}
      >
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          What is MS?
        </span>
      </Button>
    </div>
  );
};

export default HeroActions;