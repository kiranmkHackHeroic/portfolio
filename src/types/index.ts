export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category?: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number; // 1-5 scale
  years?: number;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  location?: string;
  companyUrl?: string;
  logoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  grade?: string;
  description?: string;
  location?: string;
  logoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  published: boolean;
  tags?: string[];
  views: number;
  likes: number;
  aiGenerated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

export interface AIChat {
  id: string;
  sessionId: string;
  message: string;
  response?: string;
  isUser: boolean;
  createdAt: Date;
}

export interface User {
  id: string;
  name?: string;
  email: string;
  image?: string;
  bio?: string;
  title?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}