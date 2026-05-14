/* Professional experience — sourced from the résumé.
   Real dates; teams provided by Ron. */

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
  bullets: string[];
  /** Canonical tech names — resolved to icons via lib/icons. */
  stack: string[];
}

export const experience: Role[] = [
  {
    id: 'independent',
    company: 'Self-Employed',
    companyShort: 'Self-Employed',
    monogram: 'AM',
    role: 'Independent AI Product Engineer',
    roleEmphasis: 'AI Product Engineer',
    meta: 'Self-employed · Remote',
    team: 'Solo, Multi-Agent Systems',
    teamLabel: 'Practice',
    start: 'Nov 2025',
    end: 'Present',
    yearStart: '2025',
    yearEnd: 'present',
    current: true,
    tags: ['Current', 'AI', 'Agents'],
    bullets: [
      'Built three 0-to-1 full-stack AI product prototypes with TypeScript, React/Next.js, Node.js, PostgreSQL, LangChain, and LangGraph — owning scope, architecture, data modeling, APIs, and UI.',
      'Designed AtlasGraph: an AI travel-planning workflow app capturing structured preferences and orchestrating multi-step itinerary generation with persisted planning context.',
      'Built ConceptVault: a LangGraph research-distillation system coordinating web research, content curation, concept extraction, and flashcard generation with structured outputs.',
      'Built SessionPilot: an AI developer-workflow planner converting high-level goals into scoped work sessions, task breakdowns, and execution-ready prompts.',
    ],
    stack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'LangChain', 'LangGraph', 'PostgreSQL'],
  },
  {
    id: 'forma',
    company: 'Forma Inc.',
    companyShort: 'Forma',
    url: 'https://www.joinforma.com',
    logo: '/logos/forma.svg',
    monogram: 'F',
    role: 'Senior Software Engineer, Payments & Ledger',
    roleEmphasis: 'Payments & Ledger',
    meta: 'Forma · Regulated Fintech · Remote',
    team: 'FinOps',
    teamLabel: 'Team',
    start: 'Jul 2023',
    end: 'Mar 2025',
    yearStart: '2023',
    yearEnd: '2025',
    tags: ['Fintech', 'ACH', 'Ledger'],
    bullets: [
      'Owned backend services for ACH, wire, and internal book transfers across regulated fintech products; strengthened fund-movement correctness through reconciliation logic and API/state consistency.',
      'Led the refund workflow redesign after uncovering production failure modes — authored the design doc, coordinated emergency remediation, and defined the matching and reconciliation architecture.',
      'Recovered $40K+ in orphaned customer funds within one week by investigating three refund failure scenarios and reconciling impacted accounts via SQL/Prisma.',
      'Re-architected refund matching and reconciliation, reducing refund exceptions by approximately 90% and improving traceability of high-risk payment flows.',
      'Built ledger and transaction APIs for HSA, LSA, and FSA reimbursement workflows; expanded Vitest/Jest/nock coverage encoding production failure modes as regression tests.',
    ],
    stack: ['TypeScript', 'Node.js', 'NestJS', 'AWS Lambda', 'PostgreSQL', 'Prisma', 'Vitest'],
  },
  {
    id: 'springbig',
    company: 'Springbig Inc.',
    companyShort: 'Springbig',
    url: 'https://www.springbig.com',
    logo: '/logos/springbig.svg',
    monogram: 'S',
    role: 'Senior Software Engineer, Distributed Systems',
    roleEmphasis: 'Distributed Systems',
    meta: 'Springbig · Customer Marketing Platform · Boca Raton, FL',
    team: 'Microservices',
    teamLabel: 'Team',
    start: 'Nov 2019',
    end: 'Dec 2022',
    yearStart: '2019',
    yearEnd: '2022',
    tags: ['Distributed', 'Serverless', 'Event-Driven'],
    bullets: [
      'Led the migration of a business-critical Rails monolith to event-driven Node.js microservices on AWS Lambda and SQS, scaling to 2.5M+ jobs/day and 400K+ real-time messages/day.',
      'Decomposed the monolith into four single-responsibility Lambda services decoupled by SQS — isolating failures and enabling independent scaling.',
      'Tuned Lambda concurrency and implemented parallel SQS/DynamoDB batching, eliminating delivery lag and reducing infrastructure costs.',
      'Owned CloudWatch dashboards, SNS alerting, and DLQ monitoring for critical services, achieving a sustained zero-DLQ steady state.',
      'Implemented AWS CDK infrastructure and CodePipeline CI/CD with automated tests, approval gates, and canary-style rollouts.',
    ],
    stack: ['Node.js', 'AWS Lambda', 'AWS SQS', 'AWS SNS', 'DynamoDB', 'AWS CDK', 'CloudWatch'],
  },
  {
    id: 'wickr',
    company: 'Wickr (Acquired by AWS)',
    companyShort: 'Wickr',
    url: 'https://wickr.com',
    logo: '/logos/wickr.svg',
    monogram: 'W',
    role: 'Software Engineer, Secure Messaging',
    roleEmphasis: 'Secure Messaging',
    meta: 'Wickr · End-to-End Encrypted Messaging · New York, NY',
    team: 'Bots / Chatbots',
    teamLabel: 'Team',
    start: 'Aug 2017',
    end: 'Aug 2019',
    yearStart: '2017',
    yearEnd: '2019',
    tags: ['Secure Messaging', 'Bots', 'Acquired'],
    bullets: [
      'Built asynchronous Node.js chatbot services for a secure messaging platform; integrated Google Calendar, Zendesk, Uber, and other third-party APIs into chat workflows.',
      'Designed a modular bot framework with shared primitives for routing, orchestration, deployment, and management — enabling internal teams to build bots without duplicating infrastructure.',
      'Implemented a Node.js native add-on for the C++ SDK, exposing core messaging capabilities to JavaScript applications.',
      'Built REST APIs, Dockerized bot services, and authored setup documentation to reduce onboarding friction for internal developers.',
    ],
    stack: ['Node.js', 'JavaScript', 'C++', 'Docker', 'REST APIs'],
  },
];
