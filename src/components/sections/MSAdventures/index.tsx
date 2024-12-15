import React from 'react';
import { Compass } from 'lucide-react';
import Section from '../../ui/Section';
import AdventureGrid from './AdventureGrid';

const MSAdventures = () => {
  return (
    <Section
      id="ms-adventures"
      title="MS Adventures"
      subtitle="Global expeditions in search of healing, humor, and unexpected plot twists"
      icon={Compass}
      variant="kahlo"
      className="bg-white"
    >
      <AdventureGrid />
    </Section>
  );
};

export default MSAdventures;