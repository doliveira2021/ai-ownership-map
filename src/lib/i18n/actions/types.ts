import type { TechnologyCategoryId } from "@/lib/asra-technology-catalog";

export type ActionPackContent = {
  whyItMatters: string;
  tasks: Record<string, string>;
  kpis: Record<string, string>;
  dependencies: string[];
};

export type TechnologyContent = {
  categories: Record<TechnologyCategoryId, string>;
  capabilities: Record<string, { description: string; notes: string }>;
};

export type ActionsBundle = {
  actionPacks: Record<string, ActionPackContent>;
  technology: TechnologyContent;
};
