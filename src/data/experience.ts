/* Professional experience — sourced from the résumé.
   Real dates; teams provided by Ron. */

export type RichTextSegment = {
  text: string;
  strong?: boolean;
};

export type ExperienceBullet = RichTextSegment[];

export type ExperienceMetric = {
  value: string;
  label: string;
  context?: string;
};

const text = (value: string): RichTextSegment => ({ text: value });
const strong = (value: string): RichTextSegment => ({ text: value, strong: true });

export interface Role {
  id: string;
  company: string;
  companyShort: string;
  /** Brand website; undefined for the independent role. */
  url?: string;
  /** Path to a local logo asset; undefined falls back to a monogram. */
  logo?: string;
  monogram: string;
  role: string;
  /** Italicised emphasis fragment inside the role title. */
  roleEmphasis: string;
  meta: string;
  team: string;
  /** "Team" or "Practice" — label before the team name. */
  teamLabel: 'Team' | 'Practice';
  start: string;
  end: string;
  /** Compact year range for the big numeral. */
  yearStart: string;
  yearEnd: string;
  current?: boolean;
  tags: string[];
  impactMetrics?: ExperienceMetric[];
  proofChips?: string[];
  bullets: ExperienceBullet[];
  /** Canonical tech names — resolved to icons via lib/icons. */
  stack: string[];
}

