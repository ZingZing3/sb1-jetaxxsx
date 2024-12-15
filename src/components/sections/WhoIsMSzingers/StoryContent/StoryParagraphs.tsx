import React from 'react';
import { motion } from 'framer-motion';
import { storyContent } from '../data';

const StoryParagraphs = () => {
  return (
    <>
      {storyContent.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="text-lg text-charcoal-500 leading-relaxed"
        >
          {paragraph}
        </motion.p>
      ))}
    </>
  );
};

export default StoryParagraphs;