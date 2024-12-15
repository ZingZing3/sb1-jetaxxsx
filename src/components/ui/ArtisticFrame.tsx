import React from 'react';

interface ArtisticFrameProps {
  children: React.ReactNode;
  variant?: 'kahlo' | 'okeeffe' | 'miro';
  className?: string;
}

const ArtisticFrame: React.FC<ArtisticFrameProps> = ({
  children,
  variant = 'kahlo',
  className = ''
}) => {
  const frameStyles = {
    kahlo: 'border-4 border-[#DC143C] rounded-lg p-1',
    okeeffe: 'bg-gradient-to-r from-[#4B0082] via-[#50C878] to-[#DC143C] p-1 rounded-2xl',
    miro: 'relative before:absolute before:-inset-1 before:bg-[#E6E6FA] before:transform before:rotate-1 before:rounded-lg'
  };

  return (
    <div className={`relative ${frameStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default ArtisticFrame;