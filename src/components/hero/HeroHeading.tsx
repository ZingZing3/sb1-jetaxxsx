import React from 'react';
import { HeroTextAnimation } from './animations/HeroTextAnimation';
import { LemonAnimation } from './animations/LemonAnimation';

const HeroHeading = () => {
  return (
    <div className="space-y-8">
      <HeroTextAnimation>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
          When Life Gives You
          <br />
          <LemonAnimation>
            Lemon Zingers
          </LemonAnimation>
        </h1>
      </HeroTextAnimation>
      
      <HeroTextAnimation delay={0.3}>
        <p className="text-3xl md:text-4xl text-lavender-300 font-medium tracking-wide">
          Spill the Tea on <span className="text-accent-500 font-light">MS</span>
        </p>
      </HeroTextAnimation>
    </div>
  );
};

export default HeroHeading;