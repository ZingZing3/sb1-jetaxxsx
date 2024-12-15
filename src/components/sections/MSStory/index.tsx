import React from 'react';
import { BookHeart } from 'lucide-react';
import Section from '../../ui/Section';
import StoryBeginning from './StoryBeginning';
import StoryHumor from './StoryHumor';

const MSStory = () => {
  return (
    <Section
      id="ms-story"
      title="MSzinger's Story"
      subtitle="A journey of unexpected plot twists and cosmic humor"
      icon={BookHeart}
      variant="kahlo"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <StoryBeginning />
        <StoryHumor />
      </div>
    </Section>
  );
};

export default MSStory;