import React from 'react';
import { ThumbsUp, Star, Clock } from 'lucide-react';

const PersonalExperience = () => {
  return (
    <div className="bg-accent-500/10 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <ThumbsUp className="w-6 h-6 text-accent-500" />
        <h4 className="text-xl font-semibold text-primary-500">
          My 8-Year Experience
        </h4>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-secondary-500" />
          <span className="text-charcoal-500 font-medium">8+ Years of Daily Use</span>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <p className="text-charcoal-500 leading-relaxed">
            As someone who has been using the previous model of the TEMPUR-Ergo® base 
            and mattress for over 8 years, I can personally attest to its durability 
            and life-changing benefits. While the newer model comes with even more 
            advanced features, the core benefits of improved sleep quality and pain 
            management have been consistent throughout my journey.
          </p>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Star className="w-5 h-5 text-secondary-500" fill="currentColor" />
          <span className="text-charcoal-500 italic">
            "A worthwhile investment in your daily comfort and well-being"
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalExperience;