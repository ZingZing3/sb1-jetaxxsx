import React from 'react';
import { motion } from 'framer-motion';

interface ArtisticBrushProps {
  variant: 'kahlo' | 'okeeffe' | 'miro';
  className?: string;
}

const ArtisticBrush: React.FC<ArtisticBrushProps> = ({ variant, className = '' }) => {
  const brushStrokes = {
    kahlo: (
      <motion.div
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,0 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary-500/20"
          />
        </svg>
      </motion.div>
    ),
    okeeffe: (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-primary-500/10"
      />
    ),
    miro: (
      <motion.div
        initial={{ rotate: -5, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full transform -rotate-3 bg-secondary-500/5" />
        <div className="absolute top-0 left-0 w-full h-full transform rotate-3 bg-accent-500/5" />
      </motion.div>
    )
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {brushStrokes[variant]}
    </div>
  );
};

export default ArtisticBrush;