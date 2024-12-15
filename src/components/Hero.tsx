import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroHeading from './hero/HeroHeading';
import HeroTagline from './hero/HeroTagline';
import HeroActions from './hero/HeroActions';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center space-y-12">
          <HeroHeading />
          <HeroTagline />
          <HeroActions />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;