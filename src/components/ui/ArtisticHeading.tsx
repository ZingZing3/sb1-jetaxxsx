import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ArtisticHeadingProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: 'kahlo' | 'okeeffe' | 'miro';
  textColor?: 'light' | 'dark';
}

const ArtisticHeading: React.FC<ArtisticHeadingProps> = ({
  title,
  subtitle,
  icon: Icon,
  variant = 'kahlo',
  textColor = 'dark'
}) => {
  const textStyles = {
    light: {
      title: 'text-white',
      subtitle: 'text-white/90'
    },
    dark: {
      title: 'text-[#4B0082]',
      subtitle: 'text-[#36454F]'
    }
  };

  const styles = {
    kahlo: {
      container: 'relative z-10',
      iconWrapper: 'inline-block p-4 bg-white shadow-lg rounded-full mb-6 transform hover:rotate-12 transition-transform duration-300',
      title: `text-4xl md:text-5xl font-bold mb-6 relative ${textStyles[textColor].title}`,
      subtitle: `text-xl max-w-3xl mx-auto font-medium ${textStyles[textColor].subtitle}`
    },
    okeeffe: {
      container: 'relative z-10',
      iconWrapper: 'inline-block p-4 bg-white shadow-lg rounded-full mb-6',
      title: `text-4xl md:text-5xl font-bold mb-6 relative ${textStyles[textColor].title}`,
      subtitle: `text-xl max-w-3xl mx-auto font-medium ${textStyles[textColor].subtitle}`
    },
    miro: {
      container: 'relative z-10',
      iconWrapper: 'inline-block p-4 bg-white shadow-lg rounded-full mb-6 transform -rotate-6',
      title: `text-4xl md:text-5xl font-bold mb-6 relative ${textStyles[textColor].title} transform hover:scale-105 transition-transform`,
      subtitle: `text-xl max-w-3xl mx-auto font-medium ${textStyles[textColor].subtitle}`
    }
  };

  return (
    <div className={styles[variant].container}>
      {Icon && (
        <div className={styles[variant].iconWrapper}>
          <Icon className="w-10 h-10 text-[#4B0082]" />
        </div>
      )}
      <h2 className={styles[variant].title}>{title}</h2>
      {subtitle && <p className={styles[variant].subtitle}>{subtitle}</p>}
    </div>
  );
};

export default ArtisticHeading;