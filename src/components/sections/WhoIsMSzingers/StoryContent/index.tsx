import React from 'react';
import ArtisticFrame from '../../../ui/ArtisticFrame';
import StoryParagraphs from './StoryParagraphs';
import StoryActions from './StoryActions';

const StoryContent = () => {
  return (
    <ArtisticFrame variant="kahlo">
      <div className="space-y-6 p-8 bg-white rounded-xl">
        <StoryParagraphs />
        <StoryActions />
      </div>
    </ArtisticFrame>
  );
};

export default StoryContent;