// Image validation utilities
export const validateImageFormat = (file: File): boolean => {
  const validFormats = ['image/jpeg', 'image/png', 'image/webp'];
  return validFormats.includes(file.type);
};

export const validateImageSize = (file: File, maxSizeMB: number = 5): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};

export const validateImageDimensions = async (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const validWidth = img.width >= 800;
      const validHeight = img.height >= 600;
      resolve(validWidth && validHeight);
    };
    img.src = URL.createObjectURL(file);
  });
};