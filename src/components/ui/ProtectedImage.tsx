import React from 'react';
import { addImageProtection } from '../../utils/imageProtection';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({ src, alt, className = '', ...props }) => {
  // Prevent right-click context menu
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Prevent drag and drop
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={`select-none ${className}`}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        loading="lazy"
        {...props}
      />
      {/* Optional: Add watermark */}
      <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
        © MSzingers
      </div>
    </div>
  );
};

export default ProtectedImage;