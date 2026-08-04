export interface ServiceGalleryItem {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline?: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  image: string;
  gallery: ServiceGalleryItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'maritime' | 'offshore' | 'logistics' | 'engineering';
  categoryLabel: string;
  client: string;
  year: string;
  location: string;
  image: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoText: string;
  subtext: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
