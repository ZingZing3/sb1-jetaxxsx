import React from 'react';
import SkipLink from './SkipLink';
import { AccessibilityStyles } from './AccessibilityStyles';

const AccessibilityFeatures = () => {
  return (
    <>
      <SkipLink />
      
      {/* ARIA Live Regions */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        id="notifications"
      />
      
      <AccessibilityStyles />
    </>
  );
};

export default AccessibilityFeatures;