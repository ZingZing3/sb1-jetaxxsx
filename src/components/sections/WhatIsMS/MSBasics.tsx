import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../ui/Card';

const MSBasics = () => {
  return (
    <Card
      title="The Basics"
      description="Multiple Sclerosis (MS) is a condition where your immune system gets a bit too enthusiastic and starts attacking your central nervous system. Think of it as your body's way of playing an unwanted game of electrical interference."
      variant="kahlo"
    >
      <a 
        href="https://mssociety.ca/about-ms/what-is-ms" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-secondary-500 hover:text-primary-500 transition-colors"
      >
        Learn more <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </Card>
  );
};

export default MSBasics;