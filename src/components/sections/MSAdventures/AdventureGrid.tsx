import React from 'react';
import AdventureCard from './AdventureCard';
import { adventures } from './data';

const AdventureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {adventures.map((adventure, index) => (
        <AdventureCard key={index} {...adventure} />
      ))}
    </div>
  );
};

export default AdventureGrid;