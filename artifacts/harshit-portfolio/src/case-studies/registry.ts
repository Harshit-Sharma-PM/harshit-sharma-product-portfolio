import type { ComponentType } from 'react';
import { SaarthiCaseStudy } from '../App';

export type CaseStudyEntry = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  page: ComponentType;
};

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: 'saarthi-ai',
    title: 'Saarthi AI',
    category: '0 → 1 AI Product Case Study',
    summary: 'A voice-first financial companion designed to make pensions, government schemes, banking procedures and fraud awareness easier to understand for elderly Indians — without making them learn another complex app.',
    page: SaarthiCaseStudy,
  },
];