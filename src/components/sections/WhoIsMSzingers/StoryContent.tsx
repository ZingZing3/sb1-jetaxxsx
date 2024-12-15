import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../../ui/Button';
import ArtisticFrame from '../../ui/ArtisticFrame';

const StoryContent = () => {
  return (
    <ArtisticFrame variant="kahlo">
      <div className="space-y-6 p-8 bg-white rounded-xl">
        <p className="text-lg text-charcoal-500 leading-relaxed">
          Picture this: One moment I'm planning my "perfect" life, the next I'm starring 
          in my own medical dramedy where my immune system decided to spice things up by 
          attacking my central nervous system. Plot twist – it happened right after marrying 
          the "wrong person." Talk about your body sending you signals!
        </p>
        <p className="text-lg text-charcoal-500 leading-relaxed">
          But here's where it gets interesting. Armed with a background in theatre (which, 
          turns out, is excellent preparation for falling gracefully), intercultural 
          communication, and a wild detour through Traditional Chinese Medicine college, 
          I've turned my MS journey into a global stage for storytelling and advocacy.
        </p>
        <p className="text-lg text-charcoal-500 leading-relaxed">
          From delivering legendary 3-hour dental chair monologues to becoming a TEDx speaker 
          sharing "Gone to the Dogs" (a hilarious look at healthcare through my dog's eyes), 
          I've mastered the art of finding humor in the most unlikely places. My official 
          title? Professional Tumbler – because sometimes you have to own your stumbles 
          with style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="primary" icon={Sparkles}>
            Read My Stories
          </Button>
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default StoryContent;