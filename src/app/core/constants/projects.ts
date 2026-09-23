import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    number: '01',
    slug: 'flight-disruptions-dashboard',
    title: 'Flight Disruptions Dashboard',
    category: 'Enterprise · Airline Operations',
    description: 'Built a centralized dashboard for Customer Service Operations teams to monitor delayed, diverted and cancelled flights together with impacted shipments.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'REST APIs'],
    visualSteps: ['Flight status', 'Date aggregation', 'Shipment impact', 'Operational action'],
    featured: true,
    highlights: [
      'API response aggregation across multiple dates',
      'Timeout handling and resilient UI workflows'
    ],
    challenges: [
      'The external service returns data for a single date. The dashboard aggregates D-1, D and D+1 responses to provide a unified operational view.',
      'When large result sets caused upstream response-time constraints, the UI provided guidance to narrow the search to a single date.'
    ]
  },
  {
    number: '02',
    slug: 'finance-management',
    title: 'Integrated Finance Management System',
    category: 'Enterprise · Finance',
    description: 'Enterprise finance platform supporting configuration, integrations and event-driven workflows across distributed services.',
    technologies: ['Spring Boot', 'REST / SOAP', 'Apache Kafka', 'Form.io', 'Liquibase'],
    visualSteps: ['Reference data', 'Service APIs', 'Event workflows', 'Configurable UI'],
    contribution: 'Designed and implemented a reusable Reference Data module to centrally manage application configuration and shared master data.',
    highlights: [
      '25+ REST APIs and REST / SOAP integrations',
      'Configurable UI development using Form.io and custom components'
    ]
  },
  {
    number: '03',
    slug: 'eprocure',
    title: 'eProcure Platform',
    category: 'Enterprise · eProcurement',
    description: 'Enterprise procurement application with lead management workflows, document signing and modernised backend services.',
    technologies: ['Spring Boot', 'Angular', 'REST APIs', 'DocuSign', 'Java 8 → Java 17'],
    visualSteps: ['Lead workflows', 'Document signing', 'REST services', 'Modernised backend'],
    highlights: [
      'Lead management workflows and document signing integration',
      'Backend modernisation from Java 8 to Java 17'
    ]
  },
  {
    number: '04',
    slug: 'berry-box',
    title: 'Berry Box',
    category: 'Product · Logistics',
    description: 'Application supporting order management and customer/vendor onboarding through backend services and third-party integrations.',
    technologies: ['Spring Boot', 'REST APIs', 'Third-party integrations', 'React Native'],
    visualSteps: ['Order management', 'Backend services', 'Partner integrations', 'Customer / vendor onboarding'],
    highlights: ['Order management and customer/vendor onboarding']
  }
];
