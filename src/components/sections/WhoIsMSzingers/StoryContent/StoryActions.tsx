import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../../../ui/Button';

const StoryActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Button 
        variant="primary" 
        icon={Sparkles}
        aria-label="Read my stories about living with MS"
      >
        Read My Stories
      </Button>
    </div>
  );
};

export default StoryActions;