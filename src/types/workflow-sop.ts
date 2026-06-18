export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  owner: string;
  purpose: string;
  workflowSteps: WorkflowStep[];
  principles?: string[];
  standards?: Record<string, string[]>;
  checklists?: Record<string, string[]>;
  definitionOfDone: string[];
  severityRules?: Record<string, string[]>;
}