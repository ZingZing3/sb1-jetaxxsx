import React from 'react';
import { Gift } from 'lucide-react';
import Section from '../../ui/Section';
import ProductReview from './ProductReview';
import AudiobookReview from './ProductReview/AudiobookReview';
import AmazonStores from './AmazonStores';

const TheseAreZingers = () => {
  return (
    <Section
      id="these-are-zingers"
      title="5 Star Zingers"
      subtitle="Carefully curated recommendations for the extraordinary journey"
      icon={Gift}
      variant="kahlo"
      className="bg-lavender-300"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <AmazonStores />
        <ProductReview />
        <AudiobookReview />
      </div>
    </Section>
  );
};

export default TheseAreZingers;