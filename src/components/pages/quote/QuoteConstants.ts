export const services = [
  { id: 'website-design', name: 'Website Design & Development', icon: '🌐' },
  { id: 'seo', name: 'Search Engine Optimization', icon: '📈' },
  { id: 'google-marketing', name: 'Google Marketing', icon: '🎯' },
  { id: 'social-media', name: 'Social Media Marketing', icon: '👥' },
  { id: 'videography', name: 'Professional Videography', icon: '🎬' },
  { id: 'virtual-tours', name: 'Virtual Tours & Photography', icon: '📷' }
];

export const budgetRanges = [
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+'
];

export const timelineOptions = [
  'ASAP',
  '1-2 months',
  '3-6 months',
  '6+ months',
  'No rush'
];

export const benefits = [
  {
    icon: 'Clock',
    title: 'Fast Response',
    description: 'Get your custom quote within 24 hours',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: 'DollarSign',
    title: 'Competitive Pricing',
    description: 'Transparent, value-driven pricing',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: 'Users',
    title: 'Expert Team',
    description: '10+ years of proven expertise',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: 'Zap',
    title: 'Custom Solutions',
    description: 'Tailored strategies for your business',
    color: 'from-orange-500 to-red-600'
  }
];

export interface QuoteFormData {
  // Step 1: Basic Info
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  
  // Step 2: Services
  services: string[];
  
  // Step 3: Project Details
  budget: string;
  timeline: string;
  description: string;
  goals: string;
  
  // Step 4: Additional Info
  currentMarketing: string;
  challenges: string;
  targetAudience: string;
}

export const initialFormData: QuoteFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  services: [],
  budget: '',
  timeline: '',
  description: '',
  goals: '',
  currentMarketing: '',
  challenges: '',
  targetAudience: ''
};

export const stepTitles = [
  'Basic Information',
  'Services Needed',
  'Project Details',
  'Additional Information'
];