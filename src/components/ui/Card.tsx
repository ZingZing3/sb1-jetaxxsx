import React from 'react';
import { LucideIcon } from 'lucide-react';
import ArtisticFrame from './ArtisticFrame';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  variant?: 'kahlo' | 'okeeffe' | 'miro';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon: Icon,
  variant = 'kahlo',
  className = '',
  children
}) => {
  return (
    <ArtisticFrame variant={variant} className={`bg-white ${className}`}>
      <div className="relative">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-[#4B0082]">{title}</h3>
            {Icon && <Icon className="w-6 h-6 text-[#DC143C]" />}
          </div>
          <p className="text-[#36454F] mb-4">{description}</p>
          {children}
        </div>
      </div>
    </ArtisticFrame>
  );
};

export default Card;