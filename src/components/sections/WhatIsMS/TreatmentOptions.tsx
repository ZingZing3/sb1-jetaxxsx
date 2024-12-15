import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../ui/Card';

const TreatmentOptions = () => {
  return (
    <Card
      title="Treatment Landscape"
      description="From conventional medications to complementary therapies, the MS treatment world is vast and ever-evolving. No cure yet, but we've got options – lots of them."
      variant="kahlo"
    >
      <a 
        href="https://www.nationalmssociety.org/Treating-MS" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-secondary-500 hover:text-primary-500 transition-colors"
      >
        View treatments <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </Card>
  );
};

export default TreatmentOptions;