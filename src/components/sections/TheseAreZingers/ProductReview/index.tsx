import React from 'react';
import ProductHeader from './ProductHeader';
import PersonalExperience from './PersonalExperience';
import FeaturesList from './FeaturesList';
import ComfortSpecs from './ComfortSpecs';
import LifestyleBenefits from './LifestyleBenefits';
import RecommendedAccessories from './RecommendedAccessories';
import PracticalInfo from './PracticalInfo';
import PurchaseSection from './PurchaseSection';
import ArtisticFrame from '../../../ui/ArtisticFrame';

const ProductReview = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8">
      <div className="space-y-8">
        <ProductHeader />
        <PersonalExperience />
        <FeaturesList />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ComfortSpecs />
          <LifestyleBenefits />
        </div>
        <RecommendedAccessories />
        <PracticalInfo />
        <PurchaseSection />
      </div>
    </ArtisticFrame>
  );
};

export default ProductReview;