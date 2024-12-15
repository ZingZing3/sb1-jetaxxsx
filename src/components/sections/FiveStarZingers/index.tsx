import React from 'react';
import { Gift } from 'lucide-react';
import Section from '../../ui/Section';
import AmazonStores from './AmazonStores';
import TempurPedicReview from './TempurPedicReview';
import AudiobookReview from './AudiobookReview';

const FiveStarZingers = () => {
  return (
    <Section
      id="five-star-zingers"
      title="5 Star Zingers"
      subtitle="Carefully curated recommendations for the extraordinary journey"
      icon={Gift}
      variant="kahlo"
      className="bg-lavender-300"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <AmazonStores />
        <TempurPedicReview />
        <AudiobookReview />
      </div>
    </Section>
  );
};

export default FiveStarZingers;