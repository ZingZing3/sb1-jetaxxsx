import React from 'react';
import { Coffee } from 'lucide-react';
import Button from '../../ui/Button';

const SharePrompt = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-charcoal-500 text-lg mb-6">
        Ready to spill some tea of your own? Share your story with our community.
      </p>
      <Button variant="primary" icon={Coffee}>
        Share Your Zinger
      </Button>
    </div>
  );
};

export default SharePrompt;