import React from 'react';
import { BookOpen, MapPin } from 'lucide-react';
import Button from '../../../ui/Button';

const JoyceJourney = () => {
  return (
    <div className="bg-lavender-300/10 rounded-xl p-6">
      <div className="flex items-center space-x-3">
        <BookOpen className="w-6 h-6 text-accent-500" />
        <h4 className="text-xl font-semibold text-primary-500">
          Down the Joycean Rabbit Hole
        </h4>
      </div>
      
      <div className="mt-4 space-y-6">
        <p className="text-charcoal-500 leading-relaxed">
          What started as an audiobook experience of Ulysses turned into a 
          transformative journey through Joyce's Dublin and Trieste, connecting with 
          fellow enthusiasts and scholars worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-medium text-primary-500 mb-2">
              James Joyce Center Courses
            </h5>
            <p className="text-sm text-charcoal-500 mb-4">
              Two years of Ulysses studies and Dubliners course with Carolyn Elbay 
              through worldwide Zoom classes.
            </p>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://jamesjoyce.ie', '_blank')}
            >
              Visit Center
            </Button>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h5 className="font-medium text-primary-500 mb-2">
              Literary Travels
            </h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary-500" />
                <span className="text-sm text-charcoal-500">Dublin, Ireland (Two summers)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary-500" />
                <span className="text-sm text-charcoal-500">Trieste, Italy (Summer adventure)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoyceJourney;