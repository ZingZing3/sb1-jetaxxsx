import React from 'react';
import { motion } from 'framer-motion';

const ImageOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg"
    >
      <p className="text-primary-500 font-bold">Professional Tumbler</p>
      <p className="text-secondary-500">Speaker & Advocate</p>
    </motion.div>
  );
};

export default ImageOverlay;