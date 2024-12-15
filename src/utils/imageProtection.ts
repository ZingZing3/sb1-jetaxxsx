// Image protection utilities
export const addImageProtection = (imageUrl: string) => {
  // Add cache control headers
  const headers = new Headers({
    'Cache-Control': 'no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });

  return {
    url: imageUrl,
    headers,
  };
};

export const getProtectedImageUrl = (imageName: string) => {
  // In production, this would be your CDN or secure storage URL
  return `/assets/images/${imageName}`;
};