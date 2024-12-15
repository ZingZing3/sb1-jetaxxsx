import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroTextAnimationProps {
  children: ReactNode;
  delay?: number;
}

export const HeroTextAnimation = ({ children, delay = 0 }: HeroTextAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};