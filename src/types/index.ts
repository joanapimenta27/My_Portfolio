import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  media: string;
  mediaType: 'image' | 'video';
  imagePosition?: 'center' | 'top' | 'bottom';
  category: string;
  degree: 'bachelor' | 'master';
  technologies: string[];
  demoLink?: string;
  codeLinks?: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}