import React from 'react';
import { LucideIcon } from 'lucide-react';
import ArtisticBackground from './ArtisticBackground';
import ArtisticHeading from './ArtisticHeading';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: 'kahlo' | 'okeeffe' | 'miro';
  background?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  icon,
  variant = 'kahlo',
  background = true,
  className = '',
  children
}) => {
  return (
    <section id={id} className={`relative py-16 overflow-hidden ${className}`}>
      {background && <ArtisticBackground variant={variant} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={icon}
            title={title}
            subtitle={subtitle}
            variant={variant}
          />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;