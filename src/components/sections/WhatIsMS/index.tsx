import React from 'react';
import { Brain } from 'lucide-react';
import Section from '../../ui/Section';
import MSBasics from './MSBasics';
import MSTypes from './MSTypes';
import TreatmentOptions from './TreatmentOptions';

const WhatIsMS = () => {
  return (
    <Section
      id="what-is-ms"
      title="WTF MS?"
      subtitle="A no-nonsense guide to understanding Multiple Sclerosis"
      icon={Brain}
      variant="kahlo"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MSBasics />
        <MSTypes />
        <TreatmentOptions />
      </div>
    </Section>
  );
};

export default WhatIsMS;