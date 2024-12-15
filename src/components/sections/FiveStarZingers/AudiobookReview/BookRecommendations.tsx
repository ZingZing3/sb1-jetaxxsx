import React from 'react';
import { Bookmark, ExternalLink } from 'lucide-react';
import Button from '../../../ui/Button';

const BookRecommendations = () => {
  return (
    <div className="bg-white rounded-xl border border-lavender-300 p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-6">
        Must-Hear Recommendations
      </h4>
      
      <div className="space-y-6">
        <div className="bg-lavender-300/10 rounded-lg p-4 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Bookmark className="w-6 h-6 text-accent-500" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-charcoal-500">Ulysses</h5>
              <p className="text-sm text-charcoal-400">
                By James Joyce • Narrated by Jim Norton, Marcella Riordan
              </p>
              <p className="text-sm text-charcoal-400 mt-1">
                Length: 27 hrs and 16 mins
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="secondary"
              icon={ExternalLink}
              onClick={() => window.open('https://www.audible.com/pd/Ulysses-Audiobook/B002V8MJ1I', '_blank')}
            >
              Listen on Audible US
            </Button>
            <Button 
              variant="secondary"
              icon={ExternalLink}
              onClick={() => window.open('https://www.audible.ca/pd/Ulysses-Audiobook/B072BFJHP4', '_blank')}
            >
              Listen on Audible Canada
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRecommendations;