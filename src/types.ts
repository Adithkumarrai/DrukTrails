export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Experience {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Trek {
  id: string;
  name: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme";
  maxAltitude: string;
  season: string;
  description: string;
  image: string;
}

export interface Festival {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activityType: string;
  accommodation: string;
}

export interface GeneratedItinerary {
  title: string;
  duration: number;
  budgetCategory: string;
  summary: string;
  dailyPlan: ItineraryDay[];
  pricingEstimate: string;
  permitStatus: string;
}
