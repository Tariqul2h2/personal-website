export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'youtube' | 'medium' | 'bluesky' | 'upwork' | 'scholar' | 'docker';
  label: string;
  url: string;
  username: string;
}

export interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

export interface Profile {
  name: string;
  roleTitle: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  avatarUrl: string;
  location: string;
  status: string;
  isAvailableForWork: boolean;
  yearsExperience: number;
  completedProjects: number;
  contributionsCount: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  highlights: Highlight[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  popular?: boolean;
  experienceYears?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Cloud & Systems' | 'CI/CD & DevOps' | 'IoT & Automation' | 'Full-Stack' | 'AI & Research';
  thumbnail: string;
  images?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  stats?: ProjectStat[];
  highlights?: string[];
  architectureOverview?: string;
  duration?: string;
  role?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  honors?: string;
  grade?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

export interface Publication {
  id: string;
  type: 'journal' | 'conference';
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  details?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
  rating: number;
  relationship?: string;
  date: string;
  email?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  readTime: string;
  tags: string[];
  category: string;
}

export interface PortfolioData {
  profile: Profile;
  socials: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  publications?: Publication[];
  awards?: Award[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
}
