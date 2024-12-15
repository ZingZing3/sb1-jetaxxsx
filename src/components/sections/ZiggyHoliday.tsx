import React from 'react';
import { Gift, Heart } from 'lucide-react';
import Section from '../ui/Section';
import ProtectedImage from '../ui/ProtectedImage';

const ZiggyHoliday = () => {
  return (
    <Section
      id="ziggy-holiday"
      title="ZiggyZee's Holiday Cheer"
      subtitle="Spreading joy and warmth this holiday season"
      icon={Gift}
      variant="kahlo"
      className="bg-lavender-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <ProtectedImage
                src="/assets/images/ziggy/holiday-2024.jpg"
                alt="ZiggyZee wearing a festive red collar with white trim for Christmas"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                <Heart className="w-6 h-6 text-secondary-500" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-500">
                Happy Holidays from ZiggyZee!
              </h3>
              <p className="text-lg text-charcoal-500">
                Dressed in festive attire and ready to spread holiday cheer, 
                ZiggyZee reminds us that the best gifts come in small packages 
                - especially when they're wrapped in fur and unconditional love!
              </p>
              <div className="text-sm text-charcoal-400">
                📸 December 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ZiggyHoliday;