import React from 'react';

interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 4 | 8 | 12;
  className?: string;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
  columns = 3,
  gap = 8,
  className = '',
  children
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    4: 'gap-4',
    8: 'gap-8',
    12: 'gap-12'
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;