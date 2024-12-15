import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LemonAnimationProps {
  children: ReactNode;
}

export const LemonAnimation = ({ children }: LemonAnimationProps) => {
  return (
    <motion.span 
      className="relative inline-flex items-center gap-4 mt-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="relative z-10 text-accent-500 font-extrabold">
        {children}
      </span>
      <motion.div 
        className="absolute inset-0 bg-secondary-500 opacity-20 blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </motion.span>
  );
};