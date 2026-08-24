import type { PracticeCategoryId } from "@/lib/asra-industry-practices";

export type PracticeEntryContent = {
  title: string;
  summary: string;
  implication: string;
};

export type PracticesBundle = {
  categories: Record<PracticeCategoryId, string>;
  entries: Record<string, PracticeEntryContent>;
};
