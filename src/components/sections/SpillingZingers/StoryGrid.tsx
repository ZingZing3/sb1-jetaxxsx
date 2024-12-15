import React from 'react';
import StoryCard from './StoryCard';
import SharePrompt from './SharePrompt';
import { stories } from './data';

const StoryGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
      <SharePrompt />
    </>
  );
};

export default StoryGrid;