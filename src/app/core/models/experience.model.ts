export interface Experience {
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  summary: string;
  domain?: string;
  logoSrc: string;
  logoAlt: string;
  featuredContributions: string[];
  additionalContributions: string[];
  technologies: string[];
}
