import type { Section } from '../../types/workflow-sop.ts';
import apiContract from './api-contract.ts';
import deliverFeature from './deliver-feature.ts';
import developmentFrontend from './development-frontend.ts';
import review from './review.ts';
import testing from './testing.ts';

export const sopData = {
  title: "Engineering Workflow & SOP",
  subtitle: "Standard Operating Procedure for Feature Delivery",
  
  // Quick Highlights / Core Principles di Overview
  quickHighlights: [
    {
      icon: "✅",
      color: "emerald",
      title: "Definition of Done",
      description: "Every stage has clear exit criteria"
    },
    {
      icon: "📋",
      color: "amber",
      title: "Single Source of Truth",
      description: "Contract, Design & Requirement drive everything"
    },
    {
      icon: "🔄",
      color: "sky",
      title: "Independent Progress",
      description: "FE & BE can work in parallel after contract approval"
    }
  ],

  sections: [
    deliverFeature,
    apiContract,
    developmentFrontend,
    review,
    testing
  ] as Section[],
};

export const navigation = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'deliver-feature', label: 'Deliver Feature', icon: '📋' },
  { id: 'api-contract', label: 'API Contract', icon: '🔗' },
  { id: 'development-frontend', label: 'Development (Frontend)', icon: '💻' },
  { id: 'review', label: 'Review', icon: '🔍' },
  { id: 'testing', label: 'Testing', icon: '🧪' },
];