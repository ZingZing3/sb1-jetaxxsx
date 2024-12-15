import React from 'react';
import { motion } from 'framer-motion';

interface ArtisticOverlayProps {
  opacity?: number;
  className?: string;
}

const ArtisticOverlay: React.FC<ArtisticOverlayProps> = ({ opacity = 0.1, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-transparent to-primary-500/10" />
      <div className="absolute inset-0 bg-noise opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")' }} />
    </motion.div>
  );
};

export default ArtisticOverlay;