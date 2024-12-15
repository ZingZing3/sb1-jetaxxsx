import React from 'react';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import Button from '../../../../../ui/Button';

const CourseInfo = () => {
  return (
    <div className="bg-lavender-300/10 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <GraduationCap className="w-6 h-6 text-secondary-500" />
        <h5 className="text-lg font-semibold text-primary-500">
          James Joyce Center Courses
        </h5>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4">
          <h6 className="font-medium text-charcoal-500 mb-2">
            Weekly Zoom Classes with Carolyn Elbay
          </h6>
          <div className="flex items-center space-x-2 text-sm text-charcoal-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span>Multiple sessions throughout the year</span>
          </div>
          <p className="text-charcoal-500 text-sm mb-4">
            Join worldwide participants in exploring Joyce's works through expert-led 
            discussions. I've completed two years of Ulysses studies and the 
            Dubliners course with Carolyn Elbay.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              icon={ExternalLink}
              onClick={() => window.open('https://jamesjoyce.ie', '_blank')}
            >
              Visit James Joyce Center
            </Button>
            <Button
              variant="primary"
              icon={ExternalLink}
              onClick={() => window.open('https://jamesjoyce.ie/courses', '_blank')}
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;