/* Technical skills — sourced from the résumé groupings.
   Human languages kept per Ron's instruction; values are
   placeholders until Ron confirms them. */

export interface SkillItem {
  /** Canonical name — resolved to an icon via lib/icons. */
  name: string;
  /** Proficiency / context label. */
  level: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  /** Single-letter badge. */
  badge: string;
  /** Bento weight — drives column/row span. */
  weight: 'sm' | 'md' | 'lg';
  /** Cell treatment. */
  tone: 'beige' | 'ink' | 'accent';
  /** Contextual label shown in the card header instead of a raw item count. */
  countLabel: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    badge: 'L',
    weight: 'sm',
    tone: 'beige',
    countLabel: 'Primary Toolkit',
    items: [
      { name: 'TypeScript', level: 'Primary' },
      { name: 'JavaScript', level: 'Primary' },
      { name: 'SQL', level: 'Primary' },
      { name: 'Ruby', level: 'Working' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    badge: 'B',
    weight: 'lg',
    tone: 'ink',
    countLabel: 'Production',
    items: [
      { name: 'Node.js', level: 'Primary' },
      { name: 'NestJS', level: 'Primary' },
      { name: 'Express.js', level: 'Primary' },
      { name: 'REST APIs', level: 'Primary' },
      { name: 'Webhooks', level: 'Primary' },
      { name: 'Background Jobs', level: 'Primary' },
      { name: 'Payment Workflows', level: 'Primary' },
      { name: 'Ledger / Reconciliation', level: 'Primary' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Product Engineering',
    badge: 'AI',
    weight: 'lg',
    tone: 'accent',
    countLabel: 'Daily Drivers',
    items: [
      { name: 'LangChain', level: 'Primary' },
      { name: 'LangGraph', level: 'Primary' },
      { name: 'LLM Orchestration', level: 'Primary' },
      { name: 'Tool / Function Calling', level: 'Primary' },
      { name: 'Structured Outputs', level: 'Primary' },
      { name: 'Context Design', level: 'Primary' },
      { name: 'Agentic Workflows', level: 'Primary' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Distributed Systems',
    badge: 'C',
    weight: 'lg',
    tone: 'beige',
    countLabel: 'Production',
    items: [
      { name: 'AWS Lambda', level: 'Primary' },
      { name: 'AWS SQS', level: 'Primary' },
      { name: 'AWS SNS', level: 'Primary' },
      { name: 'AWS EventBridge', level: 'Primary' },
      { name: 'API Gateway', level: 'Primary' },
      { name: 'AWS RDS', level: 'Primary' },
      { name: 'DynamoDB', level: 'Primary' },
      { name: 'AWS S3', level: 'Primary' },
      { name: 'AWS CDK', level: 'Primary' },
      { name: 'CloudFormation', level: 'Working' },
      { name: 'Event-Driven Systems', level: 'Primary' },
      { name: 'Microservices', level: 'Primary' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    badge: 'D',
    weight: 'md',
    tone: 'beige',
    countLabel: 'Working Knowledge',
    items: [
      { name: 'PostgreSQL', level: 'Primary' },
      { name: 'MySQL', level: 'Working' },
      { name: 'DynamoDB', level: 'Primary' },
      { name: 'Prisma', level: 'Primary' },
      { name: 'MongoDB', level: 'Working' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    badge: 'FE',
    weight: 'sm',
    tone: 'ink',
    countLabel: 'Daily Drivers',
    items: [
      { name: 'React', level: 'Primary' },
      { name: 'Next.js', level: 'Primary' },
    ],
  },
  {
    id: 'delivery',
    title: 'Testing, Observability & Delivery',
    badge: 'T',
    weight: 'md',
    tone: 'beige',
    countLabel: 'Production',
    items: [
      { name: 'Vitest', level: 'Primary' },
      { name: 'Jest', level: 'Primary' },
      { name: 'nock', level: 'Working' },
      { name: 'Datadog', level: 'Primary' },
      { name: 'CloudWatch', level: 'Primary' },
      { name: 'Docker', level: 'Primary' },
      { name: 'CodePipeline', level: 'Primary' },
      { name: 'CI/CD', level: 'Primary' },
    ],
  },
];

export interface HumanLanguage {
  code: string;
  name: string;
  level: string;
  /** Proficiency dots filled, out of 5. */
  dots: number;
  /** Path to the national flag SVG, revealed on hover. */
  flag: string;
}

export const humanLanguages: HumanLanguage[] = [
  { code: 'EN', name: 'English', level: 'Native', dots: 5, flag: '/flags/us.svg' },
  { code: 'HE', name: 'Hebrew', level: 'Native', dots: 5, flag: '/flags/il.svg' },
  { code: 'ES', name: 'Spanish', level: 'Professional', dots: 4, flag: '/flags/es.svg' },
  { code: 'RU', name: 'Russian', level: 'Conversational', dots: 3, flag: '/flags/ru.svg' },
];
