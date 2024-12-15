import { ImageCategory } from './categories';
import { ImageSubcategories } from './categories';

// Helper function to get image path
export const getImagePath = (category: ImageCategory, filename: string) => {
  return `/assets/images/${category}/${filename}`;
};

// Helper function to get subcategory image path
export const getSubcategoryImagePath = (
  category: ImageCategory,
  subcategory: string,
  filename: string
) => {
  return `/assets/images/${category}/${subcategory}/${filename}`;
};

// Extended image paths
export const IMAGE_PATHS = {
  // Asia Travel Images
  asia: {
    china: {
      street: getSubcategoryImagePath('asia', ImageSubcategories.asia.CHINA, 'street-life.jpg'),
      temple: getSubcategoryImagePath('asia', ImageSubcategories.asia.CHINA, 'temple-visit.jpg')
    },
    tibet: {
      monastery: getSubcategoryImagePath('asia', ImageSubcategories.asia.TIBET, 'monastery.jpg'),
      mountains: getSubcategoryImagePath('asia', ImageSubcategories.asia.TIBET, 'mountains.jpg')
    },
    mongolia: {
      steppes: getSubcategoryImagePath('asia', ImageSubcategories.asia.MONGOLIA, 'steppes.jpg'),
      yurt: getSubcategoryImagePath('asia', ImageSubcategories.asia.MONGOLIA, 'yurt-life.jpg')
    },
    india: {
      wellness: getSubcategoryImagePath('asia', ImageSubcategories.asia.INDIA, 'wellness.jpg'),
      culture: getSubcategoryImagePath('asia', ImageSubcategories.asia.INDIA, 'culture.jpg')
    },
    bhutan: {
      dzong: getSubcategoryImagePath('asia', ImageSubcategories.asia.BHUTAN, 'dzong.jpg'),
      festival: getSubcategoryImagePath('asia', ImageSubcategories.asia.BHUTAN, 'festival.jpg')
    }
  },

  // Early Life and Education
  earlyLife: {
    childhood: getSubcategoryImagePath('early-life', ImageSubcategories.earlyLife.CHILDHOOD, 'memories.jpg'),
    teens: getSubcategoryImagePath('early-life', ImageSubcategories.earlyLife.TEENS, 'teenage-years.jpg')
  },
  education: {
    grade11: getSubcategoryImagePath('education', ImageSubcategories.education.GRADE_11, 'grade-11.jpg'),
    grade12: getSubcategoryImagePath('education', ImageSubcategories.education.GRADE_12, 'grade-12.jpg')
  },

  // MS Journey
  msJourney: {
    diagnosis: getSubcategoryImagePath('ms-journey', ImageSubcategories.msJourney.DIAGNOSIS, 'diagnosis.jpg'),
    treatment: getSubcategoryImagePath('ms-journey', ImageSubcategories.msJourney.TREATMENT, 'treatment.jpg'),
    adaptation: getSubcategoryImagePath('ms-journey', ImageSubcategories.msJourney.ADAPTATION, 'adaptation.jpg')
  },

  // Medical Documentation
  medical: {
    falls: getSubcategoryImagePath('medical', ImageSubcategories.medical.FALLS, 'epic-falls.jpg'),
    mri: getSubcategoryImagePath('medical', ImageSubcategories.medical.MRI, 'mri-scan.jpg'),
    treatments: getSubcategoryImagePath('medical', ImageSubcategories.medical.TREATMENTS, 'treatment.jpg')
  },

  // Media and Broadcasts
  media: {
    tv: getSubcategoryImagePath('media', ImageSubcategories.media.TV, 'tv-episode.jpg'),
    broadcasts: getSubcategoryImagePath('media', ImageSubcategories.media.BROADCASTS, 'broadcast.jpg'),
    interviews: getSubcategoryImagePath('media', ImageSubcategories.media.INTERVIEWS, 'interview.jpg')
  },

  // Existing categories remain unchanged
  hero: {
    main: getImagePath('hero', 'hero-main.jpg'),
    background: getImagePath('hero', 'hero-bg.jpg')
  },
  // ... (keep other existing categories)
} as const;