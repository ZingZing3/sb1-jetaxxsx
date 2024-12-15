import React from 'react';
import JoyceHeader from './JoyceHeader';
import CourseInfo from './CourseInfo';
import TravelExperience from './TravelExperience';

const JoyceJourney = () => {
  return (
    <div className="bg-white rounded-xl border border-lavender-300 p-6 mt-8">
      <JoyceHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <CourseInfo />
        <TravelExperience />
      </div>
    </div>
  );
};

export default JoyceJourney;