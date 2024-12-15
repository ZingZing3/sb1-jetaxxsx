import React from 'react';
import { Headphones } from 'lucide-react';
import ArtisticFrame from '../../../ui/ArtisticFrame';
import AudioHeader from './AudioHeader';
import PersonalJourney from './PersonalJourney';
import BookRecommendations from './BookRecommendations';
import JoyceJourney from './JoyceJourney';
import SignupSection from './SignupSection';

const AudiobookSection = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8">
      <div className="space-y-8">
        <div className="flex items-center space-x-3">
          <Headphones className="w-6 h-6 text-secondary-500" />
          <h3 className="text-2xl font-bold text-primary-500">
            Audible Journey
          </h3>
        </div>
        <AudioHeader />
        <PersonalJourney />
        <BookRecommendations />
        <JoyceJourney />
        <SignupSection />
      </div>
    </ArtisticFrame>
  );
};

export default AudiobookSection;