import React from 'react';
import { Gift } from 'lucide-react';
import Button from '../../../ui/Button';

const SignupSection = () => {
  return (
    <div className="bg-primary-500/5 rounded-xl p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <Gift className="w-6 h-6 text-secondary-500" />
            <h4 className="text-xl font-semibold text-primary-500">
              Start Your Audiobook Journey
            </h4>
          </div>
          <p className="text-charcoal-500">
            Get your first audiobook free with a 30-day trial
          </p>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="secondary"
            onClick={() => window.open('https://www.audible.ca/ep/freetrial', '_blank')}
          >
            Try Audible Canada
          </Button>
          <Button 
            variant="primary"
            onClick={() => window.open('https://www.audible.com/ep/freetrial', '_blank')}
          >
            Try Audible US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;