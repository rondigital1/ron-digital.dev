/* Education — sourced from the résumé. */

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  year: string;
}

export const education: Education[] = [
  {
    id: 'brooklyn',
    school: 'Brooklyn College, CUNY',
    degree: 'B.S.',
    field: 'Computer Science',
    year: '2018',
  },
  {
    id: 'binghamton',
    school: 'Binghamton University, SUNY',
    degree: 'B.A.',
    field: 'Mathematics',
    year: '2017',
  },
];

/** "Currently building" feed for the cover NOW module. */
export interface NowItem {
  num: string;
  name: string;
  nameEmphasis: string;
  description: string;
  stamp: string;
  projectId: string;
}

export const nowItems: NowItem[] = [
  {
    num: '01',
    name: 'AtlasGraph',
    nameEmphasis: 'Graph',
    description:
      'AI travel-planning workflow app — structured preferences, multi-step itinerary generation, persisted planning context.',
    stamp: 'Updated 2d ago',
    projectId: 'atlasgraph',
  },
  {
    num: '02',
    name: 'ConceptVault',
    nameEmphasis: 'Vault',
    description:
      'LangGraph research-distillation system — web research, concept extraction, and flashcard generation with structured outputs.',
    stamp: 'Updated 1w ago',
    projectId: 'conceptvault',
  },
  {
    num: '03',
    name: 'SessionPilot',
    nameEmphasis: 'Pilot',
    description:
      'AI developer-workflow planner — turns high-level goals into scoped sessions, task breakdowns, and execution-ready prompts.',
    stamp: 'Updated this month',
    projectId: 'sessionpilot',
  },
];
