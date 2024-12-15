import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../ui/Card';

const MSTypes = () => {
  return (
    <Card
      title="Types of MS"
      description="MS comes in different forms, each with its own characteristics:"
      variant="kahlo"
    >
      <ul className="space-y-3 text-charcoal-500 mb-4">
        <li>• Relapsing-Remitting (RRMS)</li>
        <li>• Secondary Progressive (SPMS)</li>
        <li>• Primary Progressive (PPMS)</li>
        <li>• Progressive Relapsing (PRMS)</li>
      </ul>
      <a 
        href="https://www.nationalmssociety.org/What-is-MS/Types-of-MS" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-secondary-500 hover:text-primary-500 transition-colors"
      >
        Explore types <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </Card>
  );
};

export default MSTypes;