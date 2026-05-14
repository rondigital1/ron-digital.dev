/* Icon registry — maps canonical technology names to real icons.
   Brand marks come from Simple Icons (react-icons/si); AWS services
   use the AWS mark (react-icons/fa6); concepts use semantic Tabler
   icons (react-icons/tb). */
import type { ComponentType } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiRuby,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiDatadog,
  SiJest,
  SiVitest,
  SiLangchain,
  SiLanggraph,
  SiAnthropic,
  SiCplusplus,
  SiGraphql,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import {
  TbApi,
  TbWebhook,
  TbDatabase,
  TbTopologyStar3,
  TbBinaryTree,
  TbCloudComputing,
  TbStack2,
  TbRefresh,
  TbBrandSpeedtest,
  TbRouteSquare,
  TbCpu,
  TbMessages,
  TbListCheck,
  TbInfinity,
  TbCode,
} from 'react-icons/tb';

export type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;

interface IconEntry {
  Icon: IconComponent;
  /** Optional brand colour — used where a coloured chip is wanted. */
  color?: string;
}

const REGISTRY: Record<string, IconEntry> = {
  // Languages
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  SQL: { Icon: TbDatabase },
  Ruby: { Icon: SiRuby, color: '#CC342D' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },

  // Backend / frameworks
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  NestJS: { Icon: SiNestjs, color: '#E0234E' },
  'Express.js': { Icon: SiExpress },
  'REST APIs': { Icon: TbApi },
  Webhooks: { Icon: TbWebhook },
  'Background Jobs': { Icon: TbRefresh },
  'Payment Workflows': { Icon: TbRouteSquare },
  'Ledger / Reconciliation': { Icon: TbListCheck },
  GraphQL: { Icon: SiGraphql, color: '#E10098' },

  // Frontend
  React: { Icon: SiReact, color: '#61DAFB' },
  'Next.js': { Icon: SiNextdotjs },

  // AI
  LangChain: { Icon: SiLangchain, color: '#1C3C3C' },
  LangGraph: { Icon: SiLanggraph, color: '#1C3C3C' },
  'LLM Orchestration': { Icon: TbCpu },
  'Tool / Function Calling': { Icon: TbStack2 },
  'Structured Outputs': { Icon: TbCode },
  'Context Design': { Icon: TbBinaryTree },
  'Agentic Workflows': { Icon: TbRouteSquare },
  Claude: { Icon: SiAnthropic },

  // Cloud / distributed
  AWS: { Icon: FaAws, color: '#FF9900' },
  'AWS Lambda': { Icon: FaAws, color: '#FF9900' },
  'AWS SQS': { Icon: FaAws, color: '#FF9900' },
  'AWS SNS': { Icon: FaAws, color: '#FF9900' },
  'AWS EventBridge': { Icon: FaAws, color: '#FF9900' },
  'API Gateway': { Icon: FaAws, color: '#FF9900' },
  'AWS RDS': { Icon: FaAws, color: '#FF9900' },
  'AWS S3': { Icon: FaAws, color: '#FF9900' },
  'AWS CDK': { Icon: FaAws, color: '#FF9900' },
  CloudFormation: { Icon: FaAws, color: '#FF9900' },
  'Event-Driven Systems': { Icon: TbTopologyStar3 },
  Microservices: { Icon: TbTopologyStar3 },

  // Data
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  DynamoDB: { Icon: FaAws, color: '#FF9900' },
  Prisma: { Icon: SiPrisma },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },

  // Testing / observability / delivery
  Vitest: { Icon: SiVitest, color: '#6E9F18' },
  Jest: { Icon: SiJest, color: '#C21325' },
  nock: { Icon: TbMessages },
  Datadog: { Icon: SiDatadog, color: '#632CA6' },
  CloudWatch: { Icon: FaAws, color: '#FF9900' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  CodePipeline: { Icon: FaAws, color: '#FF9900' },
  'CI/CD': { Icon: TbInfinity },
};

const FALLBACK: IconEntry = { Icon: TbCloudComputing };

export function getIcon(name: string): IconComponent {
  return (REGISTRY[name] ?? FALLBACK).Icon;
}

export function getIconColor(name: string): string | undefined {
  return REGISTRY[name]?.color;
}

export { TbBrandSpeedtest };
