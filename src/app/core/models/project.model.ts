export interface Project {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  visualSteps: string[];
  featured?: boolean;
  contribution?: string;
  highlights?: string[];
  challenges?: string[];
  lessons?: string[];
}
