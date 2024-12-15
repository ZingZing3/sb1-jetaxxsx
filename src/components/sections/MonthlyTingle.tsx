import React from 'react';
import { Zap, Calendar, Heart } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const MonthlyTingle = () => {
  return (
    <section id="monthly-tingle" className="relative py-16 bg-white overflow-hidden">
      <ArtisticBackground variant="okeeffe" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Zap}
            title="The Monthly Tingle"
            subtitle="Monthly stories, lessons learned, and unexpected adventures"
            variant="okeeffe"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ArtisticFrame variant="okeeffe" className="bg-white">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <Calendar className="w-8 h-8 text-[#DC143C]" />
                <span className="text-[#36454F]">March 2024</span>
              </div>
              <h3 className="text-2xl font-bold text-[#4B0082] mb-4">
                This Month's Adventure: The Great Hospital Escape
              </h3>
              <p className="text-[#36454F] mb-6">
                What happened when I decided to turn my hospital stay into an 
                impromptu comedy tour, complete with wheelchair choreography and 
                IV pole percussion.
              </p>
              <div className="flex items-center text-[#DC143C] mb-6">
                <Heart className="w-5 h-5 mr-2" />
                <span>256 people loved this story</span>
              </div>
              <Button variant="secondary">Read Full Story</Button>
            </div>
          </ArtisticFrame>

          <div className="space-y-8">
            <div className="bg-[#E6E6FA] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#4B0082] mb-4">
                What I Learned This Month
              </h3>
              <ul className="space-y-4 text-[#36454F]">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#DC143C] mr-2 mt-1" />
                  Hospital gowns can be fashion statements if you wear them with enough confidence
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#DC143C] mr-2 mt-1" />
                  Nurses appreciate stand-up comedy, especially during midnight vitals checks
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#DC143C] mr-2 mt-1" />
                  Sometimes the best medicine is making others laugh
                </li>
              </ul>
            </div>

            <div className="bg-[#E6E6FA] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#4B0082] mb-4">
                Next Month's Preview
              </h3>
              <p className="text-[#36454F] mb-6">
                Get ready for "The MRI Symphony" - a tale of turning medical 
                machinery into music, featuring special guest appearances by my 
                neurologist's eye rolls.
              </p>
              <Button variant="primary">Subscribe for Updates</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyTingle;