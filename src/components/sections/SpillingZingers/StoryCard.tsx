import React from 'react';
import { Quote, Heart } from 'lucide-react';
import Button from '../../ui/Button';
import ArtisticFrame from '../../ui/ArtisticFrame';
import { Story } from './types';
import { motion } from 'framer-motion';

const StoryCard: React.FC<Story> = ({ title, excerpt, quote, image }) => {
  return (
    <ArtisticFrame variant="kahlo">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <motion.div 
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          <Heart className="w-6 h-6 text-secondary-500" />
        </motion.div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-primary-500 mb-4">{title}</h3>
          <p className="text-charcoal-500 mb-6">{excerpt}</p>
          <blockquote className="border-l-4 border-accent-500 pl-4 mb-6">
            <div className="flex items-start">
              <Quote className="w-6 h-6 text-accent-500 mr-2 flex-shrink-0" />
              <p className="italic text-charcoal-500">{quote}</p>
            </div>
          </blockquote>
          <Button variant="secondary">Read Full Story</Button>
        </div>
      </motion.div>
    </ArtisticFrame>
  );
};

export default StoryCard;