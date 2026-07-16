import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Terminal, 
  Github, 
  Globe, 
  Smartphone,
  Layers,
  Cpu,
  Languages
} from 'lucide-react';
import { Skill } from '../types';

export const skillsData: Skill[] = [
  {
    name: 'C++',
    icon: Code2,
  },
  {
    name: 'C',
    icon: Code2,
  },
  {
    name: 'Java',
    icon: Code2,
  },
  {
    name: 'SQL',
    icon: Database,
  },
  {
    name: 'HTML & CSS',
    icon: Globe,
  },
  {
    name: 'PHP & Laravel',
    icon: Server,
  },
  {
    name: 'Haskell',
    icon: Code2,
  },
   {
    name: 'Prolog',
    icon: Code2,
  },
  {
    name: 'Python',
    icon: Code2,
  },
  {
    name: 'Unity & C#',
    icon: Layers,
  },
  {
    name: 'JavaScript',
    icon: Code2,
  },
  {
    name: 'Assembly',
    icon: Terminal,
  },
  {
    name: 'Flutter & Dart',
    icon: Smartphone,
  },
  {
    name: 'GDScript',
    icon: Code2,
  },
  {
    name: 'Portuguese',
    icon: Languages,
    level: 100,
  },
  {
    name: 'English',
    icon: Languages,
    level: 95,
  },
  {
    name: 'Korean',
    icon: Languages,
    level: 30,
  },
  {
    name: 'French',
    icon: Languages,
    level: 15,
  },
  {
    name: 'Spanish',
    icon: Languages,
    level: 15,
  }
];