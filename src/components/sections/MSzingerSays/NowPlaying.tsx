import React from 'react';
import { Volume2 } from 'lucide-react';
import Button from '../../ui/Button';

const NowPlaying = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-primary-500">Now Playing</h3>
        <Volume2 className="w-6 h-6 text-secondary-500" />
      </div>
      <div className="aspect-video bg-lavender-300 rounded-xl mb-6">
        {/* Audio player visualization */}
        <div className="h-full flex items-center justify-center">
          <div className="space-x-2 flex items-end">
            {[4, 6, 8, 4, 6, 3, 5, 7, 4, 6].map((height, i) => (
              <div
                key={i}
                className="w-2 bg-primary-500 rounded-full animate-pulse"
                style={{ height: `${height * 8}px` }}
              />
            ))}
          </div>
        </div>
      </div>
      <Button variant="primary" className="w-full">
        Subscribe to Podcast
      </Button>
    </div>
  );
};

export default NowPlaying;