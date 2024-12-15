import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToElement = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return scrollToElement;
};