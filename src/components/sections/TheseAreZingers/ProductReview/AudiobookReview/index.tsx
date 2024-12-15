import React from 'react';
import AudioHeader from './AudioHeader';
import PersonalJourney from './PersonalJourney';
import BookRecommendations from './BookRecommendations';
import JoyceJourney from './JoyceJourney';
import SignupSection from './SignupSection';
import ArtisticFrame from '../../../../ui/ArtisticFrame';

const AudiobookReview = () => {
  return (
    <ArtisticFrame variant="kahlo" className="bg-white p-8 mt-12">
      <div className="space-y-8">
        <AudioHeader />
        <PersonalJourney />
        <BookRecommendations />
        <JoyceJourney />
        <SignupSection />
      </div>
    </ArtisticFrame>
  );
};

export default AudiobookReview;