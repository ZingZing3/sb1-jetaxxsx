import React from 'react';
import { ExternalLink } from 'lucide-react';
import Button from '../../../ui/Button';

const BookRecommendations = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-primary-500">Must-Listen Titles</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h5 className="font-bold text-charcoal-500 mb-2">Ulysses</h5>
          <p className="text-sm text-charcoal-400 mb-4">
            A masterful performance that brings Joyce's Dublin to vivid life
          </p>
          <div className="flex gap-2">
            <Button 
              variant="secondary" 
              icon={ExternalLink}
              onClick={() => window.open('https://www.audible.com/pd/Ulysses-Audiobook/B002V8MJ1I', '_blank')}
            >
              Audible US
            </Button>
            <Button 
              variant="secondary" 
              icon={ExternalLink}
              onClick={() => window.open('https://www.audible.ca/pd/Ulysses-Audiobook/B072BFJHP4', '_blank')}
            >
              Audible CA
            </Button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h5 className="font-bold text-charcoal-500 mb-2">Dubliners</h5>
          <p className="text-sm text-charcoal-400 mb-4">
            Classic stories brought to life through masterful narration
          </p>
          <div className="flex gap-2">
            <Button 
              variant="secondary" 
              icon={ExternalLink}
              onClick={() => window.open('https://www.audible.com/pd/Dubliners-Audiobook/B002V5CNBG', '_blank')}
            >
              Audible US
            </Button>
            <Button 
              variant="secondary" 
              icon={ExternalLink}
              onClick={() => window.open('https://www.audible.ca/pd/Dubliners-Audiobook/B072BG8N3Q', '_blank')}
            >
              Audible CA
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRecommendations;