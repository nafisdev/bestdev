'use client';

import { useState } from 'react';
import { workspaceTools } from '@/lib/tools';
import ToolCard from './ToolCard';

export default function WorkspaceSection() {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());

  const handleToggleTool = (toolId: string) => {
    const newSelected = new Set(selectedTools);
    if (newSelected.has(toolId)) {
      newSelected.delete(toolId);
    } else {
      newSelected.add(toolId);
    }
    setSelectedTools(newSelected);
  };

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
            🚀
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Workspace Setup
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Configure your development environment
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {workspaceTools.map((tool, index) => (
          <div 
            key={tool.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ToolCard
              tool={tool}
              isSelected={selectedTools.has(tool.id)}
              onToggle={handleToggleTool}
            />
          </div>
        ))}
      </div>

      {selectedTools.size > 0 && (
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-300 dark:border-blue-700 animate-slide-in">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
              {selectedTools.size} workspace tool{selectedTools.size > 1 ? 's' : ''} configured
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
