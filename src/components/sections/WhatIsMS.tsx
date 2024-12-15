import React from 'react';
import { Brain, ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Grid from '../ui/Grid';

const WhatIsMS = () => {
  return (
    <Section
      id="what-is-ms"
      title="What the F is MS?"
      subtitle="A no-nonsense guide to understanding Multiple Sclerosis"
      icon={Brain}
      variant="kahlo"
      className="bg-white"
    >
      <Grid columns={3} gap={8}>
        <Card
          title="The Basics"
          description="Multiple Sclerosis (MS) is a condition where your immune system gets a bit too enthusiastic and starts attacking your central nervous system. Think of it as your body's way of playing an unwanted game of electrical interference."
          variant="kahlo"
        >
          <a 
            href="https://mssociety.ca/about-ms/what-is-ms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#DC143C] hover:text-[#4B0082] transition-colors"
          >
            Learn more <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </Card>

        <Card
          title="Types of MS"
          description="MS comes in different forms, each with its own characteristics:"
          variant="kahlo"
        >
          <ul className="space-y-3 text-[#36454F] mb-4">
            <li>• Relapsing-Remitting (RRMS)</li>
            <li>• Secondary Progressive (SPMS)</li>
            <li>• Primary Progressive (PPMS)</li>
            <li>• Progressive Relapsing (PRMS)</li>
          </ul>
          <a 
            href="https://www.nationalmssociety.org/What-is-MS/Types-of-MS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#DC143C] hover:text-[#4B0082] transition-colors"
          >
            Explore types <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </Card>

        <Card
          title="Treatment Landscape"
          description="From conventional medications to complementary therapies, the MS treatment world is vast and ever-evolving. No cure yet, but we've got options – lots of them."
          variant="kahlo"
        >
          <a 
            href="https://www.nationalmssociety.org/Treating-MS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#DC143C] hover:text-[#4B0082] transition-colors"
          >
            View treatments <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </Card>
      </Grid>
    </Section>
  );
};

export default WhatIsMS;