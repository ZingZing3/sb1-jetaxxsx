import React from 'react';
import TempurPedicReview from './TempurPedicReview';
import AudiobookReview from './AudiobookReview';
import ArtisticFrame from '../../../ui/ArtisticFrame';

const ProductReviews = () => {
  return (
    <div className="space-y-12">
      <TempurPedicReview />
      <AudiobookReview />
    </div>
  );
};

export default ProductReviews;