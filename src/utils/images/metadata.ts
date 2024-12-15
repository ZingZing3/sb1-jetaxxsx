import { ImageCategory } from './categories';

interface ImageMetadata {
  alt: string;
  caption?: string;
  credits?: string;
  category: ImageCategory;
}

// Central registry of image metadata
export const IMAGE_METADATA: Record<string, ImageMetadata> = {
  'hero-main.jpg': {
    alt: 'MSzingers sharing stories and spreading awareness about MS',
    caption: 'Turning life\'s plot twists into powerful stories',
    category: 'hero'
  },
  'journey.jpg': {
    alt: 'The beginning of the MS journey',
    caption: 'Where it all began - The diagnosis that changed everything',
    category: 'story'
  },
  // Add metadata for each image
};