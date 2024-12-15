import React from 'react';
import { Camera } from 'lucide-react';
import Section from '../../ui/Section';
import ImageGallery from '../../ui/ImageGallery';

const Gallery = () => {
  const images = [
    {
      src: '/assets/images/your-image-1.jpg',
      alt: 'Gallery image 1',
      caption: 'Living with MS - The Journey'
    },
    // Add more images here
  ];

  return (
    <Section
      id="gallery"
      title="Image Gallery"
      subtitle="A visual journey through my MS adventures"
      icon={Camera}
      variant="kahlo"
      className="bg-white"
    >
      <ImageGallery images={images} />
    </Section>
  );
};

export default Gallery;