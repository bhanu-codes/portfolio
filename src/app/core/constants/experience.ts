import { Experience } from '../models/experience.model';

export const EXPERIENCE: Experience[] = [
  {
    organization: 'CGI',
    role: 'Software Engineer',
    startDate: 'June 2025',
    endDate: 'Present',
    logoSrc: 'assets/company-logos/cgi.jpg',
    logoAlt: 'CGI logo',
    domain: 'Air France · Customer Service Operations',
    summary: "Working on Air France's Customer Service Operations platform, developing business-critical features for enterprise cargo operations.",
    featuredContributions: [
      'Built the Flight Disruptions Dashboard to help Customer Service Operations teams monitor delayed, diverted and cancelled flights together with impacted shipments.',
      'Implemented resilient UI workflows for upstream timeout scenarios, providing user guidance and fallback behaviour.',
      'Built reusable Angular components from Figma designs and collaborated with backend engineers on end-to-end functionality.',
      'Investigated and resolved 10+ production incidents using Dynatrace, application logs and root-cause analysis; participated in 15+ production deployments within a bi-weekly release cycle.'
    ],
    additionalContributions: [
      'Designed and implemented a centralized Maintenance Notification module for operational announcements.',
      'Contributed to Angular 18 → 19 and Spring Boot 3 → 4 modernization.',
      'Integrated GitHub Copilot into development workflows for AI-assisted implementation and code review feedback.'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST APIs', 'Dynatrace', 'Azure', 'GitHub Copilot']
  },
  {
    organization: 'TrimindTech Solutions Pvt. Ltd.',
    role: 'Software Engineer',
    startDate: 'August 2022',
    endDate: 'May 2025',
    logoSrc: 'assets/company-logos/tmt-logo.svg',
    logoAlt: 'TrimindTech Solutions logo',
    summary: 'Built enterprise applications across finance, eProcurement and logistics domains, working across backend services, integrations and full-stack features.',
    featuredContributions: [
      'Designed and developed a Reference Data module for centralized application configuration and master data.',
      'Implemented 25+ REST APIs integrating external banking platforms using REST/SOAP interoperability.',
      'Built asynchronous event-driven services using Apache Kafka.',
      'Built configurable UI functionality using Form.io and reusable custom components.',
      'Managed database versioning and deployments using Liquibase.'
    ],
    additionalContributions: [
      'Developed backend services for Order Management workflows.',
      'Integrated third-party APIs for customer and vendor onboarding.',
      'Contributed to React Native mobile application development.',
      'Developed Lead Management modules using Spring Boot and Angular.',
      'Integrated DocuSign APIs for electronic document signing.',
      'Contributed to Java 8 → Java 17 modernization.'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Apache Kafka', 'Form.io', 'Liquibase', 'React Native', 'DocuSign']
  }
];
