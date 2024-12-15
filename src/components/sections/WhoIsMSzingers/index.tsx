import React from 'react';
import { Sparkles } from 'lucide-react';
import Section from '../../ui/Section';
import StoryContent from './StoryContent';
import StoryImage from './StoryImage';

const WhoIsMSzingers = () => {
  return (
    <Section
      id="who-is-mszingers"
      title="Who is MSzingers?"
      subtitle="Unfiltered storyteller, global adventurer, and professional tumbler through life"
      icon={Sparkles}
      variant="kahlo"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <StoryContent />
        <StoryImage />
      </div>
    </Section>
  );
};

export default WhoIsMSzingers;