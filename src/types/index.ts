export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  affiliateLink?: string;
  category: 'affiliate' | 'own';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'RealZingers' | 'LemonZingers' | 'TrippingZingers' | 'ZiggyTales';
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  link: string;
  category: 'Products' | 'Resources' | 'Entertainment';
  imageUrl: string;
}

export interface SocialPost {
  id: string;
  platform: 'Instagram' | 'TikTok' | 'YouTube';
  embedUrl: string;
  thumbnail: string;
  title: string;
}