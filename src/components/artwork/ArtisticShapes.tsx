import React from 'react';
import { motion } from 'framer-motion';

interface ArtisticShapesProps {
  variant: 'kahlo' | 'miro' | 'okeeffe';
  className?: string;
}

const ArtisticShapes: React.FC<ArtisticShapesProps> = ({ variant, className = '' }) => {
  const variants = {
    kahlo: (
      <div className="relative w-full h-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary-500 rounded-full mix-blend-overlay"
        />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-500 rounded-full mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent" />
      </div>
    ),
    miro: (
      <div className="relative w-full h-full">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-secondary-500 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-accent-500"
        />
        <svg className="absolute w-full h-full">
          <motion.path
            d="M 50 50 Q 100 100 150 50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-primary-300"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    ),
    okeeffe: (
      <div className="relative w-full h-full">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-primary-300/30 via-accent-300/20 to-secondary-300/30"
        />
        <div className="absolute inset-0 backdrop-blur-sm" />
        <motion.div
          animate={{
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full mix-blend-overlay"
        />
      </div>
    ),
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variants[variant]}
    </div>
  );
};

export default ArtisticShapes;