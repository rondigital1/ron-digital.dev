export type PreviewKind = 'atlas' | 'vault' | 'pilot' | 'tooling';
export type ProjectStatus = 'live' | 'prototype' | 'building' | 'paused';

export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  name: string;
  /** Italicised emphasis fragment inside the name. */
  nameEmphasis: string;
  tag: string;
  description: string;
  preview: PreviewKind;
  /** Stylized browser-chrome URL label. */
  urlLabel: string;
  status: ProjectStatus;
  updatedAt?: string;
  links: ProjectLinks;
  /** Canonical tech names — resolved to icons via lib/icons. */
  stack: string[];
}

export const projects: Project[] = [
  {
    id: 'atlasgraph',
    name: 'AtlasGraph',
    nameEmphasis: 'Graph',
    tag: 'AI · Travel planning',
    description:
      'An AI travel-planning workflow app that captures structured preferences, orchestrates multi-step itinerary generation, and supports revision flows with persisted planning context.',
    preview: 'atlas',
    urlLabel: 'atlas-graph.vercel.app',
    status: 'live',
    links: {
      live: 'https://atlas-graph.vercel.app/',
    },
    stack: ['TypeScript', 'Next.js', 'LangGraph', 'PostgreSQL'],
  },
  {
    id: 'conceptvault',
    name: 'ConceptVault',
    nameEmphasis: 'Vault',
    tag: 'AI · Research distillation',
    description:
      'A LangGraph-based research distillation system that coordinates web research, content curation, concept extraction, and flashcard generation with structured outputs.',
    preview: 'vault',
    urlLabel: 'conceptvault.app',
    status: 'prototype',
    links: {
      github: 'https://github.com/rondigital1/concept-vault',
    },
    stack: ['TypeScript', 'Next.js', 'LangGraph', 'LangChain'],
  },
  {
    id: 'sessionpilot',
    name: 'SessionPilot',
    nameEmphasis: 'Pilot',
    tag: 'AI · Developer workflow',
    description:
      'An AI developer-workflow planner that converts high-level engineering goals into scoped work sessions, task breakdowns, acceptance criteria, and execution-ready prompts.',
    preview: 'pilot',
    urlLabel: 'sessionpilot.app',
    status: 'prototype',
    links: {
      github: 'https://github.com/rondigital1/session-pilot',
    },
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
  },
];

export const developerTools: Project[] = [
  {
    id: 'codex-engineering-skills',
    name: 'Codex Engineering Skills',
    nameEmphasis: 'Skills',
    tag: 'AI engineering · Codex workflows',
    description:
      'A versioned set of reusable Codex skills that encode repo-grounded analysis, narrow implementation paths, explicit validation, and review-risk awareness for AI-assisted software work.',
    preview: 'tooling',
    urlLabel: 'github.com/rondigital1/codex-engineering-skills',
    status: 'building',
    links: {
      github: 'https://github.com/rondigital1/codex-engineering-skills',
    },
    stack: ['Python', 'Codex', 'AI Engineering', 'Developer Tools'],
  },
];
