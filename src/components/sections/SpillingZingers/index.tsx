import React from 'react';
import { Coffee } from 'lucide-react';
import Section from '../../ui/Section';
import StoryGrid from './StoryGrid';
import WildStories from './WildStories';

const SpillingZingers = () => {
  return (
    <Section
      id="spilling-zingers"
      title="Spilling Zingers"
      subtitle="Telling my truth, one cup of tea at a time - from heartfelt moments to wild adventures"
      icon={Coffee}
      variant="kahlo"
      className="bg-white"
    >
      <div className="space-y-12">
        <StoryGrid />
        <WildStories />
      </div>
    </Section>
  );
};

export default SpillingZingers;