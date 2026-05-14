/* Personal projects — sourced from the résumé.
   Three 0-to-1 full-stack AI product prototypes.
   `url` values are placeholders until Ron provides real links. */

export type PreviewKind = 'atlas' | 'vault' | 'pilot';

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
  status: string;
  /** Real outbound link — placeholder until provided. */
  url: string;
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
    url: 'https://atlas-graph.vercel.app/',
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
    url: '#',
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
    url: '#',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
  },
];
