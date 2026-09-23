export interface AiLabArea {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Learning / Building' | 'Exploring';
}

export interface AiLabWorkflowStep {
  label: string;
  detail?: string;
}

export interface AiLabPosition {
  label: string;
  description: string;
}
