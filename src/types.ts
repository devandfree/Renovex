export type Language = 'fr' | 'en';

export interface ServiceItem {
  id: string;
  iconName: string;
  heroImage?: string;
  category?: 'renovation' | 'residential' | 'commercial' | 'roofing';
  title: Record<Language, string>;
  description: Record<Language, string>;
  fullDetails: Record<Language, {
    overview: string;
    features: string[];
    typicalTimeline: string;
    startingPrice: string;
  }>;
  extendedDetails?: Record<Language, {
    tagline: string;
    technicalSpecs: Array<{ label: string; value: string }>;
    processSteps: Array<{ step: string; title: string; desc: string }>;
    faqs: Array<{ question: string; answer: string }>;
  }>;
  isDark?: boolean;
}

export interface ProjectItem {
  id: string;
  title: Record<Language, string>;
  category: 'renovation' | 'residential' | 'commercial' | 'roofing';
  location: string;
  area: string;
  year: string;
  image: string;
  description: Record<Language, string>;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole?: Record<Language, string>;
  content?: Record<Language, {
    introduction: string;
    section1Title: string;
    section1Text: string;
    keyTakeaways: string[];
    section2Title: string;
    section2Text: string;
    quote?: string;
    section3Title: string;
    section3Text: string;
  }>;
}

export interface QuoteCalculationInput {
  serviceType: string;
  surfaceArea: number;
  qualityGrade: 'standard' | 'premium' | 'luxe';
  hasDemolition: boolean;
  urgency: 'normal' | 'express';
}
