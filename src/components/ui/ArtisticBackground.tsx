import React from 'react';

interface ArtisticBackgroundProps {
  variant?: 'kahlo' | 'okeeffe' | 'miro';
  className?: string;
  opacity?: 'low' | 'medium' | 'high';
}

const ArtisticBackground: React.FC<ArtisticBackgroundProps> = ({ 
  variant = 'miro',
  className = '',
  opacity = 'medium'
}) => {
  const opacityValues = {
    low: 'opacity-10',
    medium: 'opacity-20',
    high: 'opacity-30'
  };

  const patterns = {
    kahlo: (
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-[#DC143C] rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay ${opacityValues[opacity]}`} />
        <div className={`absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-[#50C878] rounded-full transform translate-x-1/2 translate-y-1/2 mix-blend-overlay ${opacityValues[opacity]}`} />
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-[#4B0082] rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay ${opacityValues[opacity]}`} />
      </div>
    ),
    okeeffe: (
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-[#4B0082] via-[#50C878] to-[#DC143C] ${opacityValues[opacity]}`} />
      </div>
    ),
    miro: (
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r from-[#4B0082]/5 to-transparent`} />
        <div className={`absolute top-1/4 left-1/4 w-12 h-12 bg-[#DC143C] rounded-full transform rotate-45 ${opacityValues[opacity]}`} />
        <div className={`absolute top-3/4 right-1/4 w-16 h-16 bg-[#50C878] rounded-full transform -rotate-12 ${opacityValues[opacity]}`} />
        <div className={`absolute bottom-1/4 left-3/4 w-20 h-20 bg-[#4B0082] transform rotate-45 ${opacityValues[opacity]}`} />
      </div>
    )
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {patterns[variant]}
    </div>
  );
};

export default ArtisticBackground;