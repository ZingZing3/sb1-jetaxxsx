// Define main image categories and their paths
export const ImageCategories = {
  // Journey Categories
  EARLY_LIFE: 'early-life',
  EDUCATION: 'education',
  MS_JOURNEY: 'ms-journey',
  
  // Travel Categories
  ASIA: 'asia',
  GLOBAL: 'global',
  
  // Medical Categories
  MEDICAL: 'medical',
  
  // Media Categories
  MEDIA: 'media',
  BROADCASTS: 'broadcasts',
  
  // Story Categories
  ZINGERS: 'zingers',
  MOMENTS: 'moments',
  
  // Original Categories
  HERO: 'hero',
  STORY: 'story',
  PROFILE: 'profile',
  ZIGGY: 'ziggy'
} as const;

export type ImageCategory = typeof ImageCategories[keyof typeof ImageCategories];

// Subcategories for better organization
export const ImageSubcategories = {
  asia: {
    CHINA: 'china',
    TIBET: 'tibet',
    MONGOLIA: 'mongolia',
    INDIA: 'india',
    BHUTAN: 'bhutan'
  },
  earlyLife: {
    CHILDHOOD: 'childhood',
    TEENS: 'teens'
  },
  education: {
    GRADE_11: 'grade-11',
    GRADE_12: 'grade-12'
  },
  msJourney: {
    DIAGNOSIS: 'diagnosis',
    TREATMENT: 'treatment',
    ADAPTATION: 'adaptation'
  },
  medical: {
    FALLS: 'falls',
    MRI: 'mri',
    TREATMENTS: 'treatments'
  },
  media: {
    TV: 'tv',
    BROADCASTS: 'broadcasts',
    INTERVIEWS: 'interviews'
  }
} as const;