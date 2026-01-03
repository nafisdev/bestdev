export interface Tool {
  id: string;
  name: string;
  description: string;
  logo?: string;
  link?: string;
  category: 'vibe-coding' | 'workspace';
}

export const vibeCodingTools: Tool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-powered code editor for rapid prototyping and development',
    category: 'vibe-coding',
    link: 'https://cursor.sh',
  },
  {
    id: 'github-spark',
    name: 'GitHub Spark',
    description: 'GitHub\'s AI coding assistant for quick ideation and prototyping',
    category: 'vibe-coding',
    link: 'https://github.com/features/spark',
  },
  {
    id: 'other-1',
    name: 'Other Tool',
    description: 'Additional vibe coding tool options',
    category: 'vibe-coding',
  },
];

export const workspaceTools: Tool[] = [
  {
    id: 'coder',
    name: 'Coder',
    description: 'Cloud-based development environments for secure workspace setup',
    category: 'workspace',
    link: 'https://coder.com',
  },
  {
    id: 'other-workspace',
    name: 'Other Workspace Tool',
    description: 'Additional workspace management tools',
    category: 'workspace',
  },
];

