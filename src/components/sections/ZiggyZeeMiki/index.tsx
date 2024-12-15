import React from 'react';
import { Heart } from 'lucide-react';
import Section from '../../ui/Section';
import MiKiInfo from './MiKiInfo';
import ZiggyProducts from './ZiggyProducts';
import ZiggyStores from './ZiggyStores';

const ZiggyZeeMiki = () => {
  return (
    <Section
      id="ziggyzee-miki"
      title="ZiggyZee the Miki"
      subtitle="Meet my Mi-Ki companion - where tiny paws make the biggest impact"
      icon={Heart}
      variant="okeeffe"
      className="bg-white"
    >
      <div className="space-y-12">
        <MiKiInfo />
        <ZiggyProducts />
        <ZiggyStores />
      </div>
    </Section>
  );
};

export default ZiggyZeeMiki;