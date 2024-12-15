import React from 'react';
import { Mic2 } from 'lucide-react';
import Section from '../../ui/Section';
import PodcastEpisodes from './PodcastEpisodes';
import NowPlaying from './NowPlaying';

const MSzingerSays = () => {
  return (
    <Section
      id="mszinger-says"
      title="MSzinger Says"
      subtitle="World Record Holder: Largest Game of Simon Says Ever Played! Now bringing that playful spirit to chronic illness conversations"
      icon={Mic2}
      variant="okeeffe"
      className="bg-lavender-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <PodcastEpisodes />
        <NowPlaying />
      </div>
    </Section>
  );
};

export default MSzingerSays;