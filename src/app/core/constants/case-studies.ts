import { CaseStudy } from '../models/case-study.model';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'flight-disruptions-dashboard',
    number: '01',
    category: 'Enterprise · Airline Operations',
    title: 'Flight Disruptions Dashboard',
    shortDescription: 'A centralized operational view of disrupted flights and their associated shipment impacts.',
    context: 'CGI · Air France Customer Service Operations',
    type: 'professional',
    introduction: 'A dashboard workflow for bringing flight disruption data and impacted shipments into one operational view, while accounting for the limits of upstream services.',
    metaDescription: 'Engineering case study: how a flight operations dashboard aggregates date-based API responses and handles upstream timeouts.',
    problem: 'Customer Service Operations teams needed a centralized view of delayed, diverted and cancelled flights together with impacted shipments.',
    contextDetails: 'The dashboard supports work on the Air France Customer Service Operations platform. The upstream service exposed data for one date at a time, while the operational view needed a broader date window.',
    challenges: [
      'Represent a wider operational window using a single-date upstream API contract.',
      'Large result sets could encounter upstream response-time constraints.',
      'Keep the workflow understandable when a request could not complete within the available response window.'
    ],
    architecture: [
      {
        title: 'Conceptual system flow',
        description: 'Sanitized view of the dashboard request path from the Angular interface through application services and operational APIs to aggregated dashboard data.',
        stages: [
          { nodes: ['Angular UI'] },
          { nodes: ['Spring Boot Backend'] },
          { nodes: ['Flight / Operational APIs'] },
          { nodes: ['Data Aggregation'] },
          { nodes: ['Operational Dashboard'] }
        ]
      },
      {
        title: 'Multi-date aggregation',
        description: 'Responses for D minus one, D and D plus one are combined by the application layer for the dashboard view.',
        stages: [
          { nodes: ['D-1', 'D', 'D+1'] },
          { nodes: ['API aggregation'] },
          { nodes: ['Dashboard'] }
        ]
      }
    ],
    decisions: [
      {
        title: 'Aggregate multiple dates at the application layer',
        why: 'The upstream contract exposed one date at a time while the UI needed a broader operational view.',
        tradeoff: 'This added orchestration work in exchange for the date range required by the dashboard.'
      },
      {
        title: 'Handle upstream timeouts explicitly',
        why: 'When large result sets caused response-time constraints, the UI guided users to narrow the search to a single date.',
        constraint: 'The upstream response could time out when the requested result set was large.'
      },
      {
        title: 'Design the UI around failure scenarios',
        why: 'Resilient workflows and clear guidance keep an upstream limitation from appearing as an unexplained application failure.',
        constraint: 'The user still needs a clear next step when an upstream request cannot complete.'
      }
    ],
    implementation: [
      'Angular UI with reusable components implemented from Figma designs.',
      'Spring Boot services and REST API integrations.',
      'Application-layer response aggregation across multiple dates.',
      'Explicit timeout handling and guidance for narrowing a search.'
    ],
    reliability: [
      'Resilient UI workflows for upstream timeout scenarios.',
      'Production incident investigation using Dynatrace, application logs and root-cause analysis.'
    ],
    outcome: 'Delivered a centralized operational workflow for monitoring flight disruptions and associated shipment impacts, with explicit handling for upstream response-time constraints.',
    learnings: [
      'Design around external API constraints rather than assuming ideal data sources.',
      'Separate upstream limitations from the user experience with useful failure guidance.',
      'Build operational dashboards that combine imperfect, date-scoped data.'
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Dynatrace']
  },
  {
    slug: 'finance-management',
    number: '02',
    category: 'Enterprise · Finance',
    title: 'Integrated Finance Management System',
    shortDescription: 'Enterprise finance workflows spanning shared reference data, banking integrations and asynchronous services.',
    context: 'TrimindTech Solutions',
    type: 'professional',
    introduction: 'Engineering work across shared configuration, external financial integrations and event-driven workflows in an enterprise finance platform.',
    metaDescription: 'Engineering case study: reference data, REST and SOAP banking integrations, Kafka workflows and database versioning in a finance platform.',
    problem: 'The platform required centralized reference data, external banking integrations and asynchronous event-driven workflows across distributed services.',
    contextDetails: 'The work was part of enterprise application development at TrimindTech Solutions, spanning backend services, integrations and configurable UI functionality.',
    challenges: [
      'Centralize application configuration and shared master data.',
      'Integrate external banking platforms through REST and SOAP interfaces.',
      'Support asynchronous workflows across services alongside synchronous API operations.',
      'Keep database changes versioned and deployable.'
    ],
    architecture: [{
      title: 'Sanitized integration flow',
      description: 'Conceptual view of external banking interfaces, Spring Boot services, relational reference data and Kafka-based asynchronous workflows.',
      stages: [
        { nodes: ['External Banking Platforms'] },
        { nodes: ['REST / SOAP'] },
        { nodes: ['Spring Boot Services'] }
      ],
      branches: {
        from: 'Spring Boot Services',
        paths: [
          { label: 'Reference data', nodes: ['PostgreSQL', 'Reference Data'] },
          { label: 'Asynchronous workflows', nodes: ['Apache Kafka', 'Async Workflows'] }
        ]
      }
    }],
    decisions: [
      {
        title: 'Centralize reference and configuration data',
        why: 'A reusable Reference Data module provided a shared place to manage application configuration and master data.',
        constraint: 'Application configuration and master data needed a centralized management module.'
      },
      {
        title: 'Match integration patterns to external capabilities',
        why: 'REST and SOAP interoperability supported the interfaces exposed by external banking platforms.',
        constraint: 'External banking platforms exposed REST and SOAP interfaces.'
      },
      {
        title: 'Use asynchronous event-driven workflows where appropriate',
        why: 'Apache Kafka supported asynchronous service workflows alongside request-response API integrations.',
        constraint: 'The platform included asynchronous workflows as well as API request-response integrations.'
      },
      {
        title: 'Version database changes with Liquibase',
        why: 'Liquibase provided database versioning for application deployments.',
        constraint: 'Database changes needed to be versioned and deployed in a controlled way.'
      }
    ],
    implementation: [
      'Spring Boot services and 25+ REST APIs.',
      'External banking integrations using REST / SOAP interoperability.',
      'Asynchronous event-driven services using Apache Kafka.',
      'Configurable UI functionality built with Form.io and custom components.',
      'Database versioning and deployments using Liquibase.'
    ],
    outcome: 'Delivered reusable enterprise functionality supporting centralized reference data, external financial integrations and asynchronous workflows.',
    learnings: [
      'Define integration boundaries around external systems and their interface capabilities.',
      'Choose synchronous or asynchronous communication to suit the workflow.',
      'Treat database versioning as part of the application delivery path.',
      'Build shared enterprise modules that can support multiple workflows.'
    ],
    technologies: ['Spring Boot', 'REST APIs', 'SOAP', 'Apache Kafka', 'Form.io', 'PostgreSQL', 'Liquibase']
  },
  {
    slug: 'eprocure',
    number: '03',
    category: 'Enterprise · eProcurement',
    title: 'eProcure Platform',
    shortDescription: 'Procurement workflows, lead management and document signing alongside incremental backend modernization.',
    context: 'TrimindTech Solutions',
    type: 'professional',
    introduction: 'Feature development and modernization work across an enterprise procurement application, including an external document-signing integration.',
    metaDescription: 'Engineering case study: incremental Java modernization, procurement workflows and a DocuSign integration in an enterprise platform.',
    problem: 'The procurement platform needed lead-management workflows, document-signing integration and continued modernization of its backend services.',
    contextDetails: 'The work was part of enterprise application development at TrimindTech Solutions across Spring Boot services, Angular functionality and third-party integrations.',
    challenges: [
      'Modernize an existing Java application from Java 8 to Java 17 while preserving behavior.',
      'Integrate document signing through DocuSign.',
      'Keep UI workflows and backend business logic clearly separated.'
    ],
    architecture: [{
      title: 'Sanitized application flow',
      description: 'Conceptual view of the Angular interface, Spring Boot APIs, procurement workflows and the external document-signing boundary.',
      stages: [
        { nodes: ['Angular'] },
        { nodes: ['Spring Boot APIs'] },
        { nodes: ['Business Workflows'] }
      ],
      branches: {
        from: 'Business Workflows',
        paths: [
          { label: 'Lead workflow', nodes: ['Lead Management'] },
          { label: 'Document-signing integration', nodes: ['Document Signing', 'DocuSign'] }
        ]
      }
    }],
    decisions: [
      {
        title: 'Modernize the Java runtime incrementally',
        why: 'The Java 8 to Java 17 modernization needed to preserve existing application behavior.',
        constraint: 'Existing application behavior had to be preserved during modernization.'
      },
      {
        title: 'Keep document signing behind an integration boundary',
        why: 'DocuSign remained an external capability integrated by the application workflow.',
        constraint: 'Document signing was provided by an external platform.'
      },
      {
        title: 'Separate UI workflow from backend business logic',
        why: 'Angular handled the user workflow while Spring Boot APIs supported backend functionality.',
        constraint: 'The application used a distinct Angular interface and Spring Boot backend.'
      }
    ],
    implementation: [
      'Java and Spring Boot backend services.',
      'Angular user interface and REST API workflows.',
      'Lead Management functionality.',
      'DocuSign integration for electronic document signing.',
      'Java 8 to Java 17 modernization.'
    ],
    outcome: 'Contributed to modernization and feature development across an enterprise procurement platform while integrating external document-signing capabilities.',
    learnings: [
      'Plan compatibility carefully when modernizing established applications.',
      'Keep third-party integrations behind clear application boundaries.',
      'Evolve enterprise software incrementally while preserving existing behavior.'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'DocuSign', 'Java 8 → Java 17']
  },
  {
    slug: 'enterprise-knowledge-assistant',
    number: '04',
    category: 'AI · Learning Project',
    title: 'Enterprise Knowledge Assistant',
    shortDescription: 'An experimental exploration of document retrieval and grounded answers using a retrieval-augmented generation flow.',
    context: 'Personal learning project',
    type: 'learning',
    projectStatus: 'EXPERIMENTAL · LEARNING PROJECT',
    introduction: 'A conceptual application exploring how documents can be transformed into searchable knowledge and used to answer natural-language questions with retrieved context.',
    metaDescription: 'Experimental learning project exploring document ingestion, embeddings, vector search and retrieval-grounded language model responses.',
    problem: 'Valuable information in business documents can be difficult to access through traditional search when a question depends on context across the material.',
    contextDetails: 'The goal is to explore a retrieval-augmented generation approach for finding relevant document context and using it to inform an answer.',
    challenges: [
      'Prepare documents into useful, retrievable text segments.',
      'Retrieve semantically relevant context for a natural-language question.',
      'Construct context for a language model response and keep the answer tied to retrieved material.'
    ],
    architecture: [{
      title: 'Conceptual retrieval flow',
      description: 'Learning architecture showing document ingestion, chunking, embeddings, vector search, retrieval and a response grounded in supplied context.',
      stages: [
        { nodes: ['Documents'] },
        { nodes: ['Ingestion'] },
        { nodes: ['Chunking'] },
        { nodes: ['Embeddings'] },
        { nodes: ['Vector Search'] },
        { nodes: ['Retriever'] },
        { nodes: ['LLM'] },
        { nodes: ['Grounded Response'] }
      ]
    }],
    decisions: [
      {
        title: 'Explore retrieval-augmented generation',
        why: 'Retrieved source context can inform an answer instead of relying only on a model’s pre-existing knowledge.',
        constraint: 'Answers need to draw on the document material being searched.'
      },
      {
        title: 'Split documents into meaningful chunks',
        why: 'Chunking prepares document text for embedding and targeted retrieval.',
        constraint: 'Documents need to be divided before their text can be embedded and retrieved in relevant pieces.'
      },
      {
        title: 'Use vector search for semantic retrieval',
        why: 'Embeddings provide a representation that can be searched for semantically relevant context.',
        constraint: 'The retrieval step needs to find context relevant to the question from the embedded chunks.'
      },
      {
        title: 'Pass retrieved context into response generation',
        why: 'The retrieved material becomes context for a language model response.',
        constraint: 'The response flow must include the material selected by retrieval.'
      }
    ],
    implementation: [
      'Document ingestion and chunking concepts.',
      'Embeddings and vector search for retrieval.',
      'Retriever and language model response flow.',
      'Prompt engineering and context construction.'
    ],
    outcome: 'A learning project direction for exploring retrieval pipelines and grounded responses. The flow remains conceptual while these techniques are being learned and built.',
    learnings: [
      'How retrieval pipelines connect document preparation, embeddings and search.',
      'How context construction influences grounded language model responses.',
      'How to think about evaluating generated answers against retrieved material.',
      'How AI capabilities can fit alongside conventional application systems.'
    ],
    technologies: ['LLMs', 'RAG', 'Vector Search', 'LangChain', 'Java / Spring Boot', 'Python']
  }
];
