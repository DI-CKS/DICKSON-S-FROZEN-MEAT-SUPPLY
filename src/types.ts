export type ProductCategory = 'all' | 'poultry' | 'beef' | 'fish' | 'pork';

export interface Product {
  id: string;
  name: string;
  category: 'poultry' | 'beef' | 'fish' | 'pork';
  image: string;
  description: string;
  cartonWeight: string; // e.g. "10 kg / 15 kg"
  origin: string; // e.g. "EU / Brazil"
  grade: string; // e.g. "Grade A / Premium"
  temperature: string; // e.g. "-18°C Deep Frozen"
  minOrder: string; // e.g. "5 Cartons"
  inStock: boolean;
  featured?: boolean;
  cutOptions?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'delivery' | 'quality' | 'payment';
}

export interface QuoteFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: 'restaurant' | 'supermarket' | 'hotel' | 'caterer' | 'wholesaler' | 'other';
  categoryNeeded: ProductCategory;
  estimatedVolume: string;
  deliveryRegion: string;
  message: string;
}

export interface PhoneContact {
  number: string;
  formatted: string;
  label: string;
}
