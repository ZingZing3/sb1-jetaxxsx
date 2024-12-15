import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from './types';
import ArtisticFrame from '../../ui/ArtisticFrame';

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, date, image }) => {
  return (
    <ArtisticFrame variant="kahlo">
      <motion.div
        className="h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-secondary-500 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="text-xl font-bold text-primary-500 mb-3">{title}</h3>
          <p className="text-charcoal-500 mb-4">{excerpt}</p>
          <motion.button
            className="inline-flex items-center text-accent-500 hover:text-accent-600 transition-colors"
            whileHover={{ x: 5 }}
          >
            Read More <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </ArtisticFrame>
  );
};

export default BlogCard;