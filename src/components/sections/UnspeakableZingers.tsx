import React from 'react';
import { Laugh } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';

const UnspeakableZingers = () => {
  return (
    <section id="unspeakable-zingers" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="miro" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Laugh}
            title="Unspeakable Zingers"
            subtitle="The stories too wild to tell... until now"
            variant="miro"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#E6E6FA] rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-[#4B0082] mb-4">The Hospital Runway Show</h3>
            <p className="text-[#36454F] mb-6">
              How I turned my hospital gown into haute couture and my IV pole into 
              the ultimate fashion accessory.
            </p>
            <Button variant="secondary">Coming Soon</Button>
          </div>

          <div className="bg-[#E6E6FA] rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-[#4B0082] mb-4">The MRI Mixtape</h3>
            <p className="text-[#36454F] mb-6">
              My greatest hits collection, featuring "Magnetic Attraction" and 
              "Scanner Love Song."
            </p>
            <Button variant="secondary">Coming Soon</Button>
          </div>

          <div className="bg-[#E6E6FA] rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-[#4B0082] mb-4">The Neurologist's Diary</h3>
            <p className="text-[#36454F] mb-6">
              What my neurologist really writes in those notes (as imagined by me 
              during those long waiting room sessions).
            </p>
            <Button variant="secondary">Coming Soon</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnspeakableZingers;