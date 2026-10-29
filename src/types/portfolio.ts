export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Web Utility' | 'Frontend';
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  interactiveType?: 'password-generator' | 'expense-calculator' | 'smart-diary-preview';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade?: string;
  location?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  topic: string;
  credentialUrl: string | null;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: { name: string; description?: string }[];
}