export const experience: Role[] = [
  {
    id: 'independent',
    company: 'Self-Employed',
    companyShort: 'Self-Employed',
    monogram: 'AM',
    role: 'Independent AI-Native Software Engineer',
    roleEmphasis: 'AI-Native Software Engineer',
    meta: 'AI Product Engineering · Remote',
    team: 'Solo, Multi-Agent Systems',
    teamLabel: 'Practice',
    start: 'Nov 2025',
    end: 'Present',
    yearStart: '2025',
    yearEnd: 'present',
    current: true,
    tags: ['Current', 'AI', 'Agents'],
    impactMetrics: [
      {
        value: '3',
        label: '0→1 AI prototypes',
        context: 'full-stack product builds',
      },
      {
        value: 'LangGraph',
        label: 'agent workflows',
        context: 'structured outputs + orchestration',
      },
    ],
    bullets: [
      [
        text('Built '),
        strong('three 0→1 full-stack AI product prototypes'),
        text(' using '),
        strong('TypeScript, Next.js, Node.js, PostgreSQL, LangChain, and LangGraph'),
        text('; owned '),
        strong('product scope, architecture, data modeling, backend APIs, and frontend implementation'),
        text('.'),
      ],
      [
        text('Designed and built '),
        strong('AtlasGraph'),
        text(', an AI travel-planning application that captures '),
        strong('structured user preferences'),
        text(', orchestrates '),
        strong('multi-step itinerary generation'),
        text(', and supports '),
        strong('revision workflows with persisted planning context'),
        text('.'),
      ],
      [
        text('Built '),
        strong('ConceptVault'),
        text(', a '),
        strong('LangGraph-based research distillation system'),
        text(' coordinating '),
        strong('web research, content curation, concept extraction, and flashcard generation with structured outputs'),
        text('.'),
      ],
      [
        text('Built '),
        strong('SessionPilot'),
        text(', an AI developer-workflow planner that converts '),
        strong('high-level engineering goals'),
        text(' into '),
        strong('scoped work sessions, task breakdowns, and execution-ready prompts'),
        text('.'),
      ],
    ],
    stack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'LangChain', 'LangGraph', 'PostgreSQL'],
  },
  {
    id: 'forma',
    company: 'Forma Inc.',
    companyShort: 'Forma',
    url: 'https://www.joinforma.com',
    logo: '/logos/forma.png',
    monogram: 'F',
    role: 'Senior Software Engineer, Payments & Ledger',
    roleEmphasis: 'Payments & Ledger',
    meta: 'Benefits Tech · Fintech · Remote',
    team: 'FinOps',
    teamLabel: 'Team',
    start: 'Jul 2023',
    end: 'Mar 2025',
    yearStart: '2023',
    yearEnd: '2025',
    tags: ['Fintech', 'ACH', 'Ledger'],
    impactMetrics: [
      {
        value: '$40K+',
        label: 'orphaned funds recovered',
        context: 'within one week',
      },
      {
        value: '−90%',
        label: 'refund exceptions',
        context: 'refund matching + reconciliation redesign',
      },
      {
        value: 'ACH · Wire',
        label: 'fund movement',
        context: 'regulated fintech workflows',
      },
    ],
    bullets: [
      [
        text('Owned '),
        strong('backend services for ACH, wire, and internal book transfers'),
        text(' across regulated fintech products, improving '),
        strong('correctness, reconciliation, and failure handling'),
        text(' for business-critical fund-movement workflows.'),
      ],
      [
        text('Led the '),
        strong('end-to-end redesign of refund workflows'),
        text(' after uncovering production failure modes; authored the design doc, drove emergency remediation, and defined long-term architecture to prevent '),
        strong('missing, unapplied, and mismatched funds'),
        text('.'),
      ],
      [
        text('Recovered '),
        strong('$40K+ in orphaned customer funds within one week'),
        text(' by investigating '),
        strong('three refund failure scenarios'),
        text(', reconciling impacted accounts with '),
        strong('SQL/Prisma'),
        text(', and correcting '),
        strong('API/state mismatches'),
        text('.'),
      ],
      [
        text('Re-architected '),
        strong('refund matching and reconciliation logic'),
        text(', reducing '),
        strong('refund exceptions by ~90%'),
        text(' and improving '),
        strong('auditability'),
        text(' of high-risk payment flows.'),
      ],
      [
        text('Built '),
        strong('ledger and transaction APIs'),
        text(' for '),
        strong('HSA, LSA, and FSA reimbursement/payment workflows'),
        text('; optimized '),
        strong('Prisma/PostgreSQL queries'),
        text(' and expanded '),
        strong('Vitest/Jest/nock coverage'),
        text(' across critical financial paths.'),
      ],
    ],
    stack: ['TypeScript', 'Node.js', 'NestJS', 'AWS Lambda', 'PostgreSQL', 'Prisma', 'Vitest'],
  },
  {
    id: 'springbig',
    company: 'Springbig Inc.',
    companyShort: 'Springbig',
    url: 'https://www.springbig.com',
    logo: '/logos/springbig.jpg',
    monogram: 'S',
    role: 'Senior Software Engineer, Distributed Systems',
    roleEmphasis: 'Distributed Systems',
    meta: 'CRM & Marketing Automation · Boca Raton, FL',
    team: 'Microservices',
    teamLabel: 'Team',
    start: 'Nov 2019',
    end: 'Dec 2022',
    yearStart: '2019',
    yearEnd: '2022',
    tags: ['Distributed', 'Serverless', 'Event-Driven'],
    impactMetrics: [
      {
        value: '2.5M+ / day',
        label: 'Lambda + SQS jobs',
        context: 'event-driven backend throughput',
      },
      {
        value: '400K+ / day',
        label: 'real-time messages',
        context: 'Springbig messaging workload',
      },
      {
        value: 'Event-driven',
        label: 'microservice architecture',
        context: 'complex market + messaging workflows',
      },
      {
        value: '0-DLQ',
        label: 'steady state',
        context: 'CloudWatch + SNS observability',
      },
    ],
    bullets: [
      [
        text('Led migration of a '),
        strong('business-critical Rails monolith'),
        text(' to an '),
        strong('event-driven Node.js microservices architecture on AWS Lambda and SQS'),
        text(', scaling to '),
        strong('2.5M+ jobs/day and 400K+ real-time messages/day'),
        text('.'),
      ],
      [
        text('Decomposed the monolith into '),
        strong('event-driven microservices'),
        text(' decoupled via '),
        strong('SQS'),
        text(', isolating failures and supporting '),
        strong('complex messaging and market workflow architecture'),
        text('.'),
      ],
      [
        text('Tuned '),
        strong('Lambda concurrency'),
        text(' and implemented '),
        strong('parallel SQS/DynamoDB batching'),
        text(', eliminating delivery lag and reducing infrastructure costs.'),
      ],
      [
        text('Owned observability for critical services through '),
        strong('CloudWatch dashboards'),
        text(' and '),
        strong('proactive SNS alerting'),
        text(', achieving a '),
        strong('zero-DLQ steady state'),
        text('.'),
      ],
      [
        text('Implemented '),
        strong('Infrastructure as Code with AWS CDK'),
        text(' and built '),
        strong('CI/CD pipelines with CodePipeline'),
        text(', enabling '),
        strong('canary-style rollouts'),
        text(' with automated testing and approval gates.'),
      ],
    ],
    stack: ['Node.js', 'AWS Lambda', 'AWS SQS', 'AWS SNS', 'DynamoDB', 'AWS CDK', 'CloudWatch'],
  },
  {
    id: 'wickr',
    company: 'Wickr (Acquired by AWS)',
    companyShort: 'Wickr',
    url: 'https://wickr.com',
    logo: '/logos/wickr.png',
    monogram: 'W',
    role: 'Software Engineer, Secure Messaging',
    roleEmphasis: 'Secure Messaging',
    meta: 'Secure Collaboration · Encrypted Communications · New York, NY',
    team: 'Bots / Chatbots',
    teamLabel: 'Team',
    start: 'Aug 2017',
    end: 'Aug 2019',
    yearStart: '2017',
    yearEnd: '2019',
    tags: ['Secure Messaging', 'Bots', 'Acquired'],
    proofChips: [
      'Node.js chatbot services',
      'Modular bot framework',
      'Node.js ↔ C++ SDK bridge',
      'REST APIs',
      'Dockerized services',
      'Third-party API integrations',
    ],
    bullets: [
      [
        text('Built asynchronous '),
        strong('Node.js chatbot services'),
        text(' for a '),
        strong('secure messaging platform'),
        text(', integrating with '),
        strong('Google Calendar, Zendesk, Uber'),
        text(', and other third-party APIs.'),
      ],
      [
        text('Designed a '),
        strong('modular bot framework'),
        text(' that enabled internal teams to build, deploy, and manage chatbots using '),
        strong('shared primitives'),
        text(' and '),
        strong('standardized orchestration patterns'),
        text('.'),
      ],
      [
        text('Implemented a '),
        strong('Node.js native add-on for the C++ SDK'),
        text(', exposing '),
        strong('core messaging capabilities to JavaScript applications'),
        text('.'),
      ],
      [
        text('Built '),
        strong('REST APIs'),
        text(', '),
        strong('Dockerized bot services'),
        text(', and authored setup documentation to reduce onboarding friction for internal developers.'),
      ],
    ],
    stack: ['Node.js', 'JavaScript', 'C++', 'Docker', 'REST APIs'],
  },
];
