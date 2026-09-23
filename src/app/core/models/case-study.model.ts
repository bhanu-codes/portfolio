export interface ArchitectureStage {
  nodes: string[];
}

export interface ArchitectureVisual {
  title: string;
  description: string;
  stages: ArchitectureStage[];
  branches?: {
    from: string;
    paths: { label: string; nodes: string[] }[];
  };
}

export interface EngineeringDecision {
  title: string;
  why: string;
  tradeoff?: string;
  constraint?: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  context: string;
  type: 'professional' | 'learning';
  introduction: string;
  metaDescription: string;
  problem: string;
  contextDetails?: string;
  challenges: string[];
  architecture: ArchitectureVisual[];
  decisions: EngineeringDecision[];
  implementation: string[];
  reliability?: string[];
  outcome: string;
  learnings: string[];
  technologies: string[];
  projectStatus?: string;
}
