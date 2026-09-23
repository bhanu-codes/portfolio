import { AiLabArea, AiLabPosition, AiLabWorkflowStep } from '../models/ai-lab.model';

export const AI_LAB_POSITIONING: AiLabPosition[] = [
  { label: 'Experience', description: 'Enterprise software engineering' },
  { label: 'Building', description: 'AI-powered applications' },
  { label: 'Exploring', description: 'LLMs · RAG · Vector Search · AI Agents' }
];

export const AI_LAB_AREAS: AiLabArea[] = [
  {
    number: '01',
    title: 'LLM Applications',
    description: 'Building applications that integrate language models with useful software workflows and APIs.',
    technologies: ['OpenAI APIs', 'Prompt Engineering'],
    status: 'Learning / Building'
  },
  {
    number: '02',
    title: 'Retrieval-Augmented Generation',
    description: 'Exploring document ingestion, chunking, embeddings, retrieval and grounded generation for enterprise knowledge use cases.',
    technologies: ['RAG', 'Embeddings', 'Vector Search'],
    status: 'Learning / Building'
  },
  {
    number: '03',
    title: 'AI Agents',
    description: 'Exploring agentic workflows where models can reason across tools, APIs and structured application capabilities.',
    technologies: ['Agents', 'Tools', 'Function Calling'],
    status: 'Exploring'
  },
  {
    number: '04',
    title: 'Enterprise AI',
    description: 'Exploring how AI capabilities can be integrated with existing enterprise systems, APIs and data.',
    technologies: ['Java', 'Spring Boot', 'APIs', 'LLMs'],
    status: 'Exploring'
  }
];

export const KNOWLEDGE_ASSISTANT_FLOW: AiLabWorkflowStep[] = [
  { label: 'Documents' },
  { label: 'Ingestion' },
  { label: 'Chunking' },
  { label: 'Embeddings' },
  { label: 'Vector Search' },
  { label: 'Retriever' },
  { label: 'LLM' },
  { label: 'Grounded Response' }
];

export const KNOWLEDGE_ASSISTANT_TECHNOLOGIES = [
  'LLMs', 'RAG', 'Vector Search', 'LangChain', 'Java / Spring Boot', 'Python'
];
