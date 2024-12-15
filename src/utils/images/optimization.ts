// Image optimization utilities
export const getOptimizedImagePath = (
  path: string,
  {
    width,
    quality = 80,
    format = 'webp'
  }: {
    width: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  }
) => {
  // In production, this would connect to your image optimization service
  // For now, we'll just append parameters that could be used by a CDN
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    fm: format
  });

  return `${path}?${params.toString()}`;
};

export const getResponsiveImageSrcSet = (path: string) => {
  const widths = [320, 640, 768, 1024, 1280, 1536];
  
  return widths
    .map(width => {
      const optimizedPath = getOptimizedImagePath(path, { width });
      return `${optimizedPath} ${width}w`;
    })
    .join(', ');
};