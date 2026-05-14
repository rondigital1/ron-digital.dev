/* Profile / identity — sourced from the résumé. */

export interface ContactLink {
  id: 'email' | 'linkedin' | 'github' | 'location';
  label: string;
  value: string;
  href: string;
}

export interface Domain {
  label: string;
  sub: string;
  /** Visual weight in the bento grid. */
  weight: 'sm' | 'md' | 'lg';
  /** Cell treatment. */
  tone: 'beige' | 'ink' | 'accent';
}

export const profile = {
  /** Display name keeps the mockup's deliberate "(Ron)" treatment. */
  fullName: 'Aaron (Ron) Mishiyev',
  firstName: 'Aaron',
  nickname: '(Ron)',
  lastName: 'Mishiyev',
  title: 'Senior Software Engineer',
  titleLong: 'Senior Software Engineer — Backend Systems, AI Product Engineering, Fintech',
  location: 'Miami, FL',
  yearsExperience: 8,
  since: 2017,
  tagline:
    'A senior software engineer building backend infrastructure, distributed systems, and AI-native products. Eight years in practice. Open to senior roles.',
  summary:
    'Senior Software Engineer with 8+ years building backend and distributed systems across fintech, secure messaging, and AI product work. Led a Rails-to-Node.js/AWS serverless migration processing 2.5M+ jobs/day; owned regulated ACH, wire, ledger, and refund systems; recovered $40K+ through payment reconciliation and cut refund exceptions ~90%. Currently building full-stack AI products with TypeScript, React/Next.js, Node.js, PostgreSQL, LangChain, and LangGraph.',
  resumePdf: '/Ron_Mishiyev_Resume.pdf',
} as const;

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'ronmshv@gmail.com',
    href: 'mailto:ronmshv@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/ronmishiyev',
    href: 'https://linkedin.com/in/ronmishiyev',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'rondigital1',
    href: 'https://github.com/rondigital1',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Miami, FL · USA',
    href: 'https://maps.google.com/?q=Miami,FL',
  },
];

/** Domains shown in the cover bento grid. */
export const domains: Domain[] = [
  { label: 'Backend Systems', sub: 'APIs, services, background jobs', weight: 'lg', tone: 'ink' },
  { label: 'Distributed Systems', sub: 'Queues, retries, failure modes', weight: 'md', tone: 'beige' },
  { label: 'Payments & Ledger', sub: 'Reconciliation, refunds, money movement', weight: 'lg', tone: 'beige' },
  { label: 'AI Product Engineering', sub: 'Agents, structured outputs, orchestration', weight: 'md', tone: 'accent' },
  { label: 'Event-Driven Architecture', sub: 'Lambda, SQS, SNS, EventBridge', weight: 'md', tone: 'beige' },
  { label: 'Secure Messaging', sub: 'Real-time systems, delivery, reliability', weight: 'md', tone: 'ink' },
];
